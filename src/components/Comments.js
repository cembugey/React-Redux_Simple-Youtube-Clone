import React from 'react';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const Comments = ({ onCommentsClick, noOfComments, totalNoOfComments }) => {

    let comments = []
    let renderedComments

    
    for (let i=0; i<=noOfComments; i++) {
        let sentence = faker.lorem.sentence()
        comments.push(sentence)
    }

    renderedComments = comments.slice(0, noOfComments).map((item) => {
        return <CommentDetail author={faker.internet.userName()} timeAgo="Today at 4:45PM" comment={faker.lorem.sentence()} avatar={faker.image.avatar()} />;
    });

   
    if(noOfComments !== totalNoOfComments) {
        return (
        
            <div className="row">
            <div className="ml-2 mt-2 mr-2 text-body">Comments ({totalNoOfComments})</div>
                <div id ="comment1" className="ui comments ml-2 mt-3 col-12">                    
                    <div className="ui segment border-dark rounded bg-transparent"> 
                        {renderedComments}
                    </div>
                </div>                
                <div className="mx-auto" style={{ width : '100px' }}>
                    <button onClick={onCommentsClick} className="mb-5 pb-5" style={{ background:'none', border:'none', marginBottom:'300px' }}>Show All Comments</button>
                </div>
            </div>
            );
    }
    else {
        return (
        
            <div className="row">
            <div className="ml-2 mt-2 mr-2 text-body">Comments ({noOfComments})</div>
                <div id ="comment1" className="ui comments ml-2 mt-3 mb-5 col-12">                    
                    <div id ="comment2" className="ui comment card border-dark rounded bg-transparent"> 
                        {renderedComments}
                    </div>
                </div>                
            </div>
            );
    } 
   
};

export default Comments

