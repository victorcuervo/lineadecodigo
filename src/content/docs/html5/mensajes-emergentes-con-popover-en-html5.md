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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CWUE4J4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVv5XFybsgNqpe7zi12NC%2FcAOl1Ld23P%2B%2FAQSBgV9cpQIgZCDbiAEu1y7vEBeQt8fbp0N6bQ460KPu0b6iBgA2K34q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDA9K0pussXD3bZjnpyrcAzg1ucMVlcasg27Gd%2F6BqxRxDTQvmn8k9OhTPZpKQTyD9%2Fe93HsX6Nb7jfhCscRAKEAQWteHL6Wc3o23JW3VlVw4qQNryL4eRfaAmkNQi7b8eptmuwdGU6faxN5y%2FrAm0fIsUp2FK4fy3YOQYgPui5r2ykcGNcmnqvqraV2XFOSieEDgZOPYOi7ZlSrtKDlIRhp%2BIWur9i0iZz7CKUnEs6QeXWMKtQoWSBwRWdXav4Su5TaEQeg9J3SQJ%2FslsGzrp%2Fs7cVKYjvBal%2BxiicQw16UqirzqJ3SPDhXU0nnwqbfCR%2FGQufB4LXa0NoYOIqzmJx6mZ7T8Y%2Bb7YDeGHHidE5TUOupIDuncFdOyp48aRs8krxdJMOL53%2FyMfTGanogNQXMHBBgMLwRFjJbsowVLQeD6k4H82Tg%2FLcheLnNs4kRHrsxcjGo4Yr8dPJynCERHHPoOJET0W%2BuyNMlP0aVVW41n%2B7ZgVysMSqezRIeA77evyJ638AIlFcaLkMySuNTpBE6wCLdenScmf1mRhepvhy%2FaRuScKpNFHfeRX1rLaVVSR6nAE%2B7fDuC7tEJ5xNd78cauO4q57wCGpZFFfMeP2aAL0Dy35%2FLYLodG%2Bw3laICNqGNzUNAUeVUYbHMGMN%2Bez8kGOqUBwAL9Nv4gcO2RFv4mzTjOwgM1f%2Fnc8JcHi0Vw6VPokkRkGAYi7CHR7L076iAt3qpF9hoAIsJuO4JZdTm%2BXL1WuqsduFSh%2Fhv3%2BwkGFDdZNM9Of5q3rJAVwApBmzN9dix62%2BkL1h18gA5eR5%2FaoWIN6k4nsFcMK5DhwkyfREN4SISWIEMKDCHVZhRZ7Gf%2BK7%2B%2FlPFUXutInWiitVHRcGhlThSVj0Ik&X-Amz-Signature=3eac330ea82b37a6bb1e0414a82ddc8e2d50abf86c48e2dce92544913ea486d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL64XZRC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFL7nW1sktmUIw78fFXQ6A98W2i%2B8qmpbfH3sglICpiXAiAKmi6e4colSidYnWsq6eShnWQd72NV7hrqaL%2BjaXG2uyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMGDE%2FR%2Ft%2FDKpw49yUKtwDYRp7pGuA47HX%2FRX1FVBXMwFInfrk3WpMk7SIJNcXlYR%2B5V5U46n5UoDNjqGPkETq4Y1b8FGq1bmH5wQugRUWMX4XGZGGtnjCBNslNZi0S41%2Bzq2iXME1d%2B%2BlTkOQGZ5QUfMEWbPWP%2Fuw%2FJi0z56b7%2BeBceJxXtBshLkq74KvUmCw7GxpD%2BO82g18%2FIKEvkaFFyqIXN%2BcO4EPvzcB2LGGOL%2F6pStwFMBjYZZbaOmA%2FOb8g8GRu90hL7jo7pMdmG547dFu2mh%2Fhsw40RtT%2B53Zg3ty7pWjgJvSedPLIIeAQpIUo2DuyD%2F9EUlUy%2FoGv8PzCjEqTARDtHQnJxje6BPNkykOOfNq2RvpKe%2Bdqs0tIeKcPqkUdnKpKQGuUdYVwZRR9xaJvtall%2FMsBKNk6dXCkHWEmmtVUJq7lH%2Fr7jY9uKVlMHRl4fkxVQHMy4DHF1Tv9tDnwPryg10amgrdERJFAmgprVJEkSWiSkPSWedUSlKJzLDHWlypsTjbm%2F7dj%2BhoT6V7PPEmsDUjaYZz1Nn5fNJDH7tAiz8th7Cagm6yLePWzV5WjmaHiB4sOrZ0MKikX5KpU%2BoZEyLjP1PqNk1iz7pUDznOW9i8lBQr1PQlHWbvMleN%2Fh%2F%2Fop%2Fz2eUw9J7PyQY6pgFqrHIn3pBG31GxWCVFPxY3AmEgEePLMLzP9FGF1ELUngwSx8RjTciPlNBBphBwLfkYUbPTT8CEufswerWv3LwPx7kXfABBe6wjHF66x69VxWnG3MNKxMsQs8VTWSyLmmGkWeo96kBV1L%2Fni%2F5I%2FhEcAOMrvOq6zTsXh28ccVLedjjr9Jg0O6sPBzUjMT9iWIN5YTwRSt8E3ecBjP5UCAuRNKT9daE%2F&X-Amz-Signature=38b5e926e6b235ebfdfb3901d0842a994056058d9348a9b078e4e9d04fea1de4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

