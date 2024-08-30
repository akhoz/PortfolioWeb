import PropTypes from 'prop-types';

function ProjectCard(props) {
  return (
    <a className="flex flex-col items-center justify-center w-10/12 h-full bg-mySecondary rounded-xl space-y-5"
      href={props.repository}
      target='_blank'>
      <div className="flex items-center justify-center text-white text-4xl bg-mySecondary border-4 border-myAquamarine rounded-full w-32 h-32 overflow-hidden mt-5">
        {props.icon}
      </div>
      <div className="flex flex-col items-center justify-center w-10/12">
        <h1 className="text-xl text-white">
          {props.title}
        </h1>
        <p className="text-myGray text-justify">
          {props.description}
        </p>
      </div>
      <div className="flex flex-col items-start justify-center w-10/12 pb-5">
        <p className='text-white'>
          Collabolators:&nbsp;
          {Object.entries(props.collabolators).map(([name, link]) => (
            <a key={name} href={link} target="_blank" className="text-myAquamarine hover:underline mr-2">
              {name}
            </a>
          ))}
        </p>
        <p className='flex text-white'>
          Technologies:&nbsp;
          <span className="flex items-center space-x-2">
            {props.technologies.map((Icon, index) => (
              <div key={index} className="text-myAquamarine">
                <Icon />
              </div>
            ))}
          </span>
        </p>
      </div>
    </a>
  );
}

ProjectCard.propTypes = {
  repository: PropTypes.string,
  icon: PropTypes.element,
  title: PropTypes.string,
  description: PropTypes.string,
  collabolators: PropTypes.objectOf(PropTypes.string),
  technologies: PropTypes.arrayOf(PropTypes.element)
}

export default ProjectCard;
