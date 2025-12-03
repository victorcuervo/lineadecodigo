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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIC7RPRI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCkkE99S5RSnecWMgZKXZ47Zst6Ui1wFSelueCcNnbeVAIhAMq3BHYqgmOssysxHqyMNU5fFRfdc1VO4hni6mUs77XNKv8DCC0QABoMNjM3NDIzMTgzODA1IgxgJ9EZaGQITM37xxQq3ANNV33B4M%2FurarQEPscWP3OFcRHtNdQQLWZ6zqqGTgzV52Y2VaXwd2UzJ1%2FnmkM4i4P2RSA0%2BGdC4x4iWmX1E0j5wjITq8VgqbUUEHJMarZeKlC%2FITcheOFFpRk84yui%2FWHuvD2QbwrTuV8lCegKnD4iylNcaxasbHMmXjDbjDpWRSmBpSgdaur8imgt2tLclj7u0bTmQRafzxLYxCsrYA7e2SclG7WGmbwSGSVUmGFMbEwAtkVJd%2B5X7n%2Fu64aC%2BASM1RBcKvaK7iBg1%2BYU8NH5pczaYcbypLyaeP9fZ4F5zRfgGTAuuocAJ5NArFY5XmDanFhCUXHd2F2GDrKqXqYE8mbtOJYQ9Z%2Ft0pFQltPXfnRaAGCsmMFKVUaBslf1AUlwlWiI4XkiYRbrz%2B1%2BSVyO9%2BKJRA4EmTDo8WZ0LvQ36L94P%2Fz513aMCTfrwECEHijRsQFoHNwnBipN8EIoKQosLg01rSJXVCA6DR%2FQCk%2B3Cwar2EEmmh%2BFs5LAmBNKZuwklPwXOmd63U7yMPKI%2FJNK%2BMWWWc7hukRUjHov1BYsAATYYoa2hpgqjTF2VdiMRNJWkj59dOl%2FFcnCO8GwTT8kr2vqwX1qlJco5MlULIu%2FspLAQWQSGHmjOPLfzCCzcDJBjqkAb0kDs8edPMRyxsvqVjV%2BMH0KAU5zM5v85HQ%2FmEroQmd1e0E9mx%2Bvz%2B7ZgyjcTJ7sHJfudUa7gDnxHkK6EcXIlaZ3edZCl4npJlrFvHBEcWO5d9GUlkqmG%2FBzu5rj0rMRrUIWmxs27OPcWoKr1Hq2WPgSbulkLTZXoP4KMT7dTO%2F69%2Bnugo9KJL1O1w9hkH3MoNsaaev6YShWtwfnoP8N%2B4lqrP2&X-Amz-Signature=71a393c55bee2a5f7742d035305ed828d3c8bfb00952de1896c2efbd8ba0effa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIHUVI4W%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQC714SXnASF8OtXpbAFkYvWJQ0n0e71iOxKMqlqWs67EQIhANVbMyqCxmPg1Rxv59k8X5nD4A8ny7su9frkNIWlcevVKv8DCC0QABoMNjM3NDIzMTgzODA1IgyjSmm8yX%2FRPe2Bctcq3AOfFpH6pgBRLJ%2FTXyodw9%2Fo57zkmSfPhKe2U1dOCF4n%2FWNnRtwx5r1civFTcEfbVtDD8h00OWZ%2B1hUIW6g7Efu4BKbzgE17vJw2RNZz9y4beHSAwMn%2B7jvkmLsR0MUIzytNJBgTt3O1C9GlIZaLLsaDzG666FANjSVyPyxtUhPg4O9BvTAKWQSh4bB6LnZpFeIxsbaAfOg5k8uewNYq84896bPKrYP1E0CIH68Pp39Mty%2BayDj%2FeVLw%2BrhO9hAetQhWp2%2B%2BeThvur%2FkKpvk9blwO5%2FNIMR1MVsxMhDYc4z2z%2FjMsSlzrJhTQSNE3fsogfVcEUIHg%2BjVUh9fSZxvY5DGDA1Tuo8ApIVy%2FmJoHYs3W3L0azkn3ozYD5MPduIDimd0FX1rKqoKL5wiwzAuwbn259ug74OR4G8T%2ByTjJBBO0mpCs0G%2BqiI%2FmPesVw2ACvwXDqFyRkgJOxOHOoEf%2BbOjm6pCeBGUVdUk9SU0YS7yDs3YlLjuvocjwun1lxFaKSgI%2B5EbhFvQZwWRz8fj788ae%2FRqLH2sWYjYMXd4wxi506h57HwxsZQNNw7pFbYkPTAOtAaooEgGRufPauvwllWZ%2BgmEqRPV1O5dy3LOi4obEroQ%2BI0ArUcdKmW2%2BjDNzMDJBjqkAZyG87t8y7YqH8kiTYAw3W1SvlUqYnKa4lyaC3SiOChL7Y6CPG8IMJAVyLBb4MiL0rcBPjCk0V%2Bxot99kA8Z4G8w7ASOExD2Ov89EfdxYIXFvapISa6IBK5UHcK979p3oeSdBxuLV7MhrWkAOE3d6NogmL3VcDKCcJIpCPydLvu6LfD2vd3ic4Z707vEAMhYphcR40P1sCOJ28poL%2FNEoWWAbWHe&X-Amz-Signature=f1dd085aa8eeba343f2f8a8c8dd3bd83d06191f2c70a3f34569a6b89361f0866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

