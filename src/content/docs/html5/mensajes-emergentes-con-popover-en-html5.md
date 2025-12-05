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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQX2EGU5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T173712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6CGD8zQBbxkuf894yGTWf5qFQFJ3Aj3%2BsFJOAeQ8o3QIhAIQel33ic9mPvwGtu081Q%2FAuINSyEL8hAOkekbXZiNaQKv8DCGAQABoMNjM3NDIzMTgzODA1Igzt%2B409lCtUM8Mm%2BcEq3AMsMaRnrHGQNzJUwpQq%2FjBwPSlbE1btSY7bY29cbfghoCUYaPYxqHVDay14jWq1EM6D7iti5FhkqRgWMieFJx%2Bx7qgeTioTX9AoDClzb9az864eHt6fJoT41HvIoV5j6EbMDnSvrl40e3Mp5dS8G9Zj9gFV4671VWFbQzmOBDXWJSkJbQFvZLtXgqCXNIiTgnOqQkw3XcloMkwqXbwW2CocYwCku%2FzQP%2Fq4Ofybze8BVjwnYQS%2BKBMHTplHQ27RsnlRKK1V6fF4eo27gem%2BvuQkvuSYSlYM16rBfYDApTW3B9Qm4FFa4R29Vu685kIufwj05o2BiUIqwbdqWQLXkx52mgSSNGrCk7dn8hNqCZVTOnj3IIDN%2BYreqkoEE7uKtHVw4FudueM2K3ynIZOoN7jmbuBoJWVuWcCuBoJxIXthV%2B%2FOZ7TEurjYpLRXKFfNURDNpU7fCOcc5WUlFheSDDjzJGRbjCe2CDsr6RMrnfYarYSj%2F312H9QZ4%2ByxqPNkXeXScTnvsFbrDc21yx5HIA5HLbom6%2F3iBX0HaSWhFlnWKfjeVjamokIOsQ3xTm1TNqiAbFZPbZ%2FrWkT19lK6ndMFxoZhaBGIKolcugk2oG1gzZcTKkZ5dqlpDxgUWzCe7svJBjqkARV4i2FS%2FljtngTfxi9uDJspk6eHQKgxX4Ll0isX1Wtnyz%2BhcQBJ2J8H7IdEmr54CrxWeo9RS4Fqn77LPvLm1hyQWci04bSW7AZ%2B6eRwXV%2BsfVeL66PW%2FDwkyzWfeexKhtcK%2Fgo02rIHAY0paqTK65z4XPt0EX5MxkMHi2vQ3MBTwAnuOBJnqaH9oh0RdSl7ANwu35PjVkYyXW6w5WJhu%2FNM7fsR&X-Amz-Signature=2d033534b487223a2c6a9a31d96c54f1c4c91c0c575e26ed76acd9ff430ec6ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5N7OW7K%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T173711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcZTFwFvpKQDGaMruk1ut88pFiSG%2B3I0aSK%2B1uBftCGAIhAIjsdsc05hZ6PFfSQ5TXLkScv2oa7vM2ve6bCpmNARM%2BKv8DCF4QABoMNjM3NDIzMTgzODA1Igx7g65SW9UmQFe9GWAq3AN8MSPDXev2AT6BKZSsBXXxMqW%2BNpG3KEzy3i75gQlDsCgWhhMNJC7Swpi5mZmsiuGRC9S%2F%2BkNQyYLj6ncxHJYmB7JAgPDimOZ9xDlZZRH30UIJ1duWdZb4HImJr%2BKe0A7ZMAuZClKbGo3x9yytcOAlvKB6A2rqBr7hnUiBTMd748z3B1pY9RxbJ3G3pm6LE77QRpeyPRQrNJp4r8WwS%2Bl4MP%2B7MiKk4d3CGxMcCJNMM4I8OVZvHtltbJYeHg8%2B%2BEtjVc70Thtq3T7tAk9oH%2FMOaDV%2Bn82rf6nkXIqnA7p87ufLQSzfcg6miVqb1rycvalUpvkVt5tFFCW9XxYM3ur58IB9%2BI2%2BeZpuXF6L7oRT%2BD4ibui0ZbWCwmitxMkW1uIHKWMOFO%2BCNnZpOhIdY8G8U3qJEXKez2tHdKMRDYn673SWvRYIH9iiPDHW9wUicC6aVEyt8sMR6Klk3%2BXurSM%2BSvdzV0suDqIgqQSZh0bDk59qX%2FQT56Tx3VNI5WpGpZUD0IwQ7fVp9xXZB8XVUNeX2Kcs1Sly6k6O17UdBmx951Uh%2F3nxsgtjtKRaEQ3vZyDGGKExeyksuzwPcg1nQCKHxhbA1s6HtpJP4QLIH2NKHeed3uwG7jHB%2FT8CyTClscvJBjqkAdkBFtpOY0SpIb6tSxdG66jYMA5FTsX%2BOFT%2B13t8WtMzupKRmVFoZjNPQ5zCbrmUaeVKS0xqogyPfwj5BQqGLUDA206xBHl9QJnZnql0yxiJ2F2MdWy2gCNWC8mu3swV4R%2BGON68y5BOi8jN9czZRwizjNR6nGNphs9tvWzGPEhF2K4Tgz6rl0zuZae3f3xb4VgM997QKjZVKnp6BnN555jSpJ%2FK&X-Amz-Signature=f8e5fcf664f3726532219db505ae3949ed48a1e9935bf794a93e0742f6957937&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

