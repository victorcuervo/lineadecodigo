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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7AAQUMS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T144333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIDGVYIHd0h7ThMm%2FBdxigYi8AZj%2B6l2t1dMvxFCcFZ%2BYAiEAiay5QldxgH%2B3f6Zd0I7vPl8Q1wADZzcopDkBSLbMY7Aq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDEKVSjeOavupEX3qzSrcA09r6kHFWMqby%2FtvpoEjF195sbAIKTSAUAT6hpVBuyTpDElHy4%2BHWGWrKiMcsK5pfVUviyi0Kh%2B9KvkSsftVteqcnoYGO6UPM%2FJc8i1KJgNayde41b1sXrykRudQ9QKIgpQrB%2BywceteTkavxscPAGfEbCZFZop4qa6vH4gmbhEcwYbWg2uJ3MkSusPN22MYxpeoTLuCS%2FBtNEYcc%2FOOI98Uuc4xJb1%2FnbbEkQFk8WdETIaoEZPb8PeEe%2BUBEn2wXqbhSDt6auMZhIzTJlqwM7Wdbq%2BJH%2BlysVAczrcbT0PBJUmP54HHQ50sPFBj%2F4XjRfafEmh8RZexwAHgLBByifi8tFTdI0Yi%2FyPH9cA6ukuPEpUn42XMGr5Bv7rc0Mqcp8lgysuYKCsn783pQwrB6Zw0sLbPqF%2BdKPw5EflIww%2Fg8TBSBATvBps7HQ18FWVIVvX%2BWuGZzSRvEjwphSOzaBAVDdMKHQFpc4EYOLWZtWrAEej%2B68QUJMTTB0f8vChQbV4pWWLvyPozRXKrg%2Brn9Yo%2BLCMW7HRuiO2Tq2hROoV6P0BLEDhHZ2ur1kc8XeSyBblHYTWne91ce4Y7Vg4toZG9a5oHwKddl0x%2FCWm8wsvEN1FMoN%2BGkIBlT1mqMKyHwckGOqUBlHYY0ua8vOUVX%2Bi4EJGCAqexnM68vm0%2BDiw7cjr3t8c04caMo2W3%2BiB5nYmUFPHXkZciSls1TqDZN%2BCwhrZCbaI0rhmm9BJQGbLh63hfCCdR2H4KOFM6jQr6kK8jkx4mDgrw%2F4jDgnUCR7AI9OaQtQKU9Bf%2BhUQ0l3qkwbW%2FH0wf%2FgLLM7FHYKlNIH0v5DbmS8NWAeJWfXM%2BsgBWA1aW8AY6LGGt&X-Amz-Signature=82ea732ded8806745dc98429df29399d7c7b530d76498a8d16fa9e739cb0de35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QORA67K%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T144331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIBPsC%2BEhjhjmHFhNsu%2BOzHwjNjNPQ2pNS5u8HBpJMhO1AiEAmcyyGCTwRPOzPGVZijRR2wAMeersW3fQmxUSlO3188sq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDNWi8vmxGrwr%2BouJsCrcA8fdo26%2FkvtOoVGARtKLGqUlnLroWtA2%2Folt6%2F144o0Y9%2B7a2Yr3sKVAEfzK4X5ZDhYKvOxTwCZCgfANXMVohsAiSIn5EE%2F0lIMiPEj4BgH3kI%2F1LoVM16Tmvy55utIU8Bv1bcJbv2VLMdUu%2BX1Ik3nUvgeOooA6k9kP3Qyb9wzBlQ%2FEzJf7KztR8%2BnSllYYMduiMqM0lO%2BM0NIfdMWMYOiU2JCEZpshQn3GM6LXMg%2Bb5L8Vwqp6KkGEulz9hnCs7eNChYBETM7YpSlIZs1svKOHTkWiD5QSuPQ0Lq4EREstovSAGmE6BPE0yBtU9e%2FCHKNvvLxycGeucdUn3%2FuIrQqCun4Qtz%2FZh1DkD3WpsGrGX4mfJx5wtXlQ40k%2BBiPX%2FmQJJSA9jfaoxPtJ3mHejwUpwzCOZaSqmpsRoCQpYDy8g3zPdiSGrlloBzi4tIPjE3cGwB64LQvMYlFstqOT%2BIUBFk53QLHBJSyTF5%2BSi7e8dVJ84cgBP%2Fd1PexyPSfoc0fVpsmAqDwQKqMZ7YnqACF2czXk0NAtvOEyCjBgoKfvKYrmXZitxJtyOESRCMvo3ZwGB5rI%2F70qwrQmYcinLdJ%2BS%2FshbS8dWBvtbjroaYbtHWxera%2FVDxMeP%2BaNMNSIwckGOqUB2h6cu%2BAV3tgkDnlUS8Ae186Iic4ZErFcPzXS4LjaaJItLnjsB4UoHQboJpGgoTUBLqKvjbcOsdMp7a9qnd3s5GTp%2B8mIn%2FG1YBwmQjYGknLmDYd%2Bnz0GyffxttSZAXadEkiQo3gTp6loJPZeemJ5khip5FlEFOU1QY1mJQfZjY5a0WU9NqV7B7KiH1vROBQTL9ljV1hYnNKxXYgmGOjKh5x2TH2Y&X-Amz-Signature=04f7550a10bd8c31ef6194aa8dabf24602336187766a70dedb1ccfe84d9c546d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

