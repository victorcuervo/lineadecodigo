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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EWENITB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJKs5cVMuwSUPNcR5039F4gU3Y%2FjWEEZPfyOqwT6EXwAiAsUOnjau52XdN5515PNpM89J%2F2zqzC2comInTFD%2FKw%2BiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdI9jRrCnVsdT%2Fy8FKtwDYz0%2B64wtgq%2B21woHmsh5dIGOsdCngWPJxva%2FNipYbftX5O35zDHUI73OJx3TIZP1GsarvFZk7pMyM162mx79i4wG4yCC2RiWmhgis3q0XOwwjLfnrI%2FTTfCJnsq3e6Rx%2BbuEs4dkUZyHbHoh10QtaHqEz9%2FqYDViArYFvP3tCNldP2KnYGzCmGVdrCcTCW5GDIRS0Iv%2FnTMrFYGAcHRl2Rwp5HkmZfYASpmIFc6gnI3XA3WD%2BYLjUY9CgcXoKD1Vl6mcSn%2B2UM4QV6Hxhe%2BYZE1HUfwsxWcbHLtZ56kXzngbXX7haVVhv09zxNJQzaSBqGcwwg8MF68ui0RgFUbU%2Fmd0XHnEBFnIhBj2rAYqBVUMjnpcGjPhTkCqTgpYoW3mMLbJR87fvLdhsBnvXKbBeUOgL4li2ffSNk2x37pyrKvMLFR%2BY9WXsKa6Ynl9Fij1F0JgdVmCG9AcvvkeQOZNgtOUokIQoYUSsIvP2ybVjN7sms3gB5zl3Wla4eKenGswUzr6d7PlhdMTZ%2BSbzqxms%2BD2Gx2PvSAkbjR6Hh2MxMqe94Lg4dMj%2BDof651wFa9Y5emilEDeZdL2qt9DKW%2Fupj5UUi2rFKZiBLg6qaXo%2FPaqcj%2Bzll76D9JBkMcw%2BKjXyQY6pgEWDUBiNwovvHgErz%2BAX%2F7e1pfeHL6GLsKQKedH1kcpzTa6Lps8r6xP5GmtbsfnJTj8hjl9tMDEB5ZxgNl7ZBeZ3Fa3QKmWlEb%2FDreT8QEhy3zOpfcoe%2BWBQ%2B%2FTqXu%2F7Z17Ao%2FsJSNulsHsAcfb1ySXFlM5gmHCni73P7sVyauo69PX0tM4oDEyZHFaQZdBVSEcBfpuAng54F2jOyv6WOD%2BJtDB1Irx&X-Amz-Signature=62d9863edc11b9539697d147fe4efedae548a2b41970c34b75afc70b6277f12f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK5PPR76%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCeh9YAZ%2BeVzomFScwlfD0aY1HG7oH4vL78N2pSj2WyAiAw%2FBXG9r1tXzNiryrSsr6bC8hEOjaSsPS4h6fMRubt6CqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1tYZJ9IWwUzoSlQZKtwDJN%2FDZIi1Aj3TRIc7CFR658hvc4DilH4myewErXNdzFQ8ZyVl8c%2FgIJ0jloJi1dlmaoFf%2BikJd8BtShHq8yrrqh2pDT8GeYpDWD25jHHhrNqSiXTN%2FRhWditj7NuLRoZ3S8i0DA6yqJ3J5hqEQ8vQ1CIE9OO5qWV%2BEbjdfcw5uWb9pyb95bernUNC7E%2B6ZjviBqfmzmcE49PXZ2WKEKHnxj%2Br%2B%2BRdH9MRAbNfTg0eSsx0zd%2FYkCCQnQHwNutOqk2JwKBl%2B5CnyMQYqV6qEs9L98b5miaZ%2F62lvTsrUUTBjkL%2BGL9R8%2BCCDhPm40jbSeftckn0BSe0fE0%2FiqRokCWym0LcCi%2B4PjwVee6zoiMEOEmnpgrqzbAf8zNlLqmnWuk06wk1eqQYm9lPxxMHS06x6thK78k2PSNNUlxj2oJAwAa7mO%2BpyZFDTmE8LQMqEQFxSV2p9uAxgI3hw7i6Aq7aMMW1iI7%2FI2XOm60eirOnxgxaSxFO4mUvuUqnefZs5vW%2BHXFdhqwyykps%2BhghO78KKCBpMU0M%2FCNl1X59aRJznO2vj9f4RHr2JLL8meE%2FaoqlD7bZyLZ0TjcUwsXZ95lQl4MBr7hhW2Jd7q0QesnBDi8TyN1pLj7JtTdkSekw2qjXyQY6pgE4VZwRosYxTbSlespN0Qg7deNsQNqIMKO11UplY3lSbdncaAJrDFrucesuPVuzxnSzZHK9uYenBT%2FcbUOFlCDPyNcYvQQ83CmBmifWCiolNgtKTEEyz4hcy75WAPZ5gsfD3IHn96nzzdX7XZ4rdui6mZMIBaLCnyH2KaWUsYHhIpv4bv5aunliwHCa%2FN3vPo%2BF2DmPRodduU3EctBJQciThUK%2B5XRi&X-Amz-Signature=9173bc6c4224a92e7a4261b5d6d1424aa05173b14de748571a69b5a151fbf873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

