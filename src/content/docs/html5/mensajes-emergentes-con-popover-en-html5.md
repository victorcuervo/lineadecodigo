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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXHJE3BA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T020939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZTHxQ8SmxGTTQy%2FMlG0X87jw3v8wrhVHRmRQXXY0LRAIgAZCKxGOQVUgrr9rs8urDzT2vx5uezEgkJjQ0TX2eBw8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9DwTzKpNUwkbtXiircAyU9FiUvK1FfqnvGgHJ%2FVdzmxo%2FYuTNQOIwY8fUM%2B%2FLfjcbmr7vsgTTjMA7IamwjP%2BVL0pDDbeMccJXawPqCPCArY0d3vcAF0mBNluJWgomSleL%2FJGZGYRvT3%2BrcqpUSYvdCskMg7aK63LhaXZE2Z0BQjLRz5ZWcfIHAVbpZoGR5dZFhpSrLd9eNGLZgCoTkuVgg2eke3jCxp7KW%2BMjsDQN2nMNWSxuQ885xukGMcpT5V%2F3ZFv2QbvgheIofQyXEJ%2FsvQ2t9B%2FF1cqt%2BchHoeHCVEz882EPzs15hcVDDnJ1DhAMnrKHRAyKGYnpSTtdGJaYtbdo0fX5b9QBvOgXF9aPMiRBpL1sNmY0aou2X1CWpwIPgxnUHgVlaJMKue%2FM3VRZNYWb9oER2RTsldctc0e692MkQ998GD5w7%2FwBdj4QmaYksBrMThBlMnPS%2B%2F9Jy7nXCmRLKStRuutFVxU5O5Vuv5wZJNsV7dm1scFFasHQZPbLoZawI00v2LfqLyM4evp7clrd83ox0kTZU2316yO081WJq5YiQF0xzcj9FdTbgQBdF88n4AhujtGjxUxiBAQZt008xder6TnCbdSfITNTki%2BKDLY99FAO6iusZFZEyGkI9opFKA%2FdIj8DtMJn90skGOqUBx%2BlXxlv1PkhRmWv2vJJEhieDlsYdapa1toSi4TIMY8zZiiJul%2F4BZqchKmZ3ccVwzJvvMhUHrmEpLUQ9l%2BjI0Z%2Bqvpl0RTol2cn%2BoAGMV1%2BSxyI6Slj4W145yKjVIWoYSlGjrsLjJ9TP8v6QQnp22bB13um%2BNk9yBgfM7S9gYOnWDcdkaUE2WcilEW20T%2Bx2ZjHFr%2B%2FZmPWc9Wx74PEFZ7Hz7fwk&X-Amz-Signature=332041c4aa94d2c1ba3088b6348e71325327b4bdbd7327a62052491bbe2edd60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W454XW6F%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T020939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGp0cDu%2F9L5JDGoMRQzYeZXgL0kak9Z0c5rKb50MyTHYAiBvEM7HBmOZU%2BY2EA%2BnpkLXELr1kpbCwKOCEmCKZnuzQiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvtBfzdQXFsFEGTvuKtwDnHGG7NeEPQXdzl9JdnI4PIzv%2FHxvW4QWU4h8KRQ8FrUma6Tsm%2B3qfYWj14mJT0O82ctb%2FEh38egFZbOBuxUehvloAgWVUSxDDeyd9zAbt%2FilSbUfEbbt1razeZpVrCWzRllvHb5Q3PLbdrsNf%2FOjUwxKOrv1q%2F4xBPjfYjFT1IjNOkmyl2Mngmhb7%2FZvJ5ubxP4VaqAdxM%2FASIYM3PiSTqw%2Fo2FcSDIJH2AlHcLOSeNLkA8QQ81Xby325xoW4ytaXf96JfWtaUPjjv%2B%2B3mgetYm73PXCFz2G3QHWUhCdLHWmQAqvN%2F2ihYI6dw7MIfP8nPW2j2x7tkUTMRP8ArW369QDpJKr5hqvJQKg%2FEheaXUbQeQvUEmpBMud%2B6LYJg%2BdX9AFPYSLetdXZvrDxjIF2p9KmSLXT%2FGSf2%2FpMjTJas6kFZQ2Z%2BmYVy9fXhhcf1A4ELlV8e1SDMeG1DHUtZvvz6e43FqE2%2F9NXZT9KfHcwhM7Bpa%2BaT%2BPbxbujxqLB9ELQB%2BzQ1AU3s6i35eV4tt0k7IRyz4APqMWSczHREcYVrAxEf8rMiKbbN%2Bf0w1z5Q1e%2Ff3QN1SnXlUdfw6WGcpOLfNFdLuF5P8HAyHuLfylMCFazfAZ6XxA7jHytbQw6v3SyQY6pgEsLnCoqoYqlCaUQiF70A%2FW3dcV49PUoLTrzSeH%2BB9pavHqUvAC4EkG9IxkErfFPVbZaooUTbWNZ6LWaYNeuYAXPsedp6fy%2FLYSASod0iiXeubur96ZpQDbtrbMxshSpNttNPPQEOxvqT06Q6yuT%2B2z1XNJYhL6ICahDXh1qWWWCCfcSSzGIkdtDVMpMnEUEtbfUziA%2BNg1HGjJ5YHl66YCMEOvNXmk&X-Amz-Signature=b9a8d81454ae52bc45ea2de6247c6c6e61e91683b47a898a05436476372d9832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

