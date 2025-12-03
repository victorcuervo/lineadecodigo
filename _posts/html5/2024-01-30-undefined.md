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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBPBLFPB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T001450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCFWUm5XyVd%2F%2B%2BmkauF%2F74h4vBCOzFxXh1GUL7FkGGf1AIgQiV6XB0hK6xqpdLDcTSi25ojTLLaG3fJM0tQPkNAiJkq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDAuLRxOXvFheY5F6zSrcA2%2FtkMWO8SXpE%2BtbB6FWDlPwv3mhaLbUTDjOLdBb%2FQrTQNtZ1ROeDqBcIdJhcIAuuULAZdjbI%2Ffy7683PNfdo6%2FCINky8iDYe%2B5wCKbzrvCVlPyREDL52FcLzUEF29Uel9jXpFcjbA71%2FhtF%2BbQNIUdR0iniP3MkGZAoVxJOorUBco%2Bpify9O5U%2BvoAmAATD6%2FMLLb0%2B56wBk%2BCAcguBZfV%2FOp6hd04Fo%2F7ED5JlME64UGuYZJeeIbS3rakqhxgmqF4MPSB6%2BAiL%2BYSOFZWTGjKT%2BHrAvamBaCxZ7l9TBfJo5aB%2BJWrRAz%2FkeqTb0WOfPfs0XKHvWaJXsBXuLTigrBeT6rmW71aDwF10VkoITvUNEf9RvJbSc5BTpZDdpN%2Bz2WDredL3U7cdAm1AtOYCls6ilFn%2BLYiV4og8JettrTTUcsNH1s89sh8E%2FgIutzKzNb8NIRQAXgmanPxwL51J08pzq2RziCahtPlS7SCcbMUYtQ2X2LvxE62nVREBQVmEUZ189g5qv3ry4ORA5NRI8KJjgZcowFVzLOcuNUwNCNP8sLznRV3W6tHMLAuz4R5XZGwbUNk7Bg4lqpGXLdcfCaQ0d5gqwz6wL4VLTNS76O8Mvioe4lVVF7o5gHI3ML%2F%2FvckGOqUBA9ePoanHFuFGSbEzU3DXXSH4m%2F2XQ7XRxzYimi1ccyetly9k5mQFKiWl4o%2FnW8ZZWSceVYP%2BXoULT73aVbz7svlHlpobbZTlxQ1iMAIG5b8QwVklssqwI9JSsMxgNQX7%2Bbcy9pgfalbaEx%2FXBlbRPPvb6cQqqiBfB45vhCXGl5%2FiHJDlyrmhv0gSqQg5gjSGuoQo1h2MEta8q1hQU2VrUwyyvPeQ&X-Amz-Signature=ff10096b612ed184f7694a9e91bf1de8f2409137a21a95c0bafab216e3d1b951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSYTK6IV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T001450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHu2ksk174TjmGsjpraCrg5jjdN5jzskBkZPSraKCTGBAiBT0yEbfHzSIy%2BRUjw38M2RKOSLkYDSgHNERrv2F7KnTir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMWO1KM7HwRCjfRurOKtwDehGHskuLqJUTktOeDx%2FXdVPFCglkO57UaS9yA%2Fs9ap34k437i%2FMKEpikmar6EOr5EUUZQW845ETjCCDp39yILM6jwyFsDExDgz4I%2BThlHTKHm4f%2FBxexsoKX1Bu6H%2FobzbuCbuudRvhETcvk7jeP6Psd5LUgJfP7pIe%2BR9TjBV2cG3dBkuovpY07u%2FnDLQdwwewyKxO3oUvoU7GQx06j6m1%2BcP9xlyML%2FGIWQcYcw7McYiEl5MmyCqwm%2FfKDIiN6X144kA8OuG7ip%2FuOGgoBoLjJKFtm%2BeOWAuYQePFJSn6jki6%2BjFYwzt1RO2pxHdcq1G6YXT%2F5XvfKEG8KyfVF1zQmdOy52KBGYPlyPQCSEe2aqAQY35PdOMWuC%2BCYs2AblM7GwgWZiKhAt1g%2BiiN3ndsteKZhHIR1EYZXfnsIeYJ5Cew%2BLPEdViTVvnZJzT%2FGOWgn0w4IT4QE5lpy2VyDrlzMo1zg1gdYo1s275Xj9pr9qZQCeP5lgSxe1KMO%2FaWQXebhMW2j3hzCCHb%2FFG7Y195tWCiaRV%2FOSJhtx9kQIF4KZeWolw5J70bE13mUmnSu%2B%2Bf3sgUj0NJTN9A8uD0VlGotYlLHGCdo0rxrJcB9ZxEyUH%2F039w58r9GAJIw1v69yQY6pgEzMRtMA4WEgWaKjMCcTpyi7juU0gs1CN2S%2Bw7lZHH%2B3%2BfDmwcny3pRV8B3HO1cNEmvRReBEh2quZbzRR8EbGU7U3WoRH3WYqjMBLesieDBFlTW1NkYJKOT3uB75dBL%2Bv4h8YyaPBAa6zJdFXemU7Vc%2FsoqExnKpFq33ZS3KdwqOV0RmKnz4geeiFmrP18sUGzqHBzCsbjB%2FWcXhy76cjXp%2FrQNGVLy&X-Amz-Signature=2d3ea5f3cd40cc13c9d3ebee9af97967555f4c9e6ab97d8aec57ad7d81c0d7fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

