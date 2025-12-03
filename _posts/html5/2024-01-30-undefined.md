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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665THMRO4P%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T023539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICFrbRtgzXjpsqkyRlvwt0cM1V1x3e8CqkOd71euHkE1AiEAsg80nMNeEblzREucpT4bUjau3fAG0YVH5sPp08oxtJ8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDCGDBVArHR6YPbHmXyrcAyEuJ%2B9kptZUU7vvtFWbmLEtIOjyyZ3A15N1zV0jFW1Pr5DXe8nMGhCkSdHg4yl9eCKRXbHnGvwy7zSnQW%2FcDZsduu%2FBbxlzVf5sw%2Biy4%2BcaC5JAV0I3uTS4%2BIjEx7HpClDLL7PHSg26qyGAzbiPG0BQu%2FgHBuNiXJvQjNxAY9LKw6Apy%2FoSqAtywgK2k8qfBu1x0NjBSDpILGgp3eyoQDK%2FpdmXFkQpkiUObFIZ68ykBP56xNKjIxRxgfo9CGKF8KivJJ6f7seAwPeuC02T2YUyAyNnDWDXEfJ%2BV3flAIpmLN3aS%2BTOI7uNagAPx%2F61QOSVmW3QF5%2FPJAeUQ%2FV1T04XgNDdCuAxigb89jjoODbgtoeYSffX2NNYSjPL2IfAhpMlyCcWNauEIJQd07EKhh2gn57Vd88JHEfMZF5KUV4D2g1dt9%2FyLTxKPHdHUXF7cnSE94FGqiDZJHx7RT5TEle9IC%2FsMl1BpMlz8ZegoD18lJbmJdYKYAafToMwbgCFXSJT2deQYiY%2Fn4J5TK9kQmbSaWUyuTObgs%2FwI5IyhzakYIGjyvR0bL2CIMs8ZW4b2UfQSWXP0%2FtxIWypVYlkGX7JTBCQhKi8T1yfwnEwwDVkL35CQhD4tu2z66sGMMGWvskGOqUBqa66fmAEAAmyw2AHq2kIe98s1dCzxAmpAr%2BfgpTXyz2a6RVSXd96q4mqdBkiZvXTPOVYCQJjPSkYEK7dGfKDDuIQmFeuWDid9iZ7kjmwrH9HQnRYiLWFO3PAePA4R8UFszKfqXZUTkJL%2BffhO0hFWznN%2FYwcZXRx2rWBW9puCbYGrant1fsADODL866%2Fo6Ws40fXfisD1QUWTPYzdh9%2BDxGHGq2Y&X-Amz-Signature=2b96595c8c5d37a4c9be87219d5cb7c8a6118234d2b9b4fabca6baecaab2077b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVTAANIH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T023539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDvdK4Vhf03xmnO9e3O8F7YoYxGaWMPadNqErQbztTsXwIgZEK%2F9B0Amgxu5IENSJzj4mtyRM4VE3hho34YNHROr6sq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKUD%2FRRvmfxmSrL38SrcAxl1OMR%2FD%2F1LjSEEr%2BSbtPCV9eiKXQ3Ufd4Ah3yiTaXMZSZkKIO8aS3Cq4%2Fj%2Bd%2Ft44vRfi5cXGfxEoGHyCxFqjUQ90GF508j9yDCT6Uh6ajdhwcOtYCwV%2BFtjB7tjzPQSGzkZR2%2BKjJjqf%2BFTehz%2FbqSegDi6EqhviFdwvCejtn5rgU6EWUVlfTO1YwIth%2FJiPsAZixXlmwZXeFj3aRQyP%2BCJdZIM6wE2J9RsSws%2Fe%2Bc%2FNQ2mxuOVVVaF9Hraf0m%2FeOwZJ5zMS7ngHRzK17nZdPz0qYp4NvTD6PoLRHLNDc8%2BemHYdTfgSw08STuDdRUX%2FH2oHUYN0fpgtg0k6A59CS8bseKVwR2J2UBOtLhjSHXIqBLlVNTvmqMFBSu9rdKp0JFqB%2BWAWBeamqQnXGAfi3U%2By2T75PvkW%2FenmBbYf1qg5hifphjOiWBtkUAWRNHCEW18dQpjcpRS9yRatgAlJRpNAFVA%2Bi%2BCHp%2FrH%2FHwmVbvTi8jwO9b4229POybIoRl6IbbjkePQmGNFHz1ImOIskfofRHD2YW1Jz7XP8lFapqWnX7GJR7%2Bu%2Br%2Ft0zOf%2BbiWTv4Tqrrc3Trt1jlGS8y%2BHM0ECqUuBoQrBMt8p1EN1yeP2AaMTAGBuhD4myMPyVvskGOqUBCrV73ybuJ13%2FfNEXKm5046EyCrv1tH9ZSNVHWJTh4P8a47l5K8VuX3A3TQ9oiuHUI6cIRc1a8e0YFCld3PhZazbbnzWQHTU3FS5pjimtYHr8o6RGmGPf%2FALjGY6HlwpXd17bsV44VP4kjCgwANdqpKOu%2BcKGzT9TXTptjj%2F03zT9dBXwE2od9UO7lYYeVXzo%2Bncst9S5iICdPZ%2Bxr7frj%2FjfXdQY&X-Amz-Signature=0b0a412699ad77c044d31db3b464096d8c8c7d888ea00e005bf4032f79bedf90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

