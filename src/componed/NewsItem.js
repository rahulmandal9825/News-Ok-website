import React, {Component} from "react";


export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div>
            
                    <div className="card mb-3" style={{maxWidth: "540px"}}>
                    <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}> {source}
                        </span>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src={this.props.imageUrl}
                                    className="img-fluid rounded-start w-100  h-100"
                                    alt="..." style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{this.props.title}</h5>
                                    <p className="card-text">
                                    {this.props.description}
                                    </p>
                                    <p className="card-text">
                                        <small className="text-body-secondary">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small>
                                    </p>
                                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
              
            </div>
        );
    }
}
