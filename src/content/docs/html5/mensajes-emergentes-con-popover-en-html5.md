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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DHXDLF3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T175603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH6ttLZY5gXYabJbZ2CldCE42j2zkOmwauk2Z6tO%2Bg5QIhAPrW8agGiLB3HD7W7r%2F%2BUspTcktMbeQS0SduJihzvdyGKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWl%2FuVdoWS0xRSEgAq3AN8FIGUwpXua0U35iY5ftcDnYMGwrsKKdAxqi0PYhKDzUrVDp%2F8I%2BnLT1jGi9yc29yhKo5vy6xuis38ytZCJAhxERWZYl6dayATgjT9%2BugHBXKBL8A0AKxlmsPY4dUskC5VZuCxDVfCFVlBEZA7C%2FaB%2BkGZAbf%2FvEZT%2BMM49MqrH6YNUdQendFMGHHl25TjaKnOIBwaNoLbQRBn19FhY2OkgNFtyHmAIvkwddXvo6qamHyHH%2BFXAwRfja%2BfKnmXbJhbES3okkss9zn5mwLtdSrlKHuGR%2F69NlZCUgcgjJDyRWdexUJP4VOW1t9dlf6U%2FlH8CPKs2KIa5X0yzrn1bDGXfjp4%2BUHgzPTYB9SiWQGlqyryYlpEvRwu8qFKRHA42kyUvy4KwInciU5FxZj%2FUSZLt%2ByGVcNmjFkidvWnR2ZYSuASr0eRS3aNDt6uRojKRUX5ap3sy%2FXsygRU6dZ%2BG%2BPhPBbtSw3CAk%2FD4vQT%2FmKds0lkwcvVsbpd0y4mIC0XPQkZ8nkvLQnl3iL1uYS6cv%2B4x3Ag9PV1e6cc7AtjZyJcgeaH9KsBwds1IFSXOxp4fe%2F72evvLoI7WmIVMaMwPAUn914nYmICf%2FU1WmXr8%2Fl%2BLNVDS4gsFoCP4SCNQjDTudbJBjqkAaD%2BfkdeUVRHmi7KAjtw55jf9nTskBIHUgHGHOXzzxP5onKWKtbx98M7U3DcaUXxmYmGVSWSywv83lmC7V9mLkRJgQWI8fNpdqJmOupuGu9aWI%2BKjS51CFcvezPhGVdq2%2FQR1h6pom%2BOPa7nNwdHP4RYZ1livXU2lZ3jFuKOc4zpV3HhzXcgF6riD6XYEkEya2ZtIGJKTxnPoyb33vUAz173WCTf&X-Amz-Signature=8535957fc20cc4df9279d8eeeda9e8d2f9a421b7774f6a10061d7f30d62bfa40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG73OAR7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T175603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBUTkB6d0%2BlFs3LQZ5qJlBYiEoUrx8JfDpxWQUkEbVyAiAgFhUpzN1hoYAiryQFLwvwihx%2F1ErWNTfdmdaTAEhiliqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqXYyFWX67lEOCRATKtwDk5dRgMPYs%2F%2FXUZVjNub2vsVAjU4BaW8Sd1s3uuQrzgLRKomf6HOM%2Frtz4x6Gso220orQWbH8T2ziG7eSElRn24Mkl%2Bl6HTQJODXl3wxT9T1bhhqmSb4xdWhp7C7qBxJ6%2FfmN1LyQmzvD9ekOoTu3R1Jc%2Fh3FAcrUTc3G4FX%2FfFVLXhpSOwNfbJR16PMUKAAlBfIQKpQBxDPHa08rDoQu6d3HFotBNkKSdu9yB9lFmel%2B%2Fam9w%2BLegXMUUK%2BJC7%2FFOap0f8sk8UKJHNgCf03bBq9seNAUYVwXSSAWWlfvYp%2FdjvUCcLu4V%2BkU8P9vudE4iDCiv5zaaaIds%2BI1%2Bx3kYZqYalzhlPOq%2F3nIfybHL2Db280az7xJkVdNueKbChFHKYWxSNjqLQSXRaq24nd%2FJx5OxypY6aj9dhXOct5gbbQjHh5uxFNHGR7JfWBbptj9Ho%2FjD01ZMIOlZiP79Aoil8hu1oYF5dhFZ3W7gPcX0eC%2BAN4kjyPNuuxTN6kfaple66M5m8w0vWhpZM5%2BscEQqDXSWMzD6hMZeDhmHo0NPGUTsP4otwxsFDdD7TpLKUOzXgkaXVSe5Uw09rTlP1wBadNqV1hdKcnKS0I5RVqK3CubiV9UCty6WWH3j64wjbzWyQY6pgGcPr1%2Be4ZM8Yq9xmwXAk0jNRdyR6v0dgmub6qcYLOP8JTQSUZulrusJ3B7fjk4jqBwIOXKX35iCtYhemIoanBgigy0wCnshADA75KiVEAe2KV2G8Up8crtRoHcIIwluZI6XxearMHpug%2BoiSBXrNR2sweSF2kcROGc7Wwg3L%2FZZWOSquPlcfQywimrXFf5QVSGv7W%2BohMlikwLXSlzeVsPR0bfVebA&X-Amz-Signature=6a32f8006b1f7171e45a84ebfca792dff37bf0c59d8c4f701c60fba6e08b6441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

