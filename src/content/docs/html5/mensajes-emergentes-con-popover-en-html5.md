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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L5TR3AT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB85Dp4%2FVsHoril4sw0VMRCYCRzZvokmsd99x0dvxKSzAiBviOo%2BQJfZPI41z%2FNk4juoiy39smoRcrZs9i2YLvgW2ir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMJU2Ge%2FI%2B2mxLJshzKtwDbukee7sv4tlsFkksFOytRo4GehlXniRht933aX6ks3no%2Fs2Ska9s%2BJrKIsYkSnHJCWBQ3zTzX8XpQdH9Dn%2B33%2FgsdCP7v5AqNJLhtYcxI%2FavA9pGEJoe53pw2LxkgtOyPHLomYN5DPya6g2xFU3osmisot1M%2FbVAWQSnxFu7yJwZB%2BOXkxNnQpl1F%2BJLlZfbFYTA%2F0MCm34vpLnfIgIqPweca3WuPzOYR8EF48coGDerr7SMu%2Fmih3pyHUXvJTQe0DI8SNWi9EO1%2B%2FCJkb%2B1gpLNbIEFDXR%2FPzyLM%2FhIUqRkrBPRwAQahNc2yr47K%2ByTwb2meL33KME8FA5CfyuV4E0%2FawADStCfexT0J0wGEtCAuh0cOse0lVS8hQo8g9TwZuqJinf%2BZIcDzY%2BHYq6ioPb6yopskU%2Bx8swzDgq3fQ7awV7fN3NJZZxiDByHM4O6tdixNZ4E7gmqJC3YAEQVIv35MC6ZLxGJusf%2BQkq9%2FcrS8Ysmk%2BFz%2FPH3oLg%2Ffa%2Buat03n9RAl5kOaSzc%2FB8ZEP43CFTPgkDZ3l9Q%2FL0k91PYq537qdJG2TMGgyk9UmuGWC9WOAu%2BBQszNKrGfTRU3BzwPHGVsBKhfWJ8jouTTnsTcs6OJF6vHU7Gd%2FgwmLzPyQY6pgE4TLetjxSD5LWk96PUT4FYYaOvMAedf4or6UJ2NsAf1vdGkrNcORJANkTfjPXWSS7Ruc7giTsSDlVBzr5g81lvxhf6wrqU0pPw%2BeYx9n0IGbw%2BcFEJSYJmk%2BjRR7r7BTKQ9ffIsjVohH8dJXSCrDKYQfXNwW7kYVKAo2HZxcKmRDyFsIq2bCEpfH%2BczHo2E0zQuE9q0%2BXHt68CNw6p4nStRPb6mOK3&X-Amz-Signature=7c899ead68211253838fa77520f479b24ff4b059c3abed4dc6d7078a6e0edfc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZF6YS3N%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDM2fVE8u36zjO%2Bo6IpNQsLWt5qPjwnD%2F1qgrIQIM90wAIhAKnGIWzLzcuYNazuGT0MayH2FuiAD%2BGz%2BrBAtLv38QD2Kv8DCHEQABoMNjM3NDIzMTgzODA1Igz5oW4PlEMEGfi32dYq3AObgxt4wXvvab7v8cvxgKW%2BlGI5lio5JElh%2Facwt1uPnCfgX28rJjDnxm4j7FY3y5VG5cWgXQrc5svkf1wTdtSmzd%2BQSOnWnkgVHLNOem8jhFBoWxHJom%2BIx3VyP0hSVJ7cMgBmuyJ6bzi26URPNmgLACv96XrZPwwRlJHbbm1VRhXL6bFrk%2B3wjgwv%2FqyO3Z7Gr7%2Fhi2dqpBa%2BqJJHjKtcmLaW%2B6lrKwtBRgNdEEfXVYnHUSLxZ3%2FnZWNDAy7haDAJRNebzZ3TDHuuy0aWBuD%2FjRY79HXf7R8CsN%2FRzVqUQUrrA6GOa0%2FqseYv3nuCyK4bsaUQHS03KN6ejstQW8FNshGCBp%2BbYmbOI6K%2FwiDkMigp1Hm8Ylc9hkFOgG84BirU3naaB9lLpA%2BxRFvKKdEXzIk2Nmjrs1ETEbng6Iu9rjJWAMBhP%2FwjuLW8kJhJ3iJyZLmzQfHvOH5rlzymHRg7ZzindH%2FbJ%2FrrMFNJYt7tz8W4tMhEFJRzoZOW27s%2FLYdaj6bW76RnAroqnMyZnPgd7VLJc26ut%2BQr3%2FMTa1Tl5lMXAyUKcTmfZZuDhled2of631NHx7KK1P9hlno9Fm%2FQp92ZmXMX0WRkVVFfhbu8ocsqcXJlmwgxpZSQsDDsvM%2FJBjqkASb1HP%2F0xCI7B%2FJ3UlcCCKV5xDOm7NNu7eWOPgfA%2BPc1iH5TxmynVNnaOu4ZsxcPlvbH6kHQyVbhpTaCqL0AFVgLLb5yTbEXaXbHNSR2tGgwm1OZOG430C0XOl1bHT3JXM%2FXv5FBmMjpsuy0aDe%2B0lm9qv1SOxxu2olXX26vF3kTw10f7k%2F4vklCJ4cLhANZ4lLcRgZF7a4Cv7yoihyBhLtmi5EJ&X-Amz-Signature=886e21c23acc80c62664ea29408059ee676edc82b7f305309d69aed0b148c1c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

