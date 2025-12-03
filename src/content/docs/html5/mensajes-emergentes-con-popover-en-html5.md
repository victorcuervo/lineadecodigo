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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS3QAV4U%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCg2dTENGC%2Bt1yPAVMZkhUqwchKcHShvRifsRkXQygkkwIhAM26%2BXEmXDl1c%2B9vSC9XJznff%2FbSc3YljQXwsE3zPMvXKv8DCDgQABoMNjM3NDIzMTgzODA1Igz7SWEq8k7yzWVhZQQq3ANiYudGwnxLZ7YfoamWibyur9sj5F63NkzgE48mUr18tivF4TWto4IRtRfWyT0vhjTHFn9yHV0DfBo2MYreufUdQYnY0THNjDIw7%2B93pOJ9HgCy92Y4UcixNOf46p8aN9pwUHc5lyKNsQVTl1C8hUIW9VTKPAU9n4SA0lZOsAFDzEwff%2Br0ZlMYbm6TzOlhZycJWs7jV%2FAEffq6aucNOGyfJXHcoZqtzhjuxcO1hJ%2Bpzf%2BxL5MXVJ7Ujl%2FaRwvo8muhuXAo68QFS%2FSs%2BeQZWxiVV5Hct%2Buk%2FWzGoaLoetLmRxYaY1x%2BjzegUAc%2FwurxDNOD07QHY2P8rcyeOeL4rxng7rWO2f9cv0H1t6Xyr3SrJBX9LkBm6zCzQCdVkuGnPBgsN0fpz%2BP8KERnl1lxi%2FNbavhaYADLZ3kdd1%2Fq8Hs2S41x8dZ%2FD8Dg%2BClo0GaruG757mFC6sZ9bg42yJoB4InU2XXEXDzWTKSG1OtIqnnEDpTWeNc9TtRaLh%2BsAvd38BOFXRJm%2FlM0%2FGPF2szN2AV4CMKfCvGPX5SRTZliHL82yLOJJWGJF9cXfhzkipCkN1Tu%2BSj9X5xF%2BQpbWNEGhtfZBSvAYQIpJhebAu9ENtrSnWzaLH3W5%2FzrOyswLjCz%2BMLJBjqkAeXWlOM%2BiOYHbbXEXizO3qruNSTu%2BGwOyvt5ZcyUb0IZ36HcErE1M%2FXP9nC1WED7YTV1ytcdjljuwyBEa6v1gS41d3EK2L%2Fr2DNwGRPPQs%2FsIk9acSGw27TVP7sfew0xZ4lLSSOMfBKaUmKu4nb8BFHSn92dC2FQMB4qgAWWkCRY43KpW1M8glHnbPaC7OPgyD%2Flp1OWxeTQk3m%2FgVAlwpfCbil3&X-Amz-Signature=81ad978156e035458becc9e0fcb6ad9d024933b9f789d9c45a3f6ca7d8549bf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG44OYBE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDBkF7m7H9Ntn6LNFCnnuzChtjU3VRL51UWSzCItKPsqQIgeRXpGgMRnHteACYWS3H3MP%2BSx1q2aA%2BaP9JlnkrPLrcq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDJcbOk%2BJY7QiDVGFgircA2UlRRk6uGLTgp2gNCU6i97C4V6V9Li0NcDiu%2FXl2GNoW2FRQU1JyfEk%2FHt5i0H0iCwHccN76uAu%2FT%2FvB9d%2Bt3WZDcVyn0I2oa%2B1tMsYzNCWx8RjRjAqQwybSM9dSxEb83CbNqfI0AVx270JnvNC4%2BhjBZW0MLBKOp5qHJB%2FH3wbVxje%2BKbaCLB9vsg9%2BniBWVQmegNPHA%2F5CdYYQaFKoAtk3yvD2tC2DrqBIabwgUMNpVk%2FwH2IPnyf1aL58%2Bc5dAUGGNFKIJSw7PbS7tuuXRzwO53K3QnLm6vGN55U3rnTwZNarBY4glUsYgzZq%2F22NVyjkD%2BVcWpxVYlOxAbJG0yO4UO11NSJqNF2sd9iF60NsTUwamMONhxilUI1aLMfMr6E3%2Bq5Gy3u463KgwP%2FHAnCRpSm%2F9dh9EhVzu24bJYVYcsyf1mX2iIWLhvt8RsfENo6anfYUBJPnSRkHW8HY%2FF%2BboiOurWaG41kyV5yU236jQUonnwn6d%2BdUiswGsNBL7uwTgJhNl6wH3syGJlRr7AwZ6f6n9WdPkXG6Zq3SxNF%2F8%2BNCpqoaWSl3m8HfxAKUeVk59NLzUfBWzLgQi%2FLYKoWz%2BUlw4qkX6TJpvjU9Xb6Qxh9lBdo%2BoeSNbOFMNb4wskGOqUBQf2z4lXAhNPvh0lDKHMVqVcXd2P7OYLtjHj3xXmwrvYwq1QR0oWfaXJKmgi5%2BLqosLx6huHhia293XhKzKZHjQrP2gr6M2AwKQRnA6%2FPSVSktFecQSK%2FO1gJBm5S2HGcjf6xXsTUwyOnzlrZWBHWibyP5xkVnt0zDmVTqiiCm2klNPCBK3xqaBODx7HomYJ666O6eJ7b63gphv0SUdK6PNApQNNZ&X-Amz-Signature=b68a9bb56941d4f8fce7df0fede7fa576a3b45872ab6cb77922673aeb0fac47a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

