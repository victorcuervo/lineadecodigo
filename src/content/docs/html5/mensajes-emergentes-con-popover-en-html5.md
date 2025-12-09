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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3FILEGN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T025013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWyI9%2FsgQrIRAvGabUT9fWWzqRlMN%2BhnjY710DUMaLBAIhAKuy1%2FLijcR9RrJtiBFh0o5DMU%2FNlEKzebgOtvEiCva5KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtb3BnppaCax0MoNYq3AMibfVz5BlooV%2BIOetbjwA0BXKNngNREforg%2FgDpObL6MZ9bS0XiTQtK5c7UKOqEWx%2FzFva6B1q0Kfska5Itz73n9aXQFJEht8%2FDO0sEWThQEGZR4n8aQ9TSTCAk3WZn%2FxD2ZulK0Ikl%2BuqRvGXG39krEG7LwoAl4tZG05YvmUVfdCON0kVjm1zbSzeY%2F9iOPpQBSnErj%2FlEzROM9v%2FiUhqyHlsY1P5%2FGk1euf4RqdIsUrxW713t459DHEch0rWkaOXkefUsI3NAwu%2FI0Fg9GbontrNy2t0KJXexOJHshiKWMKU1wa3PJou%2BkmYV2RyqMwDsBikG00uHtMC1HIzyJ1F2BYSHmsaLg%2FZhgMnF%2BdBfQUs7OeFygnhrHgRVHK%2Fmc8W3A%2F%2FfTXU9fBtTtf7peTk9PfYUBYU3ez%2BgPaBmgqc7%2B1zYFfN17F54vkVdtmf9Hvx1T1BJqlFLyPrskj45l8jwcWK9%2F6nEw%2FSZ6DQTV6LRpMrhYP0VAl2N8zeiMmthg8VY2DqxlgKwgqWlR9kma6rJdT64NBhp8Pf4mUiH77eSux4Cofnae%2BBsmST3514nzKDafWT2o9lx%2BbsPVvoOEoPyeJYK0QfRq1Hs9h2KXRttly2Vmma5nGALC3aZzDMjt7JBjqkAchUA5W4yQ1stTclUX49jfjc9XR2zL54OOWQfj8UC0kOU%2Fi15mS1%2FPW3Bpzwu53z8th1MybW%2FkNf9zbAkdExPnj1BoPuFSN8SUq6FkkKieD7N79Mtbcb32EO2UhsQOzW7Hg4iacvzhoFHDYMEpwig%2BozDuuSojYpJ9htwjpVehcS9V85mKctbfvwmOVwRkrAVH5Yih%2FqkM%2BS%2Brs0xJYap2Gd19Ev&X-Amz-Signature=c7351de3d08e1c61f820540e6e3c1da1027bdba84958ff41c06223d7a31d7b33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNILXW4U%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T025012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9tcO%2BaOM%2F7nzwbNGlSaTkvYIQjI0Ddmamxbx0vEhvIwIgaznXlFLxHvry1cCKSyAm%2FDZ%2Fa95aGdg34Q%2FARYJOXvIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEt%2BJrpLYNhvoWY8BCrcA%2Fh1kcaXOYzyCe3pV8MveEBEae26yLNfL2CLXvIjXEtWhomWdQ4iLTSrE%2BTHc535UVVVqWtLUKOjwN7%2F0vEobzVoSpJ%2BCuT%2FtEN2zcA1g7x%2BhX0%2FVvwSuc%2B%2BhS9Fr0kQcBaNDCrNo7QlJ9p4ibwxjxjh4EcT1TL5XGfeFF%2BG0vYRzufDwokxI9iLQRdkcNE%2FOGw61RDw2UZqV%2BT%2F2mQpmI3vXwp2LoyFwE2IwfYXEA4yAM2sEBCCgrCm5qdnjyOkbbzQScdHumT53Ti4Tb7HUD2Hd8Zy4DJTo8xADJWLBUt4FmtV5QXhF1qWY7lCbMMcR%2FG7YsyoH%2FNFymzG3NBPJa6VFjuasaHyr5yPyo2Ciwu2rY0BTxRJFGLeVSIZfpKqrVuK4u54Meik4u4zKqnpERw0m2gn1U%2BgQGpzFp0WgQyVBpDsv9XGXwsikLsMkF%2BGm2M5oealGh%2BDLH%2FAzCQG1073ZYsKLwa02%2BiWy9RvYJT5dfUZKUp6PiQxq6mFhKbDn7BmWKEnydHG%2FmKdl5oDDtzDgg0Y530Cq9fkfBKdnmB1c3lQSB%2FodlsjfSFSb3egvIhn3VUddcpM6ScpSyspYjn%2Fl%2FBknImp7pAvBoX9ETTi3aPSzrbhWOAgvRfiMIWP3skGOqUBqwWledHZkIsQxjq619WRCLFCmgMZ0ONIcBkWzIOB8aTJyRm4%2FPIanalKVcicWGr0b0Wxrwerx%2FfM4s6Kk0CLc6C9v3%2F5CUdzaHjAmqjozx7wRPMgsi%2Bh7gZRLzOgorJyDfDM9MpCdU4fsyFTo%2FXg9N5yzmUEJjnpeJ4JfZDxCiThYm4wfYayWIFNO33%2BBLrVi3LBDHD0uCsPGw41iUbkklJjyaWe&X-Amz-Signature=9d0ca426285d2973f5a7daa791881fffab148ffcbc7469bca63034ea6fecd13d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

