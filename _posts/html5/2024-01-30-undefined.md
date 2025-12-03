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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFY6ALN2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T002406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDwwxMAa%2FFDHeJcdHtr6z0KhSPJUasl%2BnS1lJZIl0ezqAIgG%2FN13yaTCffdKUlu5Q0C418ZGDwguiHoPJtgGpuOcLoq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDHOy%2BnnDTQC%2B6A2CXCrcA4NIuavGvnhAJL3CM%2BKOdSWpc6zifdadaih9qGPyARfTxxQ9u%2BZsfo4hUBEaoLf3ehZBhKo4hzH18cMIxKsecLLoJcBYqvj7ARXkwtzlVt18xwEweDK7rw64oDsDcUD1G7fRKXBtK%2B5LA7ZS%2F5Q5KthCe8GrcjYEswQMgbfyTVYCAhqzDtLUfc8NBG8tZHSPA2YdMfEtVv3qMjlavl8MtxcO86LT5yPhCrparaWkVMWAQQXzzxEVtHy6NDkVcUMXUO7nDSxA8UAVflv0EyGBNyF1MN3mcmulRQg05Hb%2BxI7t9Dfta8T2edyIJJbe113iKruNvZakgwIJWx90w36oE0cjN7BLYywmRHmUE8R8bIWOx6VaLR5w7atW8RVdyl3VgDr915iY9%2BOVVrYaTSO2OyNdAJfs%2FXDqZQ1tTYzd%2BOfmGWzh8GPLpgZ46vV0rw6ceSz1DNBUW%2B87%2B2ilnCPzJmnWWyBuPj0O3pgXNr0SKOL7w6IJJPkivVoi5SuRDC%2B9S7M9thU%2F%2BDoD00%2BPHBn4DL6nAdn9ipVII0CB6Fxa3xrOglMFH293PrqVlKoVjm85SZacA00LlLh8ulPE9nBHsjo3LEx3O4w2ttV%2FdDYau9fkFeZ3E69n%2B4FmH1lNMOP%2BvckGOqUB0tr8FpqwJDyZ5mkOlWHp3Vao45E7SZpBwzI%2FEsV%2B4dticyVXsZ%2BSc9R7jaILsBOzr1HZONQpTjJvj6R66ayOULIwIqD%2B3L1%2FogkfX%2BKvOIRPQlmyKbiM1t6HUbM5yRQLxGb3x%2BG3qigSwWEj%2FQY3MCz48mNRly%2FfLnbLJdEI8ij9Y1Q4W3yxH%2Fcm58tMvNpauai3ryYbPPnBI%2FDIr7xitie8WKLd&X-Amz-Signature=0a682ed722b6e4abd099f42eadc5593b0f6ae9e9c45f86862f364f68ec3f6e14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675LZMHX5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T002406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQD8cdTs6tE6th1R%2F5MhY5BW5MV1q2NOdsWvJ15vext3fwIgH%2B%2FW62%2BfFOA51OypiVjOwq3R0PvmQVuhQ%2FfLJSRJGNkq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDAeWuqk7kDQXXUv7nCrcA2Qqtpd1kQGRXAHup4DD2S9ZjCWv5l94BCbhOA455gR6P5K2eORMMkPZoUh3GNzz0bIRxJGpRW%2FtPKKr061eIhrjRcs1bumgActOG5y%2BuT4tIJzNOU6DeNymxboaeHDiHlBughpSaTBRTGJ7S3lOwIRbRSkgDYdYbXzxcZxFlP6GY0oHR8s%2BtIRn5Kl79BysQTL%2BDYchHvVyRrJJGAA%2BS9fWND%2F7u7SxFn0d%2Bl%2BYYXVHnyhK45RkHbFh2AaarDJ%2BDf%2FJ0U7EBdC1kvlWOCppkus8Go%2B07a3vHm9EP9o7IcFBZ3d4BXKmYq528s4cXJf2xQlO6paUIGxzP0R7ARFJ7GN%2BdmWIFeOAMmagVq6HYBBJxZ%2FARkww6%2FRWoOGxCf61nxSRSzIaTWv8MoV1t6LJgWUsH%2FpZz3fRKIsuAMrZYZeTLGRBOkiPAcCjSajYxEDj3n5GfS5qS9vmROQdv6xkmBiWpY0RG7yX25cm4j4exEYy2sl%2Bj7LBIafN%2BNDafnKSCG6hubvfxB3JoSHjf1IqIH6woO56UXAcmddqV3WkCeJchbP%2BJJdjdz5w5PleRYDwRidq4qG4irY3xCZ745DoJJe9rM9jBq3DF3NR4MBfoohuzSXdwRee4g9zFHCeMJP%2FvckGOqUBq0CSphh6Y%2Bqcl2iytVI15ixOBegxpZ6NKajW8fNlRNwSqC3CUxWpEZY26pIEpaijGf3WeWnG182c0UJ%2B1Eev9QX6j3HtRKkTGrXmWws%2B%2Fx6DH1chNl3lXUc1AsOXkxlV4NXeHppJjg3JJp4OrxZWk%2Bnt2zdoQNsW64uwQiPbUqIFO%2Bv34hfQuQmbnxEE%2Ffa0rLYVHiPI64bBM0Bj%2B2AWcso662Ab&X-Amz-Signature=18808a51d495f6e4554eac05f1de89c4a18ffb81145863c0500b070e7b028ac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

