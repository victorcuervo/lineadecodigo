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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGDM42CI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArGM8spNsEDp46nIw67voYY2Ay0OShUDP8WiA2nUl50AiBLkU6ndcE9TxvSqK8w%2FobrS8%2BPFeNgyAefAzoxKlB%2BUSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMZ8V%2B%2F3T7e75zRcauKtwD1B5BQwrkv2Kb9xLXowa41M33BDP6vbu8hWJS8VKkW9wz3H9LMbV56nZFDeqVnZmHIapmRbRQ4BIvq9mSV7PJGYVwT7x6LCoHJC2P7FhTRPzdVdXFZ9UOIPRXJ4wHosac93h%2BNiEZAYM9HezccwAkMbYuvsBp2FGyDlJ3zTyH4VdvoS0K5arrdp3pHa9m96sFjbNxL99cxmFPgmiboDeauFlQSJkK9RLNXOEYqFhNoGcFZJO9wswpE1FHOAhQXYNo1ftrIy9NUGQXnjnS6TrpE7i%2Bzf5qDAJo6d6AYaaYWPguNN%2Fbv27wi8b6ahrhjst5YACoTzG%2Fwl3RQYami2iRsj8Te57lmHA30i7Y8Xi7d7i0buwegMs44LXMsmOOrghkUa3NE6I4EcuFm1JbNVSUMkdIEz2C0HZR277mxhhfRwQ%2FWWZmnaqi6mceq5aQma0q98N335F6zAv6dGPGrA86ozqmvUUf5Xf%2F0vd5SQesyN%2BMkymeg5M1%2FO0RcXCgoH5tPGJrYJB8ZkGKAJA4NfxPkzf2s06wBDhW40yfdYyea%2F6VpyMCioeOlqUibxZ61j7kVoasFE6hQiCgP5GM4pc9ip5rTAZbBzBbsTVBnPbMaKx5UK2lT7PLvMsFSBow9IvIyQY6pgFfoSjKwpw1H6PArLdxp582AKVr1EW%2FbBAIzH34VELmJHHn8gm52LkXv8%2FscOuDLKmDWU5C3fuR4nCC7YZ%2F1H8gsDfq9qNNzNpCyzGc%2F2rcCw%2BH%2BnhHYwPoenlaOArtsJqpB1%2F%2FuWto0%2BQg7jepmga1AyK6DOZqWbOwxsommV8wCkIi2IRIzVwG7q%2BmWaLJU8fCpS79rAG5kFAW%2BM5KJSan27HLEBEW&X-Amz-Signature=676317f715afe2ed28fbf497d465fbd9ae64a0d88664520d776cc482794e4b2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3SC232U%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHM%2BHEntkulos%2BZAiwg68hdFR9%2FsH7ya9MVCHwd4c5HAiBYAUFNR5tJLuL7K9t8vgynqRwWCZ5gNExmtmWtzobQNCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMEzwNLTruMRHMca%2BEKtwD6dLm%2BANNiOdmICsuCF4aUfQTpUNtXmqjKJJ%2BpsYN7rok7cJqDoVWmi4mMXgfooflj97ZSxt3EaF6z8MUXbAy0wUHzD3IWNc1mjMWywnf7ArRQ1KlgboC4KYo9TBBCh5CMjLfpNSalNoh64eGcgTskM9vzxhBwbW8KrUIqTCjoIwyKb4OQP1WdpwPPySPD%2FineruS4QI851xiEhWz9P7EGrHF9TmDRPMSr9ioHLRZ2APEACHeXNnSaMTM02x14cC7jyLRzOgbbeZMAb%2FgusrDxj9SRHEVv1ykhG96%2F86dzx18DFXlvNQMmtHLAJ1d8PGV74CXrPYZJPZ6Q21hZWj5%2B4icnzeJNN1bvztxDLRxmpNtoYDkKBXS4RlPHApgEthI4p8D2%2BQiYESd0EOLolISd%2Bhx%2FjPfJJfOCFa6CUXhqwJP7YnKA6u9VfrqgbO2I3rFwyKugQqYOkJ2EiI2rL9e9dUT%2Fv0DdUC9S21N4V5lTRKf3Zcfq3DrXnutfavVJykXYVMJF%2FVUBMdTe7kLLRvrFchjGAj%2FDP%2BdU68RZp2RfueR5hmUrOd%2FRroCwHX%2FDLajR6X%2FAJBGQ2qFrEdFZtS9phM5kCyQzaGyjiHPYtzwJfj7T0SL1U8RI2sPEzIw94vIyQY6pgFOOrt%2BQgSbLil%2F4FdgO188IIN2KmCXmipDM9Y9ozvoc%2B%2BQzL0eIkqxCHiJ4rcqEANt66KokpsL0eh6pmdIYKlAKYcAx72e921dL55p1y7wtUEIfX%2FJoh6mZDfOjgHYII8fncNk2%2Frjyyy8m%2FTp6Qwewgl5YA7qt5gFSNEkAlYDAhvMbhUpzPv5TgqhG1hpGEnyzxmDNMDGDA%2BJXCIEmDjbP6XF95MY&X-Amz-Signature=985b4d77c2191ffa7beccd0f06da7bb03bcddfc0f0a6fea4471fd65989615bd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

