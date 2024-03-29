var expressSanitizer = require("express-sanitizer"),
	methodOverride	 = require("method-override"),
	bodyParser 		 = require("body-parser"),
	mongoose 		 = require("mongoose"),
	express 		 = require("express"),
	app 			 = express();

mongoose.connect("mongodb://localhost/blog_app");
//APP CONFIG
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(expressSanitizer());

// MONGOOSE - SCHEMA_CONFIG
var blogSchema = mongoose.Schema({
	title: 		String,
	image: 		String,
	body: 		String,
	created: 	{type: Date, default: Date.now}
});

// MONGOOSE - MODEL_CONFIG
var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
// 	title: "Test Blog",
// 	image: "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=538b1ac2d2c7e62315a1f0c243784814&auto=format&fit=crop&w=1050&q=80",
// 	body: "Hello! this is a blog post...."
// });

// RESTFUL ROUTES

app.get("/", function(req, res){
	res.redirect("/blogs");
});

// INDEX ROUTE
app.get("/blogs", function(req, res){
	Blog.find({}, function(err, blogs){
		if(err){
			console.log(err);
		}else {
			res.render("index", {blogs: blogs});
		}
	});
});

// NEW ROUTES
app.get("/blogs/new", function(req, res){
	res.render("new");
});

// CREATE ROUTES
app.post("/blogs", function(req, res){
	// create blogs
	// console.log(req.body);
	req.body.blog.body = req.sanitize(req.body.blog.body);
	// console.log("==============");
	// console.log(req.body);
	Blog.create(req.body.blog, function(err, newBlog){
		if(err){
			res.render("new");
			console.log(err);
		} else {
			// the redirect to index
			res.redirect("/blogs");
		}
	});
});

// SHOW ROUTE
app.get("/blogs/:id", function(req, res){
	Blog.findById(req.params.id, function(err, foundBlog){
		if(err){
			res.redirect("/blogs");
		}else {
			res.render("show", {blog: foundBlog});
		}
	});
});

// EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res){
	Blog.findById(req.params.id, function(err, foundBlog){
		if(err){
			res.redirect("/blogs");
		}else {
			res.render("edit", {blog: foundBlog});
		}
	});
});

// UPDATE ROUTE
app.put("/blogs/:id", function(req, res){
	req.body.blog.body = req.sanitize(req.body.blog.body);
	Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
		if(err){
			res.redirect("/blogs");
		}else {
			res.redirect("/blogs/" + req.params.id);
		}
	});
});

// DELETE ROUTE
app.delete("/blogs/:id", function(req, res){
	Blog.findByIdAndRemove(req.params.id, function(err){
		if(err){
			console.log("Delete route ne error diyaa");
			res.redirect("/blogs");
		}else {
			res.redirect("/blogs");
		}
	});
});

app.listen(8080, function(){
	console.log("Server is running.....8080 port");
});
