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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC5QQVFT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T171344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAOxPreJ6VdfbNh1vHT7eFcPjY3mjtN2vwVbdSNv6u9%2FAiBINmuRkO%2FkBq5qnCM5WpMV6%2B7sSCX7wTPwYuft4CPRPir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMo8Ppg9fBOVB3IUfLKtwDH%2Fo4MXsLU%2B1%2FZMCywWJvnHiDobddAjLCF%2BgQuqiwtZcAWb7EiYyAjU3%2Fp3q%2FkFzRvXzMW3pUEgJLfsBjBJfRG4ZUQW%2FvAjn%2FXcKHl4jmg8oimfoW4T0HJI2SaG0BgFnu9bxuwJ0FJY1UOKUue2tDA33X57%2FnG0kj2wZ0PCicj2KKTeEbHJjakjg8ezLnfURjRGw4bHm8TrmjYpqQQDIBmA%2BD%2BtITm9nYDufZ0t81hwPNc%2F1ZAc2JNCbfiE9XSk2gfSkiVj1zmY6xIfEUhCd%2FGOe%2Bn3hkXOTa%2Fhhj%2FTuoAaTyKKtAreQrR3SgJDDYpERlF73G%2F1KjVd7nulNycISbxIGO3Kzwm18A1yKPQBY0mdtk7o73xGJI9XQq0Uf94rnhZhQosvHU38%2FUexhjQIq11izV4QxtNSmYtWHWzLipWc4ACBWSU11ZbtYL07Zi1Qx%2F9UweZWhTaZ8IdJ5PeWJP5Drgk5qnbED3rc0Hvv3NzikmOgIxshBgR2p90sG%2FaocL2976YNjYMw1M2%2F9sbgBvrrpRuinfnks30WTE12P2WAtobu09rApvaoNmuJxMghUEJwW95S9nK6o0GizYCN0%2BvxFTzNWHTZ%2FDTJByvYcL18Z5x54AlDWPmGMz9Y0w%2FebLyQY6pgHb0dvZT%2Ffv0jVN%2Fmwz%2FrzpCxMvPZwMiMVIL7B7v0UZGzvIEPONiVG2z6gpOZKkZTDjI0%2Fro2EMq4PncW%2Fbm7E8JkEvcfTqSIB3TRaMemVruZL84Xx9z4BBzeGIaEq1lXpM1ennvRZBrpmydC2M%2BZS2jRuM2pOJXzhjcPOmZ2e8NRGctB09F8aWH01qDrEfTLSzWgQH7x4tmESMrg0ICdIrvBBlYSAz&X-Amz-Signature=c11db13b0e49b448724815dc53602e706c5578a7f999d728f9427875acb6eeae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY6MJYTR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T171344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPv2h7uHl7RftjHG3bEeQh92Vq%2B0fkKKC%2B9R1YIPlCxAiAnYXrDSqDTv4k8aGykx8E2Nyi%2ByysBgj5aqkXYyJWUKSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMkXx4dFVjH6QO9%2FE5KtwDHYcvhrS02ZZz%2FYsXxcnuKxgTHmlLAyiGV%2Fopo8iq%2Fee4w5xbG7ozutCxXPi%2Fy01l8rYULeYxnkmhmoh3t%2B%2FiW2GW9%2FT3m6U%2Bokv56ROySweb0I4%2BYmKS%2FO4MJSmYlcN4A%2BOqas36bXw78j1IxIuo7PTRCcpAWolNmmCv0EuFkJ%2BnoJkFaxFjPn4ISXsNtQybiamPVfYPLSeCa%2F2zbWnp6LLel3hvzMA69WoaCrJrxyYviV28rXz%2F%2BcnF7sy1EVmL2lrtuqkblEirB23OZTdrNc9%2BsEifQhMRD%2BqP71KPB1K04lygvNxZEBOxZMj2d502SFSDqXub7T6dmaJ1%2BT11ZNZbRNU2S1PznxYRnBMeb0XoREeltq3Y4jtW3ZAn%2BBi%2BIOMKx8N3Pz153uw22%2BoQqd9lylK00by7YpZqW3bitoqO6Ziv3erBzWmvJsm9DsEocdF9FmZZ9yX%2B%2FXuWv1LOJPbEQh%2FTF4Ek2GOAs2V%2B2glvb%2FxpLJ2k6xiyeS4yDEas65Ry5FsS6k5ccy46KE2dmsvKz9KuGTgXY0XnfKXCl1ezHnnSEbZzcI238iuqmAMHzjG7r%2BQw%2FVokwJW7BXUZhRrq%2FgonrLuHLZOArIbM5JpbTB0bgnxP28h%2FQyUw0OzLyQY6pgEfla3dO%2FRFLwG%2BDvAl9d64HTPfFWmnuIh4WzKhsjg%2FjuScMfT9l%2FXr6i7E0pCuQy1AGKSv0O2c7J6ttFL5nMnheqs5wxNUQ%2FwteyM6c8WQ3o%2BLBGt3zKjukqg5yfOEYa9ZBe9WW%2FB89KWqc6lkfDYRDNv1Cq4M3%2FMWCv3VGiGnPelyeEF0dz6%2FM9iKsvNqoXBfFTqwu5fMWyx1ZXVbeQMXj%2FL43ZL6&X-Amz-Signature=c9a5895cb89d128e042bff680fbf3146182bde04804f768def8b86b416d63931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

