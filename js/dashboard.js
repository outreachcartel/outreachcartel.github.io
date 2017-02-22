$(window).load(function(){
  // $("input#ico").prop('checked', true)

  let withdraw = {network:{}}
  withdraw.network = {
    jazz : [],
    zong : [],
    warid : [],
    ufone : [],
    telenor : []
  }
  c = i => console.log(i)
  withdraw.network.jazz = (("0300, 0301, 0302, 0303, 0304, 0305, 0306, 0307, 0308, 0309,03000").split(","))
  withdraw.network.telenor = (("0340,0341,0342,0343,0344,0345,0346,0347").split(","))
  withdraw.network.ufone = (("0330,0331,0332,0333,0334,0335,0336,0337").split(","))
  withdraw.network.warid = (("0320,0321,0322,0323,0324,0325").split(","))
  withdraw.network.zong = (("0310,0311,0312,0313,0314,0315").split(","))

  $(".networkType").on("change",function(){
    let val = $(this).val()
    if(val != 0){
      let subHtml = ""
      for(let i in withdraw.network)
        if(val == i){
          for(let j=0; j<withdraw.network[i].length; j++)
            subHtml += `<option value='${withdraw.network[i][j]}'>${withdraw.network[i][j]}</option>`
          $(".networkType + .subOptions.sub").html(subHtml)
        }
  }
  })
})
