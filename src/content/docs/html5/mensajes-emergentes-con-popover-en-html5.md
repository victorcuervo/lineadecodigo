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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZM7WZN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BVbTaWVBFGG36vAJ8DBVZbbNOuChDefVHJkiRG6XNIAiBRE77196NfMmam2OKy8AmyrmKrSg8P2ilLmBIDs9wdVyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP%2BGwFWlsdF0WTFUJKtwDoCqmyKVxIPvEKAhhrgV8IMDmPdp%2B%2Ftbgzfx1Uh8vD02MRdBhRLo9X8KBwUlHmava%2BVEAPNNw4RxPXWFVyKus3xR8ac4T8bTX8efuvaH9HxDHV5%2BBuVXH%2BLEev1ZIXKHlA52j4DzP4jFA1qrFR4dxgTMMErT7vY27OhZHY6XWlC5dnH%2BV4p%2B6JeMGBin49ltLCtwpOljUJ4lKatTJPLayfhpPTG8WseAemL7ChJL9mcVt5P5lluQR5dYFCAhFmvIC%2ByV%2B8MJ9D4rJvWK55RuQnuSjrroU4rEQV3vTssj7rPJv9wtxLNtY%2FXKe6idyDy3gxGmRlrUhw0KYafxsrd7hSn1OIEZEfTrmDTjpTvNGSyEpvj8H0RzxEtPtHK%2F0t1jXrmp2NlxnVUimmeEEF2pqNpNQ7RNYI%2BTVfoo3zXI7ce7eb6J31QsokfPEwS%2FD2QFXysPPJELhoR5nRXWJmt5V8jRN3muRWEmSF%2BVgvrTNgm9DgWLGesAoks60bb69A%2F2tw9J3cFsNbXJ3j4FevM%2FJ09nNIogY7x6H0P%2BLq%2FlQExC7wHirL%2Bj3JwQp5vgF%2BLE%2BufQ%2BYklGxnI4eht284uh1krKywH1PG%2FmmlgNNkSEU2G9i4sGI3%2FIxmIPf0cwoZrVyQY6pgFjxZ7GjwrWv5ljK76lDJwcVoL3nG%2BOC%2BfBnInm56kEnw3g4VDQfClKSFBuouFHPyv9qbjTuIhS4AxApH6CaRod1j7mI%2FM7RgAzgG1m1Ke9MHy0idi8Orha90z%2FqUN74KTUYwoMlLt6L9zBGxN1wCnwHyIoYGkqazsd1dCMDAHkH79ip2lACqBbGMiuaIyNukP1lI%2B3GLYQBMO7Pp2roZ8cY6Qnui4c&X-Amz-Signature=64969e7e62d64a3125a4092d822f27bfb55bf308a5b4f8bd5187ec490bbb7fe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGJPEY6O%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELObFBw0sPZB2n6YRRYZwgbkCpCXU%2BRSHrGKnRBBM2%2FAiAvJIhTikz32VNfApKawJB2kZPjKcoA94c4w2YpZLhmwCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxplVsUyqEphenImYKtwDldDJlSQrchxLXQ0q7MvHCG%2B81OBvpU%2B%2BYFttrjQWgkXXVlE%2B7uLizB6s67nkGpxrMQXUA2IjLetlfA3NOhjxxzmYnCibfFeWg8WNsAxipse87AueuhNzSiZt4XSKtNjyDa6FdwrZl9tQ2WDFOfQprisDDwY37yI%2BB2y0j9Yp795mwyPpxSJUrgA6gRRUh8RbHDpbEq%2Bp%2F4ZV3Eez4A%2FuZe4ZAFZ%2BPKvvBk%2BA65tKvQYKdT%2F6LDNXjm7dlWCMHUJnw9D3%2BSb72OH4wQZuAeJAqSJcMeU3caTzm5PAprX%2BbhdUyWzMdsXh%2FK6GAO9xxvyDEAmnudC3V%2FZWQ9Ms86uPfl4HHQyfuMijUoA9NgBxEuDJHswuy0Hx1S%2BbKNxEOlimUQlr05GgjktFZgTkAtciPBw%2FEPynJHHqcb3FCknoCaBPO4pEDFn3FV7CKtojV%2BfOWFSd4NCA%2F8Mc36OEYDDM3u2%2FdoROT54G%2F%2FB3LKXFyNG23C%2FZ2WmtOdqfyrwnNKuJZhmGU9SMOYvnnr%2FJ3aIGpUJ3qaZFavtIEZkqLJgjpgEjVMRyzFxofzHigZX33TI0%2FgGTkY6PrdyChizQK5q1poDtGmzKPQSvQTKyrSKbjqKrzV9fvW6s4dHacsQwmpnVyQY6pgFp1dc47jP8ceg5VAYRce8ognKT2GoJ6OIe50QVbgr6lURDWNHOB0cGh0160wPRV5O11%2B8sAlPYkbnoM3UawYpA2aen2zLJRy54Nr06mh5Pm2Iu3JENVZB7jUO%2FoRdbLtmlLurXvlo2fRXEYyBIecZvdhc0pT9MCn9hRQEicAfu%2FAU6jDzhb1289jP0G9t2YxL5UAQCvnsCy5%2FgWBOKGTyIfHkPXlZh&X-Amz-Signature=a379d15385c2cc2d763a2776a8734a68c908c49aaf9e98b30dc06970dd3c4274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

