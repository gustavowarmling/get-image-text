import React, { Dispatch, SetStateAction, useState } from "react";

import { Wrapper, FileInput, FileName } from './styles';

type uploadButtonProps = {
  setImageToDisplay: Dispatch<SetStateAction<string>>;
};

export function UploadButton({ setImageToDisplay }: uploadButtonProps) {
  const [fileName, setFileName] = useState('Nenhum arquivo selecionado')

  function handleSelectedFile(files: FileList) {
    if(!files) {
      alert('Arquivo não selecionado');
    };

    const file = files[0];
    const fileUrl = window.URL.createObjectURL(file);

    setFileName(file.name);
    setImageToDisplay(fileUrl);
  }

  return(
    <Wrapper>
      <FileInput>
        Escolher Arquivo
        <input 
          type="file" 
          onChange={
            (e) => handleSelectedFile(
              e.target.files as FileList
            )
          }
        />
      </FileInput>

      <FileName>{fileName}</FileName>
    </Wrapper>
  )
}