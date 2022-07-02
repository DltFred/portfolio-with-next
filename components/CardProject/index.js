/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import style from './index.module.css'
export const CardProject = ({ name, link, image, description, color }) => {
  return (
    <div
      className={style.cardProject}
      style={{ '--backgroundImage': `url(${image})` }}
    >
      <div className={style.cardContent}
        style={{ backgroundColor: color }}
      >
        <h2>{name}</h2>
        <p>{description}</p>
        <Link href={link}><a target={'_blank'}>Click for view</a></Link>
      </div>
    </div>
  )
}
