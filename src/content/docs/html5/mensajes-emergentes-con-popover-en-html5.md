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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665425OAUN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T202948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdUwnbfO4Pv11eSXz2i5rj8zjDoBgn7T7%2FNHU70huY%2BAiEAucEfg789scrZrhcsYAzoSW7pMsymL843qLIZ4%2BS9mWkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDD8xQDVfTAF%2BQ%2BRLTCrcAzXZw5tXOTTfBoJJe0sbOafYPh24%2Bl5nmq0d7Sy4V%2BK03FQ2lJxCCgCEOwBJcPC0KhrNKG1yNoxr%2BXiDKicroZ48u%2BRK3Oz0%2BTsT00vmanc3boTpnV2WgHUtrvR3n7lk1mCEbS0nkDRlr2rssi8SGgnSp9goATVmls6ZQQhwi2Y8PBNF3BeCNtXJZsg%2BVptjTPQhhS1H9vPHh1tMGujZThdEgnxoSp3pQ175%2FLK7Ulfj8npfWcyPZPBvMmaNHBT%2Fu6XOn0U2LKxcoUEJ7RAw1jJvOBkY4ro8BcOL1Kbs3J%2F6RSAgpvD94r8SKQi%2BMarpmyhevublwOaYAF9m6lfLk%2FbSGZKmy8%2FYoKg%2BEmUUmCuJlo%2Fkm%2BMGEAdKpfLPIW8OPuXLx0RzDI6PVOw39v%2B1xkUAd87hR6jdyWI75hqDAsnXdXW2xPt6mwuGhZjuJS8WBhcfpXxdIT7NH2xtYFeeXdAaj9WS1%2BBBgYTL9S6H4StaEvVH5%2B6VsaRE%2FnRs6w9yXCyUjKdpLxdmbvk2NOlMk0wIWPCRll%2BzGyY0r3ee2C3UxhcGcH%2BGBdR94Im9FCq0HqvrcJjSzIkEni%2BFycuU6c8uuzdLxvR8K7cVmEz%2BbeY%2B9SRUyQeYQQ95csZKMKTF0ckGOqUBUqg7Bzj3J4CAIARbbUOGt7tDVS1P4adlMK9B60hvoaBvMRKJWo8shvt2GyMOLNrRTHDR2r8DQnyowH2k8jYQic6V%2F3bzjDyBzQxaZz%2F5ctxhrfeZl6UJWgpvwi2CegT8cl7QNN9PkcT0PZFEccO44CQIPdITDjU88fBifvfXXo7K54%2BMn8eKBTPSwkQKgbkmGB1hxYhylJKCGHBsyqHh0%2BCJu1dB&X-Amz-Signature=7b9f69d3a1c5724387a03e5216b6f97a9fcf45c684648edfde865dfb97e4b8a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z55L7R4O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T202947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNX9a%2B1Sef4LDNEAz2OsvZRHXp1aEKUKuTo4OLSbJSXQIhAKNSvy2T06lLh77qLLigSuQZ0r%2BVVsbQ1nATIpYsyK2tKv8DCHoQABoMNjM3NDIzMTgzODA1IgyGOD0w9PX6v5JvyPUq3APwIgCqjUAwyjkFOKuZ1bhPJRMZEQLz4QlyiUusOFOe5oj9Ws0LKIwcMugWFvehgAGbFyze%2FhK4zNDOecxLoCFBdh29CommAHZxBzebp8AyzCewKEvQYkZFY9IEDZ%2BkEdJpj4dmySIdk5%2FFuw8P3SxRSdSQ1v9KoyVPuJGikY0AfJERliFENaxutA0soP0aVWTAlw575xNrpCcdqWhp51u98aQ4DW2%2B%2Bl3xcSmREpMgBIV3AWHKntEvuR6yorGurzmyeZZGYPfBNmE0jI6HtUFPodwI9n%2BsKwsH6UkQ%2Bk2sdVoA84x%2BJpGjddrS164hrEft9wqSBhhch12qwXQl77Ut7g85xF21Nhqyqd%2F%2BDd5Z%2B5oZnHeEiCCsiyhKmmzf5hRMd9fIQLap%2BWB2RKR5ydJMIhwQwrumApd%2BgZ9s60Na69wCfT9U8nuB7OgBowboma%2F1QU%2BiNse%2B7Zah8ctfZ%2BfaqgOcJiTCKinXButXgg68DDagVfkpf0X%2FHek9kna1QsL6ji3DqyZ0PYH%2F9Ijv96lX8wb%2BQs%2BDE%2BeUFItTSWcOPelRxChxRXFMloWgHKQzftPyjCiUMvNfXCCKBe1KXXRLnlRTNaJpVXTVU6J5YNgAHmqc0pTu5EqNBvZcoDDex9HJBjqkAZ0MjwoSl%2FOG%2Bkm%2BhuqlVafX8iWIaGbEA3FIHhUgN0YI81skbCvdnpwF6qsFvh3GRg76dIJsWethBfazBtwinZvwd%2F5CHrjHtYBrOVlFgEHNFUdcW4dN%2F%2FjWEDZ1TH%2FUGDd1gRcT9oakUFD6rFc3gFIYuUuHiVbki4TBwwndWUNvL3oOB3l%2BTzv4n%2FNtWpCXTZcbX%2FIrIOZ01xm8wK0e1wp8EqXj&X-Amz-Signature=84c123fe45a2432c79a0fbb734f988614f80f83852b7307dc580d36df0cb491e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

