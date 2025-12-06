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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654UABDIJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAFdkW%2BfqHgcCFM%2FLLwfZIKBNk11RZCtWHEMhPcwxQoAIgSalLYZjooZliGitQnRWNDVNU0YN6ZE80jya0myp%2FiNIq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDPOiuPA73O%2FdA0QvjircAxg9pyC5GUcIP%2BhEvUvnyPiJkMqHKyi%2FYUd7F0v6z1cHNmJ8gv0zWB4%2FEcnFiwpJOXnGtBQHhjey5erDg3B%2FXhXz7nHzt7mg1WGsQp9FQx1SOrAUm6nSrSh9xZ%2BjEKdUHAzfLX%2Btx8UAsoubnqi0ZIRyqh%2Fg5F0OuYD36LvhV3A9iu%2ByFVc%2B0XD78z%2BOebTFQKu3aAF%2B8XvAfafgUGTI4bv2HH%2BHhcpry6L1Lxk5KnDlTT6eiSrSXoK0Dc0u3dBw6xY2eCTXJ6o6eQzl8Suudt1RGEkdoea%2F4N0raJUZ2m55jOQlWFRB0F%2BwsqqjV519tb%2F1I8YvMAM%2BeNBPaEg%2F0vUW%2FS%2FQ5jngQmhKwSYEL6jTGNaYVt1G1TBeIXuARU3mdMd%2Ftb7nVfsddTcSH3meCjU161vGQ3ZUpdd8eGuHpngOBDZKrNOe89mGR9fOMn%2BGHQkdlHCF1CYwaXBfU5fGXTtBu7rqyCn68thQD%2F2ctk498ZWI4SiSI5o6tU%2Bg8Nv3yvwJdkZTCqKZ1WsJNAZkWH%2F1lReqgMXYWrJZe2YF9Dl347TC3wL7Wqn%2F2TDeN6Z%2F%2FNppv0JOV3nSY4JGAlvHRSkM7SrYdzUpKZI0cbW369F%2BwF6vsjM25n7oNwHtMLvT0skGOqUB6CJ2rT%2BdYF13E8JddppotLIatp%2Bok9%2FlfPTCkys3vI5fF3cv%2F2wBPRPLJ2p2Z9qHNCcFo8IITPIwGYvcB%2BvhiJo8o%2FnUabD9TDtom42L3ZdgPAwXBmiBQi7tpck2nENGmhMIttFyd33rAkMer0lOYWubAYqrMjJfUhrG%2Fb0wbZUkD9eyhegTCN0Q%2Fv3j6dWXSz%2FFh15cLuLSPjd6bYgT1LJZRH6z&X-Amz-Signature=5d0a18e90cf925b115261e6e2b6eef056ca4fb3c7630b7d488ea009750377c3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F6JMZPJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9W9ifVd4wtc%2BYsrnFqZbY6aJuztjA23xS5j8hAZSm2gIhAKFW%2FumlkKLacWGB91rJLjBhx1QJ9sq%2FGKZew49PU%2BnqKv8DCH8QABoMNjM3NDIzMTgzODA1IgyEcPmoXcDamxXxdeMq3AO3g6bliKuviPRXode34HuBHt32Tm0YXcLxcsrc9X9iSkRWbJK1kb%2BempRDes5pw4vmorvNB92uLCMo1mlzw%2FGYc5UpXbZbfUveijHKQ8r6eXUh0whnH4iYXfIQ%2BfBGooPkwIMcgELMMYbyCKZ6Xl7tZ%2FjpomNO9A%2Byek9X6ctrP4BOSaAXyud0s99VcZhjjiOLUGpCiTIKPwL9RVnzTF%2FZHThaWAIWIfEK%2FtbT6%2BLS72kkcmESnmZqTutvHizFiszgawNKfMOcOf6pXX%2Fs4Veu2BdRwQdQHuKq2UL0gx1czWyxEy7bwKjnf3T5ypW%2FpjNVskKz1XtqOJBYfWA27KYkUv6NE5toNaVuUJ6vVLG1orzqH7j%2Fla3JdHWO8gnkn6D16fcEwzZcV%2BUoeLFi2IaFCvyUuBFvyO9B0xh9SIGwEwOCy4m0TA%2Fo5s5DTy6A6IDwURoWpW3%2FW%2BW%2BTWebG6Zo%2FUpB8VT2fxrDqnq2Wa7pXEBshMfb8cWA2medN4qTtJbasH02AewQkw74RNCtJsi62PS%2B36Bgja%2BK6lES2ta8G74zL1UG%2FnUU%2BQZECIFqm5qHtbxJPWRsiAbF9U%2BDXFahYyvR7q1%2FRcT5f8GYDXOls6RvY5WEtVDFBON5DjCX1NLJBjqkAUuVvKxgG%2FeY7AlQvgp%2FOPPbk8hLfRscE1CYNtj3I1ufnHBx%2BoiLN1eu%2BO2usf9IoDv5wdb7gfKb1dPVXL1AG%2BqT6uE9hyS%2Btt%2FHZSm5QG4leHLgjgjnVBix%2FzCbOJrgZbc5bopNu7nBAN93RSSJx9ri1FIqf%2FYucOXBTcLGAdjNtOS%2BTvdF1sqxdF61LvHA51xn5lKlwl19AxwxEM4WQaIqdYm3&X-Amz-Signature=18485bd594c6c771fc72d9f55d3606855d4c472c8b505bf5a93b9c8a3efd899c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

