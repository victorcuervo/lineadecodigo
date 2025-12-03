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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT7ZXIHK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T084027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCJoTPbPqJnuSaYkD%2FIcXy61HNF4E%2BgKb9e3opBxJg%2FfAIhAI%2Fz22GXF2csOFHWUc%2FQYhXpQ1UqyFeyvJEQxRbyAx6iKv8DCCkQABoMNjM3NDIzMTgzODA1IgzLZfcRrcGhpAxmxgsq3AOTuNjF8PkQklf34Onzd2LJHh9Pl0xTphYBEsfDiMGt09EzcLK9osWUYYdjdBCOcdpDi98zpO7plE32j1OUUUksUDQiqT1t3CsoS7zHgcBJFpF%2BAFyMBrQ%2Fgdq%2FrQNXfTcGMh3cfpJbWkLYl0VcTOdG67DB%2BzNFMJS0JpnAL1%2Fax4wCX%2FaPKktTtwcg4n3kGB%2FeYcjKacCBQrkNTDc1KAhHGsDFhzhFk0P7KNvrBMZwSZePsfNScWj4%2F2j%2BEsrGtIwG5cVQyyxLqj2UeHfHPeoqXB3oPRhzTJG7K2rRxnseUl0stdvaXftfKmE0DB3fq6turVhDeUVuP%2FqQUwtm9YsK3UOYAUxL6N6JmElKGPHuHLIlmbjft6AHKQyeFcbxjN9JkQ9Ufv8zbW8kDNZsfbJLs849FI%2FTUVRda2WNzi%2BaowXGWa2TrwAGyOgCSy6WKITDH784e1e0Effjn7mdg3nShXY1K3oL%2FC9CCHK3DC5Gc8nsDEgDAV3DKMyZ4N8A5ioXgh2CSqz0QKLVAlCw0JdAuG9y9HgJcpKVc7MwVbLeDALgQ2qeVbRzUj9TuXIlGi0et2EFfCSq%2FmLsGEJ6ssMcWAlh5Deg5GmyT0mwZ3EXBQamASHCE%2BdRt9WvhDDw1b%2FJBjqkAegpilLZvzTd%2FXPyarG7XEU516CjE2GQHogoLqs13Fsb2w6Y51ajNIWJ5XYWaUjURFji8brqakOxt6DDnLcHUaKt7%2BaJvhUA6jmmlScVZfkRExnaQIM92FJYKIwT9eBSWNA9Do9hqsrbD5tuEDE9az374GZ3U4J3eGUdyTwHl0Md6jwkfv7z%2FI0rnmkCMBWZ0RWljEquDjcx1y1LMmdtZgsyJ%2BfE&X-Amz-Signature=0199a8c8214098a15a74147bb751db5d426cd1d843fd58e09abce3d0ad06b07f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FYFCME3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T084025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQD9OlUJDCI9a1u68nA0ZFPx4LZE6iOxunW%2FYK4UxfS9KQIhAItRMHDOOUBMCvxyRg63NqZ%2BeIi3BUrt5Rf7URW%2BP27mKv8DCCkQABoMNjM3NDIzMTgzODA1Igz%2F0JTFCahg7Bs1ZtIq3ANjF5yJ3yrAyTeTtp2IvR%2B2v%2Fg7IJ4Pxt6BLE7LD7p05XoKycz5rLnqr1TzyNi0%2FpVsXZhoWJbn%2BsS9Mt3Q2ASdst%2F9pfyj6oxQRLlK9iyvMHYIX%2BNebaFITRwDAU%2B%2BxE5Lvp5doXQSzaHjt0uYbdIxB3kWkuq%2F4mGVB7e92%2BICvv2vhnI0W%2FHkfBvnA%2FgyKuKYDczSMILfjKpBwC%2FkQuFEUu2YpmInuag1NbKhvO9V0H0EF%2B9VK8VQbTj1HeXCj49aPnwG%2BNFSsdrnNqpy0CC75uLBj9wbc97ZGP%2F8Paz%2B7olFZky4PI37ijo9bY1JYUiAI97o8%2F0eRBuuqs2LwjdnFZjn1Sfj92hjXop4aMFjp1POam%2BTIOgf%2FXV%2Bs0OYCGnlRm7Q8itVV7Wdnvc4s%2FPAog%2BEwTxos3uHv05IPq0dBDJGb1LuAb6MSUb7XtExLwu3hWI4t40J3jYWt6L%2BtFBofI844fKVpJ35dnUlRerE18GqjMJa7PxeEfY3Lqy%2FPdqGNiPNtlrvlAtTOddpeq9RnIJcZ1KQqsXfFlGvAh4tzTJXVx5MhIKPg1ls8CdGoIwXs%2Bw5LwrjM104JYsJLGD19dsGASv3QGEvlwLcLdN0f%2FCsDg0wITrlyXi4pzD01b%2FJBjqkAfpcM9Np3auW6Lypc6tqiLk601noPBTfdKffzKhznw7BT%2Bx1oYLkVTLMPdiMaFFlt5N4UPGjpPVAKlo7alyCHDdq5TgQa9LnxMn7caPJ%2FSNalxrX%2BjJi5dXtSuRMshADqD0iLeqd85ZWe%2Fp8YJpbRK55HWFiqTcFxVhEoBRlg4ND%2Bt6fPodsCzwuovmXSGGxfElQMkLUKVx%2F48ImX8b8lwrmY7aq&X-Amz-Signature=27e1eeb3690170e4bf58fbad575aa00f5b3ada4f49753ed2688bed78091351f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

