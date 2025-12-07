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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP7UDQ5X%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T080613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDG2kKdeEkoG7PjB7tF3oBKlEa%2B6erVuhSOeUnhGXNvXwIgB07%2FAvmj%2FDR8Ncw0HGRD4tMIvx%2BXEY2B0Og%2FNwtQYeEqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMiA9wYMyYP1PE72yrcAzNDKpEzwMZhbD4ykGcYaFZJtT1ZLK9u%2FW3y4DUFf2RmscHE8O2ilj1T9ABW1d%2BXbxGwuDQEU6AyJnc3%2FjlQaQybuE6l09tM68OvlpPm%2F7q1MVOirdK897wFTgdYo3JVNq5nyiikQ0LOTeDwrtDnOz2BXEv3TV0TtCHDRQ79Cpls9xYddt4TePhjntABug3Fp6uQ1oOti1FmuXIpKPDSAIXFaF6nInlZ%2FNKiw%2FGeUqlEtCUojwi0uwXXRVxZ4p3tA94XgTtm8MrOG2gUFdPudkMx4L4qnNwgtKP%2FArn3sTnpSTvLeSMdTPi3%2BOa%2FoE0imyYRslCqlg%2FenT%2BsZ%2BMdHvr51uXUXvQGdH9r5jQOkVoz6z3e9eLhQIA0SxZYWPTkTL7k5u6bDGPFxBCWN9mv0e8kefJcjIxWPLQpSawcss1ZxXfPJTFt%2BjfDF%2FYEFKFicfmNkIwyPIEdKH3VZEAhM0SUVVUK65CbUMBI0bKMDiNJSyUSmVLscMw379YDdKF7Od5Xg%2FyDkUiS5O7xrR01QhA6HkZCCvAvQh61HgAgiebkdWCuUQaO5gNkm2bvMXFxaTDFwNPekhkWC3PC6Fkm6A3LyqoReJuz1KJO2im9MvXMzBLPH%2F8ykzlJ9mRRMP%2Bj1MkGOqUBTeOzNwfRer%2BqjqmdWqp0JvhJEXeLXLu54XqP4c5OfpgARXkF8ONlOpqmQ%2BloPi%2BfSv1%2FncWtbH5qkYI9wi7aEjDsivLMx489RSvGM0pdqwuETeeIadGIDUOmEUv0wLk5bhwLM4WYX%2F3G%2FFk9%2Bt0YiGa3211Z0%2F%2BXzmPKCkx0JyoU1m7oQx2MX5aTKRIk3jdM1kwITupWhatksjF1uGeD0MekbYkj&X-Amz-Signature=7e9a82bf662e68ee39f8af1ff75c8ac112e98fe2fbf7e524c6852e597cdef8d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OS7AJFT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T080610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdle4afXrBUm5hpCdc1xj8U3kM2QO5Kf5lW%2BZqWmAQLAiBR234SLnAjdkXVqpqIv3RJyYGa9fM0F2dcgDSC8lTXQSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0UCnObKrYoeMUZY2KtwDkcNhvI1qr5QDqXVNX2VXmk1RvlZPcP9wE6wjrOLMbYcWRMQdZ48hIwcB4HkW5xjdEYMICczEAIACrhM0y4ZKTi49cWlg%2FF66FNyxH0%2F6Jq6w0CuIOogZsz9X9kE1kgPzLpichSN%2FKGs1tpwRI1uMChE2zYAhM89Dp4m8tVLVUIANhoiWswTPKeskLLBNYDsmmB5Yy6roIN9bLO4ZOj3lUmCWlkidDc%2BLqKad%2FLkf3GK4kjPNVFs5219AJTwjtsBXTPwgNB0TU%2FuERFZLWxYa8%2FzMVxp8HZFlPLATtVLXoHhqNQ9k7ANqDxTg8%2BjLhPc2PdAp9c%2BnMHHJdfRuiBx%2BXZkNkT%2FnYf%2F06Oc8HRfXhV29ohUKHq4vU%2BP9NydlDW9adzUkQXLNIZwjGuUC%2B%2Brey0TGDDwy9Q3Xj%2BaOSAubgISRE4Y1uAvBjdkU%2BoiiSj6sImUWA9kRyN5vWiiFx%2FJkHVH%2Bu%2BWh2MftMESv7J2ze21DX8pFnHkbXg0vegGHXWoUzkISAAqzuUXUxbEixyaow%2BQfPXLFe3Im0MPPuomzROlC04NP8duyHnVR3AEGZ%2BSo%2Fb5slI7%2B5PFbmbHRutxbbuKiAAaCmRMX%2B1xq74d1btDn%2BTANAkUUiexwzW8wq53UyQY6pgHmkRTse31Y%2BHvIHoShzWgpnzD9lEieP9RwhmeWtoVQwpYP1FdQlQGA8%2BiQhFBgza19xoZTSYyOqpkMkHujTzuaj%2BT%2BmfIe6bRT0Yni18hxhNZ5VOR2O205vR%2BqvUHzhnqkKFs1htlsriHHgaJWv%2FidBUjhUcWySV8%2FMh50pufpDNrDU%2BI9GOXWYNOkXueH354aoqluxqFIhgmsWTtvilzyWRliMo32&X-Amz-Signature=1d54ca7d2eb65f8988be117c8ad0b26e0d26d29f56f0599a47db6889faadc07e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

