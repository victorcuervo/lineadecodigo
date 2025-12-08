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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653RHGC5M%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T225411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAEauk7EZfA8EwCGgD7578s05Tv1yFJR6RXPH8yrtVUwIgdnY%2BEzsZQojZnGeYPnLhkGQ0LNku%2FiTHQ0q8%2B2%2Bqm80qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyV2NJjG3LJWZM%2FWircA3l0qQKCEmVa8%2BeKgMcxF9fe%2BaFqQrbzecP4q4wHNQK41ffmereA90h8yYqA8dxWn%2FqEWjx84weUH3euz6t04ozZTapKMVXM4nfsWvRCtjlvUPQKO6enEojwwLqotYFECfTlS4JYa0yV4rQ10c6pU5o%2FJ%2FjCS3zg65O%2F6LhboGZcaoEnviDJp71nfpxUsAHoiGjxc5c5EK9YWu7sKZWTK3IDGn5r4cnwfzvbKFl4FTIqZ21BDxcVSJhncqL6TAM0Zr59jvrP48N4A60TwZWeg8rN%2FIuuoJubhNWzEPXbkTsK37p3eFbggmFGxVJwjR3b8kb3ksdiF5xJGrpN5oUU%2BV5w6dW%2Bb%2BFikqxgYQgMRkG%2BoTm3uQZDRC9Lg0g94TXo61zaa1kOPAktZS2lwE5c6tQCNO0hEE%2BYTAN0NBhvqcIK4Uz6%2BKtbPpbR%2FFGLT3xZhvdX0RrLPhgG4OM0w7Qnu55uprmYCSbvIUsuXEInXI0uZqfwq3vFWsSeYeB0frD9AM%2F81Gl8QVnj0JrFhv2vr5O29x695poLRYqUGeoCYnRyCUHtV17Vj6L7LgPrTz9HaSQZJfjyo9wLanMu8D32mRQMMUBjns0qKG%2B4zmCKmVagie6m0jY3GwVaRkAgMK6i3ckGOqUB8JrO6EPW4GF5kjFmzw5C%2BBWZlGEU2M79o0pTzRjlklSzDUBtDikmbYWYSfqTPlINJX%2BxhE5zTI3PYwtn6Cj%2FTJw56SbWf7rmcvYf9uNx4pO50%2F5NOmvpA5x53l%2BBoanQLeg6ZhHcNeZdBIo7tB%2FkXJLJiySVUgv243AtZksyrJB%2FqmqQke5ljOFiDDjfeRxaUL8UHrzV3ytRwxyj4Nl%2Fo0bjK9bX&X-Amz-Signature=2c854f2354e1ad3699c1888799c5270aa39b5c8c84a0efcb43684ce5f6b06f07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUFM4LMM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T225411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFvRBKDYsfDThw3gfx6JDH2fkGmZxp9GXa7vAhQrBIeNAiEA%2BXadXk20eHpY82saILamCebB5y0WGblwyf6kq7D8Fi0qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhknF1ClZSMeujivircA3dTFBgUo%2FbTvfF7O60%2FVW8BmMYRfjvX2JIUQlL4y2l%2BCFH%2BjplHwEO46MQ36vCeMlTKwZrXGGukp%2BJ1I2LwpsqioOwo5CKZH%2FStz5KRNPusqulAWXL8jfHrlcQT6gVQo3O2EiFfeZp7%2BhQEgVLbQq9SqbYd0z4FZfWxh3Q5B4z98QACEadyg%2FQbqt0rLfsLNId0GHvxQVmIDl6RHJms8uNPS%2BGOtxlj%2FDatNDKMixMTiT3H1z1Hax%2FZfEU9YMgfTugp%2BWo8VZ29CSDvw6agzezP8FpioALgC%2FJUUsnzjaift2iHZLx7pYipfi%2F2BDHxuz54oi0%2BGSVLyiouCPszw79qKWvDtN6Ho39BfMI49FGGjVnUDDvllqUnXTWYu8iMbkmzUeCFnwgzXimal4A87nqmv5NvU6XgZa55%2BBg%2FfpRGzAih4TD%2F1hq2Mb%2B59qP5cnbtNmlqmrnyhT%2Bi2X2TocMfZkZiK21pTabl%2BngdgdSZ0wF8gw9qMT%2F2RuKutU8kLT8qNyzObvY%2B4pEwyIGxqZuMLauNEwTj97wEkOoIPRw5TDN%2FlLAf10ayMl6ddxp5dzuaHCmHXnT%2B9psv0w0gmt4BLWON%2F%2FprkX%2Fyug6ZtQ9%2Bk8iJfiEJQOGz3xntMMih3ckGOqUBTIGYwDUbyUPBizczZxW%2FbpyfogdENjKf3hLviYl6fFxkCyeMKwXp%2BxhXev7Myk0REUArQSE7rjT6IjTItvW588OAYUNtzigG6lZ1SBd5BcnhDmTWTNxOVsXMaS5nb43Q6VAT%2FtQzrBfhMZih0d%2BFZKv6TNCrFwsse4j0k4bbbyCCdkgaVKC7oUADvvgnwjnZFDDa2ngu6s1leWHJRIy%2FTQjNS5wm&X-Amz-Signature=641a1e9153f41ea5337b346dce70f77b6a09c589311136845105e76a9ef87779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

