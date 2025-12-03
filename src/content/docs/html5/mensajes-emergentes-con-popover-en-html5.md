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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653DWULLU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T223833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCICLo2%2F98rH8g1wk1yBfdwFlK7EWdycCA9PAM%2FzpqEdYaAiEAolX7O5rmU3vUxLU61c9eSGmBAe4Tx1yTbuO6GCePqQgq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDA%2FaZ%2F9fk9FFYN48ISrcA3aqokXq9YtsBXhN8V4c5XGcryKJE26C2BbhBV3gNcD3Dwk5NC3H%2BLYGtlne9C%2BmmiWY46Vr2Md6iuxa5gxYJWblSRlezwvfAYRs8jUhdMYzdd1xPL0oHJlrZc9QagxJWgM2PZB2Wfq51%2FgD%2FFqX3C1Sc%2BCEXPG4xtSQQCbhHzp3Jbx9Kzcv6pCImhrCj6%2BJHH9e9qhtJlSs7XHrD3aJfAPZ%2BbLF%2F2WVGA1P9FprHuodmZPLfuqU7I0%2BPwnbDoaBfp3Ng%2B9vgHMzwCZfxx5k1XgzjL54u%2F7yGzV8Tqs4CUhM6ouhPvVRaeVdnGtwIHVBOqWyoApGBLOiCd6GeqA6ZvM3vqYs5g4wTZnrQaPKqRT04kMW0Hi017ibH%2B0G95AalIDhy7T1tYhrCqzAo8F%2Fk0Cbevlso3DaO47GRI9GwMtZnRyuhfOC8lVtX28yd0q3uRZiXqyUk8OnDDlZqv4pI%2FhTPJgPdLmBilWkUqg1cBbeNlEALCN6Xmnrof8OONLKmCe7o%2B4ZS8KFkaFggs0B13rCwlS6qj3hkbiA8DBhW%2BWqUmUa68Rb8EitcnL0Iol2P6e9vMeic9y8LQDv7m61rh2nJEaj9zn2QBKtf%2FmK6hVsW%2F4YSxwJ%2FaDKtnE6MJjcwskGOqUB2Krk1Pwwg2pe3ytQn%2BscUAwO91Dj1Wqwu%2FOoEAW3o%2BMP%2BkWN6Q3hGzfERTol4oAB3b3NTSX21NGemze8TRysuUpeGDMQCnIRw0BGmQbo9ROiw1VY8aBr2NR%2F3cUppFk7wUI%2FvjDWfjbSesKNY41B6IlSLhzrI51gYObTQxMSWTRCup5AdbUVqlteXyhTybqTR22kdNL%2BGRL0MxhPdRv48zuKDmoS&X-Amz-Signature=ecb020e44c73c4d501751f2ea0faea224707bc091eb25a41906b709de53dca16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XGEUXRU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T223832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIC%2BmtOIzEgk4KigOQVpX4Bov6UlPtrWzuoPmYKsGWv4RAiEAuQPdYJ560%2BYNi%2BmgBcVvNg3sTaf6eCFqEXoa6BrLONsq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDFjErNvPFXoPIXMa4SrcAwE4BJmwbNOuOIAS5tQqDFORGF8fWyuB2JxjkIc%2FZ2ONCz3FKHXio1KhNxKGJRBqBAc5Z%2BVkrl2UcUaPFUXxLfdwOpvMdpQzASoBqbm2BW3rhxWXaq62cu7eMcBeYqo8AW%2BUlnXmwdTKSmFoHuA6sdW6U%2FLKXqm6UDhDGPH93ZxGllWW%2BB9iIeUR6UkGjxnzRqbWkekiBhDME2dmODzkc8ov7C6rMF6CipIBnxHxRdmjyRLSC4xKIj1zSxbi8ySGuvDcawVGHE2QZZ3887BtVGVbH8%2BG3J4TRxwdETq%2BiTHbhgsHHXJTnKs%2F0vb06jctqOZwMLdEE9rWduOoOPJqGO%2BwW53U2gltIQgyKU2Tw8gclNF%2Bnjazz6LgKP3plv7JtLqQNd58Xy%2BlTQvI2Ut1ENAdZLFOlcWr2YVF8sNiLBZ%2FEM8r6q%2F0g8HNsXsG3%2BhJ4ySzSyGxiYN9LIvdxxhwLEz92jeoISMjtJDkCSLWSXyv%2FltDfqNyc%2FE7LxWX71mcdylXJaN%2Fwt9zT%2FHL0DO0QZGDrshxCmaoQlevXd4N3TIIZdsR58gWURDMDwdN6PjjnDZuA23nQ32D%2BpoD%2BHxiPVqPiTf%2FqFCDljkbqHFzOrP6RFyLYDv5T8v7%2BGmoMMrcwskGOqUBMyHCuGstDztYugdQnPmXNaG5rLNpWTbTHbmHjfml9RC6kI3LsafYJQXCRtMtO46YWpsln3x81CyBPnEVgegH%2BT%2BMcnHC0%2FtdSCG5QILet0RvR8GlCBgJETc2%2FjESMAFrWK7HlP38ZaHlm2AVnb%2FCYsZpnP%2FtF%2Fy5C9JauV8SuU9gDojlbdhzUgHJuHRX2Bbdxvv7UiyqY0XVbsB9R9MZT%2Bt7uYhy&X-Amz-Signature=602ba8f276697cc9323c555a4941ce1f830250186f7fd18b40aba87fa0abb9cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

