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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGFGNF4L%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T103146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHg%2F9fZ5rByTyRe9YsuMIZ8hKJqth0JsjQQ136Ogsq%2FeAiEAqwfyuPYDSW6kZHSUeNKpX2YVzhDUa0a453iszCI9udIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDFlUqeA4J92OJLR53ircAwHP55hJqqAgnlNOb7EmOjGGRpV7R%2FCk8YzWCO1Ovy5%2B5J39xVADHfsG70OQ%2By8VoVVwi4O09RDl2SqF%2BWvW6ehDjy4jd0hhTinhJGCZ2igJmpVpciMmczE3qIZWD8irbPmTSBX9OYkYp9QGTfjRwPLSUzA58IRejShUCCtZNv5abOQ0iszl3dXzAT%2BdTeBG216jDO3%2FPhv%2FZL1Zg2HWBB80qNyd1NE%2BDiXc8FcaKP%2B3XSzTPVLZxmJxw6Uf4MrjT6pqifUy2fLPZVCScmxKuT3SuDM4OHrJEuAFKaU5Ulxn%2Ft1Qa%2Br%2F9K%2FeIkIQdb5N6IqGFP9ZKtVZJfmjEodA6BmX5IWe1WiicVLQ6KszPDcCdHBVq8uM1IfZqrS14RT0vyqd6ofWODBphvZb8IqE%2Fb624XfYb8AzCd9DGGL1ua93Pv7SzH1KqM5sWpm6N623YKqU2KWqzsxu18WRhQiZLjJ%2FhtftOAWfaOAqq92iOyaKnAqCEg9y7q2SnYzy8KJQimS25570Y8RwihyB7lAe2Pxar3fKdHAP0GYj%2FtMoK57spMQnRjKY0gt8tAt%2BWE1xZkzcKgGNMaivemHLAfn5grLQXnrKHw8AKtgwhC7iq0TcRmn6nmNut%2BhcRms9MKCTwMkGOqUBIaG42Wc8z2oJP6mzsPz0%2BNm09aMh1K04UjoTVQUE2dnwHxxo9lGBlhU4G72xY3kiDDFljrpbSe8HVpsHwd6JqxHEY9dvuEHk87%2FOvm8UzRKj64qTWyo9QBuy0ftlWo3ROhszJrKhRlypgzqzjj%2B9QkHPs4yu%2FuHlpEWah%2F1%2BLiCLeiQgQ9oJKTeIURNE5JhJUioGsPqJzQjkiy4lbkJ5eV1lZiO0&X-Amz-Signature=585cf9942a49e97c20aeb68c52d20341e06888dbb4db5337125fdf66d5ff2d50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RB64DRN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T103146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDzrh6021oSgPhwVXK4p%2FDiVswhDpaT8wVXDfFwIyUBZAIhANfqZ4S1N93kV8ce2fVoAjDO8kqUEB6zD0TbCY96P7UPKv8DCCsQABoMNjM3NDIzMTgzODA1IgxlvgWexgHk9wz0ls4q3AOe4%2BCRKfdU1wJaV0GxLoWpr9VTuYVZZP%2FvS%2FNCWaudwsoZ%2FzZfPK%2Fdsa4KboAyajwNAcY4H0nWZAjo9hX2%2FcF6pgrVHk9NhJm7QdVHBSOjPm9YLiIh0k%2F%2Bjz3qtedppt012nv3A9dh7GrXoFpjxsHjv0FlZPbqxyvXXDG4yKhdo1X9V4MI60AiIzwox7Vq8GSk4a6nK%2Bjsk9aQnWv2yxi7sQ5TPNbt1iAdROvxwzjG9i3XJqYIZqN69a1ja4MyD%2FG0DFnHyFxaLU%2BlNa2Ls1YVECkvItmREP3wEi%2B3cfUIHqDd4uMd51DI1P5RhBaSNAoOrZ5EBJOjuqf0kGkpXU7dOBDXfkEkZZ4AFIWlEdnLhlKgd4Mpi4q6NYSDSNyUkSWcs0TmItJ2vV69mYiq3tmp5C9Xpd3OIH%2FGwEURRZCJP5aL5oj2VpqoaEtQ4x%2BTvOSvi%2BsoNUw%2F6%2BnJTgzZihwMmvU7eAnPXJwwxnLD6j5HKKlzReq0jJEIqo6ETiwXs2tuySXUvZvhpSGTQSxuwW95nBz1e%2Blg3JffqfDZWOFRiPqIjg3tWBvMuJ%2BtN2VhAn%2BhxCyKP1iGRtROVBzW9PZgpYOZk%2Fv%2FyjsDZQJK6EXK3laNy8C2u2HomDb%2B%2FjDSksDJBjqkAfJA8XmiZiTha2QDl9UIOLf4vLeokpw7Qv0uGLYqCcyoOGTJCxFgIUDNhdXydBcvV3jQo%2F78uZy6uTexchNmPBmWoG0V5htUmD8HcjtxNkippau4zaDnfI7v0zqsgM9bMiT8Xit%2B1QK00tHl70gejltccXdC7xq27WD%2FYMXB5MBMsBKzy640HeWmYlWcpzxQEv7U8BvbJVubx%2FMRJ1QK0Dwf1AuF&X-Amz-Signature=690c1cc3dcbbe3d530c3c80e968945021772707e55c1196eff90daea80f9c432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

