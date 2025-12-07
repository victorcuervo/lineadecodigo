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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QXLEE4F%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T165252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoojhbHjH81BpGxZjiQsmJFouVDoCGVPHWZFAT%2FiST3QIhANcCM5VpYIkI%2FrDC%2BJLDCFXCZXcPM9Yl0EasD3mi0YV8KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbgzlFGSj1imlUk24q3ANMduea7p5Xf%2FJ6u1wP7v02FaXQHUApQVDUAiUpnV8S17mJzHBnUobF9%2FDbJSDElDvBAXq%2FwsmS%2B5CDsFjT1eV4yM9Dl%2BjWs7bqfzxnfEJlC9XAhlrDDjzy5A7YyLC3YuQNiOKQLQ%2F2n5B0TpxJio1%2FVAnLu7If%2BVY3wF4zizl8gkBwOf%2BQd1j6lQ3m20esgUbnUHUIa%2FIvJDwI9MCuM1Zv8i3ZWwakLNlG056WhYHTo3MLD1VdD4QRCIiHBIr%2BrnR7vQ3dsvu8aJKcUBviqndGRjWDaYsX%2FGDweDsCE3GWlYfDZ7j%2BnJZWdxm%2FdWLcQY%2FJAwG7SjpXix0zX9uZtVFmWFInrpUe4uJqx1VYnMZs3vVG67rhJnCa0KGDbUZb76IWciL93vXuhi%2B%2BUUUf5y6RsOylZ%2F3nrvv1T%2BNSzMQn8jJMXIxq0F%2BQLqtYdwPxLx98UdkJ7Z5dS1O9QqeQ9V6lryylSFHgGrvbjsnNzutwNlkQzPTkTknGFvJEdlnETxEihLB2lrrrjUvVbwCHkR9ANXFoLEhRhQ10dDm%2F5upSnP89O37B3fUobS7kWBHn8PwCrc2QwmaJq3uGKr1FuWoZO74Qy%2FNZCAaChD7xrITYxndKH4z1hEJbTRt2WDD2tNbJBjqkAVwLcgJlaw7mz7czHIKVRRiC7PJEpYfFLTzeKTymsNf%2Boa0DYiz%2BK276POuH3pnSPDaf19ONdahCDrzrfgGVFlVKL1jEDmyt71M%2BPA35RI06xvlOly%2BMTY%2BqIWNizxLbkUEqg9%2FDc3A5kN7daZAn9IwS35DR3m%2FRNb%2FmbiGsV9Knkf%2BBtiwhXw1Axjky9nSUuIxeWEPCQADegH6e%2FuNyMJdk%2FNr7&X-Amz-Signature=0eeadee2588e85592344e6162a3f13b1c2bf5718d054bd0113d9040e36054057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRRYOPAK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T165252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMQkFjYPmLNefz5GNCcthlqhArWdSQwX0poJrgay73XAiBGA2MCN1DVfesshtBh5izl78ywNhGSL8vXdOYN5YJKASqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3H0yivyf64Dd2qswKtwD%2BCbSmrPdbImSluBM2YStDTE%2BpsKqHCxdDt%2By2FrMG4wGCh60ySD7Wefh7RHPD0hVIsCvtKyI5HLLVVCDHh9DMzinVnlzlL7YEAEqlzZjp3rhUezkvbpy%2BFZUu0PVgvugPlIEZY7gb8ngDujis%2FNs7qjtowSIhrnDaFEOrKrdkSuOE8MQL4HMcjA16u1B6Xx%2F3eA5RBcpPVItKR7KUg8k5pfmFKPJjm7bgyAT27cHbj4pQ7dx3KEIjffOQmmTwQmjLf1dCDPwMCj63v0My8cENMitv7kGEuN%2FdS4bytaol5IKEYoOPI3P9rnKMHrQh1Yjeo6KmY1X%2B8sFMY2ICuz8amFHp9MloHc2NgBMwBdOkuEH9i0elb7Rk5MlgQr71BhJAEbD35Su1WRRUNL77jo6jkQubgxsukYCLtbUXcNZISHIsTNi2J9wTQWwyJj47KZgIts1BiTnIcXSIcYWfxkjSQU1KvmLbQ7bAre0yZfyH6qkMvwsnOnqMSy9Fq21za%2FX3dVERKJsWtyxO6KcGyV9nEqyhGNTG5C8oy77AJblpzCIxKxWPtYJBIL6bV7HNpHOsO0w0l1XRhOo0JF9XwllaH0H%2F2CaLFCU3%2Bj6tdz9NmE8UCbY2LMGPWzwCCYwz7vWyQY6pgG%2BjuhOFikxKtk%2FonZ392KVDizXDiSTsc0bhU%2FCMFFTwLxn7xW6kVSHpUQw4BIlwzcXjAWYJJjwv3o8aDvXqGuC7MTll1vN5ClU4h67gg2Jiwl1pkABdzAMaUaWe2CU4eL3Zw49qGAdWdtlfSDSU%2Fl9n6Q%2FPZ%2FXcrisCoq1B9WstQFhd4UXrRVl1S6Kn9a%2BO1Cjw7YLT97KP%2BRbG8VMbVRtpQ3xeyiJ&X-Amz-Signature=2f7f14cf5ec4cead982e50a3fbbd33243a6eee6a604b6874c85e4fc9928eccf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

