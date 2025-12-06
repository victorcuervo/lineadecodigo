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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O7UVKUG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T150108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBX15OhGELxkkAIw7QCfRulqy8DvC%2FXSy81p8tTVRrXHAiEAhyqKkgqDOvqiDbJwlLxTVL3FAzY99iiynaLZML0LO6cq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOA2QLjqD5dQrVGCByrcA89dPuBORfxEqpV%2FcTFkO3SqPDuD7GSFHrRf3kqx3dqjkvc9w5uXWPay6d9gQL2GjgAZktSY%2BVs%2FDwW3JzRiOcfDsZFqm17myqnM9AJBi0gACYglLyxJ34D5bn%2BMoglkLpl%2BHrcW5hzXH%2BsyvQbINOb8xh%2F7VKEROVkA8ESrqwiI%2F2MrGDGolO0zBbAY6bTw%2BIWVzt8eVbNnbYMJnLNHtNHoJOfXInVhWy%2B6SSINfhpg8aH3QIR3OKaBw%2FISVt1k9lwzHpqKY1y%2FbMFJKSs%2F5UxWfc2QrnRSHbyxjwZ9zQyyL5iMluMfAWCFdrdKRxI0WR8hP29HfGZF00gY1lZ%2Bv3DmNG6ufTmYUXPVUQzyh1MBIC8MayCncfKCjp9j%2Fi3DuY%2F4c5RiX6lmg5%2F0adyXCyHG310wYN9bmmejfGD9EVO6xwi9yADZU4KQ6UpcGX4hYJ3zUHNIqUqUS1sT37X7mTuIrGxQY4u7p67jv2p3tRhhaKD2UvAj2rT1Q5C9O%2FFPgi7Mm3lkOhR%2BsqL17rRPYaLZX2obNaWkRnLPWPkIge6AVPi9zDH6fcA%2FzPSVT9wQlWNh3wvr6BdiQk7pH9YCkOnGWUkvhqYtP56RZq%2Bk5sN9faxIuF1Zo9BU3PtpMLKm0MkGOqUB7GIM%2BQDamQmi095LiRLS2chxYfJ%2BUSxnEZl36k8pgjuJrVtctzejppRxiKS1cVpczmPmjGkpxFRXmILuCS2WubRNJf4ZZ8qXQQtRUs%2BTbdJw4yYV6tbx04Dt5xv%2BS%2BMgYOQoXRVxeA47nJMVFpF78SzFEzBzlFbho4SR1rjApcrvZHe2DXxsLdK%2Fd4Ppe0kVFilAmMbu79RecMZAJDejlEM79eEj&X-Amz-Signature=49e0f1479b5e743157366502c815ceb8f32f76c7120e09624a069cdf37d2e9aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHYMJVFH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T150108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPbB5ecxuoifm745TKluajmo9Ul2v8Yf3T6eZpTj2FyAiEAuZeEDlsxdUwL3GRroCjdpArH1pC0EUIudUYXODiZpC8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDOf0jgtsLoAC2Rr2SCrcA48d7sd1i%2BkS7EMBpmAaXlRwH%2F2Wo7IQxSjNYPTu%2BzQiXSxIwbY4EmYYGvFMLVNan13GzVa00ASGrVRQjKzrs12OqbP3Y2hKUFkipzGjDFEQcr86QVe0GBCBsbVnKazNeaLy14tEV2fKs6b%2BoVRQG7ZoNTDcYy%2FqBTdY97R%2Bi326wseNFNh3CDrKSBloXkQrLvvA7KYDlOjDxPPDPYh69Tl7pNe37GvZUcaK85fwbdFA8fL%2Fzo01PTtYHOWnCYtsoiwccHCXkr4DuiauhHxfOPDx20UxUjzq25lz92BQlBP3qNbfy1PG8ErEhQE67Y0j%2FBepEI4phfL1GQwngwQCOmFPg3xW0Rl7DkS%2Foa7Ccdo5ai4qD6ZoOHPdzKSFoo761M8mjOqQv0Tu6wyA154JFjmie2ssNxYXS%2F9ZzFFSVhIOaADdpWP8zBMM3fzC%2BiA2BxqqABEHxO%2B20GoSV%2B2lF%2FzNPRucDwAn8mhUxc7ceGVh5%2Fn4HO91qlpX5D3dHR9SxUgvQfq8C%2FgzJqBIon1gf3tpdAonVEnVDaSseic4Kv4fuB2k8J0fhUr9oNsFftuITrkVDvnv27K49cpWaCsVePTKU91TTYG2wE2Rki6tt0agLZf2TN7CBetTi241MPSm0MkGOqUBhmUuQdxdyYen%2Fn5NXurpTYI71dZZQp%2B1wRYKpOqEmgzA5SkiTdTL2F1x6hxZqDN3tLTCjY50%2FN9EfWEgo8kh8TayEzxFmbWOel6QjXHCkeRYcQSlqy41jcU6%2BBDVS5MOkmh2iFC4GSZo5hnM9O65SrPQLjbMPxSPCquz86dSEQx709NRWuinq1w%2FjeS1b%2FbcUYb5klbaA%2BH0%2FSAZ4e3CzbJ1ppLe&X-Amz-Signature=765a1129ebf92684e4da7ba8a9486b6ca975278d7d5e885655abb2ae99410fbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

