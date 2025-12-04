---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J4WNMC6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQD%2FHbddkMRQeKBE9cHzy0eUrKpJepDFPpibwKcZJNDcTAIhAM1LOEFY6MyYelfl9gEVUzaIRYkI35%2BWde1GKTMOoXODKv8DCD8QABoMNjM3NDIzMTgzODA1IgxR8qNmWVcRPWVbJlsq3ANXGfSv98s%2BH4ijm58Y%2Bw6G9npr%2FeEGcU2cTyybPBbs9zq5iWBUbkoGjlRadZtzeHaz%2F2cMdMYu%2Bsd8vJgyJtVynAHEQXdxtgWVfEGb1uvmM%2Fq0j5HgrXOAuMFbYBfot3tp5%2BzxT94TMDN3Y9qB2nvcUd2B0XlUGryyxP%2BePlL0N6GmseixKIqIFZlR%2BDw5A3r%2BUlKIKz17syp2JQkzDanxBLIXO%2FiovvjiedtV8sb8WmLMHCTq9FW4k8yQBn9yzouF1inuplwQiH9PdvZjDu%2FpvpkcIwWnrk%2B4GrA1dKAzTC%2FF4zHc36bm7ugi0TAeAcWbKbpD64hEUsu0DbYpl%2FpZvpO6GlcKFDTS22M02kMLuiar%2Fei15A8Qm%2B1SG9EcWpsna0kMC%2B7xe9l%2BKE%2BG2TBEA79XTN9LzDB5%2Bsk%2FMzFUBM3jkUj5YDO8giWBJM2CURzABkvwPHj4w0vn74YFt1VvgegO%2B3aF4n1BLBNoKbDzLLxhcasP6JYUduLG9nXBM7TBt4f%2FCdmx7eObaUC0mSfQ2ejDtHAEgSH6ywVA5Ti0MdCSfpn1kw4t8HfUoxQuZo5Fk4rAIISK%2Bh%2Br%2B2KMNmwVuK7dK1tcO1%2BN2PEwlLhwWnVuqPflQO%2BhsjsaMzCUy8TJBjqkAcepN%2B6xVciHPhqzVahhDCALdBRh4izaud%2F%2B403MC1sReVAbKtWBqqQ%2FIdL1HSGX%2BVyaGr6n9gBxm6I31H7UPjuX2IbNrFpya9y8nQ7E7s0X3dk07gMOpZTr0ZU3MS9DAXcxiHMcN1FRbWz68SxsLvan%2FZB88fapM2sKg%2B%2BLaxRffgalgNbYr%2BiOXrl9qD5vomCMZ%2BYmoD41G6phbSRaJ8qHOCLF&X-Amz-Signature=26e94e2be0804f69eb0155676173d509faaeed60d4aef71e71ade6966fc9e00c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE6UACY7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCeHweEzY6VunYshZdMzzi1OzKGNe3n0DfSCNMEHhM4QwIgQ3TkLzA21Mk5z3tA4ciF6zqCeLGFrZxRNCEPd4fWQnIq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDA01DFRV388UlLiHoCrcAwWPeSfDnVIFxWkXzXQZys4o5rwMskgc%2BctB1F1ELjgZCxgWvx1xOfpcmmbKmCNXy5Aj4qho3UcK0RBaRDfxWdeqV9rY9JwHpCb40%2Bi87Ybw9ZPmJSUIsA4kpWOFLvC1a4MLDmvGE2PZsQVmVyxudA7n3mHaH55H5B%2BBshACMCtMAAJVfjPsMbVR%2BoL5guwJ8ydFGnqliuHDEERTKFpZrCRxt87RrTmOU%2FIcnBLYGAY3%2Bcv12GxCe8jbeaMV46DGIHlc3gIC5654p3pm6Ul8b%2Fl8G6mnvoqTM%2ByCOCPrwIaDJY%2FH0S1vZMrWHhmtpwPfZAYb4ofI0etAEjYjizygKMFwwKfFF9j5CPAMwcgvwtFCiUzJXDmhSW6fRqGZj1fCkBBmt2r9wSIvidwHLwftC6spKI3UU1di%2BvYxTw9dVGtvG6OgiQFwbzZc0IYBHFX6OY2EUVk%2FmIrQqAC%2F5nnTTjQPPFzwLySRT5c5g61Wls5d48JzIeP16Wu3HfjlYRKyAbQRuK49Hn7Bl7apHJBfjl%2F%2FjpbYNcB1gPbwjMiSNzBmOGnrxghtdcELUdeFq3fSqT4ba9cX0YVGhTHoeSogwtLlhRViTUj0Ketkb0qinkDDzEJYWyvYeb9GGvf5MKPKxMkGOqUBZM1DWpC%2F2QQ2hKLOqqLfq0HEUw0tOi6ZqrQEB3qYVuw3zRiX4rcfyCRIaQg0ZUwlJyvyoafcE7vrk36kq461HfNFIV0fLZmFwbgixOfm63ZBVsk%2Bw9LdGvvszPC7MQsahqTib7vArlLOpqeGAkeSMJWGU3CJxzMqnAZqNl7aPFNleBlTs8loxTv3TQactBoMsS66aeKkeDmQTqUUzME8Ewoex7lt&X-Amz-Signature=907770037e1bce467e1ee13bd309ccbb9b2a64611dbcf3974003332b009d3634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

