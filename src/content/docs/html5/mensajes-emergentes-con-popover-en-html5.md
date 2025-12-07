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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKRFWJPH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T084550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpPrT9M3r9%2B4hqK1jYpsHgNEYjJyop8LQZUbSA85XjjAIhAOpV5nl71gO%2F0gT9kLf9kWs%2BHLkN4wwyliAvnq38dKTNKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BTK9JVzT34NhkUp8q3ANpZLO4Mj03PCdqX9yn8%2Bq9fxi433AZtxkEYZvNmY%2F0mtmW2FVqIMmfp2fhPYtmH%2Fs09ApXWqvuw8Zvmygi86SKiOmgp5Rv%2FNKrxDGnWEKZWeFVNV%2Bj3COfDHy1K%2B7KmA1ZpHp4yB%2FnLKQLlbstIrqrPcHRJCfMqnnd7y2kxQdxFuEfO3mKLFS3N%2BGTFre%2FJ3zhjxpzf%2BZX726H0F7MVznNaMcZ7YAyHJv3sLyMSw3Yx70YynlMA6kEaNyeTaP06KLUAxrfhw%2F0HrgFtGtO5DzX6cDzMZOZLivLRoXQqzicxYsQk4xnyfNgTVPBSqlbTYQrYknCZx3wK6FNriDDN6w5DxYVbloLadnTYzWV067R58UK9%2Fglz59GR5Ua74Q7NgAC8M7xk9VkCJFk0gshHK5Dw89pL1gqeLLrOKPdkF0A7NkzXfI21zuSi9%2Bjot6I1qFK%2BWmIvisY%2BAlXyC2fXcJyzDwS%2FMfNroYNlAFxWluVxJjjnQX2fLLA%2FdSll9%2BQ802g2uHTQ8PtDPkuGfo1Z64BP1ULpUx%2Bw9K7N82J8EIXSu4cYHIAaBzjrjXPp%2FNCgbCa2%2BJVJmFZIeL%2BRRhBpzuP0rjrPPRjb81MbrjXK2OGRdBftSNxL6UFJ%2Bh2QzDdm9TJBjqkAX8gMQRAGaEDHYQRyxsrTTQXnN3Ejk7eK7d90qKvNDETsbB%2F5%2FBEs02QrAx5kEkMhhI9BotCDw0ssPuBENxUGOqNkkm867nuITWbKOSPVXo9UewX0mw9ygT9FDmPuhOedjdkiE%2FYgWGkYbDrulEvvzBIVzSXo5T%2BBOQj%2B9E1t%2BWfAVmyIZNDo6ZjUwhPA%2Ftk6gwkWvb8XsSyZHhFbgtAWEeHa9ax&X-Amz-Signature=b09d983f99bf7e0784c0e9b2deddbbf6794cb36d40bb057659bc2d481bf76329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M7C2NBT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T084550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC85d35tqp6JcOQoqqnuZQK6UHST%2Bt0HWD4Uyvgof04hgIgECtcyNgvFcctI3Za4YfdgM3Xp58J0o7%2F4eHUa0tdZGkqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3oC6khHABWwdXksyrcA5UKg%2BMxUBUWvLisMjhKjUJH%2BpN%2FEwZwpdvZ5ScBLRxvDid6sl0fEFU%2Bp6h%2Flyi2JSk7HQWh0aSWOxcFZqQ2szhfLBQjFW8d7w1UApZyOc1PQNYTt9CcqTQEDf%2FCBrcBM0D1lLsDqNrKigc6rVS1jSz4cU4BP5tOE4T2w6DweE7dq7z6J6ICsV0Noi1JDX%2BMKDUKBUPY9vHspg7A0MK5jXFmfXI7Q6wFDAzOicKkIoAy9SDTcqikF0tR3fNexzvc9q6zt1Vo0d0X%2BirSPCAHpkTZoqIaqOuR8hZ4tetVFiDXL%2FueNQWZNt1cItnhKa6ulF715tA9KhAUi3ePIkGu7mo3LWXNVpoReJBbFs5EgdP6GHX%2FON8GB8SKcvtitNOUlUKdUCdbH5JpkP4s9It2UsK9Yvd04H6B1kan5WTzyhFAAOVmRW7ufhoqXIjfli%2BknjPLw69ERy5KNbx4gFzF1F79hzOvJByUS1TPTtkEmaeMnrAGGcJaSpc2BLLGAShuU1lYKK2gO%2BaJi%2B2Taswm6XI09k7erDl31IURHT2p96Mufr73YbMaZOhCcOkPJ5gw3kPnRlRNCdLdzkgJuzIzCCBcfPFCd3fuyaQDyWwfObDxwRy%2BbZcTMlCBiBVvMMKh1MkGOqUBFIVHEC%2BOF6%2Bc7lzCEtcXAvQRhPXELE%2Fr3KNnnlXf8u2GrdWlNSHKy%2F45HVvL%2BIhWHrk1q12IY1aXvWqdJfu2AqIS7MPhCLS2U44t852qA2DodQYEwbkKRDriEIXkEwQRHWW%2F7TGJgNkLQlTZfX5rCQ003fgTdEDuWYLcIFAqUiSDtgmQ%2FiEAS3iXTCwbAHRDzOLWx7o1FcOLLsR4od1HLfwELzyG&X-Amz-Signature=1592553dcc4be0b3dd57df44d518e1ca631c175c4ccde11d29fd978abf846d36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

