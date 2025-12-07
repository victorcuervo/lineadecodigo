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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5WF5TD4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1OZL%2B5sTj7xPaKgEwv1vEtpKvwN2SdsRuwdo250hmPgIgVWiE%2FtOohVIpWLvbS90fnrStMxmGxdy2RysqFmdmajUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7F3YUcknHJxWREJCrcA9WIcF6LfrelOtOTk%2BNBdtYvDt37ULZAivI0GyUEMYSXUsSt8QXSeILbwDKL9S5zJ8VRq5Xt4tOfHWnN7CmA4mFZg96JmDsugCIiHKWMBUK64kdL4CL4431VNX7lyNtCzN7o3dO8b2AHe7SaaXdRl5M%2FL83fcQUzNelo%2FwD2gRRDiIw9bau0A0WHc201A8qqbDfWCknYDQY2jL33oFTfmLyuuucZDg1n%2FT1JDSJ3q6%2Br%2BMivIhYYA9bAzWz4uPM8QQX9Yuw%2FQXLiRmF7tulOsmiYvrYHSF2BTKhEtucfe72h4wjr6lD9c5Uss3fYXx%2F1jKyYHXk7U3UDLQTn3jhJ3p8ShZAUyaTEyNtW1vN0RLVupvJNSbRjKDzArCqltmHnM%2B1%2B4d7vR6G0M6J7hQ5lmgO1hXjqQF%2B5m6ZdcNYocUKekQqbrz91Mlq6FUzTLsgTlIEpzV0Mvkb1fo%2F9i7j%2BeuWLXarpFC6XJHwA9tvYc5S3%2BkIlFwNJWSRaEUqQSNtFVEYSFdDu8gLu9WRgMdbF9nWCPAaaBve%2BzWWz4aG07HITY6pzN1pxsIaxIPQeVayDVukv1%2FGczivjVjGGHPFqIMlU3bSJFMsT%2F7SH3FhmCUrXmzmkj91KaI9Gn6ExMOr90skGOqUBPQhxPQXNkEvkRtdxhPbvL6xcBJrqgugItc4EYog8ZLUvZwrmCHx1MX8VQXlLrSv9WldL0Y%2BLQZqjpAI%2B9Qip%2FGrnzcpXkPmH669IAkGaevaX6YtiNJnOSewX2Fup7bqywaOrTy58NBJrKy7YmTqP3sYVFV5T3WEID3PS4FTs%2B1S7nChjNFusoCmn6OuZUXDhxFTK%2BPv7y4xJZpwGWgp%2Fhv6paP9k&X-Amz-Signature=13be9e4736ebe95f1f22b84fb9646891c0c6c72791438a2fb93c7a471e860ce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643IF36CI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKxIxIcq7vY%2BqcpI5kJYH5a%2B%2BzB58xJ2rKyzewQGBukAiEAifvfeE68NVeQrJbF617ekLhoc7jm2fELd%2FBdW36KNfIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA68byhOO8iKWWJsIircA0hoCU3r%2FeIuuJQAydNfovUQTtJ8yBRxEoN87NVMqVr%2BhD1r9mlj0G%2F4nqa3%2F3OW5LldJmK%2BXincQR1DX2bN8XfV3B3VRB2aVj%2F%2BOmQKeDXbuxwMmbT7HgKLyGUaEVIL8DCjgaCPth0oA3vWeEZOKsYO9RZOx%2F1ByDsIDeE7GLK%2FRDhjuhPKNJ4uBBu2%2FES022GaqIi%2BrcSIS9HctpfHJk852fXyOlLWkF%2FZ635zp0Oc%2BYbf4hK4Cqc99eXmJ%2Bi6JQffUamwXzLytK5gFWxRNKtLnZrEX%2F31%2BEbGXwVEXEQneaPo4SurXkTUKlPo4wBXeWo2Ww8UZL2eHSMq7UPeF2pE%2FnJE8XItje7gVeDfDBdgqF4pC61Ah%2Bm1AhlWvU8y6otKFVYlgJ20Kpswhjyo4uJwS75fm42lMNXZtxwld%2FnJMOswfyZS8gmwVcXM1MQMD6P9ND14pTV2A0ylovgewE0ePhvz3oH1SQvlvJAATU30OYgE3vj2lljEpndZ%2BQZsIvNd2%2Fyf6WjjpM7SOx%2BT6R0HUJtAAVZVrWgWG4%2BLEoP4Q%2BdNQdc9IMIg%2BXuN6yQwteDaD6v99vboAiu3kufdcdT9jDo8lQzghC6veCIZ%2B13tXcFV3BSEXImCZMGBMKP90skGOqUBBWUKg5g5nuKlRrAjEdXltVw0zgCn4x%2BursNVUqZrhbemtDD0W8CzVMUNAAv5rBulvsO3UbJlgroXs8stnE9RLOOp%2FJ5v51fOqe%2F4ChOef6stcPDL6RGugAUaSCXTFYbkXHIgg3r4%2BrFh7EvvdgXSRfzyh%2BcY7WhDzF%2B7mMeQezSuJSq6lSHosoCGiNylX2yDXwuKLoNfJEHYkloer6kYOYznp6ZT&X-Amz-Signature=70eff3ed423c5800d3295a43f830434d78792f2818da6450d8bfe35fd02d48ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

