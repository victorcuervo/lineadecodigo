---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URDB4XFI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCTc4BpRzrBpn1agYdca4aRKz%2BBYk9BceVgOznfxbBl%2FwIgYpOqt%2BxWpxZ5xkb2h6eMmhZNlfaLJ28m7KR1gNPhGcEq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDOrXzdqcCQYZ1J4BpyrcAzDWW8NdIXIMMkeXkruiTP8orF%2FvsBce1DCKPmz%2BQ%2B4hz32N8FwyO9Ob61a7HqVEqiZFntvDYeEScSLbMTTyCmrdcnbuxdyOVTM3It%2F8tjHn7tERjrU%2FAKe6T7npNiYOlT7Otq8nmcCEMnXla5j8zEYYDQQ7eOtRMBhJOigc%2Bzzn33GmuieCZG%2FQnbtOH7KOd1IFuQBB%2FpoLwwCYemmRLQ3yRwBKJoucl2XplbqXBxCoD42KubWo3Rli8BGvWa2HfeXVhijQvn4%2FHKxNELBinX7Cd%2FTio%2BhErJmEFkqw9VW9VxRkRLQEZG92l0gTTaWhajFNukvVoTi%2FvjU1rTnHriqo6h%2FygGi7N3JdrmcMV1Zh%2B9RqPB62iJZKq1yK7Q%2FnQPKmZvqXpFTbBQqLbFK56aGCjlhvw0LGcIlrwA2qmX10TKDCc9d0tvo%2BVf6V126oFx4LSDhAt31ulWyNVwhRssQ32fDjAx5Cc9QlOuNlNEhjPvyz9TetnG6LreAaRqBqv83QnehHG0OcGGex9o0iM6hic2zBRkjFn1BxtXX23tJe6AYpcyl7FO5KLGMkmqD5cJSOehtFe4VR%2Bd09e1YXd02Xz7AvRqFVnp606BaYQiDwuSuT3EQzW7ctfm%2BzMK3cwskGOqUBSQ2rHQ%2FhYsspESRBUPl5eHww4Cb%2FPgL%2FpShsJ67E%2FBnZslrZo36nEV1ZXAaKpnrC49IgLt1PhBgMNa%2Bq%2Fn9Mxw%2FfxA20wtY%2Fo6o718O1tzAD5YhqmT0QapEIzJXDF2bDWvphp%2BaIP%2FmHu1cTtwHXAOKrvyH4tfccR36P1YRl9LkhdWuM%2FaYanFf3MayoUeFTjnd27glVM2wxD3A%2F%2F%2FbYqxtACv%2Fz&X-Amz-Signature=7fee09a5b8fe4ddc5369adb90bfaf77cbfd547cdd9b3716ed3c46ea71862017f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT27UWL5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCBdwBnneZVYQbiZ98Ayd%2BvtQHbq4e5KQlid810dunLjwIhALqy4ivjFkxTfYJ2ywiak85RtP6wtBBqVL9Oa8M%2B%2Foc%2BKv8DCDcQABoMNjM3NDIzMTgzODA1IgzL%2FJsYoci4YnV0Ulgq3ANDqGUM%2FnyrpH5aVA07JduNQpzWrvTuNtLzjvIArwrvZfSRMbLZ2BcdgPimuBQ998xkztaXvkt4u%2BQ3E98SM0j1r%2FnSWqqv5N1wqgH1jjGnk92y%2Bc2d0Mqm2GoLru6DfcDe3fkgx6mMHNSuTfIPfhSzzFdp9Z1dWzLdhkDXV%2BMsgHScV43OSgDs%2FOOG%2BgnJmDTPqavoEQFPpuKA%2FpW0UH8aCgZM%2F%2Ba7J4a2K7htWCI%2FB9nR9fqL4WGWfQgyJlbF4Fzq5D0R4tnPhW5LsC7q2pZkRadsWa3owObNre%2Bq80onUIPAh%2BUIaNSZTMaX8d338PZTckPjAP%2BiWtHrqhgls2XZNQFbOLsR315JDwoIcoa0x4BzQaUCTgUyGHpdMgt8qun%2B5TyM4ep3LAjgGqr7UXlxijgiyY9uyMfP%2BUkgXW702QUGjNTFCQ0vhdo1mJRLPMAXja7HiYgPhhHTE9BgAe5mj%2FUASJRjG3Kk798tL9U7mYbl%2BFQktwj2wJJkIvVbbTWRp597r2d0V6PlKbc%2BDmipj%2BNi3euBGZ5Kvug%2FSv80ESLOsVp5bhCOb5N08b8C1H6rx6sXoMQ1u5M6iJH%2FRnjTWWCnhJMbF2EBfbmMmJRqo2J%2FqXu0aUi11pn%2BezC53MLJBjqkAWc5IQt8Ctw4qAAchDehaWNcCilr%2BmkiMtQ5vLcwKetyyAb87ymvlAMMEDXx17hg4JFldDqZBFL70jQF5CTbfJ8wHqRCws36mhB35FyhyqS%2FHdeH2i0e5Rj%2FggWYnTO8Yhk5niTpoH0ntqXzi7E3hh%2BP3lbWuDZ8oRMLPQiPtUoqY29SYBZ%2F9srA0xjYDshpgFLPGBc3X7bNVG%2FTYmwx32WunM57&X-Amz-Signature=db1b5d92e05094fa701f90bb38bffa3ac1586b1287943cdbe0fd11740f0bc6db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

