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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624LDD7ZY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T203646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2Ffcu0cyCBX31%2BOuQUVdynuhtt7G9loiDdrMUZGbAVjAiEA8Cfilq%2BerVFDyX%2BBwwfSkrIxNB7bDdRyX7tMXxfhnWwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCmv2H0kYLaOXgL8ircA%2BEFJLFk7%2BkxX1AvYHJwV2ic5OOHtlIAG677N7j3H76fcVXtoE6trsNOmxOaXZZw7xgqvFWulTKiGHXAz%2B1uU7im0NAmJyVVmWC%2BBEvzThF6Hq2MyQSpHXcVmImWb7D2zVBItnuBAZHn5YhzEc%2Bej%2B0GENKK7nNTCtdbf772BAUaYy0Lw9%2Fi9VmS9hrkDDbPIpMic7R%2FbzkjlsO3JmBEaQNr5K5aXgvtnLEdCYzEPmBxZDI0fHMFifG2jo9sgNJrAXvO%2BzPl3KUpLP3M4derLQkrffQ5sbNrLlHoa92Evc2nA6x3fXI9wVo77%2BDbhhDfqGwAr%2B7XxOQ4S0n5x2ct%2BDrrUs5CiDLsmoPVOqHgw8ycB%2FaNkRmg2QUUabBG1BQWl8mRN09s%2FmqBtjrf4AMpzApLSVUnXXe14IkIoLOvzU7snaYcHEgqc5EsL%2FDlCF1j1dwy0kQhId%2F%2B1Iy1YbxQfbFsjvO%2BcZoWrU%2BIn636brWjeI7X7eBtsNxZshdMfHyCLfPOcnH8%2FFj2JOdeG6SPvjU2pcSoe7n6PJrB0%2FM67eShnMFCNNgBHr6lvbVBw0k5wdOOLk%2BDRynb8e69HqX%2F%2FNY88Qpu31GKrIj4nT3fEf3maI3K7KA%2BfIXelYPFMPLG18kGOqUBaDcVzU6ga7sDEQzX70dxTjbRVJ0fw6Cw61lXc4L9tUu5%2BRykEh0M1cEFveceMvRNmjmVdRmF7GDRehXahNJBTG0k8uV0xZKX3u1vJyaB6xMGuJ0xCNyX2YrlluiysgKrme5ExP97LPW0lUfPyRY28SIZsH2JOUFCjrosmnO0RuzACkUn5wjFr92bLmtcFm7bPFF8qbCnUEZdBVYVbuT%2BwU8JJUx5&X-Amz-Signature=2ef923dab7a019396b167c7f6f97657cb2b5f6ae968666f48f52a8ab2ea6fab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGZGBLEE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T203646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIFkHnSF3lPtQZlQ4WNM6MtfDv2clrU2ug3HGW10n4NQIhALS9OmHI2V0eaCZp3vOzQBj9zFYRyDa7lydwAKFyEAxYKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyrZlr%2BpuKaPEQ7NUq3AOhjJKw60nUQURkbPVd30bPjzQfblE97VGbWiWLor%2BKi%2BIDNexIbLGp0N8dT21SDBLt5KlVSy7OniKrmd%2BHJI8BbZKtgphdYpqi6bZkXVmu5QS0KEpI884POtz4tcv6PvSQf1UWtesgha7FVvtLrrYTfX9AQlj036IKZJ6pUzDlcf%2F4Qc22ALkfLp7wAWhFXecsomdnX8ibUCRZgPZA2Ny6mdFCH14ZmgUi2yNXX8XQht488O%2BvKD8HLpgZ%2BCppDmwCLH%2BdK2y7sj%2FDHfMPCzA4A0G9zHOs58zfWwaZt2anzjPUaeWUA29WCjYbdDW0xwF1PHWENuXhl5wW9RzXehBk3ezLAoToCsDTycj1GQL4lWAqYzLcEUI6lk%2Fx3E2Z2bRsi8x7bMegqzUGsh9NAdZb6o0EDo3fV8hwjKgob9ylM%2FOZh4%2Bne%2FBi1N7KHjKlLmkyA6LGfpmYlWMNOa29EbSrD0OsOHbMJQgJDS45btuoX0nWe1P%2BB6Gd52Xx%2BkywKz%2FRPYGpMGIO%2F4lyPA%2FUBK9RiN3mxVYCBnalUxvf22zGwUefFLre3CdzLeg8twEjlEfaydmNHsTbhy0biiO2%2FkiDrlJeFZKX%2B3BKCAXiQhpZKpEP9j3nQphIHe7%2BwTDQx9fJBjqkAQq6SVNaGM8GV7ZXWZ1AUVsmelktugPApHvAJtMslI8rSBk7buHILCPb6S%2ByiSH0aeZxy5A6CyyEhiUYqZKg1tMgGyCOrLdTZ1kyCER3MvMQ15gnzRZR9HLECH9uaYSmta%2FSiErehavDM2mke3zc0w0c7JCaKa88J5zUIId39mfG2lnEbEQdXCUdN9onZVQQTkJQRgYbk1UyNTkpL5cySjxLUxQU&X-Amz-Signature=1ca5e1e5518f06b9da5829896aa22a1f49cef738bebb4ad65ad199a390687558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

