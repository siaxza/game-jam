interface TextComponentProps {
    title: string;
  }
  
const TextComponent = ({
  title
}:TextComponentProps) => {
  return (
    <h1>{title}</h1>
  );
};

export default TextComponent;
