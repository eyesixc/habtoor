//для первой плаши
var mess3 = document.querySelector('.mess3');
var mess4 = document.querySelector('.mess4');
var mess5 = document.querySelector('.mess5');

document.querySelector('.ques1').addEventListener('mouseover', function() {
    var paragraphElement = this.querySelector('p');
    var text = paragraphElement.innerText;
    var styles = window.getComputedStyle(paragraphElement);

    mess3.innerText = text;
    mess3.style.textAlign = 'center';
    mess3.style.marginTop = '5px';
    mess3.style.color = styles.color;
    mess3.style.fontFamily = styles.fontFamily;
    mess3.style.fontSize = '25px';
    mess3.style.fontStyle = styles.fontStyle;
    mess3.style.fontWeight = styles.fontWeight;
    mess3.style.lineHeight = styles.lineHeight;

    mess4.innerText = 'Извините за неудобства.\nСейчас свяжимся с вашим курьером.';
    mess4.style.textAlign = 'center';
    mess4.style.paddingTop = '10px';
    mess4.style.color = styles.color;
    mess4.style.fontFamily = styles.fontFamily;
    mess4.style.fontSize = '18px';
    mess4.style.fontStyle = styles.fontStyle;
    mess4.style.fontWeight = styles.fontWeight;
    mess4.style.lineHeight = styles.lineHeight;

    mess5.innerText = 'Спасибо.\n Буду ждать вашего ответа.';
    mess5.style.textAlign = 'center';
    mess5.style.paddingTop = '10px';
    mess5.style.color = styles.color;
    mess5.style.fontFamily = styles.fontFamily;
    mess5.style.fontSize = '22px';
    mess5.style.fontStyle = styles.fontStyle;
    mess5.style.fontWeight = styles.fontWeight;
    mess5.style.lineHeight = styles.lineHeight;

    mess3.classList.add('typing-animation');
    mess4.classList.add('typing-animation');
    mess5.classList.add('typing-animation');

    mess3.style.borderRight = '1px solid #000';
    mess4.style.borderRight = '1px solid #000';
    mess5.style.borderRight = '1px solid #000';

    mess3.addEventListener('animationend', function() {
        this.style.borderRight = 'none';
    });

    mess4.addEventListener('animationend', function() {
        this.style.borderRight = 'none';
    });

    mess5.addEventListener('animationend', function() {
        this.style.borderRight = 'none';
    });

    this.addEventListener('mouseout', function() {
        mess3.innerText = '';
        mess4.innerText = '';
        mess5.innerText = '';
        mess3.classList.remove('typing-animation');
        mess4.classList.remove('typing-animation');
        mess5.classList.remove('typing-animation');
    });
});

//для второй плашки
document.querySelector('.ques2').addEventListener('mouseover', function() {
    var paragraphElement = this.querySelector('p');
    var text = paragraphElement.innerText;
    var styles = window.getComputedStyle(paragraphElement);

    mess3.innerText = text;
    mess3.style.textAlign = 'center';
    mess3.style.marginTop = '5px';
    mess3.style.color = styles.color;
    mess3.style.fontFamily = styles.fontFamily;
    mess3.style.fontSize = '25px';
    mess3.style.fontStyle = styles.fontStyle;
    mess3.style.fontWeight = styles.fontWeight;
    mess3.style.lineHeight = styles.lineHeight;

    mess4.innerText = 'Напишите пожалуйста\n номер заказа и причину отказа';
    mess4.style.textAlign = 'center';
    mess4.style.paddingTop = '7px';
    mess4.style.color = styles.color;
    mess4.style.fontFamily = styles.fontFamily;
    mess4.style.fontSize = '22px';
    mess4.style.fontStyle = styles.fontStyle;
    mess4.style.fontWeight = styles.fontWeight;
    mess4.style.lineHeight = styles.lineHeight;

    mess5.innerText = 'Номер закза: #34BAR56 \n Причина: Долгое время \nдоставки';
    mess5.style.textAlign = 'center';
    mess5.style.paddingTop = '1px';
    mess5.style.color = styles.color;
    mess5.style.fontFamily = styles.fontFamily;
    mess5.style.fontSize = '20px';
    mess5.style.fontStyle = styles.fontStyle;
    mess5.style.fontWeight = styles.fontWeight;
    mess5.style.lineHeight = styles.lineHeight;

    mess3.classList.add('typing-animation');
    mess4.classList.add('typing-animation');
    mess5.classList.add('typing-animation');

    mess3.style.borderRight = '1px solid #000';
    mess4.style.borderRight = '1px solid #000';
    mess5.style.borderRight = '1px solid #000';

    mess3.addEventListener('animationend', function() {
        this.style.borderRight = 'none';
    });

    mess4.addEventListener('animationend', function() {
        this.style.borderRight = 'none';
    });

    mess5.addEventListener('animationend', function() {
        this.style.borderRight = 'none';
    });

    this.addEventListener('mouseout', function() {
        mess3.innerText = '';
        mess4.innerText = '';
        mess5.innerText = '';
        mess3.classList.remove('typing-animation');
        mess4.classList.remove('typing-animation');
        mess5.classList.remove('typing-animation');
    });
});

