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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU4ZWRE7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T131217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGphzTsCQ68PtJ7fUH%2Fidl0UDT0F4071oAGysmsO7wU3AiB9XBDvwcqHXmM9giDzE9i8yG2%2FRImDDmEsX4moDbaPQyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiNSuMsSkEnEPMeMTKtwDWKoBosSyNuGhWzom4EDfbipGsN0SNk8FWKIYIceNpRVCqT2IvgU1eydcexAy4D2htNCsvQlEktywzNolJmAu1jwWioSlPREMToQYHrd05dnqdAPmY8O47Wgw%2FmJVYzeWLU4BT4WhfjPQTM4jNMPjA0HdZtuNZt3FP%2BY3jmhdZq%2Bol6%2BYm0BocfQIj4X9lWhl%2BXdhAvqXOfe%2FlnQlVp2bnFszRKtvj0um5eB0%2BieiY%2B3Bojh8EcQKKhzsNXHKOAm1Y4AVljmKPiidFQbjavsmQIFevUymOi%2FYSSlXKCO0pQfjAWMTkCx9OwQHdzzXY73%2FVe16cUUy8%2BFXb1KRZYhxj3%2F12SGUIbp1c6JOOLH7fNnY0a2laWayXP7EbbHvA6aevxBj9JxXe2%2BHPCL0XvSoEqkbJ2CKTcIwKJNJ0u0kU7xfAVhhgYIf45JEP8bJ03VP1aZca6SgevrvPqSe2qvtEe7jx0fMsFxIbTGiQ77LZUfaIsG%2BvBaT5gYyulxr%2BNq2Ogue2dy9fL%2B8j8LffiQLZ1%2FTekaPWhSn%2FXs95fXJKITM7PMOgjOYCQpU0kVgjMpc26NZ4JsxrkKncih4sGwU1fU6m8j4%2FSDyt6Tao0fFOMQFiPfZrvlk%2BA0vn%2Fkw6Y%2FbyQY6pgF8R6jFPRw1zt17eu8TV2o4F3Tmq%2FnwLtQz6U7NJmlcQQyGQzs7a1anS8ew9zngkwsbbXHT4NGDQKimeNDZm56ZbLrqFh4hcu%2BKnoc6JNADuGYtB0Mq4DQO0dccA8QYeFz5IGfT4Im0VOKT28NVFhk%2Ff5SOXTWTQvGcb47fecr9V96xE5uvDk%2B0yQfZ7mW6VfqUd1qdiXw4KzIGoLiDs9KO3Qh59Q%2Ba&X-Amz-Signature=db8f6a4cdb0b0843e502c8252020904c23a05e9b0f629ffc630124d21025324d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FVFDIEO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T131216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb1c2KHtjjL3X6FhjKbhHPnu15oxPo9qf3L5IR0e9J2QIgbvhbk50z5vVBFo%2Fgb69z99YYFGNm0NqShY9l0XlN1l8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjlT1DHTsM%2FlcJRxCrcA9wcdCrc2QUZq3henwgV54470r7EJVbE6DjK86e%2BDPWk7KiNsoOgDX5pYhoqEGPTkqKbxnaKkHoZsCa3KIfvVF6a82WmRVtxrMAvrkiWUhqaWUq2x6c7d6GuYaQBDtHp2uwHHT4UHzz2cKT0JsQ%2BrElLvN2eF%2FE2dLY2TO%2FyQ9%2F4amPLI%2Br8hBtR92DGxgTJeLjvEtIyEH6NAeBpqm45SuVyZTwlywoFO3kRyK6iJ6jzTYFQpFR5uB%2FRU6pqPg98A0L%2BYzu%2BrRHZhk2j2CJXidtfgQygt4Vvd3il42Xd9yIh2bYWIik7NKCkyjzhw4JPv%2FKIM3K0EQm0Wjw%2FtV7koUmt1eF5etO%2BnCATONCyqibejG2ckCnDTliCEeCnM8I2CdX%2B6Fgc5EUwpPQjOLhqSw1yFxrNdaSI%2FBETPp2z6KyM%2FGjSltgufRc0aHq7lLbRWx%2Bh42tfiTmhQW3gfl3jKSy0jwYqk99awCp3wbLArGVP4iUFwuJJ85DNVZ0fGVstBooEQy1kD8bqEjoCBj1i%2B%2BM2UZAwoojQmQiLu8NN5ZKwAr%2Bnu2RfI32W2cIMvr4UAOVjD9sm8M86U%2F5inKEfo3ZpTCMMDMFSmN%2Fqew7WWAQweX%2F3f9%2BY5iD%2FPCWKMNuP28kGOqUB%2F2d%2F6Qme3%2BLF9N6BXPv8CeM2Molh2GtNPpOCh5srebXnTYEVW01yUsnLf%2FhZ%2F%2FLPaQL8Vpgx0hxT%2FtNxcM%2FzBrGYQ53ZD%2BNHfPOiCrOtbSotKLBsaDbHepROBRT8SNlX%2F0%2F%2F4eg%2FPDl90G0eKAqTMuoyAAGPw0dcl7yJY%2FRG%2BsYX3ax%2Bllj7m3tHHvWEIzIhFTbgdlQnfWI6FtG2yLsiBVi35Bn%2F&X-Amz-Signature=5157caf29885d783371908ed956e9193dc060156ba956303d2490434ed57c990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

