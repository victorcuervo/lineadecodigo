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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466266JEBBH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRScZ1DP2S225gXmU4dNz%2BMRr03Vk6CUtGeTj5phArggIhAO0teCMX%2FfHk1dSSCHw%2FweauRrUu8zP8HGkqkYZaIFPZKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9SjCkh7vsSqtM3m4q3AMduzmeVnQgyImlBPIq369CXcSMWBDd1Dmx6SDjFy5R6aWiw4%2FDoIrMhWpjvQZs%2Fpwzgfd2uynGgM%2FHpsq%2Fhk9NtVSPfJ%2FGaoME3%2BC3NrNGpA%2FhBpmKWxW1KPqg4GW4zXnMrx7bq6Kmvls7J2jG1NVuLGKioMfPFrpb0IU43XoDHzhLzV9tp71%2Fq6b%2F8KNU4Lhes6yzC1T4VxkbdZCQPHeB4NOoVethpBRCn0OCZMzqVa3GZbBuQcW%2BUtSq5bilSD367S86i%2Bfkk7XEOk7N5%2FmDYWDMO5EQYJWpA8cR7%2FGkG2nlofNDWH0oLskdhC28JiGj3CBR5QyhV5je44cJFECi%2FEvJu%2BE1DFxMdbdlFhLljwcOeZaBjpkF6IsUG8i4kbZK%2FYy42io3H6AYdvzo1zsl8MyvwC%2BlkFLV0NlwfQ0DgZcVTOPeeii88T%2BZMzJmdh6PdXyJPSEwxSsrQocFt5CLQy6kljBkk8OlA%2F1dl2TPp3mvGxtsstVwdI8hKU%2B7wGUybdmDMN7qj5o4cXgMxzw7ZGnMwHTaU3FwhlHAIBL2%2BAx85wAoRtTaklfg78HCR7MG4TYfu0EJIpxTna8DqByMBme6IkR4mKXBDTjH1aZqiFeXYue5cGZ6%2FC3T6TD8z9nJBjqkAY61CT2XpkHaVxnk1iX4Zp2hIM1hmb2HLHfY4Ih3RAq%2FDy3yya9oWFdSV5hSKdpgRx%2FksXQNEOCXuYrlde2o4LKnL7xJYP1FY5C3iDr0HRjJA7RLJCqVvORIBvvF0u2YaLw4JGP%2BMdU%2BamDEIH%2FflHajRM8%2BIq8eG7Yxo0tyB7MKQn76m6tGsboExDwFivX0cAuMQGaJhnwnVujQeFL%2FOpH%2F0iiu&X-Amz-Signature=07e6f62261679be9aac8c7fbce3849fbed57bbee0e3fe9d33fb161e9fc20bc58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2EADXGE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEh9vGjk0wZheKK7kTkd6TUXbQpRWewJKUPBECNR%2BCAeAiB93k36edCDiPr3paNWn3dN6CZV1jjeeN7l3zgrCxZEYiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe5bh3ldoCCfyQDVdKtwDnKUXHsc%2Fggukf9i4rUkgHsjbLWFnIrfuzMFlUV54RYE4i53eFHvpsGe2HdQUEWRL1opd6cClBc4vypAIo4llPP2dipbvVm%2BCp8IFMirBPXPtQS6x1i4ZrZxZDBLLKs%2Fheyrcyj0P6EDBRbRiO6UJcs1alP5HD%2BpeFaONwmM8ANboBHZ%2BW5HJGBsVmiOqvbCMW%2Fc0B626Hb%2Fns49Os%2FghSsz2ukRUKg9PhNR02XyekedMpKHAILnxiERzTVuLQDUzJDNNt4nR526F%2Fm1kxoFpFKiqiw%2F2eM6pCMgrChUp%2B4%2BFwNNj4IutEVOb%2B7BbJwikPzK6wh7D7OYm9QFlfKkcrzegdzEMX1ObcBGLgDgGLVqAQhdT3wOOUQIJsJ6nQZTs1buGmKB%2FNHb9I%2Fqw2GcPG7pFloQ0sHMh99BM0h9bYo6%2FhGZ1AvN5UX9weQrd6FxxE%2FqGQPZ0333P8stMTEkqtdxKkEuCUgO67%2FKe4BL515GTDtD4xvObZKH9%2BuVzOeCgB%2FBArKRyPYkBTqKwe%2B2Gqgsk1qW1EOa2IpV%2BGNePE50kZJ9ho5%2FCwpAb5TZvYcRv50D86OMjuru0VK61vReJkbz1dGa6zzDrt77dANQh%2FldZCxLTNtqe%2Fwszk6Mw68%2FZyQY6pgEKUhcNyDZKCEetiu0u57engUY%2BZeCWPyPRWG%2BdZ0%2FHlR2x71SyRlouf5pXR2sA%2FWsw5Zi8XurwVEBF8Q%2FDdZlJ7q1qtPobnSb6oA4%2BJVFFwZybAOO%2FvuOMRTucDQpUWdk20Y5H%2BO8D029FtuZYz67hLwGwuEVs1uypGZ%2BYlLMAWnOMRjV%2F5kSqF8BGQgSq3%2BPACyoiGq18sEJ5KcADxkviQSzDh7qY&X-Amz-Signature=4e598f186abe017ecc7eedf730d5faafee84063cf3fa5eb635ef5a8e2475bebd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

