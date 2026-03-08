<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>Quiz – Transports publics suisses</title>
<style>
body {
    font-family: Arial, sans-serif;
    background: #f2f2f2;
    padding: 20px;
}

.quiz-container {
    background: white;
    padding: 20px;
    border-radius: 10px;
    max-width: 600px;
    margin: auto;
}

h1 {
    text-align: center;
}

.question {
    margin-bottom: 20px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

.result {
    margin-top: 20px;
    font-weight: bold;
}
</style>
</head>
<body>

<div class="quiz-container">
<h1>Quiz – Transports publics suisses 🚆</h1>

<div class="question">
<p>1. Que signifie CFF ?</p>
<label><input type="radio" name="q1" value="0"> Compagnie Ferroviaire Française</label><br>
<label><input type="radio" name="q1" value="1"> Chemins de fer fédéraux suisses</label><br>
<label><input type="radio" name="q1" value="0"> Centrale des trains fédéraux</label>
</div>

<div class="question">
<p>2. Quel abonnement permet de voyager librement dans presque toute la Suisse ?</p>
<label><input type="radio" name="q2" value="1"> L’abonnement général (AG)</label><br>
<label><input type="radio" name="q2" value="0"> L’abonnement simple</label><br>
<label><input type="radio" name="q2" value="0"> Le billet journalier local</label>
</div>

<div class="question">
<p>3. Quel est le réseau de métro automatique de Lausanne ?</p>
<label><input type="radio" name="q3" value="0"> M1</label><br>
<label><input type="radio" name="q3" value="1"> M2</label><br>
<label><input type="radio" name="q3" value="0"> M3</label>
</div>

<div class="question">
<p>4. Quel train rapide suisse relie les grandes villes ?</p>
<label><input type="radio" name="q4" value="1"> InterCity</label><br>
<label><input type="radio" name="q4" value="0"> TramExpress</label><br>
<label><input type="radio" name="q4" value="0"> MetroFast</label>
</div>

<button onclick="checkQuiz()">Voir le résultat</button>

<div class="result" id="result"></div>
</div>

<script>
function checkQuiz() {
    let score = 0;

    let answers = ["q1","q2","q3","q4"];

    answers.forEach(q => {
        let selected = document.querySelector('input[name="'+q+'"]:checked');
        if(selected){
            score += parseInt(selected.value);
        }
    });

    document.getElementById("result").textContent =
        "Ton score est : " + score + " / 4";
}
</script>

</body>
</html>