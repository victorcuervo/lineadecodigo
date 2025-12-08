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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXQARY4W%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T092839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHD2ovbO9j6mSB5IxYYyd1aGK0IoKoTPRYSQe81kYlx%2BAiEAspR6bD%2FMhw26a0jqB7r7ytGRTqrbQqDA8Sr9NGSO8BcqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCV8g6VJOH%2BAlgYraircA0Az152IQuafGiACND94CUVOZykP5%2FWlwXBc30vxYzOUnxHgG4E6PkvsybOI9y6ONol8Ecdpw7Cmmw8r%2FCHNupR7kaRvc48%2BCOToAKf%2B1AwXoRqvbgb1NNRh%2B59bdvpwX0xv0u%2Fe3A6IifJkOD1kXaClY3aQyuvExvRrn3BCuI5BqilpFxWcelMlSPX3JjunPtmXyUoORg%2FElusD29550IUFm5RlnlgsxUqWcPc%2FYz7wsCaTxEf8KLrDbxKuomT%2FbEiRHZWr5Tla7qA4s2qfErL6oTk7zVSqXDP4oMTskhUwbFMASNj2Byn27yHo6E6oJrIJ4Kn%2BQVXroQCK3aRgIac%2FDa2uPd0%2Fg1R%2BAMAkGp%2FT1Ty9F8zdWQqN4rugK9qQ93xZz%2FMeSD6BtGDvXsKHVZiRBYtzmzBhHgxpwSZIR8coZnLkIBGOKYAY%2F%2BA6eB9Xk4xHPXI5ufd2OZ6WUxZ6SFl1cPYueqiqHv%2BN3oQpYXd%2FjOj0CWLvmH9SaGmk4LO6rPEgGKGeQjQayYBl7Q0KDLB8qjScPMsQFUAhPim8ZkD985Q3v5bjim6b0xUKXuv3rhdAs2mfgUe9woqeSkrt3kcGKrV9Pe3od%2Frve6vKv9aLIPMnMBC7TKbU06eoMOTt2ckGOqUBQEgyAF9Tg8kFq%2FC62quhPeZGPZ0s9kiJMc5vVqoHa3kjn08gtK%2F7cejrs0sdSskKyVBtNHLcdWsjecdHtIj40HINqMCy2vctw0q5Ja8ztcZlrCHFWnAo%2Fb5e%2Bw8gglV5lNxrMCX2eyGinsZqSDWRu%2B0qKU76t%2BtwqzO3Yd%2FXxIWJRa4g8Qf%2BlHjUC4kbW2FfcYZzfbuCtsx71%2BQeMD2CEf6ssEXH&X-Amz-Signature=468ad572bf104fa2254741a16bb013d158d9ae7d85312b025576bfd7e6ff7c68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FJ7TLP6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T092838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtZEw%2BaghTt7o11dgBGAAKN6VZx2Qyo6rbsbq6j0HYZAiEAkEPBuGJlGHXrIzfad9xu2fdOLoEfiMatPcgPnzuBCmgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL26e4BgfDdkTXX%2FfircAxOTfpHVAcG8FWejbSn5NjXGRryK20woYa62VbJ40Z%2BLSbXPcZ8NYuODQXKT7G88bw3Muq95iQmOhXM66Z4rc0q2SASH%2FoePMLTfYgwm%2B6IgsJNPRbUB2Sd%2Bk%2FR04MzGw8ta9BBg%2BO6QBBnqMjg2UnfV10JpHXCVSRmdbozhIAMRe6sO7%2FuWyEsaayUJS%2B1xXF8M0x1uR5AWxT8EdgAIst%2Fm91LdMN%2FjBA0X3QXXTvpqDy1F6yHN6Vizqb4VxWNigT46GUq13yqAIIcDwR5ct6WuIwxizyRRZ6LRJl%2F4rOSBXlJE8SB%2BLyA2hzAGe%2Fe22Ozfm4l2iNrl1%2FBImA2fgyOXxPJu8oIwusCDkczXaF%2F29LQzEYY6wZf%2BsPryQLVcp9na2gl3PQWIlga2Ux8G%2Fz%2FvVDwXiAGZp7vAaneO2T%2FWZEqwZRIxVqBcIiHadJuUrlpO5fG%2FynMEm8TV8kPelxgE5ot2S0y4Hl8r0aLMTwcovhoNp%2FA6WawfzIs5%2FjohHh%2Fewt3ajCLzod1ZMvi2Csj%2BeTnYX%2BMNppSmB%2FG0XyulEmjuq8Xx%2F03QcQpQDoTTq8kJ3Ih%2F4LyLQgJfdZwQnjzliMD%2FW1pWyeWi6O3XPWJKcIc5Db3VqV9hAV2BMP7t2ckGOqUBFOcGs2QELCEz5fIJVQwwhz5oTuXIYUWix5pZ9Miyg6mxHtUw4Axivg4cePtz5xO702gWxEN6NWfacP6Sb9CfTzhdUUXLJrW36iuP7GQsgIFA5p%2B741%2BH%2BXaSeGydFRPGLo7q98NUzBX9hjqdIFyFaYOf3I3WIjob4a2njwwRdzD%2FjXmGUaoaZysIYziip9IvnbDXfaGJTfrnJdVTAbGCHUW3PJHk&X-Amz-Signature=5f0271cb24c1918cf02f919a947612133bda549ee82f631ba69b9a1fce588331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

