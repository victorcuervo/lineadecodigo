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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIUGGOG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU8BPD%2BeNXl9EUnoqWSTlx0YfuIwE7mxZuIYOJlEX6ygIhAJyUT1vWev1ExBPyw%2Bvb5ymbu2icMq2On3EjOxRWw0GwKv8DCGwQABoMNjM3NDIzMTgzODA1IgyD4q%2F8PDEx6QK0TxAq3ANcr0IXYkLg3%2Fti4q9xpJn9q1%2Fa8JuAV7LmzW10lPD53%2Bl2eVssx3nBWPkUXHVlWWSjqAs6piR4FaSmjSQf7r9AG6ULMLIYT%2FAMmCRvSzOaD4d94jqf6qLahQs91qPZx1DLA%2BbYGhB39UINrHovL7RbAvJ4cFdiELA962M6E8C2bq%2Fau%2BEDFSJLpXzc%2FBq8Jv%2FeJ4K9gM6U%2B14ZaKETMPt0ZOPGyqLPyB6DG6unw2w3roL%2BYnccGQ%2B%2Fu4a8BDgOcsY6MPBLhcZZ6xdCDq0us8lkJbDaW67UTyMR8HOJN9%2BDaDkA%2F4ERsEJc0oK0eRbG77V5kO6WJlyCjLJvWztEuexleg58KuphObNGO1%2FBmUEsUuuJSoN24BPjrULAQoS7GWqmAoky6rTufLFlddqOB%2Fgh5EE4Inwsm5775n6MwNkwIlp1FI6WvwPolJoo88C%2Be7eNuScn0otoiU%2BZ000N9nHlK2ZxpmAokfve%2BaZp3gkcztOSqmgDFwsT1kBG4LtLHuEkDfWfz8ylodDC9BlkmHmjMRFuPicrFe4Cfj5XwlWAzp%2BoElZ1lfMS7Ry8IH7y6wmYVh7tOf2qjt0Fx%2F9OSGSHnPmRpdusTBQIb%2BHMrSNNydXRvmcquC16g%2FEaMjC%2Bws7JBjqkAeGB%2F2P6CUeGzcHuinBqPdI12dt7xsG9UuT%2Bbal0oMqQiEUZ2D4QWR8sSJT%2FAVtNim9EMmX1ShhWogKFT2BB5azDHCM1Bs5b2%2FIfgoT2uuPBiUfZrLU25WhNX1AqO%2FQ%2FmzDp7CD%2Brdbicri71WXVb95INyFTKMe7Dmf6mrdJShzV6cvcGjWz%2F85xQYFY22GHLoAfy5SMUP2FoS8u7szmZ%2Bmlrwrx&X-Amz-Signature=078eef85bea6b619ff715a93f599948fefd904cfcfcd883bb86f3370284df6b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R24MTIA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB17Ax8x5lgS9X0QH6C4Xor9MaLX4PePdW3iAlaWW0XsAiEA7hq87Bbw3jRJIO9LgTw0twOhTuu4ADBqfwHyz3HY%2BnMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDG3YZr9ZWff80xywuircAw83LVuijTj%2FtEYFizNePOFPDI905xE3lZC4eWOiaGzmpFBE9DXeSqMowB9BXSji07jfXNe%2BjqV4P9QbWFuqX169hDJWQ%2BQs%2F1xo6KrDr96LvRF4TNgvB4sxLXkJyTmVR9%2FboGSIacWc%2FxeKAsFmJYFRSNPSx2NmRNWAQs%2Ba2eE6qJxsNwCx%2BMLbIqewyE%2F0IoeOaLimJqC77A2h2HTCs%2FU0RhtW3%2ByfeVtUdMkWrZ3knyiB6KbLSwyvkU%2FPVsFHRldslIQhz3wIcok2fN%2BsGLgTT68UB4dfZ9e0yOqYkJGIkPCeN2cgo67Klpd%2FHJKyUv3Tny%2BPavYBvg6P8pjv4UYI1vd73hdOvPUTsOn9CheGGpw0pXqf8crT6Am69s6MBdJjLJJ4wvymGdm0MyUPX1n2oucIsRk6MJZJGI4BZ%2FMWvA7%2BaYXo2xj7TyCU94vYvIZc6bLaLKlg6J7usOafHwVY0L7RO%2F695%2B1eG5%2BkPK85QhvFHjrtYpEiu4ZqGW4Mdtd3SG1Z73DFXUOAxPVfl6qWD2gVbid6XI3CM%2FvsUPEfc77gCN0hK0TmBWFdKJhIKmUpASyb6WWT%2FeGAFBDZVrOVnw8TrUFlJ6yecaM7DOuk4gopk9%2F%2F7OLHm2wdMMDCzskGOqUBwv6Uxj6R660OqYs7y%2F81YmOfnm5JOrWw0NOG9P0VsZqUcWZ14rvzpPnqWJM1539r7m5I2cze0v9%2FLR3Tx2zbrdf5yFh3vEAGfeVDHbhMv%2FlJVMr2IlD7cbMaiQoKOevjhg8qZRFDGMR1JNqCTLpOZebk41GxmfZGOQmeRMB9Ol13RSILM4T6ooSUKKF%2BWfSGOkBZ51ibC4TrdQnyYuQ9QFIX7O2f&X-Amz-Signature=ac48c656f573ca433cdd3b37155fc38211b72369b3be52a74b59fe07f58f5fb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

