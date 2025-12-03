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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPTEEIK5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T004639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIFCX9aVq6MhWVczIBb3CV%2FbY0vbthrGPNt09%2FGJ7OyycAiBPkZsZbY2LeTOPIN8uYLg3vt5Mf4yhWO47h9FmD9rsdSr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMJnlpBjI26Ih%2FuL54KtwDPlzTw6Dc2aAB2Z1vSknuxPm4u4zidclbVWAR4UdE60HzOwP0mKB6QLs%2FVv1zfKK0ZZ2w8dTaO9qDGktF3LIofUe6f1n6M6H8n7A69NOfaC6l4yBoYBDvo6lmVFGX9zcAxEQTFe5WMrhFfUdUA%2BGXQBw5p8Zx4yrmi%2B6Pj5fF5ijxKsTP%2BhNeFPP2kk6upR3dk9SgJ%2FB%2FJdSolGwB1cn%2FG42gzviZc3JHmGCmfMxI12fWQb7uC3bVkXaqD%2FuD9X5eooQWiXSWi7B2aEs0VAF1paef0c7N1HtPJr8H2j8YnBk%2B%2F7M82PLuMgoPCjAUHrRMl0%2Bgo%2B99j1zH8i1%2BXyhfUqinmpdNDLorgDG5RuKJ6caApGf6WglQ1EYuioG27qpWjJarhd5D3I23vNRWjCcKns20KrbU6ahZwa2x6KhPXMOTciwmFtnuFKUf%2BHEgd84gjisIMc8jLK8RM%2BKoOUMlYeIzNk011LeVWFrB7wreXkRBbZlp0Prnj8NJgHf%2FcjfXRUHlikbYgRGIWW6Fhfq17nY84vjQDl%2BmaOVYcvlxRDQ32t89ex%2BVtcEBFKgyZEPn3PPYO4ECw%2BSnLKkMnR02rRAlHWYA3B29go5TS1N6zISAQDUI5RB%2FNAqQ8qQw%2Bv69yQY6pgGEVnNoC7wgyFC8UwQ0z2QWH%2F3bSuz8JgOXXe9QF%2Fh3qduJbTSUVtwnKS%2BmMa5c4FoOZ08NYTTPH0GYMiUgzh3sxuLYyO7utyPeFxr7BPmhWr4Vu%2FfrGJXley4agdIxOCImXYOY%2FWiY05J2D923mjHZgy6mNPrV22g2sU6p2kfna8okiqOHHGZzg%2F4JvQ4Ca6J4aZMLl%2FUPDLJWQKfQuxUVcrjSGeB1&X-Amz-Signature=3f3213ad42dddf5480b47db38631be7317e681b8096c6bf638c0039148ca7222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3IQZMJO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T004639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCcAHvlyrTE6Nim0g%2BqHwXPYYCbZiyFGlkV3oCXqSkk0gIgQ8SKtpLcf4t32s%2Bop%2BqQTFQbIqQAUax%2B95M6ATidC7oq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDFqgopVo9Cmi7vMHsyrcA%2BOkWvkmiixtxLCXVn7GyK6B5up3polhrM%2FYd%2BwwmWDuSLXNsqAq%2B%2FS0I0B0Y%2FMsZh4hQLq0dMF8ODUiojGCnOItPcNe1VM6ZAftrPFCTIxAaMAvL896aF%2BW47ah7XXVWP%2BH1SHzksQQNiQKU2EqG%2BY9asd2z6aECkNELZuZo4eq3Y7Qlj%2BiYEWWCJLSK90W%2FzgVMDMduQ8tMoK5xclNYGv4NWg6kPF1QbkNOlF70Xot%2B4pNbYsVgQ6YlFY4vX9MvxdYxZ08Ot1UXPl%2FomEcBWKeDamnp4mbCRqsYEijdlV4rOgn8n9QMsAemc1LR5yPWOjV4BvrhfHXuHrzPo2ypWKUl83pNMNIaG%2FEZaPUFNKgOtP2yDWsAiDiVhSv3V2qgSGTz16R%2BKjk1fY5Rm1IxqfxBRQh2Ot72FeujDQO%2Bx14JRWc8GbbHzbWC6npCzg6x4Cw9NcAYoFInqHu3Wb1XGPkhkYpwhKeHR0ku5EYd9awRWZkc6GrPEGET8SwpXtaKKVIEHV5jwr4yY3KJyKVQQzZmzSI3VJ83P2Lqsj3a0cXWkJFF%2Bdy6lDJKGvpo3lAEbgZztnYnq0IYTw8t36gNY4ZTQybx9YWoOtQEZUdquGhRmXp1lqOnnD4CCkXMKj%2BvckGOqUBFaoE93o17N1cqq%2BdwQKBDesgiK%2Fuc0PSZ5MaJqEOR8v%2B%2Fs1R%2F99NMhWHT9bpGetvnIyyPr6Q85tbN5c7Cuu0XGzEs%2Bxmz8PFsIVZjFd87UwzwPMmOKzjyyrxNkA4Y24HBAhn%2BKfMISp5cz5VTZuDInnR6Ld8u%2FCsqsYLulONmDko6oszkITgPtg8I8UhdxwWFXYcz8JCZH3V41E2m%2FiGpWniweKp&X-Amz-Signature=f163e1de411a5c689b5ac05f4cca5f3dbd11e16e9c7e67687fb62b5a25354157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

