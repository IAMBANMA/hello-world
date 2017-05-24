//有问题的代码
// var AnswerType = {
//     Choice: 0,
//     Input: 1
// };

// function question(label, answerType, choices) {
//     return {
//         label: label,
//         answerType: answerType,
//         choices: choices
//     };
// }

// var view = (function() {
//     function renderQuestion(target, question) {
//         var questionWrapper = document.createElement('div');
//         var questionLabel = document.createElement('div');
//         var label = document.createTextNode(question.label);
//         questionLabel.appendChild(label);
//         var answer = document.createElement('div');
//         if (question.answerType == AnswerType.Choice) {
//             var input = document.createElement('select');
//             var len = question.choices.length;
//             for (var i = 0; i < len; i += 1) {
//                 var option = document.createElement('option');
//                 option.value = question.choices[i];
//                 option.text = question.choices[i];
//                 input.appendChild(option);
//             }
//         } else if (question.answerType == AnswerType.Input) {
//             var input = document.createElement('input');
//             input.type = 'text';
//         }

//         answer.appendChild(input);
//         questionWrapper.appendChild(questionLabel);
//         questionWrapper.appendChild(answer);
//         target.appendChild(questionWrapper);
//     }

//     return {
//         render: function(target, questions) {
//             for (var i = 0; i < questions.length; i++) {
//                 renderQuestion(target, questions[i]);
//             }
//         }
//     }
// }());
// var questions = [question('Have you used tobacco products within the last 30 days?', AnswerType.Choice, ['Yes', 'No']),
//     question('What medications are you currently using?', AnswerType.Input)
// ];

// var questionRegion=document.getElementById('questions');
// view.render(questionRegion,questions);








//重构后的最终代码

function questionCreator(spec, my) {
    var that = {};

    // my = my || {};


    // my.renderInput = function() {
    //     // throw "not implemented";
    // };

    that.render = function(target) {
        var questionWrapper = document.createElement('div');
        questionWrapper.className = 'question';

        var questionLabel = document.createElement('div');
        questionLabel.className = 'question-label';
        var label = document.createTextNode(spec.label);
        questionLabel.appendChild(label);

        var answer = my.renderInput();

        questionWrapper.appendChild(questionLabel);
        questionWrapper.appendChild(answer);
        return questionWrapper;
    };

    return that;
}

function choiceQuestionCreator(spec) {

    var my = {
            renderInput: function() {
                var input = document.createElement('select');
                var len = spec.choices.length;
                for (var i = 0; i < len; i++) {
                    var option = document.createElement('option');
                    option.text = spec.choices[i];
                    option.value = spec.choices[i];
                    input.appendChild(option);
                }

                return input;
            }
        },
        that = questionCreator(spec, my);

    return that;
}

function inputQuestionCreator(spec) {

    var my = {
            renderInput: function() {
                var input = document.createElement('input');
                input.type = 'text';
                return input;
            }
        },
        that = questionCreator(spec, my);

    return that;
}

var view = {
    render: function(target, questions) {
        for (var i = 0; i < questions.length; i++) {
            target.appendChild(questions[i].render());
        }
    }
};

var questions = [
    choiceQuestionCreator({
        label: 'Have you used tobacco products within the last 30 days?',
        choices: ['Yes', 'No']
    }),
    inputQuestionCreator({
        label: 'What medications are you currently using?'
    })
];

var questionRegion = document.getElementById('questions');

view.render(questionRegion, questions);
