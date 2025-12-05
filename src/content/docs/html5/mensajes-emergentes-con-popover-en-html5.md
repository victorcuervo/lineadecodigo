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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV5W4DII%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T170524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzi7Bt2AdqNFXmEXaUOmWqPP5S2gv1CxEBMyEsj9zhigIhAKp2u7B1C18ftnA4v%2B0snQxvWH%2B9pCtuxdmyIUYmJTB4Kv8DCGAQABoMNjM3NDIzMTgzODA1IgzSNmazDIqI2fFCK%2Bcq3AMlv5XntyPjKWbO9CefIBx3sDQARdmJTeseIiwmGj7C9zs77Qbx8tXigApxgpp7GrN5skAJzlMqFo4aUOpWvYhUgvMnEowY1SjsAEVMvh0w%2FyoRui6QEBWKGuV0OTjEwumKDdQsDRM1G8j9BuYO5EW8FGSta1d4xQ2MujQcNB7xoeJ6GR5z5zEll9brNW5jXkGOoLg8I1qW0Z6LPe5%2BijxEeDQ8Ko4WAhn50bjlN7YG7w9n%2B0aGNNJXz8NAj5JY4Gi%2Fa4cKhmTVNeuVVh8aumUkMeBPntb%2Bge9TaOkJARv4zBrm8uyzX9GGB5cm%2FOoZKzWfYSjrU80ig%2F12MJuC%2BA9TXLmmK9BccZ7lxp%2Bc7NqSJHNWZ94iqkU9OA6%2FpV77tn6hwK5Fgov%2BFzy1Gd6dHlz3ReZPN%2FNQmSUYxzp5gg2G%2ByTGRiQ7Qte8nuJsEgdp%2F6%2FlHvt6EqUdWRn0zEYWfWdpUUMksFm6FMuPqeE1Oh9L4wU4Kwty8PmiHKaRCkebA8RNgToOtl%2BWhX5NNKIW24o4%2FVxYnoQmX3YM%2BeT2%2FvRH70W8Nxh9R%2Fp9YPj19ihELaUrOVWYILyOBjYbgpoBCaELSWSybsx3FeVelI6rRwSq4Iuq5WssLcoSihnH0zCO8cvJBjqkAXHjNTf6e8ykMYkRKlCnYESmb9IzQdOoW%2FyJxLw9RLS9G%2FrLo99FkSNiRfByPquI5zSA85COidXPHYxxn4jDEaqwgOr5N0z%2F8LzNe9JiT2iIcNCM7RHjOKWE60MJp%2Fqd7S5ExT3OoXlnrRCmoc1zlYtrXagxe%2FjD056Hq%2BHZPeCzKYMMal2ba5pGjC6n94aO4Amnt1UUivGIzIFwiJZGY8QWNfmD&X-Amz-Signature=df6d2a349391897f0195369db9bdaf3f60c8fd50d77621ea149614bbd9e124cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ROIFTFO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T170524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGVNxP2TEXfnaqpOS2P5Tm8G1tLQCH6Aw4oNcl%2BtZ1tAiAn9t3vmtleDnzB1bQ2y7hKwiiv7BptAeK6AFMSz%2FwJqyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMRsD9UenStRnJ3aoHKtwD4fuQPnJj2%2F9lVVtaulVi371XZc8gOFgGckEGk4qylCmL0wGVS4uf1L4%2B%2Fl9%2BVV9LfIQO%2FZ5LSKzk4cafXz52YCKArR3Urp90pOVnn4orlgKh7Dg%2FjR6ZrW6OQdgNUf3pHQ6d8ZhH2QcGkLKL8Tc55l8nBgc4qkXBQNxMSQ3oO2ASBb%2BRaXeu2mp1m0uErvorD9twRO8NZVlt9zfma5Txv%2B3TVRKFN3eGaOqFnKdIYL77DM%2Ftpl94okiHbG5HCGnHILnH%2Fd6oFvZJa9fUCjUy2k2%2F4MG4en1DZoL1Y%2BtC4kIw%2FYq%2FYtlsSM9CVXJ3hfE228Bb494oc2x33xh0xfk4Q8RMQeHeEWcgmwgt9en2vKr%2BINX64TXaIgRiabZ%2Fr%2Fu2gtFm%2BG1jo7n7imdqEAiY7Y%2BWtbbvVIS7%2BQ8Y2asS7JvIMUy0S%2B93xbZukRRf3nKZBsFK1EHMF0wwtHAmH59rUUVjqWYp7PeMTiizn3f9xlX3rntT1ZSnVdBBXJv%2B7HWehCDM4nbBeS159L51wwdpWvFXS7gGouxbBKLO1bjzkRRDe9QNkYJNJ2LOYMlaZ93Nuev0tyCu6s3EAGxxx5zcfF032uHWGCTZKu8eo26DD%2BzHwB74g9UKskSMwMMwk%2FHLyQY6pgFhjqlvvNbmiTJ0hirE9ACAz682VS4GbXjC0EyEW6AVO5fLKx1vDeaHonzUdHbzu6zU1GB826XYD%2BnrmPgr1m1MRhZjD4hHBKpYp%2FPgeCVwOKNJh4AY7AKgjEABIZ09ReL6le%2BEFIFbgF1peMuhxuAFPV8hDIk4SWapp7Sn1mzr8YQ1fRGEmZWDDh5koyZmULEm8qlzpGuNskzwXnYSFvcTrCcO3WeO&X-Amz-Signature=bf04192c494306f71ea6c5a9bc1a16f80fc86a781bc74d1cfae7044eff209763&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

