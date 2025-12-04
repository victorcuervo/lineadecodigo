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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA2XDLB5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCiQlhPHDZ1hDYt0HUvY6js1OxxLttLKkbOzuwY29v7IgIgd0Ny8ksKzyoYPxci1i9wAbIrDqW%2FZ6i3RCtkVclInv0q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDBgKP3NgqMeOAYGxDCrcAxOsA5outJ1Ou8CEaDIMlrqXo6KWKkUX5VvAT08TDu15MtY6gEVCfPn%2BbD0IN098G16eTWwRvM1T4%2FhLdxqOP4%2FK8FZCJZFa9f%2F9iUPMCIjhuxhIvBMNv3c0XaVk%2Bf%2Bwzobwzn2E5xUiQDJxVYKn%2BVPcOFwLRi73lHndxhogT3P6jO6AuLWNMPdWNt%2F9ty7WBmkxL%2F303vbtxKhrYpehab%2BLbZa8FI9DdY9P6VZT3aVcgKXBpLwIg%2FTn4uLGkna%2B3Rj2VNSMFkdc52sUD4BvlIz7ixDsdJcyhq0RPigPSGSx40UUBY1xcv%2ByNlZmUQ64R28r947vUP7phPtaTXH7CW8zRhWLjMmZ%2BRXG80w9REHxFb6FzwMujFLb%2FQ1qOh4dB9mehPc0U5b6vnsPLyFcngQb6htADpkHy2dbCjkjRBTuQZZASFX8rJXY2LTDwVSbucDk3bJhYMMEHLqEXSKsmY0NML6kvY40Rs6PCWQh1JHPZhZemwFYY%2Bc4CCoOI5TMqhzFiUqQyjuqIkfxMZGR6F37zUadrhSZmql67jwysHAmPZ2JAnRwWJ5FA0tHDOoShfk3axiVLVqBnuf2I0a5q%2FfsWlY0sXhixTukxu5ACGVxasNvUa5brx5F3DHaMPXmxckGOqUBYwaO7rDmT0hTFQcot965dCe2PjGOuXbRHgvoKoDirAie6TThVLHNaFOQFYoAST3xaXIwbageZtWSX6IeMLmT1w4lZorRitZxv%2Bew9Tb875i6IVUWMarUHoEcmY40scR2XWQmsYZGYyr0Fgr%2FMqavgmov%2FrflroxT4QV9e70%2Fs3SUKF9UjJz0pum18N9j26PXOaRv7iZtNZpvcay9cV8E9QePwkrK&X-Amz-Signature=01881ed7deecbfa8a93ceec305214d5efa78d318288535994f9a1c6137968417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E7OFNCG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIAt1m5h07ePXPci3dvMq8r7nCQnq7nGoqMfLXwaCPb9YAiANdo9yL9MNSWhyQ90CdaZIxacvnOXRR5DHbAQ0tNv0eSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMnSJxm5%2Fk%2Bsc%2B6KveKtwDv6SdZseA%2B76F%2FY9XBoai3txZb5QN%2FSTpj4sc9UdVcAHE0r57BKQR%2BQPb1hMjAvXJHXbV2cK0yWBEyvOL2e%2FYMoQMU4zlZgKX40UOplxoJzyUFHOVuyy0%2FBdGs6HQHwIhs6lCVyGIC6dQhB8nmhBl0oMZIN2gCBZ%2FRCRX%2BjEViQresL22paJfu5h9aZzJh0%2BQXa1lqlaFWu3Bw1X1VdSbAId%2FhH6wF8wITimQnM813NWG99sBGzSxQXMDCanE%2BzCGC1p5YjBqkom9mDh3rfrRH9PFYoIhjdH%2FplQ7ZZ2rv0Gl1b13GyxnVuc%2Bsi3HV%2FhZ1swG8bjiNANo01n8b87s4J0BH5v9GcDgeHBL5XAOiVbcxtYrKUpLmovEpfTqWqMPNqd3Cm2LzB8TQSUuPrbpXkz73Wz7JLOMWT1nZVOn%2B0m%2FHTmnhdHIdh9fzvE6H7sq%2FGUsZdOxzh35e%2FEwyvjNttaHSpXl3%2BWiGEu60bXgZ5aSEHg%2BKNjGzMtK77gbdBXZBaU7eR6WTUCnsCUscwiwacNuTdwKLLnebT32hq8u%2BX2ASYIdN824G6ZVqEGOGnAvSklLbM2w4Kd587pEPJCWbuTiT71byXbdGOAjOMzNPDP8QQcBcSgkv33rjOwwz%2BbFyQY6pgH37U4AKaCz6AB3Ghyk2QmqEVo%2Fk5bGk1v31zQcQozdioY2K2RtLPkEqfYw4JkZiwdEEc2lPl5OQmXFHGRzVy0hWP0ztRzeT40qFGGKcqe4TacPgnAyxXhYIqov74Dxlp4TQY%2BO75wAtl2c1qsoa1QpcOq9%2BEhkDOwSB8%2BGF%2F3plWfOw0k6FW5rBBeL94J7ubs%2Bwf1hzeDB4TD1AM3GKR7UKh8i250u&X-Amz-Signature=a125d392358efd75e024b58d58a7e6884692616ff08ebfc8b1c5f868d49b7490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

