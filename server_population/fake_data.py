from faker import Faker
import pandas as pd
import unidecode
import numpy as np
from faker import Faker
from faker.providers import DynamicProvider
from server_population.Gens import *
import datetime
import time
from pymongo import MongoClient


users_in = 100
projects_on = int(np.round(users_in/11,0))
templates_needeed =  int(np.round(projects_on/2,0))

f = Faker()


for i in (list_fname,list_lname,list_clubhouse,list_irole,list_des):
    f.add_provider(i)

class template(object):
    f = Faker()
    def __init__(self):
        template_oo = f.des()
        self.template_id = template_oo[0]
        self.template_name = template_oo[1]
        self.desciption = template_oo[2]
        self.difficulty_rating = template.f.pyint(min_value=1, max_value=10)
        self.time_esitmate = template.f.pyint(min_value=1 * 604800, max_value=10 *604800)
        self.team_estimate = template.f.pyint(min_value= int(projects_on-5), max_value= int(projects_on))


class User(object):
    f = Faker()
    def __init__(self):
        self.first_name = f.first_name()
        self.last_name = f.last_name()
        self.clubs_house = f.clubs_house()
        self.individual_role = f.individual_role()

class project(object):
    f = Faker()
    def __init__(self):
        self.project_id = f.ean(13)
        team = User()
        temp = template()
        self.template_id = temp.template_id
        self.project_status = project.f.pyint(1,3)
        self.project_progress = project.f.pyint(1,3)
        self.time_start = time.time() - project.f.pyint(0, 604800 *2)
        self.time_e = temp.time_esitmate
        self.time_deadline = self.time_start + temp.time_esitmate
        self.team_size = temp.team_estimate
        self.team_members = [User().__dict__ for i in range(temp.team_estimate)]
        self.team_members[0]["role"] =  "Scrum Master"
        self.team_members[1]["role"] =  "Product Owner"
        self.team_members[2]["role"] =  "Tech Lead"

        # make this dynamic by using amount of user == team size



Templates = [template().__dict__ for i in range(projects_on) if template.template_id == ]
Projects = [project().__dict__ for i in range(projects_on)]
Users = [User().__dict__ for i in range(users_in)]
Templates = [template().__dict__ for i in range(4)]
Templates
Projects
f.unix_time()




def get_database():

   # Provide the mongodb atlas url to connect python to mongodb using pymongo
   CONNECTION_STRING = "mongodb+srv://andrew:sZALd7QZVT5D8NWj@cluster0.qqpfzsa.mongodb.net/?retryWrites=true&w=majority"

   # Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient
   client = MongoClient(CONNECTION_STRING)

   # Create the database for our example (we will use the same database throughout the tutorial
   return client["Projects"]


if __name__ == "__main__":

   # Get the database
   dbname = get_database()



dbname = get_database()
collection_name = dbname["Templates"]

for i in Templates:
    collection_name.insert_one(i)
