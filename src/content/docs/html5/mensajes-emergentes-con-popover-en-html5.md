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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ELCFZX4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDN6dpJJpea6rL2DfX6HVbxt0tAgnIxJrsemm8%2BfoTLcgIhAJSZ2HmEdp7rQEQQbiQR5ZE899oWuGDnGEjt8Ij6101rKv8DCEMQABoMNjM3NDIzMTgzODA1Igy92xG5vY%2FgTsAOA0oq3AMcs%2F4ZuSD%2BGD%2BsdM3%2BhMytfv9g%2F2YVURGnA1RRBkOnyNS%2FP%2BemjUt%2FvPtOhz8sP42wekEDDpfDpbg2%2BI7%2FBpN%2B%2F5wqfm0FZMZEUSo4cUZcPJfTAUVfeSQthzN1MMIdtgOY%2FMGDWj3CrBLV%2FnIVp8P8Zoh2cKaHlU1AVqvAVlQ0E%2BlOFIfvtOnufUsuotWZ2ImlibHbNNHlKTxlX2CpsCze9O2UcoDNqZ%2BL2Ne9H1WeqVm9zy%2B%2Fsex4gY9aYrSeDuIO6lZOkuWDEK3E1r70VZy4%2Bau6K3WHXQFeXVgk6JLvatZHhyIPccYevR536iqKvFYD%2FAmKEWckQrS2jn8N3L54nf2pEwBoRRqIv9H3zRkQabdvtsu4ydciSkjWwQyaQs%2FDagmb5uvPIQmqpAS8IOYiV5tj%2FbbqNRQj%2Fyp9qQbIry%2FDJP68YRn2F151bmJ0ECmG9EOn0gVyC1H62w9KCLD57ltPt1wggh5sUxOLSeBEVzM3ICkFX3U890AsMoUxkcGCW2PiYniOh5iiuVAaOW3LGwrg1%2BO%2B9IQczu2%2FNdgglfqZQ9iutYyb5tiCnIRpu%2BvV1FmPKxMywS9hSB9NzIh3Xl8i0X%2B2ew7YJoQjy%2Fm51VNYu3h2xnUluV7xlTDqq8XJBjqkAW5Yf2ezQ1kEmmfjdNDIEAQy3CnL7Ug58l%2BKLsC1zvRnjpDxgM%2BijwwFDFEyWMz6Y7wclziwJIfq7nd%2BsH2mYEMosyJZTo9oluhaOQxNr%2FEX2CWcChiy60MCCuKsjLHDFH7YukB6T%2FGGyEFw%2F1qdBstURT15dUh57Pte0MM6ZP4dwEkjshlBDwZyKU9syQevPPnnwJxoDkuqBW5B%2BgLsAEC4UnXZ&X-Amz-Signature=a62a4189a01ef278fdaaa6aac949108dbbfccdab4d44a2e03e3a9f422a439abd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E7UTNSL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICPoWZieTHTW6sbCI9MzBPQ6RvuReE59B26yPT7CbJhwAiEA1ZNLVmrviaiRyVIn%2FebcLeYyFORFWL2y%2B33aHoyQEI4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDCv0E6nqcgmfYUS0PCrcAyBw69%2FWDdXXnj9k9w7WIylnqaLAqrKAv3RlfTmCCa11b2zm3UFFlgH3eQLc2S5JTSoXu0%2BHMX5lNJWJAir%2B3Jd%2B5oyTJ6ikKLrxU1%2BwBT0HQGPP%2FQ8xsHJw%2Fu6OyEBjTQWrd59kXqP2JgzpMoAJxOpb4oc%2FX8VIlldSJnYAvDrGvzk4nScMSH7bNYN8fTtF8%2FfAXFRhhydnjz79vTMHpvsnkVmvsK9y1srnfkGIts6Y2mxok2hqLkRcWhTigpH7hUYZKKwIo%2Fvok1sV7TrF%2B1C0aFYULJOWVe8IBxcy9J5W0RagdlaIgbcZgssFq5ZkMGv3HLSGUJ4V531zmYWX0eeezN6Pr%2Fv2pyLVvo4U2HIqUeFwuZfNgBq9AsOTksvfBSK6V8Nqfw4a67knxMbKJ9ngHoJlkKKW1pEdMGIM5z8ZQKfnm2trLhwDHq%2BCyCqM%2FoenFFsrEonSsNCe0Tu4B4D9WaWJolMNKqUEnz2pbm5FTMmoS73jawIdBmrmIYxR4jVq3iezx2qYGMlJkGA9QAim4S7d%2BG%2FxUR%2Fnu9bwVetrOmyI%2BEm%2FNmqMSaIosOytnPJJ17LrLA9cyJ%2FCF1uGNTbJwVCL7wMG1mTGomBw8HLAvWgWIbXPC1bOjH99MP2rxckGOqUB%2BM0LD5xlAs4r0L3AAJF56tRqYrTkERQEHVFx9UqAt3Yq9%2FzNvgRgfcYGiEUy2aHABbFAyhz2XF3zyG%2FMaioTThrOi9L3gT3EkqiQrROQMwXb48lK5NGptt2eiJ6n7w%2FXFM7shSVfF3gE7xD0%2FVpz7VXlHDemtJCGg8eLuv81Cx0VqGYUdO14pGtIYB2dOct77URo%2FVZeKL9uo9LbpMsUjCToul03&X-Amz-Signature=6c2277b5dcba64caffd2994edba6f15033d22f3ddddadae26b1f0f561edf0417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

