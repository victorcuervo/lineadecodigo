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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS6R25LE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPdaeBoraUcbFyqIFdD5y43XLTYGZ3E9XsNaOd%2FgPwOAiEA3PpFxJ4Q%2F2rWRw8dbEox8Pi1nznhLfeulbvuTJrTIc8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDAOX0chOmG68keZZMSrcA5XtGgW1RBqvZiYG4Gnz7bKXhPJ%2Bi22SL1OYpGQ0cAG%2Ffl4cx1AJxY6r4GfdvfoIfVCYDfsxRvrZkCMLfCTFhjjCQ5Kt3rTsN1d2kXonX19Vvu7U518ufWNTznC56TTXRkwc682AXJrMBF4rKASW%2BVt2iKJZWdyrMxzNXok9YANzbT4HMCdJZ%2F40lqqhk%2BElrQl7OaYNbEpC%2FIOlf3mAQKEXlKrAY%2F6kKnE34UXzBgEAkDjUQFikTqiLx%2BCL%2BMQ6KvofZRf5G7d0NUIdD5V9jYDegTK1Pw5ERiILV5%2BPEsXs5U6HPyH6Lld6qhxWBXHQ1JOU8IFHvzljH0IrTW5wAUz5rufGkZtUUXkLLEsr86ixb4PLueE8qEukMeaxfRDnW5mqUQENzgq4O%2Bfbdbb9GekfqOm7gFOkwDZHS9SJwhRMEAVB0QmI4GiM%2FSiqurvM%2FuvXLSWi8g1ixkWP9Fm9XlBu1455O6qDfAOHrBrhc0hI2Z9I7QcouChj2AQ%2BxobrFNwnbx43BSO20Du1MpWeQqokKH5ZBEmVuyqO5qzGMcgqW9DK8EE9ZoEhfkJryS%2F2ODlgAoGVcy0hADBFwHQfSFsvFu8HAvCQocdZhocCufp5vOT6tl9KUlVXQiIqMLzDzskGOqUB1V3WsDDA9u5v0mbme0YSwOX%2BXCclfP7NVaK%2FEUMTjSV51XMCdyhsnonZUQqPvLoPF3Gsnq9o5BKJdB0QYM%2F8BkMOuQ%2F1hjnNbi37gIjlYSU7g7W1unvfjKfwrE8ToSUxlVH5NbUrus9azxasQ9AluTLnatrNfVz9eBdD8yx8bDPVeztwqstdkGK%2F1XQWVzQ8U%2FoNk%2FJUgr%2F8Xm0AyCOVWFFMZlmS&X-Amz-Signature=6ba139b63024ecfc94a6235596f8b4219d5ca9bcd69fb37db2a0500a475afaba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT2XQVLY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcDTeqmopLgdD%2FEsPER86El2OrQls9ftZNmsS5p6HN8AiBLGp7YD07PCWROOoNRgvNZSWB2JUf5kCSLl7YNd%2FpHjSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMftQBIrWV26FBzgp%2BKtwD%2BC4mqHRjRb7dPZNRI%2B%2F2yIkl1R2y0FiTao6ob%2FBDlEiWlgQ1rqtqENtkG74JGmRQejBEgGvnY7zrmshHGpcAjS4ZU7Vdodd7xDcLhDttdMwXPZxNbkJxJ%2F6xG9LKr2zsMzJg9VKfx1fUBh9%2B6CQS0O7BLfhxr9qF2t2vnr2eZ8cdcx6WXa0JSJug9emnPy8nAsTtR2IRagxr%2F2UGy%2FYj6HGvhf1QZxO2c%2FZIh8WoDunz7j9N2ii6pZdE%2FbXKUeHpE4DKbGq0szAWyIae%2F95TOC2wY2vBRpPfy%2FY6yDNDz0z3UgLZoCMN7Xmp9v8nXdwewrst03xqNw6WLJvDuFQJMH0VlQ8I2VliOdVlzS6JDx4R8lB2FLfxl8keohIyq4a9ShrSjcck8U22bMWDuSdImwwj%2BXuNyr5WZs64pFgrCq2vBO9TPgJtpcOOaT3ql3e2%2F8y2cioG8EbjcVMkseEXSAMEYbDz15Mv%2FOW45n60RQQQQLoDaWPY4l%2B0DUp5lztdlVY5vNcMjRQ4mKBrHUtCZVUpMihIAsLp5zABiXmP3GW7VZRStMC6ni3ZqIO0wziSu%2FkYem7rXbJ7Eg7ugIeL%2FxwU2icxrOTZ606AzlmTynABDj6TWuSuxXmBw8AwlsPOyQY6pgFLv1d7TKTNFHlRYVF98mvjHHl6vS7JC4%2FnBqCXHewxn%2B%2BW5BTZ0zx16Z9nQA%2FHAjTa%2FE1MEAJbKX3DCdjUp1CaiHsVHjP03cJojEWiyWQOtR8DWbaJruwO5VQ9T9D5Ct6H0VfV1elLT2weEKgHWeDJIOHNjOtFl4Uwvqm51cilAb1HwXvz%2FE7zFy1990QhPl56e5L7%2BGhG%2B8rtVsiLALOfHSNgFNYb&X-Amz-Signature=603165a45edcfd548e87a2979ed307421fc6141933738cf0657ed6d0513b2b26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

