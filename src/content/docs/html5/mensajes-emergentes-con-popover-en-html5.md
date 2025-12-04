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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666T5I72M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIEo8yc9oMufaPgPRXOs9GPz4YebEaF5nRyFrSZJGMLblAiEA4hiLKoBa%2BuA22n0eIJRUJ1bplJp72yxW49iXTP7%2FpWUq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDC1hajmL%2F6vznhMDLyrcA7Hm%2F5pGG9PfwGR%2FeqGlBakXGYRobhVB6nDxuYaUmtpwXNReQMKPhkNnITeg1sVR0OD9G6GyJ4xD%2B3sAX%2Fuvr3nOB4JqXA%2BLJSfl21arZAPNp69kguCGxwxbNHbkUkAOc9SPrRka8SgB1YWByO44AoJQ%2FjM6zhOWcdNqCQRM3J0Ge0C9ZKOWpm0ap4ikdRXgzAZyPcBJV6pYddETSMSliJ0gFu4EJJr318HptHXXmrIEPHiwtU2xT78qcablydInMoTa6utVoR0brLVepLyLX1J%2FZuUBs2UEyF6SLfJ8%2BXjbv%2FVtP8fUgX2ouRKlw7Osjp4fG%2BpjX2OqeTCJfYJhiUqKbVj4sZqNeyqO%2F9maDg2oxx99BvustZB0huJM%2FG01UUCVJ2TU5%2FVrkSIG9UxBcin6kq%2FR2nKFLcgrlAbkz13OSzC2J02PJX3lVjNbANjv0jHwPvoVixMOA2YU%2BwY8tcY4wvsHGsc2FoFKrdbrg5vCd5ZgbL%2BAaqi40I3NlEtoKyNkFAAbrY%2B53TCSiFrUL0Tw92VmRaWYEMaQLO9UImUt%2FN6IX5wAxL6FGSEAz0Km6uFQX3GR2eKQ4E%2FqxGvzfqA35BA7pE9gxbkslzIBwkbJzGdWLmeKcqasvxm8MMPyw8kGOqUBC1uRh8kMe%2B8vNO7Rk1AAOE9aS9v%2BgvP4hbNgtm0SDuy8mpp0vtbitOAY%2BURgYkZcCv2gt4Q4N4%2BWAyLKfx4nydoPiTF%2FNKqTYAUohzm3ScMidl6YVRbSQTqPaSBFUs6Q7lB4jIa52LxqPgj9iQvZcJpfcfxZyRYmykK4%2F%2BDlsyaiVza0g0arU84DJ%2B2m8XocA8ZG1akNZV2iNS2Bk82aXtyKvU%2Bc&X-Amz-Signature=369a374d7bca75e6b4e085f977d2bc16d9a163db659b8720ca688ce1c18a2a52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VQ44XFB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGTYe37Yizbk3qY0FcTrbck3EdIPo3IhNRgzkDPeH1N3AiAnbbdYEFmXFT75eRHYBbBt%2FcnkNeHBXVv%2ByOyn217Rlyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMEJ51P4zHvSjfLDn5KtwD7ayxBq3FxN5s9aMIssp%2FlU2XijanXgB2GzZmY7uWSlAcNyCiZMI6yCfboaqPfsA7YznsaxgSnEfbsEn%2B3KCFz6lNvk5w2dkZ9gf5TNAgML8a83zCxFO8LD%2B1vK%2F8vYDy7SXWHbcgC7LsYeZyFsrAUFUEokq0r%2BxVw9P6a%2BNy7BDfqOtS7YQt5%2FR7JVulEshdPS238OCV7muQXme9rpRiT29FTPQrpZiOJPStou7eD6QpjVlDprScGRUg4uwxdM7n6LT4vJj27UeZ7FovCXH9Sac6WTSmp8gr%2F865HEywhAK1gCVm972%2BADdYHS238V%2FUSjHEI%2FB5%2FHt5EDwjA5rRDs%2FABBUylnnoQQgzCmOdqejD5XJihbPM7C%2BQ23cfWyCZf43HFYnMvnMkpmwJjPG44%2B3JGRJhdTjmlwpIp9W4%2FFS6qjLXFmQpOy%2B7CLT%2FLln4mDCV8DKiCULtGV6ohw6KEQ6tVFA4NTFdnDUSC9vxOhf07zNa8xu0kzr%2B7VCh1IbsTqwPUmWLS%2BtZ4SlRxAl6b84mApw1hf5AMPLWB%2BnusKRneH4VHcxImtZjVsXcFDv%2BL5rl6E0ocVD40RXA7YIlx94KsLYN3eLvJqweT0C4zc27Wkyh07MLSdWkZmIwyvPDyQY6pgGi2f9pjrKHdYTmBRhFdultxTK8bDONtAkUcBp6%2F279%2FS2jM3%2Fza8eyfF4dK%2FT9okgq6Wllc9gljM93h4EoTBiWvG9oyL%2BN%2BNNne07wCR%2FX4tin5bG4nGEqx1AcVbJ86526iA0jMAttP9Prf93nPMO9eaE1meqeImxmValzsv8ACUDDHNI5BQt5rFamFz4Fa%2BiW%2FjYP08XjgPl3BqEA43CUWDQziqcG&X-Amz-Signature=8261c56d0910e9358049e396aae28aa8ced991f3a0c1fbce44bde536be5b3dfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

