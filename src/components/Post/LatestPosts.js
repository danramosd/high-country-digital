import React from "react"
import { Link } from "gatsby"
import PostItems from "./PostItems"
import PostItem from "./PostItem"
import useLatestBlogPost from "../../hooks/use-latest-blog-post"
import Button from "../Button/Button"

const latestBlogPost = [
  {
    title: "🇺🇸 US Based",
    introduction:
      "When we say speed matters, that includes communication.  By keeping all development on-shore, it helps ensure our engineers understand your business goals while being accessible during standard business hours.",
  },
  {
    title: "🤑 Performance Pricing",
    introduction:
      "We focus on results, not effort.  By charging based upon performance you can ensure High Country Digital is a partner rather than an expense in your journey for improved conversion rates.",
  },
  {
    // title: "✅ Selective ",
    title: "✅ Selective",
    introduction:
      "Performance based pricing only works if there is opportunity for both parties involved. As much as we would love to accept all business, we only work with ones that we can genuinely help.  If we aren't a fit, we will gladly connect you with some of our very talented partners agencies or freelancers.",
  },
]
const LatestPosts = ({ title, introduction }) => {
  return (
    <div className="section">
      <div className="container container__tight">
        {title || introduction ? (
          <div className="intro__area">
            {title && (
              <h2>
                {title}
                <span>.</span>
              </h2>
            )}
            {introduction && <p>{introduction}</p>}
          </div>
        ) : null}

        <PostItems>
          {latestBlogPost.map((node, index) => {
            return <PostItem key={index} node={node} isLink={false} />
          })}
        </PostItems>
      </div>
    </div>
  )
}

export default LatestPosts
