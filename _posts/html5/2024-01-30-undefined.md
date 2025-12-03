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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7M5PZKQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDSS8JKH%2FBIz4d6Rkbigp2i33Zxnz6RNxqykGYhDgUHGgIgCbjLz5%2Fs2vnLr1%2BxMUuM9xfCIAevOs%2BI2FU%2BoYBaOQwq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKnpqZaeT0Alw9bd%2ByrcAxtRU%2FzdXYH0EYeyDXIf5SOEZztbP2HE0youD0S1g%2FrndBZLPZ2Vf9XYw%2B70DFVd853grN9FiI%2Bzxaln45W%2Ft201ATgIEANhdrQosm4itNx9%2BAMDog1v17cO1VVHa2rPUiuykusOEsZx5Ag%2FQxYAg1SRCwzr1zPKRwvfhRkhfhYsdKRCxhdKExwWxH0jA2eY6TSQNBoMFOnHnmM0IhL%2FDgd8ZylCGmLyGUP%2FXg%2F0vu8PX5uTSl%2Bq%2FtjslRfgvGlB6%2Fcc9qAcFaxEP6SmVddV%2BgYUmG5ooyGE2WtzFI2ul4s6RLHyTxrCLlOna%2BPIVDsObY5vtmwQ2v3X0IEhmD36jufIB3OuyBP3TeXPb0b6%2FPETVB9oL32ZDY2oLkKpKa1T8cj%2FwxnRskRJ7F%2FPx%2B7YgrD4lkUIeON3vFyP5sX3n9wf%2FtqeytsGgVxzOHWz4%2B5DR7ZXNADopbaDNjr2W17RrZx1AsUm98R15G6tShTfW8HAa%2BgIhHWeuJAsvQaEvToUSE2Io8EX%2F5t%2FgE5wn8NI2R%2BeSWZpkvIZNb1%2FqhhQhDn8M2UkwVo%2FVe6ya%2Fjx8QuXTB5BEC7zoXwrpO3Y6l5mUssJXtezxWAIhE9dV386sAbs86jrk8IbRDomXrNrMKTVv8kGOqUBUlBnCbTXwdUticEdekTAefB1FpK25D1BZjtz0VRAGKzEb8i8pjDxCRcg9jTMbh3yZMmGYAlCuqcbVWHap8h2WhdCdp%2Fx4rbGhQ5%2BVvTi4OKkCRwykg46Qawdd3wRqZi%2FvFMT8fW5Ip%2FnD8w27PjXC2nVYHz0i01%2FhbuANyPqBI2NDtsPmMmx1wWcGjiYXI0cbh5XzjNz%2Bqi2dKe8UhTfqcPJRgW%2B&X-Amz-Signature=02b041f5e89802896a205e2d87a37b8e1c870d7b67eaf6015b0559a329d96411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV4MS25D%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDOHTKf%2BwYQedAw%2BZcxJ3ZooqTjdPN5lYDvbOduxctLdQIgS5di15%2FcWJqNXSfUiR5VrmQNr68wqZ88AX%2FDHN7MAfUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDClYoG2UFhIatXlRYircA%2FuNeQKrF7Dla8t%2BFVvGV%2FMtxH0wVjS6fXYOmwSj0qhXTAY1vtHzq08ci%2F6FOL69aJjM%2FJBWa76c5ePIcXUkL44cMnpcEX%2FR5h9VYRrtQzMBLjG2r1ScSdRKs3m7sd2TZB%2FzOov7Fy44aoiRSM7hwpe2Zkd6bujaFNP%2FG8agjzFME9byJBAi2R6CiFEPC1fvpnkQImiffutrfdq1E8Zo%2F%2B%2BXSyAW1HhjcUzEmsjsOWgCyzkPRlA9iQOcyjos%2FW%2B7R87EAQY7cHe1%2BU8bzfsH7jtwKU9Iiw3lXD6n9F5W75m2K842dZuU8s%2BBDmTqG4t8EKa%2FZm%2BRFq4A%2F8jl%2BQ4hddsKlakDquZo%2BL7Qd9R0wXDNyfyRhg5Z%2BpdoFILCjleSlFy%2Bv4lcbmek%2Fn6ftcrCfif5Yd2jJIDbxVaVCvQ9XU%2BM5e6350Sr9UttHh25bPFEhDuq8tEUZxqCRa7AGunASclOHnjt45pnf6eVnxRVJj8quXLUDhqEXoRhjGhpUq3xl71TRoSnrnAn9IcikwdJguUiCQKIrnNChBjesq2zBtt8dDTVVFmFVoYp%2Bj4y%2ByszHtExpfE91iIaM9IhDdeHkwwGEogvs%2FMcQ%2BMNl%2Fkt6ujMaH6dQxF09UvJjRq4MKvVv8kGOqUBIBzP1sCqnEpOhuvDFbx1FHQwyRIsccsmzxDjWh1eyrkQVFX4lIkSsEPLX2JIGJk0c7NLvn630VA7bXD6iNcO1jHnJiUf6JAmmegsYM0Ofwz3vWgzI6sz8LNS8LJwtxCDklSjkBoKxR69WpeTgx87Yp%2BQeT4%2F%2BI785q7c2tVlIbp6nojsx%2FIWwUIjxPyzQqiq2yx932DSOrvEH8%2Bgj7OauABn4Ei9&X-Amz-Signature=e14919b2b04d405d7392e16cf37f73aa2bb83d7176453fae7eab4279ab2cbb6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

