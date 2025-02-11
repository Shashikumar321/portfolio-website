import { useMediaQuery } from 'react-responsive';

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;

  const isLargeScreen = useMediaQuery({ query: '(min-width: 768px)' });

  const arrowStyle = {
    ...style,
    display: 'block',
    background: 'black',
    right: isLargeScreen ? '-10px' : '25px',
  };


  return (
    <div
      className={className}
      style={arrowStyle}
      onClick={onClick}
    />
  );
};

export default SampleNextArrow;
