---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHAY2EM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICd5w3zBlBzB1vTJZ9kxB2jqgx47Aoej31Q5tX9unjXQAiEAzicmDA3OibkfJ3Kd%2ButwkaoIflM7KgpCFasC63Wb9vAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHtknyYVwtb41AfUuircAz2FvNQvzfrvpRwszTd2SDIkV17tvmJcakyG%2B9YDs%2F0L%2BpTrSs6QncCu2TMyHtChsZj0%2FuGO%2BUtTyZaP0Eul%2BKT%2BeYu9JKSeEiZUC8MpGt7FvJsB8LhaX%2BY3GPicGwNiCHpUOFOo1zCXk%2BTIR2Z9YtB6tFz%2BJt%2B252%2BgUN%2FWRErYg2ECo1IsRj%2Bno3I%2BhH6kvdcRUN%2FuXvoXE%2FuMtXcFq%2B2%2BLIgob27hG4TSEsmX2GLHnJHEzbIVkMaSjyJv%2BgGYnvG4zqcOObSb%2F4jsgzZa3KdGI0owk27VCqelbL0dD3sPsy78gBvxA%2FR7YkpIIp2TDoJNdY1jlEtp1LwJFWQOBkmQjvbyZxUbxjjB1MjNH18PXQIE8FOo9E%2B3uE1%2Bl1if1qUjmpx7XAuuGzUok37V7%2FOGO6qCPHp49Vk7WQdoFNfWZTVNn73Zl%2Fynt%2B3ObFDg4clCWBIyFLhbyUzH4ADgct%2BjQUSh3Hel%2Fgi5euzkCuNXN1Eb2N90p1hmOgP%2BGEgkUqKnTXFnEOHw5p0RQJOVvOWzgLRa5q0mHbpqs4Gh7EccXB0MSrKCJLGHLiB2HY621teO4KeTBqouB8lA1Me23qkybthTCquotb6OOOPLqbBK6RlDJVvoe6San8RGMN6RwskGOqUBKiMv2OQAiqTBGuWeqO3Ve%2FBP07q%2FRSOP8QB8MIVx6T7b8TDzrjMqDCDdCfMq3gV4sHuOitXS20sNcbAZym182Hq%2Brlf2wMhZ4H3gcQiM9pCBMtn5hWHgQaJSHVi6dSRQNI5lF3KR1KaJx31MPhLBmTZmgIvxaQPzREXSEQE1ngvsvMkgCmFrlTDiw%2B8WDDrybvfQXrhUYYVEZWQuBZtvUv5nQkdd&X-Amz-Signature=7a5036f48a79d97638bf51b0366ae9f7a8db9f2a1d4ea064c3b8f812e7217a95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THVENKTN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCVlDniiPg38VXcWvarYmrBP3%2FDqr6HlmxucL%2FEXmA2JQIhAIeFrqoZkVw7DG%2BJGI3ClO%2Bdu1VnhH1SEkwLF21iC8DVKv8DCDQQABoMNjM3NDIzMTgzODA1IgxOOaHiFBr3MUiLzC8q3APyJ85oWHbK6v6hkaCrEjC26tpU3QYazI8FF%2BZPGWgAnutocUJclV8TmiTGA%2BzgeSuW2%2Fbt9LCv8ss1rUIecIONWDQnqNNGpxcMbe2QJTlbzM23ewRHUW9AJay4nknG%2Bj10OXoLlUaE49n8kWOGyW1d9Jxo0BMwghJK98AZZ8bMNJxa6%2FgUYRhuqfKIaFiNA7mY89L6YPgG3Ud60mnDhYIQQPvxVPJX0dzxVzm85EWdd2qbUrDOCg4ge%2FKk19eG4EBBvXqcVEuoVdwjEvIcFIofTZiXfKQdkU1YnCjG93%2FgQTid92Lojh8ygeBMve9S%2FdR5GK9PBrIOuNOptD6dSEH8W1jNbmt9kAeRwZbNt4jUhtOlkJq%2FnvgRapuCIGV%2Bus7jvmMzSXqJb46SZOjCqiL%2BX%2FCOJGqTqfRj1NOJfMRDywiNOtKM3YeXVzgLuR%2BTaoC9FFDr6kCJ%2Fdmbkr%2BGqCnAYfPHDw%2Bm%2FrMVUpyd0bIzfQAEKeQXPmobauU7F4ra2kuSQOF0yYExzmZyQUOwLshUZ8Slbffr2k3%2BYlEkrlzBKU6LDWyYTlu1XZFDZBzmrbbIk1HV4BneSIu62SWOZtv%2Bsve7P%2FcqKmcAcsNwEDa28oT87NMsJiiChAjfnDC%2BkcLJBjqkAYlYM4tCJieQC2rbRJR%2FHCQoITZruqGRKp3EaQXsSLWPWkWj7SLMMc6vVb%2F5ItTS%2BoscSn0i2YmTA3WwzShZjKhNdVJjCqf7hCrnf6Vub%2FyoW5%2BtbYSanUV8Y%2FeCjzKVtwEqYCUWyeFOgoESx1b36gRiv5rbl1H0NOIiF2DKQf4xd3ZPJ5RzYCw45%2FL24Eprshif%2FzlcGF0TlcOU7qec8BBIBIL2&X-Amz-Signature=ea13936dad0b59106b363ed4ffbc8c71fdba00fb45228dd8cf7f493fe03121d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

