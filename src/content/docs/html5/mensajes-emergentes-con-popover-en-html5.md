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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BHDRXZI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEDVJkSiDpP7kCwmgn0a4WmOnn3ZVOqYIQP5%2FxFp5xOAiEA%2BJKSK7SDlK9YPXAol4%2FYyVIZBd56cWmv1gzD%2FJmbM8cqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO40%2BkGih2ELAP%2BwyyrcAzjotlJmmAPlVVD3I8zlL4o3z2dNWjhVakeM4dQkxY%2BIcg0sgegtvmc3HdLpOfwx802bhN4ztTYLCpCkWhiLSCbtsyCyb6%2F%2B%2BkY3dy1q100e4WB65XeXwAA%2BrYwTEx4bqU4AMe7ZPU6a2kg7RLVDREtoH0YfQVcn4wl1XNWtwxbwnRBw%2FdM6H%2F9d3O3KWS4zdb%2F1eiZxIzlE5XVpmvbepS4QtFeMLT1GhFgTDAzlstFUPm5mkEnLwMo0BZxmYHXJZtr0AKs4LeSjo43nEAoCnTs%2FV4X1R4F4xl6opkNkxWnVK5%2B3SJfI3uXV6umu18GsfcgZiuPjSYsEp3YwZg2gSRWerxFABixcdcnp48aE37Cp%2B1qhBcAsQ23RBboC0DKxbujk6Kzzg7a%2Bay1SuA%2BrH2pdhTK9FlxT8L8BATLnHYPRavEzOpTnVjdn6DZ%2B730C8MmDKjBBA7WWIA7M54pYwTE%2FuYVwls9CrgSYNU25AbekgIdn04gh%2BG7BnBu2Jn7on7JBBvCj1QYGJrdqdurguxAzvkyf7AymfRA7d7skQAicJZ0NX4GCt09rI8k1FF3FxHUAXR2uHTSd7T1YWve4tjQdGPXC8D59iJmxVqFGagIx2%2FDBN9Luo9KQJjtyMKP90skGOqUBVP8iIpuS60QqCuQYTLxJW1SNyo8uUDrghrG4rGG5yq6BRsQ%2BiOSuXuceLr7iAMWL%2F26epOIljfF8xXxd5ajhFrznVbYlHhRtU6gJz7SG0MvSFUHBqOwaTTPF3Di6SeNujjWwzOCEYsIjasbJL741Muk%2BV%2FouJh%2BuWUVR%2BQkOdkN%2Fyj9DI4xgQbbswLjOqJCuwVuBHaPhcNifn0Aw0FXFrPl74RDD&X-Amz-Signature=a4811af93382c5499d85c90e4219ecd7f89f32a7ea31cbfd982a78c137a5a82b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666672CNCT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxs59ADC%2Bt5v%2FImA8EyDchLOrk2upwI9Mbos9Ag%2BpuZAiEA5qAxrPUMr2WCArOMsZW37%2BVJhCK%2BPGtVxG8w1cws2dQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7QgwDfjUW%2FG7ge8ircA5iWpucShqXEIjBH9gfwIKsHEXhvwoeIDBlDskkXHWpnD%2FsB6WqmrOghQAye%2B1UfT28qXmeQ8SJULM%2FLu6FFREiF1uOuHMzNCZa6ytg6CSOeE%2BcwlsN055kSSy6F%2B85xxiWf3g5xxHQYLL1k6iQ1o6QSaEd2YL6U6IO5milfU6sGFNXQa42UqEHAmul2wL8qPCSxMt7GSYPT61XzBLcOn%2BgpfmcRcM%2BfdhoBuu304ioz%2F2svcd3%2Ff5OqeKIBpHQvoJmD5n41Kn72WIRwcUFS6EcO81uhJA94eh%2Brlds6X6lNmBVf9JD%2FwIqfFtjpKyYD4sN8IyezWoVtHW%2FVdesLyZ9SvHmfwpMWOfNaC%2FAIH0XSpkIWlZd0zBDKb0k4Pl4vcc5aNsUBO%2FaYUjpxeRRzMZzyGQL7qtXZtvxJgc85xMaXtwG5Jbjg6b4ZAkuobQVGfnx2w%2BZjbgB2oDLijH43GQxPv5hUS9r0Xxmqpotnj9GwnF4XctHbPwdly1RmiCgt3aPQDds8X%2FwM3DsKQc8cP%2B%2F71NPa9b0%2BNYc91HUCsihPqD%2F51d9wnjJJ8kvRYDkUkhzOy22i%2BhdUIMpOeii0ZmwpEAuAaL8Plqt6lDRFybpUZDGPIykxqJYsknwCMLD%2B0skGOqUBgpb8OFjmHCka1LumJewVh%2FOOC4yunBzYT1iqoTgW%2FOdxzJGCeP2pTCb9dhmXUVnFkuo8t0LCWlHywo3Hzh38D7ZmenV7I%2B4q50COYJk6lqw1L2v4Z%2FH8gGtvpbmLiuvc5bbePHqM4mJ8drYSDgC66JFt8bDI8aCfNehgewH9G0I89Y2HMmuOZ7AlTAKlpqfTpWebLXrsGnV0BF0oA5VJIXGkNgPt&X-Amz-Signature=9b62e51388a8e296a0707f86a84f8d23d243d2e5686b2a37e1a5eaf2d774ef87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

