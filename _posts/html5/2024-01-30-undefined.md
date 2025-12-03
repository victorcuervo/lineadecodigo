---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y62BMX77%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T110645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIAcKZ3mf%2BMNvn45Pbb0QfBUbvu8pIVHFLmGwT8BOAc9DAiEAwQLPSxYx2AS5XKusn1bwH%2FdbuXIM6lvzr7KFkxJxskUq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDJKbEWuShaJpgSKkqSrcAydrNTu63eljLdRbtsoeB14uy3Wjy5x0%2FuPZ1iXObOyH2qmV8wIx0dkAoqSuHJfMxilwagq6Rb%2BsNqknT4tR4xoZdMAxyZHe1oJVvL9Sct58xo%2B4pj0quM9OKBUd4oBNASRrRyq5hampS3RzrcEYdn9IW%2FtqIpKBQpPkHRF9zT4CMQonGwFfaFNKITyPBpi8p3VZCIw7uBDreb%2BiorO%2F1XArkkWowR5mo5Cx3zL98xvbamxpwaQGZC92yItUL%2BaFGu4sMsu7G3eClvZF5Aq8c4yBkGVW4ztexsGxKKBvXdiXZ1U%2FwBvlU8kKd6btNbSrGIbH20%2FHgmYzKpbzKVflnrXZazceMPgTUMPEf1cXZmXKsPFu630JpxqxSgPuNd2hW3fhbsJSOGhHmCInOyqRrwWaqpsBLb5NsLk%2Fkssk6dtEc6e2VkOWUpQGjwzt%2FX%2BU3Y9HoJD4JZUv%2FLWQswnuouVlzj%2BxMz6EvXzG4sa%2FoCDNBxLCLnSIsjE4PjqEhB1ISiBEU4QLpiRnoXgGVOQGcNZ2hVkRHZ7LWizDMR9ZzstSbuKzGRnOzVVVt%2F6BDWYNlZmPCbfJmsFOP913kEgahG9XJk0smJomUwOsj9Esk1BKC2%2B8IlOI7d0agQhGMICuwMkGOqUBzDMND5zP2l77CkGwhTNIfTku5uC7qODzozqNKrppZQZiOsu2r8SIyfJO2sqPeY04dy1LHrWMSEKlzu%2FwX809NZ9MsqlW2rfiIEVFZg5d2xIu%2FIndcOZF9MXBswSTJ0fsrYUC7yD4Cjm%2FK718e7hQVcR8wmo2Y%2BM8zu6pGoc%2B9g0K8tBLgxMVcmEtyc0kQ80gO3o9tImFAMDtH0fVR4DECJrNcgX5&X-Amz-Signature=14962366956a8b9b99b681d2f212aa4cf84cb3676f0d71a22130f8d00c8492ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUPY3DP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T110645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDn4%2F33KInYkH%2FFhZaJnRzCNLjgAdO3HKW9fJTbkZb6ZQIgCfz0nhaOwR2md6%2Fb1QGIKcf%2BPxN0QfyK3dYFRnq9oeEq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDEPRLMo2NiDCMwqEWCrcAzni%2BDqs7mqTrcOvag%2BtI%2FNKtNI0eAp5%2F%2FBac8R1skj667O51mequelMa2TtEAG5d3WNmLQZYqCni3uk4SWlXIpc0tFOgQoShd3PV3fCBNLXvnZOeaElducqLVLIN6fvVq2OscOZz67bVV%2BJ%2FSXgr4HkIACnbZdIMINOpK6KiwuSV6yTO7%2BZTAKieht6N776fusNGaf7Pyu1Ip66%2BvAX4eXy8m8BSrFI96Zr%2F29pSz4jQNjUgoac4uU156KR3bfthFRI%2Bub%2F0rAiOEkSipGCnZb0yC65ycbUfXP1%2BNpHWe%2F2LvMWa%2BToVfzu%2FuJ43vC4ca9bs7EKnH0dQfV1fpJJ3kZK98AxkymGMa5n4Ut82VdH157Q28eJn0eO0IZyKCYdeuWBYZtmX5jx3vGzkY3Y9duCQ%2F0LnWG9CWDbGpTYbxB1M497O0%2BDaOqUylk0sTYZgkTmL4PBRFK4CUbVP7NJbLcpUXjvnVWZgWH9M3UkYhcWDs%2F%2Bv3q5ka8dNHGY%2BS%2F4QC2go9zxun9t5Z%2FHPIc0qTb6xQcdt8IJpSCp4s0soMuYMwZmwMnq158%2BZ%2FAlWWSA8NPZpamAhRKo%2BhgCzGW9XC6vEmWZmDer1uXtirifMCPh1BjsjMGa6YqettvqMLSuwMkGOqUBpMX1ReM3TDWTY0RJr40qEC4HJHGPCeGoIiDxeI%2FkhuB3Cbqzck3F0sQ03sSiYGD6iGlU8aNMn4JzJcl87Eh13LQw8CCnf4hoYDtFFjtPu6bTf4Px3eNb5%2BN75eHNpjBmc1dwDCbIjhAxkSOwX3MOj6r1wu14qXf8rbhDQpIeV6n%2BWYhe2WHvNUT2z2aBrXndcERegnQl8Uxa%2FJbEHbHkTS9IOweN&X-Amz-Signature=97d9323630060efc8640d8f9c1258ff70eb695440fed83e645bd60c366048bdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

