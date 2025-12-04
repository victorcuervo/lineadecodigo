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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6XJWH4H%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDdBi3rXJwiaj4C3Sz4DDyqsSI%2F7i09k%2BQeVI6knnlbTwIhAMcPGpyKaZWmEksZD%2BdR8pCEOvr0FwlkPoREX8DrkWO%2FKv8DCD8QABoMNjM3NDIzMTgzODA1IgxeEZML46G7%2FtPeBNwq3AMxN%2FCkmAS6jSV1ctrTycekaoEuSoC%2BOIM%2FZk8QZw85G7WwnRa9bWZP%2F%2FT1BZeXRKhEYYR%2B1Eiw1%2Bcu%2BCFckJ9g5PJ9qlopQi2n1Tz7q%2FplmyW17ZCKJo%2Bm9pXwDhzxUBzGYm%2BbGEA7%2Bl6H0ugY76yWWAufaV4OwOyi6yUB6LORdCUK2khilJ5W9XdfnAJBm%2BX0veAqZF6ghvi6GHdExsEuD1JLGWfNmX2dfPBzhhkalpWl9Irp1lh4dY9%2FMmgWAtENheldfC9lYXD598DkkCKW3cMi5QUNUtVF1MrM1gwxThcjDejIkDwWzrIWBcI93ripxLH5%2FNUaFh8G4ZqXHiho%2F0eSmNWmWV5egr%2FmfX7APBpm5qRkexWzsYcRKqM6hGv8wFnjOQ2b9qgLlGlca8VqbNyAROKu3EVq%2Fxj4wXq0tInHFz1NbdCqTvTiRNd3eVCyTZZF2veqLBNPiLBTJZmspC9gUoaQwpJSjN%2FuP%2Bx8xtrfX%2FVVoE%2BCqGjD9PhqpS%2B4EYMdHItuOzrt3qfd3kaOnfw4koX7nffgVuV2wdNX9U0xO6YLAlZUFxiwBpFc%2FPh4WU1ACKmxt1uSL4dV7tTfDe%2BsOPVsmbv5%2BZ6cKzVIAUeCTE9uEmx07J740TCbysTJBjqkAYKj7CLZ9vxFBG3rG0XdhdVnIoTiGSxtQNTT0%2Byh%2F7k4WTEXn2SmATC6cPk92n13Q4NGMiV8v5Ifbs%2BVwu3X1R2qoZoQJ1rVTe6UualpFk4kvHtD9Do%2BfssAgkfGnrhLOlWAJj5VfbEgvBw66IturkgV89t8qrsClyyj3y1pS0Uo7GSH4Tls7YE%2BV6WzzsWPZZZEnI5nwf8acXs8w2N2gVe%2F6QTI&X-Amz-Signature=5359e765e915700627ed68930a1f3a0059fef054bbda0cc85a3b664b2a62637d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBDGP5MN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC9suIl%2Bl3KRrOD3GmgpA%2BXb3cI6kWmTUJJ7nFw54fWXQIhAKKkJKn7OOMSyWaUoSPyFvGVjoMt9GglHVUuMNAmKlGEKv8DCD8QABoMNjM3NDIzMTgzODA1IgyORQ8xbHhxNva%2BbQcq3ANdKA1ZHb39Od2p4jdqb%2BBhwa6PmC%2FsR9%2BH93A%2FZF5cTcqVzL5nra%2F%2BrnbCBAbmJ9BlzcGVc0KhcpPRJkxuEzuxH%2FaltbOL6cg0ZkINbkctgwzNOnDQXWzTpwo%2F%2Fq8n%2FxeGpQrJq7sCEQoXKi79xLAzzFN59ANMxfUVm9569m%2F59nZp3KePTqI4d%2F7P0FQMD7JiWkDRbvwC9md5Mee2%2BOiNj7T32ZO7cf4aD6mXWW3BxnKRAu%2F4OAV63TpRNdQqqxeTUwzLxSR9vv2lEz8vLdhGM4r2Yi7vl03EpEo9%2F7u6VKmj72q6%2BPl9wW5Y7Elpr7uhD71qGwbKTQtNq%2FVFy2qZlpzoamyQWAc2GMxsIPnaVYfGpvnc4dQR9mG2jHOeWhffWhDABTRqAoYdSovs3%2BN5%2FWzFkc%2FNFGnknfdVDrOE6JDp0IAfQwEdimmpOehYjp0r78ATi0UIURZq%2BCS3KvIXKPdii2ZW23oEF9s9bu%2FmUoer%2FOLh98Z8ggs8HatF%2BG2OQsiSO%2FLCNx%2BQrDUxHrtxWXn1BKR44HVqN%2FjzoIqfJJI0mtH7Gm5SDWbSuJ8ZHEBapYczRbpa3%2Byc323OEb3sZzZYm0joMam%2BxF3zqAQcZ%2F2XQGYDlEcynYCIpjDvysTJBjqkAcAr42GDPuEFsl4Y1zwjqhCE4ugadBmvYRy0hqRLeiWN%2BPOKekADn0%2FTV2cENk81qwr7Yeb6IG0K97k%2By8fw%2BKoifNIBPitIAOComAe%2Bz9%2BUPJWjU5jzvsrOB73pgsdibHc3nIm3nC4fmFoOHg%2Bxxd7hAJsQ8P8fYQpicrooTEPTYYkNh06dlNunG8nMBJJGj21GK5b2TuCJnSCMZYai3CoEkg5Z&X-Amz-Signature=026ce6137b98b2058bbdcdb9f62d9c38ef68f43633f9eee48925d2eabd11850a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

