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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5XKNEIV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T012658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCInnmYoaOKY4iMYXB3HEWgf1OTk6OHFByeWVFiDuRe3wIgVgw4k5q4jPU1XfP1MZNPHwCpy4XJd1dGdSkGmO%2BMpmgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfiDkv7huATu%2F%2FofyrcAwNQtJinzAoEl6XvA59TQDbDeUuwcZiCurqW1kistinpfecBoOWV8EET%2BngEh7j%2BAoXASkWBzJXdLpgujahLLJa0bqxlA6Ad9BEn%2FRT2MuqpYiyGSdtl3GVppcUXm47es3U2V30j1A3eMsaHWzeDrLtbK6FVO3XlPcuQDO%2Balg9q3aiblS40ynnaus7dW08D03PDPhIddjc6bWeltH3Jv87egodcL8d384AG1B084dBzDzQqbr3C7m9o8pJ02Mz96gSqxvKug7LUi5Mx5o6L1Qv07gA6N7nQt%2BPdsw4n8mmmhFPmWV%2FhTkhExrzjtouL%2Bo10IkFqwm9Kgz33Ja%2B3S2joUtdA7gmd5i9%2ByYLFfa9u3zPXMp2ZDSR%2BMvKG%2Bkdtz%2F%2FJqChpTrS8p28f%2FHcQR79pUsgpv8Pcqt8FRN2tSMcOJeEC%2Fe4l9eSexGp3aOUfxDZpCLZ1ICbPDfRITJ9NRrylGe6GPvgGt6rv8Bg62DcHiN0cG9hMNZStO5Mqg%2B1IRUA13%2BKJo2QAbdeFvPszRkFzoIuCRciV%2BaQn1dfmKeyPi2HeYSdB77nPBAnaudbrZZqZag1%2BkKBkDpV%2BMd3jTNby5f8O%2F8FfCLRH6hOUL7O5HsLDQoh7NL945XbQMJf90skGOqUBQhk2ZRF6zxbs9v3%2FCN8R9erAbz2%2BgrIskEwuGJ9ZCiNTTlXT42F0lddyVqjdXLc1vkHT2PHrWROtoVbbZj%2Fx5hQS8oAH%2FhDtroBg8zQ5puDbwF0WReOwzRwZSnDs6GHsxvNG%2BY%2F%2BNf%2FWS01%2FXAoV972ge354fhCjIwRDXn6u6qRCqCvi972486KYU%2B4PpeeyxFbvqccqSbRCcfdP%2Ft9R0h%2BeEL4V&X-Amz-Signature=87de362cfc2e6089f7131e9abdfe0be4095f84a90f1703c54079c0efc87315c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWPQA45T%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T012658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8bzSwjxL960zRuwECOHgbJatti287VzVrtb5J%2BOrd9AiEA%2Fphc02adVBgEvo51Qzv%2BMw4iF9tZonnEt%2F0FhI3VR3IqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNcFo%2FBM6j7vD21zCrcA8233HDoiONYqzhKAa7tx4CGYCRJftCHMLUj2rCgxvrSz%2FF3XdRnIU1jogug3D5%2B9zV3SDFpoViM3zntRc%2FFohFCdT6X%2BCeTBUbJ8BFub5dFTJPtqlu9pGmk8y2%2Fhhql3ttA1uox%2B5XeWKqSCu6sKXOjIIckH9fyLSToSEv9LeMYxXGfBeqUH0q7neazxlAGIbTq1wdzk%2B%2BPm7SzLeTTdpi5Hm1F%2B4Ul%2FGN3DufD3Ecr272CAM5duqU4Oz3dZPDjUsFCoU%2F9YPU6nsNXaaDD8I4FsuTLsCHiOCOme4RvaeKpnNQaQE4Josph8uOzFNNRaZdlZZ26hry2QOgzuc5vIPcUSSZ8OQpinNOelwwpAKs4l02r1W%2BE8EvYBYReGmxekWqyiQHtO6TTWXLogVxjVgvohVrv6cYs2HW28tRJjvkaqgVugQ6gOHTVJQpughxERfYrhgYxf7uH%2BE2FZye9%2BQHDXn4HjtZKSLOkTg8vk3%2B8OQDMNrkc4MlGsj7ehBOVMUA1zlOk3qR00dSBnCI3ggdCJGqshZzmNZmPrUPY77TEN%2BYy6qZbkrxrbumiy4W2c%2BY7tKwVmiBgYj7u%2BegD1iNgMAsfEmAZTl%2BqRy5RXaqVDAdBGdhW7J%2F2SXwkMNj90skGOqUBJGnHnNxOuCQSxfCJFLXhfMkSzwPScfCs%2FI6l%2B%2F2U3so3XNCWNBuGOT8QsbuYKI%2BSg7gbcsnEzxuoEkd%2BQIvdNe8atzRfqn%2FKMqfRCOesIFL3SgiIABwiA0h%2BoFOioxEEgn4czQrOhZTWchaltfgXUSLswl%2BciY4gtYZrf45tSzl%2FRl7z4WtjBsmDFcR0wEQH280HpY8emz8uIC%2F01MhO2FX4bAhG&X-Amz-Signature=9f050f2487bfdf11dabb7f308d80bfc49dff336596299c852755d956027e41a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

