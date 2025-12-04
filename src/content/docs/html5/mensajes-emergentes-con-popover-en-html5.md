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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YPRBWAW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIFl1CBU67Mwy%2FMDYnYt8BHluytSzzmTq5fmObdVSQ5DNAiEA9zfraUgW3YMDrWUZHB0fpZ0WF7%2BP3cj7GolQnCiPhGcq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDI49x9dskDU61oeGrircAwzG86d4xbAcCqgu8jMG0Wx4CieMAon8r%2BSMwfSsTOK%2FKxosSB1H5nvF7MTTmq4tMAtpjax4apoW3bKothFuzA6m%2B7QrjBtVezzkAEr%2FSt6eyREiIiuYdNHXOCqrkTck%2BaotI7cjB9dri6yPPsFNItRRkrNDrtMdj8%2BnuCmgpMXFsI5wKcCbeq2SavEQXb5t0u3fTrWsvYnXPNK%2BdYOVghC%2Bs93%2Bl%2FzaV0SzknzSPP3Q2GklgA05zLfrnh3arlscSeXjTB%2FO%2BB2f6%2FRKdLQfcAbQaqp4mBaDN%2BZpGTgJ14xb33q5yFcvdndzzasIEkEec2Dh3tI3Q16g7ANvmNAMh7xD6HzJmz26wXYfxDwZGmxrHcTO%2FsgcBKgVSrmWtSlXlEucQp7zvdINO2aGvMuqg3ml0Lz%2BUfZqrLeG7JTPVdm7PzOa0xFwzHIUYVMyCa4Ow%2FFwtblfQkrEI%2BaoQkqHyP8Wm1d6R9QTmdOXiPJrKYDoRzsIBHR%2Bx02E4JB1M%2Be%2BYrbRZqHaF0%2BjoYmiU3hsWeuJUieK5Ao4A9kxOd4L0AZVWe9376NxPhOEz80X5OL5GtogWslg4e1%2BstJMwREkYjq6zL%2B%2B2pfivrg56fMN69qYf6WueWJspxH8JPnYMI%2FLxMkGOqUBA8VwNjePnT%2FGT8G6PWN6x6ngQ0yuNP092M13RR0%2BDhyvzDAGVYBJ6DOZ9u55tkXcnrsZha2kXGwhi%2BBpi7J%2FAbE%2B1Re374DESelFHphBiHGJWQw4qLMvjvwl1KmNOcmsyFVhJ2tBcpPDpEykfuq55Z4zEK0PwEavyHXOUdLMwL2LdlHV9sRSd9hdg3tYvGOGNyi2zDZe5FcN7KQPnpkcba0oeqMb&X-Amz-Signature=e06d22996e52027fa52539fb7cd4f29ded0816269905806c10ad1b3b36edd7eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HA4EXNY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFRJ6ooHeRTqSgV1kmEekdbWHLo4sG2BaSJvFo%2By%2Byn9AiEAnx2ZvtERL15EseZ3uMpwuF0mmy%2Ff%2FuGxboor0WSCnyYq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDN4NwXRBDHiUMYSJtyrcAxDOWTiAv52W3nCuv81xvtQkNl86eYtcF6GRX2aeVFjqa1hT5SylpDKx1pnnVbGh3W%2B2TaaFB2zez%2F65XoFZOyrS2TGTVmZKhaRh%2Fh7rutob%2BJVHYKLaRqlzCNhI7hqjf6aLvIYtp2z4Q9U%2FaJuJIfreFKFuT0a9ImPC%2FOZqIl0h3xwqQs4XFKJM%2BCnVsv1C8HXJcWh%2F1mBJJ9yByGycMxR6qqSTh5XPIGbRmYHOJh%2BcpWBWhCIg06t8nC186FMpmiWM%2F6DNDAPOUrUgFo0thRdkwuwTPjze92QhELoID5O3HGd0dtqQMy6XU8PkyCW98eeR4R2%2FdWGEW5EAiNUqIp6VG7Udux08SRIPjlHv1nJ%2BP3w8N%2FN2feiQjSUEYVJUwGh2TWz6qrxIFEi6nfEvckQLg173ueIpN69bjk3JaS%2BQ7ee1JLfvhlwMtFTsdsyQZ2hu7tGHn%2FJbkhpFPgi9OSkFgbq4RWEgG2%2BTJz7U6T5Dh7AldO4Hmq4Hq68%2BrGPxyw%2F%2FYXtyyh%2FeD1IaqvakrNkABj0U%2FtHbQc1YMCWV%2FatG%2FeHqRX6Q7H8uNqMdXpV0zFWFHFVPKhlLDZ5vVzQ1EQXMbjWNDtdsIrHd8kf2fyRR9t9%2FxMNgDbWjQ3m4MMfnxMkGOqUBbZ%2BpQt%2Blwch0fPjrBsTpDwjirPyLkpFtdBDaiwUKxrBSZTIltowOY0kZzKwrvJvgZRGMlvkENt%2F%2FL9DI%2FKT73T%2Fgn3dDr5qtnxL%2F4qf6Vk%2FTStfwQhAb8X1CdPlMSkN3qggBNv6fkAQlOSRgD1N%2FCD3B%2BNhrL5LzzsqQiTUZiKR2pzcqcUwnltd36ZT2PBHNvfbzxLCMHPZLH7HJXq5Q9sHHsPsz&X-Amz-Signature=35dbc62b6ef290b499f1c740d7fa5ebd8653efb4b207ea78cb8791f75a496404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

