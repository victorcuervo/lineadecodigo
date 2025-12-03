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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJVXQZDN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCWWyTKfpEfr251K71rH6y1%2BtPdF48bHYW8A65YqG8kBgIhAP1NEPWC0KHN%2F8yHG1Ti4GrPkZQ06F7p%2B8uCYBABCidYKv8DCDgQABoMNjM3NDIzMTgzODA1IgwjbqrmERH0JxpNFSoq3AOeZop9ILcuBkE0UPsBFeogl7JbsM63fF4iWiIQw221MaPZS58DGz7Eeq4SROQVrZ5WUGvTtiStv6HY7ehYFUCe9xoc7kQRcTDIJnoj54dAQmzio%2FcQGPcl5tXURfvo302u46c%2Fst9SR81R4qj8iIc6m2U3kOwIRbadhJq5zbA2rQ1UCKf%2FgfRGoNCqJjMRtZx8yabc3AmOb5kLmX2dTZtHVzlZGlTkr0FutXhmDq5SQCGc3lfTWVF3NAnzvECKmmt9oINuruKvKU6%2FCcJfEUGD%2FR1VGNar%2Ba43styXjgSVCoCPro4qM32zYX8TkYadJNLS2EMTVRHIVtILlIVi3XHF3bZmMJkKfiPUQQQP5beJyxgA9oYzRv5g7W0C4wXw3fEmx0YWIomiFkS5WFyQBSzbCiG7IVUabGwLsuNmuZT9fZB61tB1H6dhdzEgFUkAg3VfTIbM1N0t%2BbnQODoahnNAzzMSqUjtuQyX6vW3iHWph808pVMDlx1Sj6MAOnOMgZocuSkmMXvvjak9XO%2Fq9vQgy%2BWYXHfIecoCFgyKYf36pZw6ABq3Ug9KtFrxA8wHe8lgGZa0Sary%2B4exDY1Ae2jKC8L%2FcpCERX%2FCxWcA2iN6bquWrkqiK0GjLMk7sDDM98LJBjqkAeVvD4d9a898d493Kfso0hdyA6ja9oMTsvcSd2AtT%2FjNor6VQPdSUxq1wG0ymzHOlLz5Yv0qtD2mtWkpaPb2DPSnLGBcngqe8jkSDGBY7xxsGJ1UZegsOs9YvhrHzD8N%2Bg8d7YfA8Xv6ZCkX3rVMaoxHDP5utdXWDsnT3EURf%2FeuaS7ujT%2Brj9ThMDgLFPd6t6SxZrkq9S3lirkrHucsJskEIlGc&X-Amz-Signature=7e1da1ddb4ae22a7f70f0bf7c9984a3e80af2a84351d304faed690cbb0e74059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD55RJZG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCLuS0xB0c%2FaKxw4UUdoNSWsj3WV2WN8IP%2BWoB%2Fqpc%2BXwIgR8xOSp72Qx4vQhlCw1GdaRvnspf%2Buf8AQN6IPEQtkwcq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDGyrjTjm1yTfdgeOqCrcA9ZxARWC5XaL%2F9f9oI6kr%2Bb%2Bp5grvC0IQT0XA%2B7xNbl25Zmg%2BJltFlg1oeKDOtDp2HEuBwI6YjifBerKCne%2FvcGX6%2BwscmrffhezwYoj%2BsMYvw8mCCMRijZvGu%2FEYkjOujXveDXcCljRU%2FOiAN5kHqRt1k258%2Fh%2B951nxbhEmpk6TizMBl%2Brf1WxjLJRDfDafw2EBOd583bvSq7rJAdRNQWDYq%2FSZVekyXNgF%2FF40xVVSyIFwVwJlt11UXisiN9m2Flxs8oTpm%2BEFNysEA0jKKS%2F%2FBGiq6qxrHc0Tfn8flcvo9QZM6PByA1BiZIwbYM7kOpifzazDPLTz2KGzymHFwc61%2B%2BJB4Z8vD8Lsi8tji0i2c8kdghfns09310s5EMh5N1bTlpQwyQvavn4QdBqcwNFXx4qaTIn7nzn1in9YPfZxGQhLJbEbhx8v4wm%2FSJYaNm2skYn07UtMWtFW%2BWYUIOYCy4eklqPFihi09KDk%2BDLhyQrbO6jSD5cBMtHfklYYjXW8IGzmiRzqrzSf17JoEaMQxDjNrApGZUAmv6Zl8OmABtdl1Rv%2B7rPRjC3QqgUD9v5zEzvENYtUBNkjt2TY9QYFQhYQRcQnL5g%2Bv%2BOl9NNC%2FvNEDnHXa%2FRNabZMNv3wskGOqUBTBXg8e12zJF0GebB772mWA%2BOkYgZz2iDuChBqaTH7V4ipP2uszUfHvfKKCRBPF7myP42oasY%2BZoRNWIYlkPSBDSpsjs%2BeDkvOqgoWUmhO64R7qRCITAUn%2BfDwrDlKpxjaOxX01SRmCXj7Sph8ymXxBXEVx5pCNd48yGKgyA0kb2DdVm78upG%2FG%2BlXsKWVi3LevNdhVA1Xd2105NZMBVuaSneknZ%2F&X-Amz-Signature=49dbcf98fac8df96fc4a4c02d4adacf05d969a13f308b525019b8854c4dffd50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

