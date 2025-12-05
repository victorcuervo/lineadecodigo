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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QLMWYPM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuvDHzOWuNfoEM5EV2r24eyje0cVZ7%2F3OeT9ve3Ns5UwIhAP6ueuHfY1uA3%2B56jC3QNmqCtwG9Mt%2F9sB6ump%2BjVvuGKv8DCFsQABoMNjM3NDIzMTgzODA1IgxauDJ%2Fn29bIEWkvHAq3ANBMXSp4ryOT%2BQhmc5cWwbV7lUECiCdnXTsEtjGzw3Mwb0nTgR9JBdU9f3DQMCyRa6qfW%2FxUEncz%2BTbbWKjqVaJCBhZobhodby7Djq%2BFvjzvZ2AWmmfoFM2DLMYKtAu4aGC08nT06mab7qf5Qji%2FMkrzWAWUWzvyfAUd%2BYwFP9EJ9cAezzswIwn7o0PO23Xm6J00h60L%2B5L3%2F%2B4ETcXsGASgiqhpqZIJkcU8sOyVRxQdV8trvodiPiBLm0VrCPkzjc4VMx3eNZKCtZKnXEWyGxY6blnGTYvLqkmScVOPXQyxEQ%2BZ2f5Xx%2FmDisffxPBaxemRqsJPcD3DIkiJgMfw%2FaA1jZjzc38A%2BJbNEVCjyYmYsFrudYeN820uxi7qioiaWL4VY7C35kGc5EZewUQbCzzFHcOWWo4RwskCyqKtPGFz4y98XLu4b85Sam1zR3GJanKdvlkjTGilDo1iODOF3xJt5hAAZRwuGmQy0%2B500UecV9fsNNPrkegPD3URXy9TfE%2Fqbnlzlzk1dC1%2F9vM23mxgZDejdgRBwRr3gc1GYLDGAVNCAK4ETK7uKqlCv%2FEU82wxeZ7d1O%2B%2FtisQSMMb3bxetkv2npgzV0IPk8MsXgC%2FolMnGRXn4DXJtcJvzD118rJBjqkARSqU%2Bm0kAbcwMJCTTN%2BSaKYpv%2F6QnU56bZbVMZyMeuJ8H20OrcOChAOTnPS7Wh47adUZeOmI1TYp%2FcrCERhIB%2FbPRBMEnSFj2Mb%2FDx7jaCRg1v4VV6HWVP6UX4h%2BxiydaMsn2Y2oHebcRySx6705JlzVu5e5iALF8CD1bm4jnMAMhPldxbHOllfJvyLAnRrwdrzcSScRCP%2FXpM8GlrplmoKokWb&X-Amz-Signature=93caf59503e29c7b0568b4489eb75ba80b0f10ac90295f81d81f066049c00a68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXVCUHLZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4GtgIo%2Fb8KQyMSKa4rfRxQ%2Fs9ZSsTbIj%2FAQVD8TYTyAiBhVtAil3qVWldTLnDiICyRi5WZQRE1wflB43n8ROktayr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMf3EQ6XMcME7xWWZZKtwDor9z2uuoVJyREkng%2FPOQ8%2FIFwuv4lmeQ0d92%2BnQBWk8xlbQiT%2FbrIu38HffSghnqq3kuDnN%2BMvEeCrql7fo0AKScnBPMLttRnOgXUnbV1ZDGLXC%2By9Q8Dtgk8m%2B6ZshGdlWEqB2ZgFuQDaMerPSh6tzEZ2Ez8pBpuxlyHo62YxtziJE%2FmXZhD%2B0Yk0gvm%2F51v%2F0KBNHN4tEHyYBdjnrDIob%2BVrs4%2B2%2BQsv%2BSsQl8HfJrSHFnjqb8bwcP0Vc%2BZJhTSk68eihlFvV%2B5YvKXxEPjeOCsoDo4ZDzGqwmhk8uiW1syP%2FFfcavcAbpzGZ1MVmKPjk8kpLK9sw58%2FEIB34YNY4MGHAYOmtCl07Ss40g0IZQegkNrnhfhnbiUHqvjyXtXzMsNvEC3vN5J2DqBNvn4hmPcj7oVHCqcEnZCOfPolt6jPCv%2FGz7BURwcpMCmG6MHTkr0ikdbzS79a7BXadzLtw3ijfEJxtvnFR59YHY69Wo0YAA5OJ9h6YgoYRyVKIK4ioKObzJjSLugxuNlmi1cVFhwXcSOe64reu300I4BqNGnsceA%2B%2FELPQJBlm8mrYjCniJXuZTp9lR%2FufRaHmTgmpCCd1cfNWSar6JvRxnXapQMmxSfveE%2FMrTfRgwldHKyQY6pgG52wChKChxoxKHJChnRR636YRi1WEH%2FMkdYDezEB891H70VkrSL84MdoMk6VhMBTvAKOsqohPXspDXPD8MYl42yrwZ6OiJzvE4hc9PH9fJQ6rPhU1cVlxKcqUEU0ZXrnfDfRpDt2%2FkKvjZXJmgNcVnIMg6GybrLnoPKkTtleow9afwTBK6ktZhW1DatTAMqPmDmqLlPXu6Zi%2B51Z8fTHVNnPtB0QdF&X-Amz-Signature=5cea471798e840c70d0650b9276ec59a26e613555f4cb9dc1b0184a6e05f863f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

