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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M2EWPQW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhQknnVKRanHuNZJP8VZ%2Bjj%2B8jEvv1MA3fSlsrnhQcbAiEAqZajtyP4U0aIkOU98yyIUUkLAwzZHxbF8YweI746S1Mq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKjNxrPvIuqzC9AEWSrcAybg2psbtALcsXt3nkkiUo7WSB08dn2R%2B1XUYr8fY%2B6wQIFzj%2BlXLa5M4eoNrKdJt4qbL7zWcpXiP%2FtWdAumU4ezGHo%2BpwoxsNMgxz%2BxzmI0M8kRP2PjIXQY3sT2kztzqRTUdXSyaHVgLunifwatnpUFemRHx%2BR1awHmOFFA3%2F6qIeIii6JPdOd%2BJGcMk5C4dTph2SXl09vvPnUvYNkMK3dzHXBFYVOZMTQ9DitZtF8Pl86UmFXS7BTUg%2B%2F2gjr4SNm0uCu55fcX2UE6LlfaRfOZ7YUaPqzB%2Be5i8cqDvjMtFPFKRGw9x79AonC6T0HeBMALg%2FMmI4jupOy6vY%2BOvf91h%2BcSKtBkLRomP09bzL8BKmKgSz%2FogD%2FFq6eAxRsd4DzXipZxHzz1Bd8W87hXGFuum0QftpduEFnDvgDrhNeprvSiLnHvza4mFBCqT25xlnSz6wmWw9XBBrKP3e5YXSAc8cTfLJ0AQE7FevJ9IJ4S0dsCeKRjtSUOIRlO3SUs9le4hUcS0gYwhvLc39Jgyfj5IFYU2Y4xLJ4jidxOaaGV172AhaQ1q82Gdq2HWwKb0wIy4IA2iYdMVWUfsh%2FJOBTdRYDYsZi14KwZkQ0vA7daOEZzvLrqTCPPPSxDMMWm0MkGOqUBF5c%2FOZC1gUocRmCrtUlpoo%2FCoupqR4cFGxPStMMoXBC1uvRDtf7L7%2F11GuSZI9HY7gbbjq8hwlG7RHV5neXMoVe3cB6HZ7zZPZDhRDFswIgsK9BN8uDmRu3kUqE9dxf1KT0rbOC2r2XnaGf%2FGULmqCqYgqbXipIxgmSSdtdWIAkN6UXcBnuFhspkz397290sxjge0GMfeoxt8cvDpHTxfj%2Bo0FNN&X-Amz-Signature=8afc17a0bd9cac92f64f017bb5d68d6c0c345284cca48fabd8d26b4597aaff1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI4O7A2G%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHI3J7kj1N2%2BPyHi5QoiAlsFEjfCAtM96uokYO6P8jBJAiEA%2B3%2FE5JUlsK8BSQqMj1HIzvs5x6eKXYo%2BrDwlOwznYTUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFa3cXW3b98dXFHn6SrcA2Xe79%2FOdG46D%2FIN2p04T01BzqHbZ47vHPlDIPExLcKVQ%2Fls8vWmQTgypVbhT4vPedWI19ZeT0yrm6LnZQXT9w%2BFt1CLuCt2kNRm4IqF6rdGpezzH1P2AFpXi2FR49qxq3CNTbip1jpW7pO82a2P00Ottombl8rizv0FZwH%2Baidegx0u%2Bv%2BexG7vyP7s3mz%2BHHyCQDdjl%2BImkuShzpYbHQxwO9EfGTb09P5GM3tG%2FiZJUNFpgqxXs6tCVl2%2FtLgGLF1z%2FkblGJV62W%2FhaipfEJmu2uKhfGL%2BDGWpu0lbqV1Xa8EzsqvGaU5hardep%2FEjOvy%2Fsoe%2FjVg%2BVSSZWXelE6eWQ%2F17O8L%2B4DHWPZvxRmKNnHHdGEGtL1r9URDImBgksTCbQcF04qSTtlEcfGIt%2FsvDFlvUAYPazfGwB3nzOZCjs3cvnEfSISSN%2FBJwqT7gT3xYMOkAFwhYxXyzaSCsuiFV1TQ6ojMfBlJsxrUWb7xt4%2FIX6bElfdKHZfzhCylLOAjCEXbKco0%2BqeWlV74TtuZ8XAY5KobyAsE7IgXrOUz3LnBfRx%2BH8S9V1STbYZj02IykEIhL7vUQ%2FaqFGdfCZIzd2h39DSUu1UKDHT%2F2WBgIMFzMOM7ml%2F%2Fpoe4IMJ%2Bm0MkGOqUBe%2FaxPk09N5lNjjXq%2FM%2BncSfHk6MnwMpCHYrlI39zjYZLAuxA1IypCjC5apeD3vNpBqp784yLslDcKoD21JBilW%2B3vqq3cpzURZn4fNhizpl%2FugYQC%2BuztDACKlKjScv%2Bc8nZn6dL7kbGGCdzuvazNNtz8DiKbp7w7Qq2R5nkVGaBXiEFHLeMT7WEP4d5JMezg%2BPL38mCadAtMgrOdGEBwdhb5Pz%2F&X-Amz-Signature=c653c5cdd3951c78fbd86aeb23d478a8efd1aafd666b0c066f3c31b99ae424c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

