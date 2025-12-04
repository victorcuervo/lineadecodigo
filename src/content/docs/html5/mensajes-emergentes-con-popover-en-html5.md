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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CWWVKHU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJFMEMCIBhO%2BrRdtbnzAZsVq6jyt3r75mxptbjHP1IUF4kXjMoRAh9v8ZT9WlOov31gaQSIf%2BTac69pb6bcrpvLxjoqkk%2BDKv8DCD8QABoMNjM3NDIzMTgzODA1IgwqLrqO%2BYfWupvLhywq3AOoD3jRtDSKUudd930ZAs50ugYpm4bUmieUCTa%2FlQTrP4EdUVcmE%2FkMeAwMQ3CCTYqrf2%2FHpOTx8mT1K6UfmXWzEWjs83jZl9BMfmK5UQkFh3hBRWUZkdyMC2Wyz4jM2RyDgYxscb7ij5eSLpGuXlYdNWRV%2BFm5QyNJkqo3gX6vEIrzQd%2Bt9ulLGwKpuQuIk6LWIFfuwj%2FeyBEPSPyLkY8F5O%2F2902KiH1DQEe8SzY18g4EAWizA%2BC%2B2rErUXtVFM7467LxQoe7MOxRt94IN8fCPknRCXrmiPB92tNLgNep70clHRkP%2FJblRgy5H5x0BRRAupPZCa64Uv7Kpe4z91kI8jc1hc%2BYoF%2BnZ52dV0m1EGv4qRb9A%2Ba78cxhxWafPQR%2F7XvIgz5cqJhNA2WMNzp8nWMKfztxaydPZZbbySazb4iLrdzQDsHHSatDG3WR27j9OfYf%2Bw%2F9BGp8jkLiPLKCfH98kUjwEKebmEjLR9PStmEGWH%2FGHSaQ4Ax4ZyYs9UsGHA6dfmsvKRRQqbleN%2F0z1hxiqKNDDLwsUfNaXP8LkMz8HP91IMRr1n0rDbPVdVaw08%2BnHLoPUeZoPYSJIx9eIcMOMc263Qo3QpW0Dn423vOmaXHqjC%2FeI24wDzD3ysTJBjqnAclt1brn4J8Us7a%2FMSzyxvjs4EZuU7VOomud3o%2B3f07Ek6ancsXJx2sGA2wmlU2WxpoS4foq1sapYVH2sXecx%2BmRBAaElMXAvYPKMVkeydiJYW6V42QxgPJkvwG%2B1VfqL%2BfxCyj6sBu4RGHQsvnQsSh6KkBoYx%2BGQQ9mwrbnXa1R5xeDDNkTd6x14SSwcsBZYOIL%2Bdyr2vIGOdVQmdjkbXdDyZeZi9NK&X-Amz-Signature=74e14dcfe0f8fa9436ad4a1024a4ea6357681bb4701e006cfe1e6c8015b2430e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWU73QDW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDFt1UIaE25tDSCyh9aPAljKRSLdAwLixQRWMPIRIP0%2BAiArG%2Be1mws9%2Fnqv8%2BheMtFSCPq7mA0XV0DO6MIh4JijXCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMSNnhX4rRsLap0vzNKtwDLMOA6HN2OV1NO87tDDoLaAULixa0TOv8gDQoRUI4vQwVw6M0qKnjJLQdEzGG75mgfWOcI%2FbwzUMPNrNWz7qWYcQ7jy0E8gzgsRZZS72Bh5QogfGDm3bMg4KTq2vonE0qR6AqDKQ6DgwtHvV7S5HnnGShPHHGaDqAeLToSHlREMmAQd5u%2FPrau8cS4otBgNxlN6xmL6%2BYSW95R%2F2%2B%2F5U3nobXUL70jz%2FQsfPlobCc%2B2uyTR1MGCF%2BX%2FzMM4Je8qJnb5H8CLoqWgMpn2kaKAxc76By%2FdOMc6xLynUrMWtaSZV44He1kIeC2T8WHdkRqDvbrUYa7SGyMxn52sOYwSZEi1Pj8ftE8UmctD%2BGuozM6wmNOXwGJ%2FdRobMb4NJIjdsaTGl%2FTBVz6U2wR%2BUJik5j5nBFIscTi8z%2B3dsZ8xuwNEDtYfD9wPu1r2m8BUuZ9R5kuMfYJv3vA6KUsthRl3W54%2BsuWaE0zQeMst9nFxO31yTx%2FO19goWq2Sl5jgIg1vFs%2F8j6b%2BOl4NS9HI5ZIg904x5ecoVLeeJK3RcX5CK%2B9EBqlNO%2FTDqahxnfqZGHusSvThANon93zz3Cf0en%2FxCRLL5o36m4EOU0gwbXgwQGJNGbHuiiQiWTnh5Y2Icwg8vEyQY6pgEulHyw%2F1DyjOrA65Xz1Nm0J9ii9FA%2Bde0gGzquoq313yLi%2B1h5DCzvTAYbN4Mjm0dWcvv8DN35nuBrt%2BxvzTqcauBCaKGc8B2uxC5HqjiIKu3e2JgMa6sRooWuXHrgF4TnmFIZaSqByPuE6qK%2BaT%2FKw2H%2Fb3jZRsfXX2m1ZKEseOCzy%2Fs4%2FL9Bo4OFfzrJzLJYys%2B%2FxSZjOKHm0xUY2YsKsZD%2Bf4wD&X-Amz-Signature=c4d6e581d7dc402d78a0498b1c7c7891c446d39506423f473644950edcc627d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

