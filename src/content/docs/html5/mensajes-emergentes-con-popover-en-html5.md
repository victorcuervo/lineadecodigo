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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM7ZZI5L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T125605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSvv6Dz7fK2kbx1SEIL5CSTMuXGgtLhEQ1lqS83P7SEAiEAwd1REyJOhwWAv3TbFPY%2B1h8Pe69F7o5tr1i4wpqdA1Mq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBFj6nDTovvpRXEljCrcAzSqbCzPm0etXy%2BCEy0RscDtvxuCwvqZMw%2FkqpnqbR69OQ2dmmkSLT3Mr%2B%2F%2FqyfSwsBqfVn909Nu0GucmB6QfUo7U%2BT4nFOFDVhM43EsXlVbsI3tvD5lBRE%2FrodveOqJGZfIuf9spYW7DDnkjJPNfXtGKOJ8r5Mc77mLUKJ2pRIgBhHei98eE0Rn8N0m5fJWOHZsXptbSXKBD4AXdOdg1iiQlgP%2BqXErMqFhF0Nfzw1PXCue5%2FrTKQSzJFJe7unON8oM9It7pdzmqeXARem6%2ByfwOz6WA1whopGEJUXTKq6exetjGD3E4aBzpaTb0%2Fj002rswZSJMaAABJgynfBD7iNdCHGACI1KYYx4X5GVQuT5La376erLY1Moyrp5lvIHWGbo4%2F8L3PKy2r0LdMmEvTrNe8WbgtR0%2BTqX2DUJXZU8iU32ms7LuX%2BCDKcuQ8p7WnkB%2BXrWALErnoNL5YykcV2fBGBeLb0a1dsAn8%2FfeGBWsmQ5pekQ%2BgpjbFpL5mUliVrHwMLNgHnq0selihlau9goQNQkwB6ilJ7me4QH5fv5sNywN0mXCSrv%2BpHSP8wVmUkbI9533Oo8zmXf%2FUM%2B1vztq3h5BpUfJYutau8N3oOTlZKUyl4rbCJrDmA4MNim0MkGOqUBSJ1OP9bNZpat4gaB29NJ%2Fy2KdRyTWfWQCIrAIVHrGHWMRiKYCXbIPvxxT4VzVFhzWD%2FfJUM4GoutQQX6T60H2t2V9t6F8KoQ1h4lelI4R9K35f83um6vCA9dnxd72afH8N3KSStrTH48eBr5AvtU4UgNs8Cgo9UfxQDB5qf%2FOMERnW7pDy2eBk6kVtk%2F32HAjt3LB2%2BabTdKUiirlYsBVClbX7qx&X-Amz-Signature=880a8f95b04908979e0a66c28d356f4f430b46b40f5543b84fcefc281df33486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVLDWTSW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T125605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERESu4sDhvIb%2FOD%2Bpqyulm2xaFPPmrEdZ5IESdg2oh6AiEA1dQZ6Ag%2F5t04UptZTVTRzod9fkK9NITFhgAg1%2F18oBAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIQ2xsf%2BuGmxuC1srSrcA0ET2EMq8EC%2FX%2B18%2FTHuKbDUHOm5JMma1Q4%2BNM3lPCRLWbqQOs99nvrsbxHXHfFiUedvbt4ZX7LteK3hRq6J6Hy6eeYIY1TZgTGRe3R6WTOXh2JRwWzkW227UpG1cvnvDpACBO5vV6Uvy5TLa6IIbEgKtyYzW%2BpTSrfz%2FLbIRBOvxoLQZYY2eYMjboJvv6i0%2B0LsUx4F64YjLJNmLY3QoWtCS1TyQ15xSxjJ5JasmleBpTEQoYgcoT6k8Qg87tjn25iqEb0BiB33jABd20Wy59weoFKMek35MRFo1W%2BMrHeFbUh%2ByTqwYj7BftSVqlUjVbiDPj70ib%2FxpGFbpOkPi8wu4yUSz%2B%2BgxY4Pkwv8bWYRsRafdiVZJpvEEbGF1o2zIGn2yg65MNAnkyA2G%2Fbpkakp5sEltroYKFK707n9uPpaUAK5EsVclWX%2FYQWks9cPGehS21JaubW%2FnRSXy%2FgABJselyL9CcCUiRijVfvRYaAIhlfKkIyzNGO57PTA6Z4BEOVwYu8lOPvfcRd81u41L3q%2FALYBC6cb1%2F52fduRmneIueGe5L9cMumELv2G4R6zqqP%2Fvea4l8SgxMW4GntfwGPejStn7Q1oCD4uZbRT5jJe5MhBhiBI3rZ38S%2FTMLKm0MkGOqUBNbbc857N%2FpKDA6w54nNHClFJfKYJCs5D%2FFMDrUHfuqJCJqErF%2BVUZXo8NdM1JJteLp52ys57KxklDiY6DPYq7PBr8z5brlgoS6Sq2t1yHyoPOEWYwVm%2BvW83n2me4V%2BKyjGVV9%2ByF2Ogqc8XaRTgclh3GN71F0Lrr9ftfc5EaDuTAuLJFb9%2Fdi4hDDWPjKPQpim%2F%2BbbSgxOxoLSix5rWsvpgpZCI&X-Amz-Signature=8a138688949d4291b8d3804c0d2c1a5e748373b228a6c15e79626428deac9545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

