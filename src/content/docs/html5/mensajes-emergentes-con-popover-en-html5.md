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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QG65GNA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T084322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE1p3PssXaERovAq8KS84%2BJnUuuJVbJuHahFIKqlEf8gIgXVeo8POhZMYqRAawlcGpQgPEmf4WuUc%2FY5j6phXefj0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGwBj3eAuJvIkt0uFSrcA%2BZbkdrzUui11lgG6BIOEfuY2LQn2aH1Op6el1pKVXG02dkmdfhg2CDyxTHISh%2BMFvlzm8fQJcvGNsn9Wbb3PrVuMh%2FgQrj%2FCdFGc8UHWJelAgHCgQISVgQhRkG2yXbRm8vasR41B2mFje6Dq%2Bl%2FyISbkUat8%2Fxp%2F%2F3yrhU09KtUdRPdLZIpIFE8HAN0dTAeNNivqpVi4wXGBYcDAWE4ktQDR7CjJnGNs1G5kshtA%2FXzUee52CSQxcqBMmNKpVVLFIU4JzEqJYtLPKFD2E25UhxXerYZhfMQltYVgc5G20BG04vjbWWx%2BEFLx8%2F1eRORehuP%2F%2FOPbVG5ElS%2FSSkV4BE3GPqI9tggkW1OqF2vZxMir9EMQjaHZocNjJ7IZLugFipKk3BBwOV6j15ihPZ7k2bT51nev%2FwyjB0BoN2LbSdG6aoWWy%2BewyYc5Z0WXbMR5x7Si65j%2FwLHYIXcESiMeK55VeeehLstxmoYzkq%2Fl28zzN7sOFsvfMsVsdc15JVYNdWot%2B3A1cEF4cQ88bFGcJlhNRdMSuVn%2FF%2FDFkqzBMChbSApFGrsNdkrH1zlo7jOT1QtC41YmxSKd%2B3n8eGeuCHV%2BVPYv4dCoyRgQrDM9f99MWv4Ip1m9sBcO%2FTQMPmtyckGOqUBmvOprf8rzaMJBgmUr84gOazx1o%2BwhiGRuJ3noRz12GYn9%2Bdxry4icW4cstH41bpEFPCfBP5wPho7gZRY%2FedtXB%2BmEsw3GUE2qEEOQsGF3IJDr7AlXimSw6ysu%2Bj5t34YTi04dYz3DCsF3WaqjUDqbi35Jjm8tLOQfviYTDpBnT0UjKJfJMkyDlPe0wSxDAOgQ4x9gmnyJvcd85Ttq091PpPNH9Qx&X-Amz-Signature=ec27a4e8564a1ae0f81ddab7fc9407ac53478211a958743dfee80c8f91eb1ee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NIU2VFK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T084322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTTFGhbLxiMg2w7q%2Fn511vy4XMB%2BzfXRDBhBD53KT19AIgQ%2BKQnhjeBYfY4Fqx2XzxofEqcJYB1NPnhF%2FtjPe2spcq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMXlhhTAaeHCJVk2HSrcA974CdqG%2BFuk8c4mH8ot9yIzqc%2B4tOxuKaJ6ZU9PLZFpd1kdI%2BTpFZuJe3yqshGs914Jno1P%2Bu7RVSn87jYntjF8HjjPx%2BHsRNw%2FiDflNOKRA%2BnPybKqW1%2FPgsq6WXvYhwPNbJWnvbvVMiM1niAPYBEXQ4faoCAF%2Bd627JZNcPZSVLrNxTI44oXlKd65bvLGrDVGcCA0gdJO9ACRmtV5%2FC4sTTOiolgbKtNx9O29ciFMa5dwrY1eABEIkH0%2BQDzBxQNGkXkb%2BY%2FTTG20rXZLL%2FskRbpHx3XQZcwixQGg3a8%2BUOYmKjMVApJyh%2FiUzeRb1BrsQTf62yKQGEJzRxLE3Niz11uq7t3xl%2FLwSEh356zjT7wk1xVyLL991tPZPhXfIc3xqRUt1f1LcK1JyWxgMltnCM9m8Mmo9So0PbLS64tdKH%2FSdrNRlci0Bi18QoUSv%2Bf1%2BMAGtaIMMVakeyMd81HSbGuF88PhB4Wg0xKNMpuzjav4SKXYxY5r%2BkiHhnNttbgFVquGbBivM4SyQcdGURzMjDa2XcWtl1Y%2B8HPNCsV9pcCqG65IHwNbSp0z9L3ax1CJw2FxAt02M42xco1WX3VJ%2FWV%2BEtgvxTgLvf%2F2Z30l0VTVP5exSIiZPn1GMPmtyckGOqUBrNamfRsVcBBUTvrgv56mIR7aFtMkZQqaCIeQQgtdwyOT449lWUN7Zo7fuoufsBcxfEQ%2BDWohcVfDuxMVdjuPyjUHrtZH4q5g3tVMpXxHijxLB08oIplq%2Fs6TGoJO1FEEdMeyTktUK4ifflW3HC2UjvYBWY%2Bdwo9BRc%2FCXnrQYvA7ewJOg0FA7t17zGLRv%2BXaoCj1kvcSyrmrxWiQQEe%2B2rFWnluP&X-Amz-Signature=755c7a54e15f6310b7bbf80cf90d806e226ecd86b14dc06074481e4cd8b289ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

