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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644LH2YLC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T010812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCMxMN0ZgDdS0Zf5V8QAZO0aXydsLMFxvRTe%2FfCkI0VYgIhALNaXA2RlQpFEZPTpDpxmelPRlPGzQXK8AZPkU4lUH4xKv8DCCIQABoMNjM3NDIzMTgzODA1IgwKaJvspwsBBdlnVLkq3ANFP%2B%2BzMiPyjo7qeHUfWHa06%2BDfs17VSpiCH8j3kwnDbPXYqjDrxzVHoU2ycwBuXi0a7IBl4mCget1rohpRpUCf%2BEwuwMk%2BIztHaXlLlF7IpIUnrjcDgUnC1qbvkCrj%2BW5%2FRBRhbOiwA8ZHX38ogyIj1bgs6AVAiOapj%2Bkv%2BmuEUwMJbCSs68a8oOHUtzgTKxxFDgdh856gwXbQKV6NmQxP%2FbW1lxl%2FAthZCsstX5I68e%2FFtTs7wovZQ%2BCy4It%2FhQ4WRLY9%2BQvogVgBFNU9oJXpPXLlmXZKD3YI55eBs7o26pC91oiXX4bSWsj5P3KYZvQ03MJ5N6syDv5YCrzWe1kfeSuRNrXt6hPUYLVT5aRVVXVFXz5OCe6Af8DdaJ%2FJL%2BSF08rLIHGhhSZkb2y5Xmmw4yXCOpZFqDQGgcmBcHwdYc3QChzJGFHxGGCJwHP09EXMHA3VOLnpKKUB%2FkQcj2pHVDykoZA3LmmwbyMIzKMCiYhPQcSxZRly%2FfCLyb7N0ZPutAYqaWTtp37JFyUxhYUelWNwwJ8vhD3ZnFomVvbcHF95ihp9WPfkFaRnK9NaeXw1IO4OjZieNXJUkJtggdOBcM5x536cXMs0w4zdiUM%2Fey48LyfeurFSndeIAzDXlr7JBjqkASmtZhwOT8heeMRiVZLkpDuDHx9geOw%2FnxnXYt0NX%2Fq6cJtc%2BAqk1vIt6vl6s3BkH4qeSu5t3XZvEAFuZqHMSmDo9k3wjWgJ0oG9V55M2DjoZ4cG0gG7FNjw%2F%2Fs1j5%2FJZZvbOM1aW4UOi%2BAqWwIrrKAuZRVRA4i5uomHDTZRmNREICa93NzmwmIwix5eqeuMNUyreKTwkAv9UuPYe7YWsk2ZPmD5&X-Amz-Signature=046587794d7de0fa13509789bdef444f38af049ff56bc73762bf1b6f0ff6131c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGBUUS7S%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T010811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHSXvrffmXeH0NfeRUsnaQRHdB0UpcK82YVyePGnG6d8AiEAj7C%2FLzw0dlDLuOhAu5rcO0QGWYE7SlgWh67c4BcShBIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDNxfAaAL7Jjcz2ow4SrcA2pi%2BkrU%2Bs3pJifROBWLdmmi6JT7AimzpjJEi5OkOPua1rRJIgcvZcwG2fjp6mW2gjyAa%2FUyyfRwtPKmxPQJ1x%2F5uxtHaeXt6algyNOE2j03PNKGyOmrYjc1U39oLz26GiEKiS%2B929MC4OXKIfjav3Uitsx9pp6WRKtEU3AIg22QOy8I%2BW5%2BhclqL2I%2BXvNhmt8O0wYbap5%2BwFH9VfYydWFK%2B5%2FtfzQi6%2BUJ6SLpuEbWoS6s1KwK8IMqL17abOjYn3Hw0ez5Bp0bYN1qiLUoe%2FnYpL1VV0043TvN%2FdnfnFL1hk9tpOtPUDhB1J1hxk0mX66fHzIOnkfuOhy7hvKyMtocRultB6hPK%2BcsmAecMXAShyrZpouM9axLRChsjUS%2F1t2uZe%2F4nLggZeyVH9SDw2vx3QsWu70S5mtlmmkpxWCNl9u7tXQNZWjigujf0zutxaCC7puoYUbka9xOGyBNkGFzq2hG2wrOfZWxD15iBSeR%2F3%2FsZa1GLzJqx9M7klH8QbMupxkvKnU1HwlTftKxZ%2BrtbiJft5xLnZA%2FwJmy6BkxgjSOrTVvgXnf2xk7tZLyPKgJ02MVqO2WlJbnNE8s9rQNHK2DxVB6Qi2J6w2oVZXxgksgVu1I9v5l4LD9MLKWvskGOqUBvCy702yKh4BrUDhMYVfQEbdzH7G%2B2cqcsErx9KTDJcZKFN%2FKp3lT58C8E2AnATpUsFGQoIBu1R8l8zHPfXoJL0Y%2FYEW9GkgqcIwuVtbpqU34N6FBxnaTEmq0tQ4zgWbBlMZ2itcTd4UalVMs4iIirgnjpLTxgoUgyr4OWgOLsIj%2F7SafXRkm27qyGm52O3n6OZn9LuflucdWPPLtIXYohG9A8Ld7&X-Amz-Signature=08af90430dd6da4e1b731721aaae7b761bfe1a906ba8757c3a5be3e32b258f8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

