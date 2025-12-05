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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKST7KNE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T182934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu0OGoRwavZSLzXpt%2F%2BGffwVDESEgVF5T5mzrV9q9z7AIgK5ZKaoJH1QBNps4TR580z5QepluFbZhxXvAXnyKuMmwq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOXl%2Bh4Y1%2B7S7%2FNZQyrcA1fJwlDb6SvCrde7AOb7OTdO5lvSfpcBE9G0OVrjuFBclIAERVgTb25Tb%2B8aJlw4%2BxNQAdWeDEeJ3v5Hn7eHBuO%2Ba6JrCNYJR6jPCieQ%2B0KtHdVo%2B4%2BY1nBAAx%2BxZ9bGHK3T5sd3DeF%2FhqLyRCJ7b1A%2FrqNwUplcgW2KTcz%2BfdmFVlUuwCr6Y3kOE5BL5WYT6JQqyfndQswIz8S8b2IhX%2BrD%2Fw5%2BsevJ9fQvRBef4%2BgMzONV14bqEm7gcmKGcHK1okeHjTWmbR3CLBBOqcaqrcbCYfYXSn9hox93VFi5SkFx23aSe9n0I7Wo%2B2nOk5YK19y0MQAnhukAqq88ytaMXW1qmRVw9DzrTVAj9sjNjITXhwndbbIwk2Ghnoh9mhNQaQ%2BFFLHSfF8r1T74m4LacC%2Bp81haRloxFzWj7CUmbgEjgn7GE3pNp65aZVzo%2FQ9ThNRsC1f0IZcsMthNjrjOz%2FnBQ%2FivpYHsyTucBEWc6LpmkK7017yanSyLZOXSvGGW871DGsgh4h%2F5ZvwEUqDabwYfiAiEVFD6XykxzJlIE1oT2pJd3XaUNrYC3mE1EQnoMYTaXsa4gvCeBGAHCoY6I%2Bfb80DFTwQm9sSMRLJvVreE8kZtRK2SjhPNJhQ0MO%2F8y8kGOqUBYOzD1CfjbE5yfbgxQVK2Ws0sN1V01Tqd3K6rxVa11ZvL7u3Y7ui56LhJKxcJAQipNW1rZXpVbvRyiorjcnkhLKrNgiut9ZKXGilfUTuPOxdLJVxmMjqJULgkQaj928HcoiNDBj6sgKohBFRTkkuWDi%2B%2BDq1nqSkDLYFf6jHFYK%2Fqu1%2BC7w7%2Fz7XrKMg1HHA50An41QFylr%2FGKrHzer62utW63dDg&X-Amz-Signature=85cd093090032053b1525881629811a617401a897649385a2df5f405fe9394e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHUGMRKT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T182934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDT%2FIy3ZRNNKSmLz3MIvETELeV6le74qCwdJL2yzQze%2FwIgXUbkhww%2FQMq2AfIQBOiFOjP9tDPGV8u5lxrlJi%2Bb1Csq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJKw6wfKNc1O4HPXwyrcA7hACohKkgxIs9aKZkKEy4ZhuY4k4dWg2jPIEgFTOuAkHMya%2FS2Y%2BLo6CSO3Cu5Mv8ksdCchqZSo026QOOnEseVFmw9tFuriOjyvW2Ol8YUE6J0SczIvFDNRDyPAknpeg%2BzTYur19DkgvEGPeWq1jlZUIdeS0Lepge871zSmBfpcg0APiF%2F%2Bv2Qj0q9HsiCVyLKwnI9xoy3clBksAe3h%2BeaJirCjU13PYb2M8hpXmHS1W7Fm07gZxZcUif9oDFdjMtmLjSpzt59q353ltlx1MchLbeV4wZ4Sq61NwRlLaJuPu7dxIYQ0X%2FVn1JivrOtvTh4dMR03Z5cUkB%2Fgh5fRF3cpEqy6gpXpuAxG7OIpGdS7oH8Br%2FhXIdg%2FTQV4tzdPFLv3%2Fxv53RRdwz1R9xxU7lA8Tn4nxXGnl8EHHnQcRCWoZvbX%2Bgd63kuR%2BB9m6%2FIJYV6ho8QqcvNaNNfCkeNouze8DTLn66siFlPT1AmGEJzbZZEPZ4Um4Vc1jRK8J3TIEzmGIMavMoLb0AugsGbpn8p%2FxoHKIctRO9hXxrmnTTFzv%2BFUKYtiLQbI0R0F9aZ0Y88EEu3TI%2FrY0i4OS1Z8Sipau%2FHkMmquhz7%2BtTVbmR%2FalvotIgGMwPy3CloSMLP2y8kGOqUBiS5iLb%2Br%2BgBPZk7iLmw4QG3waCyYLPkQpk9BQq2o2R78ZsjFVS8iblL5DlOAnezlvnGLuc2HEGWJj613A%2BZNmUTU0OP5Ebs3eIFPrz4kGdqj%2BUL3ZPEl5yvmgp4oR1t3Bz%2FO4Q3Y7Z%2Bk40wQ2jiPo0cVqkNUqgsQoWLdMuyPftljGFfIQ72ym%2BFxxumCnuXR4e83U6090%2Bv%2Bb3yGKJ5oYS7bwEcB&X-Amz-Signature=2075da691c12eeb6ce501ab99b8bd8967ec15fa6530ba2255d664be2c62452ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

