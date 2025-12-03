---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L3Q3CK5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T063233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIBSP5CYAxGEDOEYDfe3XhV6D9RhaO5mH%2BaAnVXshHZxfAiBt0bXvxKsu0KA9V4fd0wB6WwdFcOPadGcguzLvGMF2kCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMD7UZ079JfYYBj9hCKtwDoF9WW3OgC05WsnGBXoRJUgoMskl4yqptsGGHX5uZaBUsXfZMIAC1JjHLnHJ%2FzbZli94KN%2BZEDaLqp7F05wUSRxSdwtG9sU4LQQ68zT9nkhs9Jt0vMn3IMCAiH01OhFsS9CWfbYlg0HRlsHBPSiYx64Ts32Fjc4SlaCIUVyjl6rHtKuLq50zxiWqtZMwf6YGKDB4MMlsjV8BjVQPOp3znZGUgfKEhEeiZbe64hG9N54lG1dXqBHQHenQ8i3IF9wUasdI9pZC3pSrmRdOrX96Uk2OfCHAakYgNIwUNNDBzwGxzy6qiIYJjAVQqdrVdts7P%2BoGDnujeWNpv%2B8MRIln23QfuTQnByFAD0H%2B2Nq0vAOY0DZSWrP3epkVdFIB8Wn45OWXureTny22HhFJ0Tikc9vxQTEUPEOx6DiOiE%2BEIdKBm4pnKcjzKZUuutbVD1vT%2F%2FOkHo%2BPxtiFZ12ItKD2VRqUMo%2FZ8Si9td4mKjXj7HJr8wopOa3bXML3n%2BwuINVazfqAgI2pfIy%2FftFObuqVO0qwhWJ342hQdaYH0PWSKMSjE9aW0geySMT8Axoz8uXbAF4txk%2BDm6HE1GcI0y%2BdqWoNhwVM6qhh0YyZY4AU5FxTrYLm0p4Fp0VnAPzgwqpu%2FyQY6pgGhIbYOdTqXg8Q9v1OpTcFmf59Ps2AqaiGjAjZbsehi%2BmQjp%2Bt5Yrw4MAzcZ%2FBNA3fjnGT3f5K4MHYqd2Lj4%2F1mLlFV9BfQ9G7oiogkfWIQnZxJ7%2Fqncti2Cwq0d%2FOIP1WKmoDMhUyl4xlQRHokQ6l9%2BmtC2uoJkF%2FyavDMC5kR3ki4D4EBX8C3LkPh702NDMo%2FIU317jAXQ9%2FikHGTBUrkIq0Ncp%2Bw&X-Amz-Signature=86f92f9579289651cdf6b767e0174b9cc08505f0a704f03f61e8599c26baf0fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LUWL2Y7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T063232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCICD5rSnQLxY330P%2F2oXCMElRqDMOqxJ8lvyKZIXNtNT1AiABCOq1bET53AAAT3513M7Z2SiGhknWSVoXR%2BFKkeb%2BIir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMOM2jjIf0Fgqn2QibKtwDgFNJYBI8GqF0FkBg41YY6misklLSQz670N5MzSjhiyOnnEZuCh%2BMJqJBhV2bn%2B%2BKiQo%2B9Z8%2Fb7Z7%2BuAM4CsVL%2FIcdtIXq1Fdi6KoHbV9lv3ZI86JaOw%2FGb3EI3V%2BvayJhfBjADiOHYDATTk5z0bBycI0AXCp7RC0tpjsagXqI6NoBlKtVoCAsxxvbzf77sH5L%2BekVa0kfmWYWzcxg%2BJEmxZ74%2FLK6OmUkMIE9VEyROpvkFvAvrKw4fyNQg1B9H34ovvgTz%2BQ0v%2Boe9pdx9dLqMlgczxKPjYCXTQtRyZqou8ul1RN2inhFnMk2YuFSY4pin4AKxhnH%2FqHM4u5Kb%2BxNGmWV80ajctDxKaIXvconTyhHu5A67vphbQ68cy4H2X33Sb04QLe6UDCXwqRZHNEKkRIb%2BVD6uZOgXm%2BJrNTIsb23J601NxpgAh3ipP6l8qUonyyQq2v9KxDh7nYrSnOyQqAaYvENyteEe%2FIuMOHS0iuOyOH4ziUDV3UOCucdbs521vc78k5taYvJg%2FWm8%2FjUv35KzMwR9Ob0%2Ba3q63MjfcFm2Q31nxG2MsclJc6KouboPvvaF%2BT%2F%2B6ixrZnnCKzJED353ekMVg7csgsBhtt2b4vqNuqtWeIbF53dkEw9Zq%2FyQY6pgHrhkz80bd6hQFX7TEW%2BPJbPsUvJocuQ%2F6xif3ARiHRXvBej36n5Td0jq8PnNiPldEFay55CC9ILl26irCOwH3p5edxSBGT0pxZqHnCxKwKmvyOP3PA%2B9Kr9Og0tR4TKEJrgM%2FNZDaDxJwn3J5zi0uHPl4zU1NH234d0c%2F6Ij1DOs07PAHOffxaAtFUck7eSTvokyrfRfwAfAscx1a0kzv6E4nBaKrF&X-Amz-Signature=d148bcfa006aa9869694eaff96ab96ee8da3247517fe49d49ecf5326490e0e0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

