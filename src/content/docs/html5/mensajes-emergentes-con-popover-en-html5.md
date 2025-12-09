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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOXN6NEG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmLZUMr1VEZ3AT7CzMmL%2BHrBjC%2BgbNO%2BpJDPqED6%2FKqAiEApKL5qKhfpjSrY%2B6zxGAp%2B3igNOPzrqjWCAtyL0OMWuQqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEM6sAakYZ8pNvKSzSrcAxql%2B9p7YfNaLH1%2Fg2SBrdmVSNTKrkAaJUH5z2D4Z6P0dTWOEtxp46vWCjZFhMFbEPRu7391PgWfd817IpCtaA8c9aMguHbw%2BXYgO%2BOft6KOAsXPFM%2Ftds9k4%2FZ%2FzlRXkxdNd5Rr5GcG6bzY87INowbv6Kk2BN4wOiQJr%2FD7oLrGs29p9tv2DwBfrYwvegKAJyl0oMsTDpn79kBpOV6flh3YeR%2BqUa%2BZnz0Afyl2wXf8jCp2SH04B5Fvzjh27tpcZKQxpRGcbvsayR%2BDkTJ%2BQ6wqzgHO0veOawtM6CPvF8x9alsRYIITWta9%2BuLsmNQsjT5Zs3Zh0czDK4DkxZW413r%2FJbADVN2AHhRffRMEh%2FFV1HQO36DOLqdAgwJBQsZ%2BrFhzwa7%2BXFizciEVqgovlb9vfAbFri573t6filM67ydlc%2BBzorJpUsK5MlkvCizlCxyP5RhVFCG7He85phdDjdgX9%2FkCxnOMj3mrC%2Bro2l51dKI3y9ej14KOgdt6sV5nAEojN0kH3zyD4Jac%2BunEAD3TdZ2ALU1nS%2Fnb73fTunLpXw1ChsMgyhD42BcqdCvml3HzsSZVLhXvSOiekOKScHzBQvwCoMG%2FrAU2JUf7KNemQyDjaP9C2WsYbQnNMIyH38kGOqUBBTkd4Sd24ZTezd3T%2B9UWcJRRVxJkt82C0XmTgHzykLUrnfIdPa5mj%2BDACL7Df8Wi8RdngKEOKPVTt0PoHmExbak9ASDfqmenRkB3XfiqLzXOi98aUNLqZSV6xO0IruX0yoIH%2BqqjSxrxOFTerGA6vtyF915JLN0XAX0125iDIaWnG0nCfHOtXK2cWEPNIWXVMd2xjX%2BcahiVn%2BGOROvqSkjgPP%2B1&X-Amz-Signature=8864728a9b6b7aea02da0e4b30bff84440a9fd09629c8f153922e3aaf4d38a0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZS2TGXN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGq7NTeLC2Vb7XhEM3LUnehXHCfECt7lvRyjD%2BTSdFzhAiEAtTXfdBdjx%2Fn%2BNSxjXWmqvTfmOudcInEPsbF6d0VL9WQqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBWQxlUca5eHMhr6yrcA%2FdmEtMj7wR%2BvbDRjK0JZFx97l4DXGnv2E8%2FUAHOm%2FsyHSw7hLihaRxf71IizKmwu2nyBumb9HxfOOMI7Bh6NmyY7Swe2Aw82TuhcX8PGLTc7hcqmFGJ5PQtLpRKi1jSHzHl7QxVJTTumfl1IUMMh5DVG2jelBFKaOvnXV56KDlgTBOFoUf3Xu9Omgz1jkj7sT6z0dcMEMnVb8Pyof6GzRbrY479%2BXcFkfaFO4jZsEuyXcDDzAK5nitQ0PKctSShXgCX8jjw6bhS%2BnnVxPRhCtbWJsBy2yA7Us2yBQNP1bTU6vgsNFMte27%2F%2BVXqbIcevrI3ALheA5gaXVVzaYQ2gGDmsGwXbkFuwKzKUFPc5U%2B6hX4TzLSjmydHsNq7sMeU3wh5i%2BOmLB%2BO2xdBM3WQb3SXV5uHH%2F%2B54Ncq%2FrBFn7YnauTSldOcZknruqpI4sLtEcLnOrVFN7bMCqGJePITImEahlqo4D2uPdk9Ma4kG7hN0WFW9opP%2Fg2k9UiaK7NNw6iwyngFY4YTvqfWfLWEycd%2Fe%2FxAUkA8hwif%2BgioNSa8Z%2Bx6k76HaNC3HhbaXUi%2BYUsaXKB%2B9PFeeVirZKpUVKOYtWYqK5coO6fWADkyz1KkaHPInTvA%2F8N%2F0xy0MJKI38kGOqUBaWQzLXPlswx%2FwBvcdfZFvDntx3dsVb23t%2BY%2FfG0C2MsHb52UnzM81nBdZAnD388tc3vs7Kh0TpUFg2XJKGnDjXFSMGWbCjAFTP43ZJyrgnCqugUmRbmvPrfjA3a7u8M8m3quo2KKeWF0JpQrzRFGteYMHzfg08GzfKKa0VFJqk0SL4BiyyMn0%2BIK%2FmWHJo4dwesfWsHhWoShOsKceDO7fQV7MbMS&X-Amz-Signature=3d7e8f331eaac47d61bb1411917d6d3868d311bf76fb020b9e97a1ca34148113&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

