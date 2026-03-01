const moods = [
  "motivated",
  "confused",
  "fearless",
  "overwhelmed",
  "curious",
  "disciplined",
  "restless",
  "focused",
  "optimistic",
  "skeptical"
];

const actions = [
  "start a new project",
  "learn a new skill",
  "take a bold risk",
  "avoid responsibility",
  "challenge yourself",
  "overthink everything",
  "wake up early",
  "ignore distractions",
  "rewrite your goals",
  "question your limits"
];

const outcomes = [
  "and surprise yourself.",
  "and regret nothing.",
  "and unlock hidden potential.",
  "but learn a valuable lesson.",
  "and grow faster than expected.",
  "and discover new opportunities.",
  "but realize discipline matters.",
  "and gain unexpected clarity.",
  "and build unstoppable momentum.",
  "but understand the cost of comfort."
];

function  motivationalMessage() {
    
    const mood = moods[Math.floor(Math.random() * moods.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];
    const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];

    const answer = `${mood}, ${action} ${outcome}`;

    return answer;
}


console.log(motivationalMessage());

