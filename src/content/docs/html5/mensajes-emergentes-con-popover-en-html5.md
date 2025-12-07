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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LEC67DO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T110229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQHisbfZs6NDAOczmLbs0Li20FTWlet6CvvokBQFiE0AIhANIPfuzbn%2Fn4d2PzmU1DTbNWn3W%2BT3xiGKDzsjJEtT9MKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuGhNfjfhAOpUfR7sq3ANgnKejuqVa12IKabh4sqp2KW%2B63t%2BV56ADk7XVCWPextrBKv%2F%2Fl25iJLj17oh039ZKhtvgAN5jZ2fs9No6Bm0y9VVzgT5MP0pOzWaPZSmTf8OnkH7XFF%2BgFDNDrrXn9D6SE7Zhj8M4yt%2Fjc9IyJ7n1yCrV3w1VmtG%2FuT0U8G746r17zdpZiGRYNZOdunsIwT%2FE5a9w1jE2PIomq1hTNNSKDVZgqwRUFxYkyAo5Oy%2FL2SrQ%2FM8b2%2FtHBZvYivysNNrdItrnTQ4TEe9Yfp4%2BCvPH%2FR%2BxCzFtxfWY229n8HPobWmrC3jV0zSRLZeQ6nqX5CtlF9vZlrsfmaPTVxK4W899gkryDt5Bxx7Gmass2Ai0y5ch916bTXPRZWsFseYrEw4hieNGGqm7RaG8wo%2B52SCZuWm%2FXESVc3GfsbDl9dN3UStl0ML0ZoECMEOQTJT0mt6C4i%2F1AQKaUnZn3hVIyMW0kZ97aYA4BC11ftoG3e0oChNm92warhMhLjUITWNY1lBi8AKgmXkOP8co9QEyyTa0k%2FMWKoXNkLgsm47lVzxFFCIBkVY%2BoYrujmLLOeAQYvRzeq2cYt%2FKpTylaHEvug4nAIxz%2BQ4aACC3dcXMPjtuI1pALdzOvkIbF0LPdDCvmtXJBjqkAX6gpeu%2BEFLaTL8RO2lYbufYw0zStVI2NLSKrhfhjpE8h4j3nNl3yCDJyAKX8tjZCJTL%2FbPK%2F39LvAi2FLaDldod3y3wAjG4evfX%2B1nzm9g61gIVxak5SphoqJ1cFBB3IjZ%2FiCzKhMa53scQquRGwQVRJHorFCiE3It82TXAn78Dtdy6dYj1RboBDY%2FRrKFTnsFG6tOJUUjaPBLH6ahq%2Blg%2B6xLr&X-Amz-Signature=4f87c213f966644f09fd5885b75da179df3949530c4b87b95e1e1c0fd55bf5d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEPSZVWG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T110229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtj0o2GqY9zWQW%2F6JlEi8bjS1s8YmRIgfH7zZZV0%2FpPAIhAPxv9LOF3FMeIakf%2FAGqabNPGTaX7ZZ%2BU9dX7jkX2AvDKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOXcylavVfu0A79v8q3APlQbvN4lI4nFV5wQCKCWnQUg3R7NF2T48D%2Br%2FJICCPLL7DiDLseeTIbiNXTuqADVgwHhIJQfnGcPwuTng82mCPsdGq1cUJqpO1lg50wPVQvH%2BmzswbuIdkQMY5j%2F5TaTPB5j1k8O%2BS659P0qRC8th6xF8S6UErFZWbbxZlhF46YYRXW72fi8kf4VyNCPLzLeYzQPmMAInj91Pkp1zYlqDgYVOkHA%2FmZZ2koq4GdWgLLkXs9SUpu%2BSFKlHbB0duoB56mZdzKC%2BtVvBGMeIRa9974VYqgyvdzcLieb5eSxrVs4pRt%2Fxvft0s8UjT6PKxqda63e9aumJ70bLzZJk7YAS1uc8zU1VWnnqSARcMhQeQw2ok2lFIA4JQpgPH%2F8VvLpZXxlA9HMf8IeXRQu4oVYhULFzhwgE%2F1Qic0fiAsXG2%2F6OVVh5kRh8IPMpm1T5qvVxomBmaIiqJcAYWQ7VITGTTN4LBV%2FcKr3L1yVLSft7FwX4QBceLcmcCs%2BSXEwXRhUYTxw2n0bIJjRCXrQSqYbHaWRiU1pb39v9PkUOH1ACF90xLEjrhKyjWUJkOsZ1PA9IMP9x8x3iZJNz3GT20oWvqp2J8zm5CVOdHD%2Bk6tvJlyHHmrAs2xHdFATss1zDTmdXJBjqkAWln67GwHiNbG0GxDX4IOtWu%2FEGPA73DIXF%2FTDFQg1ckH2cJhYbsx6s3mC8I4QJoiAYUTmcuIeRJNQtYt9Xfa1SMcUl2JMvc1%2BuKKGTAiEksOeB0AD%2FDSFTuEWzlXAWFtXycILPscIE6eJKGJkSZQP1cPfalqaLEOxbsZyBx%2Fw3GFedv4h%2FRcd6ELS7b%2BYQetml9aZByAitj8I%2BO4STjHuybCfA9&X-Amz-Signature=6d966630219059f48a089e6fcb621a1fcf441f8dd7462dd11edbb020aaf21f9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

