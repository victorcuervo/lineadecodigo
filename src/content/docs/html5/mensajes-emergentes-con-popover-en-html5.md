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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT3AJRZG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BN5oaRTBjFQuO2ZrTUxUTsr5LFRc8VY6PjJAxbsKyAAiEA5UPiAuGhdVkvMvuppfMB0Jpf4xJa33vbyQPZ1Ai8CNUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbx2Rl4QJ2EwJIciyrcAzob%2Fi%2BIvPTmQb0MRWnRQMJLRIJDG0fRebrHSYMNN8FVv2kkd0YeYKlAFXP5IfL0cx6S5OcXeD2vE1IKf3sdxG0oPPG1UQIHSC4S7MRHHOBswd9mq7kPH1he0YrqNQ3D%2BJEnjpjGZ4cYdtR7UyWLJTFm%2BUjCRCTXTjwXCw6E6l%2FLeEC73qXHkMnxK6qdUIr15UUEfGgLun5APxnhhF0eKspRgP2FYwq54rkHhd7Qj5WMFioUXeM4RSSQtQqLbqNn%2BgvHEOF8FBNxY03Nr4NxfeCk3XgayvlvRyradTfELYcHJboi8MD1gRCixHRO22%2FRpTmq7xqmqQJp7%2FWyFYQmYMSDmJWDR6EleE15TZIR%2BCcNVX1kCkFLV5VESCkSU1LW%2F9N6%2Fb1niTzJeh6jfZXGsVvUGxildjU9LqnYEA9aEqpU%2FwOEHQZY2bWoSvU9hdGii31yK%2Bj1%2FvLuLUzufgh6OsnakxKlW%2BYks%2FiHNjhXC%2FyngmrN7tg7SVPfx4x5Q%2FTCO3uOUcBAHpwwfN4EX9hD3BKqdXGlb%2FcciN1uXQ2NMw7jdUc46rTrF7JrUuf5BaDvsbcGxKbkdxRzfpAIxvtOkt%2FNadTEmE0QJmTHupYw2YdAqiPfLj3%2FYhdP3MJoMNzR2MkGOqUBTUJL62R5g%2BQuLn6yjZRO7eVUjKZEkjEr6sUPyi%2FQsHAdtjOG%2F1ZETjK8qN1W91NS8lOVyS7S3vyM3T69TdUAjT3Ut5eT4WnjB9OXy5Xbjltw4%2Fnm1Kpth4JBRvetD0ALV0jkkSz%2FrDtuvJgjrtjg28XeARSMp0fbig2i%2BgcRDTewzf2b8L%2B8xW2fKWN1bKpvIdRz93u7k6pX%2FHV0myuQe%2FyjWCvu&X-Amz-Signature=5e0c53d1f0e7e36b450fadf0bbe3da0ab2d05b6d85d934e98daabb041d48202c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHPD4UH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBy4ehRfLCcxxFA6jccpUmjGf6WJFhTlNdoB4BLAyUrAiASyqF%2B%2BL%2Fl815GwzG%2BGE9Z5AOQl1Dwq9mWa4xqM2mQaSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMby%2FSElu1%2BrNoGXjxKtwDAr1vuFnOWjl7AJX%2B3syZROtGvslDBu1dVn9DJzABPCmtAHVq4VHjXI3%2FScxnyt1K%2BeyNDH2S8kONswmsgBYx4UyU%2FxHZd0qY17uVubCXtUfabpQjskORTAoDyFaYVpwPXW6FfcJeHwK3jPLYsDjjLeH5iK9bnecRiuIUJa7iqmX3cEPPYYSegWF049UKQP7180xypWM%2FsvyjyftfhfFT86ENGNpdQ%2FTMbqC6o4p%2FGffW%2FXWSyO6hnXZ3at4eNSkWhA8bwdBGMA%2Fo%2FQs5F3ReqTQuaJWRdel43vhB4rVPDalCiLtUijRNn8voeNLXiEeI3sRpcMdsyCOhr0tDirTlVn11OQO0KtThrjvmGYFbLpXybGD%2Fo%2FtTCJw6p0CC%2BV6pRh05YoPRTMCXInxnYiFIIOZRJddxO%2F6nLHg0GNc1o8P9WRTnHxa6bp7ShZp1CyBDQZ0xTOBb0JkJm9EcIs3eL4kypIL5Z%2BFlFo1eiHih8vkQTpyKYeAJ4PLiHjd904Yn%2FoT3fb%2Fj63X4DpX80y4e63PMPOgREaFz%2FB8G3w2KFMjhgCZmrM9mcAYpwDbHMUwc7Cjq81V5SiB%2B6%2BL20ehuW6c0mH6MLVPmxmjO5oKJz4%2FN7cTSZbXAQXyJpl8wvtHYyQY6pgHMJeCBc1np7NFwRfEDEBgZXXxD%2B2ksB7Is%2BS0HwM5%2F0sRd4nnj9bcaAi4oOzKnpXMyKGcJaRZfGgIBBFSi8g26bt%2FYiUOUM4rf8kMoQA%2Fch0pfJPTcTenEzWZ%2FMaMMTmP97fprKyFznMhBdrNJ%2FwCr8j0o6r9WOG0s8p2%2FBvndMBo3sT1MpqMWwyXc%2FHE3DnOPb4dS9yYu1u5SkE%2F%2BFrkUkvlEYSyb&X-Amz-Signature=42da49559564a91ef77a55f297857fc421a54abb6a66adbfb0418a1a5a677cba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

