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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IVHIB7E%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T032758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWvhQ06jnEOLR1zPqnBBuoxEK5wbK6FYR94O2eSodENAiBAgrO40kSNMqjFZLESGZ1ZZP8csqKC4hDL%2FBlCpxOg6iqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ2fsiDqJVEJeYZBuKtwDc3oe2E0WZNg7RdG5ItciUTW0DUb85dSLKnGJl%2FDKgXrDwpZWRWfqtzluxBFRtPTlyHSax0sJa7VlWwdlmMHFyCIztrJCwGegkL%2Fd3I5UxRGBEyjMEzM6pMi9mobSPss%2BMjlSIrjY5BEq8Z3xCeGfIRorQCDq1jzu7iZtDeNm5OdhQyY%2BDHwzK%2F%2BwMpg8cvPRzlyN2Uko0PzUo5GhKauaTyW9dt69yShp%2BBUWWldx9T8Zdhfbcj0X4NIvp3TJm30BoIRNdgjU8Mspc9bs2ISNml2KNuAiQBK9oE7UymSugoGLnyrSjgoojHB2reqiziUpzajDAGAWN%2Fh0cj42EUTYueqe%2BB7GTmMIaF0OU2FhGCgX9rFRYNqa%2B0rRHEzAR5zkw%2FMMEZ%2B23phWRRebWp3zmit8ez0dEPqnHlt4jOY2C5fk6j8jlE4GcHbjbNoKGK16nUgAuVOsKNwsZdfbMITD6VOg2PMsmGBruThs9%2BNDFM20h3p83bWvuYgFYcqv%2B9GIJV80xri9Oy2NU%2Fj%2BEG%2Fz%2F7d9avFWDoDtoc5pqTLmXXY8zk3Tq6x7mL0Cnccm04ImROBNoQsHtQ%2FwWnyU2FurkWCvXhmuXjEKm5zri0CcEdSAKSgjZV9CHVK4Sagwoe%2FYyQY6pgFzVd%2F05F4TEPT2%2FcQMjgIQDCpmJwyndVYR7nimfwPCv9b2csbwfVlFr8k3MUF0XEl5VpZQ7xFGLmWtEwRBjycOWFed6o13bG8JvI8eFhmXvD%2B81xLt%2BnlIvqXgCoxCFqonkJhbGNbtdSG%2F49P6e3iOD8dfjkujBargGKPPSnZf9CYdU5xHPYGhCLv2GsZhN3xK8Ph%2BCna2iLMOAYM8DyUhosk1ZzHP&X-Amz-Signature=3fe4ac6a0722c44bfa4745d72e055c8c6aa3035458b76438a8f6c5c476a2e7bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDB6ZWSW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T032757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1XcZvSkM98QCY7ElaKpI6YDQ5Alxijz01jL7S15KP9AIgO7DidfAfXLBPh%2Fvi9xE%2BpipKbtZYYiuHyt5pAkpFAZgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxDEotk99zRfThWYSrcA1W4ds%2Bta3WIBTJzspsP6WNgelj29I8CPPAcVFTYWbCFcjRNtpHIBnC160GcDNUz4PBcYnJcewtq1WN8%2BLFRucCNo3EmAZ9ZsgRj6jQSsZolNiAw23oAVca52BqTnN3EqZXNodyyA5ugKUkTJwcbKme1oyF%2Bz2uIfZJN8%2FuhRqLJraC9VHe4Xe0AHO5bzaIylfodYKxBd7qDPJY8%2FPq9lol%2Bw4ou5wjsW2O4NhcLfN8WMvoWMqFThtAsrDjecD935ELQNO%2Bp5%2FWc%2FicEGKTo2NqsO7jtP9TD8I92mVB1veHhp6gc3WeY1S7A8d9LJR5NsGXeC0nr3THLooZinY3tbzCLLTcAyT3blxBBZ2DrA0exJDo36tgSQhTUHga%2BMfhs6yCXi086KnCuBj0FOJl15tcPQxLlfyCD8CYFxltGlAIQyffCPXyxm9wlKsYEzsww2H%2BZuJZBBD2GEBXarf%2FGeWbicFiNntDuow7JwX8IFXtPOblmQL%2BZNaVv%2FS8kS3tY4mcYJU6yMgjLjDxJpvzakF3zlEjqEqJ%2Fhi%2FC5CEiln9sPxA3qwGOSRVMt3UNE54FobpMs1HfCJRHsJEl%2BETKFFVu0mZKuF5G6N6NtJ4w4IGvyWguYJwIDLNYkgEZMKPv2MkGOqUBw9bP6FVvKhnQqsTO90psG3ZKAXj3MDniQ9GuKGuoJ04n8K4C4YbMZDOQxVu29svO8svkHZ%2BjWhWVmpWkhxv%2FsfFDmC5I0l8uMzdom9jygzJf%2FGSI8qkdRd%2BGmS3JiHDe3DBtew8VCdL7LFZuVjLokoKHtfJSmD9jJSSMezdoXz5geUgKMOZRSXETy%2F%2FvQQqIjZQYrwcgiGUrBDFoUSKUMe4lxqXm&X-Amz-Signature=51721977dbd81bda2985e28c9f2c47f75a8ac45a08bc2673df768532539a8e9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

