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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CSSZR2U%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T043435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCQ23piM3j6NsJbXDQaAawvKwzKiqgGbOXOxwni3Fj9sAIhAI9i1wYkugNuDU5gJYdoQEvCvqT1A4vd%2F17nq0yvDfVvKv8DCCIQABoMNjM3NDIzMTgzODA1Igx2flfOxCnBy%2B67AW8q3AOghUjV0MSnW73pupAvNxbewFZE3oeYW%2BI0FB%2B12gV5N4E%2FdygfNk9uMDxndjvWJvBk4SjZ9lIGr6q7vlEpMTXQJp5DfaUVgEMzhi%2BHorGceSQz53Fd257A0t11QBgcoLOBHKF7O8U7T%2BNhKaXRvOpQAr3AOM2nWxgsylSmaBcNqU%2FN7cCZvkfuX2NlFBLcLSmleg3bWWNU0r8Fzxz4mo5TzJrjhhkJeziJcxLd1rU4fqF6g%2FqqpDx0mAapjrvtT5FB6aawzy8vO3Vf87D5f39nTxMIzoL1kypguOoGG37Mn1xE9tFZ0Zb%2FTtoEp32lno6UpYC3kOvgT8tYh1%2B6OK4kk1P9DKAfe0qBBW%2BdbdFDtk5Kq4ALtJ8LQLL1QIQEZuKi%2BgUjb7oJMfOyywDOGZVdwSCKJeIyK4PHD6W4wHR5V9%2BKadj4heukAILdNTSYOyIe%2BZbrg5Jd2tJuCWRdza7ryHjGXLeaEEsEk1k0CRTKbWNHdPHic%2BOGMQP7b09mLoFMgIwmjuogkDzjgSE0KVDxMXv9dQm7FUzeBoC%2BuS1CVWaLCbf7IVqxvVxxWj5q8ZgFDQhUlh0swlglcDpfhpG8VUGD0xa7Tx%2B2pwZImQfBtBL8q3ujIebHk24udDDWlr7JBjqkAREOzrcomq7macaf0zG8m0w%2B8mca16oiFVsuIc2n3QhRhcvG4EQIqVGlhEg7BxKnuU6%2F9Z%2FGas612fucfHEUAznaFB0cA2SMiuNkCXAQ%2F3Eet09dyjTBXBTnEzKoo2nsOszLpDxjporD8bkjHOvIz4Q2GKuF6yak%2FQ%2Fgtwy0GLMSzIdqk9aHGLifG%2BSn4NUqMIvsp7Kl8fJAHZ%2FS3UCRjqVKXFmB&X-Amz-Signature=27268d0e997861fc54b79b685feb0cd62c3d1bd4a9210d8a9eef5b0c2bf29ce9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665MKVFZ7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T043435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICr60P3cX9irEnvG7fTkT%2FrjdZP%2B19FdArjmxZ%2BeMfmqAiB8SrnTHGycz%2BLPKekJ9NKP8NFRafRvybJFDumPh55lQSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMYEPzmSIEu8ZGWQB%2BKtwD5r3KMVUqNR7%2F%2BjFF6ctAFC7uguloe6K5T2%2FKtYDUtK4O6bgmZDPuK%2F16USUmV5vDi1uaQCRPNKJQUoBv0y3WBHwYSJCzlfa19Ix4Sj1XnFnvg7b6xd%2BaQUL1qdsdOf41sZIERqP2GGU9ZWIayq8%2FLJp5Mo32jlr2BIXGZFvtNRJRZXNDTAmDZieGAslJvw25pux8TO8DE23%2F92yvBVQWEakg83gyNrvH7wo9cXqu2QG5ks5CtzQ3cWgRKDhg5mLh8MdQTRZU%2FXD4cKY37M1U%2F2lesNU4C7vn2nElCVr%2Bep3osZ0o6yt79r2A67ICF3nMrEGezaTEhRTmAq1XZ1xu5yDEhUp67IApOA%2BNc%2BtPeBWtVXFBT0liX9aDRcy1KSm%2B0ISXac%2BaN%2BXN1BlziRU4vFedTQBBjTdnueJtVAQToxeofSEdH8HLmkfRxiornATNUmlpPtGADBBAVrF9Xa9H31bHXeMr4%2Bs%2FZFwOxXTKlrTNrbku%2BNgz%2FSC81QxVa280h6fhdG78IFPoGW3GvLG4gBjByJ2OFivOFsX9keyFr89NH8VxMmc4S%2Fwwb8GGbTm631F2jQJkh6EYmv6B8UwQCeBHgze%2FTZfl1C%2F9d7YBCYHE2IIa%2B2E%2Ba%2BFrcFMww5S%2ByQY6pgG9s2JtExxvcr%2BS5OIwbOk59FvArfrCYDyG%2B3Ivw4KOjrvztd5jqWvMjAfP%2BOOkYZ%2BxMhpbgKk5QdYOayFdNCfmr%2B0KyYh%2BAmNveAr8T8cVpXtbq%2BO%2FQ8XTHbiUxwU%2BsUd2Xr0JElOBzv7bkDf1UJe1cV35Zr2i4vfCX7cU%2BH6NMx4NM89uwbkSuM%2BxxxFDH4yXxCs0loff3rRY4YZCT7CUY75kAEic&X-Amz-Signature=738ff5c35610eadbcc49f96559f5b31e20bd0b2371ce69b3cbfa413eda327ead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

