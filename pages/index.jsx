/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import { Button } from '../components/Button'
import { CardProject } from '../components/CardProject'
import { Title } from '../components/Title'
import { PROJECTS } from '../config'
import { Layout } from '../layout'
import style from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter()
  const handleDownloadCSV = () => {
    console.log('descargare un CSV')
  }

  return (
    <Layout title='DltFred' description='Pagina de inicio de mi portafolio'>
      <header className={style.header}>
        <div className={style.copy}>
          <p>
            <span className={style.hello}>Hello</span>
            <span className={style.name}>I&apos;m DltFred</span>
            full stack developer
          </p>
          <Button
            onClick={() => router.push('/contact')}
            type={'orange-outline'}
          >Contact me</Button>
        </div>
        <img className={style.image} src="/profile.png" alt="profile" height={200} width={200} />
      </header>
      <main>
        <section className={style.aboutMe}>
          <picture className={style.pictureImg}>
            <img src="/logo2.jpeg" alt="profile" />
          </picture>
          <article>
            <Title>About me</Title>
            <p>
              I&apos;m a full stack developer with a passion for creating beautiful and functional web applications.
              I have a background in business and a passion for learning new technologies.
              I have a strong background in front-end development and I am currently learning back-end development.
              I am currently working on a project called
            </p>
            <div className={style.buttonContainer}>
              <Button
                onClick={handleDownloadCSV}
                type={'orange-fill'}>Download CSV</Button>
            </div>
          </article>
        </section>
        <section className={style.projects}>
          <Title>Projects</Title>
          <div className={style.projectsContainer}>
            {
              PROJECTS.map(
                project => (<CardProject
                  key={project.id}
                  name={project.name}
                  description={project.description}
                  image={project.image}
                  link={project.url}
                  color={project.color}
                />)
              )
            }
          </div>
        </section>
      </main>
    </Layout>
  )
}
