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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VUNTJJ6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfoEWxQDr8NW9Sa2evhOnoQIbf1PoDdM1IyzmbtyRIVAiEAgrcg2i2s1ppF8rz9FPCvpeD28%2Bot1exArayNztgBAPsq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDD4On%2BYlwGgoX7XXZSrcAwnLqAf2qnKbfR1xzc98c8PRS8se63rxFSUV2da0Yt7qyJS4QKJ4YQhh3s2o9CISyoCGLdMTwAqb13nZNHrWFlRNtheN%2BWLY5Deug%2Buh9rIrNygpWdj%2FXRRa%2FCGgwHzphhPWGnOdDaxM0Br0ho5j%2B2P1D37DGADDEduaIdzi5phIhMbFTTo347GLJ77V5NRriz2CulOmJ8nXmHlcz0MQQRJlvY3MvH%2BC%2FZe4JVpLTojuJmJI%2BvesVGTEk9YmkzC2oLo5fnX28IQdk68jvjyJQpyK20R25zaYVLYJY1oXsQvE2%2FfW4Vr0mtMieeQWV%2Ffmm0O1OkqwHVnDNpMjLxthrYIQNF2%2BdMDC9CjPRqvvOzLo4FobcNxBGBMb6jDmOg1aWu8%2BmcBXDdGT5DvZl94ob7FAyDdviY3P7Tr6LOEXSybVBXqyxcXYcM4iYsKlsGVVp%2FS%2BwZsL%2FiFS5k1SviDEzKmxmfKc5DMQi%2BtnyFDPoL6P6JcQ1lTmEu145w68rhgOr0jla12%2FTRyViwZWja76rokw6JDTnFsaQeipSa7CNLqfDSP%2F0QLJdiLX72Ymbxv2He%2BPWAHo1lYkV1zIDj58qSUSbQ3jSEV8weDZKGFr4gg0qasNcKPtDLN1HvdcMKiRzckGOqUBgITTOUc1M8q8zb0JQ%2Bv4GBUWjkPoERmUhgDjhY1%2FFRo03p8sVen%2BmazxKhEoRfyBxE99UN5PhtwsUwJZnA%2Fd2a5KA4kM9goySQLsGm3CKBc%2FL4GBAjgQ2lT%2FQiW2p7qdvZTKjfSbGUfx5EZGG26%2BDCuPJ2Pxfar4cGUV0tP8%2Fa3rgDFiQt1t7%2FVxHOZqkz1OsQ5nLGOB4SzKdWNUDypebrGulLh%2F&X-Amz-Signature=0dbbf53526b12037e82c696513b8d79c4f880e7a7a736878dbf538b9d8bd223c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGYSDTHN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXcRjMmX2K%2FrOj5lbXEdfckaxkYMLSgaf7cYk2X%2Br5DgIhAOGI%2B2IiRzoHfxdoTQN2I40q1E%2F2CQkTha6zYPBFAV8zKv8DCGYQABoMNjM3NDIzMTgzODA1IgwzTmiEnW6ecyj9W%2F0q3APR4oxsBgbnc9V3z5Omqup68t%2BQQQG9mNCKBjgkljb31v7RkDZ2FeR3kpaJn%2F4WTwnuGMahFfk%2F9f49PQqGiAjUKgDLWU3%2Fz%2FtHtQP0AE2MwnSR4IradSREGxDVBjL92f6L9%2F7s%2FSDm5147FFWigMYKmir97J1GbunlMJPwaItZIrToorBDRWrSAZJkI4coUZ9kYuZr%2B53PSOarJ%2FybwlQSbiXPy%2Bx509oNMR0Fo15nLeJNwYJLisuPBHcWdJdJ7uTLaNF4GyOkyqrmbThUU2LgoWU4DsJGgfyrYf0taLn8ol%2B7KSCHxyft4fHNHZpk2B9iFGSyh%2BrhFNs5VI9zU8JdG%2BFNpuDK%2FpT7ND51YIJCumB4Zz2FBAOdTEJsytSe4I3qiBa%2BACJN2V%2BIWSsT6KzeOPXlYQMvbJdXNTDGA8D2xTZxNUdWD%2BipDx4dMMIqb%2FYQBKD5v05LgSkEZYiua7ATQgQOq8kySoZC3CiQJ9X80letCnWjTjb8NaARsyLVoOOPIOBYZxYh3xA3GcH3ZwEGyXPzee6IM%2FJYyU%2BG4huK4E4UgkSOj%2BP6%2BIBOwmlKjRY6zEikYsEeQNhEmxPUCTHNqID%2FU1aBtAMxXYjC4xdGJUmYYwcTq5%2B9PuA11DDMgs3JBjqkAR0i6Ef6ciESnDoqjX51egmJlvrZIeWCTumzbDcLaEdX9D9j6bd5J2ENyHHn4bSsOYMMzB2b5NySAM0AXBeId71ObubGTMnlCxi6eB2SZ%2FOjk8jdRGO%2ByB3rNL%2B5Z04i4X7X8ukJb6xECTzx8iK2U5bJuz0JLd6EcTzlMU83%2BroIUztDZmgbK54A%2Bc51ZmS7rKu5cIK0sl12F7Y2%2BdtNrsnEEohK&X-Amz-Signature=0c0434d3f4cffd60e963e6cfd9fbfcb464d1bf1062a21f4eea9b26367580f8f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

