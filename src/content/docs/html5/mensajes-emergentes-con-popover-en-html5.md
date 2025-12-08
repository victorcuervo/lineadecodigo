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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6Q6XJYM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T032448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLI1dGt%2Fo0Niq7S33IGxuoygPdv8iAcNGGO2%2Fiefy45AIgHbdf3BjwEjL3%2Btvjov1Wmo12KCj9xTJWY97Fn2vSRDUqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbr4aXsupMYFH3liircA3GMa9cMWTpJNRSu9evnGScZhr1%2FQus%2BdmxvoEO%2BL5dX%2F%2F2w2fTfiVi%2F8%2FJ269kRMwP1XsuilZa%2FCU%2FmQ5fszUd81Y0c0QOVAbSFOXVvIwGH%2FrqqiTDHH4s3BaG3rbkCrD3itF1Ncu6D8r6mfUPLAPr2GIujzvrsCQ2yuAw5fBfs3e81kspSNNoZnc1%2BjgxrgplbGy%2FuDsGNxefpwrWdPJbN%2F3E8tTr0v6r8IiFs0ltHu%2FPQbhVlu%2BBJqn41ZjBwBrFMkv5VT7zulu8fLRJxdDIoNBn1T1H5Y2OOvDDTug7n6neqVrg7gh1l9HhL5rJN46Noq0CxxziNM4tH3ONn2VoFoUD8UWQwG4UlAfI8KBae6B18A4Jzs2C2gFc%2FmOiB%2BFxJU4QaazwvKzoko1PKYQs%2FVvq%2FOLGcVQBciNVgdvI0OYjqZ%2BIgCJeF1eFvivJEeal3PhUfek6tbli1N8iqSs%2BMRaUlKgt11Q6K1IoXGMaIm6c51BWEyc%2F4z721u%2FsjL8JEq7ovzPDOUcXjOy%2FpkH6AoaiFFSSIHjpFY1zmfCiON33EpXVMvY5ZWOnsSbeWLYyePRXzDNvnczMgAD76nM73J4T8ECzLN1iunmQdZv%2F%2BNvKozh%2FQ6Fp8Gau9MLHu2MkGOqUBLSq19h7YgyZojMjR5R%2BaqtukSjbJ0zvQOYw1xEh0UM0FIaUm5ST%2FzkfjXZyS9nvgJZ00NqjV9YCArEFQAsP0Uj4MpFuLFqqd7GmNzcry%2BxVCGnsV8QtjzmVDBeGsI0xmqAs%2BJzatj3ft03ABYTj2kt8wc7JYCFQ7kFOQ8uxKbQGKb19hJOC67xukGHvmWdwdJpBSzGR%2F4GXy4WyBiet6BH5jfXw3&X-Amz-Signature=97b3ee30cce2efc3559e6753810116e2ba03126080179fc143c8af713fab6ea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIX2GXFD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T032447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKgqCqQRgyzkztu2PpbBr509AKqC4RKEZJHIrzjzxJyAiANdaMXnSItfbeva%2F5TJAsb1E6YUPKHiynNJbqZooNSlSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM16yciyd4Q%2Ba5XxLzKtwDzKfO1OJbAEaJnVO%2BibJswoTkkt0O5y4DL1u98YbJe7IehwsRlDKzO7%2BFOGSiPqnVJXyBK7aT51jp1Oo7ul9Ffyy27oeFwKjn8TEHPTTbKB2yRHI1j4BIlY8G6A%2FBA1AapLyYeoiBK0sGXoxpAVP3wu1X9EBGEOhjy%2Fg70nsc4AzcKBQn0aD%2Bgioa44J1GmwMZsGe2cm%2FLg4%2Fqr21QxGfrfWNkX888bTj3UWag%2B%2B%2BMBNMqeSGBgl5UhBXj0vEqDpn8iTDHaSKsEtWUBjlRl5mwv9hcSfIJmvZiZkYqvuCFDk0uOWBt1K6pqw5Ssdv9eQdo6Uhp3m%2FQ0mZcJKWQqFV1AvtBOUpLBAtu0pvpwWht6NmmekncbxJgG3jsZPWqJY38AivUitC%2FK2G%2BHoGtHaL61BJmWw1yGxX1ruK852xYk4I2k2yah1HGp96Qf%2F3qyPqN0%2FQbxgqHjHtqddVtFay0vS0%2BXq6xeRMEh03RevQPr%2B6B411cwpPi63j8LDdS%2BdmDD2N7p69zuiJXs9kPawtP01i5WEVRcMQTsfvz%2FBp3qUoT6kZuGU02YEcEkLWBHOkR9QGv20u1M240HNzu%2Fv6HzulLPGH6VtWDF3Uy2TNaj9S80yVYCledW3kavAwte%2FYyQY6pgHoeFf146t2jgZEG39sLsEAm%2BbMOf%2FRiyjEq5aixSC%2FgUnXmuOeDehrisJrr8D%2BYuCqslBp4cAhJ%2BXAXHXf9SsFlQkHcxtKc1Hf2enOo0bR7DN9AfioI5LpgyEAs4fpj4ksLIgr1jJnl%2BA%2FSAdwcZjVC6VMXyZhlF71dtdP%2B5hznyJ4R%2Bnt%2BswkrzTx1GHX9RN2UMg84CC4E0OsI79fuQ3o6cHUHw3K&X-Amz-Signature=73d26947242fa61c4daff4a2ea9a5b9f4ba5661d74ff61223aae40a18196292d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

