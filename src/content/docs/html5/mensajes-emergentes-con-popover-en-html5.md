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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQBELN7I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDVy82aQuG25me%2B%2BA4%2FN9%2FzobVP%2BvNVrGIIUadIV5iNNgIgHIAgCgSX5Ae%2FA3%2BVYoDTMkFcmUAd4eR5F2KJ8sr%2F9agq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGdv3JU79fpE8FfpcSrcA%2Bh9JwEPkwdRkOpmF8mFe68oHHo3ICC8r9q9N3eCRK9kUFxNnWL8ydDSTdczea%2BUsKOCkOaCZ4Fp5036iThULccv9ymBx9AFGlaw9%2BFtcbm%2B3iARAyB4WAs1k3LN4DgqeLunqLZkLvt6AihAPEC2EhzG%2Fgn3ODmRSJWzrjq%2Bs0KZuDIOj1OTzo0YA4kdN2VPRjDXwd3HvyGQsuvF9KQwGRFcRkQu5ZmAvKKVnxpWt39u72jBceT8MlQvopjlKzK2Ly2HIrGmU95LxnOd1vLi9%2Bf18vNiVcYgxTynnsT%2BjRUtoNi8X1tz3KWUHIBijSqwuBlTH1YIl22%2BYwAMYfyCZOqALemu7sSSYAC3d9sQMAJ7H7aJ8KH8fiOJHhCZSMMCwj2RflIJ%2B8sjz97yUvOYt1VLFFhh%2Fe2zrPyDA41z6i2Ofaa%2BEKj0onqTQBznw%2FAlsbt4WwkrdZwbeGNA%2FynCfTvq2ew%2B%2BBhJ3I2pjImuQXzjtGkSIIKOkmieZRmIEhoTlbKxKMpLlQxh3QPIggioXWFRgDCOGh2hagX%2BS5mJCdLqIBJbLn3JEj6owW6ewLps2Z7WW4CrfspnMJis%2F8IpCMVE5WA7r2r8yKIsIC9Sru5vboERJgp0UZgcwNH3MP%2B0w8kGOqUBvzBy1fSxWQCaTWpU8kmUWgN%2F1capoalzUnx7J71V3hMdQRPJ8aHdar5g9B6FGGzQO5CUJ5FqlJunaRjqWvYaABgVP%2Bg5FSi%2FvBKIts%2F1J7TOTmfMAzkTzunfwt6FMQK1MOYmPCqVS5YGB8Zh039U4U0cyLtKjTN9gY71rKWnc8eVY0GJ%2FBlKubFTrdtEUhVpOV23GNv8sROhK2FNARUUHGgput6M&X-Amz-Signature=8eb964df0df8895bb7c43dcd961a7b9f4f8d19794b86a87eb571f3998ae7361c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOPL7XJP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCqPZfX8BbMWEdTl2JnjxW0FGrDOZCtbZdhngFfaxvBmwIhAOHoEN7%2F3tZqaSFxGgFv3aIOBhUgaLG44x687drN9VdKKv8DCDoQABoMNjM3NDIzMTgzODA1IgyTv1mOYgvESx17RcIq3AMfyjlJ7x9wQmQqM4%2Fl2AxxH2bpM5hzzDmifpx%2Fe9b%2F8PhqwnO6PmRonjzlCGd831%2BwPlxg1GOQdzSCr4RXuHlCUX6c%2F7ERf3llNhHWen%2FJxaJ%2Fe%2BSiHKfztBjzPxfi6u34RZSLvMHfoR9Z%2BVYB4t9HNI%2F%2B%2FHitw565UmNPjf4T8KkQJN0oZCXOrTD6FpVTrYq8IB2FFBNsUz0UrIL1YmXW4tlwyl3awVwdugdXpkMYDNz7awFJGX8iTyRHT3twRyfxVMYwFcWmbqhjZhvg%2F%2FpT6dsU%2FsVvOzlEPIzH9AteANo40v36qNaR%2F7RM3ugQGxT3wdKkGSnoXvaEGmui%2FmcLZsc12MirZx3TwCnJwZQJaRlRrA9IFHtu9XqIbIP82Oiny2G0th%2FpkIaIavtUD3fd38%2BV7Aam4MkjHXGHiF3bFtvRQQPMGzU2a%2B%2BFtK4NVXdVbOQFFhAEfCCdwH2WNHLYD8KDE8mRBA77Tky9XLmnIy0fZuRrv7SpiUyOBM%2Byd8uxmfWvms%2FM5%2FaO6xzPj4o8TQQGRSNXqwFOPDlUxEo4lqJ7qXisljeFfk%2BVnQO7WJWpO7jLlpJxzsEOU4Rz3dLxjuCet3dmteoF4cuBIebyKGmzFa%2FZchVYyfd%2FUjDftcPJBjqkAY%2Fjr7U9EBoHo%2BZfUO1jpLLCn4BFsGS7GqNtZiaQNh7zkzbe6BOHW4g39rg1rXJ5BPFnhT2mUG5LMvgH2esIpnr8Jqv4AbKF0F9oK7f3HDMwW3fY%2BbVpf%2BljyfrD%2FQYKrZVkz2HMRXRyDJXqmGVj1ms5jVGCgQlz5CHj5zA%2Bj5KoI%2F%2BCM4y4N2%2Fjln3cdC6DWRQvid5Mr0cdo2Twfrr8okE9jz5R&X-Amz-Signature=4ab4d5ca6ec771a5d26b6ecdab4609ad900fadea0705373223fe829e7ca31155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

