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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633FGQBLX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQkVKdnRAn%2BC3iVFFueHgtSLLiMI07GcWgIA7RhQsbRwIgDvxvs%2BEy8O0Pnc4KY4Mw2OgrZV2bLEb3Z%2FrTupqpD14q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDD%2BDdXmD85nwodoubCrcA3jLiaIEeDGXOy9m3umAFJi4GtuRirOXFlEgSljDzN4IjDsHQQ35bF%2B6ZSR5YyS6PZmecA3Tq5mFvul01T6tdpgyAAonZQsH6jTpt6ldea2lUwFB%2Baw4FTbi1CcKrgIGgi3k3csvhRzfPu938%2FDg7PqDZHKQc28lrB%2FRPPdIZBEs3bObD3gKwjsRKz4tce5ADv%2BMb4v5Ps3xfUPipitH53772gLdyji77HtTdcjWiL%2BgT5pkII40vpjGiCfADazi%2BYKSTaV9RSte54HjDU10zvWjJ584RlX6oiIfh6LRXkfF1cfEoxte%2FpTdmL%2BamK6uBVE6BCeC0izC0YYWEhd1IVgPc4OL%2BhnPBlhL49FpNXkNTRLE620zBa3EShUjiZLsi6YUr7m3QaIG4UnbSaf70jOenxdUt1P2Tnany1ItDnkr2r3oxcAOJXB1v%2BvVTetzBOcZF9MLP2HXwrNPZNlesubI%2Bufi7t9zbuHUUS1rXfqgYfBnFtjcAFlWHbB6%2Bh6gu0MIFOMJj3vU1CMpIUZJFBcPznyWSwMzwl%2BxkNXZ49pixdW8JekwnbsfIsQJ3ee2auDKSfjuOwT27eNr8s3Zm8iFjTWlDJm8xe6wiwh1Dhm1nYcXCqCidL%2BMWXPcMPPT0skGOqUB5Zd%2BstltumF5fk3qIm20ZHk2DLO%2F42PrHyeO5MsGC%2BRWLttVMddq9n3HxRzhHWx9%2B6Eao8j38%2B6c5S2tdz0qv25D2OxuyU0cPvivJFTfgjYRQONgZNYxDxRY4Cth6tRP3bgo7skPhAOFp%2BTSVK2jzk%2FnYrGxFEO4H6OJpOYeDD8y9%2FAdlTSfqn%2FGHkKngopMh0hFBOsyS4icvtdYhojwkImBx5Ex&X-Amz-Signature=8c45620d6a89ea0fc580a8fd2c8f9ce223a8b5f7084187e47a1a278167c1fd51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VLMCRSQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDB7r%2F%2FPMdfCFHfRWZvL9FNfOBSGV9mhuuZa9zmiixPiAiAaGKIar1zT8Xhf810JPUi606nwwChwPysZ9rYo9v7Ihyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMnzfINE2dY2gHtXb5KtwDZW0gsK8nHmlwa2Q%2Fo2Yj4dY5o281WKNFBXQJZYfPyRwSelFLmS2Kz5gNGTpzhhCRFt14lH0UlQvZBsKv3G5qH8XsgVhklxyRpA04IpqfWUIgzTCkSPgj%2B%2FE5I%2BJeLYxvYPZNdOkulCvJkt1%2FcxGQhXZZC8alTFOjn1bP%2BynfhQbXZHPj8DtVcdueOkCCV6BtFWOfEUNKyHz0C9xldACvnIe1Y71ERIeJlMDLOZgKc1PppasJfBK%2Fw40jYoLhai85X1b%2Bkop4Lmu03Zwr0%2F0W5C7xGHhV2svJ%2F06FaB0AmdKYpVgflYmRhJunZ%2F%2FJWz9iLjB1K0ii9LaIpu9MPXyPvU%2FiggE5gf8CY%2BZCxiK1nO5Al%2FwrezSS7v%2B7%2BmsgUIFdhoxs%2BU7odHGvAV0Z4%2Bk0VHpEFr7vml8m%2FfwN%2FTpTiD6FD5CbzJndq0yjvrhXZf9j2wp34IeyB7mgMEQ3FuJHLINztGvH%2FHyKM%2BCwFo3E7YJ7UJhacMDmyYM2xrU4xuk%2FDucmxWSLCvD%2Bxh4m0MW2wlc1LG1CyeT6VPSuC9U0sRY%2FmOHE%2FghV%2BanQcpUd2nHmZCBKGebKZdnvPEPl6Bx6h%2BJ79VuVa6wmuJ6k6WJC3Vw9RtpRs%2FAWUbhbP%2BUwpNTSyQY6pgFgz35n0XNLykZq22bHJKobdxVbDylLfEVQ4G4aiPp7XYwZmyAmkqRl6bbA6exJRaQhD7yt1EMU92x4kmSAGsGyKH96XvC13kwRohOkzJT3wkLQWvlYTbgzo29BUANbZgwjAjx5cF17YwvUwQ8T92Q4EMVxcuRX6UiSpTspaeiZvoYlPUqQL07QynbLv9j0qi1AU%2FQgM4sByzTRMWO1QcKTnWfXA2Na&X-Amz-Signature=c46ae924e309eda6e80c0f2fbd84619819ab19c19478f21a175200968a1a432e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

