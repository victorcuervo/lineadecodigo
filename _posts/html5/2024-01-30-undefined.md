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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY5QKCEY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T061351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEYqzD2bFkiExtJGjqGNRe34ZJTXcacASwTrwEaOkjCaAiAFdjLDLjRvA9H0ZW6o%2B%2FU1EzqQmXvFYjXhbAfs%2BSqtDir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMYrlk5fEHKD4efqBtKtwDT5Nv%2BFfxnwAsLTXXsCfTT1uMG5%2FV5FLMPs0YNFxLbOxkLl%2FtFHkZLNbSX%2FyYHIOt4OrRCmVXywkDRAz3b33e257uXksWd7U8VOO49t5ItMKrEcMZ%2Fy5IzVSOdt7njGpJriSZB2UuoeG7TnhwLU%2Fy1ZdcsrT0X0J2LrKRSdlXgXHVCzMYW08HyzWbUFVFotDiAmUW06K1wUMZ0AlN9S%2BPhsEGKkD5EBtVCEqVij6sYpfAw4cAs%2FV5EHwCRLMP8b3oWvh2qC74v0lUeu7euPd5VRNSbzajqL9akIER9RrM%2FzYBuN2AYT8kJK0aXVdaykt%2F8SU1TIFWgjAEUoQ1b5C2NIcQ3zz%2B3oCLq7bu6Vz%2BzrrPg8p2yQCNic957p1CbN0G1VeAgipB41%2Brwf9Ml%2FDvnXQ8TlJEmqmVimSaCD7d1GMpW0ubKbpj%2FFEIQ51qfqkB5QF3ZjNFif%2BR7U5G134dGB5fqwqnVps6RIwGZO3S1x17iaeO%2FZpHiHGrOFsRpkB8sHcZt%2FLA0pcu5HYxrHhF5JxTlOGyT2EQ9OoNrIPAxK5SrpKWQ%2FHyQ3MUZ7b1pC2%2BWGrNHzoC7IENolbLxw8RoDqackAdmClJdHk5zDNq3mrtOj5kcG17ujgdMnIw2pq%2FyQY6pgGIF4I1AXgWdvgTL6M%2FmdV6dc6WnsW6VdiCxq55k4HLdJG5%2FfGR%2F9jWcqLluakGjGLAWfb5sMYC7exlEfV9IgJqtOnUTYL7SM2TzAe3PnP%2FgDBV%2FkdH5pTOaSjPDObxi7GmZgnrFp8%2B%2BQbVaASUHMtL6TYlOaBMfWWFO2wsmuTC%2FIh99PGy6r%2F60fgRiljjhpXGW8bFH2imHgARj06h1C%2BGat7AnkkT&X-Amz-Signature=8498d237c6cf92496eed8ca2853667aab03ef83af199c67f7a2d4fc577a34301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWNYTTEQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T061351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCICB8GoEXvjqiQYzAwIa1rULJoMCMi9XzDVlet0tjInfXAiEAoZEoOJv3ghRi%2BSTbHiY%2Fj755gqSWIxnga1ruf2CvzKkq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDJei23sm%2Fz6K%2BzOSjyrcA%2FbWWKlnu1ZK4jo0J5IkHTVyz0cSWZp1oH%2FmNB2NIi9N%2FgNwRaQVivc1iYCwkob82pCOg3RGdMfoyNYdDGnSrdA4en%2F2EF8%2FfSgcswnu5JlKl4lXxgq7%2BNQyvNBFJZQm8PmFVifhymzPChKwYLMhLuq%2F74OVYQyFKzxfO0wiUSO0pv6k0peRm8LVJtdbjV3%2F0v5VrpuvIYvah0IaQVUoEnidIIE0%2F7GJxSv5H58WRYefP%2F8IBwzxxA9pUUzl7%2F1X%2BgDjgd5BGxiehEw6g6LnBsFNFOGW7QOBE0olK%2Bk1SoTDJSlPMT%2FUadOYx8cbMT7VhDoCH1XDe9ZD1skWaq4UdQar8gtQTSBwUCNZBGzDtYLeZTP5WDekZK75T0ymT3RuM6blwsLc0d1XTIu2jZCJqD4S45fIaX8alhB6RQvv0kC2fu8uNVMMzwyiI1sZvCN438cyY8ZTHrgqWBUsdFxztq3orZQyPEjK%2B9%2F4KZI46iI46j62Hi8XP2YTwdtdr1XZKf0aH4ZxR34Ry2683HIdkNq5owKaaa3HjhGM29dHoN%2Fd1kcCmVfMr8EDn41RK6HXcA4clGnlF6tfuElZnM1XJhWDtxp2w3zPBOaJ3%2FXTZ3fvxL358%2FUjjoWE%2BmxVMIecv8kGOqUBpXVc0RqJCsPiBCDfKHpDIa3D9Y0%2FPVda%2FC2HWOMxq4Iw2iaz1oA7VgL%2BPJV3ZIMNfdcGYHMyjzmAtpdtcwljMTpDzoqih4J5m9TFMrxMaVOPTYpc54WVLdjnjXOvC%2BtcFPWIgHa%2BBgusFFizo6p9FrtQmT7kCjmbWmVov6q4vYI9hwrKGIkksrWOgrnz5%2FD32TT9A5zww55gRvsM2TYMvuH4NxHw&X-Amz-Signature=8a16a2e27bc7b089e1752cccbeb492d8577d87f2c3e23fc49357f1e570936c20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

