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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HIZKCXC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T070434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCW6lbEgz10KcrhJGqdnKeOj%2BtS4XYiUbF1FzB%2B20CGhQIhAJmjpz8T8iFDPtIdLIiqIgwbgNUu%2BikzGpTpTv%2BvDW2pKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGUJ1AMsqKSxDLGf4q3AM4jOr%2Bn%2FtPwcWtaBeiQR7%2FYxc%2Bu7%2FZLJNRBRzP1rx9WxNKCJ2sz9R5z4%2BijkWtFA%2BlZBtBcibq0o%2FBMd2nA1NGV32JTNhxXwOvQS%2FXsyKPMkWPx%2BrwMfYwnBxFzuwFKsv3W3vkpRKcyvngQryJJJlVSy4Zz3%2BggyrfSePpXAwS8eGn2YpBSycDEfL8XOB0Lbz3k%2BZ9olq%2BarvLCbnLOFGculUKfAFuwaJigavrsH3I%2BUfDOTV5zAG%2FHOyiyFIT9r1ZMbhApNDYKNI0bkeK76lZy%2BMWUBS0wQ7T4MHaFVMnu2hjsilLOYd72Y8yIAoFGJB5Wm4mp9zaQBzufRhyGUAI933R9kMYqtDwMQ6mOl3huJw8XyvysswMfJsSn0gY78qF9EB%2BXO8cp0kuKTI7xPOdDQp6aQcB4LcyUxy4eUlxHtfCB9oJIG%2BwDHaxI0vDuCl9vEOzWlbrGDkTOgEx%2FOCUMaVP3q%2F0g9yKJVM10hr1UiCP7Ck1UdEsCkH7%2BumavYp4qjpiNi5O%2FwKdtXk5tyuI2qK%2Fj0Jl16DBZp%2BK6ZWVCTwRMMlDfp%2BxgZf%2FOxVA3qZN8n78McayahFAOkddgudojTZwDKXHz4MDgpYu7BG6uI2hQQEgRqNA%2FUlSpDCl7dnJBjqkAd5rMTX2snn%2Ba0KSor09NpvN5QOL3LY7PyE0yO9MHIKUtAfdoREdHGwPRHsUG6cZVnloEPxDDLU1CETBa%2BhvaB2DOZKIk0RWHoEXSiWLtKQ338AoaIymRv2T19fQhDzw6RFp6jmzvqN4I6bfUY82a9gDQ6id8AXxZFAZ0%2B5%2BNbZqXQY7%2ByG%2B8fUaiwfQzXYNhzvwrBFkXvaG7NdZ8fw%2BhqTNap2D&X-Amz-Signature=65dba59f4764da9e009d6b90e96cdfbf9419e6e4951f2a8b1fb27989c5d3606d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666424IPDO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T070433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FA%2FZhFWM6aDgEAa2badaH0bg8S2z0OuKmDFpMKp26bwIhAIHnqcFMtAWRC4fdrl3swXRDHbVt%2Fq7YL1A0YCzulHFDKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiCq3B%2BxEdV0uCxSEq3AMhPYUKCM85ApoBUeEX12Mvkthxr6xPtzhl2%2FhfAX6VkicWnHPx%2BuXZ2UApsz6RFVe2gO4JJNBVjYNpYlLy7NOu3yOk6UuzYOuluy0qOyIIyyKAj3EicRBv8e6giJ3wzYoj0ce6vgdi10jlz46OdUk51xIH2ZOU7i7JMinX6Qbda9%2FeM%2FO4jnyas0B5k9Nyyeg3h%2B8P8E88j%2BL%2FAVtf5okTeCCHcufetCSA2jzQoB8q2jZNjdL5hL7EYmE0riCJSUYRLaaS8B1wdkmfeEAbRr%2FmDUyaMGT3ztIqU7CxEBNbQ%2BbwvcRsWF8YjEviLu9%2B4YJ9A0%2BP1W%2BUgu6bv80p2vU3SRAsfA8B%2FpyPzhb98V%2FIcwH6Zt0Cz1GjiXHnofHG4nCBUVCVV3uxgWWZtQkESBImsLEuQvVN8yB5lqZKImuZAG6bW%2BzwdyG9qJ4C95qX7hZJXahi3e50AHTJN2JZhw9av5H2BKujqF4mcnEeGlN1QF43MiAEcMyaj9iKaGaYgICOGD995JMJDdNSEG4z2kGsNJTdedFqWVb0QuKieVgGRbDFT4YudF1sYuH9Ot9vUqFmdLhi5DexHcZEDMYDgzCpeaMwHX9aagJJgXPUSdxPNccpk7a6FUt%2Bz5DiPDCo7dnJBjqkAeR%2BgploBAj9MtpmXUKhPn1LDF%2BK3K9ieetZJMm0VWWKO2%2BiNvSNp7tjVnl1zfrRT9y8xe5b3HZFyQxJLiEhIjheF6CdNmBqZqvwVGk5WXxSL%2BgFzOoK26Yw97ld3PR13FaxkDwJReqRlqVbeR2CRcYhRPv5pNc%2F17rpxkC6oGnv00zms9IGCflSwpyHjBoHnHCA27RtCxPzw15oUxTMcc3NYLtU&X-Amz-Signature=73bff6c6e91da6e6c1a2e426318cf5807662f0a673afd9f0b14055945a731483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

