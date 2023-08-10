# HateDetector
# Project designed for study

# The principle of this project is to create an AI capable of identifying a hostile phrase

# the project is divided in 3 parts:
# the UI which is made in blazor,
# the app which is an api made in python to receive a comment, vectorize it to the IA pattern and then return a prediction of the hostility level,
# and the AI which is a random forest model with 100 trees trained with the dataset ethos_binary  from https://www.kaggle.com/datasets/konradb/ethos-hate-speech-dataset?datasetId=3446658&sortBy=dateRun&tab=profile  
# Both UI and App needs to be runinning
# The test script is at the cypress folder
# To run cypress, npx cypress open 