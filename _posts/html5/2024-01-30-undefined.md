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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2HRXVPT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T141622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIHko6aJEf9SnQkDGfi%2FWrKx2q16j5oE1ng%2BR5N3J5dGgAiEAtqi4ZN9HKpGAinjJsRSNjq3v43KWzVO7iy3zp610zUkq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDPtYA884ltdkLLfO9ircAzgFzms8BhGy6oGcEc9xa3wSFl33XoTHJMO2yd%2Bmi2AYr%2Fvi6o3VG%2BJ2gIMSe0z1UzimxGFStFz4cPoUHyOIfMvmg0SOQ1MMG7k9%2FE1vXLwVDYM3NDY6wyn%2BnItMS7x5XqdB1YBH%2BD%2BqelwxxhpU0QoRhSGzFBpyeNpxF3CX5YS0GhVrR%2BGmvw3FZA%2Fd6LXQ7tXh5OMuehPoZyIILwXia4d9phEeL2SqZeV8Ftplf23hxQmgFzDq4p%2BOIxLei5nMOOpYa7DaE%2FWdWj9DCLe0dDV%2FPbouKaVho1rKTUlbHUpk69faQNTsS8Gah0mD7k7ABGK0zOAbcQnMZrXErLVCw2Sl5Ii1dLpBER5vxjyULi%2F1nWi5UJ2XirDkxkxjWbSpejp9SG3zim809u8v3%2Bhc6UTgHfdamkfG0cWj7KnXBCbnqEkXUVno2OSAeVS1Umrbe4p4afcHI5zl6aTJY4fIzfvGTg6Wa2Myt9K5LOEFwSHyKomGnhibWD%2Bh8iMTpo5psgMc97iHTwgKgT7Zwu3hezkp6IhCOHYfSjleTvgl54TeExydPpYhzzifSa9k0hofedC1udSTFOdwLNUtWGo3Ry%2F5uvHxVe0UuS63wzw6UTnXY%2BBHy12m7moOlVYLMKSHwckGOqUBwMmpAznrQCC5%2Bw09Jc8esRv8w7MMPpYjCKEah1wr4GJCQD1kf6pFUtMGLCFt4QGtZtOelDkkplxZccYY4Nb2O0GfBRVoGJQQtrrMCTkoWmBt5U61TUuHbCBuhHyRBeJZgC0lHZkEryuWa6GDN25euwxfTVTugKqgf4tVa%2BJ2kgENZ7QOJWUCMXRrt68g3O9tpDrRx3ALZErYqo4B6LfF%2FjLYwsn6&X-Amz-Signature=92efc989d1c076f0b61b2ae6df5e78c4c39b5ddad2c3868a5b1631e7285d47eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJWOQLEU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T141622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIHOTRp%2F%2BtdWoe28jPZx2TK2PcunTzgSEwg1in3x%2FjOUQAiEAvnyyQiIU1nRS6SwHxgXF4Mf4rsgJ7jX0gJxDGixwQ2kq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDCaWb6C0TcQU6M7OkSrcA2FAO7217jetSayOMea5nixWqD64nGWypK4vEUx%2BgK6GZ5jonBW9a0AC6HY6tsKRUD%2FOJSkZhsp%2FvDg1Nez%2FIWgb5PxvJVGulut344AqL53vnEhgxzFZXhHBrv4%2B5NSbICg8fgGPQQ628kjZc%2FOl7pzEpvixouCQKyf3tnO2W0zDMkMt1hrfUyjDpjBudLd0aIVIDPTX0oLQFJ5CbFL3vBRy5Uk6qCp8Y66QXvmYPc6C78UNQ85BQv2vl9kQ58alvQXg0Pv3jJWnEGeIZPZo7bU5jVrtT9zPxZT08pohm%2F9obZU6Q5Pl7sYXywWwihDjyurRzJepXYN7KARBx7FeUjzi%2FXoPXHSrlbf2avOxHoKQRN2wP%2FFvv7ErHwko1%2Bt5AX0VvHHaGaASPTY12lsE5%2FOxgrwg%2BaV9plZOZx6pWNOTwOmo7Fvtr41qQe8GTtLaPud9L6f4FDNDo0Bc9D8ccd9PQCj2AfglTbqsdAOH3TJfqNP%2F2wIPZ8AmSqwbZhvXPH8Jbowb4toObAN%2F1Cj3MiMHBxX%2BQ0Fdu0Lv0rs3XcbEFL1hXvntlsSrQLKQi1ZBS75OYbyEH%2FLHC83cfsACx42llIQor8r4%2B9r9gQ3GFc4EmA46WZ%2BDoljKrR5DMIGIwckGOqUBGt8Dv9JxDY7Lpei92V2x1DHWCz3LL792cD351f50N7S6o7ikBpiTi%2Fd33xTBpYMRTHx3Dw0cvmhVtUzRgIH7aiyEcW5WCUunuxd704I7oEqlYC2j%2FX%2FW5ZlAO6QXjwjRoAcScfw1XY7f7GEpFOaMRWPGVK3uEjlF9qSy0S93ZBxpMX%2FdB6TD0cyd3nCcQeGukfsXFKiTN6qH%2FIFyNKskp1UW%2F9tA&X-Amz-Signature=0142caed77eca26d3e5c35064b55f12db5f3e8d3ada3493ce43426a17bb2c573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

