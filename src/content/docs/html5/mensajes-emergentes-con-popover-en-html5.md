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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3F6OKPT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBafjDpDsim7hFvJqvzTGSkd%2BgMrqrgz0R%2FTgcvLslF3AiEA85TnWxxbvNMSILxgscl1fzXnpl8ZHMfsY31nb0St8O4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDABT0yTyk8tWF3JJWircAwTAByMZmzHu2GyZcby%2Bzvl350HThxF%2BPNCqwYP8%2ByIMZdJa6gE8XhRbmKcw9XVKve%2BvBaMojZVplEypalYLzKORMRr57ViJvoobKWj9yOo61b%2BtBMEGz1wQVFiEH4t94zq%2ByUgwu%2FFrPK3zy1VZ7jIffIXAGxeXNmOqoj%2FUS3irPE%2BqaOLE6eZYlKM6UL2YmgSl4hoC4Q%2FYjnOLwi7mYTDlD4%2FJ3OHhiD2hITVNpGYUXqLPYOOykEUU8QDyym6gOaWLj2m38Eri9Rerr7pnAah6Fl3G1HdiQBsZM35atx8NPuVca9V%2BTOS4Dmdn11eBot42CXg%2FnN9DliJV7ex8i%2FUr5NiKYjLqya5t3De7W5GwIsHH%2BXXpLyxl%2BWrNGC1l%2Beg8FGZ9cwF8tJzvydFgS6MZ9j5UCpOZcuaPodW6jwDZW7dDFgss8ixDVB%2FJUC%2BIDmSU0mh6isqtx6vvOYtyzrdYeATsVrVmVSOhonIgTOb98qzq3DD%2B0OiEuSN9y1V1tQRlygH5ytusp0vpUO3JWaSF9HBTcBpPVgHY%2BuyS2J2rorxk8SYRYrPpv8kEAPLoqn2pBsCK2a6uP7YYnS3l293leKFU%2FOnvHo78ef3eyAKWz1kHjO0NAPzRdXJsMKqMyMkGOqUBVjIec5bZXe4faHlcGGmbSyzJdi%2F7fk8vTEOVJS8J0Gc7wQh1zF2vHXyvmG3PSPAhSpNpTGlMzTyBpr%2BdzC5ig2LlJkPiCbHbXbeUKNMaStrZWt%2F3BANIwhKXVXi%2FOQYP9BHDteTDYy43Ig4HRORv9F9%2FHN%2BflcrwPhKwVNZvQP1YQ%2B24VXOu3H2Sb49hGInAMBOWorCbwX8Zo72OaEMgi9rU%2F26b&X-Amz-Signature=b1b679a534751b8138b669c5dbdd79e8fab2e42403c1b89e18ce6e3d1488e984&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z4Z7FMR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqcYLDOUHjFZrGlGaAX10ByzxR55eKuCdBy50rWqU%2FvAiEAlRwML6hGg98Jhpewb7pi4qgVJp5nN%2BonOpbHw7ERlzoq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDH0myskqKUXay24DAircA6KRgnKYwWEr2CJ7XqTF8idKZF5g84pDZtCk8NCa6nL39vPmClv%2FuZCeaF7hOmhO9um7LbtWZYP9ks5hEsu74kNtGGZOVJi1%2BCo0XRgz4yZepOg0jpQOiygerMTZIZsL6fv8%2FNA3rUIXrSOSqIh46UyOWu7KkHisQ7U2b%2FJxueCYuoalb7e53K8mxA6Kg2Bil0GnPscAOkKMOeBoS2Xv8JSdoTo7GILC4WAAUZqM9nrj7GIcB5hhjhiusDD6%2Blp8txwa16oy6NyZsP4pgFZNZggXtbmE7ICh%2FuWzSnCVnl5oHc2D0EmqVcnCSVlCg%2B%2B3aAdK3YTTfQsfdwSnVvkcQ3xj%2Bkp1sjAlAhZxQhLeJDHhbgZOt%2FwBdRtU8In1DHd8gKnVmiXq6E7Yo2VjQSHpbFM7k6gP41LS2NJOo1Gt0cNvkAeez2JutyRWaT8o7F9EaVP6HTLGXYsCABGmuY9CS5Tc36Clfvz6rjeJ9s6YwZzPsVwH0ViQwqQewJm7d9dyttMWJ2MrFga78LiCG7vg93ZRVTZI23RCr%2BpT87%2B%2FMIttNO3JCHaLrVDveQdBjafr0337Mzk%2BWV30AbAkaaRnZRs8HOTDnZaGE3LHqASIpTyeN6WRygSTZ22XRmy%2FMKCNyMkGOqUBQSZ7FcBo9utLFXv1Fhwh7mipC69N47t2dJ1zcE4m3OrVlFxterJt6ooKpfa%2BgzogMhGSnoUu9dZzLzwWn5wIDgk16rjMBq4QfL%2BLI1lcymscdig%2BTY6%2FIzirGKJ2e36I%2FMoatswd9LBMR51ksnng6VWnnI3Js32LSmNaP49KfOLPBKOVcjocynmh0NRrDw9VP35%2F5mXZYBDnPCz1wSElZjnt3oa1&X-Amz-Signature=1f4beaeea9333874ab656f9e9994e225fb203d1960ace613bffb10de199c5f4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

