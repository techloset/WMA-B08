import React from 'react'
import BlogCard from '../../components/cards/BlogCard'

export default function Blog() {
  const blogPosts = [
    {
      img: require("../../assets/images/blog-1.jpg"),
      category: "Design",
      date: "Fab 23, 2022",
      title: "Design conferences in 2022",
      text: "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo."
    },
    {
      img: require("../../assets/images/blog-2.jpg"),
      category: "Design",
      date: "Fab 23, 2022",
      title: "Best fonts every designer",
      text: "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi."
    },
    {
      img:require("../../assets/images/blog-3.jpg"),
      category: "Design",
      date: "Fab 23, 2022",
      title: "Design digest #80",
      text: "Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit."
    },
    {
      img:require("../../assets/images/blog-4.jpg"),
      category: "Design",
      date: "Fab 23, 2022",
      title: "UI interactions of the week",
      text: "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi."
    },
    {
      img:require("../../assets/images/blog-5.jpg"),
      category: "Design",
      date: "Fab 23, 2022",
      title: "The forgotten art of spacing",
      text: "Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      img:require("../../assets/images/blog-6.jpg"),
      category: "Design",
      date: "Fab 23, 2022",
      title: "Design digest #79",
      text: "Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum."
    }
  ]
  return (
    <article className="blog active" data-page="blog">

        <header>
          <h2 className="h2 article-title">Blog</h2>
        </header>

        <section className="blog-posts">

          <ul className="blog-posts-list">

            {blogPosts.map((post, index)=>{
              return <BlogCard key={index} post={post} />
            })}
          </ul>

        </section>

      </article>
  )
}
