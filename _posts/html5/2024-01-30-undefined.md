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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPPWXIT6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T031002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAa9oMX9hQ2l9TnJUz%2Be6%2F%2BkpbNx0YamQOQPZq1RiCfXAiAKVhlTVBMyrSgeNasGAcB81249WVdYLsNhbk8fJ6Mn9yr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMwZI7jI9XPPoVUdqUKtwD2dryClpZmvOUIqdKqjnarFEfjktrgV%2BqSZ2jGgu8oaGM3aaGY7pMyrIdVrU9MSSZkH%2Bq3m1FySrgz4NrnUDrOw%2B2tOX%2FKvyEYLZZ2FOHA7sqqLcoNV3XqL0y%2BMsB4kOdaJpm9%2Fp5SNQU8KNBR8GkkDvvlKUXoFySXxEgzl5axmfREKFxh%2FX14l7rlNZch6f7Vn6nR%2BMfQZm4an6Mp5iWB6SoXJunbtf44CqZMVE9LwPJUjDQjCtjdxiNbs6bq%2B1Aza2yA9%2Fs5MQhWZSAf1XGwOily4jEIn%2FvouBZJidG0mKJRLhWIhc9iVZ5LtrRcOGVwKfl3z6xvcRGOXXCgtTJ0YCH6h2VrB%2FJrs6V66Qq%2Bkxn7pUwBA4MDsPt0%2Fq5Kx88WHkUg6j%2FA3FIvvtDau38OzJRA74D4PXR9gwJUmbuKmPMEzs4blep%2BViRl5cwRt3JW6stVh2iKxG5%2FhWbCtebzu%2FhlpsHNmDheArUrmeZ%2Br%2F%2BCb98dFWe4O6oUjUIz3v%2FMio5WzUF5LrqmVfy%2Fbjd4BYPJaI49VtkHDUIEOXYFwaPfLiFBk9ldCtfV67MJnsWMRJguvSRnJ9YUhmGia1gFIa%2BKDhfjvEUUViF5TUuTQ2Sc9%2FvXCUyPGN5q1IwmpW%2ByQY6pgEYJMt8LXUrZqENMyJp8TKMhFoCs8rZZj56aLK%2BGifOgZ1eMF9zeqOmJEavVROZjmTC562AWns4nGtMzER7apjONI%2BoTBUvMJTUhudqS6N5JKvgi75O7IUImgyJ5jEp1HkMZB%2FvNczLQtDOldkgFkcTRUyYaaYjDsqJIT%2F2jB0VxWD16q7GsxdB1qvy%2BhoHv5RO%2BRhVrGtTwZQgjEacaVO6FcDXnFDg&X-Amz-Signature=d3089251d1b1e03e0e6e36f1661904736bb25fb82007147bd8ddf8437182e4a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJUVTJ2U%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T031002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCuDsYCKFb2rv98Pxl1LdOjMF4rT4LK0r7CXY7JBAIw0gIgYhKWW7ssGv%2Fip9g13LbiGK4r%2FCQFj55K2EdVm4S8a0sq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHvXZLX8k%2BI2IktglCrcAzNw36qOpadPXzM%2F08DU9q82xmD%2FvgOSRVGlJg1%2BSLzMCRDt4EXZ1ZXjgYkzN68EyGJcG92XdqQyHPMQR1HyK6q0B7akdiZqBFBpK6Tl041ixiY9R12bhLc78PyQWOYfaTgJMgj8mjR1cnWl%2FRYrxDeXygLVi6aKd3T7gobiuZvl0hdCGmZxcasCiYiF5YDi4YvJCNeVv2tNCRSYx4FVf5nrqAL68DfF4FiWOGOOrXUQ3I0K%2B11mcivAA%2BRG6IjgI8QQ0pLOrybcG8csp1Wt7Y3yJ6x4K%2Bexhq%2FuroAxoBgqPdE2FD0r%2FvvE7oZKTSSzlWMjjIA2I6DOy8RNOZ9t6RjuqxjlLNpqhRETpYBB4TLUvFDTaJqHwYUwdPWlffsvRflBSRudCDQ4R96DO4p5HQL4M%2FjADf15JH%2FDL0reWi5rz67YfPArBnr2H0IcPCd5lEj523qFC6JOIpiA%2BDTR1Yd5bKcgEpQkob5mjkplKydUT8RLG5vRpv8qVNMWCDFkvM8IL0NdTOR2CNP%2FGngPZMYwGU9F5OGHjC%2FViUJENBMYBSlTDRf%2BXF9anBn%2BRgOogK9o%2ByYrqJCZp00PUnOib8JlxWMuHbJxnToYb2QX2Tlc5rpuDIFslx0eOyrlMNCUvskGOqUB0GUhaaLmM3LI4XMGwUSUCYx2zfcLD6xZAcx0E0CIIxysFzwvocsrTBmLC4B81RKT2i5xfOL9tswZ4WaJgq73lj8B5%2FLrQoRmMw7xLxAECR0jBebF4zU%2Bs7ntnTtVBE3GOJsQrJPZFSDlJVg0LSf4yK%2B%2FzkHUF2pkcQo1Dn6fjKiTu3rAoZDSSgmsZ4tyvYVq%2Fk%2FIepanXMjOcJY8H%2BY6DkzxAogM&X-Amz-Signature=4f7c42678bd211f840cec8f6b1dade9ca6a8a658cab657d80743f8722799b736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

