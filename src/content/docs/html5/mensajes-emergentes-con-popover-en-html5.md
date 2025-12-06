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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ITXUTZO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5OA%2Bq2VZ14bKidtrcgBm5uPyGg%2BjaWHPRNKnlNJSXRQIhAIQydMa7mp07mVqfn0GVkk5M469%2BlNK5v06cXpFCHXcIKv8DCGsQABoMNjM3NDIzMTgzODA1Igy6A5xKtM52tVouYVQq3AO4qO61UDPg4S2vzl0Fh6u7%2BDSsYSjfeCtjJV4pBx31n6wmKAXBB7WTGC7G42sk5M%2B2De5awFx16wU%2Fbqww4qai56xiptThgOx6XAZsbiZ3GGa0wr%2FE65DoEihMgesb0f1gmeNObkqmX0Y2nKsZ6NAqqlMde1oF7kbX1vSgLkU8ihrUurkbH6vBrU8XxrJOkZHkHRFCOe0uq%2BnuSyACpoCxOqMEXY7qx6xS4tn6sXfsNOqhF6eY7iMTv5hmU3npxEFdKqooJxgVYLxcVjexQRmti5G0iTq7uRv0Z2wCsrfWR2jAuklBjGzI8q9Ekt%2BJeVH0QCX6zPyWEVbcnnp0SbbLLl2EKTEztD9p9kQIvvp3CiRxLHEPkR57I0VweHEnX%2Bw3lmTUMD0YiicfdBOnG72TGIdIzV8RM%2BQUKHkqPNTzNOpoBBpMCymD5%2FXmg8k3bPXrZfD0Eqm8CLiDTa7KSIju3%2FyCXSJoxNCLIIDeORujqC7MYYpT2sRPVNncNg5bgibMm%2FBte%2BVQjMMDHcyyV%2BSQ71GLQizOArZULV%2B7h7Ql7rwbLuQ2Ol7VJhf%2BhFxI5kF2tkq7jpI3TAHUyK9j6O4lzcbPxwKpGTKKRxgFb2NHKq%2FnMmESYjy7d4zuHTCYqM7JBjqkAQ0VzNugGdHQWTrzGra1mns3qlO9%2Fpjw73mdyM1QGuxfSUXUJ30PQKMQICzR9PuMUSZNSXRXtu3LTCf%2FPo4RcyUU28eTjZfZkZ7Vb00WyBYbbmLCyXTf2oXplaznkhubny1fMqAWdlNlwlF6aYuzikc1fpwkgmWnwJwWMX1Bhsk31QJieIj%2BOIXRrpOQPTS5jwnccxY6uSq2RJgDcRjyhkuavSN7&X-Amz-Signature=5eaa0d17e69d1c1cfcdddeb148ac0d5e9525dd04a7741ba8d67a025820177333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI5YGFVY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxDYdWPmmU7lFK4r367UXAWUPJbP0xdqOuwD51rk%2FfTwIgfLuAAdj7sZn5KVRzZLrkSana7uxKG0ZheIqh4h%2Bhal0q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDGQef0YMOfHauYbKbyrcA9nvtod89l67GxuJtZ1dWSk9glYLhL3hMIOKwDJ51z4pQk3WHvN2lH8gqgrbyvqyKEBbeqbHJZ195xVzDYALZo6hkcygbHfdtRXasUDjFNJSR1IcFXN2bq6xl0JpnRHI2gcrxhJ3c0qGGCI5fJ6wV5paE8RJTtVcVSFy8NxMQsuW2aNEWKu3OM6gT4qahIUAZkHOMWfYO0DzQpTvYLebweILVYvaeYmRZm3WLp%2FvAEXwQk29%2BEyndgy6TGQ5fvjzeSKERHPal98DJo1FL7RZicC4plmSqAPywmZR2eoAIxc41%2BW7ue0KjYG6HOHHgsNXdEPlRYU3mKXKafneFZd2xJjVvvWvi9wArEuECvTLZUc4SioYPCmLo0cOkPlyCduflj7k%2B3%2BIQ5N2T4jEnk7QQv3Rwjp%2FBJYt2JLXT46XCz0rF%2Fr0PkSjKhi9%2FtbALnHel5xIMFhQIGIrPi4s%2BzeSQcgV4ASlYhWDU0zKF0RwIl0Vj0M5TiL4t9J80v%2BdjSOIE%2BjCsTaACui9czvRhLqVVk%2BMOkoF29bWCENqKcbhbECrHXZtcAk3A8yenJD1FsOwWe7HyTAB5XlQEJopQ%2BsMhH%2FGzrlGioK3gZz%2FQYYqh%2BAhxZoHilUkoc88YAjgMLWnzskGOqUBbMNS9fSSn7%2FDZ%2Bs5gLilXIw%2FLoOnKANEN6Cf38rEKA1w0IKkvKVNKmRiAG6G4dUSE%2BZdWB0PPwJn1KajkufQ0ruVHcPwk3OrB0SLeBCRDSzeh7R%2FwIK8w2x6EH82t%2BXEKmc0LdBX9%2B1oKwTlkTd2j9q%2BWyAat642hoUkitawwmxHJ5AEKotvPCIRVf73BNbhKsiaYV2YHY4PU%2BMK0OGDudbmt2Cz&X-Amz-Signature=50e5a15bb62136d45ac8e001c674f2c1f6890f2f68950549163f4f0b0d744264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

