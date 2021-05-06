import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import FeaturedMedia from "../featured-media";
import Image from "@frontity/components/image";
/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */

const Item = ({ state, item }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Article>
        <div className="image">
          <Link link={item.link}>
            <img src={state.source.attachment[item.featured_media].source_url}/>
          </Link>
        </div>
        <Link link={item.link}>
          <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
        </Link>
      </Article>
    </>
  );
};


// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const Article = styled.article`
  .image {
    overflow: hidden;
    height: 300px;
    width: 100%;
    border-radius: 5px;
    margin-bottom: 1rem;
  }
  .image img {
    transition: transform .5s ease;
    object-fit: contain;
    height: calc(300px - 2rem);
    width: calc(100% - 2rem);
    margin: 1rem;
  }
  :hover img {
    transform: scale(1.05);
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin: 0px;
  margin-left: 10px;
  box-sizing: border-box;
`;