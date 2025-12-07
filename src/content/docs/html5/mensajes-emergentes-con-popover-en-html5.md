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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVGJZURT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T062611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB6UG58rSlGZJKIczcF9ulEIpk5j0nO0KyPL7N0rr1WQIhAOiCWNM1JEUygxjB27QsmFUZaMwTOnzT0ZY4PSZ86z10KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSQvAGz9dY4ME%2BzBwq3AP11bVHKol2ZL9OYoJGohes1qyewfenhNOYYgymriQyIunPN0nypXz7ZPC9O%2F8ZrhRDi9%2FXEWGKULPkEDEm881DnBwO1ZhaKqRlMTdBfPktEqQAL4lC0sHLnadf7bonWoLQEq6wHxjQKaYBLHJgnj86L8%2FVBFhxhVEGIHhnC3vILhsHO%2B413KSaZhc3%2FqJi2BySdDNBKLlZlc%2F6Cv1zREoYDMSPKuQzWGynfbCY6OC7%2BA95n0YbZBu3uSxR%2FBAvUT2QW1X4LYAEITEOU0ABJMn%2BExhuHIrN%2FEknDN51jgKYeJ%2B6sa3eIEnPv1d5oO8nLggLn7prMF79qW3yPR1I4V%2BVDajpqwpujdJkFddqPN2%2B0nvmrBxMqBBi3h9VN6zhux5g6Haua3p1I4LZYBhc66%2FJKBk%2FCBCssqWcTsyuOQ%2B5%2FOiP1Deucfrp7MJlmQQk8lf5YssidV83aADKlU1u49rEXWSvEK8Fbs1cdumGZ%2B9zvbd0J107CEaukmRPTR%2BCfrpW1c6wsvNu2oDIGjW3AWx6QG%2BlYNfUUBiDlkwso5xFpnxKESH3RAWLZ74m6nBnVJg4%2FqTbNQYgKPpXyZDxNznq0JPNwLTyE7%2B0BYMc8BZJWYRcEX28gNqAfUNDWzDrnNTJBjqkAV024wSDq71VQXAunBRZjEYyL3Mt7BpwaEiMOWDD58LTrKPOT%2FCOIL7bJgknGFx09i0WXUBb2%2Fabt0F0kI9EUx8JdqsXYybwU2iXt8zrP5VYHDI3FCOQHj1zI2geIfkvsUQYt4vNE%2BVOmoSbfc%2BLW4ooiJGsgv%2BzSW3RUlhXHc9lg2sGVHOcw8IQHiiTRjzy9F5hcyH0s8FodF8ItBBl5455iutp&X-Amz-Signature=5b2d427b14d40934796e53e3dc9fadf1de33e61f4f3081bcc28c0ab446ae6c93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644KLAFLC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T062611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQdoR1fy3an0HEzzsoIqUiArrf9DZtl15XlOaeNRlknQIhAMaYeVqT3cC%2BY1Tna9hp3x1y0Q6aZ6ITjfgl1AtaCTUXKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz%2FHYDK6scTF9%2FqeAq3APcTq12AYcWQ3zsZa1eiTpcevLYWtUxs1pVftJY%2BmjTFDH9mpH9EOsmOVXTAnPHykbJK9%2FaG7nHZvqjHAqqJv7S%2FeZ8xLPfBS1uocqe67aaggUac%2BNZf%2B2QFxhd%2FO75auQme%2BnjwGq83k1Rdl4rsTwTCCodRw%2FkJLhCy5Gf9qX6D2OgnLJJcDV5SBE1edQ3UOFTNNzBtxnRTAeEB3b414xgttjiYFVCQuU%2BiQdoTzgAUOiepXwiWyUVqoOWvSXPlrgABPGf1cEPbxnnDmsPNMsJ2%2FPNgL1FyBDk6Uw0cP%2F%2BnmyJ0hldBIiQtU3utW5NCu89oBJW4j25uYD7p%2Fx5%2BVJdNO3WSzed2RnUcLxTqw0uUejHp6ECF9tgBFJ5jyrA8oupwyjMFVF2KfqRiA2HqeD%2BdXz3Rj9ud2WpBhc5MXRhQNV3DbW5IA3ODNlLbVJpnsf6rBgCbd%2FmzMjXpUxO5nXYB8WtbxhEi6uCATBSdjtXmoS71LU2sL1zq7%2BwSbd6iOH60KSHV9HpG2Iht1kmgV%2F4HtFaERXd3VJ1gc57xJK%2B6bO9x6eJaNwZvMmLRVmMoEhvhrpv7HTrYiA0mZir0HFcPz%2F2MvduHq5M%2BRlDU7fPZZOGiCsPkA3k1%2FvW9DC7odTJBjqkAcqskoJBj9ISPEWyW%2FsGQSEnVeYSUV96VUmk40PllFZXdW%2BBEfOwGMG5k6CvqVTJ2tZgt6YO%2F%2Bw4jAdww2VHPXr0u%2Bmf2gJIBK6wtJE4JcZHN2MdhzP%2FL3DKn9FlPOID00scS4coxSiN1gYGagWA7uTXmXnDfdpjCuawPxSge%2BTl0YWVoozPotfh%2FFiFAUcKPjFEeQXTMLrogJhq%2FSUi%2FwEGBkoS&X-Amz-Signature=8b35d12666099dd6588c0ba8ce60f603a5a9c334e04ff8bc4fb4099f70fa11f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

