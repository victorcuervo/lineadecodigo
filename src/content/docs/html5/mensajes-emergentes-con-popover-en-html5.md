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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUTG2QDX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T032638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5nsM511cG0vJ%2FLqbUlfnIv2BBB47H15kL7kZIdtc83AiEAg5Hv4OAkTE9%2BOrEOJUZZdLZa4%2FAlGUI%2FSAJoDu%2BkR2MqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6PG2n%2BSX5tKT5PlyrcA6fOlLHxiWiQir9otJ3WKXE5TjUt2FfD7a2WEjk8sEfFePEPnPU7EgSSA1x0Ko2PyHyw0PWajOcOEQzb5RFL09%2BWr8z9sW6xyhb%2F8Hv3PcN0II2CBL4Zd8b%2FyIzOqzT1qNxuPuUGEpT1z3GCX0DaH5XIacI9F358Yk02SMm9RrfsyzPEHZPX4GZ%2B9Vjh825h5TvNMaxiRVeJ2AAKcOqJZ1RzhJ8JgpBWWw8qLED8F9K89u%2BrwqkdUbges9BYq7Gj1fvp6PUlZEJQfnkozlekmhrB%2B7RkwGHvBH6i8SSzcWtgIJ%2B3C7CgqeFVPvFyMqcytyF0z%2BaZhZcP2p42xhfI283i2cW7eQNFOMuAldHZqquweIQR%2FGR%2BzPBK%2FL2t%2Fmz3P4X0BUD%2BHqXXXKWDNsKhVywrEofz5exEBveUgST8kNFhWdeyfdSs0MVX3KtatTUnf6npKzMmLLCIQEnMHyp87zSwltQjzrJoUu8M3g%2B5cCFd1vDepj6f75EPURwQ9VPumdpOjaIj48TNI9%2BJM8OHXt2aESkofOvg7H%2B4YSJt7f%2FsG83Po%2BHklooPIwqBW%2BTVTeA4qh%2Bsf1MXfqYP6fw%2BHIhEXpeX0d%2F1pail0XPDJrpomnxDoeMcbqQyyfdjMLiN3skGOqUBQtttWDDMAAgc0odBfsR%2FidisvbS1vw0%2Fj%2F50%2BOMR8I%2F0EtDyLsCL0ascXgxLEjfhG0Z%2F1eDDctetNf0G9Doqni6zEWamgU2ORP%2By4ib8zmCuO1Wuvd0pjvgdMITG3%2FrptyqaseimrZrEVrZtlubXuFzKN20%2B6yvTBUCeVpXlVQDApcx09xZRjvOhl1Zp5J4BrWw4vo5UTZn0%2Bz9ah0%2FNgWLEmp5d&X-Amz-Signature=d10558b5af912976a93885adaa9e41559f88c3e52f071473d3563026c43f3c2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKVM3OKE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T032638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsEpEc6BHlLBJzx1CpvG50EN7EDkMzcDnbcMSoAE2%2FLAiEAvXgMKY0M81AZFiiRRZeobiX0DMavFvZl%2Beq4IOIdjusqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOHvqLHgN%2F4QO%2Bs0ircA2aMd4AuL2yLO5ME%2BgF4eH7sRRJAjF5YoPGMwlTJqJ%2BFBswQDssu5abaY4NMSlFXqMZMsdDD7G2CYevTYRZvVsbQ0Lxrn6Iy14eVulb0dklp2wYfHSfEYFXChg5kQYlL7ehDG1GCdDY7gZA%2FJE6CIEe7Qm2lPkrOTWAATVIsA5DUpxdHrFaqxTKYrojRj3kccLqrc98qcaw624MEKtYaxdx24gOq7sKvEyD3x3lQlBOecEdA5IcKG%2FYdT8snOFyhINYpdNP7mEDhTpuHouGDAbcB3g%2FQwQ8qk%2F37Er3SKo5vS6%2BYRZfyk06N%2Fe2d7sAe6HG3zdkz0pJgF5MECKtL9g%2BhQYX%2FTrpizWBO8hD4JooZ6elc6Nhk7%2BLreqvjvRd1SN6U9OqPuv6Lf4kbozVV1Q5FG%2Bnt2ilFM8TxlzGfLFCIb%2BHoX99tHDuzVtSa3rXBfLTlpqJN3PAg3Q2cnCdnCFlKDAYgtEB3QcgY9%2FpVS18XV2CojP%2FlZhQ%2FfZO64zJP542maYgw0tpbQBE40eQ1tT2eVVykTHONvLAqc14m%2BAEHn0AWVvgTBhMh7VaHIKV9wocEfrv4%2BamOETAirLt%2FNfA4CE0t3dXztVU978iVxThhuIwvqdq%2FUl8455TfMMiQ3skGOqUBIdrdbGpkKHJw3eMwod8tlxlm93GMDK3s1X2gnEm%2FOl%2BlYJgS95Zh2rvHri1ycoL9%2BBKYLYNjJR2KbCeSzzGoplFhHbxX1FYXmmjIbtHVYbE3ImAtZDznCAYiy5x5Y2cnHBwod%2BaQYePSS8DzFJOLMagMRFwgVyB68YvUJEd2JovUIAUE4jgsBAyTJBvRvXvZx9oVJUg3fqE%2FZrt1Q5hbGK9rcJo9&X-Amz-Signature=923d85a21922ffad7ea61344ed085c31d76ef5bd31e53f5bc60784bc727545eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

