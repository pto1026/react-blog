import React, {useEffect} from 'react'
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";

const Introduction = () => {
    useEffect(() => {
        document.title = 'Squad Blog | Introduction to Fundamental Squad'
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
                                    Introduction to the Fundamentals of Squad
                                </h1>
                                <h6 className='display-6 mb-2'>
                                    By: Patrick Sparks
                                </h6>
                                <small className='text-muted'>Date: February 26, 2022</small>

                                <section className='mt-5'>
                                    <p className='mb-3'>
                                        If you have tried the game and felt you were utterly lost, and time after time have found yourself
                                        dying to enemies you cannot see, becoming frustrated with a lack of communication or truly having no idea
                                        what it is you are doing, then you are part of the majority.  It is the complex game.  But if I have
                                        just one goal it is to make it just a little bit less complicated for you.
                                    </p>

                                    <p className='mb-5'>
                                        Let's dive in.
                                    </p>

                                    <h4 className='mb-3'>
                                        Getting your head on straight
                                    </h4>
                                    <p className='mb-3'>
                                        First thing to do when you spawn is always the same.  Pull up your map,  I use `Caps Lock`,
                                        but you can check your settings and use whatever you feel is best.  The truth is you should be
                                        running around with your <em>map open</em> at least 50% of the time. And I'll show you why.
                                    </p>

                                    {/*<img src={squadMap.jpg} className='mb-3' alt="an image showing the in game squad map, specifically enemy markers are visible to" width={500} height={500} style={{ objectFit: "cover" }} />*/}

                                    <p className='mb-3'>
                                        So the map let's us see marker's and other players, that's cool.  Hell yeah it is!  For instance a general
                                        rule of thumb to find the fight is: <em>go to where people are dying</em>.  As a friendly dies
                                        their player icon goes from blue/green to a faded variation.  So let's put together what we are witnessing,
                                        we are watching friendly teammates die, therefore enemies have killed them, so the enemies
                                        are close to our friendlies.  More than that we know the enemies are looking at our friendlies, maybe even
                                        pushing their position.  All we know for sure is the general area where we witnessed friendlies go down is not safe.
                                        Now if we are looking for a fight, I'd say we have found it.  Now you can confidently march yourself towards the enemies.
                                    </p>

                                    <p className='mb-3'>
                                        But are you ready for a fight? Let's slow down.  You only just figured out how to `Go North`, lets
                                        hone some of our skills before we take our gun and march off to war.  Do you even know what the <em>objective of a game</em>{' '}
                                        of Squad is?  Well let me tell you.
                                    </p>

                                    <p className='mb-3'>
                                        In Squad we play for tickets.  Every time a player dies on your team you lose a ticket.  Every vehicle that's destroyed,
                                        that's more tickets, same for every point lost, radio lost, and if the enemies hold the majority of the points, you 'bleed' tickets.
                                        So to win you have to deplete the enemies tickets.  That's the objective.  However you can't see how many ticket's the enemy team has.
                                        So all you can do is 'play for tickets'.  This means conserving tickets and striving to put your team in a superior position ticket wise.

                                    </p>

                                    <p className='mb-3'>
                                        And here's a big secret for you.  Squad may be 50 vs 50, but due to the dynamic created by <em>squad leaders</em>,
                                        the entire match can be swayed, won or lost by one individual.  I will explain how this is possible, but keep this in mind:
                                        it doesn't take 50 people knowing how to play to win, it takes just a few.
                                    </p>

                                    <p className='mb-3'>
                                        So do we play for tickets and become one of those players that can control a whole match and guide a
                                        team to victory.  That's why you're here.  I have analyzed what goes into an efficient Squad player versus an
                                        average squad player and I have determined the formula.
                                    </p>

                                    <h4 className='mb-3'>
                                        The skills you need
                                    </h4>
                                    <p>
                                        If I had to list the <em>top three skills</em> a new player to Squad has to master they would be:
                                    </p>
                                    <ul className='mb-3 list-group'>
                                        <li className='list-group-item'>Awareness</li>
                                        <li className='list-group-item'>Basic Combat</li>
                                        <li className='list-group-item'>Reactivity</li>
                                    </ul>

                                    <p className='mb-3'>
                                        We have already touched on the importance of <em>awareness</em> with our discussion of using your map.
                                        But there is more to this than looking at a map.  Being aware is being aware how your entire squad, and team are progressing
                                        with their individual goals at any given moment.  Being aware that your medic is running low on bandages.  Being aware that that
                                        squad lead you were talking to at the beginning of the game has gone quiet and has in fact lost their logi.  Awareness of precisely when enemies
                                        have overrun your hab.  This comes with experience but you can help yourself by: using the map often, and communicating with others.
                                        You don't have to always know what to do, but discussing the options with others is a great way at arriving at a decision.
                                        As we will continuously see awareness is key to playing Squad.
                                    </p>

                                    <p className='mb-3'>
                                        Now that you have begun to train yourself to be aware at all times, I can teach you how to win that gunfight.
                                        There are a couple tricks.  Every gun fight starts in one way.  One player enters the line of sight of another.
                                        Now both players could be running, or walking, or driving, or flying, or one could be still while the other enters his line of sight.
                                        In this situation, the player who is still always has the advantage.  Why? Well they don't have to stop moving before aiming and shooting.
                                        One less step to engage means they will get their shot off well before the person moving, even if they see eachother at the same time.
                                        Most often in this scenario, the person sitting still will get off at least one shot and hit on the other person, and the running/walking person will have to run for cover.

                                    </p>

                                    <p className='mb-3'>
                                        So tip number 1, try to be the one not pushing into the line of fire.  But you can't always sit still.  So how do you win the fight where you walk up on
                                        an enemy.  Well this is your best bet. Stop, maybe crouch, aim down sight, hold shift fire.  As fast as you can but controlled so that shift actually
                                        steadies your aim.  And shoot either single burst or controlled round bursts.
                                    </p>

                                    <p className='mb-3'>
                                        Okay so what happens when things don't go your way?  This is where skill number 3 comes in.  You must be reactive.
                                        Reactivity and awareness go hand in hand.  Even the best laid plans can fail.  It's bound to happen, but what matters is how you react to this.
                                        There is always another play, even if it involves holding spawns and waiting for a vehicle at main.  Even if it mean running from main to an abandoned
                                        logi because it's the only option.  There is always a play.  Remember to use rallys as backup spawns, and prioritize
                                        more habs over habs with plenty of ammo.
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

export default Introduction
