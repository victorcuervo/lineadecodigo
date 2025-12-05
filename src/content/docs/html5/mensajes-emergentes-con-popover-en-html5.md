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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6HKUQ36%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T234944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDX%2BbXoqyAXWWydQuVN0SYhp1bs%2Brfgup9z5byEYo0vQIhAPFwRMt1jI0MoqVTiBLJjBatq3UuF98ntfBBAIuSQu3VKv8DCGgQABoMNjM3NDIzMTgzODA1IgyIZLzE5ByWu3gQFEMq3AP8YRNLs%2BSel2Z9DvBnd4K5U52C3TL%2F48ypbeQjvZjvnnjvV7RiZQoFJZ4CU4ovZJa14W%2BL4YwXHTxMhSdq8yUmX1uASY7Qz5RyUXYQsTDBvXPunBCdgSD7XLCgBHzneVDa1QzBvbqd2X5lfkWFEeB4AlHWnCTe%2FQdsdvFgQqTp6nmmBVOkva8WjbVDVLR1zxZ7%2BXZfDcd4KiRmA6ENrh6QwZkFOsG%2FVBE8el3LQ02wLKW1zZ5axafRE1F7qS8ELef5kvg0Rwx9VhF7fKid27pVP2Efdv%2F93IYVOoFjd%2FINM0Ai6kZWJ8z5DCqJb30OaQcfDdKUtWtA0D6zJlo8gO1%2BcfM96Mpr7b1rbakck%2Fw%2BDfKbUZBMp5BbUZshscpF3520hWTOfnxe4u1VXKNGq%2BY8%2BRq1q8ItXKLlVgjgxTzRlcYuaPk6wR4r0NJr8i%2FdQfxtQOYRN%2F4ZRjgXtP9UN7PVgVUK3WF%2FVg3riRCQNZ6BykJFMaD2uzi6mnGPwE3hTFhNCNKMMQR0Peykuuk38GYGstIUFmuKHKIH2R9B77sZOORcPcb6uDNPrgtlYVLCeF43Qo3MCmM2ElqZ3iFfev3nqoLV%2B0BMHmwibkb62dxGxurdcwfxR1VTTbRD2jDNxs3JBjqkAcsDHP01vrnaPfTzfIldyocjzD4bKsjkwt1zHr2O94CCIcUXPKEEPuiAweArGJmgJ64UZRcVCV5cRj7F2vnEAHpuOLknO6mbjMF3ETFlEe1qcaePBxUo9%2BXtSHnUftPfyQFQ9H7Kn%2BmoUSWZMtwZ5Rlm8VpAa2sgCCLk2Lu24Z1yJftpoCuz8G%2BMO4bSfkPrsaOldCXRHHhkrGiNUaQSJk%2BoqoVS&X-Amz-Signature=fac6fc34186c2a73f88d590c7f2e594211b1d1b4c0918cc1b052181c4de93302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HQM2UPJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T234944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDO9I9oKZSh6EMfBPOhTJhRck7HQdEdiW%2BUPWPFafuTVQIgO45fo5mu3eX%2FsGWhv61vj16vdz64jBwpjCk9KZYIUCQq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDK1W1%2BjP8OCbHF8oYyrcA5OuLzq%2BSUAkdVzbUbua1o3c6zmYKmbfOD58QrbW3yd%2FWtoodZ8PYwJBg4tcYLSd%2F%2BZTw2mFor7v65ar%2Fihjc4Ep8NmO9p5sEOJXn3VSSy1VTjys%2F7iYFse7PnSeNYpC1%2F6GfmRK0%2FPj0g7j1sJp1%2BUBQRAb0OZ%2FKpvayInWnD9e89qlKgj084vwSmACrrnc2K8iBQb1VfIDTfnha12I7OxeeDYdMWSbLAlQbG92LI6E%2FrYAZokHsj8ZZgiGxnlJwcdAA%2BTyTjp4MqUwQ0qko0%2F0I0oaMVxhT0bTqoZLq86xFUvxzKjNw8zxpo6%2BFnLG4DioxR4UHOZc8znPEGQRNeMprJEs8Ymj0qmn%2BTEZLhuPu6iSjGS%2BvrUVxHE8lzqcJn%2FXpO61tJ2mJfOqzdWHtyiqfXR3Ktqxao3Ym4ektPR3fyUQT%2B%2FAllZU0ey1xzu0Wcm8e4dOwKC1S%2B%2Bnyjt2LF4h%2F0Fu1dgsh3UGwe4usY2HA6OjhYPzn3RhMmH9JZMHE%2BF0eL3nfJVErmNjYZg%2BK%2BsG%2BKEOx4Icu4rif%2BJXOtzvVf7Cmm3HiD0njjmxT3U5q7GvPC0HlIfZu9Mn%2FMkXYMs9l7E6rolTbrQ3yXCL1PKR339kzeikB%2BDJci2iMIrGzckGOqUBdbweuDXlBTiT8J6O4xZCMqyDFTM0E6%2FisRKdVQdkMLuFICDtU%2F7kOJiZTq%2FgseCjqGF8SbBZ6GxJPGiM1tsIRMPocjbwvllVmM4bpCA2qjP5CrUHEmU%2BePNLruuKYKUROL53OGeQjcWCbmjE3R7VecYLNwnCsLM5%2FSERXGg0ksPBl4iBTNanqtNMsvrnZ%2BwypB1Tjbez%2BX62vUfwsHxXzeMETAFd&X-Amz-Signature=f2831805700ab9143084bdb24bcba31364210fb83dea9da743938ddbdda7cbfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

