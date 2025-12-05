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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI6RHMTP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDls25yYKsu6mUnzambmmbCSeaWV%2Fp2%2FvsCiyf3SxNeMAiEAngSLVQrxg3A6f91a5iTfPLugCyvsOlsXD09QfDT9V20q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDGhfNDIabrFChBfs%2FircA0nkQCs4u1xkwgH7vOo9%2BAgVCHCnoNh97MMgQgwsN%2FBSqxPeN6ecuSslnidgplKNznf6feTKIARnzYycvObHUenqYwWnvcSCrojaN5lEFT8ugb2XtK117ij8to7v80koSyQcij5hCQklxcyEgssypdEuj6aM2QGL2Dqqg1efrA3GTHHo7fpPlsZT%2BJFu5jreUOqYoMIW3%2FkoOP9S9cQdT7JKKg76M6omQ96rtMDR8htiVoyfCN3AcU7%2Ffq6myjPI95gmixDIqYIMm0yezy50yTgO2PdkUiTaAYr0jiaV82KpEa%2B7g9iM27YzKMzNCSRO0B0QAbJA9mGaa1ng5%2FMCC%2ByQ6N50JOGbZP4y%2F7zGst0duKKmQta1u7%2Bc%2FPYjliCBTeyDyjlA1%2FbcrZ%2BBLdyWAuSK1lknfCGANz0wR4vwILwST660VqQRd1CAG8l5AP513Yd7R%2F%2B%2Bpe45NT1BtbmVKAzOQRcir54m%2FEvrjgj2b5P7UNGAw3Fl6dM%2BD3Cuv0VI50Q6E9B1Rz%2FzvMeX2ia9H%2F2%2BUDX6xo8lTfKzS8IBmFUiST1Gq1Es0KIxdGD1K6s%2FPnkpB727GTfxYNbx1Qz9xd4cLXSJHbNOCeXOzbOLzHfURew%2FfeURxC80UHrnMICPzMkGOqUBDOm1CD5TP%2BWeXs05%2BUgnCfn0XFdIE4p8xZF%2BH8iFoKXuKabnGTYaGaLWKG%2BoLiAEaK%2BoSfWpu1FSKs%2BoqfosicG7awVUdux2C6Yvc0lKRZRC9ET4V7rjV1JLRjdXuQPs8CbJ%2FZ9G7bHIYBgjcgtuWLFbufcoQrO8qjcjimFPaXugQ0lhuEGUTc%2Bv3%2Fp9ls%2Bnpitry1xK%2FG5xYYPzehjdctDygzW4&X-Amz-Signature=8c0db51bcc468ac8500033745bfb8ccd186dffac8a79aca5e887c1da50d43acf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BENEMSX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgWgGAc521uoY677Zbwgc2Yn44AK7MDnCySBjbwHmqnAiBo21ncCrdePHC1EsP4JBXomFjW5macM6GU362LvgznBir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMn8PtkhhCIT7o0FxDKtwDJZT0Bw48vKlErqVWUAU0X%2FyNTb9n6rAkEzvlcvqiWWjqdNZhKox9TOIe8Ta1SdzC2jr%2F%2BLgMJoYKVeVH65UygKHaQZ1FrSQQXCDYYMoC8A9y%2B1v394AZbcyriQ87qQCocYAIACNSDmCy0BkW9dLbpA%2B4t%2BK7mlH5r3eVTC9tuWAPcUsjDGF9muaKgJc6ZRayDwSfrMTfEDR1tVKlESmlA4Tay9jXVghHsGsusm%2BjNT7uHDG2Th8N29hSoxjdXZVCleyXuyWZik%2FSb9leLV6I65tOZwvlBzPa%2FuSxramE8WxNaA7k13NwhD6YxYmnR04yNTROEfwO3jtcHp5DdaCAaNx%2FpokZuHiSLdWxowKiDjMXwOVcpdM%2BXGu9uz4Nv7RLedPOZdPjblH9wu20h0%2FmQwlls9Wt8oIH0c2y2G2GFBni7ODWgxf2Ai5q1nTIc%2FjSPjCgXs59eJTpFqKcWwOGM0%2FbcJHQusADV51Rqt9%2Bw8KVBoCKrTh1HGzz56uLylmRHu5huOk1P5Ws1LnOcBri6MkekcvYysdQt2i%2BBroOpi3%2BjE2W5KyvMQK6m58dcE95XAGD5%2FTZgWVqPvCX9GEEHRF9MKLgpX9Tc6PrzeLaD5Nm0EQ%2F22NlPmoaDIMwvuHLyQY6pgFOEtfbPF1RDfv%2FdSbLdtzqdAOkzU7TOHsm8X%2BFzW%2B3kyDgEMAyYcp27TjTBpCWIMs7ue9PU560hZyFJurTaxQngTbmndzBImwGMCvLMl8q8w5nOJI%2BtFjRoFo8PbqFVEaODFmQV2aI2nUnpkhqF5wPKhPV8kdwUPOy4FrqMJ1shWC2mbgtn6Dzlm08%2FCptFLJsYx2VjWrt9L%2BLAmhff2bhOUxcefVv&X-Amz-Signature=20afbf2287ebe880bbadca47e93ea994a5499f9aa813f05582b54cb7375e75e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

