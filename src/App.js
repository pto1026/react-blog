import React, {useEffect} from 'react'
import {Link} from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
    useEffect(() => {
        document.title = 'Squad Blog | The Official Squad Resource'
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
                                The Squad Blog
                            </h1>
                            <h6 className='display-6 mb-2'>
                                By: Patrick Sparks
                            </h6>
                            <small>Date: February 26, 2022</small>

                            <section className='mt-5'>
                                <p className='mb-3'>
                                    Welcome to the best online source of all things <em>Squad</em>.  Here you will find
                                    the best online tutorials, thought experiments, stories, tips, techniques, and strategies
                                    to nurture your development into the best <em>Squad player</em> you can be.  Now before
                                    we go any further lets get to know each other a bit.  Head on over to my <em><Link to='/bio' className='badge bg-secondary text-white'>biography</Link></em>
                                    to find out more about me.
                                </p>

                                <p className='mb-3'>
                                    If you are new here I would point you towards the <em><Link to='/posts/introduction' className='badge text-white bg-info'>introduction</Link></em>
                                    where I introduce you to some of the basics you need to orientate yourself in game.
                                    Squad is one of those games that will feel like you are in over your head the first time you play
                                    from squad communications, to battle status, primary objectives -- it's even hard to tell if the guys you are seeing are on your team or not.
                                    Well don't worry I'm going to explain all that and more in the above information post.

                                </p>

                                <p className='mb-3'>
                                    Or maybe you want a rundown of some of the best <em><Link to='/posts/strategies' className='badge text-white bg-warning'>strategies.</Link></em>{'  '}
                                    Here we will outline what I call the basic strategy as well as some variations of that.
                                </p>

                                <p>
                                    Or maybe you are after something specific, like how to fly a <em><Link to='/posts/helicopter' className='badge text-white bg-info'>helicopter</Link></em>, or how to .
                                </p>
                            </section>
                        </article>
                    </main>
                </div>
            </section>
        </div>
        </div>
    )
}

export default App
