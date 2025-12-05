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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AD562H5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T230548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIoynDSwAQAvSwBuuAzjAgSjnqaruREEpYZtK8nl%2BKvAIgEPcD5gStsEHn%2FaPQYcMDaE93O6IZP4pK%2FBaGD%2Ba3zA8q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCGbK0ShfuIl4PYQCyrcA%2FRxEgHUb8exrUixWgVgIbMuJTUkrkk4UogkHy012STErv9okEfqBzQb%2FJ59Y5yc0xTY1jdPVZfE8nB%2BuR7PlSYWzd7oh93RVcnFRaLdbyIumPa2kwt%2B04%2BrZcw0HVZ2cXHU0K4UPbGytJowaGcTfPZCsGmmqKDtYLaPJ9YypNjXG7uriZpzup8feUInoBAmqjXn9fxTEo%2FS3zOFHODR46JHTdMzsI797shKS1fCFh0xdPvQWHTHg0hoEGoV9wIoDmTedDiVwcUJMIU0UpU48v10wiO94ZpB6wu%2BbT8AJ7MxTUg3Pb8J%2FTeXOA6vXFSo5nq5T1eAz%2B9P1tD8BeOMpH8CcUtBKZY1rNRFbWwZG%2Bz6smN8LXMsRkV5joqM0%2FQ%2Fp5PUNf%2B8MlGeSkWIhLosxoTSz9xB2Wpc3SNYbdyIYnJGt426JUmLiG6RwmWsRg00bUPJoBx3WkXFuynZqoFnKn59UOVVu0GQSyDnoVrm3L9VOrvRkeDfqji8NkcgHN%2F4BNvH9lHNsjh%2BkTgpDx8rgWhMxwsPdzVUQ7NqlNWZnn8w0FKbKR6elIM1Joulv%2FJVfY7UkebaGhskJZTzHSNOfskjZDiIpZXblUusOWO2jwDEO9zEequ0aXpxu5fZMMjGzckGOqUBaxj6y5g5RqfviBh%2BQlGbfV29w6%2BqhNa6Isx8dcctndA8s%2FuLlyW7tu7wiNmrL9h0OV9loHDqdEpfOPcTM40G37IXpLCvGhaa1ZxXyQdzfj2053hAEQgfFIlgPEXpRk7l8%2Fajh%2F2YM%2FD3mNAB4gCFrwjGw4VO5aouH1ggsSaN1woEn%2B0KdM3KxHdB%2BHsWSb6uIpvzAiaCsXE6ZbFeoeyjW%2BNlApO6&X-Amz-Signature=830e8deac7226814302e97020444ce4d86116090d899d8b12ea147f4c22b92a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656C3JPHJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T230548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC61w5J6yQ5M%2FflkWNnxrYlQFiWDCqDGzb7UkjtF0iU%2FAiEAorOvoNBTmD3mDgM3%2FbmUwTDKuZhki3o9jaKWpq4BMdgq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDMnk3zpjWsA%2BhJmaESrcA%2BQ0u99i0HygWwEeeZEFrKP2EmGLopIdq2qxqrR%2FVMQrEbpJaa9CxNtXfqCR8MX%2BBRydgqNaVtyHPZFGfUWHTlDmEBE75RvkiSXk7ktTaXEyuEbXi8hqBXaGozWzWYEHVC5TSsv2kUOKa8Br8o8IKYzZe4coWMob6aUHrxyhVowfgvixwbEcbSXweyoSy%2BtG3McAGbEeP4%2B8bEGFeFodVyr9BB8ZJNbb9Vkhf2yZd1ESRmufRz6HoCcf2oa%2BmnjgHk2msKIi9GRix%2FsQgSh%2BjLVxlzTf7Q1gsJ6GT7U2l2Cv5sSLuppe9cNRFX9d%2Ft14eJ%2B41Xc8GlhkopRzcxxQhYnFQGb6jEyp%2B7IeNFT8Hdpn2eEr6GQP2XsjwiNS8IRFLb8uGz88%2BVQyuUN7QHWWnzITCvhOLYJYLqHFEzWXXV4PoNX3wReDBle2NyYZhtQi9DAARXtvJmwgLGkJZbdeTM4tCZ0olQZqQqiMUMRqsBEO%2BbHSylwobtpcdk30fYOPrIpnP9N8b%2F%2FXHmTPaixA7diQOrQXq9dUCOk7N7iej7z%2BwdPteeF2YkskCFwG%2Fy%2FKJCDNev9sa3%2BguJ7rPKR1mo7zM6z2HCu%2BWk0sF4ePCGRNRv%2BpPv2sT8ZrK5JFMJrGzckGOqUBbkcwtGWao9K7x2SvPkcZ3CuGDLmvAQS806zmmLGKQ4kAGeJiSLlA6P%2BkMHvy5WHZqwygdV2a4rXCguC0A8VbLOp%2F6PmT1iObhvPl0lawW8HLQy52EqxgsZf%2FINiyVGBZLMNQvQ2A5CtyQ8V9P73MqHCdreZC%2Be5ki4bqYlYq2co3ZHkkUhiFUtawrJtV417OP26XEUFRz0SP%2FRuH7za2RRkP4F%2B2&X-Amz-Signature=7b89edb41cccac26294c3650caa74daf35f63fb3ef395bb50d8ee82cced9fd96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

