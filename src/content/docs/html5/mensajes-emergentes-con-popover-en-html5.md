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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2SHTBTT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANcDmyNt2LZyHajylNNVmUxyWebTU2h8mYgI4hp87avAiAp5ncwkL4FuJ%2F0vuAhlYvRnauv8pW8StXo%2FvmbeYa4Gir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMCt4SJxVsRo9PZMWZKtwDO2ttya8rb9dTjmwkN59ag2zpgXXjAuDHEWrQHxwWKzwnoy0b706lul2GEYq456wCI%2FrQkOJ7orHB1IZjRcAmUXumO44uXLf9%2BGBgaCbg1Sv48oh1i9GwJ%2BwMrvZvoxSqZAihobMCQelIIoxr%2BRfj2Uo%2BXe1mUynsfYcBcZBE9gdMrPs2gefbXw%2Bfn3EEWr1DuFJVcMlAAOWkb0DVtk58TDPMPCjSiDmLhE0OClJASbfkJoexyl73zkwHA6yfC4zdV6USFEZvRWu20n2z9DefT5yxGQs2BtCAX2KLrwwhBq1eUxVq69bnNP7vVWgMTkRb1cYUo6vk4KljOUSgSu3nZKxrmhO1TqtunyJKGak0HLS%2FJR9ap1I2HgrsEf2KKkiFKYQH%2BzlkOrzFqQE66qJrWJk%2FrNz%2BmxjoMrsKrCg%2BV82vsU02Uoz0qXhCgyPHXtMmtcQXIoeWwngch5bp0Ok%2FAFJpklMKZm4elFIq%2BOWGJpbeM3ho9Ua%2BgnAHiDFp90iVRQwHdMJWQlNTjWJYlUkpgzcqtYrL6KC%2FO6SrMbyp1zslIMo8yuaUjKeGPHbsbPmHoaRGYLN1sNPqONZeqs6EhiiDao8tJ0FyFUQ66m4%2FgguI%2B73ORdbLN07HqoowvsPOyQY6pgER1j45QL3be1kH05DqOK7sAcBd%2ByvmWGDgOWi82N4hIC2miM9fsdaPsDJU6X9s5IU5avZYS3FyYFPdExI7dlDEnPFEV62TZROaV89YH8UFOItG%2BUG0DId6yxF2LkVaWtCN%2FYNPl7bY6UcFr8fSv1bBxerbJd91L8qBL4AKC1HbJqbnbkbgTd%2F1VPbh3%2BgyTGtzOpI4AIxe5d%2BI6gzBjJgcbjStM2o6&X-Amz-Signature=d9206b91f199f193425ba4ed450be71fbf6e32181fda457f9b5b396261c3f8cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMFL2GJN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG44BammrpbCk6bGia8xD7yP5az08cJ7GH1WyyuHUA2FAiEA%2FBUG3Aqd2DA6gM6ZkjBi108xu8HAR4D9s8thzZ5L54Mq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDB8421SIvT5yJny%2BjircA%2BHBndyIWnlFGncCc6n2%2FRqN5kUmog0sE%2FEUQk7iHyjcjuJpUppT%2BZvBoxTG%2BkHphfo0zRANX273xcBn%2B8%2FvxwmEIq3LZTlNNUo724XXptidsACWLjrfzH0BVFpOgYNCH27GpcZqaxjjyjq63BG7csxDfTfYWvsWBaQZw%2Bd8doGsMT07YCubHyGU6r8xOJa6YI3i1%2B62%2Fymqmy0fxK6o%2FlcmJzKC2%2FFNgAjsmA7S7u5454vVExaxlAg%2Ffsu3SONZJvKR3LHq5z4SaQM8x2QSSutUTyzryUibed3jrBhS7%2Bv%2Bb93qLGyXb4nHHxhzQOVk0qJ8lK3HpXyD65Gk9VTnAsflOAmMQgqlTqMYY3%2FtPrlsAX0swYWaZHY1AG1ZdljiyZzrqirmTLv08mJnUybwuHvCdFjHx%2FTEuSKCKXYmyM49WIkBU0Qhp4eJ7n5lhB1d%2FraKhaJF4CBLE5CsHPM%2BxhWv3xOuD8oQN%2BBupUk3giyEvfxTwD8XeLhas6Zl7099AuD3iEjmTLpuFow53RSNizJKEahd5Lo8n5ZIyTmePERk1O1cZgk3VjhhvWu%2BRSCD29%2BLMgUh4v9rsh%2FSnjWiOqnMao4jnK309RbLhUrQpMQQBfELS7jBmK0uvESuMMnCzskGOqUBcF3EGnZHLd6Yco9wXhXzZDi%2FRz%2FOPkzd9ifAjGsVmQJ01snyXe0iczCsVf4YOl5gY%2BtoCsL6oaEFq4Pw5UkXC%2BJJSz3lKKq0AbhFbTZUOl%2Bs8FpstlkvnDb3jzudfnlposunbpU%2BbDPIlB0QqbORJRCVXKQs7BsZ775hCN3CajvnCFxpj6yaSzOJx5yQaS4jZEdDeOTZnNA6C9IJWY0z8Ke7tu3y&X-Amz-Signature=768c702ed2413d691565c48b30fef17d75ee80827a14f423cd79d40fdf8984da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

