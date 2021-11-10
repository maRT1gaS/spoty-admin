export const setImagePreview = (
  file: File,
  setImage: React.Dispatch<React.SetStateAction<string>>
) => {
  const FReader: FileReader = new FileReader();
  FReader.onload = () => {
    if (FReader.result) {
      setImage(String(FReader.result));
    }
  };
  FReader.readAsDataURL(file);
};
