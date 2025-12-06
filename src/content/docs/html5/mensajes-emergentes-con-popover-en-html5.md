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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROSGLSQP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDi3j4dNz0xvb8AfUDjAOG7K5zGwyBpzprLhsvO8w9EwIhANLy%2BGq6x0bCfbXVLdfppbi%2BWICWDQHthBukAXYJ5EOpKv8DCGkQABoMNjM3NDIzMTgzODA1IgxqWAoW1f2URkAAZvgq3ANxOJvGtO0lDU2TsiycG2RO1Pp2UW6tq1ZEyz%2FaQh6XrRaL3Ulub%2BqAmWaghPy%2FQIr1rBZ6jBDjIW1VoadU%2BmJsF83HRhxlM7qALshslUXf5hWO16wwW2Rcp1M01%2FQRhEDnwexgdFbnZKxn18fOlf86WApnB9yMFlOCBNhmkqrl%2BMhooKa6mVmcyjA0SjSdvG08%2BIBB83TKumm%2FNjkAzUjkSTisyhoGqirYvaPPGG3UJ%2F%2F%2Fc6G46xRXiMpDpY%2FlDXU56NHoCYAjcYOYGM%2B%2BRLSg%2F3zPHRMBHrovqiz4VWnBu%2FtdS6xupFs5QTItOXHk495Ksv30N5mwg6rsCh%2FE3YKlv%2Bbf%2FWi64qwEQn2jeFyN9wL4wdLCd590utgHA8YM9rOsMO7le%2BB4Ago1ciHV8zbSBlnc3JN%2BJSpvMNexF1V7L7iEgSMX2vatLFffd8cvZxnXfElCfQJ8UUiVWyN6th%2BHEcAJr2%2BjuyYiRxAcqFWM0ZwoYj4nxygL32HajREtHQnxvQ4SX%2B3QRnKn%2BYymjZ3UaKoTHxBrLzWfh2nQIp%2BrBAoNqSzncjRhkTMbNakHqXFY4j6JcfMWEXUsHkJqyRppuS%2FXs2sG41ShFCxIHj8KYMqXh6uJRVpLx0Vx%2FDDJ6M3JBjqkAbYurJXRKlJnShSuSZabjuGAkg4OuVFR6%2F4qrIWmTrAFgrWNFES5xjcJlxVjBrdSm3LpeaawnRZvFt4N0LOkz5tGYJoBcWKrovv9wYGn%2BJy2bv4jjXBXfl9Vm7YkjKuhKob2FkBOzhtdrjGYQw0NelZj8O8xHc172PBdNzfQAQtkZwanWZnDgPHW5XtpvoFI6a2jiq2ZTko%2F%2FobvLz6BjjbHQiKA&X-Amz-Signature=82cd40c7c96e13952b55e4287b510e61c1bbd7e7743b9c02afcba9df209996de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTEUSDF4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGWp%2FAYjaBloH3FyZesD16PIhrXA9AKrQv65do3SpxmgIhANs1oKiG2OyDDR908KBGR3BdZKX5jrrf7f4oEKTqqPTrKv8DCGkQABoMNjM3NDIzMTgzODA1IgywbYe%2B8P5KlRcJds8q3APYfn%2BbAIp5SoF0yiastKHRUmtEcFwxnXg3r%2BQRTHP0w4HTFjW4%2Bu3iahGbmWkCG1R43TQHi3KX2hPT0ARYRMJmCeHTEGPeTb95hPRqz08nbsGHIqgXzABpZ8MfJO42WH5c4R1y1ESGuAnuH6UcKf5fFlc65xugR%2BtFPij%2Fy7SkZe4TQO%2B1HRXxqROZJv7KkuywYnBUunqtM%2BbjrfMAc5zbdJCRP%2B7aGb%2FrwaxgPi0C23Wfl1qq5ku%2B%2B9J7%2Fo0YTpDkqhcQCsj%2F%2FNFZ35j2v2h5zHtHbGsDCSxxEpiski73%2F9Jx9%2BQIgL89UG9GYXiEEKuWjz%2F5muiZ3HcvBZhIClS4dZ6VvCvNUwckEefZw45Qas0GQkrx9K773f0J1X3XcUtsjQDBSyY5tLHhctpmFryb59w6rJ4JpbotHLmDk7wgq1ksqNyaR3DLZbuwTS9vAYap3t5ecWnrWg9jH0FMSX151V1RS%2BudQnImeTRSE19R5eSdVtZj3qgw6bztnt9F3Jmp516MfOl9C2a6gTlfwpHRv9zUtT0gZAJOKJMZQEAdaak5IJAViOhN7U5mJC%2BYSMzYEYZkn5B1AfyF6QgR7nGpQET8b9t5Fe2K3dMXwmsSWpDPu5kVgfGr2xNtHzDA6M3JBjqkAVoxgHIqfNP1PDrGbcf6br99xNcNAiQhrKt8OE40iRH0LDQ0thSYydAEaWAVq1%2FgVMJjH3I49uEBqNc4ZaHp4NOWxUrO7yzHCgufzC%2BXrJfXmDPmJSjwJ2P3msDixEDeaBeCRPc3YDQVRFX2P6TYeyT6lsD9EtJgoKNjLOKEs4lsggAtOkIMWPwe5hSmGy32rUbUjsBRd1NdfJ3rgKP9tiZaa6ht&X-Amz-Signature=d1090b76b13b0f99b9c2d77053a697a5b02cf6e28912b4d5006b9a0dc69c2db3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

