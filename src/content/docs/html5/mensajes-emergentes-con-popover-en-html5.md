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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFSPBSNK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDqo6VPP0E2j2ooHuzaVnS3S%2FWxZ%2BxEJJdTrqvso%2FH3vQIgIgAgdQKnT1v%2BPFVdx58S1mvdHmKSrhH%2FuWyE3jw60UAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHtKWYU5trJ36diaZyrcA5ti8g45%2FhSL22dDwTnn9IGcx5Y6jd42Zx6ARdkmlgwuUTBR%2BZP1Ye9T1fVFu5Z2dbOdXqwmkDKRSotho3sp1mjXicHgNrFCc5OzQgOTyuYdo5D88abqAJTZMNun2AZCENQmFMTgLzIdRugSV3V1Ryi0C0M2A%2FD2UOdbt1g7vDJ%2B4D8noXWgS2ejcH1PfrPmllxEgWMc5gikTQlpq690OtgjszwsQHJXrAzE1w6o6zoakap3Rq0lNZ%2FJF2iJ6ZAa7DunI%2BreJDcWUlXvrhXoqo6EEosnJxTMpTMAu3xLM1nwwg3oVwgn1dv24droTjtCfEKfqXVFJP3eKapT9O3xOtvQNWfzde%2Fmrx1DH1bGT0CqDa%2Bvfr%2BmjKytfw7ROMLipB3GTfrYLXx3E0sX5ul0xNxvHXCFuSxJWSrJbUNmeSiAo3307Wsz7rXI9TROW%2F%2FvUi%2FYDaF7YXCSnNE%2BLrg8kKWeHGczJ%2F2IgC0gLPPoPzyRv0EzI3p9DGZ8lk6OTTu%2FSRat0ONi%2Fqd%2Fw05wINg7e%2FNGt%2BeSiVhTmgDLzh2S%2BgxUmAHHf2C3zIAv7ermR9qtbJ71BU%2F0CMPPI9sizn0Rj84ntM2OUmUrKwffE4%2F8a9pXiJceB5IVR8tHAgX1MJuGxckGOqUB7SXJtw%2BGsIBCafi3Ma8ADhYwoiVVLR2XUloWLjJ97OkNuOpb3Ls%2BNKBVfyjGHxMS6OnCIZnLOx0Fse%2FyPstPiJK68SEzlKkxMnOrWeTVo74JuhiUWEZfFd0XLlitfBh4Oxf9WL4cwdq2e1P1p90cRJ0Fraa8o%2FaJaDHaCE%2F7sc%2Bn4HZl6VFIyMCAnsu625Z1wLqNlhLixml4gCAwaGQjc%2FgodGSe&X-Amz-Signature=4479c01cce75adc0a66d27c1848c38baeefaa84551e21357e90f12f4508c2deb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WJERI2I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDmG1hq3rlvPqE9Ymu3yIev59awdYpqWs4yR6ZdfC8XDQIhAMuW3iZGYeAaZKUc80t4nrLXlZ4Lj94ZSCHSuO24Zo74Kv8DCEEQABoMNjM3NDIzMTgzODA1IgwGuSuiUcEB94HAsc4q3AMvESUjOo96OQoiso%2B7lnbh9VWvLNRGxyAL1zH2ZfKx4rrLae9NpPaDjk2mUw94kUp3q%2FssaYjQmnB%2BkTB6ZhgUBIc5fXEEKMg0ckhtEeTDLtrZvE9dc%2FYvV0JZ3QaTp87Y57q%2Ba66QWde7B19kvbcGtDwqxFG0eIfGdxCrT%2BdhRCeHVNuChywlF%2Fh9M2F5u7PGBpDCKvbmYqNhsKGX2Y%2Fren9unvBInoVOGWyTb3%2B6cZpJeqrMARMW%2BKc5vIPSXc8Mvt%2BEV1zxhi1PdXZ26%2BN6uzBle58fuUMIJUshsxALJ2%2Bcf6AsiIWCVUYHfJpUZm2EyG43e%2Fg%2FcAt7pvD4uk%2Frobou%2BLrwZ97SzzcrWZPqx81H2xvcSTrlMNDHWfANrWg0dOzRS97pl5RJH41hKLusq%2B%2Fb7vHr3Wzghu82qfQOPafarj2ziAo3ksA3cmMU8Dt8%2F7AULQCVB4IsP6TYSkmSamPZYLaZN6w6RDo%2F2VD2nNoX7pVJroXWB599CejacEuDEmhJN74y%2BotyhTMXeSdGSvoSB15x%2FbX%2B4ExChDCR59MnbP%2FGNjCIyBpr4iABSf%2FEuKe72j3b4IHvL%2B8oTqyybVuPYe%2Btv%2FVFTwoWJ8Y%2FwvSzv1U3q7SWnzq5MDDkhcXJBjqkAQfd4s8a1qzBWuiUFrnCK9czJj%2FRbu%2FAsPpJJVEDa%2BKhTDg8CPaXRJpFc32GV2tp%2FqNwlEs9kgzfq3KWHNd6IA95vAkF3ffGnTxMQ2NCRKEAZE%2FyL%2BTL2EHIyrWn97SFExRJGNSPnYQ%2FClYe%2FuI2MrZFGigNMHYcv2dd%2B31p8Or5sezrAySe1j5FtanVaHamWhuxcwem3RCybdrZd12vUSvTUj3u&X-Amz-Signature=b7e0c7f8b2197d4f7bdb54a7d19660279393df6c1b350b42b231da51a7e0d14f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

