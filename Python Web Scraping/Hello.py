import pandas as pd

#print("Hello welcome to python web scraping!!")
states = ["Maharashtra","Gujrat","Goa","Kerala"]
population= [124904071,7270000000,1570000,3460000000]

dict_states = {"States":states ,"Population":population}

df_states = pd.DataFrame.from_dict(dict_states)
# print(df_states)
df_states.to_csv('states.csv',index=False)

#print(states[-4])

# for state in states:
#     print(state)