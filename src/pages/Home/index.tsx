import React, { useEffect, useState } from 'react';
import { createWorker } from 'tesseract.js';

import { Logo } from '../../components/Logo';
import { UploadButton } from '../../components/UploadButton';
import { Loading } from '../../components/Loading';

import { Wrapper, Content, Image, ActionsWrapper, LoadingWrapper } from './styles';
import svgdraw from '../../assets/svgdraw.svg';

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const [imageToDisplay, setImageToDisplay] = useState('');
  const [imageText, setImageText] = useState('');

  const worker = createWorker({
    logger: m => console.log(m),
  });

  const doOCR = async () => {
    setImageText(' ');
    setLoading(true);

    await worker.load();
    await worker.loadLanguage('por');
    await worker.initialize('por');
    const { data: { text } } = await worker.recognize(imageToDisplay);
    setImageText(text);
    setLoading(false);
  };

  useEffect(() => {
    if(imageToDisplay) {
      doOCR();
    }
  }, [imageToDisplay])

  return(
    <Wrapper>
      <Logo customStyle={{marginTop: '5rem'}}/>

      <Content>
        <Image 
          src={imageToDisplay ? imageToDisplay : svgdraw} 
          alt={imageToDisplay ? 'Menina com seus arquivos' : 'Imagem escolhida'} 
        />

        <ActionsWrapper>
          <UploadButton setImageToDisplay={setImageToDisplay}/>

          <textarea readOnly placeholder='Envie uma imagem para ler seu texto!' value={imageText} />

          {loading && (
            <LoadingWrapper>
              <Loading />
            </LoadingWrapper>
          )}
        </ActionsWrapper>
      </Content>
    </Wrapper>
  );
};