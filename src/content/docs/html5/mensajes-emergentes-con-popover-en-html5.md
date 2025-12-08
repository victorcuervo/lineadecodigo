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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIMIT4UT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T153834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7nk0gi7yfyj9JItUKflb2URNW8TTjFYbHh7Vje1FFggIhANCBK1DIAUE4S6%2FeAvDRIfzzbQDrMXGHrTpv5KDfhsCMKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx32cVBpp7KsUHv844q3AMpm%2Frn6QdtHoVM2gNhloXc32Rvhdu9IZ%2F82xzRGgUsEDrPV29v%2FudI9f%2FRjmT4STxwCaw9LIsrZTtFKNk93oYZfkt7kLjNO%2BapsU33fyCLdWWkvOW3y0H3eSPjuR8AAdB9V0Ik%2F1SluOmhoaMjHojPLkMsC%2BXpgwrfn6QbGqNU%2F9bbcXnUrTVCCsnqnGOGkbE1rvf6lTnTuyqsXAijbx%2B%2FGh4kTWP8ZAr9W5JzWDfo%2BAMw4QBFOrY3qvavmGrfuORHSuepzRRDhj2HQ3MLPuG7RM%2FuseXoc5yZsLaUMOlLT75dYs9yLlHecAcJ51HOY3GZjc%2FYPUmCke7evaSvgjNp71PJO3XeeMZdp8Gitmx55kJWd074OePH6bAZ3wTMYTq2ZyV4MYq8XfIuLVl4Dgr6n%2Bw2p1FDwSDOddwQKZ1y0oSZdGkK0DTe9J5S4%2FsS5BigBKTxk7uz6dW5d85eUnskwvUiV1hJ0PftTBuHXy3%2BL7RQ5RWZS5SbueLXUyJdQnM45Th%2BbB%2FuH7K%2FSWE7P53NXNXHcZaVuyXn74xgSsJU73Zu9I2vdnDB8bvz3t6ZDCUi9TJBJy5JJbxeTYwwbYNldTxBoBupsUF6ppAW6fumkZ6Pmc%2Bwf5vHntWC%2FTCJwdvJBjqkAewt9aNOyAF%2FHdZeplUULvUrRUVlwV2HvT7QTZrjf2T6xKrnK5vtuVXMO4YACjCHXZLDPr2fh9MMMGfqJxe%2BHU1dTCCKCSK3uMrKbP5dd5cR27lIRTVTQXoj2KMO2s01KkoIi1cxGAl0t95GYvI6EsjXz7kOdjXVCLgbX2HRQqgKLJSyDBc9GVoOI0Q9IRyWa1keVXCqpT2m66mbWppMMTiLUF0S&X-Amz-Signature=71ff40074f858e72a08f6c6548e23cfeb0f703b4d92521d4e9cbfe507c6b37f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOV347NX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T153834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfqcqiAG8R1sHJaQKIEKYgC4qpvYAWu7qR6KI21AGUcAiEArD8n%2FSDaNIgfPCokYT0dHdWiygGD1m5piUDjBd7AxsYqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQMir60EcYeK%2FXPWCrcA4zNd8VN67872xXyaJbNusu3YLdjVU%2FEakgzVmaJTFBB5zhyCo3%2BVnw6DcpZSZWTqE1hW8oBFE8F0Vrk4WgS5Iftzu3WUr0GpMhkia8FGIZGCG799wj2mafBmPwAf%2F%2Biw8D2Ojf3yE%2Fy0LK4rJLvjuIUVhBCfKaKMCb1ZB7Ds5OC5pbAX0e2iARJlyM0yURKPIunSYbUBxu3s0%2BchyoLkZCa3vSGuLV3xHwwKdEw4tt692Yac5u0vEAYjAaw3flJx0CmL3XY4uNXSp8rs7y8fJ0DcBDPYyEPANwGLEg3J3iF%2Br4xSEd4da8DdQClShqFwn%2FUtGNGzO8g%2Ba4A7v56h5uWC3h8DxB6H0KZaxKCr%2B67wT1pkco6mB5Mb51HuWS9qcD33DTWMcqBY0ZtY7wEKXf3SR98fl40ieZxsw3%2F4BrMs%2FC5ZWkbfyTa49ktVLBg5Sby1Nh7JW0EXFVpzymhWi5d7H4myFxknjIf3w8yWVyqA1VTYQVhJk8D0ed9zHKkNonqeoUC3B%2BJ1DthD2m747klxUN1J4UNQktQukq8y0K2VH0r%2FAiv8j0rNcaPQ9lROtdM5Lj9Mf4VeVte4XGq3oEHsrsh8VgYC40p4h%2BFS1SigSG0HJuTyoVwa8Q4MKDB28kGOqUBhefmcp3qFH07mpP4ayo85Lo4JL%2BFHFgQWP8PCA9THQD%2FtE0nxyzTaDTC%2Fv56NSU6COkr8sUvJSOPV06MMmdUkSGM%2F%2BfYWLJAllpNMy4i9lP59ufrJyQoEdzxM1E4WBYN8JPN83RiTBGxG7UTE8AimMT2bi3gIxtHzbCXWsOxPn7hHZmEtkj%2FCBbh%2Fu3XaG5uZS7XwoVdxqXGrzO74UkD%2F0Pz1Ejt&X-Amz-Signature=15ac7d989c5290253a668831a9a10616b0008b3f4fc094ee13416a6d57288d02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

