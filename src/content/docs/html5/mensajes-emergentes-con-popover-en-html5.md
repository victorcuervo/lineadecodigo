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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665COOUCHX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8Dd196am%2FA3PJ6H3AaFGqtdCPLBj0aUKw%2B%2B72VEMt3AiBNqjS95FSvisSS4QZWOnfD8RfVJZcivUD6cFZfLTLrzSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM%2Fb4Vymci1ItaUGl6KtwDC1pg35Ryde8UvINNoENDmoE8unZxXNY%2F%2BkZa11yYZCq5Bd400xwxM7BXHylO1krIKtg%2F2xslkA8ONxwN35fJoCLpQ5eXfWLhrYnemR0EOwHPE0kWCEiBFXIqCJp21WBGt46zrA7af7JnxpkX7zc5ys2zeKoHOA0LVujCynZuJBybYXbQaqzYxs4M%2FAjDsAT2tVAi%2FrEahF3YeuL8VgqcXrJmBUW%2BlGS7gv%2BgRfnPPaOhBtEBnamerdtD0vxJb3Qz9Bh1vJXM1uDKLw0TUu%2BSXZal7VvPd46h0Kl4jWCUIqBMvDOeiarkFkpv7L6M3mVzVSoqKT3KcLETikQoNjzJ1JxRDtqd3xEghIIHet0ACeTr2%2FhHA2cqKhLWfp5AH3GE%2F1qR0JH0h9RCAQUqIk74h3WDC%2FNfKii%2Fd%2Fud1guf%2FgNviIbj%2FB54kqDPlQIFRBtPSonuAGucPW2pVWQkeBgpkUE4JkiB6XlEN%2BhawNVz25yGx4XLWdNCpK6m4M6xejRE1OkDqtwKwKFJ4Gvft9M%2By2Kqtaca4xac%2BkzUCngiDtP5OU0a5buhZMzSjSDmcxfxApwGB%2Fd6dXIVJe8u%2FPwCCF6iyWbvJvEbsFXMSVNv0EmJHz0UhP27zi%2BLwU0wjM3RyQY6pgFLsOG7cs7Q%2BsTUz6ePGCxcc4qKwGOSoiJD9LNgoXw56Ckf9Jt9XLxUMmOdjQj8Atuu%2Bzck%2BK33maAwNz2WZKXXi0O0fDUCsmTa64gDV%2Bl4bqu1p9s%2BGcFbIs3bdJuy25f9eZE%2Fxo0x70wrmKa7Sz6gUxvSpOq4mLdz1QSv%2F%2Bbrc1OCqJo6tXnyG%2FueE8jwnYWITqMoQo4T4M%2FOzXqMArcDzxrWKgqD&X-Amz-Signature=cc758ef5371d4bb685c4992d7db5de79cc92a2922ca7a55bb95717429888a9ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LS767GD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEPYMHm4MfFYcfZDw0nZVI2Tyl1vy7aiHXuZN9d7CnTAiEA3CKxLg7wRCQVtSaVTqbf1rRWB57YwfAA%2FVawNXLJF7sq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJ%2F8gMU7gw9R7cBPCircA66M6yh8r6YsztlX8DZOXdk6bRWW8yiB4Ph0mlx6hnjRC0ussAHOWCqb9tso6T9oL9CE68ujZtPPRg9RikfM3iS1eEnT9sl0%2Beq89CgQ0co6I4HjFKNKtxam8Nk2xrNayHuLVnKhyqHIlFAvzRDRPcaNyBLPE8XoW4Qg20K0GxuMD0h4ZMyby2c0JAB3uxbcNtL8UBejQrZguQP3kWZeAgHMHk1H3EnPBHmHd5QiauZX5Ut%2BVvvj75gGqmuafEcJi%2B5rgl6BzK87zFK6UpjqOdYKCriQEpv4NFPBJAfauoOaNjk3Ickata8BlI52cZGFm5zmS4joo77ZDO1pffzrHNRI9O2gprmYF%2FSrnoGZAiNyntR1ho4L7j3prIVDAZSE9YDagjXzNwBX50yuQAJQaR63yWZTARFbm3orFKFB2VkmvEA9METnCT%2FKyeOc2OoJtkeLwVjcH5XxZAAvsexa1S%2Fh1lP3xoXRBcfbgPPhjq6lhi5kzg5E5cMKFjR3G2iFOBx1IFMvgT5gddVkiz2ob2FP7g9UqBnFPKQzUTTQ5deX2tgqNVgfy1BbEZj5zgWiR0c6%2FUDkL7NfdE0q3IycNpKhetYmsqWhfuMkmQOouUleArkS52L5NuuRid%2B5ML7L0ckGOqUBa9Aq%2Bx1%2Fl1zJjYgr5TrehFs78mt0jDtuhIasm7Y1tI0aHCsk6wjOyjIuMoDJeORc5Sdw2PzI%2F5NuXiunfj5nQ%2BGRcMd2RlJ0UI%2FAp5w9RjBSiUt7HFNMlWtmhvXbbmbXv09eZJnqClQYM9fKwUEu6M%2BGfRzdqUyrtrqVyT26JAtons%2FqokxQSSBjfH6RGBwJQO%2Fic1VWe2kCl2Zoj4gPnpHd8CvN&X-Amz-Signature=989402840cf3620659baa96d02534fef4b1e500d2d52db5df47f14b0be7f799a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

