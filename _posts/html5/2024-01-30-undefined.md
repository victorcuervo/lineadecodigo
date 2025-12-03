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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GE3JR4G%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T034742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIERH%2F7bq%2BuSxkQXXaeqbgtcPXklE5upjRK53tw09DRgAAiEAqTsRYeZeIOV%2FPGJjQQnHFJAraMOewhJbsV8Zy5diT1kq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOp%2BX%2BTN4sqljDlzRCrcA2XyL2ZZDf8HiB6OdVa6H%2Bs4i1%2BdCS%2FsrT1NAKw2sg%2BWy12R05FEj38A2c5CDMBjzT%2BNfb4Mq9YJa5MfZVXQtiJN5vjinCBkdYIzogTMXHVO5ytGkQPDJPrItFE6Y3huucHBjDBXpkts%2BW1Vng3%2Bit67mslVtxBMs%2FBNhqbcwqnkYjp7fp6Mi5grbd33PZDGG3D2UPgqF3TOyLomIDa9ylYRiTWiSL%2BdE9En%2Fg2lsi5gfG7on7%2FtI2dV8wg3vMCcr%2Bcy8xkpOXBiqaTZPTNs2tJ7gOH4Y%2BLYGYZ6WenXyjjTcIKWnE6Z6mx68SfjXrbmPGyCERO6jcXyJ%2BByYbkxu2q9Xd7zK2GEwtSzsKsk9svLYP%2BArFjPxi8u9WH3%2FQFSuU9l8v66uhiLLhFx8mngt5lRP0CPuba7s4hHZEWzFVjy0tH4Erv%2B6UCyfQWqtaKZI%2BZmBzAgj5jPHxqkVBDlJb2OJoQaSbuL%2FXmKTakSAHmeExhqAYIdLIeX5CjpyJb%2BS4jdgVl5CJn8E0lPrnTLwgxdyOewzOhuebc%2B%2BnjJU9CxayRYcZ%2FI1cTQmWCoooBXDYoKJXqr4E81aPj4LZsQukieNQny2Bh0vBsQ1CWEmWhyChikoYUpE4XYUelwMNyUvskGOqUBrd8%2FOJfM2JhSoGinZ6lWnrY1dTdUlTwlcpv5FPAbQHN9OzoTl6AhewtAQDaFnUyksvw7X8wigXZBrqr03kQ4vh4hMFMAIJ71rU%2BWEJBHyG1VB1qxBYWwHN2cXcFNHW9E9bmTfR1WWB5uUXqiPvCMlGfyfJvjRrL%2FpmMdP1m%2FnhQDar3GcZMYNgvjJM7SOCbXr39TKl508d6jYabwNTboh7oF7u3o&X-Amz-Signature=27deae8f89ff0d354f324cf9e165f2b2239a9401feaf83bda6b6594b8c7ffa32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV75YGC3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T034741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCa6f54QYMhIx4TJXqSFjlld3dqdVR0jAKuGRhbDTsM3gIgFiti6MOJFBMDKHOEd%2FBQpKuNspvzNyy8BPWcYsWogP4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDCzVxbWqkVreyoQKiircA542uyM9aXcMqFWCUtlcUNblQqkJZCf%2BqB9s6%2FYowsVsQboZ8dfLzoetG2NMwcmxFe%2BoyuV3U8qdM%2FWQ2YX%2BWtngKgKI4Di1RHgl9VwsF2jeRX%2BUxYfJnV01mB%2FbssP2Qjd7%2B886QhjzOaC%2BK7Yz%2BLH3xmrC%2FJyHD%2Bf1sfJXl%2FZF2o4TxnywpY1DMKqHin%2F44YFbtOGCaSSEimKaPPT%2FwuF%2FRIhzdsT3LnU%2Btode7b5t1QI1j7j2FrD%2F2Z06MIsXGazBwMJhiei3ffDKM%2BoBdVNot5veBd12s8dKtm0OvqW1XY3TqZ%2BCrWs%2FHCFN4L2yf3RXdupd4OXhOliUuSv6a9ztmJDVvjyhZJPUZR48D%2FWV3UahqSCpeZI52VkPxDwM9PRADMqtaalpu0yEdkiKtXErzVijnu699VY7AzCvzQJXr2C2g%2BKm4QYnMBz7pj3ztLe5WwdSLCziPpp%2Fv2MT%2BwHe1E8qBVxDlMlGpQ7dfPYejpcFOut3zJCK7uVlw6OpPgS6ipHrsk7u8ayj91hf5v115KrFUHGC6wKcJh25P7bFL4JfNQs%2BCia4wr4ej6w%2BU8nrR6PuyA7DLf1pPs7E76nlwLQ9aPwa6bYlBtPYzhST%2BE4uBrWQjsCoIPCfMLmWvskGOqUBupULsUxKArlg2Wq5iMR0mEDohhkCG5qqceVRmDEFoeA%2FWhRoVrkUurahu7LcHgTNblDbHr9J%2FIfdPVNzM49EKPFeizzo90Nk%2FOT2R28JZ8oFV%2Fwz5RIt5hEtJCAzGQqr8XWvVul%2BGZgUq9YD5E2CaV6IIRMtBo2MC07PVXNIihyQPafcaZYsP6pHIxejolSWolNWLXrYdiL0YpXMSQOVHvIL1m0f&X-Amz-Signature=53d5bce142e50065d502ce290985ed21f9c175d7fb8bcb95450cb761897da639&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

