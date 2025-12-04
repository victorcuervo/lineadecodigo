---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665657C7UT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIF7%2FOrxf5XB4kIazMF82q%2FATHMWx4apKVh3Zkzlsxq8yAiEA18j3VbwU4NiXSdBwm3tdVdgzKdFhQKuNPkDGba1uJMcq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDKHwITdIjUcIFvgt5CrcA2QvaWz8z8wMbRFw%2B1T8Q0si8snEVYR3u%2Bj0G%2FJdZYJkvwRQyJ1Fk97TwwHyFeFAmc%2Bxdkd%2BgXSzxqthUtkjaJgQ2dURpk40%2BKXIwi2rXeOYaSAaLWAdhLSQfVnSXJXe%2FglNsWGwm8bgXcR8DLV5MruzluB7QyI51Ooz7qwlTZf9vkWTDC3UN0M17F1B%2Bs9uqbVq5C9u75xt1R0LwnO9aRZ97o0Vvv2ZbHmhoNNW4x9dmgUedvzfoKPN%2FiZnsYEtngpdSfkUc%2FGHVAf%2BPZ95JvwIHfg9%2FTRbG%2BFXAIxAoR7XBsziMTgpSV9g8e9E2SacxXlV6XCKv%2B%2Fg3C6tojzpXZJ67zpyxQBskW9GYHrgFFl8hUj5nvEHUqvVX72czgL8qy40jQf0EHUGtPbcifv12gSel6uag%2FuewgsGdb%2Bz8DvA5%2BOkIS%2Fcj6IqyFGGzL6tUAg%2Bu66dGZj0bqQgEuBNU9soQ0BPcBKwUIvlvNEqqtjwXh%2F2mW0uRxzbamDANZnd%2Fl4Ef1IZqrGW5wKZMEqaXZi7A4NmDkLGYAzR1MTX3AsPEWP3RgaAcUWNBA5RZKkPIlebw3oN8euaYLsrp%2BWw2KutdAcQvz8UzJPdeKlDC827FrR37BD4nziTrjuLMKrzw8kGOqUByLEkEUn6bNA1lGxRIElATrzgbrLmylQM1J%2BA8CRLpn5Ph%2Bmz18mVxCSaXmEaE0tKHkYjQIESsZm2fai80w8762BPE%2BlB2%2BPxr%2Fz6r480eMXIrcHfiFWJOwnmWfYGJvb%2FkwJ9%2FTESWm5KDys2mc6EcePD2gu0Q0umC%2B3f8IIbfLpu7%2BnvxD9U5c0RBhr7o6apmIHC7rcZXSsl1ulCGm1sr9PoveeY&X-Amz-Signature=9c8821ea0e20a5a7cb56ddd9b20cb8557fd1d8a6ed379278890c1078da79f648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ35OANC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIG9tcpzMfTfY3V5SaOaWxXnSg2eyg3Yp580taM2QlCwUAiEAhy9b8rT4yA2zc0QECxTNs7%2FiFxAq9QeT8iE7dolsyqEq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDJmlWGcv2lEswQBAwircA0TG4Nq1kq0e88dAxKpNplxQnEf0kHEZR6on%2FCFGgN6PchYELYdu%2BxIUiKGX6brN1CwyPmUZQAod1AlWAdhH1XjLvoUFJCJ6V%2BQA4uPQQBtJb1KbINko00fWBmrne2dUocRwrjny3Re9cWDpZRLRFrV4CvP%2BMoPDowwKRlLBdoTN90rl77aGOOpxgBAxQ3gJldLEO3vcRtS95ABeddNHCbBsaR%2FI10cv2e3uzcWCoNeFgQRDR1w4OkizgBWq93O2AU%2BX8bh0FXN47mRUfOX8cC4JRdM5f5%2FBZJMeY9tANWnIjvmvq4lfuY2X0heHGBC3csryWkWVyGVdCvGNFfwuGwnpX9gdLc8uVS5SLjvkb54AoyBg1XNNlG7TjbCN9LrwdmvJSzSaRFUW4cIAfVV4hQtaQ60GzxdVb3u%2B2TEBrGaIZ3XVWdmzLeK3lR7FZQ%2FTiUjqQiz8YWslWqia7ZNdvA5ZUWTIZuIN7iS10gnqKN%2F3Um%2FKvJuMXvGyrhaaokUNLiLUpOCAYExX7ILu%2BVv4vb%2BtUL%2FSAo05x6NrP%2F4zvRGBa%2BSjLxISx5ptQfmeZdQkEicfQWI8%2FQ0SXkCF4vWI0TDmEg3Jq5QRMe3cN%2B%2Fn3cKuS%2FBZTsmprlbJ5YK7MMHyw8kGOqUB2Yy8J97YHaZ8XM1%2B%2BhmYn%2B44R7O3Tmbp6yBp8ONOTr0HU%2BtSdMxEaC3PSViF%2BGc12MkYbEFgsME%2Fz9bK%2Bfc3KtOxEhufCmmrTgVmAA0vFZ6YW6ol1BoeG0k3VrAtcUyPDfezCsrgZIdq5088kUwRhF29KJDW2pkMuHBVj4pL8qEql131iVrhleUZjI8z%2FcnSnWeklo5k5tvtMXMYO4AbwytQS9wH&X-Amz-Signature=77d434d82b6c0a4483a6939a29f3595bcde604fc4157fb6f7b6f4e15aed52226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

