import { useRouter } from 'next/router'
import { API_URL } from '@/config/index'

export default function SingleNews() {
  const router = useRouter()
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/blog/${slug}`)
  const singleNews = await res.json()
  return {
    props: {
      news: singleNews[0],
    },
  }
}
