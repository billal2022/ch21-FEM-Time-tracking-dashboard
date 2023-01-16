const json=[
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]
  const titleSpan=document.querySelectorAll(".title")
  const currentSpan=document.querySelectorAll(".current")
  const previousSpan=document.querySelectorAll(".previous")
  const weeklySpan=document.querySelector(".weekly")
  const monthlySpan=document.querySelector(".monthly")
  const dailySpan=document.querySelector(".daily")
//default
function weekly(){
    for (let i = 0; i < json.length; i++) {
    const Title = json[i].title;
    const current = json[i].timeframes.weekly.current;
    const previous = json[i].timeframes.weekly.previous;

    
    titleSpan[i].innerText=Title
    currentSpan[i].innerText=current+"hrs"
    previousSpan[i].innerText="last week - "+previous+"hrs"
    weeklySpan.style.color="white"

  }
  
}
weekly();

dailySpan.addEventListener("click",()=>{
  for (let i = 0; i < json.length; i++) {
    const Title = json[i].title;
    const current = json[i].timeframes.daily.current;
    const previous = json[i].timeframes.daily.previous;


    titleSpan[i].innerText=Title
    currentSpan[i].innerText=current+"hrs"
    previousSpan[i].innerText="last week - "+previous+"hrs"
  }
  json.style.animation = "anim 2s ";
})
monthlySpan.addEventListener("click",()=>{
  for (let i = 0; i < json.length; i++) {
    const Title = json[i].title;
    const current = json[i].timeframes.monthly.current;
    const previous = json[i].timeframes.monthly.previous;

    
    titleSpan[i].innerText=Title
    currentSpan[i].innerText=current+"hrs"
    previousSpan[i].innerText="last week - "+previous+"hrs"
  }
})
weeklySpan.addEventListener("click",()=>{
  weekly();
})
