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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVGJHC35%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCPNL7j2yoFIpojz29k2MUk4dkN%2BnsgtykJ5E1hxHYqhAIhANJDzIJAAnxMZbnc7dFGT%2FSJnn4RoL1J%2F%2Fc6KJYHM%2F0ZKv8DCEQQABoMNjM3NDIzMTgzODA1Igzh8PXuhJKoOcKZe3cq3AP7OXfZVjmFiUFRWggI%2Bj9MevBdfmvygygb98DNG2IvMWrS2AmzMpBcni7sB%2B0ijP32XUvk1x9eygwvkRv%2B4DbmfZsYoulK1OUKUdOo%2BBL1yhlCeos042vYAesu1Bbw5Fn6bbFm%2FA3%2BKEOF6D9B0u%2Bm2VvqW%2FPlmeVRpDzY1hijC1DxqIAdyMfqrnJgB%2F1MDWmm5OAD0%2BXYDzyZRUxUnjMltoIFd76%2F0vCvlMQ0VGUenpFMoCsnTk3R88PZIC44ecK0SCxfjUnx8wfdJ7p3FBCXWdzmvxFmIbVK07ueQmqqjrD2BWTntkdflJB%2Bc7NedcpHmNABjD7B3YXfGnsWAJV24cH%2BeR0Cu4sHeAurkAamWIXzaqTvWTRZNAD%2F7v3s1a3XJH%2F%2B%2FDmZFc%2B2sXxC4K3GBcG3EQOndB78DJm6LMs7Pf3ioKbIpeyc9xQeJ%2BGavYas0VMfiJZex4Hrx4c3OcCat%2FKSoevlJ8HvkQw28nbp2ngrjC%2BCDr4OmlCgiRaC3im3Lwd4RzCpoaJ%2B0vFOB9txnirFSFaqqka9FqemsZpuVel59IGs%2FjJm6b1lJOAAdytwW8owoJhGlOMQHY8FDs%2BjdOF2j0BV7XTiiX10y%2Ft2Txnf2Ldv9I34fJPRSzCEysXJBjqkAdy2Ddo%2Fi6fStZLxfuw23nbpdGXvxiz2Bj22Co5yuuCfg3mQHHEvmhc4D4J7tfFmX%2Fz1oqhUsVzw9Hdl8eNOWci8Gp3UnfzkVnQRAk5FmOA02stXlANrLhrmchgcnzMlV5A5KivzpcZJ9Rozr%2B34%2FpzP7ET08sqoKt%2BoevLixCU9PvvE3Z4SsFORPHYirt9oHPmXi%2FQwvkBMMYxn4fo0U46r6Gl%2F&X-Amz-Signature=64cdd2e872d3ecd7e5b4c4e3a44c55b3ced80e6e11e7836109d5eb9b3cdc3dcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6NRAB3P%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICiuPqjiwx1d%2BhxgWqHLVlmHiFphOeNPAZ9qqK0neLBOAiEAt%2F2fQH%2FAUBFg7FLH9wfEdpufOoxHt1teofF%2Fa6kphy4q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLK8rNbMtEJm%2B2wNXyrcAzKpT7cyOi98Tx1QnIazCAXe2xLflK8O8VPJhLcrmzanfDjf8ctwQBDUOxtvjAK%2FlMvuKFabFfBISf6azeRMS8MET7%2BeeH08Sp%2B7Slho1NDk8bst27F3jWQjJRUmpOGUxrte6p4ubQH3uTfHoMvmodtLcLKRk8JO5IONy0p%2BnoPaLyFJUeDk%2FRto5rypazd%2B8i9J1QRCJP7wHbC6cm0d8NJINmC1XhhGR8RHdyxucOUUE4TTkofsKGVi3Lj0yY%2F0EAP9nJb%2BrV50YReu3SwD7hQMLTQ8ZCyebfPN%2FsfDHU77ThpvWTwrKHN%2B67UUtKTP1j1NKH38PAhrDkFiWawzWsttQ02SqZmuPJWKlqzdivxto50Ayzex%2F%2FrayUHvvRn5PaZnzP9RKU6cqW75chjV0AAdBUNGZY4%2F2gPLi%2BBoHh1LwUcpRb7Dl8xagirGy56j9qzRWVIWBYBfZei1nNJe%2FyCfuaFQTbAkex63Ny3xsbp0TO9q8ajzQ9%2BiLhl%2FaFljim4x72NPdc8QDG%2FhAI%2Fagb%2BECIxdVO3dEF%2Fn7d1%2Fett4NeYF4NbxzlhrhKtl3ntSv1u7xg%2FJygcSA8BTeEYbljjdT%2FFafBiAawaGosGeUy1wRGTZqUssZTWyF%2FnZMMXJxckGOqUB9bKsB9uBx0gBdpC7XdSE70WcCpdgEBV%2BzWq5XKcxbQ9aCoZNxAOfOb1LNWZTpGMSzUilSOuiMezH74SwaGBu%2FkVTNo%2FBriv51ADLqy6HMV3rPYLQZ3i7BHY2d05W4fo0418YfE3r00DAekt7dEN%2B3bPszMqdiOGmRMeybXpLxZF04zAHkYr8u%2F2hnWIS7SnvSSjVtvswZRgud6bSV6nCGe%2FNFo8X&X-Amz-Signature=a34d109e194ce28483b0ecac7e5fb4d8f80277c65923aa187bf4a93b51063fb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

