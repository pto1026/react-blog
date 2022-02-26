import React, {useEffect} from 'react'
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";

const Bio = () => {
  useEffect(() => {
    document.title = 'Squad Blog | Author Biography'
  })
  return (
      <div className='container-fluid'>
        <Navbar />
        <div className='container'>
          <section className='row'>
            <div className='col-md-8 mt-5'>
              <main>
                <article>
                  <h1 className='display-1 mb-3'>
                    About Me
                  </h1>

                  <section className='mt-5'>
                    <p className='mb-3'>
                      Well hello!  All you really need to know about me is I am an avid <em>Squad enthusiast</em> and
                      I have created this website to teach you how to play Squad.  Besides being a <em>Squad player</em>,
                      I am working towards becoming a professional full-stack developer.  Thus this project was born, to
                      spread my knowledge of Squad while enforcing my programming practice.
                    </p>

                    <p className='mb-3'>
                      This is quite an early version of the final vision, stay tuned as more features will be added <strong>constantly</strong>.
                    </p>

                    <div className='row'>
                      <div className='col-md-6'>
                        <Link to='/' className='btn btn-outline-secondary'>Go Back</Link>
                      </div>
                      <div className='col'>
                        <Link to='/posts/introduction' className='btn btn-primary text-white'>Introduction</Link>
                      </div>
                    </div>
                  </section>
                </article>
              </main>
            </div>
          </section>
        </div>
      </div>
  )
}

export default Bio
