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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BBPO3VR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVaHzFC2mbx2%2BOMbedFAeluUU2oiuMwdHeLPnM1Qn6wQIgZQnrx1aEx3aud2x%2B1FrfnfwtadzpKpgDdwiV8cU0vgQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDF8lilTc%2BrUs6pex8CrcA690t6bKTMo0UXRw42B%2BfBhIpHxZnaipQ9mUzdtMDQSjONchENY6muIjaonNvVxze91TOl3whsUjemdylIqvhk8zc1M6ZRakJtQeacQBrjJxH3P90QNfF7yu5ZQ6FAdWMGB3yZl2OmpQWoJNn2WOGQcTrh1WSfcDazYju1qfm3al%2B9axDDsPW5%2FlnueyDc%2FKDuZib3R2N9FnSLeZ9K%2BBp6tCnAF10Jx5BMvu6s9oplGP7IPl8t5EBlOF26dUN8N7zmXrjBFxK7d4xxv7hdC7Z9dBSKDYrdxWRzo5iIBjoYbTRBRY9v5TvMIRJtlf0GC%2FL%2Bl6JFifxS6vvmnEVYgkMrhSaz6%2BEREIwbZ6j4fQ8DTucQVuYJKWGncZxasex%2FpM1p5dpkvCsP%2FjfvvngSZH%2F5S2%2BC2JJZmpPrYgflD41itXrcXzX91TPQulLrw%2B0b%2FIcMEyNol947081t%2BAMi7wtuwJuFH%2BgleRQ%2Bt27RNxucqnTzwA51FLrZe87kvpC%2FA%2FJpd66bHYsciwLolouf13XKF%2FgF3NL05nWCH5idmesQJQHiR1eBlNLhUeLWmt4b07o%2Bpbnmn4MUAOs0y7CKqVgL%2FC6OqexhW4ovNEo2RAQzkZz92jaGCRH59OkNjTMOT8zskGOqUBa0%2BTB%2FU5VcA0G2VXHa76S4UdmYJNDIuIr3IerH8XeWnaJ0dVQGMP6PlOAL2Wb2RnTKnaUYs4WvQXC49EIDDBJApB22eX5mqVqnMh7MKxMYzs1a2dowqic%2Fbv2u6m2y3nxbKIG9hGG2lby0frWyFMEVO2BpBB%2BfWxadWmdfSL1K7gl50OfZajx6nm%2BEOUnoJgcjjwDoNY5X0b5dlx89HZZ56YaI0X&X-Amz-Signature=5c320be929735b72a09418383811269bf95b5ac95108ee0cc6e048957a275c71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLA7XSPN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDinm3qoDp2xuVbBcL93Q9d8vGwrTzHaY9eidCyc5DWmgIhAKAIwNi45qWBL5S%2FPpdPZ%2BWmLtSaPOCXQu9qZZWCfMh%2FKv8DCG8QABoMNjM3NDIzMTgzODA1Igzh%2Fp%2FMaXv13tO8g4gq3APdlN5p7gNenNVmruhCzoesfsMTzY%2BnP6V4FrhE2nj1rvxxWBNAO7rfqA%2FBr1RQPSMH06nagsnZQE3ifc2NfIjWKcXjO4%2BEsbOR6mSE%2B28upclvyiXA%2FRsFlKEyQMgP93oGY9CxLRQfTWCZZ843wwF85zVFFrDBP1ZCXUcVE3KBLnejAYhW1Dlc7ldW6yICDi0usgNDesoQDA8r%2FBmaOvnkZLj0d%2Fc9U2bi%2BbiskbMro2R4WP4cj03P%2BD3iWu%2F%2FKp0FTqBn3gMOFgIT5vGRKiniHmJNJtuo2qrpAEg8jg3c9rBYWQ62nhrXz%2FUc5PIZsPXfc5dNuthR%2FQ9zGBN%2FsqNSsPeDq%2FkJf79nGC5YN5UiK5owyL0AmIlooAF5I6BsWWrWcPgPf7mu9AEEEyvJAoqJF8LrQJzNZG6ACqqb7%2FnBfzpkJ55KMbOU3ElPpP3V6rn3NpHzKT5TgtVe%2FKm6bWJU5T%2FBYaH8040iOwK1WlyXz99zL4HjIt%2FiQiFKnMi7iIC4d4%2FZqmwpYdqvYWTEig6sruT2Yxh1XiuofvecTumaVM4JgO5TP0sbe18hn11Ti%2FdQK8SJIuxGbY8LEuUME%2BbgNMVuwCN%2B1vB9KmPDBGnZ5YKoZfh1myIIowhokjDR%2FM7JBjqkASswu%2FlS3CXSG%2FglX%2BT2RDMa9cLzfFfRzAwRShZ%2BJ6llCL8TxCLn8xqZMj9XcplOTf5wHdvJlmaDmRGPvD7%2FIuKlSlKVUtNUOfEG5KqfcV9tX8s9LDCqCAJ2QxGBN7Be%2B4C4WmUCNiNPZXN3Vr72OlMyUpgblGmBalBKB5V0VEgzweNsDy6CrG%2FkWOhRTaRZP2OKIvRm8pLiOwB%2FAD5QOpco53c1&X-Amz-Signature=0a9d0fadf2f3b89885a45568ad43cb649af6dabdf50211ad85503f11240b1342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

