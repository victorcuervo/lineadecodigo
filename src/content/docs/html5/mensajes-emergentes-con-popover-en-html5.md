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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEF427X%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T030452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwv0bidg61D6nSx8Xdhd0J7v47xRSDp5oDJJQsHwXsNAiEApwTMByu%2FYYbj0%2FH7j9OFhURCToJNeDF3UQtPQ9MlzOIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPSFmM2QGtJGH52fCrcAwhFXLTCrN1bO1ytSulfqvQv6gteOWTZKjCmtizxAg6dWpypn6N7MHTjyTvgxwGX%2BkeSTjFCkexhrewVtJ%2F0dNtc%2BqfVUYLzN%2FTH0TcaXrXEiWATqSI4Z7FQjkWmN73%2FopXXjf7Tk%2Bj5hnAHI7SH5bsmVuMkjpTvVbTNcuueD5kqyVpwAjkFpiqqVCxbe%2BTU8aWBrGw7%2Biaw%2FgxKDeuQdRH7od8T1tT9cypNUn3lAaZbvuEZaUURDUNqPoqsIUAnQHAkGN1krliutK12zaFX7%2BodZb14Y9Ef38a%2Bwx9mqban%2BPsFsm1ytQTnleX%2Bzi8VHZUX8ItS%2BmH1Mz6kgcDUAjnFKFRwZZt0k9g%2FZuZ98aOKq4n8xka2E4fYMmX0Tp3f%2FBggMpldpnh6H64rr%2BlQCeZKzCSAN%2FNWl7wUHkdKZx8cYklj1vOYKnF%2F5OPv3gGo2fApWlLH2jDWWOEZ7Irh57Nz0vg7oGFFmfVbxwAQ1KXjFLMJ4sjaSWROCt43orr79zF%2FKxgBsLYZ1v24b72GM%2F1jyA4CL5NEXlkY5zUo6PCtHPs8HLtvt%2BGOEy8FkzaUhO7X8i3Wh%2Frato9fA1xMcVSAxM9og%2F%2FkE%2BE3yu17XZDZ17a3vAuZVwgJV55UMJqP3skGOqUBd99FbzH7ZcGm3OrdG8IigXVJBythhWwmemlLz36UiAL%2FavIJb%2BXoUy0y3NvwSAKmeyUMuMLSyS3RXy3e8aCXWfuBlg2I%2FYYVLXvygurl8hvLbbMhH4EbqHcNBqfUuEAJssexvcX275usrOFZpOpSCzuXQOPyKR%2BUlWaFl64dWNII4%2Bjw4BRMjkAPOrCpUnCbUqIlTr8ix18%2BlIC%2BdVkPxa9tk3r%2F&X-Amz-Signature=3262bdc7e63fe331ef65aa9fd8e558ea53e2ba91508a02357719e23ea80117e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X547TK4O%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T030452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv86oEp6T%2FLJmRSKBnS6UkE%2FP%2BYY3jPBnFpflPMffasgIgAnZ0Ovql7vd%2Bwl1NM9%2F3yrf68UwxS9%2BJSabJcv6TqokqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8Mqso8PvfBED1npyrcAyXQS8TXoxuIKHq0rtavQwiKi5Z1CmO4TLn%2BpopWslYsAbeJvwn%2BI4QQvTSzoY9JjqWOdG1V85%2FiU7o07SnotPj1LXpyOgFUfpInPA27zP8%2F%2FSsPHa%2F8ci8iTyc3sY5fJtdWYf11V%2BfGw5OsofUr%2B9v6YrJFKbwcgwL5kfimYSm%2BaoxY2ggnhT3OHaAhRRF%2F95RXfbPDjbmUZTP3TqYywKU67N%2Bb8ms5bwuClPyCSJkkhVAKAkP8VoXr4zEb8q2tpXwvtyXCF64jpsuVT0lwy%2B1v1y%2BnhRaNaAWDvrAo5NJXbMyTiVuKMD3QUKcs79fjK3Ou21APf6o7uMhfsPdjS5vf9%2B73dOQTxBjtFV%2BP685Rz1tWpQJTr0ZkQtLIM9k%2B0VXdtX%2BkPTVrMNtVbidIFmlCfcKiBpjf3nV7KjfX8FUy7khfjoHKkkRHlyfKXboyIkPD5WdaIkn3F1lRptXcgwS1lL6DNKgNWnrIgkRtkYkthDCf29AW1w3EJl4ulVPctiz2%2B%2BA7qfAemrKmWRSqSLbvujKrrhf8WM5k%2FGRiDnyZkqwnVn3vA%2F2EaRLMRqRVmK%2BN0AvK4bvoZLxaNOzdFGOrcAlab2rm7HRGsDk7dybgzgkwU5ZAVYOumlYLMKiO3skGOqUB4H6xUKyoGt61Yl3gSUR1NTIliZDXFp9H8OrV%2Bm7mdGQG%2FAinYuHqc0ZqxcdVFwvUwRDHD6mi61LxPgXM97ePTto56uaDoPui2JHIqjsa5MQr96kl62rq4SwR%2BXzUxW08g0ksWZwv1E5X1F%2FfNg10flXerm1pcRS0svOJONlD9Oi4hxBcDMDnCXPBBdsOvzavqcx2aY06wJhAphNXFlnfuVImFw64&X-Amz-Signature=9bc69b3177fd46a36cc849a405238668e4912d3dadd8cd59433d4ccc1d799c11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

