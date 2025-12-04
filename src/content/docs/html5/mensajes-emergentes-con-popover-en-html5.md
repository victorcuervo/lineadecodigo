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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I4WNUE6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCC51xY6xTgiItp5B1%2Bs9YHlPvzJAoUwMFrF4RCYsWsgQIhAJm7VlFvuVsKZuV0Qvd485GFPG1Woz4n9bXzhUYoyjcWKv8DCEUQABoMNjM3NDIzMTgzODA1Igwhrphw4Is8gaBpkQYq3APOYLLeSTcBIWjlUwOl45zrIJGjhax8ocwFYKTDp7hTe2IdU0JI8A8gPfpRJcL42mHSPH9REsmCSzU5XRdtUyCHkzi5xpsrSfsOoRct3moXSJQwTsJNJab1SlK8AB9S7a%2FjDme2JOlKuidqdj5wlfIoyc6CYtBZYMJGoniaJSXwBgICS7Cs7w%2B246mnVgKuZzv7xZ1QjQWPMx%2BrFQBUG%2BIrmFcvorJctYCsZYWbp7pc8Y17Nd3mSlvwFCkIV6j%2BZy3XnEjGZjafcy3zL9t66UmWetRbUrQPwsRp8oXkDUa5grtVyJ7zxUeGvTF8eS1K%2BF%2BjitTr00Co6h4lCHNH6%2FbTZMmnhDcx8hzRhIi70A%2FcL9hjrW0tY3oMEoFLNLsrfX1gXd7hhYjs10G8srYTJsvh%2BlHzVOqE9t14cf8Fvjh0mJV%2BG5j8uGzg766b7UkNYS9pifQqaHZV7iINmNCR7uVXLUv3kZ8X1%2Fc3nkMSTqATa0O83%2B36DqkyLGf8xRdcMRcc2tVbPDIcAKGry1PxETyRkJUwvZdylzSzlYGDpqPVXzwnxitpvVCRnJtRezhmgCqanLLGNqX5rOlavdg8EUrGK9x%2BZXnTA2grNwKG836h4tluzGEUzUiHvgBkNzD05sXJBjqkAStNHfs3BryQ15WLqjdBkNYJSJkJHbLGn25rQMIqQ%2F%2Br20nHROSsIkKP7YxaYqeNaqxAqVfcqI09o59Si2HpaxT6cZz6uDgezCeGAJDaQfd3OPj7cHMGZNf0%2B6xvNX0e%2BdzfH3iwgXsAJ4nlUq%2BgheSt7RqDs18QwoA%2BO4hMiZf%2BcVhv%2BGeLzUAx%2BjSqkQQxWrOxRFqZNI7sGYgfLQ2rmTkJ%2F4WF&X-Amz-Signature=80b9db4eff0b50826e61a1bb561675a3afc17aa1b3103da33b22e480c5d30d94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQJSONKO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCID%2FQ6FwLOGsf5fzYgUAtlafx5n3%2Frx3GyM6dcSfmam4wAiBjI0Gk5Jik7nCujVaRJe%2BXcvQQd%2BfmcCYNxVGfWLydrir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMGT%2F%2FIDYSumthE8BdKtwDuHLDjliiVGmnyO3QobudVguAAnqDCxk8TTxdqlzwlyV1XIzEla7SAaJuj%2FgKxkF9JxZExO6hREuPAHymwD46D9ZCp0nJHGOEK2Xvhj4XTbF6pY%2F51alsVSqZ%2FJkJmmkeDLZBumhCTa0wkPzf6cyKeTL%2FzxWyyGJ6a%2BMlR0R%2FcKNMG%2BCy%2B6QKeIZAQBwclVn8lQwpcfBI%2FUV32Al9vbLKBjO5UZCux9oepKZbX5ZWISca4qWTsRwGQeC5ypyf%2BEtib3ozQeruF5bYwWFItmJOONUDbb3aAC08%2F%2BWhC9%2Bx05kzhj1Rb2PTfjUS89EVUB7UOkJQUAoONPlINPae%2BFMwqkJnKI6NMXHOZhafvWx%2BIDvaqEcmQaZ%2Fm0oHWuAnvH405MaSvSq7h%2FBLHSlrODcvjpfPjvbQjTOGCjs%2BVNMDb1yZkUoBtKo9NnZAeKKGD6F3WPV8DGkRQoIZ3aNfSO6UfkZJ6DGwnWQAxQ9kfkw7Snqw7z%2FeLhIbbEuTrY1uW%2B7jTdbMScnT3dfQkQdOSsecHpZSWVmND91wBPMlQyLpR5TZ9HkYFlmfYmu1FvvtnSRzNpMUp%2BmNQRQT22v%2Fxte1qGz9qn1RvCDuYdfQGdeKSRz3sfpzLGkmnR2DQ0ww9ubFyQY6pgGlrlx1AyYxh8qFKPB28%2FgkKQrI1B21s8xhdU37PGxaF%2FzS%2BR%2BiAMcCX1z0qTaU15376ccz0Ktk57G3ybWGuEHeKLW8wXl%2FqRYBo1I1brz4%2BJSeHj92wwDSEjLSV6Zsk%2FfN1ro3hgoPw90b%2FEvssMYeitXqYs%2BPgsDLYzQLlLb7u2G3GWPvhDWNszlIOfaqNgWJjBxNCrft5L7EWNcSj31tU6UOqREs&X-Amz-Signature=27d9bd2f22a1bb7866280ab788d44986f631c78438b1627d9635878693515439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

