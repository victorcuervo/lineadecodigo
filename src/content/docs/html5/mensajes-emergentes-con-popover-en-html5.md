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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WF7WZ3U%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7xJNLgSrZhh2EHQ3ulJ0IOIZjzKmDjqnmnrY5aYL%2BrAiAHAx4fb7YvrldpuWrKMt3%2FiiI2rg4hYjL14Y0YzUMHCSr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMO0I9eZ%2BLBe1col0kKtwDD%2BSkMii2hJDopxnsmsQVH9ZAtYIznHB12QTYQxEvWb%2B0xwJEC8C0eBwwGRfqQhqtd7rHo4oI3AMPSeFtUSkPCWtQ39ycRY3suT7IAADb0sO3ujbAZl61bnvh3UcpLKkskK%2FeY2tVzgZSuTAalavBi%2Bfl7qH0gWsuU36WwBwbUYEOvnOGLBBGXcHx02CkrGAE02jY3%2FRHFyywSSWTOlGSHFJt6uiU04V1ykFFfP8WxO6JqYjdtHCxmEx9FN6sOT7MUoKgjPvvbZy2AftWZMT%2BZKtG%2FY17kkJlAStQpu1GFtviIYOzew2t0XzsUPhDikshAHfuvg5TW7gYUz9oKq0FNlWKSWSGzNZNca3c%2FUAIaYcIvDNAfeZ2XS3znamY4f9XwLWBp2OQ6ivz7kOfreAySM%2FzNr4ToJowa1dzsVuLytlAYmNPiVLoOm3Q1kriNCM8jLfy9Tjyrex8jry1hqZbwZDj9t8PZhwZI9shtXbbGrlk6tfCR8GgMzYuwqbt8DBo7o5UW%2FTzloyV4YuZsthTQvat7fhlj0ajPcuRTuWihKCR9lGNDjiE67Qv8mJDFxa56GIn8bBlxD%2BuTeEEF7PrF333mlgShjcOEUdCizUmd1145D3bb6DPI1ss0BMw89vGyQY6pgEuIsYKBlcyth11nbmpk0R5SxrY2JP0IozVGtuDc5UCVtsZYSEB%2BNC0G341E0r8wziR9OroY%2Fo6GqH%2FO5gfEEJc1YMmgGvT8ZubFM87mV9q67ZLhm5T%2Bvi3EQOB0NJjqfxc9pOCyQBAr5DE3hC3%2FwZTTfzXBuZR9Z2CtbrBh2uEIoWE7dAcUvfYpZYQmuXCqNMMBbsclRSQQpypFJydMfWUdLoXGoUq&X-Amz-Signature=b7deae179df595fd42585e792c8538f4acfb665c0e8c2c3593899ce8bfd09eff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676T76NSK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoAer5tRlpGQiB9rSVpETJO2BDSO5s1e1A5YjiyaP%2F2gIhAPVsiOoh5U73Elsk7YoV8A0ymrnRtuW6j%2FbaxXsSM%2FG7Kv8DCEkQABoMNjM3NDIzMTgzODA1Igy%2F4F7IBnEAMagDRD8q3ANG4224edfCjDOhWkq%2FONvcPxAD3945j0gzt3UoeGZcaI7EG9G17a%2BWVHB0vGoYwIVN3oHf%2FQg3XUawheULpQw5Fb5Bgd83ZkxGqLUUhVJ7GL65RdshDMAO5RuOhPAKfoxKKZeLAXiMt6J2f6KT94ob25SMH3dtHsTKCo%2FEy1yIt1N%2BlMEjHeffy14bKoKPdqnNMjlU0Vym8924WXG4x1KO9XYTDMWr3Hsk3cqoH%2BAljdqP6rJ13XCMfUrrPQ2bSiIxfnZ97Vm6rZ%2FCMVpUwqgJG0iSh%2F0XVn%2Fyad2JVDmbH%2FkNHdcriwMxFgTg4RLvCcBY9bXOwbLh24sAavhATezn%2B73LZZmboyQ6jH2B9MlIogde1ToohrFVbs78fxNsjkoeEMqtmv31nTO7qtIZDom53CRhbG6HOd%2Fo30Cm9GbZ8IGUgTXJgM8AijXcqN1CI4fGLrIG5mbf6PeBJgwV%2FqgXN39eFXbJntNC7VuKQNH3eXZxbf8A2oEWNQp9q40l4p2t0gtpLBm7b2dYos31oA%2BEF0PaESEWYBKQf%2BNbGIgm8eENMIKdVisyz%2BBRAhxYmvoXf3tndfBU1ind%2FqhbPROR%2B%2Brbu3VFR8K1MABj8A5QTvI9U8j5X%2Fe7Kjku3DDH3MbJBjqkASkDnyiMP76fgmAoeCemCJS4ZHQrP%2Fai%2FOvV89JAGm999gurCD%2FFNznqi8R8ZH6J%2FopM8kbLglC5bB5QSWWYtGJo0zWkccF2QFF9%2F%2BTOoTVzjvMKc4gxaCshbNsRLdumjqkr7ypRiVvfUSobMmmbwaSz9sEU4%2FujfamIZBDSeaS4wFOuMfiQmqStDK3Q1J%2F5lqybiMQ%2FH2e%2BOQr2GEZ6fEMHBbFf&X-Amz-Signature=6376e72d0456d001cd59925134dd61c541d8ec625a7db55986413c19a420d5c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

