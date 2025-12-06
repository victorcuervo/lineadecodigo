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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2LE5SEM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T185933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgiCRx8NLNgNG6zdgc%2FmhKqzwtYWztzj6E7SDDmYHwIAIgW0Qb4SK8BIDGl9xeXaAa46KiMD3sKxAdCWDXnpKSjtQq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDEm5fHS0QVHWowIlTircA9UzMsh8jx2hY1P%2BRgCI4xfVS6D7HTW6ghPyUdXrpGuSyCjnHqttPWxovySb4AN2vD7C8zfFniD%2Boa4Bw47vdnLfZOWuRR5Q1z54ceYu3d5BH%2BsdZnNMoScD6n8nOs3D3QRP8bCO5ZN40JMSQmedYwRGDZ3vigaJ2Pb3ThdaEMwMn7e4ghLkmAc%2BRAnkNrgv5F25F1fgebeb0t9BB5joJ%2Ffw9q6iAs6cmEo1bL8XF9jbEnDDZaG8wjjW2xCXPaoCMcyML9M8RW8HyqTtnN5h70rttGRAlsHhvLy28cTo3hp6gopdJ2CYJJvLmPPKpnHksqorW0I1Emm5xBaeh0vnBFLQuS8eYGlyfe7MsGnKRjTBhGuxPsBNaWA9FTkcSjtiEXxVyZwybxJzXFerJVnjZ7LOgSXj5LyoawtDvXsHhSvtvVpK59mfmJH5nKcMBdxwKv8iA4pd%2FJTWBiuZM%2BwxOh3K2CDMweziRoyPx6khL4XplWCV%2FPX7ntGAqTqwMiesWnS9PNqUXTqY7ICDOgf4zKf4162pFzBLcsqJRGH5Oz000F0sWuwiXhNKZjWM1aD4WAIgckjNw1lumX4JhAzrK7b7Qy5TMtLDO6A7o%2F2e8X1vFl4mXZ21hSe1xAY7MLfN0ckGOqUBCgJRPJbTYM7NJnl91u0aDkkxpcIsd03yMPPhigxQ3xXLCD5CSdrqYRcATQ%2Fu21MU2XBEfJI4eqsk1r0A8RNC1fElkk3EIg9G8VKunqs8l6qeWHHX8KxDPWFtdyyRFy4WcBsRnhZX0wlrZ7WRvb7tx5ZVN9sm32WPG3M31uPX5q%2Fwbie5gwRuZ1kpQ0OWUBihOWNApoXiAT0YDnYVq5Boz2p0rTcl&X-Amz-Signature=01535a433c1e977ad859571259097b263298e5094b0bdfa07c37a568c834e612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKS45NVN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T185930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZjmDpmryV%2F8csjz6%2FsrHTuB8LIAFqUI%2FyJuZJpXpOXAIhANDSiGDzU05yqzFPNxCVxyAashJMqPz4ensA7cZJ7i2DKv8DCHoQABoMNjM3NDIzMTgzODA1Igw16d5n4i8c9ttt5P4q3AO335x%2BkBFAhAHEwp%2ByqKTCfDqIY2rULgQBByHXAM5EDAtpHwWEnAiu%2BysTiQ66Jn9Ax0v8ZE%2BpMkO%2BxRzkNlE7yUiLR%2F5I0gu1QeD4MAsClL3e7xzm5dTsBAl7IvhK5MXEYbfuN6imUDkEozSc1d6Z2CLB3dpg%2FABLQrlOYaQ6k733%2BfiaYSnzTK%2Bzl0uS%2B0Ua5Zu%2BV30i%2Fff9NT7lMygLDirQ4XTd%2BNewAt1gfUtXv3GA1j3uuMz19tCmHgEN4NUqqDivw9WW8jWIMkCxAlGFzWsLbdaIcgSLmbcwGAMA89FiGQYGkw1j2YMFphEkXvE7JL4CvQXfSv3gRj5RNIpMaZRAnBtyiMCJpMw0dQLOZQ5pfTkeT16v0UQGlb8FCpgps%2BCDTEhOPFbmStZQz2r2HFUqnJhBp%2FTbZo2gUd1E13MZrj4CIoLjTwd90OAFkLvojzplZg7FcpT0cRLlk0v8LVNDbcx9IJxl%2BBTnF1sroMemIsG6CfBiWTigLsDoS3pNrjytLYdyj7za2pi8FJ3A5ov8okwjwJiDPUosdP9MglbbBcra0qGryVt9yaIpKz0lsRX99E2epXmh9hCn3kxO24EDqaWxyHlwoAOa51KIXkhZAztGCBfInb4qdzCTy9HJBjqkAfBxNYwCwFZk5gB%2F6qGSFep0RKL9Wk%2BvprCCOFs5%2B23zGEE65QMUATKRuPjVjqu39QN06%2BBHlfIheydMyEwOsj%2BFVaHp2Z%2F0V8IwxM49r%2BdL8Pd7ti5qEi7UrA5qZOziXAV8pLQ%2B5OxgfZ6kPLIobAEfYOoDJR2HM6HYJ3IcUS8sQXWzwALf1FHDShsxAdzFL3ONTkV8mFz9aqB2aA0D7RKvtwHE&X-Amz-Signature=c14262e1a62b79949ddcbbb5e384fa5e01e89d8198b7e2cf8ea33064c77bfff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

