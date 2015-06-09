var Immutable   = require("immutable"),
    read        = require("read");

var blogPost = Immutable.Map({
    author: "Andrew MacKenzie",
    published: true,
    publishDate: "2015-05-15",
    contents: "The quick brown fox jumps over the lazy dog."
});

var stack       = [blogPost],
    stackIndex  = 0;

var blogHandler = {
    add: function (theBlogPost, newContent) {
        newBlogPost = blogPost.set('contents', stack[stackIndex].get('contents') + " " + newContent);
        stack.push(newBlogPost);
        stackIndex++;
    },
    render: function() {
        console.log(stack[stackIndex]);
    },
    status: function() {
        console.log(stack);
        console.log(stackIndex);
    },
    undo: function() {
        stackIndex--;
        if (stackIndex < 0) {
            stackIndex = 0;
        }
        this.render();
    },
    redo: function() {
        stackIndex++;
        if (stackIndex >= stack.length) {
            stackIndex = stack.length - 1;
        }
        this.render();
    }
};

