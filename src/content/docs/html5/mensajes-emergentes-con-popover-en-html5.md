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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y5VKGVY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD3LaNcbmBgLYlCDWgDSD2xj8%2BLzs4JhndpI5mzu8OnQAIgFQR47xhc6ESqx344gBkCYxULUeKpKgaPBW5fMnEPhEkq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDPuPwhLEA%2BoPXRduxCrcA5QLOZ6tpWLu1ItTi%2FjQpdLKHZoRb0P0%2FRZqNAiz1nx0PM9bhunbXGe1pF3EHjtzSHurmYfpHLY%2BF37VLfN5WQhvsgFdpcWz1lC9jBsqOE94LHIhZ0no1PWplMM46PHLeJb6DBjlj0UkncV6NsKOX8VwXrLjmhx6HpVjOhhYxDxSzQ%2FNEllDc7eMiJvAb6xIvXdHpXarUs4xz2CtMYYqDru5sZO1J85ekOcuRUJ260BjEASZrc7%2Fm8IgWwJoXSmA7xWEscP7NYAgSFfF0axFUEftf%2FF8FTE2CwciZ9YgcAiaolwT1R%2FzIeVcFDgFx7hob8Hogxra19D2ZqGTH4gsMtXF3aq55yUrfU0qJH6WCMdh8F%2FsdxmgxA%2ByKzXvdK2KuBfGXeEXyYuspuFyic3FhkrA5BB9A8BHH0ORKPy4VfZdruiG0bnWxQnUWcMiL%2FWbOqRz%2BrTXm9gHIgS8WVc3xYMFcFXaMMpkEUTh5G8u1DXBRxFZdUj8yfK2pIn59bJsYABSUL9tjKCAbgol5EFidMpIhZ069R22BwId%2FwEwnuNZePmRG9RKYHUB%2BRJdqUhDtipkD3MM1bmjr5Iy%2F%2FCkqlaO1ZiWqXE8mi1UEh4RPScSLLsfHS2KTQB1tMz6MM%2BVw8kGOqUBWCUN5Mmnn1dp7CEDd6ObI1W0GPqmRL1YLsV9dRCz2FMvHMNGKdb3UOHfyBWwesdg8242ifUVqsHPrnUXBCNR2rpZvGhxf6nQZLiEy8qh0cN4555n86fBW6pxBxFYqAk0BjaambbZNPpIHCIcd15rpN6tr1iBA0QjqQEt87QVx3jqaWuoR8lvFTYhQqRldLnxPB38h58ULpeseLQCpZJkMbIfcgMN&X-Amz-Signature=757724fde6495b29907dd7ba79a9cdbd0d8c6ff1b7695300dcee0e2ba4acb836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FQGA7NF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIEB%2F66NY2zlUCxxRkGJprzrymZxFwczIxMDAf%2BFBlspdAiEAuh2ZQL4Qr9i0D0Qob00jLbsnSJ8kCg63pRRO7mo%2B1toq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAVYOV%2FWeAmjMaDwCSrcA6J79VEzNq5EKlEfRQqp1q%2BRYCuihkXALyCbAyL9A8Z%2FPp9Iakppkx2dgGBv%2ByGBVhbERDffNea3ITGvBe3u1KeHFSlg%2FqHrRbd8S4zFyN%2FM0z0dii3BA%2FHTAI%2BMpuiaf0PjONDkeh%2F3SemeyD4bwqw2RlwnXlZR5JRoXNcXpKoDwbT%2Fc5uD%2BF%2FFFBhCCl8LeJBR9aHAmOfGYQCjfgDZbfCdXYDUBVYPnvOUviV0ToiUP295PORz9FlYJ0%2BKikrQXNxPoYCebbUC6JCPZCf6zCisdUf6qfSVhJ%2BjrSgUUSFaXIMV1Ydu4PVGvuHw3S9QaDwoBGaFIz1gQ2FE7X32%2FEvK03UnbCVHcNRph5Yl9i0kh3Bez%2FLj3hAtpyjjmStgokerT4eeKjoNpcvrptY9xAZrxOjlro0QMnbGhrKKp%2BHqKASbHGRPONVW2k2P5KieaNuxmjMgSmu14fhc1aAR%2BBimy161H3Ql7KwH9lx4kyPB3jsoq6v9ySbWRZxks06mCBoEqHyrAujvPCVjo2AQdbi4uy4MjO%2BdaevGAYr7PZE2Q%2FaJGh7R0UH4K9qRrlUr2VTHnfcehnn4x9WSuHlWAGc9gl%2BTGTlqYzKnr300RIASy825ZyeAQgvipO5JMJOVw8kGOqUBsoZlzsNRyk7nI2jOJX5ug4kFM%2FGampaWvS0It9lMgU8%2Fx%2F0ZuWh4yN%2F16bbt4MOOCAuB3TAH7fbgVsGcfJbEmGODC%2BK%2F579cwFh%2FiuOJ6ze1KQ0cxLl2dRlIIvnoPKstEMC9%2B0v6j5DrkpVArF1rkW%2FhpI%2FJl%2B2Y2enACcjICra0GWgFuv%2BGM25HWKmzh8768pPQM010T0S99j%2BB9H6OUxZYZeHq&X-Amz-Signature=3806bfd189076ee45d92fb2bd7730447875bbf45f7977e944d7f3ae25807b187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

