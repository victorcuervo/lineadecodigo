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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBFXAETQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIDjWLc2csuKQayYlcIWPvkoqjKS4NubDDrDmscoZ8bZcAiBKiRaE7v64Ypn04CyFJYRWFqGkTnWiLNF%2Fjq1ZW1qC5ir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMiKnIF9kaEwUdyBwwKtwDelJnYKwKKo1aOmNmEn1CPa0abS%2Fef2Tb%2BpC6KNK7rcyLQBPB953nsaCsKA7z%2BPWSZJVnT7SJVs2vD1WqnOs4s5zThfHtHu7IffbuFxJYVHUbZy9EpZaRUUAlBU6Lv9DnKdjvJKZ27bPHOsSRt2LFsebhzD1e5s5m1RkOzZ7rJ3Ynh2y8E3wyJ4lCnICZOXeiPW0T37jgndD267WynRiQVtIA7sJxCdGSB%2F2Z1xdsQxI%2BcFU3OlP%2BrLGAq07kZFZocF9bZH8f6%2BFS%2FCY4WFEMJRaulHcRdsV1V8OmcZUpqSa7aEHlnwQbuXCREWP5Llksn5aJJdVnmY%2FpuYvHmc4XUSJaJ8Pru6E3b82sjwvX%2F%2FvmpZrMLJGhFCbSJ3lp9%2BAMP8jyqGN1ubnNDyjmDyY5Wf3bAH8BvwI1Jxele97uOfJEgpYOKrXYZDM4HO%2BaJagxs13fH1kWLRU3IV2AOTUfWWw2HP3pQa%2FT4J2d%2BnkNqkoYBuHnsJJMin1kAaS0ypphTGrPf2FBNUaiDe1vkOKvaFelkHLqnUsyYYn2Ly71%2BHWbn%2BIAp6hpyyY1td5yox6dFu2KYxTC2BpoH2CbmST2Abtks63AMp%2BjBKh3eXIjVMGl9Et4thqxbrJw1ScwpZq%2FyQY6pgGXcZ9xK6iNFwADg7ZWdfqrM7CG0cESgifewI9aZcAORLr8RrmR%2BWmbDRdySdjdrUfbOZU9HfkZNT8ezrrJiH1x9TOclwK9%2BbJgR7feXsqVguSBo8rkgCvrtj1Lspmy3BQ9aTaJkQIAg1yZrPKz0MBe2dleUUzUFIezLRfyPpTNaymBQkOK5nh1u2hI2AJxStHomlKXHxiExya00tthYOia11N8DXRJ&X-Amz-Signature=c268e9fb2d811f5c7b16ee7fc8dc660520d0496f1698da56c7446ccf646c9121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5YBW5PN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIFa%2FON3qY8P3kGYhemn3a5h6N7TFloLnCSA%2BHKrASLhtAiEAiCa%2FyrF68R4mz0ArvePiCKJliLp8iLf9Mh2HGZX1wP0q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMP4SLp6AQwJLrLv6SrcA7pph7jWzu1Enl1aqU9Mlq0jeO5KlG8ciMYKxsGX7HUz%2BOm2KxBcx4IRcHSsMAs6SLuFUdasImAGEq7kDBB3dDh9a1%2BUwhXMZsz69mOkycWDReijn138k5tSMSixVFDERaNSdx7%2Fq%2BVPCqnG%2FfeVWcKJoedwUdyGao0RPdunuS1HIGKvdtFEqLgH7WB03JiB6fyOO3Lt7Ycq3b0d5DtgNOttyt%2BNQExtutofSnc51GwjH4mMIca6lVlgYJ1s%2FMq0j8Oi5WKSpX4wstVDiKdcg%2Ff56ocwSl2aDsaZOrsH7DwKVBWbsQ4CME4AHVQjwfZTErwCWdWrUiSmhrs2w3V%2FK4XOuYP3tb8UaPsF1d3cx2KoHU8R6nKxDrNanoj68wVLqAukPedZ07dgNBdIOn5j37Zm7jFp2pLYpBzq9L4z87ZZpoiGcRty4mPO1VB68DBppJN47n1E%2BwfKIyc8%2BhCBovLUO6CV%2BEFeUUGhCF%2FJgg9yP3OlzuCwpt16OmbxVFM1GhnmBQ5cA73SQx66JxGSUOBiyBEjl27lTw4a6eWVvUMQVYHg%2BZHNUk1GN6mkzR%2FNWTJtk76OKChIYHuMVV5RLodhLzD%2B6fKQs9I2TU7RzU8xZNv4mgKQQKuGz3Z6MOSav8kGOqUBJch8FBIM6myESdM%2FB2w77pKd8Qp2wRpqIKZujRwA7VclEieH8FOenZTRGEFSa5NWI5jV8Gq%2BlP9Yc8HU6gG0Oiyq5adRS8pRYofE89dmhmSwfzUfmhxA02KrEWUUfaWondtBbugKKjzNnlrxz6%2Fq8tmoWh0aXarumqhGUjcwzkIzhDI4XKUJ57yU1NK7ri1pIZdFEJ4bK%2F4M%2FCh4Te%2FhfT4OSR2l&X-Amz-Signature=8eb14d433e843ac5c2b69446b1f1ad854724123086cca879ddaf804d41231c7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

