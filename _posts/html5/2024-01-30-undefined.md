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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TH6WRNN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T113322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIFkSbULXGFUwSzIai4rnDG3faF92NOhPXXxnrdbNx2T6AiAhmxWpdciVIbvozMLMFg5pauX1noH%2Fxf8p0%2BxYy7E9Nir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM6TklKk2IvRZg4%2Fv%2FKtwDyjenLA7e1dEI1rmhFf6xHyrovNCcEvPx59zF0eErRVE4MrKG9uRqCLDUCYmHul%2BUqblH9sVjvsmr3GHekSaBZR2xVTXNA4muNQJ4GvZZjBcVqt%2B0RdYr3JGpS0W2cG3hsv%2Fje4amS1OhwZXtqVpcm9gXL61DA%2F%2BeAWg9sCKQKVCrlZdFZeNX1459cA1I9AMKREg7GBmY5AXztXwgLe9PmLHWBLl5gGrwBjLXxSbVFStQOY1a1XMVGEVDJXWM7QioGH%2FCFHpUo%2BUvH3%2B8ecC974VZ%2BMhPnXqbCUkFr8HqUjpdqdyIhLwGgpZ09TRoG%2FRIS45BH3QDxIXp%2BgI02JmAGgMvHUw5IYyP8%2BCyfSpl2zuhXxO4zO3x98RZHxTEafwjz0Tj2DfLjAxm8GtUwVfcKY35KAnE8iyEFjsgpJik3%2B%2BtswBl6tnrJU6kPaMVB5o42zH0FLSy8PXRZYzKv6cYotgeVQi4ylJ0yaan2%2BrCFmT4YsTKSQK5QorNUvFh%2BuNHB6kscbJ9tdZVAx2oObB1aaLCzj2YyHMD%2Bpa%2FodVuGRx8tDXgIIi79PJYj4kYrdMf5poQ1AznmkzllaRS641pK%2BfjmrX9oslvvzLikeUBLsj2s%2BTKkylfSY%2F87%2FYw967AyQY6pgGPa73gPIQFBiOOh6dB3wZ3F8kAzsQxtAhE5rqXuQqRz9v2b9KPpvL1qsrUVbxAL88B%2B9dCgM%2BS7zfmSMrMLkGYHXSj6ChQfxDCxEbXdjdCOFwxG%2B824WCgZIJTeP96Mbjf2qTvRM5ic7L%2FVyI%2Bid%2F1mjOe1h1DA%2BZ8wk8aMegJL0NfTSEYjU46chr0fnaFCcN0XeCIZigz%2BitSfPQv%2BrADVxB8aK14&X-Amz-Signature=afaceb75e5a9f6f5021d48610ae8b9ba91018cb0838c65f09631ee86eb42a3bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSF6BM6E%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T113318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDBIqotbvAqz%2FSEGCU5shPUjaVOnnnPO7t0eaRfbKT8KAIhAJVdHlwf4pgqy1S%2FauYXv3dGr3atNbtPPQ2UdkqqqMfdKv8DCCwQABoMNjM3NDIzMTgzODA1IgxkSE5MNITX41WH9HIq3AM2KRdvj8adLVwtOIEE2cDd00v1bhrk4cGBFPgI2MfhkxcwzMRxHDjqojr%2Bc7YsnB7GPNKZnkG1lyl8cBhNfMSyyDhnOmpKlh8mXhDn0gt2d77gUxiaUg0eeFC55pdtMTWFn6HE%2BBXQ61IAuTmdmgdWOny2MMT9tNSe5u%2B%2BOsdMlrUeseyxkTpIELMNQMVM2Db6ubMLP%2B8LSOiflMKOcN97Uzsp9tB1A0pYQyxSjoT3x02eZJtSMmCSIaNnf7ueYKiUSpYhJi0NDngs%2FayJ45mDdsP1VX%2FHwsrEyk4sxDpBm8oQqZkx%2FMrQydXriuLnFsWrHtvpREPl%2B5K9GuoFTLN96UVbmgPikIv%2FR8hVZmr8Ju0NGBVAc9TkmyNawfQjJQQU9xfVcpaxTL3WC0ai%2FkU55jT%2BIvW0ydVK0ZVRJwwD4bFzSNOUaZUkbIOy4%2FCfCkujiuRXnOJaTq1qMsL%2Fry99SMKuhSjPJNTcsaLi6CqpM1%2B6B%2FRboEfARjn7L8vtSHAL1OFCN%2FLXYzCCLwvPgH33hRRyOkM3Ik%2F4tZIs4fVMI6pTEFXKXgsohp0XW8nxYq7smBzloK4hwU5Isydv0PTx%2Ffue4PK%2FndjYw%2FWocj8dxgyP9hMNveNkrbexdjDursDJBjqkATZk2k7x8GtMs9weS%2BvLObMxQ8CtZR5gbvDC8h4MkPYzQvTMB43pi9WNmuwpgQBHKSM9LyGGgt2z9u3Wb9%2B3SfjFDFD793918nPN%2BZ7Rh8ZehoGP41U2%2FHAxr0wVUy%2FVUVYqwrGpsgcGHO9ozZds0KDsQJnIEwlHsD0gUNQ2AFLnLyHEuphElAX4%2BWFm6esGybQBI5lBmXsfFAGlLXz9EBsMwi70&X-Amz-Signature=ebcaa4f25c18859546b22f6b1905d13713cf7a7aaeba966f447439c45d9378a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

