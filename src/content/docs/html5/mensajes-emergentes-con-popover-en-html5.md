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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZPGIXFU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4801%2BIpevXkE%2FHHLBvO9WVLR4bvOu8LIojoBZJZIJBAIgeDORJ0yj0x5BMlVJmo4li%2FxxIiKcH7APHb626XOzAkIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDKJ9UMaEJCDSNi28QircA2naw4nJ5FwC2XZiIWfHJdTg0zr%2FnCAO4KzmTKJd%2FltPTKzZR1YuydKJSWvrp1v62IFO%2FldkoFrvXMbWwtAmSU18qrt3qkSIsyzYTnUBvGOu2qXknjLNi3aOxpkQ3BGaButjUmLvjFO3aqIqU02F5ZFlE0hGshCQuJ3d6zk%2Bj2QcqWxerWqW%2B50MZfJ4X1nra6wKekSHAAiNnwHEMPRfpdqd9%2BB6sLzYQ12wF6OZJqYfecCJxTNLu1g1dzw9QRjiZXzsA5ztltRpPjlS%2B4JFjTWqFMVwDb1%2FRLBApa1GlD3vZxVjgSdI78zSRApp55NTRLsqO7BIsX0Dlkh7aksndi3cLCBl75XB12hu1O8009COedrPL2p0J06etaZkvwRjSXJMpDGB08R%2BL%2FG7f4dI6%2BGjrkIb%2F67XS7dr%2FVOUG39305zA%2FNks2wQU%2FxTxlbvzdQpTl%2BU9Lj8xn9z3GasDLX%2B85q7rqyBcyhi7s2bIcOEWaE0sVjj178iEXWgvnCr8nv40aNZLyAFbMo3GwRrVRsVHVh%2FfOadjRL6ztLT1Q10LVNWVlP9fv%2BeSOLlAv2LJBXvxVInrGx%2F%2BRblFkju5k6BFkLb9y92AzTcYc5EY02yDCPaZ3Cq4Ltiv1TSRMInGzckGOqUBpl2VYOGa%2BOkSxiQt5rnH%2FRuPkjC%2F5LJoOJotcesdzSWJZJmOv72zpNm6uvYI2u1%2BJKoG8Pnz9acpQI0k0KCY7CYaUfVrLSKSY3ghqefGrG440iV89lpx4vOgd5ob6bYzV2GpxAuSV9pkOXEi9NZ3iUzSxIoY3DQHOI0gNOByIkAMaaJGdBNTegyodlTXPzk4xFq25JGArGq7E2%2FHg5B0YEI9%2BI1K&X-Amz-Signature=5ba7de0907d2429b75056ca10d8fa1a3518d42a349f19629ab5ad422356dc51e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVV33D6L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZMurHYq3rCH4O%2B51a%2Bk7EC%2Fc2IPFjU46hg%2FQ6eSi0CAiEAoTnhUA55oO23V25hGLW0AkReg0Q%2B4Ek3YBfDTdnDTnIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDBcohjddlxXZ8cxNByrcA7aGBu8KjYmkpDathZSjdi6fkbBmBbu5aDzpvC7Kqjr%2BmTEX4RDiE51BCkcR3%2BVxcqDd0%2FmxpLygXlThxhpLcKnssCF8e9Q2gxgGYpKIV82RxyK2cEyN0UD0pQhB8T9E9p72ILEhCrBHeOehVFo1IoNN%2BQ6G%2BMfZV296lPLwS%2BlfDxs%2F6zdSQ4bFT33x1llt7DcHObR6dgH0d4Zn9k1Bv0nsJvCVW84LFaAB3ijiI84%2BtAPbeKVu7c1wCjJRRYGvbaloZ9lkgoO9cvT2k1iID9be%2FhCjZ5hU9OtsLJF4i1UADIqzvh1Cx%2BvcmRqTkqp4JspA6j2SQIeANqy0OuRAf%2FUk2eqm%2FuCyGvlhOj4y62miwB%2B9Sm2soIVlPgPVdDVHwSYlttFeXX%2FKGhLhGpXFW4MnfXxUr3ozcXsIwhTlpPTuAlaHxOT0rUFh%2B9b5x%2FB8UPvhYzrJ%2Fv7TBgh8qcxVkddXXSC6I4iv9faHgJpe8W8Qnpo7nkGURasw%2BGHfN7749aQ7E%2FcoE6G59x6joSur8vLit0cnVGdNc84A%2BH%2BOhegrW204DsCojwesCI2wcSobySU%2BekMP83pbz9qCsbRu%2BtqZ40x8NRuxc4sRaOlFk%2FNh2ww28ouJUBY58YD5MIfGzckGOqUBbL4kh7KgzEkz2iiMaPocLOH4VZ9oKKXI9UkRJxDz68ZBYZn2%2F0eR7%2B0XyYi4Conax6hST7w7bgAclEpXn8ESyh1REqsi%2Fevg%2F3gTNiEPt4YUrwSpZpYKjJRabrgBhcgnGeWZGHOVmxAAkgiPIR7IYlY4MrIEpO%2BNlJrYQcfBt2bFLCZHer8%2FNyWPVcxWXs9dY4JKD%2BZiQdaWTijcYdRwiEHbEOC2&X-Amz-Signature=3e2034cffc0ae11eb8e8b6c56af75c2dca74ebaa8b8c83838113fca245ed7fa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

