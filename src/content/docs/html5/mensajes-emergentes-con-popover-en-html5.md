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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCND4MTQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T080759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDncV05BSQ5d2R7K5o22zb6u1YM8Yy9gdhfH6SrsPWOeAIhAJO9HYxwd9VJp5ZbMHDEvoaL%2BQsOYqVFMzXO0Ge%2Fb%2BBAKv8DCFUQABoMNjM3NDIzMTgzODA1IgzNKkOPNKHGaSfh0wEq3AOBB%2BPnKy7KSc60w1lKE5AIKI86xmGeCBV%2BssIgjNoWjFvMnxlNd1XZy%2FEh0njaktz4Ndbm6awmYd99ccxu47bbE%2Fm5yMhgrXpAYM8Y5mkHPDl3kKx%2BcHGHamnblKcUYfhaIz01ypNAigQD1uHGyVvUAnhgUdKPDt49QqRVWKQIYgV21tiUB%2F76JjZwZxsvypkbSU0d%2FA0xZJVAMBe%2BCa108INM7hXj7IzOmPMHiH8wU3w8MbpHIHmB7iYlEJlvZ1wCx9yLJhOpg3CCaRzxg%2FCS8lbbi8Ec8EDbKoQ8QnY0PKH2yHA%2FGPoz4fR4PODI22yHNh9SNSv0wZed%2BOEhbT3wpbX2Qv2QwndIJaLA2PutwvaTp5GGzMsSJjfMJZ%2B2okpuVhkJMOFj63F0R9pZL0wvwOK7nZU52RdewWp9NZfkQWydqMLxkcLwgdG%2B8QICIjua8j8EBPhbItHkyDGVVwXfQz61i5OkyjBZx5a1BmvtGh3W7B5Sz%2BMw0j74HYItaqovPHiwvIqwEV7GIrbWk7QTsfR63zHnPk8PomaWdFVJtGru3K8FXi9cEq3SYhoQYwAUENrpJzyacBw%2FSgQdFwf4672%2BMzctxKceIJ5oZlrB9mzm8OCNqvulHdYkvjCyrMnJBjqkAajn9GYKKFlhg%2BltEGzw0AYijADCM3nECRvv5roYpAkHKWGFQF8C%2FmbAW4kEoBo2MieuMe7aEwKaAnT%2F4CVDKrMCP87FJrlLL1wlh8hc5f%2F5DwM8mIXjZp3MZDMP%2BQwHFCUP2rU2bXkudZ77HwRAs9Unt%2FTNf1wbTlMRa5Io3J1Yvv481MwIOl%2B837FLOUnbmH%2FLukRetikY%2BdZjf5cGiN75lenG&X-Amz-Signature=5bfb1554e967f2829dba81acba2c7b4293621b7ecae04022bad2deb24711f3a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BOIMLUN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T080758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7dXkZpXu%2BeO%2BaSDb3KNvEYxHYDVFFicwqondh0bX3DAiEArBMZlyVqIYDFi7ZCasDpEgos6v3umEzN%2F%2FTgIrtzMzAq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDEzIYCRSkgq6rNpXsSrcA0GcTGDYd1eiYhq9ceUq6PWo6L3c3U2z8Z5x1Q54Pzz51bolWRdGfLF7%2F%2BG6ri6kO9O%2F99%2F69kE8ug2E6WzC3l2O1hAiASs3mdX87i%2Fv4KPSFX03HklhVjy1BrlFCXvMVX5EfTUKDMlvlx5F7oLjSSLnWdbeWzmglS5SRiHabHo0%2BgUWs6QUXjMQj5DL7Ng1D%2FW%2BbKmF3BOJD2d85zBaNaYI6zKRb0ooptSAIxKO2m6ZMGmGQnOwsWaHbYS4FyNgp6WiFfdGAOKfRY6gkW0EwxGY5q53P%2BTNeUgFPjZ%2BL0oNGFI%2FnpMxLbwv37hyMA4KgNGrqszLOwTbcGHkZNq%2B%2BxDqVAL6xVSwj8wWgTV8Rn%2F8D3E63UnULIO8A%2FJePd%2B%2BaieM1wK7OsEvEYN%2FVpICPm%2BHc7ouME2BiWzdCKbwgo9BvUnw1FuGtpl6w%2F1C5F4EQIg93%2FZw2F%2F4oVYg58VA2X%2BLq%2BvC9w9eNDIuRanLZJi46SAQxaEW4yxC6bLzo1naL7ZgiXNTs2454PBM1NObww5RToa7HoLT5izNvXAxlM9D9YccTELkEEhONhxs1dMKjQJoySqD9ggKSBIeU6A10R1w7Dlvw0rong0gbwBk2btLpuXqdTMrO0C%2Fjp%2B3MNmqyckGOqUBe%2BcLKIO2ox1%2FqPsO2ETh3LLWs0ZNJ0gvYFPREoffMzw%2Bn0CD%2BWF1ohKZc0dqF0QxwkNK0QWSqzA7REBZyuVPEWGn5nDqrUFvWWWVrFOSA%2FDdMTiMGhGTgigkDH1BC92jd5tdB69vDtB3ZxOcxvvYqHAMQH8bP%2BYxP8%2FHB8286cWywT7Necx%2F3NVrhHK7uraD9JSPwXkK55HPM0a0Ff5W6YAdBxy4&X-Amz-Signature=2b80440203deec8763ce92e38cd2f407f11459ddd617756948756e51f0817c02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

