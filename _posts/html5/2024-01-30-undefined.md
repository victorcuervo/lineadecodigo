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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHIOB3ER%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T112233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFNu%2FNOqeWuqxQWuIj652e6JhV2kerMd3%2FMtF1JtajE9AiEAtZX4rv8WOPeeEzLeYXd6WgHaBi0lw3cyzwg812F%2BZ%2B8q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFvn5pTWsa8O3SqpuSrcA1YYeEvP8Ry0v1zh5pZpW5QVjAWKwJ2wv1cV1lwFyI82M906ujW8YNp%2BRuPsSZXPwYZ48n%2BDGCGPjZQMF%2FOk9dkNSMwbgUu0JV8y%2BXwCnt1H4KS2R5FRFoSxFg5mAoUD8d0kBh%2BiGwoRQQXNtoWEnQpre%2FHocdnDj2ht0p1auRpgEn%2B4bHIXdfFbhIIhKtlfwPj%2Byxm16ybS%2FXL79Z4zo76%2FUwmRo3CUWAYgdjA3NFVdKoG%2BGeQhFZI0jAp2M7rUVNKQhsrRJPI4fuO1%2BI306dpKb8yR1WkbhvuJjzd%2BMYr%2BEIBKsB92FbFU9ZT5bqyXt4q5kJ5WatFy3u2Ekx%2F6fLfxm3rxdZkIWV0WMS6euWkg28Wb75feZrzf9HwSri2I9DqQP1Y7jcIPKU5va%2BsJRQrnS6AYTzNOzGoNseWH9uK6mTjoxxXLRj%2BSJiN1qx1snASMDHohnOZVsrYK8sUsKDV2TKm1JxkjZ0zs169F6PUsSPDKynmRVgQjbpl6Bj4BPRpJpo5xhVCYviC7H1mh3EbWRYqafdyIRieR2WOTOxd3RBjpJ4oa5%2Bt%2FzzRBaLufADpRQThVjSUINuuttlndmwJNgc3QnOMukf6gbDgvEvWJ2zvXD6g5mbx0l1rgMJ%2BuwMkGOqUBhWEOqjE8UjCCXTOCTmLSuFRXz4B3TJpcJyk4VE5hjiaCK0X%2FWbgMqczAK66xCX7tzbiWeWdiTK2uMOH6n21Dv2gspNTQ%2B2Av2%2FAszVlokBs1G77HXDv64jEcsbFT1%2BIDy8qMjO5xAwMqa9e44KI2mqi5RdgN1te19MhuDtHSx5cSLD%2BNGQL2FcK%2BnA20Fzmk67bM2Edvt0rRZUt%2BGD1g2LEO%2F3lu&X-Amz-Signature=be240158cc31fc3c09295094ca9486a461ff4f49a644ff9b524df569fa83c8f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EM3OS34%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T112232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCfa4lzDVefQ7VnE9%2BCbEcYr%2FnV3lvainRmK%2BU8fcARNwIgKG2ifQNj5b83fEoF6aZLhBbu0JV7cf8UVn94kbYqnA8q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMmFzLlvVn%2F%2F0hYDuircA5jtceoO9r32rKYZhgDXphD6KuXuhni4yHt3tcfctLBMI55CepMr0jqueibq2KSLa83Gy3UKA1BQJW81zukquxKe%2BDaLp2I1rbGAXS6QvRXGgIZWAFpOSzoByAzO1xBZ2BRN7IdYE7KVDdRRL%2FByLipsGPEEtCxP2H3FlYoaef6BlJQ%2FLLgX8U1sAZVW00J5k1sl%2Fa%2B2qpR3ETSwo%2FQI4qGtEId6%2BV8fxihuBDNUX0A8MCsIXKGf4hTR0jfMyLc9bKvK7aZmBRxctfEYsZPXyG3%2BgOJ%2F5K6n8F9q4tx1Ezb4SJWHFR1TmEM2i1V7W5JrtHg8Y0oI7kpOQjFWmCRCrBhiU3RjislpEb1%2BkFRBTs1peB7i6VIK1hehFTYicS7XdQPqqrb0DrvkceSef5HGye5wbhENYxodMnUmn84VGYfaoSFFxzuyVSwP5oATW3ej642v%2BOqayAJw%2FqHMnA629Kskw26RfnNBE9UYvAaIiHKc9Y%2FK4PqrhBss2KK%2FcY6xvlTnqlcm3iJKERGILS9NG%2FkVr%2FtOh%2FY6b%2Fsu%2BZTiHLCVIGK1054H%2BaTB3hYYhjIzUyjhP0qZZ4eG0ChQuRD0mijwLBxT%2F%2FB6m31sgThyJuCj3XtL5Suy7fRgr3QDMKeuwMkGOqUBXZUL6TO7ohbJrdn61Ken8Qov66iUf9cJWpw9Ghh146q98OiNDTEwSf%2Bs%2BDgaIjGJ3DFmXJGHgT7rRv0zv47NlTLT0hX2UIWEG33wR%2F1xHCxurB5Y3Hymksku%2FAgs7v9EBxd5sge%2B4uMvtj6Nr%2FBqr1OC75cR2BbV0pclacYHwondXpckytG72AQLm9YwtBQDVmHdbR9aOcPD94N%2BURkDi9LldB46&X-Amz-Signature=6924c32ff154007210494841f57930b0d2a3d74e131c094e0e17eb22499a92f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

