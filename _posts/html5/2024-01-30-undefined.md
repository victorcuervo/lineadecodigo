---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALMYR4V%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T060120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIBmreXYeRpUSNZZDs3hUSDIYCAW5RqhgfarE4pEikZJuAiEAl8z%2FldHSH7hTqt8cRztJ2VN4UaVflsCfqYj95mGWVsQq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDLhAE4B6rey8oF5STyrcA5w5avj%2BQ05hUL8p6EnCps2F0GVd72O%2Bw3PAIMDRufdau6lbcGdDFXsg9V1nk0wOo4eRkXhezdZfI2rZfm7ZRbivFQ%2BLe3fyFqUNtPjPPYC8%2FRkGe4nrYc5qG1%2B96Qz9PmTLxVv3qjs5eMFUUPW%2FTanz5czLeIoByDeLkpXsu%2FELdt5otehcPFszQbkwJohE0aclBC6fE%2FFFyp2afFds5kh8ymNijgnRnDfpVpUaXyBUkcOai0nzLF%2FSg%2F4uygseIpulFiU2lK2zaZ2hQgNT%2BcPBHRl5izJ%2Fr%2FsLvPLVrWTQ9c9FK0H%2F0MKqz6O%2FLH0cYPZBCUPwJn0QvB%2BkFiwNNdnZX%2FCygMjnFuVw12nmXJsJNgeZ24GErgSrT8gz2jnLwqn4SAB679ESK6RFHOsw0%2F59U3ExSWZcPRcX5hwjXN9VTEeCgOuqxQRpQVFumFKIlt1nJQB%2BCc9Du9i8WOasZZ2x2disa3Rb8jxSX8qdx22yyahwpb1KUf7MvAKeH5Spo7%2BKsDOBQu18LS6X7iMu0WguTPbFP2Mf9dZx3tYqxf4rSORwnSmizjbG8do9NAzXuU%2B0wxeCNeGhsRboNlK4wCQjNu6dZZbNMmw%2BezEhG1WEvtkgIxIr2mmVVPbwMJiav8kGOqUBiv7PFH7YMa71KyYJVm20614PNHHvzWQANAfg1sjoS98Xj3GG3u%2B6sCPJJ79MzM01ggrrO%2FAz0nIinZN7Rn7k2gt74xxiaPTOgKfLc%2FbnmG7SEIKYJsygcE4qe1wpc6LuXrUy1hykMVrT08nexyz9UwgTAJ7iek0giKe%2Ff4ZH2sbGRmg6eBOeHbHIRnR378SrU33cbfQcEH0hLFDNJZCMjCw2WRu2&X-Amz-Signature=32ac6b96c868547174de885361aa9a452a5f2922060a67f5c7e016dfa575652b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCHBK7Q3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T060120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIAdM3XqFSPAPh8y%2F2fqbLNZlpATiN%2FFHYZZyNQSv787gAiA30a8p%2FNZ9zHpWx4CPVXr4fN8ixNZAPnwg9KvnXr4F2yr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMqemwpVWK7BTLGGhNKtwDLs18vtOmnpsr8FjLdGLf8Nw6AXYYg8h4q8BBMIUd74feCDcMeih41QEHn%2B2g4IWjeWYFex4zqDlqc1SGf%2FpBPcdNEct58omCaA70Yv24%2B%2FPj7mCtOxSE%2BWo4etEYDnpZZyoW%2BXGrbReOwBa1eUax8I6%2B5JjpCLLDwmfLYyYKuZNar5h28VJwycU9k8IPF5C1cjkK7u2lcp5%2BjCNUCcGyW3Lf3UioiTogHGBo98HP821k67SvTL51owpS1%2FvW2TNdMKLF8kEcDvkTskLf6t8uN9jEjf4KEGP6%2BdG1ZF4xHVjvv7YdtRTCU6e7EsiPuGhGsF0o5MbKlM8cN63GCNWdfFiOLzvH0zu7svYKgRFM%2BR23nc6ceo3b%2F1v9Vg1z96%2BJfRrQ29rTU7%2FbmSfXt9LqlJnTNmgZFIuq%2FIVDpTDWr0XI%2BDnF4DrgGFYS1p0jAkaSyKfncY7VfHSIx0hntdHhC%2BxXu8ykB0J%2Fz7Dgcmh%2FKyLm7IIe3l%2BeVblnFDqlZjctkr2bG%2FpsfGnCWbyLrA%2BGOMB8hiV%2B%2BfvkofD3j3p3ywdZvKnl2VJdtuAtmzTDDNyHjzCL%2F0YbXf4OU1ff98xXQy1QMpz3F3luil3np8r9YRXZeClXcnPaMGWjB5Mw1pu%2FyQY6pgHRuJbnb64lmpbTDJeP3Pqeaulfyp%2FAR0yCaOFSLtKprBaKBT0ZHtdqCiCYTXIrLVhANUyqieR5YLscjR%2FKPeUhZFv%2FvTcw0ZpUQDTNRiJiqYlFUnhZFBqbR7pKQxnoGRfwt4%2BL4EaqZ5hEN%2FPM7jL0K%2BqcuUVVFEgdpGjxQE7cvn9tK%2FHTrgvGSENIvIwpUa7xGzSQRZumZsO9G4gyW0annVz%2FIv4S&X-Amz-Signature=7fd6dc347c0f54b0c5e5f2c95d4330ad2fbb09b38189bf502f87bd8c93cd4289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

