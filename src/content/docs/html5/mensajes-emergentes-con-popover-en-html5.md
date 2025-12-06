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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VYPOBYJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T142835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXVHk8zrjaXqAM282A36C20VywkJ73x%2FdGyYetKIpjswIgC41KMx1j%2F8Q%2B2hULmHNeFsvbG2x6Db2Zl01autk2dQgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGK1ZxTofCNkxKnd7ircA10Nv4vPZ75XsjkrbjfbfcDCeO9Kp7ckvIj8f7z2kp3fzAkD5oAXa6UuQVljq5406r8sIp6k8yw8L%2BjXcQHflygNls1230g5KnqCs8EG7N8%2FTScpzJkUTZWmoanhzBmhLYy0vSjFESaRCzsOo1GmpqJRN5vvF%2FrA0b5EQm8YbEIPjVrsoSILSStsvW8QQZOeNloLpTJbRtTNLhMvak035xBS%2FUp%2FswPyjeqD6XLBstDGn8hc2WRjDFA8pIssmfyOxEGpANsJZYIleYJXh%2FNvEto8cQ2fB1Gt01BmUkq0ECTQL6F%2BlzfKTFmegqzDh1EI8uXDX5Np12s6BBYMnsbG8sm6keBzoWxgC%2BY92DrsL6SGq34dnMXfkuIZgpphrQjlpms1w6IKvt5uemqPTe5P6nxHGY0SpQSQcoWaRhtxo%2B06bteerfcYA9qB9QOvKy258FmpT%2F7bGYjLyApM5zs%2FtUnBo4JtSe0CtCqNBUMWCnmcB8s7Sx2srGdNukFeUJ4bcaaUAl3lt67OE8p4HdgXZ%2BYwctuXzLoUu7%2F013ua9daiPJiVcgwcWNXczlkpljY%2BmIuthbO1HqC9gA%2FokcGK3Kh6lGbr1szNkjD5ooBPdwyo4YNXnVbz4%2BkyrTFWMNCm0MkGOqUBkQfumA8t1ixriBHCO2fVXvMrc24%2Bq9UL8gtujFuZqja09ZgBKvi9%2FnOSp4uKQJgiUJHJMTQzQPbStofVHEu2kgbsNNrGbTk9V%2BJJbZqU7iEVCZEZILfzXjM3YTHZCYUguPlAlSi2KDiBM4%2B4%2FjmdvSqq%2FomooGbIZy1gRld7uz6zp5ib8tnGg0rUFpVqxOdFq8AS4EbdhP1KjLmITsfmCtchbxjW&X-Amz-Signature=9c840deaf28805eface4e588a6f6169ba2896bcaba8dfe44c5f476609af960c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M44TBHP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T142834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHR6B9Nft6Vm5P%2BYLAsVMZQqAslJT9pZ5Jmte5X510BAiEA2pvFB2EVtwtCQrdtMIw3AREhWh9KrFBGWg4VoPC2YjUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOOsdQyta%2FJpUJM%2BLyrcA%2BChE95eX%2B%2Bcu8%2Fu4bfrpQlW%2B%2BPeRwFnhD%2F32Rc2cXVnTGK5W3XRELS3%2FgnR8v4fRdX5IpFpi3XLLvH31DHdRZrqVRcUNxDjrvnuzrsZT9wh%2FNILIA5HrdokF%2BaoTnLqm1Pb84iMnG3Qw9Rp%2BLwF0PkZPgJDsluVlE2p0kaGBIZMoaTGfjb7e%2FImbo9D%2FsbU6nNXV%2FVPxawegW%2BuZ25gDz45mcM8cCRFIlElCQwwZmltUUyRGUVgfnDke0fqxvrXWrz66vM3gvsDXNRHpeLwGIAF0tzcFHyu7Rp5JdNOlRdUyEinvItsTC66HruUS1s50%2F6RE3YGLiuxGtPvWH7ZhZ31nMp4RwdzfjN6laIGS2fP32xaG2Varm08tjBJgDRmcL5IzhVv6vQi8rhDN2zOs4CC143kWObHtEhWYvygjgkwG%2BmjLVoiR6fsEv6v4kkMgki4tRqGUjP2%2BzUubyQeVHPryhGNA8W2EOtALvWSsj2B8vgCw%2BohKV7f6I3%2B%2Bu5Gv1Z63pI0mkKYFajxsz75vddXjOdPqXNxPpursxGh0M1Hu4HjFwfRTUx9QWdiHSI%2BBA%2Fwg95tU%2BFaxEf4TyboWB8J6WeAEz%2BLd4J8f5EO5NWQKjNypUHACCT7Pz0UMKGm0MkGOqUBTevBPMxwrSGT%2FU6tMAzAzI4IIAkh%2FPNyZY2Bp80jQjp5TQpz3eP%2Bdw1uDVhqeQVt9kLSQlvAILSe%2B4QkO1RADegZpQjZpqpP3SpzqaPX4%2FywMxxHT%2BEqaijU8PSI6LoqijFBjG7dFUgvGqdzccI%2Beyg%2Fw7m3ZySul17Vlr%2B4MQLlMkjFyDutObHOg3MY47TRNF8YlzlUHucsOAYqDsvxPwWf7djQ&X-Amz-Signature=63e39c5a6d739bb1e11c746d9fee887b89c091589cf8f81fe693bde49ac03a5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

