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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYDYMAQ4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T130539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe26pFmmBaeD91o7BN0%2F272HPG%2FYd4vAhMGuCUwmh4MwIhAOv8Cvxc9%2FmrVrmjy1QuwRdEAsAik5Wkzm%2BEnz8ciFmUKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvOhzpqOtqNibUm5Mq3AMY6or2QRy%2BM7YSwYnnKJ%2FcEOogZ7YNC2eRXHHfOC%2BRidL76V7vHQgqk%2BnfWC7%2FWvNIOlNRxYHqjDuEF0ySOoZf0CTe8EMC9lfGIlRVVgnatXE6IbA5rC6eTGjQv8rLwhDdl%2BrNNe9y8a6rtCzlNy23s7EjH1RSrMWu5TdLAFp7BYDGCkFj3nBI52rpHyWCWly75CS9%2B%2FY3DiAbnZERmhU7umO5%2FS5yeFmu4w%2Bk%2FcXmjUOhbWWHyVGpgnd1jL4gYqB5ytKaSg9kLpvqPnMkFMp5xw2Ko40vn5ZrO3Ib3U0PkpQwTNin28smwRzjTJrgRHAb9N%2FOPHVeEacXemXm1T%2BScFNp5Iv8EAAff1v4cSN6KN8gW3N7kykHMyll84zmn6Nz1FuKlR%2FlOLa03wAU%2BxtW7TxoS%2BsZdcJkrj2scgg9iLzUeVy1r6%2BqlC7BNjFSEySOofpLDXEEOTYtqP7nJFBGUm0lssaZ7xIog0Vzsk0PS%2FGl1neT%2FQ8gjevYkRKeMOtlxAFeurctuMxfQGAys4GyuzAB%2FoGzrwVEJfLvZ3d%2B4o8UacRjZ80Zbq3%2BnEL1UTZIuTB5BPz6S%2FNoXa2qYECclP2t%2FUTm%2FrokePMj59hk5SDZnw7ieqz7EcWb3zDfj9vJBjqkAffznoYfwjQKYLdHKL4OBp%2BxdOcERjMd%2Fxn8ZTod6HIhDGZ7JzzyoayUzvX9aDv8Wjd6rGG9Ck9AjAYG30nSYEHWvEis3ntP1UMGTJoRn4fN5KEQcSWzOEGXytjXtR1mMhfipK3yxtLtsyBAH4K%2BctgWm8PXfxkXTPbdHDdH2WFYEKGETVOZr8EjOAlMbfPJ%2B7U2a0spSgq6xmPiOlhogEBOfhFF&X-Amz-Signature=5d8ea3e68ab1668c9a0a47fbbbff1a9ba95093fbd26cffa1c74a7b143af54544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X637FIN5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T130539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJo9fOfzKoc%2FsI6OMNwbP8Gk6cyqLLQQkNTathDEwYoAiEAmx130rU6JcNIvMnv4oeNt%2BbQmAbQygWe0LEfgrYgbxAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNcxAFZGW3%2FYPcHE8ircA2%2F1QyoMubRkI%2FDx%2BN3vLcHp8F0%2FdzDbh4LU7xKxeRsYp%2FJCfcg2m7wM0i23MYH%2FvnMNgK333IhlQ%2B0svuv2uXXZFcchX%2FY9DMkeEowLdHInfpEEOoSh8FXGHFZ4Se4tNed3oLTdRRZshA%2FzswjZnmd2103XOz70lc2RfOkDKrVPzWszV6iTMMuU%2FV82O5CHl1BPMVGdYV4vLwqwATCm7b6DDt03m0IkAM08pKRxrMUCx%2FlsRuH79xsxHS%2BXrEwdGe5zouYJDaDBL8q6USnWWH5cDU2NkpqmWccgzy8xj%2FPZFo0N8%2F16qfGTjSn6dQLTOS%2FOfScolAjr%2F12%2FtLFNOhWPI8d%2FBiyY6fzbJtk6DOKiFRt4tq80gccVQF9ZQ%2BRvW7lwEHGaMay0TQ%2FprSs%2BSozs2CA9ZfniuKce8NyThsAJn%2BQ53otJaV7GNVoVd7B7Wax6AGZYOyuSH6iQlKsb8EMBvNo3O0knu%2BJGxJFOL%2Bu7DPaBw27h2S5nXT3%2BJkMq1GkeUTYft4sNnd2VCoUd3wBt%2BfcLmsRHvSpW67Hbk%2FhQ0PjzIM7oMRKZdkkwav1d2BfBoBODN7xCTD58UZVlKpwzjIBjbb3O7mSjmr3Lp70o6F58%2BuS8bKh0T0flML6Q28kGOqUBcaDVEA7h4vsjJEyJ69IrtLyQqQU4HkVh%2BXoBwYWE9899c2%2BqAl2Oa400JEPE4%2FAj9xkVKf0CGvt90mxE69EBnGzQ9p8Q%2Bhkskz2NyjWkl1J6jmXkl2zLdV%2BQ%2Fk8KRNvqmB42roUPB5ufA9%2BHmpj55s2GNbOeVNa8cnNFTxtP33X6fL4j8A8e6A%2Bh0hZQeRrDk27hq3Ac%2BoTsdji5oytYdb6Mzocz&X-Amz-Signature=a74523d8a55b05ac0754faf47ab9c3f999a59d00e31377dec3dfa861f742edaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

