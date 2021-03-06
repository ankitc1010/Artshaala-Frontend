import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Router from "next/router";
//import {Form} from "../../test/signuppage.js";
import {Body,BlueText,Button,Collapsial,UserReviews}  from './style';




/*const CREATE_REVIEW_MUTATION = gql`
  mutation CREATE_REVIEW_MUTATION(
    $comment: String!
    $rating: Float!
    
    
    

  ) {
    createreview(
      comment: $comment
      rating: $rating
      
     
    ) {
      id
    }
  }
`;*/



class ReviewPage extends Component {
  state = {
    comment: "",
    rating: 0,
   
  };
  saveToState = e => {
    const { name, type, value } = e.target;
    const val = type === "radio" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };
  
    
    render() {
      return (
        //<Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
          //{(createItem, { error, loading }) => (
            <form
              method="post"
              onSubmit={async e => {
                //stop submitting form
                e.preventDefault();
                //call the mutation
                //const res = await createreview();
                //change the mutation to the single item page
                //console.log(res);
                //this.setState({ comment: "", rating: 0});
                Router.push({
                  pathname: "/"
                });
                
              }}
            >
              <UserReviews>
                
                <div className='content'>
                
                <label htmlFor="description">
                <div className = "flexbox">
                    
                    <div className = "comments">
                        <p>How did you feel about this item?</p>
                        <textarea onChange={this.saveToState} id="description" name="description" placeholder="Specification of the item.."  ></textarea>
                    </div>


                    <div className= "ratings"><p>Rate this item</p>
                    <fieldset class="userrating">
                        <input type="radio" id="star5" name="rating" value="5" onChange={this.saveToState} /><label className = "full" for="star5" ></label>
                        <input type="radio" id="star4half" name="rating" value="4.5" onChange={this.saveToState} /><label className="half" for="star4half" ></label>
                        <input type="radio" id="star4" name="rating" value="4" onChange={this.saveToState} /><label className = "full" for="star4" ></label>
                        <input type="radio" id="star3half" name="rating" value="3.5" onChange={this.saveToState} /><label className="half" for="star3half" ></label>
                        <input type="radio" id="star3" name="rating" value="3" onChange={this.saveToState} /><label className = "full" for="star3" ></label>
                        <input type="radio" id="star2half" name="rating" value="2.5" onChange={this.saveToState} /><label className="half" for="star2half" ></label>
                        <input type="radio" id="star2" name="rating" value="2" onChange={this.saveToState} /><label className = "full" for="star2" ></label>
                        <input type="radio" id="star1half" name="rating" value="1.5" onChange={this.saveToState} /><label className="half" for="star1half" ></label>
                        <input type="radio" id="star1" name="rating" value="1" onChange={this.saveToState} /><label className = "full" for="star1" ></label>
                        <input type="radio" id="starhalf" name="rating" value="0.5" onChange={this.saveToState} /><label className="half" for="starhalf" ></label>
                    </fieldset>
                        <br></br><br></br>
                        <div >
                            <input className="submitbutton" type="submit" value = "Submit"/>
                        </div>
                    </div>
                    <div></div>
                </div>
              
              </label>
                
                </div>
            </UserReviews>
            </form>
        //  )}
      //  </Mutation>
      );
    }
  }
  
  export default ReviewPage;
  