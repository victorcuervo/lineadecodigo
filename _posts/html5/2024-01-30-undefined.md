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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YODGSISD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T142419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCKZUckaVovyB2a3aFDyq3o0tGUIZqxH3p81hZAKhEI1QIhAJPMWGCDPSJpvSBCM9VK0M6m%2FasFEi9CGNEgVIS9T1PsKv8DCC8QABoMNjM3NDIzMTgzODA1IgxXVtP4PEVEjHf7h%2Bcq3ANrL02TwIyAj94R3NQ%2BXfzfmheqvdEDz7sHOO9EllSi5cTQzc3tsVm%2FBp%2BF9aQ%2FXzmdv%2BOlmxjV4%2FvrpyFhIgg6IEOcoq%2FaOUQZdBGgBqKGxSRyX%2BGAr3csA9f1KxSIwELYocz2SoTMx14SJCyuZvsQn2jOttCUUXH0PBQmnK3TXqA%2BzsjIMMYKzu499hNEFY1umeCaCa06yJOn6fXGhDQA3yKAVbyigosB8LCOaMxXWKH6JiOD88SFo5YUusNAyX1Kpa9vkI0eEEuGltGaLeYRuUgKdEdAG9INiaN8Wo6F9zyj22CpLD0oJOEkwg60zxIU2otNOFfcBkPlg33nVLdSPQk%2FfUqcTFi8r%2FCCB9s18nkokzod6M%2Bh6Px%2Fyog8ggljX%2Fm86piIoTzx4pYajb5ugoovzZbHSO34LIMqvCaWZlK3aMpbJHoBAxLJFf6qK76WBYzpiHXG69ZEFtlYDeMFyhgAVlGajhYv4B7ez0DzODWg2s2oipHN09T0t3WjByz99XwwsJ8cCr%2Biy2kwzNVC6KtZzYfIgYawqPMmZwcf7AIP69IYcqCqWtngCNV%2FbRddVDKutCZMpnsgdhr40DRQ0QcapoJUKSqwTUEzNTI8HpFuLBAaPtolUNtD1TCNh8HJBjqkAZqENiQaaHbG1uNFNiUcNGoD%2B7r2LMKHp4Rp87C5qC5pQx5vaWoiwhIRRUdmTrBZj2S8YMTi2mNHCvLP1sAKOgIZjJku4tfh5leGRpKdIWn0KH%2BPxvN1cD0D%2FSUQW5L5Ep9uBH0v%2Bm6aTcMI2%2B95EldewaQsrw7v0XfKIK5w2tw%2BkYr%2FiUaE2LHF6ss6G8VBP0Ll%2ByC2jJe1qIb6P1Rd9oDUy3s0&X-Amz-Signature=4b2fe4f1edd38cdf65c670b836086d7c78b8c2763e1ce42a7ea99c0e4799d460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S7PAPQM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T142418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDs8ptufNnYT4oodMpcDt209fZraMFZq3tOlMR%2B1SRWXAIhAKTuFcnxHfWrh1YblhHpFeaU0ymVw2zewrTCZysyl6kvKv8DCC8QABoMNjM3NDIzMTgzODA1IgyKqblGtxQ40KJT8REq3AOKxP2s3Tm4emHeZrQoBVBuhz8C2oz4mdY80giWJo7PgvBvVIf2eFT1ku6vED%2FIhy%2BZYwOvmCxhsEumt99H4o9r0ESSiok7PPL%2B7AEzWV4mgxHIc5KxBzoOZyZESgGsLuRyuzmyzNbWfaBL045xJ6RSrSpRAN88ANxWQTUmrUwV8IbJXE0dkpSLBlrmy3irjclnMscnqvZtyzAVWXOR7vGMOR0HmRJMxEBl%2FvZneGi1PuAymJaXAGc3ti2%2F6eJeo29VbGgkfmSEkXwM8g5aSkyy7%2BTo8R1jY2LEyC%2BDn5p7ORTvh63uTwTOdqca41lDeABfVjzyeMNzVvGp1EgvasjGE9oRh2PVoS73tVMSzC4ndJWuYZmd5pCTz5zuT9UelL1tQwG2G8VptE71VxFXnbfsVUQD65ycFJcKfqOaoTsOPZZX61tYmNrp8vdLQ260HLufuB33khksfNdmG0TyyecEa%2BdCOd%2FZwyayIrdIqFBTWBaS0iaYYWvJRUstw1Ul2lrGO1BKCG43J4crhkubOSeLnWnDCFLVaoy1yg1C2fyAUWt0nhitrGTQxyvB72E9EBFJjfcbB0QeS8X%2BA7ud8%2Fg0yyYV1N%2BEmf7YdoREs3ze%2BNgwwFq6UW46GWcjyzDViMHJBjqkAdKHB4pIP8bKF815cGTNR5ygAUpayDSGc6lB687A2eQ4qLSpm3GL1kYuL%2BIk%2FRgsbmjQ32zBI7RFU9mXiCPY5vfwEYm68U2V%2BVBEY2OKU6G1OWHSXloCbRynsJR1OAfCKfr46Uv%2FdsQSPaog4aIHIn0Km%2BM90Kzt2DXgk16Y4b6W3ZT1E5%2B375JyScSsb32rumC%2FLOxm2V6dRFCM9pjuiBYTnvC4&X-Amz-Signature=c3594af73d3dd1cdbf1ef026cfd5816b3f85e6f7550a006fb55629764fdfe50e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

