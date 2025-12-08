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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTCAAK4O%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1Ergo5OvR5Lh%2FdjVCB7IWWvfEtpzFG%2BVWretaG3etKwIhAJ%2Fld1FGTS9GfCogAG3iI3YVYpu2SJEqHOjZnN1UV6SIKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSHOq5ORej2ttmhmUq3ANlAHPIVt5cZoL%2FXbFyrdW%2FXzWOOG%2FQuLyD6QH3m5toiTQzjCN97u%2BWTKHZ%2BYAslWHQl0QdDOXmpvhWtinJSxpqjqZXEpfZrdtSuWw6VLhEzdxKiQzptAwBhq2%2Bo%2BPIYkfpdBVcU5iwSe12xsawxo%2BsIMQZN3L9vSeE5Ny1STpyqEIYX7v9oQdOBlCeg8OJy40%2Ba1Dyyz5ed%2FQDp8Fwz7kn75EvxBmUu0SvwEVSTrwl2YTUOa88oQfOgcj9cDQNwnmcVgG2E0SRpS7IGFNchI%2FZgV66QawNPU3zThv3%2FKTsXuK0b%2FKKUKR0iGByCNqEadP1Fz7OlmFb1Jo6GTVrmmRWkVmEESik6nbnjjOa7jlbBcr4tiDUurj5lsysQfsjthwErU2ck3Mg8i%2BedIGGYRGow5v02AnMtuvc6qwter48Ys9ZJV%2FzjKnWwxuAOWU6r0pcYioUOkTfBz%2F3BzAu%2B%2FN9FYIkgM3bXiWp5Qb1pw0hx99UmW0%2FmQTbcW3CaIKllsFbb7zI2%2FqcUNJsGIYOlMX5b9qE1mHiiYVivLB%2FUOcQQrUiCebYYV7s1CcUB4h6GbTVNtI9UyCZpj2jeshAlfWd467dM7hwDMQWB%2F8by1divtOfcOr6huCFlHW%2BhTCRw93JBjqkAS%2B3RZHJvJRv2VLpiCXgFR4Ydv0j9iwyDUZ%2FK8LhgpM%2FPV6C6erUPeIE%2FxAzYOj%2Fa0MvtMBytt3uGKXmFMtkMNX2MDIp3TlxNCH556R5hg7u1dDUMErS%2BZngSmgqEdRwK4ruk5mygucl3ZeLKz2UrTz%2FqtiGTCaNGakHOKLDHIupxYhFFUz0%2F2l7VYi50PZo0T2aWJiB3k7AkXdp4BFRrNVY3EAV&X-Amz-Signature=17bea6840c653a19342e516fc2ed76644b2b6355353b1d2c9fd0074341333ad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MSEVPWZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoAtQ32%2BBpkhJwZ6Ep1sSPqmsHaOyJ%2Fs%2FaqYx9opSskgIgeKcPAXz5Zhf2ttZXgYQnXkQJDgdZa%2Fa7nGGQIhy%2B6M0qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG97p31BIxoOJnZZzircA1dgcd6M7dPKI30C5r1kypsDJgy5U0W93RDKH%2BVfsEfpweBN2IDC3%2F%2F8%2FxROa777pMkxZ6HNbLGT1PcekhsRpZIU5TNcfRyNTY80u9KmDoRknWSKOauhNNJd9%2B%2FtMiUjPpJAipVhsc6lcRrxJo%2B18t9RiBRw%2FTfABhii2gUE8iIgKkC7EO%2Fpit%2BNfjO5VZm3L%2FiHJOJ6ggviUGPjJV96aJlE2cJ3KX%2BPR7Kbds6MISPbV%2BUkBKSkXl3Eyf1gCPxtzkjizjAwXwfDXAZUzi%2BxhcZXcsUrCJWasrjuTWAUCCwN5HxPfCnf6jcZF%2FNVKe2%2BtrO78TSOeKgGcKHyihP%2BuM9yhnpUseoP%2BQ6YnZhu2Zy2BblAPpalY%2Fvp4dwmflFRLao927CfxFVQlo%2Bdza9FNJQDapD9bFGG5j8AhcyaVkeyLuPqtK5%2BL61jRZj2nRDJSUqoz8EKpeiip9WDtSpRFKbeeS0pDgZhFqrNRQGfPRMA8EGX%2Bs3bzLCGRXSBI9Y2g1KDcI7l5oCfOQPHASoekatspcWMp3f5s0nv2zt2ioqPenAcoquuMR48FxCvWi9lvcuE1mNTc0YofBp7ncmsLzjhxiSr2Qn2wDoZK%2BtUgDWEU%2BEbRlgqHdHGS0qhMJLD3ckGOqUB4TPxOrtx2%2FVvhrviLPTSa%2BFKStN3xSRxCzNVIzzSKhF6W0TCDkEWxmtLl8Y%2BNfs8zNJKPrLqqrYPRbYngvg0H8IdD9i%2FGjbwez2ZfRLIRHj%2FVyyeg7yOy7Qg%2FDwzOWl98%2BoKaNwNYBJ17Fssuc1rBlZZlpKA1b2R83Q6ez63vTlkpJWtw%2FQhE5K6ymOXv3E4wzoq%2FuNpGaPG0Z1LRTgI53%2FOnrpF&X-Amz-Signature=1464f76dcc0ae56a2b64c02d307f7b16a1905b85b1858c82ef354b363f13d25b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

