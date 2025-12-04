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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UERU6J3B%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQChJcoDxUz6y7JUySy7y6dtCwsYb2ONw7S2GqUUimKThgIhAIMFy7vm%2B4MpfeUCOpqSF%2Ff1qNDuiKfce3IftXCkYI1UKv8DCDkQABoMNjM3NDIzMTgzODA1IgxCCT7wODPnNaCqbbQq3AM1YN5NMdJ%2BfK5nmee2sD0yJb%2BBqV5%2FiFg5r3n2vWnM5%2FMFZg0pbzv52CyLfKv%2Ba7sYRzt%2FTo6D%2BJY%2F9iyeXLNxwUFbMhZB%2FB0bEiRh8VI6Z29NgsOJFZ5ynjFTch3402aqX58r7Lo4p5TUvSQuWSik6a5To2gb7A6lXzNrXxbj2sYeXe3vexsUsAPC5beTszopvYw96Fus0XKXxJtbibBT4WdWP8NtQEbawIF82flqXfR%2BbatFBr%2F%2Bb4ElVPvuvf9YBNNowFq6Z1UJ5OClCAl4cIrbxkEVaM5%2FtpIw9KNPDgFR%2BUEKEGUbYnyxtuBhkSbbYhUce%2FvS7Vy7UHpVm7LOUE%2BBKBxsJ4WAp%2Fn3eh8h7jKM9u8V4VXxl%2Fxnl2qx4vK%2B7yXfGPIZh%2BsT7xKq60eZrlKsWzl2zYGdDlso%2Bz3iu6NY36qYjlaBISJIluz0QbpKN8R3OPfdgcZouUZK2w8BWjSLUigpngtwbxOMiIpenfkFaoxz%2BDZ2k6o7Y0FUy%2FOEgL9FpSSabTjU1%2FC6RJeiCOOQglXDT1X29YGA8w2HYcedZWN7%2Fy19HtTGzUssuCSy7RVV0E161MgvZbOs6p%2BqaIvOHsmudNLiOw39HMh4cS8AY2IRWZzj7GRUGDDVlMPJBjqkAQ9xYxZTiIEKUzieNU1ZTyiDGOmMVw0HDpONq6u0eyCBol0cduueOxxWJWfxjWT7UneQEbC00R%2BfHCnX%2B1%2BNwL2xotat4Ml1eQxkIl2LruRMUXyGWsD%2FDC9m11wGgGPzwqceFH0PWA7ONef7h%2BD9VJyg5VHcCZ1Gs8aDChlXoSHP%2F8EN7BHZPnagafimxGB8IIC07gZTyVphYmjD5K2wUSV7e3qc&X-Amz-Signature=7ee8455f08bf1b90526c3a3f24a7da6adc2050bd21a6fbd4be192f7c6e9ba69b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWJ55UOC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDwQyv0jlQF35aSlHc6Pr2VXG%2FI9AQYMqjfCEouC%2FcVCAIhAI4cFGAnNKFI37Iml6uZ5EdDd4f6AI%2FcQgQ1gINdZ32iKv8DCDkQABoMNjM3NDIzMTgzODA1Igyu5osu904iulemWqAq3AP98LDgsqIVLymOcyi4BVFD5oAlJsaV37bko60yyaEKmUmXX9JXy%2BSw31EDVxni4t2HST6p20c3mubbaxUYpm61iBBNQutZb3j6gKqG18Mb27OvMKQTi0ORlQ7LC1WGpDqB%2BiAWDgn81VcjSwI1a3t9PTwlmRcKXXDTdW4onLVzo77qxUrP5cy%2FC%2BrLWzCsE13RhfTGXBQKj6vTdC8JcROpCCqO3RkL6TYyslzpbWeD8jEv3yeUvRHKzjiojN6Jh%2Bz4LThG9%2FlQB7J5X0KyY9wS0%2BtbTowsAM7Gj87d2%2Fhslx5T%2BTIb%2BsEw7UuqIaHgbtlLhGlknxzP6dRyNEmlg5xsIvei3NBLSGeb0Rb5GJE9eWe14lZA2JCyxW9CFUgIjVkOT2ojm54ht1KTU6WtJkJRATl9MQ1uG9NGrs16UQsmq0ps8wFWo5JvxzF8Gl0cSrMeAe5sEORK3EkUG60tQNmYCz4bLSN4xeXT0X9nhdiPUfOWxGRMAzmcgaWR1gZrm%2Bxupwk0VI92if7fxiIMY4fgM17%2BoRArx30eZDs1JTZedfyBHG%2FrsGe8GZl587kTkVvpDjjN2Vyw9nLsaynYMc3WQJmNIJphhFM6wUKM7GPZdejXs%2FTTjTdK5u2EJDDMlMPJBjqkAWt19IG8Rwuw4KvD0v0wk4NkXqBqZ6hBa97kcS4WIt6%2BoTjM8rTegI6BR%2FWs5CZnadZNZ5lZZLfTKcRJX07XnvdyD27dO%2B%2FK%2BthoVP7PYcnWL6xXGknlq2AWN45ZupONiejtnHk5lDkLG2D0o43MNFrHOonjy3ccepKumD35wScfsN43EVpa2RGR0DlDjlaDpFVLn%2BozCDjBR2g7poLgTpVx9P5L&X-Amz-Signature=771cdde7211b8aa8f41b36e4fb8062c46ef604e0ee1202930dbb6d21306f535e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

