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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664X5SVDP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUpI0nCJkBVIqVcjVYidk%2BM9Ue7jm6pqWAbOdOuYFdjAiAUcEBm4P7zkow69FAn9tGYsxkZBKI7iNq2oJIrZLmJSSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMOr2kDIAh38btmQeLKtwDw3DFanI3sdjoFdm%2FEApKA1J2VZjZv1imyg4R%2BfsOf29hDtrFl5lPEQcoPptbrppOnvunYlEaQTBs4FLEbZput3ebLjSUJjMxCgDHqF20zzCzTNshT21%2BGzIexZL%2F5opW1C4tB44TPJ9icGHkZ7ovt9osKPtDsyfJwGHaacmX8IZ0AP2fK6vC5Ko0RCNmDOoA9hsMuoj6sHXBie%2B195YpY1wLzXvYymTg1krVgttHPRTB3ga9mbLEdXSgo%2FkPuRV%2FwBpXGZQKhlGR84RbS%2BkXi4cfrOwDZMuor3EzqOm7yLSo3OBNA6e7Xpg%2FUH26pOsmZcMr3S51S7emr4SLT0tfCxcAtdJHs3W6bHoPWTc3%2Fbi0MpytpTo3LpiP00lqcS%2F%2FVHVseYSta3nKk56vdgC7rBTCaWX7uVf%2FzotHHyDCEEJv1gvZqgcdq%2FRGOlj5t6IOeuzzHuKg62iWNB%2BG0izzk0du5R1Z2HO%2BV7sG2Ok%2Ft8v0Anu2N1tUDuLjX%2BSKxW09wKrTgWz%2FyZvJxkvd6kxIFBX3vC3zDpRSVobNC5RLD8pXF6rGZTwlG4AL8ljcaVMKo2%2BrztiZhayuStOA%2Bfvww9avtETjEXCZ1bxqgkv8O%2B%2B1QmG%2BBa2%2BM3SmS0Ew3MPOyQY6pgETTysBmbaXeauJhJ7wywSSF%2FRt%2FwFTkHaqcGSl53FxkR0FNGSqPWGM3dC8oY0YJ6o7E051zCcT0mJfANIARLoh%2FrWSfneR80Z8cy9K%2BQWRXHMFttq1ju6S6f3xBvV1D7kiG2Efp4VpUsLhKFiUrS9WNz8hmS1dw%2FXu%2BdH7A%2Bc303E4X4HeWEdUp0intFlYz%2FSdX5CbXvF4URrRXTssYR1onwxrCEMg&X-Amz-Signature=e32c8fcec9f24d7609c49b991f6fe270dad5d6f6d6d28c2309de7ceb03b1c53a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NL7RQ2Y%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWh0nJPBXCCmOQStpr5%2FjjccgHxUogDOEhmN1kYJWQuAiEAw6Ibka7JX7CyRYEU5YVQSZO9Ryv2WmNwOBbNEjemiisq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDFyZxo2smrC%2BAcSdjSrcA8fsnboFrGmVQS9KrK4rTO5Z06cIgFhAUJVlPfoZ%2BwvwJmh8qLpFEtjzJNCa66jui%2B4VYWaaPaWVfejGuRs8z2LRMlHMbc7CguI6on7%2F6kgjNKE2dUF%2BjXX8vAa0S%2B0hjo5g8AGcr66gatgMo56wR4TqD%2FQfo6LcETo0a%2FW1ffbzI7815%2FEJoU9s2uZgj2UIu9JHcBW7C6Jkt6uYIaS5FtxpmjuwIjdizaZM%2F4Hyw6RPW79pqnhYOWFIMayLTkC3CAGEY1K9uo2pGRTb9nI8QNCWI1MRH9Qqz8lBu4aU2%2FOdRe3NPJ4sjArVfbz8DTzbKqkg2DNx8iAMR1cIBlV0EygfNPDS9qXeW%2FuSL0%2Bo6edDuGEAVumVBNJuQnp8IEOitrxilMk6TXaENcYSIbd%2BBE7VRAd8%2FiVzvbQCEuUT6LeIJJFzRLTjslRZEWgArlRBm1GQNn9lYENl2caO4umPxsProGDjb2Lj5KGRPyaVt68%2FMzbzACZLXF%2BGITgbMEd9WnMnhQqwGkYKYxhzJzzz6icsvdOG4kZGulY1S7MlcIGOCS3bkTyFXC31pF9PI%2BLgQAApGVAEd6LfmC1yLmeEeVZOegdV7LZChMaKfWfObG3NY6oMUi2jz3tRc6K3MN7DzskGOqUBjlmB2a%2FHjYpOrZfQoewbGNd3CpNHhy%2BodG8ptJQY1i98XkWm8PHuKafZ7mhWSrC%2F56ZVDMCFEPvoPzaX%2FiD7ylUCeXXxBCBsNDIO7z5gkwETRG2WfE8GA2hM78G81DnTfdMngNwW5oVRqj1CsWliza9swxPVHbm7irOynFZCgVBLXe5ZN3GkR5uqljqgC5dEW1egkbU4QlGJ9k5lw7z5SvWQUcGc&X-Amz-Signature=9cb169fa19283b75e21d38c88881e9ea247994fb21091942712db3bfae716faa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

