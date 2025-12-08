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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO6KUP43%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T053705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYkvxpAf%2B%2BivzGls8Ve9NjE6O0syH1F%2Fu8SIBr6s5zbAiBJuM5uafKIMoDO2GnJ%2BD6rzxz0kqcyFU4QbL9n6ZCSeyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaBWkYgoLuCsaGVPpKtwDTweHfseybZr9FJ1R0R2SrYqM%2FLMP0sw75huQRaNp8KOeyPQcqaHEKKecUGZu%2BasEH4Udbhh5drGaq0Uyvug94Am%2BWduqkrWHfJI9UhSPrlU%2F9QMRlFjvwACSjLzXO3Q5hsCa0htYAAazMZdFgnbX4f76GLvqHAWqV9ojMvpr6hl8KvpTcahDXE3dE3JJHRWP8jS45t1iLjDZ1gEwL9Z6AgBYeGgIVgRWWtpnc8b1oRY%2BbLWVq2J6E%2B0MkniaePMzsapWMlFVnPUdz%2B1QU8LK0RnUr1CoVFZRImYanZFVWZKEiyiA1Zq7OyQIOSBcrKluJq%2BDAza%2BCBkEWqD0N9uPmmIC3Iq1DN%2FBtPiVgoxbz2K6wzY4aCG5musmkHAFWbENKb8G%2B28slEpMrW2gHVMsmxfy7j897E4Qi%2BsixxQzc7xKcjksPlXWJHvYajjHEvfj9SqWMRqsnY9wY2QEdZXCvPc2jVhMdvi%2BLlQQTv1DVVwGrQ7YyncGJUThbNzmCOuU%2BnKmeU8mHmWpqIg9Yy975cqw6AVUDgo41MdoneMXMmknlUia8HVTY017MNkjsWqZeUGiQPZR1jjyp502qBvqP0vfvAgLP5h1WD4uhNnAm2JAkndKKjGF%2Bil91oQw%2F7PZyQY6pgHY7LH0a8U2gwQiaTKtmz4A2SMCPO52GL9VQ9AI2roarljUhBm1nmP%2BDE0NwnlcypyecFIaq4XqsgmB3a%2BSLiI5OT4%2BwhbyNSmZjSzbYdWvvBc7gYWwkyGjO%2FPVyiA%2F9NhXBrQeKPdQ%2ByszJCDufw5XHm7PCiZzn5AnYaEZMuLkK%2FFGX78XlpC61pQUEdpqMDKaFMiJQlYlepNGdILz7bSXw0DwnVak&X-Amz-Signature=0605e43fd87249f9cc48d5c2bb11ed6ea46e7beb4778d9132ab9e319524e4932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6AGPI4S%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T053705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxZQkL99h2JvPQG8zoebFVrHwJGU7YdIbAwXq6KjmzkQIgWiHwo5lgn8dV0Ot9BvbAQfMarXI%2FdD6TmtxtImhg5DMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSr%2Ba5253syLK9ufircAw%2BC%2BWoipmxYzZ0CHaYVOrpbn0oB%2BtpbXr5rFFZb7k10KM2jRtHVO%2B9r0xDK9xAaM7kkgYTqshhr7lJmYmiE44mWj8dr7DsLn5vXFcwduuabtdR55H15wOQE36XEQFwUBdjKXPsmqiRKOauO5GYlgGBRD8pgTJ1yHzm%2B5Eoaya%2FpH4EjK0UGmTvx0u9lDJYdWQU%2Bxbic8NOGH60nSX%2BLvWC8u1Q4OL18jFn7dHOWQFoxOd%2BjtczQVMXyRjL16eV2FEpXIei90Ix3l1D1wS4h%2Fprq4e4IVqzIIDcNkSyl8MFp4qI2RlMz3wLYwTDu1CrQt0VRzKwgXx1kdnLvVFdtJ%2BlN8EKfZ1LggX9ueEMJCmRnMpMm1%2B7EScXiDzMi8OMtrZlOH2hC8Itv0c19v7H3tY28EiP5K1JIy1R%2BdivtHJxB1WOqt1ILE%2BWXoS5SM8R8Iq%2B6HDdSMBGpopVYKSBEN7KW85BehwcXhw%2BB0VB2RTvzR0D7sNHp3CiOYaMKDIS0SXWHMUH8v%2FObXijEduvgcFlsh7Kv1R9FfJaDknZwZdbWPndtn80orpKfv5u8lW13Zmv8xjMeDb3rzVPgyNIuo2dCYWUzMvjq%2BtPA1G2zm%2F3MNz70l8G1vPL0rAHiMNi02ckGOqUBuG4sYdHAKM2BiZIBH%2FQfFHNz%2BI%2BEdYM%2FOHQN7ZwPPIt5YakLSyLFPfWbzR6w5w16piJxtNF7rUQhQvaGMuJaMH3mBlt%2BGeaXQImpyVTSKl4PIuK%2BWhwvs4jwwMY8z%2Byfiulolj2cytKP85ZLjZV6u2Nz0eqwRaaabdH%2FxUdyFn1xi%2FeFnxAyCPIiZ%2BGptO%2FCURAWUx810dWwLErvt7gf3YWDRrs0&X-Amz-Signature=b63db2fafe4f92f8e63ff4f54b9018c8551a2236c3a6de0bfa5b49e5e33e34a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

