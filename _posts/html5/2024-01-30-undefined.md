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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDWFOLE7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T074605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDmiElFJ0WtUm6LqCcaoMLJ6Bcyacn8q2yhff0hLhEvgQIhAIKgkWX9MSGEp%2B60ooY8MIO4WMb8Rwu3QoOZsbNmNymGKv8DCCgQABoMNjM3NDIzMTgzODA1Igyt7bymHLfJVioWg6Iq3AMp5grUwkE5QJYyEkudlW8uYS7Q%2BgcQJq4eXf%2FmfVWNUK9sN3F3touIhGn9KZSY0XozTr0cVW77QZ9woMCLrZlNH2WpqZyylzsTOmkX8GwwqviGYkMNbSoWhFftPYxvfleAhF5vugwL3ciGb24hWrh%2Ff3xqT3r8jk37FV4IrTUWi8%2FY76sLuzbrOJn0cBI%2FOJ9nfZ3Nv7%2BSrDGCYxfW7XpSiPY67tpqHMNpy8Kd3cATCOa2sUAsGfDsRWD3ZSjarhLqLh%2BqMa53KEUQ3n5g591H1BskqOFVBHg1L%2FwVF6ACfpoE7dK%2B%2FZrGkEJV%2FNgJ8BRaqLji4aggPX0fQcm09Oe4%2BkFb9N9XPrzy4%2BHS2pYM2aH59PRHv5fMo44%2BcaxQ59GKAeffi50EtjKbJRk0rnq%2FL5kG3zuQFrqRBecbbS9h7SCVtJmAtSJP%2BNdm8Fih%2B0WxMPX89r%2FWrFeCx7T3CIP2V71uBSdkA5NRhEVXjUMgzmkJ%2BetfFVQ7uKwROdbKhb7F3GtNp6%2B2XInU9PcBypS0CiIg8DjSS3Gst650jly2s95oUxzyaHV6zn3OUSYUBh4C2nJOvaWvIJgj6JR7umelsox6YJDeIPXzbzTDFBKoxJ9x4pxAaRU7x4xgfDChur%2FJBjqkAckgjIDA81Z3JWrd6KFPuWU195bd13fEbaCzNxEe%2BZREwOD1LAhKESDgq3mn9da7r00JC0SMzAWeThaxGY%2BAed1dt%2Fun8UtA3JkNciXUS24Z45EdC%2BmdW%2FTovUGLw2KldjXn9qo3PWPtmYOG9QJOmKznxtiXqxawtkXUNaJTT7ZU2ikLWz3qpa%2FXyI1x0s9qjgw6m%2BwR1G%2FP4w8dXSOaxGaRP0M7&X-Amz-Signature=203d37dfce3c00d045ea760edcb3c385a33e44a30addee16d5b46eb3c34a3566&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZBPSLJQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T074605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIFbnMQ4mqx%2BXO0hvWoUOZTbctaV75XFW3gpnrnqMqMzkAiEAoZOc5ZH%2FoBXwJrBcwLfH9qdZCz257kofUjKH5onPSzMq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDGx1sd8dWv%2FEncPwESrcA%2FcowSnKRt3omksJZ5Q4cxtJR5V%2BgUI%2FRDKs8pDHA5kuR55poaeiNBcdR1zrS%2Fxmmo60JueAQbQUvHNGShi3CEDbm3Le5uEgndYdWQw5YxQuqWn61UC7JmV1dSfYkAYwXnSFFIWDN10DI4c3jpruF4ZSkPL60PR4GzwkcFv4smsG6VD%2B2oaemiPhxe%2F61xFaoRuNRBS7%2FU2ehQEpzV7n6GLJr0RZDOSdGScH7sVOVPCF25er2gIoD9eU4%2BzvRy2%2F0J4FMPChNn9N%2BPLsAJxs%2BvJfCfAtS6Yo5xSkDFopNcZu%2FQRxDRTs31MoNX6iIupzeQ2NzP%2BjtO5VrCQGjGafjHz86HyL5TKptMzYQW%2FQXuNiNlIl6d%2FT3KbWKHGCco%2B5kTJFIjVewxmtDBJP2sU0uwEz%2Fi%2FsNBk9j13fjwfSwV9c8%2FkpO5pVCxM07IyUnlK5Sr1SsUA5ZWwEArc4pRJgkgbIw3xprsY1YOj9JPf%2BvXdYGrJkKFuY3Bhy1BkodIJrDaDnrlhN97qGSyYYefOpmsKMZfX8PbG0BESeUTkUORVvhr63JMk%2FIQi8FApf0Is4UJWYG9Yq%2BbxImTuZxk6G%2F87mg0pE6SntSk1SUl7pyPh80DKZNblPv6YFMxHOMO25v8kGOqUBuzHmjjYZl8VA9oIY6snkphJ3kUFjCxYi3bihpJqrRhYMHTBbvt4BXBqrjWgd3k5pW%2FqlSGGUKW6ERWsYDJAAMILHuZYqqMDt5rX5%2FQegiE%2FhD2cQUN6K8j%2BRrtvIjrlw1zAVrQdmSccsKyvUb5T6IVLq80EpENSLmPTGasEu5m4lAuD2puWAwlwOM71bxrEqxOo8vsLOYDoD62ezJEHBamGT71F4&X-Amz-Signature=932f0f7ef3eab33ad31c87476fc0be1eecf8b1626b641875577f854d0124881d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

