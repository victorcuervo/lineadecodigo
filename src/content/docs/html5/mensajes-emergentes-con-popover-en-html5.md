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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVX3S3DF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T180637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjWt108DQ9tOb6PGwkSIgADXTl5PWHqsyDN8UAgVlfbAiEAuEvqH6PYb3%2BtBhKxy5gt2fPwqfzpX%2FGk%2Fn%2FHc4Jq%2FOwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJFisIMPvJR3IfilUircA4HF4yYG%2BK2zzF6yjAipBPBeYPMaMafYKXZKATbpHPKzhZn%2B8DkFETJgolIOF4SgAzow%2FmZiCgH4MKMDUM1mndGpgSQKzoBW8A12dk8dTIMiwCyYcK9HA5FrMCiCeMsGeoegqAc8MFMs5%2FGDLGw%2FGYcvwou6TA7a6y%2FyiU%2BH2w%2BurRVVkps09aFA4ilrKWQq04%2FY7WbD0Fw%2B1fxRiHyxhuPANoKMwEAx7qKXLaOlno1YXMG80KALLwxA2IXQQ9r%2F10ZPYHcpvUSQnUuGOQLJAe2HitVhx%2FSyV7SlTxVy2WjkMHuWhGhWe1HwBw%2B9ZYdSaBeRNaEBx3nkIEKlL19BqFfZx2Yd5cKDk6WnpdFcD2WKNxJxL4a%2FxNKDjd5OD9qJaFh%2BfKWxDTtsHSqMbG3ForH13aaU2kuXag2%2FSzI5PmQRZovc7HWCCNfsg8hL45pMQdqAuunazLCR10XV0CF7PBBxn1YOyvE8iDAnZLh55gwFcWV3B1gBSPC%2FVVAjwVTUOrw0%2BQt92tt1Jd21%2FHddczZ2%2F%2FYkYfFmsMApefpJKmjZadgfK3VZqQSWBn6oLo3o1t3y24elxg%2BdT9tTURyPm9umNtU4ss2zcYb4BP1tWnn3IV0kN02WHcAiEDXmMMjK0ckGOqUB2BLUT5teM4%2FfFqIx6e9crZECPAfGDKpvUVHy8jvayHCi7CBydOkmLOPlpQea0NMJxT6dz136xp%2FeQVCqgosrum1WGvzzZr6J5ggPjspZCfDtR0673GNC2WOc6Y0QNFdwJH1vW%2BWJCxjA2aRjGsejlfrA1l9BLTsKyFp3m1CUMGuWm2RKgp%2BQ5MtAeefCTw5shbYni2BBnQ7ZoxrJfmaHoogIODXm&X-Amz-Signature=ff7c2ea43216441d06d4dd4a408e8818848c82d0825dea17295744b4a79900ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q43UFNNI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T180637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6blNPxvaFNOj9dVgss8T0vAnLEwtAL%2F9cxSBMNefr%2BAIhALH9%2Bxh59%2FXVMdadumXxltTGkYAH5fDuCTxDSNfJVz2IKv8DCHoQABoMNjM3NDIzMTgzODA1Igyh%2F7TNdrP%2F4ip4TNAq3APdA4yTwq0Qtzw6Z9FEIZHwVDE28kNKeOhoi6RR4XQ7CXASt7%2Bx8c9%2F3F%2BzWVO0lgYGvhNmqwd4Q3khl0KoNf54thekoIap94V%2FE8wd%2FdRdkTzk5qCoPKQXrVs%2Bk09uR2x2Q%2BmUHJiNf5eF6Wv5OvR9IXVSLPtxXy%2BqzNCfbXCzAVLzLshAMMLk3lDQlyYiwyQp0uBhXzGScGajYmMGNAMz7kGChZ4OHGMh62MxdzZX94pJGCPSacnZHADmsqZG6%2BOoWP9kle4tHlSC0NdJoFbF0qpWJmRKdHD2uudT3ULjnGJfF6mCREgJ9RHljc5J0HCFJ8BUZbBGq4NZwDufORMeS%2F6JRhqwtauq9f30DIMrh7a43P8GOojxSsCWjUhXNcZA4GLJUw%2FKnpC2nGKaV%2BCyFc0GI2Ci29EzEaGx4tBuhmHkztywOSQXkLSpE7c1zs0s0BsutcAdcW6FSAIjdK%2FRkpVjA6SstnDtcW1exZov7IF6jZCvHLfpeydKGHJXduFmVTvedCZ09EmP52%2Ba7q4ukxpT40IabRe%2Fj7pNHa1f8ZiIzhYqYJX8RO5JHimH6%2BDOocMD%2F5PN7qfg5y%2F8cNVFeOSKR5E8aZsmF4RoZbz0w0ODZb9t4MGqmPV5%2BTCyxdHJBjqkAVIzMCfvNkKqMiRtAgxm037MVhPo1NWFDuNO38tflnP1UmnLeI9IrULrtYD%2FOiHxRlb%2Bhe63Ggge9v2FKYpVluRsErq2bA6ehcNCCKRofO7RyxGjsP8qWZGjbAOhUNYQgNKP0GVcU6FL5D9VMasbUd4goJ%2BMtRn1dllPkVwnJ8CG%2FJ7%2FYPtMrl1xtrhUC%2B%2Bl9DyTGX01oo2MlaxhEUVyhWPYGBu4&X-Amz-Signature=fc6577d360c9cbc8913c89db97dfbe83eab0c2afb05928dfafa54f86ea7e4c75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

