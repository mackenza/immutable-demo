var Immutable   = require("immutable"),
    read        = require("read");


var blogPost = Immutable.Map({
    author: "Andrew MacKenzie",
    published: true,
    publishDate: "2015-05-15",
    contents: "The quick brown fox jumps over the lazy dog."
});

var commentHandler = {
    add: function (theBlogPost, newContent) {
        newContents = blogPost.set('contents', blogPost.get('contents') + " " + newContent);
        return newContents;
    },
    render: function(currentBlogPost) {
        console.log(currentBlogPost);
    }
};

