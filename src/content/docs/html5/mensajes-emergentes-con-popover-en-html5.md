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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUJBL76P%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6%2FaZPB%2Bf2%2BTAs%2FbT6tm%2BkSchFIsZbidKFvmxfjLYwJAIgPiTcaNFPaJxAxTx7Tgd8LVWA9u5GEwMpgZTFjsUP%2B%2FAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrKM%2FuTmti6xOUadCrcA6b5nGmZiIMHq%2FNXgE16AK21xmHlUuJGJIAY2CbE7E0gxq%2FJjX3SKODxp2jbx4SUBMOfV3agA5iBDzPQ0yHnhfiziz8rMeFEVKDWv5dtx9CluHiR6jMOU018V7UBfS1k2TKkzHwl5rm1%2BKq61HpFQr7Vsz%2B2768eE0p60Crshr2hasukt1zYpCUi5Ww%2F%2BB98jhgX5Cf5W968mhjHt8rPN%2BOS%2FZKAMVfQexmcip4Fk%2FWd2qAlOQoJO8m2SjpaGp9uY31oifkq%2Fqt5S8PWtPb5nNf9HWd2o8kmNNdD8ZtiX8UFNVpBpJKcAxLDWODw4ENBpNsa00KjRKQbsX4fUaKJuGBkHifurmLXsvZgYCR9BSPiD7nW8Ll1WlzL2qscReVSp0XH%2BD79h1i0mAe90EmJtZfiKvGKPjBFBJIMtz3vGsV79cs3NV3isJy6YTFFYW9BUlKGomB4kTaYtQAJDQlfR%2F8VECFrq3jGedaZ9TZk9nPAs4NNV%2Fm5A2a9s2KbkUncbEdGjpJKr3dsydjd1StoIA9slt10ITssHaivxCz%2B%2B4SZT6ER5vsfCaUpxJ9iYKiiTlY8mOT7MMdgiEH%2F0CmHFsDDekTXUeFkGJC0rnTUEiDH4e%2B4Vu%2BLdsLuW3MCMNOO3skGOqUBIHYMXJgWrGSZIzjKl80USUjRXWlFBv0qRdyGadnscKPIWkW%2F6Lr0Ttd70sdD4aZZ9SLsoUmZrj3XelQGnEXVFEdaLyzYJ5SlYORCu%2FeMvjPL6FXGHbB3d4i%2F7jc0CRqKYvBz8hTadgzCbshe%2F8aD7mwDqBMAUHTvkclL6dULVVA9iD7TZQsWr5GRzPYoH%2Fngm67dB0r2jzEnnc9S3zNhHPE22yQL&X-Amz-Signature=aa705f7b717dffdda212a8e36abd3dc92724ef26aee65dc507667e4109da67d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN73ASLC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHoKn%2BIJAMN5yJp6BK%2F6plMzg5bI%2BI%2B0GHtlX2H899RMAiEA%2FCBcc7W4IBlRvZ6NPvVDfxjpOxqJuAzWTrD%2FTa8rwYsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgsP6T2kIfHZlMQPSrcA89PyYV8fiY9SxyMxzt2cafXZrNlwBgr4tMmMIkDXymZwJeIhpbGbfFK%2BA0LkKaneqRa4rBCZFnMsyV9RYXZmGrklZ5o7lLk3Jiky3Zs%2FUgFunBjGSRwdQWFn84swn8js1k7oDANtltTo6hz5ZzNLwe8kkS6FU0p6jxYk41H1bKbmcgIvoMIhjeqliincubPp4B7UEiS42pP2ObUm0g1uiXyb1owELbS%2FdTPqhG8fXcTtQp0zZUeWt%2B6TOtL9i14SR%2BEdmITklzOc9oAJC7C8rc6hsKMM7BI2pkb7LRpnKNurh6rKj7Z5VMP%2FihkyAjsp%2FyNhrs4%2Bq%2FZfAesonb4ZfLT25NS9MK0oTldBU3MVV5v%2F0SeAdWiYvFtC%2FChzgNDC%2FeCnp752uj%2BIlRSVTWU3nv7Lcyg3kmwyQSdp8Zcc8xaz7FzxsniF2LB%2Bd2v%2BiSTYdh9d3vQ8bqWwlSeshXsWXB942bjpcyqFwVTrZww%2F6xP55lN8dOVHwoowv4mbuo5diQ9NqEhf3gDMIoels5RdLFmvjVfl4Bi6T5ADKinKz1hWChFArxoqsyCC47uMzP2wetqNSEM55CRQln9qtR9rlryUg0k7bTl6Tn90T6JSzcSucRz45bZd8coQ5ypMNON3skGOqUB2GXc9GnKrp6xvo%2FWb6eDVDhf0w89%2FvcQZ6zyxrNqSuTk8UZ8krO4IYKwTxtI6%2BDCf2E6lkG3dOJvQNDEvuqETfzMCteehOwhyveumxBf5YqZWuxk0yErbkBF8dbSxQTOwujOz0BS%2FM2myoBVeQq8TCDzVZcerSIRoOD%2BTkScdApDMi%2Bf5TuEszFQvAvOz1pt2ZbZRzwRSS%2F7L%2BQ6TtorAB8W4xOr&X-Amz-Signature=59440dc16a2c0a1816cf1d6764ebaa3280e4d53ed186f013ad2b70027b49a064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

