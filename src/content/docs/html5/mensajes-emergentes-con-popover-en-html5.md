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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H2CFS63%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T073843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUfS%2FPI4g%2BgJXqfNznt2CskoJrJ84RcUVUuxvEaRi5BAiEAhmgTVI00YlDRU51zIbwKb9LyaKIOs9sAZtAR%2Fw5nyukqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvGMjdqzuxcZM8zkSrcA6IUgJsc%2FE1vnGgrUy9t4tOKZSMHquwEnxHQ1bU8CUey8NNjBZdXtsIMtXw4PKPn3OvPk5C2Ct7V%2BgQuW7bl0L7VNxU2M4PibbrTfUfjLN3HgzVRATMhfW8bDQaADQ%2Bpr9q6eQa0TvUkyZkvq1No2qkDMdEVnuGK4hc32a07pzgAOnTjWirkZ5jzHXgHkPXdUi1sWicaPzThCkyICIHm8Na9xjWWS%2F8JqeHkpw7itS%2BGmT4nc%2B1XsDgRuFF3VxG0j7N0IHcP21ExQ%2BOwzxkcqitu5GZ6uoN3QnUGHRdVhKEn5Y5Kge1bDGdXzG5t8R5lERD%2B2G%2FCtxQnyv8zwpTjLi6KZXmsHYRGQO80efjiEi81jidu83%2FOVnXlyuKS4hqM5sDlHyYzdSMjTwZ4mGIZwW85X7PTWjKXK6QgxIJkgqcsvKy3BmSdoXFznzWjCkcBg3VUMhaH%2ByD78%2BhD1Q3L1Bi8kQlBnHJFLQ4Li5vTzHePvMvauImJWc1xFoq%2BLNAVdqbCj2dxpEWZ0NMR3tilAsKXP2Ayz35IlAE%2F0Wl8I6ZEcqAZLOLq57q4giUUyeaug03JdgP1lMNtRmvAnnYuXUyllwMruu0VPJNyqZFDoM6qt%2FZoSNqkC%2BDcKQaKMI%2Fu2ckGOqUBqFmYbiCngg70BpdzOeghUP6c3NuwFYeRDgx1dFTCBGjENFlr0WoJGX%2FURTCcDf8M2m4Ctccq2GR8f13Xtqdg7yH7%2FZZVwPECjAY52kHu2KzoU7vOCKySNFIJkxZQRCKjPomU0Yg%2BROyUMhkNbMunqxtmg1O%2Fut9vZcKBJe9dVPvlHpgCFjoYgZVbF3B7wcEgg6jtr1vgll3CnGUOA4H%2BGPqoV4NV&X-Amz-Signature=5b2040c1a50c53338253ce65540121852d097a9787039f1d86b7a77d2b99ef8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSLMMKFC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T073842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOZAQM13%2B%2BvRGNp54EOt8E4T%2FPriczNqHUe8s%2BFheoEAiEAqdkiXiFLlDsmLDxUFrYgVLTMl7qwmn0oj1XGl%2BRb4b4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5rLnlSIXBWhOveSSrcAwsmps9tfP%2FKVNYetOEvceAaulD1gfhaAJZP6uqWslRS7BPYk82OeykH38meSB%2BPMmEjWIWFqKVofTjw8ea0QoeSnTzKK5fcyWARRBrB0FqBbqLXOD7MElsW1%2FAJUqBhazaep2tEsD76XAlTy6AuXgRP1XgVn5NA4WFuh%2BnLn1CuJ16DqqUK5cFqAFdFvOZMg2OZ7eYeILMvDB9LeMyCk4gIsZ5NdT6AE5tGQEJVxTiwhlaKsW8KJ%2FHh4DVF5sSytvNEKIzzdUIKZy3Y9H6tpxSfZPFd48FxWBazysqAUup4Z6hr6E0HJyldkEwT%2FJCs0mVsfv%2F3PQQ4rf1vyr2j6rkA%2FWuqgQ5IRbarXJJjz0hzD6FmcDq8QyRPjzev9YIy9BWaW5VIOnQdWU%2FN5aGdlfpF8wjY7n57zT0DREdZ0%2FAWbvjJc6kr7HFQz3rNuPxeALTssJxLhWRZAUbuBVI3ae470U2CJleUqFbuyKFOBcSxItTf2hHbjBYDcTv8ofxfV4Ckcc9SzQJAeft2Sus%2ByGpfiggHGg7i%2F6WeCxr%2Bo%2F%2FF2StVZgfJubjlqKO2PL0JxXY9uHO%2BuR9DMy%2FjgWveJdiWF%2BMEY8%2F5OvxBYTPRJmCcZQlUUVNa8Mlz51guMPzs2ckGOqUBEAHI8vMUWnzRjrA98UeMNiAdA4ZBuUYic98ajwwb0KwkYEUwR%2FprV06ctB0QEeCNEgTN8%2FlAduMTFUOCNawMfsNGpgO6XnWctt4GCMRNBpUATtUUqRkWNvNMddkjTEPaLNP%2FmvIP%2FCJrGTAX%2BqdqJoYGaR%2FPna1StYyV7MQmHyU%2FCCB5OE3b%2BQqUnjAja279FrCkP1MrGp6PhODUSyzzVlI%2B1XVP&X-Amz-Signature=f4a61a1beb29022beab898e25e0534a024cb8f15fa9cb317ce5c750d8e9d267b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

