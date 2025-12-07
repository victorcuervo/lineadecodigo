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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EPOJLCL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7oZqdR17n3O4j7A6JztzqxNdwbwunlH%2FILs3lqaHjqwIgNmTAmNRG%2BR9YCifK43wiXGgiL0SFvSowTE2R58CF3z8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEE3sfF7e4fZh2A58ircAzDaqO22dPSHRLy3xqaghBdw3PpmC1e%2Fu4O0QataYr6bKUxipXvKqmkLWcoCwl9sNEivZ3JxZV0Z6LUtEQWpmq7rz%2B2jeuvNVSWeob1pTIJ4dloSKVxBZEmuOdF5kaBXww64DlfpOHah4%2Fp%2ByIPzbCOQGn1n4pugZbh%2BYAb65twf7RQ4SgSWn3cvxSm2IOJv%2B%2Fvm0JSvd2PeBW4%2BvzH1eJdpFG2jeYKIS%2FvdD4fS%2F%2BP3RUVYJiM25TaU%2F63nNc6YTN7osCrRxqLzbHZi40Xo%2Bx6jGfMgWXhqflXQY497rjyliHrzFC9Gh660QDRbqYG2qzXvLxTBRW6T9sIWcqCw3ZBpeNSm%2BCcJXJi1V80lrJ3YkoszCHvyT2%2FGSanxiMsB23FWydVv8HwUUDEech%2FQDNSw4hy9vQF%2FLR1NsNHH04J%2B68fcpumwvkJeK%2B3goYCFaZaWsgTA8xAJ9On11OupGKFGNGolBvVa1iRauJCRzYEFC4XrWuGhdj2b5nzS5QxA82Do9Q44FaufvVG6bUnn4KLfwpItQ9R8G5xwwCD2HsW2ifWGAG28kCEB6PM05rm1UnxxhX8g%2BBn8xQMslKijXPSLp3diR6arbkbzM%2BU7%2F%2FZzLl0euTz6YQ9opcB3MPiZ1ckGOqUBhN9cGgm7kJDEoqUvqjEUSxJDjHDt11CMYeU0FL88zo1DLezAgl6J6FyHKLz6szXt5UKB3K2nS%2FCzNprOz7agOgeVFdxsjVLWOVtm%2Bb6DPyvicdHs7P7qUCDwsX5Q0q6s8mHEIYjS7edURR1ultpzHmel4olkYesrmFp72rj1ynHSgpaw6PD%2B2z2kPDYl93eIl3Ggch3zH%2FtMyq9Pwa0nsv0EwgTV&X-Amz-Signature=98fc580e18092d7a3efa6e9348342ec6b2a46185fa3c9aadd5c57420e8d98b50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M3ZWP6K%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh0QF6Xh8xPFU64MOJ17LcLdWBGgIUoGZlk14IIyjTFgIhALwYWLYqnQsuCQvKKQA2DfXif3eKXuMb6c1EwkJJwSQTKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUft3VERIRabCZtDcq3ANK2v0GFkK3Myhc%2FTuMqUBBw2ndJu5Se2Efu8pwHqRHd%2BfHD%2Bk00AwpFW9rBIK4mgxoyFMfrWTGUbgaaqKw%2F8mfsh7hUqvygAxrf5vz2BCrWqIWKjIY9nbTZnfh%2B%2BWQND0b0zOCsKTFdMNnimsyGLrjp%2BqTh4ZLMfISrRQoBNwdQX6uZmLHa5rLHhn%2Bg4eZI8AhR0pxa7J0Od6aguoioixTgay18Mx4nPkFKho87E7rbqDuFtUa9er%2BgTxMFvTIsK%2FUdrf%2F%2FWyxrV7aQIAfT3cexH5epLiNhRx3lQBSLAjgyPT%2FgkUoO8dhAXslK3RfByU8m8Ut2BcCGStZ4m1Fb0oZxa63K9oR4Vd2UmT3y7CK8vKNidprGA09YRYYFE0udrWi6cLnN6e9yYvRUB4qMPE7daOzvcf5y4dyr0B75VN8VtkFwURlzOvqiRDasmusI4y3OZD79Us7rjcb64TkHowIR3J1obV3W24jLlN1kK6gj%2F1bwG5PptuIRjMhys5Iv%2BXphDee9uoUxwueKUOfRjnVQ2I%2B5VRgLR6KyHYR8yT9dx8Ql2DhaRQhMcjFSr27ANylMz%2Buq6Z6wbCHDDcuK2yuP%2B4%2B7u1lPsFo7aW3qClVNOby5qAteS9wXxSPdTDrmtXJBjqkAfkb%2BFPcACqid2q7XrqvCXZL3jclrB9ILGS7oQSf4aBkZ076dJWra2wyb2XZqhdXIzO87BvShX5gcAF10Dk0U7B55Wkf3EEaOpHBWiJQKEFjO9YbAF6cs1zgfNOh9NJr74MjnYKIJxbg3TPpBnzzbNY5FIMNNuBWtP%2Fy3%2F8DFLUOz1dkhMpDskj4gA8nK30uBa6DN%2B%2BuHmC9pWeWznOkZWe9XC3%2B&X-Amz-Signature=3d867084ad91afa5b033b96243ac1ce8418a1dc82e4bcb23ad7aac174adb5394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

