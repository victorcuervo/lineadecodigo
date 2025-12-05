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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4CD45Z%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKzLqfRyRFG%2F35qB1PCZelibPpP6FEVIhtjceHtyytwAIhAOsNPFk8IN5Ad5aVNLf7xy%2Fxt7egY8X6h%2Fz2DfgH5sgLKv8DCFUQABoMNjM3NDIzMTgzODA1Igx285eV0%2FkBV1Q36%2BMq3AOvMExJnPHuhmawqH70dlrBXfiSFb0dOB5K9uZ3lSReUxriQcC%2BsBTmCjxTTCShDN5XlWCkjnhbzktFu5sYKn44c6Z6wt1v%2F6g8%2BvqjmcZHeoXwwPKT6qPRpSqh10CcQWU9SQB%2FVKUXeKEhSwl24lo%2BgF7HuOzQ1G6wnmeU7AdmMk3ASURkkuXLcawCmQC1CXFFyTGXR3ocIsQbTd1liS015Wn%2BDTSD8R2v8ZteEcNXD1OWuVKUvi97S5I8Y7hf3UCMngWmbvpcGs3qpWD6A70gcfcGJwhst7W646Y7zymNy4fp26kDWt3HvDKa4ayqsHfSXOe3kG47KPcxm70e%2BgcmgIYEfGtjVc5arJULLmW6GD2Zn35GBeQrjG7EzGgdK996CMDsbADzMG9SDyeTvEsDnRU3%2F1grOvh8oRrcQRGgBojtad1MJmQN6JkI%2FpJYj7yblZpoYIV14oZ4GNj5Ri68ihJoO0DrWHlifBmVmipW3NlfjO19UL21mzU4VJf6bxrija1lGJ9pFBjZ1WJ7KXvIpwJ5RN34AG%2Flda8QtvmHQEFy%2BInwsu08g4m1eia4SudaeGdT%2FL0amqNK3Aa11%2BnXCX%2BmQx5MLSspR7nkNPzEABtUYzwuH54dJ0YmFDCKrMnJBjqkAataQwMPDUyPLkjaX%2F0xKL8Iq079Kpsac0ADl%2FF%2FiINASXVpEW%2FDbbt8ACPKtAzGW3n5%2FX5MCtmE7VczSDC2SxKM5cs%2BmL2A7JNnW77QtyGPygBMxfGJPEp7g9%2F6SZOWWBrTqj%2Ft1M6D8lSyet9OE%2FHqD0HuBfnzRUzLiZRlGVQ0WZkUD0cTe2QBfmTiAudanBwUhCDhme0vbULuWIXum8OuHq%2BE&X-Amz-Signature=9cc4c3c656f1c79f4f222d47e3c1d9418129eb6890bb0b0d07f52e39e0fec22d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4GMUZXW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUclKOmXdTTlvaIXAzHSBbPaSZHVFg95AbhvfO%2Bta1DAiBWDed1uNHWhxubr7QGC1UdS4ZKVHk4cdfboqZ3M9iH8Sr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMImdfG5p2dS8JSMxrKtwDQ80YllJuXPFDxBndWkWhTStGRdzV4hIQc5y%2Bp9wfM5RmpOgu7Ym8cfGIt4XkUSOtOYSPJaGaEOwY%2FZMxx3RY4D%2B841E7MPEiMIHS%2B9%2F3J4LuJl7E7P7OpOl8km%2Fis62GV%2BxY1iN31tATvP47%2Fia4ZHqK2%2FCcm6HM2aRibRUmChxbgzHHlTl017NoBbExwTCxgSSPkp44wEfXE8GP9vneGRmWQgIDh9LMNRMToFOhA66YQWkd7g7qiFPNwi4toRo4VuMVv4LjSgJQ6bi8LH91oOmwV8v6ZReZLxvZQVBcqdFKW5S3ACnrJArg3UPQfvl8dNXQFAkYDjYmxmGLNq3Klweb6YOOklTbdpEBSy3bZAd%2B150ge0%2F49gcuHRD4rX2VyfYnd45tr7xsb67sS6EgCB8tKylHrhpkm88gdUEpsrWUopwP0Ip0ukmnLUQYq8Cxj2MW2Dlec7XVBx4MHxz5a91ZUMYHuK31CW86avNc2G1bBc06MyzJRYkPlxtyLqUYt46xLHpBPnp%2BhNpINIC4tnxuu9YAuLWsRD8oMm%2B1TOKvfnY1y%2FntdWGnTDOVAgOnlfMfvj50n3tO5A%2BY8x7KqVbOagxkUzfXkdPShIsoPJhAOpuqHNXbWwsFdvIw86vJyQY6pgFmcz%2BFgqQiLjrzz%2BuZbKn4LirUQZjrnpEx7beI%2F8ISjFtjwx3DP7qFF37AAxhAizVY2rY1IEbFfQemVoFS%2F7Ah0OWz5059LSZPPb%2BNmYCYeY17JuxNCalDMwdVHacmPEu6qkU2F9fiC6011NrdptuIYI5ff6cZ8jl30PYkWc%2BZxI9nJFhxlvAyoyusPW28TvYtRLMEdpOED6K8QeOXksWK2xUqGUNj&X-Amz-Signature=a17dec02a2379b29cfb3e8593438836f1e2825911411a75d68c7a196fcad7ee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

