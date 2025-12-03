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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6QBMYX7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICx3b2m025qRh%2BQLiFSKAKl44EZO0sGj7XgINvWmISQqAiBW4sFHKanOX4Ih8j7sMK3qbjwgCnssefHqxVrdJu5sKyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMsA4%2FQpcdnUX%2BRWcMKtwDQJvUg%2BZMoDcp%2FprGJcq%2FCDfMEQCZdVubw%2FPfplG4vJARdP8%2FsJOd3b3oIacnJqFGMVcYUxRlivjLLGi%2BCDFI71c0KEg3JIfgF26wALlkRG6%2Bv0F%2FA%2BqqbeU6NyvDURlNCFUfynKVf4oDhGMpOHF%2BNu0daP0m1ou3jtJyCZbT6RZ2SYaozcDI8z9StJek60SB3UYO0PJMeDeGQLR7XCNQewsg6Zk7MzKuEBHRTivvRsC%2Fe0NGEmAtYUxb5DmcZoxYdGXhaMWe4uVLiM%2BcOw9iZfbxplEGNXgbuIkklynebiLlF2vfBbEESfuCo%2BIuGT68pLunmVqcEeUC5%2Fi1ijdx%2BJnBx9ODPLpwujmo%2Fb9RTIiucPlUaAvP7qWfNwinRhapwKEvMEVi%2B5zcEQMOuMKJRoRjAwEAOK6W1YCVYw1e84rARCjPRpviOERlyUoYisQ3gFL8n5p2RpJCVzs39NvJ4QbNNxNDgXbaSAuDJ6wXv8%2FyIOSZwBH3%2BVQ58lUrRKTmfdxvy5XXh2tKzIoj8Jz5wpy5CovF5hywcUVonTJeE1DYAclZyCQB%2BZk3UhQzDohuGLYeYHY%2F8PYuauYF%2Bpn%2B4mUTmstsNYyeZc2OVAuKB7xbWCqDRut0MDMq2EgwgPjCyQY6pgFm2F%2FT4pZ3X4SNjyL4%2BBb3LW49UtYKqieo%2FNlbg%2FoSROvvgx0G2KnWsKn%2FyVRCwzvPJHPuIwF9rntorr%2FHU7v5AkqFTkX24zLjwPlRbKNgx3UFOe7cWKNibkEO5XND8pnmsnz0yznhYU%2FtWsfnDdy4suaXm3C31974veeIypGXL5WyT4Tfwa3kiTZjNSLT%2Fr5wOGRW2e%2BgvdoeRG4DKJDjrNISb7ym&X-Amz-Signature=b4f0e01317334db2b974728ca493456f89736007de6bf43b210c9fd656189bfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657ZQWMIJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQC84nurn0Csf3C8znZB%2Fh43asn%2F95SXy6GS9HeQeEO5zQIhAJrr5RL9uxiULNdRerTXFlybjWS9jEw2ZXGKwrPvIaEfKv8DCDgQABoMNjM3NDIzMTgzODA1Igy%2BXF1%2BUTLDwjaou9Uq3AMDFIk4NVrx5PDtM8owiwPjzg57eOHg6KM%2B7at4zi5qyAibp%2BQXeZA7qkdUfhElIV%2Brym4a1tUB5kcs%2B1cwRsl3V4lS%2FNVVq9GwDbmncy0VDhA6K0hK1t%2Fc%2FFkhKpRiJnAsJcmuHOanvuDCVeyeJ8%2BamfwRdle4YKrGg9pZ6CdY6lvFOFwJQO3BKThgQdG%2BuKZMSPGzb3s0RHg%2FgTQTGwqF7zmx%2BbDeyjduQQhdJLyFD2AWuOCKw3LxT1p6F3HUmB0tlZzPvHf%2BXm7dox2KFnaVlauw9LvlWGGWGPRYiJA9J%2BgMbtleOYk%2BqjAiCjltBH4IfMyhLTKIjeZy%2FoQd8NrI%2F02kWOQH24NaU9TXq7yGnoszxdKUBCb3S%2BJQi4%2FfXfekapFoDkaLmswor8qSFo9tKJDzMy2JNiXeVSQ2ldGpZIp%2F%2BoJEnb1YevuhxgCncXjvH3tGveJ9rQhuWdDOpmahslJ2%2FjSXVDd90M4a%2FcH7Wd6fya7JwFt1mhaDYCSWrsCAYgrS0rJRo6DK%2B8i4ZEbixIIdbxB8yCDpEjDIo0keqZCNwheKJyFeSjuzQ7TDLiaAA4RjRi7IzfX0FIQAv5GrR1tZNEp%2B4y%2FHls7tpc9%2FrRHI%2BhKJpO6%2B76F2wDDg%2BMLJBjqkAXzSWeUe2j1EJpiEUa6iuasoynwsRzfrAEEzZrsrcVwmzu4pTLpfceGxqP11qpb26w8APxN13PeK9Wu7uSAzjLBmDJq87gma9yx3Q3%2FBISdqoaaN5ym1b96ndEt6p3lEXTxGiKr2kH5%2BhpR9Z7dUnIIX7AvLPe6xt9%2FbFMZskr7sftNZFUhnMOekgTuuP3Z5fWAXzsZgZ8FKqjhiV4Na4Ti%2FDQEK&X-Amz-Signature=c17ea6dbb0d5511b19ac29db0906b973b70274c3eef63ff9bcf35637d3b97679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

