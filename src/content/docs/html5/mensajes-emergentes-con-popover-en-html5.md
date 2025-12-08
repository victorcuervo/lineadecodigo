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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIPY3XL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T195414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOqVhvZUuUhTfuE%2FBcLpxjSSMzkDVH%2BYFToVQjgaSYUAiA%2FXjli7sTcCdMvaEkmj8E17zRJAnflkMXOd4x0bpNzDCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdrd%2FYXtXiGMSoHEjKtwDVouB86SzUO2zig2D1RsGl9CQujYBpsAk8K5Cd4iQFlYc%2FCjS4lliFhXNr4VZ%2FDRUYfHx0hTJq8XQOsDRYSevtx9TM3QuZ2X0b45H2Gwjr42S3NIZ23VG9qL1FeWbc0gTSwASTAHbGfkypz0pcqXfOLgCDDd8ECltT7voReiCUgBFiD5YU1dO2OhGewg1lv6BqZbuWCM3A3KvpSZVKiYfZbE3bIAo1fZlX8qabnw1tg6jI4z5F1Wq0LyqeA0OHz0D%2FpVIcyadiorgHfNAXbGQcLwRSxU5uvNyDYB7IChy289FPJNeXWJtqgP1O4MKoHYbttc6oXKgV76TEue6FA0%2F8tVbXZQG4ZNRUgXivNaBNq4OuS2SQgIEC2SJWrBjY7ZPUiQE5%2BVCy8GDY2DqsS6iOwrNiga7G6Bu%2BdgxKjztrAA1F2l4M6RGw9s%2BFGo%2Fpl%2Fo0pR9I8UWZSBzbUwMEmMfY%2F5GF6yJ0X1xFp4%2F6MQQG89sWAXlZFaCoafWczjdd8SwSbFPrWgbPPIz4NFd4QVJWPPTHLFiHZhFTVA599o1DeVBcNBTJmP5iTjAKKdI2EzFOb4kRA%2Fy83xi8sDTNhhMxJjZNU1avuFNTuegYuwZH5NUVQT%2BDEL3NBtINaswuLPcyQY6pgGLd%2FmqaC7cyh%2F9mhAuAP4I3ldIcusXcA7MAvcDwxXYf28yshuKMDgMU16XeSCxArdxmYxJ%2BiicRn4ZfJR0VscHAZSgSc51okUuHrFjYMtAu4%2F9FqEmh6cdy2SMd8RbkQNhLkBQvrYvFkFHblqb9U8DWsd1MImf4od3W5jUlOcDu9K8t21BDO9h3ubAXQFI8h%2Bf8hxF7NvwIRFLiJPvJjcMpTe2TaRd&X-Amz-Signature=661d389c9fde1bf1c30dd4275b73a592d5ec2323a0289aee2beecd82cb12db00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5FJGSSG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T195414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnNp7D0%2Ff6V9m%2FzjCrVFfoely1NcW1mxE%2B7ILwuPeA4QIgDRayygrIkPiEzkoWRtjaLZ0mDm2hEIM8Ud%2FhAoEy9zsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAC6aCRZWHihqrW8OyrcA4iD79pDkqVzBuQxKGOUnel8TEoimilxQjBOjNtjVQBlUjB0cPmvHOhffMYH1gFyqaQ%2F0THO81uE941Y1ClnwoQOTl7YCRqzvXOmGaJFgpWH%2FTlzV7guFadyAXxIRfzv02ZwN7nZ%2FN3dqZHldeoa8%2B8VPngAWEq43rM1Dlt5mloC0HVt6PE2TanUWNzggugQN1Q2rHppZGW%2F3v%2FBaBt1G%2BidglLDwwguNFznwodgPoZTU9%2B7NktuAKWA2AcmwL6Di3dCUxMAUJeMo3%2BwcfvEVAWVf1VwTpIkf2weF%2BeXWypMtY6kyUnzCo%2Fw%2FDt2R49UOa0JCNWOvKm3kgGNZl4vkNLnjup3f14XuEF2Acs07p37hPbZaIqu3ZXSXfB2IqV1%2FF%2BLjdhxiwK7f7V%2BlFCLE5Eqpe0GpDCcyESGeGczjzsc5al1vUiepi111E5V7FlDWkPSfKB2XIT4EEvEBephjaWMljJ%2BMkYI7nY8kscCCe69jh99xzFeD4bEViBG5vF1om5fRH81wpUvmsI3oQi0WFDISo7H0OudZNMQ%2FZWsIQBc8hhRnoOpp8rujrq05lAEv4JlPpCU242d61%2Bkxsh2ZHPohGpOyD4b6%2FjBxmgxbDGIR40OnemXMYjR%2B0fRMNqz3MkGOqUBTz%2FI0huLqu23hcIyWiu8wfUkYnetV7s%2FgW1lK%2FDQekcOtj42ZgIr9nMoqdV9nq8XQU95hIZHsQ20Bd6xNF6iD6w0HwehsjdymyuKDo4ac5yU2IBNGLDDIc0WXnLoYEsfEakERHPP7WEXKjUrtCQoOxyspho%2BWQWV83TjYfUnfX0fywsFoDQAnA7iz%2FivxNCjGGTm0eT29FvuWodRcNPLNy2i%2By0b&X-Amz-Signature=dd096c408ac2fc3d0f8d1b049f9f5bce85995559d9c8a1445660b45674b7ecda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

