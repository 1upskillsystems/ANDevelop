from faker import Faker
import pandas as pd
import unidecode
import numpy as np
from faker import Faker
from faker.providers import DynamicProvider


list_fname = DynamicProvider(
    provider_name = "first_name",
    elements = ["Hassan", "Amiya", "Jenna", "Kendall", "Sullivan", "Malachi", "Osvaldo", "Diego", "Isai", "Violet", "King", "Bruce"],
)
list_lname = DynamicProvider(
    provider_name = "last_name",
    elements = ["Mckenzie","Cantu","Pena","Chang","Greer","Andrews","Banks","Tapia","Mcfarland","Arellano","Gregory","Caldwell"],
)

list_clubhouse = DynamicProvider(
    provider_name = "clubs_house",
    elements = ["Almeida", "Somerville", "Grace"],
)

list_irole = DynamicProvider(
    provider_name = "individual_role",
    elements = ["Analyst", "Developer"],
)

#+++++++++#+++++++++#+++++++++#+++++++++#+++++++++#+++++++++#+++++++++
# Template Generation
#+++++++++#+++++++++#+++++++++#+++++++++#+++++++++#+++++++++#+++++++++




list_des = DynamicProvider(
    provider_name = "des",
    elements = [(1,"AND Hobby",
                 "Our talented ANDIs have their favourite activities they like to do in their free time. Some like to bake, and others like doing crafts or enjoying outdoor and sports activities. Wouldn’t it be cool to be joined by another ANDi on your weekend hike? What I envisage is a portal where every ANDi can share his/her hobby, plan events and join and participate in events organized by other ANDis. This portal would allow ANDis to get to know each other and spend their free time doing favourite activities they have in common."),
                (2,"Dog and Cat Shelter Website",
                 "The non-profit organisation “Adopt Happiness” takes dogs and cats from the streets and provides shelter for them until they find an ideal home for them. They recently noticed a huge interest in adoption; however, they only have a Facebook page which makes applications long and very often confusing as they need to exchange a lot of messages with potential adopters. “Adopt Happiness” is looking to have its website where it could share photos of animals that are available for adoption, including the requirements for an ideal home. In addition, every interested applicant would be able to fill out an application which would make it easier for the organization to filter out unsuitable candidates based on each animal’s needs."),
                (3,"AND Eat",
                 "Many ANDis are serious foodies. This means they often like to visit local restaurants to try out new cuisines. ANDis are also quite social so they like to be able to enjoy some equally good conversation alongside their meals.What I envisage is a portal which allows ANDis to inform other ANDis where they’re planing on going to lunch and what restaurants they recommend in the area. This portal would allow fellow foodies an opportunity to meet up and share their recommendations."),
                (4,"ANDevelop Developing",
                 "With the fluctuation of incoming ANDis, AND digital has been tasked with the empowerment of equipping their newcomers. Typically, this is done during build week, a period in the ANDuction to develop a project. Making these template projects takes time and recourses which could be placed elsewhere, like mentorship and other work tasks. These templates also typically require the same sort of requirements, AND Digital is looking for a platform to make a platform that makes this entire process streamlined, where users can pull projects from a template and make them down. In combination with providing their tastes and distastes; constituting feedforward for the next reiterations of build weeks.")],
)
