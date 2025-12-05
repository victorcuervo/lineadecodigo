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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RURD7VJ7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T104713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVmb%2BKGHJ69rFPV31vEzO0IEINP2ExB61UKLQ2PIdiSwIhALAB3eXVDVknEaTOY2Odn4Cnnl0ZcE1QjUQUlTJR8bsEKv8DCFsQABoMNjM3NDIzMTgzODA1IgwdUo7BGPnMdiEua%2FYq3APdWGOqLAvZBjXS67DXAZFKrDboDxz1V0nnkMZ1UVQkwTZNmKZKHp1oqFf7ndWt5APZtc4irEwcjS3lKjFnokVaO3hn7WITYQzk5Xe8RxZsbVlZXIDqQrQ5r7F2qmZgOG1SxJJmNZtPdZ18VgRP3szEZOMq2%2B8fbNrTNpWh0l1c9SyopCy6Mr8B28Us69jKtnrE5N4F1WMiVlVd%2F0F%2FfFPnktqFsskTnFsc%2Bg3hSkNurzIgTqTOFsvrHhBdUlJm6dv86ipJ2Mb8KZOTDeO%2B3X47I6FRwRdT7T5Al7lxUgdtTbKhLAtl67xBW%2FxsEh5CpYrFrjYY99vXPADE%2Bb7SvEYpP%2FiM8pJvinf0L6ciQ5YCvtp%2BJnBGUs7NZPbM%2BMPdGzx1fOT%2F02F3YIodrHXZjqvpvoIQVBXWNnzugI1LIMAcU%2FGnQT%2B0p%2BZGg8hKf39NsuAATpIJQuQCzQCL2uQkpiHqHvYogXkKANLY1S9p9i07uCz3R6pW2erJfR%2FJqMMH68VnmUjuwMV7N%2FlKE7Q12rqkcxWk4gNEono%2BPe8dvM4gf%2BDosxDvVBizDEMLRsKWsQijJpQgl784ZdPaSjP7zG7XJhwHqzAcirIolMgNcOaE2XlzxHGEX1IZpvmViTCo3srJBjqkAd21W6SUVahVPmUMfcnVOWHUyxHcXDVgghy1hK6zaYAB5JDouGI4Prz8ccY9uxNhIQzRZoC9rTlY%2Bzsj%2BB2CZytkBL01X5Hdugekx913WM94LPDPCvf%2Btil6%2FKxVLruueK%2FAhyxkHblggHoCNi4kiZ0yhZqAGhN4E7%2B9Ap%2FnSNblkgyVc4SlcAN%2BwENCJo3f7wsTLM0LiLng92VtE%2B6dG0EQAfRs&X-Amz-Signature=ee38a1f81cd85edc1ee951813d88936851020cd97c60e754c61ca5fd2d6de656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BVQCCN7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T104713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaiYAFSVZclot7vwAumsXPTNr85QENkm1tZXO5eRYNIgIgLyTo76CYZ6IQL5Szd4vi547Zv8h9jv%2FYiTOxbaeBIKgq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDN6N66uexPZeYp7LdCrcA5lEdMHi9A2t7JLD%2FMh%2FcfcbBsOA8M%2BNqT1BVQIRT0LUsaQ4iS3GqGWEnVyjRYIwcd46BPDRCFsta9sEVcu8%2Bt1dbJpFDQIC75uQwNmk7nhwfolaxL8ClJa2QgPkdWYl3VZaeFG9RNlyeF5TcMEI8zdpsj%2FMzP5WLy%2F0z8FklwXET9mMP17D5aq82Acf5%2B77sBLopwCIwjKW4nPilRMaJAtyA9N7MGQFCRGHnr%2BpTyEHSljp4dc%2F5%2B0Jf5%2BVOJUPjhN3O4MMs1tIPQHdsXgOer%2FVaIXl0o3DqXvxFaDKNxj5l60k9OM3pOLR5A0fftazgKw0zPS0jQbF9JqS2jfYAXEaqS7x0Uu7lWw3Oqf8BPRCu6TU3m2mpL6Ssl3sPbKYD9Ts44sDZlEDP3YC83DpZ7VX%2BoUGYYqhRcc8YePuaxg04Bwvw4I9Tpj%2Bi6LGoCg2rBAW8FtxQMKRCxzKo7YSm2pCsY6oxCpPWwyxry%2B3sYwl2S6bHIQ7Qwb6coLslCREA%2Fxc64GS%2FcaKoaBmQg1TlHC0hqH8OFHGMd6FAI44pBxQwjMx%2FmyAJrNUu0QnZ%2FHW0onLIaHMYUa1LtpU4Dt2Hl8bq2LmMeKlQ2jfrl06wmwJzqvvc98mf0uhO2YnMJjIyskGOqUB75fqrZ5gtfYdLFVV3Z%2F0dWvV5BR244anlCJCsd7UD507%2Bj9%2BARCjgyi2YzhAP4mXlA0y0P3ABIC8R3t7%2FdpdlbfWpRMEWZgbSuLgSxTo9IGPjbjlDK%2Bz06RPRHUm9K1R77pT1uZ4XPDaSTKJeb9BaJk%2FAEGL0gc9XnONzsucJdlGbXh0142wKeuuAeG2fhK9CdEhqzxt3xvESzx2yKM2glf7As2l&X-Amz-Signature=f5f4dae87dc523a7c6b8790cbdbe8d50db159366903451486dbec4e89f643405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

