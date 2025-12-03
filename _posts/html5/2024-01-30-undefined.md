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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDOVJL5T%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T000628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDEaXveV%2FD49g5e5Rgr45tc%2FYTFT8BEi%2BfnRvof51pM4AIgVoBIqSuGraqw4SwKDob0G1sGUxHnttCYwxdl5oNuar0q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDCfL2HGsCaE1GWzQECrcA%2FxCLyf0UUGx7Ls45nkIFZLT3f65NFGD4W0vojZuiyuuJXYg8wuIDkxhraYwjG%2FgELAylXamYU3zxVXL6Aeu6MFb86VDGKZBK0M0F2Py493Mx5f0NyWtmsdCzfK6I04tSktBi1U0Nrtaehd0cvtITqBTW3X0B50WnN%2BNBnnOr6TnPf2NFi7svytV8v7brJWc7vlotHtU0%2BOOJl5PKixKZO3oRCCx7ej5GboM%2FJ5DqWslCyluRovrC8SiWuP0XcdmPpDVXpdS0qO9vsq3X9Uzco2ixcnSlPGEXup5AE8tDCaSMrP3KIJ4MmB%2Fte87FH7pYABp3%2FXAIX%2FBC0XKa3oJktZ6a7GdGWRbZ5M88HG3Jyh9VP1nPbJqdHn9l4Z1Xl%2BDNdNYRLqkCgvnRqIbrLlDng1iSi%2B0%2Fd6cucdCh3FzOXXE%2BvCJnHXpfMJX60q5wlVRX5%2BGLO48VNPPSuca0HYNGqXqN8wh%2BRfP%2FHEGToyRpKIM9v%2BjlF25nrgql9JXQh7RAD4m7MEeGzjYt0DIa8uAqlkABTPpU%2B%2BjTruuWm2t9Wg7WhEKF44IWnEzpzTmUvAuQ7%2BDyfmLlytAH7UCEgkPCFBCmDXWogK2Ptn5Njp83EFk0xowE26dLiWezvCzMOHkvckGOqUBD8iyzCtYlvWYDSRMxjNjC0PgjnqQGplck6F2kem1WdsWfE1v6%2FlgXIjdLDyx6M6q4oCgT9vwGNd7vCifUuPUvcjyZmua%2BW8PQA9qtUawUh%2BNJ95LKia468kJYn6YIycVWhfWp5%2Fled51Rt%2BA50l%2BDUb2Mj9yeqYJbtsNAk1%2BqVcoaRot5prBMvObhIdUsEc09mCfw5cDpFetJbkqb23L8GU28Akz&X-Amz-Signature=d5478c845bb8848747a65ebfb47903399df9e56ab32ec560154f3e89e571443b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4MBTI63%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T000628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIDdCiLjEv0f%2BQ6JVOqF8ov%2BjrDRMydRRe%2BggzZuOXVFrAiEA6AMAHK%2BNxYEHaECc4E53jwT3Cg59n65tmDqhQXyNsHQq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDOoaaMj%2FlMOFQ89fmSrcA8MVT4qn84u2AFcVpc8Y4ZCjZR%2BOXtIcDR3sXtUdpNxUsiwl67zSZ12jIJgOR2MfknYnVCHzPrQOT03Fp%2F6Vn0GkQvLf%2BxX1DSGdca%2F8etpzrziNpPHy4wHgslMLvcW5%2BXdp3MagCfUPtisTUW6k%2B7Cyp4aGs4BcqkVjqaEcAJ%2FlHAaSx5GMsPqcogvjH%2F9Tx1S2Sfbr0eCRig5NtKx38LwgO2NMK0K0lea7F%2BuHgNWHqc2knsBsf2ADYE88DIRyI2AzxK2nUXpKwH7vHGCsc9yZiylbtxU2skscPFSSloh6dimltuIGpg%2FQ7L6KfedtYPSJ%2FsQhNhQQ8LsPgwWWJIuILCFpPMokIMpr%2FgVI8N7V1nQNzTzPIFwToPbUF2MvIo8xY1qW8MSpt6Cs9B2Wf4MJW1h2w1ntSYvCJpgU4IobfjwS7DTpsWZceM87k0BXVy6AHYAMLw%2FRF4MrvUUi5x8M2M6zPTS8NAhJfB87JOLSjFBodLFZ%2FPeRTJNu66%2BKmpe4TLyqYxwyTOMGhcQTJYu%2BP4%2BE32wdcsi6PnC0yCS8jpLGxyDM2Pdoaofnk6LPfPvnFO2p7cW9TsQLz9yojZI22nVpLY0mrLv282pVL1TqduJ97Gz0HgHNI0%2BoMOHkvckGOqUBxYlQVxS9V6yDQuXiBE%2BpxjIo4kwxDIz%2B4m5vMpHy%2BrL7XaGO53337dN55lXy%2BTPE%2BhLyek9CHHDh6106x53WqgN%2BD4ihA34Ic6Ji%2Bxw46ZKMQcB9yezGazhZA48%2FIH6olFOhVZ18WLPN4lFyPMS182PWbC1tsX05KMxiS69IkCDRsXZ7PjDky5AxuycBP%2B3xPq96AVL4kFRnN%2BwR9SUEvCrvrRDn&X-Amz-Signature=39b086337ae180d6c0ea0d1e6f1340811619f06852ea104e40025c0dc0a1c99b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

