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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P4RKICF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T030550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAC4gsvmJC5EYGLqXvdsyj9UOFYmTfg%2BtznM31NBL46QAiEAtZQVSztXo362m1Qj%2FcWohVzOakj7uDcF%2BV1JX6zxgnEq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDGxMH0zOPf2SURXHiCrcA6ESysEH5zOh6Ksi%2BmSXYMtNOiusgCzlTrqFm7bVFhVCjQ5JvqbB0wXS8hhZ7PnycUnt1yXMc3TG7yI2jCaXM0bOJxpPbjbq4pey68aIHw3w22o83PonDPpLODq%2Bh0f3yUF3cGN6N7BxPP%2FTX07c1jPCqAmFgcpg3Tvna33IIto1lobcZ4NmFDXNwVFAwjxmaVxHzP%2FSLjl4cL7Ywg9JiQ%2B4oonIWxSAJG98RiovVeWVZ4aRY92xdZt%2FfgJVT1kTxLl2Gx4%2FAjetk5Brs3hl22PqcvloyuLO3wPJOofkQjwjec%2BcWCPogtYfKI8C4h4m161q0pkgVNUut1jyP6MOvGVwJoX1859T7Q55IcAgSGadUCH2GRqW%2FCoxeRDMXy7ARMW0ZygKniK6Tiod61EDcXrYkXa%2BMhOilyY6aXNRG40%2BHHvzD8adtLLlmsD%2FO1hbJllp4pmpQNNXtLzww1j3l3OcuMPfxABoVaaEajxpQ%2FAWErwXUHq26GwGfb7grwlPVhXtZgsIKjFFcInvf5VzqqZIzpK4BT%2FEoKjKzNvqr1n6uVqq9rSbeqwY8v3eG7ywstcj5vp29WR3Cdt8F%2BEsBngJ5S0XEEwBZHE%2Fbj8kCTr7pmFN9LchkGL74CEnMO%2BMyMkGOqUBLfrqZzXvBpA37hcWIgaI2oy7%2BzQerUMNott2NZ36F2hTRApbW4nuMi%2FD%2B9pkMmB4V3qbWSszBmA2575qp%2BsLwMB1jM5Qb%2FmKeYSOfFalYps4APYZaSdK689WDRNECdm%2Buh88MjgHEU5T42fkcQn%2FEAD3FtNnk42O%2BjQ4oOptwtyMv8n%2F%2BJc%2FhhfDxkbMWL1mW3c4Vnew6sbKkE8ppgU%2B4Pp3QQmz&X-Amz-Signature=a9ae58166389307ee14f394d76ea1953f87a8a9f07b3bd1277045451e876efd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XZ2LTFQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T030548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMjRgsQAYU2h0MmuQ0rU233vlNAerS9XYBcF0HfvbsuAiEA97yNGAPalhhx3FcCMoQx0T0BWaSKK1uxIhA8NChhSHoq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBvmoFp7UAbRQfGXYircAwmU8%2Bhx81LWlm%2F0VUzjQYD6b%2FBfnHPdDe%2BEx4NZgncx5FWVGL9UbSyE1sIaiNpXcJDeCDMk3ZVlIj%2BwqJXZ6I%2B2edOPgh2I0vWbeFyRVJ3LSMgwRdF8OLMX8lGuKh%2FsUYGmWS85fcSge465q1LIr4vG4tC4QywtRXaHTbDfsereIjmwn9i0a4aMyPrZtqQHSgWj6oAs6qXcR6yMKQwTjTixVfKaSLfXhVwRpmZla1r2gIUo5pBOp4GAiqPeN38tVQXpBUhkXJrwl4VxgPhphpKXHyk7JvNbh1PW65EB6kk2s%2F0i3WfRVDnVeyeZeltZffBZlm3ry6zAv%2BOoM654OgJrzYqqQIV5c2jzjXEa8n6p0BBRDyqSY%2B8zCf2pj7zBLBp61pxVZ49tT%2FrneHtBrXo2U9CYAYLApV3aWuTzdR2FKi%2Bk6anO1TQisPEcluCHXIfymRAwJ6zF87FaYCp77HPT6sl5DsanfGBssANzpeZu0sPptWL%2Fxa1%2ByNrFyiOdNYDammBIsAVUTlGkl508rAuK4GGa2YTO8VaWXOyrL74Bu%2FMP%2BouCaNk%2Fe8XGT7N7HOvmRirfI%2BxByGYikCdthFz7hmVSqJYwJfJyzW%2BIWALGBo%2FdEfmpEWsZJ6QOMPeLyMkGOqUBjSQzp71Eqh5d9pB07QOGaBeG2KflGOno1v7XaspEbsP4%2BiDZc0mZGbZucKTU9cr6wz2JawWf7CtXUDLhwUWO4KlYozMO28X2GCLvcwk9WIjfoYfHnNroIz28JsATa2I%2BKz%2FdsSvKAWE%2FusWddATuHtv%2FZw3ylvxTnGuLCO5ue1rWXgFQP5pOJdYH16QwZWneBjKpE%2FHHCCCf3EDXfkj41wu%2BgY6k&X-Amz-Signature=ecf2f5ff75156887b0aa86bf50e8c587cdae0de47e2c5d7b9d0ef880ed25fe52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

