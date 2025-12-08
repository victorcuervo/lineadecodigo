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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MB2ERDE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T190512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgNPMJlHBGK1fpn5SaMF5sKQ%2ByLoHV2JAPjm6Gi%2BthpwIgWyWals7vCsqx%2B0SVvDyCuXQsh8HgmDvuKQKecoMLI78qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIs8kbNN1X0WQLBajircA%2FXAGbERRDMbgz86hOHjCizWgvUCYn36Fz8NWdSID2nX9dRh%2BeR6v3oZ7siysAPsod78zjnSu7MzeULQaFEcabMmEpWa71N3OowMv1bvOKMs3QO3xEHS11DgcY7wrsiOUZ7kcSKi0R%2FNjiO65S5h6C4I8x4%2BxABK2aBBEIxKYG8bJt3%2FS29wG3fxJSpEb8ekdbEoSMDGWcHcAiDjexrUq7VFt%2BFqKbOz7M47Mf06pbPYOpjdtmBChZr%2BEWxlj5aAp%2FTQTb0VY2JxUK06MbonbH%2BIk5w9JQT6VCx2KhtgyBWjfCqX2QFhHrx4Dhzcw%2FmEr7gao0c95pl32LNUAreOb%2FcYkeLs5XAJ6N%2BtQnwGjVPECBC%2BL2c%2BMMrBuB0lHeC8YMVlp%2BEOSGbUvwmrd8%2BufN8iQPYo2weT0YawcahHh5DB03o2u1lfWyZ4js9MAUd1KU9%2BU9Li%2BiZ%2FnLAwYhXD9gD9FiMSSxO9LyYG5tba%2F14DVyC%2FOfDkWH0bdBIIMWwIStuRWkcwx9YHhrFeGbNodqx%2FJbebRXeY4mcNO4iLj7AdIIdo8PUEO10i5j8X38%2FHKwDqNaDBp4WWR9FTHFLAWvm5k8EpcsPFN8FJzSMeMi7%2Fv87KJlignZcRodWzMNuz3MkGOqUBwwKHkMWyhjl2Hcwjdd0fT5%2FmabRdYwEnjwPT93tbA%2FhCAP3Xid7WCTuTUTCyr9St%2BApJfT2UVW4oSmcyHePLsPWllGyHVrSQszbFS9mYTilNiajL%2FMByZiM4cHzXBqr9JJYk9O9c5ieCRHmHVQEL2WHClGvGEqdTiZX095nOsTROu%2BGE%2FQmEpjJwCv89vXpX%2Fn9v4Mz1rqcyGLqmo5rZdAeN3uNI&X-Amz-Signature=4ea8a4d60c0bce92fecd03f74ed21abf70acba20eacb57d285c5824cffac6644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EBJ4MPY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T190512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOJTBRwFJ8fWURBNrcgNtbQn%2FFXeQt6q7CQfXwlF301AiEArzQhQbo5Cw1FcucLJLT%2BeywiwBMN6kmp9%2BHefqcadI0qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE33SJ7QtY8CR7gtqSrcAz2muUmy9boAI%2BizeGdeT99010fiqJAqbghYfG2DOPyLNJOO5YFgkhpviDeANkGiCfuh9Gj5hn9WQf1pgOAYGsTxH5dkQDlUevf0QrSHllgasFaeKlOD3w2H741sWkCKujR%2Fhlwn9UxysyQCY93cGtAVtw%2B%2FEY8NS9m8PATtaaaOXepE48%2BedmdHtAsLehmK1mnAXKvINP3%2B1P1LyGcYVLOZdMiCYML%2BuPW2eACTQulzKLNBYusfsO%2B8OsD1379lii1kt6IqVlYv98%2Fp3FWkrzBrTn%2Be1i%2FTg8Kz%2Bokk1k9i83IZxVAAPZkAesTfjSrg6wX2I7lS6dLzJ6Ey55yhIpqrYgkqk03YzwAMlE3XUU727B8G09lXyws93du6eAbNiB9L%2Bvo24v8cKwmLMQnXxUszIr97S9TsAGevbGl7kuFHZtt9ICvuXfrIlFd1ejv0v3gPomZMXaT2uiQqCxVC%2BFkvJWEIF%2F6uRpFXwAs2bOwWcQI%2BqAkClnaKtrrUgsTA66dr2sVrDZUCcXcUJayRkoTpV%2BsNOimeUp6R3FRIZ4uXjmVKBB9Lbv7QyxcQCFST%2FzZDzXfSP5V3JJxbJoQWF2Xy2ixb4sfDCXscZRXdzWWPlwFEqiYbZs3cVeDEMNqz3MkGOqUBsVcr%2F6YSjsXajAZv8EGGy0uIAxZsmxwNMYKsiaWVjitN7X8o4762eYS29mExMLIEAdqiM9amO1Bv94k7iyU1xxK%2BkC%2Fv7pQ0SODYJob1B1dxvJ9CgGjbTuKgFhgt1vLOwHuS4Y8rpV3o%2FaDdJKgWTO8eDPdpTLwpNredDF5GVHrmgoLXT0une%2Be0tv%2Bv%2BcIJYOC01m8eeu8cJRUjznr%2FQNL8KYsz&X-Amz-Signature=2fad738a5240bb4d8f09603fa1a87849085e471cf64a08e0b45652d5784139d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

