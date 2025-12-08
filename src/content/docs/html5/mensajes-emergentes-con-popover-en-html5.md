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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6U3O6R5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T140033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOUcvwr2v9uvhw3eZO2HNVP7PwMH7i9FcwJy3Sx%2Fqu9AiEArWJeN1%2Ff3SReXWe6WWOPA230kqLCDEhrv%2FEYTu%2FWRyQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNJ8YIDdlOnr0Jv5yrcA1PsWbJpjKUPB2RC6XzBfy91fz8lA%2FZ2l%2Ffknwgzs9JMUdfBVGRQsvphDxxjUQ9%2Bkt4iUXK5QX1VaMjSMATjXNJ5Bko9fCr4u6t5oVm0QEqWJCE6zbCrAjS0C76Mw4d8%2BmP4f%2Fzxkly1sEzNHMLmYQlFfjrwbaFkvdi9unRsBVdKrMT49MmN%2BHtNg3GvXWFFFFx%2BjIjELwwkerbrsVGCPf7IJggXFTNpkoSkuaRCk3%2Bt6S1cbA43BYhqntMuMF7w1MP0XAo6IiYxMVeX%2BTynQZ5lYv3UXoCMqZJdXv9ge%2B96t%2FjHjORaFtXwoPz9Igfnd6udfIfrlRWTTTYLp53H9YIqlouDyKdGR0idkB%2Bq1SfcG2TXTxL1HbpIiY6NmEuid%2BiJZEwd7UV78IltsG2cB5oQGXaEZQUZMXexsq3dLLke7mpHpsPHo1bbp1RT87rafRvn%2FrlX81Zn8Sjr%2FbmoF%2FwTVMb2h1jXbuLlEKeCYpdXM720oD%2FFW4eOIN7bZET1A%2Balf1C%2FK3QFGdggWyEMw%2FGakIaMcz%2FTy%2B7aKwpCX0NElD8WrTY3wpFG6BiSknlF7JtD3bUZovsakIDBlAhtRNNdM3exmjPB6JpKrURxgDqukHliN52HS2G%2F9ZzLMKmQ28kGOqUBuPsI%2BhB9QFh1emFlgtMHderHrLpYDS9x2CACGv8z8rz%2BcIJAqw%2FtvJZm3kWUW2PWqydqDtvInx5iAdVmTFFW7AoFHl6SLsL0cb%2F4WJgXKyF5RybDuaLdTWQtjg8XZKWOvpIFOhFxDp3sYMOtQ%2Fhou6SwpQaagG5on53n4VBAeBAlwKvNOUzWdAUjwrtR%2FglzrknYvd2gedvZKXqV3ncGf0I%2FafiZ&X-Amz-Signature=fb8228f2521965d3b3fe9414698eeb4c04c0d6ce4879083f9527bc1e783dfb21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDIUO2D3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T140030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICI%2Fsmo89oai9VrZZlDZHlDUt4BW7tB4e2gtqcGhYpFnAiEArssz34SV%2F2ygKIsOXIQ9oyicqwxWXIzf1wiQgGwVmtUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXcl0%2B0Ppv8oDEPTircA9i5Z0Qb7z7K2IJz%2B8Jit7HW9992ZECKnnw%2Fbrrjt2O0YjBKmT0bUBYEzkm9y%2FddU%2FLHP8rxuoSeiNxmDzb%2BCaQBzrpVf%2F%2BqUb5sDhvoZeUwBt28L40tQGecjxuK6kmKyRuDrYsAoSAaUfrX2vUF65l%2FYx21pBLFpXuQ7FHokkBmDBOL5eFXoFNnCVwLoj3CrBHmKnTttsJfZOIoYhloS7c0D5Q066IRBH7xabMWLsO8iAlIpFhHo1VYrWQ4yQblprMmr5hP5FIw9DxfPhu%2FBeTXAw784toQL48faEoO47yybaWBldyNcRQaUvuU6bj%2B5q%2FoOfHb9nZ5Bw3mD53bDyPsc1ru9i1QBc9fXZEUYUuoCVIeZSNCQlNvP4236mdLsOzR5XK0KtEJtUqq48GE5dagDerKiIyiD7PVA9tndFs35XGSTn5deoHRxv6EDsY12Vm4h%2FT12zyS5lDGf9Fn397g%2BcUI1IOvSZyMM2ChIrELUu4DjgVT3MPm%2Btmr8VRrAaFoBaOYk2PsyStT9LLLTGRsxiVF501O2%2FWvLWn8cHeGff23nFPnP1lJAhQWTMLNIn51o89jpXEEBq5TOum6168k1gr1rdHAdFEzxpmsZso6D22XQ25nCV0bkTluMKCQ28kGOqUBuqv5mx1ZDlqfeAKhLxtovhIUqsP2sD9kFAyxHqOGPlPapD7eBWkOOzNRX9nIADJA4JnpR4q5Tsyf7hWrHaxD6oSdZnNVwIJttr%2BLewG4gSWzss1q0qnOeyU6s6aY29FriSK28iHCBlG5wIm072WtI5YQwYY5obkb6NkOPFPOTLk6C0WTamiiNlkD6vNAyM4O5L018RCWvE5hZXfex%2Fqxnbba8519&X-Amz-Signature=edbc15a9b7f4dbe1aae4cbd928bb1129bd6a4d27a82c84d7668b5b0d853e6117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

