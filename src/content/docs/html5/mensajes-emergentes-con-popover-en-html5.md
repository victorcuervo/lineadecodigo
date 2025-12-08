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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVI6IGEZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T224944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaUA6I0AckaiS6wg3dRnCBATdlVN%2B1K8L8LHVU5a151AiASulTHLykNnDJvrL7tRFHEXpYpxgNuVo%2FQwJ8MAh0%2FKCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5cS9agY4X8c%2Fa2wOKtwDG0k%2BguufHlQAl7PWHxU968%2FmQDO7aIkbNB49QwoWptarRNPZjPpQyH0DUg0RzedohahYF5EG1E%2FWAd56cNimTXwYCeJ2LV%2FgPI%2FGfQNECRUg9vrz%2FIFECjriv1ZwNMEeBluUfA04BcLzRtq4iVDLhdE%2FhzHYb3O%2BDNWOfEYRyGcdMzEUueU5AMEvPs8wpOSwbQBa%2FJhdRlKEKua95ESBjDXnVtgIXLrANujmY9oBRe9Or4QIItGS5yghHCora0Ubp7q1p7t%2BzqbRKpYAUM869qEGrAT%2Btesp2KXI6f74T78q5YWsPgwhHELBbmZdR8ebQtjhXeAGnXeMELbderEbZdor0ifcL59uyjgt2WiZsCtSoHtPfeMenIdtGkdo5BhzOpKihEsB9NW0iQShuCyyWsjRh3j3EQLOGa3k3WWrdvjsCf%2BQLUkWkl%2F2EblLdqGUQWMjYpkGPUU7wyEfvE8cWyiAUf%2Bb4Y%2ByMTMpOQDCwCeQ%2BdkzIbQDqMbF4FMqQK7Yz2DUfYyhbGR5dIwPOPulguyvDU%2BjmpErTX%2BZPL%2BMkCjCi2m%2BYEWyihI2QOFLZcp%2FT4xGJNlxnQSeR1%2BfECxLC9VwRQ%2FRHKoYzZ734xaMWmZBYkgegmgojseurAMwv6HdyQY6pgHSIgxd7Ro6QNn%2FKUzbBfEg7vSAGmkOsAfGlYhc%2Bno964Qc%2Bj%2F6PUfwIujtRvd0fA9R%2BgsWwdZYb4XWNSj6CrGyDYdOQ%2B2%2FNSqvZh4tgkytzGzhYqfbU5R9tSLLtsES%2FbhqU3YWUGL542ClXpJw%2F7KW5x%2B9lWxhVbMm8pgdnJs%2F%2Fyc7DMOK05XDH7cpxJVWHFHMcrUG%2BogFMFRmkHdD5ouqHfjXrDQz&X-Amz-Signature=cf70dba252476d4a68f4a851dbf6549c983bd5ead6d90fdc41df1ad036d3dea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LEUVV53%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T224944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDD%2BE2pVut2J%2BufKP7JTHlm1tYnHufMlWZWhZrYenG6WAiAKEjyhR5P3X2j2fu5zTZ50s1lCdGCJ6%2Ftkixa8nb6n8iqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSNms%2BtBFE6UqD8trKtwDXlngO6EwxZNvhIAjCfiIuIetzeifxpkBJA7jFZq9XAQ6bIXSc4rOlVH6nZf7br08Mb9NY70FwGAHEBCu37bSULt8KlFhYbYaWV8A9IGLDbBP8Ez7C4OF%2BSXdJydzOaYRjeK8ln%2BXedI4iZ0cWoKg%2BYhy3B0yJ9quK3b6DbJA9L0bEIHfaGwR1iN4WSFUI3yI4RF0CUqco1%2FQ1Mj%2Br%2BdIekiPoWc1kyaqiLKZTe5%2FnnWjuzMe4BJPF%2FzNGZSYGgyH%2BgCcp4ZlPRBWAErqLGlLpnEkbN%2FFH0T1Opf0l1SVM4MQqvqptBrfydtAJwlYJL4vDTmXN84WhtRf%2F2wVcamu14v78kW8ROgv0k3V%2F44EuGvvemiMTqEb6va275tDurTwFn1TDmbeQncu90aBhz5%2B1vEWYN9O1UwUf0Y3F7JuLpWYFiP6T73tBdmEimMFCNzFM%2FQodmdQw8MgoKmKnXa1D%2FAULWOUaVcVgPbFdYnp6rmbTX7m%2B0Aw7BkQWk1xOl5Du1HqVfgQFZvFc3RoZaVdxkTeeuWT4%2BT2RNEXkApLbP5NVsLs28FbMHbHj1F7XRSXbANBjJysk48NZQddOREmozXpfn2LF2XXlqDXFD3dyL6ldqvk8UGhNCALWuUwoqLdyQY6pgEMBwo6J47zb52j3TTHZ4aAx387OVw5vFAAtpGYYtIoQdZM%2FC2ZOMU%2Fe9eBHYmGv3VFn9mJMpDh0jjfrbjCjiCAYNhKDG2ZkUHES1gAq5yejG6OtosiJmz5hyw%2FeI8ffmjAn3YIKaLuD7fCc%2Fs9rdCJTZj8tnDR6FugOM9Du8bDwCHG%2FruiqzU2AE4nCccm3bGZ390rX7pXL8Z0UYtGEo56kPg%2FM9rI&X-Amz-Signature=5c6b10933bed0a857f58c59bec647c598f6742cfd71fd5c3138cbeadaf662b0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

