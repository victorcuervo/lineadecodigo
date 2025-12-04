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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HGASRPO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDFnc85QF1gq5pUga9UxmgQ9oy6%2FkB7Q2UA%2Bxavb0OkNQIgWspzYbHHpH1IKTik1PlEJdUqvlViUSuCkXbR0PT6F8Yq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDFCIzpAhpuQCFASWbSrcAy0Eu8ecJ6o7NnVFMdb%2FiSt6uR38ACgwdGO5rTr6il%2BQ%2FtzW92%2BfAAkEVPHg781SEvq1ZlmsKxDoxtxy%2B6joqQUNHYqiRdjVZkP5EpmQN2gCXyd0gMm90j8n5sgjlgnFnw3oPB9u40D0af0ti835weXxxl2pgcrPR9Wgk0oJwm4w0c71r0ZksAm9JdMjlVEvI4gLRdi4i8dJsQO%2FwTaMH3eXVringpPzTjGFxol5YeyjcFDpd23bRdiczfxb79yls2xWZcxxiXPPJYisqjhIEhxUwhkt%2FbBlBEdUnVB2iHUvnVP57uEG2M2bigwKM7FZTI8BOuO5vh9TPgm3p7Ql1qD44hdN6XnoOwZW2YTSpNrlnBS30Vrr96ImwwHf14w8NxXJv0AQJNFVHMNwg46BL622WIxt22zR5%2FQAIiEc7QQzAAmmW7YZjdVgxPLG%2BA5OaYJ1b3NkxrtCYG%2BNwcLLa%2BdbbzhvDU5y8%2Fv%2BOgwUEbyeu5EkvRuSTxgeth%2FV%2F0GQdgyXSKUX4SMkQ2VSaIGoEHVj%2BkH54BausO0vvhDRh9EPWbh5RudRV7dcPydek3zjBLO6xpjP9h8mn72UEanAkMIlnC3cfFQHdVuefw630rUbqRfVJJMGZbgwJnHuMOutxMkGOqUBkp0vkH8WPI%2BKQWtoEiu1qiOR%2BGMQ0y8pPo2OtEybas3yQj06Jy2JcROLmXOqz6HqngDwyEBy2kUFDipDHzoL%2B2dyurUNnvgIdK1EaGqtgNwwbpt1Oo3UyXnBIANPV2cYVHg4QtCiGj5fPGga9YIyRix%2BojlXH5xxdRHKTDYC2zvbTpSG8lYVzA3fUT4dNa9ZVNWmZQP1niXWLK%2BvUQfkEeUdmuu5&X-Amz-Signature=ac0eef855dd265bb71856f3d2a593a51fe180a666e15aa9e0b9530748833790f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQQVUH3Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIAKy1%2BUygueneb6AKG9DJ%2FCPBn3nEJ2OqW%2FONH1SWKQkAiEA9vF%2FiPNANhyfudDvpkm0b3yufov%2BN6%2FKDQZJi7x2P3Uq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDBPiZZBVLBLogmrHnyrcA5d5j7lXPRtZp%2BTMFvfzH4rrFr%2Fhhocbql6vM%2BljnNmrPVe8T9LqWKw%2FFxBQSAbDDzAd58KF9hqY12eSTUl%2F6OERn0NAfUdcGzV2YN3cmMkDaZ%2FFDRsoTkhyKyTyATo6sxr%2Ftaek6wNxTHy0eUD8Uokmmq0EucaCCWBdi0m1ZaZNpyg88mh0hS9GxUtne6W0cZTKLNcjrEj3R0xOB6F6LgUP0Ov%2F4%2F5hwjWjskwnuGyLsuL03OyQyBS6Jp%2F%2BAmAEDhhhOrjVExcduKu2ZCEhRXE8bvMtVh2%2BT5EooH8FN0kKznFLvMVWRJqF4sQZbSBILPTr9DDISS24BWZeusdKvMc2jpL78JZ4mmjXR33AtEozsdcRinj%2BFqOYk7tSpPBERBwmd9O8GQaGF79efF%2FvXzbbx%2FXMrpJIUqSmtDq8RGXtLE0C%2F1NxaZe2KMYdtOEanYF%2BOxBlkSn%2FuvbLicQaU7vmf79QOM5meCknESNxXe9qihGkmyCrr0sdYtsFKEU1W3AWLLB1dqElNEwyXChA%2F2TN6%2B9Fu9jsm8WcCOqYW8oNXrPFijeHUdNXesmV55jsrBzV2h3JFOWGHbooeafb4W1gQA%2FdPhweC4TRG7y2mCKNgM%2BdyY0a34lcRxTEMPqtxMkGOqUBVeIQMRJ8m4sfnwao0m1iuJPhRSIFQ97iB1P8DPcpylBdWWp1Q9yjzJxWnbtd5k3zUHRTfvyqKKymO0F291rMg9DOh3nCNrjCi6%2FL3Fn30zwFg6LKuf0XNmOo5z5zEoMRQ54kECiaxdtQSvlvFxJp4s9hTdAbAy%2Fj%2BthOOOisGnOpT94ZZ9JdORPrAB6WL9cVVBzA2XhTbFtuEEFECmUn0XrNSr%2FP&X-Amz-Signature=3caed552502d7544d3fd72b0dd568ea64feb04e7973dfb05e156dd219b1e8876&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

