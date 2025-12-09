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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZY2BITS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFCovKWhOwuk80gAZhVadP7xTtA4gaaerUYWOU7w4UsMAiEAkoNiQu4kysT41N7UCRGXkuK0Zc3C446WSwZzy6gFco4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEL94GqxleMrKYfdtyrcA5jJpk47aFBVQR9N78xE2GdljI0n3X80A2H5Z9vVBgqF5w1I70sI47kTCcZlNYd80cEEGYNdR50CqThQFIrwoxpsIzxNaYtoHLUTEpfcIkTV15ZaJDuMTGl%2BKwobTZ33sijQwYi%2FDbr%2BZ%2BUyAsz1P%2BIyIPudhGoe8L2SkIpnHizp%2FcrfKe4wGfQ69HOeNp6LbsFrtAGt65Xx5n2j8XLU3xNEyRg3YfklvxdB6NOq7y6S1hdPjuOcQZcmWXfP%2FT0Sx2%2FXES9MRntHzu2705YtzAFV2hbT6BgGKwGS5VFECFYwKU9NRcfx5yNcmev%2B9%2Fp7AGW6BBnmHSo7pxcII%2BZZHN6Hj078TVyv5iaQAt2HldK1kpM0yOgNkoZcbbViegZFltKuyK%2B4cJPe1v1YjQWWVF7ypcuWfhCBtp5ZK3Ua0PnRjKOXcynhhR7tHQngtimP8%2FDHJ8qmbAz7iRJJqtXPvL%2FOdw2y%2FnCBTuKxIqJSC8dwMj6mF5JxjPMdpsH37yOuXbr5T1AH7yaXclKWDdqNu9my%2BeZg4vHVPhlbUpvQLMsxjqr5XQDiB6x3jgzczNR%2BXJy57OdvFgYGekVIaUnvv1jaxv0DmIsYNzpKHAB5mVFPQiGn%2B9bYodwX1ttXMPKN3skGOqUBG%2Bq%2BaKWxrCB0WhSV7zqkRNPJ%2F1uR1INS11C4wsYKT3PF9SRtEHTFly%2BJOy%2FfajFFbThmYIoSSbFGAd96f6BMb6D9xEC93VjAOh%2Fgb8SewZVSTaLhA8MpIP4EFbxlvnG9MaDpqnFTMAo498Nj48z6PItu6WgtscoVh%2BzA7cOsj6uOzNF7vAj0LXhKwEnXt56QrafQ%2BnT8ik2h0i6MBZsgKvx8iWi4&X-Amz-Signature=2dbe5985ca5cf75fe69531bb393a37f68c392088f003c2c8cae0456b5b4c68c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XODZFQBZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJeG7cvss5joT8DPVWGM9rgd5BL%2B1LFGD7PCnUI3j1dAIhAIRFf%2FqAZGR4iQwJkIgUFOPNVyWjZ1%2FIWWF7XsFgpoBEKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmmRYo24mryQ8j0hsq3ANDwQX6y0mWQ6zVfp4j6F%2BWC7hfZOWlwxuLUaaOme%2Be5Ctagmex0ZJteKX31l8I6y2AU2C4kpBRYiLUf1D8OuHR3I40vycKIXw6umuGbvH2RGLIWyvmpiPP%2FfgzXJkcGeVdgSef%2BcO0L%2BAYLVfJSn%2FZb7n%2FLZov%2B39pd3%2Fee9QYtQpOCzPv%2FR6yNiCjyA%2FJW4FhBQ5dL3Rh3f%2Fvaac4W3GGdNM%2Fne6wTBFrf%2BnvOg0cD1ppZ7NSf4OA%2BgyNMOZvil5A5cms9WoyIB9ovXjC0mvJhk0OKLlreAJf%2ByNb3fNjakDNIxI6r%2FqtFRUPhVVtHmUPUvVJCxUH9Y812VOhuMVzTaKCEidtu6gWWwIe0W0KxLwzCv6AcwTOnlAHO1Mqg10IJj1NEx59eokrWMrbqoC54vpUjpzYs4E%2BiDnuaBMlQMB66iwoMaVyhiJaedn4lxg9HEjZz6OoUxEvmHYtZTCrTMXdgFnLyQe5UFJ2eH8XGDEAV8IZnAYSzHRCfmfrGgzdUwsyl2nA1I3RaTS7pQXmCGqEPw7zIeDDDZLzRiKrd56w28MtfSQbI%2F0OTCYgn5vReWL5zKzCrWA%2BekwqcZcXYfyi0QZXt%2FylUfXBR0TtMWNvRalzTMNdzW7pHTD6jt7JBjqkAekoVKaoG2uQi90NhSL85TkTYwyeV7XHVNSpTR7OwIQ48cxiwjkvggKM%2BrF7LndWv0%2FiVqiXR8nbD%2B61a1XkPqXQ7uYaSwva7ZvX1oztFwCpEx7qmSRRSGKZIO9bQPhD3kkYicrOENIQgU0EBoAJITH0Qd0D0jaSELzcG53TGfm037OFXk2dV24Z0Zh93Z2aC5XOWSUHxRVQ1kuI5o%2B3uCVc2n11&X-Amz-Signature=a3c8b5d5dfc331c86ae98f09af2e60f66d3b42bd940ae5df3f342ee0b5a771e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

