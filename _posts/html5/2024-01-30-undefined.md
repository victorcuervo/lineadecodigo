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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG3ZIHVM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T051521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICWa0sEN%2BHpqysbLYomGKsHwvFxpjVsiee0djtvDyfItAiEAqup%2FXM7ng4Qfbh8V4FAwFOQWhhmmUVzg8MRv4ivw954q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJwm0uONEVjtOhoeBSrcA8j4xkYf8hmrWpr8Q8TGo9gADe0lwXm4i6vpandVhSxxccD0kCrqmQj8wL%2F%2BgGR70rWFM9NStPG57wVzMhAuVLQpVcvnHUvZ4HWAAH7%2BsnRRyClj0mxLHSBzXUC5OO2VwMhqgOLaSWYPZcBPjcCx3cBve6SDwQVZ12LY959hBzfNqkjNDVScOwIeegm2Nyqv0vnEgPIES8iQpCuagdbE9FRRbrkpA1eHRwyVWHl5HdfhyRxu6lEMqpVZfWAzuYvym97qxuavgP%2Bdfe%2B8CXfWO9wcD1fDF9B%2FzqrkrlVA1Vpelh%2BAtDX%2FfERwZTSyfHMsYK%2FQEQgUvx%2Fn049%2FYCguD2dt%2BDwAmZUdePaShSoYXCADGhBEJssc1JJnKPb6IRx4KmPY831S4BoxugTyIQn46sej8Oy%2FJziD2U2wEP8U91GMS0%2FBflmSdw6ja6rOXVlNtvNR1kHEq1n063uOOdqgLRjJaPd%2BDdqUDNykts7sys6TRtVBnpVio49mB5UuOjvDinm41onAbc2W38iMxVNpnu6oigXNM4pybfpHabjNQAAIXxuGn2KZ9HYi7%2B3KwU1G1sm3p%2Bbj16p3JpbJvlwgbEzBXBW2Q3Remq6Cu%2FKOs3bUhF8QtPXAJsicoNOmMNSUvskGOqUBztLzJMOpIkz9rqOyCm%2FDYuAeFq4AZZIOzOgbsPjMeF%2FfYwL2UBqYvcXHrT8yXf9BqqcVoujGe3rm8eXF1Y5u9mu3Q7CFw2Avf7qSlCCniMlBgcmgnLXbTLiy2WaDPfPjB2Xv6pc7%2BvPsvtfZYZDQiQi5gnF5%2F6iFM6b5EOiQb3DoHcpbgq3EV7fpQHu%2FYACbX7a933m1o%2BfvuH0ZzblAJtM%2F2bEC&X-Amz-Signature=225184779b9c62053e9877acc3a87d5eb195625a64dc765256bdaa64601caf58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGPEGC7V%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T051521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIAWdHsOxqqx8Y9Apr0QO6Khr0tlFZLPY99EV1zVZn6l3AiEA%2F9MTBg8CNFQvJPVi2ScREnWDomJBMX06LlblK52acigq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDL%2BQorZ4qDi7YTdD%2FCrcA98LwGkS2ps%2BmRCXMfQt02ef%2F1qedAVHubEqZKKiIy8s32NsxL%2B%2B00s7ZVYyHpSyHmscZkqDORVeFBjeTUIxkuzvRrWe%2FKb6R7bHPUa65R36dL5jY%2F6DRpESMu%2F3p%2FM5yr6dhWiWxPePMgJKzHw4yA61%2FyrhVxSlBgr9ZzUK4waw%2Fko2beWjcidUehat3HRPlMglEgaPMDJ6Z8GqWgoFq0wapASdcGkaRhGh%2FR90Ew8w80GwIZvj3SjjFmWebedeFc9o6Ta6vOR%2B92W9CYhUFgCLU2XcXDqlBp4C7XyX9lNmrpgk2xv1kGCx8laXeFkarkMula8A9d5wMio1S8vn%2Fys0RQI6JIBE5e66%2B%2FFzduvX2lFvgeVNQprEIXdI6cnM%2BAJG%2FMvSW9SGz6kHyRF%2Bc8wY0EKTpaKGnJcKvzclfBkF4YA7d5%2BWaqeGn%2FmAcczLkHOh1JclTF9DTYSrjeskzFQYBk5F%2B1cqt%2FeB5MR7o9DhQJ3M%2FjYp%2Bb4k44OBOcTrzm6K77LW9Tz5UyPVH1tl7J35OiJyD7BQ%2BXsVlmRlAcvq7TFDTX5jx8yngxkGkE4omb6D1cPEUy9s0YSoDXEmUVAr8s4%2F8lY3hnHaJpkSopigUexfsbZvNUZKHCjsMK%2BWvskGOqUBnX%2F5KbJyqyvLYGL6RtHXOUGgZixkxIwq1Ezww2VCieT59fxFLKiq94ZrRbbUjWI7Rg4Z2GnGz3n1M33rU4oSD3yrWmK6ZlxcM%2BxIsGeLmQMK3ceWLHKSZFAOtuSZIP7LgPqUjmVa%2FpK%2F6Pi1BoehTU7CJ%2FhpXD%2B%2BYMYmj%2Fj3MSl8Ln1cgjuwMH%2F0rOBPzCkjX9pYbOS15qx5FfqR7mhOCwjzOY2c&X-Amz-Signature=cc8b52065469a19faab274b171fc7bee8d2990a4f918e6cf16f6a7ec8ce4b305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

