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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVF6IUPH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T085226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF608sNIa8hU7gwFpN7iT6DRJfvJX5ssHfO%2BfxnXCuIKAiB5Nbyq5MpJROs8uNsAYh3izJ1KVCVEyG7vrs5m6LRlJyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCh%2FO56Bp321%2Bp%2F8QKtwDpDw0epBP6tjlRFJsW%2BEAcFolWDtn6LiMX74qILlKOSk%2B%2FSZ%2FAvfWectZkUTa2gJaspDJqVWCZUxFbtWOG9nFAZtPabkXmRe6NcwDJcThDRPa2Hq%2FBPXdjPyyY866rApKZ4dQDxzWRCPY%2FsMs%2BBDcgBJJdwqcp%2BGOsrP8Zzcc8RhMjIY4B5Q4G%2F13E%2Fn7598n5seH2INuHLUeoPh2xqaqfseKCjnp%2BSxAHYILdmb6o8XArOwB5FjOdjQQVX3gChsAYL9OLPmvpZoOb0fIYwi6sKcX%2F5mIYZKGj0p9nzV4maBuXmMZkazmmd2tD%2FCvFEZ2%2Bktc6615abB8Yhe68BpIcFyExc8HqCexNagsY8htF5tzGI%2BVNha3vLfpgPMpm%2FMU5ap%2BHDQrngAe%2B%2FI%2BGkN6Xai0Oh9Fj7VKUVKr35DSKKnlCcgoPNBJuH%2BSsgn4aGx9qsIdLbHfOqw%2BrlOTR6%2BnrMkbYYKaCYqyFTU7ukr%2F56173VG2TWBVA1Vo8M9%2BDrX500RbgjG2VmJtfhKVJO8UcECdm9Lrvn%2FaxlNkaITQDBveuhrch8DyT1djyn%2FWY5jtHld5GBcJ02PgblcTDSLrziMPJdnP33XckIHVNErV186gwOsD%2F740uIKeMWgwlMTfyQY6pgFjcsbslPIAilt0BYHlvh9rTyFpvbul0ATAXxoxyXc7khoVKh7aU9C5w7qzkYy4qC21HtMY90LQ08x%2BFs9Qkibzflnrtc7qE7PubVhcAfaDAbA0%2BohrkcNeiX6OiSsQ0oyjPHevsPlN7WiLEIiqnDFXjU%2BRj3xqDYpKoteA5c9pUZk8lCWKEj73v82OoxrAM63A%2FUnMXbLDXnrQaCv6gJJjfAATonZa&X-Amz-Signature=e52ff9570ec52d214647e8d56a83fadf15a0044ab607391eff218397ee06a778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNIVMZCD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T085226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZq4hrMI9cR7fgJTTUizk2bnWCsjsf7zx5C7y%2F%2FLhUHAiEAnRxiDXPTUbp9P3m0Co2ZsUozlDrE%2FnbPGeNss%2Ftr6okqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNBzAJMCbyrtREphCrcA0dZJsj8depqQnOiuHkFtWBxH9h0FI8LjzZxgwdfVfX4H%2BUUEiytjkeI%2BW1lLBr7xnRnrdeQIqvuSbGarbXw6Kh92YsblQFqi2F2G%2FZg55wGkU8NN2ODjpfp%2BsvtPvPVondj1Q5yBgP4y0%2FrfNGUTMFb3vBjOU9r%2FKuK6RRyK8eaPDqzLNQ%2BvvaPUuFAdnTamvptGwhWkvvn6lPn%2B26s7lF5KZ%2Bt%2B3692BEwJXjtn78d1fpsE8UkvpRJc6eU%2BE46cZ5egaKI7ohKLyDgWBB%2BjuJEHZMt7OF9eJx4kWQX8nFngYaS1QlYJCtDWZh%2BEPhRrr%2FalVgucG7qJ9BsmaZU95Q90V3p8cYKyTmXbShQlM4z82EZsSvZviJATCgWw%2BguJKYVdLQ%2BPdC3Yua5kTK%2B%2BhMV4kn1fYV5h0z62riZD4skq%2BYsAjm94dEPZM9u1qsny1rzfLenuCa4JUT8qZpWQrcxC%2FynY4%2F6cfVhS5NVninoq9QZzJU25BALq8m26foeNb0SfU17hQv2bWUSbhEt7alcArj3ui%2BxT6o6Z2dbOX3LpK3aIjmnLYgf2ltT8iEU6NXG5uVcB7pJHk%2B7qeA4Mb%2F5UD5pk9Xd7x8eWM1%2FgDJXoK8cGyiNJDFrFkvwMI%2FE38kGOqUBNfVyzrhPIjYX8GYD8JobpZOMA0rGZqzgVQ3LWok3UnugLD7mF7ws79QiQmnraCTRjDBvvT9F4FkCoGTUQripQCS%2BZHZg7NuR8mFppxBTdTm4ILHAAh%2Bwk2YsBKZND9s7yNdHmh2YMRAo0WfyqbV1CT2OLB0L%2FYRbvYOV6OXgchVTgBb%2FcLwy08EtRqFM8dQ2KiKsfLhL9tP1M3ffnwFfl%2B9ostgb&X-Amz-Signature=9fb2d7d3c05a02d2a961336cb5ea7938fc1f90f3b65561cf738bcdb2e81ca0f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

