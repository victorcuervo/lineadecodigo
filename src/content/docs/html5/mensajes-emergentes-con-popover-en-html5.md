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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6QONCP7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQD51c9yvRBdxlzxzKnINWTk7D7lFB1Aj7tvc2HEJcJNrQIhAP3qXjhN7ZoImWsxpWblxGYtCKkISMQIOgpwoV3ynvwBKv8DCEEQABoMNjM3NDIzMTgzODA1IgysIx4fqtv47%2FjpjG4q3AMLXEFvZ8nrecoJu%2BtCtmqFA24QsDL%2Bf6qn%2FnjzjB1UgwDXkHkKVtEkTJbFMO%2Flyp1RL2cgbrW3X9e8vKMYUyxJ4i9AQMemGcHl5EQ8kPabn3PDSzYXYeRQI%2Fxs%2Bvym84x9vgztxh7OUwjHY59%2FjQA3GSil%2BXj%2BNjYbcN0qApc7uy8LnEq%2BApksij1fJgRtQCpVZ2uRPUncpipx0dlEYvdIG6OdGwm8JhJaQJgOIGTHwS0f5IS6zG9akFjCTujk%2BGmKfcnrqWdm8Y0AKnv8Bd9DJHJFQiZqZfLkJv%2BQe144vV7x9DO17aP4NNtdkGbtqXIqKNh%2BQb7DlfABHWxm4EzZWbV%2B%2FsGSBPXXtcvlktpMnnM9uHLuXsjgVMwImeOzvfl9jQmRAf9zng1nOEf49ZOWJC2OrMUgvG1HN1OYPB50SJ9%2BHqvFKRR3YgCbVhsZDbqTyPWDKYRTajfXtm8Yj2cHmM8SFff1z54sRNbgh8OsDY9aVyYru2kUogRYUDg7N8yHNUkUQBm6kwKJ9llIq2xSxoOYXzL37D%2FwUY7ftV96tWHQrwmrgG2Lk8%2BcAfsKT2M0Zdi%2BoZRl0oiq2PKtNSKNbFFmnLHQAHb1UNMZQzFv7NJHvzRCTwCHpRqK%2BDDxhcXJBjqkAT02T9dgIzbpUsJJ9l4Hcmd8wY0xojk7nrEJr%2FHN9dPWIK2FAGke0PQxNCkFajj9Q%2FiHDXkPGjmp%2BfSTqgYihyy%2BrXIzBSYRF4%2FW6XmubFzIMa%2BLq5HevugTR0jI6byt%2FCGXAC0zMS3ILj1gs9SQu%2FCdku%2F8BJIWzvWIQb1WOGmrisPXhCO6bQB8GhxQs3%2F8QDB6MfBGn%2FxqjRHz5ArxSgxUJQK7&X-Amz-Signature=dc3dca026a1d4fa444c68224f07c8dfc227e92353219e1ae5221198d4e7f3725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MF7IN4G%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIDkSUE2MS6K4OzaBHMLBEAqO9ch%2Bh%2BN2%2BLtb6SJXIINkAiBTx5UBabdp%2Ft7gmBC6Sis%2FfyTREnl9TfqCMCIxcBsw8Cr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMoQtWZ3tuWl4pZ7q8KtwDiucCVyfkQXbS%2F%2F%2Fn6xmoZHeFAAkpfjFC%2FT8%2BB4jHnC%2Bym2biVfPPiZodtCW%2BP1JNjFCiuw8ey%2FzyqZXGtt2P%2B3%2BiZPxVcURi16BhCa7Bc6g%2BMIlVI%2FZhagudEDvCEXDaKGixw1McBH8%2BMR%2BhGDXKjefyAZ02PNv1tRQuLmbWbEI4yCH2Npi2nHAzZCcQer%2Fs4YckkUYItOjORrHTs62p22Lhgtzv9fNcAcAT1WZ0zkqpQEIKWnLQvlx8e3l%2B8r5l9gkbjxZApmF4A%2FhJ%2FJAFgTYog%2FoXOWVkfBz8wzG6zz%2FbyOlPwzEv2OafiEmsZ4z1RFDHBEmxag5X7xYMCU9Gpyj3N222uuWPdMgDn1PbPnEdr7qGLc2G4VIMv482XBQrARdLp6Y7XEan4IH7JuV6v0B3Vvi2HiMvLRtbKTTGXyF3auvZj48XND97pvXK7iYKffEVk1xO%2FurSS4HnEa0Q3AUhTwAc4c%2BhwfuQzI4HiATFFI6nVK6cPeKQibLA7zFEl8W7a%2B1ZPBMV5mv1Dp3R2cm1FR2NqgdhWg17HfBtI7DLZ3HR6DMFm2kSsp9LY0pndzgwoA3Q9G1lvtWM%2B20LpLGqWQB5jTDGssU4QGnzU%2FawTHo13LbweLnCrfcw84XFyQY6pgE6%2Fu%2FSTW5dRuwjriwzN%2BJAIqyeZ9sA1QaxT7QHaqvDnjvEZPYBL6KLDciEPBdlCB4y89lNC7PI%2B6d8QSS1B3nf4cV5MbSwmNHp5uEu9%2FKmWTRpKvJ%2FnMslrLoQeefRPnmpvhiIS41dx5qybPw5kC%2B5lDJrxFVZwBd%2BB%2Fo2dzDGGm%2FsZrx6v5JQGjnVRzLFlJ00dhiXHoy8JjVPPCb0YZjUEkQ0Yq7D&X-Amz-Signature=35fdc519ea6415d6f1adec91e04f6833b9fa33c88e1bd4fadd04100d96dc0459&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