//для третей плашки

document.querySelector('.ques3').addEventListener('mouseover', function() {
    var paragraphElement = this.querySelector('p');
    var text = paragraphElement.innerText;
    var styles = window.getComputedStyle(paragraphElement);

    mess3.innerText = text;
    mess3.style.textAlign = 'center';
    mess3.style.marginTop = '6px';
    mess3.style.color = styles.color;
    mess3.style.fontFamily = styles.fontFamily;
    mess3.style.fontSize = '23px';
    mess3.style.fontStyle = styles.fontStyle;
    mess3.style.fontWeight = styles.fontWeight;
    mess3.style.lineHeight = styles.lineHeight;

    mess4.innerText = 'Напишите пожалуйста\n номер заказа';
    mess4.style.textAlign = 'center';
    mess4.style.paddingTop = '7px';
    mess4.style.color = styles.color;
    mess4.style.fontFamily = styles.fontFamily;
    mess4.style.fontSize = '22px';
    mess4.style.fontStyle = styles.fontStyle;
    mess4.style.fontWeight = styles.fontWeight;
    mess4.style.lineHeight = styles.lineHeight;

    mess5.innerText = 'Номер закза: #34BAR56';
    mess5.style.textAlign = 'center';
    mess5.style.paddingTop = '25px';
    mess5.style.color = styles.color;
    mess5.style.fontFamily = styles.fontFamily;
    mess5.style.fontSize = '22px';
    mess5.style.fontStyle = styles.fontStyle;
    mess5.style.fontWeight = styles.fontWeight;
    mess5.style.lineHeight = styles.lineHeight;

    mess3.classList.add('typing-animation');
    mess4.classList.add('typing-animation');
    mess5.classList.add('typing-animation');

    mess3.style.borderRight = '1px solid #000';
    mess4.style.borderRight = '1px solid #000';
    mess5.style.borderRight = '1px solid #000';

    mess3.addEventListener('animationend', function() {
        this.style.borderRight = 'none';
    });

    mess4.addEventListener('animationend', function() {
        this.style.borderRight = 'none';
    });

    mess5.addEventListener('animationend', function() {
        this.style.borderRight = 'none';
    });

    this.addEventListener('mouseout', function() {
        mess3.innerText = '';
        mess4.innerText = '';
        mess5.innerText = '';
        mess3.classList.remove('typing-animation');
        mess4.classList.remove('typing-animation');
        mess5.classList.remove('typing-animation');
    });
});

//для третей плашки

document.querySelector('.ques4').addEventListener('mouseover', function() {
    var paragraphElement = this.querySelector('p');
    var text = paragraphElement.innerText;
    var styles = window.getComputedStyle(paragraphElement);

    mess3.innerText = text;
    mess3.style.textAlign = 'center';
    mess3.style.marginTop = '6px';
    mess3.style.color = styles.color;
    mess3.style.fontFamily = styles.fontFamily;
    mess3.style.fontSize = '23px';
    mess3.style.fontStyle = styles.fontStyle;
    mess3.style.fontWeight = styles.fontWeight;
    mess3.style.lineHeight = styles.lineHeight;

    mess4.innerText = 'Сейчас с вами свяжется сотрудник\n для решения вашей проблемы.';
    mess4.style.textAlign = 'center';
    mess4.style.paddingTop = '10px';
    mess4.style.color = styles.color;
    mess4.style.fontFamily = styles.fontFamily;
    mess4.style.fontSize = '19px';
    mess4.style.fontStyle = styles.fontStyle;
    mess4.style.fontWeight = styles.fontWeight;
    mess4.style.lineHeight = styles.lineHeight;

    mess5.innerText = 'Спасибо, уже не нужно! \n На карте было недостаточно \nсредств. Извините!';
    mess5.style.textAlign = 'center';
    mess5.style.paddingTop = '3px';
    mess5.style.color = styles.color;
    mess5.style.fontFamily = styles.fontFamily;
    mess5.style.fontSize = '18px';
    mess5.style.fontStyle = styles.fontStyle;
    mess5.style.fontWeight = styles.fontWeight;
    mess5.style.lineHeight = styles.lineHeight;

    mess3.classList.add('typing-animation');
    mess4.classList.add('typing-animation');
    mess5.classList.add('typing-animation');

    mess3.style.borderRight = '1px solid #000';
    mess4.style.borderRight = '1px solid #000';
    mess5.style.borderRight = '1px solid #000';

    mess3.addEventListener('animationend', function() {
        this.style.borderRight = 'none';
    });

    mess4.addEventListener('animationend', function() {
        this.style.borderRight = 'none';
    });

    mess5.addEventListener('animationend', function() {
        this.style.borderRight = 'none';
    });

    this.addEventListener('mouseout', function() {
        mess3.innerText = '';
        mess4.innerText = '';
        mess5.innerText = '';
        mess3.classList.remove('typing-animation');
        mess4.classList.remove('typing-animation');
        mess5.classList.remove('typing-animation');
    });
});

