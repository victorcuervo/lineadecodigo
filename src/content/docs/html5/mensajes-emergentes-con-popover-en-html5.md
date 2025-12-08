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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6LWRNWZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T135708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmpdREWnK8r2zJw67SaJ1MghVtePc3D%2FqGnD%2Bn5%2BvGhAiEA5sVBP4Ox3DLT2dmqLCiGVREs0omTfhC4o8%2FR7GzETe0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhWWYwRFG4qykLtcCrcA%2B%2FfZpvXkXpcqNx52CKc2wyGMEMmZiRGg1vYzxYpThpbtRYWObQE7WtyFlREa6CRsk22pNzLZIBzY8IzozpiAI3cgSJzBgpPG4gBeJFcGMMLAgHhwQWAirO6xJWVUSJIU8w%2BbwgVAf1wsbvHFGjvYj%2BNUzK3W5r%2F7Ekh2cqsQyFRxTg5oFI%2FauL2eOjpMjIlZ1VStenUeTaNun%2BvvpQk8f2WX7HZcsrxQ036vqLUDWda4upROhhCh7cRgghVDo%2BQnxNbPb8kr9Gsb%2BPVApvjz6MtPlZA2ek0nHdwuUthf7L0vd8bAow%2BIxdYmtPnpFkQXgIvAoKqFS%2BST6OzPFUsYdpdYdlZrm7FDyvvk4%2BDp4sV0GQjV4cqqP9cTqU9ZsYuNpe5lBn06lAnqoI%2FrsEoANm%2F6X2laFvbHRD5nAgK4MLKs0uRXJWNyrntkSPidNiDVckRpNsVKZkZJt9geAjANylgv9MmFd%2F%2BTMfK1T2F%2FAywaiVZajO2QXA5W3TVUuL%2Fcp0EnymZdj6ikEFkWOJjp8ug4tzvqzq5QPklnAP%2FkS3zBYlSS%2FVtbSD9tndgakQoM3OwVikIT%2BFxzxrUCH8NC5afhuy7N5AccnsQ77vHO4oZevXvXfM3TxAGPpxJML2Q28kGOqUBqJ8FJgaUGpN0vV6HhEdYDgbQ1vhE%2BD6n6V5ovkGWIyhzBTE2JA3N5JGhJAGRnNP5f3dnqjQmVUEtbswjFRq7bj%2Fs4Xov4cQ3f1de32S8ZucFjzOCEIQoUrw51i7MdRqUkAhiSHGNJp9AZCrKtbTjQjau2%2BDfJXnFLNYyaFRGsgEW6LoWrDiddMsJz3ueF37qnbd9VXd2PCoFcD6axaSiT9h2E0qi&X-Amz-Signature=d2404d1806d2d600c09b4ce77031d1a2e5f09d4de3679eddacc379e11e54ba4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIVED2XF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T135708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSLFvo9Ivj3ckoWVHhDYM%2FZdem5SUxL7r%2FMO1Hzu2t0AiARD3%2BqX%2B%2Bk0MgHP1nUcrreD9z5AQ6kBHGpqAbzh2a1iSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3NShZuERYDHp%2BXGJKtwDC0Np8DX0BW6YOBeeaH5b3r6Q3lLgITEckc3cScysZV8QFenlSkBUwyDohOEmU5R%2FosH3TzoRH2EiR4Hju%2F0QtwiBApYzTpItzUlm6behti37iYc6Rs%2BBj1chHLeOZ5SQjjuDZkgsNXevq%2F%2FZtvXMzmoaVWxp8tZAQkHA3S6JRvqP6esCCgTgozqeybDf9%2FE%2FG1bUPQdC1ijd7bAvuUC4mID0ObMI1lWybzrPR0XsO6vdva%2BUCWa%2BsF80BA2Jf5zQ0t7XOfvGeXrQb8ITXtfTniVJvKGk%2F3wusp9F8Pj5Q41KVPtbNsaCEYktmaf9CaYCnzLfUJRoWdzMF%2BvRSjgzNzH63%2B3q8qVTGppF9pkQ6ag5qjQyKBEaKmJUF0oIS8MHE8m7lkcpuIcbdNDRtAggsW%2FvCmLvBAnqVxz3F6cdiXZgINFvyiNdxV0OFjlgO91%2FXZi7ky3nLjlmX4GCXnAD7XmUyHWImEG98RxJ1n4Cn2cCBf67EXtC6d33rpMz1wrK6wLhNpunu3R8OgMyJLs%2BsqBL9FTahJQBclhUCI%2F%2FNE1k8OKHv5giHdaOlxMCnpxTXyPpnY2oFuQQO13tItjWOCKzuZEBlmENW9kOnqmE6wksqYYWp20n36HHoakwr5DbyQY6pgHdR0fbopcZfBwG0eg1L8rZO0%2FUGJVkw8IdmBev2Y6FGZJW71C0KpI8mbkdMj%2BrV%2B17IduQqeNMJDn5R9%2Bc8Ui6V8%2BVZ7GLWbDUoa4%2BtoRe7gy9Tm%2B47Wi%2F9HVUY%2BxiaoSBLbM%2FNMSuBRRtDiEHPaJAG8bJHQB7ZrDL1nISwyY4pg9Ntj4GqbIL5aT0CwEVCg0vJV%2B3jLzaDbNVlconzOspaOU1ldRF&X-Amz-Signature=e14b1878fa279b72739d57b060d14c26ccb848f9d5e72d9c83b0939f11658b44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

