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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSBSLU6Y%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T032500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSwqiBYzr6S%2FC1B0dFS%2Fd1cVTfRqVx2gQcaW83BnIgfQIgNQEyJOzR%2BdDZob0PknrAOoxHo7eeB6IwRiO72tYviVUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfBdjJBxcenNTOgPircA%2FcxqrsYEtb1iEUu8sNZUA4aa4RtJNuDcsLAtePENV8r5qFvz2KbUd4%2BSOnlEXa3HgmgNM%2Bv2J8fv78vCQVF%2BpJtAFeQ3uMhezU9lweH5kncpr1zIEXhK5hy94P%2FfG0OPf4iSA4ltSfjqxJgiJ1f20cwaCmYls2Uga1UsX8KdIryM4%2BqhVI27ZxMhKuV35Zn3yCNqHuAoW5J2FDGqFa0c%2FIIT1akdc3sV%2BYL6m9%2B%2BWmdFBq%2FrgBzlPH%2B2R%2FThWIg0MM%2F1sW%2BSjmzq86z5Rxp%2BQ5IkF0VSwoaLp2Z5zPe74bE3%2Bxi8X2SSdzenbBPa5fI8WqvUrnEiH4pOVB9yi1lqB7BlIij9sRLa3gEEotNvo4WccYJtkriqiI2C852i%2BU9%2FSG5%2FF3nuKBrpwNbRFul%2FnOCGYehx7RiuS243pMTcj8Zoa1eqq%2FY%2Bd%2Btxa4GHd%2B3fclpV0e%2BLG0SyBap1x9gb%2Bcw0AitkkFQaLeVwp7FbbIq1qlppBjBDYdUqjNbh2H3ubtZRwY6e%2BWdGjsMI7g2obZZlTkgXpf69Y3cmTpwi8SWu8cfv1UA%2FbXcwVXOUCbgACLoY9uxRhAmb7IXLAmd%2BxXW3hqsHEk7Pz%2BqIaUCRJrRAwYobjfTmeTkByFmMJqP3skGOqUB1iwc1bjsmhTDVbZwVxz2fry%2BocOqN6LmZa82eOPei8%2FEdvolpil1TwgQrW5RnYYJx%2Fn1hdRnBIAlbFl3%2FrrVXISUcoSjA%2BXheiF7%2FHxVjT6bSzHYJY6L9ZAxj%2BaXA%2BIikes1FmYHPpVk6Oxa8tArTwKvcAts4kWLJ9XDSXjwnIVpHdqTfB7tXSLoAd6FWUnj5ED93mme3cHkZhH9aXVeU4tEJpeW&X-Amz-Signature=2170ad59ac40ea170d8062430fd5a8ec2564374308cfb40e16e0ad489c33343b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JWUKMSK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T032500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnPBPFWK1Gn1sGLOwugxL04P3OAiw%2B0YgXandls6c33wIgA8RdNeB3AgImynA8Wjkknkt6n2rNKUtdd0GrakbhYmsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FhuszPDPknEMMH6CrcA0n%2BEIdbN3VXoJhvcTmVXulpLEZWSa5uYhEBPl1%2FTK65kwLg8t672mggiu5LWv%2FtrpxwOi5o4aQlc%2FinUTjRb9YJvNjziJjkBlpJCIF%2FmB5qhpR3oqB5QFsgGHLUGu3w75Hec9kX1KcCgtlLpYkeopxSvDQF09TpGReWkNmFe4gZBI7JmMJoF5LZRXOyXdz9b8YB6o7q%2BVbpomTwGmgaTrtpMHJf%2FpzVfaD%2FOlT%2BFRWtkBUsPAMD9oGGjzksUCeS6joKpbag5Lw9w5Bh0lr%2Brd3FTdlu1bZM7MMAMHzKQZ1ZCpahm4ll4XOI58or%2BPoffRXvnIuHZ2XGU034z30786p6xSXF6U9Z7ZKtphEiz3qdHG5ra%2BDi6GkiS2I37J7mwJNAXYAmTTwHedZC8u3u%2Ff%2FjEE1u0bUYvEWjRJzoqkWwRfxCbB8%2Fr5bfvoi9OhHIyMjYTJdOmI7ZFpvtUchdkpzTfla7iXA9rq8GoP8qhMhHCyVt6yz0LikBPXrTBAwOgkJKbxDHtVM8WwPPrANXg4s9sQKWYYd3IZm%2Bpc6ZYz3FAVIPFmzIGMaArqi3YsyI%2BXIKYvSHTQMEM45K1OmWy3SxJOIq2p7Q7a7e6rDFQX8vKurSiji5AE7BvdBeMOyO3skGOqUBnJSaAz6OTWWaW39oR5lIG2ngXo8B0L6a54HrhFHHQUI4L%2FtrBUoTyoSlH4ee8DNSTzC%2BI0t7AGGIfyt8VtPR9IFpGuhzFFWQ6swKVWAJdpgffCtDUgCg6Nq35fusTvOzgVY6EfolcZede9W7r7et5ux%2B8Kkr8NC2YhLVHXTDtwF%2FwS%2BrIWnSXhm%2B1KrQ7KZk1N%2FT%2Fc1ayT6IbtQPkbsIB3tRQXCW&X-Amz-Signature=a3c8ca773ca9c6320965e7d275014caff0fdd20cf3a570f15e030f30581de97c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

