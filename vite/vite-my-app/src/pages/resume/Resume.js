import React from 'react'
import ResumeSection from '../../components/resume-section/ResumeSection'
import LoadingBar from '../../components/loading-bar/LoadingBar'

export default function Resume() {
  const resumeSections = [{
    title: 'Education',
    items: [{
      title: 'University school of the arts',
      date: '2007 — 2008',
      description: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
    }, {
      title: 'New york academy of art',
      date: '2006 — 2007',
      description: 'Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..'
    }, {
      title: 'High school of art and design',
      date: '2002 — 2004',
      description: 'Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.'
    }]
  }, {
    title: 'Experience',
    items: [{
      title: 'Creative director',
      date: '2015 — Present',
      description: 'Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.'
    }, {
      title: 'Art director',
      date: '2013 — 2015',
      description: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
    }, {
      title: 'Web designer',
      date: '2010 — 2013',
      description: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
    }]
  }]

  const skills = [{
    title: 'Web design',
    value: 80
  }, {
    title: 'Graphic design',
    value: 70
  }, {
    title: 'Branding',
    value: 90
  }, {
    title: 'WordPress',
    value: 50
  }]
  return (
    <article className="resume active" data-page="resume" >

    <header>
      <h2 className="h2 article-title">Resume</h2>
    </header>
    {
      resumeSections?.map((section, index)=>{
        return (
          <ResumeSection key={index} title={section.title} items={section.items} />
        )
      })
    }

    <section className="skill">

      <h3 className="h3 skills-title">My skills</h3>

      <ul className="skills-list content-card">

       {skills.map((skill, index)=>{
        return <LoadingBar key={index} skill={skill} />
       })}

      </ul>

    </section>

  </article>
  )
}
