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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y64OZAB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJM31eS1JL0n3QdrdyrWrR3wQch3wDJ%2Bug4RRA9MF3eQIhAPBMw0ur91C33hnBnm%2FoFqwm6hNXP4B%2BUZ4vbCTchzhTKv8DCGAQABoMNjM3NDIzMTgzODA1IgxVY65jXUOfofjsxAIq3AOWjon4TUWRQSkSc8IVJhzKqJppf3fjmb7n0Dk4HOJwHfvujvVy0kxv9AAL4%2FotH3eD4xubYCoLJVtMvTf2uE%2B9ir8hsvZOVfyR9RSSbmcN9mKz1ebiZ3YgoBxgJ0ThGxRiUzEMvEUBC3p%2Fi3zxn57fqbFkdsvSdFBg4kJnlXk%2B8kHe6IqgN0VBHNYgtHhPzz5fwhL%2FqQN3ZnZjun7aQrhpQuqW5GD44QgRh8e2njgPrpdhix3C11X9iRhOlwwcSyLCFMC6rnxml5oNDiTIGM7W95TkL0jvA28mVMJgtvxijx2fpK%2BWhWlmarm2TLRv4uhkGGviVUKjX0WtfgjoZvzsRhhhQ%2F8iZsQTKXDryl2ZzPQSfmJC00EGxK4aG3wVq9EsDLX2fJ5%2Ffb8NaYgnR%2FjwNTbbqr%2BKyTa2sekFQX2j2RKjFwuTOsQ%2B0rGWby4Es0tfc1QV3IkT%2BndDaHD91IhA6phuhZ2WUjECkovihoFXk2cJxFYS7TKZuisBFo1DHBkxZnTZx9LzG%2B1K9VDl7DRdbmPYX01PwcRCgmiAIVeQrD2TysN59EuqLk9MtKKa55JP4qNNuglBYOFIB8C1ho11fLr8kUrIKnvMjemd%2BwCYjMOUjUSR8EU9afCRrDCO8cvJBjqkATefoVMuglWcaYm6J7Ny6iLXeaqU1JfT4Wuh2zKA2AR4Adc2NZvo6ewYAuRIWg8Uods%2FzxUGKc6EvwmGnLRMN1epD22S2YtYhKlz5Y6Bmw6j3s0ND5Gx817rzc4my%2FJ2gMflB2RqKYYpokPeQvRTnAvDSB85T%2Ff3CX4veJ6Gzt3f4BoQENjrYsjpJD%2BEQHG6G95w3Ya0K0TvypeS8N0R8fqixww6&X-Amz-Signature=6bf11bce589b430c9a9705ac5cb09011235b4b425ef67c4741766128e3a7c089&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLHLSVDN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDElL%2F1cBSTUucLoTZdGN0dHt8IHsQuN7ahn7i41fRm0wIhALCFhvSaatuUxJX3v9F3YPEN%2B2RogV9%2BMXInUZrW6sHlKv8DCGEQABoMNjM3NDIzMTgzODA1Igx6oGcIJcV0JcrXNS4q3APaUAwgKFfiXsrfzJFClFO4MLns2sUHN9pIRTbMBRCshVk%2BGaZVmGQKcfynuwtgORe%2Bsh5kZ%2F5g8EViVT7g28dakPmpn7bYyN2ukL0iDHFoqC12tG432PWVPN8xSp80O3aTTzahTNTNVQPKs29j31SQR6sglIcKSOzml%2B0WciQGS04aPiQ30Dj6Jfj%2FMo%2B0dysleWpGBhQHu5evogGNWhYo85oiy2jyJ7Id%2FsHoJGQExyDaVXBGwNAD%2FWgy3SktDvyZd%2F46OVYwjkUnFtPZShbF4A%2F0tJtW2t0i222WPJw1hPZCkm5Nii%2BAFdnFYYy%2BPq1PwQw0%2Fo3U3FtUuqyJ2p16GSoS5e0Nnhc1dWrZcA%2FqS6xWqANQB8e%2BT5BcjQ5jpq%2BiPxiARBThDvvvCZBAtX58QJVlF0M8f41oXAZb5pYb1pN5tvI9sG%2F5mPw8ZrPXCXA6m9zuPhwNmE728kX958zD5zCHR0EgzMMauqR8o75mc%2FNlG%2BBZAfQzyjRDkVDxTv5S%2B2ZFN2%2BOmylbKOTS%2FyXiYuabzLy1fdEM60sroyIzFOGyXzQ09TJXC2N8DV%2FAO7gEshSHBzYpZlzdMCAkgpX4KOFFkpedm1yPDipZDKscPRbrLQSAfQEsRDwm9jDx%2FMvJBjqkAew6MgGyW1Z6TQgtvmQLng8asKpNMXZpf8U90s8mOdzXlskVgPfDvVCHM1N8NfcpedwhOdp1J467aFG5aW7YrYdw%2FvlmxVvwnLW%2BG3llDZhBS3naJzIYdK%2Bk%2Fd%2FWhpZCaYqn%2BtiM3B2YtlgJLaCjbQ8a69S49Dl%2FMRRBjjnCoUl%2BQMf954CwXb2WGCoQn8WT6DBB%2BQvWe%2B8qVPDRTYGJtWyHjm%2Fw&X-Amz-Signature=ba31e33e9467f68b575e4aa5bcce85b5c501136aa15a625766a96dcd3167c94f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

