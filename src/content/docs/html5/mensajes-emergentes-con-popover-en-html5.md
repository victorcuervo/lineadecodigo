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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYMBFKYI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T220244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqOAJR0i%2BdEsOb3wpjSiylkpfdx6Bc14SA8r28w3u9fAiEAwCOge42yaSsNr%2BEQ1OHl6nKS7gDDJh5FFqJJBVdxhnYq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBqnu9FXSZl6HIvIzircA7j5W72oXZ8FM2SoCfW3ZrBE18z%2F0P6wvRfCCeVgvXFqpjmq%2FJMkmRRD%2F2nrOQ%2BahxTnzojqmqfnr0EUqzDZCG35hnoqetbMYTBcezOh%2BMSJiy4GM8FdnHwao5E9FUHfG5VjCCHxDf7qP4Nx4RnvfJvYpK0nv1f5Eds3grA4wM5hxWraV2scm1NuwCixMIN4yncxFvVuCduXpEu%2F6Q0cPRyXXb7BqjhZOlYOVX7NnI4fUEltvpM5UNF%2FPf1ivafnmh8n5vnUn1A%2FMGPne8N89AuGIqIleb8iTaInSdi0Z27Mr%2FRxtbo6iNI%2BfEGGdS8cKBAejLgPCIZZ4IACFC6XsWdHzfwmYZ7Z7xTHploRO4QsFH3QZk9QC6cHWFRhuA8mraMrZQDyUV09R63CZenqYwOgW%2FtH5pem1xARIuv1MDpv6YdyeyCzebUkmJwp7lJEXGu%2Fv7p0jUbFLUAT9B7r%2BF8OrS4BYXfbSqg8y4TRGxZ7tdjiddVCyl3HdUSIzpTphVgMtSVnoUh8oinAfwonTKKz5XTgrDYsEpey%2BAHCZu8E%2FPQmLrI7F6OBP9zsFd7nYMkvo3OKCc%2BjrsjizLX0VPe6hyWX06bYY5KIyvibfgOPc%2BICBXDOqZ3ichb3MKLG0ckGOqUBR7hX0gB6twCsuO6anfS%2FH%2Bq80q6TUGqqHWEPmKeQQeMQ247d9PgzMHaMYNbH63%2BsOEpl5qBLtwch8f3W6x%2B6W%2BYMud3%2FgQS2mL1bxEit9a6PTiPU8bzJEyya9G54NGgUNybfUz5S8PuFaojunCJ%2BERV9sn78hBpyOiwCwRZ%2F9UlzGF5uI0x1FEyrpJdLVyG4ddxQ4w57YdX%2BGAhx1sLWMgrYxNv6&X-Amz-Signature=8094cfa77c06ce58f5df23a2c2bd2b836d04ad20cce0c8d7fa5bd425b57b9caa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVMX4LOH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T220243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6adZUCJJf9swq67oFO03YUZ3W4hPLqaD0MsEfvqcTpAiEAtAdAdbjD7%2BOphk9tDEgY2ZCKPs7EUWXOPr9WFbV9beUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLTFlcvVH35mX61%2B8yrcAzQmYZQ1%2B3cStLodq5wvcgH40iP%2FUlgzLy0UTnxcoWGzhmpJVsrKWoWn2l4xtcGBXsht4Wdy0YdrVVj%2BEhFNBssUXIay%2FJIC2PtEDJxz9aUSUMRfVS8cRgCa1wxyNE%2Fd0Gw53LTGR72bTqbfe%2ByZkvm4wBGN6DVVnyUUT%2BVJlUQel1JBw2gXbPZNfcBXR3BguiCv30oQDM7hIbJ8%2FaPsYD89LrkGwZXaqxR9kILs9%2FtSJ9kWAHunxFoRuenT82j29ezGWvRNGJ8mqbI4qzFI%2FF0xsjaBChLu7%2FivmFgGAqVu10mQuccoDirVJT0Ciojig%2BPV%2FqzK0MEq797IJKUWaLN2RR%2FYMFV8DovT11AFqfBnUvIudZOSm68g7XYD8qWLAyOnWUyh96U%2F8M%2FJVJLne50S2hLt%2F%2F7v8RBimioBrU3kh3G6iSLvjIyKFIy%2BkpcBnhkmtcSKOHXY1uxDgd8%2BATt3FmPoyzq8rrLOgsikrGJAlGyi3lEXM8YPPfuklA%2BupfUneqKHYMX07W%2F98cFes9p8zSeUZ2hUyxKpfWcfCsmJKt55CM1F9ltFeMzKYfAKEDhmebkAEaF58st1M2IrkM3z6I8zPmZFcIgQ%2B9chi3Y9%2F5LFMW5Xt60T6IZwMMHK0ckGOqUB0zJSDwyq4UgOOJdKu9kn1ToCmsldDYupaPbQi8S5DNfJBaVw5sB9th7lVl1fZljdlDgwI5eI1DpXV7wbWeHAsmdw0q7CPmkUIeBHVw47Cfxbo7pbrwCJ99uCFS%2Fiywjr6vVjvY4OpPYGH4%2BaoCv%2F4rlM9ERJgUWjG3%2BfsY%2BKiWyxnVqmHNBjz3tPg9EJ2bsX8%2FH6JSSfKbZ4vO05V9xzclfmu9oC&X-Amz-Signature=f8e8bd160f40549ff376dc33e0cd3bcd3abbf06505f5ef051085582c436e2e10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

