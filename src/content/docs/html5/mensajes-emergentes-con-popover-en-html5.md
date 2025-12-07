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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLF6SBLG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T033316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvobOYjvZqAbHddG0cYu0bGZKM8%2Flb0EA2Lf%2Bj6ZgWfgIgYnQo49uxeauohE8jjEvhuIlkj77cNMIPcMmNiPoIC30qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpCudLIRnWWfY4TPCrcA7r9TlBnSF%2BkKla6H843Mak4YH2wQCxzBFum%2FvG4OihxxCIStuEWIe2%2BFnCRPGS5YlrRxtYSZMVHyz78Zw1dCI%2FM0syhzMncVEPtCcjb0pNa%2BLqr5nixU3NvssWt%2FG2nexYRpBwwrrMgNOP8dJ41B%2BDfYJORyJG17jItUpBc0HWA6o%2FWlXcL%2Bb2ySX5ObA5fnF45yTTaV7848y%2FxpW3C8UQM0OtrZLAE3HD4zxNb8hTxRG351rh4q5dlbKkdWZUyjA9fXXGcTu5IIblVsO154CpWJRXdBxN2PuC7UzfqyWS3%2BnULZO9Cs7ACGQXwdXkRSJeOt4%2FXSfgiTq%2F%2FOjIEkmW7ihlhtUk%2F6mofP2%2FvYKftJ2IR8OdGzQmjACmBlR0WtBv26UE6RjIQjSLnJbXsCCJpoQ6u9pkhbvn2INWqtKFEG96VZN18sdffEz5%2FpZb8ch8MamW%2B7EeQaiCdnn3sV7mMrvRL15hyw9%2FPXYvMJBB4w77nt9zske%2FGUnFuQ8N4w%2Fvzjx2QuYb3mknwVHCrl4pJvublPcyYgOSGZe5%2FG50ArS3xn6GDxqY86YCzPaNWrjFuUP3E83Hdmr%2Flkc9B57ncBWdWCNQDLdpKEm77vSq08fflWPgLKI5H7BfiMLT%2B0skGOqUBdDDH%2BHyTNDGe5l%2F3bR65G%2BOSXrVpibnlplYjoBklmczz%2B4fZGln8Y9%2BTgfSdU5CZBktEc4vvfqymqC4KolLPADDw6eSO2XrtvKPLCI%2B3pYI13A7umJP4nsa%2Fg2RHEIsoSXV3np893zp787kSaZ09PICim%2FNZ0GuHb%2F05wDuAyRBna27iDeylGwQ0%2FPDpqKnKshuJfcbBbBb2t2sqwQQICeGJs6ll&X-Amz-Signature=f1d0b180ead98fbefa0a3e21ab65c4f68f2a86903c6785bffafa897851546ca3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7BS6DBX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T033316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOCZpgIYTTCbr1WQmATekY6nITs9iawpWjwtKfwMilnQIhAILJDt%2Fgp5U9X4r19fqySwK9weUo9g9Uiff5UngHSBFCKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhZlvzI%2BHpxqToM%2BEq3AMkagwdFYfv3R%2BV3SB9aPpcIr5SuZcpzd00oVGdscNDwPAMdbDnWsHq3Ok3zk7NmdZFWXUUeu0W%2BRH483NkBaXm2OmwJhv9OXoRLxt7%2Fvey9njDDlk7ls3EMc8oPCQMPA1sm1gsCRyiwHEVHTQRFa%2BueAG%2BN%2BpUN9c%2BM6RIdJQb1naF2Zak1W3AVD6xj7J4GkHr9jPCm6UYBli9vRQ7KW%2BvJ%2FPKTRbwp%2B9%2BjAvbPXtQIwtnDhy3S0CpJX8Jq4auQhL7%2BqvnWBZjOpWMHjd5VgeD2TV0Fm%2Bxx9uJciOQUdU86xJ1caK7ZB9QSMdxmV9bSQtHjlHL5xmqIvJ44M9wdPd5A6MjH7KK%2Fjja7pC93T5OtrQ5U1iCJRix3HfeYXgURVK7bCTV%2Fur%2FkvioOk1H80kt1wFCEgRnP8oZ%2B6NCIWGbsqUvUnep0AKBzDhwek%2BmPRj%2BLqx%2BW0kIX8H%2FJmVx5eRteRGytmPeIChkBr%2Bc4n6olDxKRYAMo3EPdhGdEjDHGmvQeR%2Fvl0MICgq1GPVIP8B8X3ZW5Z69Lnh5WI73HCmVTyIJ2qOrhyLprTiD%2BVKeMMw94vTQCZ84RnEVhyUDcoQAccoS0SAdvjRV5bF4CETdl%2FtY5ppzwjOUgA3dkDC1%2FdLJBjqkAckI4W7TRwvLXAnHBc65XK2ncVNn61LGIfoJSO5EhDtL56JXuc5J3wb3ax77sOnAStE4uncedixG%2FX2TFM22w7Nt2m5ZnHaV745tEsVOwRAIkR5g%2FPowCE0rrGnlaKoFIYR7CzpTl8aKgKuzauKrN1mfiazpX%2Bih6IeRvxflek5AA0KQp%2BYvjGIlukUs7CUMioUAM7tFmzGZwxkVurIhYEHe0ZHc&X-Amz-Signature=ebd7d6911f69d121d052ab6c9a4775b63c08fc75134d63cda23394dd450be83c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

