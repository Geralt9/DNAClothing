import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Gallery from './pages/Gallery.jsx'
import QA from './pages/QA.jsx'
import News from './pages/News.jsx'
import Post from './pages/Post.jsx'
import Contact from './pages/Contact.jsx'
import Quote from './pages/Quote.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="qa" element={<QA />} />
        <Route path="news" element={<News />} />
        <Route path="news/:slug" element={<Post />} />
        <Route path="contact" element={<Contact />} />
        <Route path="quote" element={<Quote />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
