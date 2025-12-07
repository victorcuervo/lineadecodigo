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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R5CSIO7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T055903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGx3AH%2B%2FNscrCqXw0v70UcVY7s1kpjzCVmFuOdvylHCsAiEAlsCfFen43G1aTr%2Ff0db27K9xt8bq3vgkWd95qfYYUlgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvzpjSbikF2uRqBzCrcAwpuZhM0Rgp%2BNyL84vh0MBxbH17yxII%2Bnf%2F7oXTRZ5Sp5NwkQ7%2BDQ3b0dya7ww%2BkGdssLmiAhFIGHXnT3DkerRDs4xvbRVSgBrgvRpQygiJOiE48cxNGj54xjUcSkayVrlnS2GIgSsBKgvRVqpmKBvlth8d9lr%2F4pWp4EP%2BBCIKAQul4QAt8WQBlpJu2Rv%2FXCr3YM2QDJeJkYn%2Fwz6cmlYmnbY7JeLStg3vM89SEUk%2FLyNgFpWllDI6suou%2BYKs0pGW%2BqUw1Clu%2FybrvlC4hLy0hNddVrQeSoiY0uzSk6%2FCn5pgGFHCldY6qqCheLCox15LMvMQLRs6wzFvAYDMb3s94qeL%2BXXxwYn6JTqJqYvXT0bCPkFyMOfG93XJV1AYr%2BWVINtAkDNDKZet9FHc2Qw629FGFIlsBT%2BpkbkkSnkUtt3ikwQU20Qe1QB%2FSP3PobCZEOxJFBc3AvQ4QJHAXqvgiqFGgEvKZzflWrxEtYlNv4lBWO0wX092%2FTs%2BDGz0Sf1z7oDJgCKPwfM3OQX9H8igYz3QYNf9aSGNO3Bpl7n4XMiN1SnLDHfNtW%2FT3bx4QFHSv3GtMJ3TsZCOfENOIS1%2FeNFuR0Eh8xIxe%2BFbpR%2F1fvBlvZjZBc9SbtDiJMPyc1MkGOqUBg5e9UZ9pn4Zs7BmL3xNMByG2FL1ELADoZNzNyi3XDU3wtIyTx5bDtKSdDqf1HjeNWfH%2BVq%2BYg3xH0Ua5%2FUZBZXE3FDKjVj0C57u4%2BCZi%2B4PSAoEq0NFNPoHljoSpEwbdaC%2F0nmMjMbuYvlYC29RWQ4PVFVA70hVPpZqodft%2FJxc%2FDYeSrCxOcXg48H2p%2BvPPLDaFngnAPzzmG1KOOlG0QBUFn3WE&X-Amz-Signature=729e14a14a857c61e2e81423a8eb4ba5a31cc7d8ecc422b9abf1d5266843ab33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VRSJ6E3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T055902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoHkuCSSVhUXJCD03ROZvj6pM2G1h%2BnKJTmqhSh9OgTgIhAPND2AiAm68012M6igiCfeLK8EsSfOmiYBSHOhcplcqKKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD8m0OTF6lIXQL6CAq3AOXriwx%2BNvDD5jrbNyiGj8JFt9kpczFbbUgjyz5m5kIiCasWMnobwJ9eeEg1L8F%2FHTPSG3ra%2Fq66JNOfPlwECkaCU7kpXRWAJDIOBMH%2FPKjts2FW1jP1GZluv32MEXmyzEHE2%2F1NtN81JTtcx0rLMKTMd64TIdV6rEkjvI1PaTRKr31Wyvb9hltoTr7Xc4%2F1ZukSM6eHaBYvp4AdXKhDdcC4aXCBi9%2BP3xR6luUKuphzqWDILUtt5syxK2FNqzgCF%2FQXS72MNKeJ4UfE9vAR%2Flt66OvMmwSOwZvduJDiwY%2FpEZEFNqTNmMA87FxMEl7%2FkwdszzbUS6Hu2VIOQdPTyKxh3YWzXe5HRZ%2BV%2F5j7xCuKrEfabUwDPdZ7vGOJCcpHCOy%2B7uRLs5zyVosW46JyohsPD7NxlaI0Z%2BFFErMh7bJqC%2B6IoyneJnKUjIUlE7pcNsR8djkSy74d7mmX3eGYpht6Y1HXZV%2BBvVQA2foDb1O8UdH6fmJpM4EjwlamBTSWYpl5sFIfoPo8xJ%2FKg%2BkOD7XVr5PuwBvROKYeC5qgHqQYLMTHhUHS2JcRUM%2BKPsjZ%2F86c5WMe7uIJ44IDwp%2FSMQKzkgUTVOQQ4IpwTJYV6yxflLMqGyQlDTXUqkb5jD0mdTJBjqkAR90xVD3YHJCWE3fU%2Ftx612kUlC%2FA%2FRPX%2FSQdLYZOAHB90UOlhXMFcxaFy%2BvKZFx5HqkQIQ1P8pZRtPlfDw5szHMYOy%2B5gQsTwpXId2kjuEI2C508z1Yvafc7syTa6fn%2FFggcT1rmq0x48ZM162nm2OkdLgBU3JT3TRD%2FQM1eBzjX9b6SFjkR6AL%2B3JXGk3Oc4RALG%2FSAC%2B8KsoShtnvh4BLpUFS&X-Amz-Signature=0cb37f74ec0e53f93a3245e049902daa06bcd18900526b503cd238a0bd6ebbbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

