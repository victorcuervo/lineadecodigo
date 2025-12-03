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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJRSZOPN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T002231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIHN764xmwu3AUSH%2BPBOP4oHSwEdQpNPuognpLoHI6qVeAiEAmb%2BdUwfg2kU%2BNpnbswO5j7bOGMqEx66W3GaPjP%2BoUYwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDDopi0OBPdtuRDA%2BSSrcAxrv%2Fy0HLWIehjVg2gLPhCORoIy4IdA3j9mhkAofGk2oor0JERZtd2DNFUdjLK9fmpRC04fehm3%2BV2qT%2FpBWRLqzYZaps1baOnTcEvSyCxKqi62%2Fu9b8TFWyWr433XBZhbEALKdnf4oMy9uiDpucRHCgndMOP9hOLVE5S7WZmaA8OUYJQXqYgUBCEzE2JATul1lRASGm5i6fI2%2Bnu9lxXOvHEI5CQSAV%2BYZo%2BYW8WBhSuMN8098xtt3bJJJ5sXmbhaxWUoM0zo0h0pW%2BoLRZ8j0fFMkU5z93PeVQ3EDNWhIJQ%2Bq3cNeCrs3%2FID43Qb0xeW87PsNp5gSjYxwL68FLLDiF543bX2yWlYvZE7om87HFQzLRZCPjlMvipkoMynclgAVWF0ab4cGUTE3990pHMBkirC6ubBwyyrM9kEBvXB59yuYGj9Kp%2BADTGqJPbKok544TVwKiVWb5zWAmEJgxQRs64YE6yUKizSD5zGZASWesF9ItBY6g1UmAk167DaZzzACXx3C%2BGBnAHVs5c8YLXnnsicznwNnKZxvtA276MS4mlQzlCX8KwlHGUGENp5GibbKXVqLnATrUFEOT31eko4GmYMgwclaUpNmkAuUHc9WDm%2Fv%2B7tpyVYElRVX1ML%2F%2FvckGOqUBsGt7fSK4ywO34EEKhkn%2B7Ylo6aTs3VYyM85uG9c8c3jO6WJHnbKpI3pDfna5rMRXymwJwNyO1QM83Zo4jR%2BQO7Ze4PPylcMKEJo5%2BQ9nvgbAlq11GhNYDeQQooYA4beu3HRM%2BG3uC52qtSjtb%2Fnj2UoXZMb8qbi3QLMnNAG9UxBsMDdllIWETt%2B7x9Y8s7pzScYbdFJI63GDxfX7zfKCtJ5C%2FOvz&X-Amz-Signature=81a4929195ec8db981d3473e4f99b61564c3de6dd60d204f1909dc987fb42dde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MT6IHBK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T002229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDFJixYnDxoz1k4hD50e%2F1fCo79f9jYRqnfEt1zwhu4jwIgBij6ho5yfLjUODRU7swq7A2dHMQuz4fiyc9xI5Ml1fMq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDKH%2BNLBlii0WIdNHPircA2Z0YMJjW1SUXuTJf21Fy74EpqSHaAIhQpEr%2BojYplEh%2BOcO1k6MaH3g%2FLxURP1pLIRbY9R9VUnRgXvO5q%2FpXbv9JeUii3bPVByrq0WQQ83MWca6%2BDq2EmS2ofHqeN1oXq5ZJTA32SiQZZIIQyfDbdEEURCFMwr1imAeYZU1AEmzeH9gk8KyU1bwLlHy2jVHMP%2B7EkOgzvNwBsgJB%2FPIcQiaK8J4VpC7u6zGIFq4FUXXYCKsjHbA4obbXstzTMos4nWwtfbBeTQW38%2FWSH%2FUfjlSEzq3DKJiDmlbh4VDacBE4Gp6pEoQNnVdBCOokz7pfrrsAyYyxWbfo%2BnUmfSPo%2BGCi%2FuFiy%2F1ipwHtdaoSbfvie23AHfQt2DRY4TIKZAw6CTGBw%2F0ZC%2FAQvI1avvEnoNfaaBDS1MovdpObBif5cPFcxAUucPzDzh8oMkRbcxHDyPY4eRcqaK0QEDIWd%2B1B11whfRUMZ4WiIWrKWktZb%2F7Xh%2BCW8cKeftBAPs2soD1xDMJsst61GxjdwY%2BMjMD%2BmPd8Iew4x0%2BGbi9HV4VuJhTfGIeTBpoH%2BavBMWW8LXZdYqLuwvBMRX9pR8ESiEKCoTJ%2F0xo77JZM%2F6%2FS53VK%2FI%2FiKtTzqQ%2F0DkytoKkMJT%2FvckGOqUB2veXbZZfNus%2F8CF1VZq6jgtgvDf0zP%2BITY2Klp3iSoM03zFE%2Ba%2Bj9fsh4a32Q5KS4qRUe8TnlhDLzwzn79fwi%2FEd3wD%2B627nDI0DHBgYfKAw5TnEoipEqsSd2adzWBO66O5rpqK1vRy6SYqxaqMwsLcVHWSpvTU%2BytKtzzC%2FJ6zQvT3j%2B2%2FIOW8MNJeePZcG%2BhtBK6KNliahQ4ww9F4PewLYqNIn&X-Amz-Signature=0abb5f2cedd3c66854a795af81f0642aa380041d68726a43a8874fc6aba6db45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

