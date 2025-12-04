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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKZKVYD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCICjC1%2F7QWqS3xMDuPPdXXXSTcbHGWO7kb%2BYfuPW9s%2B2hAiAV0L980PERqu1MLJnQiEwEdp3clNiLMAV4aVs255eFfyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMpM8D8NtsBLdIV9H%2BKtwD7dz0w%2FEtSuF3mf5AgL9Um%2F0CRI79LXiWoNuvXyB8oMfJO0r6bLs5gw4Hy4Ixpkmp4XUMcBStrHa%2FiJPSoyuExjOBAKGFb3iT137NEi8qoVBIphp4ye23DMSDYjX7qkZg4saLjxDO0F5c2ljjUU0DbB1NqcXcbty4yjImJJaQSd4Sb2nGXPUFQXlsncFcNv4E%2FapYC3HhQNV5308DeU9rd7SS2SXyFOZlilLkZw1rUbxtLAcaDCiu2j6bb%2BH%2FKBUejUr3Y6z684GUNBYqEvkv%2BS7SG5FE%2BZV2%2BO4vOVDCGq03jPbqW%2FCyERHskuJfPtP49jf0GVPqSqXCZP1XAZgXFc8LiqYSZ8%2FsDSrfMim1Ao%2FR%2BSto0McJqn0E69CoUJiNQ1VNGsRs1feMV%2F87tvItkvxFGxf0uMVp5rS9ff4%2BmhLlwgzYTqXbW7ZVPxKNANtD3Id8icfpfWJG424r2IpNtYUIZsUCMiUxsCDjndBE7WivYvsrIi0PB5VG%2F6v7LxQjMEEPOmfjPqxpjdizdlk2gKg7lvYyXmDe2Yj8RUFbojCUbAcxw8u1k7U7SEKNo8d1SMdYpuTOS%2F%2BOIGF7c5W2QQPEtIPXIBQvDaYsi3tEr9x%2BdgAxL7FVxpmleSUw27XDyQY6pgFAVWEN10OTdxeSeq6wt1XTSZOBz%2BX%2BvrSF1bDaYuu72zAOpgLJOOoVI1YCH88%2FEC%2F5QiJ452sklRb8boOUgaLy%2F7bbyqIEvvBIPHK0EONp8KuKVe8KKwXnzPNbXkEkGWzSDsZnw%2FKPQhgETFl3hS0bdwj6vNpPjmBNC8BxIf6OKcq9pMuVWLHq055BZjU7B3b%2B5iJPhk5cBgGZZDfldq5euD3oXw3m&X-Amz-Signature=76e2a829d466691dbfdec93153f5b9fae79a6f02388f68f5558939ea9d922fd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZERSFFMN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQD8b%2BXlOug%2BHkyenJ7q1mmoUbJqoTHQ1aNr8nVYxoWp3AIgAsKaUOAGa9BuRq1jyecTYfYMFx26RzUIjASVLIBAxe0q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGr23EBcVtDybJE1YSrcA2e8Q4o1YpPtcr975Twg5R7KWAqg1FuM%2B%2Bf8fBTlctWbo4QTpAmNLnHQTgeRumTyxXXut7enbJoPBBMYLq2CPzEaAZlve1ptp%2FHBoUdWH2UE43%2F3y1VXSRXUNDPjPq7GmL4keqsgLaZWQofszdHwGf3O1iV7PQ%2Fo2O5dd48ByHSGKntDLCeaQK9Rei1saxmkHfNsj4XrEmYx9glGp4z%2BKRh%2FKErxwvhzODSB3xWe7FZnVFOUNbWIUDQes9q5BY43niduTW0TLmIc1H2vP3qkAKU78bP1exmwLwabf23ecnDln38zgLDow%2FduuC2cVDTPXdeLg19qPq80QSlMsw9mb5MIffiyHcSKF%2B96wuH%2Bllm6KCx2%2FZOVFrR%2BhLiEQtzFEpPTop2CWES813n9uzKZ%2FPxxUPZZmGUxw5dfcm%2BzqYGTlAUxOPRXNKBdJ78TMGPNScAdC3ELGAdqDp2ZqhWgL3rCcxjL3YPlHewSer6gtocktTl9ExHDlpN6oNAxUOwlZEQjSX9cSC%2F%2BF5npfe32nBPD6Uq0WAJOcqJzNGtdQ3jkzMlBeOUga70rGjboNw8i7aTcUX2JnGoVzLLVmjYDxCWgTkJdqxUmHr98CYTlDOnbs81QBug2qvvj58%2BbMIi0w8kGOqUBXK91bd5lCyJVYWfEpxQr9nnTXRkWJfkYSYdM4fa9Av%2F3WCJtJX7QBcj%2B3EkYtgqmr%2FQgk4NhwOoFjylToWpzXYLQh4LwdZOJydRPp%2FuQ8BE2U50wLHDPQUn7pmosaEHc1dEOaqRXnJyCUMC1U1RhyCTB3DktVMKk3%2BwojLanhLGffXJcsUT%2B1De58MYzoASSYftBj93Hreariclwz%2F4gpVuj3Ivj&X-Amz-Signature=5f5a13bb781713d20a3eec8d7b4970c4e7b2ed9ac4ecb00ac834a29d21047d45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

