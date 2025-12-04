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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB6R4M4Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK2OZ0f2TTV3KB8dp2jsAUvuOf08vUNw%2FvD56EmYbohQIhAPnowFosVtTxPkPtaygyaGPJpoSI0RXDNxfkd38q40OBKv8DCEkQABoMNjM3NDIzMTgzODA1IgwJiMCfcO3JysiNMfIq3ANv%2Bfu514qpcG8HgUQAegSN655qwftGKExj9v629nesYdXi4Iac9Ds4TFM9nRPgkE89%2BWwrT0UmhS%2FIStxv%2F9nu7ic8AiPF8iwPkC8Ky9nV%2F4gjD49UYIIAuQ05Xs8xoLRDy0cRTXgX0dP5BxqmbsRIXhNaLoTt%2FAgQwsJag3%2BnhYvYfHigekMPdTthNmVtL%2BSbqHe6x7jOOFHwNhVjBPnWFsBqqZuOmC6AOWR4XnX0vn13juLmzPYjSysh62wyp%2Fpw0Oj5YCrwiGjH3AA0THrHIYgJb7kUJRt%2BtrB4cfT2IXGppZQGewJDTUc8ZKulgMjOLvwBcb8oyMG9H3a5iF7ACQLEyOJOhD61uLyyH9JEdj7JoTyR%2Bvf2WBraoWKFRE43mvTrhi0ACnvwb01jDOrDPgYbaPDezw1IV%2Fgivh%2BrpdmgZBBqmxj9k%2B0cMq5Uv7xnuWCrkZcI1AcC%2FSCYd4O6qC5YAc7mblRp6wih4feQWQqJIAwl5HspXn9aqGyg1yq0EuAYvaQfvbDOOBw6cEreXi7bmpxTNsMIvzQTlDn1xUTcJgaxRfWoB8MPlZcip33Xt2baEZrv824x6hEnlcCtvfWXonbzRW6Ewyl4Jb1YzkMIQaZN5ZotSdesaTCT3MbJBjqkAajpVKWI1tAA5e2g5djEaXPkZ4SUXT%2Fbce%2FVh2S%2BI9ZiSE3h9vrioWqaWs8Z8bQ36dkGYOrSpBZrBHptYkVFnCohxQVkiGtkKasVvTaYKkcn4D%2Br1G2raCYjwsANRKZWZh6KzC0LQDKD%2FH5zg7mEY%2FiyPdqPqc17iRFdKocBrV2UcA5KN%2BhLMuA50JKS91Wse9T5zqHr8Jp9HfTXg6wYvpMjMcHh&X-Amz-Signature=37176a09f51077434fc3978f1dc35946b43fb3eca01d02e2f7be7f785955fafd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N4YMHL7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbzYWjXHWySlDDm0b3mRMFJoL0ulNuEll3ZhIYoL%2FqyAiEApW8nzwXwwc5gvqqOdfA01C3bUYr4c3117oKgdgS%2BjdEq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDNf%2Fba%2FqmR89ez09LircA2wnvAOzpudflRne7eUvC%2Fu8VdvKpobwZj9HoaK4hMc8QYYi1qiDun90iYerXdSlb2sMbjrTrjifOPuLkbeuMyETmzWYv1aGHpMhDwzPipPcq1xADXsSDBhl9XhJdcpD4lJUhOkSpULnE7Or%2Fj%2BTness8ijXEV3Rg%2Fpg0GDb32fzfYChzrwwKV551gOkzh4B2mYDJWZEUyEo6Jwwfdnue49dQbOgz7TKKSXy5CiBztfcNYpJos4BaS34K9kgUIIVfgwuohc7fBJYRgEbeeTVQ5%2F72T8DR%2B%2B3430Xb7L2bFrCYMAbLekzZ9dx3av1gUKvdPkMDzBSJ1lY%2F3ifPB7yGS3JvMhQTRXSe2xUMUTfGuHz0Mk4wWZC7Al0MUEfmumsIOWT0Zjcdce6%2BDv4oTcVJKhpYSHLD7Jvs24bXFV%2Foc9I2wTPGac8BcGFnldg6M3kf13ixdh6aoEaIdmfmsceE7h%2FrALhpsATPNehKNbAKswav4x0nkHuwQHcmfQxbTCiu2o7u8mbYdpE9Ckvoco%2BRudO5V31itxYJ6%2BDqmLsIO%2Fk%2FYj3J1fuYAjE5aFRbZp7aKahsomvf3EA1LcT1TYXZ2VOwd72cDknKiN7F6Tu4V8kEvowtX2XREnkbio6MMfcxskGOqUBjLwG4aEl8R%2BbBobEHyPprZbo3eqSYfvw2Sq0822KIbj4q9gAosSW10muQddt%2BD9mlUZtCWAEC%2BaO4f%2FXMvOX%2Fjw%2FuPbk0YuEioTnYf%2Bsq9%2BfMmrWDMfea554iZGRpkFuiq5N%2FUXmbRsAYnnnzN%2BUar3pG7vGxbQWLh%2BpifFkZfYxfl%2FVqiljnP1rAfQHiIC6mh3rNMbw2YzYblvRV%2Bn4D93IMey6&X-Amz-Signature=8c45583e83db9f6ed3dd8f79f8abd910d4105460ba7786b3d6b2e49dc1390ff5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

