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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CHPDEVI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIC%2Fm1yBtY2SL2gHbKQlw%2FBQskfbRj4MLi6yD7Y%2BhFiPBAiBWgK0W%2F4z%2FK%2FTyMppGjMrolRQpMHsDkgoX3UfEwxybuyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMM%2FHSyU14GDAFdaqxKtwDtYbSn4HcDJgbH5re2Nb9ZXlEELUUcXUWH057UvbN6Xl%2B%2F01D%2BNJ3R5Br1Kvz14PLZdEfdxAx4kBalHIONWAUwFfJGJcsAQHUyAzu9V34XIKZcC8LrSaWvpPf0YuS7wysTSuxqGDfhya2jAFoUXrA1t%2BRlGJyBLBJi8qQv5G2UeTKoDGopiNNVZckrLOq0zCTQKWA7N8vTIeTuHpgMgDKvy9wywbp1tMBu%2Fr56RG465wjVEaWLdiqvZ1uXnTCBS5JLnezSxpisXCC%2BOksxHcb65OM0qiPiIZYFrpe3l23H9Vl2sFWtRVhVVDs90DkFvYzFk2OtLoYqc4fM4X%2B4uY%2Fi1%2F5DC6Pte70VghSncCFZz%2Fn%2FqCpx5Sh7E9WR20KsLNJ1RyuMYiOX2WGsIVeqISni6vl8eP4CuIY503mqCj%2BlNfOWYYVYXYFj7imBdfVHfMMmMgIKi4mvNSSnqghpGPwfPnvNaKwRS76TQO9H2A%2FWp7hUU%2B8FpTQ8fFY6Hm5T5fQnqInxr6YDjmdtctHrV1EpWpPiKr6jeDeebxR%2F2Jx3NyQdddxv0mwBeG2fzVY%2FUXEOZXRkH4QRff9%2F09MeBngRDDmXUTBDL7427Yxp2c4qbpLRWCi88lA%2F%2Bm%2BMbswq8nEyQY6pgFqG2p3OxYTn3o5pm%2BtDZ6roofk4GPyCLDaSUZAOqKHi6cpNhnsvRp1cIqd%2BQ4OyIumMni8SlJe%2FQKLS8gEeYFUc0ahzZs6CyEKDX4eaygFa0leafuOOFxs%2FJV8j%2BNWSFuN1s9OuS2rPoXdzJk%2BqhkI9IOPwwFX7KJ8rTXfVTxSMv2jbyx5hiW2wKYoJN9HpID%2FOldNdM4PNyZcOTKvAS4Xtrf2kKmW&X-Amz-Signature=6f389b4fb6ad4752ca92ae4beadfdbed010cce996aedf74de3e7f3c7de10bc41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FQAL4SP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDZk0M8l7le11284PHxfJ7wTec%2BTvFVK22bDtx5J4FkkwIgaupvKPUs6jmNB1rFCWrgk5F4kTwczIfYP%2F4dhWWFrS0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDGSl6cxtCM5%2B2OCg7ircAwiQBb2KGyYESCe%2BlCYolb1TqKSlfb998b8XbmCXrB1G3bJjDH%2BCXhSGLS7U1qotoCHdahBwVewT0rawYQkfNa3VaS%2FzJMupd1WKkVz0h0GUzZC5RnHNUq656pXlyrnaR1EmhFYZq2CXDGSIFRqUQQXaPepmMkCD2HErwbTi41m7w%2FUROh3YLNgncMqm1IsmADVxyEJp5KBQ9J3m3WpOQCew9D76wzbdxBeYPhjqiLkh4TckWFl%2FOU7sLEQYhFBcySv2CRNytVREtXVFJTwlooUVoYFo5HZz5ywJaGiH9Yxh1H4ewfjN0ZZRoGH2o9jcPQYf%2Ffc203JA2JtmPy8EWvtrLIW%2BQjIrpWNpqkin15olx4gvJn1UuSa2kCzbgi4qNn8fmNOvMGpblKceO5sr%2Bag9k2y8h%2FYSTZ8YrcoH%2FhwcE6TD8sT08LKezgMWzT01HpysPba%2F1oKXcGaYzHsZ2e14hESIaLTNm%2BLss8UzbX0ivK%2BIuV0LtCG9lfmQkRzlKHNhFadpzBvBs9gpCeRCQ3ksaJvdyz%2FqPeIwlVWplpgwSaiyp5TyKW79oDrjVre3atUjiCwc%2FwkrJ4CxlrKd5RDArBD33gWC9C5znZ%2FLRB3lbtZLk0HkZ%2Fusc19%2BMJ7KxMkGOqUBAFu7zy7wLvGDUHzQPOzfmfxSrlVE4m%2Fx1u8x2L%2Bcd6RHEvv2VHMQIcARKAmiehAmr1mXUgspzpmapAgJ8lYLUDTv2SxRASms%2B%2BdljRjXU%2FMAPGbs07WJxmf0ljBchVww6xOtJ45n04Daej5TM9DMeOoGbZeAVfI6eBoyc2mJsC1uu5Kg%2FdRZJ1t5ku6XKPQU1jl5kJfnkU2GN3d8gZqpv1Rb%2Fxms&X-Amz-Signature=2c900276543eb1769f54ade64a805af0a5ad26da05103da671e6b350a05b1468&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

