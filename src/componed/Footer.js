import React, {Component} from "react";

export default class Footer extends Component {
    render() {
        return (
            <div>
       <footer className="bg-dark text-white pt-3">
    <div className="container">
        <div className="row">

                <div className="columm text-center">
                    
                        <a href="\" className="text-white text-decoration-none mx-3">
                            Business
                        </a>
                  
                   
                        <a href="\" className="text-white text-decoration-none mx-3">
                            Entertainment
                        </a>
                    
                 
                        <a href="\" className="text-white text-decoration-none mx-3">
                            General
                        </a>
                  
                        <a href="\" className="text-white text-decoration-none mx-3">
                            Health
                        </a>
                   
                        <a href="\" className="text-white text-decoration-none mx-3">
                            Science
                        </a>
                 
                        <a href="\" className="text-white text-decoration-none mx-3">
                            Sports
                        </a>
                  
                        <a href="\" className="text-white text-decoration-none mx-3">
                            Technology
                        </a>
                   
                </div>
                <p className="text-center  pt-2" style={{color:"gray"}}>@2024- by Rahul Mandal</p>
            </div>
        </div>
    
</footer>

            </div>
        );
    }
}
