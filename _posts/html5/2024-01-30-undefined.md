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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI2PYXSG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T033507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCtFf9LKJI%2FDbKTnWhvU3o8zZaLSKoLhpK2IVTDUi05DAIhANXUsl8QY%2FsOYLk4LoJI9pfTsjhAKY6lZbDs6aARITR7Kv8DCCIQABoMNjM3NDIzMTgzODA1IgwFC%2F%2BzCN2p%2BqmxJnoq3APmI4SiInUGedg7TF2WtJ8HCtJdJOgdfnKnsEYiR0WCJatTMPb%2FswKx0wv9442kwqqMNs8eCt7Y4O93p1EZbewOL%2FrBz0X8iskbLXDzL6iBOE7TDgb1fgeLbDZwD3IByiIuXccqZqI01II1l2d%2BZkFRezg%2BJl17ryR5gSpqi1DWDwBFA3COOJSTI4MP1CfTLsyXoi%2BKJwpxaM00HzBO%2B42zygMiNqW%2BCtrgWqfJRZ5O35KAI3JxUGk%2BDOGvGmx1FrqVXHxBikJsgvakUDDpu5BAZRTrhk3dRb5EoMe%2FVOd318ceOvIo%2FU%2FmAxNY0uXSnL46Cltm0z2JeiJJViKy1Cjlagf5j20%2BzlcnT5DjQt7ydrmrREH7vR2wyJt6BayepTeXZobsqhpONoY5zKkTOh4BRn6A3%2BXmFSqIzntAcbvBsMScwF7Dn8eZ7rHq6H2u2RQ7FBX0PaSItm6KSnE2IzWdy%2Bap3AGdOBtnub5lEzH835YJbC8dOS1JXK5g90FXeAoJ6c8%2B8QPCkRdble%2Ft1p4L8SUEA2iJiDqxezINEfWQy1PzkMkIebHkfY%2FHqs%2FTUSNIkveaDFw8kuc42%2FB%2FgmbpQ%2BHzXjOPVucSM0l17d%2BmxynDPsHKDozaAZlMrjDKlr7JBjqkAdCy2JK671uW81eujo%2FDQuHX91uYFCSNivekIyIfzmLm0Wm3uFlXIUIVxmPCvO4JXC1eWSuijk6EAldbnsfUdyvdeoBbER%2BV7qpNf4nGjAfnG01vuwTsO0YDbjbgvDJ23wQPYWlj%2FEOjSulw4wHwDV5OpcJmaN2N4owTKGnjg%2BAYqc5%2FxAOl%2BSglVckPAcDHgwcJnFBSkpgdWMinYq3nT18Hpv1U&X-Amz-Signature=8b3e960b5e42de959c3d9a2aa3e1c85c62a32a2031c18d609457a67d579df273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W2QXDDL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T033507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIARkDHhg%2FqAUliYvsinvFt%2B3CJyeHo9icIX%2F5qRyE9QiAiB%2FkCLO7QBFGXGpZfESrqwEZxYXH9ezrfA8CWcN23ukVCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMNgiKR%2FWJ2UVeqeY7KtwDXWNI8dXu%2Bwd0qpgksiX0Fl42mjnzn2fXcOd%2B5nB%2BdBbfAJ%2FHaASUYRKP58qlsMoScEaWfsOnM6fyz2vt%2B1H6J%2Bo7qMBL0M0TWSlkqnWvdFvGUWnwgGnKhIOH5P9nQnIXqSJoReanQIsdoTeZzkye%2FbxzVfnj9w2kQvjhNH9XhREdhTXB1tsDY9ag213qJJnyjsiV4%2FPA6QlmGZvtKBsVIAxSf2z34JX5RUqH4ZkndIP09EWCLAPb8yg97e2HmJaaSzXDDwPZLxto1wsetOb6AKTOTq1rX%2Fe9sgYS7FPYxw7TnbAAhgvBFrHeSPaxnM2%2FqVA3bgagnl7sYUeu2%2ByBREXkuH%2BxBb2kpBufIts4BlRNL2fCt48bcS5QAYdr72%2BKMvTNeE%2FRUTJqowzD8DoKOL8T1EHcb1ltm3M4psZxRGbHXmsDgY72r3vw%2F64DWnXQTsHfjTGwp8V9GrP14iwvVeg30LtTbb3m2mQfUZ9pnQz64vCHIFNLx8Dri%2FxO0JAdK0W%2FuX6p8eqRW0BjPZCGI%2Bx0gA4Ue9Z4I2EyPuoV9keO9RLjQ4lxbMymYqp38j%2B75ojoWQ0KYfChiUGGXi45Z1hiV%2F2X4JeDZDr3GuuI3UMClKOBN2YDmGT2qYUwzZa%2ByQY6pgGDguRFGOk8itEzFbwGUf0d5Su7caIISW4sX0kdofNS8yIm3LdO%2B%2Fe9Sjx4ilD6WQ7IUosYfW6mVNaF%2BCEyExgfjp21aFJ4z8%2BOCXFM5aQWTbofwybB0hHWMUTLN3%2FhmRi%2BlKtPAVcZcpSPo9pC2nv%2FYs%2FvQXkRiiCIv62O9vIWol7SQyvoKFkSX4cYJYi%2F2eAH4ARQ8xCkiUuMm4liT4QmxEJ3Jg06&X-Amz-Signature=547b33f77f12a733d7d736bdded0259a1b79bb34de9b9e760402038607dedd90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

