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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QGNDMC6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T151224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHETD4FRm46VRJMcHjAC9gL0YkXv6VBM0Lq7qlkVUTn0AiEAgSXNw8%2FgLeSGx3i9Fb1Ti2b%2FzMM6NYVgYkqrUq0yKowq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMQ6kHsap%2BljC%2F6BgSrcA4SsFLp3rvg8s36ZEulWtaa2dFyui1ZAIz6K6GF2p2acxgaQFLJFvzUgd8RhWa368FVvBNdRT43P9L2r2JesvUw5izogbc5Kt0QDBtqCk1aW3NdbAgG2a3D4HM3opC%2FUFNLpPdtLJWe4JoMD4JcgQCDqGbCNoTHlBIK3voyxBXiv7%2BxcaiR4kIb%2Fl7FQ%2FjVK%2Bi4wpuC537%2FUmXmUuzQniKPIPZKG4m52k%2BCn4RUCtNqmaCYy2Tg%2BBfSTELHgOsey6LMLEQVjKhESlram1K5Dgj9zBC8JIof8u%2FI0DJ7%2BtH2fXy8aMh1y3pAMZSKJt1%2BGFq1i08KGqUHBpQoM8jAmCu7wkcOsCr4CJWxQW1xviwHJXJVTlBojfCjtituX8vGgH3%2BdYemZz1l4z9TCvAIg6civL7w24k565hqU7wZzEFRL3fiPLAz6LjN7OHR5vwfvpgDr3uXx7uWmOryJLnRfzyTpTJhRz7r7JduH29qAhmXd64A4VDIadFbo2QsLbDoxpYxgwNYWGySRxZPldShwwnYsqQkEiU8XPUhMpNm1Eu9ZhUx%2BSWXdtZ16CjfgX11Fyfoo4vrisZW%2B%2FCf3kaQ1MhqrJpUm1t5rsOl8aopfoNBdODE9Zc4cAhGFuE2gMJan0MkGOqUBbK7H%2FmkMoaTr6RZvunzY3Zp1qJqb3ONu7GZXQn2MD6Zv18fwDApjDZDk8FYF4bSNk%2FfvwGQmgQKh%2BoSu8oc8Drhs4rI%2BGQ9UTd3mtz3BDo99tbW3BMOwmTn41W77omU6XzCvoKIU5vNmuzpJ4pm%2B8CFglMf7WociVPDDh4FTutPkWxzKMia4WMcgFjb2dQ8s%2Bd2nSoGt8rtKb1xZM9jR7ds11WVI&X-Amz-Signature=818f94517ef8db8048382b401de0a60c6384a045d608a063a6c48a1f4bb0c4db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN2GYXMR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T151223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRYDpDiTmYGmuNBLmYd%2B1P6L129K6bNZtLJMjiJAhi1QIhAIBrFhhHHahJm8T7e%2FcVCdPFiZ2I46xrnzp6eih6CDoyKv8DCHUQABoMNjM3NDIzMTgzODA1IgzX6hvIVb8cnW4OhSMq3AObBIl%2BzHsF5%2BoGRdgCDHMIoe0Y08QVdy6czHt%2BGHCbwoGg21csTW%2FUxRqGG42cqkUX7MLp%2BbOE3mjrO%2FjzzNkIbGD%2FtVn6KXpyxXK%2BNMnXLaHSnYZPGr9LN%2Fm1frD2HuvEnEWJ%2BR7zpEPc8lEL3su17b9F7ctsImRpt5D6gBFM8EdILoY93EG%2BcYJO0rtF4wuKLZG1OzeQTMU5kcnWcWHD%2FaiQQYJQu7q2f7T2OZQxoq3sifjf%2Fb1BXslucSiQf2DcxTWqpGPNryhP5JOwmZRSxpC3Kfbt1ItpNWYSC75IFeVaqooTQ4rl1jBi%2Fu3a3ozKB5HpCr5hB3Mti9ur6q28NC8eLCHe9l2zEKzkBXtWCcjaVp0Owy6dgjn%2FUQSO3XFc0POPq%2BSNFHnevgymjd%2BPTjvFW3VdI1dAbmC25vrLTlF0IQoat%2F6FiHkHaVLj9kCBrk55VN8FgIhmo%2FaHqLJd8kjAU7xF39tLq74cZ4HxNmRVw19Omt6YJb3LjKjNH5%2BTsFIBA1dqn4j0gurh%2BKATcuAnL4dX3fnQOLva%2BO3jKwFYU7PGbF9wP0G3c9TMcfyfpV36PBy2O4szrOeFrnbJi%2FgELu%2FUVdYiJDvz4vXNLXOodm%2BuaRGwE6g2BjDFptDJBjqkAZxcyEev106vQDal7NSnQL%2BAfbi%2F6aHRRUTJpG7ReaNDT8K0sdmbYmhCjQaeXCEQfJbl6ttc5q0%2FxNtO3Cu2DfcTqAxhEz5JwNo%2FnnsP7L8%2FJPRSJRP%2BZzDR8vd5067ZO%2BToP6mLIR9SWeJ6GmHq9HSZDOwTDgvuQfDmqQOri94VsWIr3Ny3va9OQUD2kHXqRQi4LsRhqYto0ffCp5cKjBnaZTGH&X-Amz-Signature=d75f0b3803427c5ef9475b9fb20283c284756821fd32cccb1b3adafcb464ce53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

