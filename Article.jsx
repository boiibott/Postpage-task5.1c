import React from 'react'
function Article(){
    return(
        <div>
        <div className="subhead">
          <h2>What do you want to ask or share</h2>
        </div><br />
        <div className="field">
          <label htmlFor="postTitle">Title:</label>
          <input type="text" id="postTitle" placeholder="Enter a descriptive Title"/>
        </div><br />
        <div className="field" id="ArticleAbstarct">
          <label htmlFor="ArticleText">Abstarct:</label><br />
          <textarea rows={10} cols={50} id="articleText" placeholder="Enter a 1-a Paragraph" />
        </div><br/>
        <div className="field" id="ArticleText">
          <label htmlFor="ArticleText">Abstarct:</label><br />
          <textarea rows={10} cols={25} id="ArticleText" placeholder="Enter a 1-a Paragraph" />
        </div><br/>
        <div className="footerfield">
          <label htmlFor="postTags">Tags:</label>
          <input type="text" id="postTags" placeholder="Please add up to 3 tags to describe what your question is about (e.g., Java)" />
        </div><br />
        <div className="button">
          <button id="postButton" className="ui button primary">Post</button>
        </div>
      </div>
    )
}
export default Article;