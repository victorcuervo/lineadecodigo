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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T64F2QCF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChc9ggJwep1m1BgzQmmz5Z1lCNTJkn9E%2BagxoylJeyegIgC%2Bo2zOVSMcAtplhr40PpHu%2FdSV8%2FdBlY7l%2BqnIJff2Qq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDBWNEPRhn6M%2BG2zZxyrcA9jGPAPJQx4e1WixHucsH9T3iOqLKGG29GpPcThdKU25qeWe2VIyjLGMKQL3JtQISDHyRzdkGanm7kS1HFC%2BWDfXnbT7Up3LkUwYXZgSTl%2BLHrt2%2FHz3YGK4KnZgiOjbh%2FA7l5tG9oasmrWwykeVHT%2F5qSM7ZNC3kkClweclTY2ug33LeZAhjbh43Dgu1oy4BmxqhZ%2FdMq%2BgzHWLicQboe5FRXvP7WCFYf%2FsDFznHuDHSerWH3WlJYJk3L1ouva3YNRsZrLUrx814zDuwJ9c6Z0mrtOVtLhENkhdG3ukFCsewsoarTFwCRibTvZEi8Um5W9IPZmEwGUU4KJIyn5qVfwkbH6UBNdy2HuFgqUTOQyPewrgIbcHgB2yoUvQgA%2BVJ78K0eC0LM%2BpG3VwEBtSiXO2yOr4OgJ2ymNMagyuuTpWz7hPwSt%2FlqhFQv2H%2BlDsLL8K%2BBB%2FLXmlTSKrwMe3nSrK8TCx4Yu14sDmfUtzaXKhZS7HdCa543VPEWgFjeASo5bDb7V7tp6PT7kBKMaTsJMN1JTFilBeX4T4bQ4iC2WZQq%2BO0TrF3icBvrnbEH2ubEN6O0sWMdpog7JaTu8LLA%2FSuyTnPMT%2Fk8jdp2hHoSbJ7ML4VdcpMgBZP%2F7GMLP9zskGOqUBx6LlCc07wVSoaH%2F4fIOX6vjC9YSgs2NcGIRSSlo4A7jj7gFTSAuIrE%2FHFlBYVfHA1wocG7b8z1KtqOvBmm%2BCuuDg0o2cZ63RGSEX42U%2F4XYH3D6T%2BQGj91%2BA%2BHcn4XI5LOkqyLSP2ikWqPKZ6LrhPqO%2FHwRrBFWacd0LyjvbmCUXBMJPSCn%2F1QG6bZ%2FYP2RflEqveGotOsOMI5jdiy7LeACExqZ8&X-Amz-Signature=cf40ffdb980c7788096f43fe7d0d1a500286de01e5de3affaf4823cf2a1fbfc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFWFMQSX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBiCWgF16yeKIlIslwPaDvrlrmD8vSaoKfWJPnSW1ygaAiAfyH2HoOaM7ZRkZXFD3HF5rc3nMkszqIiyT7GFdvBApCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMwn%2BCr75Ca3x9NZV2KtwDOOZuoQsjJ2lq8tLmI3NkjKbAABSKmGXgsB0ejD3Ak7yGLzUOXpAhl3DwckGAh8FhoXQHa0B4j9X4Vj8qeRIpzrAJK%2BzNv6LcFWrq8yfDrShFrJbWcNnNjCaOpOpSHIKILAR5HkA9yif1PEe%2Bu6UubmBZvgq%2F%2FV%2B7%2B51OLlOIFyZVZEv2CoNJqFQFUY7deIwgEnL%2BsbIodsbhxuYorul4bicL31z03%2FjJu1%2FJq9WFxpJlu%2FrZByu5YI%2FfzuyT3Kh%2F2lJKaJtbnTTgK%2Bcm2zYW0t%2FSXcgDtIPJbYpNpay2yVyrBtS%2Bk9SpLvHlP1cwDDIRA8TH7PTuKfTY6QqJUOjpLNcWYKPvHob%2BS%2F8Jp62OeLZl99cI0VvIBefCTZb8p5uodbHW9fsJbN8sOH2kC%2FCALGpAiWkHnGskgVabXclJ3N7BLvKPR6K36%2Fre6%2FgwK9w9mBQxvpIbgWgp4Zf5XboMzzjrbOYKDF8nj6xSl7Y5foileyzcrRN5ei%2FC3E87l%2FdeWebkgc6DJl8mZhoX%2FfKdrWGqkZ7utXTvEYRKsKCkIbeNFZzcajjIqc0kOblPGe%2B3lAHtdyRKZaO9zs66zstJ%2B4ZXwWgka%2FlkoGdu3NPopx9Su%2F%2FGx%2F1xdXGQ8zgwlv3OyQY6pgHGjGfZCy7loQuR1vhS9RFg23dVaFhenLZ2KtYe2VpNMv8HBu9C%2BPsftUQJ1kwjeGlOcjcRGliCbRfwekzxyL5OBqGqNinsYHwLohjhSLqi44kUd9phZojCHJYAo1SgaOtnP6xwD%2FxlaF4ReDWShoBVYWtJZCknUuy%2B%2BN8fzs6R%2BtO1IP9Y1B7QQFz2fKGoTgEdbDOgmkK0xdpwbAnqkKnu6JqAWAd1&X-Amz-Signature=69efb81827a5f1b22ec988186d26402adbf79c85d548a29f21e947f8b0f55da9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

