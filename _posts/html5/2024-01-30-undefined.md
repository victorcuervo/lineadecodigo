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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TNY5QP7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T013224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCnLXSH%2BptykFMBKcejllpZa2n84d3Oa2vOBIi3bzFwWQIgTQVySLICpHGMX%2BIrnvMPWjacX3J22hWXCj3swdEiggwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDF9pcOAjDv4MWG6XyrcA4GtMaK4VMYFuWw4O%2BNEEWND3qw76shQxzcbo3QRRiQQDAgH2UIxifIFucqmIDRtAQReVlAFg6nJsA9hv0v9HUk34gMWvwm0IfxZujmg%2BU%2BF0Gdas%2FvjAjXOLj7tzWHrn6tmRUHEqKthn3aUbbpXIYnuuV8U3Y25SwXowgEsT%2Fl%2B8bxl%2BzYl2ZZ4rfsd5MnWkdmpcOqThgiged2%2FRErMwN4%2Bc4YooNAZcsojvwqjeEPryKG%2B7U1TZyeovR1SfGyk2u6jY1vOkdYQBZRk7YvhHGCYlEvXyBgrgH3cTUWxBsGu8afkAZCpCQns1zrW95r64%2BMOojd4Sp3E91CLavQYMR7DPQJfsGi5swOR4sdlOu3lTOHacceKdcZ7Ep8vliF7q6uPqfUVwkJQpBVvvJULc26CcrAdflZFpnxTYREc7Jr6dhU1SCBZpD1OLTuul64zUxr9f0gcAfOpLNbAkQDRT%2BKJrwcxodeTtMlkU5GEMwW9960PwH6UrAJi8%2BBdZ36cVjCccfu6furQMGWXzZRmcA%2BpEPyG2B%2BxTVQ%2FGS75QnvZ3MKljncU0%2B4Zti0Ctvs5qYAfZwA1TMS2%2F3h1HobP%2BW7J5PoavEMbv8im7gS3%2FKMHRv8mMZxKLPv2W016MNqUvskGOqUB8zLzbuzMInlMjwwhVyTAClZX3%2BRTE5p3YVzDOlel2%2FlSiA8PVXG9KXWOR8%2FD7jJ%2FaLok%2BYkdSe5b30z3rgmVBIgw7WSm7K4RhGtwmoa1Vboit8zo3%2BmQvSFOuhn8pybStGKgU1ig1%2Bu3SRpsHj4wluZAcYWhcDkO9EJ1VzzC2W4HljojebQ7Q3hq%2FvzqcBBnn8mJOaqdnfrePMJM%2BCa3%2BGsNCcz%2F&X-Amz-Signature=e16d69acc6a2026a6246799963abbdde4a90be74165ab8ae848feff645162efe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S26H2GX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T013223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDZZUJb43BqqFbyTeKVZbmPgtWsJdoffaQpzrxBMM4MegIgDHvloqSekC54NY5VIpU7iBb%2BJnYKNd1khLJ0CBrKUTsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMtXH%2BQSJkbTMnSlGyrcA1iuAECK39m8AgOHEfQUoCGfAyj852pifv7tSUjC%2BWugpzu6UjrIt1q4J3uA2BDeYqW6TengXZA7JzawGPz1LVZVU4FzcBNPRqR2pEbRkZCmMYSzBQr7JKfZ5Ijsj4LLAegaGCHOFaXxNeZaPkk5zdurp8b2MMOET6UxCLy%2B40XpJW35vG6UwCou7Np6hg9vAy57Ij3A6Q2CU1FlTk5bNk74Gcnaf%2Ba0o%2BtQdKLKc%2FZL8lzWrFv6FYhxY7QW1%2FhjZPY2aneODjf%2FdLzRkTJUirt7Rw47jZN1OZWV3a91rr0tGt3QzhrVWb2InrMvBWtplRumhZZmTW4Wwv0FwYhzuF6rsAa5q2y11aRu4ziAVYW9maHuX%2Bj2YSq4Ryi8S2KktGL6udFn3JtL%2Fyo%2FL8F0osJxovFXvneckX8q%2FgeTiCEQgK81JOCplG6gJMG5iBRGB%2BvlXz87TIcgGZpgCaS22z6Puged6oOWVld6AJxd%2Batap9a4P6hVfJCIS7Dav%2BP%2FU7J%2FKFtVUFruDxnv9tXAo5K0fTEJeXa1UFCG2X9aB4M45un6Yj%2FHjAVBgdo4POb4o25sjRueAHwC5ZTcdDJPHFhwXyQNNuLUDeXMChLkvO0FWeh3j%2FC3wduJ86WuMKSWvskGOqUBya7sxqus4XpsScPlC0ab2QstA3r3n7zhEtd5qD2thNJBEVp5XVc2UeRRFombGSOTsUN6BI%2F6trCmeSYHdtpHE5DdmYKFZGZSiPkkzZcQprguOmBYmGCHSCn9ZXTdBX6wgQEGgX8ZqEkZ%2FFtAXz17i32Ne6%2FTfrAV0W7MR41rlv5EGu%2FVFFF5K73teYFj1ZedoVfuDivcPplJZFaRgPUwZ1LG7LmO&X-Amz-Signature=6410a7d894d34c016b39ecd079b6b9db0c56dd2e3924101655209ea2e64368d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

