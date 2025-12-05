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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCZDIS6X%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgIZHQd1PNicE8UOW%2B8%2BBU3h2q7cjDuI5jdOYp%2FVTgMAiEA77TG0juEk9aNDxTWKX3xqNTMKh78ZqzkB1ez3i6BCFcq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDG4%2Blh1422X5cCdKrSrcAxgWFMyB23OQBueiDCCIoVlXelzj8RESb9m30H8avmjbMJKWJivhdZCbqmWzFRVxswxLSjePjo4xgGVbsdj6wgE9X6hiuDENkyMFSECVSidcichm5jUCireMx%2F4O7sRWTvD0CeEKy2o5dukaTCYxNSdzL9SOpr4M6qPZNZCIzNxkpV5Tr4aIg43LuNQo579%2FQ%2FPwRjtS%2BPJbEGYwdnxcSLWf3BNcYZOFv4mIC3PV8p7gezjIif%2Bew7r8fH3ah0JSRy5EWsk6fJEMcKEu01MUkgkrKZUDan3hJxiSLzQolj5MBs4Ut7rr9r9Nnk1aEPCnEOC%2FXTGOjgsAHdTis8LHhFF6nCQiKtlIr6v0XB9SQEUFtH%2FeSfksG3GaNlAQoCvPLGh5ZWHfQiMoA7l%2FB3BJPW%2FYLzhg5vhtr6lzihmKEuQ1HLeIT2%2BPyh7VXFOsEC0sK0Un8OqXlhNxVYq56OkP92pejetssCJVeCOe9ssETbNRCBBjBjlklmlpJBH7VJY2TAtYk8r85oT0vuEcKL%2B3r5ac1LfDnN6SnZ6TKuqg9CY%2FGmQL0GRObfy%2BQvPh2HRuK5yR3Lylyvsm%2FtFSz90HFWBQeqHVxsPgTlWELpXCrQIuKvc44pkEVOPZfwQKMP%2FFzckGOqUBpES8fw%2FyMnIGis33uXVTNSSO0GkTps30gPcYt8DFcEGXZ0uKnBKunrrC3VYDAG8KbysRjChIZ3iKiRsJpNIBSvUWpNtCmvRwAqfzXKMfGUQS21q8kv8BEQqzBaysTBVPvc6uXTZR9cyf4u6AfwHs9NUhr0AnCOl3FyuK1j6KL9wvexzlElCKETiLchREQmNcBeaDDcgW6SRCcX0NjgNKF%2BL7sIKa&X-Amz-Signature=14dae9153d862156bd626ef28157fa2d171702ede4d5ce9e4c46043c9f71aab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RQUQP4M%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAp6ejP9GwIq81dRzNpIwQ6IwggwLgjeJJwIgapjC%2B2tAiEA82svrmix00IzcyOfJd6jtwIxjpdAkyr%2Fp9a54s%2BmFtMq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDMoyhtysKHW0ZCLFYircA8lEsD7ywl0lzJ8wYRsPsqvUFoGCk2fnsgcND3zZCTgWk%2FFzkkirmt%2BBHGTmzQBsGrC7KjvNr1Nd%2FytHUSI8irqllkZYhjuVr1WC10v5YC4BBPNQUE9io8fkyMOTSvJiZYRfdE1yzekxIKgzNdPDPrrs972MEZBZOl8PSx8pnvXL722TZjI2yw%2FCFiHkp7s3KFfFO0t67rKmc1mPytAbeBIuvgTem1xjhAoG19uu3oOvkQXbMCwmtRSxhudwMzXrvQKac2pQvlBLUomiYAzJa6iY485b2znKPthJ4hWMIdeqEmFZcVAtDCJ9tt8%2BD4rBFmsDV0O0oTUtnYwRl35t91OGnZHBTYZHhb7lzO1tBHVQZCx%2BPqOdK4JTwOmYLIfcC47UbKrCmMmriuPgghXUHC5l0b0VMrdw5aOU18feDPLM2evrRYEBmOsaPxMmn5OoL2C5UMeqFIL%2FvHzWnSvQUTELDE%2FsZJnEFwHlpSgduydwritE4ajfwFYvL8sTVbJ4BpMgkJ8%2BJj2iDiJcmhaQOqhWLuz1DVKD2Z%2BJkVpj6JMsq9VhbUHjheBCJEfx86tdICPhX3bHAj6Lrn8%2FcqAzwnJ8ArOJ%2FCuRFcjT6I%2FuKMrraT0k%2FZTXQToFEPRXMJzGzckGOqUB5f7zISHsM1HRLLVnqmmjlmMrRa%2Bb1yGgQfhKxJoBEfE6JiP0AG8oaucAMUO9gkdx5xkao7C0VX6QMbPrePtmgFasGcw11Z0PverfEk3wzdIiAr111AhZ6r%2F%2FBgB41EGBjmHyBH42lmZVEhTdt1GG%2FRB8meweg%2FKqiFY04uSl6xpFZuKxIjJrfAtYuXoM5WtySiql%2FRMEm49cWbG8VISP7A3GtYLB&X-Amz-Signature=70ddac1affc50bfb83512e5a4fe862dd2a76a4c514cc89790b86c93fb859cf20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

