import './blog.css';

const Blog = () => {
  return (
    <div id="blog">

      <div className="blog-container">

        <h2>A lot is happening, and we are blogging all about it.</h2>

        <div className="blogs">

          <div className="left3">

            <img src="./img/Post1.png" alt="Post 1 Blog" />

            <h6>Apr 26, 2023</h6>

            <h3>GPT-4 and Open AI is the future. Let us exlore how it is?</h3>

            <a href="#">Read Full Article </a>

          </div>

          <div className="middle3">

            <div className="post">

              <img src="./img/Post2.png" alt="Post 2 Blog" />

              <h6>Apr 26, 2023</h6>

              <h3>GPT-4 and Open AI is the future. Let us exlore how it is?</h3>

              <a href="#">Read Full Article </a>

            </div>

            <div className="post">

              <img src="./img/Post3.png" alt="Post 3 Blog" />

              <h6>Apr 26, 2023</h6>

              <h3>GPT-4 and Open AI is the future. Let us exlore how it is?</h3>

              <a href="#">Read Full Article </a>

            </div>

          </div>

          <div className="right3">

            <div className="post">

              <img src="./img/Post4.png" alt="Post 4 Blog" />

              <h6>Apr 26, 2023</h6>

              <h3>GPT-4 and Open AI is the future. Let us exlore how it is?</h3>

              <a href="#">Read Full Article </a>

            </div>

            <div className="post">

              <img src="./img/Post5.png" alt="Post 5 Blog" />

              <h6>Apr 26, 2023</h6>

              <h3>GPT-4 and Open AI is the future. Let us exlore how it is?</h3>

              <a href="#">Read Full Article </a>

            </div>

          </div>

        </div>

        <div className="finaltitle">

          <h3>Do you want to step into the future before others?</h3>

          <a href="#">Request Early Access</a>

        </div>

      </div>

    </div>
  )
}

export default Blog;