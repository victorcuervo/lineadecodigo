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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDSGI4GF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T192817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqifUiS7KYkxg529xyGQ2SSlGOSoP%2BeAjvxO5PbFOPpQIhAIVH6toDnk5RWq29V02Y2qRMvycDI22ZEyxiORaBz2yUKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn%2F%2F6ldA4HP7Ccu%2BYq3AP2m0esErOonbrGcEDS4YCaTJY%2FEZ3Fg83%2Fkm%2BsMByE1os%2BMoVH7EGR6%2BTpSAqlhzy4q4TU%2B2UPtvu8qG8o7J2urpNkLJigGn1tXegkTkybD4maIv9NOAXH1b%2BVijF%2Fc92E56TW%2FJIr2guq1oHmZJtRjkGIZDIDNLV8NYbOtOfS5DtItrzWdDJOfsblMBmj%2BeXUhhW0eFJvkh%2FDhNXV32aKcmfMfXmdqoIUvV1qYjl%2BI0BeHuDdrFrC3ho9dhnIubvlosER5cEd79zECE4i2PMzwzbj48LSTQ%2B9Mkc%2BX1RoHUmzahPruQNC2QEfVcOpAhy%2BVsdHOdBm%2Bx9hMNydX7W5fKa6MEivq%2FtSexK8HadglKV4rtZycnPGsnHLal4Psg%2FH2XFqLbHlPHk4ZF3dMpy34pzoWPYJtO4JL1ZKxe6NdGLUBquL%2FHEcqKv4sea%2BN5qcbSj%2FvbDpjj%2FRfM2qCA9VFAmGau3BxNMAfXj7EpqV3nOS12x95AVYMRHV6ZybRec12C3oOEb%2FH5wd6XXkMfuDsAdx1Q6TPlAKn68xTre%2F49MUjJwipOspK%2BqVhWYoSKkLec4ZxPMvO5e6qi8nxFJDyNLo%2BzJWo3rbpiwBZm97gk47FAtj3doeUfwT6DCKqNfJBjqkAUIMjgmaj1QUZ1INdLRbaFLaODgbs7j4RQpDBp51rcVy80QdwbfeSYJQ0OE5zwDuB5ONU0QnaMhDdeLvR7sFnI6ZCjXueiNcPrrTm94p6vkjV2Qc%2FsHVIVnAKsbLEh3qyJhgXgL9T%2BgEX5CMvxBcjfI%2BGxyoytgBfPYAER4ZvdzrhrQKY8VETSWCKI3Hc9WHFWydzlQlGgKIXJen9xsYFBazpYC8&X-Amz-Signature=fdf80847a4805681a82270638e66431c3430f4243ffc8aa330800aa45fb1f696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTB46EDV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T192815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfpZbtMGsD1q54Zof6bwczgrr%2FuSH4fEgYDikCCNv1fgIhAMQt2JS5iqHRGy%2BD8M1C0oRVC0i8722n7pD0Q2eDIC5KKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxKRq7%2FKa57tmILksq3AO7J1lgf%2B%2BUZHTvEjwftPFwwUDAdPfOedjcq3iZ4yBqhKJfQpbE3htz1ILiQvFhoPYN30iE1%2B8zQ9NYViYlkVvFT6g%2FE27T7RD2jY9BJqpufFZ1vrtNlnugH6Nn3Ln6OGdj0ixWq8tAwLLnGrjxXhKqfgyhyQZFh1OZA3Ir7USDfyoBod8sthSbYyOpVvV3JvpdQbqwo%2F0ViT6BK9XCXGbBLh8QYEIDeBH3QqxcVQzzOvrN0vx%2FNeO0sPNhxR9YIuUYNfYFDA1sJHjxaiZIRSmbSnhLeFxR%2FiingVvp9yS5vpgjSTphUmjilbGCECYDIIfuEGtLQqdC2%2FnH5vQyRYLoxYEaeY2SYclw4HdUt2AsC1AkmQufO4fDeX%2FEa467Xr4s3inMEi9YJ6tJ5e4iOt4TZd1w6%2F4rCiM3qfxqQ%2F9vpDW8wa5H5KFxDIBkTmXvMdermZSGxM%2FYGrJA8tcE2n7c1szWyaCF%2BGteJiHxezYs7f8HbqwpLoIeIOkAL3%2BEtz4kFbu27XpP89Gh4b2cxdIOBcyYo0i5aqriPYz5JELo8s28gg%2FK%2Bf6NdBsBb5iWbMsl83ZI9n2813FJMG8m30iYWZ6jrVDCWEsQWrKWTH%2F9uw7vGervWMky0Oww0jCMqdfJBjqkARbTCTV3JrAiTlSHS58XPWYEg7lF7yTtITZPRigwBQsuPLK2gpYOKUIPlyxv1c5QqsbHNBOg1zpSTI8Q58Khh%2Bnr1m%2FPkWsPSc0ollQnvKczeW2y98WUHwWz4YUuiTzIkKp0r%2FLVhBjlVzz99Sw2lLDJS3khcswzRregG44cOPF4YnnE4xalteu4fKN5ya0nVbSTGV9vcRUp8e64%2F%2BtONTK14%2FOU&X-Amz-Signature=186f55f464043fe1b32e69d5ed02660c9c33a4ce864052c1e8d6d04d53ec9cb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

