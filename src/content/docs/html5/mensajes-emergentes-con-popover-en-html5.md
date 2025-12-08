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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF5KVQRX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T201141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYynyZ8Fh9%2Bkq%2BNsJOk3gert9ppldJJyzXhWi4TGblYgIgPwUIKIwwKZsyMtE%2BoGR1QxErLLyqlg6SCnbWUgvNjZAqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC63tRuYumiYtbXfJCrcA5Scts7%2BEODg8MvrBWtjiSTUBuRzhzlCihDGyupA2v%2BqZbhd0JWWf%2F9cl1XOI2%2BvXqU1JmEgoBI3ymvUNl%2B%2BYJ69lCbK7WGNzCMhIWYRzpuZaZB5%2BxY3AeGby5S2YW8HcNcRagiKTsuEerSth9siFnXV6t7EO2sgNUi3Daq%2F2PDGitFr7x%2FUFMCxICejug5W5fbUlvy08P8NxPzxURoUKRRY46oyyaJKqxWfZuGq3xls9%2B3f0Y9D9p2exy%2FmhJemMPTcrnksMn3AhMoyZnZLwgLWcwwFYN6aGOgjmgA%2BhpxZASQZn4TTup5A3hPd09oXRBa2g9bC%2BHQNzo%2Fx8c0oYp0ys2hdtNfl53aLwbaSXWg7GghCqVr7SRrzbCeBGbkZeIsPTcsY%2BO74%2BsoemCORrbyIh6ZHMfqKGjJKBmgW17UaY7%2B%2BOmhPmxHI3te2CQXAe1otV646cAQsJsxG0J8Rf9raZ8PXelmfT3Rn0Htv7tAFlm%2FQ2wVHkQnEnx7LSHDBVvB6fyzTJ6W2RHSaThJY6gd5OOaZ0CSeOgLTiFTeqN9SlZqEZxKp5fgqUVeQlnmdHGFbv8Nmcyp2JhuC175NnB9aDVyyeGexcuJyxBeM6pggnRLQckAMZ1U4TCAuMLLc3MkGOqUBB8Db8mLfx%2FhdyC5f6oDu%2FI0Vmzf5YEjM%2FnFGa%2BnHgAkeF7y6mRoR%2FmT1VWXuPMFfLQ5rwacMWuqVgr8gUwX3g1EbpzjpDTSUyM5r87uwEusWPPiDNsvDpYL3abJ536%2BvRCU6nz0wbDFm1hqhOclFuUbvQRmZ8SMo5oSpvAlrIPmIN4ZqB%2Bn6jRc7%2FujJdFdbKK149ZkU5AhkDFQjl2MGtJV%2FVb9D&X-Amz-Signature=5d3a6a0152ebf4aed6f900c3300207587f9e754a9b2513d1920747b53df552ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJNCIYVH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T201141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHyQDz0OocoOQmJ%2FbAlEmUQeZMR0H1H54wUzLfihdNRMCIQDph%2FDK1k8H6sGppOY955IYd1I5RR%2BB4bRSVw5cbZX6FyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc3aEMcqI5m9fO8GKKtwD5GG8mQdxG7tWKVhsfQTWR7LjJ80unPRSu%2BzKGTb8UMtOAyUZv5sX8pkDBL4maLEJAMdzBtsjCebEGyBRZDyLSvGPNVikE2GZz1BC64RAwbKwX2iJ841jiGVK1vcHBjqjwWGia6QHlKylGg%2Fmn0a%2FJ34CLakh7xWF6q%2B156jDNM96GrX0avj4eWE4LZsZsQ3RmGxUceXu54Txh5Z8RAquCcTeRT7sChfjk47fBM8r%2FSUlfzfUIDliX6N22gB7Kv9%2F8IssUBL39qq9%2FrAttDiC4kvjASqbVhpUc%2Bnxbfu6HeCWNZpKHbWTOSvqlUlTpq4NOT2kUua63hutxB2g4VMBiA8mZyYqTNgCor%2FLW%2FKFG5we9uTPsc48hcHBu8oozMnS5HlWhij%2BitZb4h%2FbniwqyH5lAnQPQHOwAj66YAwbbISlD5KAr24J3CF2a8dISGn9tm6w12WTq%2BUuT4Ok07JD79Y7J1zGCPeGlmI0HagOtWMlq3EEMB%2F3WObCcjCEaatyVCH5OF4BEQQgz6DVZsKdEYhc3YSNgYOqTz9MNic%2FYW8qjL3pHAGyTcFJD6hDbE%2BMjoK6cRi5jKSoNMhBd%2FDbeEb3Nx8A6%2FAB9iXytT9kqOuE6wtmXDYUTGWLbyIwx9zcyQY6pgGF2PL46i%2Fs83YZxKHmSNojqMQq9xD0oqZuXb%2BAfhQ1Y0zbM%2FeX%2F4neXMneZn%2BKA2Ag5PzAFplij7JK%2BqEBs9lFKX0eHzoJMsJxoZN%2Fi9EsdAmfLICFoj%2Ffgs9zoIOogYP4Zt%2FLgv5thnekP8eUpG5UiRVlpUEmD9fG6SvW0cg7ky6EKsJ4IP8gIzlNpkB6LmUNe%2FTiguZF5uTVdc8OyHf7WyVBJXZX&X-Amz-Signature=c823df0387900ad8c872a9aa91e0569689b27fee5276757c37b345fd1ee95ec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

