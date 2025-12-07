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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGB7XZ73%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBtzLrqEAM7FYnMl7VRJVEPsvY1xVqrPGMAe3XYp%2FoRgAiB7tLxHtzWTv9tSD1rEZE82iBWMuwddtCMWn0aP%2Fv6yliqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwjA6MLE4sheGPXd6KtwDkKgDyaMOyI1bPdQdIEHd9mY0HT014WX3X5Q7nWIPfMi%2B%2Fb2C6aH0ueqPN2Byv%2FcrDjZkk43PT5%2F1QeTAI%2FiRidIIuYnJA6%2FV7gGZ4IDF6yWeICayYD9jRDPh%2FOkFxGKTMi7iI9q2xY3uxaQreG2S4fCrPJkdqf5bYnLAVtJPlxOJJE0CoMQsdQhtJbI7GYAxTkucHGfftfLLkrgwUwbwp9YlbLEZF4GJkOUQfw8s8dxTBGOvagvQYNFO9WIo6Uau%2FQpQnOGLqPO8r%2FSqiRIgVmLUfTkiIZGth9t0Dk%2FJW1c392W%2FGYwHYfns3oWsXDtd8U6DxJFQvhE%2F%2FEJroifVV93%2B%2BXkD7nrXqzTQxwg5RpmjdQT%2FVfCWQc7yIHcYvaMiioFFoIb94Nj7qlxx1mhraCDu4t6uiTcReK%2FriXoreDurzGztPlqqClQM1yzcg87CH3Z6NG2S1I2D6jRFL%2B%2BFz8xEW2Z5CIyY53%2FGx4vAp0ean0QL7A4XAuLvw26HBTReFrU7b5%2FgvN%2FUkVw86ZUruZyl05GqypGvoOdeHDKW2LA5pSz013AwJGkKLmsZPzJDBFVZ3r0wbwU8FWXZCmkX7exN17sv8jb2Eg3o2H0RdWPjWPAuDrc2JY29AT8w9oTYyQY6pgF8LK%2BT955vqrZYeg30F60cmG2U4wg1Wr9rDhsWHd7YXLuKgARddo13qRoDCjIr1ep%2FIrTzlkB5UbpGp3Qe4jULP2lA6ltvsjkQitr%2FsZMrF2sMPguetMt1HlIKFkOBecOkOuzRjXj379vJPz6URw%2Bw0zUp6mJHZPef1crjXlmraWzklHFq6Hn9L0msfR2EQmFQh3%2FA73n2BhE9us9yuEMbCr9KPskg&X-Amz-Signature=670c6321c843877eaf66698cf95c8c4fbb67e1e1f5fcaa00e35f1e350b65ab51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQGPNVZW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD23BN8XS0BDvfVG3D4zIuFOxkMJx4ZZqbNjIWI3WdS7wIgQQ9FUj4z59I7OoPQLTXJ4GQJj4uYrGWsSEs7Brz2tlYqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHC1pJmCztbA5fV%2FSrcA5BtEEXiPZPKTR1WYqeeZ%2BOiVFftWV9uF8rz3krnehxn6YsC6g0uUBiCGFAfxCHYtGNuM1bEyaQ8ZdTfhjczWyaQtokRzrfPDLTa3JCbrv2rI9b%2BOZVnykKa4u4%2BbXRqlang2jAo7VW%2BbgpiIc9nwCI3psmGLrhG%2Fa7xa76ceLo6aFJN4vmSSEgp%2FU7MqRdpOrRF5GxIyDuXTuopXQaFopjeHkYhnsmSTM35tx7CZ4C8gfWbq81Im8eWLQVnmsM4uTS2%2BtletNJJPdU5M%2FSZ43RUGUsPtBe1PiRcX9n578F5qrH69klkFHRFfhCFNGBOFBmwt93DG%2FmUQjg9FOHZ8t6edTOtmUgSyot%2B9qKkCnOIlS52IaPhTiPdYHAQdWpR1svchGP0MI9wmgyrrY670qxF2y8Rd6mZESLlDIoRnVIti%2BfbfJOcJVpwGtIGqWPBaM4lfDouOg0djHeDwkT0iEH69iLR%2FmL23A3Xdo48sgXeA5%2B0czBM5%2FsC0%2F8oUldBxVlLlt7erMEAwfJnqkUcMPUqt4XOt%2FZrd9MKYFfPD8NHmQIot9vfeZm6JRxc99zkNEaOQLNxx%2BoKiGsJpL1fJ4xVz%2Bgb7O1l%2FWdBc2Egl2E6gLROTZ2QL2iCc%2BRDMMWF2MkGOqUBMlN8TGsY1LHdGWeWEuGIWxfkF%2BzX6DLUH%2Fvnj8R3QNdlOGw71SeXCvgr7VoRWNyVP493%2B0qSAq05OZyqljXkcKnx9jDMlyS1%2BnW9pVzBSmzrXxuUl0XUAAJiYT2kUU0pQD3vxUhA1S735KwcBVja3ul7Nfa6rhLxLsLyqdMmp7SdpczYzLfOgVLPmNWEPiv%2F4hoeHeBreZvnKnzA2mLzOSnbKH7h&X-Amz-Signature=106ddd20c49636dcb53fe524ce08b03bc5283da558fcf84cb2067ce3565696e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

