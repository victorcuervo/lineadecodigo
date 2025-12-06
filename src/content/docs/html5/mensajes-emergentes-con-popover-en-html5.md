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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PYLB54N%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAGNRAqCGKUKI%2FPqyyAVPIZuv8gtsqBt2HDaOB4GzkSQIgH2khIah0WE2sij%2BPvJ0narLlzDKRNL0XaLrwV%2FHyUTEq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIHnwHDadY2G0BnjHyrcA50a1C%2BQ74qsIl%2FeUIwT1OLVCxyDVcTGGJZDne4hG4%2FAOboI9w61J4hSj1FZzI0dQP7lSw7dkESUc9aIZMUFSbgINSR9EEHymMo84XP9qZNVgRAuPNrdALcAyQLkue1YpDZ%2F2s9IlTfDFeXwokb3y63%2BcQed3wUnPRfreX8ST5tS94hx5aFD10wFQu3tO1NklfhJUznKG03XbbqbGh4M8hlH27mAt%2Bj8Lptah88eGeG1mLuvkoHo95kFw4OF2%2BHm4V8XWx1UxunCdjNpzgWgYWmwfnHq3WgnSk9znUUS29%2BP%2FePZyJd6Cv3%2FiTCnFqOhQTRFWe%2BPZ60jLyq1p0uchmPTd5NwthGSj88BHHdDPvCHjyt5BnXvc%2BXBR6ydE%2FyIoKpPNfkNUBph4CFYf8%2Fjiwuwsb5QCslf5IuHI9Tf0I5vAABqD6kNR7M%2BzeAEuMy%2BOFdqMVRZoPZyjymCdC7eO2gawsvNeDB7npmhnC5vYFsMbpa1olIU2t%2F09jB5G44QsUh7xnpKub9OaLi8feQbuDd8xj%2FBzih%2FPQ5CKgnVOw3NGKwBW3%2FuxI6RYQl7HwErNvCpLYMkm9Nn%2BNNvstp5YWqRbTOJiQLR68PrRp9QPssvVXVqPwuW5vrSfZ5SMPbqz8kGOqUBWZA0h7b1b1lMesGqQI3%2Ff9BZsjZ6powM8DWIa7OAv%2FSPYxEH390K4MUeGt9LRD9VDEEvSY7ZaPIGtKYmSGqNVv37lJHDMDdVDDH1pnAyWvo5JYKkqeVC0AqaiuroWODFojVxykCTgaHd88d25n8m%2Fcu1aunZXKHI64xVDZaBVSFP8vKqSRKT%2BOsXuHNCDc3JiGVSTMBNeCCUS2Ox2BC1aF37Ui0j&X-Amz-Signature=21675598c64cce95d5faaf517db548fc68673971c5911ef1c6285d7383ca47ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5MX2TYE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5M97hbgVTf6EXupgrxHA71nuwjgbxZUnphJ258lSwYQIhALI2%2BFLe5iLQR0BpPxc2kSG%2Bqgrxrmpm9OQbCmgR0o%2F%2FKv8DCHIQABoMNjM3NDIzMTgzODA1IgwHuVJrNHWMH9Grdikq3ANQ6x7aq7usVDkKDU8C10VpMpAE7nbHMHXwUER1eL4jckxYxiDrOIXXPeH6uZf1JyoYDLu4PopCDrLOtRHfqecmSvXpYWd7hTfXjc%2BynudGWI%2B2FtHah3kB%2F%2BSY2VV9ndjD0i%2BQVzhfy1F2MrFqZZ7VF86LAaxflAdrkYPozr3ymqln4DZWhW0MFvaCSuIHUIvbngKN65ZoU2KE1uZPnvJlSFerCHwUnyBhCSTLl7LA1HYPa1D3Kor7eHGFDUdkx2hGLk%2BmebOKJWragpXrDxuOuVWQLD72bmuXiJb%2FkK4a4LZaFX4IW4HNi9FnL1BSbVe52QQlYkn1laRq0OFWbqFi2Z0hknRU2yXpjKdBhY2lK3%2FYoMesikkUHAKjn4%2B72m%2FUKFFC5IU9jZmQCoIJLywORZsug08BLz04SBlfuGa%2B8gyzSEY3CdfjK77o9uKsyhUvOBhXtQUmqlHCGgou7HYrlVQveGjpRRoSOrXdxwXqSKkd2gH7%2BTqOWZFfYJm2vQvGEU9g6eRI1cu6jBI62VfgAOrXl8oo1zB70gjAvp4L%2BY%2FqEA6WRNsOzS2bo0ejd6XCM70Wccein5W9US6CX4GSM%2FCZGBbMh%2Ftc9nZSMHKkFanTuEWGVDamid851zCO68%2FJBjqkARCZY6Yk%2BY8Wksu1PL5JkvwJx55%2Fizl8hoUJ%2FM217so31qjxJqE29BJm5gh4myiZtiwu1Vhx%2FJu3kPCUaEEmtWWO7sq49u8Gmtcxqmw1GIcOlEHOgYqSrYhC7Q8DL4wnLuHHV5bR5g5%2F95JqMLvQRAgYCp4P2dnEn1Dtn7p5d9TKD1jDRQAnMpai7DwEyZOLQkHyu56S%2BWMhfMoTqfRCHVIaomlw&X-Amz-Signature=3ab0eddb944eab49da6b9968ed546aec968385582635d6faf3c295aa24247960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

