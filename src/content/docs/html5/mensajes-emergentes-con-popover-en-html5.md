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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROUFLNIG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T224614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOGOtSYHICHjwx0enWT2dhl%2Bz6SInrkM3m9VpYKXzxzwIgW1bcleP5PbZNPdyMimkNRRqL6lhSqxYiIDEE2CquTmkqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPTdt87CduA8SKUTyrcA1VFFJRD8SOX8H3BbNvjs3GFEbvED6580FPshBeGNnksXs8KHarCZvd5WB3d4%2FbHvIE5i7ZAi2uRafIFSaI2wVJC6ml24yn93qDb58Jf5BUaevwCeBb29Pbovn6h2wFp5oYnWixeiOslhfKpjfywdOrIESk6MPVso%2FoA2CgvymgsGFHxQOw0w8QW4JbqQYLIwj0fm5y%2B%2FT6Yi4rhUGGqFxa9DJNT16MWwZLrofbkfIgJj%2FZHcDgazb1mwq7UufzoAwOj9Wk5LJTJLgF%2BCy4AIoJg8yFnbM9Iac%2FOtC5ZzbxUbkTBMVJsiVXICYR5mnhJydP8M8s%2FvkXOZr2B6YfjdSgXvGPnv9L6%2FXK4WyBlcIW7Mcrohmv4U28mJ%2FzztX3Z2L9%2ByW%2Ba%2B5Yc8tIUJsIQcDVGZ6nsn0OBSuSWWwHNcFbCSOfVMkDnyV%2F7W1XJbo8kj%2Fc8pQLN6nK8KONCci7Yvdzp9ROOdK%2BIR8S%2BnPuuiX%2FUAUVeNdUce3e5FkNPi50WZJqfRIdO9l5nXJ2dXiuLEgbWP3Or05UClrNkSueKIV051Rzobfx%2FwogdJZuaEd2rY%2Bvr%2FyzjR%2B419w22rqG4Dt6lzMmk%2FZaTCuQd3A2tLBycmdu6uRe%2FBjq9ItbZMMuF2MkGOqUBF0WP4jJAdu3lZIcP6aPab49A8uErbNTJ1fmQPkk9tdRP1aTNaO6BMFAmeAF7lKzVZ4uieZVg9nwWIoIOgtU%2FHP1grdMFcUtBRxdb%2BV%2FX8COnWfumVncKEpZq3KVSqQfO5y1vazxZiBORsOIjVhWAolwbsp0P5Dx5uK7Mh8e916RtbEXTeiARuRa6MVDcGmbs7QNQOmU%2FucFstp5SailJ63exAiuT&X-Amz-Signature=735dde9de802b36973e05bbff961791331bc87a289e740ef13c425740ee8d78f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKLNKYOH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T224614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvmkBRdzc005gxMPeeptnYzg4iEZi4C6MZH9LpGCzrfAiBOcKorN9vNcYrshSSnyKXQYHrO6tVS9LlhWVUZA%2BYTaCqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWd6q9YRfbtXrG1KXKtwDNbhclHyMknevX%2FAhoU%2F5t96EX7DbjhSF8%2BRl1gQvEG4hxuBAcFeoa%2F0UV5k2fBYG2qLZ%2BRMrI4UoJExKfOSjs8NLlcHjhhT9fVyYv38Ygp0PWGuFk24tjSII%2B82XVc1MxUM9vM%2F8uAzDIjbRwjbV%2BaHR00KIH5pEZGucoLc9RdRLWFZ%2FVmh%2Barw7KSg6OkD3xskVPr4KidWqM6m2adKvJentu2wluScf0afK7Vv3yykDl96U77IOjYFIsG6vxamNAiuaZRXxcEhnISOn1%2BOBt5BGB4z75WWhr1NEHoLP%2Fm1mVmhpu2%2F2Kv3GZgPGi0i4EZPp%2FI43121doRjhX0oSS9WAVqV8Znw8%2BR3aIOdvIo7E2e750VctSZtZdMiymIFBU1pnXlo0QZ0wrEo8gTYKjP17UfjpRkDxPxwWVaQlCL7xVOBnO6w7rFFAC7W%2B7fuGmTiC2FjPAtYp81UuQY6kNdnSNrJnpqDp%2F87Xl%2BgXB37I6LF1047VyTW3p6kStsFWfyhecg%2BKuK0BRV4f6YJ5ssAVmNP1JeOUjr4EnG%2FNRpwwzjHFuVlt6QW%2BT5E0u%2Bu27E38ANUumI250kn8MtNvhdk%2BUwtQcWoBvjBln3mnwr63E0Y%2F%2B4Nkj3ac%2Bhcw%2F4TYyQY6pgHK57zZ1L0GZEWzEuZYEmBgGLry1V9nFxXi%2FOheAWQhrPsVwvUpE9YJVAx5wS8J5SiUOaNLSc5JafFmLD0SM6J0eIJHS6Fqs8V1slj0r1Su1MtV%2BX1HBXLBZl%2FQi13AKCpeDEeRmDZvqgVYTotvl633Ho78kveruL654Rp6ypnGEY7So9eHJud5%2Bein7Ym4mwC0eV%2Fytmtw6WSKndocTOQOKhqWNgXG&X-Amz-Signature=009c05b732391938801ac95c929c7481321a92136b9158130e9724a14eb25219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

