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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGYAG4SI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T162217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIEoI0KpLPY7xhFQUnz3ixb4Sn7cI3WTPsnjyfJEJhrJxAiEAleG3ixuoTD2%2F3510bGY3lLZzbBYHIutEoeOiM6frIN8q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAQrEIJdpf4cUFUJ1SrcAzdri%2F2lVJSne3eNQpw1IxK3DEPJ5t41utRMRYHIS8%2BssBFlyPuS0xQJv6s4ZqOyXztAJKYaFZ2X55jyVEkwphlQgsllUJw6%2B8HLnuebPN6JE%2BY5TjKnSfUVTn6gJyJRjN5aznosI4bWOzxxC5UzFUhHahojs30O3AzhjbiiLaBeFWLvCB21HmQUhGCRViNhZ9xQvoaFFJkp6ZAwOR0P74Ca%2Bdof9NtvKGrY%2BPnzTtSDuiUsObrAJBpNoecB3C0KJsmqr5oUpKxK4S%2FNWM59UkcQJsroLxWKsxsSGculWv2s5%2BnY0%2BO3uI6zq5R8iPcjF%2B5JtkEp%2B1ziz%2BLbQNrR5x4iVfpA4y2NK6zemsdG1zEvvSvAr2dyTf2hhhoMNw0aVI3xDqZRsNilgX1IEcMD6weT3cN5VjuWn5CMBgAVvhuiWSkOi%2FzvsNlWFfimljkTZ70XPQRSI2RchbqgZOuKBpPRl2Q566JOYwI3aPIVJvQX1vlO3%2F2hRWfyi5E80M1BuRS1KoxZALkkvbShPGmswyc2NQGhwuIUFvS71sLCGv9ZNn6XC081ZU1bWdaUVmjS9sz7bGlLLPlsYEZdB75oRUWTtP6y6ZJGHRB%2FtfMZ%2F1uc1j1jqYa9%2B3P2%2F9h4MOXBwckGOqUBab7cNfGQK6s%2B5QoarFCCfecwRg9jG%2Fyo7RODwhxn7ba7st9H5ZvtMIWBGzQ%2F6XEu4SrVfWtyewXdMKfCusqpxJTdANTMT2SIDix4rIVOrHv%2Bpi8Ys6q0H87XT0mZe3tAGeL30pohn4kFKnikj1iKnLm0fZ5uqJSybxRmcpJnGIzqyfWN2%2BPK8NnmLDRBB5bbTr817V3VRbKtdDZJ%2FROyOhZn9uLC&X-Amz-Signature=c9da6c519f63c9ce7c8fc8748157fbf0668ba77f0fcb71de5c9d3f27afb245de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAFVFWGN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T162217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDaFgoNbXe%2Fg7Sa0%2FY733W3YebOi1cYmZpsagarSihkfwIgbBjpmJT4fCpXgxR93QjR%2FKZSYab4Xa966ys6Cd1%2BezYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDq7Cxs9ynfzc8qgECrcA2vVUP1YBOHp9OyyV8lJV6knG%2FsbOj8CXZeyePXGI5BVwcwLTcwE3rbmZLBRDPiG5dswHcSlaaOBDHWvlvdbHM%2BeUquFeUnIDOgf8AhOVlhG1I0JrS%2BHuHDYfs0Jxrzfi6jKZDvUUsMrHjHfy%2FDZpv8tl9MwSrX8ZqmN75iBF5MtecCsHy29WflbIGBtT%2BFicy7dbGeLCxuzDwjDYpsvUkNLeTqQwVxGjhrQzKKVefmMJ3MxS9N2AjmEmNlJYDo1825%2FRMrEzyuTYYLtjNBPHg3JIlVJm%2FwHuUsIb0Mnsti3iImg3VSD1btuxtorkJ%2BbGjh9Q0Vtfya%2BktLf9W8cHs76u1NN0HHQxZjKo0%2FzrIY12tAmcTcFtkq5I1UGCot%2FKeQbITYL6upvN05DW4lfs%2FHhbBV5aisy58PDvYl6da7onSNrx3wILFOPW9XkDX63i4CrefmB78mCoyIP7QVhB9ABy%2BZNOKWndx6%2FFgw6KB5PZNY9Sp5mHt1Lic%2BzXAv8I%2BqM5gDtcXByiASLuxXctcJoIfkZywz0Jz%2Bs44rnskz7WguJfnE2ixLCz1%2BIkF7LZlstALogRpANOLp9fzOEM9kuZ2XOef022jlOeQaDg6Wf1%2Blt3z1CXcY%2BBQt0ML7BwckGOqUBNwRQR1Nb1NHcIf3GatfQpZsgDMkc9mjKTFViY0yVpG2C6EJQgBDcPLfIqKMQ6jNe4GoylV2pcWuRPS7sxM0%2FPofoQJayPD0UiBfYW5lZsuwrFkmASL3sK2NgplPwfRziwKBrQZlKHAM8BtEhIQ65LTmWo6kHDAm25EbPcU9%2BLhx4MU7IxuDzwHVr2lnd4L1XEsXUWPZ751K0rMYwXWSBAJsDQxx6&X-Amz-Signature=c2d1891e66952c57372fdd8b9496bec5dec5d74047a0927e438424854fdc2179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

