---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMIZWM7K%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQChmOiVOeyk%2FJEyfGz3uVIZ%2BI1eEH8pA34LmKaY6%2FHpPwIgR%2BrVqli5TZyUZK6r2mKNakXmiM%2FR%2BQADJCl7o4MyK54q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDK2H4746s%2BAufOzXoSrcA4Ae%2Flv3y7gLPzDOzjvqSHjEYKOIn6MR%2B4s4CPlg%2BuJ1OQEbTWtZAwz6oxZWVgSPkSTMFWMDLQHXZYJ0%2FwILudvq4qLs8tzayrAsv%2F1vuAhFe%2FIG9WvNcf1cvCBntkW2SImgGAzr0gY%2Fihkb2732MqMBF1nJDdEtyP7aOYFJeQT%2Fbo%2FDSV%2FdWtUF%2B9Aw3OKmbJ1OLYbtFzvZ%2FhYONbHPH2NR78XCgZVaKc%2B4ci4gRpwIZ9JnWlSrkvm6QUS8MPunXONo6ryLQhVcKiSrr9GSepg2baEPkoUMATPM1K2tJFPtS5Z7jMztX9FYq0MQg2Q4cFLvBXz6Ju90WIdmKUEEi8TJFL1g3O8p45R8jmnqs1p0o%2F6%2FDDyDDxQ4BpThAhiJYEy7LD4F7D1nUNLTVgUGYpNJIkZTn0i%2FX21KZzw3nQhAp32CGP5x45oTCy3f1PXR7SRX1r1nZRhvPhrQh%2F3RTbqF3Ct1QajZgip0y9yFiZwUIMrLsK%2BriJ9dfX6aFXsojAdk2cfPZ9g9VL5prJ0ppu3N7VMvx7E1s3JIQlDonDbZtUN5Gviismewa5ixBGuK5k9yBY2zUBq%2Bp2oq%2F2DUYnwMpaVUkXYXtiCeVwxqr2XvqdaERNWE7bGGWZVLMLfcwskGOqUBhpbXXKpmp8k9FDYdw%2BS8rvubLn0LwLYgQL7PqagQJlHhubhd%2F78JeISbA%2BxxqqP7Lys%2Bhk7IAh6J7qIikPiArkS5x%2Fna6a99VNLD7vqHBWw8IQgKQaktx3nWfjeuCB0CBio4G28PdutFFB1xzVCLgQUl5O7s8nc4WEi57dHKU8LA%2BUk6FzAHhdnl6Xyst0g5z%2FAEsudFv2xy6Xd2sRau2dzqccEz&X-Amz-Signature=4f66fcaf427b467f6d2b5cbd126ccb0496b0b19420ef20db606635ca6a469701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666KN2Q45%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDFMROgqyptc5I71HsacaVz0r8P6CuPWmESHjaHEvjbwgIhALnoLEU%2B48mvCrQqyDjs%2FKRjj%2B%2BT7QNJ4967HtnHz8vnKv8DCDYQABoMNjM3NDIzMTgzODA1Igwo8NJpq2sbNdwmUs0q3ANbQvwEdd9LKALy7ktTf6UZMw9KMTr0%2FpVad6FRNO%2B5uhVdMzW9jx1JJ%2BUE9jecaOQ2iel38UOF9ChWavkGw8BNfANAu98sS%2FU9UJyZakRgxT3wUY2%2BW62KdxscnVpjejyNouOzIlXd%2BId8%2BliI5BEEzhaFIXdR%2B%2BSz2StLxZ%2FyU7fK%2B63DH14wHzJVUMeR%2B0pnrZUMMC9sCZjFc5Mtf2ynG1vcNbC5of7jKgEj4PFlhkjrdxOFaloE8hUyTsrot48NOAP7AVoAsQY54fSevqr%2FRtp%2FLn3TDoxtlNdhuYxl%2BTHApOFWSEn1XVUkBmVQvBo7CF2bx8Iw%2FzMrtiyx9CiDQqNjMiAvw9CeNCsHztb0gLagYWKEELJ95gQem6YHgwZTL8%2F6gT0QoZ5WhzGuRFzcMFmcOTmWq5zIaEABOraqD6erADQGzGy3%2Flct%2F0QXmgBrGDXWq0LLQPLvxc4B3AYt6bzye1TkAhK0GGb3Y%2B2paAoL67GJ6%2F9b3KZzdLdas2bWbrIYXqQN8LEY%2BbelGMeg%2F5tnfm1GirNAL4IK9OmWHe2OsnP9ArNRQd54j%2F2sTnd0THv0Kq2iOzm8e%2BWWJPNV8Wlx%2B4kbPT4h2Quvyf7%2BiwQponO6mo5QBlIGBDDkvcLJBjqkAeKG%2Bhge8cHmz%2FDS%2Fv3C6VboEdfmgKWYLk%2Bm3DXhl5%2B8CqCK5IMIvG1KC5wRL9NIeDhMjEwOYy%2BG9FrllgQUh9PsWlnvIdKiyIUGlRcbTpHDGwOO8rb%2FtosbW%2Fnr%2BSPxN%2FkgVnHhdK10GytDDczR%2Ff6UgAqqdlLotRA6BmbNlFBw9u0veeGPFIErAJfpXL%2F9eig5AugA6PRFgKv58V58haFNpPzw&X-Amz-Signature=46b11fa47d9160c2068b754354256b7a0fded6d07db13f979e772dc6c3f8633c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

