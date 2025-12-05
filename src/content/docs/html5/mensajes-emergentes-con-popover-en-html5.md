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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWCJAVHH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRQw3tz8%2FLSzM5oaORrDnD4AVJHvCEeiHou30G2HpejAiBUuVOjAa4SA2gzbb3nN99UeLphHvyabmlm6t9iREdhlyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMb9fd3skoQNJ09WurKtwDL%2Fim%2FPulFdF88QaD1gUnzcpizW%2FyA3FHS2PWweZytrtMyf1vZhMDVE1ZnkYKqIbTyFb4Qq6mccbFdWWYUCkiUAYs%2FbJ4%2BlvTdLyGmlwYAU8Wcbwp9yyyCCgQALYjkt%2F%2FKYXRNFeEsgtCO9L2Ex2Rwis6a9xAdaOdMsTzDZ7p0pIBks9Lin3x%2FnJV12C4zWJBI32596wYDc5P%2FfXSw0K3fgLxBKiuij2y0fsWuT1DfzoIVmjVfpe1llxLQSB0esB8MweyqMPMMYeutZygXIH7ZVml46Zy01%2FBgAS7iI%2B2SY6SmMeFT38kbWxjjBndbfuJj3fuJJ0HMkuneGRw65DroJ8XlRpdEyUL7dytW0EEAdBPeEKkuGRXNMt2URSPecnI%2BoBJ%2BZMeYxVIp7KSCc4IbF5Ao3l4Z6SHhNhEnnNtVLseq5ny%2FzO9cvT21wH%2Bm4OjRmT2vYuLz9jKYcoIzlUDYJ0b70ommmCRTGixfXKed3bc7%2FPLVNVebiKXtE%2F21bic8aizUk7%2BJGrfpVulycr%2BCH4jOye6%2BuQONdfCAmwqqmDmygJcCKYDhXyeiI7Y%2FhRz6i24QtZnm0KDdFHYl1nZhPKpzwuzSApEWmM2P7%2BrKDJjl2UNUJat0XshYCAwnejLyQY6pgELIYSBC5tnukt%2F%2Fha1JyCIfpllCJdxk65y0aaQiXKnYbypNiPDmcMNu5CES00iuC3Z%2FAIOMSDQ3Mkn7ybo96IYcVvbntVOpx7uKxS1X%2BtJFfxIR92Y9JO99LnIbFK3uWnediXwyTx1Qk5%2FmiRj8xzGTKxabCERwdCvknYOj%2FMdzoUGuaAc3WjVKyI88BNZBhWqgTS2DelDf2qA8gx3S1%2FNPwgc7soV&X-Amz-Signature=1c04c50b01070055d2d2a73f567a45b5ac49dc5cc26287ec6c44106b76eff6d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JICHBJD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdtYSi9hRvMIGujXuGqc20n15Dbou7eKcO3r7Ca5cxpAIgL6fGKOVfc0PRkd4Rq40%2BkLBk7DY5koGz9ByO9C1%2FKmoq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDG61y%2B6j7U11opwBUircA%2BeqKtb6HPqWvGfbHU2N5%2FZFTPmDIhUTnpIxBHLkHTJEjA%2Fh%2Bz4n3Qk8zNoyMlxHnFI45UmZI9lpU342AB9cIGY1xBb%2FptTpzWaVmIS07gHVqoMikmNp2%2FVaKoVjMtLjJKJy7VzYvZZWl%2FnzUyBKwDTaQ4d4ZX3263zTNuhy7I4Itl8WzbwEnjdYPseJwoZ8b9eDlfGnKuTRUOIMi%2BnNEwjfQwFKBCTI9dCtRuhMxbBbGQHEAAuSWMO%2Fbpq6p1cNVf5lpTm5bkN9EDtE%2BjBsoITa%2B%2BZiHLk4kZlX5iFUJgpRPpOh6ZbAaoHtK88VTDhhPPeerOi6jKX%2F6nE2UwVExR1Lv%2F2%2BN3We%2BfRnxHWLDRb8xCSDgrZYT%2FC5%2BBt218xCe4Ny1CJwvomlKgkQOh3khg3FAv6j84S%2BVErDJ9s69L1HH%2FoauRW%2FKbfJwIq%2FYmBusFPqFFFcEFkWLYrS2WRy%2BC3MIODSv78KSy4RqwOk8L%2FGuYEbTTDzcayrua2giHdb8JOqRCAgQigFIybCNMkOlj6W44LbmQ2qeJPq5O%2FRIsn7QU3%2BHrui%2BRCnIsg1%2FWUS5TBdOUOSN8OvhxAjV%2BBfLOrFIV7stTvcuJvh%2BCjXL71DwkIRjOQ21pwWcO27MMzty8kGOqUBJbZ1RSIBbAPe3B%2FbogjYQjPc7Q83ZyrzE3R4xkk2QDmXLMLSJG8heDm2A9EmJDXSBEPhxmBHGdm7fJZWxOF4i9SdFyk0PnmJ2g5WOwgRuJkphCYEDT6unOSmkKWxRTehgfTIzpFycH%2B3EdGdvCfR6GQgGnbWyQ3f8ABkj%2BuciSrezdvTeoWs00RPMDTjTjsJEcSmsLriAKtudGO1jh0TwrdnK69i&X-Amz-Signature=22fd588cf65d45c815807b2441534a6ddfd543ca83dbe5b4a6b16f43f7f227ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

