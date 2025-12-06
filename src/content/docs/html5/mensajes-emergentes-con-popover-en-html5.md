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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OEHMVG2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJDyHBMBvq52hu7tZrpjm5q%2Bd0H%2BQvB34PuvcTYxH7AAiBT1zKyfxtcA9T1bc4SvCPa5zlsrWSPcGxNvtXDgarV5ir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMxKNMZMqINLjG6Pn%2FKtwDZWCqTUiv5oSz%2Bq9BvHDBOcbM03khzxpOarI%2B08z0oW479DOukh7XZTDEgKA31xRqB7xU4vVLuXdUBc2ipY%2FxyxxSW83HdTmy1VJbn1VlcEyZYCD0PGumEY8TKP4qcTu1mQeu%2BU1ZIFdhd%2BVOGC%2BF4FzVOSz9Sy6txpO20ulV8Bo1UW1YC6ZR3F7tXbFQ2NsHHgT72BbVcO%2BhIrdq28MxtssCx5L28JFibur9zBY%2FgugNiAdv7Esup3zhKv08bpmOHz9tJzykgyOFxxPD4VH5fJa4xTShqaMGahDfbfNUQTJjRa5YJ2%2F9swim9DUulAyDMXBCoHt0tMT7I2GYijHHiO5yzMvkrHZrAowJTih8HC3mGEuP%2FpziewfAizGprCZ5xZUYzvMude4UO1KldwgraJ4Iny1hD%2BntA6OwVLHa78zUP%2BgbBqi3DqUb2Ad6lHfm8KdU3AgJeAnMdbAVxQtqCaubLJ8FqXL4KeOER6vGw8E9xObB%2FE%2Flk670YWq5iDIFXeebrkhhFQRZ90uTj6OZ3KLy1O87hM9PAaUkeRWUJsRtmsj0R%2FWe4bodigkj9XPKVCIHmRgFu7GRo86f5fMANyVRddMkvfcwAFCAQP56t4abTkb%2BuSc%2FkfpXlo8woOjNyQY6pgEoQvvdPdnvhmohlO1e8VoYIZHimYXNrNPeDQeol8ZD3Scab2V%2BM8yw7U9YGiXMXXWCWOWrf1GnIi19TIMEnhFE0FUS5FNiUze%2FtO%2BWhUTI%2FFR2L9alQhbkumSmmjmo5%2Bkno77iMHcr4faDNKvJxFRa6P6d532NiNI%2Fhm1jf30bbVJIKPnGtTKy8Du4d%2Bo74UWlC94LHf7D%2BUbTEEyi7zf5sNjwksUG&X-Amz-Signature=5479051a67805f387f7fd0156720ab7cba5b3d01ff0952af09ffbd77992512fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666GR6ORY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrzl3J%2F%2FIfe1akTcoSYGa7wdUI3lWbPl1yoBLzmStlBgIgEMe2GyHN%2F9bVl4vt7HQYfakYKd%2B1EfToytSGDosAzd4q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDArGs9JWsksSzJ2L0CrcA%2B%2FQosHpZ2FPjqYq2iNe%2BLw6dDlyrcbEQuPkfVsEgOHFPDJ9%2Fg%2BSYyBx1hMEyBexcFRFn%2FwZNhg0BeHGNvvj2t5i1SXrNBVWxagiDZfVvNN8%2BCZiBNkCoIfKWJvAPXZSrigdLpdcs3F2g0sl0yIpgLDl%2FO%2BJT%2FnMLi0mlW%2BXGjGPrf1W2d%2FfhchKk0ZBF15bQj0YRQdFE%2FwfPCifnhx5EHG5fRGRRD4SrHjsWVbIIk8nQUhYsg3J47UxKm1vJnxL0SZYBsf0Sh%2F8xNA%2FdlpeIvWbX2XfmtybEU7NDSQ0ui4BuU8FVvkXHz0D4GNvLFcR%2Bra%2BtMABAvZqsT7MpKL4TZoCRuWqnB2yoBSiIEYzbIDoEjfaGU4BWFifGSQO7x2sk5PAq5V00P%2BpgASr7NQ%2BxaI8RooBU%2Fr4cOYCVkIeg7f%2F3RxcUj94StfEhiWrwh8B2vF7c5qq%2FFMV8%2BaVwE8CS4z3XIYKpNeR5Os4F9BUKF9sM5j%2BbxuxiJry%2BYonqC8PwXDnAO5g%2FL2KDrNFGm%2FZQ4TNfvCWdCRZxh3dJAyrHE8oVhcUBGrThHinX92y4kmQZx69jVIW9sWQT2Wih0pComdmSyk1X%2BxvRxC7yC4YSC8bsQJi5bYTUHwb%2BE9KMMnozckGOqUBZrRHaJijNA4QFZXec5sbyzWhRnZUwG7XPfAIWctw1cBvuKgzJper5KZV%2B%2BG1kVl96RBKCbgsbudZOujXZ3etxyOPMUSfFFjyMUmBzTESHrXD5sUnY%2BgjBfhm0dNLoWVv5Uvw74rRfRcLpNLteIzFYI4oCitVN9ySiU0TS8UDVxjpSnNahF09D9DDGp7j9Bcb9v14jxMGGVdngzJUqQOmX5RTUmxG&X-Amz-Signature=0a315b03c2ea96fa77464b2fc415d2e4258247613c3c07dfef2e3e97e6e4533e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

