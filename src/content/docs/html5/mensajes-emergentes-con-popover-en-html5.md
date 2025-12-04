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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWARNGDS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCQmWxE3WV4zQZh6IcWliZLgCZioC%2FlOV8PTH4hVLqGpAIhAMU0tAIwx5SYj5ri3HDlYgD860Ktl6ZQWjeMVvsZUJvPKv8DCEUQABoMNjM3NDIzMTgzODA1Igxf7ocqIj%2FBSPJBKQ0q3ANebOYx32JM7a1EvcdHIO48TH6BGZ1AMN71xD0bUddffs%2BcXQ1qhFStXK7j7736riFFURLL928D0%2FIhtNj3s08EuJv8hLKj4livJp5bkmsUuNrnfYZRfZTOXizsMLSMqTEK%2B6P4k4v%2FlkcEnmM6SszI78MuaKgc2sgPmuPXQg4l2BJJu%2FcaFC9ObOyUCdDF0z47qgxPLeNT%2Fo6LAsEYa3oz4ztD6Zitrh4RBObKfizgVJJxHz7Ni1vP3LsitopltblTeRiEtddcRLRlzP3GERb0irfQwLAjQop3ixR1305UNKlClrRjobMLTfZ2D1g1mZanrp24HsMuRdCmTtZwx6svVX%2BFEfleUKh%2FdcNhY%2BBbx4sJ1BJUpKjDtsfVVg8S%2FNTr3RZT9Ug8RZsT8XItW%2BsUgE0WpTUI0LDNNG15CwdVLfjq8VzhEnxO3TxVmkIwY%2F0ycwju%2FmKasCq7xc%2BZDmeSaQ9SCUv4Ut%2B%2BoGU4xKJQ50MVJ8DyfBvFMUvxisAXt3qzwSp50OKWjIpxfWED3umHDJ7fNFSHbOeq2C7BhWpaf8ixidL0yLVXG2tDbIzdsMe8sWuBdCkTJ2GU8tlZcNOWIOIKCiDX%2Ffjv9clL2w2fHrFn9LthI4LYlBd0qjC75sXJBjqkAZlUysIqcZvoTkupWHMlNcbN%2FLMRcZ2q2bHInBMPgCZip6anRGM%2FGPmPThTZ%2FGWUq73xRoG2uuELI0FEVB5MY8jI62njlMwsUddkGPeXZlpFCTNIVv%2BazcdL1NWWu7ji0baDsPDbDP71bqHdcT7EcMlLhkhC6%2FIAEGfFOxxdKzI%2BucoO8j3kN8grALJaqx3l32qJ1%2F7JcvvqQk2RLunq29TqLMOa&X-Amz-Signature=f0faeb8d5f19742992f9871084b16176d12397135587bc1653032e41fa7493b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2K7KM5X%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQD%2FoX%2BzYapZ3LVJpSgARrxTUA5qvU28SS0ShTWytWn4JwIge%2F8r3SslLIhkdaIsxBtrljCxHgc2B4ahQ7YaGyveKX0q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDO77U6wGGXVDVa4mOCrcA3XyNxwjUdMCabbeEPx%2FGWAUbCT7JlB5fRsF0sMXtYG7dXrv3hg2bN5MX59%2F9g4HK1561d3abHUvMlpwz7OgI%2BQrTCPejw1EPyTSWBcOqvPly1kFrkPck6AAr3yBrmBhxggG7amtlM2UOmZ1%2BWZAGT0I1tqIVRcQ9ZnfjHVUcHA0lPzQL7GUz3c17VAf%2BVe3mQgzIIHYcWjKYWvpW9y%2BOPcpLKsJ6Dbyrc2Fnc%2BF3Oqjjj%2BgUh7rCVpa%2BZbIRg3nUGWEajIwRk5jwwOFsnAIkpnHwVrfR7BgJmLTumR39xVtVLEYezHcR9sdmN4VjVUZif4mT44teFMi4N1xSb5CCeLlKjtrjpEp9xe2Diezdwnp31HWi5%2BzJd9BYfh%2Fbh5SgGcOctQbFMZA12mCpIhw5qLhP%2BykYZVjC0XHgjz1INQinOsSMf9n5Q9Zah3AIJ5MiQWwVlP0tyQlUDU2zjdNNP%2FXx0%2FIuqvkK0iGnlgleG4bwkdQbBWOyECZK%2B0fl%2FqboblscJ65tyymg3Vkj12sC0NNlmAyEl570a6JZzfV5lUXl7ZW%2FGeUQhA5EibnCAbFDgKLi%2ByARqOtDWjOAR4F%2FLHm7F%2B4HrSdVPEH%2Fu8jmxaQGSbpxFQMQcydQQwzMLrmxckGOqUBsd7lvpcjFO2YXHYgeGbtcT5TYAAg3CyO77dJXVmKl22AsiPaBINbGBdW72pjyFE9HxPLQYW4qX5JIcD8hinBIu5ID%2Fk4ab22rLyWUwn3egIn6lV8%2BKvgG4mRdvJLasNf%2B2aMPQ6lDEu3BdgaqULxnTQidkJjp78g2yrFYtFrwX2ZzH4RVVz7KonX0rZUQqNGan5le9%2FZjXtmB0t3wToC0Myt9djE&X-Amz-Signature=8100207becbc148dd43ecd3c491c5285710a138b824303221beb2b6cc19ce6a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

