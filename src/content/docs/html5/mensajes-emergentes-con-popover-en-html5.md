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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHIVAB75%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T003430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIExjdgFPmziuCmF1lhx13IfT2KOukRD6alZqseRBtXXQAiAawIse89QUyMYIa%2BQwCHWm%2BsHvoZSgVM2u0PBlsOtqLiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo3IR1vfz71ktrlf8KtwDmkQajTj3oeYf%2BLP9NiB0F3HPOULdhBx%2FoEmYxKVlmjWcu4p0J9KS0mlv%2BzfAUCd3bbnH06LX1Gd%2F49HdCSczxAMFheNJniUYiW5JXYMmefo89zNkyh5aiP0eqbNuKsZpL2yNK8%2BHIEUwURF713kago1%2BHQb%2BqoCqg6t0AY%2BTCZ5dY7vfHrikK8X%2FV7sF3XUmsbr5cRnJaJEDfWj5TCc0GzhK9qrKqqccy6eq8Xp%2Fd%2B92sHVfka%2FlWYC%2B8ELtowgMV%2F4Gi%2Bza%2FHHlmckecOZj267%2F4Jt10ihY30JA%2BnBhRpqluVL1XBBXLR0M1CZa4l9N7rxgHzS9MIQNjjTvsX0DM0ebXu83yn5Ckv1CxNSlqUoORq8VwYe2UCF8Cx0v%2BGBwUzDsHDMfeOmh1xSU2JyGLRvWHl8ZzTfhL54%2FDtWJHRb7pzus8K%2FxBINQ1%2BV1%2B1tVPnEvhROhe34rtsVOrNqf6sSn2HBdiri6y0z%2BAAFXt5feLkw2dJiQjcI5g%2Fcl81Z71i3KN9yWF0wuLjRyCe8IrjqUYri0XX9h%2BsE4v2tZSh9z3V5mOJeYrRCyB%2F%2FjhicFM5zNtUIsMEhKdKQkRkdbNy%2F89qYNTBaLDmnFhgvm8PtyE3rXJEtA0DWq49kw2P3SyQY6pgFcXUdqaZnopnOUDYtNUyOQZuEP8RA%2FJFgbiOqAhFe3AT4icM9%2FUlnrlNSYSxKT%2FuvzDVec8Nx0DIeCP6fOGCA4rhGH%2BvjacybBnCLOh5HsQf26%2FnY91FlsQf1rGSiKYymLgxBb%2BbLOkPAOJjP3xJVVTvMAtMSxJxvJmP0wUTvvnOFctndwfHpoD%2BgVHq4VKhVDP%2B27Tiix5fBoXR0mzTtWBJPVs%2BcY&X-Amz-Signature=8080e9fa270c271b859a17702e9582fadc9272c1081036833a58d34258b6fb43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y65CKB2R%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T003430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR4g091eeGa6LJN2J99QUfx0Co5X9p54k%2BrgpgVX5GLQIhAMqp1dxWdEl%2F8d%2BKI9yOtdVnW9mgqr%2Feyp5n%2FJhLS2o%2BKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxf5b6Fr7%2BvyIsTtdEq3AN6NdL7ew3ife68xGT9zFAJr3F6ukzLXxdH2Qk3d23GYUcng4g7K1x63gGPtVbsCUoLEmkFJDjSd4rhZ2v%2BJTmM7DKGr1u4aAyiyAP0b9Og9CtVhMKoLa6mScP6RFwK9x139n7vG%2FuDdNQTjh1k26AetfR%2B1JZa9dW8RK6chyTT0xf4gyXvuA1NB6wwVpPW%2FRFtQWH3ZsvqhD9Yb3I5tGYBZ0s19Q4e4iFvgdccJkD8d%2B%2FZnj7Uip4aFPqhg4UAt%2F4Vc85a0%2FiEcehLhepVIMOwubateI3G%2BiMCxVerYyHZffQp3qnvQefDdhiPGLr%2Faozjc4Y4QjrgeJHBhvhEuLMG90nkXmPlQDCwdhpQe2qaqZdWQ52jmKPowxy59e7d3PsBKak5PmssszthatA%2FygUBKIh1m1xkeXuqt2Q4mhK8pbB4QL7ZspYoEFxlHRIvrSKv08sJeX64ob0v0wiim6PWx2fkurBLD0DuGnZaa2K1lfgDdHUSqAL67KIH2Koej306ANuo8vhbpjzzCkoVuSRvulgIkF1VrB%2Fh0Xsmb1naaDg5%2Bqm13gr7SiglNn5%2BLR9KdV2ZNNGOZP%2F0TLsAbsGL9UYOPdOB3BgLvaiZX%2FuqfUso2uw40wNLVxRGjTCX%2FdLJBjqkAalgJZee5S9yBszCYkH5lwsf8PJ8Iwqg6CtlvLBmds2J5lGERhOUqlqqklDNc9lxX9ZGnj2i2zKl8xkNyxj9%2FGrcTrqA60lmdTrhzmYW4wic5DZciMg%2BRK6CQec1LVvCRnUxJwtiKBhAVsCwzasgAqxF2gTGNA1eaIczdTkJ%2FiWbobts4Nven3YEh%2Fvn45LOH%2B0Sb0%2F12HmCqnTHjvDnLa6E5aBh&X-Amz-Signature=61c4a85afe5d1f6843118bea6c3c5e9e4eee47f945de56b35b54d304ab6fe5e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

