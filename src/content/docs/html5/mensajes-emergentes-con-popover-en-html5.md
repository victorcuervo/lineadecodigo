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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGONHMFT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2qcW9sZv0qirqNoaxpVHC7kkBJMsw6qyKqu32y43B%2BAiEA1FZY0mb04I4W3ecEhCrNn09hhQnccMeRi%2BrrmWGXg7gqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF73N3lM31a7bbVhxSrcA2fYhF13aOpQbS8zN%2BVyOH8n%2Fk6p3tmaQXcpnE%2Fpgo%2BPJdXHd2dP2BRCsIwouGOYEEa4CmOXLN%2BsGj3L0pdMyv8PmZwhW3Gvx2%2FW%2BnuVGKiVDwvbXGwywxUniAMr0JUIVLpRCW46ZE4Op5wnkPC2j0Pcb8tbIo00CidW4gyPtZBPlfd5sOG52cTnUpvGwug4xHzps6fWDAoHgB3x%2Bp5bIalhFIS3Jy%2B5QXKpITHvWCDUYKfY06wwXwz0IE0teLP0lJ86lbob25%2FUyOGbZN%2F2x3cHqQ1wftXBaAwYCUIV%2FOUVAEUlZS5TeDd58SbJNPmFRfFpxXn%2F664XM2Pf8t0f9UuoF9Ucca8RBbjR7b0tsVFpIL2cxL3ARxPp15YYAB%2FXKutXPbIPm7RnCg%2FhVpp1uuPWjslAEBfRb1I%2BupNilUKgfIJN2gyJGeq5ZSZFZHd%2FhoFFbZZSsIlfvTfIR3tLPW9oQIEEzezbjIqDdHwuDsNRzyLb2oA0%2FQjubD980IxgGsDhK8YNh4P%2Fw2%2F39I4G5XrUjUOBvChWzbqyjdE844rSkPypeaC%2BA17suUTdOYN%2FQdgWj%2Fk2FSzsZy%2B8spqxGcvFfBtIeikLH7iQ%2B5W7eerhKw6VoZ0dE9HOYmjzMLah2MkGOqUBAEucw4KSN%2Bs3LLPtlEUnNf3SAtn8jLIFe1vfbSslBxUdMNvOawnY4Ku5TGyGtkhTI9VPNuOM9RJXEI6QUEfgbhzDOV9tDB2xoPSA%2BEnjsv3%2BgBFudwZqZWbOCKgaNrwX0DhhoywKjWPEL1BT5n0M5vTLXo%2BSVmb8O40QAq4YJC%2BG852x6koAZlIimmcO4uYwclXSx30VS8mNpOnONUF2HVJ%2Fy0Ij&X-Amz-Signature=f337868cb187f93732f33bed9141f6dc369f6dd1aa55d6d3973b954d8ddbeaaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZAH2PRZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1soB2xWV8c%2BXQG8wo6%2BWi1N8SRZiQUTaqmie5QWOUpAiBMr%2FA4YadidibJh%2F4JNUjwNHk1Hj7gxeX6neMW7VFK9iqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5VY49mocfbwMULuBKtwDVmcn3G1Y8nqaNUMbyrLFmu3qHkaQanHw6jR4NdOS6WX%2BLJ5whg9inLiVDzYKE4PZs0mhS2F2qOlp8Lx8%2BPE4eJsH1t%2BjyDdrd3uAvBJ8Ow%2Fk9SnQUaTlAO7i2gDK3o7q9G%2Fp8i7y2F9dUepjhJmvy388O0ok8227hEapQ%2FEi%2FDS6o2rHNTa2URr97FBXvgVMIt2zute%2FsUtQzXGO6XzVsv4ruRWOyse1ZrsgIAtFaHNnzdyvj5DMkHbmjPA3SaWHtTsPxoFQn7u2SSQNpbSPkk%2F5gxwOLJ%2BcpR4n6fh70p4TUfWB8lX9%2BrmSKbrX8u7NQPGZreCqQu%2Bb%2FQyDAX%2B3xeqcdSbYzdmt%2BxEJVt6d5oGBvhHJoh1a3btirGU%2B7FkUqAsn6n4UG3yZgvEVakQsJuoizK8D9KzAE1HxegNSdJkN5o3V086jRPHwjExjmapRHQitBlzgBEA6kqsUaOydoDg5vzGyIdog9X9idY5D1MYcuAyvSyh2ACu0d3%2BQD%2Bo1L2dCtgvm2OvZm%2F%2FtxBVUh3eR4rfM8j2qxQafjHpp1wQW3i7umsVxTN9h9h7%2BGOdi1if8cTAJcyUL%2F0XtiB7w7vIfprAnqZb%2B9Imtix6HAc2sERthyj5YrnjUfGEw8aHYyQY6pgGEvq%2BmwrBTjNC98LdYlRhR7Gjbi8CdrPd5kk2eSkK%2FLKL3DfGogGSfk8Uq7CWn908mTnjqWkYYhq8H4XXbgON1xsIaWC%2FtSq%2FePICg4XqC3b79okJzuMrXWcW%2BIbN38%2BQag0e2eTwr1JrwJ92jNX%2BMLyfR7Xy9XCGo7p40v9gWpcAk85M7EDJ2fwmUNsjLBnMAY5t8Pyg2MGJ88wQs%2BDCRKqTd%2BPSL&X-Amz-Signature=117b355ab11c9c660c22c82abfbd983e2177e63be8d96657fba2f270f1434ff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

