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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT76WWHW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaInmDYA3qPlg6zoWL6xE7v3yNFBsm4zFx09YC7Naz0gIhAOK%2FcP%2BF9xwwVUr3ln8P9yjnYFjNFPAQQPi7x44FQrs3Kv8DCG8QABoMNjM3NDIzMTgzODA1IgzSoQzh8S4ahn9VNiAq3APN06ZiAJ4uzOkukLchdG7ZPdF8Vsxj0UU0BVJXGviDgH5V0n3eY%2F5mC3SAKBLu3LstV591f%2Fz5pOQ6R7BANz7usq%2BPlk%2BkHi%2BFgB74vRZGIlAT9%2BD%2F8iWzntNeyqsDzsNGusdfKZGQYqu3jp7qaM9s1G3ZF8Fd5EDw0BR%2FX3V9RJ%2FAQMOyvrFQMBPx%2Bwtec2rTHBgisgmkquFuenDvbNc8dQ0O5Zld5y54%2F3rVnmLPFkJf%2FZ79mYMTUaEmTpcpGb%2FWHXtzwKbhYfPx%2BZ6w8S1iMR9vR9Um4BBs3J%2FFdqb2TCQYTqruogaxgPHq%2FB2n0ttEAr6UwgIHtq09VAnfD5hgsh8jWxTauc2QuFP0OHXwI22PumqHZrXWgX2GxvEYu3qHy6AT4IUTPKtcJn6LLQx03gY%2FsT%2B4X%2BMpEYizQrZFAE3b4FLY0CdUd%2FVo7AjqiGNYFlTfvE5nRq8uZIlNZzwG0POhlUzN71ldF7VDXA5FondCU4sqPcpJ33MZNDhGnD%2BTyjzZMnvUl%2BKsOCYGc1YHLNbyJ8oJbfxZwxoaSr175US01Juj1mXrCYwU6ZG7B1RN6ZLKrip292VYWR%2FEdE5fZnpDnwzbaAz7jNv2I5K%2BtPRATKrDxDx6JCLHNTDV%2FM7JBjqkAWEWwBOpOPzb8fzDgYBMAQwJ79G5fZoK2vP5l%2BviLo5Hbj6j0Cw6k2Cetgg481ItR1OW%2Bd9UYd2OAhKSyK2QGHC0IjbDsDkImxMcNPB5pqNd0iOZhpJWZGltzsLLP68eI1ghiMYMprASWW5W1jIQInX0PSc6gw5VJvq7E4DYVlotaPCSAWa%2BFe8H499Eqx%2FblqqyHaoKM%2BtDrVaZF%2B7fWhDLxyGn&X-Amz-Signature=aaefc197aa08a8c323ddd87747c27622882e7378d52465537b76e2507d0be0c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQZADTKV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSFSRRJ3qkZMtCI14N8sYdBxOdUBQ%2FCuXYQxmQRVxOgAiAdMDY1ESuxoztnjdr0jPHqg2LqUZXpe0Um4jMwondw2yr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMbJw04fIjiAmsOfExKtwDKZprA%2BUWURdeEoYR5AABko8AcszSRFK1TQ9uyFnqEJMvWe2E9lPeoeXjGVe815kcDzf4PNYa67udeNImyUUpHIlDuidUSTW9J1r4CzGI%2FAOxDbRqhmb7hbVdirvj2NR%2FMfnSz0pr3r0YL1hBtLYZBWOzJdL8XVeT9RaZglhfx0BTxhz37gJMJn6oOVpS5aK7J9d0vHxgZ3vM6tcrT5XQ%2Be31xvIe7DWsGztPU1yoRbERWo5ZASbZ2fE8J7TxQ%2FAUyveoX9Xl7oSa1a1gTB7Q8MMPCagZqdb2D9mNariLlFByWNlxqzCi5A3hWK9TpWi7wxDu%2FozMIg0AFr8uGnckyLsU6S3MBcqBsMHE%2BazeAqgCnWpc03IZzydSUE5V5laXS2ffDQy07rmKTCgTO0PTys2GbdJBww8FdwE3mLN1s9jd7yZyQRdQHpttJLvgU4fJhVLuCVnsjSrGzJhWoTW3MmPPvP0DLNWTUO8VV9%2BlsRAs0I5YXVVLp8by9xayBB%2FMwNSIKwi7NHWrLPVKlmFmbr6u74t0NIVhtIkrklyFbo%2F%2BO%2BHGfE%2FoU3zaEe8BjE0Aii3ONKBCgKjZmxVpjN5rhYfUTXV9VpHTS4e2LlvE%2FgCitNImtfbhlcTpEVQwtP3OyQY6pgFFLyhQn4i0g3ShstzMtwYcyNLXFFdsw2ZT7AtWiAo58IaiepS4xOMNv7hJOauCM2qVmzkAb3Zodmu2BZLNk60RxRGGI%2BN8i0yQ4VyXySijpmoHhe8rwTXSQ1VGqqrtZ%2FyKFCljqQV98eud3HsJNMleemIlIG35An0HvuwoQOimq%2FHvKoDtQnPCusOeL6JwYvzyiZRfe3kPwsoqlOrGJcNegCMGZ1fj&X-Amz-Signature=353f6c5500c68e512a1353483ad781586fdd2a3ea62ff1f3e91f9b5a669383e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

