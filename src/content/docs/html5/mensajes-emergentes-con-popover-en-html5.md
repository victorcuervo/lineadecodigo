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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOM4UIOE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCAqwIPRMxTuJelgS39E%2Fue4x6dqVvJ5ovimo73qAx78QIhAOuSWyEmow3AskI5%2FKVQ1%2Bvz5JpHkrgWBh1OD8l5HQOMKv8DCDwQABoMNjM3NDIzMTgzODA1IgzLXTAD1ANxdhIViqgq3ANTxjLibNinvwtBjaaRPmHRzG7YJnPaTX4CteGf6nhrBoccenh7xi39vrzr%2FNEsw1rPBGQ3cvsUBQjsrbQMRgPTUoCE%2Fzz%2Fxj5GgsLuY4MeI7rt849eo1ysXYXuj2%2FZoOCtpnMNIUyS7teIiRdtwgvZhaHI9Q0t7SohglFxdMwy2YFtCH5X8ReRAiJREbjG4iSiRz8TqYKSuFbvthorfkiNP84mcvI9wgFpjUv%2FOSbJxBnySpDsqtmZm1wLgDL1uni2EVeFJNFoiC1qF98aK95QK5sN2eFlCDcFLuAuy0nqJrts7DTC3uhIi6YpAge%2BRk3A%2B6SdfMuoTCnMpJJYdz9oIIoADQLRHYdohXrle95lJVTUtVXVf4JHTuNXOwRq1IltVWtQdIJwlGWexvv5ZHOdUQkuZV9IP3Ul7SmglYGgGNGDzVNoqeHcJSP4zs7h5S0JncCe0KrZvph9ob%2FKX1JPa1SOt7iaAGuiWCuWElPqQyO2fcIndeVZg9CcKyLrLV1MPDBy6edxeRzx%2BasjxLTDzJtkh2rMc%2B7ybT00YbBdApKqymGcNruCm1%2BfNrD%2FScf2A7%2FgVYMbCRXVliA0xVTyH8nGGC55I%2FNRvsbSUgYqVIts91nCp3pHp8dKEDDL88PJBjqkAcZWCAKbgkICp8PQy883kwc88dRsMD6hfFdyvEiowH6oouultKMeonDNhvwKznViZe8rSbCu7osKU0wY4RZt09XGJNcmurjTFBganemVipx62HbRSsl%2BrKIVJj1Is70moxWHtIvNro5jmZ2HM7rpXvzwS8%2BQZFXlmWDqtmVrKJ8DWU2x0r95aOaO3XJYExLQPzSSkKFhEWg9gvoHKEAIYmk2Xzfc&X-Amz-Signature=493390fe646cd8e985af8b28e45a0c2bbb38889939150aaff71f9e8a602b3bf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFWCOH5G%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBg6RpA5xaOf%2B2DxOTxMaT0Z0yyNxu1v03bg7%2B%2FeMJp0AiEApletPu%2FQX3kPqkmg%2FIPNqbjn00ysmMzEVtVTnUYrZCgq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDFGxKfXXv8lWMAs4wircAy%2B1KMNFjvRmiWhM2CRHMlbMFYPpqJcBQaCYuMpbHjvYdX%2FX7lLanL80KSrS2ErUp08Ip9KXUNYYIVK1lTbW8dsPaFHA22nCPWTu6lwpIoA2vPqltWW0gXLB3Ec74iAgVwN2ZE7VawD0JMQJLX1s6jwHtp7V5rtRGIjZhdv1Q7RHwK7ZKcF1KxbNF2WIL3HvL9iwTx%2FRB%2Btfiag2lWrF0PoY0EeHcy7ILuhPYGpj%2F6Cxe7ix%2B%2Fde%2BBnRm1NIr0ikJCs9ONPScO0TGwVNfkc5L31RYyr67ZCQfZiSGNh046ChaTl0SFxKBOh%2BGH8nYEz3rxUF5fibJFwdt3vFE8uHBTX%2Bt0DnYVutziKSH0V565%2Blk2G8EC%2B4CI1tS7yzQCRxmKH6DCl3JepVrucaJqSRDZRKHgWiUWFV99tuazAenDzerYGaASMjPx%2FdrdmxLJGwo%2BxGzQ%2BWtQTQRf5lGdCCmdk8d5CK1Wd%2FLutc96h82j%2BpvcuKppaAk0CiAMykrIkyZ2ycq0TLZ6knq3gy%2FrzHMcLnBPDBJRoYELhQmIGT6iURrG4hhDnOXA7JM1EiOAi4PQANzk9z5RTtQM0DN003hSLXs8UR0Z4FtlWeYUnUQSFHNGF%2FBgr8aFxBpfFaMLbzw8kGOqUBPO%2Fd331VL6uDgBz94cbFPQBKfJqjFN%2BnEoE%2BJgTTM4lwI3Vn%2BEQZE1FnO8FFffQD5EGgCeR%2Ba%2BUYSBknM1BiIQdUj9c4VOmXgfgaGykoUo3HDCYabK5NkNQK%2F0F0TPXOA4TNBRRzPBgaqLt%2Bbab3nHo0cZBiSz2QafZ%2FqaJsR2k9O59rGqRtWO%2FsD6XhOOGCd35CrjxXO%2BjNGR7a4YPm4rQv9C9h&X-Amz-Signature=bf40d35895b04eb28e163b5707626bc88e698bc04ffd42d324dfc57f1974c66f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

