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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QJ2JBBU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4TXYPgkG5IKl0QPAvGYgokCmkmwo5WjsR5BkXfKdnBwIgV02YnBBX2Z5%2F%2FYgVAU5WUG3eRP5Vz%2F9AuCF4fCAS%2BYsq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDD%2FVJf9NPW%2FGlRH5JCrcA9eKnqyqqyTAxk7EHOkSPPNk1nqlUTGd7bczIDN9vA%2BQ2zbOUdsdXsMGRxdhXQNsyxv8qcEod3pwwxErabJ%2FBvQcv9F3S3ragNWv92lqeFIzGdvzhfDWgkl%2FANt741yVKItDhAa6eNohcaStOLqIeZsFO0AtC5BqwggG5xJDokxx2eHHH8vBlKqOwGEw2mS4sVGfvgtSta1O0E9VZnn0inRcf91R7KCD5nIj2qxcchPZzHhH1Z5ye0%2Fc1bGTchmckwXNNP%2F6dWJCvM1ysqOkCw7258ooehu97odc%2B%2BTQZjHPjvDfyGM1SQpinKRG3ZwVPR0OFk3noalI8Ry2rj2%2FVNymhY0jGhvxy7oLNBHzFWCihrwFIRJJ%2BSRb9OL7AUvAm2dDHzTqEjcweEiHbWGQTrYlBzGR1dN%2FQYSM2nfxUFGMD0wnWO7RgLnfgRP2h81EBSvJMsHg5kl456M9qMjsjSA2gWwukd9Ikh02%2FOgXiBkMNCo59OUQAQhvPzDUgAfA6FOmxPAyeVSDvhnkKCOa3sfawa%2Ff2icl3ETTrsTYnoqXYC41ireS6gfoKfipu4RYn0VGKj%2BtNTUobdzkBKIMoxqgrGv%2BpEddYx5iC2QEVGkAcISB10NE0DQ90fjFMOndzskGOqUBmMlAHkYLkV8oqMNGiSsupXdJHp0rLBvD15q1xwwDyypTMlOypk6cWlg34H1bEaaMl%2FUpg%2Bn662fRuJ1lXwRHRGo2F9akkhte4AN%2FXpLekZMeEChTGg4y1VcYdUAXTGHTxyNQqulnlDl7k5uB8bnTLn0fAAnVB%2FHjuniZt3GJX2Ry%2BxsKFbTFB4HjiLnvkMZs%2F%2FU8CtFl8KdKnL9iYY69IIiWZN7z&X-Amz-Signature=82c4e0ebc4770e154f00bb7beee3bd8393c3a388cab093cc061c9f9685801821&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5DQNMR4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BzyT5%2FF3XiLUFqI3EIoFcK4LutOciVpoxp%2Bp6PLLypgIgHEmEOZ32EY0GKC2YrDntBhGP1n8sSZiuQL5Gq5sFa7Yq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJXn8aJuJnCXEe0sQCrcAwUByRiBg4FgQTIVFKEHTI2CkTiYbyswqJln3pfR4jaVoz2Cn09WuVmAoCM2gdwg6cZC5Yo3C4NdQBM7GxtDlzgfKsypLSiqGvoHrh%2BgJL4aSWFLC3jsoRDTZXwtl1UazUbDUZkh%2Byb27l%2BcKWOeRyOkHRVSOKpF3CRVwGeQ6C5y9f3DwFNVpLarKa%2BgakmMhc8eehOUy8qdDZ8Kejqs8N4QNwMIMYlyuhs7JeiP6fv6S%2BYopggUS29PJGey16yp52aPhHtGcbzFXEqdtsw4%2BFTLIsFDauTNY0yH1SW9KzqGMvYi7yLRA%2F6oWHHqaIjxsUgAhyaZFuVIUHQl7TpQ2%2FbCdYqKr%2FMiXDzSJaJTX8FxNH8Bh5zqQIvrqeM3nuBWGkK3TYqpo%2FSIKa%2FAB6IFBE4iihRw%2FSAa5RoY6uJlhKHBrRLps7LgHPZa%2FF92kRq1ZbQKEgVO9YVL0j7f%2F%2FXfwrdw392U5giQnlYX0WbkLs6S5mR7U%2FGz6yMMdfGiihW15E5dCH82qz0fEShKexTRx0wGTgI0tR79Q8ay3ty%2B7PKSzPizzeOFgVQ1eKLtiIWOBR6SN4TEeCCanrgOWhrxVu1LUZB0rQqOtigNnXcm%2FzO93gbxa3Iw0GxbeZZEMLfezskGOqUBvZ3L34SwrPi2gnkWaVFSog7hu9%2B3HzHE5YoD4Jb1tdSUM%2BUmN%2B3qXEyai2jcsdCunSvJM%2Bz%2FZ9Ly0ggXL4ApKRH7zivHBwC9kwYPFs%2B%2BuPOcDt4mgBhNFVLE%2FeHRfc9FZlq0LjNqPjrkTPO9G7NkD9JD0OMb0GWQWtSdCAglVTx47kan1MT1u8Ta5JZjs%2FPEvdSpCMMkT5frV%2FQr2aC3%2FQdEtpxm&X-Amz-Signature=826cb7cd5ecca120b11c8d02201b5ed9f6d8a25386395a4e6a0dda75ae1df79e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

