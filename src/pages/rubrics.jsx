import device, { TextWrapper } from "../generalStyles";

const Rubrics = () => {
  return (
    <div>
      <TextWrapper>
        <h3>RUBRICS</h3>
        <br />
        <p>
          RUBRICS provides solutions incluiding art direction, cinematography,
          3D design and animation, concept creation, VFX and illustration. It
          focus and specialize on product visualization, 3D models, simulations
          and interactive experiences for media platforms, film and live events.
        </p>
        <br />
        <p>
          My task for this project included digital art direction, UX/UI design
          with responsive interactive prototyping for the wireframe and design.
        </p>
      </TextWrapper>

      <div>
        <div>
          <Img src={HomePage} alt="desktop" />
        </div>
      </div>
    </div>
  );
};

export default Rubrics;
