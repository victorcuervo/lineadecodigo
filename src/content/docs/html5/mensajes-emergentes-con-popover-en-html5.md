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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5SBWKTT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDm3IHUnLLdkbd%2BnUP%2B6eN0HLcKCXIEKgHHVavjn8EdgwIhAKcCbDoZSv4k29FrzGMi1aFwk%2BFIyqNVUUtLPitacTr3Kv8DCEUQABoMNjM3NDIzMTgzODA1IgyxjnIguUAXk7nYRs0q3ANUWN4TaUG5iolKbHhqLFCyu%2FqqNo6IVKAsAMpU6dfTWCWm2jKMFYOaQ2Ku0LWYh3IHa0TVsLAz4laL0hhPowfMPAJIm2E3R03vMNbGTgSYHZb5%2FsgGNyutt8fIvaIkPP7LsADknO5thmdv5%2BZ2yP1BZgBiev4QfjdtM5lhqEoc8k02%2B55%2FT3ijXLm07gokutxbC8No6P6j2Rvq7zCgDxlR3N4zR0V0YXGAEvPqhTR%2B1wVSWD7EsbO5BZD5CrDUZ35GpYIFrxHHUAqldwAyGcblAFWg6yzGGTiDU1gHSLen5HjbQOVlcPUJ9oK6BphhQmvKveLbbJyB2hSbKT7Q0abSt09QkBP8Fjqu4i%2Bv0D8AnHmoMh8pgO6eme%2BNTy0QhBusto7NxoKn3dJCCA0VNBtkGFjYhjglYKw2xyseIp2m1RIHkk5KvROjj5P7d2L%2FbF%2F3VbC3mCBiUxQK88U0bof5JryCjOKlgNaw4nlISmn1psbMSDwyooTodCrrUte6r601SBHmO0NAhpwlcAbBNa6W%2BhfdE2KXl%2BiBt5kxxYBbodZ2N1oPPDLPvLUne5rF%2FOg%2FnWaFikxTxelOPEM%2F9JZZfKYC7niMlY%2Fpv1MZSUGJJpYgqHHEytBNyKDQNzCj58XJBjqkAXKDl3i9g3sfzhpvqJjgIiICEEySkQuG7ciu3QRsHes8B1t%2FtTesgwjXvy7wZZuD0xre%2BNz8uOVBmQC5rkqVeAVQC4YUAJSa02WyhRQYZzSugxt%2Fxh7qO7XM55eERVsgG4eh3PH%2FzyydpHMa0Ys6Go303PGJtyohDpm5VhU4FNIUskPJB9r9XabCT5hZ%2B0d%2Fa6ZDh0oD6q8PdrG1i5rtcp%2F97NOK&X-Amz-Signature=007f9592f84feb3adb544450a40cfd4e872d58d91529137465b98f53efee0224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UUC34EZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDsYPj2xar%2BQNtvCxqL3luYUaVhYGBeqpOszMIu8tNLYAiEAr3jg%2FSHf5YiZIaUZS2JUBGyrETV0wIiV4fV3iuVGzlsq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDFa1Z5eloWlvmSkvlCrcA2%2Fbkn9gwWaeURWKsHMY5rDWkbumE9SDt3sC9wyc9WErak7QxLjq0Ckig%2BRR55sGruWevi6WrvLouUHFTZqiwUT7bnswV70VCHpmu2vIMPXxgNzQMK1Cz9uAlSHTnkP3U0c3n4qaDZlc35psSynpjvk3hsaxFajTaAfxZWiSZ6WMqB5scUZZJ82CziyqM3m4FoeeBqMByxT4lWw54%2BCUAXzuM36STD9ffrXz0v9MohHwAIGVgo8doYdTcOr7enPfg9p5aXrpgQaJrbsZjTryyGCi2yt28FPy89LnOLt%2F11OeeJnfYDRWSv0EXUt%2B%2BGSnxubWrpZncLVvTyN7E%2FWyIsVG1wO80OUovorpfqo79bmhm0w5IXhxe633KtXJVIQtNiW3KC6AUZVzRFhzscmAvbOvwJPcufzOBUaVIsEJo2B9xT6nDkJ9KQy80lBbQB4SpB0mQ8MffliwBvFP%2FtdpvwK15iiJw02A3f0OpIl%2FTOktDZDfmahiS7pdXVTaKxQj59SJ1S20p436Y74ifccmGwwK7IbWlFE5VfFlyI%2Fkzbzc7giUKF44xqGe6C1xynGLxeSJoBZ64uGnTtvfBQrhLIFxoluZZpKCHgIqZ4okyY006%2Bap46SM%2BQ0v6i1PMKjnxckGOqUBopF4kQM4Gxs5t526Yhn%2FopbLcwMzjKUeA0aYve7ly%2FuZxWhoZL%2FZiAAKX%2BjBYB2f52DKjdoWXWvDA2N%2B83ZSZZ0oKHNKhHrTS1sL8TNywxwejqMAwTm9APx7SDlPhjWEq8uxvyN1n3KIy1cXRQAd0e4xwO6pdekP7aUVXHQQw%2FFwboIk2i1%2Br67aH73fgvyi0d9cRDRnjOTQsrwLfB4U%2B%2FN1nNfO&X-Amz-Signature=234d72015792662f9249c52735efa3c4b76a87011b7f8ba21cec0f1cfaced343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

