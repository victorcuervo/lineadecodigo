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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5AAWW66%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T091438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ%2BpmsacykgztBAeFesoihG6VXJwt%2F%2FjPGlXVU0EtD4AIgIWei1L9CSCarVIoyufvxoI9Wn1CtKUkOcp4y7hIp31YqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnulsCLm1RTnzp9ICrcA3L5eMoYQQvyOieayQvvL7K%2FZ5bdbg2BkPh0fkisTX23abaVA6vLJxZuYQCsl8xG9e8tz0cqR9x0wFWRImQTeuvrZEQdxaOON%2BGZNe58KWbhO1GKcvwwhnDOtwJUxSuE1hxvMBx1Sc%2Bu0hrDOSLOBiV43XVdjMyktFLPIR2mC8VuVadsG5vhKtU7nh9SB7MypIL7TMdJTwlrrlBd9cVpaMexvX%2BdaUP89izgxNu%2FFl0r9UHLuM0smgWtJ%2B8eda%2BRqCaxYkG0xT4sI620BDhh5s0DmtcpmFJAXaRsBeJEc%2BWDAMrryY%2BeNOFmszZwEGwvO1MUOhpq2F8Z3FzkaqT6SI7sJRv5uefVz32DVpu6Sa%2FilwW2enemgGOLYZXGFD7woiVvsTx%2FJCc496L6wYG7hZj6Sy9HCrf4jZn7N6bzoFiAkq0gTKGSe63Vc11uKDgEsPRX5FbGFn8rO8O1YAWq1163%2BH0ohUxPubK2ZRYFDd1XCzrpDVo2jAyplKnhTBxbraxXY46FEzShxrhnkCjeIZfP%2BO3qgwDbwh9Fo0SbC%2F9KsaUzDlRY6LUVnDUKC8pQz%2BRuaGIBx1%2B56V2ZI2cYlwgDhIH7A1QQWoydpU1TJon8llVW%2BpPS6cZaaUTHMLXD38kGOqUBSWN4QnLfA88H27hUdJmI8gjP%2F2AbSpSlxJrOS5XVTQp4za0GHw6m0drvhHF57ws91CFdO5MEZCJIOJ0Hdn5fuLi%2Byp1uQghcTQPH6K0yB4eGQRGwbSYVvZG9gbBBw6FK04XnuE%2Bfy7kJ2eIs4PGhvUJBHMntBNJ24aNxQ3%2BHOtAfG9%2BblrpLVpc0WuFOwcU3ScYAuj7IGD5U%2BCfEopE5MOiKGyNB&X-Amz-Signature=571ec89f20480431ec70e963ce76a9def37275653a9e477241e4308e24f8ab12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FZIOHCO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T091435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRKMjsuqZP243LM043n9CfnPugRs%2BMKP3L9LHD0r2hCgIgdY%2BQVTK%2FrSPSjH19SEOk313W5X0gR4Y0naHhv%2BWiNfAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmLbSfSiAt5jP70tircA6QMucPojoQqNNAUJxnGRMp3VoBwOOk07ZOCJOBvvM31BR02nUpQl%2BAWBXnGwSbUadNqnDP4WRV4wwHB4TBe2iVpKY6Eq4OPCYWWfy9ap13SUyd3zvdHZ%2FRuMEuKXRVS2gEa6SDLtNUtdn8B3khGMw2xcnH4DYLqxSkG6Lw9BDH3rIfAq8XvCaX%2FnyRy8Nm9541kk1rByMcAKqzV2z5mhlSFP36sxN3GnpuZHopLnUNYQIT7Lr1cCbMN883Hmr3o%2BYPdCuHKe1K8TGiM0RpHGcgtmxrR8kDQgyoQVCfH7mKPYbPKgjsMysLRArgw5QAsXYVrcnjowOZoLBqKWAyVG%2BeoHZol2Z8jng7vrD3EC9N9y4Pwc1jEM1Uiih7vb9mBl%2BPFGuXYdMrooVDUh5dJeVysVzQ3EXvbSb%2BA%2FUmi9p3a2QntLS5p7uA1PpzM%2BbL8%2BvCmcaYhMNq%2BGsq%2B6ZHPk7BcjDmtFmqks7Zc61H6tscddp9AL44o47cRtfV8BdZ2ThrpkcIiIBBdQheMd7UFpuTJuqJYdYUp237cUfvKLvQUz3MkCwyXhjrv680YzLWwKqYwyr%2BZ4zkddyKyrJXH2ySHZ8PHhsVDUOsHsk9n7U1l3OTRbNoA6XSeuwyQMNbD38kGOqUBcx7tjx0KAygrmVd%2FJhQHeJ27WVA4ggdcDVQdq3I%2FCP%2BfXKAgLdd6xPOApXCQP5YviEt9BDIrTKnFylLp7ZhiCPhBjz6fNqHEacMzEzCrBbZSeo2AXoUVH3HEBDurEFrULYqX34eG57vxyR8T%2FEkLuV60AgE2Wfvn6RZduj0hNiT%2BPa3H7e2AlXeHocc0JPj1K7Tq2%2BmFdfUPU%2BvSnhsNRp8TLG2i&X-Amz-Signature=da68c6dc32df79a60d5a41eed110bd1c51fff5e71797c6ba23c635d9dad0b981&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

