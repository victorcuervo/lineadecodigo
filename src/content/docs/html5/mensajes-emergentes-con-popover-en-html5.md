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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634O7QRMM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4wuP8WlEL4Px7thj6YgDTI1TrYRE6w%2Bzd4XUgVMyjpQIhAJdqOLS1c9dF7J5aCHAGo2BXuLSawg%2BgEF75qiTz3Y3tKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuXvYpoRSJBmnl0E0q3APNSx5dm%2FRQzzodmvd8Z8VFlKjxGHpKUbO1XbPyoGrVbJ%2Fk9t0nWnjFKr7WtQIYEg5HTvfA0YHNrRLvBNZcjnEjY94PJ6cnF1D0mMfmn%2FD5O4aJA0eshGeC4t2nUDjho1KyzZanCx1FeM4RYPvbOUgT1JJ9iNKSC1DwJK5X893Zw1BXI3Q6%2FWi6eceg4NTALCokMvIj8X9Mx1Lad3rY9I%2BDAPaAT%2FoaWTlibz8kavliUsZmwYHd%2FbaDBrIMKvCuTPhT%2B2UGq6WfG%2F2rN%2BlRoGuZKskWnUuOq3iEpAAgE00jZpWdsp3L4L7uFLxP4nPiHdxopJ%2BP61YR5qVdFkttRxAGTMQoHHsZ9oqEMLqrF5is3%2FhUcULPp8mhJWPkVC%2BoY2O0S2TWa2FwHuFvnaz2o0VifHKeNEXGdc1PiH%2FaM21rczOA6Mr7MHeo18EozMRHx4r9XxCOGXny4rmcon36VP%2B3JgzGJPLUWWxWfPfasaPODMfsc9KgyveqIhgqhrIpmsNGbmZ8qmlHkQ%2Fzfn1TzU0S6BR%2BS%2FoS6e3KcPsIq5FTV%2Fkw%2FDwgSK%2F3Ef%2BfGByAfrJRkKFmEXfQzPqHALpo6KexqN63sLTXeu2tHmT6OGL1BknvhSvTp2QdODk5vzCzo9TJBjqkAeIRyk0fotkyDvhhBqtH1Q5Rf0vAn893CdO%2BZYKIZNqJwNEE7kstRYJ8vrp%2BDkhJXeVWiGfJLpiF7mEhNWk5AbTojSjY1BEEC1qyoMASmEXLtwHNA8JpbpADvG2VxKiKMMwv%2FjSgn50jBJ%2FarMwDHWaDcPIc1Z7lRqUFPUrRYMOpGjCedKVLPNrHJalXlNnax5Z4vikmPvmRbS0pJXEZuMtdtqfq&X-Amz-Signature=6b11c395759f53c1c55b9d5815de6680a6f4720b28c3c7cbb33683beaf91f6e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PEO77LP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnylAyVwlhnbKpBJcnRm7fkn%2FMcsDr96dQRogYa0od6wIhAI%2FCwS0Y%2BGoMo3yRUUA6K6uEhAVrPYR7nG9Pq7NUfs%2FyKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7SRmAbBPrJUgrhekq3AOoZxBXxgLczF%2F9wzbZqgwFLHgzk9mNEyxdo%2BRR%2BVdZnTkzxaEWV6wom2E%2Bn8do9itbwX0SvFhzUsQX2rGLdd5F4XjV43aVq0934jArEAtzULhG4VGtzQl6NghNcr%2FCUAsq%2FyIMTftXghZYKcN%2F%2FCI2D5zUJ5sR%2FTYfWHloCHyrQOg2ydBmNPqLbcyANRzFaRJdZgef%2FhyBr70e65SfIgObafsEZLe6TAZiQSOiK9hgJXLWABFmxTpq9ms0nrdfpBeny3rTpPtirzcFZ2rw5Lf5lXQF75wszIkC57AyfcuEcUxRGsV%2BK4azP%2BiPxh86%2FIeSYDXzNh%2FApWrP1k2f%2BrelqCLApUw4FTB7uYjdhlKWJGJdq3e5WZ3oBx67OFAoyfvRMblEnB%2FOZdPK7iEyCccuCGIon5BFe4g%2BR8FbecnRGvxy9nIHDlzFLQGG68WGkuVE5R1mPQM%2BDwH8MetU8mvf27Z5sXogjh04A3HY4IVUJaOVHSRBwccJCjHAg%2Fay5IedZft2wPNLr9kUftSuHDzTHt6vJTcYBppFV0Sm3rIOERYMyasJX5ZMdA2uLuYnZiP5hpLpWfSk2xITtngCEGYmppsVEfSApyD8%2FB9wuEuLG40%2Fz1n0iwhpEoJaljCKnNTJBjqkAQlRiRArio6%2BM7OYscJRx3kcb%2FfkXbqJGBHN3gHZrNmnm0kycVq4b9t8A5BrSbfkZZwZU2OOUscgqhsIScBTFrAOJnGBlueeZ%2ButpUWIcK7NPDlDYIRGD8za%2FqiZjZxGv0dEHXWW5K2N57L%2FoqgtYIfK7wXIsUfT5BEFGZ5n8DlECxZMjmEMSKkxn%2B98JUf%2F2j5KLGBdaMPoCHo9QBCwIacJS%2F88&X-Amz-Signature=a3b17c3ee2e8ceec1f01485cdf12f823ea8e53cda98d5e0ecee229695411e0b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

