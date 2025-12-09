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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEAKYDEZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T031521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBWVB8DOG0NTKBdBVGe9PSzY1HzDQxz8%2Fo%2Fas6i0aLCgIhAIGJcFXTCEN6lKbJ%2FIKplKP21piM%2BQELmdMsRXedjbSIKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxg8siwz6W9j9iR2j4q3AP9URWgQMxV%2B3El6MoUMLO4ujT2URx8O1%2F36IP76S6dXPJX%2FQu23RA18gxH%2FyzHrYD9XSlj0RSsk6aYVPuZS0XBXvMTzVjHq80fYNvdmfNKISG4H26HFgM%2BPKppf1mw%2BXmhBKPn7GUhzdJs9lW3dSel7Sa2%2BHXq7TKSGUOZWFdzWLZEUeGKDbR0%2BYuWyWN46qNhmjORMXWiOTZBjnvRSgna%2F%2FaSEpvgF79Q1SGjYlyHfgKTNrtR%2FRtZooYfX4C9jxG99BfQLLYuFMdxCH7Ms7%2B9ZWqYVJ135rOyRL6OtzgoJukcYBZMa0LJ%2BNlFLMtY1X9x%2BUccfiFp1Tw7X3PjYD9%2B4u%2BLqQZRr9IeamGl3AUHeI8gVS3mOxqlj6H7ZFdR0Jo1opNr%2Brtqdlf223KBCTprjbmqE09mXM59ah3glkUlrLt1vzY9nhmgLhkMNkkhBveHA9X%2FqbQU4rAlgeu9MaXYkO7jBJDtbJT41mO%2BL9o75fg7i0GZHcpiR79%2BxSRUy71NA6PnrY%2BXIbr5%2FXQ%2BH3JNrMtpHaLCayeDqMYAhglb2yUOvbwBcO3%2BLqN69LIQESP2NzN4jFxi%2BtetUNxNfVFP216W7gB%2FTet8QJDFVJwaLW1RQ%2FcY%2BMM5BjDHsjC7jd7JBjqkAakqhYS5JhwtaP%2FomBKoYK4tH4Eqq6lT8RmgqUqH2EniGUmV%2FxhY6HJqDIR%2B8br9zzgsVVTpzNfXVQnsDv4qTCqZtRhZoodNwMArY65PB9ZWCdLieICiFvcvsRXLx%2Fi1WdL969yzO2RlTmkfdBzqiXBuFi2DuN%2BF6dWXN9u60sGOrRvIrYttQfQRlEn7hxH1%2FWp8fc0%2BY5DBV6dYCNnXUSn3nCIE&X-Amz-Signature=9d7d4f8ace57fd2059ead0879442cdce8d8fef1a3cff8cca588eefc005c770d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657MJPSGV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T031520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Kc7Xedc2duCzwp8l2pa8qpnr%2FlyqrPbXIHVozKR7DgIhAOnV06nILEp%2BVRePReYg5pk8HOhVH4v%2FUhyXtI0wx2eCKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxsrfO75KiErJ7jVwq3APf6A5V0EnC7NpHPbFYm2ZVu%2BxbWFp59HLlJj9Qg%2FghjiqbgUxOkJucuoZ8Y%2FGosH1e3TCDOlrtMJ7fdJnRLNbVEop%2FEkqJms3nbhyqgCfZDD5xSYbuI0v%2BAhzyRQj1fiNSNHxN1xcXtvzqt9e0MA3%2BZxLkROgHF%2FCWM3l8%2FWrzeDMKoySI%2Bz6ktibQg4AZlnXcNzTHvL2hkd%2B1uuzNG8wtwMC9q%2BJFDFCXqLEfiGKUHdfdWGp0ydwQlu09yO6iftPmQruBbkU%2B%2ByySwEKSx8s9VnueT%2FxBpFKAtFFnyvRhaIGgVBnxQ%2B%2F2DCkzBbebalqYJaVYf4JIfhEoAOBeGtQylaMHzCEuU82fmgftDLQwWftJrcaNOYrY2ND4puN%2By%2BVvTi4xV90%2BpgNcXygJmFDzF3NkPvMm6%2BVKEdnVP9fEmQdU3zcaMzw9SsdpZB4xeyOCdQcb90vm5Rg7C4BQsLbkWRZPVW0odu3CA%2Bad0GVn3buMyvlz6lZ3OJeciGHjKbtLgzvBpP%2FhlAKj%2FDIbMn2Mp4MWp4%2Bv0Vh4K%2B1sk4P8ungtZsWYenWCKofYGKWwWuu1q%2F%2FOhylZP2vxmlLPbsLObYPvg9vnaqvfbxiWGGN8BocPkFXQNFovtpIvqzDMjd7JBjqkAWGfQDk2sjpGZDd%2F5GNKVQkcWmUy%2BDxLh%2BGzNiS9LGDMT%2BvY33rPEgYOfXTrEgfYM506fxvwPI4lchfEwG8JXfs9a5SVloj8Vuc0wYAUU%2FKP7%2BhExcnZjpKWJdsyrFs0W5B0zRoALv5z3qMRVW39L%2F8aM5lbuMHe9jbzENw5ZwCCfO%2BOfXRVJihUqvoJWm%2F8L6hkdNk0sPkiJ2m20TLiYpSstkRz&X-Amz-Signature=8ad0237df484c1478a4badcd7b28c1928cee9ac01dc5cc8b65223e71106dc2c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

