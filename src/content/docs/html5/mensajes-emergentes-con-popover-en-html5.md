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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXUNUIFQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhIOxaK%2BVKXb8%2FrAYFREu5MXLCzzduAAo7PjdaVcg8FAiBqtSLRpegFQk6hS8W%2Bd2oMS3C140SFdPr8DCbxE1hnUCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMjFZ8y%2FBH5cUAoCG4KtwDt%2BgAX8cjEJwMiBNkEScVw%2BdZpdcU9ky1bb8wyUloo4oiJzIl9gd7uxgMQqkwLcRxpompW8Wdz6dGO%2FI3Q57Md9z1mLPGcrKz3zqHpx4EN0rLpxukdD3pVGhXkoreSDPrZnnzaEfQQvQKpH2HOqQ8pYnw0pZYsZPEgohVw6k%2B9vbNc93AAlgOzW5nyAQ07%2By%2B9BxQ%2Fv9HkE%2F72y99GK1%2BUxWhC5WQQ5qVC%2B67oRjteUB76G6shNWHtsP4pNO4RU%2BjF8w%2BtQnL9VcAPL624av33KBGCEDgCTbSrI4r2WavbUwNWA9%2BP9SixIC23pEKDLptR9ynufenM4zfIDbjsFcxV%2BRC3fXXTx3it6oF%2FQI%2BCokqUPzlVlS2BYuYlLImnjFI4K938OBKz9G4H4GcF%2F7isQBfmRtvZAb1U0Rh%2BSQQnlYhNr7vtaeQVpL8JXCUxrFVWvShC1FLRNvSuvb%2BCjD8oYw8Xyw2FYWUk6NbEQxocjpsd9p8Nxgnp%2Bx2TjsJNkoZFCM%2BQQGkQUyKCiokq3um5oChKlLdTmVtj9jb08T%2BCwTVgspVf%2B2iWu%2B3%2FDzgR2JNRhHhyce4EMqizNplwFPmQjB7L1MjLPE4XhbG5eWMUhrsOci6PDH2%2BVSugMwwpqbQyQY6pgErfEkEuvBfUUOChte4Ink59fdXkcpZvbqTr9pAV4fxhgWenXe%2BRANXkP82y%2FrEYQuyIh3plzMUmNTZjfxYPzsC8fdr7d5RT93ysGmNUZ3XOCwXg%2FHwr8WPeUtaFT4Fc7%2B5rvze47DJLxyGFCH%2BEAZjpnz6wl4gHw1y%2FEHEtJWuj5qzXEoFBi5wjxY8l33jGsuyK6mbPPqADStgmyUuJWQFfD%2BD328o&X-Amz-Signature=a975a736d3c0280f9fa2368ac681fffc0cc3929f74d192427d1eebd50ad68c0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UC4ZMGP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8E%2Bix3gcYQrclypvoBVSehm620JPxhSqgMaVMQ%2FnFPAiAYB8EE6gA4rqX60nuPEy1vzxTtBblKmJDIl6aSXmovmCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMeVXy5DUYh4YLppJtKtwDMhVVK7NcyZnuoSCabCrKQ37Bi8ZvzqvmCrbwk2MrxcyGPbwjJZTjZaKIGjqdwYD%2FSH3%2BIznuud%2Bk9ueYru2EawAcry7TbSnERYdsRF4NMitzSsiIz9MFAlamKPX2UDxr0Zduh3xtoC8tY%2F%2BFFUH8BKFsQsPzU7AXBuFuk5sIXDaN5Y4G3TkMfH3XeD23SwzSMexu%2FC7rHE4N1dff5WAl2FMyjwo%2BxIhIcBCnBuyh34hh7x64Fxsew8WwHbV%2BbsNTH%2BBelo989bifAzUJpZzWxZCyEVLNYxf7FWt2FZe0LJz3TpshE%2FICerj425DDJq6RQeZ4SzUH%2B7eFXv5mYU1UU%2F7a1JoObJCw7N%2Bu6ads5VBpR9PalNjQMyyTpfx22zPVVeShKOXK%2FMcjtsASsHIkiEFi6BN8FoOWnFBZfTBbjIrt41UzPSpY9gjkGThOwzIe6seUSS1GBSecsH9Ktl5yl2f2n%2F7kT0Za7fsKtZq%2BzBr3uQ%2FtVf8PbZQARveX1ABExw5GBzs03ufGw2oxBMI%2B47%2FEyKjYjaA%2FDm4A4vYC%2F8pYaSMfJ9phk655GsswasFOQgdKikG5bteFDNbvH%2BxO7DHTspogdOzx8OG1Lc8FsVuYi1hrnhqs8l1%2FNJIwu6bQyQY6pgE%2BSf8W4Pux0c5iR01EBg7mkEwmSrcEJ6SU%2BlpulSq2xph1HlSwWGXhsVnbEk6Xw4PlTJ1Wo5mU4apg4o0FMd2qn%2Frbp4tMDbJ078sWYv2YmM8K7sKQ1%2Fng%2BNAXaAOuHMpCCbdiCjvMaVT37qU0%2FQgY34qmK6%2FOvKYUIFgXhtYyAXfjl1IOyBILMU2NHjvfAsq8Vh%2BKC9KC0d23R493IszdatWN%2BI%2Bk&X-Amz-Signature=2867147affaeb5384994c3e7a57ce4ee731408c9f532f4cdf9f705a32168c6d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

