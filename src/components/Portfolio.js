import React, { Fragment } from "react";

const Portfolio = () => {
  return (
    <Fragment>
      <div className="portfolio-header">
        <p>
          <strong>Check out my work.</strong> The below projects feature ReactJS,
          Javascript ES6, and Ruby on Rails.
        </p>
      </div>
      <div className="portfolio-flex-container">
        <div className="portfolio-flex-item">
          <h4>RoomSeek</h4>
          <p>
            View available bedrooms in a coliving apartment using various
            filters. Floor plans are generated dynamically in SVG from
            dimensions in database.
          </p>
          <p>Coming Soon.</p>
        </div>
        <div className="portfolio-flex-item">
          <h4>ConcertPlan</h4>
          <p>
            View upcoming concerts and make plans with your friends to attend
            them. Calls Ticketmaster API for resale market and persists "plans"
            in back end for groups of friends.
          </p>
          <p>Coming Soon.</p>
        </div>
        <div className="portfolio-flex-item">
          <h4>Parsel</h4>
          <p>
            Highlight text within a document and write corresponding
            annotations. Read the
            <a href="https://medium.com/@lucas.eckman/easy-as-1-2-3-cdca597f35a6">
              blog post
            </a>.
          </p>
          <p>Coming Soon.</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;
