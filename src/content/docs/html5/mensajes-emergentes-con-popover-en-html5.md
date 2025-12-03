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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2BACOYH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIF%2BFKdnGpO9j3iM24AgAtpLuqlqG6aInA8CPGBRyPJDPAiBXp4gsrcK83XgPXaoXkXj%2BAiswY7thcnwjQl%2FHXEjEWSr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMt47%2BaxIZwzj8GuTFKtwDEytS%2FppMMrpImmEM7AQPKV%2Bml9sYyaWR3oXfMyF5nm9xZJNnVuYMt7Ir%2FCgA0VORirJdtVZHdkcUzTqzpgjlDbEBJYTOozwWkjdWtxMAXFXvz9ziUmlhTNrFcXlKwnzh1JqDR7pyWUVBgAS93bAxGFH6uOA%2FMmv4f98Zd12r34kVc3%2Bzp3TQULVB7wGIpmOK83xP9%2B46lAK%2FwOERGExL3%2BfyJIuXGixKThWS%2Bli6yyDqRYBuWxUh8qHlAm5Vsg9bKQ66AF7S8VLv4Wz9eaQrsXHYLhWLqrOQbFkWctpV36vtSkL5Yw5cGda%2FgpW0Ki0C%2FbYixT9JcIrm8ultvD8EFMH%2FNpe45A95s%2BwjAzHpGH%2BLnKTcwyTuMmadC7%2BGMOO1I9ccWJSO9dVkfPOWkeBwpzqjN6DFlhVMIfqNemAWAA4CbrQwN5YK75DkaSFImZjSRjZWtXW2XneqkTn6k%2FecrE8JCGQ4QamtpdwTrIiQX4zSFbmWXwqTC7VgPqOMuu4sqKB80SE8CIrNELd2Sb6DImjeRUp3199k1QNrNjH0wL8gchuadkzjGVu8ujtul22Z9XhjfuBZxTi3WQPM041q3UsAdhjVoqtRdkrFFm6oyjgGWGMVv2NtkJB8Blswnb3CyQY6pgFqIlc5X%2BgNR%2Fupx2XKFbJRp6QvkJGf6pRUVagLblQzjmiNpzGnH279sQ%2BYpewi1unh3t0pRCSN21oTikub%2BPFZcduetDCsoguXNp5Dq91LOLfx86yIf00JCJEbn0MUt4HHUtWyPhdC%2BQb6hWEtJKcSFpyblr9Tm53K8ZVwczpTzqifl%2BNl6wdUSC4fUrNvyjFDIfQiilajz%2F7KpMsUryy%2BgQqOyjqH&X-Amz-Signature=2b74bb82291a1f8e9c68682481da106f47d551dd7a410cbc5f3aa1bff7209655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LOISWIJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQD4S7PRO4Ft2zNr76B%2BJFYqbxxMOp4rxjx8gjTVVtQCaQIhAP4UXuroAVeDFesrrh6pvS2Rh2RcIUZlv9iAobTalyiyKv8DCDYQABoMNjM3NDIzMTgzODA1IgyDrJnA%2BvQI6Y26Pjwq3AO9XanmAiGZmN%2BuGBaT5VeLjox7Zpz8WFDMZ0FmepYVcRGjnd3%2FC24l55igj9S0ahvLqHy2PuF2qOIVWFMWMoEgwwDqyH3ArC2Sc5Wkq611zigHjU1V003e6VEgcvIxd%2FGR6Hz4Wx7Hn8K2D5PHQ9HU1QoLgjWtQif%2BiVomZszA4JM5OLTNSTFoVIOh2foOGisivdFLIS9p3EFrEBlebs1zox42BRwz0gkH%2FDonhPgDtfutS14%2FQAHBsANzdggBF3MbKq%2FR6BFuQKuVdXLMldShO%2BICbWJA2MpLCstyVzxrtIzWFVbY%2Bk9CApWyLUYdwf0vatPY9G0fUeW2uKTJELS8fcIIlttDcfM%2FT9t8KB4jAl8doIdvbLmtrp9dQwzNFrUC%2BK21mGFhEgtzPyip2JgcE214p2Z7mxmToYhLvme21Dkj%2FNcGyNN6nV6PHvaPkMOiitU%2FsoBeFCMLYllMWMj3vrqdW3z8U4I9DaPXcdlB5TcaM1xjToSjpV6XWzKA1Oo94cp7a3LM%2Bc4lWsBlHxRsDo27%2F6Pzg5bhu4%2BARJICqETjkZecYjJLZTeUJg8P8wBGbw1U4wYI1IRnyyj0x5ih9usWX8vDTEJ41sWAD6ireEOBkUYu5q9VGpLIEzDIvsLJBjqkAVqNt2uSRVmcPv1R4YvaqEpwYO%2FxFfuF3tC1AA3eo1beAS%2FacVgsE55L4FCRwM0DaU3z0nNQsMhYFEhMggLCMmLwmfojk9Kqf%2BDqP%2FrXOWX3dyfoE%2B7rVs%2Br2plZpA4iFIc05ngG64TFudHXpeb0asKX%2BhwpLOb06JBhwGxf2OPMmwlIDa84sQi4oUPIm1seSQ3ZDJZjlgBEJ8iwiYDvdLQn3IAV&X-Amz-Signature=612cdef19a223eb23ebc7d29935940cf4aaef52eecf051946fd5acc7fcd20d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

