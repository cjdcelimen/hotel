import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'free cocktails',
                info: 'finest quality'
            },
            {
                icon: <FaHiking />,
                title: 'ultimate hiking',
                info: 'best trails'
            },
            {
                icon: <FaShuttleVan />,
                title: 'free shuttle',
                info: 'accessibility'
            },
            {
                icon: <FaBeer />,
                title: 'ice cold beer',
                info: 'quench your thirst'
            }
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title='services' />
                <div className='services-center'>
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className='service'>
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}
