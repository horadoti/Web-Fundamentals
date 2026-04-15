// src/components/ProjectCard.jsx
function ProjectCard({ titulo, stack, descricao }) {
  return (
    <div style={{ border: '1px solid #646cff', padding: '15px', borderRadius: '8px', width: '250px' }}>
      <h3>{titulo}</h3>
      <p><strong>Stack:</strong> {stack}</p>
      <p>{descricao}</p>
    </div>
  );
}

export default ProjectCard;