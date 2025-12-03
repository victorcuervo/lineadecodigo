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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H6BQO3X%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCpwlFAIncSgp030B4BQgzN%2Ff%2BpiDjjPLzdcV%2Fe8MyoIgIhAIf2Kb3w0BqXU%2F%2BIW9eH9rZWQnyeZt%2B%2F8p5KNq5MxqkeKv8DCDkQABoMNjM3NDIzMTgzODA1IgxkRDtZ3ZZwrphT6uUq3AO0iKoo5%2FHVWl8FP0FDvHotPo3T7cxHT9sMoHj1ZuejndH%2BSej6FURK5GEopYt7ri6qyrIKpsCzl%2FfwHOzPNonSTUzsuZWm9mgHxT5wC6gvgwzRBOtRc%2Fq6OPlbTvMfzhvivat6ghryMmGHqCObDuz0cmaCR9nFnkA39huFQa%2BrFuV%2BdfGxVDKOt%2BA4ujABuMdNjsFZJTOv1ykG7g%2FgykP6BJlBzWh%2BB3kqTtqbZrTNruXnpCOBii24P%2FwrFyIm6omNn6qZOxKJRvjqTR2dQIH%2F05X3%2Fh5iLqMz7B5fp8OnYYznG8fEpOG%2Fu0BgA%2FiV4%2FuyA40c5rf%2BSG3OneDViQFMPSAeCNi8e8WU83QcdLeKiPslfaj5frcGdFIJdrAk3rSCo14czBmRIr1Rhr00AmsIXB0j0mEEWzY7hoOTSDWyLQetU0ZZNMjfF5KAaB32Uw5gwzw8dhkuyTrcHJfGWxv0OYucQ1FR5D4lIOj3WF1qTxGqFYIIOSIkiZfTTNKwpY0k5ojExEbb%2FI%2FjMR3I%2Bxm%2FPSHtFuQg3hnm7Oql%2BWvD1TlF%2FmXIQm7%2FG6Vp5SGxbfpppaGPpyo%2FQGv%2FEewrHyIjQRCvSHT833nJn2K0xQeQsFlScmc95Zr9eL1p6TCdlcPJBjqkAQ2MwxYfN3KPwJKq2nrKE8clPnzPekEyOm2tkO6HgserPN31XDLeA758YNjcxH5XfWxBMSQhyuFQZ4SOBxvXTeuxnceiHZHRNQsEJSJ4AgVpdY%2BhhsyjixgWyATMY%2FY6%2F6tPjNmLuho1aWmJwQ6atGHPoYUPnpJ8inxaMIVuMoYz01Nt1t9AoiJ8mhBHVS9pcMDMAS%2FCLwyIY2p%2F84J1YNLqdOVU&X-Amz-Signature=d6ba01da4f30210d3013878d8146f2940c5ea31bc0b78e8bfd0c6632e3d7ec13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTMJXAHY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIEyUI%2BnxMNZ%2Fwjbi2awlgykCUW0BLEY8Ghg79E5yNk8EAiAQFGxftq0migWFuUlD80UwY2ZfZZI%2FJrGi2LV%2BRe1A%2Bir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM7OjgiOM%2By4AV5cg2KtwDfHERbDAILC%2BiX9hOISfww4ddkH%2BYceuzpq4Ln7lKROZ8vxzu4MvUVG%2FulOaJ4t%2B4PgJZoTXtqar9ismb6QuuIKCVeTOSINHWGxYoC655QWmpjeUVYM%2FXksgbG%2B457qh9dQtjWviv%2FSx79D%2FGbJvXq2WGdbDJ8KdMD9mVMxeU6TLSxOrlWKm6Bj9gmJV1UnSJxG%2BAHzTWQE%2FKt73s8FlC%2B%2BlfRe%2F59VPpcsmFyQIxOehh0dBb5UpZ6f0kpYLVoO1SXeNXx4RpYDEjRvY9Re0W%2BE3jiHCBQyDI%2BvecCNrcEhOBDiXosr%2FYaBeXwGYNl%2BdoywBjYaI2mGx7nywUMvv%2FakMDFjvTB5z9tpQK1sEO%2Bwu7%2BpOe2PtT4lF%2BoUqURTSpdbUQha1pb7CGXJW292oFLqoQS4d%2FmIgOmshpG61jVzkHPUZLaLmRLkBAA1JdXxXuy1n3c%2BbkvtHOjwePjLzqVwIerYytlwPGAECKZSmgLneGNj3V6UhYGWLUrTbhGDtsyLD58%2FF4aja9jkkbtQjU4f0r7ZoX%2FC9SzcekGle6YGM3%2BtK5cO%2BKJqZ3cYehRRVHImTTFZFEf19HedSf%2BgpLxRElamI7veUhV%2B5CYQFhIY9hjrdzam1c9uneaLgw7pTDyQY6pgEG0gff1oLgpfbVhmI6bRGJwy2gjxXSQftWnWhiGAF09E1Q88yZd4D14um5XMu0ssw5xp%2BxP8rIqozEfHvmsvLUH6yOz4J7ulhIDKOb6ydZxJrsdkDEuPDieCBd5sAYC1wLfrisDI8nzCicHdfnqUa%2FSn3YsdNq9o4sZEB0wvQVrJ5OaTJJDggtGIHDUYxR6E99qOUj4WDsuc2orFdmlK4BY5sj5j4Q&X-Amz-Signature=5e2b684cb7e3b39fb5bf75fb98b50e56927eb08f6a234a713e90deac6c381263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

