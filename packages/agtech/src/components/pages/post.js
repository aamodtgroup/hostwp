import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import List from "../list";
import FeaturedMedia from "../featured-media";

const Post = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  // Get the data of the author.
  const author = state.source.author[post.author];
  // Get a human readable date.
  const date = new Date(post.date);

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <ArticleContainer>
      {post.hero_image !== false &&
        <div className="hero">
          <img src={post.hero_image} />
        </div>
      }
      <div className="post_info">
        <div className="hero-grid">
          <div>
            <h1>{post.title.rendered}</h1>
          </div>
          <div>
            <p className="date">{date.toDateString()}</p>
            {post.excerpt && (
              <Excerpt dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            )}
          </div>
        </div>
      </div>

      <Content>
        <Html2React html={post.content.rendered} />
      </Content>
    </ArticleContainer>
  ) : null;
};

export default connect(Post);

const ArticleContainer = styled.div`
  width:100%;
  max-width: 100%;
  margin: 0 auto;
  .hero {
    width: 100%;
  }
  .hero img {
    object-fit: cover;
    width: 100%;
    height: calc(70vh - 72px);
  }
  .post_info {
    background-color:var(--brand);
    height: auto;
  }
  .post_info h1 {
    font-size: 40px;
    font-weight: 600;
    text-align: left;
    color: #ffffff;
  }
  .post_info p {
    font-size: 20px;
    text-align: left;
    color: #ffffff;
  }
  .post_info .date {
    opacity: .85;
  }
  .hero-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 3rem;
    padding: 3rem;
    margin-bottom: 2rem;
    max-width: 1100px;
    margin: 0 auto;
  }
  @media (max-width: 900px) {
    .hero img {
      height: 250px;
    }
    .post_info {
      height: auto;
    }
    .hero-grid {
      grid-template-columns: repeat(1, 1fr);
      grid-row-gap: 2rem;
      padding: 15px;
    }
  }
`;

const Excerpt = styled.div`
  line-height: 1.6em;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const Content = styled.div`
  word-break: break-word;
  margin: 4rem 0;
  * {
    max-width: 650px;
    width: 100%;
    margin: 2rem auto;
  }

  p {
    margin-bottom:1.5rem;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    // width: 100% !important;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: 0 auto;
  }

  blockquote {
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }
  .wp-block-embed {
    max-width: 100%;
    position: relative;
    width: 100%;
    margin: 1.5rem auto;
    .wp-block-embed__wrapper {
      &::before {
        content: "";
        display: block;
        padding-top: 56.25%;
      }
    }
    iframe {
      max-width: 100%;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border: 0;
    }
  }
  a {
    color: var(--brand);
    text-decoration: underline;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
    
  }

  @media (max-width: 900px) {
    padding: 0 15px;
  }
`;