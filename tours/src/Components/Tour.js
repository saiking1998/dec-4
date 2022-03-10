

import React from 'react'

class Tour extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            readMore: false
        }
        this.toggleReadMore = this.toggleReadMore.bind(this)
    }

    toggleReadMore(){
        this.setState({readMore:!this.state.readMore})
    }

    render(){
        const {id,image,info,name,price,removeTour} = this.props
        return(
            <article className="single-tour">
                <img src={image} alt={name} />
                <footer>
                    <div className="tourinfo">
                        <h4>{name}</h4>
                        <h4 className="tourprice">$ {price}</h4>
                    </div>
                    <p>
                        {this.state.readMore ? info : `${info.substring(0,200)}...`}
                        <button onClick={this.toggleReadMore}>{this.state.readMore ? 'show less' : 'read more'}</button>
                    </p>
                    <button className="delete-btn" onClick={()=>removeTour(id)}>not interested</button>
                </footer>
            </article>
        )
    }
}
export default Tour

