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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPMLADBC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T072218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUGxB8Yc1Goiqpf5H69OJq8Et1tGR9nWvSDk3FtBRO%2BAiBlVzxysoQid%2F6W6N52mRct%2BzuGYlWHDLB%2FX2UjCElrGir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMItohemhgGFHvpb4pKtwD6IF5P53%2FjvzETUYE1nlt2xOwpBVb1Ur3I57zR1c3FJwovn0c5rhaOotd5Ypl8%2BALYvZ7qkaNJn95%2BVFiwdRk%2BbEsOS08XIboe5lTlInhf7SW7r4Z1VIENoQ80nHyYCmDGhfs145RcVg6vOVrAXPtU6v1kunxYEaiB7MBG666MnsRmFOPN5KdsKE3F4C5fY83jA2Nsvujcnxf7%2FYMx6Yqse1ujJuF4iP3ERyWykLz6O3sfDJu%2FYDojvnTmsGqFDAMliFpNzW0xtXjcraT050ZfCB%2FQAykwGc%2FZpSch3o0gNFt1UCRJ9FGLj0WTdFCjRSIWa1G%2F6J5LjBuqPxFQZ67X8mwwQDwth%2BePC%2Fq2N0cg1o%2FpGpLZlbngI44bwTQOEehHmndwj4AdJ9wF6yyPM4YYRspMZoeFJh04iREWVDWSFqZPedJFGpZ2VRnFciQLLkud7NbMOGBG1n9uzJTCd%2B%2FZcWMXHQBKQxC19U%2BDvaIpXofxyIGxUMBBudfTZEKWHRxPA8VdVw8kG6AS0DZuRvDwKmsLZfb%2Btmem638Q5WIOPoUUMmnVKBprYPWFENJyl1pQ3D5%2Bw%2Bt%2B8D1vWntPgjFrk6cmvJFC9xuj8tb0LmC6hTjMz7PlYdJZWCTrsQwtbDJyQY6pgELlr1ob3IGlW0zcwUjhcaNrYPzfDTFtLmAxNmihwXlYBsgO1f4CZ4Mdq9uWFZtfhtoCKtOmy6hNzMSMbfQuAkuAKdguZ16XJ51dY6yL0BsuMo14mHpYpeek7BfqGokJyy2GQWsEB7l4FDYHeCOu2E1%2BSSWj5QpEIymh1funoJkO7Yn6VAxfIIPD5%2F2lNMBOafpDE1%2FaryIrXNBXEsdFlUJ3By7UGdV&X-Amz-Signature=d9f7144d72cc4990b97b85daf808b8dc7aac5427c8441ad146c6e2b93e644cb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRB6FQ7M%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T072218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRKNEFLFZEzofWw4QhMOdCf2JYabKDFolXads52S7liAiAf1G7x4wGVw8irokwQhdZWKQnmjuqOHZBOwxexXbqrJCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMd8V6fkTke4R28RipKtwD8gQx4kCaC%2FDq%2FfhDINsXk4G4oQj7HwIBtVzW9MSHtIftaezu6uB7PsZU3ftUuSPvaMttZiK51xe3NPuBoLxmH0Lh3xRnhUCPm8on8YRcbTVg3MX6mXVYEwqIVetNQ1XcYelv8T42UcTFNymZFY0gHj%2B%2ByckbDut%2F4aaVg1CoL8nQABCAY58CMx9k0XE%2FgqcAqJLlFpg5168oXTJNqqdvQwVh3RzateqvBj4g%2FCOV2rUGpmaFgzOqa%2FeaKeiL6JVMQfoDUGPEv7L7KKWx9WIr71XUqwdLAEMYIWCUhiqf5vaP2fB5y8sugoKiUGYIUWOBe9FvdGBSLon7%2Bc2tHFppToQ5pGqsLcKbgj%2B2Rmj2Gl%2BRdBbYNe4YabxhMNY8rLlsGJuv1AaLI7aY7P1I28msa9KxNFKsa%2BMFaohEP6pt49zUNJPJc2JUD9mRJ5mhtle5oeDRVdwB%2B2GWr0YQMFoFQnDu7v%2BrVy44%2FSB9F2rRWY0BQG0p7Es05xNq%2BQlEOV9MBGr%2BHQd%2Fg%2Fxkpkh24EK0GPMWo0OSx0EuaPxUjfntuRu%2BqUH6Ml5M7f687YVLINUW%2FouVVjPYl4jmemtjwzw3xgqHyAwyXbcVabXTm0WdzEN7yqouhMfgwa%2BOvxIw0KvJyQY6pgGIc4NKFWPGWHCZJpWAJD0AW5o8mu56yeTIb%2FpuTzEzgPM6oWPGccYAUt9BlrX6AXD6GI0Vgi4IdCfP6SCQcJy8%2F6nwpltmUFGIXmH5yaxBFKHVDFaXv3OTYP2tLHCGTJDU3k5hGcUkhXCB8EnXFk4l0FhsmgEUpRMUAd30b9qq5DFJ8R1OY%2B%2BoOY%2BiJgxqMnZq2ru6CCSPwJtcXXGv0N9wpwvNWGoM&X-Amz-Signature=28f839ee1aa2e2b03402a93f0113c0b1dd3c5de70d4ae1b4f793d49e5eea2052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

