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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJWNOTQH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T114218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQri4b0XyBtqbyj%2BEDWb5Oc2u6Ng1lmbFsaTSj5B%2FY9AiA7TUS0qy5SXbpOb9Baw8dG1dPAdBysxU7hIqfF5fP4yCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOl1nzye67R6U1hgYKtwDNoycTcHwI6XxEcrqjmkgKxdbFhBI%2BZudF8m5ihiGkpPXLQhGbs1MsidCsL9aBlsGCwe8cMQTg8lyhSNOAIF9ZJvhBRduBZL25WyOSTOt0pGXjBN8%2F04FClOOvh5XXS8TzeqxSpCUuXSsGwye3aqVi9lzOJs%2FEly%2F6NYfU3VGJKgrT15PfthYfBG%2Fzr5xZq%2B7y6Zu83fDq39Fy9OuY20MeD3upkN%2FbZZ4SP3QiFlj4IQRFMvlldWxFgC%2BrTfEnnpeSKhkvmrtO37eLVCBI6M3JocjEjPtwsSz6KcT3h88rZFAYxcTYdkVTyuZF8aSV9Dch8kBrYeRjFTEsfBDaxrp1eLI0%2FSnLTFW7mE8oijVpbVxSwCZ1vFEUzCR05UoBCl8V1ed6gBVT5wRq0rZEI%2BgiIrl6%2FR%2FY0J%2FyLYO2agTa2VC3vjhAQRDLfRQ%2BVMLNZUcPgpdO%2Fr5PvN5kmCsyjGKn8fTmGE2iDjie1wvn%2FQgiLQrHrI6ZYvglAH4BW1Dmxt8HBcQRJ3QfvqINgA%2BGKnyj6P9sMHMwlTHIfVszvgQ1tn%2FOGQtp24tYTC6QXzx%2F6FTmT%2BWii3IAsBIfLB9eKd3X0LODidcnoPp3ZoAbH7YRdExH%2BHdHnwAM4HT%2FuUwqJnVyQY6pgFKJcv8Rq%2B4YmffdqY6%2FbrxSfqBpPW%2BmrrJ3xAWgs8laWDKDC%2F2afrsT%2BgB9Y4dO4BN%2FFywURUCk1KV9AODjQkXmjLAv2kk8A1jEC3i0UEgD9ddDvQwyPqzDUMqP8NPWJ%2BZSvvuTW6ropgsTcvcX5LDA%2FnmCoA%2BXwrYtc6pBXEWjxxzE63ctpMIFo9XAd%2B1gii2l8RSvGeooBi3%2BhBitIVv3ymeNvfI&X-Amz-Signature=03b934a20d50c13e67ec77f3745a9d6d360ac05198100bd3f67d4a86d98bd6b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W2DKRX7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T114218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSOqg9kk7GeNiQPYJG11BgAvrSnPIRz1Kz3e9eRf%2BiKQIgZfHTNLnTOhAKTUTle3aihAfgGNSR8zMRaCzYtjPIzukqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZMG%2BhEeVSOMbp67yrcAy7PYEVK1eNMF8tpz29oUcjXpBCPJT6X13vnl608aZWsh7RMftP4E6ZKpy17UfDo7L81i8bsj86351IkgX0b%2FQ4UoyGNtkPXJzC3WcocPvrbRZrh5HVbMSOzfMxTPQSP05dWSfzqAl0wGAuqjgdZCBWHRIMI8LHENYYgZC0y2HwGGvK%2FhrYQixBXdbkBZU01Kl5MNfkbOdSERmGAQKVPKSAdvvbHFKKl1LYFMMf3tCOqX8CUBo%2FtZbivRaJsQFGXqAB3A0SfWNUz3Wqqp4pGTh4vQXnWsDeXubOS8LX2IjamwFD1Qu1AnYkHf1aBBblF%2F4y4PEAAUvBeP7Nj3kEoxWKbKB5JIUADkEziZZO2bZDHKmivJ70yKJjTD0vg0MBRqMKcZ7jZ3jXfd4C21sB1n23kA5%2FrfxVQO9hLH3FRzEseUaWJFjK4YScibW828YpbY8iyEtSw8xByrPwfoJbFl5fLgH63v%2FwB8SS6Ey59CjScvM628x7fKAn%2FNmVBSZioJlaRgl6rIdsB5mMOvwpHNxb4YGvvezHLXWrz9jmYsAI8xKcOxWZVEY4nAkmxoDBG3iLzhDFX0v9KnXcuYaOTT%2BZOlTy0fijfHkQQlwd4SWh6gV%2FSxUM7RK015PDbMOS81ckGOqUBbBTyo81r8P5vVCf9MxTz1922Dld9LAYSdX4HWFoHrdy3%2FUIAV1P627WcRr7%2BYRjJt0UnK8oJ%2FJUl0fRUQH3gf9iZR08V%2BYGwkmbJC8zcqWW7BgpbKExOwCelleS07Zb4kNMMvRXAXd2Z2lS0E1%2FIRJardBDhFwVRRD5yqIIx5B%2ByzAoDn6C2fyYGQESL0eFrEMHB8lBq2VPfl6UZ5tlkaFxvdkHG&X-Amz-Signature=f40abfaf742bf6b731146c9d0d6e916dd9c88e302f6926213d93db974e0bd44a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

