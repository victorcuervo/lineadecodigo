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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IMQFCGL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T225203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6dUQcmVrvwGZ21MHLCagAJu36gtwsNthZkjwSLMl75wIgYEk1MazJidNdBvlj1JE%2BUlApKvVPAkoQ87CJQvXziroq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDAQ3bHtH4h3Qe2fOcSrcA%2B2EWG%2FBNKEwOlqWa1DkzMoX6fR7EQNRldWZxnHvh7dzzDPGifCrs5UEGJgHd3dBRCmCFj0ITxP4CgncEv5dw5FB%2FP9vwuPCF5FFt%2Bo%2F4IqD0%2B4rAl0eySdXSBGtST1S8hGsBQKL7itLLgQRT49zsQZtyU6lwjpjWMsUnr5pyPKX6a6%2FwVz68Yjn9UMlOsso8r8K4KiFGdh%2BjXGvvPFsTdBko0sH9z%2B%2BR7kjaG6qE0V25KGoGsEgmetQeH6pSA7QW9emKbOKM0ziWs48X6P3ebcFDe1JxhnyjbMLZVT%2FN0h5Wd9DoLnq2Z8elOXSHBeBnpD%2BVTwr145zKsJTy6l3vRuxC%2BrL9uiQFYyfK9Bk5xR%2FZQeIWNnG6wFIPSSFkZgj1R7ri41Q9NmGzPIhcPJl6SD0BDsdePNPBs06ssDbAo37lvnaM05ITbG7XI18ZPjfTM8XeO%2FJDh%2F1e01vdDiQZSPxHDRzKRrDFd%2BRp%2BvKv3OdLn6Jp9Zt8GYyRr8KRxzHMAo3bMoIUSoRj42tii6dfyuzDV1FptEFBNhnYsFHnIiXLgS15JmTcqJO6WKixGuE%2Bm8PvHbeJha0vzS7%2BERjQpn320KY6vDNG4G7Yu5lVZ%2BOfn64Wa7yG35ujJR7MO7T0skGOqUB1E2g2hunTWoWMRz8Ja5CUIXrz%2Bzh30pfgYsqTUuKvcfRUUgTfbZmR1tDZemhFKpJFrM6T4AZPA7sHyrTDFZMFd59iKQJlW6gjhozLM6QNR4xc1FUtBZbNzxE%2FAWiPbONKqYZZagEpi11fLJPF8pMzARcohAAy%2BQUGiOn%2FBsrcEixHJPUluCBqH%2BKgqWYA4uUVjYeFrhCEmuZpdIrCpT4MFAKXVVg&X-Amz-Signature=f9d660c3420f872a7c7fa0a74993ee333ec32cbd3b2224d2f731cd3bbd291413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2MZBWKW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T225203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FTwdGX4Mq6Ov%2FwVoW2C0yD1%2BogGwRyp49eSF9pQnBQQIgFkT22YTLU9hZnnwfXw%2BOMA3YR2s%2BN6DsOCPCP7QizDsq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDPoJJyr8v6AwXGJAlircA62g2TuSPOeEMa3YLOTN5ynoPmYuFykl3z9iNuoLqosFqOcEtGehnWvgmwx%2BLlcExSYcDaurD7ilnd54VtzfJkFjcux4xX1TtOlBkZlmBbYj%2BT0rppUMWkzM7LFCyMpMyXgbZC0elYpOVzu67Cmhu48t1bg9Uw0bVaQSFkH0DXYVc0I8Yim95MOJlYI9q6gXxI7bUgBhvTRsY4IPFD1O83av7Lh41ugl2OKAQgV8GUCL9d5I2PqqhKDjKwDV4cSJwbaeWaBSgGmHCzehX2hoPCDYGsazSA6mMkfVAz1SdKlHbC1essB%2Fxv8wyQ2Va1B1ley3koVqsWdRHzQzpkkTuF4FUcrpo4hYhFgw1NNfpUQOAhkObe0ZqdPeWqydP5m%2FeItm4xcv6QMtN%2BdHc5Nl0vFDWw6YjDTG%2BH0UKLjqAt0C8XI%2B0RWOCg3Wl6VfUHETclNsT79V02kDJw4MhvR%2F4WpsZKriUqp1hVTS5l3c49NsRrpqlS1wKoDQHBFg%2BuXy8VdgkUHv2QJfXcIJ1wbkZlHyEUDR5u%2FvRacLUEZAoCzsuyOt7HQl3OZU1Yi3sDNS2zOYrYQeZMdLwCbrI1Ki5qsNqJbc3fVdvN%2BQ1E%2BU87UcBN%2BVJOLMZaQhwGy1MOHT0skGOqUBG7tlNBsPGu6ASvgJEJA2%2BvCYk9oO8XoWOT%2FyqAR066Gganyinu5ofKs%2BX96LMdP7YV2w8V1vI7ySVtks0poLb86%2BALCcAeMDeSLqSkYiR1nNkhL41iBGE3r8znbeLCg1UaaltBYDjaq87PcabQG%2B5GsmUhTY2MzGs327DZxXBSd%2BKYUFMlPKaCNs8wTq1%2Fd7keUlJFaTqFoh%2FttithE4s%2FQU497c&X-Amz-Signature=5a9f319372684d577d0c90c711db5b2d089a40e3bf71e36a72c52b568963260b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

