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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5OB2V33%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T110028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDbSS9li%2BwCTApujtbrnry%2BdUamQ8sZpeOxsNtCL4xuBAiBAlWXDShqPMF1WQJMcEnnHpwYz1UZqPGw8aGrxDmglzSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMz%2BwmJbBFamETu%2FVnKtwDZOkRzSfqmIVbEE125dl9xlRW8dtg6i%2BcSaBSOjSU0wzTAnA2nWr%2FXsPq5zplstw%2FYkdeSoW0fd8ZYN3QB0AQk5ybWrJqnTfZZ5z1Y1S79MoEQOL1J9v2Cn%2Fd%2BIIArYJhZkEIzG%2FBegkFS%2FTmSIJDBFiYPI6HRqwvrGqP8mIruB6vEERBM7j7eAgJlOkexAtn3eOY7lTANQ9ENsnfjcsEyOwovLjvCrp67A4JPqY4nTBqkb9XoEz92klzmeRZwdeqXpBRUJCY4eZzBYHSPh42UwjudmVRZ99%2FO7J%2Fo3nJ0HRygzA6ink%2FKtIW0XtrQOcVcXscUcihK5WFwUgDLF%2FRpYSfCIBZV6CuYtL49WQxyXRcf%2B%2FAuC5r%2BcrQh9StbEGAC2j1kfc0Y5TrjuyFY4TYhjw%2F%2FeGo2rIGvGu311UfZ1ed531Kuj6DV7RcH2xWy87i9tjGHw0hNXcNcJnGQd6zlLICbSotA0Tgxm8S%2BuDnCLNh9KjiGdBmEwnrErq1mBRIeVRq3DJlYx%2FvqTumO7rriW%2FhDTSmC5mFfs2ZEhWrYlG5R5NOUI3ZhY%2FgKfx0Hp3Afdbq31a8%2FJOffqsBUenfwwCDiPLbVAi0YmR2LBI4NoUJDDHD83EF3yMUK3swq67AyQY6pgEVr8Yv94VyDMWEW9KZr8sZtN0ncuPvOdd75RQrSKJd6%2B8jneqQb6X%2BwtLMsfExS7iL3CE%2FlY%2FMhK5crLSbmNJd9C6nay2KfTwFupzUODr1LMfWU%2BC0LG0hYlbjdoI8%2F85z3JpedGirdtT%2FSvAdb6bE%2BqwevgNM8KC9ysCe0eneHeq%2BWCGvWB7ZtBjwudNkQzuieKJ%2BnMigYhO5CGDY6BOTmec9Zdyb&X-Amz-Signature=ea5d0b4478a375a1a39b94db87a5c8bca929f5d413c9051f74e21fe5d5e2bacb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIEMHIYP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T110028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIGyFZEFsEcEsIUJh1mc10WxmfUdQ%2Bjeh61z9%2Fxgu45dtAiA7FZhSyTY%2BS%2Ffk%2Fg9LT2c7UaYOvqgbakDQbr84ywGRXyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMRAyAfloIeVIiuqoKKtwDlgoljcgNTVJSeMV48p7C8LQNMqZ%2B95A9d7kHtncusXiGPtlFBj8LEbUNH1OO%2BGhRZRmaGp2r5OZjcj%2Fv6ovDERpi6zTt4Q9nYh4WhQ1LndVpCuq%2FXLIrXwESZT6%2FKvhTBGe1ivNLNDAEvTpd7GXLQK1KCnOr6b42YGizq1YhNVv8e54YLN5c9ramVF82780yREtmTb2b6S8S%2FMjTSPwAfNXOrZfninmtsPdngNr9crYyZNI98g3ZH5i4TSgEcyPvx3JkHne9Ys0P2cPGZvrJRY85F4ZN58jQZn3eK3qIjuzwCcQb9%2FXW2RUkciPdiXskTJspN8Omusy2Rx8CHPSSHxEkdNjOHGODS8NbuNwuV3QafFLeIrAn%2FIYSwCTdCXET2nP3joWnLMeaR82aBMbm5KSCqHQVAfUS%2BZHfnQLD22eGG6k4959jLU2Y8TgkP11atRsV3wv2q5tJ17DhD6T%2FuBGVVoXXhifl0MeeOhExMNgUZet3d9OlmxLL4QdUEErdCdZQRTexcUboa%2FhT5F%2BWR0KZm7lN7PV0CwkVGAoDwEZJaGXLKOF%2FfTmC4w0XeiwfLvKCOAs06oX1%2BdERsjktZf6xFFHXtUlW7pFenO6GAr%2Bb4d3%2BxgKLXjanp4cw7K3AyQY6pgH%2Fr4p065kyo6gWGM4mGV5PD9XTT%2FceCzcar86kpUJYf0SxwfuBQJrOj4lw38cZ1NrESfYXmVfBFcJu9HPZ1PIZZq0tkPXflVZSwF9goumN2oIen5V81IhLx7SIQQ6VlwIctvpOd%2F9KEhDJwNra1OC8XVBiBdSJC039KTaeXhzm0xONcH8OL3zaj0t1YK4P4UAV%2BwXo0R%2Fx46oc0MiJGCmdHmiKt3BI&X-Amz-Signature=dbba45ab9b25da9acf17bb6db6530e55b583fb0e2873cdd1e989b914d30c421d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

