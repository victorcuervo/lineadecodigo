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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LGMCIZC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BvIaZ4U0u17ANwIun49W9Hc6%2Ft12A1VKWMWQrxVJTOQIgC9rCFyotYN8XZXJXWGyOz379RUmxz%2FfrAHZoiayRRiwq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDKTXeixaUrs74SvWaircA0iHh9iDBz05JUqsCmr3Rz098D9oQEifWa%2B6ER%2BVQdtRyfwMhd0uoaRtIwVVqq0kYHy8%2FxMRR2VRvUFcO1n11Ho%2Bbd6xIk%2F3XJHVBXPAKL4G86fzUdgpULDRRu8g%2B92224kiBguRJkTj%2BUv4ZeYSXxDKZSmMZ9WvxcvmuwfNjYqq3TpMAm8UrNBU7ttL8SiFAQ1o%2BlCQxxnGym5VVWDLC%2B2tbJeeae9C%2BrwCpviDVwHTT9xrghLlXy51mCwlqJnZMME5dOM%2BxKTuEUr9BsJbcKT6s%2FgQSWqBkhr9RhkQ0eB%2FNOOvqJQDAPcDQXCWieWWaOuweQuQ1m1v%2FcgB%2BF04tCqAjCLtG96ILR7wu9MmuDVmgDeUpbxeSkptwbbIYALr%2Bux9V3eBpDtyEAhm2x7xhc5jOGHpdQuDsOIoFzkIktVob6LImQf29zxTjyURHmphMtGeD%2BrFaAM%2BsHxjV1syUpwmWm9T43bFLTn2OmdHAWGl9MtbWqXJOxiUJjHFp1gGaGcJnD0hBT7Z3o28YfdXW00%2FlmMo2j3x1YGdr6LC5C77pYd4g%2BW2CFHpy1vwNz%2FAlZPVZMQsZQxxnUN4eRcE7%2FURURBWGdI19UV4Yo6fhSJ3daYgarHoSkMLu0ztMJD9zskGOqUBoy2OTxdjXZkVIvZk1nDeBjVgMP9AcEQ961v2UwN2lu3vDD84ZhQmi5x8n1K0KmMQrjdbnV6R4p5wckuZ4a4A%2BCiBsTAvgQP6ADJ28MG08sKq71uA3JhKPjwreMzdOYf%2BI4Fy6opSJm6XFX7Z%2FJZ5ctqERGSK3DaP%2B3tlCCCfmoEkIV%2FYNEpkAMWnoweEeOpNi%2BriEBHupqq0in%2BzFING0PYIQIFx&X-Amz-Signature=f90a26a307233d432803bf940a31d8b59678398d22331af1f194691d7215ba02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHU7X6K7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHOsJjU7RnK2bq3Ppz9ONTAs2BSxS2HsM%2F0iO8GVOwtAiEAnjBe4M84sFFr6nA9TmGgZ29C8S5dVZQbwHXpBDv%2BNr4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJgATpI2Hi9l%2BKYAFCrcA7qJV1FuPU3ZD5ZF9%2FfImtxC18B4XMzb4lDkjVVPD1y8j8726sjs%2FT9aJeB5IkXB%2BX5NUMj7gfk%2BcyZp7m%2FcEtfPcT5gttGN0mQsyUGHKGcYrma%2FM8y68axPZp3FllkFzIo5t%2F6zpjgwN7CLAGOQCeetEez1AtiONQp376U4eWdx7nYGo0lwBU8Ox3cgyd7AV74xDyk5BqarfQec0WErD%2F9CGYJFIczXRCghR657nonqgsJsLepLEZVGmiAaTfGSYv1rmVHRqyBXuGaHL600vvPeLUJbOQBrTTjE940w5NrPHv8BB1BXh2gV8mIHwpKewbsHC3YYVsigk9QMSYvKBK65p8Uu7nX%2FE3v2CyTSYGemts0PgjyYGknsHXumcx4nRtkj3Hei7CdvlEGO%2F%2FLLlxEgVqbJ9jhKplzJVCAnaY%2BOLHkZywoJR7wX9waWIAmEGWLJzVR00Eo%2FCGL23phtxt%2Fb6vF6uBGNgXgqBpcVFBGDKF17Q%2FCS9Jry%2FRmeS0NwsPL5LvIj5X07Opn%2FkMv6G6dZIXCiRFcNz5B1HquTkT%2BZrCNd7OPJgWQa127pFBGvsO9S4Qc3iFjqFP%2BBj8H9mh76sxA2hnp8HzVmROLMPKt0YArZsPV9PKtyjnePMLT9zskGOqUBpMovwhCWdoopJG%2BHbaXAcrP%2Fkn4OHD29FHbnojyeYYdGWmChIH2UA5E86Hvwxmy7M2vqX8tIuZ2WaJRxWNvMCUWd8m7VGzChleaCSOPS%2B%2B90CCVYun9sc%2B8dls%2B5ipH%2BxMtjAFI89AvfbBO3yQ0wdilgVutpliN6StolYyBCsaKHuMasUPxrYMzTNSHtMhqTfyd25q4QxUoaPYHPNLoUSq7hsEZl&X-Amz-Signature=e2d4522216793566d60a0777ffc30b33e06a6a322891f28cca0aa5d03087a5ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

