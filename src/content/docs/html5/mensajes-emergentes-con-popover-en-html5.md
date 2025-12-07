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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWS2PNN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T121321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBtiQBG6q6PWuQPkMI6r7SuhHalN9MJr%2FEI29XIJPOT4AiB9Z01x8AWY%2BpHC6nXjJIzYykm3nAHf3C8i%2Fznaq5RW%2FCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOeyvViym%2FPhslli3KtwDOR0Zc8pRzm3aC8%2Bmku64Wxt5XkZP9imiggm8HVI5hsnn8aH6Pg3XGLRSlwvV9Teh%2FS2lfSwUqBGqMwcvNYvgF61k9Dqrxbw7KxgoJeMWB%2BFM%2Baw1aP%2F0kXvPjfRchb6yz9Oolc7v3JMWnM%2F%2BHuFEkMCr%2BHbP0HTFzqbA4F5jUFv9bUe8ZnGwEuIJwpczFzLER7DmKcwX5sOcDPcxmQ8ePtj1F5aMF1SKuekeJTiqoc2hf95nqER%2FBqRjRY3JL8h4NuNs2bJXPAhKNbfrjhKpqHNvcibOmtdp1Eu16yB2FKQZkM0cnjS2eMzDeDrf87gy1GIdrehph9VbGa08I5gMBTDZAj4Wmq1NCG0aY2aEHl7ADMNb3WCL5PhTrMDuy0v7HPDtE%2FNro3WPU7hwHhLIyjlT8C2N0OGJXoIGr6drWaHp2eQbeDC%2BWvbQNteRaaaDEN0odVNZKAZheb3fY%2Ft7IWTvsT95jr%2BPvHOiZFfCdtxCYZiVf6b49SigmZthUfOVcz%2Fb5yo4UAQbabkcOFZJYBH11f8uAqfqzqqD2gIq3dZ0RJhxAVp3GcPNa%2BOW14Jpv9ajOfUVUVDTITR8NsY4lUwPHhV58PwR6c4J5E0Po0u%2BQEYtoWKP12X5og4wuJrVyQY6pgFoFuvHOOA3KpQlDm5bBdpVLTC5C7lDF7nz4%2ByNqmlv%2FoIpV52jInkpLnbW2tFtWWBQeY19O8o8T3o8r5mw05vxda4NUz16HfzR9LatLUQTopPnv5X%2BiDpIKU%2FRyMcOqJkZW4TBvYZP2i5C5xfJsQqarC%2BbKKp35jEdQz1SS8czcO1%2FYpbYGRUuX16N%2FDU1F9qtrMxzFPWMc8RVjQdt4IRS7du5xrcl&X-Amz-Signature=91c0f0bb6637a00ab23cc67c58deae2d15d317e61aa7e7b701fdc4f4166ec2cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCZJKWXK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T121321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICX%2BBVJH3DCMehTpjeOSwcNXNvCPG8fWO6mZbdNVW%2F2RAiEAqdcAsc48Ki%2FZX6XAkg6xhoBj94X3N2d135NWaPMCSoAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrv%2FnHDIK8YRfDYEircAwNfY1TQMkA2ed5jIN4jx2ptj%2FG1Ej4l0hOtaQEpT0I%2BjVVQpJ4DDuWdMxxoRhucJzY2Ah%2BeYObmLbt5td8NREF%2BTLXPos32GwN4wNX3hfvPq11XSp3XCXEPf2gDykJkX6xHpTyW3FTdA1YdpKwE69G6R%2F9CcVLFPBDW5TzL2yG%2FoMoDdCqf1mZp7F8d2ZX9RuMZGYtR2oi8dXKGkfjUH7jLo%2F%2Bwcr7LxRfwLAmi9hPjMEOz7J2U7jDwJbYPzAhMD3JncgIAYM7iePyz8YCJcDXSRvWpuLnWdfw%2FGc1nrH5E2VmprDDB4%2FICYhi3%2FnHOE3Zu4w45Uf46YVzOrfmIYYLcQx8O7kdT6%2Fyx84Ox%2FgGJsGcCwMFBK8BaJmoqr%2FzgQolCiF7qIlhcL950knZ2eAbBTTS3CYobCQOa0x5VWCbh0KPhrTgWQMfewyKPivWNN4jKx2LhnvRUuAQhO%2Fsns4icLv2%2BQgCniCWdlCj4IADyJgBfwD3NFTsG3Ro40l6HhBDP5Qa3DdIqC1luqNpGwohg7LSBfMN8vZORlClo6a%2FMZVBXC9k%2FlCVPsiWENqVJdcBGNvQ%2B6V1iL8%2FcjlR3GEurwosiCTK3xwqlJF0GYjmT7CISMUApbtPKRWE8MMeZ1ckGOqUBITIAPWVi79Byky4v%2Bzs7oVvlrHgbGDugcRUKFJ%2F06faywUhpO%2BJTq%2FbIPHIBklCI8VYRVECn9XWSX%2BP17L8dAfso9FyAu27wPlIWz8n0MFIi23AViDd5oyDgVlvFdw2yNaO5Wvbvg5JbN%2F6RAYHKgSquEKyHk9j%2FccAFe0QdHNg2o9cGS2VAfGaFxKaWUWr5kXem%2BXe1W0BfYwj5pluAvzW9G7iM&X-Amz-Signature=bbaca0a4f70be7db76f51237d1f025f430a10596565d89557cc6b4b201d68e12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

