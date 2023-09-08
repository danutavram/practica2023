import React from "react";
import CommunityElement from "./CommunityElement";

export default function EnterTheCommunity() {
  const communityPath = "/community_";

  return (
    <section className="bg-gray-200 py-8 -mt-40">
      <div className="container mx-auto">
        <h2 className="flex text-3xl w-full justify-center pb-8 mb-10">
          Enter the community
        </h2>
        <div className="flex gap-4 w-full justify-center pb-8 text-center">
          <CommunityElement
            src={`${communityPath}1.png`}
            title="Find recipes"
            text="Explore the recipes selected by our stuff uploaded by our community."
          />
          <CommunityElement
            src={`${communityPath}2.png`}
            title="Review recipes"
            text="Evaluate and comment"
          />
          <CommunityElement
            src={`${communityPath}3.png`}
            title="Add recipes"
            text="Pass on your know-how by proposing your recipes"
          />
        </div>
      </div>
    </section>
  );
}
