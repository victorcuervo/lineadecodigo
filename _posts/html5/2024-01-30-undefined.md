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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623WAXTK7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T170842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDyb11CEKzFCWASZSIGFKHI4RwJacGVC0ZpXkTETX8JpQIga%2FYOGsPZT9ZCOL34eXhn3hZdGqeHoY5e7QNB6A5Qlzwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDNOnOcnU4Dp6v%2FztSCrcA99WB2HNL5JCWFz3Vy6E9tZfTLfy2xk0pTRnAOSIqmdjsEiFEBao5aNHjlNLhiaj%2B3ttvr39Cj8zczfiEYfKPbi3masxiIdB3m0BKLsRLSn%2FDIjBchX74RtOGAfR23ZAwzc1jtNQQO9B74MBTaX118IU4PXwNFWChoVfNYbsxtMKLsAt6ROR3xM43M5j0LbXflLQcIPBUsQb7u3dUYMaB1lxIGzhexkb8YiLpHl3dfelbo1g8N9tGzu7QhbLqCuy8XEyYHTAW5BUVN%2BTfXkAuwFdEEDhPtLHq9tNVQcxXLk2HehocU1mFZnwLrS1qU6MlZUD9GcBV%2FVxw36h7WfMZvVvZ1%2FQMjm03C%2BrnkwZxfxG2Y38fY0qIP7JM2w1Cn8odGcGNyboJDJnuWnawZOmqhjyeZvSIqOQbuoSzWJrwPKpJRRi8HCgtCHbCxwXigW0udmm7tnPwIJuMO4JIzB9O3FrwGyZUhwyxSFw6Taujzif%2FFMZJllF9sG1wnTjrg1yDPFkGeT52YKasOPmZXCFADGWP9VPEWqJ6k0M4wE3qlhDu%2Fci68N%2B9aNv7kqzgeuCJ6AWGGvF0YyMcV6wxeg8UMoBBJ9%2Bu2upGcFIxgty0yynPw9FCb7YRPTS2BYBMILbwckGOqUBKNVbQ8tuWDb61XL5i01VzBEl0m57XG7B4j6VZwR5sngA0RH9f9Bjh6baVTo%2F03wSLRl6ks%2F7YvFTafGv%2B8%2FeDLqvzJDiNnLlpFUwtyw3dEdFlfnwbbdM%2Bgk6aVCl3CrxB9zOtXDvcIW%2B%2FTQ%2BQz0iBa3sHdl0IH3hEO%2FkInO9iG%2Fts1Or7uDnYO6yhhfhtci558%2B08EFMf8FMkyI2CANh474UX1y4&X-Amz-Signature=ba67c6ed8703b5544bf10f9a73a36b009cb46703a7dc8028e6965fd699d4559c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5GEY6TG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T170842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC2U2gTPs5buP35lL5pMqSd24DtiWgI7nfUltiw6TCcxwIhAOj0Zwz9MueKmk2vltOHNNNlIDRp8VcQ2kDH9tQI8%2FnOKv8DCDIQABoMNjM3NDIzMTgzODA1IgwZYHJ4BioV9kKH49Iq3AP5CcwkAd03Iv%2B1MIS4FnPnlodiPhm6OUCyD%2FqKIXTz1%2FrDqSNg5bU82lHxT1mO5hVrUeo2HZbFgcGVEKxsVj2pHLsxnaBiCm8dwSo1btvtsaJ5IEL9JWDwYQCDzI0vo4H8GnNmKtZb3YdcDvuQ8YXhL8P0xW2sBzh8iGpLW8RPwGladqeY5%2FnmK%2Bz%2BfdhXcEZNLrfMI%2FHAGiboIpN9ufvbIXu7dTvkTiWWgpWcW7qxe1BVA4m7PCcnlEflTEFZXyq1CAQ9kj4gcXDWjwqaBjd7gJz343nKVsHD7wpkpsXdUCoMnWkkCWhHSqPxNiy3f9fHBqN7qARUu%2BMD7kNEqs%2FJsZWI%2FHAh6vAO0k26FCC3Zu9mCSMxGOD2J6yqtNoYRSg09377aXjCN4JbWDKfBXINq6Z17I0g5N3qRrayoutNE%2BRhsfcGCjpN6CluEzP3s9ZAKLTOUi4UO9NwtpjWKChQdN8H8LO0fbbu3kaa%2Bp7oo%2BUY62aKol4cjJD5UjJHRheK1%2Folt02m5t4ScixfLp8mcP8dVCJxPov2Xy5ZbwyyRt%2BIvTj9kJ64PPFVelzoXP0MuvwSTSLrhkqpOBSeWc35obQF61wqzMhd%2BVtnrJp3CWkWm97Hd9xIwogO%2FTCg28HJBjqkAcbUGs2PcmU49SbqIdpf6bf9hDpjA9kzUkQ8Cmc6B8cUKPM8kOQ8zT0G6xFBUBaHZB6huwKIlrBP6xukFn%2BArHCutYLtJGk5i%2BJn1gsLlQG%2BXU9jW4KcGOpiDOBE3BzQ0wM5vbQTnCZmlUNtj8h3dzmlYfgxtJ4QZclNG018VOMJOf4BHoVf1vp9t06frvsDyFbwYZv%2B4Uzul2i%2F2SvehMO5715C&X-Amz-Signature=616497c267b1c21c416cddf8cab222251db5d28b827ea1c2212e14b20b13f6c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

