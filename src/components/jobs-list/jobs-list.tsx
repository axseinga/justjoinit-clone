"use client";

import React from "react";
import { Box, Typography, List, ListItem } from "@mui/material";
import { Virtuoso } from "react-virtuoso";
import { jobOffers } from "./content";
import NextLink from "next/link";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShareLocationOutlinedIcon from "@mui/icons-material/ShareLocationOutlined";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import {
  JobListFooterButton,
  JobListFooterContent,
  JobListFooterWrapper,
  JobListItemContent,
  JobListItemContentBottom,
  JobListItemContentBottomTextSmall,
  JobListItemContentTop,
  JobListItemFriendlyIcon,
  JobListItemFullyRemote,
  JobListItemInner,
  JobListItemLink,
  JobListItemLogo,
  JobListItemLogoBox,
  JobListItemNewLabel,
  JobListItemTechLabel,
  JobListItemTitle,
  JobListItemWrapper,
  JobListTitle,
  JobListWrapper,
} from "./job-list.styles";

export const JobsList = () => {
  return (
    <JobListWrapper>
      <Box>
        <JobListTitle component="h1">
          Job offers: JS - {jobOffers.length} offers
        </JobListTitle>
        <Virtuoso
          style={{
            height: "95vh",
            width: "60vw",
          }}
          components={{ Footer: JobListFooter }}
          totalCount={jobOffers.length}
          itemContent={(index) => {
            const jobOffer = jobOffers[index];
            return (
              <JobListItemWrapper>
                <JobListItemLink component={NextLink} href="/job">
                  <JobListItemInner>
                    <JobListItemLogoBox>
                      <JobListItemLogo
                        src={jobOffer?.companyLogo ?? ""}
                        alt={jobOffer?.companyName ?? ""}
                      />
                    </JobListItemLogoBox>
                    <JobListItemContent
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <JobListItemContentTop>
                        <JobListItemTitle component="h3">
                          {jobOffer?.jobTitle ?? ""}
                        </JobListItemTitle>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                          }}
                        >
                          <Typography
                            variant="body1"
                            component="p"
                            color="#48BB78"
                          >
                            {jobOffer?.salary?.isUndisclosed
                              ? "Undisclosed Salary"
                              : `${jobOffer?.salary?.from ?? ""} - ${
                                  jobOffer?.salary?.to ?? ""
                                } ${jobOffer?.salary?.currency ?? ""}`}
                          </Typography>
                          <JobListItemNewLabel>
                            <JobListItemContentBottomTextSmall
                              variant="body2"
                              component="span"
                            >
                              New
                            </JobListItemContentBottomTextSmall>
                          </JobListItemNewLabel>
                        </Box>
                      </JobListItemContentTop>
                      <JobListItemContentBottom>
                        <Box sx={{ display: "flex", gap: "10px" }}>
                          <Box
                            sx={{
                              display: "flex",
                              gap: "8px",
                              alignItems: "center",
                            }}
                          >
                            <ApartmentRoundedIcon fontSize="small" />
                            <JobListItemContentBottomTextSmall
                              variant="body1"
                              component="p"
                            >
                              {jobOffer?.companyName ?? ""}
                            </JobListItemContentBottomTextSmall>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              gap: "8px",
                              alignItems: "center",
                            }}
                          >
                            <LocationOnOutlinedIcon fontSize="small" />
                            <JobListItemContentBottomTextSmall
                              variant="body1"
                              component="p"
                            >
                              {`${jobOffer?.locations[0] ?? ""} ${
                                jobOffer?.locations.length > 1
                                  ? `+${
                                      jobOffer?.locations.length - 1
                                    } Locations`
                                  : ""
                              }`}
                            </JobListItemContentBottomTextSmall>
                            {jobOffer.operatingMode.toLowerCase() ===
                              "remote" && (
                              <JobListItemFullyRemote>
                                <ShareLocationOutlinedIcon fontSize="small" />
                                <JobListItemContentBottomTextSmall
                                  variant="body1"
                                  component="span"
                                  sx={{ fontWeight: 500 }}
                                >
                                  Fully remote
                                </JobListItemContentBottomTextSmall>
                              </JobListItemFullyRemote>
                            )}
                            {jobOffer.friendlyOffer && (
                              <Box>
                                <JobListItemFriendlyIcon />
                              </Box>
                            )}
                          </Box>
                        </Box>
                        <Box sx={{ display: "flex", gap: "10px" }}>
                          {jobOffer.techStack.map((tech, index) => {
                            if (index < 3)
                              return (
                                <JobListItemTechLabel key={tech.techLabel}>
                                  <JobListItemContentBottomTextSmall
                                    variant="body1"
                                    component="span"
                                    sx={{ fontWeight: 500 }}
                                  >
                                    {tech.techLabel}
                                  </JobListItemContentBottomTextSmall>
                                </JobListItemTechLabel>
                              );
                          })}
                        </Box>
                      </JobListItemContentBottom>
                    </JobListItemContent>
                  </JobListItemInner>
                </JobListItemLink>
              </JobListItemWrapper>
            );
          }}
        />
      </Box>
      <Box>
        <img
          src="/assets/map.png"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          alt=""
        />
      </Box>
    </JobListWrapper>
  );
};

const JobListFooter = () => {
  return (
    <JobListFooterWrapper>
      <JobListFooterContent>
        <NotificationsNoneRoundedIcon />
        <Typography variant="body2" component="p" fontWeight={500}>
          Add an e-mail notification, and we will inform you about new job
          offers according to the given criteria.
        </Typography>
      </JobListFooterContent>
      <JobListFooterButton>Turn on email notifications</JobListFooterButton>
    </JobListFooterWrapper>
  );
};
