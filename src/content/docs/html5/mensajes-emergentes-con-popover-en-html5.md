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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJOGGE5P%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJFMEMCH31vqxPnWkAT7aKjncxUQlCtkPqQIWvtmII2GLiMU7oCIDDj0Tdeyeb1HChPgR%2FJMrgNbrtZOVPHpO1jI8vKHC5RKv8DCEQQABoMNjM3NDIzMTgzODA1IgxZ%2B2L4f6LRfqtyCJgq3APL8qzffYQ9YJ32Y0X1MbEfKJUquKQIQb%2B5shWRrgh6gsl34695%2Bwiq4yuA1x1IgWfjAnsT5DbatLUK6Matej7mJ7mgfSuNQIC6%2F4X1naNzKQdQa9K4DMrj9M%2BzLZX%2FcYNwepdRvAisaCpM5TkWckOackosW2OoY0mJq6WLnZYUxXjlPfifYJp0vxYFLKVY0KpVroeyjlfzOHtbrnc%2FSkoE7iee%2BrNb3FckdaRpJ3UnJg%2BAkDYvi29ZPAyAYic7Bbx%2BXIuKaYiZmbhkTAasOYfNT2kpr8fmbkBGvkCOIG2r7hwMU9tH%2Bwf7tvmdZxBfs9mHhIcvmyiqrDnNPjxQolErgFvRrJSNNXjFe9Cs25y20Tbgh%2FhCUy3zqOsSSOs67P8ixebvDy5tEX7OyGRUCwwCrDb%2FBbvLgtzLR6hbdZ65DzR%2BKg7%2FXSTRUFILw%2Fl7WmX%2FRZ5GDZEBOrNf0EIDw%2BuZzr8N5OypyfRElBKbjBwzzu1Uw7qqDYsCZRyiakeVEkqJ%2BaTDC4JZEGIkswVMOhZN44XNClhyrIYSpbpLG7PlO%2Ful8cjIP9GhoV9%2BXtn9vyxdEoX12hLdKmkBQS%2BAjn%2FYTKBZURKIDq3l91hbt7vTUDrcf5DwkERUpb1VfTCUycXJBjqnAWkXD6ZfxzAjjMCgy9Ylt%2FLwJMbEaPsdB2JjRYt6KSpESqCb8bHFTiSdi0td9NvxXKDguFJpxnJApA3fKPgBhxFD0tDvtII30f5ZWOtgektyfVmHAZOLna%2FHKGL%2Bn5gl8p33Xe%2Bl3%2FYnhID9VCENDUXsiGbaJw1Q%2BrQCUcTxC%2Bruk4vJvWPI2sMnf6lzR5d%2Ffqvv1eN5KE9loz2fwtb4NLVOcSafjGky&X-Amz-Signature=abba6de346e7863bff588d3e5d36a7cdde9b3eec2e756596932c3c82709f2a5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662WVTQDP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHZsZDNRdbUltAsu3GddiSVX02A49%2F6rkDdQC5x9pG%2FbAiBBlH4Gx5jtaeFKtjpnrUh1nOAoKXi3ZociQos2QD7jSCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMZz3lZx36z8KYbDElKtwDO9w3VmA4QhFdo6WafbV5OahlCzSsSx79B7oiJXdhIapi%2BRi9IVOraZevtrz%2FtEAecPQUWW4BAEDO%2B%2B8qEjREapUP0duG8e%2BdBwseXi7fkcf6nzPFHlgks4aRPZBO7u96X90GO3sVTn30CkhKR309ZmnW3ek%2Fe0JTxLci0cfj%2B%2FeV0RCHxk4SzjON0Osx9aGAMPI%2FCU4HfbG90W12o9XqfKQtXcATAwyrzPmdPDHKc8RTP%2FidRjkPESDfmqGXiMecAjs9SP%2BkFid%2ByMDWrX8mOlTfHU%2BSEOhdImZgYUJp6blFAhNLBvK3ZpdBPQA9nicIq4Wkg7uJBkRq1W75gs8YANzQSu7TX8MfD7Rtmm1Dh0eMEOPOc6cQ3bnP7weNqeJRQMNpKSU2MJIgvZb%2B%2FIw5YnWxFAB4W%2Fjs1R%2BDCB6sk1pFTXx1zQ184%2BPvWA0Z3gkjNdJDpuRJctJhqqS5mY7WoNZ%2F6lWT4D2MuUSQZIhAr8ioP04K11YWbUiZLy%2F2xbNw4ZIk%2B1w8ro1yOvwwzsfTcC7qD2p5up7KGL68jRdRzR6PMdUigMi1uYyg9GDjonr%2F5t6PmeIBMEwfRq2377WIcxmr8jAskoTyeMWsZrOq8fo5oYSNbFYbFqCV1w4w8crFyQY6pgH%2BLHC2aiWa8a%2FRjwy44qQcDWWOtGSkL1yBgWkwCWEUSyr3vfA%2B%2BxozhzKuA13GpD0sdbZFvpdJ%2F35WWXcIocnuO9ySWGNatFsT82bIo2AESC1pdDp6wWGzaxmuPCSQuFXXX%2Bqz3Ad8Mvlft%2FcrMppbeu8EuJeRa9f0fPxpk6I3tGXF3%2FN8TsciwoFpKkqz2cghf3vAtX8IL2qgc2EF2HHfyRqurnPT&X-Amz-Signature=515ee05d5ab4c301c73d96fffb8edc5b18478ca36cb12fd7193d705dbc3d8edb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

