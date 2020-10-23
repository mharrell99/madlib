function createParagraph () {

    let adjectiveOne = document.getElementById("adjectiveOne").value;
    let nounOne = document.getElementById("nounOne").value;
    let adjectiveTwo = document.getElementById("adjectiveTwo").value;
    let adverbOne = document.getElementById("adverbOne").value;
    let adverbTwo = document.getElementById("adverbTwo").value;
    let adverbThree = document.getElementById("adverbThree").value;
    let pronoun = document.getElementById("pronoun").value;
    let nounTwo = document.getElementById("nounTwo").value;
    let verbOne = document.getElementById("verbOne").value;
    let adjectiveThree = document.getElementById("adjectiveThree").value;
    let adjectiveFour = document.getElementById("adjectiveFour").value;
    let nounThree = document.getElementById("nounThree").value;
    let nounFour = document.getElementById("nounFour").value;
    let adverbFour = document.getElementById("adverbFour").value;
    let nounFour = document.getElementById("nounFour").value;
    let nounFive = document.getElementById("nounFive").value;


    let paragraph = `<p>Maiya was a hardworking; and ${adjectiveOne} Engineer. She took her time everyday to make sure she knew exactly what to do. Her ${nounOne} was to create and build her future the ${adjectiveTwo}. She ${adverbOne} in herself and the ${adverbTwo} she was being lead on. Maiya  ${adverbThree} of new opportunities to groe her ${pronoun} and her ${nounTwo}. Maiya had a hard time in the beginning, she did not  ${verbOne} everything that she felt she should. ${adjectiveThree} work and ${adjectiveFour} lead her to being the best in whatever she did. Maiya knew that without God and his ${nounThree} within her, she would be nowhere of where she is ${nounFour}. So with her ${adverbFour} and ${nounFive} ; she was able to Engineer a new life for herself.</p>`;


    document.getElementById("answer").innerHTML = paragraph;
}