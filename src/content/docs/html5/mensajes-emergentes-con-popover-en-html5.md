---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WER4W3AV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIF2Tr9vaIsXsePnd9NAEQmoqIUZKl7ggzKy2RftrwWr1AiEA2LUIdR2GLZZZOpwsd3%2FMiajOJErs3D2PsAptfZ8eXCgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLy8UpEoS%2FBzmH0N2ircA75l0hMVfLsbBm6ubfv6rar%2FEMQXLKWMzTFf9%2FD2ssu%2F%2FiFoAbqTQKQ%2BHlgiJ7xxkx1JT2jM25qMZ6yPE73AHURKHlD7ZucaKN%2FyC1W4ddFFKtmR%2FB37Zgph6JUcivbcLHkpAXqJD1wG2M43%2BPSKWkdAGrr6En2tqRzE%2BOb1yM51qgI2%2FOub9KaQiHDJpm4MZJkpQAnqyfzLeN6vdC8rJJyIQjnb3yaMpg6V7eZXtAfS%2B9Pf6fgR4WIASrrMuAdGz717bhB1XuhFooHCK%2FTAA4ymGOl3uoOV1U9k93MJhPfj%2FDGxye9HqX3VXIiu8B9Q3bI1N8y%2FH0MULVARyM4R5YaiSAEMVTnGZajBDSbB7dy1LzY61ArVITQYIlIGh4oLjC%2BAoy6jQzMFdIFUxL6EJpuowt%2FIlOLtGGT7lCQalWUDK62jHSTIQe%2Fveow4H1JCSMfNdrYDzJAq2ebD2UrlavPakMIPKSBiFGE5sqoH7Oa4MQ0z11Az4thjPKRyng7AchZR8LgPxVwtsFTjJexC2GPmHVtr8egFEQjTNEPa%2BbrgFqAocBp44%2Bow8ycJ3M%2BblFfZol2XGldE8kn7aI2TQ1FSeSCe%2FGQsaQlg7k8F4T74t%2BJmdyepbo7ClZCZMKPUw8kGOqUB6OqQjFLNpKb%2FVVUcmKGtkcz9CgUEbjAcjulYnmOEgScLGZ0EuCX4b5s441Rax5ZBGQ3uWN8z6QrnHWw%2FvwqLYNoOJGxDUIB01aI5Kx7W3pUf1E%2BSRPBiis2iEtwfvv1jHu13stWc%2B5%2FyLuGQBh%2BOnW0ba13I9VefkYhhmSH1MvQEpvBggmOBu3vpOjP4RejFPNg7l7q7%2Bpjo%2Ffcf4NSLwMKCpZuM&X-Amz-Signature=f577db44ef7b9ced95aa2328e0aa1d6b48e1f6daf644839ee03b40e39357e5ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OACEZDC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBIMc4QEmWzZsrIblPCa8629E1ZF46Qcp%2BTJxGxvpF1LAiEAiglw%2BmYO4PHVtRq9ZMxUHEbbErgcxToFrUKp6LpVrjoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDI0meMFyGvP4vdvu9yrcA2Cf1I70rxis2l9%2F9wnE%2BE7nSqKcf8EgYVEWd%2FuxFcMue%2BtQKjAsGYJTUJrfMXBR3f3gkZIpElLMV45VLPSz%2FczH4lFdSHpJtvDYjJseCsGhvVC5SeSQnUln3f049l%2FVFKlh%2FS0lAPjz8J63Mv1LLY1kMv9cvZpAy0CYIOlc%2B07RPYqRcvcBi5vsg3oxV1jkwdMu3hJyJ%2FIaipdsU%2BSNr35bvRJd536qOoHf1ih5LFgb%2F6rXxdlAv38gYh9AEl9SyknICvi8V8L%2FCVVve4fthWBJCR%2BlvnzAOqJHB1jTX3RtDfwFf7%2BVrH0zTb9BlKuPa4xhlDXda%2F3UmGnEyz5fGSMfteV0a5SvbaIq5DFfcD1Gi5itp7fUxovkyDDfYEsugLIyvmlqFrnSPhbxn2W8GmONz026i25o265tDvaaLMMuaEp6iRqsnUng2yNAn%2B4mwcLOu1z3gOp%2BLPiAStnxMHj%2BoTTanr8kIcuX05xZCVncGroLz78dSugKQGAXDUxLRuHGgtyVbvsDGTqx4%2FRBb6J3x%2FHmj6amFN7D70erw1yswLgb6xjmbZJkog8njLnXwOkeJhQ4eacXiSWQ1jr6Yac5P%2BE%2FQaKqnBFSfSA0fX6s7oZ3rK9H%2F1evne7zMLfUw8kGOqUBYkmjk0SOwbjYfpl3QyEi9TqbTT5OwCxZIiBXoR9bIhtz11V2bv2%2F%2BXHPdrZPyACcMDVyPETqwPb08wjfKSh8PRyY0hcpGyXsZQg5gv0dl2OLVLWnLAQ%2Bm0m%2FGMZ5BHxv1ApM%2F%2BD5CVxEFkZXWuYM0%2B2Is0SWMi3fHG9EAo4GgMaN2Urv1UYROsxLptPOPAsN5ge8xZM4JSRh1Fzrisqo2Qv8gxti&X-Amz-Signature=4834059394b1c22163618f85e1cb74e8fdd8640b773e6f511f0ff687b8475aec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

