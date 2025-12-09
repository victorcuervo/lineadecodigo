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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTJQX72T%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T093959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuDsbe8oUPe9O66a9gT%2Fhuud5Lk5ppBoD61TUIk9XabwIgG%2BCf%2BJT6cMKZjBmUJI%2F8nzLBX4Mp%2BrEDkQE%2BBqMFz%2BUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXGfty2NNtRxZrkZircA57vMFebDl1nmNXvTGJiLIYELsefFyXiZC%2BSgOClrMknrYClmHptIFOeUeTlgkMIXA%2Fjr8ePh7b1DbWmSFakc8N8wZ3biOlEpJ5SfrtrRJT%2Fa6vUYfYMJOnInpV5G3EcPgkACOdNyorBDMRkOwx9kZPCUR6PZN7y5SVmEH%2Fk5zRcugtu4td6meucB6UItDAj6NLo7JbtbHQFR5O1ARQSe44Dl82DPBVS5g6b%2FUjGY1et7Humo6Nk4Y%2BbFQAiSSqt7%2BeoS6G8U91Xo%2BlK90a4hk5DCphWytUl1E65FCK0ScuMvZR3t6fgLK8PEVJaDSJXVVif3pKqChicpi0umxYdT%2Ba2NIJf2G5Mj0Yx9JhZIDZ8xmsILZ8mcuf3z%2FbaoBYw4qp2X%2FW53r6tYft6%2FPxYoyYY7z1U1Gk2ZCvNXMZXR4W7MR6CGdK2nXpGaQdhA8tL%2Bm2mf9fhGOXJL1mn8a1C9BJHbxOPjWE03oeDL6LPuY%2Fx0a6Q35yxbANhcpD2hZN3y%2BYvoNEFGA1tX%2FAmZkqY1UlQnIp3sjDuCgPyB2vtNsPAwkZwAyWJjt1xYl4thSdznYrbqBz3kdYEq3WTDdp29O%2FFeOpyUnYd%2B8UJizCAYG%2FJAzE82yJVQMwsW%2BCtMLzE38kGOqUBRP8xG8s%2B2%2BIEs6aZSq8vBeuxa3yz27oRoXLcm8C10qjv6ZVxctaM7V5x28%2Bh4U%2BFJ7pQJbFCHa824yws8MFeaRISG%2B72jTbiL1WW%2BT8Uu%2B9FoBGgoB%2B%2BdGtif1hyOlwvCYPHEQ1bsZ%2BPfREskPoWu4SaJXHAW4dC3AAbe7uS4JNkHkUggx8F9VxWSrIzTkQOeGUz2xmtaXPJf1g3ixAyz2IDyRZJ&X-Amz-Signature=d8457fe6a2fe1daaae61399441aa2bbe7852439536f4228bd3c35e2226957f5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SCEXYRN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T093959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBdwMe9%2FSS0wUtdZce2ySRFu0bu92L1sR2p1wc91P%2F0wIhAKZ%2B%2BuR2VcaGUWhF845cmLHiK4wo3Wvo%2BFIpGYh0qyybKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycnXCoCTHfAmdRfbIq3ANOQSTLmeAdB831L91hOT%2FNqIROaEjNC1VuRj%2BHk5dON7o0TVipCtFxcJGP5%2BNzrDqtPsl8ordedDA8i7kh%2FTHUwreBV3P8y48M9MpxQqKE2zgA8VcvzgIeGM9YvEaWvCgifOG7Kjrg5yq9oDJWXhqyU%2FdfHZjBXjsGvMSfwxyejfmh7vmH9Q7RGVGUHVKfk0gzr%2F6ysHlXza4Y%2FpzC%2FBcDAg8Ww2zwY1Eyu1yaBBBpOwiuBai9XGyEDYxa7OhxICzuCBrlM1YuPkFD8apzms%2F6le0l6rz18WpruFS6ei8QTF4NdOa%2BXAyTiTFKkH2ImnXg3eXJjP2onNKMkdt9nKp11RfJWmP%2FfXTgLjiZjl4fp9cXDGTgjR2nmNjVDqB7PnGCXP2iwwAEZKwmSnc8AmhdgRvX6YJJZ7TxxEQLH9N%2FMPZGwmxB9yoiPDLJXLl7f5qI80pWhvEjIQwldgy6q%2BA%2Fbvzg9NdOhz1XNvyi789NJnT67Ljt96MDs3ClpRnrEFZ0BRGpJhN4hXmiFVVx08PA31eHUASjwVS29wBoUx1pSZMos4sD1HR0n%2FGegRnLtYDRmQ%2FC6%2F1kZ2sv9lq9zDzKEFFxUq4SIBX8efrjbt7wUrE32kbI1CgVlQjA4zDBxN%2FJBjqkAWzNoT81zoXA0f9dq4kYKA75qpk%2FGSdQQKk2eer%2F9O2nR7ewrbbXgfP3YfMP3x649640tlxq2p4RijyD%2FOgBB1W8ALDMmO%2FTxkihDtsrWQ3AdzewD1uSkKPFWeIAwUIQHy58ASU5bzfKmkZkNHLZ%2Fhj1GkeGaUdME1br0BSr9DL%2BvjRQIRE5c%2B9IRxZOwhojhAgfP%2FhKpCq13zxC8GhF5%2BzrWZWj&X-Amz-Signature=47d979514fcdb77a5ca31ed66b698310000cc7089b779d76eaae1fda9560165c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

