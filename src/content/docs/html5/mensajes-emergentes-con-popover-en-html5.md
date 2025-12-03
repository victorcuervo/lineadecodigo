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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW637EAH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCjXpgXN2PHDcQg2GDIGlgC76LcbOMtbd8%2F6wULjCmHBAIgd0IrntrGJSNlO4EY7SUlY36RvYvHI6tA3nlo0gS2jScq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDM8tnI%2Bj9O06GxPj4yrcA0NTDj5tSly6Q7AYLOeyIYKJAp%2BrHVQk%2B6TJnFZkcd%2BGD9x26jp6yCIVK25nOW6zyx%2FyTGhOPf015XRV9B6LRyPD15bg6u5EEmIIgqDIO%2BbILCIjb%2FX%2BKr0iuqEPxLpMIwh8xUlUEfLF2rfXI5Qfmg27rOvIvf%2BHMW4Y%2Fwa10GM1INrdBDlX7%2Byuq3wKIkRzGBaGOEH5XrsCzXJNzpxDDAvBa6rnxlV6KuAVLAzBuiUVIONorrx5GujoR%2BCWYXTL69vnoGiDGyxkE0Nh%2Bi6wmEhNNHapNJ1JV3TTAgU8xKyWqTyMA2dKMQY2HHBNzrbCaJCmlI3vhb3XhilvSVRbRWyqvc5EcTdxgjCWGQ1JHw1bm%2FEWbxrZA6MpUbftr7GGncW8v%2Fio8S7Np8bTmI79JH42GZwZrh5Ka2Xrat9hjgoWSNDDfd0jc2%2FHzgbqJiP0aHGwLiedvTEGp5SV0XEnGnnUy%2FzaQYzFezTfiIKXUeHMZYoK%2F2UpGaJ1n4E7zULl2EQOWCLHD1eB%2FMA%2BkEPGkqQbEkl4rBg5nVAIFT%2BDfX51XUFMBSf%2B4Sn5InvOZqciiIxZTPxmiQ3Xzc5K%2BE5MZPje5KZlnbUvtIwVGyne3SMDQ1wz81x5h1Md%2BXDRMJzdwskGOqUBPVkefCRiY%2FJV93AR6iKuOqW%2BMuGVUK0tdw7XwJMutahf6NdYspk09wtXqjREnuM8FSzflRQvsGf38n7S%2FrShQCj5bwKjMrVZavuZa9sa5lUG721OyGnEVJ55uNUb3VQe1ksOPUzKGmrELNxz61UEh6FLY8w2jF5X1IZ%2BjDmvLf53UflM9IJIE0gdJnitjdjvFizc3rMnLnssaey%2BmLa5afYoDJp9&X-Amz-Signature=1fd319c57b3bb0c002e52a0c040b79328a4c4ade469e25c4488f295ff088238c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDNBNLDE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEMUPYE6XPdnwoH%2F%2FcatuYj91VQvmw0ByLa8flFfWzwqAiAXtJkqWOu%2BZ4vIQXFlyLEo1uL7dI5whvhC7zI14i2aOyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMLdUyWcaetFXt8KteKtwDQwoVXq%2BqM%2BUWJ4m0ZOAMs1kOO%2FxgHMBMkW4d6g%2BTjs%2BFxxWIq1XnsKd3pvSEH8diksM0kV1OqHiXkSDyKDURSpOyOAZb03LrUwTmvB9Ou00c%2FAoOeum1gs3gtMX3IYKWLVXiPk42wi3Y1UAUS%2B5olcsd17gzBvSfkZh5wu8eLKdzMlwTngphRLB8A%2F4E6QyXtbsn2vMDavmT51z7q6vHWLWCvT0rX4qfnoDp0uznn5aKMnWLHYxuiG%2Bvqz1uksiojMOiZwAniQqLyH7ebUYRcA1aK456l6YBOH2aiKsKfVPEPl2vwPaXraYC6bTaMtPr0BXk9o4lJ3XTRViB7bHFf4zOEyBm0%2BuQo7FJf1VPmMMdjD7PFTPycoZLjPhnIfkfGAS%2BwCiAsucTxU4%2BBFEzEYXtPMHUxvbbgJLYi86VzihU2AiZH%2Bd8JiKFPCbifgYw7Rc1qJr03OZRoN7AQnGZuYU46oH7Y9sogoggnSdcYX2hPAtUUzE11BOjvKo4gD2On3hrMfzJ2wxvQR3EjzcgpEkOzngUnxkeeg0f1namu9bewPXe%2FiI3QefNxKeqwKhaDNezhPpqb4%2B22IptFbQ%2F5iQPIvw8gaZu9LA%2F4F65JaAzrYhkRb8TDKEyv1owltzCyQY6pgEWU2iA5L817SHtsawjuSPLCjjws9udh9FlI3lKC2VFqva7RN15PtagBuTaSd1BfKrbgdNftsTgJqNiuyjzI0ztfJUeDw3RO7q%2BYk%2FIJvSZ1358BUR%2FlqysqS08dEXffNXROcV%2BLIMEHdYODPsrpdFNXGZpmRFOXyVlo5obLNczekraBRjDurW16FPXHLJk%2FAyVX8xEykGra7WVrQdvAyu%2F4hX7ByBZ&X-Amz-Signature=c2cd40ac1e06037d619f9d381dd30c8d206fad619e6bf6b007272dbf72c4dcb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

