---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV4JJRJ3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBpsNMJVshf1ddXyCVkvjit%2BtoLlsOBTETtr18AKW7LJAiAGt3wEoxF5QXbva6ZR7h%2BlPA0MSUw9cNrlUaDKmQa2Tir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM2PcUpz%2B60XMmy9jyKtwDGpfLqMmO9OHpEWE9BDEsB1ojpjiNOh4RBEcxAdp0aNWgRdzx671tn60HDQwOzc4lj9n1l7Mt%2BL6PVdvJFofbJlY580uj4pdosGwd6kqgIN8H0Eeffx%2BquOxtuEaarSeMNpIT4xh9kseanL1uppZ4n9Bda9f%2BO5FqMIJRfInXk0w%2BBO5Q4GZk92ASZYALJ2wolGuxq3%2B9Ko8nqoNw9y5Gwt2Yrz9z2Ww9uJ9wIG16Va8%2FSY7BtsHcD1eQYKsionRX6GdQs9ENYoHZNugFg%2Bp4tMcsqAokIV07c%2FsnlfZqj0HAiCvCctn8TN6KWWjaM1wjedUUSoreNILu2RgGzadVrEwgFsdjc4%2FYgMgjLaU262htC53v5XJ1Sew3ZUkK2aXceUJQIzDOrtQVwaYqz4ZXL%2F%2Fm6Nbs2j%2B8ksgKc6MKZS7y1TlAZKbFvXRalNUz%2Bl9%2BbXj9yTeaoC8yLvdFQnd8vLt8%2FYUPDHi6WIr5EmpJfrvj0kff4r7Qp%2BWh8R46H%2BuPtGaXGCMZfW%2FRJPMDHkutzsZAZTQbk5F0GHBR264kn41Wxg7IeexuvaxSRdjlrw738xtk2iqOBDGoJijmWCGhwq%2BViJURhiQRH3%2Bsid04ykuo9Um8v6YO7IA7PJUw5vLDyQY6pgGE6u6NcdKFCMN%2BXaYwSUAPAWB55EzT25LOjkG%2BsbUsnQToOsV1tWHq5XldyYr8JNdFNVoXaoOwzTEiEFzYH17Rg9w7mgyJQvOxbJwnrkf%2FOZAQQjigjs31HXSmuwciqs4Quzdwn%2Ftle0uo16nKEDh7ZoLW05xTLhwj%2BputzHQ9ZjxM7OQ930vkK6Yct6IxISZIHWDDw1%2FG1OXh%2FZ4kSk%2BzZTzkK2LK&X-Amz-Signature=fb1c7a0a0af396fe73113a5c0607fcbbd6df45a0a82ae55515327a6c3b23bd50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XISMHEBT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBLSCYcSIzxi9dDUYeOjIWw2tKwIFgYdpziKEBlfCRV%2BAiEAhbDsBEnfD%2FqxP8fvua9znUuMtfYoRF4ZgYWCck9KZqsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDCkZG6lcKI1oUsqVIircA7GBnoL9XgLYbUzMwv%2Fau0m4T4y5NG9Q%2FAUBNZXlxADC7PSvNpq4zBdooGh4VWTJlPhh1yxTO%2FymsTBAY1h42nBQ69upq9xO4NY2nKh0fglGk0droEe3bt25E4NlWpG5FH8N05lZzF%2FFvzrQqx9FUJX0l2OItWo8qKDgDCKvJs3fk3udWl8HGgQRh8xc%2BrW4lyOtGBpkaXhzZSes7EWdnbPOALbnLpjnPFnkk2keSUl3sHRR4SOf66QQRQjXKc%2FFZavzNGguYB%2BXFJXldS0C92ui1vaqaJ65MXF3V6ujvqGYsNqiXh1ogBpxVYmKigdFRptpqss5CSJ5StfukQ%2FRcDyzsUJsNu26f426ps1CcKL3R8iObF2E8v%2BhSf2AvfOj3Dz9gLI3zYOvxBEsPkKe6eprgHA7sIUk3NwbSbWBJlda%2BjT9O%2BseE%2By%2FsGtnh4QUzVEsb6Ip4v2ULXGglyyg75EW2vefDw%2B8kgf8MYWnUI0pwiKjVqmAfIEc4mcb1EQJnBAhOFZgIM7eKJOMCyaAHh6OlqRhswjJZkEfqvjzpwodNGkNwmyfa3P2ph9WQMlWxn54x3Mvryvpqth80Psxr%2BnfoDp90%2FiQjdgF17k7q2IVdukWXxnLZYAEte6QMLnyw8kGOqUB%2B85s%2BQiWz4ZA%2FKwXg6hDsedmfXSkVWIzq5vblgVe8skZFGaIQhS0uhehV4F4tX1zHx4lMa5SbN6ugy01qLLdxqRUNPOFGdLDGdgvIQf2XyzPsJtx8A63%2F%2F4NsLsNOoJAP0b1V3aB8IDOVYwl%2FO87svatH%2Fd198%2FulOnoupN7AJnUtUvdDCT%2FKwmrrplFzidB%2Fs3tiXKBzGNAzp7tkpyJ0StsClYL&X-Amz-Signature=86de95c46d7ef5e5f6ffd6487afb31a20e47aa6f0cac3dffb5a57eb451b5ae8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

