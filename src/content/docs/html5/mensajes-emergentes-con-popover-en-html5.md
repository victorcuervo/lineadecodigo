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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWLFDUZG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T082734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlI0HIfg5s2rRcwd0giuW8NgaE2rM1ZXPKOR7x%2FzBZUgIhAPtQZraxfbCDYMOsllyJ%2BrOQNz4%2B5VD7wkjfo3jJsba3Kv8DCFUQABoMNjM3NDIzMTgzODA1IgzBsOKRg5C4bxQHP5Iq3APy95L5NcKZkrZhf3Gdk%2BrkJgK2ZdlX7GsN84cdzIgCP0p5WRrLg1ulNcFoGdAszAOTFCrzuF1OtDJg4XoyWlcT%2F3n5pfaCyCwq5H80fx2iQ3UtEVXsVJfGnRAoMCpnOGlJmfytZZlzROml2Dhi8U603dSlhgcGrSxGT7W9e1NACYEYTm%2FP%2F1QHMSGOdO0oGjzXk61Dda5Mzqpa9Vv%2FFLXtQXuLZVxEnY%2B4Mbx787WPkSjfb%2BMoDm125dr5se55mb745QNeSZBadwDU9l3NuMh7yXGvRuPOTTq36z5bjp%2B2XJ8uvZvApJqfY5tRZMMCo6T%2BCYX11le2g7WS3tCRLqUu1JAFSl4xKpFl9nJULBfsrVPqW9D%2B5fvSX7txpRSYsvxUpwnSMl6cWEbXBg93eOJCpWCbcqgK5tjGl8qxGiOMJcFSn8aJm7x9YQlrxvlZ8HvpHQ7QrUJPwOyvs5mY8Gy9%2FwW6dNK2VXLiSk3nF3JI15yHYN7XzTlW6QnrcD4h%2FMXkJFyeFZZFgPqCL8J1GXx5lzsxJTf7S4sIhm49BtFCmJ1q6jX%2Fi02nYm%2BgTdi30ERf7rZaNN%2BRRO0dkpktwf20yEiOkuDjKTPd60Sa%2BO2AFUgvTzPRLZG2a05VHDCxscnJBjqkAeG%2FHlecyD%2BRR8PG2rdb7VPktIattltH3%2FTfSNHmtt9v3KKeNxoO6FIWYvHdHtPKaP7qyQC1XeYMtv%2Bowo9%2FYtygNDtBcI%2FUIHZjUuS8JfQ4I3B2AVKVF4vJn%2BNEyhpORgSTH3fbvSykCLHoS51pJLVPKxbs29wy3T2p5%2F2wQ0iAoPByy1bx%2FEvkIS%2FMeimw26wpAEwqOEJuous5s4AvM5S%2FF4wF&X-Amz-Signature=9bb916384a4a8c3380bf55a43def9d77d186a835f4f7fbe74498db9e83e6264d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHIXD42F%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T082734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2ybvgQF5XEyT2k5hifJ4N6ViYeUyh9n5CSPROsuZqQwIgY47rVyWfsAHiWd5zdjM8tEzN0TxrSK45j4l9goONt%2FQq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDC6DKXhRDN%2B36Wd6HircA8GFI7BOXYgTwrEelVk4uLGWCw9jfr3nyN%2BbJ%2B8%2FkAUpIQWZufuazo84gSLV6rI9uw6gTkLaUBNghzpKlOZQDVDKr6MauAbinfMyhmHUspEHSRQRW4A1YMmFUry2WejG5Aez3E3GhiYg76JJW%2BYuf50VreL45uK9r9Mur2eJF%2B2clp3BbKgz6ptpOA6ytU0O%2FQSQ051wpVAmDgL%2BupGX81TFC2maTIrh%2B2hIOzACcU9dDEzctPOKmcqIMfs5ip%2BfGO6IWBBNqn7UCxreT0doW70k8HR2MZPGmcHnEkAnJICWkLaLUv%2BpP%2BQgoXZEmJJRfbjgk3uHcf0jNfs6WHRZxyyJRfE8zrruSL8N4qweQ6qKH48WdrNWYzERC6Rz3A3%2BBKoGySJBftTKYR0RWUOfk4IgZos5eutRyDgdM71qUZ2APiZH4svOUX4msUo%2B7cJmMuhXGX18CMKmxhgjRc%2FHu3x%2Fhu3HZv8cgJzhldNb3BZ1DkoWiywok5BasWJXrs2rskL3zfLzMvyBEk4mZdndaXl1XtrrtwadH7lmOKfjn4f7dZvhmIPPPOCedJOJLIUaY0tttEBPUcJxQ9RuE15i0mMBfrd6%2Fzrjn%2BW%2FCdAnFZdH9ps3IZTJrCNQE%2FF7MMqyyckGOqUBE6Lc1oELMbBuCSgCqHlKHUBh9SEBlSHIbDoBOnPMY6SN%2BopOLb7NbiMaej4nvZje%2BODyzEHgUwmviyRMYJ2Cmyt%2BxGo7bmokPhDY1FvOAB2bOzJeOEmsnq0hYWbOHuJllILiwoxswW94L5zTOztBxVfvJnKSSgVUThCMxyyylax7RILqq3HLmNTPTqyHW9OLC7rDN1YoeXSDuX7sgUlolR1rgUod&X-Amz-Signature=7f154e38d186ef8a4f95ea22af95b49488125e7e88ca7768f88d45767f601cf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

