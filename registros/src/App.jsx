// src/App.jsx
import './styles/App.css'
import ProjectCard from './components/ProjectCard'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Web Fundamentals</h1>
        <p>Meu Portfólio Profissional em React</p>
      </header>

      <main>
        <h2>Meus Projetos</h2>
        <div className="container-projetos">
          {/* Aqui estamos usando o "molde" 3 vezes como pede o exercício */}
          <ProjectCard 
            titulo="Web-Fundamentals" 
            stack="Git & GitHub" 
            descricao="Repositório de estudos de versionamento." 
          />
          <ProjectCard 
            titulo="Calculadora JS" 
            stack="JavaScript" 
            descricao="Projeto de lógica de programação." 
          />
          <ProjectCard 
            titulo="Landing Page" 
            stack="HTML/CSS" 
            descricao="Página de vendas responsiva." 
          />
        </div>
      </main>

      <footer>
        <p>&copy; 2026 - Desenvolvido por Alecsandro (Hora do TI)</p>
      </footer>
    </div>
  )
}

export default App