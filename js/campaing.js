$(window).load(function(){
  var data = {
    facebook:{
      like:{
        rewards: 4
      },
      share:{
        rewards: 6
      }
    },
    twitter:{
      tweet:{
        rewards: 5
      },
      follow:{
        rewards: 3
      }
    },
    youtube:{
      watch:{
        rewards: 20
      }
    },
    website:{
      visit:{
        rewards: 2
      }
    },
  }
  let userData = {location: [],campaing:[],date:[],balance:9500,days:0,rewards:0,dailyBudget:0,campName:"",intrest:[]}
  c = e => console.log(e)
  let valid = {
    campaing:{},
    audience:{},
    rewards:{}
  }

  valid.campaing.name = () => {
    let cn = $(".campaingName").val()
    if(cn == "" || cn == null)
      $(".campaingName + .e").text("Error Fill The Campaing Name").attr("data-e","1")
    else if(cn.length < 4)
      $(".campaingName + .e").text("Input Correct Name").attr("data-e","1")
    else
      $(".campaingName + .e").text("").attr("data-e","0")
  }

  valid.campaing.type = () => {
    let type = $(".campaingType").val()
    if(type == "0")
      $(".campaingType ~ .e").text("Select Campaing Type").attr("data-e","1")
    else
      $(".campaingType ~ .e").text("").attr("data-e","0")

    userData.campaing[0] = $(".campaingType").val()
    userData.campaing[1] = $(".subOptions").val()
  }

  valid.campaing.link = () => {
    let link = $(".pageLink").val()
    if(link == "" || link == null)
      $(".pageLink + .e").text("Enter "+ ($(".campaingType").val() != "0" ? $(".campaingType").val() : "") +" Link").attr("data-e","1")
    else
      $(".pageLink + .e").text("").attr("data-e","0")
  }

  valid.campaing.setName = i => {
    let cn = $(".campaingName").val()
    if(!isntchange){
      $(".campaingName").val(i+" "+$(".campaingType + .subOptions.sub").val())
      $(".campaingName + .e").text("").attr("data-e","0")
    }
  }

  valid.campaing.all = () => {
    valid.campaing.name()
    valid.campaing.type()
    valid.campaing.link()
  }

  valid.audience.location = () => {
    let location = $(".audienceLocation").val()
    if(location == "" || location == null)
      $(".audienceLocation + .e").text("Enter Location").attr("data-e","1")
    else
      $(".audienceLocation + .e").text("").attr("data-e","0")
  }

  valid.audience.age = () => {
    let age = $(".audienceAge")
    age.var = []
    $(".audienceAge").each(function(){
      if($(this).is(":checked"))
        age.var.push($(this).val())
    })
    // c(age.var)
  }
  valid.audience.gender = () => {
    let gender = []
    $(".audienceGender").each(function(){
      if($(this).is(":checked")){
        gender.push($(this).val())
      }
    })
    // c(gender)
  }

  valid.audience.intrest = () => {
    let intrest = []
    $(".audienceIntrest").each(function(){
      if($(this).is(":checked")){
        intrest.push($(this).val())
      }
    })
    userData.intrest = intrest
    // c(intrest)
  }

  valid.audience.save = () => {
    //Save Code
  }

  valid.audience.all = () => {
    valid.audience.location()
    valid.audience.age()
    valid.audience.gender()
    valid.audience.intrest()
    valid.audience.save()
  }

  valid.rewards.price = () => {
    if(userData.campaing.length == 0)
      $(".rewardsPrice + .e").text("Please Select The Campaing Type First").attr("data-e","1")
    else
      for(let i in data)
        if(userData.campaing[0] == i)
          for(let x in data[i])
            if(userData.campaing[1] == x){
              let p = $(".rewardsPrice").val()
              if(p < data[i][x].rewards)
                $(".rewardsPrice + .e").text("Mininmum rewards for "+i+" "+x+" is "+data[i][x].rewards).attr("data-e","1")
              else{
                $(".rewardsPrice + .e").text("").attr("data-e","0")
                userData.rewards = parseInt(p)
              }
            }
  }

  valid.rewards.table = () => {
    let reachPerDay , totalBudget , totalReach
    if(userData.dailyBudget == 0 && userData.rewards == 0)
      reachPerDay = 0
    else
      reachPerDay = userData.dailyBudget/userData.rewards
    if(userData.dailyBudget == 0 && userData.days == 0)
      totalBudget = 0
    else
      totalBudget = userData.dailyBudget*userData.days
    if(reachPerDay == 0 && userData.days == 0)
      totalReach = 0
    else
      totalReach = reachPerDay*userData.days
    if(userData.campName != "" || userData.campName != null)
      $("table .campName .v").text(userData.campName)
    $("table .totalBudget .v").text(totalBudget)
    $("table .dailyReach .v").text(reachPerDay)
    $("table .totalReach .v").text(totalReach)
  }

  valid.rewards.date = () => {
    let date = new Date()
    let reward = $(".rewardsStartDate").val()
    let end = $(".rewardsEndDate").val()
    date = date.getFullYear() + "/"+ (date.getMonth()+1)+"/"+date.getDate()
    reward = reward.split("-").join("/")
    end = end.split("-").join("/")
    months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    let vars
    let x = ((new Date(end).getTime()) - (new Date(reward).getTime()))
    x /= (3600000*24)
    let rew = [true,true]
    if(reward == ""){
      $(".rewarde ~ .err .e").text("Mention the campaing starting date").attr("data-e","1")
      $(".rewardsEndDate").val("")
      userData.days = 0
      rew[0] = false
    }
    else if((new Date(reward).getTime()) < (new Date(date).getTime())){
      $(".rewarde ~ .err .e").text("Campaing should start after current Date").attr("data-e","1")
      $(".rewardsStartDate").val("")
      userData.days = 0
      rew[0] = false
    }
    else if(end != "" && (((new Date(end).getTime())) < (new Date(reward).getTime()) || (new Date(end).getTime()) == (new Date(reward).getTime())) ){
      $(".rewarde ~ .err .e").text("Campaing should end after the start Date").attr("data-e","1")
      $(".rewardsEndDate").val("")
      userData.days = 0
      rew[1] = false
    }
    else{
      $(".rewarde ~ .err .e").text("").attr("data-e","0")
      userData.days = x
      rew[0] = rew[1] = true
    }
    if((reward != "" || reward != null) && (end == "" || end == null) && rew[0])
      vars = reward
    else if((reward != "" || reward != null) && (end != "" || end != null) && rew[0] && rew[1]){
      let a = reward.split("/") , b = end.split("/")
      vars = (a[0] == b[0]) ? months[(a[1]-1)]+"/"+a[2]+" - "+months[(a[1]-1)]+"/"+b[2] : a[0]+"/"+months[(a[1]-1)]+"/"+a[2]+" - "+b[0]+"/"+months[(a[1]-1)]+"/"+b[2]
    }
   $("table .campperiod .v").text(vars)

 }

  valid.rewards.budget = () => {
    if($(".rewardsBudget").val() == "")
      $(".rewardsBudget + .e").text("Enter Your Daily Budget").attr("data-e","1")
    else{
      $(".rewardsBudget + .e").text("").attr("data-e","0")
      userData.dailyBudget = parseInt($(".rewardsBudget").val())
    }
  }

  valid.rewards.all = () => {
    valid.rewards.price()
    valid.rewards.date()
    valid.rewards.budget()
    valid.rewards.table()
    c(userData)
  }

  function formSwitch(e,next = ""){
    let no = (e.index())
    if(next != "") no ++
    if(!(e.hasClass("active")))
      $(".formRem .i.block").removeClass("active")
      e.addClass("active")
      $(".form form").css({display:"none"}).removeClass("active")
      $(".form form").eq(no).stop().fadeIn(600,function(){
        $(this).addClass("active")
      })
  }
  $(".formRem .i.block").on("click",function(){
    formSwitch($(this))
  })


  var steps = [false,false,false,false]
  currentPage=0
  isntchange = false
  $(".campaingName").on("focus",function(){
    isntchange = true
  })
  $(".campaingName").blur(valid.campaing.name)
  $(".subOptions.sub").change(valid.campaing.type)
  $(".pageLink").blur(valid.campaing.link)
  $("input#start, input#end").change(valid.rewards.date)
  $(".rewardsPrice").blur(valid.rewards.price)
  $("input.rewardsBudget").blur(valid.rewards.budget)
  $(".campaingType").change(function(){
    $(".pageLink").attr("placeholder","Link")
    $(".subOptions").html("")
    let x = $(this).val()
    if(data[x]){
      let h
      for(let i in data[x]){
        h += ("<option value='"+i+"'>"+i+"</option>")
        $(".subOptions").html(h)
      }
      if(x == "facebook")
        $(".pageLink").attr("placeholder","Facebook Page Link")
      else if(x == "twitter")
        $(".pageLink").attr("placeholder","Twitter Account Link")
      else if(x == "youtube")
        $(".pageLink").attr("placeholder","Youtube Video Link")
      else if(x == "website")
        $(".pageLink").attr("placeholder","Website Link")
      valid.campaing.type()
      valid.campaing.setName(x)
    }
  })
  $(".submit1").on("click",function(){
    valid.campaing.all()
    if($(".campaingName ~ .e").attr("data-e") == "0" && $(".campaingType ~ .e").attr("data-e") == "0" && $(".pageLink ~ .e").attr("data-e") == "0"){
      formSwitch($(".form form.active"),true)
      $(".i.block.active").removeClass("active").next().addClass("active")
    }
  })
  $(".submit2").on("click",function(e){
    e.preventDefault()
    formSwitch($(".form form.active"),true)
    $(".i.block.active").removeClass("active").next().addClass("active")
  })
  $(".submit3").on("click",function(e){
    e.preventDefault()
    valid.rewards.all()
    valid.rewards.table()
  })
  let checkList = false

  locationChiping = e => {
    userData.location.push(e)
    $(".audienceLocation ~ .chips").append("<div class='chip' style='display: none; visibility: hidden' data-index='"+(userData.location.length-1)+"'>"+e.address+"<div class='icon'><div class='fa fa-times'></div></div></div>")
    $(".chips .chip").each(function(){
      if($(this).is(":hidden"))
        $(this).css({"visibility":"visible"}).fadeIn(400)
    })
  }

  $(".chips").on("click",".chip .fa",function(){
    let i = $(this).parent().parent()
    userData.location.splice(i.data("index"),1)
    i.fadeOut(300,function(){
      $(this).remove()
    })
  })

  let intrestList = [
    "Beauty","Books","Buisness","Careers","Education","Events","Faimly",
    "Food","Gaming","Garden","Health","Hobbies","Home","law","Life Stages",
    "Movies","Music","Presonal Finance","Pets","Science","Society","literature",
    "Parenting","Drink","Intrest","Goverment","Politics","Telivision","Radio",
    "Sports","Style","Fashion","Technology","Computing","Travel"
  ].sort()
  for(let i in intrestList){
    $(".audienceIntrestGroup .i").append("<div class='col-sm-3 col-xs-5 audienceIntrestBase'><input type='checkbox' class='audienceIntrest' id='"+intrestList[i]+"' value='"+intrestList[i]+"'><label for='"+intrestList[i]+"'>"+intrestList[i]+"</label></div>")
  }
  var places = new google.maps.places.Autocomplete(document.getElementById('txtPlaces'))
  google.maps.event.addListener(places, 'place_changed', function(){
      var place = places.getPlace()
      let i = {}
      i.address = place.formatted_address
      i.latitude = place.geometry.location.lat()
      i.longitude = place.geometry.location.lng()
      locationChiping(i)
      $(".audienceLocation").val("")
  })
})
