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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAAIR2BH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T201842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2B9fxnhLvsij6rTRhrLySBsFt6YC6CylTAp7FbeE51wAiEAta1J2HgJASBscV6NDYtzCkdnXNRqW79hfQ%2BC97Cl02QqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbi1%2BSeoL5pzbk1wSrcA8NWTZ8hSyfdu7qpslHYDHauVgYWj%2FDK6kU3Xle9PR9Tro9EQ63Q2TFVXS9iFOmctlYgRh%2FFo2%2BGIH%2BVtpamIYiH2uqBLRwr6D4syWJfhkfXIC3lS5tSgB%2Bgql9qnaIX2GCycvW1aMkizkgmTrgPTrzBld152gvB3xzEUK8AeaRQlU%2BGshDBdYS35dwcrWIAOPR%2BKQj8NUYbqSVQ5PHebyHle08toZP6x%2BaV0inBLPSIe3sxhaiSHprcArGHrtxON7wJr72seOz23Y%2BZpkf%2BIOfXVBFhp0yY3dj1gFm%2F7j%2FqLk4aa1ZzG7z4z%2F4G6WIc84fC%2BIO9YQybXCm7X08Q0ggSz4BzY6R4nAhgBHEhHA40Rg9TuHi0jy5z8GVCRw8ejpOzj%2FtSsa2Y7m7n8m2025oKVpNi28rUNVBnXOJVDTc453zgqF%2BPDOmc11R0u2FmgBNVwyolvcyjaJaI%2Fr5ygd7P6MiAgMgHTddEoXX3UMK1QpXELfeDpIppa3rZYkVEPzujuug0Qi8GAS1kiYlEIASa7U6e0CXs%2FL5kAEl%2BAYk6h01xiji1nFU5nP9zsCGCEE6Z4rTsheRNceZTtd%2FlMB2caLwRZOvYxAULZhSjQ8ErMz0j8eBVJK1oAty2MLLc3MkGOqUBDcoXosMIYFDYwvfB1Jd7itZJymNlevXrFQ9L%2BcoW1k1Rdpspd8Mys5CqutNSySDi87SOmdvMRpqGfIiNToGpM8%2BtaA9MaQcFgiG6hfd9fi0lWmH3Fls3kWXQbveQfTUuMlKSC32s8piLgavhwVCF64IzE1moB%2BqNkvsnJ5vhlMUDMXCEpWkvp%2B7dvJT2MaanZjzjZmDkGrQJNaE50Vq1e3IFzmSt&X-Amz-Signature=bd2f9a1cf1c4f30efebcb5492a9e400a83c3fbf4783de5b7b2e49ae73ba39a75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VRWGCCQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T201842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCu6jwoumB0HjWWOMNQm9L02LfjrcpWPBEkKWtVjEYigIgM%2FN%2B8vRmvcrERAXtwc15fAyFtY1tVgsI8qUSgvqZQdQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzmpQFuhPQu7BoOnCrcA7%2B14mQW%2FbA6f9FPotPa56Mk0iLqcdFiEUc%2BzwRUqEE9cUE9%2Fs97ebZ49N7d4R%2FsEEsuGwQw3tihqKtVB1isu2nD9lg2cDejRFRL55qFpQrSWzwNLLfrwAXLLJe9vz8ubE9wgcUAcj0TXllc97fFZ05a9lhyYFW17hqoFcHycY5kbW0D6a%2F%2FbU%2BR%2FX0EDizNkrWcNGg2vTfmwgF1E16IemFzgpoDBxKkAAPElyvLH1fxnWXK%2B5FzjUGbTLjuNGMeXjlBp%2BaHAkXCeR38Anf8TGwN8qkv61%2BySTL9omBaFp6b1g4YxIjMc8147x8gNwP%2B87SQTNXDtiniX1PJXHsheBpWOPMOJD0rVhA60WxrJr7%2Floz1S3VObl8CjFJ0U%2FgK1NN3tIVj6SECa5uQSL6L6J3S1I9ZtQ%2Bosksmm%2BGNv3lJkKYJ8GZYsXiGwQGq6Pu98KnA1yhXgbi00k8QcAmhfZ9jwE5hA4opXLS%2F2u%2BpxExPBvmx796buHk4%2B98zw3IRkz%2F1TYDrhj3sRXXbMYN4eDGqw6wXnA2VlrgSDuyQLoemTeNRdTubHIolfYWq9mzo7MEIMttByZb4WGeuz4Q7D%2FLhbNFJ51EcBbp7zDQX7pJ0qJcrVGee1G53y55wMMDd3MkGOqUBX4IquagAJxXiQ6ww3HAlHB6gOFn%2BXr3SHU9dtRMuEMXo97CFdbA5u1jqUwsLGQ3KPo%2BTEJBig5ZNYUKQJFN7U7zIF63jtbvvFRQuChv950PY8dV5UIvWpm6P%2FLstRshcMdpPtgP2XufCJDtn9JXoDpgIkP0B6CY%2BXT1iubFf0ObXDFOqIXBJeSxYdRaRd1Xw3fz2qjlFCw4HrMHVje%2F66735l3ho&X-Amz-Signature=6225e5457289b51894b30c4cd87fcb2b68d0a2009c76c530c113a5a94853e070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

