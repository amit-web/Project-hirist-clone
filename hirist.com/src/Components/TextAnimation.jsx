import TypeAnimation from 'react-type-animation';

export const ExampleComponent = () => {
    return (
        <TypeAnimation
            cursor={false}
            sequence={['Machine Learning', 1000, 'iOS Developer', 1000, 'AWS Engineer', 1000, 'Java Developer', 1000, 'Web Developer', 1000, 'Golan Developer', 1000, 'Python Developer', 1000, 'ReactJs Developer', 1000]}
            wrapper="span"
            repeat={Infinity}
        />
    );
};