//для третей плашки

document.querySelector('.ques5').addEventListener('mouseover', function() {
    var paragraphElement = this.querySelector('p');
    var text = paragraphElement.innerText;
    var styles = window.getComputedStyle(paragraphElement);

    mess3.innerText = text;
    mess3.style.textAlign = 'center';
    mess3.style.marginTop = '12px';
    mess3.style.color = styles.color;
    mess3.style.fontFamily = styles.fontFamily;
    mess3.style.fontSize = '16px';
    mess3.style.fontStyle = styles.fontStyle;
    mess3.style.fontWeight = styles.fontWeight;
    mess3.style.lineHeight = styles.lineHeight;

    mess4.innerText = 'Напишите пожалуйста\n номер заказа. Мы свяжемся с \nрестораном из которого вы заказывали.';
    mess4.style.textAlign = 'center';
    mess4.style.paddingTop = '5px';
    mess4.style.color = styles.color;
    mess4.style.fontFamily = styles.fontFamily;
    mess4.style.fontSize = '16px';
    mess4.style.fontStyle = styles.fontStyle;
    mess4.style.fontWeight = styles.fontWeight;
    mess4.style.lineHeight = styles.lineHeight;

    mess5.innerText = 'Номер закза: #34BAR56';
    mess5.style.textAlign = 'center';
    mess5.style.paddingTop = '25px';
    mess5.style.color = styles.color;
    mess5.style.fontFamily = styles.fontFamily;
    mess5.style.fontSize = '22px';
    mess5.style.fontStyle = styles.fontStyle;
    mess5.style.fontWeight = styles.fontWeight;
    mess5.style.lineHeight = styles.lineHeight;

    mess3.classList.add('typing-animation');
    mess4.classList.add('typing-animation');
    mess5.classList.add('typing-animation');

    mess3.style.borderRight = '1px solid #000';
    mess4.style.borderRight = '1px solid #000';
    mess5.style.borderRight = '1px solid #000';

    mess3.addEventListener('animationend', function() {
        this.style.borderRight = 'none';
    });

    mess4.addEventListener('animationend', function() {
        this.style.borderRight = 'none';
    });

    mess5.addEventListener('animationend', function() {
        this.style.borderRight = 'none';
    });

    this.addEventListener('mouseout', function() {
        mess3.innerText = '';
        mess4.innerText = '';
        mess5.innerText = '';
        mess3.classList.remove('typing-animation');
        mess4.classList.remove('typing-animation');
        mess5.classList.remove('typing-animation');
    });
});

//для третей плашки

document.querySelector('.ques6').addEventListener('mouseover', function() {
    var paragraphElement = this.querySelector('p');
    var text = paragraphElement.innerText;
    var styles = window.getComputedStyle(paragraphElement);

    mess3.innerText = text;
    mess3.style.textAlign = 'center';
    mess3.style.marginTop = '6px';
    mess3.style.color = styles.color;
    mess3.style.fontFamily = styles.fontFamily;
    mess3.style.fontSize = '23px';
    mess3.style.fontStyle = styles.fontStyle;
    mess3.style.fontWeight = styles.fontWeight;
    mess3.style.lineHeight = styles.lineHeight;

    mess4.innerText = 'Постарайтесь написать полностью \n ваш вопрос. В скором времни с вами \nсвяжется наш сотрудник.';
    mess4.style.textAlign = 'center';
    mess4.style.paddingTop = '2px';
    mess4.style.color = styles.color;
    mess4.style.fontFamily = styles.fontFamily;
    mess4.style.fontSize = '17px';
    mess4.style.fontStyle = styles.fontStyle;
    mess4.style.fontWeight = styles.fontWeight;
    mess4.style.lineHeight = styles.lineHeight;

    mess5.innerText = 'Посоветуйте лучший ресторан \n из которого можно \nзаказать дотсавку.';
    mess5.style.textAlign = 'center';
    mess5.style.paddingTop = '4px';
    mess5.style.color = styles.color;
    mess5.style.fontFamily = styles.fontFamily;
    mess5.style.fontSize = '18px';
    mess5.style.fontStyle = styles.fontStyle;
    mess5.style.fontWeight = styles.fontWeight;
    mess5.style.lineHeight = styles.lineHeight;

    mess3.classList.add('typing-animation');
    mess4.classList.add('typing-animation');
    mess5.classList.add('typing-animation');

    mess3.style.borderRight = '1px solid #000';
    mess4.style.borderRight = '1px solid #000';
    mess5.style.borderRight = '1px solid #000';

    mess3.addEventListener('animationend', function() {
        this.style.borderRight = 'none';
    });

    mess4.addEventListener('animationend', function() {
        this.style.borderRight = 'none';
    });

    mess5.addEventListener('animationend', function() {
        this.style.borderRight = 'none';
    });

    this.addEventListener('mouseout', function() {
        mess3.innerText = '';
        mess4.innerText = '';
        mess5.innerText = '';
        mess3.classList.remove('typing-animation');
        mess4.classList.remove('typing-animation');
        mess5.classList.remove('typing-animation');
    });
});