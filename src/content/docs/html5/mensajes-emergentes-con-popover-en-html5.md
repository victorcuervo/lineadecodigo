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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ONYOL3Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCE2Aue9km%2F%2BKc9Tbfhw%2FmAo9EJLTuEUqGGgUsAv2zeXAIhALJkq7F4DvJo4aufhiDZ1LcXDHEwU1gUXXyalHw7Ik8XKv8DCD4QABoMNjM3NDIzMTgzODA1Igwmr6gTWqQ%2BQECh2QQq3AN1iJ%2FhNlI%2BYxhWCdNHbsKF%2B1ELWw6vftlVnC8N81PoTNvL6MNvnsttF%2FVJw3jAMyhT0uXRRMJePNbtxjqQC4VRyTmn0eHVgs3ADlgtNi440OV2xgrPW6DjOD9pW7wi6aYWVTTBuP1gJ3kp645CxzIt3d8mERHcyVB%2Fs0z%2BBnTlhTDx6rR6tGWf50V1OSi68FYrcEj85oYF0WkpahBlMASrzLaaByGU1aGXPhlVsU6zm%2FWMy5fif0bMPY2E5JI%2BfAXvSQU99pNjduX%2Fewffy0El8N5WqAWfS7HpuDtIBTzVuP9PerHyf46T5%2BfE2WPVUbeT%2F3KlYfvOC%2BJvHt0XIjQLBgNdKZ%2BmRqWIC8%2FKMBecQii876BXLvxT3H4gmsWphVsnWusdE7y0LmcQPUxNdPk5gfybxF1vaVoq68hjlr4Ta%2B6zVobuOGMET0XjVWGpQAiSvDgGQj1jYNIBFSdzNaEhXlXI5EOEXhG%2FpCapx1P%2Bh878ieVknHVpk0ju1BpGtTA6jFevenPZwUde3ga5TIv4b0w%2BHMIV3K%2FmK6hiDy95jZEzEuK4tVhvr8oc3c5Hy2Y4ZaQUKLBSfxkBbvJvJAjzGkQ09ydvU%2FQPUuSi%2Fny%2FlFNaBdyciwr0%2FTIxJTDarsTJBjqkAQkBZGBhSa6ZaYOojqv3O2UHQnCcbf4TvMWwxK0GA76ZarYU6hLtzS0emIK9CxnPQtHodx%2FVT88jcMvcm7%2FlS8I%2FT18EqdbTCUtu8oZQjuGKGU%2F%2BBz8myvgVyEoNztjRTdTqv%2Bb6pBNnSG65cp5LCc05B%2BGUNPYFnJvk3w%2Fu43u6nIMVcyK9nDUAep1xqdR8%2Fn3CwIo8MEqbyGEkrVgurjUNxNdf&X-Amz-Signature=90e7a40ee7d3e585b4d60ba4f4cb6d338958fb493a3cdaad0c83b59ca596476a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J233M4J%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIEahKt%2F6Kc9%2Fc8WUBsrdD5wj5GS9%2FUxAFbk4LZNgUWhIAiEAv3VzRaO6iwT6ldyS%2B%2FGOiWD22GYNqxmMMoGYSF2FWfMq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDFqaoeK1fTvuONR6bircA3tULKMQedo8cvB0gpnc%2FGjSLAuhdzFUIwvjmALYcGJdfqgPqZD2U%2F2UYTUsBVAot152MjkkJTbQqmhWPg4t%2F%2BqiZGUMXQu8Ya9xY8D3%2FVgIi7aOLCi%2B4Kz6tkJZYjhUqsqZwln06fr%2FSu0I6TLHzNKZYvQ5biLEuYErfUTrZgwjIDTrB7Xc%2F5vtkSRRaA5G1pkCm3l291pPgD8FIv7YTAjY9b7yuL9%2BvDoxasg7cHAgWwJGVk828GeP%2FgU8kxk449bAZpGKXt095TJ72O6UTu2c8ou6iNc2mf2W%2Fe4SA9oG4CpTuE6%2B%2FX85wYeRZzqj8TwqQytLXZiBCfJwNj7NXU360UJcgKyQzEUxFqwfguuOwSgxTOrwHKDIX7x%2B7AvYn2%2BYTy%2FLk7ty96k9tinUK5yV6t2MBeL1KT8zi96Th9yCZAW8%2FlcL3wrGq79ZDh9HEGIK6690a2FWwQuBiJt7fUTOCBTHOaj92Slda9XUvbJGswZUzzqVCtF1brPfUC0vOUb2WTV3vH7cMtzRou%2BV3LwqgmyCvWrLAzEy0Z%2BoWKKf0Rt3M5Y11ts0UCR5MfC7jEdLjoO4fo5HEG1BqXni3WYGq0Vyi2wA%2FEMF7%2FZh3Lpr0gw3VYmIttT6D1kkMNuuxMkGOqUBLzi%2FC4F4EnCliOOq%2Byz05T1pRq%2F36wnKcbBFShOdx1BjDZwgv7FvXIOUO9xxwHxUzDHuNwBonJk0rZd9%2BhvTNbmDD9s%2BSR4g2D%2BxKLn7pdw97GJp9Zmve%2FMuOuY8sSvykx3EsQzzzqWkbdzgcDpEJkKmzYkN5gFnpBIYmXgMpTCAea5qcNIRTr6N%2BtgG2gdVuNVkBSduvmsSdCkkUQYahzPH8BUP&X-Amz-Signature=1832939dc36297e0c39c6f0988f922f003dbf067fc5aec6c2b6f9bb0e57abc48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

