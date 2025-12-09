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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZO6OBYY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T001732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm07k%2Fs0WHnvnb8vZ2glrtuBRC2zhv816usvqOF68UJQIhAN%2Bq9OlCeztzBPuiVxi7p22NjhKMFYQSWNY4SHAfwSfbKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUFHpdmESY4Bp72voq3ANwPEpzYBXI5AxveNeXMS5t81w%2FrkYHMHLKIsVdywXkEbMjNjddiK3x471UqZ3TKWH7qday1SmueMGZ3pldr1Qw0hPFKaZcmHhQlwKuF%2BgQ4wndqJX350UHGgJjvoYsz4F8cx99S9H5mDWqjTcoa1xbkWNLgTtrQV9kcJ7Ra3Ov5pTYP0y1XXfjs1ufLOfAMl5p%2BrTii2sp9EKJrXuwgx1JEUjtSEFPWtgDOtqUvyPNQ9%2BII75IPId%2BPTN8pVUw9au5durCqWaaoynqlq7%2FH7W%2FIYOEL%2FEIpUN2uPCK41z0JNwIaC7BvtplE7UnRU%2FGZ8s5exKMpUERbWcV1w4lo3AafOcDiiaQN%2FT%2Fc%2FT8FGYswFR3IyXijg2b7VE3u276XKgcpQPYPv5YuwopMc7waWbFpVJBUrWbgH2tvHpzANcK5ZS6UjudZ3ihsHVlfFfxxXtlL8mD588nKp5giw%2B52wI2liEX7LRacWVtc5YSxw3N4xDbmLUlJhufO9QGNBsXGM3VHUeSPQerjfyNDaVOrD7RTDhceVQfPGaGLPk0FxLt7lz5xWXyZ78ywE%2F3nKzeMU%2FObITafm1Fg%2FY%2BPMtf8NFC7oHskepRtlWnVnjWjcqhn484ZbRkaMKWU26FYTCow93JBjqkAf0bWmZiINGLp70lSt1i%2FFKMFujALxu0ADy70h8VFPdqjvjm3NU4Q35%2Fb6NTLJf6lMiTpatay3pjP%2B1BqxtuVMyzltdZ1jApHtPbttxUX8pc54cJ7JS278kiM3UbYznXUZe%2FEVOOfnqtOIMKEgO30zjKaVkU%2FlVVoZwlyRVH8a6LcZgPfoRPk7C%2BNGz9v%2F9SE2%2Bzn3%2FC9wXGIRo1PiUmdrpv73z1&X-Amz-Signature=ed4bbe42d0217631901fca969d0f297f8312088ccc7e3d9736f05b686eb0a918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRMM2HLV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T001730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzPXibHS%2F29NdnOujnQmpp807fM2%2BSEJTNQyszIhLEwAiAMuzOc9IBFeb4A4e16TWIYzCwgudlcaOU6H0I0G%2BHonyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5ML0hAL6lzfF8HBZKtwDArxcs5KwZAx8F1SLHihhcS5Zl6nTFpngx62i3q2cP0R0TE7rVkZdF8yyqQxDCbuW2fS%2BBV3NjP9p6oa4AKfbPnixwabNdLD%2BA3binqgv3ZdsRbd%2FfEtxH5gu4uF5%2BGQUSKXLY1APKgjL73FAVKhHHe%2B4L4nL0arT4ODCLjmGhPjQ2JpCqdtV9Jre9AlmlT3jSrFJx4EfcSEFj1sCOCA6xP24ounOw9yV%2BPQYO%2FNagsrmrGPlfCfk8v1P4PhqIMAmHUKD7jxkr6Q6J5hRxXIaU8%2FXufoIoCUXx65eVCaFPO0qhXkwLZCCtQTIipD5LjFWd0KxJrXY9%2B31wWpTJA%2BHes0HHYKyFoQ6pYeyPXhcPpRR9JgW7lsITswpfmUVhXhPOx6eJljAvQg1CQA6BsWcm1HHtq8smNfJKq3qcDWwB6%2BQpYgQSU7gk4PwLFVv00ZDtVTsqWNQ5YvUygyJ%2BoKuadcvJZ4S5JkFZNlaIKjPPJRYq67S2QwfMavP4eaYpJx81X01j49JysUeCBGcpN2aQL1NeYRTaC%2FM1LdhZoW7qA%2FK0Dw64ObzCxDdY5ghXzGjstB%2BEHb1mWZljBx8zYLsk6%2Fm9X%2FJkY%2Bl71kD2xma1hm%2BTEAi2eV9Hwo%2FmnEwh8PdyQY6pgH2uROEonH%2FPQ3V7VD2lLB%2FZ7wTFPVC%2Bj3A0%2FWkT7rrsesEuwdX2utrUbvOtHFXjCCXMJUCPtpkETDYHxOQf9TmH2%2FE3Ifq3L6rYhr%2B7FlE4rFiddSbWObj52qKd7tjcIO%2FqcIavUsyrgqnKqGEdLD9ST5sPPFOBd6mNceRyrfPzGLm%2FQpF2fOxaO0J9%2B106433HYmLcKhCbYzR2FJQ6BJT3LlGvLpg&X-Amz-Signature=b22a96e060568bff953a71bb208d7c839277ae6c581c87bf29940632d917cedd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

