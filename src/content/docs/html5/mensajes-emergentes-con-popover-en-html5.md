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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZBLS5WP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T031538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDT72FXdr42nhhfMQ7CdPBJ5Hls%2FkI9CiTd0fjnH20s6gIgZHALKkIRjgT3YXWfYzUZ9qsItF9jDCWTw7Csx45AS5Mq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEHkqsNZb6Rp0w%2FxByrcAzITT8VO9Ohr6zwy2Jt06gfr4mvCvsU9XBFeQsyvNGfp2niFB5uYx3ueF6naMpRkusJfN%2Br900WupYC7mrauNGPwEIbGa1sqK5UD3nIeEWqDidrKBySg2OHIj9T%2B3an4zigJNxgHZ2C8elEq8i%2BNDrl7sx5B8ghgcF6IPZ%2F06Fl3rLSbFdIv6eLtwuBui3Sy%2BLyeq8SgF75UK6pEn3h%2FQ4%2FNiCosLq2zTwpThmBCU3zPlZ6aKVNWR8SoN0jrcdUOVDPuCTEO0unY2NDxIovkmKdRoWKrsELvXEZ5IpVwPkZZsxqjdUO48x3Wa0S8z2dsaTWnzgiL6TNAS%2FLOFiIpx9yt8oOfeJj0qE5EIhAF3yaRDUD5h1Fmi5sSRzGbFQngOuLj3lSpZ2vg4ioe%2Fo4qZuu5O7gvFIOmrFiMKTqzHzK7jNcOxpx5Y5G%2BMqJ2LoOkJsS7qAXIS7A0OHVrIZzINhQWjnVut%2BkNWUp2JQbLETZsU96ej25uBe1fiuY3YhAl6QPmvY4Pe2zg56%2BWSVRj15i30oLBhbAhCT2puVmR7BXHCHKP7WoR0yybjfKJZ2OU707OHx0b%2FXRkftblcNAJO5z%2BWcrB9n6lGsmMrhSz9GYxt53xQFd0UQHE8rtUMN6MyMkGOqUBVZE%2FdH%2BQ0lnCGnWawzcx0T923lqV2%2FTC0T%2BmfNBe6kiFDA3tj0fJxpu6kWth4nHFs6xvd5YTXzyJgsv7Mzte0nVMi5pfzfBKnTeVBvw3YzU7LdaGae9nxRHJ916UvV%2BX19%2FXEiFNEqdJmA9pnOBeWHhvywCZBZjncOG43xfSzIdgFVy8lhdcIFQCw064Ubm2x2nTY%2FnGVBWyDcRwnhon6%2FAYZvJ1&X-Amz-Signature=ef29ba35cb50ad8c717a6f0e1d755eef8094ba8f900cbb2255e864e1d5d1cf8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPWVGNIX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T031538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZRy3mzg2%2F9vUr%2BlwutC4iyQEjKHA%2Fsz5bzGriB47HoAiEA9ajxptRot9s2USNyiHSChKh2Giclwbl1RoambZUM3xYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLY7UgR%2BHjoGoa2BkSrcAxMWViYwFkkUCHgqsilTyET68VPCLx%2FiUDkjn6%2Ff2Sd0P75Eg0nXuf61BnUIyPa0L2I50FeBrnZmr74yghi05gxLs9PqPMzmAPCPApdrS5Ki3auAHGW3jfqbcSv68Hm4qod%2Fdc%2FoRlO0CA5M0XgZ6XgXh%2FpQv7xsBaPpDXlnq17k%2FPy5n2STJuTW6IY9JZGaVm3cVsoRLhbZ2RwXo43Quw4kS%2Fdh5ErDVzjFUkeIS0P6lvVI%2FJm8FgtATUTv%2FcEcVTO%2FpphqhO%2Ba%2FFcReZSBJwgitW3yk8qFD5dfO86%2Fz4%2BYHQjmXV5u7e7%2Fcfd0f4hg4bkS091Wf6yJt7cDH%2BHWF7VCWSssUCzHY1nRuPXBwTrPnRIaoGuMi9RFWGgc%2BlWaa2fXe3KODGGJmEuITJW1ho5o3%2F4j%2BhHzMUYAwtspBhxv5QGw77dP6e2wohEKqa9KPjlDrzj5QFJ%2F7pvRnQ8cDHfaKBcvZaVF69HnWH6UJ9zUFAuXeEVe%2FjAkqBfLWc1Jiyn%2FZtCFR143cZl0Nd6PAB1WwDKeS6F0ATi7ZHbhCpX95BTvoIgtu4cK7LJ4OraLzU0Nempa8FET9pDoNyxDBbIj%2FbgXA19x4VQFdFseiqc47q5siGhykUDGBuVFMJaMyMkGOqUBYdpvhr%2BH7rLVpldcHlA%2BBv2cOEjvNCsCxS2%2FpgwQy8HioToCsU46%2BlZFdtTgvHE2yZ7K12lDPXY9bTH5sCLpXEnOwm%2FJDXEjNi8PJkVf58OQ4nk3o4B4HOcHIcgwRalpMuxBoLOg63EMoV1MYSjJbIZnQL92haPw%2FadTCsVfctADV5CV8swuWcbcZRTUQQRb%2Fh0JdQRaTyJJGc5ovn55erNiNJWl&X-Amz-Signature=a0a6784cbd55889740a2f8f578eac2e7cfeead8193265b217d25fd3daf69ef51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

