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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667QED64G%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7QHu7PkoujRXNChXw9QJCXwSATAeiDYJif7H%2B6UR%2FJwIgHMrmQqDEie%2BFOwqwulshNHHgPFP0o%2Bsr6pgiInF2jp4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIC36MsdcSHrRTffBircA7OylnGkcsvfojVx98000wZFiW%2BCO%2FGxQ9Z0DjGDenQ3hRgPNCjfNfHH%2FVjs59mpjMljTdK1G%2Baf5VPJrMz6SJo%2Bot34ljP9iQkl3pj%2BFD%2BPy66EL3kP%2BoWJnFbFI6bJkASpWNymBbo4vIpmJbzLE5WB%2F1E%2BMBI6u5pVJqK7Fgo8Yx8JeaFqnOiUYQNDODB1Cxm0u%2F9l%2BNXDkV3E4DJM1Q9T7Uiu4mQxMn2ffXg7q4EHH5VqxD3z0XjJtO0RPToBePwfHJDz1LRt4PdWDLHQebeUek7uaiu%2BDJh3g0nuP9w4i0qn3F5NoT%2FfdBL95G6x0lrs0EebRW0uytxT7L3K%2BKTLWa%2F2z0ELaDjojuKgHUyazQUSqCsbL9hZZdlcw9ZM6CrCCznSYOiQC5%2Fa9ilDgFSkIrqdOM3WXJRijxkYyF9oOvwTKPLc6%2BzQ0Z7KgTprrTyT6VpcFccOPPGPc94YOGQn7P078RplmzutIjPNqByuZZ1ZCTUIs8lRlctnqXqXS4vw8YQNNuD2aw1V0E9PJbGmoOen2h2ciMEAr7xTPn91RzQN6j2ptNiNfMsGl%2FWztjPOYFX8IE%2BRatILWlCkpbHJpIZpt4poJNwTvnGeP5%2FuoNF4ezYtr6X6p%2Fl6MMjK0ckGOqUB5Ez9VuuHloWr%2BotuYEwUC9xXmm7tJYumW07aIR2PEF64pxdVuNVqqUyL3UEh3XdlPdJ%2BGfsI5HX93ywbvda1yahQjviqE%2BluYt08CNFunShfoIeT9YCMQROg05ZZ1mmCicrsOWjfmoGb%2FLbRxihU0odUxvkthLQky6DS4SIX4%2Fc%2FoV%2BVN7EmU4ktSeBpZtxcye0L36AYT4Z7oOK2UahFjIcMn8a%2B&X-Amz-Signature=f3df7232b4f266723aba9c620f78fad97915e0bc8815374d2b5fc389f9e99ff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDJDEQHA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6P%2BoNovvme183di0aUvcz6Huye2PCTL8cvN%2BETxNekAiBCauciTLfEZ0O6eGt6M5a28YzWjocoqYJ8qpTnpnPYkir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMIY8FmbnjqpEpJattKtwD2NOdf1vnxLNppnVZmnyd7NkHsgZibdOABNb66twm9st2BOXf%2F59QjRcctxVJCH%2BjDz%2BsdranlBra7TGmEZjcfZbNspbAh6nTjObch09L1cuLzu%2B00Mv8j1eoSo6kn1XSpyiq4RuIHcPshk226l3lz3KZVmvQPEDjrZMZipJgtM76ARdqf7%2BRQNmqZyriL67625fph4SU6knHUnBLalonmzL%2FM3ZVDPrqbDQX1X%2FAlg6KGvTr0frdlQt%2Fpnlw5omo%2FqGHiWu%2BBeNsKg5Z8ljhXIBUIXA8PpQcAEaaQzzYFamwcDM3AgeDZNT7QHdFxfleHD6Y637qlEmFCSYHw3wQZEpUID%2B0Z5gnXMxdIm65KT5WmxEU8HLr7zpNYnaYhfP33rYJVwdWYEb%2BOCyJGyKjtIdRW18%2Fm4RG%2Fz9XvvRzgVXl7d58GJClXj2orbF3DU5b%2FpBwu5xNNAB%2FLTXOiMn5%2Fp3RsIOCTQbqtrTlo7nqg28YiT8mz%2BxOdFoaJrG460VvYMyVxJd0eBbDBRIlWjH%2FanFTGDhxgTSzR6fqvTe83rxATtJi7%2B2S7oZZnvxmpTXNDBLtoptMEPQpPZl4snkCkmhqm%2BKRSqE9bUroxGw3y%2FOjJglmOV%2F%2FalwpCpMwt8vRyQY6pgGpaRI9zbGpOIWHDDcuXcQe3pfdFn3IJpiMHcJ7xeWvfQEQv4p7jfzrKiAdW79Fx3CbmXiiJMTLQZZZUG3Vn1ySYXLhhY1PoeXS1QGpRCvQjFi9p1z2JEwBmNm8BR%2B5VdLNt8zJX%2BQPubvuu82TT39GXJI%2BAFgv92AKpMO7OrVNzY7ncQ8woONsZaTB60QDIzMen61QilFag7tMiD28JflI48fNaBdM&X-Amz-Signature=7ba99703da29ae12acce6d5f7c02d21aa6b3e83f75bb2bcccff0184a890f43f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

