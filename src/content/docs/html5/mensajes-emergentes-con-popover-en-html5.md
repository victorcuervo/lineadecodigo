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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIORKV2R%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T082034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPG4c26xtKf2izleFwy7svEWFPWqHDOmjyQjYEo6Ne6QIhANRv3UwgLIdSq%2FDkfdgdv47FbbfaW%2Fy1Q35glqBzzWY0Kv8DCFUQABoMNjM3NDIzMTgzODA1IgwPaAx4ma4FX%2BO5kUIq3AMsar5Q8uY7X%2B0L6yegCFrdIubigsixcw6zr0q%2BE3YMCnkahGVN3%2Feb7wnIrIbQfY6he9bD%2FVsUNMCaAer8h1LBpUM2nG1ezoAqL4u2Dfeu4lU7y8KUQLbhfzkExXQ6F4RARxxZa3XG2t8ErLQ74kBPQLs6KkDr4oy1wc8e50QXKnDYhQq93w47GlM1X%2BRBD%2BWl%2Bwd5OMpoehe2rTEoqAWwUPywUrZDGagDpVzvHNjAgQl2ipbQOEPDnJuTd7EsLQ%2BlPiR57I2fguvH21JvCsLtMtTLKZQCq4THwClnFz%2FSG1WUELWqwjdEcCi%2FAUhI60M4LuvyOhxwvzOWd%2B2am2bR8c%2FM2YtzRIhcIB3QlolkgtaJM3PPrc5us5GRXehjPbDfpP530CvlBw3LJNTEJBrPll0uzZKzomYGvTJYMdKpFOprqAeXcZ9Arh2%2BJRkPcuJ%2FFDXYVLEE4iTC1iGtmGGQpKVGl9s3u0Y%2BEP7%2FrszXXCshaCK6DKV%2FElGP1qh1oJDadTBTeadxLeWaNOeqbvPrnqUH1%2F8sUmAKt7e0iKq3qIItVi9povE0%2BAxxsnoVilDE1U4sy58i7fqSgMD6dC%2BwbFEKqSZ6f80fwzB5u77Yxcx6T5N8nTfvOLbfFDC0rsnJBjqkAXlpo%2BjiAIP9p4m1VZhvfnRtSSMtQnw32Ds%2BQ2A2Lz737J%2B9RjSYbbLdVGmuQQY%2B1G2GUkvT4%2BazST%2B8UXjnKlX6a00zqcVXVnkN%2FDFG2p9fmsNQmE4ggKZpAyuWKT6uVuPXGl3beIPHzd3wXKbe5fayzjGfGOsBpHKDAbI3SM%2B8D8ydbYl2YmzJe5Lh%2F6qaNSoBGKvQctB0waPpt%2FphjK91OcbW&X-Amz-Signature=8150fc5903d3283671117ea86573687659774498324d9011e1e03a1a3fd1b7b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NI6DA6V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T082032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKpD4dmErLKh6718Fyc3Sjp0cHhDRG84s3Z9mXPucDDgIhAOnWo1Bij%2F59bA7WbrFE3iSByxb7X%2Bg1SyvRIZY2%2Fn%2FkKv8DCFUQABoMNjM3NDIzMTgzODA1IgwY44x7lMZCsfdTp3oq3AM3eOH56evEXAEtcKCiil6E%2BSFIUcxG%2F%2B0Qyza2NAbU7n4TDgzVaWYqRPPr11EQI9AopYYNosNIn%2B6%2BtWrg2NIR1aL4kVVJJSW0v6reXk1hcv3UvxdIgzXR7ggm%2BrA92vYR5bJz37hVrxkqWxZpgfwtOTKxV2MK5qA3wyYVjCXc3S9NfskjX7%2BaKguF4K5eqSHklObn3SmnbMz2ab51rQ5%2Fe5OnWI6TmGAOwP3FusJdACP8Purwxq6%2BfF6ri1WCD7x%2BJCx13M%2FvNXGpwhN3YK6jH01FJlrpRoLRMtrV5dy%2FK0qOkwNf9fcogBJ3PhausE%2FZfDytNqCmOu1N4esWAvzxhCFoweuhWOSry87MPzynAuameNb7Sw%2BFZ%2FjTdGPrXSDWX9r8NAdsXUpXCjJlAGCavx5FzgxFDas6zB5t%2FPt0U2JAHmjkFJ5uRJ0NFXd0fWY4hP3uSWkQzFcX7P92s8CYZxCp8Y2pUe0JZAkIbk0w8NMwFk0dVbhCeYIh6tBDhQjFxGoAeUxcT9pILto8%2Fm4DhbOfV0QeX0pYc%2Bc5tuvuylzmfBPEPip7P79sr%2BmULC3B5hcXLe8jUmQmail93CnPrK3U6K9aNrfKak4oy9koMSpJ0h1M4RTJ4hd%2B8jDErMnJBjqkAdpQqV54U903n6C0G%2B6CfoKrSvOMQxxbhHEmzXFfHkv%2FvyBJoCKl%2FLe0ql5SqE7vbWqm9irm7i%2FvL0tFJlr1K8B0D8kPotyINy59iLN8bWb2ZnkIY4PT1vxwhhhiKwnvYvb3uHS9VMAAvxwKpgAArkNwhPtX%2BzFayswwXXJheDhm3UrQ77ilkkc74h4%2Bb5EELJnUvpoQpvz577Ppj09uGKn2%2FOOV&X-Amz-Signature=f859c7bac0c0a8fe37f4f6ced63ead703eb9fecea8ba86be5e0487128cf06ff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

