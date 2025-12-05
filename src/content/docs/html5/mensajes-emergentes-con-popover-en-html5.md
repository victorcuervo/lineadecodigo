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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675JEI26X%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T191814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICo%2BCz0LCwEhEnSmCWDvei1Vc5BX5BnBmfw6oNONzsBAAiEAh7x41pmSNIDP%2F%2FQ5u2a17jK6OxDBWAxgGEkJ43IKX1Qq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDCGgIYefIeFA%2BbBYBCrcAyHyr1835CBa0Fr6m7o26NSOi4mAG9k1AGGybOdEqn%2FVFB0cdIffSUzf%2BG2Uuf%2BJcjrzblaW0YdF%2Fkva84ay8jVUyXwu4nBZQ2m3TbU3hB1ofewD7MapDYWK63Gm4nsP%2FI8Ri0GJ1RKGoHGh8%2B5aJyU9OKK1s3CG8M88m1P%2Bm5bS55BPG0sMaGnekugPoL%2B8evpyq%2FHCA7KsRXVLIi2TjbFzt25AgkcT2h9Py7APem%2BQuptrIWiHWSzcccUARpW5csYWIAxkMfW9eUkgnvQqs5xqKGKyeylhryfQjtudKGNNPtaigmqK0ruDz1v9CU1OtEK6v%2BuMloGzz5SjdtC3oM9w5oxMTeSOjkIdT5mR%2BcqA9pA7FH5dJmjgwcMP9EPWITHlKIsnm5l5J7F6jl%2FvBct%2FiiNN0iCZvbuDW%2FT9Ba9MWzBQSpEaQgfIs9%2BJRUSDinM2FMjUym2XbZDOx3Y7TAdfs3CDi2jaw33jEJqG44OXgEN88j5QWw8X0lThIg%2FMA64XuMMA7rHEwAghi9c5oCW1GMR%2BqaoiLgNoTExJSda40oAkCA0Qa1xjsjllC37iVxg7kZkZXzKhg16FqfqKZX6RdWSnFRvFhu9S8QMZqfMZP%2BgZgs8rN3RgVZrWMJDJy8kGOqUBK7nbJ3PpnRN1w%2FfLhad8umedAVe0NFjop%2FH%2BIn5zAaTUO9MK%2Bf3AKIL%2FYZllKQe%2FfslZqAxMOU2BA6A5yEtHwuY5zZkpzVv4sKfjrAV%2FBhgzhUrMxXY4N1iDkiPJ2JJ38HNWx0N9d6Z3G3uNQzCZPRu1KbAwY3beAo8sZ189dTzApg4jyVVipTq1jY%2FY17V2wT6NseWVh1PqPbyAuzVWGpokhYV4&X-Amz-Signature=acda53fd1c147c4d3e6656cb51210704f82f541f6c237b3a0b807d8ade23a3f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW5QUBJO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T191814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5fo0XNAlxs5IK%2BuK%2BTniLhzKe2Oj6cw5QU5UqhQRu8AIhAO7MkgKcjm%2Bzgzu5gHeMHsn5p9sgF5A%2FvNe5NisQUFqsKv8DCF8QABoMNjM3NDIzMTgzODA1IgyvJt4cBFtsVwuBuGcq3AOmyfYIDtnGtbopU0sO68ti4YJ7ae7YDY66W95z%2FBpLaDfog1siJiu7F%2F83jOecbW%2B5vcZoyh0E30GPhW445v0rtB06dJgnoKRioCnvb8vjyXD0sw4YLi7q1bI1JvOhmWPxF1usUn3abIYADBJxeYx8uxfyksXxRuUK1YadDnU%2BVasDPnnOIBI4f7MDMt9X355K%2B0ht%2BW4PUn3TY4QyGJJzFrPT%2BkPx7%2Fj02DagmyDWg5LLaaWwd0SDgoXYRNTwqK77QriJgGg3jWjRtCtrDjP8XmkTUPoVJjPX%2BynWor1Ivz5uMlwOKorbCNGwgaVuWYf%2B4NH4Fq%2F1WVL8p8qLlNL1TR4vPUMmwpq9%2B5q2VWEWJcr1uorYQKP8fawLx7nQWqIEbAwKqglsHWRmXubTYtFQiGdToC%2FEHrTPeDemTlb2zNCxSIbLjEsj36BmtU9YclSRwDJIaecsfxqw8W6eP2JIVRZK5mhLTz9A87P8JjQYmGLDhW3YWN0P8Zqq%2FnorPa7I91PZh73UYai3Em7%2F%2FnwgS4OAVFcUzCJkrX5YXl3qDZTmUAbBwe0vAMfgoYNHN5cDKqJSXsS6%2BLr6sX8OZv9htV9didw3bJwOybgFDuyd3f15HyNu6BQDeMD4HzDKyMvJBjqkAXZZUoXoB8oJ%2FQTj7sZV6Rh3c9xMRpRSWMLc%2BtDBi9UEm%2BncsJmxK9gdtvN9qOIOHgqxtlVixRl9VaL5Txv2Prpbi9Y%2BcmaRIq9zbgA2Ol0F2qoj%2FX3WKFb1%2B%2BnQh7mWTRHBn%2B9gcmItvMzX5ya%2FLiZof9f6Icm6uJmYt5Ss9%2FpXQlGrk3JQm44dZ89Ega9HoNMk2Tm4rl63sLo9TAo1boxnx%2FTF&X-Amz-Signature=06c32b006cb6b65392177dae54c27db0daeba9453071f2f48d6e0d7b5cbfd6de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

