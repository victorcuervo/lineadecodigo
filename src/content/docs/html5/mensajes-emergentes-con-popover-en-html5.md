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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMQYYEAO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T064156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9QbE1TNCgMYQyA7fX%2B6bXci%2BpJytgW8Q3iBVDGTcfuwIgMfaeK0be%2BYetrj%2Ffc0c53lT8XIX75LaiMY8NUuoImNcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEItPHpOP1oLTeIEsCrcAzCcbkYLKotKiVmz7Y%2BENtZDOykDRc%2BvPLvI7EcoRzeIe020SqHYQNSFxYNzDWvXvQwVoaGnZigAxVZ8hCgsOzb7nvDBggVxg9c3AY7wjASvvy9E%2F3jcaoWHHZymvH%2FDoKd%2B%2FBkbC4MURNBolIV7ixubFzsAnubBAJYXboj0Y4V%2FqQp7CTY9EcwVLWPArergRuJHrjcVkUUwANf4Oje6yCkOm5YvUjG1wSJE9R7pakX9RxyT9%2FjTxzAY%2BQb7ulHra8htMYsklZaumcJMNE3pTfqyLnhiOqI7K5IBOJ8LuJTnyR1pss81kQTGemqpjAIFIwa3ztIM5vNiEpTDcpfEH3FPwctHJFAe2UAnfuL2NJdiy%2FTnAoIiTa7VPFmi790AQ2v1YXra7Ckd5hAytA%2FbWrSrMiNor5VzCTImh0slCntzXyPMkvLQKjNOTGpejWoTAC0EkLLJS930PYEkPHChy1ZY3Y5vcuv%2BDt%2F47j%2Fl9owNd5qR%2BclGjgAdVBybeNogtHtIyUtbA1aR3e4VnerOgIJE5gE1vh1Orti%2FnKC9criY2b1Wcd6KpYq5uRy4%2Brc00gv4UJ9AH07X2%2BO8PsgmeNaHnZJ10c83Z9FYi1pcSQyvlnyzeNU71Un4DBqEMJGd1MkGOqUB8i6FzXY2%2Bq8DWoUf4t5bXVsm%2F0ZtsUnU%2B02psL71G1pu3XA3dOKE5roCdtYsGFxgLL%2BuA1CWf5iTdSrV2rGOPUI1%2F8S4DnGqozpRiJTBixiNkKw6SDKjPvpqynJ%2F%2FSmf7jVDLDSumaUXGplZUL%2F0ykaZ3mi8biUkgGdVs6aeww6WQIEcrBbm%2B4zdxlfWJWjNvST9Bq0KuvxrbiYdTqSpR%2BLWTGEU&X-Amz-Signature=9122226d473732b60778aaaa64ef6acf4ed806ad59d586676ade0e0c5800163a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFPHCB2P%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T064156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvZ4aqrZ%2BMht%2BvkoiMTm%2F32pm1l67X7DUOvltcw7yNpAiARorHipdYdUigtT13qS1d9iyQqu27rlqE5NyX0sR%2FY9yqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNwemharSR6HeFiXfKtwDLaoUJVYWlCpQKhEWsHBTJv6GW0W6K6gPCHvxgDT4fYPb8NyEDzuvVuWbm0ZpJYKyTC0K%2FGdO%2F7DfH0zVFnjFEOmWLurAXBdPWpXWbSxqo1p8Ypn%2F0FsjKO72EqpzlNSCOSNNDW%2FYAwHJ6HUeoZno5yLX%2FvzUrKf5VtM9zoL7NOTdNt37RXoScfodiXY%2BjGoYJxzbRKLOkzGHk0TNDAJbq%2FTxllskekFGsKul2aZ3ZQMjulT9if1fc8%2BKIPna%2FPQPdWHOq%2F%2Fu6%2BpzLt%2FxkWZPUM4VGH6pUEYvt8507T%2BR5YoW%2BV40XkAYbeAMHh3lq%2FEztI5gN6Jmxgvx4%2FbYZ9Rzw4LtkziV%2FrYx1TIq2H6QZcmURcumOegU4H2D81CeyNL%2FDGOUGM8uyj0JCSYa2b7BgD09%2FUOdLdz1yOV5iIwbgArduochNg2qU98CLnRcUAAlLWdeOPh6rR7%2F4AvJ3fZ5LZ0ycuOjScr1%2FGvmLZa%2FCD8Ph9uneEGRYUEFS3jcFkOELP7dX%2Bpfj%2BOZ551Op%2FGiwDvRshnn7yAV4oukrrJ%2BCg5wb7cCmgB5T0gvOY%2BL5234N4Ip4iGL5jd%2F9eYjwXe60rkIK5QdLAGKZV2KjiamUL8CvNZgZZuELY%2FXnCEwpZnUyQY6pgFHiqbJkh2P4OlLmhAIZHrfj552UdtsV3MUPk0phAM7yoyde2uR5ygFPuZ%2FJlU%2Fojw4TwEBa8ZH9HntsiIFn0IX4DBaFpibsTO49pPUh%2BSb8ZKJOFxDh5O%2BXDKOZhk%2FSZAg27a2NI0Yed3ltozg%2BSViIXv8W70SdXZhBbzE%2FuhsWNkfYXvgLTed1J72L0BDKHNZdCau6357%2FOcqi4xSFaTeqkSeCT7Q&X-Amz-Signature=a7b8ad8a4337e4479d793f118dce696e54b5c520b4512b6274ca82a72b28ff3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

