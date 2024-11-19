import csv

# Open CSV file containing registrant data
myFile = open('registrant_data.csv')

# Verifying file exists and reads content into list of dictionaries
registrants = []

# Open the file in read mode
with open('registrant_data.csv', 'r') as my_File:

# Parses CSV into dictionaries
    read = csv.DictReader(myFile)
    
# Adds each registrant to the list
for line in read:
    registrants.append(line)
print("Reading File")

#Merges the data to generate nametags HTML file
print("Reading File")
try:

# Open ooutput HTML file in write mode
    with open('../nametags10gen.html', 'w+') as html10:
        html10.write('<!DOCTYPE html>\n')
        html10.write('<html>\n')
        html10.write('<head>\n')
        html10.write('<title> Nametags</title>\n')
        html10.write('<link rel ="stylesheet" href="css/nametags10.css">\n')
        html10.write('</head>\n')
        html10.write('<body>\n')

#Counter to trach the umber of nametags processed
        i = 0
        for registrant in registrants:
        
        #Start a new page every 10 tags
            if i % 10 == 0:
                html10.write('\t<div class="page">\n')

           # Start new row div every 2 tags
            if i % 2 == 0:
                html10.write('\t\t<div class="row">\n')
                
            # Writes nametag information into HTML file
            html10.write('\t\t\t<div class="tag">\n')
            html10.write(f'\t\t\t\t<p class="firstname">{registrant["firstname"]} {registrant["lastname"]}</p>\n')
            html10.write(f'\t\t\t\t<p class="position">{registrant["position"]}</p>\n')
            html10.write(f'\t\t\t\t<p class="company">{registrant["company"]}</p>\n')
            html10.write(f'\t\t\t\t<p class="location">{registrant["city"]}, {registrant["state"]}</p>\n')
            html10.write('\t\t\t</div>\n')
            i += 1
            
        #Close off row div every 2 tags
            if i % 2 == 0:
                html10.write('\t\t</div>\n')
         #Close off page div every 10 tags
            if i % 10 == 0:
                print("closing off page")
                html10.write('\t</div>\n')

        html10.write('</body>\n')
        html10.write('</html>\n')
        #Handles potential errora
except Exception as e:
    print(f"Error  {e}")
