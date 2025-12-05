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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTDI65XL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T164112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkRHT83YzqPejiWaCBWKFlD0kMD5ynfYLFGQiAaaBr7AiA9YkqUp38L5r6T0I%2B4MBnWppIMqSfvivhtd8usqaa3oyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMhUj48iLpawKImH0XKtwDCrRKOfhbZbOTVRiBuGy%2FiQKpnbUOtEtg8htK1KtQBpdvv27PXD8nZ2hWGWHVafJQ7SSVgd8Ymo4GtdhGamTsVEiMtzfY2k%2BIW9xgg05MCE2HxRB24LfKgNlgZrCunmV5FohRU70AKiUfH8HL5uVVHtmVM44Iv7BA6LH14Cl3fFe14SH4PcJ7zAS6vpBiGKyMr30g6AKbqdX3H5%2FaKLXcZ40Uc2AtCiueRhPOM9pGS%2BoCYH3tHIFJoaJPQdwqXqbcN7GLa5nW2vJYZ68IqiS7PUqhh%2BoZSLvFT8Z75VIpy0RiG03WaZL1R4SUqU1YpIPAbnoV%2F%2FdG4yFIG9JMG1iQka8a4aRyfBOZBceL5IJisP9jB%2FVx1ONOVsnCvWpJQLtX%2FVwg5CMg61uyN4LDiwNX839mIoEMTj8e2CcOfd5J0NevQHCBlMb5l0JML%2FJVZEXVAjUx%2Fjk2%2BggNkcqCNoWeLOQNrvR9uuAfMEC1menCMIkT%2FpzeQTppwjn8Gus4e45gM2TA1ZHzokVRCE9Dqs5FOhtrrufjbOcAjqVTqlUJseT9mez46dtjscQLmO9xLa5TcpZZLxTdaF7PEFu06%2B1mEd3lEJzghwSvC2HgCs8hwVV8tZ47AgHe0mw%2FsYkw%2BfTLyQY6pgEQUbRimwxB6qE2SN6Vj6Bc9GwoQ4mjebv2kiGEr50Yo7qftdQcDk2WpYPslcINLzZfHcOvIhPL0tOaHJcUoN8gKzNny88dc5bt8gmmBS6I40gYU92MWG9V%2FCN%2FvXy%2FvWmsJiVpVaaRuI80MDcvv5kKcjA10juvqrW13egeIIwdXX2DYb%2Bulg86D4N9HoG1dU2tnh6suE3rNmPImBAhlYYnZltKiZi3&X-Amz-Signature=52f5713f0f9d6f6cfaef366835542a0ac6260808f2eda493e7d0b6cfb93a13b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QYMXP7K%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T164112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcKWisI3f3eqB7E1jEfC6SEk1Bcndyp%2FMaP0V3h7l2OAiEA6x%2FXJqGWh7h5Qpx98sIWGMR81seVvjrBo1Y2L7jrgjcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLLeQbfcHAsQhzrh3yrcA%2By7igSfMF%2FYK7Ci6qdfnSEYEJqCfs7h1EMlLh8UGvW%2Fwg73Fd73Oagfo6XO4bXH2vHQqYM4n0NUBfRddrP4W%2B5wUSH26Rmr3phHqyEV%2FgeLHPOpVvNsaSw5XtAoKBgzH4cHXgV1gh24UNXuLyFZ7fLZCR2J1smuHymk%2BOMz3ENAbE2rSYCi%2Fr14LlJvc%2BcK2D9ZvV2Bebo8l111UzFTrfc6lVSCz1dOcxX2O%2F7m1PC7SrlurnpHlVNStbOIheqisUcCK24DLefP3jGBuL%2FvuRaqy2ycJadEh38UxkrIDY8JblmT%2B70l3MbKqeL5SgOoAxEHKDtxWwhTPPk9IXA9RrgItkQVQGAVG2NqZPiEjNBj1ghMLd1DbouLyVX%2BHYE%2BRhPxevGYC869rNruLWTdUM6oZr0GPKrLNNVSvSGGtvlSg%2BhQpH7ssY85wtk2a5hx2AvIc20ZChsPBVijS2oI3WMpmjXNcoUaiRAL0iohFi3bax154zow9X5E09Lo0K4MJIqAGdbl5iprDyHuru%2FeKsNTen5SiVSa0jiAhQhxafFcbYzSPjOkfRY%2FkeR5hQ6pkQ5cZF8HKYBlYWyswyZbE4FpQVtsXbqWSh2KPpohm8rE8po0jvxfmL%2FyX6SIMJT4y8kGOqUBlOkHPFyKVJOpYwbWzTziskckuHG%2B%2BStIDy1F%2FnxFgstQQLCrL3CU8glzcs%2FtMu9wlkRuEyhrqtCFfpLaTVIHA%2FegTflPO6MIT8aw%2Fmpl%2FJ14gyQqpWb98VIK4NnBYWO6witZm0HmtEahSmjot%2F%2B5QJfq%2BlQIqp9E%2FsHFbXh5a4hqg%2FH3N513DOc%2FjXVt5Mm1xZDiqwrPMTplHZ5LDwWJW%2BtB4PCY&X-Amz-Signature=a577ff686a4a90f4e207416c918f596eba75054966d59e5eadb586c4302b6265&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

