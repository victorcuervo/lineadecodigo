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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHFX6FCO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T151654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAL3AV%2FTkHJn18Sl%2ByTFSgU1iG2aLBKTmEEk3SI2HglvAiBRpF0wYnSHpT0MnKMuQigNWvjt8aFgOK98Mn1RSQ%2BChyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMh2gT2tqcmcM2G4XKKtwD0oaXJXAM0xW6gkyh7W69SyU98KfBmcqTJ0Pin6bHJEVeOTvGW3iHI%2FM6zA9%2BcCfgb9CRFBDkHs7Sp2LB91EMlnMmXgqzCYazpY7oPdXkG8RPkGU4QVr8%2B58nF4hLsTOts0X0tcIL2A0fK9lSKSOIqQH7eUe7ki0iHK%2FDKaSMgv6zm3Zl5O7svR0R%2Fot7%2FiRaravxLH5NzwLVbyTNnEC8EsN4EAG%2F4m8ybg%2Bo1%2BCH91EtL%2FFCWPqjPG8%2FpqUQh6Tg1KEXgihlQnOkktgaOSCymXX83q679A8V5r5S%2BoyxFe5WKfbtEv02stpLMm1L%2FhYJb%2FohJ877l4ya54q8IZJrZZ3Gi%2FqYwNkEL2gF7%2BjO5Q2qBYivX6iZ7IaJf%2BwnFQLB6MVdn2jDC5i9RTS16XJod2dEp90OHKWkQMRXQAHflvU4B3UtMH5Okty%2B1cYEuobz9175vaKSVcpqZOVBZY4o6ye3oXpC091gDJ1L7BxwAwmnQc3piiik%2FdcLmb%2BYfQHIIybBToywYbmBHpVLkfGrri4m8Uoocuta5pw35e0HT18LSPeV7GmlUQjOJfN5c5wZnkEeMcwOnE6vwqC3DYpn%2BYklqhmlrRhBzfW7hXxCuywjGgvjGpviyYR2YpMw0NHKyQY6pgG7gD3HQmz38z7ebVmIsSBmcfEXEw7hTRryqkoxgDhdUrJ3ITJh1Mh2UX2Rv3aqjE9qLF%2B6z1TfQha5UCQY6C1ODUvd2fJYxcAzQEKaHXanSEuy5vPYGMxwDiFINXuZQ97%2BrZGXZnOu9zZq2LR05EoJ4%2Fjd5E6c9b0%2Fhi%2FGoC%2F0zljNOFcSCeG3T3ljIFhzU3XEcpNGj5insSfSLM%2BYIqGs5SpqPAIg&X-Amz-Signature=54d9d50e31334ea610ead3bddcfba7bb63c8d26d954f9a13acc03522e50e0c02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3AYUX27%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T151654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWxpw%2BvGQ8fxatEqKwZsWrMVbSKSyuyZZzNqQfEu6bnAiBx8ZCsuGb4nH5uK57B0qUSXHZBYf2KuZb1II0rGEPhbSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMj0fgv1dCE1jMKhvyKtwDMkfGjaawreyEpzRcuN8zS%2Fdq%2BegSuRbj2lj0WNPd%2BrGtL6epvCze06tiegcssiMLqGhj0xNo9q2Ddbdrt9WVC6b7v%2BiGwdnXl44GgzvGnrNEhKn60CrVG9Kpkvlv0Vwp9def8FAUTy7C%2FPtZ2UlUpg%2Bf7%2F3HSyJ4aa32TnWqMhUdV5vJx3UWCPwnvx0Y0TomO8kFjVQLntZKyrnqj4HzNOy1fIMs6HnmvW7TH2M5IDtnZE%2BZ%2FFnfY1FLW7BA1Q4UIVJpkbiKdaQC99PckY%2FEgI%2BqTFeRY3%2BMxxgw4VNVeu28a1zUGrHG0SWjfjjhFYep1Xe47FhPoyEWv%2FSd3eYz%2B3JGJUE63z9y0xLjOaiIB2POHBsEB0ULDzor3rgo2bqQmK2HhLh%2Bk4uPFqyStT9nONV8khoiiMnsjBV%2BRieODNC2jkwYvHX9q3l9hEhW5Gy9R0lXt7CsXWK8cT3FHzCxZQzmd5rBHgoQ9wZgSujKxTGLgwAjvlD9VtfZAy7tBiDebsDODURGNwXRMdcUHVQV51%2F2wUXvmS%2F%2BDQ41C8crRFlK4JVOCK9p3mvJnsp2eRwdb1JHEf5VzM71L2RbgV6i%2B4FaS4N1gudMbskq7vlq14nvvxxgq8rbSjctmxQwn%2BPLyQY6pgGE0afAiZnXBbKi8rXYcS1it7YovSWFYHJm57kG0XL4cDjHRPRr0vTwUpflpOAsZwuK15Kyzx6rp4ZZcVtW%2BTIm66hhDFYM1RAi2LZ50TOF1k3NakB6S0ZHS4ZIoSuJhxmU%2Bug%2FZD8jc8FskHB5jbIw5BLcCoSuTIm2ZtAE%2B4udUAhhW1af0SNLYElwB0MAHLPMEz%2BDYc2eq6Vs%2Fba%2B%2BFWRL7FsFYEQ&X-Amz-Signature=336bdf6f9691db01d572b1c25255137c01a39447dec4fa336199ed70be1f7381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

