---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRRXRV3B%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICrQxYNV6Alqn7eg4o1bCz9txxtAv%2Bs7yYB2KNfmPZxQAiBx2ZodgEGlxZUSLNB%2BHOKcGN1Fqa0lpIrlAOM7c4XFVCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMUf4gM6LbEDwZ5G16KtwDH2wngP4RvAKExJFG0z%2Fq9sWqLMI02aHc2lp6CfYxXUp1VgpEmqN3NFPoM1uV8COVlLikD5uOKD1Rv%2B6fzSeJCB%2FdDZle4%2FFNFZXq2FObjK%2FMtXYD4IwIG%2Bdk3Lqbc%2B0tc8Mzn8E40pVVn3Z3Vgm3y1%2BmLQjfTA98gIQUzZh7QNYOSkv7Mue5L0NiD3rjXRME97wiKgoEUPlX7ET2LFH%2BMCTkHtjn1%2FJBnyfIG3RoeXJAvp6Gj88ctVE4OCI3lgW2skn6VYEgCl84GEyjn5P%2Fctnpi4Ee%2FORrbKgpB3AXrD1zcRrzkMdtBACvKHcYNRMCd7%2BSFeyewk%2Bktl5M%2FzeMU7VZKOuHGIdUHV9ga0yhoSTDorBNPXaB6TPU1cz2ObG%2BUXmaoZnGmSvbZF9di1WtkygIUT4aK9onN0nrzUODA8A8KeDzKbrWGU4qfF5XbGNtC8p9dxobB6DI7YPB4uIEuWQiE6E7WXjsIz1U1uttsubPECaEQkbwCg9pw6%2FvTUbxZcsFsANAG4kdiMu3wMR9NZrptih5NKLkyDrrIwA%2BeSoNI1MLE1Riqv5SvlbDwqhOiJYUyosr1lKRackbV8HiAFecCKgDMEq3sD11qGuWLVP6Z8s4tdYSh71bZUMwhq7EyQY6pgHCTnQVBMVxPH6VnIzSh0ZZdBPOpcOB2k5pnLmBxwiXPe0U1SMfctNZh5DBOotCmxD3U2gu5QLWbcwITethBsSeQwLH4aMcoYh%2FgHLL5FHPeXMVAk9Z%2F2KlR1BJ%2BPiE3WTNZvpQLU1BXIwbvfBMd79PcPIQUjgz9jbl%2F8zrEvs84tyE4gdWPrDbsLxvYv1PLDphC2Q8pwgD8kD6sOBTjY%2FcptcHLsf2&X-Amz-Signature=6c08e4e8092c35b7cece44035ebf75f5e5386229d01e37ed9e5b6e495b48a0e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHXE5U3A%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIGj8ME%2B2r%2BNGuXRloKTojmWnp%2F7YzMQ0zDEzSymJd1CGAiEA6ShlV5GRe58qabheOjCk6aZG%2BPL5k9E9Kf5bl501uVIq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHsTyGekbgYavqfKJCrcAwtfkbXje2XjxFA6ZbFBZU2YsEXV9uom0OJZLNIqRtjg59Ky%2FGdgqNxPfw5SjnEAiMJL86NTLNBBy%2FH%2FmWiH4VcYO9tVanFPnWkE4gm7sQLDw0S998qGZoG5y6Tpitzm%2B99ycHmZaSjzxDTLmFzKjK3FOnxcz44R7gEgheEoI2USkZ92K77KaR4QrVtZC6XnNpe5b%2BX4NV%2FhGx7JNNue5aWQN32VhMng8UAzdp82uKOgWZTg0kbJ8NHKq3c0SYoKeLn9PBTAfeWdrT4MB08POJ%2B6y4vgyoNI1YfYPGpb7SNo0Y%2Fc6epQ6Et6fqix8Q9%2FX3%2Fw1yQpClNsLha5nP8FZhVxgqJQJWQ2hfdefxjn7TS6eyA6rl%2FrTBSghwrxeE6jwks2nFK4OSnwddweH8x47YrIUCUDXLVKcLg%2Fs0IH88txnLeRPIG%2FTKGMDGHzUdbDvSMC57WLK3ExziGDcf0LDqROUgruuSxmeAeiGb4kCRhrA7qGcpBCIDilJPQGZJgzqiiLSfCgTupPFbSAAke9gvy8P32uIXxp5Vc30rZCIpFlanDrnkN3y5xr2n4mlTubwCYhQgrIjh6aOUJPPYjDfV7uNKg6Tb7cjMR7jX%2Bs3slxJHwoaYhwC6Cxz15TMIGvxMkGOqUB%2B6m04bf53tO1tgdkENsSuO%2FugXrnQOndBSavM49QuBGE25j5VOtPPcRKGpTimQ3Vr1zUyzPnG8yHZ9s%2Bx1iDSa4CzV9hel84woEpFzXjhIJKWxK0mLsgQ1%2Bl%2FXGKD%2B1OLSGYQfHjHPXQeEzvrFpodWzp%2BLF5Up3EhShm6sF1y0cUZme0FZpLmmrcV0DE4E4vsA1E5ysTVGteQHkF%2BihWnDVx2xAL&X-Amz-Signature=49abb9006ebd15c8c1286abdc90c11121929edff84c36d25f15da192c4cc0ae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

