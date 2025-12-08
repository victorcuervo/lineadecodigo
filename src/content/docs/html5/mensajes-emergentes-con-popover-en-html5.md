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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUOUWB73%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T054138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICgP455EucBugsgMm5F1orAeTnEtMphwUVKzjF4NE6VLAiEAxTlwIqbYbuBIlrFPYLLYn7PWEhQkNydLG3AL9fP9dukqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQWV0tUkVhyyWahpircA65gXcFL6mIghA8I4vwKwa7DWvriI58PvFTWBZz6jezgVN4uO4wNP8IT4X5CX4PUAkh9CirFOoVsGHmN%2B9455JJV%2Bn4yWa%2F4L0Syy3ZkEHWGNP1unE5%2FERMmM8R0%2FfLmP7zfTxKQJXJh%2F6Vvn3Qdd7IBhBnit6onkl2RfyyBkNbCZAzFhQ%2BRY9JqsLcfOulwyrG5OUSrYAK5YQg4zEHskfkQ%2FQk4p14NbOl7KCkGtsA%2FwhFr%2Fi2YVtwAJ%2Fwm1NuPojYa2lYLaFwzRiiqAwJHZKh4DER7FJvelyj3sylQKmlhJKkEgPbG07onZWBK9Ty7ZVCNovN8Os33qPnCIa%2BYvsp4pL6cKhDl5la%2B%2Bs8X7Q%2BGrIj2LY%2BNyTumJ0%2BvmZEGsnAfckanoFILG%2FHNT%2FgJMLMvSj%2BMHaVBXsRPPGBrz4992w%2FJM2aEp%2Frgn1Oat9L54mLU8RluvDwlXBLtpBRJGo75uVsX0OAyX42tAFZ5h4LrGwuQJgYwGZQc7MDaznG2%2FZd2Y%2FpoGQTfa9vSnNV5yFunvXOoaKlHcql%2FutTUGrb77u%2FPgJVovQinjEdHVJnBt3crO8MliJw2EyoekD6LQMcTaU75Yl1JflRT5WTgcwzPert7m69VvDPV%2FuD8MKK02ckGOqUBoDyHtOuDCnW3TH2X3Ij%2BIq2NS1fX%2F1ipNe8T6ljLHd0mP0Nsiva%2BkLNRPL4VQC1wTmL4rWghu%2Fl9TluCiGPEFzGapIvOpyPar6a%2FaOe%2B%2FoROsKcF%2Bfcg5am%2BBkqVlI9pI0%2FXyVb533l%2Bi9ugxXX%2FKTRuFYpiQ7o40E6MGxGLVxvZQ60pSpfC1HQP%2Fn8hr0ZGgSuKow2vOkQwdp79A3kgogIgKE%2BY&X-Amz-Signature=230955b2bea4c9fd95b3e33f3ed4dc9a9b262f185cdc452c0317d3324ed09b8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QDTJ5HO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T054138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9UeZrsCxXagVA0NZ%2BaAcnbi6BQJlXwTx2Z%2FpYaGRNfAIhAIyiSOxb0eLkGJuNmmKztpGh2m7hDMv0X1Ugu7dQSwNuKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyte%2B%2Fz77L2%2Fbn443Aq3ANAmpcb47gXXxWy3ia2X6J0icjDvVP5ljJXJ0hE657lm8WK96FxJkgvFpoLNGJxbsFQj8JpNLmDabnBTPPLMZLwGu34Zc1j%2F%2FjrOmY7xCxJUMVv5dMrcsYelFe8Cm8VZSVvVRtlRlbnqbOQAdp2HDk31Ku323tlVExBxf6mHeNwcou2uAofGq0Q4mchKKnY4MtseNrYC8DOd1nt%2F%2BtWNsQOssoFEAy0aYD4kw90ZBsvPzvtyjTsbrA3a2agovAFLqPA7hPtxSuZrVPGkMjD2G7AQJfXTdMfuSLvbUNC1Vx29Xex9RKxn2MDxPqaCS%2B9zu4v8HrrVQ73B6WjZlH7qmQdFHumg17PUgGW%2F3Wz%2BTliQ8owypehz8H2xs04JdvfruC37jOOR%2FK6EOhNC1Iq0CVVVkWOSh%2B3116eNZ%2Bz7vlxAvA4%2BNKe01Ivz2bpW%2BNt49ceg25hwMBbd3VPBO6ibiGQpfOB0I04aUBIjxI%2FRGPMi3cOtqIuGN0fmZ%2FdliBR79ZFLL7IfPBdkHCDR90gYdWLLsbnjMZBo7ycxSooLllHas2iHGn8THOiGX3mAQHaT84CWkPKtNe5O8zhQC7xb5ATHNoDyNgaxCOxswXA9FTGoMB8R15JMzBlUx4W4zDWtNnJBjqkAU8Q4njwgxPWVd7iJUPaT2%2FELNGFRECUdtW0v9RfDWgaMCoyrNPmYU7JTXDkgSQ55iHzys6xf4gtEEUB2IjF5G7LER3wfIFilMG%2B9fmO%2BcCAbHytvxghfyFGadRK5ES%2FGPexp1W%2FAPMyxltlC29g%2FuaTqNBEX5trkWIDnJvNNzjMUUXYTtAq34BIqjqsy0ImLPfXDlr40wKAxDvG8aGLysUCfPkl&X-Amz-Signature=0ba3314a71e4b4db56a32bd94532052ee769ffbade55cdc676b194809a2dedfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

