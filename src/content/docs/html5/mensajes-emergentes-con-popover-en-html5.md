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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWIVA7QJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCJ4ohAU9Tc3T9uyG21pRUXuo1ypFgRDGLa5oGAb9JI5AIgQ%2FP7L%2FlMZ4hcpSK%2BnS180sWYSQMFycsGS0cJQxHpFPcq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDGV7dTeojJWmbY3V6SrcA%2FgDzHuxuFIZvXF1ggJFTK7gPi9RdFkhGoo4ql25tIHIDG7Ptl0et5x5mZDpyyisFn8%2BbTpsnUpskSJKvT42CnFgBMcIhQEspO8IXEZ4PuhjacOcDK22XvhikZoscSbR4S5LnUL6bYbmqqaILDmCO0%2Bu6KhPM%2Byf7HTPSfZIIjPavoDpI6vSzZ2uP23xPz7SOUeejdXLZlD%2BwetkVsgQh1WEC0e3vz%2FRgr8ulgufNuqkNnMNtLP9TRJfW6%2BHRNQEcOnKKkKkkHyT8g2OacA9oWz4Bh3ICLaqQlQHzORNIfQceL9m8K893dRiJLUuEeq%2BC7AacCIFwL004p8b%2Bfgc72VYxBn8HgXgm%2FJjspkrhnWsslpss%2BNaTJNpLEsrHgNTevOT8gLXAPu%2BWHA6rvQ1XsMBWAUH%2FLxfDaceQshedbUiZ9zOiL2bFS3u09fDCfGaf%2FP9e46rgdriGb8sM7IhyrbaCmXRl690jyQF7lJkFSUn8KOKNQubfJ%2FrRv%2B84BMEOywoE0kObwxxQDmg3hJFU6RDitDR5YxJAW6%2BtE0PY5OO%2FSNuH5sUPScVLTtii42SFoO88u8v24Txl9rDsiZ2giYz%2BwNpsnAMzDtegq2ZbQUkl2ScB%2B5bG0a1nDNeMLz4wskGOqUBPKpYWJm82xe1YjNw%2BqtvuLOkiaKg5U8xn2AgH3z1D53Ilsh2AL%2FSAX9g5j0yAz%2FBqO0hKtQC6Cq9SBD08fIc%2Fw4DgYPe%2FEWUQCPWB3%2BtfefSrXkDVa29YZuRcaSY4GDnIyGfAJfLSF0bkyztGqINXu01rVN7CwF3OewFvSZCAR47TNb%2BRg9%2Flp3VSXg5reIsD0k7Xhgeo9SSIJjhoHGiVqceE57d&X-Amz-Signature=c80b7d5e4913464313fd53067c32483aed4d4ed6d4159be2d1c871a7afa30533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6WGWC4J%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIHOgyQiaqPdzwjR43kgnc7OqOUImdICO8gWGdtv9dJ9fAiEAkWdeCQp2C5bD%2FW6r%2BAKjL%2Fso7o8txx3jw1eHiGVZaE8q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDCCMHXZjfQY8EWjMMSrcA5GZMj4geYx2Teo4lwxbaeqEOmrdpzSTVuSKce20y0mzFEQK9EhxKOzvrna%2FhTcJ9UQiRIWnNqEEl9u9mwN%2Bw57dJHehgEM3oxOnWjdvfUnG92ndlo93nTKUbLo6IHPL93f5BKeewgp57zbZe00NIrvXHHRjfT%2BS%2FKm72vzq1Of98QaMfChB7O53BgsS4W8h%2B7MbsJQxvj1%2BViTvH0TsL9BkD1KFCWDYf8D22k4V%2Bq0DA5YH37RErarV3h0K1Sm4GkU8NS7rymbV6nZtdYV6Je0sMOiRPOvs1gkAvruikuz7ZJVYBw91WYLLtWkJDvqzyYoiEz0mftJWzeZNqMU8ACR599cOLu3%2BnIV6Ig2K%2BBAlSCsdkaxK7peyJTnCOCuGbUYf5HGmNJvj4DqQYFLg%2FhsYP%2BNj2K29O2Lb9IlsAs7%2B6S9%2FF%2Bo%2BNOMcejj%2BLB9Kek14JuQiJUx8UmyWC7f%2BAyhDs5PXeWN%2FJy34tmGS3tgupVQswFF5jbCH2uzIa%2F8edrCZgTw%2B%2BLPs4%2FP9mk4VlJr4w1GaXUxzq%2F2tuNL%2BMV7n0H%2FvGraEtNPPfGxHzndBK32%2Fym3QJ3Wfx13s8a9NYTeM43ZLAlo%2FCpoCo0QAG0LxiIkrdqvujrdPBirNMJz4wskGOqUBY3j4xgO3g7Utzp00prlPqn8G0qKln5V3fErTFgwoUJM0yJ4nwYij0a2nYhNT0RDA1jTSUtOrgk4mFWK3FjvCyexlsf5ViSluNKibhYzfWTXZpOIAalMFf5drDzLTYOEe1IU4z7NmtVKtWpXgu68ir75XyvDPOPoQP0fLFDWiYiIacExLKc8y1YNqQCNx11tI4pLQYPWhIZrCPYSRPRv2uct9eRAK&X-Amz-Signature=2a45a48e718f3198674ee6b3c1717a8c5d38943f90ed2047cbc6704bd01c5252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

