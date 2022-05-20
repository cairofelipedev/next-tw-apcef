import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import CarouselHome from '@/components/CarouselHome'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Image from 'next/image'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <CarouselHome />
      <div className="container mx-auto md:grid md:grid-cols-3">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pt-2 pb-2 md:space-y-2">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
              Notícias APCEF/PI
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              {siteMetadata.description}
            </p>
          </div>
          <section className="body-font">
            <div className="container mx-auto px-5 py-10">
              <div className="-m-4 flex flex-wrap">
                <div className="p-4">
                  <div className="h-full overflow-hidden rounded-xl shadow-md shadow-gray-300">
                    <img
                      className="duration-400 w-full scale-110 object-cover object-center transition-all hover:scale-100 md:h-36 lg:h-48"
                      src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
                        CATEGORY-1
                      </h2>
                      <h1 className="title-font mb-3 text-lg font-medium">The Catalyzer</h1>
                      <p className="mb-3 leading-relaxed">
                        Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing
                        tousled waistcoat.
                      </p>
                      <div className="flex flex-wrap items-center ">
                        <button className="shadow-cla-blue rounded-lg bg-gradient-to-r from-cyan-400 to-blue-400  px-4 py-1 drop-shadow-md hover:scale-105">
                          Learn more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="divide-y divide-gray-200 pr-2 dark:divide-gray-700">
          <div className="space-y-2 pt-2 pb-2 md:space-y-2">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
              Notícias FENAE
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              {siteMetadata.description}
            </p>
          </div>
          <section className="body-font">
            <div className="container mx-auto px-5 py-10">
              <div className="-m-4 flex flex-wrap">
                <div className="p-4">
                  <div className="h-full overflow-hidden rounded-xl shadow-md shadow-gray-300">
                    <img
                      className="duration-400 w-full scale-110 object-cover object-center transition-all hover:scale-100 md:h-36 lg:h-48"
                      src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
                        CATEGORY-1
                      </h2>
                      <h1 className="title-font mb-3 text-lg font-medium">The Catalyzer</h1>
                      <p className="mb-3 leading-relaxed">
                        Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing
                        tousled waistcoat.
                      </p>
                      <div className="flex flex-wrap items-center ">
                        <button className="shadow-cla-blue rounded-lg bg-gradient-to-r from-cyan-400 to-blue-400  px-4 py-1 drop-shadow-md hover:scale-105">
                          Learn more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <img
            className="aspect-video w-96 rounded-2xl object-cover object-center pb-2"
            src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <div className="flex justify-center">
            <button className="shadow-cla-blue rounded-lg bg-gradient-to-r from-cyan-400 to-blue-400  px-4 py-1 drop-shadow-md hover:scale-105">
              Learn more
            </button>
          </div>
          <img
            className="aspect-video w-96 rounded-2xl object-cover object-center"
            src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <div className="flex justify-center">
            <button className="shadow-cla-blue rounded-lg bg-gradient-to-r from-cyan-400 to-blue-400  px-4 py-1 drop-shadow-md hover:scale-105">
              Learn more
            </button>
          </div>
        </div>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      <div className="flex items-center justify-center">
        <div className="grid max-w-2xl grid-cols-6 gap-x-4 gap-y-1">
          <div className="col-span-full mb-3">
            <p className="text-xl text-gray-800"> Today's popular searches </p>
          </div>
          <div className="col-span-2">
            <a href="">
              <img
                src="https://picsum.photos/seed/1/2000/1000"
                className="rounded-xl brightness-75"
              />
            </a>
            <p className="-translate-y-6 translate-x-3 text-xs font-semibold text-white sm:-translate-y-8 sm:text-base">
              {' '}
              thick soup{' '}
            </p>
          </div>
          <div className="col-span-2">
            <a href="">
              <img
                src="https://picsum.photos/seed/2/2000/1000"
                className="rounded-xl brightness-75"
              />
            </a>
            <p className="-translate-y-6 translate-x-3 text-xs font-semibold text-white sm:-translate-y-8 sm:text-base">
              {' '}
              egg{' '}
            </p>
          </div>
          <div className="col-span-2">
            <a href="">
              <img
                src="https://picsum.photos/seed/3/2000/1000"
                className="rounded-xl brightness-75"
              />
            </a>
            <p className="-translate-y-6 translate-x-3 text-xs font-semibold text-white sm:-translate-y-8 sm:text-base">
              {' '}
              french toast{' '}
            </p>
          </div>
          <div className="col-span-2">
            <a href="">
              <img
                src="https://picsum.photos/seed/4/2000/1000"
                className="rounded-xl brightness-75"
              />
            </a>
            <p className="-translate-y-6 translate-x-3 text-xs font-semibold text-white sm:-translate-y-8 sm:text-base">
              {' '}
              bread{' '}
            </p>
          </div>
          <div className="col-span-2">
            <a href="">
              <img
                src="https://picsum.photos/seed/5/2000/1000"
                className="rounded-xl brightness-75"
              />
            </a>
            <p className="-translate-y-6 translate-x-3 text-xs font-semibold text-white sm:-translate-y-8 sm:text-base">
              {' '}
              pasta{' '}
            </p>
          </div>
        </div>
      </div>
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
