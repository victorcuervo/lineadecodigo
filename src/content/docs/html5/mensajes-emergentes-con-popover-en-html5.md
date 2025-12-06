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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUG2KKLD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfa%2FN1IKLQb5EP6T6Umgipx9HUuTgE8oJlBkRlKuucXAiAOKVP0%2FgP8uJgbnuRdqxX7yP8h5dkqFHoeiXEH%2F3Tlqir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMpLHa8tUCCdeDXiZaKtwDntMutMG%2BpVvgRY3I0wDDdXSDQUxfd%2F2CemtRjHh9CJYUmu8XI5soMpJ8ds3SGs61AYnYpu6BDeUcWwyyHCQpIvALjoPeCAFpwexQC1%2F6c8Ncop7l4i3nQMtfYvtfRYTVA%2F%2BedETQAabSclshF1sKfiZgduGGRmEfYlEChngqTBJWhpNdXtczWNSTwfbBo8FwRVwzRneCBCkuL2ZCTVe4qwZVXIKeT85n%2BFVKPzzbsRB9FtgLRzGq1SC%2BNez4u1V%2FwTMsTYxcZ9atoKpgyYSXL%2B1EIZULv%2FGkQcubLv6%2FL9OlItxGJIRtCjBLo8%2FDfJ25owWBGXi%2FGKYV3Sw7u1ocFg9iWbE2QA3owyjQEYexHzLhGjhaJ1NqB8TiLdh7AtCUqjMa2eMtLACe0ZCPL2zNujMnMJYTJ9v5X2hUdD%2BO%2BsF9Csok3fKcFL2%2Ffts%2FOZtq57YCWPY%2FmhlIv%2FZGO%2FTpe4Y89nHRYV3mzy7zGuK0kJBvsBaGaLSjOeUcBfnWNOsDyVtbeWjfi5wwI9AV%2B2A2xFVjn46QFEhwNoo7JCQNDgPtGzqZFS6HI%2FtKo2z3LubGYI%2F7ynX39u7S7uniz4F7b6WR4ysCw3xayuzyYI3UhcSAlTcVbbKb9EypYHMwv8vRyQY6pgGgzgb1gDTdd5sVcsFps8KOChMG07Lli5v%2BsE2h72ffCN2mjqCVHGntkj%2BY4hWHQjuoRV2uX1UpuQa8FmGbBXXfksY3IgOJOLb4dGsX%2FTOXAc5e03X4a2tS5gY3KHsb%2BdKrRQVxj%2ByKuS3euBo0p0h24SlMrsrg9xNrOxj0UziG7jRgtixsMueXEX7kW%2FvJz12P3JP0PNgz%2BweDBkFwkH96KtvZfo5G&X-Amz-Signature=7c9369c30481caeddae7cb8975f10cc2f85d1ed9e1b1587e81ba7b52f65c4c3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646H6S5WJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZJgc8OT0%2BGCwmMla7ODIfjRWvpxdlRr52%2BY6rWjFV3AiB8%2Fmfo%2FFmqhkKN1ecJa239Y2dXfvqOQ8u1s5pc59OBhCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMQqf9rMwrULKb6B6wKtwDqU0IrmrRziZpDOZ20hNtGLq8%2FlntzjFZSMUiPlYgIhK887m6Qf7ogr7k5RUEIWn%2Ff3mNczWxxCWgLYHs1yrJ%2BYRVgOgBLlQRWpkKtvf65%2FeQifgfuduaYPW709SgOu%2FzpPBMTVXrrEKcIOs%2BQU6LhdSBkJhGtN%2BHUBAfrWTlrTh0SL3cHZ6cK79g7%2BNQV490l4b0jgCmCLMQPLuooeRio2j7M1Vcrs9kHN%2FQz%2Fh4ihN%2FwE5eON5EfzUOfeUSWi76ypGcrwN4Z7rxhnxpLe7Af4TLddsr3FT9H4auprdMQ%2Fd5VM6hklbR166TGTPgiZIkFHaVAl952vfwmj6%2FQEwBLDPStp950P0TRm2XqYKzXt7v5sTGKKGFGbMMlEJ6zsRU%2B%2BFf5EOjg%2FhKK%2FBTpgi5DDjIwl1fv3vAAj9%2FF20cNJG2ItpeXzQK8Qp8r8t1pNKxnTaamLA866sRTfcnN1QpF3B8o2%2BX7l9XqJI25QvGXhQxL2ZXGaRubZeaZM39qcQpU8Iq4e%2BEO0LYsmhhrb185dV2ytB8B8LwRvmEYfoqUSZfQhda3Napzy%2BZpCNP%2FkeK%2F3Uowo6oYdXwG5AC2WwiCGuI2VvtKCgVpPCSx1iL2HV15ZR2yktj2xn2ZZIwssfRyQY6pgGlJdj%2BFMbEo5aSIhBAhf%2BC%2BFD30J4Qyn1zzT5p%2B%2B5Elq8u2aYSvnei0epqkHYc9AkY4s3JHSw8HpU7flhsKRmSgwZTy4l%2FJ0Sk6zcv3cRvpVoD0p%2BnzKu1n0JJEmQHvYgU1dKXu0wAHLMJZmJvVm4%2B47JcGxGdDg%2FdQjqbeByIjpS1PUKJjpGZoYH4LR5v7HPpq61xNAmsu7Vl7mdbVZN1q%2B7b1XN9&X-Amz-Signature=d3438b8e274d77ac8d57778cdf41fd1600928a306e9ed3a5eb7347e3cb49134f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

