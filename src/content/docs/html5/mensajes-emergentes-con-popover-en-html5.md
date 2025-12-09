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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D7P5EDR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T051907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpq8%2Fe2LlUUnSr9SkBcYnZ9RiQqLnjxxsMAftcx4YcHgIhALLd0oDvJB94uZvxHtIB%2FzpiV0zaMypiBjTK76q1wbBLKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF33JtJYWL4XPY1Moq3AMlXUIueS%2Bk0GzAfPl0if256Hzis4KEleWY%2BmA%2BrcPTxXeUpRvwXeFprOKdtOOU5zCh9pCfuvs9r1Q8RNCNMl7sl%2ByZ3%2FS1LhvkQ6e2plPLf%2Brz7QMmGJT1ECAxKu6yyvJB2tb6hojI7YMEf%2B3x3fu8lO0rFfBI1ComYDElgHlaiSVTg0Sh7kdOQX9s46nYl6jnF5G7m%2FkSMks7j98hhx7ZF1i%2BcA7LNFkW9U2AZBSuPM2fXW4FqJeTyaiPCYeOD0DC5Rc9mlblGTw1v7xN8b0B1jLMMlpWbmof4fdsD2Ff5tZQAyCvNQ%2FZ8GTWBPSH6CzYZ7gCfATCSLdqtLi2waIQ6KPWZrsuUszt4XYp0m2UJ32l1MxIsFqU5T5WGJiO0G49qzC9%2FYO9TYBVah4DBCg8bC6fmvOfzJkg%2B8iWn5K28OlMAD%2Fo9dF0sOh67sKdfS0pPphfGeoVuJhwWKzSVqMKm3kHUhU86szbVlxN16NbN0vs7V9uacSV7r5V0AhowyY7X5jq4ZfuC6Ceg91HHQE%2FlsRQsFxjnNsC4qv1qAWw9YJl5xSy9%2BzwUAcV%2ByGreIXuG9pLqM20mbwb9GIIE89icgR2wz16p7ye86aqCeu2TjM34Ks2lZayff2lVzD%2Fyd7JBjqkATIxXot%2BcxUF%2FMMXjx%2Bsw%2BMNVcO3kp07cMHjParrgPxzIve6FRBbUwqXyUD58j4LEXUgylrMsj23Co60oIVCj2HHdxI6U57ViJOdSW%2BEkOrE%2BR5wfEZz7xZNXvLn1Pm%2FUFyrPBwP3bTSzgfUEWcMALq5yzINlG2irEDbnbZc9QY46UAL38U2B2XKglPLbQgFp5NkTAPy3PVbUdreksRt13Nl5Y3K&X-Amz-Signature=8cb34a7c5198ed17a3cf8ec767623466f4fbe6237ae9a37962ad5f17d9732d68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPVTJQAB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T051906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF34EEaqvge8FhhuFvkKXSt8jNFNn08PmOxWRuzkgQ8JAiEA4iJv98Dm9mOedSJw7PACjp5yF1QHrEM64y8LbZXy%2FiYqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODTu0W%2BiA8QRZrOSircA3KL7rCu16%2FK%2F%2Bfgitqs%2FJcUhKfZ4ULpEediQAqD3uTPVwGj3oK6T%2FeXn8Pz3dGaYgT%2BdZACb%2BqaUUAFRXgaJK0qpsv6pkk8zNCebIh0%2BWLKaVN3xyG2PZ2OqUJD47iEsM1mbpY1vJnlZyCFha%2F7FsDJjVfPUEsRZ7nlrwX%2FtfKZCmRYtnx4SA5EmbpQAAl3XFqiFt6Ivjr3iELJjEboGwd2iuchLcJW8grvFVFEus4a%2BGIBlu5hFErA%2Fu3fre8yMIcfjZmwnd4l6ixGnUddtoVX0S3MeOaK65ufKCBCgooWTTVvqdGOjuKwKmSQRfrpb4TZ6k9YVga01ww%2Bu2geVa9NUarvro95V0gqxL4OsI6tcKpjfc3gYSYdpGD36Mjgtv7LsCFMO3O2B9oZ10a%2FMZT1fqxO%2BGiNAxM8DsVWkrakwIY0FZu7Kn15ymWX3Pk2cEn9xj%2BDJL7DQNi7MDjURaHiSCPCEhsDfsMXcufWOVTiKyze79xy4W%2B6aFcx%2FR%2FBuNT9CuL0mdnlVVav54UBIp7D2kB4HMjZkr0DKffr6Xtx3ElH7o%2FAjM1VoRaxdV2yzQEYZdBj0QDVHtj8gyPcfpGqjdaAadC%2FivCGeNa8ZQXh3PXW8v6imHpX8kKnMKPK3skGOqUBJEtJPq%2BegNSIThqdMCuorjDcO0Lvl3KgSi6bhjl0VSZmv47UQusmY7L8hqKCkCLYx%2FiLzZsBVMgUxfPGfT0Xa5YKFh5ogtspL0WZmSeQLCnO%2F%2B1vaVTscYvKbKZML%2FDSX8FXaoz7vBwHRGVTbTBE0nA2Q6MDCPze%2FCuyNPC8%2BLkImnLUrrRXPuHFmckltEtSLC9Dl2V%2Bfl27ot2ED93dy07WEM26&X-Amz-Signature=a221caeed1411d6f90a780f50d436fe6e1d30973a72576fad93692e2a18df922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

