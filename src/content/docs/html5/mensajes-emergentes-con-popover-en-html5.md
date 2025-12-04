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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SYTHCPB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCsF3TENx9JHbGi988OmDv3vpXSnOB5wxhwEbX4OncA7QIhAM6hz0o7NRQL3tk%2BsJEA%2FS%2Fu6uOeSbYkgA5iNZuiYazgKv8DCEYQABoMNjM3NDIzMTgzODA1Igzs5j24ymlvXcuUbpYq3AMZVqPGoj57LfSRC86amkyqcFGdfJUA1gk0%2BdBA8IbT4gS9ODbv%2FyiZv5m22qtjRjZpmHeV6L2QPreyYTu%2FetdilHn4T5lPbEPrc0Pt7TMg6Kdy5RVYjaevWceEXdSC%2BN3kgR23URE1YuyJ3Idqhh736imUIMNqPcAOfdUvlDXJTB6NvuDty3QcomIqqxospzchKmI80LoRt%2Bo%2F7CLFOheUxzzf%2FuhZh%2FirGddnLl2hThzzT9Fvg0oc01flu6AyKVxj4S5M%2BSF3wGCVY7p3kWuc1za97uaQX4HnNstpO%2Bc5IsG%2BMo6Q2LVzie1j9lHrGN%2B92YcHsXVXjfcBysTYm%2FmmbFLIM7E3985J6gGOwrn%2B%2F76QsKtaaQlXUbk4L0DAWkbNmg6aO60mtL11f6mWte4LWrO05J8KYYsJbTZZnbRHxtTuXITHLapqCe2hrN7cqzAmcQDGtF%2FEU9psOE85GtHQ1TvGjB1iiHz5nKVkPsPgYDH%2Bos3Bn6hVyDStRG5AwYs8dbPNmHql7%2FHdLLi1A2PDAAmRqd5Q%2BTIz5aZSHkRfLYi%2BCellgI0pwNWIvfsIfOZyCeTIxPb6nSlW5lh3VhKHEOkEZmT4UDSpUaNNfsLmtDBl3wepFWu5FDzHjjDJg8bJBjqkAREeGYKtCcf2go4Rk5KxMOsfJCIhZs0P4coGypcoHB0DyNfNajgTl2EZ4%2BceS3GCVKlOklbZ5RWw9ERweLvDArcIiwemEmmNRQDB5zf5xeYQtZSfGrdy1nyB%2B%2FGMpoWeL0wML%2F8LyzY8efzgGN%2B%2Bb9NAxuD578Jrx9H2YRVC2%2FHUfeGGfeToxn2eaO9octM2MklGL68k2By5JfZ6KToh%2FYyKseRl&X-Amz-Signature=114bb85650d415999206e42a1263d7ff7ea656195c3edbdb7cbfc50f32b36a17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVRQPYVO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDaAqezWvcklA9W2uEXKcoD6NCj5zQkQHBQv6MphpUsUwIhAIIIgBWJngWKVweNQs6jhTsmrEmZZKTTVaAH3GKYV3ddKv8DCEYQABoMNjM3NDIzMTgzODA1IgyWU0Og15K1QPc9LIEq3APpMPyKdGYCxSIzsB1837zUL%2Bo4EnDhN2zwslfycIHPgrJxNj4%2BVoANToR3xbVwL%2BOr9a9IrXaEDAJ7pfr1CqGBmWqqDm3pijJVa1QMH%2FaSusfooxyw7yESuIRc05QcmcQb%2FYDvCNUr9ONlq5tbj2wALR4rBT3FiKiH%2FLMCO9rCXBaVlpja3F5eR%2BHE%2BkiNGHjQQvEGLm3EKm6eCobxs2nIR5%2Fo8ONm%2BxPDlgiMNQVRqbH2uljt81Qul2F76KH97NCvmIhNQnKxoSRgDwrAR%2FLcSZcoPL1f9CDZhDj7acLfYhC%2BhN7s3e8DaCA37ISHGqIHG%2BMJy8OcHn%2Bmp7Ep%2BvHsQA3ffi8rQNHa0vmyq2SqICSbgvV545s7jy9uEzRFuA1NHtoS4Qs9Kg26IAa%2F4O%2FyNV9qySuKi9ZhkX1KjSdQM5HQlbHYAgWTebZlURILyvsj8FubLsGY6zCu7XQkgQsDvBOBr9xTjjHkou%2B56bMzSJ52ABuLPCYRBQW2NSHWQDGl4p%2F2pJcLcjnZojdbtK4BS4uEwSrYHkJ1a9j6PWXZx2f7hMH1Jf%2FlAJ0%2BCCPABWEaI2HSDphGxtS0TmNtArFAOPoHsskJHcKEavSPJNu6PoqjTOjxNynqHkgm1jClhMbJBjqkAeswBmQWQMAUlzW28zBUje9Ue%2BniQSytkzXShp3g9FBOgq4VakLWntBK7iXnukDhvgaH%2Fg6MvpzbdOjL5TtcGh37zMCHR4QRAOXqXqcEiYsp7aGz8gDaZbPkh1d1VfREdwIe%2F3M2tyluqgeKBn4XOLjmB%2F7%2Bn8R2acfJMkxEprhDoP6I5tZ3yosyEoxvKdZWK7OgfFYPDqrN3omOQDjDcv5In8NQ&X-Amz-Signature=355981326b47f87a9a1370c6115ee258b1bdb3b396925a520433e6a5d8ac23ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

