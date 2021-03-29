var arr= [
    {
      postCategory: "workout1",
      postAuthor: "Kunal",
      postDate: "Nov 20, 2020",
      postTitle: "Add This to your Daily 20 Min Workout Routine",
      postImage: process.env.PUBLIC_URL + "images/exercise2.jpg",
    },
    {
      postCategory: "workout2",
      postAuthor: "Kunal",
      postDate: "Nov 20, 2020",
      postTitle: "Add This to your Daily 20 Min Workout Routine",
      postImage: process.env.PUBLIC_URL + "images/exercise1.jpg",
    },
    {
        postCategory: "workout3",
        postAuthor: "Kunal",
        postDate: "Nov 20, 2020",
        postTitle: "Add This to your Daily 20 Min Workout Routine",
        postImage: process.env.PUBLIC_URL + "images/exercise1.jpg",
      },
      {
        postCategory: "workout4",
        postAuthor: "Kunal",
        postDate: "Nov 20, 2020",
        postTitle: "Add This to your Daily 20 Min Workout Routine",
        postImage: process.env.PUBLIC_URL + "images/exercise1.jpg",
      },

  ];
  var blankarray=[];
  function randomarray(){
      let n=2;
      for( var i=0 ; i<n ; i++){
        var print =Math.floor(Math.random() *arr.length);
        if(blankarray===null){
            blankarray.push(arr[print]); 
        }
        else if(blankarray[0]===arr[print]){
            n = n+1;
            console.log("hello")
            continue;
        }
        else{
            blankarray.push(arr[print]);
        }
      }
      console.log(blankarray);
  }
  randomarray();