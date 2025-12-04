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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAJPY46E%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCnkXkf%2Fnx6ggmShSKBVN9s3GUOl8QXIwjUgcFZfIapMgIgDMrxdH6IG6FqYZUzCGeVFdwCKpa2cig4cWqYu2exJrwq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDOaBwxkZIGVompFt5SrcA2pSPwDKVtb%2B5UuhVEKEkkws4lG4b6neIbfjOmUyJkWqCa7CD8JUDVg5uKz2mZ8KhsfOxjla48xNh46TmzR6pXAtPwJWGdqQyenrA1YJUhwTF%2BuSFxH%2FUjx0YHkvGKi09mKy4%2FKo3u%2BeRMf2k9%2FF%2B4MaIZqUdWih5AYnsv2%2FJwHAYvfmd1dRxXiGTq1nrwUqRu0Zidg8dxdGPrUuQOT4XhioKU%2BgesXsBN8uaD2BgRzbJ5b4owWJ4y5elYcz2wF2bu1Khr6hY0ONO1P6s7%2FvpIoiN3BJlihKsoyoe%2FNiSi6iqx7mOMUedyIAlmA4PEb5vh7x6%2BZcKsW9jozERvZsomEOtAvG33lv4Ap4yHq18oganDRwJKhHC4Y78Rv2EntETcyiZoHC7%2BqCiPD2U82mhsnCClBSKf%2FRaoIzaCLZ7sjwmhKljhIKkEGOnzqUsGv%2FgxYUIaWp2hAKH4ladxPJAO4os00Q1XNabXpBTEY60pL0YFiqzFh9Grt4cx6JO1LsttN6BCE4xlMZ87zF54OBei4qj%2F4Im7wRrmyJQMJpngkJMj3G%2FKFuEhdNJC3cg%2B05%2B%2BgIH2%2BAQfd1MlPEMLJmLxrc6k7fe5O9bk9QeTWOBSw4NNltbmIbIpmBXBkDMOq%2BxskGOqUBKxMrpSL9R9s0weLS4Ir8CSKm99nJOSLRtTo41dkrh%2BuqlwvMR6qnw4Ez9FRnAmHYoaU0QlMqGQsQCqMMmJ0tmh3tQ4mho083OOAFfACL4Jpi1yld%2By%2F9H5I7BtlDosc%2BsrgoVkq5PZ4zYc917uRNDtH7LW%2FMr6YBs%2BJ%2FzHJ7JckYqSYd8SmSa5mJ%2Bq0gs2KWbzC8vdju6oBeBldgv7CwoADjJ8Sa&X-Amz-Signature=2e6e2a97917eab7d9985c5fb4a1648fa534701faa6ff17f1d261f47059da06b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AATPE4Y%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCv7v4cUdyXPnjwW4rKmX2pRNWfGXVvDknZcZhX19akDQIhANpdEVEdhnlwwr4UYyixloN9jJvGT6x0qim%2FzxJL9mBeKv8DCEgQABoMNjM3NDIzMTgzODA1IgzZ2zyxgLgYFCmcWNYq3APdkcWY%2BNjTRfDFeKYBmsYX1q09puS1AR%2BIZIrO5FYimKSR3KydPZtfVcKavqqWMr9Z4F9Fn%2BFyQ7D8kGkU1Cu9ROTLlnL5ZihXx0oZBra8n6rfP3trKo64gC9Ck0dCXbN5IYbhQtPLbEYDHnAOsmKoo0wunQPNvnv4nhAAHab1ECNmcG3BGma3D8wwoPT1%2BVfl%2FEFhvra%2B33h7Q%2F%2B%2BHqLCLQOBilzBL4BhXki60DruXCwlqzH4JHF8WvjoAagy21wWuLNXcUCH472QL2cTBI2NzVrTIZz%2Fhm%2FvsvS28Ja2wGPpI9454RIOty3GSZs%2FzDQlI48MuoLPll91Q4dI4%2FCRy%2B7IIfwUj5gfjjBucV0ukgPZmtIDdvhuf1MwtIDdOIgh%2F2uDwTSWRhlDeGYX6%2FWaUl5I46ta3pSpoa43PdYT5Ix4BZLPiSREsLfm3r8RRFeRs94moWdrtm3f3kxdgFQllZzoJlj5HD8yc4heOROmz2Nn%2F9gDB3Sv0J5LnDnnjz1DS4UfHZDzFEHROUyFMfF7bALHvh1%2BZ5p9WTc9WqH7lVvgND8Y6LDq00A1U9VRPsnJ3DQ1gbOXU4kz6i8EKEiqwD%2FWA5u1QMIczzm88G58b3GqazoUPy3KM%2B49AjDHvsbJBjqkAcJ2rp9hHMDS6eb4f5OVAmg1dAl0L1cufM8lHNwusK6aHFNHGJHHr4vtGQL0X11nAWdntm41Ax0%2FElNbUBqt02UAjEjMOZ%2FDA8KimlgJKW0ZWS%2BZvD%2FaBTbzjYYdP3WHSQqXsgGC%2B6iXSXpNahNuS88P%2BRuuitjsR%2BWec1pC90c4shOokoBCaLmEjAAo3A0jJNJGEocQDEKxVAEEfMlJ2AV%2FOb9I&X-Amz-Signature=0c428a77d839d21371bd19b2ca31f40581a88387f8c31cb10ec9ceece1b9719b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

