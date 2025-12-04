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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRGLAJXL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIHpkkqDXl46xlRyvYbajx4GwAOnj699%2FnDKV%2BlKgwSzuAiAdJdVwobmAGh71umJfygHYHawv2Fu0Wk9gxEeu0CYx3Sr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMdtzwD9QsdKHslzTfKtwDr71l7jYuXqENGcMr%2FdwnbWILOj%2FUDl73t05EjLMRfIyJbH1KUgmV4x4Z230HopepemqKwqgOkTboJlMdoeUdxOgWVywqhlHulnhCV9wnea4jnlFkY4cP1P4%2B8YzH0h3j0P%2BHeSEDX8AYU%2Bi6gybc6ZMC7M3GlO6LGvGLMxTfqiCv0gjcu1Mwi4xS04WhzMh7SBSPVvSJqsxKER32tCEfo26FgeTFFY5Cwc0eUPxjweMc0EgteBn78jivtGtbTpm%2Fan1nba%2Btt7%2BbA9YO3wroT0IrqFsfU%2FIXmK1fT%2FTm98ZRhs7T30BDACdV5xi1eKx12Je%2BJlivVq%2FGzsJdnwal%2FrSxvBkalmeAQJiq0jfUDKbSdkQe%2BheSoHccd690Sbgnf%2B0QMfl6jqBhN27Hd4pzMM9cDHujuqqun9Uy1ZJPjtFVNT48%2Fuho1G5%2Bp5glsuGhmTU%2FM7lGfTGBa8bpLHKt805hBZXfeUHkj%2Fm6NhuVI8z2Jx1MxoxF9zT5RpZJfQXC6O0VpId9M%2FvbESGM7eLsjLHv%2BHU8Mo3qZ7Aj1vwRdTeEtz14sS9R1D6nGmZzE1onT3Tv0q1e5YhkW%2BorKTuVR5LIBafcrldl8%2BDPBR%2BhzMESeVB9KpgTT%2BryrjIwnobFyQY6pgG2%2B9NoC1AQo0RRRGX%2Bfp2kqH%2FjFyxlrOkUQdoGndudFp%2BWBjs1mGLJEQxyemXHuM5cS07bXm8O5ziuHBlW9o8u8AnmHMkI9xFQL4eCB30kaaF2XSKkpHcliRp%2FIz169y%2BrsCBI4Mz9zIZEHjoafXcUeN4eNUnuC6XjI4zfn%2BtBtHV1ds8uei30xw4neayV4F2h%2B8x4EMAjKa8guULTO9qJpzuyotM7&X-Amz-Signature=d330b9480e7705bfcf02ddb41f30cd3713836be4df4adeba005f8c9362c274c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VSP7KN6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCy29eamleUBCJTrISDHcL1YP5DJJPAoQ%2FdOv9g3OdLDwIhAOZmA2f00OmuPfzDdcDy0%2B4fv1DTDxiYt%2FgCVTIK2GJwKv8DCEEQABoMNjM3NDIzMTgzODA1IgweJPUDm0Ti4OeTjToq3AOigdnR2bB9Gomv8299kC02NqD4TZ9N%2BjDvgV1hGL%2FSJHwolmGJ55tMxsHTCyX2LXZTpQ%2BYaemVuYdr6lJAJgYtX%2F3EVceQq7Qf0DKMw1k0OtWuAY0OJQufkN3srR1oPOtBN%2FynvhtIjk1WQlnOCjhuU%2Fpm6%2B2P5t3CIBRCwa6npPfJr%2FEY6X9xLrNPlGCInypNul40fjDPm2EMihWMWQ2kAsGBLoYJ0f3N2SaTmvWTqpw92t%2FW6zzmIeXiaZ8Kw7JMl8qFzeKWhTRE%2FB2LClCIorCfPXGRJciiFrelIcYehX1xfxi62rQD7%2F1l5vPGuoL5QbCjii6A2i0HCevknemiAGB36xxV1F7pDQQFCOw%2B6jOnSHTqb7umnXiCl4DHhOsyPVTlHhyl%2FH%2BPPaWqf78a7UDBLMX5wEU%2BHGLtF28dLVz15vCyhqzwdJ4HC4sQB4UgcfZXTUnSiwLxAQG3y9gPoO4EJq%2F4afG%2BP06aH00JceoNrzkRNfh2hKoIJhGos9V%2Bbe1pydEfYG4axHtIVDTJimm490rskYZPeGYT%2FFNVzXTzwOdDSN0EBnRVC8MpRzurM1q6dYbrR4MoX%2Bh71N3y1MI1aYjmm2uwMITPCZtpuM3WO7MXXISHE3orLzD%2BhcXJBjqkAZKZbdMhdMqxZx5JnwZWSDLedA0OPyk6XOd9HngTHwa8ngGxAvTA9pa%2BGimN2cNE0VFiCS2gDaCjLZBBesbq6xXz75JxpBXcrHcLVXNII49d2ANrGymFro7D29QjQnVlCqOqXX%2FaYgr3Rmygbl4hcy7QjusY1UcI2Ofs0yl%2FhuxAedzCQqKHn54igYsc2Mpu8u%2F4ZTT1MKGO6ZLwV92gGFmRHOuG&X-Amz-Signature=358f26393e5795ebafaa0dda471006c3396aea1e4282a53dc2a99ef412abf40b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

