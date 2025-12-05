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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBI7UORE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T213144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHw04UQtODMbDLRpPqq9PMEv0TiCkZFO7fx%2BrND%2B7kbNAiBv3gM5gKJxga91l8MyuqL03PWOU%2FzS6U9zJJWK6jseOSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMmnMXNcw9z%2BNk2murKtwDw2PsOttDTnpLExoWhKO6Li45HXATaPVtnwh1i8SzjR7ynO%2BH8hv4NpsK%2FSR7O%2FIK9%2FDMB1XQQ0uq%2BY7CpTmigT8vDEHnIy9Erln80NE4YEQW3b%2BIYMs2GeEbUK97JmiH%2FaC0K4oyM06dJHlEVAhqTu%2FfwRQV4YaSV%2FFkX6LYT5%2B9aobICNXER1yVTSZkwpxipUKDrXiA1g97ReoJ6P%2BXnycPr9EHagUfjnZ1mQ5ZWmwTLBu8SuU0KqV7GSfACa4COPH5bMuyo5rl68dvs%2FUzYtZJQzbbwKg9Oqm93%2BlRtXp1N%2BUEEHPkyNL%2F5j9TqdKfhbsCwI2Oc7DdZ21hMcigk68zJGOubhPicnPGFLXO43BhlUXSaGAwyprQQP6yC49PQJhfY4x%2BSMVOcmGFm%2B8uuF3CseGhlPunwLUqMeTs9pdus8vi%2FcO%2F0s%2Bxmh0%2FTU6%2FjJzUaWaGs%2FC7wUaCh05epi0ZBIfPJQW9btqKiRhub3K3OXs9NgpKQXkRtIq0C%2FX1As3AmnPoQFhyV5Qg25kkMuclHrpbP%2F%2FWtIBG16CQrj8zc%2FCNkanzWbnuWtQu8JOkkj%2FLqBVEhVV9Aw7U3r9fxt2k9%2FZxDHKUutM5uxNdBliiqbpGcO%2BA6txyQKgwt5rNyQY6pgFeiAQMlYAhblhbMkIWxFab4E7uArQKs8g1%2BxHYzQIXxNkAdyv%2FRxeKdFxh2EN7GHoQiYYQ5rsY7gddj5KVikuwJRgJI2curYGmSJIi9CVfoshvXuasD4QJ650rpMs%2BzrhA30e6SUHJuNQImnFrtqquTEzHTlA6ZQ4ZhxZtzNFHI7ODZs5w1s3gAlx63Ga2x1FRukHnymMo4euFJZ1JL3Q003ZzRHKK&X-Amz-Signature=f7838728402e9a14a38f9aef3742770c54a3a3efdd3d9d55e3f4c4569e9bec44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DA3H6JD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T213143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEmxx5gKZilKNYaCddbIj%2FT2p62ucEDDoGXj9LCscinwIgJ5qYq1SKBjF5EU0CSzyUj5TMeKinMNfHbL7uyOOkpmsq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJxBq9C%2FYJSByoz4QCrcAyqKX2pwZx6tkw%2FXh9j2h5XjQLeBhLcj5jvindJrXbQjpIjKIwcjPqw%2BKm7%2FF2RnCsc1hw0b0vGK9Vbq21clOi8lik%2BE4zMLNEkx25Nx%2BhaiOYsfy%2BBCfHGJNGR%2BCf69PqrQvqk%2FAbadKh4laEtPwAagr54jgLZA2C12Kiq7E0spj9G4%2BeoeXHRbbuB7%2BT3ZqtZQEAsPrbIwFzIixZZZ1CZxlyIxvgDKsZjuAMAD80hMTQR1MSyC6JAj2%2BQuX8e3yYTMKNiIJrbFeibdE161lqJLW7b24rz%2BJxnV7JnMQDarROuXLTQcbFM5KiAS53OmY3Lgk9LZ3y%2FSL65Bgt7aSKuQA7DkJMtCmlkFP8K4BgHBJew2FGh87fMXHDjrtM4dSnbAkfQSWe98lrHcf2zNd60mUI6Gm9BLaoJ7zirTTFlbEftKPcOStQxyqPlGBOIyfX%2BRrUH0ZBEmhe0TolI5o%2Bzjn11uDOFbi7sZq%2Fpr84MPMZWkL1AJBV5QmmjRyWXn86w2ecBFTfD33QtD%2FJaZf7hRjjSqqTLP0y3%2Fb3M%2FiJQk29Sni%2FTH1aK8RGlK%2Fq1kCsIMfzRqsH9YYJWobFJUriJs9TqmXtyDkMaB61fnqGEa3TXPsBf3TBiURL1ZMNmLzckGOqUBtSQgKi%2FnH55QDL40%2BrRRfR%2Fsk5BvdgDAsDknYsoP0I2exKtHPByB9%2FOAdy4c9p12nW2knt67c7BV2d0mGDQdR5Z8jsIzDj1H2eKN6gs%2FGB%2BKSm7TQah6TQf%2Ba1jQxdlGe0PXqGwelNneOSSDu4psbFFkEfuNtT39jzDii%2Bq8HdMTgNeSOG1c0YL00zsCOo5bVMOdq%2BiyKJkQQiy7v9K1BiQP4XaV&X-Amz-Signature=9b6c03f673ff58420fd4a7f05cd4d1e29b8e5f1432fd68fdf90416054e4c433b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

