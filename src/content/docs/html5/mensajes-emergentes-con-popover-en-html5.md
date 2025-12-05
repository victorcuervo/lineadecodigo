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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDGATHMT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T173820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOXa2bDEYwhe8glNXrGaaLDG7BYzZJuAXvYVHIAmZg5AiBAGE4jFO16lgEHLOaWdBe%2BDXILNjjTFFIZHJ6EQBiZJyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMWWiKEic7ZNF0kU0AKtwDDhVmwwk2tHXjYjoRM5CAQSfcB4lotWVKH0%2Bdkgc8BAm3KjE6hvOb1weul4Flm%2FMRdIk6SCJ1Z978%2ByPUQTXHrd%2BwOG67nAVfEyRTaxhunUbllZeUCDBUhUUkpY3lX11CjgUViY7UoJhIMmrgQ7O99i4K9vv0klyl8FvD17jFxPEWnUshh%2FVT3FbKCdQdV3HPPS%2FfjHS2MgllBa6uAmaCuSTTQI6212dpbeKG4OFQ5EplskyjtCFRTDQ8rPEhPxPNgQQbuV6uNs4HhU3MTkZnqdhZoKy3niwbSTg7F1JbyeWbPV1NavwqkrL89nZorMPoi%2FAICfm0psubu7oRgRBs7fS8VjcMviobcCsgYqffrJrIV4x%2Bg%2Be2xg5yvaWtKR8FX1xJJiGfOGlBuzKxhw7uR2XqN%2B9WgsxEtNzydVSJ9uDtu%2BerqPf8%2BtkUFyGnRbsNXsx045oS0OTwe3EvDeaLY7W1h3KL%2F4eGfbTXy9nLfZd4K5IamKHV%2F%2BVG29ugou2yOZ46WzM6TJG7qwEnRR%2FFCKf3go5V5AgW7m7hJAhOmzCCxWlvA%2F3yPl%2FqK4BEKCUgBtw9wVFrY4zvAJbGNwXWbQ11D4wDB6Jesq6Lbfcjku8N9lmMIHlKp1UMPwYwqOrLyQY6pgEmG4lHD93DECDSnSg0YCl%2Fdc%2B0V01W8Wlgp2YDRpwZTbh28goldRdcwUzMtNAmQmVRLaaiCVdfP%2FRlM5Z%2B235%2FqfF8FORxcu1apqkQirV6G1bS7VKyGU%2B9N0UG9Wg8A4IE8yyU8LX52ZU7mmVPYhrmwEEHC0pRiXrpgI7t2HT2HRa7o8RZpGlwtC1Vbo28lr73Ms9%2BgGK1gpQKXut0S1c5NJDxO%2F0M&X-Amz-Signature=7e03c601359f5ba5093ed5261d90bef89896afcb036a3892597e5ca7c92c4e57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7LIBA3F%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T173820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRWZAcEczcFSIOK2gOpktYvsGXWtDWT39bPlGBbRAoUAiA9ehuIH5v13WgEuVu5E1uIUYAq90TpHHn6MDolt%2FACcyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMHmz%2FNwcdzf8rC7aRKtwDZ0NH6guZRnw8Ud0tYD8an3wP62uu%2B2VcylOcgYJS75Wu8CfFFz5zpgWBFr6UHUMNuiEG9RqWgx1MBy8NHWaFr2MXQeYwf6N2sw1xhDg5LSXHnJ4oqw239DaY97NCYObAQVahpvVaBG%2Bn6SWTJE9EFkm%2BfarqEOwnX%2FVRqhcj9E0TDGsI8h2xX6w7WEoZgntqE85Mx75ejpl3aBG%2ByI%2F3prBTfLvfi3noxAb4ER9rLBBJzsmyCIbJUToMPnVZiXkL2PB4FFeQ%2BE1rKe3fMyQH1AcaEDdZ1qDs64u3xzM6c6HeH54aZf1tgJZtFdUacTwGHQRVxgFIPo%2BPnf8EZkxtpiyrs6dQ8%2F8wxT5UAx5VWVDwIPMaWVQjTlk06ax%2BvNjChkgaRhnqbdJLHc3mZ3Pi6gG4PZL2wg7z5pzT06kXJq9EItl6Z4UpYENoMEq92f2P6oqUEpTCKWFyqm4dd7ukvTf91FmvAIhiHqs94%2FI62fhDPEfPWdhricTrSen5jdaaUMgxzGvempCYpuguVzdY6%2B%2F0fOuvblhxIkqQVb7rdz0d%2FTCXjL1SrNMmKbzj0wRgDeS5%2B%2B84lONB29EwLCmySMritqr88pjWZOOfENwynvoRas6Z1cIHeA1VOVcwwebLyQY6pgHPPcZA0FSPoo94kBXvHZp4dnghNya2TFtvx%2Fpf4USbs0dnXb8RiEMVsqCI4UH8Ly682grh4I%2BmgpWI4IlW2BP%2FBOOEMvJke%2FCkzwL2mDyjlp0WMgCvPgnPAkylfIhctQVwovcpCtAivhEXJZo%2FAXC5atS8JWTOjuR8TrJlpg2poiN1Q09sIRe%2Fsdd1ts75OyfLjn9jIqjnwXGfR8z6OQPfFFi0nJyq&X-Amz-Signature=e8a2dcd97c9468269e440dae13076588c151c419e8dce19cdf9f737ee04945cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

