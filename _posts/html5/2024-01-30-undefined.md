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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635EH66LN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T030618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDobQbr%2BUygBmK68DL55tSlrh%2BuJFjBvjHKXWEjt0K9yAIhAJ%2BwnyRaQYWzViN6AzJwmOQekXHX7kVE8XPx8AN%2FdrjiKv8DCCIQABoMNjM3NDIzMTgzODA1Igws2P4t8B1Jk%2BB8zaEq3AMEekYK%2FhrY1LD6nOERqg1cRMgCXsoDFvjZw8kGxYMtTi8W7vdYqmbuxCoZnGUrdqGFvOAwF1MESnf5ZHcL6GdW98B4NrgTTZBmNfJCAlPW44llB5zIrBtnxHKXkGRt9NExlq5j1MzHVZEaq%2B%2BszC6cNorax5JjPE6l2HCTIvnio1HGfVEb%2F6jZke1fKtd1ydXW7uvSjTu89s%2BRr5SnA52bi6z0R0A%2BWRoQsiLptmUGBe4%2BEcdZ2ef%2F2ebt2rw%2FpzhPpKss1LAzFjn76fRX4efg7KoOQmOAlOLvdahdkodrAU0VkIAvQ66fcI4I%2BKqX9xqu5BC6it0cqahwYZTmyUZhSPoqBwSXi7MgBVTo%2F4hRNYEqIT6fA4012pfHBQX84tvceGOhyy2fs6sspXnTDH0X0lSHl3UqfcuhIS0Kta7nMvpsUXfffHGjkGoSuVipe3FUQq3KocZSl7sbHZ99AQIdWa7jJ%2BHWsHbAlqlh7VWvKY%2BOgGYibqh3raPmt2723wMShxhS7RQRdjgpE2hGeWWNBStGWjNGE7PV92WyVLM%2FBluq9b5fdVDbm9XlUF5U9IpJcL7owGoOUh6akOiTlc%2BWzrQXrhefuJg5F%2B4apM6iWvl2YCUUyYgcLbXk8DC0lL7JBjqkAbaF1e9ww76t2PB%2F57llX5QCQYmjMHkfc6Ij24KTjtX6Qr4iZ9x6XWzwM1OEuVZUPQW%2BkhsOEf4iZIOnAuOYdK4qsoeJizahFXZre7XqVfu4LKyui90vV4f%2FORxaV%2FWlgt1hzSU1%2Fv%2B8GHGmevjirJuI4V3tYx%2FBaJ0T8uvOuLlvVxYv0vc39m00jy7%2Fgt4sN9EkeTz9FVeG%2B6YRU0RKhosI2RZB&X-Amz-Signature=eba187500868f48c22100dbe0d4fcfb31485ab535f0787b4eadb9da18d49169b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZW6UKSR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T030617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC53gfNt3JvsB4tb%2Bf8tc4VRNI6J4KIjMSIQbBIUEh%2FIQIhAInrs6cMwhIbrwatrJFB%2BZgyvfdi2sZuHU48UG9YLsqFKv8DCCIQABoMNjM3NDIzMTgzODA1IgxHITdZAc5gUHttcl0q3AMAbY4Ur4viNCrCx0ostc59nNg0Hxm3HmhmAV0%2B9GeZvzFN1LassfGf0DwK4jayeTaC5EMqFqJAck%2BDywoJSZZQzKGNgt84BzBeGkivt4BEhFoIwjQMFI1PQcfXN5f3PNs0l4WSijCFLay%2Fs5Zrh8m2%2B%2FCpCwqTfposP6zHwl6KMSIgSF%2FvRNz7NFx1lit4d3952kyr2fg%2Bo6wtANF8vhdu6i9rSQUzBLJLnIecJioJoSRDkwWYnCp%2FwsOXxNwqBKR0cUJIxZvxSi7VSoT4WoPnQwSDLsFvBEG3VpwPRpk4ra%2FL7cse2iB7Oh9aloiLLO0nNkk%2B%2Fm5Ffb8QUuqXArdmeJYmbkMwywYffZQnImOqrBhYaJOgDygwGKyDF1uSjX98Q5VFbTbGU2kyeI8W%2F7SoKl5omRCzEmal3MmgUpyA%2B5dLCQSdmFAEeb8Rxa9Y6bFeZl8C2X%2FqYk0SKq2qf%2FJO8DHY4qeepXH5NjtlC6OnhtjpoHhH3oo95ixtsIl22rOm9J6iDmVVQcPB%2BAMlvmMTgVXTzgIzvc%2BORjCe%2FFMyxjwpoqGvfpXoPqFWaw%2Fphy9z%2FxyeMfc5abfNcaBP1o%2B8srb%2BVw11%2BhrlKwhhMM3llCQjoNrBOui%2Bc10rijD8lr7JBjqkAYdI6BIRi%2BzB2nPakLM%2BZdelZ0q76PH%2FMtBqI%2FHnD8zylkMpwKH2vtxmtZGOaMpYmmnaWJynOMlpx9YtjdxHJdjMyoNEWuBM9QOl0cPqhv0sJz%2F4G2oH%2FqIBIBOCgwyK3jQJ1PnkQNuLWBdbzOP3dhJb6xwv%2F4yohLuyDybQLpQle2SXW1quc%2BKfo4PFYryFwTuDZwD16LbNHOJg79ede7mgKwPa&X-Amz-Signature=148920884c68f8dfad253d3031002c23a760660e77323bb8ad311e88c83d06ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

