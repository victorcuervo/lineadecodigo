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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573Y2SAS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T142854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCNeEbf9yuV72QRqBz3o%2FCeghe3JPIPa774nYQga4v5xQIhAL2zvES50wvtnB3rAxhW2qAWt%2BBnUAnI7r0NNVo34UFlKv8DCC8QABoMNjM3NDIzMTgzODA1IgyRbh%2FZ2nOqeT3OS64q3ANGvE3dTyuJ6uc3oezA%2FL1toBhDzYVIa8BiuF9ozdXe%2FuViF4PyEwZLHIQWu8QRQ7s03e5EjTgOa1FMl2c9mX4CADHvfH0waPLlsO4i%2FnrLS99fS9zwMwuY7TEAnvJvTDjBW3FO01pQerJayYN9vuPtgc9n8oygapjNis%2FMVmotmHmrOWN17jKJE1a4og%2F41eW%2Brey1kqeO%2B3HUalvYwj3vGUSfaf5RgQ3PlkKJQVqY6g%2BUI6r5mdGmXuaepJaXv%2FtSCDWngYTwfg1C0Z8nZdyTvojEr8jKN9u42VeDNUgD3feq73gdCnFqHj2atXkZX02WRwnKi9mfjIWWAv0gvJpOOe6sxpJbhLWzrdRahOTahav%2FWYwuJdR5FynSczEAqyzrkS66JOxjLeTtSNVsTWoO9Ym3iCMkizni9%2BYAE1j1Kmt21NHAHXaZjDe6ohRkRn%2F5CMa0njv2DeaL8kLYstB5HsgLPCSF7I3wWzT3dFS9gBvWz39G8a6BJP%2Bh8x%2BZeZdG6ucqndhtsTSoAEAuuvvVNznuj15FQJIZ6FYG6rEUHi8CozFCRy4tOULRk%2Bc5Xr1cj5ffZl5c8fF8KwAvortGHYdpjTvhyySWbJLn4ULJ0fmc6%2BtMucp7b7FHwjDEiMHJBjqkATW5xrU49sqKeLYdQtQn86UNjxGru8DRCDnQBiF72Ha%2FfcGt5YClpJuGwVym0IllWHKyb%2BHeg3gbHVEx77RhRENbkZ6shfhruXb0XLCB%2BseUvAgdbj%2FdnBpEPmOhfzawWeAJinYwBh4gHlf9Vl6G%2FM3EzxtYnIgsOrpjT16psmaugmNyfLwHCfBME4IfcrUw2OJvWnYEeDznmvpmqF3%2FVCZjDkdB&X-Amz-Signature=2bc93815de80fdfc7eba5942f9ce6268af1b6168f0698f692374d8f6268f5d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUVKUQ2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T142854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCyBVQypOeP4UBAtF%2FASlIa27Qv9GtnVt9R12W4JszmegIgEv9rZ1AMVfHTeOmpFkUbe%2Bw1TXeB5eNnBAHwzormsxIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKKfALfFRZD49MFizircA0J8txD6QOzCzlFE%2FPLBZZ2yiSz2t8bR9ZRVg8T07xnv5W3cgmR5guBJ1w4KJeSSJ3hWM6RTYtVvA%2FR%2F3zcZ0P%2FfHuXU0XVGafL65y8zYu4oakmoqk2CMoYdEa8cziEOQ%2FAMBVGla%2Ft6dpPGvOEt%2FfAehR%2Ber84NJazKorcqbu4Q5cXWYf8Ahkr4%2FY%2FWQo26wL%2B4%2Bfy3fYUfyiq3nSrkKuCu%2FNAQBIQYIMoQLu5utLVhE96T2ltLiH3A7TsY4KyBrGd%2FeVyh68Lm2os%2FaDjfYdW39f0pGZMplDEJBXTPnAwWXBytianZHeeO%2BS1L4qwqRXNy1URkqBzq87f4naJVrTZVD7BEx%2B24hcKbOcwhvILGxOa0OQEnsJOPNLw18hP83uKlRsfNEaV5uzm%2BXEyveEGIWRRTzQCkMOAT6dy7WRSdGQNkFhtLD2C0rWYcYSKOj4Rf1iWFfc31je3je9huIpNGbSQF5fAzIF%2FW8GrYsKO%2FmPsMFHA40y06%2BWPfj8PJZ3kMz0xCQX2oHmF%2BB7y9uEqHttRWHDGpAi4X5tqDWxk%2B3EGbe9O1CnyjoZAVIQr%2FPQChZc32riWZqoP245Fuyzcc2XL5QqaxiUEl9EPwuxsw1tdZ0vdBKilc4hcJMOyIwckGOqUBVCApdobe2KvjH%2Fjei12pLjWErhHFZtXBFo1GndoW%2FAKD9EQpHMSwmOAilRslH0ep%2BXHgk9%2B0E54CubXSY914mfTI2hu98kukr53Il7mW3TX7lHw%2BIRQ9bKwvmtnwCm20aF%2BXYa2y69UWd7U0akqb9T3F2yzq6Yy6QymyW81SQs%2BBNTod8MM9baF4Cc8%2FfWS2cJ7VOIQbNmQ4YxzBVNDn1q9sU1Tm&X-Amz-Signature=85ebe2b375c242cfc36df508ae258a6f419318c4b59bd4cc8c1d0043ac50cb24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

