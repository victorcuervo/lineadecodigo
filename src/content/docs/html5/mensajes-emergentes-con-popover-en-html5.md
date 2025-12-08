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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5HIPCLV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T093744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5XqEgN4k9WW5e4jSyAksbZeSSHZKC%2B5VyrhxezeSA7AIhAOwB0lW1XzvWDPiOYSqTtWI2798H9KEm9nYC2wcYczIAKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTjrm%2B7ahMS0zdPqwq3AMZis7nAwHvQhZVPhdrd7SOLbJuWlKWQQp2uAHwkbgItFBIHOytcCZ%2FxA1pjOlgc4F0j%2FN0I9ms0kp19m602OvhUcBGxpskcdjcMT%2BZ4euh%2FDovdrMB0mlFDpy%2B8bgjQYbqcq7PwxlefRIjZJa1IO9YenXek6gpnb%2BCdc39YptgQ5ZyZ9A7SXib26XM%2BpBqvf%2BI24qhgZm5zQRh%2BBiUjIZD8%2FxDLF4yGrvHhdfRBR1J18G2JubXPQNpDhMMI1KOeB9rnwtOVxl76EtHCK%2FVh8DfHoOUbCF38jqpKJFsVg3F3vocHK9H73zquByldVN%2BQpOrAiMkc2TZfjWo%2B%2BMRUxs6UeHz%2F9kCQXWAcHFXH5LohZl1Ez2UtobMtPo%2FZ2KJxOO5eU90rMu79685spxHbYUo6zEstyR55UTKf3Ed1Q7jQV6h2Boimy2EeDBQv%2FGi9sHGeOZYtyMUQj1hWCtvn81EvPksgfmcrJcKynZU%2FGIS%2FJN6JC0HveEbM%2FBhdL6aXTL4IRbdsaXREgQhxf2F9kzXOcH7viS0yaB%2B3z8aaX%2FwDqMP9UKBRogUNIJ5%2Fat5IHZgrvZ0z4mmKtzExYLQkltL%2FnYLJlVvULW2%2Fdf9uz9fomq5CZ%2Bntp%2F38NvsAzCI7dnJBjqkAZg%2BlAE1DCxvelRNsiBb9WQtQoDUX6HFYYE8mrT7LW4g6JCDLKSc482W5%2BTbRNQzl5qXtOO8Ex9VkTyFpzbgZQx5%2B3Jq0J2l9p0Cp6JzDaHY5Oc7SaOMtUDEqLYb8tllHaPkGX3H3a1mIt%2BfdSVSxOo5yKzF0Fo2AsQaYthy9za14aLRboOhHf8NxGlM3B6VF6CPzN2Xnk6lxw0o1sg8CUceGZy1&X-Amz-Signature=b6af2cf662c950db4f17d0081cf6e0aa2792220ab75e01236d951d2c645fdb0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCDOTHCL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T093744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZ5K%2BPyPtWZ5OA%2B2xfmjIx9UNCt34dz1oAmlmMf34LBAiEAwCmyncppQ1KrWtCPAT2jeQnqQ2QeMExZ6DFXpE33yH0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfU0N0T3cnlAwrkXyrcA6EQggLWFkYy8SLuvqj7Wq9pYt0BBJWg07caUvXo7tQWPBTAPNp76Grg7IZQHoin%2B1WP9G9gVZ0Zfbmrl3ElopMQFkRth6PGVLTHTQXYDAJ0SFGaKZmhdcla8tqWs%2BnR3Z%2Bok17c1v7TLH5GGWn03NOZsVsZVErZiQm8rJyBywJ1h3yWmmjJGbBQnrYugwav8sg0Y65KRpwGocH1U%2BE7J17aNcrx3XzSNES1A5KaDyRJThyjc6vt5bjiVnf4vPFfnnLHrYwqKc0b3%2FKIImHTJEPnZ67ezTpTDYLMyZ4vt1n2NBou6TNp1ZdHuc4%2BjSmAb%2FWy5z7ng4Bs4E8OTsBPpf525RiQ91Off7QiJIYxq7ZEpYLCtxBZ4%2FiyhDVdsDnuML8TUEUi2ddmOJlU5%2Fee17A9L3OEW3UfgrsibSALN6YVE8igJFfbiHoI8vnslhfCBzOHeGgW7XDpE7xCSGl6kK%2FnPG5tcAMvbz32FsFOafyP%2BS0bJYPG9KTUXM3L8T8gcpVX4JXjk819YkOJjMnC60OWEM5Lsr89RIMVSDvR%2BfL5nGFFRDEuftopsRlqmU9Svi3Va6oRqYPK%2BtaR%2FhYfLjdodUOlyjvGnsybXIyh204Y4wmyoIkMz4VG0IKYMKXt2ckGOqUBrYSO4TV1Q1ziSkXHjMtWNGrf7QM4YdzwjF08FplNioc7Wep1M6P8VyxGhlhI%2BlRFbvI1tTUb7oJ%2FhqGbgaROo%2FK%2Fo0PJTX0bwWOUns1cTNMOkLzOeSXdz1SRYYTslkrXes7BGi%2F%2FpYutRzJJz9adiJ7bn35JrFlMC96gaPvcihTO0oAuglNd6HVTcfLYyZR3K21n6EwcNdGwa0SF6Mx%2FCa0RA0Cv&X-Amz-Signature=279c69bb14b03c90c65f145ff1c32b8b512ea1ea4d724683c54579448aad17f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

