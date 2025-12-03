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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FBXT7GH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T155544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCePdeZl3NUNIMiulmOOEqdRGKSR9tbVTQ%2F9wcaHreSJgIhAM6IupbuVwyp8S5MtJguJzcKPchmNb7EiyZKIqexr8hbKv8DCDAQABoMNjM3NDIzMTgzODA1IgwMUShugxGz%2B9wwDwoq3AM6I7SDHa5FzULq5OW%2FBkSiCCciwucGxx9d89DfLq21XAefJ2ILLOy22YqgcXeeyzZevEsAmi5LDI1s8VRB60FAfaaX4duhi8GS33BhpnV5QTqCaRu4TY2drEGx6lK%2Bg9e9WWjT2Qxtb9lzx2TGfgRWDbA8WVACsDiGmo3K6XPO06BjyDXDmbbx%2FCbPO9xZSLIX%2FKFnpCR02IgpgL6Aw9etULk0%2Bwu1fBYvi9KmyYcVkdv1PLGw6q2onfys%2B1NwzHnlCirJH0rR1fKEPeew9ITskEXy87MA4nVjOBs%2FKG7BQqANgLC%2FvU%2B6FENJl236Gw2QGVxDachA%2FiSw%2FSWYqrJ35BPzYXZ%2BKd6dWFlCkslBdu3DUoRJOad7JjdzcJHLlwS4HEAA3nKiIeN7r0kHp%2Bi%2FIkEWSof8ZFGmNP43nriWUO8YJqTOasRJ44AguneVuwOftU2BWUATV1Kdv2lmXz0xnf%2BfDFeernbOFhAWbFcXI18tqGmS7H6uE4yIMtuqQq%2B8TKcttieQkyh8LS2ck0v0poFdfhK9DCqEsuIY9I%2B8BAUVlUUspjMIShUS1ntJQ4m%2F9l0sH10GCcniuTkM0eCxrjk9NuK0pRlgd7IeB2jl8tUvhYADUgjaNUM5CzCkpsHJBjqkATuzjWHmxmARulKldVN5M73cZYKoyDejreOq4uCAtZc4%2FwJeYRAIIqgRVd0cxvs0Kzoe49rSIrDBamsgybW5xr%2B%2Bjhm%2BN1CtXqC7OhyGHCNNyxONhPzvn2FIgBOT4rICuvCJWVRdPW1%2Fxd%2FAnrYWJYapICKwhpch4Z4z4vaqC2Ghx95vEHwVV9QmZZAG7TnCTVJPxcDEpitRxRSFiCyiU6KFp6%2B%2F&X-Amz-Signature=4ba1dcec40ec2d3726956ac6fcf4286402680228025d94434c20a2325d18a459&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6GBLCCM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T155542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIEsbHMW3unuye19kB%2Bhy1wTPNXDKfNsICzM04OCMlYGyAiEA%2F2hlVr8drK1%2FqlHWnM5uCl4FnjqorALVrXuSWnqhK%2BAq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDBr3wVvp3d9AZQbczircAxC7%2BhTndAPPTUMTkh5%2BGhidmpGeXG6unkNW35r2h3mZ8xzQeK%2B6NI3kmeGd6QN0smSo8clT5qWvKHLCvpzUdxVaXhT27lz2VxK9b7Pg4ihnA6cqvSdcbrmux1Y27%2BzxdfUeuxR71VhoP3q9zLulycSczWL%2BG%2B5kSfT0%2FzbbK3x10ArGoKA1q46IhC90gvaaPtMLdqqpNWmJ80y%2Fv5CQkR4IFAAawQqNaf9Ksr9D0a5VghiGcutEgQAGd5khh35pijut6q5r7w6c3WKj83v6%2FbHukpUYkmE1YzZFtbMSqhbef%2B41k3vI%2BNxsloXjrldMNTnewHlMtoRfYxbIYZ4yHDSeQMGGtkanjSMTY7X1AxNHARnL%2FWhdXo3pglgFZt8DYojbB7aFD0rf5SpUTo95aROxCyWmftQkuEMj61EgqGbXwX%2BTU9H9WMegRXWkF8SRUM4xdPoc3PrvfeG65Q2WcB%2BfDzABtDrYtGViZ1DwmnfNcfzjHdOkZ2F3Xk%2BWXCKkSEBC6WcKHdSYtzJM38mrMfw3LsZF5SN%2FY%2BsjWUTFUK48TQM0g5G1NFnDlUWdAW0mmZC%2FGRu2a%2Fog%2BxdOgeEw7TL7mRrolNXsbAGfTpRROVGYGyYjnJOXu%2FMeBnYvMPulwckGOqUBJaRMS9%2FbCwKKyYf7NjHo8ihVeRyqQUOz8DCR%2B6xKLbRmLwrOazgo5Df9s2iCgHWT%2BBYMc6tgbJR2am4o6yQh19nSR5WqiTGKzdJWv5GiTOriFcqFgaYieyFYvahN57va5cGRpgke2r%2Bz0Cv%2F%2BIDtBDmSmCW2Z%2FF9BNKMjHaO18KQp9fY4GjEH6CBsxUVo7UQ5s4quPYLyXQGD5JFUGtqOWTTU2go&X-Amz-Signature=4ef59b670aa13890b4ae0a15f45a313c09760d398c62ba033a429abc3fd9f9e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

