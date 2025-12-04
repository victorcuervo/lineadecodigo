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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC7M5Z4S%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIFnpIt2iV9u8QfxnVVW7j9K032Mv1H5HDEjNaB36%2FmJ1AiEA6viE%2Bkrbw9wHxYHuK2De19M%2BllkXaXRr9h91MdR7%2FpQq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJNqMgx7QJgBmQVyNircA1Sm%2FalkEHINt3y1BRKwXhclEFTSnKFY0JbniibuStusp%2F5vyBLdYoeuJKKkLUvI4w%2FwI8SR44oNyE0ffLayjMmSTOTNm%2B0xExTxw4tUF7wR4g%2Bk%2F%2BVNq5cR9KFYZaZQtUozpPMFw0O4PYdEF4qXHy0E91%2BipjPmeuZ1NRyV4IZmrvKcVE1yJ51nMz4pqilZzMh9q1g54gJKYlD%2FlXDOJg0qSTDBsZsLPprpyV6xglXdJ6HTS0iwuTWm64BEtgu7dzH7KbkKrTxYpLATFzCR7uCqm6YmHBrl5hvfv6iSCTNi4synPezG0UcQbdW%2FDoEoW0DkyJqE979RkcSFNa2PyZkLMiIyzWvqA%2BNWfk4QstEvpZOfHhF%2FCSFy5p0jdAa9YMgjCHfyApAVY1bPrvdMcCNUCg%2FHmqEMd%2FfoUAJDtRbMx3A0bRGcmVXh52G9fdBuq9BzbAkMYO8hDjuDKBgejisu29sPjG2t7v0iZ6hDnMFsnoQ62Gr%2F5%2BY74iRI8RHq5I5Yb91%2BINyDPIqM3xyspSEafLj4xwoRtX%2BWNRK844eM2RmWoHRYKH3CEZ2pdeJjrE9S5L5xbwxi%2F1ly9Y9%2Bk6Dqbjbasi%2FhgnkfzhAFnWxdcYQZjVfF9Tzgo7rXMLjKxMkGOqUBy3A2l6CrBgvmTF3j10C1QO1IK16aCPkj%2F1WP8pS8da7DebWwO17MNUfad3N%2BoEOGVJO%2FwrnSsDzZ%2F2ykUPN4IClLiV%2BaCLgVfxO58kzg3RWkr3IBgXklRnR2z5DBXxjurlA8352rFSQ70KezlxVtqOdbYNfwmrLgL68ibsin5UaE57yUiuC3WrgetDjBPy1IMw6oteS7h1zLdNKveU0gRxf5XR3x&X-Amz-Signature=03dc4d0601a5acf4bb6348a20c3e2d64aa5608ab1485a76c1aa4cabb250a096f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KHPSDWF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIHFd5luJIePA7ELtTyqAnYsxs2%2Bn5zg1paRuM0W6G5B2AiAWwSP1qWBT%2B%2Bte4XsxUlcWDSz%2FJtf7d2m7rcrQaR2qcCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMdZKatI%2BK7sqWgnLLKtwDagswEyz8SeKiyVbx6cJJiI5HN5rSywhQdIbB%2BqJmp%2Bhn9LGv81UYDR%2Fg51EaYSWa6PxmYMPAD%2BaqsmmOygmz7j6cnMQQpvGlAdYnG45m0nVl8DO0g19TZTnEmde2yVDuZupwiH2afDs5gQhBdLP%2FuJ5tY7%2F5IHL0n9xga96VKK58YH2LSDIhHH%2B5dgR1SJ2TWAVMQZBZiuhgY%2FKOd2TtKHDraSifqM7LNvhhJP4RwxYBTjwt20dr7iySHLeckZTSBJplt8zQKw4%2F9oyvRq9P8%2FNk7dNxJPpvbdMXGPiotaaLIit9IndxV6Ln6TRUE7lIRTRULLK7EzQOoEjO8IgyScCaxQDtkGdFBB6XlblZ0Qtr4bal6fXLVwXzxSHWqI%2F2QMzEIQ2r%2Bq%2BgqdVDiYovxghw97KYzqwDblnqZI%2FqCXJBgJS2wT40NIUQwG6FLxLQtMeEd31Nz2I4jpJht9SLeCCkKpsNMwp2oKXDgzG3sK8C9bpTkANATPU2KwpvwEQMTv%2BJgacbaptN8kGd4eGCpiXZ5Wjm%2B6hdaoprFDjygxqBzaWuab%2FKEs3gr1ilSt5hPCnro0AyBztUSQwPQH0ekDn1pOD2gA8MxIOpcPyuWPXg7JmHSHQnBlLGPlww3srEyQY6pgHZ3B1IHJbfZRUvfBodTCxKTTlyPe6WKMHy4AMyFRJBP1IqflVnTUcfVDMB0QqC2aRMWi3UZeh3FxWdYFdk1R2mioN96gJR963UZSpJWVadwOeD2XI1m6dqYKus1pkE07CWtjhYbofDOkmasOWQKNh%2FhLOCDkGGtfwK%2FIqPsFFV%2BPTeNx5ANsaxS9vISUr547QSLH5fjXf1CMhXgqhrFMNllnSPNNTA&X-Amz-Signature=b913f24dc31e2a30ec8348422f16427f6ea1326965d0f672bf790a5ab4d7c7cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

