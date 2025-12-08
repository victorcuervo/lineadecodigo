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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VXPJEDG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtYjuKId8qw6D5SUBaVgfgIWS8tKvAmtR%2Fq8ocFvYPSAiBj1EWZwIyMG73bZS%2BR%2FuO%2BcWSE%2BK%2F11WcqWtZjS1UiFSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi%2FrwcZ2EL1uu5DSNKtwDVRKDxTjIj33NoxUmJf%2FqUfnJe3f8trVEGNhJwpWsy4dHKBt8adwFXY9zjLNU1cFDNdLdZuOhfS4tmd%2FY1Bs%2FAj9fO%2Flvsy4ngTD9p059lE7NMK%2FWkn71xoR6YMt0fv%2FCJ12tcoUnOnvqeK%2BE%2B2%2Bu7%2FZVp3XK9mX%2B4HGPEHnxLvJpQPZTWKLQpxvse%2FawMEycC34rDtsvTwVdNm%2BE6jri3nn5IeQhVh0VADcl%2BKE9oZbu3GO8AKjc3dZA0wkz1cXtlvH3yBNM5TFgo7PpEVp1B1HJb0vQG68LrVtvVYLIPirFsX%2B0ZF8Rg5W0Y3WC8eSxzjqMZTxQwCpAAW%2Fv0UD7MBhpze9So5Zfpi4KVZYoU1U%2BKCey9eZoOfTrynbt%2Fny8DUilXHVlUoNKR2bQobMojEpXp1DDk4bOWanqpWVr3S2M8pumVCkTjp%2F2JK5pVrS%2B5nlOFD0EW17TxaznvVkNyB0CC4KsgbnA625VpUG5wtheZMBQFknJVaeAS8dxSc1H0yCV89RK6esWM9WRBzwCEzWDe5dZpIlBgBhTgOgmUekJ%2FMT4kJMVGL2PZ%2FYUY0qSJPvHXy%2B2BqA2qmot39JkrhqaiCQTKLpY%2BW1v4L20h8HOwgNJlcKJogrOBl0wqdHZyQY6pgE%2B%2FNmi3e80ZVquzbihPePMC9qtih2F2OhqOGKHH%2F%2BeCyhWSPMWcHrSAEMK6EzkwtTVVA17qYQu2Ve4MtQ5tlUadh4S4FrYf93DGlet90IpsCUUoB9Nyp5tUcFyUN7xtHtGIJmXSYv%2F%2BKv%2BklHu4nkYv9YimoHqbHtej0djEKvY3uaDzYDR4MZBGuv3WoYfFc%2Bo3yXVgSJW3R1r0vgKlbbr2iwFBc7w&X-Amz-Signature=014904a5e7d2f7bcffe4d156735963bd750e3b669e154c39741e9e36a551cf34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPWWPK5G%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfRT3QFClQEEUvugVOKkR2nrK3gbFYjWuTHR1SG0ibEAIhAKYYqXZtNmGWp87ZYHe6QVVljQyiNRMMfN1dtO%2FpBXKlKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV30Jz5RXJuWXPvEMq3ANWlLU%2F4pnq1JWwox5Q1v6T6%2FuX238boXZGAVNiOSf0zB49kK3hU2GdNt%2FkAhEgaGelnbEBItM7l59y0ucOlfJ6j7rEM1Ce8IFEvo%2Biu074FtZgM1Lc%2FTutCIniqE0AVVBEyzpftgdB%2BkWRKWdxK5iuMqu%2BATpNRSfDVeyBbg4UMC90iobJ5LBqMKl0GcNhwHDagTxoXnKMzRmxii0355R2u7VZ8S4qdDyhRqjl33vesZP0svR3b68QxCBYe%2FvlAhr7LWmYTEtga0XOxuIC%2Fj5lp892YHVXTQ7LJt%2BELyLnTC09nEEtev3y7UTKY2GWEmWzM5sKEkuiUaKs9euO290wHMHOiA45SVk54Z7E2gn3rDM9BxX%2Fw28rl6AUC6pSw5zfEKdvCrwbL9S0bY8Ca2V0XHKyB3hp%2BOtLXiwfHfPyRhLD%2FQNA3mcUIbUkJnUM3x7C5DWIxW0ix7LLPLkbYRj10M8Nqb5tOASpwYFSKx5%2FziQH32UJyrqoqIu3FqL60uj7oRQbTNX6VLyeH7Oj6jbIvaRaDC4tpn9FPmceJNVnllJIUfHvHpZBMzpwGAa0Upj6T5kYO%2FqHvHJS4%2B76C0chkuNnBvNAu6GMfPb%2FJlMkYUepJOE67LiN%2F8W1SzCG0dnJBjqkAZqUMOAEeh2AKfl2vra3IUB4I77T2znIcoosmA7fhD%2BQQg96GjcWOG4jOZjA1mel4reCxfnNTk6qyLDjr1fmnWoZ68OUMssXvFU%2FfHipPx5ISGBt4gJrPCcE1HCHMXhiLwG%2F4c235n364O4cYm1aCTbc6bdWxxQbOgiJO54okBTEQZukVObjS12su8oSaURL%2FR31VjL9w7ZaIhM5oZsEGcj0pA3i&X-Amz-Signature=5e966e9835d9fc4baecd6762ee90947570f41ae38aa234bc4ec81f29fe3153e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

