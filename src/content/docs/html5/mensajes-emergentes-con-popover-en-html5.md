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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634GOJNYB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T180944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaFLmNo%2FMzcfI%2Bbhtge8OCXqM3Qm5Mc0YSam1rViD%2F7AiEAp%2BKTR6GFgBSSYRuE73LHFyo9yOoy%2FGr6HrReA2o1IYgqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNimDaAxF%2FbaiC6ncCrcA8I3oXOqdqS%2F%2BYds208O5gVrewWkevqyYKjRKqqoSt%2FDHGQj7nsNAqw8DEjh5WhRScRO%2BWNnK8HVEtdqQjnNevzQdptEi0LITvgq9jE7ab1qRQ9UHAvY3uavrFf%2FvGkCALGxQQ3iQ5cpSVFtx2cTEK0u4m3ce5Xdwrnzcme5%2Fl4aM%2B7mBVU365SxwglXaWu3%2FB9w9jIRGZxTYg7NpdTHH5c%2B4HFneTqUsZye7L11i0bFq5IXYdam5aOqWeKrpMluACrMKe91OVA0kh3TNApQVYy8%2FtPn3oq2T8E%2BvTAPrrN%2FZJqq4kG6622xZMam5URzVFPoZB1EJnGJukOikoW1k%2BNhIcl0QUXOwSSZqSvcVYS78I0Q0lY4GIFmn0uaIzmErVCWO%2FZbPVmWYFGPfpUIFMdNSpI4oVrrrod0hEQ7IWPZLwbb2rPBVyjTrrvdkmm9vbcxsni4QoqZOA7Mi4rNAQjPlasqIZpE06YlfPjryMRJwpqdKNS2JazRdMakBR2z7ggYS96toruFyQS65lLWx%2BwaYn0G%2F%2BqJ48j7bNmNzcVwde%2FVZSu0DtqmvGIvzeSHa6U7KI3kLoX4AwWir9%2BtALRDpEh8UJWA6XprPTkymAnOnxkjjTzjTIiif1gEMKWH3MkGOqUBFU6dsANdel43ecP12r3QZjt7OOEg5miIW0RMawg1bFBnEcys3crPhKZELR9jgT5Ay7n3bHMn1%2FhxK%2B3xOuulBVT9LwzCMJj3W4g1peXA%2BMU5qJL5Wtz1jiW8jUJHd1mBKVba%2FS06hjgdm15dgja%2Bkr3e5xeabWP%2FRXIon%2BrcYN4FwrRgkT%2FJx99s53hP6byCcNfpR3l7E8HZc4raCy%2FE9urLKyAL&X-Amz-Signature=5be5d5611fe6178b9b169393d1488a75cb7bd8a34d0f0de3d33f6dda8d8d19ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EWRX4XK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T180943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8iUYjEF1nMCXLyT0sX6cEog%2Fuv4a9JzF6SVV146%2FrKAIhAL5dbdtspAitJ9Ebi4NDGLxbRbeMYYPTc6l8BdyeolgCKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoX9zLphUGZm%2BQhFYq3AO1FpDZtK8Mcj3Fa38YXm1qR8Sf5256uSmfwK2SDHuwyjedB9Zkme2SOkQpjk2teceUhd17Qwh%2F7EDGT09cmtqZFoIUSdt2vT0DXgnJorIPi%2Fi%2Bm4McihgKPyS5xViFFvv0G0%2FSwQkI6%2BbFgdYAxg2EvdxFW2JogbcqnzuiDFs2TgqKxxeguIxZJMHBfuyn3TTjwUk0%2FbWdovcirXgm0XPKRxRszw4rXPx7ZWGcw6i%2FcZYr5Ws58Pot46iMlzJffaYwRI7jK%2Fa6P3oS8oNuu8roKmTRbqEoyWb9fkDdOSVjsCaccmCqY7tQiF3S8Ek1tWE95XMbsLORG6NL2IfM4c9asi6BW9myfMJ3Laf3QIsXkCYv0RdVZ%2BZb%2BG2dYov%2BY6YPK3WgU83zOIm16ANvqSm8flS0SHoZ6WOutHtOWIZfIx6Zx6sGR%2F1rn%2B%2FdTRHuucoIOEXE3TzRIibZcQAYMDGrjfs%2BY0H7YeZ7YhlqpXSkleWOa3B0R8utnGyokzMTfvwBUkY55xHnxuudB8lgaR0qNA%2BO7UhTdVTagVSttTNww3QXk7qVLwlGj5s5rl%2Ff72wbl0WDlpv7LmceCTvnvMJucba2ASIPNFwq0CIeUi%2Bfy1xGTqsctzwO8kzPLDDhh9zJBjqkAZyxB%2Bk02lafsBkgc2is3yUGbdz7Ol0Ffpy7x8lO%2BJNs9WjAt%2F8xq37bR7HYdmcbUrk0eF6jbS4hQDTJpCt0UjQKdlK6TtxpYTlpiE84xT7yuUWoOrrw3uFaZpvqNBEnRop4PIMMstLNlgY0gni3TDefF8mDzjVo1PhVviTBI7hLSz5K8ZBTAeGo3va9SawZKwr6%2F50jkwSVpMqfDlwtdRbzfbbe&X-Amz-Signature=911d5be28d35cd7872d1850e2146640efbe4e7dc1ae78e7c10f9f258c8c84400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

