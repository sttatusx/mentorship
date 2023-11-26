'use client';

import clsx from 'clsx';
import { useState } from 'react';
import styles from './page.module.scss'

enum ExpertiseId {
  PRODUCT,
  FRONTEND,
  BACKEND
}

const mentors = [
  {
    id: 0,
    company: "باسلام",
    name: "یاسین سیلاوی",
    expertiseId:ExpertiseId.FRONTEND, 
    expertise: "توسعه دهنده فرانت‌اند",
    photo: "https://picsum.photos/250/250",
    contacts: {
      linkedin: "ysilavi",
    },
  },
  {
    id: 1,
    company: "باسلام",
    name: "یاسین سیلاوی",
    expertiseId:ExpertiseId.FRONTEND, 
    expertise: "توسعه دهنده فرانت‌اند",
    photo: "https://picsum.photos/250/250",
    contacts: {
      linkedin: "ysilavi",
    },
  },
  {
    id: 2,
    company: "باسلام",
    name: "یاسین سیلاوی",
    expertise: "مدیر محصول",
    expertiseId:ExpertiseId.PRODUCT, 
    photo: "https://picsum.photos/250/250",
    contacts: {
      linkedin: "ysilavi",
    },
  },
  {
    id: 3,
    company: "باسلام",
    name: "یاسین سیلاوی",
    expertiseId:ExpertiseId.BACKEND, 
    expertise: "توسعه دهنده بک‌اند",
    photo: "https://picsum.photos/250/250",
    contacts: {
      linkedin: "ysilavi",
    },
  },
  {
    id: 4,
    company: "باسلام",
    name: "یاسین سیلاوی",
    expertiseId:ExpertiseId.FRONTEND, 
    expertise: "توسعه دهنده فرانت‌اند",
    photo: "https://picsum.photos/250/250",
    contacts: {
      linkedin: "ysilavi",
    },
  },
  {
    id: 5,
    company: "باسلام",
    name: "یاسین سیلاوی",
    expertiseId:ExpertiseId.FRONTEND, 
    expertise: "توسعه دهنده فرانت‌اند",
    photo: "https://picsum.photos/250/250",
    contacts: {
      linkedin: "ysilavi",
    },
  },
  {
    id: 6,
    company: "باسلام",
    name: "یاسین سیلاوی",
    expertiseId:ExpertiseId.FRONTEND, 
    expertise: "توسعه دهنده فرانت‌اند",
    photo: "https://picsum.photos/250/250",
    contacts: {
      linkedin: "ysilavi",
    },
  },
];

export default function Home() {
  const [mentorCards, setMentorCards] = useState(mentors)

  const filterMentorCards = (expertiseId?: number) => {
    if (typeof expertiseId !== 'number') {
      setMentorCards(mentors)
      return
    }

    const cards = mentors.filter((card) => card.expertiseId === expertiseId)
    setMentorCards(cards)
  }

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.logo}>منتورشیپ!‍</h1>

        <nav className={clsx(styles.tabs, styles.header__tabs)}>
          <ul className={styles.tabs__list}>
            <li className={styles['tabs__list-item']}>
              <button className={styles['tabs__list-button']} onClick={() => filterMentorCards()}>همه</button>
            </li>

            <li className={styles['tabs__list-item']}>
              <button className={styles['tabs__list-button']} onClick={() => filterMentorCards(ExpertiseId.PRODUCT)}>پروداکت</button>
            </li>
            
            <li className={styles['tabs__list-item']}>
              <button className={styles['tabs__list-button']} onClick={() => filterMentorCards(ExpertiseId.FRONTEND)}>فرانت‌اند</button>
            </li>

            <li className={styles['tabs__list-item']}>
              <button className={styles['tabs__list-button']} onClick={() => filterMentorCards(ExpertiseId.BACKEND)}>بک‌اند</button>
            </li>
          </ul>
        </nav>
      </header>
      
      <section className={styles['mentor-cards']}>
        {mentorCards.map((mentor) => (
            <div key={mentor.id} className={styles['mentor-card']}>
              <div className={styles['mentor-card__image-box']}>
                <img src={mentor.photo} alt={mentor.name} className={styles['mentor-card__image']} />
              </div>

              <span className={styles['mentor-card__name']}>{mentor.name}</span>
              <span className={styles['mentor-card__expertise']}>{`${mentor.expertise} (${mentor.company})`}</span>

              <a
                href={`https://www.linkedin.com/in/${mentor.contacts.linkedin}/`}
                className={styles['mentor-card__contact']}
              >
                لینکدین
              </a>
            </div>
          ))}
      </section>
    </main>
  )
}
