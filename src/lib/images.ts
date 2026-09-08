/**
 * Central image registry.
 *
 * Photography is sourced from Unsplash (free to use under the Unsplash
 * License). Keeping every URL here means art direction can be swapped in one
 * place, and every image ships with descriptive alt text for accessibility
 * and image SEO.
 */

const UNSPLASH = "https://images.unsplash.com/photo-";

function u(id: string, w = 1600, h?: number) {
  const crop = h ? `&h=${h}&fit=crop&crop=entropy` : "&fit=crop";
  return `${UNSPLASH}${id}?auto=format&q=75&w=${w}${crop}`;
}

export type Img = { src: string; alt: string; width: number; height: number };

function make(id: string, alt: string, w = 1600, h = 1067): Img {
  return { src: u(id, w, h), alt, width: w, height: h };
}

export const images = {
  officeOpen: make(
    "1497215728101-856f4ea42174",
    "Marketing team working at desks in an open-plan agency office",
  ),
  teamMeeting: make(
    "1522071820081-009f0129c71c",
    "Digital marketing specialists collaborating around a conference table",
  ),
  clientMeeting: make(
    "1600880292203-757bb62b4baf",
    "Account manager reviewing a campaign plan with a client",
  ),
  collaboration: make(
    "1553877522-43269d4ea984",
    "Two marketers reviewing campaign performance on a laptop together",
  ),
  deskLaptops: make(
    "1519389950473-47ba0277781c",
    "Team members analyzing website data on laptops at a shared desk",
  ),
  workspace: make(
    "1517245386807-bb43f82c33c4",
    "Designer workstation with wireframes and a large monitor",
  ),
  officePeople: make(
    "1531973576160-7125cd663d86",
    "Colleagues discussing a marketing project in a bright office",
  ),
  officeModern: make(
    "1541746972996-4e0b0f43e02a",
    "Modern agency workspace with natural light and collaborative seating",
  ),
  strategySession: make(
    "1552664730-d307ca884978",
    "Strategist mapping a campaign roadmap on a whiteboard",
  ),
  analyticsLaptop: make(
    "1460925895917-afdab827c52f",
    "Analytics dashboard showing traffic and conversion trends on a laptop",
  ),
  analyticsScreen: make(
    "1551288049-bebda4e38f71",
    "Performance reporting charts displayed on a desktop screen",
  ),
  reportingMeeting: make(
    "1454165804606-c3d57bc86b40",
    "Team reviewing printed performance reports during a strategy meeting",
  ),
  teamOffice: make(
    "1556761175-b413da4baf72",
    "Marketing specialists working together in a Queens agency office",
  ),
  planning: make(
    "1542744173-8e7e53415bb0",
    "Content calendar planning session with notes and a laptop",
  ),
  dataReview: make(
    "1559136555-9303baea8ebd",
    "Analyst reviewing search performance data on a monitor",
  ),
  focusedWork: make(
    "1573164713988-8665fc963095",
    "Marketing specialist working on campaign optimization at a desk",
  ),
  teamDiscussion: make(
    "1521737604893-d14cc237f11d",
    "Project team discussing website improvements around a laptop",
  ),
  deskWork: make(
    "1504384308090-c894fdcc538d",
    "Laptop and notebook on a desk during a website planning session",
  ),
  building: make(
    "1486406146926-c627a92ad1ab",
    "Office building exterior in New York City",
  ),
  interiorA: make(
    "1497366754035-f200968a6e72",
    "Agency meeting room set up for a client strategy workshop",
  ),
  interiorB: make(
    "1497366811353-6870744d04b2",
    "Collaborative work area inside the Horizon Growth office",
  ),
  meetingRoom: make(
    "1524758631624-e2822e304c36",
    "Conference room prepared for a quarterly marketing review",
  ),
  teamStandup: make(
    "1517048676732-d65bc937f952",
    "Team standup meeting to review weekly campaign priorities",
  ),
  ecommerce: make(
    "1590650153855-d9e808231d41",
    "Online store product page open on a laptop during a shopping session",
  ),
  ecommercePack: make(
    "1563986768609-322da13575f3",
    "Small business owner preparing online orders for shipping",
  ),
} satisfies Record<string, Img>;

export type ImageKey = keyof typeof images;

/** Six photos used by the recurring "Inside Horizon Growth" gallery block. */
export const officeGallery: ImageKey[] = [
  "officeOpen",
  "teamMeeting",
  "interiorA",
  "collaboration",
  "meetingRoom",
  "teamStandup",
];
