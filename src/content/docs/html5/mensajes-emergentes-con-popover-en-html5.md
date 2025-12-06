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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FRUM4VS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjdDcoBUk3dJeCPbcf8pmoRe7wCjJ39Be%2FANukV5FVUAiEAn%2FjKCA726CM6eBaWTJcV9uhSADmcZyDlduP%2FJ0qzKDMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJKAjQ5Lga9daWmJGyrcA6K4MvSYhzk9yabtRff6IpRv22QMP%2BP590dtlWWmkDa4SJnMR1MB4iBBkmm%2F2rZNQd7p%2FjHH7ojBdf%2BienQia0obyqCujTl4GmGiiu1d85qf3xJ%2FZ7SC8OaidlTpwxv4UmVscTblynLHpcHzcjzDdbKqTwn2SKYwXRIV2M1M54WtMFJA5%2B2fdTta5pU6EgGxbRjU4YKEIAWCwSZydn4lGe0F4PW7ENqu3i%2Be509SNS4NBaWGrBNzGBRJ1m6I8%2FnEgcpPRlTOVYGGgX6vmN7jS2076gNWIHkYu6Q4o9MCz2NnrCaRnt4Ymre8vqrX3EmbWQ%2B5QAmrSu18CbXemCSDF%2FzS5dYaxHk3jW28Bw9jM05DYRwyRzuZ1IAghZU1S%2B4LDTf3RKop%2FpV3Pqnm8yH6%2F8BoeMdhEwFq5Dpihey6aOw4QGlfBnutn%2BJnhvUwEYWMpFxcLK71FNutli0dYF%2B7lUp5J4ImFA3QI%2FU9d0LqyF2w%2FO7%2FAqokKi5o%2FzyJE7kBW7kC%2FeV1t%2BTb5hzcqcJhy3Rwj4AMfuIxuHnqxn9mW9fm7Criwnb7MniHjwsIdORLhvXAuN7bA4fphVSKJN5ITlk6toQ4MdXx55n854J6JDgQIguf4wQvOK9MefIYMLbrz8kGOqUBkKzy1OFyQZ7Wgf%2BIUlJeYoCpeBAU%2FHmRasLaifflGNUQszpfrfBizMPnFRRNPeJElls%2Bu3886Ub2NWm%2FT2%2FRE0sBdM3B7BXHfZsVlqdDAMjipnPw1qnWWsbfHc3%2FcK3ishdGa9fFhUgONTE33xAFqo5hlbr7LdcKfEDZ6lsc9wkKu%2Fg1%2FL%2B2rl8W7xaaqUAlR4sX1%2FjKNtC673MIHoTd2Gdb8%2B5T&X-Amz-Signature=9b7ca8bc30987f28a8620caf00064ac667eb40f371c66317ac2a1cbf584510d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PCTAJU3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxhfRPyDY7eMjKopCCGkIJIHM4V2COdcxUeQDfHGthGQIhAJQ1UQd0LlcgiPo3XBZbAZenLZ93dt3i8PQitCuzweqdKv8DCHIQABoMNjM3NDIzMTgzODA1IgzjbsYOhUTcbyoXxrUq3AM3PSEVQ%2FnVQHrPwjrJRcVWuXuvz6jZLbVDkulvJ4rnQPBzeJ2En5N5lWAbSVUCAcIRfL1Ku5VQQ%2FdD0uFh0MCd66pMl%2BDJNeA5rWMFer3aFqswzfr%2BayoGdrd43N1%2BdHhxMXYe0Oj6gnkn%2FRf1zbF925P%2FjfuKsUfd%2BBh8Adpi0eGNvxA0e%2BjLCX4iVF9ZwgcskHkSivt%2BEW2xaWJIrfCqx%2FOr8hwxYjVIv%2FmGNZF8DNuxA4ebK55I8kL4CVYScFgHr6CVF2LI2hxFdUZL6UKJMRcYh1cDp%2BTmfbeNiGwa1A4A1yXEW0pnd2N29lBnS2IKfApnvrPaErHzzp1ACzy9gKjUjjL6HAN09Wsn%2FpVDaC3fJiYxlLuZbd65UJH2yNxzlXOx7ZBThuKXvYqvDMy9vTsyNGn4YvOFfc6M0%2BXjQ55DfwjKA0QQMZoxjGXEjEXLdulfqTH%2BaEtt2SJ6abFYWZWxB5e7tAAIGyJ3R4odFNOQgYTvPEhXksGf1chdjFaU7MFXrWF1KL6w2HZyTnxg3HVvK6AYiYnAUYveTVm5WrWw3K%2FPQBBRuy8%2FZe2%2Bor0sYDd9ij50B07nMxvbEENRzapXhCrIGycJSUp8xM9VqhqJNYAMhar%2FK1V7ZTCR68%2FJBjqkAQEHuvzV5%2FrpYcIS%2Fq816MxIPjB1qB3gl8uEd9pn9ZPSItZxrnMEccc%2FSI61%2B7UbQ45%2BXyAiU%2B8HyyKatjxiRQltxavXllanDV55ZjLez%2BaN4qCEdeYvih0fffLRGFgT7ydxWjR0NcvCUjcCFXXUshCa9f%2BshVq%2F8EK70gGrAN6cWns3xxXqmrwTJ%2BjkXxw7Hn7WcY%2FoU3CTqmbNB67LYwcBumFI&X-Amz-Signature=14ddd0ad5e17bcae2790e3475b9067f3e441fc17eeb413d576528185fb6a07a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

