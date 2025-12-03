---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMNT6BZO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T180232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFYyNe%2B%2BBwsckMHrhT14hlR6DU%2F1DdY%2FrR7AniHb1rjpAiEA5CYkWGrJWSK6%2FN0ybLPOzAiO3IVXIiKhA114QQUtLboq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDPiQqGMRmtnQfz78oCrcA4lV4RCxZM9an2arRxKWkbByILdQxlDeTX7jpp3daWep78m%2FN4VOHwaJSdRsl1thZg9Ioi8qF2ihYJSnKRNDga4B%2FdUz4zzCbIhr%2BETliVUgbc5EE4nEGvEoTXylnSBEylCCn4bHUvpvNRUnFTHZuDC1H9bUibByurxuda5ajLyrv0Yas30fGyet8bvmHuQCNXFW6Nw2GFRad0%2Brm0Nc0ZAa5la%2FcDPobq4lRVu38b7tyLCGoKyypjQ09RBojwO5cVCr61yZ%2BD4cJ1KGFORnTzKsTkF0gC1bB1bFcg653j9ZJ1YHbeZ35wQu4dCZkHy9TT%2BVCKgudY9qTNApS%2Ba5vlOh10kt0WG47QfnHG49GKsRxRCvkW070HvNZW4LA2EEiXBAThgcbh4LM%2Bus7eet%2Fs1X4d2wuixG3tTyBQe%2BLd6lv5BpE9xn8i4w90AC5mI1%2BOZRjZhmGkA2K09yeMDkctjzFS0MytyJoQolYIOmWLU%2By99%2FEjQOjKwCZcJ5%2BzsJSWfAjVC%2BFtBNiR8tlGRy7aH4xKdqTScnr7kb9PgxbPsbMj4f1RY1XbZTx10wOtyVQSKKRhaOPbRs1pwDvaxHa7wesyccenjM88LoB4Nbg41s4pWSHLHduQAWvsu3MNrawckGOqUBCO%2Fj0ApbweZCoosVYq8OYQtwtI7xMhHmgElPBCNK5DiY0CeP7BHxTud1B5z1kAqZCZIUshxxjYznOTzNBQhzF8ByPNPExSzpU%2FczIL3UW8pGScpW0zvlKEpu76F41u2n%2FIx8J%2BRgs6LffAnMMNr7NpvuQWvPqMHoPvt4Q6Wqhac%2FExa3N6DPimxCpcneIaJPXazIKy%2B%2Bh4kWaGVfIuv%2Foj%2ByieEl&X-Amz-Signature=b060a2792b2d996037883bd329044915e89ba27c97d82377546b3be6d8bda9f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT3UI3J5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T180232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIADTzbn0rSRwxr4KQi0tRp3ZsuWPVTbZJHf%2ByLPKjWQ2AiAXVo0WoyItWfy1wECyamolb26hvG0IW93iWcG%2BRxMXGyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM1S4K38WZHU2adjTvKtwDW7HARuHbDSCjBhtHSZ3jAZtkSJ2NC%2BKOf%2FP%2FOZzHdKcqKEMsGxr2Q0E7narkVum5yl8diGWVWfxQoCmwPFJhsbySfs3EmVh3skTSKFdH9Pk0BhJy8tTDF5bSixnmkSpqNj7VTPhyJ%2FXcj8%2FPeEH%2FXb0E5WhoNPj3dfin0blxww2AiHb2T62Blgzd%2Bp7nAoVTVlFXhu31cj%2FaD8rbOR9cEiczrHRGShjm0kYKZedoC2K2muDEqjjBTHMU9EW0QMWyRhwigzWoiFJuldg4AuDHJQd2bM4POX5wQh2CM7LGxbif61ZEnngMKeWX%2BGC4VJtDMu%2FqCXpLaSXinq%2BiDWW%2BQ6jKUi9q9A9KFUigfME7yo%2FEoa5JnPnFyr9TDfgA3%2FcY5Y%2FHBShrK%2BKMWbh4mAbPdX3KAATg8NrpeswPbuStvnZaO43uBgHyOn%2FOfn0vLn%2BC8dc0WL3Q6RB%2FQB%2BoEkFNVlNsIFWqzK8WsGHdkUhmelPvZ8MtE9HQBOoJp5lY8oFXy%2BgFBMDrWY7O3%2F6JfZyqWadyxzEPKH2HWLXaJ41d8PmW8fCgGLNEUIwBXSnSb72jLD%2FHpFWqB5w9NbKlv9U8aYSRB7DcAZut8jWFvExbTI8JY6l%2BxyiukDh59l8wm9vByQY6pgG55QS9EcomwtwJDcN8tyGP0hqHfh1bMMHZmhT2V6wtvoWVpOR%2F8EKjUWkurNSVoopYvAPKjztsVRTV%2B7AsUIZ6Zo%2BpYPYNeSRDAR3uSxNPF%2FiHp8GvS4CErxB8dpAsJtZ772lrApzx9WPm3oSZ0TgW2ObvLT1j0S7HuEwTYJOn8zF2Nr6cQ8LCfk632Yj8ThMLiMD%2FZ8za9rty8ShccKpk8MwiFBgH&X-Amz-Signature=7838481687c285e77bc8b73b58e97dc5aa950d1d86138d0a0310c78038f162c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

