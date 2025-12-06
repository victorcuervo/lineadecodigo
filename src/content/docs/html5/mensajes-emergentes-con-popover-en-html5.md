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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CZQGXPD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7etj2INh%2Fs6nk8T70rUhNL2%2BHsY0mssLIr8v9gWwoZAiB%2B1EyLQg%2FUVVS7y4%2Boy1s3k2BZKWnsc2UTsA%2Bs3MFrdSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMWVwopJ%2BjNfcnVTGlKtwD986XouXmsPPRhDo2fSdouN%2FPzJbMkVgipu3uNMyoar9lnVGFRfQiTm7L8xlRTN1SLdRoFJB1gHzBE6y3QTeGQhw6NHuHCLDHaJU%2BvC9UgpNb%2BdKM53x2%2BqnS7j7NAeJeibVyghHMQsqD%2FuEWr%2FRNLCID18rje%2BfsQaVHM7Kj1urKGq9eZerxZy9SwSKNunkd8dlZCVjduVMA5fMZpH6R8ubzt1mki%2FWIYf3ZTHHYM0OXvWqMtEDrpHLgipfkfILAv%2BmtpIFWIUWunRA4PUfLJbQQC2211sdH80MCp85VPq0XbRD%2FjdWXl1gBMYoWYDpAP%2B5S6c3zUDnK4fOD%2FJDfZ5qx2zFRucSK6K1LUsZkhkIlopHhnfFak3ICcoA0wbAA7609VRTh7IpU%2BwiVVehBUMCqjaW6rZGgBarVR%2FyYzXQgnqBGKXxILtmtmwnVdIVoK1loCsU3IIFhhDwSQoaUGTLnbzPIfT1%2FYZ%2F%2FSNkUkUfDeLirSxPhPO7HiaUFV9yRQEiN%2Bv4fnrrFXNAFpKN8vjuV2bhxfL8WBSnpUTjLEFltARKmHHQijR3gPG5zbijxsIDzaO9F2%2BP6EjMBTLem3RdAa3A%2BljsKfxf9dQPdutBoa9CyFow4KV9h12Yw%2Bp7PyQY6pgHlWe19iY%2FBD4BxCWg5jfuLXg3m4adxL3mmzkCRrVvg7tR06OkaYGBVPFgIVZ61OQWuJ1TAKd78z4Fr4W9Ij%2FJ7KPjuNXA1KNqqbMHkwJCQo%2FKOxL9G1z97Go9mTP%2BcVsF%2BFacgjsv1OvXbE9OmrTusoopwQrVHTyvUbXjTUdAidJeXap8cvUJMWSUjLKGMK99w8xKLg9eL3%2BQnVJ4ZYcoB0wEkmBo8&X-Amz-Signature=c3658c9e94c8f4bc8dff51f679acb78ff46b3bbb01de4e4f5a229fc5ba1cb4e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NRMI2QM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCC45oLGb9H2JrVVx4X0IHUPMaZJbAHascBPahrnapbQQIhAOpiITphkVJtyPJYL2ih784zOHbc9Z3NBTSvqab7xtyUKv8DCHAQABoMNjM3NDIzMTgzODA1IgzTCVMk%2BPG7zsGvVOYq3ANNrPazi%2FtIU6Sm%2FCQZXmRGW1HFJBT2Hf8B6CLw2sXeTXscCCxc9XzR8HbRrac6Uwv9NBrg%2BLMtf9uy3mDGaQ9y10Ofdzc%2FTdgUCqP25wVd9ljUJucROywbKxt%2FxG98Cj%2B1RaXaeUQVjKkEwH3gfzN22x5INx%2FuB8okAdL6Vgz7MA0hiFzxDTKFKff0nOCo%2FRYK1YTc3Rwiin8G0PwXvm6EaBmccPid66au1G0awcqW0b9BUzoL5qURAD3UMk0dzX5tz0g72LAtA%2FV0lHmlEVZ2aCTRWNO%2FduAOQPbZBfBUfddLGk10rOwGJLAItV2x77OZkpvkXVFypxoUXRzY3g79uG5NZPnLO2%2FvMu0jwkVTYeSzBePs%2FYsLenC1bEyTN1Zjj714sOzlGGLpk2Q%2FUMg3WDi5j1GmwjWOg6l%2BXrQBCOXQ5CkpxovQtUs4a%2BxSTiXvX6ZmDBdmlPqFnBQUYuofpNTkXVSTCwTOl16adu7NhQI2sa6HEyhVBtBOZWAXoRPYY6vNU%2Bs4jGUh8%2Ba1dasLoIjxw5gA%2FMRN5eEiiKE4%2FJwLqP3%2BO9kspaZCin1eNe9I%2BmuCrEWEhCqwDyWd5elLyinw4SlgFykRpfT9R%2FpRtU7stm9Si4QhQUFcqjCZn8%2FJBjqkASFA5y1tAEmCcWDsBmHekPn6Af63SOGqnqoatmJUnXV4NauU02ZbbSykX2YVd5xTzJJ8X1IMatk9k42OyQLbaqiUEVifHvx1%2BII7dclBhPWyCFiR2KLNKl48rSwRNZooVh6xrgcNlkehVkg84NJrFPy1x2GtyehOFrmhNRobVt425uMmzTIF1VEjCZU%2FRgH6SILDsE10lbV40%2BByYXIM6JEl02D6&X-Amz-Signature=e217296bea3999fe1421c1a26b0aa54b4ef05f83456f8b764125ded6259dfb12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

