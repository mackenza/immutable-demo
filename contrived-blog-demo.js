var Immutable   = require("immutable");

var blogPost = Immutable.Map({
    author: "Andrew MacKenzie",
    published: true,
    publishDate: "2015-05-15",
    contents: "The original blog post text. "
});

var stack       = [blogPost],
    stackIndex  = 0;

var blog = {
    add: function (newContent) {
        newBlogPost = blogPost.set('contents', stack[stackIndex].get('contents') + newContent);
        stack.push(newBlogPost);
        stackIndex++;
        this.render();
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
