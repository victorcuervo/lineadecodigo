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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDTS6ZBC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T081159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCqYlOrDwytf1Ycn751JrIiHILRP71aDlA6fkLqYI%2BrFAIhAMpy%2FABxCC2q9%2B%2BlLzmIcfx5tFBdHDRy%2FaCTryF%2FXpfNKv8DCCkQABoMNjM3NDIzMTgzODA1Igw66rmnkTxJqZbvEJ8q3AP8TuukLCCMn7kohkPmAv95B09keitsAgbTCMjuLfu8AbXMjGTzRYaX21DmQ69oJj%2FVP%2F5dWjhMXh2aYO6tt1SG%2FeBURjDAcazyZsvYB8px9WY0o9ZhMOc%2BZhDcyRYQOFsQwI6kXZE8jiVEy5VGYJseB6XE5HtfoDSUN58vUcdS2g9nWHYItAtr4sWctZmJu39NwiehTnVrDl%2BCGZ2LXRN7WdenoIf3%2FaS0B4GAHVhExphA5M4TFgkfsMkm4LTwHAsuoReN4%2BCCzYZQVeYSZTuIuAqxkSiaFpLVudleXfp26GSIzqYZVrn%2FdgbCieyxlmm%2BWNaSd5bddJAwDPKYeBw5lOEf9hNKBFwG2IN4wVUivB4gS6Php89EFC14Gsbhziq7hfUWGI0y1pEsxhCj1UsJdkJNxY1f30pkb7qPRVidyNo8ce0ya3rkaoZUTNNlilJFBn5Q1fC1JIaJMnRI%2FlQW2UR%2FGjZzGLATANNgALFtI43tskFWxxed56LieRwEiRoylHVIvBykRcKXeCW8LntI6yM3Z94ROlmc2ScRgHGYkiovb2mrTxOYgoWpXvdpwYHjpCaDRmGzJivy%2BIcYimhWX%2Bn58TAnLdNrKtcsk%2BUG0JyjL5nLMAwPdB5eNDDY1L%2FJBjqkAee3oKon8sNwmewpOK5J9FB2SNOXyVKaEdMHTjAa63aMtFgnACXNWZiBVcNFwWshCrIdz9kiAq4vgDoLsyaOjL3bTytB%2FHDxRB6JyKMdG1mLsgOEOiY8JGm8uz%2F7uA8M6s2NduxfsG%2BPx0W6USFDdSYpn1Y0Ffo6UQwc8xo1X%2FDb93s4DPoxlY0mh0l1RSJuYel17eOYr7KMPqSdQUaIwyHhTbK3&X-Amz-Signature=0733cb600c308aaa46b801b94469a929c963b84b20792abe8dfcf472056c4723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU3PIXAY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T081159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCMYjraWHq%2BeWRRXP1D3GkyZ0PZd2Ck4AeszLwpIBbwbgIhAOAYjf%2ByKqG4AJoD2kpzHDhnoG1nS2v3j%2BTIKqK9pRSpKv8DCCkQABoMNjM3NDIzMTgzODA1IgyT8ekULmiOpUGSnzoq3AOkV5DmImeN%2B3f6zZOjWEqGyzhwzIrXXjLVv7VV52d%2FtJ4LPFEnGOglNVQUL81Rt4n2SJ7E%2BVsZXqFSXSZI0dl99mwOlQTVuv4xo1bZspnzx3vh3wsQlxIUi2eJ5BHU9PN8OE0zm%2BDZWtRpp6U%2F4q5cPakkO9BFLPY1uj9Afd0KZb585OLNWqTAGqkYENYEh5lbzhx7%2B8e%2FKzVxaIojmlo8EK6y1wYHkmyEj7SoW0WTj8tTt4tSAHzZiYPVNlhBtIaCntwG2nqv99gx%2FkCrQ3ZR0OyUMZFkv%2BYVzbNzLOIw43o1j2DCAz%2BfMmC92Z9GTJx1looeaGHKnD86M0fFUhQmjMMsljmRP1UAx3RcvX9eMZIDcx8KXYSuNLpPEoTSjUklBL17Q8pdIWrigsR0%2FNky9xE%2BCD%2Bt5kGtXYHc%2BVMq31F%2BPsuYDHpJD7vprbMWWvqWL%2F%2BRDQp16%2B65d01sfTz2IA2swjNOSZPVNKjbttX%2FCwfr2vl6tZ13wzJLjNG%2FhlokPQ8M99xpit6hehYqfh%2FIGuiONB%2FcyD%2F7BUTMQAjKELXIz%2BVAp8NJAjwNYy5gX0jOXqVCJ686Xpp0ObngUFJ5AdqAX3q%2FOlgHafJUx2xmFQqRk86U13YECBD%2BQjDs1L%2FJBjqkAS3w84b%2BJ%2BAiLLqwU1fQ0Yh1q23%2Fj3e2e74dxHeo1G6JKzMkEr6DeK%2Fox4aX0mGTLW6pxdqx3GJBpKZ7cUTE0O8Rr%2FIYMN4IKf%2B1zV5vlZOJkiclM%2BwoZ5F4jIsmd5n07NuBQ845n2fLW3orKjl9Hn4XImnuEXT8jLVge%2FgBT91phN1cNB%2FVF4GVNjdSAC%2BOHSCzawQVfzp%2B%2Bmzt47kRkB9F8xZg&X-Amz-Signature=63684e52686429a1193945af12e87ebb56ac00999bcd5ca3533a2b75e17d8b9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

