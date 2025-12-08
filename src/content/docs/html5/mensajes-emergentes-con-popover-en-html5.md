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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHL5APTC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T141728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF471yJEW8p%2Bb27FQQ9b6JCK8c1Hbg76WeCIFk%2BOOYIiAiEA66czyGKdUObkBNQ5o15yqxiyyOxz9xV6zdv35U52lwYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZvV1KuG269WH317SrcA1iwTsHV3UIiAa%2BFdoUjbjPLt%2BwwNOm3hq3TdCZmSWzsTt0P%2BIh%2F9I5MwddnjOAEXEsWtD8ae4NRZEOiS7R5DrgeZCgshr1gCYZ9U2p4ER1F6Q2niu%2BH6gX2acC5UEWhZg0AgskSX8S74zys3bOW2SO0Q8FuCSttC9RBmzHJ89bGq1ErHnAGMsXpx42sM8I5Ev8zp5ma8Zt1JYgLlmJFEvuoAp%2FLlSrCpDlpIDIddLsVHV1G1UGzqgnQqbuRwtkTnzrD%2FtJcvMmcPDvtzEbpNpDnmH%2FxN7KRNy0izPzD6BacP%2FyxxJZDVNDhPdrIKUxyq7OUIjXCZKB3O0LrVvr%2FYngfcbMzDzhgDt3gogw5y8hzHTx7zIGhmLXjVqlTC9lEAwOrV2E4isklWVNYkx4TI7f34a8uK5hWqs5UcNARw0Pfpe%2Blbqjf2cohWV2KPu4w8XCRIbcymEro7HHfuLaC%2FSH2X4dYHghJ6JOSvZMe2zpSb8PBRa%2Bg7pN3eCboKKISmgQAqSmsocs2xSfi6ibRC3aC4Sr%2BB9DgwD7psVY5zCdCrJ3kSQCJihTDCAN%2F2k%2BLopbbwDi%2F4zbJgqjoaxESYDyk52DCQndHeHuyZOU6KH8h8zak7yT6dx8jmGv3MK6Q28kGOqUBsqKr9ZTimAK2MdEKeay67BdUP6gJ9dlr9HxbeHXRREY6jaOatvpTrjh9kJs2RYqwUusY1tHttlhrf1m4JpzEhAcUW9o4xvIgjvQHToqEjnGhcCSk0jIAPtkZ9q99%2FSIsax4DviOTPFNfmU0FXVPhzoSRAAKV83oF8BXS5l9VrUbkI9uxQWSWCpaLfQsW8O5p3eDOrUpuMvgWZHgHNGtP41vrDF6n&X-Amz-Signature=0fd1be51a89e5917adc94b568ccc57b47dcf77a7faeda045c226ae485d98a3c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQTMGIN4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T141728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHcBibvovQluttVmhbGm90s94XPMwKeVRw206TP5uXPAiAo5oR2AwuABGcROi9ShDLXSyz%2FPQmqKWHKluSP5B4WzCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPRIVVhK%2Fwdk6EEL0KtwD4nyEFMbBFwJfLt8J%2FZZLeU6y%2BGtB4aYwJEOWe8CHiLTcAfUr9LkGZmijnGvw23TKjVWa%2BlNCXP2jHsNA0gXmG4EVtIeUjnP9fd3AbavUXdZ8hdxPtoUaiU7jL1otsGPH%2FW8pbB2BAJTF%2FwYalsYB4hiHZ7853OGiTUQbwgWXtlcdzCqd2JPkYZGiGQosns2OPeQrON0Vo9kO78LZohE2%2BE0KOLGY%2BF4yqU%2FwYsi75n2EJbGhzGgIrP00su5UaIprCBnJumCg8toZS2w5EYBUQOcJkahEc8XP%2BmRhvMT5YByGUOu6Sx%2F%2FBjZv4u%2FtY6KcMRMlzjhDeTarItCH2XcyjcHGxwlI6GcNgZKE1UhU%2FdVjrzTCEK5npCPtW6VyxqMV0d9oq52D0P2ZSIPqroEUYVY5r1CN4lCAnHtavOkoXRcN%2FSGnZ7IuP2ZJTWTfkQlTHp89ILsfqTsPmo%2Fh0jeUOxD7bEQd1nFFEjRXs%2FxfFH71zWktY9zT3yNAsIpcPoEh08VMBLnUZ0YQqXsksUBnMKKKO%2FZJ7dA%2B9p6tzUUwroFfk6xmL%2FxUtHGGz79GQxDG1eMm3UBRcL2OJyIOkbuV7B8YBC8BcZMRQlhlQVVqgAqWr%2FvJmKHhRi6vSEAwkJDbyQY6pgHETz0%2Bj1gG5txveiE0i51FxVmhmlWhLcCOmKfGJ9TC8%2FAsbhAxlT1ZsOZWqkeZUjfmP33DU%2BA6Jn2Us%2FTmowtxf8iZbPpsEhUjlF2VieuVwhA23mhAovUCxXe0mplXi6rIH6BbAgQVtAbxa3k9HCu1uYOdLM%2Foa7okJzOKxjncH3cRdWkx1DIBaFFzap6DMiQ%2B6kY%2FIqFVRhZG%2FIs%2BUs%2BsZiG38kdY&X-Amz-Signature=71dff94bd0b55d8c7cf74413ea8cf39ce9ca97fb09eecceb45922b0f1cb2d022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

