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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI5RVUOX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBxCKcles5qZaAReS3F82Q0a1EDvbj7oPUgiNXqzlx1KAiEA5%2FAZMRh7y%2Bmi1vVH7ufp8f%2BUYlZWq2plGrorBWCGjzMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDMBhv3XjAIHA7ZRQIyrcAzT3ojPPE2JewsgEr%2BPcyk4HQtxZVyfm0Rbyj75U0hdU1AvzU%2FWoCWdB%2FPbOzIbIu4%2Bcg2K6eNgIteS4X03uyeKkSwHhElJ9i%2BtB5uWINiARSAWeOqcXuN9fmJK29A6A23Gpwi6Yg1Yi3s3xwNXNZOL0WbEAVsDmMq6vWTvH6enM%2B6D2L3tUONtuDfg9mljWdavZzUGmWTAqkdv4CrPDhf4bWW8cM6fMYtIpIGXYjH%2BGcv3WpSW%2B9K%2FMYOj85rPmo5wCnoYfdsxF7Np6DYXTRZRTJyHV%2FISaLbteprDlJUwIJwzrQEKLIbA7fnU9RdjolhUlur%2FVo%2BMJlrHCMsfWM8Ph%2Bnkt8GlHfFKciq9uxCeJ0YaDJa9OG42qsy7t02gRsVF5PhrTBHdY8aK69V9%2FVZtix8IvknXVGDSVQ0O0gydBoCS7gE5t4Ow0QC1jdNDczsvPYw7eiMAMRriTguISrt6n95Ut%2BXg4ELsS52xDOB5H8dDD4A3CPEtCuV1N0znZeTgr0Vs2T7lkS3C%2Fjff8zDTwSe5pfygP4LjcusptZAElb4%2BMsFXA33OqmhRLQhZI%2FtTXcJpztxK21y5jLXatH4GDbW5AfI%2BpbwkNSRw%2FUpDuP3JoVBulwmK8FkAnMIGVw8kGOqUBpD5Jtlku81ztdZ%2BXmNazUxvL0Lseyo3fDgqzsDFsGziyOwcxb40T5PXxC53idllpQJ%2FcgMYHZbU%2FSzNCmNDWyS1hqzu%2ByaLOiKae9YQDtleCG3%2Fh7tZcD2x3u9ocRa8IMwe4nQr5COrwh%2F3GCHqpPuLKSYL9zmLXDDSKJSLoCcszZbaVYg7YPget%2F2UV2Y%2F9AtjA6AybXmuZpHgd%2BkRGwZ2yNhaW&X-Amz-Signature=3a6637cfcfc66d78112e6f25f296287072e48f1ab58a6437492944268409b390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZBHPZFX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCdkbi9TLGBWnvQF8sOmqaG9yCrVTXWkRFY%2Bn6ebwzSnwIgfuSxM2ETtjYeJg1Mw96r67u0MHzwmNXaDBFhoBGSQwgq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDBiknaHw1kF9H%2BheqCrcA3LTaLaX8hPvfOYs7fPOavpV2l07V%2Fl9KDGtXhSuY7YEBW1eeldXGLvVRA39qQgDIwVwBni3IGbuIuoUWjJJZUAeTM5miwUvGE89krNDBlOpfJGIv8fKf9me2mQdXnPH8%2BQM1R7xAOs3voTAoB1eLZBtDIXtliylhT8dBUdispCCovnCc%2Bb3bJm2naM70%2B4k2upM5ANFMgJ2q5SPBFuM5agl9gQS4NGFUtND7OX6jKwVxQylLW0scCTh3MYqDHc%2F7pN9kyKPpv%2F8VSdodhgmdo0uuVzJiKA0JgT%2FSOdFe0EVJiUg%2FFuNmeChanpEpZNWNcdX4JMBwttnHRG%2FBW850c81cjeMZnGi4tVm58E%2BXWpJ6TsQLVdE3pWMwMXM2lLJnf%2F5FmBUXqacQ3%2FXx9ZTOvoU0klYR2j1fx9XTxeHJiDEANOs70DuXvjKL0YKCo99CVYf8jSgUSuzA7pftz8FVKhndyUTzzbBCRTudUj3WyikkV4VQqRALbmGehPAqA%2BTaIc233MX9BmctU7YNHRwc0OoDo9FDpS9Lvw4pMOgzkzxCP9XiHKmZR8e2Zl37JxZI24W8lkxP4r9wvrgwD5zkGOEQTqIFMx7LcTzISB0s9DDmL7K2kHRzsuPBneqMM%2BVw8kGOqUBErS%2BLG%2B65R4szQ5NgJrvdPoibawpDsO1v1X7IbJP8d4SeH1z7z51xlBJcpYNlapS9siooKYkXdySIe7H5tvmESbvO7RqWEYW6Y2RfzUGEQcC0GxhpyJVVaDQb6ND%2Bj78hCGYjMtVYYF1i7XLiOEVzTGMd50KfEYnKEYVId5i4N5I%2F1dCdvb8EBr38J1AFlJpLLH%2FIZuDHkr6gsm4OHRya4X85%2F%2Bk&X-Amz-Signature=698d86451230aa141a630b957a7ef4a8257c85c849edb82e0baacbb214a393ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

