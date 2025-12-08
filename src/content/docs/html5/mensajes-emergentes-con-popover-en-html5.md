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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KGLJVM3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T191003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzIu%2FXDlT%2BgjcIbwyU9WDO7rmWgYG8POmNcYMo7VeScwIhAI%2FMnBcMz0EHHQLkCK4luFWFbz9n860Dxa8x3EQcOtgcKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwp6zJqo1zH9TuI0ZQq3AMoSPS40k%2F77yDuDUnJCELFrRV9%2BCbIOWr5CTxQaUBwVBC7aSgrGx5dGzv6bycZvucIWHwYOyhFHdem7UFVWaraiV10an%2F2autvcExZf3HgERfixQtkZnoSy14xHq5ngR0Pqp%2F00nwkWiGp1FF9PK1UsKYc0%2FVYEu6rQawQZexjx6UlJxHIQ7BQL60jlt0r4G3N%2FB7flTWZTSR44ddaHvxc9eYbgn7TDleNapQ1P0MMcNNAFMmaV%2FHrpr4s7jUeFLSrqk6w4s%2BMYUQ%2BMfgwp%2F67%2B0e2l%2F9GTWy%2BnNQ7zOy8RuA8zpDv3k4Ib7e9uibESB21X%2FvdITc8oET9En2wQxZhO9WJWJTqtN%2BWbUlJaqzwf4zwvKaAgBM9txW7xp%2Fknv9JSMFYYQOtH8hBR9onMP1RRPdilxtg3BMXAkY986mWcNPKbppHvrM2ocavdbvvFqg8dyD0Ff5JZ3Qvzifm5I%2Fm903R1tIOlfrYjoUjl8KkX44jzguKXQhGQ3NgsqJlXpI9mTxmZ%2BJCc0lF7ikFOsC26oGZ03YHfgIUe0%2F6FD4wAQ6DCIGxByPIDde74NwmLIo1QsCTeFugTJNJODjWnsJBnZlokuw%2FyPIefbNMGkfwewthH25lKUz4wkbUCzDbs9zJBjqkAd5rGbNdBJEMCLne%2BaWgk75qbooJpeVjFHJslE759LMzZTnMuOr%2BI00QopmcVlKDFx5CG1H9NJUxq4QzT5GawoasLz2gXvF6ioHd4srA8ty3iPx1KX1ELtrXl9jEdp0P5rmt%2B2ex9TxnXXS113o%2Fem7NaOvDMHYvXP8mTx%2BBqkbcOk5ZeuO%2Fm2r76c0Xl6zioC7VFiir8Doj9O%2FxGTEyYLxJ23pN&X-Amz-Signature=542ef4f8db91e87bd40128634e7902f66a08850662611571f78a85fb70dd7ca5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z4IJCEH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T191003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7zsaHIlE7LCCiARykSK7HZX8uH7J0PmxbWr20%2BAD0tAiAusMCYNFsXJ6PALn7m8Ogao%2FLrrtfa3KT5afNHUsqxICqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0fKT1D0rBCtNh8MoKtwDAiaKamu%2BfDHnfdJuEN3AjCwtsRbJs3C2xrXarxqlc2FlFetwq8PsdbHghfGzGS64s0CZUyeZ3WYKy1Y6j8DtMThQ9foX01CZ9OvQPyn3XPtyafDupKvRrxknku9H%2FyyDBD5%2B9N58AbMyhGlJaCiN%2BZ4Zn20ZKpj%2Fww7SsykkYj8TozN6O522%2F3nIwZNh3TRLddmK33YLrklcydR3Deu1yEXYFmi%2FHa7MKLkF2mWZGT9aRKlKqpbd6kofAvNCMSN%2BmNJZSbU%2FgJJubQPfeeYMlbSTFSwscyFLnKEoezL8x5F5X7L5RCpCyIzXLPqVBdtpf7a5RgrhnSyLnuGZj3uwJAHWqelOClxnhciRow4N7DXooX3bUAFoxVCfni4w8FvqYL%2FsoNnpXV%2FFCjQ9t8SX9%2BhOc%2BinLCd0q4nY7PRSDKYu8ufMecWIaciGl%2BEAwoNquy32iyGU%2FgcoNPqFqUv40%2FvqWvIHIyYNFu8WDRc9jIU5T91zoKhyTc0CXQ2icERSel%2BLoedzIHdcu2r9acfFfzWznkxjq7Vac%2FrEvcv1F09P7HvABVKWTMZ2xkYqFEVHR%2FVKWDK3b0tZasMA3yjnA6CZYEoJj%2BeTo%2F7WmuMpbLjVbG4BLG%2Ft1gwPa8owubTcyQY6pgFM%2BWWMZI8M%2B6zRNsGtPR8qOceDmF%2B2BZSPuxxaA9DCqyCd7zt36URQV%2Fbk7ZiAos2FTMsIIxr7hSJbQMT2B3iVAD6wrghMzMPH6KzyL9eW9wf5ZKJqi3EI9LqcHUq0Fdsh%2BMov9i1nv%2B5pbTtXMwGP2mFL%2BGImEnLvsUPHXDoEuP8wrDew%2FdfASw4fUpCk8jb20eeThV9s1CzTx2%2FiMEiC2tgBh5SJ&X-Amz-Signature=294403acef75462433f911c0dbe45e3e3092b75989932d60c8217b9b151304aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

