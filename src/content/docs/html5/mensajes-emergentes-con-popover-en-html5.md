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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWK6IVO7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvr5dr7k%2BMx5I0UGeM52%2BSoFbwLvHStWGNObn2CwOqpAIhAIYwNkzHPd7e6L%2FPtp4yCaulVeP3zOFsPRh7gOpbp55OKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxk8dBRIoz54VosNKsq3AMmHjRBDi%2Ft4bVORNOf9h7zAxAfriIaa3jC4I%2BVLzeET8885fKUt%2B62kH1JfuJr1XnCrNrME20vGeu88wey7hgMKDhsmR3MRWqlXkZBug9prejZO%2BEeZsmVj5RkpV3dQm8xUXGwv4sfT34Jty9jV%2FO5JvciEA8Tt9c93idmKEP%2Br01WctgK03MyaJW94J37ybTlMvvHkiyIxP1TBOZl7kulMWj%2BTHLyzCMdX8Hnv%2F4%2F8lFKT%2B3nx9daI38ncn7xpss9Pyb9zbJRjsdGklODYyTJKefrD6g4HYqGlmlJNtGzCGgUVjbHjqCJYQl5uxXAToHkP6s3tKxJdCXVfhoNCaiCoU79p85TsZ5f9pNJIe3HK9QIYnXVb2AyJl8eFrcE5j4g221H%2F9z0vblB02r3ZCnGP3Li5XPV0%2F6IToegGbKH%2BDXyHwjMRCYAL7e8LQqT0Ks%2F2zMl2rZa7JZ2MU8IuR7N5tAjb86En2ENrGpEoL0M9jF8F4dniz3xkNUfnZA2Ga6GmzYHP63R%2F2Qy%2BO6qeU4srzxDyktEPs3f0qDDMwmruPaXDoNewFSvlZSsP6dAgWwdx3I3HS2RnzSIfAmWOqCkroft1%2BkaI%2FAGAiav93DzwwBbwGQl1gwlegetbjCkodTJBjqkAeznX6jcQbeuUxKTo6ZPBXIxeVc8qRCriGi%2B6Jl%2FHIpxLmcjD3mwXm54aAb1uVbfJSDuLz1k2B3o6K8GWkWO%2FeCuKbksK5834fABpFP1bI1hhJc3nVzto8exJvCE0YrAYfGevAZh9YNlSmXRG%2Bi1aYacS3BmV%2FU9lx8mdYelVqMjWSPgNlzOUaw%2Fz1VylNQAqIrqhj8GnzTpwqrh0qW4Kcjku0gX&X-Amz-Signature=86b34f1ecd2deb84364d9d5bffe21935fc28cd2860b3bf63400142aa074f285e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDTALVCH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6qeiQnQW6pWYYpOhgeLE7eAof5ebmvMgwZRxxwmSL4AiEA%2BqejvtnPl2E7ffdkgv76dfhRF5BGrxqbOr0F8lg8sGoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIp8%2BGCrlISSjYCBkSrcA9TszWZma1iWVDRO9phmDIgF79b4gyRC22JHXkInPWS%2BTtEelKAzvhKZIr68etSySpNUlAkaxtIWXckBqPvAkUfsgOM%2BUa37udx8nssCDXzSg%2BK%2BrVjOS0ZsDFnJTzuYXy6jJbqTeRsIzk6mqKB%2B9n4MlOxGA4N9O%2FakOFlWkOxviCLfH%2FjOKPdOj0h3loFDX5Ra7WXbFhclnc9kP2G8Ro3PO29LsMlYCZ3NzR3lQMW%2BE8zYXugLjvfKNCIKDnapZFLQ0z2dtjhgVcajS2rLGFQOtnedRVMXjp0x24npH0r%2BtoVNj2huQFsd1OHqKMZtldTzmMQh1BkYrdsxZyxVeWFg5Yt8OUPt%2BWS91PMuH5GQuZJ1xngzSZVUM7U3h1O1vZWP98iEmGJiPn5rkdxznFQQkvjQBO5MsbMXTRmAlgthoWhksQBBglzMHWNFHMNZHZeAxqGgPeXB2KGWp%2BchO3XbxKBySrMfUX4VDq%2Bbxa3RYOeTXq%2BiD1ly1hlPn56kGdQoC7zaSMg7Yotf1QMX8P3MbcWg7cLQG3K%2BWUJP0%2FCmd8xjZ3i52aTgB%2ByJwZbbczkxRs9nntA0gGI%2BfIHJwPWdeSRen51uzmXYO%2FDMku%2FsJNUKUuPDF0zUYkwaMM6d1MkGOqUBacHhFqqgu0pT1tkMff2d7A425bznamiVm3ba5VtZ9kbolcN1dTwOIMDtguzKwJkQDwJns8nIyWjXX6EBZzUYQu1CFc1p4TYFMdwUGkUW%2BrnaxOeq6IuDuK4OIGQtrDOZ3cF4J%2FLrrfaucyuysp%2BOj6UfF3mMIinzgDF7VVMK99wOqIri0XcvpeGTQzTgqrH4LDZUWjmaP%2FgoexukLa78%2F%2FRYMKMX&X-Amz-Signature=a856b22885e8a9d9f83c6c316be2192f4aa669b36210e13923753d6559fb5968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

