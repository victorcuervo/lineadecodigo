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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EQWQ5FB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T122332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZru5HhrtxtBRLewq%2BDNYefvSWpAAAO1Q4neup4%2Bw9nAiEA2PZJ7YF16ONN3IIjeJ9r76j6iL7ZMPh2tX8KyF%2B11I8qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCW0GN%2Fy9E3%2F1O%2FVTCrcA6%2F7ucc9qb9nvZeTs7awdbnPM8ZyRfFUrxVdIxD3wh9pS8UWmF2Fv6GR380I4KOs0aVOSQ82kl7M83UeySkz7J3IBvbJ6MC0t%2BhUsV9DOiPE%2BKuBxA%2Bp635uwMf3cia3Z3%2BhZJwH3YE1BWKPsYa98VPoI36FlroCW%2FmLMUaHNvrKW1opw%2FvFZ5nMsQLcxty0jk6OQpzs0s7LkT9rrzoSRwTo38nj%2BzO8c9sebSUjttXe%2FbZKxp6jLvUvvA08lwBMI6xF0ZZFUa4c4mViZ7JmlxscZ12UbCqHurRz4qJhXJBV%2FwQ02YPbpJfOhsL9ZUB7o5BOzvE9RWAI0w16t5w%2BnjiL4Tf5WqE2A2z%2BBuzWYYiq11SamgtQ%2FGK%2FEs9WtczyDKo%2FKfVEfkYwstyiQB4Lz0UaEroN64LG2S7%2BxyPTv5S5kObcGrPDbiCQ39%2FJggzeNCwLJjNLF9EW%2FQ8626fEMmNHYj%2Fkm1xs7GpLa5%2F71oGZZ89%2FDM5xG7IfG4ofbIdodJTlRc9hy5lT6alBui9Diybb3dT7Z9R8wZ%2FdYhMACAxkJs6ho0w79tVe0BD%2FAl5VkQSk8XFUrt%2FjnM9oPlHbxy1lAviT0Hgm6%2FC0fxY4UxJWHjUpX5yrlZ0e6qcDMKbz2skGOqUBXiIp%2FW8%2BhojUHAsmaIYWK3nQrS3Vpsq9H5mM4Wry%2B%2BAAH5giRBOafFRuBWExiHfc%2F19k%2FuL36FfvYEEmmmEZ%2FnvR6zdIRMwzXjrYEg8nD8ujUaEJamelauJzjUlA9ysUrYRcxZ6iV%2B8Yx6dQgvCGse1xPFZ14h0MMVpgDnwvpOXD51AvZXdVuz4gQpzJry%2FMhexdVk0vaJXoNjgph5mAA%2FmSgKLc&X-Amz-Signature=e0a3b99c696eca3e5e2265e4655d439c7d6b6ba95c2fd0655e170b487858c3f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7CWBNYR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T122332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6zpEdWoD4dsWHl%2FLNrnzou2Ry6BxxpdjTHOy5eaV0RwIgD7pIXe80n5hr1JzJvv5JKCONlceE95NPcppIE%2BErRrcqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrVptfZR5jtT7XDPircA8qI3c42%2BUFg%2BHx9jMg3Q5YZ%2Bxx8MjreTOH%2FYjzE1HPXsaqn1wWftQRUZWdbAUw4gXUdMLDl5o8J1AQTublyEeGL5DGNExKkvdm9gYuN1fKA0HUiQ%2B399FEJ7xXzIoFONYgxWw%2FwIt29viPzfPztoxpJ8Jgvbcf4U%2FU4T9%2BHclkUG8vtHI6oE3QyrWdCFZv8j%2BjJmhHkvhG3xSF%2FZ%2FumIdAnyftNdj0RuIlnfiBLDK4SL9Pw0GFrEaNStJg4j4q35nxV07CX%2F2MKDjQMmSu%2FKsv74u89v3LqdCw3kDY%2B%2BASGUSwTzVEws5qXMxbTG4fYZlpSq%2FnpkqsJ0Bu1THEsT%2BnTi%2BLgedTCCUxPg2d1O%2Fr6fNJZhUxQWCthWgnEi%2BCKyZs1E3RnYgzLeWvkutW48yzpvgpv6vphB%2F0o6pMx%2BIiYcu2avm4jxmt9fGco0nncG7k5yl8iu%2F4qep%2BUZzdOXf5ixDXETouRCOCXbSzfNNG5hKINh6XlAyXWuvIFqCfbJJdOaNFpsdd1mEVs%2B2kN3Y4lpcQafxnGaq3Jfl6JdZzjjKpzcJOeZXPyEw2dEApGMYycOuNwO%2Fn8hTrvZDLkYx4uqmJ1pe8pCvrDIvutmChbYEbETNzMSqx6tOp1MInz2skGOqUBPZK6dequ8hYdAngAj%2BBAQobtDTTteE4J1n204hNKcFPdwSwagUyarmZP9XTmsM2BDaY%2FdzPGhSEs8LDYsUL2CUMtPs6bJs55N50ppaH3pX6GGDqapPud6NhOaP6qLkiRAqqIBgLqIbwUBSTuUfIsnicXb06y6zXL2iDegVE3U80VJPO%2FzDtzaN7ue2N8wRHWfZ77co4LhVq2bvaRMo66bZujhhER&X-Amz-Signature=c18ca824f2aeecfbe504a8faa2b717bcc441445e69a10d4f155a63a27b0ed88e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

