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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YMHY3AS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T050353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF213TkllEgq8VezvutvwxNGufp1iOSLN8znCxMmzD79AiAl08hFpzex2XPQ%2BvEllXILeA1agc7kw34U%2BAEWsy7OGir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMz8N3lMlEgTY1YCvOKtwDe4S421%2BznQbjnNZERBaMiBkYUkF5AMsJLxt3%2BbOZq%2B8H739DIqjFrXAQ0w92yiJXiFmhayhcxok%2B1uVroTq%2BfulaBhiF8JbymL51IlUEJsgXEfvmT5mKqZgDZgN8d%2BYuIF9ZHxJQOM13efiww8BqFrd0Qy1KR1qF0lcJiXEjeF2t7u6xl%2B%2F2OrphHLzqQ09lEApr2tPsy5p7vZiBuBOFkC6AOZ8VefJrrw82SVjatH9NLMTPJVkIfnlok%2Bq9w%2F3Wt%2BWADvQhF%2FIQhh1j3dvTd%2FJqaU3ZlbGSXgWOaaSJ%2B%2FTCoHz71B%2FHn7LR9l5txacBOKcfysUPmCpB8CULOEN64JzTKhjGfjxkcvTRP%2FyQ71RJ5idiDyzXdzrEarJEa18NqUL%2FGze5%2BgPubvyBIpm%2FHho9e7XyTL94e%2BkWG4krQQzlzJCSvNJOSM1M3UobjbrJqwek%2BiNs591wYuqKffAedyCBIKIRUvJ61un4lgBZWj1XChdMxVjudv37NtGVy4uLwegn9evvH2By84MFnyTKbPnvW1OP1WCuBxTIFk%2BNQOnVz6kH0BSVo3IFmVqL6NW9iqYvb11NCuYVw%2Bfrr1JPVCzcYfolxRvJ2l1X%2B09xu5oB1ODZ%2FEXtI2abXJow56rJyQY6pgHj71Pzyx%2FaOIkDR%2Bm%2FzXHh%2F33u0xq1%2B5cpC2HRvDL9FhTHhu1Sj4ji3SIDgLZYXHRwgYWxW7vtGhBlqsTp9Fc867Rnq%2FyEkXqBYP%2BGp7L0CyfHZSPetEqSI8yKhaGwYWHkSCeyJmZNQckNBlEQzP%2B32ci0EtHN7d5afS5GW2eyAfgIyxbqtUQX6KVHeXJE3NheEIsVQI8DceuzMMR4XHQd6LERlPpB&X-Amz-Signature=bfb1c790b68c0ee1da3c873ec5f0612c284b5e249d77f3fbab2f9fd42221fb9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDHXK4MJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T050353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRlTIMHq9VIPOaAIT5czoDURSmumOJdt81pd8cy4a51gIgdNtvN%2F06oTS3VgQJ7%2B1TtA4Ge3rIDZPbM2y%2BBkfoj50q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDFp4YzQ%2FYvJl1nPC3CrcAzOxc748qAsNPPnzSHT2o2qvvrc74AZbQeodhDGJDnzqIxKKi9qde3aN2NbIQGJhbHq91XZZI3BPNJOAJNLEiq1JQZQkcI0trPvf%2Fa0WJuWzmF0slgf4Ic1AHQHy5xGUDFVmYyvL39zPTXuQMfL%2FTjTMCKyFD0bPkaIHSXHORV3ONrRHNKeI28%2BXc7QlVgl2WcihvHt0FazRWkuqELfJYJyrJqVfvFokvmm6Zq2wIuGeujluxwG7oy5jx6MNfuzk5Hd%2BWMvUxVQD%2FU9pj3s2nI%2F7B7vrgRVsi%2FiI%2F8V1fcjb%2BSOE9bW4qLJRc7slhkzvtY7Tz1WN0lokg%2FUnEVbyurzoaeCtFRFuv3D4SOsLLjnckQWHEKxmF5RWwXV9hfPFx7xQiT1PQsoiJacn9nkMnEX89G3kId%2Fljn8gYyzLkx5Lmmq2ppKQmB1ffSCYOmOdoT9scVNKKTQQTp8yIH7hDhGhd%2Fy%2By%2FpKvvpxPt8GdwPmKUa4g40rllcuy1z0u%2BKJ3lme%2BojA7T271DgCSn3BRuFJ%2BLM3dqiC8kw49HjlJeaBexbSxMt7DuqVbJTlI1YpYVlwYRUg%2FfUxCnpeA%2BIavQ52k6bOcgb3GYoOV%2Bk0xyXjkDmS23dKemuhWC9%2FMLqpyckGOqUBu1%2FNykvzuZ%2B5sMnSwy1ccdfqxHszAMmRpZVJxyCqpt%2FRfaXrpfkwD%2B2Dno6Oj1KnP8Jp0RWW21%2B24Xi1jV8pbqHhlrlapJvqPDIf2IVIl0lxsYpGfZr9ZF6HamjXVH6qCkvP8jw99Zgy1Esnl0%2BLUYTwlyVYEq%2BebyY%2FYyQsp2H0aQqmc0QyRm9BI8jAE95mzVfBDLz22BbWcTa72GYiYz%2BZbGhN&X-Amz-Signature=5076efa408cdbcc51ae856f2be9bd9d8e87f3eaefae8c84766a678308e8e9f3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

