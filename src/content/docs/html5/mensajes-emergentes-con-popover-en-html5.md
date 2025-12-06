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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAXCXLMO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICN1jfWYlg71Q2pFmG7xAwRu05TJu7maxLTMAnCs0hrxAiATPzUeKYQ5SrbsE0%2BIZaK3wV35PLrwleBILgQgroBflyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMHYXlVi1u0%2BbE55%2FdKtwDp4sLeGi5Wu7p37JHkqSXarr6JDAdmShGN7qVw1falrldDU6T%2FcAYstGZVvdDE0y9orrZ4yNa7kpny8nw3Dv24kKQLaM8mGFga%2F4RlrRDmwxFPIaeA6%2BDB%2FBpjUk1w91VVMcKfYcPdPeJt2Xqn8BvutcZKpRk5hCUv%2FTo2N1luKtM7EnMjhaRg%2FUuV7YQ5bpQI7QiQnu4%2B0ncJ%2BFZlYTINlEdu7%2FfRftBM2ZgPwOAXXjjLLBktAoV6TY0Nej7SoeW2Sci0xvqCX2j8hpCzYpphddJDjQ0oG6pAgakYJwbSNfeQjXoHGUx5FC2ozsLvYa5HUhAYD%2B%2FJA%2ByiO9iS7irfD8MtvxwStcODbEKV82n7gr%2FfZsv4zkP5Ft3oosnb%2FHcfanCoFscRmtbYE%2BEX8zjk1cmzPczkpHG0RWEcfXoCK2HSUBzqGUqd9pTiBY1U23TFJPSfXFCfe%2B5muh7s8tP%2BU3J%2FSwSHsg8g9QDJ%2FE3ofopWfFzt1GMgvxRAOIyptN0ofjeVGiV6WD0f2bi%2BTlfsu323QFxI4yqegg2Tcy5MSSOvGJflSopNDeeqTvYsQvKhjXFGecJrRP5VCdHi4IPN%2BI4Ke38LNVL6brUOIJsoyZm4qDcaID14cnvU6sws8jRyQY6pgFxcPs1olkIrc2y2XskzVPdwAHD0ADvJ3HXtIBDoav0qUd8HfSJ1MsRWhBFvwxQ%2Bb3YIrfwTXNONzuvL7XdImKstNprMlxm9uLoYjnAZEuWwyWYcnuP%2BNwhjMYq4Zca7JPxtHAb00BYjV7v9JBvJARmgEAzi35AfGGmZ8%2FByXXpHXRCiJkg3IO3XJ%2BZ9WVOmHNWsVOSAQB7ao7Ll%2BoVsvRx%2B9GS9Ji4&X-Amz-Signature=0065da3f13233cdb67383f0a76fc4c484fbc9596cfba732f7f2fa6d70a5befd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3OGAXHF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQGBzHcXz%2FPh6Rl%2B0nW%2Bt5ZAaxbhgBHJdvceCCD2rJFwIgGEHYSuUq8RpeW6SmYsihsPJPUcLaxAbsSgJPlAsN9BQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDM801ynLNIxYBXEhgCrcA4gqDsmJ99mzRUHFIl9Kpuwa2zU56HND92m3YIco0Pw8neM4y88Gb8%2FIiMaVmHD4dqJdqlioiWp9ToPlD0%2FiRaVgmA0i406sqN8%2BRAWJ%2FmF7GlLX79gOHAfBbRn0jT6xd3QYG1O1%2BfFFHh%2FDpfeDs8OGSwtgamZZmZ%2B5gZm3%2FGMi6mT2cKpJREjgs25VEiipoHA8C9Gab0UAdVR05gKznh%2F87AQOtzRA9Orj69zLO1cd3COz1tPs2tOBwkpV7gDNqB9qynsQP%2BpNblOWD9%2FsAnLhvsm6Fcm3rcQqFqm66YJ2z4FpERbmn7KvWhnxBPAxhPGoBxDLvRfI%2FRzVM9b4fAOEcaXnK2lQ3msMzi6Y%2FPp4aWS4sKdjZobkeK4ziU3ufvZphAIirCe7aWZanvMQ5N%2BCqvOLjlU9j41my9K1VaZrAVNSXgVUoLt1YodE7lkNRntaFMq3pjlkxuTs3zSlmWkYlH0vskKzrrwOxwdbg6ByxiDv30%2B0TLWpbeT%2FD8Z81%2Fg%2BGTEo3KkaBEnzTXrxc2HOUtlmal%2FLIQrtTYA%2FAl6tjK4EIWHZNo8YwxM20PSDWQf%2B5l2iI9jVmNjlvGPzBKFp6NQ7oYIdmvVLNEEDgcpOOyLJ92zjuZPvpWUXMMnK0ckGOqUB6pjIN%2BxRb2q7CySb68K7FCuClv%2F0FRh4ZiRAcqHgkfnUwnYiPZoE5YFnL%2Bhytjs43k0pxXHSjQwM3IcKto0E2gfTnUQvNPmj1NdmhINnWj9%2FO7YqyRCC%2FrRgx5N71kNSDXDE%2FKXFEfMBaa%2FLW%2F5DTAFTDXisDLNMtR2ul%2BjmlzejRwrx7tOuhWLZth93cjY%2FTQZm8B1OM6S8fEy0W%2FSpzWD0SYVx&X-Amz-Signature=af27c3ed5eb14957e207f2c705b5cca70c7aea4616b1afe9ff452712f3cb6e46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

