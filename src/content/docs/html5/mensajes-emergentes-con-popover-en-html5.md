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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPIBCGBK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BSQpgU%2FM9Co%2FCEWuPqG20g3acNsoaCIceb9wfamRfJwIgWTEVWbhjS7Ck9JrmwKw1WnPon%2FnLttwt9gH4GlhSzoYqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjH%2FKKcKSg8%2FsawYyrcA5ldwTdo6Pr3mNtRpSrdwjGffcYTDmHLr66yuKmIzU%2BfyjeQV%2F1KvPOQWagAwd9r6IThIfo%2FJeFY%2Bqt8q1DucXk1KnDgWbdF9S3SeyQFvX0oAatlFGuuojp%2BAynO4ohChNveV2sHeQ%2BrnHtNuhE3ixAYJE47d7xy5swVoGJYUVTVl6o9q7jlqWyS5scsvgGnZ2vNT0bzqqv8GoSWaoTtQtlolE%2FgLOa%2B4EM4R%2B8utRjBN5UtGWD6ndP4Q63lZbTpq7fIokO2vM0LGJPLT0rItxyhhrv5QZvuV12oSbTnJHSOgNyKUUVrLphLJv6FhkBb8425ZQPllLRSdL%2BmtIOC9Nxv3r3Iigxy3EPG4792NU2mH0HPUV%2BlxvPMPFUI9YHK6NS3XtPmSQg4PC7SjUj50wSST%2FOKjJA%2BGi8qSnRGuCCnQpTGFxTTyNNRrlgn1hW%2BiH41nm5Dhv2hfhqm1JWn94PJeVbO9Ed7JXHbGG39eCOa5Tf7jQ1VqGJqxJZoOYxKxaONSnMhaD6zBS2jTptHgxVa66LKhwJLKG8WCsN4S6qMMs%2FZ8Wtv8srQN93bSottw3pdQQlFR9ztlGSrg07LTklDa%2FF1D9mMfwZPuYmtROOKZ%2FJe3d2i8Mx265CAMLrD3ckGOqUBH%2FnuASGnW98w2R2A5A5RGToFTpO65i8DxZ6codRY06RGcQiLDpK5JLX390lyq2w4kAy2ewCOJ9SO%2BW3nBE3eNM8gnFXU8WguO920%2BaB0aZGm2DbrN0vWw9A8B44vd%2FV%2Fk9MAu2rgwJEMh98hbONZHTWVKFlmel%2FcNBtUPF61dszC7DKc0SdhdUHwAXwtR31tL3u%2Bjrripz8V1SXKYcRrDH4gR74u&X-Amz-Signature=e5d821c1e920440f0d7a898de83aef55e8bef7ff0843d13e8db9877462c923ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGD26QN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9Xww01%2BpHjiaYeSYxQR7CZbx6ZNwJoYQMFyjweYsBsAiA8xDBY5IpmL0vPwK0EP9UF8dY7NNgu7uCa4O4c%2FrUtmSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfT%2FqfMXCl0x2asfaKtwDMXqNIuR%2BplcSodSy8gMOwev7qwpG7AHqBNzCXjVVYtyT7Zb%2B%2FS2p3uTWd3pkbtofVe27fO4OWUQDudb5zP%2FFW7oDnXvw5ibH8lgMgBFDPpyTWRt%2B%2FZ%2FtaHD7yTOXIc7TqRuhpijf8JG578K%2FFxPTszAfIWNwLI1EZNMcaEITEOEFlrfBaahdQuzyQUTKz%2B4jIlRfV%2FBDKkVefwp4z4ddOQuZ4QWkClCRCOYX6k%2FIG0HGp5HmxQCjKCwmMnx6m5sRss3hbLR1Utl3Td40d3GhwleqJ5qNQ36%2FkSb9NpP9sX7br84gsSEHeiZoz%2B7BG0dJf9shda1ns2l2bJtMWT3MHWD%2B7ME7mmzs1QeH%2FKckwUtHcH3JE%2F%2BqIvDhzmiiTBFp2U2633SZgNHfc9MM90GbCU74CtPMVTMBcZrzliiSzwqAFnXMzFqvzlNxTxqNP%2FoNFxruiC3qeTZsxOhpb5JMUehAQdRhlg8NH7GAGYV9jTNIwdE9hFxQFzI3p4Mo7gdIU6EGicobeeYiXh0IbKwefLzfxCZHm9kZOJk4obA3Muv7rNe4oCmmuYlI9Rcd4jFV9E%2Fm%2F1i8ruMZ5MonC2cus%2BXz8uaCYIKWgMFo8YiVBMb8EnrYS8M2qyaShbkwrsPdyQY6pgHNcu6%2FhRRZ5eyEwqCQfvbih5ndeCHxXil5q5QrQvHNT7YvDJWKVHG7zhVeYxWfdsJyQQT9a5oZTdQjcFtn3J2cocuHi66fDxHWKW4Zazmp1U1eZq80VmRQse8csxbtDV0BDHxeK3ef%2BzpQlLQgFgd8ovcXKPp1LD8w1ebmwdykRhS1KSO5t6MkMgH0UL7UdQ%2FlzExoiOMh8V1rDyap%2B7Q4W62ShtUN&X-Amz-Signature=472216b31015f6fa0d896d0ba16c526801a3e87aa643e52e2f6af4baea446a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

