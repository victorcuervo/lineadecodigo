---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OKULBUZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIGAfm9EEtC0pOWfb19UN0JBvkJJmbf7z8E1zkrWdogKVAiEA2MyAscagflNB8ps3oUDgL3Ab6OrMxg0sHMUAq%2FSZXfAq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDA%2BD%2FSTP4U4GsxHh3CrcA9Kil47vDkTW%2BtnI3BJPuBswvHeSH5bLHCkbMbjwvCUdp0yVa%2Bdk1jsqH62pQluRUipPZF1BplAsMOpQK2%2BMh4zbEU7dmPwym%2BfowJ5MU1vY6tAvDh%2BHPIZIdOqcjSnQjYVYYR8livBs1cP4xIf%2Bs4C0w68K56kmJoeL7xNACVcA5csEfYwhvuG5FPW3KhDjG2%2FWr313pnC43LVeQQ0VgInQUAQNKHio0lQgXD0iuGS0eyz7ngnDdmZ42JuBedCRK8SJZosX3Dt4KFx6%2F%2FjolXB%2BnsUMQ%2FooZZRJtBouemxlCoTWeel4cU7k1MxwgDSOgUmFkbTOgrfOhHs%2BgAux6nB52jraRe%2BwXNi%2FKPNZ4qrLx63uJ6JfqQ49SKmW4wzSl5QvXeS264gGq2wN8IJBz%2Fx%2BeGj7Hr6O8hTuQxEvHRqFPAE2ZDIZcKNLqub%2FAAlrbvaRzc9cfzdtCvfIYwMDSX8ztKHgccDxexQM1XHFywfqimXdNwYQvJ6tcOvi2tutYZx7Jkjd%2F16Tb9oz%2BjnxjY59PlWGZ4pNcp0GfGsp4bwhnSwFW85GbholXLuSgHkpfLA2OmuuyLwOZBoD%2FGJ5GLs28PaBS07lxz0K%2B9G3MEVrVNErayqTt5KX%2BuOwMLmtxMkGOqUB8%2BnzBcPcmgcF3IxTs5aey3VBwa1ooJp301KFQ%2BMRNH4H%2BPafP35h0940O1CNz5L%2FyLym5YM7yzfz7oWy86%2FnR3ypNS6z98VUHsvOj9vi8l2TpjAABw9R4munahsTXP0QjrDKTkDXNPcdu1gtD4gtv8Effnv3JPIP1cAp3ec%2Bi9ld46imyswvaSrfJjA2O36Apn4GsiXtvKg7dlHeb0%2BiUKy8saus&X-Amz-Signature=c9a9e24b65b30e36c984744e0ed99a34b357f8214e948cacb4c571e70577b122&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDIO5PLL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDsaeUaI8MAdYybbSA46og92DUNBLUZp9ZKoetxHzXI5QIgBPxWT6J2uw%2BUI%2FFyIN2RvKlam2H8udJKhP%2FR3Er9%2BgIq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDBsD2z96sgogWTDxkSrcAzUXhzV%2FUs%2FMKRDDzchGB2YY%2FQ2yNydiiTwVOSKROOTw1rKRdqYn%2BITdLQQWkRU54YbF5E6n3ipY%2FDoohcvrVVIXnd6meorlE0DEQCnawwrBbhyJeg4twhUq9PX1CK1sB252po%2BEZeckaus0BNiv2mGY6I7rr3%2FeAhKEenQceaGyUeFgbR3m1K7q1LMiXUq61Tns9uuPgaq0VCCS5XhFvkIw3Dbr8YlS%2FFGq%2BMJAXxwD36fQTMhPnGWOJrnfS8AkT%2F0hAK4fFD5leatiulofuoQCOJN0Z5nduS8K%2BWMzhqH26sLWJt8VWIjU5IiNNGRittzWX4XV%2B%2F8CVE2yTBtEMB7ydNRdJW%2Fr5G7Q6HaYtlw1RetkNQHMMDvcT0Kke8bEPmAgc38WVCDm2aH2z0ml7%2BJ7kS2mrdrz7RgA51wq%2FFixh0kwqjanRHdTNDuFuKThmhyjxAUnCuZzZ730MwlDAM5Ghw7ChdgAh2%2BiuGN6EzPLh4Ty1NatbG5lKtQQB7KRB5BvvFnOanPEe5Bz5O%2FtqI4F7%2FYFv0FAdBGgzxbhYHqPG%2F2f%2Bn82JY46AOVaSODir7Yx%2FYcE8aXMLaXrYYxzUHVJbdfLEkt1GPQcazMgoGx2TUM6MS82%2B3PD4njIMMOwxMkGOqUBeIR154ann3z4esUneDUoXRqtCNq0oKp%2FGe2djBezPESefcgp06LZZyRncssvepNqCcTrPfL%2F06mg4%2BToMyQ1vdimXlaVngQM8xZX9zyrRMNEfVPSerf3egL4NBmsXw2CSwGLiv4nahbuwgYGQGKojdjIwIdeSEm5mGm5e3%2F7eoUA6HdEpqXryEaQFkxuZv9QhywUdrrCbbtDbdemvk7QyZpC9f1b&X-Amz-Signature=a21ac6a7e1fdd4a9af5188aa04b96180fd4f35bbae6f8fc16143bd73a82a6fef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

