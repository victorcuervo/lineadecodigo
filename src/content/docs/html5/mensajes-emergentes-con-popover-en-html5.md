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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z34FBDTU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T103630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXFLoOTD9w43lNo5juNUtKG4rFcWLKhvV3epSTXCaC2AIgLZLT4y6LWF6Wm8WBA11uWN1Z6nJA6S49tz8wt0hTanMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIxVjl1yh8vQmVQYircA4EjPvgIr2C%2BdFYAZRjObxupuA5d37MTC7%2B5HPMkgi4ht6qNKy6O307pH0vI7WeV66ZFN4M%2FOTbmj1%2Bz5b556996ki%2Bky3KWyLb5Zz%2Fcm5dHq3XMexfj7dHvsW5dGOc7begPBBE6IqbSQ75szKKYMOzL%2BX5UYbUhnzQSHuA0UNLVD5Azokqo9u2%2FtBOVmu%2BtYVbz0ONQXI%2BLzcECheJ%2Ftqa3UH8j3MBuqhNTbaAvK1L9%2Bg5tTjDH6efvcAK81aYKkGBYLjyNhdqZgkWfRfzfE9gfkRhpokcn2RiooZicP9LWHERGX3t%2B6onKDMRdsAm%2BXRCYxmqg3e69ksWoy7lCLRWnJznP9dLkhAwkkrApB8QJQqoZ%2B3h0iIrSlnUBP8EFcnIr4mFJM0sBC%2FcX7Iju%2F1J%2BLGX0DMH5JmcDXzbxGcVVnsx2he4gHfEC8BXZKSoDIlcm3sD2UM%2BXOz%2FfFMQ5C2hmETqny8jYyd9%2FSYSNaRZxZKE48IU4pewUqJPL7MG1DlcPx3dUm%2FbmOi0vXW4hkq83lrHQU44x7EYhd0%2BarCwF4Rk5OMlKNTQckNb17Vq38EyHuoOyF8lN%2B5eHavPBE0tA5bvoPaDn3VUgwgtilaf9afHPMxPgzDTZWKgcMJeZ1ckGOqUBOthDoBKSHKGmOpV%2BGOQH%2BKZ%2FWQG5wwbykepZkMLtCI6GbdrN7%2BxCENcKF%2Fn8iRxz13z7FVuWpWJXd%2FJjZE2gC6qwZZxC2Egh%2B33WLD4JX1uiCdULbNVKxrCFDuqNXqMzwk81EIBVqDZd%2FJxCab3YoGyfvzMUdWjfmFnYX%2BNNDsjOyDhkdu%2FjLLI85tcBlDJMSEQx%2BYKtwKOfD9VlUSDorhdKW6Sm&X-Amz-Signature=43e3d44b348df37b9ce5e7000e1e28a72d86e9163cec9f4be0f5088d9b2a8631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXAM7B7W%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T103629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG07ro9M%2Fv8Z%2BsIlJipzgkL9Fr2v26B4ebj6Z7NdhQMAIgBM87LA%2BjqfBmYLWadLOExtpVPIMLXi2rx53qA2hmMlIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgjZU9r0NfSD1yYzCrcAy0JDKYh0xIa9I%2FZbICVYkUBVXFguBPxdd1yhzu4gYDO17AHat9Vu7wBnzJy8wLAQrCxwi02hqFqZCYi8eEG8E7tyGozJCdSbOY2FaxzyjT539TPe5H8nyjnAc0OeM%2BEa65cCDyy0HYBUfg%2F6PpSP26x%2FnOy9ZM3OnYZn0UQOQz2wQVgXQFH13gvvjRxCZfo%2F%2FiNmjcUc9Fk5k3JjZCLaoZVBmx3FRZCyRZgpx3AgnWjw4vAKViu8uy0sMnSCXu83SaDed4uI6NHt1J1KDTP6F25S4vYo%2BIV8ROjatgiWOvmk70S1R%2BwhHp6Wkcv4I7E96SEwqLfeVqNdo%2FFijDsBe9KRLaZySZ1%2FIEKETQd7c6hHuwtRN7AA%2FP2N%2FfcnrCaVvUgFVt%2FWBz%2FzbfKPa%2FfXhRQPW8AiRbWUcru3%2FyxvOCAjK1Sh6Oo3luObYbFaNU9%2BjHPlbw%2BiM2jUTXmhrpttkHZ5gLETY38PPv9hF7nsMyrEyHJibsldijHW8sbWlfxnL9cRY2ufQHYoJLGxYYpOzwvrDIOxQCfVEbXr7Db0ygUUg3tqGUbhVSkol3NAOBuXa2nLi3l1kAo9P3os0X38X2V%2BCvL2OUlUvwHLZ35xKMBPEXuwh8PYrgCOLGlMKqZ1ckGOqUB%2BuV4YGUTPb1Q9JBQVn0%2FaFFLZZ68Roa9Yv2vTJiG5fGp%2B5ljFcj9agluZbsgbPjf4wCDxtVcXEjtXs%2F2nx0%2BBG8syyQSUZ0oaxlqzjcVsJNyfxTIkp0G5ZcIwtY87vzLqGsCeSSqeZDfMDOKglx3yvIDGzW2%2B2TXVL3qY%2Fu5RVg9P6e3Z5NawJtMJcOECEWZtMFS1KfMayaDRP%2B%2FFImHPFXs2%2Fpr&X-Amz-Signature=4b156d5dc07c33540948432ee05f512e5d6794fc3509fb12feb4e1382dc21664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

