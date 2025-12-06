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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PZMOCBF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5hNurQMkzAnSad3l3WZgHxcI%2FE8HQ4nEHIh9k%2FK9N%2BAIgY5kT7%2BMcDfY1dhj0DCW1pudOYXoi1XYvVUOzntKDadkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOnd5vLhSqpYLt71pircA%2FPseUkniq%2BDwVb5K%2BwY52DWk8UxA4Svjpv0VQonFmI15H809BIDTFYr3lKP0fUGW2EymPBmZQEFWmZrxDfHjequbqBirGCbV9E6id9AQrrn7IS04V07JFmqV0Y6Bc%2BqygTN9xXAmhXIE7ImS8rWxQ6EljXV7knNmPl%2Fkeg7xaHmY5w%2FWD0KUBRd1JuWaT4leTGNngKXgt%2Fxg0DUpRZQB7PcUI1eWVqKWIGsq3l7QXBx9LTCWzgv%2BRbOFVqWhBum8%2BGwxXAWKF3cBf6dzIUpBXR%2B7znnLnUn8rY%2BD4AyoRVdfhIwK9g1k%2BkbOb74HrJzAnbJMT7qLSDQ7C2C%2BcqlAg2OUcKIADtmq8PGbNbXtpBOUJ1LkpdgK%2FjQAbXU34BHZk1rRPKcBl%2FviTbHZrA%2F0aEL7rERFW8nnc1uB7j3kWQ43FbeYWg4JefBBEdZ8qIX9Nr0FiDtvAejevMahugO4Ut5gW5t6r6Em3lIUUMKxbo4JusWrbc4mk2Aiut2j7WEHf8Yy6lkhbyFy568LdsvoY2mTvJ%2F4dF9EeTvL34VQu%2FBxKwTVYj3DrRusvWZAkkosqrUBZBXdNZ9vFzgDMW5TAY0GXQt7zaynn9Q2ApNtCPkVh1fEa7vrdMnV3yZMKq8z8kGOqUByxFU3Uksp7xaZuCPnYdaGHj0g9w3FtKvd1VSE5lDcOfQBan3jX%2Fs8Yil34WLLlgqul7J4gC0ubeDkwPLum7zKFDKA776uGsO3UCe%2FFnVSkWhJss93eUmypPpHoZd%2B27Mc4RQ4hBSl7UeLPls%2FSc4oNN0SP7tMvmd7mheSSgw2kNhPH%2FPQuytsMzEY0UosMzzj0wBdVApUmWoEl700ZD0L0qWsIR4&X-Amz-Signature=6770af8bd825b406842cfe106441d1cb29987acd59f48972b8d189f8e85800c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2PMTSOZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwCqPmf%2FQphTl5wOm54gwnR%2Bs7oj5ZdHDUx47Z5XQBDAIhALn919SEeGSkWFnaECJCzDUX2efeNtZgV4BKbweuh9P2Kv8DCHEQABoMNjM3NDIzMTgzODA1Igw1uY5vyrpGmX7T7E4q3AMLM7E%2BPczAQbc5JpKF4EOghoExqSykQ6Zx%2BX9Egt8DcZvVzgdvlz4anmW7jVd4PVcktTxH%2FnmpCi2arjmUOYClJSiCX5k9Z4F%2F6UaPlQ32kIvwnkFiy3%2Fg%2FbFVDEeMJlRe9h6cvKY%2BrDoJj67ckrGHloIk8zcEo8%2B3KCFtm%2BNWtP4rtHoimtJSBQnFQna691dWff7c8u40EixA5DUlL7PW1N4OBejDvLxT%2F1qq2MkSVll3aR7LtNPlEG1KTzVyw1n3IJu%2FrzFL6xHptRevDDIy0nAaC3wH%2BEtj%2Bpsa5ExEXjEiO0pbUnJA80RznxQSsOIc42aiaIz6I5vEVkyFO%2BKUfjKnO1nFytEF%2Fg8%2FSUXZ8DX1ffqLeBEuTWNc0ApG1ZX6ttlGBRiHFLw8CcPSc3C4rq0y5jNnDZAE0WJ7bFitiR285XtgYtY5x45STYupIN1qF8DJZ%2Fm4Mh85wA1Kqr1Q6TwAXd10v2Z6RgfabKvDOM%2FOP%2FyIa7Ybjq4dJ%2FAh0U6gLfMoNUhmPll%2BVxcA4QWUv0IZ9WxZOEKRD3ZwLA4RN2q5PuOHuNvAbLpM1FDAYLRu8YR25CmjbPK5XukjeOdb%2FjrtjroAhIY5alGjZ2sMPNbuaAskNhfiB%2BbGITDHvM%2FJBjqkAe9ltHxMxtWLWAiUFjoPX5hEUCrsHPsq%2FlZQKU0JaYS%2FmdrHKMnXfOdgIRBmJBRV%2FxLNydGnssoP1WI9%2BZHSNa%2FJI7jhEDCqJZMmrJHB0K5aPIGpJYpspAJCZxO46yNKNvrodQ8dUscoupQ%2BuuQ3kWHh39A5mgXTvyadFsmO%2BgYQ2M1v41V7qLCx%2FKENY6qCJ8DJD7FzsTv4yLNHEgzhVjHM%2FmWy&X-Amz-Signature=1aa5e17dbf0cd3653d899154906754f441c4193f7a9697875c61588e9682ac0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

