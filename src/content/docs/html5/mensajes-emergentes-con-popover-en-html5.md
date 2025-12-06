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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKQZOWJ5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBApWGLMY4UXyj6hBZrH3OWm1%2FiQkCsKnrPu0eYxxhpdAiApJkxs1Np92k6H%2Bp6ZNaCA0bx8%2FsbthRiMQ5N1IVIIsyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMO6QuQX5CTOQtlqBLKtwDN2%2BeTqloNWaG9qwoOaWWLzcDOSOroXWwEUsNPr4vuFSEHy1Ai0L3dCu%2Ft48MSnMWaa6IvisOUtwCLLC4ak5AY0ww2XBTLyoO1QqFveAVPPlwJnQC%2FbOmj5JNwejkbZwTpmpO1nGFaQguZBEPvkqc2x1l4OoLfBGdK0wWKZSEM1YB65X0lm%2F%2FJv2FObu8LzLuPBUPlbRk5nxpOYWvwysiRhsm3IfBuAqOXJ7XWyeFqe386NjZSs%2BOdmxjobETdVOt1cLjY1jt5VciZiY%2Bl0DB23ad35KUodRoh9wR%2FfFanDtVNTKzBM31Pc80P648sgRUF%2B8OnwY8oLUxeKFSHtk5zebwghzo4lm4Cn021vlq1W03aHoXhB3h7hCse2Ag5HhP01JbkY%2BRVDFIqiCzOeK%2BvbZNbjGRiF6ZhyFka85Fa3zazJIfJY5vQ7ADqjaFzNgoreyMhqIJdRAnPRMGElP1ZR7M9U4F4%2BWaksd%2BowaJTB9NHwH%2BdNMcuvVAaFIurkSOqufiFdyAF2rVWuhTc%2FJqPrpl1QLDpE9I503vqp9rFbnsaZ5TRHZ1gzIXuENf8HZtuDTx4Mj1TihfM9XCq%2BL1PuqL6B25gYhVDoZddlAMNVOpZ5hmK%2Fdl5yUNjKsw2cPOyQY6pgH1UTA6N2xBWbTwnkGN%2BfKN2Ghe8cka%2FDJqOgPMMAm7GBb9zVHBRCUMFBvdUIYxMChv1jAHcIcoa2aGs6DLjik4fH7dhTU9S5ApUILdLXERGFhu2g1cfSIrYKnWJbXLvzpsou9dlAWs%2FPJMjqh%2FFaA6UhCnCujUqMPINbTlpENUrdl4kPd5CxHgUKoWhh6qpuB0%2F8%2BK6uak4%2Bqy3hlY0ExN7REwo42T&X-Amz-Signature=4e310ba860865d3ee333e34b3f79a82d1f8c021db295b97859ff6e062bd91cd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKA4AAJ5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgPw3zPasp0%2BnWNqPTwIeLf9t%2BVzfw5ghzHeXUPCEdOAIhAIxenUENQNpMPf5F7wqaU3%2BsC17m8mZWr5Zqd75U1858Kv8DCG0QABoMNjM3NDIzMTgzODA1Igy34sotPZkFszO9rMgq3APALSQS0zMPrqdXhTmh5DUrLBtQRR4rPYvgAUJ1F1OZbJ9cWThukDFBPXqJSKg2M0jvOSTCdAjL2IB80qCQXXJ9Vk1TsWhR9Z7acGBvYEk9zr2tSxdjSlzhEjuziU3LISd3l2a%2B3Tz5NuTEQZ%2FrEbl3NgxKiM0f3aOcR%2B2aM1WZr%2BvfNThZZqBrW38CzpgbZwAm28C5AVcnCf91dTir9MuqJ2twPGBJoByK9Wa7q%2Bx0l9ZHMgBJVqNcCONdg6MWKcs4YNkWhUt%2FBypgwS%2B03kIzH32Wn%2FfHOW0RpvF85ZC8YwdXkD%2FFAywrgAveC5X5HXSrA1QocweYEcJWk%2F0%2FqImOLCpQUuYOalE1Izo9rNrhHgPBG979AWDot5rRuJMY1jWC%2BxcIyq82i4R5%2FC3CA49rgGGWVRnMHdy1BQUlB6821W44TdtRHlKNediV7DI%2BrRQPe1PsKRXr1JedIKIiBv3l%2FyWP1QXk5vPD6sXqIkUAMmoHe2g1%2BvKGFmrEv0JnLmXzw0kaG6tOnZZiRdNrBVLRySqKsFkE38CTGdnIA40mmo8FFfDeErznlmWpgJNLIyzEmpGZCcXn%2FSJnRS%2FQMvhjnIo2PsnQfVpYNnUQe1d0NrmDcOeqBH87Wthj1zDMw87JBjqkAXUkC2%2BgvDZDj3KlMu7dtAW7HO8oEbhIFY5VpT7IigDZf2sczzke0doqARjzatIuFcFAVKkIbmaVYd6VavJLrdEN7Q4wAvIYs4fEgIcwMCK%2FxkYoP13uocgXM3BaXDFSWQRy%2FsFuyPuYjnm01gEtCsjTCWspYwBOOnOGdID9Jc10C0yAuHHLbDjbWKGADCu2yOvj6VtZQa%2FIsTOSC7Vkr79w2jM%2B&X-Amz-Signature=9ade6b25b464c4855d8dd000601c9edbefc15ced3ae68ddea8812bbe575b7005&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

