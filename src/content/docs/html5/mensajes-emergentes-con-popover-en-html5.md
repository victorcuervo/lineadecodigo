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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DR7XOTS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T003654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdB2IRVzqOgZR7XHq9HhDWcqa%2B4SY0ywqbeKOg%2BdbgcgIgVaS7qVcd6XchmWtwWFRqZeRyz2xZ2u96G064Wbu%2Bbm0qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQBc7FsDWRg0NGG%2FircA8Aw7BUMTWFL%2FH5icurENWa%2FP6K4Lytlx0G5d3zhZbyrEOlFbKKtKhtAvFxc5J9gbG1Wl5tqJQUMqEz1x4DwIankPjaKzBwAeX0bwS%2BtOM3jgjUBft496CyTX5Hd%2F1gYfU6LOF0bK%2Bty%2BhzW81Fn8HYNzn2Dizr8GDtVkyIPcj1UR3CqQ%2F4ILxbol2NiGLbctz8geU%2F0F8hMDb7G69xhZhyRaD2rQ9OMIOoHlmZOrNlk6jNIfVL1%2BM1kl%2FF7v2ULhhHSTTP%2B53eiWYb9IPkvX2iFF%2FNGgWq9Cb3e8HjnybElOfhMXup9B3Jio5ivpu%2B064yHmIrxW1vwcp3YY6ow8O4DC%2FggZxVhlMiZKrpK50zPepe0noez3p6gkaSPNIRv3gkiB1Mj6GDvWeubM%2FH%2FLMqygwoyFOaHludgGQh9Ku3Aoe9xl8xW8o%2FGsvfM2aCBmAfl8C0%2F5dZKXiL8QLCsf2RS%2FQyp9vk0KzqfIcyw%2FqPwF9T3lUsxrL%2Bh%2BCUY0hhisCUQSH3TkEN8FJN%2B8dwkBmJKuCvH29ysptBAnwZh8CDRfvgf2ua6nI5thPiH8%2FB1eDBlkQenpgN2JGXUsQuN55BDUSr517z2WJ7wZymPmxFpGPJVsNvTk%2Bp3vvlLMPah2MkGOqUBQF1isC5lOCVDdq2IsVclqJ%2FX97eQsvkU%2FOfeQbUMprI4Tdqr3LeGjQTiLJIFK8%2B0Kiv0iOg10KaZ5pNip8kyOoP9pDBd4t68c4NKNkl6z8z8YtUhIZ2UsUfxcf5JSWcjeOA4Zxs%2FiS9m6zviY3UIwAyRKN2Lt4YFoBoTOxnxETE4XecIrSVbb4sLbSe0Gy7en4gXIc5%2BW9gujDOoyQoOqnQ97%2Fdj&X-Amz-Signature=74ca3d621b0278b71e90fd256e3e6800e36084ec51e3972e992ad5e39de3fad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDASZ2RT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T003654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSQk7khaQCgJapLpoZ5YxCiDSMEWPiBBtxdggLeicHQAiA7J0VWlipcYMaFlP%2FUtdbWdq7qZAge4pyoPuwQ%2BF8nSSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGU90Em6V8evmtGycKtwDXabMEW5rDIQw%2F7py5oZek%2FJSRaj%2BqS%2BBZ5mLnOjfMG5OKfl%2B18Ot9f4eobUePDFTFR8hBriVb9ad4%2FeaMjAAbQgcOmtOsVv%2BLsG6dW6%2BXSFL3Md9IDYTq6rLHBmuKccfwSZbzOYOdgSpxBX1H57fjyRCER9RuNPgzbtiaC0K1%2FXbi2RsfDQCSbO7LuUgFYXLeYP04jNT9c9%2ByisQHloYGDWkl%2BiasDQIXMGB8X00vJUjVXJFsrYRgCfxPvZ9Jozla38G1G57WoCw25kw1%2BBLlDiVHXXoaweb5EdixjvFzPzW%2BltNDG%2BWruiRjn5FqJYXU6H1d7QphKIkAvkbh96AS%2BHR17NTfUd0McaXgo%2FczJt0KztWC1YUvwROjflhLlqjrGCD7H7b%2BmMI1uZ8ryZh8VE%2B0LYTwN6q4w1YeuPtONTqo7owk4wuRXO2TfDDmaFNuxvR1DFwU7UP%2Bf8kj33cpPBfzy%2Bo5bNBWahEggN5IYFyicnX77W%2BOwBVR8T8xJaJGhXTN%2BfK1zvwMm2wbJ88bZvs8m9XOK%2BRIwz4qGQT5AFSiAP5%2F1xoACFTfYcAsY94ggk2PeGEhQ2G9vyK3OcvuoiEj8XATmEoaeuO8Ss6oNe%2B3nhXzrAP6%2F1LyfAwxKHYyQY6pgEFAcEQDNHhO7to3GpwGUWShAkPZpLDgOdUf5AhnQZrA%2BKsQj16nDvkxX6dr3DLpXJN3GXon5Nt7VBOt4eEVZGXS2c82e%2BPRhrgPfoZ9FDlZBNdwMFaGOCgl8hTAW7CHbhaJ2trgrdEAKwvuwUT11qpkFE7Q52OxeacIOfGPmz5K5nnnhi2Eq8Nn4JU6JG08RIo%2FoKsJ5LtdFPZpIKETKDCXY%2BWUChi&X-Amz-Signature=252e14db2a0e2769a83b56595a38ef3c2586d2842e9806c5a65adb4a506519b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

