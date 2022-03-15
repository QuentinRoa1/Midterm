<script>
    // redirects anyone who tries to load this in browser
    window.location.href = "../index.html";
</script>

# **PodScholar TODO**
Have access to the PDF of the assignment for reference throughout this file. It's what we'll be using for reference on layout design.
The feed we'll be designing for most of these pages will be laid out like the one on the pdf with slight stylization: 
    A vertical list of horizontally laid out cards. Info will be on top with a podcast media player at the bottom which will play the podcast. For now, it'll just be a black retangle with a play symbol on it. When you click that, it "loads" (use timeout function to simulate loading for 1 second) the podcast and plays an audio file we'll have in the assets folder.

## **Layout**
Most described in DESC.md, but keep this stuff in mind:

### **Header**
- Needs to lose a lot of text
- Header will be a solid color, all buttons (except for dropdown menu which will be outlined) will be flush with the header's background color, but when highlighted will be slightly brighter/darker.
- Logo in center, and a div for containing buttons on the right side.
  - For now, just make the buttons the Sign-in and Sign up Buttons
- When you design it, save it to a template so you can easily copy and paste it into other docs
### **Color Theme**
Minimalist, whites, grays, blacks and subtle blues. Keep it simple to save time.
### **Cards**
- Need to be redesigned, though only slightly 
- Bootstrap provides a good start. There's no need for a picture.
  - https://getbootstrap.com/docs/5.0/components/card/
- Cards will have, in order:
  - The Title of the Podcast
  - A list of author names
  - The Journal
  - Year of Publication
  - DOI #
  - Podcast player
- Design a placholder card on the main page, give all of these attributes ID's and the needed classes
- use Bootstrap to format as much as possible.

### **Feeds**
- Simple
- a div with a Header (probs h3-ish) and inner div to place cards into. The header text will change based on the web page, but is blank by default.
#### **SideBar**
- Described in pdf/md
- in every feed

### **Sign-in, Sign-up page**
- Simple form, make header redirect to index. No buttons in header.

### **Upload Page**
- Header w/ no buttons. Heading, then the text about rules for uploading, then the form to upload.
- have a hidden div with the thank you message when an upload is complete.

### **Profile Page**
- Header, Name, Positon/Title, Uni/ORg, Bio.
- Beneath this is a feed displaying their podcasts
- if this is the viewer's profile, add an edit button

## **Data Manipulation**
### **Ajax Accessors**
- Methods called that relevant data
- **getAuthors()**
  - Returns the array of authors/user data
- **getPods()**
  - Returns the array of Podcast data
- **getCategs()**
  - Returns the array of category data
- **getPodsWCategs()**
  - Returns the array of Podcast data with the category variable changed to the Category name, which is retrieved from the getCategs Function 
- **putAuthors(authInfo)**
  - puts authInfo to json blob
- **putPods(podInfo)**
  - puts pod ray to jsonBlob
- **newAuthor(newAuthData)**
  - gets author data
  - pushes newauthdata to end
  - putAuthors(authorData)
- **updateAuthor(newData, authDex)**
  - Retrieves author data
  - new data is an array of the updated fields with the same names as the original
    - e.g. newData is {fName: "Harry", Bio: "This is my new bio"}
  - updates indices in authdata
  - putAuthors(authInfo)
  - *this will be used for saving a pod to an author's history/saved list*
- **deletePods(pod)**
  - gets Pod array
  - sets pod @ podRay[pod] to an empty object
    - this way we don't have to update saved lists
  - putPods(podInfo)
- **ratePods(pod, ratingInfo)**
  - gets Pod array
  - appends ratingInfo to PodRay[pod][ratings]
  - put updated podlist to json blob

## **Data Validation**

## **Dom Manipulation**

## **Authentication**
