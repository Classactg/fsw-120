import React from "react";
import BlogPost from "./BlogPost";
import postApi from "./making/Objects/PostApi";
import numbers from "./making/Objects/keynumbers";
function Bloglist(props) {
    return (
        <div className={props.className}>
            {postApi.map(funcion(postData, nums) {
                let keys= numbers[nums];
                console.log(keys);
                return (
                    <BlogPost
                    className="blogPost"
                    href="#"
                    keys={keys}
                    title={postData.title}
                    subtitle={postData.subTitle}
                    author={postData.author}
                    date={postData.date}
                    aClassName={"hoverblue"}
                    />
                );
            })}
        <div className="btn">
            <button className="btnwrap">
                <a href="top">Older Post </a>
            </button>
        </div>
    </div>
 );
}
export default BlogList;
