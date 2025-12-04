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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FOCSSXN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIFZP0ovPHiJBGHpKVODTpJbK7yAiDSdKxbQPf0Ti%2BHpIAiBaS6%2BZ9ysIUq2ct1n8u8SO1JZOOKJk4PSJu7K2B%2F6wYir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMVgV7XSO20u7kKXp%2FKtwDLsDItSaVsqCmsyUyw5Hz9B0iv6MQzjQTwijSpzel%2BD6g3GK31ZRwuv4EOFN7thaMwmVm4MKXsDMRtlQNcVDwJhw%2BFVOhFoogSjCalqhAFvMAkJX1LpeJMMQlaHmdlzi43XQrkKFUbnKS3ZFkScNcKWlHG%2BI%2BvJzy%2BlmDqe9N7ltFIhA%2BxTB9FbpuP4klH1N6t6KZDe0VjA7gDlF6%2FGJpyIGvahr06WWhT9w2EKXWJ6M%2BE5c5I4fINgU4APxbU1i6R9Jhfh9W1pSobQGATy5mR%2BjEGJ5VRS60B0RLjihhacsBhG8UrbKlBvbMMA9%2BhMu6xEnDPPRirNNmEEgWtu2UYoKGEC1xNX8pxNQA2BXCHD49Ch2bxr38UhN78xZElccq6Y49YBXzLEcWLy33OGWeeaI8ldZiVQ9wn79UBXbx4bTkqaAxWslutprTE4HfVrPOCJzlIKsoUi%2BR2k7pGzwr8jCouR%2BxSKGvRFbMvsyiETj6YkrOqWJdU0%2Fe5rK31Kf%2BTatSUK5Iov9tyXoprZw1aE%2Bdr2ATFNW%2Fo1itNKmKD2PY5r3wrP%2Fuxi4GbMUpGxuiDTwM1S%2BlG2jaKwSVBpxdiv5IBZjbXlXNd%2FyYUn1jPjo6Xhoa2pynxPxP5egw8oTFyQY6pgH3gswm8jPl8amCvLlRYRKutThiTaCPQGY5D4VfPPmHgqDmb9IeTuPsNNyw6tcS7gvku65vdRuu6O5%2ForP9IeLHycsgxkMs8E7dQwRpRpLcpKIbG9x7f8zxqKKcOGl%2BCT1nnVsWxmF7%2BIxWYvFw1g%2BqLR4qdReGhzleTY0poYVcNtUseL%2Bf5CcvlhARBdHpmXOD2IQrQKurDsuAj1aSlZ%2FY%2FnK91ZoE&X-Amz-Signature=4c68d88f8c1572dd2cb6a4f1a9d69d2ac1174d0003e114e790f18589ceaeeaf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5NTBLZ3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCSw4wbz4StfV4mYZ8Vt2KbgvvxffQeDb2IN3WWWdvIXQIgXgy3cKf1wP%2BmVWstIggNX3WlaFDQVsWsPlv55KA7L48q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDH3OmyWmp8V6joH3eyrcA67%2BpKAmyc9acufGP1t7XvJfcn%2BoXdUwiVhcbC4CrBp6%2FrKP9zBC7dDD1ZXdAYix19QIVyqHKUXcKt5qykOi%2BIn4ogUnTbJuMHUzC56jthPNbi8K7h6FpKKNTcG8qh0L9EACzYYPH%2F%2FHFYiJVTnuyjMrEvlExbR9wpnICteXIDZrYQSPZS%2FpOozcfcgo4IDvAU%2F0qKZ7spytFC0T4FKCI5dh09YV%2B%2FEdhlpR7TTYAaNo8ZKRipWU6iEDIFKM8iilFSTogqMpcF1HQDswm8R%2FSo6xP5jl%2F5EjYR8Mm4oVu7pW582DsGb0Lyl%2FQUb2Iz1JrQQm%2B%2BQ8yv6IO7gqjPIUmcJesv0jav%2FczyKjVj6PLTCbWFZGOmHokU525ovNkCtIhV%2BodubDjgOhVLIylleV2oFhjqe2viTfzuLGx8JS6LptK1Iqzt4V%2FXPOtVl5BVCHvcZNBxG37IaQl7gmDgvpD%2Bfv4PK8EiYk6xw1qWJ2D7RQB3ax5hTTm29Un2jT42XDUfcOqYohqwiyd%2B5n2pLTnEW1BKGAHVW2D%2FvaFdAMFHteDF85gPXXXR5XTCTLGStw%2BOilLwyeAQYwtqv1YCjxhFv3kspRg6kd07gcIhetAT8sPwSPlzKFqPN6B7wxMIOFxckGOqUBgaHOZXI1e5%2Br8Bwu1SiayFkcSysnf2yP1hp67oTsMccoZUPbvyKzd%2Flw22Rrpe5QotHgDKQLAd8e2g%2BEZuvpirONqqPPIgGsO036lna%2FQdqfWKZtYxitDl0tXwZWP8K57EvnKKgiJuihBM8RUpCq4AB8v3fDnrfn%2Fv7o%2FsQcVSRZ6auqypknSmfzHrxO%2FDZagqNafewm2%2Fwi7VfPW2bFqtHpaTcC&X-Amz-Signature=d046fb29cb0e425c5185c3e61ed29c336c30711dfa5f09558b80660928746d32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

