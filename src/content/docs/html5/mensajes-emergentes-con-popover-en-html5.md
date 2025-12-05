---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
slug: /html5/mensajes-emergentes-con-popover-en-html5/
author: victor_cuervo
---

Los que hemos trabajado en el desarrollo web desde sus principios hemos vivido lo complejo que era gestionar una ventana emergente en una web. En este artículo vamos a ver lo sencillo que es crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/) siguiendo un estándar.


### Un poco de historia de los mensajes emergentes


Y es que antes de que se estandarizase, y pudiésemos crear [código en HTML5](https://lineadecodigo.com/categoria/html5/) para poder crear mensajes emergentes, hemos pasado por muchas épocas y alternativas diferentes.


En primer lugar teníamos las **ventanas emergentes o pop-ups** que se abrían mediante JavaScript. Y se podían mandar mensajes mediante funciones como [`alert()`](https://www.w3api.com/DOM/Window/alert/) o [`prompt()`](https://www.w3api.com/DOM/Window/prompt/). Incluso se lanzaban ventanas emergente que se ponían en primer plano y que acababan bloqueando la ventana padre. Estas ventanas eran muy intrusivas, no cumplían ningún estándar de accesibilidad y acabaron siendo bloqueadas por los navegadores.


Después llegaron las librerías [JavaScript](https://www.manualweb.net/javascript/), como el caso de [desarrollos en jQuery](https://lineadecodigo.com/categoria/jquery/), que nos permitían crear ventanas modales, popovers o lightboxes de una forma más elegante, pero seguían siendo soluciones propietarias que no seguían ningún estándar.


Finalmente, con [HTML5](https://www.manualweb.net/html5/) se ha introducido el atributo [`popover`](https://w3api.com/HTML/popover/) que nos permite crear mensajes emergentes de una forma nativa y estandarizada. Esta nueva característica nos ofrece una solución integrada directamente en el [lenguaje HTML](https://lineadecodigo.com/categoria/html5/), sin necesidad de depender de librerías externas. Lo que nos facilita enormemente la creación de mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/).


Además ha introducido otros elementos en [HTML5](https://www.manualweb.net/html5/) como [`dialog`](https://w3api.com/HTML/dialog/) que también nos permiten crean ventanas emergentes de dialogo.


### Casos de uso del elemento popover en HTML5


Antes de crear mensajes emergentes con [`popover`](https://w3api.com/HTML/popover/) en [HTML5](https://www.manualweb.net/html5/) vamos a ver qué casos de usos tenemos para poder aplicar esta solución. Los casos de uso más comunes para utilizar el elemento [`popover`](https://w3api.com/HTML/popover/) en [HTML5](https://www.manualweb.net/html5/) son múltiples y variados, permitiendo mejorar significativamente la experiencia del usuario en diferentes situaciones de interacción con la página web.

- **Menús contextuales** - Ideales para mostrar opciones adicionales o acciones específicas relacionadas con un elemento de la página cuando el usuario interactúa con él. Estos menús pueden contener enlaces, botones o cualquier otro elemento interactivo que permita al usuario realizar acciones contextuales de manera eficiente y natural.
- **Ayuda contextual** - Perfectos para proporcionar información adicional o explicaciones detalladas sobre elementos específicos sin interrumpir el flujo principal de la página. Esta funcionalidad es especialmente útil para mostrar definiciones, consejos o instrucciones paso a paso que ayuden al usuario a comprender mejor el contenido o la funcionalidad de la página.
- **Formularios flotantes** - Útiles para presentar formularios secundarios o campos de entrada adicionales que no necesitan estar siempre visibles en la interfaz principal. Esta aproximación mejora significativamente la experiencia del usuario al mantener la interfaz limpia y ordenada, mostrando información adicional solo cuando es necesaria.
- **Paneles de configuración** - Excelentes para mostrar opciones de configuración o preferencias que el usuario puede ajustar sin necesidad de navegar a otra página. Estos paneles pueden incluir múltiples controles y opciones de personalización, permitiendo a los usuarios modificar sus preferencias de manera rápida y conveniente mientras mantienen el contexto de su actividad principal.

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VXGUKGY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtaozqf6g3qB%2Bk78Z5Xy58vuoFJoY7isTpAC9OeFR16QIgDjxPUu0Pu7sfDzi8hEIKkUSIUnRJVL2ANAACE%2BWzfLkq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDP8NAsZp0KiZ2IdnCCrcA57JmNutBmssvYNWq%2BpmVZ05ao9YM2c6YYFgNXGaOCdpzInRu6tY1QHerGIKguTmgRYObLAm%2FyxHponiMsE68rTJQCtWPY9ZagXgRNGvZAjspl5W%2BdLxw5DyNxeP8ZIuo7OpPUJxVNdn4eSNTH1wEab14LLtOTl08wWRst6yJ2HPjZWCsL1ASbNEJCGgkGDz3IBVYh0BdGo%2BEw%2FAnynEIYddWikRr8EN%2FM7gLfobQd7Lj%2FXLVqgN2XpgIuieYFUw1V7zsqw8FGmdTXfTCg%2BGEI8lVs1xyoy1Snw8f%2BqR91iB49IGBD8eWWaMfrQm9etG7MLZfummkJerUvb0t0d6eMBRbhnLFoFPcOcQNsralbSlPkUszQZH11X3K0CCnB5zYXsYhg5HSKE30jDDd%2BUH1lzsgIuHYx6EqKrGUfuTvHRzm2SvrSJcKhki73ADJFuqbULav7ABYp0BHwch3L%2F1Yn5c5a11sU0AzCaiCq9x2MXj2dvj9tWxQI9hyQ0vwLUdI3ikuYVwfLI0ddeLCfoc84o70m9iggXkohSBAZ0WzHuawjY62mOCAJCGhJEpIJsRfv57HjF3ErREi8WsHMNUvm26zhUY%2BazY1gIciQw9QTgkYmQBN1UbxCGTPUyXMMHGzckGOqUBaOFtjo4gY%2BkSZjYxKPYoywves1%2B0F7BasVWSTAhSbopWyIR%2BhkVnnYoXgVEOFGqTp%2BPjn0KHch3SWsNkR%2BuHQydww7YzhL2co0A5%2Bs%2BE4Jk5z8vFtzGbloVrHQX8XDA7rMzR6CHYkvP5IxvgOFIaV9VjyehKPaXTVQf302v45z46aZXvwC02Yh4b51TuHWr6pNII9PX5IpKl5TRfEpsWpt2In82E&X-Amz-Signature=4a0b29bb8e3e7ca5171621d2bc52053c5ee2a72c07726ac00f7ac0152af97b2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Crear mensajes emergentes con popover en HTML5


Ahora ya nos vamos a poner a codificar para poder crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/). Para ello, en [HTML5](https://www.manualweb.net/html5/), aparece el atributo general [`popover`](https://w3api.com/HTML/popover/) que nos sirve para poder crear mensajes emergentes. El funcionamiento de los popover en [HTML5](https://www.manualweb.net/html5/) tienes dos partes: por un lado la forma en la que definimos el contenido del popover y por otro cómo asociamos a un elemento la capacidad de mostrar el popover.


Para poder definir cual es el elemento popover dentro de nuestra [página web en HTML5](https://lineadecodigo.com/categoria/html5/) lo que hacemos es asignarle el atributo global [`popover`](https://w3api.com/HTML/popover/):


```html
<elemento popover="auto|manual|hint" id="identificador"></elemento>
```


Es muy importante que este elemento que tiene el atributo [`popover`](https://w3api.com/HTML/popover/) también tenga informado el atributo [`id`](https://www.w3api.com/HTML/id/) dándole un identificador único en la página. Esto es debido a que el elemento que muestre el popover deberá de indicar el id del elemento que contiene el popover.


Así, podemos crear una capa mediante un elemento [`div`](https://www.w3api.com/HTML/div/) que nos permita el mostrar un contenido con una imagen de la siguiente forma:


```html
<div popover id="pop1">
  <h2>Este es un popover de HTML5</h2>
  <img src="imagen.png" alt="Imagen en Popover">
</div>
```


La siguiente parte para crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/) será el asociar a un elemento la capacidad de mostrar el popover cuando se interactue con dicho elemento. Por lo cual tiene que ser un elemento de acción como puede ser un [`button`](https://www.w3api.com/HTML/button/) o un elemento [`input`](https://www.w3api.com/HTML/input/). O bien asociar un comportamiento de interacción a un elemento mediante algún tipo de evento como [`onclick`](https://www.w3api.com/HTML/onclick/), [`onmouseover`](https://www.w3api.com/HTML/onmouseover/),…


En el caso que tengamos un elemento de acción vamos a utilizar el atributo popovertarget. Mediante el atributo [`popovertarget`](https://www.w3api.com/HTML/button/popovertarget/) asociamos el [`id`](https://www.w3api.com/HTML/id/) que contiene el elemento [`popover`](https://w3api.com/HTML/popover/).


```html
<elemento popovertarget="idpopover"></elemento>
```


Por lo que en nuestro caso vamos a asignar a un elemento [`button`](https://www.w3api.com/HTML/button/) la capa que acabamos de crear:


```html
<button popovertarget="pop1">Haz click aquí</button>
```


Vemos que utilizamos el id `“pop1”` que es el id que le habíamos asignado a nuestro elemento [`popover`](https://w3api.com/HTML/popover/).


Otra forma de poder crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/) sería mostrar el popover sería mediante [código en Javascript](https://lineadecodigo.com/categoria/javascript/). En este caso tendremos que asociar a un elemento un evento y en dicho evento mostrar el popover mediante el método [`.showPopover()`](https://w3api.com/HTMLDOM/HTMLElement/showPopover/) del elemento [`HTMLElement`](https://w3api.com/HTMLDOM/HTMLElement/).


```javascript
let boton2 = document.getElementById("boton2");
let pop1 = document.getElementById("pop1");

boton2.onclick = function () {            
    pop1.showPopover();
}
```


En ambos casos, al pulsar sobre el botón, se mostrará el popover a pantalla completa.


### Diferencia entre popover y dialog


Ahora que hemos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/) mediante el atributo [`popover`](https://w3api.com/HTML/popover/) y que sabemos cómo [gestionar las ventanas emergentes mediante un elemento dialog](https://lineadecodigo.com/html5/mostrar-una-ventana-dialogo-en-html5/), vamos a ver sus diferencias y cuándo utilizar cada uno de ellos.


Las principales diferencias entre el atributo [`popover`](https://w3api.com/HTML/popover/) y el elemento [`dialog`](https://w3api.com/HTML/dialog/) radican en su propósito y comportamiento.


**¿Cuándo utilizar dialog?**


El elemento [`dialog`](https://w3api.com/HTML/dialog/) está diseñado específicamente para interacciones modales que requieren una respuesta explícita del usuario. Es ideal para situaciones donde necesitamos que el usuario tome una decisión importante o complete una acción crítica, como confirmaciones de acciones irreversibles, formularios de registro importantes o ventanas de configuración esenciales. El elemento [`dialog`](https://w3api.com/HTML/dialog/) bloquea intencionadamente la interacción con el resto de la página para asegurar que el usuario se centre en la tarea actual y proporcione la respuesta necesaria antes de continuar.


**¿Cuándo utilizar popover?**


El atributo [`popover`](https://w3api.com/HTML/popover/) está optimizado para presentar contenido informativo o contextual de manera más ligera y flexible. Es la opción perfecta cuando queremos mostrar información adicional, sugerencias, ayuda contextual o menús secundarios sin interrumpir significativamente la experiencia del usuario. A diferencia del [`dialog`](https://w3api.com/HTML/dialog/), el popover mantiene una interacción más natural y fluida con la página principal, permitiendo que el usuario pueda ignorarlo fácilmente si así lo desea y continuar con su actividad principal sin obstáculos. Esta característica lo hace especialmente útil para mejorar la experiencia del usuario sin crear interrupciones innecesarias en el flujo de trabajo.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z2MM5OK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJkd4Ol2FP3wOd9WF8pFgj4c5xZm3UeDoZyBki8Z5IiQIhAPVbnJNY%2FAV5f049Ka12We2KfTo1LiTekcVHp4DpLImnKv8DCGgQABoMNjM3NDIzMTgzODA1IgzGicPg2OwckT56bDAq3APrwhRFtwVSM6DTzA0XHLvHi2DWxbwKNp4r3NlQBkCaDvyhOsAq18I9G8fLSazw416ScheYxoxDRmC4vq1qa0IlRo6MW%2BQSx8N4kmDk0MrjhiGhPeSXmX5GMt9K6WR6algPbmFlBvwVf4dkDUKVfGGSfNnDe26n6LntIjAWs3j12CnAi8pvHtAtubaFRup5oTdE9weuiWYK3P3xRJSehWgSswfDAN3Q%2Bw0EXkwHbaXgDEOS%2FBO2lm86MII4%2FCaFgqJcaUYhpkCpsaRCxz%2FeePNHHpS2Zghc5AHqR8jMggvSYjjDqiLnwhuXx6umPz3YK2ejwRahPCnL3xe2VtnIEWkxtMhshAfuL7sp0uuCuLhrWa8%2F6Nay9B8vSFQx6MMgdi0g%2F2s7mToTo5ePUFt6lIxO7y1ZmpbO7jFMGSHdws9hofvrrVKb%2B%2BMBIPzT7JHbtAoDhT%2BnDXFKPo8Qo7Ws2JXIcSi2mpqeQyUhXOMWZ5LDtDoTaF08%2Frkir4XOqls7I8MS%2FqYY44vkhuHT7GwhY8CovSKg55hNQurIygIiTp%2BzqHI3zeFHfvLdQigbDdQNczzTNmBfeJC1vFyg6dirSg%2F6tvLHdUQofA4pTTB%2FcDEKfRXzn%2BVdGD6jr35POTCUxs3JBjqkAVlDq9%2F3mhC5oYkKIMt6Bipup977pThHNC5LJB659PAUMm93dCUEw9ty1suT4VMuNnR5VGCMjm69wbrqTRyYCz6BD%2FEh2tS%2Fq9zNR3hlXDdiOZGdTAac7UP8RIfUFu7%2FLeza8R2A15ReHtcj5%2B9lwr9cr1PHHu2qSaJGwBK54XHtM8Bni9lw850wqwrsGoEELCD%2FRTSWeWhj4NOi%2F1BfBLG%2Fh4Fb&X-Amz-Signature=88ae3d767bfdda9c2451b190788cae02df955c748639e8bd4bf39d8592181330&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

