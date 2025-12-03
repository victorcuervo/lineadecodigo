---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMKR53QG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDqCs0VNk3ElWbIC1ixvPhdBBcOYYnMppM2yP8dwlQSGAIhAMswXl4DzhnkZn%2FRS%2BrcLO51bDGl6eui7cGg1rUcTCySKv8DCDcQABoMNjM3NDIzMTgzODA1Igxpv68JanK3%2Byy9ReIq3AO0KqLeDVQNH3RYhLTTBhet8G3KWk1YXQ3V7FClApUxtzOv3f7DLuHgR8iDATtHa%2BbjQFs9dQAWvnzGG1o%2FZSCfLhsQ3k4bSxlnyHmwtLKqz0Mrf309Pp4f7NTx3x7gW%2BqAxPg%2BkGKgNHm8BQnB5h%2BW0V0%2Fm7rQlf4v5sVFuTrmMMlE4WlNVCX3oK13DPahhTfQ1GnEvaxIUnS7Cx%2BT6Fbg3R0%2BomxajlK9kAC33ualgqaHpJetvjQgAd8di2cu5YpYDD3cbdx6ALaxjnMQ1oDVRMjKWGqRU2YdRDqlEJ4te301ueGrmxQ%2FnPcUIjBj5TngEwPSPXBEapfkeG12Es%2BKLwKDltjYONoY0MoWHRfwrGWeWPZHWuw2ymjtiwXgD7xLz7X4adwZXjYm8BPEc1xZG8ID0bh1fIDBCyjs8XXKv6LqiSoRgukNPsvLrN%2Fojoqf9HGgrdHc%2FWRWLFRfz5UbrDHH7IajXNz3aZLzKJFWMEuBwQncyFIlfkQx95qsVGytBsF25NEEXGpuhx3zYvPoq9iBZVuUYB4gI1WrqGywfBQ5TpGhOFaw%2FJmymuuqhw0FUwRAi4CaAzstMrWFM4V72yoJygqK25hlbCtkYid3cBLk51buHEe5vFx0pjCG3cLJBjqkAUcEcKCr3qHMhINeMyRHvB0oNOILzxuOzZOY9fnPSVF4pJpq9Xp07LDQVuyv6VjRBwyulflapaYb%2BVFvXZwGMA%2FoYPVfDUnqviWe%2BiPjEcAIrM56%2BvltDQRhi5cdSnLHKxozACXUxRTAkz%2Bxy3ZDuyGj98YzlcyfSOBb1Ul4puLsA6fMx4tacRxn7e8DvV4R0Xe9nKAIPxVExoaGwqVv%2ByTxvtNg&X-Amz-Signature=4cfae39de619bcb3bfc75780f7354f6907f1e327178954f00887193bda5bc769&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG7TXF4Q%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJFMEMCH30y4UXiiM0O4CbEODYiCsmAN6KyRApXE4CWoG%2F9M2MCIDPlPpOWRveORHJPBpzRjxOY3KlPym0%2BNw943EMXpjovKv8DCDcQABoMNjM3NDIzMTgzODA1Igxat5Y0b4ain0fTAcsq3APp6EDHbzPFsfjHrziIf%2B8VF%2B6vlN%2B6m%2FC%2Fl%2BQXxjuUMgGjLf2%2BmVYARKORcSS1GdzlIUG3PsX%2B6JhOQIvFU4oJ%2FPPkqYlY8HhILm0hoXIbPlfAPSamLHTD74YL5waAvdIyEhXbrr%2F0YHaro76pIs3dpqP2Saj%2FKMLHmFxGx3l9HiOqRNnqvYWe6O0i2f8u8PFn%2Bndtr7ZbRlFCe4wWDqRj4WT9v4QfyB6g66FJjVDLTA3GrDmnKpRHaiAnk8oxg97V8l3g0VU57XaeNRZpZPWPFxMQnhFF%2Bl0qjh5nqcAFA0lCsqdmgzjYfTnUS8jGjJO%2FSAOdmtNtODqSkxxI%2F%2F0bR4T3PlpAyCynmVSLAWbe3eZWRX3JUp4AqubMfnMOyZ5Em8oaZcKghrY6cAup5FWmnJKfsk5bsHzoQZWDBM77EWL9okMhbuc5wJWkuq%2Fe%2BrpQ%2FekkT%2FatNKyF%2Folhtz08MbuWomkmmCO8nCJzUtd5ZfoaP94RG0ghTPIYV4O0%2FkFM6HexTwFYHbB60PJiLZj8j3xCOB7oueXTXj1Bb7JouCM7ZHf1pHf8d5Q%2FLTLTn1quSOXWEdWC0xwSZCLxHvxCPXBr7zbbZM5D4asGPu5INqGw8uZaCKUvhmn%2B6DCF3cLJBjqnAdtxFyOzRId3HYVC638%2Fa7%2B3MSGkRxJKnk36JgQJM0W3zMcptrRyiFWozeaBnoT9fgkPXcjF3vyV9EmDj5XXx0F%2BU5xPPGqKp9eGX1lBs3FF1sIiayreNweM755Epo56GOPQSbnEY21eKTpniK77gy4aJ9OJ67tE7pNWcC9bFQkdVXb0FOnNNYG5snUdTrV8o4j%2B9bcy9PcLBA%2FVqXM%2BIZi9LzzmVlES&X-Amz-Signature=89f3ad43c3d616d189b7c3f88c1206d19f414a94ec1c939debce011505d1b2cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

