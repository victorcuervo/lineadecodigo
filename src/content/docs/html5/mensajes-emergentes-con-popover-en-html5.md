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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z346WVU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BaSDkRb4Ugs34sV5hlkq%2Bgu6Rx3Q%2F%2FEGYjqBAAF6L3AiArAJ4i%2BuJ1QHHseNW8J6w9%2BVMVMt8JxlgnxU1IqK44byqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMirGlvkgK8Gol44NbKtwDQlO5cHqZlmJ7y89XaEMdmRpCTjqjW7eqcGLoZEXOOm2Ru2USjByyu5fVw8iBIKqwCCdn4we6vzoQx6cXP5fhg%2FTGUxPHqW1onpuGqcpVxDZQdPUoJE2W6tRP2sYOPYvZRWWdhnVddowFleMJW4ACMmUrKGkyMD0fO7ePF5vKY0h3GYH%2BxNx44VpusdqbyTpdzCZxp1nDQj%2FZUWlZfiQcuIbhXH3dFEVi22tz6Ln2NxBzE4WLO22W4uhXqG9sbYMCj3eS2Uc1OLzBX9Nhiay%2BeHku7jWfdxv7OCsXW962oug0oq%2FNCs2PT6OU4m99L9mhLOFbZcOMYhX7VhY%2BvzGP6cvldIwOVtatPUsCAOqBZs5LNuowj9oDWy15ymI4iVW9oEbUVgQLRb9C6njH5%2BrdJk9xL%2Fvw3gU2KqNAyl1jGDE8ZY1rNah8kHqCySZISZXEImIxw3f98WEZmHGkRXBEh%2FmoQX5hTiYTe62NRj2zEMJ%2FWc7S7946HXjx9kmf2%2BGja4t7ZZu6bCQkDHrr7sc5qCp7dClvvSclIsddnD8qZ%2F1n0Px0d%2FPqg7LS8CrzXecZkzz%2BOIWvy3r9qzskxnMqsWWAWrbn1gp2Lt17pfuaqRUZFgCqTcERrBP67RQw4KHYyQY6pgFKR4Xjt4CN2mXfqwHDDp6tOxiieCHWwRx8JNH2vIQsWuEsTNHd6316wh0srfCSeL6HSpQr9%2BfFmkJEeGnbFnIsBsMjEwU580GIx2LdlzJVyWjUtVlt0Pzsp0ruvQ8LPEnQwEG57nUZlGz1cugTOeBoqQyWHVk%2BBfDHuaZaskTO0PxlT1mz3cqWIPV%2FnNYyC3JnPKtNsuI7iP7WwCih6g2S%2B3ikqxL1&X-Amz-Signature=6fe13704e46f6d74fadc6ba6787fac3b632ad1b056a82f978da2fa183c6168c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WNJM6EK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG19eNexLeLKNpD0wS%2BETDqP2j1M%2BQt7FMF5tWGn0k37AiBNcCY2oOz9ULc5WViADnKex5ErhISuci9p%2Bz9OY90Q4CqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ5Dd9Vatdq3ML%2F%2FtKtwDSNrS0gAGxYX%2Fi0SMlh9QGX2pwHcXD3gqN9uxyGmloW5U1rr5VPMM0U8woM5RCAvS7gBygcP6QCiZUlqJ24mXYnpjBxnO73L2NTjwFkUOSq6hUn4ok4zifYzilsA%2F4sxjQn84XX8pNzDtPE%2FdnGG4pIuY2UHpGGOh%2Bc2Pm1t9%2B0jNUNnQmBGYT09A3f%2FAQt13KbgcPepyI3dBwEoj8zPRO9c2L8kR5uF7LXuRaUooKPo%2BC89cZBjI7rUqO2qMGzz3vZOPpDNcNU3P%2BCWGiYOJDpMyHVkrMJiW4ErY6878manT%2Bs00YLQowHuQJOuMIfH2x%2BaJL0vcfvcmA6dc%2FVki2tQ%2BU7eseR8W6kD3XoD1RLvBuOZNx8skIr7k3S0jrZpT0BoDG%2Fu%2B%2FdnwmZN8Xjocq3OrH5Xg3FH480gl7FsFF3PBIbqIH9iVPM%2FNoaMT%2F6hSx0OKUa2lOQsrV38uCySclEUx%2FORni9VGWAArn3MuiG1Ia3ecI9IlQU%2BUpEQUCcE%2FAji579xvrzTSfl%2FRdwVCYuON0n2LeNvJHepglyD24eg9SWXRXovr2UmUrJEW6zKngey2tPmFceEaihQGJxsv51Apa0EH8fNGEoTGgovCfDm7BjxOqWW2JaVnVU0wmaHYyQY6pgGjx9bAcNTMBqcwQSNdGSlxsYwRO8zQUIeuMPJrxlacrsj%2FRu2dnCuONbOf6iFdYSM1vS5%2BtU3srD0%2F8No6qgcrk1zWUI36t4S1xi8mP13HyKBWlG%2BLikpS%2FdQSFWa78%2FIRYiB9OqMJuMfFpBYvBuMAnqHNLEImS1CqP5Qha%2FPz5nIx28%2BMdlFw6uAUAcPGedaAvJGKKZ%2FY5pU489zCTED6ICfRbduS&X-Amz-Signature=6effad8fc7afe0ebb6e667466809b9c06e8dcb1b044a0e7b41acbc0d4f99269a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

