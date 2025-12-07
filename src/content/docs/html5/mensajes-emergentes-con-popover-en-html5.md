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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGFSHKIR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVp%2FZBGHVTZznHYpKTvRFb2hhtEuDvF1FE8z%2FRtA3i6AiEA0DuAc2S3Cl4V5VZ5rcuhQB0HXZ%2FL1yoZC%2FbXeRcig9EqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7lzal3uMsYXeoWHCrcAynQrPmBK78toWRMwnQPBF6wpVQULt6MsP6c4Cn7S2fSl2M6EdMpYwJG%2Fb%2Fl95rte%2FuJZHhw4yV4l5jbuMCKIn3Nh3wcj0mB9%2Bc%2Fsp2gaKgs4sopFYE26VJwUO6u0uGwqOLmf6ec6BlNpcg1UQs8OnIrI1pskJZI72vGJg9ZU7CfNJOPJYoQTL%2FV4XXnPDquN0HkYbNI%2FShE8TRBnvMrqxs8ySjFTRR1mQUlL%2FFtTa0GpkZYXwFsyW2bbR05YB4rqaH0ymrTGfEEzQn28n7trlVXbfkWbg71PVEfFxqeGYqZgBP4hK9WdXP6VBK2glMBNV3Poqup32j%2FS3s%2FTp53Hn%2FhsdcJ1Crq1MTFvKG%2FLHs93rTYvLOjrlGR4zoiYEQZC%2FDCLteB6%2BzWAck0u%2BP5C7buuq6EqBF5%2FQny6yPRNKLz%2BAKQ4Mh6CsY9qZHUqR7%2BizldKbEMBXNKVXOpvv3km%2FU1ZVcEcciCYv8oV0PjD448h52bXYyyO4YHMknLgzcJyck6v%2FLizRRBPdkyvA5cmBbcjLOhODJSxKH3GaCLgGkRMh8JIrGpQkQ17tDpdlOI3a3bC2r1S2kJ607F3cy2cNtTYMX7BIA3rqsOF6WULU6iFh5IaqDWrDoi%2FtjmMPj90skGOqUB22zSM5YfmQslW1B12k3UVkTtntGaEhNvyNMSBxcH5mPX5SVO2vrbT7yX7R3%2B%2Fc9oXRWqJ2J0q%2FrhRpqZnsw6XQJ8GEwIWJxyRhIlmJ5VrlnKFo236Hyqkn8kxlkUC6STS4TuWJVUd5WilausRBQgE6ONHwD%2BdlPcQWOKdJjFCs9mfJ735esxjREIZz%2B0%2BfxMvhXeH2iU19ujoGmQPcfYZHQHLJp5&X-Amz-Signature=9a16546aad731907305ca2b493654a2861fbe2ce4d53e2ae0d1c8f1401f80da6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQGGM7I4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDngrmhhnbAaHvxAklLPwXNl%2F%2F2AcgLgj4KtxAiU7eJgwIhAIjFQx0ZDk5Ha%2FfTmO6%2FWzbU%2FuusJjKhPh8Gjxhm2PlEKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywSVZ%2Fa0jLLOEzoWEq3AOwtunW3XlySBxm94EQ9OZG2JeFxyF1b9M7o8%2FYeYyCGK5qN3I%2FJBilag3CLlothfQuCGTQcvFG2VgrdxR4%2BYqQCvbSGMrVKWtgV63zPMfAqclkz5BY%2BtnI20ryH1X%2FyXYnLtqVTPJ3AbbUs2GT%2FMfeqnwYEtjJzxex3Y%2FeJ6fJ3UBcSNq%2BuRDHjZx60AD5Jc5wXDDGzbkYYUZmzIcpBuAKqs5i9WerFRH%2F8DjnGw6eDII7JQYJlRkaT5TZMCsaL%2BdvjdQK0YVnR0w1Sv3sIpih0H8wV5QTF75m42KpUUhH4HKVLzoL0Ybfg34VWrbH9pu7SC5eP2s%2Bf8jiXcfqHJimhHDPqzVhpd%2BL%2B5fjiGuGG6ySBy%2FcKbiUu2K7O29%2Bp%2BLdIpzZjsFKv3wjnPttm%2FXW4spLkoYiny6EHhpON%2F7Ql%2B5QCmvS3jqpw4WoujN2Y%2BObSa8YQlGwk2sTEyoTvHIBhvBXYh8t03l8i79Rdwlyk9P%2BuwRRc4j9Xkz7%2BCxf3M2x4FHujKzA9QXPYkbMejfYdkqdhHRLQeXzWa9nssVQNWrlRb%2F716sYMES5FlvzK7jxH3z0KL5eBtzBiMoJcSeBRPQfMvyYn7ftMuPa0Zx%2BCMhFHW03BXZXrqXe0jCj%2FdLJBjqkAZm%2Bs%2B24UfdTlkgojGcI3NqdEOCk8lQPIT%2F517rBbMRZEXc5MnBHkGLFBtPFBp68%2BJeAiYRyOKgS3OTyDCQGIu3LVRRrf7RqAV6884j4k48lZ%2FatzIRCZe2xmSE1JIPHRZkWel6elCbcO7JptZRAunuHv%2FCTojwxr1nI0nXT%2BBsR7Y34xeMFrckSTrtsTPRqMduJKG7YzFErC4Q77CuKrtZymwNd&X-Amz-Signature=6eb87e10b733cc82ab676d97b84a3f7ec0d1799758771e72e62f8ecfbb2c0f29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

