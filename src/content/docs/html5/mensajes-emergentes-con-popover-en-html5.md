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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RJWL2RY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkAPJkG7NOjHf3DIaTCiwJhqPURdO%2BcKK0hQWwTs2mvQIhAPMwls0nbEMu%2FOpo4tU8bO049rEztIKyXV8Ma9sL9V3vKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdYSGM7JG3pTuyqmIq3AMiL8A94WoPJJ1d%2BSKJLcWr5aeSnqFf25uAMO5KZixG2wpO0jZ7w2FNqoI9wn%2F%2BNED1dL47NX%2FTjXpxwhUEymW7VnklaFZXWi8QYSs5uEUcsnmkYIXyUZ35CDHRKnoiCOqZUy6mgCaEZYEzXuTj2aeuSnNIcipfNT5eNEPL4kkp6e1ceQ3MKS%2B74%2FqDk5%2FK%2Fx5cx71NRWw2ScnrzFOz4n1LcNVwRkwhycjU0vYPqGbypmszG2ci4%2FnyyC2fHtEMTsMur83vPvN8VN7bDswCNkihP3kHP%2FpVi50%2BA3ICrg%2FtX58mHn2SyOjfewbQt4ok5kF2PSeQbfns9QepvdOAerz%2BtBcuA5IsX86oec1fPHoZaOpp0rsqwfYa05pglXtnNxX7FbH35VRJWdsqZ2P7tWztef%2F7Xf6HIJA2XqpQ7D4WJiKq2yT23tLCJALmVYLRDi0vy7NO1jKz5%2F%2BUR6cuhQOcHOTz2VbGw0%2BRKmbQIdgvIjYW3HXi8hLwBaGo7HwhmvrYY2HRUSMZkMBXzUO1n5rHuuhyIYVvT%2FvbP8M%2Fu3UtvVJBKqbE5SOfBdRO8t0PIhdn7054goLV5cZNY02Vg4CvkQ22T6SoljfUOgrieN%2Bp8IzST4CIsw0WlXYqTjCWjt7JBjqkAWoOppR4p9lhqXHyOh3w9Dg8BTybUBXxvYLKFU8zJ0AzDqzdq3P3TVfXnHTqud%2FqPekWU1uKMdJCuZj6bdRC54zHu48%2Bt18BFCdMb90YizCkALQS7C2Qbw6Lj4cEnd4IOIErASYfybddCd%2FrpHlTyUkWpkUIzZEJAJIzo5eulodW5xFVrkI0ON31xGwDszhDTqR6M7fp4INN%2FgwLFqpzz%2FaX%2Bf3v&X-Amz-Signature=c9e9cf50e434bff5425c2aa05be7edb200c21f63898430b0daf518a7d0d0e134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJWXF637%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAQ%2BFTt1%2BZZZSfBsMsVvZGOLFvHOVuAGELMae15VFhtQIhAIqFFzn7sHarjjIHCrMiGFJKVvqNDtX5WpwjBLe1YtrKKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6RFj%2FqKkQeEHTfrgq3APDS5t6I8QA%2FjPTzr1%2B%2BP3NBg%2B0wp2fdl4zCOIE0HIrewzh4wR8akMO%2B%2Bu1QWojvUWpAxC1Aguvg4x8xHKyXc2COW4UCTSUO3ycrjkxR9nt2Nvl%2F7fguwqr9BUfc9hYoBQIyerH4icFeSURzor%2BgEtU2xjRBnjF1R2a5BVz%2B5rlCZNMLfV8mpmd2ujvDG%2FmZt3jIoI5MqhcNzyqgYtmaYJsAUejvvtMzREF5s6wArk3AnO6wzvxhINJsjgSLt%2B2VQiey5Ki3wt8ix5Z9YfXdOKw1oV%2BfY6FfemW8Pl86Oi1HkPD3%2FyEP%2FCtvNVh%2FXoN4%2ByQFtUihGWkCkZr5lmZU%2Bl25QlCPSyfEjWMCyG2cMnbB0TbKb3aJLs9J695qK6LhOCnkQ9H5Y324PMoTdaDbI5DUA%2FxgyzbRgXefYKh2Ouvj6ctsyuD0bbrNjz%2FH4w%2Bw%2FD6lyEMJGkOOV7vV7R7LUk5Mhq0KzY%2FtKx5gcjDrZCw6D0LkBIHqxodDO8efQJHEuLdJAmfZ4n9rfuB4fB4h82nZNrSU9eMiJEcw7K6tkmugLf2VHNJowppruvKoTwh18mJI5s%2BVnPht6hLuv%2Fr%2FL1bq7ndWeDb%2BqCeEoHsl%2FoNvak24wPHZhMFSnS2OTDAjt7JBjqkAYHVtrnu74YO%2FXBrCY6EuuVzIskhXD8AoNH9Jp%2F70qfc2zciPzr13xUPJujN%2BmzTSdSmzlKxjveoaHIzI6z2cilMwHYz5fk%2Fu%2B0UWxlYeMWlBUg6ZRo6zFwg2MGvsAQCuWWUTSLT58LALJgQHaS%2BZa8Fmn6GeIi2QznSBYBly0gjWqFrndx4BZGiATXkhZUQdlOy3yD0HW5pupWgEHS%2BkFs6A1M3&X-Amz-Signature=05917ff01b87f15bfea7f9ad0112b345fff052747f731846613e6c6324fafefc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

