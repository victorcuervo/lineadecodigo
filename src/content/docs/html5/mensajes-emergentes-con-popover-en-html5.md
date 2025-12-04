---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7YJW5BN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDGiyoAfvp47IaM9flMV0bb%2BHpCJwrc5Uef7UOHrCR5TgIhAN8XXf4br2bw50MZ5QqzcnyuV7mTXIqwwJld0mKglBO4Kv8DCDoQABoMNjM3NDIzMTgzODA1IgyXB3%2FQxPh%2BhRZjLmYq3AM81F72iL2MENedJLIdfLBwH93lVsBgopMWc8k6RB8NUa%2F6fejmy4%2B7vpHD9G4vlyYSfeD%2F1y1NaAouonookncH22xYY%2FQRLoHBwwMSUJi1Jplmw8gyqrcbyYGyXh3IE%2F0UWqVK1TvdDipP%2Bv8APV8BgehaRcppT3UsD2NQ4jToKJl%2FtKOvncs0actrHsbSgmQp3hj9KJWCx7l0DkwHeFQeiCY%2BotNwA0PEK4E%2BBSzMBgQyLApwgaQjMOaFiaNA5yFUUgJww2VS2MmGfLwxzUNzk6H%2FUXnvqbRXAogLEyr%2B7fZyTE0aDjh4iMY6AXHpPXXioG4rTKccp8Rfq3%2F9FGTIUysHpKjeWILtXltnmZKQjJSK4z3HctJNPaSwcA%2FPPd0SxODdF2%2FnMYPPoypja545gGYFdWtcoao%2FaydE3R%2FwI%2BzIp7XFq9jeCtvQqpNmv%2Bkhrbm88riOhhg9VuRioC4badDVpFobAmxJEt68Lj7ny%2FYk3rWOHaPrp9Z5fZ%2ByCbWnJtrR1ye4n9KpzHnF9cW5aHFhNFtlHYaYK2ccfIt%2B%2Ft4%2BsbcMuK%2F6Fo2ZzyIkaNfAVEPMcqWJqthZBFaVAkCgVzYUDJm4m%2FkNmjFyGJ2KRg%2F%2B1iXzxJH9vBazFTCutcPJBjqkAfJku3iqj5v9cieAqggUqRQamw%2BBtRetgXu3p0LlILlOEGwTKUIOIDRPze%2BgxetrycqiiT1TQ07u4%2Br0YEJXgWXQkncFxTsswJVczuoP5dGSvg9cLDaJYWX21yXkyy%2FdXogi7F7vOsfCBsutjrKdBgCO0Y6YYwHpasOthRqkanM%2BDQqst62BHQ1IUp%2F%2BIXZVjBwcLCHE8czBuLnUiRjYpxqNY%2Bot&X-Amz-Signature=d70598d831fe575f8f8f5e1df5abb3c29ce357cf7d1be19eaaf868935cb569ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIAOSISJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIAilRw8Iou%2FSDRk44BrJR%2Bo8wlMS3TC90o4xMBpHXGtiAiAZmrGk3GUo9DtrHf7nMjYkyGa%2BG1LCKah1y%2FtaL3T9%2Fyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMyPlW36%2BlTXCeHy7iKtwDhoUr7MgJH1SRs40bXPagiyAERroaGWcIqFXnQlzpMfAFyLxK5ikdCmcXxHVL1BD3G8NJjxeer8InzoxhtLwcKFzBZ7G1%2BFxHR%2FtBJ2MBEcVI4LKMavl93OK9vaD3%2FDeRIx4Sl9aR8yZgpdmuViKxf5YdZoLidroNdSM0K0AIn%2BffWNzbiJX1FK1aUrOWSy7nFAcOOaUcVOzGGGjr8Ksw9zjMU9cAG6opjUKSxNCfjc7imX668qByO%2B6uFZcGIdr%2FRGTHSt6zJcHZmDIpUaihebZKcwDUhyvbWue23C3B66b%2FzvMW%2FZ%2BbXN2HAUagQTi2DKMF4JDdw%2Bvbu0bq4vY8zy7ExQKnYXAmEr5JtzxKVVfVsE%2F%2BqKt1BEAYgohMXg5ma3WvmpiTl22lbRIikEecwDS7voPQrZ%2BG9NFD6e%2BzzoyGm%2FJN8ODl7SPuIuIJQlmCxhfBqVAtncqKH8vqzsIw2QsG24AtBH0DIUJhnVyetdF5%2B7Q2F%2Fz9NysSEbRWEAF1tyzEVDxZeH392jX68Va4f90AASVYsiAV0nYNCfAylIiivpVYLX3YCa84bZIow4lxN22d02d5yksIBABWsLunNaectU%2FFxB6OKOfKUoaeCQr3AjD6rF3o8w0WJPcw8LTDyQY6pgHa66307%2BSDcU2c7JRMTV%2BC0FncB2yu6dvyot6jEaDvHNgJDCsojXL%2BBb%2FKYr291Lx78T4KPr89Bk1qmPk6CVxMXC5l3GLvDQaziEikYSaBjhZKNLFOxlcXlvmXy6ZzLPRH4FdE6w6ZLbp58ZPqP86SGOFZZs7YldQ6W75AESW0%2FMWd9yzgwiCnRe8Nj8ke0zdm6dKtuoKZAgSGMBb5VDKFKk5tmHjO&X-Amz-Signature=735a883bd2a5227560c7d18b1320ecfa76dda81d645b7c1d43b68f8e50a317bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

