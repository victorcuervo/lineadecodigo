---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBAWGKCY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T055306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDwyTip03woW3jMmX51m%2Bn2aAWVPbC1pjQuo4ByDFcUlAIgNbIbmmVrtRaBYqFZD34BVRptPVcCd98I19WAoxJF1SYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDOvk4WreeOY6N%2FXvSSrcA11iD%2FblG5hrH%2FmUyHcpcyt7iNiPzcIvp2R16g3vjiDJQRrA2joilA%2F5s%2FGkFy%2Bm38OpXOi1HUUQx%2B72czEBreQjqTrcd4ayS5qymmFdnMc8Yv75%2Bn1WzIfCrOl4huEl1sf14L%2FW3hyol0gbVcGWf0Jk5ILjCgmkzuvaU%2FO1Yd8yyf7Wo2i1Zip62fbfmv2sWa3hpmkADuu%2Bl6UX1p7f96Gbk6%2BwLmbXxn19y%2BLyQuVC88BAl8xYgzaefpnHoHrMQbd%2FxXXM5%2BMlURi4w9CyE%2BjvEDYM7rDDs1zANKS1kqJYRT7DaQTFjwtXoVQ8T7gNZKWgmRHagk%2FcAoA0HIr%2BQPvwuIHvmlMkGhtGDenXDCBvbB%2B7rvHyECDWfqcrqdrfOGyhOKozNIR2IeCKSPn5IBieiP4vQfyEl%2Fy6qNsAi%2BjhWduYncLwfRZos2631y06ImDaNctbjkBtx14a40TusyYdxgbli1hNNtGs9bOTVhZ0WEMEkWoY%2FjUVCTzah9PFlAjvaqOAPytLAX5icz0NElpQn9Ig4UnOJXsZ4R7xcHuOo%2FjT9TC8FpTa%2Ft%2BnTDxMfBYV2MHUwFtXzlzvVOKhCXho4OCVzRzjmfal03WN%2FW3jJQ384o8mVIOb82PIMNyav8kGOqUB43eZ3%2FU1ZaF6DzaVyHKABFZqxuGTwEl%2BG2RV8VedONiO1mujaYpcI7acdDZEiCBYdRAFmik6EuRvCVPS8OttHwTP05HxwsBo38N7mwGSfUCwd25lXKPTWh421Xs4FQfqz1HtiOxfEazOql0BPZVTaqSekqCFgb0hrvkX6xg4dIsbbSeF46mmhdW3SPpGUH2C7A8QV6%2Fh%2B3MXFukZjCx4Cz1DR%2B5C&X-Amz-Signature=1997502a82443c361174923d1af607a513d4c4fc71738194dc218bf2ff1e65e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVUOTOCS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T055305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIAT10%2B%2FhRccfMf4TWkzNZKJ3Xqo8TB4gefim2frJG3aIAiEA5vR9fMWovxMKyRfVNmUEpjNEGKUoVc0WHEoSnSXU3Vwq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDN5tcJlI3Dcm9Eg8CyrcA%2Fbj0A3um3TlV3A3gkQWYzxkzbqqQ3V1zXIiq8ISRLfnd4gySw3UiNpepXzeblps7ILJmi4GS4dxnHHBi8mjGPdYx1fR2w%2BX5qRCC4OZRwKEqx1wo6zxA0BXR4qUd9lFfyYK3Gd7XPLTml24s%2FRxEjVuxDdrfJTh8As1G7pbcnsBOSBYSurZEiKUB7O%2FuxRkU8Jl7brtL9L5RynqhZtWLd%2FVY5horSfr8YOY6Wx8pxZsDIS8a4asXtwztx%2BOEWv59EbqHrqi3MqgZJipC7gnKCA2zgS7neR6ezLey9p3oa9%2F%2B5Ixz2iJyg5j4VRdjozNDdu1S%2B3b9aO7QxBv3TeT6gBStZFFKn6TcZH5IdrUbQA5OqcS9cztJ05f0yG0lzzHRS6YTK8AJDcfazq%2FPkVnhOKbnZLjxLrM%2FW3RB8yZYEOgOppKMY1D5EMDaLvyzabdXJr3rPtOEApuL%2BNtpW2wOBML8Igw6dqt5SBbmRG1X8stt483ppQvkKloAg83X03qQZLpKDropscmJLge5GZns0awa6o9CSq%2BJbkH2TGpueO0hQGU8H7DExIjo%2B%2B1h7cn6Ra2IjeIxWGXzRyK2fMtt8WssJYrPo8%2F6KEda4TxZP1wRigeer%2B9Bh5J2qJQMIybv8kGOqUB7cpLHVc%2FuKC3mRycJ1uwaDjeS2zPZ66crhw9unAYB3GC5AfNnCBnOpxCVAptjHJS6L2lZ0S%2Bv5NbN6l3%2BHq1H6%2FVHovJfkyKmxuKTczXXBj8GfPN%2B74EwCN9WXg92s3sVwh2I7H1GjpqZb1vWiCEZugAGq%2BHg%2BSUdVy1xD09Uky6ypKzx8bMX%2BesnlCVvvxvDFutdGyYcvQGNrS5xuKYoLSRMt98&X-Amz-Signature=980d85877fa7c0aab80e16e578878a2c9ec14371b8acd9c17b8aa35a00bd3c7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

