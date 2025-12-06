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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662CLW43X%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnS1pb1KU9%2FGnkyR9Mr96jYdrknIjsQzQIWO8h%2BONiWAiEA4Djq4xzzqEyCAl5rT%2Bv8a%2BpMcw7Y93utwOu%2FJ20MevIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDLZ8u6twlSJ5jNgw8CrcAzQk%2FRm%2BJkjX%2BYrF%2B0Y7SFHYXhiX5kLerNT7BPh6lKWNrVi%2B8MWp%2BNsLRU%2BiY3GTO8eOWeqqarw71PPby5TqIcn7HFd7sWUtBRkCWVswE8qYSLjcKryOBdSbNOaCyrTmkGjV2MAHkB66egDbRVhJ1G5H9tt2ImLs8pn96VQXmOEvl%2B42OqhHUyA9PqCEhAy0534N5mI7OJEzrsi1175Zxixd%2BRqVGDTraLg0zrbdRue5D0bB5G7S2BVxxn%2FBeVHuJGI9x0Ab5028ZezSHltcDujRXgMGZjZN8A7fFwekZxKzZTGqgZz1dSHq8LIFmYw%2F42S1umGZMOOfu%2BcKMfmyO2j96buUgKJ%2FAm%2BeJDqQGj%2FUBFK%2FgtleCsUakGMoH7ieQ6ST12yyTEaWZ0MoFpDT5URaSbbbuBqs7zozkzl3EQXgU08%2F%2FmR8nyAvoS2AWv9LRuqYNEWI4l%2FeMZKZLkqvg8gjV%2F%2FoRxESlKRqLFW3QwiQYmgimQxfSqJwOb5RaZGxQUoArCjCUyDJyFQd7wG8H7SM9fPNtS9MuBLtq%2Btabe8YO%2Bj4N5%2BLRhxqlY96k322fTCH1QwVLv9ckAl7Qq8TXB5O0z%2BQNcw3HUpqiblpeMyx2%2FAYqrhyWykq1iyBMNOnzskGOqUBs5Jzal8V4%2BwafByVZ6%2F5iGMQMab96RZxj1KWM0LlA47B07ohPME26xqNC1Vh0TVsxydCp7iqNaLjZ4Vzf4XC8U9%2FB21tT%2F3xEsvKcpJAmpQCSCTjvNBNFdHkDH7JakmxB%2B38ysRmfNG46VNMs8OP2DueH2XeAH8GuOKd4c9ku1sNyHDwbLxQ16VWwAbTER4QNwAvLkZECv2OxMwz87jot6qOYGV%2B&X-Amz-Signature=e5f57d5fc21596af27cc0728fbaaa15b057d18ea737dcbd423f01dc0ea832022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T4HMGLO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCweyVLVOKoYK0mKRAg6K13yMrgfaLzZqG7ny5CDoDA%2FQIhAOrtWo2J8GOwO9%2BAWAltOmriAKMQHGGBHMZgU3TEC7FrKv8DCGsQABoMNjM3NDIzMTgzODA1IgwQhxwpprQSKv4s9u8q3AM0V0CUaEXzL48katx%2BPcLDBZdoC3Rm%2FsVbgC%2FZ50UL9QipIYHLvvJl2hQ%2ByVryHNCwLa87o9v%2FiqJGtyQ1GQGRMkCVgQ7cdEUCraqtRlWNwImP5%2F7UxmcfSXBLBMyKCxcXJ8ElPsqvd9gS%2FOZQnarijjMmJOZ4ne5zAH2mXXfiVno5CjeMd7%2BE%2Bub9HyJPjh7hAOr3caj%2BiRmbUP275ECuft69yJTKfiDvHsVBNFeKpug0vdJ4hvOrEJ5z2fa0z1Na6W5L9hJC6m8sRTT2VOuVoTiec%2BCXKhaEt5Z%2BuZuVBGbi7rkl3Xvl8Rwi6pGnpe4%2FNpZw69%2F%2BSan5wlTclaxqI5NRCgNiT519aY138LD3ZoonoNyrAlXJpg%2BnC1RP8Th%2BfhcE3iJTSV2dl3I%2BNtui3HM5OWYJ1m0sM5MNnXcyoDFYEpD2zQB1tTOBXaR%2B%2BawVAzHB9veUSyBFU8O8nNSD8kuDIZrAAQAV6AKeiRJvqqr1pVqzqomi%2F%2B%2BX0Z7key6oTHHGomo12HAqzfIvzrNTQiJdvGvxmUPi4WpV5Zs9OvqTsukXv5bXOJ%2B3gkQ1yXBKvTBcv14gGJ%2FTmrrD7wSRTuKdYX0DE3OYnOETSubcvqttysszaksHeqa6ojDxp87JBjqkAcwmdgX9%2BUe%2FQ6MnV%2FAn3GAgQHgd6GZnt0B3tKoPNnKdA9BGTPIyzYu9ZlnQV%2BMPEWGjkRGGhJ1CddXynby2RTElwnzPfnfk7L8UF7G%2B7EwT%2FK2T8HCVGMToAsZSSwyQyT90Glnclsmii%2F7SWtdaLh3Rzm94FuaEOUcqgI4A1%2Bbuy5oSm4HYronGULahgLTtaZVGZvvpE27RHb3tEhE1B4bjIKlK&X-Amz-Signature=8dcf7dae6fe9d69edeaa0e1d212e45927259617488ebb8800a5960b9b32702e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

