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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OTD7JIM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQD5ktOhZPyd8PYtFZJjWjZgqd9DDwb2t%2BxEChzNIzVX1wIgONRTGAhyHBYjNLhCuc3JNfoVQmC%2Bt6YvoGyckg5Dyo4q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDOzRo9VY30xW5DJchSrcA0SbBtmaL6DZHOwm4%2BqRJV1YStXjTuLHkGQ1s%2FoEMR11Iag5L2qj49ez7LG1ti6k6D1zb648Yko1jFUXwRebKXOL2Dy5H5ZvoZbby6h57FPV2LR2TL7uC64HhNjnxWtXUAI6OWBAYhAJuD%2BVC3Ep4RvMqfYxY%2FiTRtQBA7HcCU9ByJl8Bu9%2Bcx0VeIT%2BRX%2BQtSpzYegwVnmHJ06dg6ZtMd8DDfxsi5fo6pzWHn8Olf7D54NXY9tyKAEiB5dYhHXQGMedXQJtMuQV9bnEHGEoqblvB%2FYmtI%2FM3pY%2F8xY2hdqItVepxDqtJTTs%2FqbWi9C6onXsdcxDGWAS8%2BgNSZYFYb0J69xgry9seRpHJKZflV%2Br9uDwdknPjyxwxgCmCjUWF%2BEb7FdpKVkDoXyFplHbSjoodsiwm8N0JwDe4i8quZ6tmE1cpdtmFD2CORGyo1zQPlG6KG1qh0grkIGoRnbjWomFfqH6pz3TTtBlXpC8TrVQvkLRnK7tyPzABlnuxZIafBWj7TaM14TeBlUuvxA8sEu1I8CSrq52rCVDeUzjWh2m9h1CeywjNkf5VJNem7GxzLE27Uaywab3jxgkdgdyXwNdJyUbMZYN98n37cesW1iFXWo8qHOT7iTFagTNMMzyw8kGOqUBmed4zTOuxoktqJjKoqV%2FL9SmipanPHKVH5aJJzPgcauzDO2qchNHvUJ%2BdvX5pn3RyNgx0MbxfMxEi4s5QuFgddnWdRtN4Za2X2qmXFj3huxy35YErgFjicKD1td9HENXYZyKi3mGSfDJbsE3B7E668bO5Zg%2Bsp%2FPhgQuhbaaNPga5xxRB3TDloJfoxEExPiYNuwm6u42gGIo9wP2yo6gbtTuN3Kr&X-Amz-Signature=5f2c61fc02a49f3eb0e0251ea8246cef113128b814c27952c6ffe84cfb3057a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466363VHRMK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGG8YUHxHE7vqSwvc9UWIWM1uoKsOWN82briVMXEW2UbAiB5FxRULnuL3rwwxkvBa6XVs%2BQGeURQKQhvOmTJYV9vJyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMk8cDKxRJ0X1aoIXKKtwDEjZlQ7Q2zdF%2Bea%2FA9S6loeV7F6gAe3YsxZXUfi1rWthcvGq1DcGxX7rRsIZPH4WoLGtUVwszDJLFXh8OyI9%2BiNNTyDPxq6a%2FaO%2Flk39vS0A68eFjtQ2ZskMcFCkspKq8hXDguVGWvz1DoXwFYN45EUwLwJNj5M0cbPPhJlpUe5nie4mP1YstWPaCcwLzBfGuRXu3XqYgvtqyyaCHFy1QfZQhq8smSeNolcdaCEmoIQ2P90xql4fYazRedFzRrIrMiIikboB7LgrVoRcg9K06fmRx0YCbVf7ZEoB26rTIX%2Bk28n5RB1Ih9dH4Ik3Gygti2JASSvc0uXDyiRutkf27eN0X8Ewh9hkSUjFuhSm5XMI1%2FlhCwKU0E4NRwqpdQbxzg1BxBCv3kAjzzrTW%2Fbbzyr9YzSBF4NMRx798kKXGxl6Vqcy0Mtem8wBVKpKbo1nucdVwI83fcqy8B93aDQWvWasnbNJgQz03gNprU%2B6t%2BXsFD3zTtr5xO27%2FerIHEqjakyyuEixKH5khEoVeoVigN8BYoD8YNXxn92eMnfkFVNh%2BGPfksH2PPMeD4ES5afW4KqQgKqHYz6LkjkJHEILVg1ywxuNn%2BFjhFu7%2BhZJvgEP8Tlsj24OB1ln57SYw8vPDyQY6pgHwIq8QH2ed1AgzaUHkTNJsIaE8OlR8Moo0dD%2BmAfpRgIzSoOePA2DH0HUoRt0a%2BLDy3di0Yuj5s%2BxMhIB6%2BdCZet6xK%2F0R6n57ASNr0jlmHl5mRMjsdBfuNqDT70hL%2FommnSr5UlCR0k4Xl0%2FUfcPq6R1%2BxGgK5sczkOwInTFrFTgxWKyRTq441ehQOR16PMAR5WMXuBgtC8EUXI2uzaC0sZ0DKBTI&X-Amz-Signature=8199f88511f53fe0b4397d8588a59b8605cb40531bbf5bea5b2ac25df2765504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

