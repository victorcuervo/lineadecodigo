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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDYAFDJV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T065152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSftDMqycO%2FzffVWk42tzrUdEQj0ABS9yvhLAmkQyECgIgXOvVe18PMWoRUxJBCkm%2Fo4N4PXtFBZg%2FoJ3hZE03hNkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKUlUJe0I143LJFzyyrcA%2BvQmu55ToiB%2FWanoqeACGccyyVN0DDAaNTKekiahO4PV%2F8xjM4x7EUh%2B1fFlS579lNk%2BSCiAQnwgZaYCDDbNOTc0nmdiPcMxJUY8j4p3KOZ5WoHkDfa76kk1fk1vYfjgkD2JL4dVqYDydr8ijKRmfDlgr6nmZFrGdLETawOY91XJaBGO2G%2B6hLlMbl%2BPPrS%2BCHMxNKbTxxyz%2Bvp4fLN6pC%2Bh0lThXEty6ZrgfV4%2FjQ7B9WC7k6Zrz4spar5FanCY0jm0IKbPiKDmchG%2F9B%2B3WNj8v2OwU6dYhai8fMy58acwQs%2BmmV2P3bWmslye6pkSuTtNpYAmBggF34O3HJjRPCGFKMG%2FCJ%2FJ4u0VD2aQoWDLYjAfUbc2nIy0CwvNW0LGVd87G%2F%2FB78%2BloOA0uTx8%2BGKKUAxJl%2BO9m%2FThMPoNSjvDSMzyMFdcpjvnFvb%2FgTQyCK69KNLWOMKxUZ%2B0OizeRJI%2BuwGEFrMc22qYFI7R%2BpMI%2BJ8m35WRsakdMpXIduor9B6TT%2F1DDGJJur%2F4m3ry2kluytuue8ivSmlvBIyuCNzOiN6cIg3XIHyv7DfK%2BbqMqLbGCLDcyCHHnBiYPhvTpV%2BZGYQ4b%2B%2FE3%2BYN2lTxlqAWfDDM0NfWA3ziiMNMOOmyckGOqUB7hoqzozJ8V5O15dyDYSIR2ng28%2FXniRFdmoXO65GmaT3lBO4VGUyTtBlgn7gcIMO81ga6W12IJnbr%2Fp%2B3uwOYhnyWqnOQFnpWzuiGN0AxpUZvT9At4k%2BWkG8%2Febt94UGTUS9dWekUAtWgNwNYxLCeyJpyAs86Tv2DpAgZ2f%2FB6KoM96xKFmJvvoAotRBfFZxqEEl8v37njhpkjINIDjqfEIwJOkG&X-Amz-Signature=bb6abf728376c13ad0d4762548d7ecdfff491949da4a8ea66b81339ac55bcfe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZRS3KLO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T065152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLTGroiJ%2B4oUwj%2BCdF0x6y51gPPwp63J%2BjMSX%2Bl7UVPwIhAMYtb38reU0hAqdy0Dw7wMlFnu8y%2BHWuOoTgwcPdvVfoKv8DCFUQABoMNjM3NDIzMTgzODA1IgzS8kbqjemgZ1qfEWUq3AOdwyf6jXTlRXRAN7pBqqM3JlgZj7ikwShLxydV2QgRtXPo2gWbkOZFwtyKWHa4dXajTXB4%2BKzmCGnol32ZzjEdCPNSR4RPn%2BBnX5A25bBYGy6Hxl2Qdzk2zJgktMEzoeLRqG4XJdsFOC6GCb5McyOo0erjHHxKuA6vHtq%2BmZNU2FPqbxwDmAOSrGpP2b%2F95nrppioEEzRArorbVb5HwGZLRYSuYvrqo0exfZgUP6pI85EbGti%2Fx2yGiThNLkwllEGc3L7BKngVphaZM5XY8UjHjAf45qdHqtfxYxZQEP2SdfckdxsnfrNCJNVm7QfpqU0KQBtlqs3zbBcaAykOptMbhHWSTxv0LaD5l7TKsxou0sdcGDvHdUYHQEK%2FhxNMzApIhJCtj5saJcBSMyKSP5FMuD2cGwi%2FvKQWQrpsohorkvSVQXElbwogfkVsU7TGyTNJB3Z2vsac7kBIE%2F5Ld91QYHN6VacnXBX%2FXJru3WehhiDGOoOQGo2gFWpBpMrdu1GfI7R7Hw3Oktn2lO8jZqkkbGn9o7fjWyois%2BScmhOgDsJO1mOLFseE%2FFo8zV3b2KGxF48%2B5O0moLhJsFplG7%2BC9RM9gmn1bnVICFIL43bBnAuycINKdZgtVTcTUjCxp8nJBjqkAf4vNEOEokK83Lrvfn%2Fyxldq6NXmYIrkeUjqv2KM2ZBLiGD22gsF%2Bk0LHPvVUx7K9k3ZLDsnRXYPWrr0eJ3EpXgYFSkISNNaZmdDKTf0QfeFJ1PGWqudox20tYpvISnptyP%2FJ1uxLHVR%2FV4m4Dw1wFW3oMZrnCEdu05Tz2JKSGUnrwEYI9IWzr5YAK1I%2FS5%2BGsewPQIamuT1qphnSa3VmQ8i3wf9&X-Amz-Signature=48ef14edb2296d254eafe04d76dae2c512c156253885f2b9a9ba2bffe75908f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

