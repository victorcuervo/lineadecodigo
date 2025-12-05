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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHA7KL73%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T221802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICx4v%2BkbPJbhyg9rpPr9YctY97Hh5u5Q%2BkOX5tCAgNASAiAcnYT8Afv%2B5GI%2BTLH9KsK7NtweEx2FAawWrZqGBgX6LSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMogkfxCwqOnUst0IDKtwDERxxOCQqgp8bFxbNczn740gHcEgUZDKbxrs2uciwBFexFQigATGy67Y5h%2BFMkcOKtWzpbSqSKQQBoV6ygtvFmyZD876ci9ui9vp8KCTvXTL6%2FoHK1BeOG3xf4GF1BN3%2BD6Z927uLv9R7F8ybB5f1Y6Lt2gKsu76J3d6YQvjYuAzJORpiIYkL1n0Qz5pFnQYi0YlS%2BXIU0ODsplCKhC4yMCAK%2FmyXwQSIDHACBQtl0y%2F5NwyMmUpcKifMbeC5f9Aq0fVenKVPWbvoLQKn1%2F%2FsRl07iJAyG1CxQWt4BYF%2BwD4vM2hq05Uz8Rb%2BeF28LDeHllONvSKpWtMFGXin5HRpxwq8Wljk7xcBF3PtoR%2BIt6oLNmfugSpqwGLRVPglXzZgIDnHQbZ7bQA8k7pDdjkqDwMQMAiXy6hDPZr0gu%2BYXrrPYV1tfVM41C1nhioLzdTnzexvISY3ld6cVhZ%2BXH%2FWJXcxR5BCI9hXdoj5anWA7eVi8xQmC9cUJVRBC%2FwBqaqRGthR1%2FX3OHTmtqNXUgYPpYpiS3XL9lxZTDY9Ewhu6lVITWixGD65fgK4AWLGxd1mYh9hyXxik%2BLeLfHo7ZFUm0gLJZFyp0vsRMEq4n0NhGxPfW8ACRHamObrR0Qw7YrNyQY6pgGcbl6pQXbmAbRwquyVLSGTMUGwAD7%2Bib5geaTozouaGKkhafvvdsGc6L%2Bv68UovgjIt4jbNEugoeRsbbcY0MpDel%2BsbYLu%2BY19yvV42ON8LDwvGMOGZ5VquajS8PzKqDAqn8lWvyoMK%2FRija1F5bH4Fw2iOLuX1FHrhywPzo5HICTxdrjUqd3hzV8zG80c3pCM9%2BPS09%2FqsA77uflTpDnrawC0tFDi&X-Amz-Signature=1843a40dfe5493fee22ea7e5c81fb6f9f09f070b2b5289ceaff0ccab0290ff97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHYFFDXM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T221802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUPACiam%2BT8igxWPNTddOzbRmnhBsqxSAbh%2BIzEoD6bgIhAN9Jr0kbJEQAJj5bA5JMfBDeDXUw0SztD0YDscLUhe7AKv8DCGYQABoMNjM3NDIzMTgzODA1Igwoe4PppjMbbab7m8Qq3ANmOp9f5yn39m0fPpRKR5p%2FC0SOVxKkVXTKVfyUOKe3D9Iv3DXUWc4%2F86%2BEdfL6Es%2FQyWMnJBdV33IEf%2FWUKZ%2BD391JSi%2FQWcXiPGStMzE1je9hmiEvkN%2FKHqsu6lUKvAx8mTCKBPitS5HsF4KhcxeNc5cTHtwezrI1sDYf8bcT3onZ0y1QlXpRxUQhhcqVK03lPybYbc%2FT7CTR5IV9Dhj4BD2Vc%2B%2FEv3QF6NNRH3pKPG6hRt40W1cobVWvx%2FZqUrI2CbDIbQg%2FqFYES6dyR4S31heBbIkmxvfmkUltqmW933%2B876Hj18b9CDTyU%2F6hbpEc8%2BgCy5HC26cZIX8HcWQtgeXX3Tlm0Iiqts2vbND8VLFY3xCCNZG%2BaCu4Xd1juY9I5vK%2FiT%2FrJiA73UNlZpMwk16kzuLQffCetVq5RCSO34y0SOt3KIYk4ZYHGXwv5A2J%2FTKzwnilMHPcCs31uQtP%2BGhHtkXp3je7h8AKlCIjsKj0Fk8NKDKiqgt%2BcgA4b1nRlJiaPNDjLln7RV1x8uNfLq7d42LGro8Nm1eNdZmKb4pmo%2BnIKWWLGQL6lcZRxWq1oeGjOwk4x4nYpBbsaAYwAYQZ8gR6QaPSf%2F13FSRo8GLHzlVOLBS3Kvt57jDTmM3JBjqkAcRpAu6EVYz6Vq2eGdzu5xzBnIPwjFe%2FWuDTwyc93s0qRhMIK8tPPmTeAz72IdSaH0hKqvPCntaK9OO%2FDaZusQTSrbdV4z8vhtY0%2BU9b1hsUWkRGqLqtIIm192UMvwvsNsEFC%2FocKbpRDhhv0rpTOYq4j1xkNsLjBD8y4U4Q%2FI3w8QSGRjxaxrbxYkAVMTEFRG7OUecl8o6jAalyp3BRTTsxIXgL&X-Amz-Signature=3c94cbc29c505723da9576ab8720c75b0f14318bda43b6429052c1c593af1034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

