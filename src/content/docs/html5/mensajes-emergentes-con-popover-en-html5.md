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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LCDV27B%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCK6v%2BYPW93TRo9V3CTOQdsa%2FYTs7iZ8bqbF55JNJCZQIgXo78qBGm1U29zSD4SFavqGkssul4wD%2B0VD812OLkOhUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNjy2PwrFZuh6qenzSrcA2dfCKHRJjVadHCoJc4ASGjBHrnd8KbjoN3g%2BeHBfqTZyaC628NGXKMld8zv3b06dCN3wSkAiR%2B6fduYDq4N%2B0PFS%2FhkVKSCXwfg4RuZbZ0RKPMr%2BI9cXMCtNDQjbq6pUmDtZJyZx3cIWVynuKAj5pftiGrKcl6rE0zTkAJTcMDsaM7cKwETMhyXMY58m8DUdim%2FjTcZy7UN9j8rvEXJ17LbOQLDkepdoa8N7yEZBC0OtDpnSi3YvLR%2FjwLSi6fQEt7CMSKbKL5zLZylRayBnQRE0OeFag3Vm5Ug0wVUlyOEQgD%2BjaZb0sl9OQ2VFfDRGasKjur6kXrUzKbqFeCtyCtoJcPA0Xpz2vjs1xnMwsYw8C6D7YGs2JoDY0M1NX8pvT2Uy3%2FNi88g12Dh9Ju%2F0pjL867Pr4NtB1w4%2F6393%2F19aIytcH9fybHlD3VQ1c6Ki99XzwBw18yPAdEZaQUWKD6%2BTvZiJsiz9VIygXKDEvAiIAHE%2FG3rLKC21f8WDiA7QXwsWsB65aCMejdqU%2FvVPsTWmpsrG6EBHzREvs0DeysvIrsBx7NA0DlKJhBcVut1WLkxVGzVHUt20x%2FmBV%2BykDxtrQ2AlNirl6ibEaM39P5qdhYbmyhuZvlschMjMMz%2FzMkGOqUBe1hht899l02YlqMlufZ8bUrFFka0tpehZI9dS5N3fphVHzUqE8QZmpiJClrb4ZcmvOWXpHGk6bSm88C0h4ZYHfbc2I8M%2FQLJa2aOf%2FgEBGfbLC3B59XIQK%2BLNhy%2BxqKLF1wKPITSuyQ4pMvAbv9BWrPCJI9WEMNfsCeV2QmnCCAhMhfWR2ASbil956gGKS2a%2FpDhLU%2BR0EDFftgo6du09rIOYcXx&X-Amz-Signature=a98fba8c9517e399ca8044c12a9d37eb2f36d32b9022e22d2128d02a89e11e57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI7A4MMK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClm1WArm645XZwEkv1JOhuMRH0Szavjnh6NYhPLrGpdQIgGWbhTZJ3Y%2F45dwostj4cjxZINtvQBrXEsAHvjd%2BENlYq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDHt%2BtT53lcavpnPeCCrcA8SYza%2F%2FVUnVYGB3LmSFMiIyUiTcQMDnizMWjs0ogBvm%2FkARMDhgBDuCkegZqPDEjNkP2IcJJ5dg5JavZ1xJzI4Y7viy%2BhD5YYdMe0ZLOEeLwipH5UoKVkGV%2F%2FSaeayB4wSZnjMlryz6Q7UxaofIe0hLsgG%2BdZulIEt4xDvNFytqayWdB1%2F60Mts8zuy3Yy3Fd%2BvHUABvQ%2B%2BvdIaNg9P06F0waHzyz5j55IA4TvuS5RXXp8x3advKoP%2BtcCyVfqQteE1vzD1N8DUiXVIDLnDSauy02T6owQx3YeOLEsMsd2qQ5L15OTgE3L1Vqf6RYukEmnpAa3tpR3FYldvzEY87Iwh57a7PehINkP5WyXRVoq5pu6qDFfWOyegHfIo%2B4tdspsKVNd5FseUmsknGzNXwgsmPrWaR0fmtoMaGWUxxbK9DHwxPF2i8xt4ATxHmDikJaVPZeE8dd4GbB80MFxkvUs%2BR%2B1M13T3fZlHRfkQOT8rOppL0%2FCVMu6XZ6h%2BInN4qXKTHgaH%2B3hvOOSqyXY6vneEQs6M8CXI7L3KRMH%2B1PpC3qBexSQGsnN5ep8JcrjKGN66irGkOptD4oPnQCHMbbIlBb2TAZGYw3aOCoLiHOjor5JKmUMLaHbRgCNqMLvty8kGOqUBv%2BrYetnSRT2xxMDa462P3ui4WFWCymwbuX2G6wHc1gw0SZPZ5sRQKSatDGAwaFOGsDBIhammbSgqI%2FfzywmHnxURRlGj%2FJLQO4RpaimMlMe3z7DH%2B%2BcnWbI5LjWSSeyJn2atxdN721RcPoA3Iu6FmS1jNguHFW6V4CqIEFH%2BGp1b%2FiuWFiurqZbCDRr5mNwX5s6QpUDGP%2FXVKCf9f%2FHrMgvD7U0o&X-Amz-Signature=4748b6aa55103e585a9496ab7998d77dcf00b503f9ab1f5e8fc11efb4dc51051&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

