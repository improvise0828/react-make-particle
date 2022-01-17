import "./particle.scss";

const MAX_PARTICLE = 50;

const Particle = ({ pText = "hello world" }) => {
  const createParticle = (num) => {
    const buffer = [];
    for (let i = 0; i < num; i++) {
      buffer.push(<div key={`particle-${i}`} className="particle"></div>);
    }
    return buffer;
  };
  return <div className="spreader">{createParticle(MAX_PARTICLE)}</div>;
};

export default Particle;
