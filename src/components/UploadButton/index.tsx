import React, { Dispatch, SetStateAction, useState } from 'react';

import { Wrapper, FileInput, FileName } from './styles';

type uploadButtonProps = {
  setImageToDisplay: Dispatch<SetStateAction<string>>;
};

export function UploadButton({ setImageToDisplay }: uploadButtonProps) {
  const [fileName, setFileName] = useState('No file Selected');

  function handleSelectedFile(files: FileList) {
    if (!files) {
      alert('File not selected');
    }

    const file = files[0];
    const fileUrl = window.URL.createObjectURL(file);

    setFileName(file.name);
    setImageToDisplay(fileUrl);
  }

  return (
    <Wrapper>
      <FileInput>
        Choose File{' '}
        <input
          type="file"
          onChange={e => handleSelectedFile(e.target.files as FileList)}
        />
      </FileInput>

      <FileName>{fileName}</FileName>
    </Wrapper>
  );
}
