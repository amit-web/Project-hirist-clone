import TypeAnimation from 'react-type-animation';

export const ExampleComponent = () => {
    return (
        <TypeAnimation
            cursor={false}
            sequence={['Machine Learning', 3000, 'iOS Developer', 3000, 'AWS Engineer', 3000, 'Java Developer', 3000, 'Web Developer', 3000, 'Golan Developer', 3000, 'Python Developer', 3000, 'ReactJs Developer', 3000]}
            wrapper="span"
            repeat={Infinity}
        />
    );
};