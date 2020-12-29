var possibleGoals = [0,1];

var team1 =
{
    name  : "Real Madrid FC",
    goals :[],
    score :0
}
var team2 =
{
    name  : "Hesca FC",
    goals :[],
    score :0
}

window.onload = () =>
{
    selectTurn();
    updateButtonText();
    updateScore();
    updateRuns();
    updateName();
}

var turn;

var selectTurn = () =>{
    console.log("start function selectTurn");
    turn = Math.round(Math.random()) + 1;   
    console.log(turn);
}

var updateButtonText = () =>{
    console.log("start function updateButtonText");

    var button = document.getElementById("btnShoot");
    var result = document.getElementById("result");
    // var winnerImg = document.getElementById("winImg");
    button.textContent = `${turn === 1 ? team1.name :team2.name} shot`;

    if(team1.goals.length == 5 &&  team2.goals.length == 5)
    {
        button.remove();
        result.textContent = team1.score === team2.score ? `Match Draw` : `${team1.score > team2.score ? team1.name : team2.name} wins`;
        //winnerImg.style.visibility ="visible";
        //  if (winnerImg.style.visibility === 'hidden')
        //  {
        //     winnerImg.style.visibility = 'visible';
        //  } 
        //   else
        //  {
        //     winnerImg.style.visibility = 'hidden';
        //  }
    }
    else
    {
        //turn = turn === 1 ? 2 : 1;
        turn = team1.goals.length == 5 ? 2 : team2.goals.length == 5 ? 1 : turn; 
        button.textContent = `${turn == 1 ? team1.name : team2.name} Strike`;
    }
}

var updateScore = ()=>{
    document.getElementById('team-1-goals').textContent = team1.score;
    document.getElementById('team-2-goals').textContent = team2.score;
}

function updateName()
{
    document.getElementById('team-1-name').textContent = team1.name;
    document.getElementById('team-2-name').textContent = team2.name;
}

var handleShootButtonClick =()=>{

    console.log("Checking Button click");
    var goal=possibleGoals[Math.round(Math.random()*(possibleGoals.length-1))];
    console.log(goal);
    //goal= goal === 0 ? 0:goal;
    console.log(goal);
    if(turn==1)
    {
        team1.goals.push(goal);
        team1.score =calculateScore(team1.goals);
    }
    else
    {
        team2.goals.push(goal);
        team2.score =calculateScore(team2.goals);
    }
    updateButtonText();//update team name 
    updateRuns();
    updateScore();
    //turn = turn == 1 ? 2 : 1; // logic for alternate turn for football strike
}


var calculateScore =(goal)=>{
    return goal.map(goal =>{
        return goal == 'F'? 0 : goal;
    }).reduce((total,goal)=>total+goal);
}


updateRuns = ()=>
{
    var TeamOneGoalsElement = document.getElementById("team-1-round-shots").children;
    var TeamTwoGoalsElement = document.getElementById("team-2-round-shots").children;
    team1.goals.forEach((goal,index) => {
        goal === 1 ? TeamOneGoalsElement[index].style.backgroundColor ="Green" :TeamOneGoalsElement[index].style.backgroundColor ="rgba(255,0,0,1)";
    });
    team2.goals.forEach((goal,index) => {
        goal === 1 ? TeamTwoGoalsElement[index].style.backgroundColor ="Green" :TeamTwoGoalsElement[index].style.backgroundColor ="rgba(255,0,0,1)";
    });
}