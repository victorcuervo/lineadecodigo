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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HWBC4EE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T070416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ%2FCt7dl8Ce0291hdcNnZLtv%2FVPKryhRZsmM9%2FLoUjLAIhAO%2F45ahkXujZZqWUSfhv1ftlhJzAKrXrEfHcxiah1HtgKv8DCFUQABoMNjM3NDIzMTgzODA1Igz1vNirhLFUXKY7l4cq3AOreo82Xq8%2BxgO8l7Cz1tVQHTmG%2F3Hcp1O0cD4oL8BbuTFNEaVeHtPu0rFxFmfmiNLhbiStWBYgZMC8WL%2FgQ2WL8gYbEFut4a6JaIEiFZJgnP70GgVexkVQpemVrX7MX%2FLFsmDU9MaR8t5zpq6TXn5izUhekiww62bS7ssBJQc1S4xy41pP75if06L7kWH83BqePdtVLtAnMUUy0t0BEoy1cXG%2FX57vuRpUnciDUslBCk1pHJIT4GWsEB2cEWaddKyS0DeLwtt3iMQ0ArzjghKAKth70THimaMnvpxiCEkdWo9HMDbr4mz2xc4%2BWvKMqPeOtO1uRrA1XCgsXDJPJg8rMn3Ce0cTNN9L%2BlAAzYKBzBi7LX756J6QLQ5sEUlzm6F2MtfnN6RFfE5lDAAsGIfGCFe3VhsB7AVdjrG6UdaXuvIjsmWXGppRh0s3OLfun%2FTCaOsk59Q9ZmqVT13zpsXfm2Dy9R0zv9w%2BEJf6Zhd79T6FFCqT0X0sPz6OVUX9%2F24puL9Rk7N%2BwiYqpskjjbNBHCtEt6BWspPvaMNFGmxGJ391NaKexccwY6a9DIgez%2FkwrjhAwGZAy8UGWfGzUckU91mygcRR%2BsZRjdR4mLOhtTFStGZIPz3HsTPT%2BjDxsMnJBjqkASbgk%2BV6d1lg6grH5SpG61bRAM1PtNqP691Uexmdne0LAb0KlbjifEXsp1%2Ffw%2B7YfDAhavPJ8quDYv0s%2BoNUKmOsr%2FtOnoB%2F6dH2NaoKi1SPbDw1%2B8GVGkRXR8FFFANvOicqSA9%2BwFCnFKZU7Yxk5shMbG2t5nlrHq2a9gqqlsIzdUsql%2BXZjc5awtIwjroimOIqmWqzHT%2BHBxYDXV0qRY5eP7A%2F&X-Amz-Signature=e475a9bb4307d7cea831f4770678480a218a2e019e144d24461124a811270ef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZY7BHYE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T070416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHB5t9gQlRHs8khvkUplpEDguEc6fG9t1i6rc6zC5Y%2BXAiEAx4lP%2FRapCtUbmujgLW%2FAqbyfbgY0MvDKuWbrYQfei%2Fkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAffu2t%2Fl39EP8huqSrcA00A%2FxYisOcwg0QPpt1J%2Fhug3ng24N7ueKb3n%2Fjqdk32pimcvfTkPGlHT6EOVlj152MYuk94%2Bm6MFJk8oQS9lRkJk8j%2BaapcTwXirLbLG%2B8tTktaecuz7wrSZLMUXVX%2B7G6B902ZveKlV1UNS0FJt%2BCFoKVJeAVUydyZ1ij0sEiAzHWyIRo5PPICNAoeFUvp8N4JYf3v0%2F0oDRez53qF7sl455vveqLpKizqZUBFGE6XIeVhlpP%2BFlIPiKwY94vwKYnslpfry5rmKdyV5qJ%2FaVdHGd5wh26y0Ma%2Bvn3IeApCi8mD0izIbMAs8F%2BM29KCT0Kk337aa8Dra0UiVN4eMiPF6s7TkqeWSMkeMnPdeWjk2ew3GkxfEcOMer%2F7lDiV%2BHgyTfGUE5if5iQh1skxK34ZY4SsbuGM9eReB9%2BD6jyFRxJqBTNvrvF0MnVrKSm9W7prN5xbERUcVFJQiydxaW%2Br8xuMaZ04Y%2F%2BysKB11M6Kcu9pYsE6eHjWcoaHwxlp2RaEh26ulYO3Xm0HpWapdWk8xMt7DKSro9iyvpKxrhHmZd7J5npB1qsghE2iUa1CS4m7ty0eh1XgEKmhxoEsBJUNrhlmh89FBggIDyQIYlw2CF4RE0v7XaLuWfvGMIqsyckGOqUBxSMmaxVk%2FjFd1Kmx6KX1vUwX3PWpfcjScAaZigqR6ByK68mhxfzMEBMkpY%2FwTpaKDry0kMUkBEsDIuigbjvbAhfx0ltabqujD%2BHBYA3F%2BMOwaGOvnBJmZz3cqoGzL%2FjSoZ0C%2F%2F5PY%2BIW%2FfdjNGUbRzARUkUbCLkfiHxosoHLDT4nkkR3ISh6fyPBaK31KlVTKHjN6AX4eagQbjXhNExJ0KzpfVX2&X-Amz-Signature=96eefa1d7a9b76b646c2fa31fd13366708d4d753c75dc492cc4ac5ea80ac353a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

