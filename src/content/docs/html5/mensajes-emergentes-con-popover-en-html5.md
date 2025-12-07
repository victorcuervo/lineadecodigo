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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJEMU44V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T123658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmfCNUfdvKJkebde%2BVCHXvnHmgv85yiFSmv7djk4SBkwIhAIMBTm1OjfxJw%2BOG4CAWM5eUdVXLN%2BCFOVuGHgWHRF%2FBKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8hnsEqVAVV8xyrPwq3ANTTHdLLT0wA4r8rVqWZEkSjhpLs39MC7CdYQh48IjgJuNrMGFrSj70F0gif99jTzv1gVJB04jWETy%2BHPAsCg5%2BKXWBDoNh94sV00%2Bnbw5QiVa%2BK%2FNIPxRhJWVnEsMITzO5yFpJfWILCF5DprUe7UPp%2BfrKWzTkYSm5aexXGG8s6RtiUR58EloYxaRierEfrpJSb6HCxkfJJwOmZjCsWJdL%2BIW7PemDPE94IUEdqDFA42hGN7NkomWKz8dy%2BVCvapjruQVhl0vIEaKvGBNxFV92gNu%2FDG8tx0SNUO67R18HCyVGyhgakkQb0a635AsQLdMkdhsqRmGBeBD%2BAbVjnwWvRq7DEGTyk0VcqIOV%2FscyCVtbi5OxYizYQXorYHAeZux6%2FRHSi2YB2qZyZZIe5mLXeB%2Bfq%2F2n2DFsyg8J%2Fcj1srWINtm%2BipMjgOLbD0d4YpbyjRsZlLAtx72Xs3zYoXuZz4w178Bo%2Bmt4ZMtWxMIY4lyElsV%2FCpkj0SVDFEkIVAa5CLh6c3AB0qSCIttwSCpxcVUSMarkBiZeNtDX88fDOKLRfeu45yNqUooeSq1ZRxySTRhCmZcylfboThvx2I7XqcraGEFVGdRFEC2NiiV2yfcsk723yzDf4RdeTTC2mdXJBjqkAbz7k32PviJy4qJnOmWsxrnLjeLGrblnl6hZZOlAKtZYMwtBfQjs%2BMD1yxAJuAZ%2FqnmZoMxTh3TyuyUjTByCY6%2F11dGg4%2BDOxrlvx44qqP2%2B9wMVXs8qL38ZAN4JOFc27LXoTjQ1xsG1dBR%2FNNrD4hkD3%2FTS47cQCMZlMRFoNdA3UEhnlm%2Fe4k7g9nSV0DNy851Y%2FuQKUa6qgyg%2FHEE1aVP6Y0YP&X-Amz-Signature=fc81db17039675a1448a772325d243fe537368be3a0ea01f93b62a2e78624021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXUBKB7E%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T123658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9dgIJjuBLYDsgJHStM%2BFQ%2BYrP8LwVHsnLseNJ8N%2BwVwIhALCNNAu1YVyjM52zadpXhyRUtCcvoYADAslIuOrqFxWlKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXkO6SqM%2FX4sN0ZM8q3ANgvrQ1HOU9n7Tgkp2T8FhSatZn%2FWjx6%2FvuLQ6PmavktkKCGG5H%2F6j31J8TxLw9uPSutp2blzP1RqO7BmVr8wRBm%2FBVwA9fJv1%2FZ3AvgnA8CYRO0szxDUErp3eebmJzHFmcSn9CguGWPC8p80Q5yvtlt4E1vXx%2Bqlh4EwA%2F93TV37lYKPRDxFH4zfPSKOhU%2BdCecrMqjwSBe43K6HjyfiwdLRSOOHt%2BHGgO0hZ7ffR1VVPUPyB%2FxgdWAzqD%2BJBSIWNnJQB8YXBW5jmzzmv9N44yefSYu5%2FBmmcuD%2BNm31UHAQPIjvRaumo1BWX9Q42HtUcVkMWylUSWUR6SkrdWrTLOOp98ers3adAHTbfDbgvEPSgGP0zfw9WN8o%2BLjGw9lXj0pKA4XzgRWIkic2WYJ5yqndH%2BbImUNtK1LG9PTbg60Xf%2FM9gbuqgDtFoZhp5zxi2IquIsB5eEGNOkxiz3O%2FgwUZIpRpza2B59eAd58fT96CRaIL%2FBYSm28Lt2rO9R4bm6RBHFHtzGPy3h%2BtP3yLQ9ZxEo%2BtmcnV2L4C3%2FIy%2BInNTDycgcFqPwxxl%2BS%2BN6s2n2xHhRzzLkuHXDm8wENIFRu6g%2Bah%2FkCZakmMthwz1ZD3yGamfLSmR5oJTYgDCemdXJBjqkAVTVfsbxW0%2FcUB3JEigeWARebvgA6BIxBBMUzAqY%2FE2NT8T8b3MLkpusKnm6A%2B1R0zkBaMEtuhYEaA1WCUgey%2F4TJRiUUoPeCup5gtqypBdMA6hOrajEs%2BEhwNwn8uGoYe%2Fq2sVZLMIE35fUfvJ5IC5Ne2i0dg6OZAsfztkaVJlkCuCaz%2B7MT3VkWc5IkgOTiK8q2EKS0%2BFGDSiMr3iwTob5njpr&X-Amz-Signature=abe6e0639e393c44198f0b104cadcec4850f8ecd6c7b8aec03ad3a066f5a2b34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

