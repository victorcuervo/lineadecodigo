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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7M2FA3U%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp55SbUzQV%2Bvl593o16F8wYakaFgzscIC1xkYebpBgAgIhAKzvZyTyvbYG1DsP9vGfe2Wwhy5heNj%2BqVggYJPxfVMhKv8DCG4QABoMNjM3NDIzMTgzODA1IgwfsfZyKtgiTAUw36oq3AOzlWPvaBTZc%2BeQWSO%2FSq53pEftvVtEnNIPn73DZYPkdhn910kIFvBEUsyLyQlKxYNi9uI73IbCDLHziW6y37ajRQnqJOsjbTEv8FpZ%2BkzfJayBa7PFfTq9wJtk10aKa%2FwtrUPof2XavWrBCENrpMcPx%2FQGAUGQuDJdaYQdGMeaTjRwrOE%2FK8hmjvEmnfRVvj9jpwZAMEcPuB1qEfsd8Ur7dlEvvwbqnrX9A%2FAMiM6p20fi0XCveAwu%2BzYClM%2FHTVjT3XetBxEAGtj28isQO5qw3OA4FEXh3cFJ67x7B8ljyG3ApnDZ53x27lNy5%2BZ0cyzv%2FXTZMXYE99Z6eNElFgwFVt3ndylSoIpVoEEuguz08GJO6tESbVcnjJPQe9nSCzoT8L3zgnCaNP%2BaoDk0o5iscU0Bpf0DPr%2FD%2BVh8atgwH0smeoB38VrkT8xyhwYZ5SWBQvXjD%2B1ETeIxVCxGGYAFfCiKX5iIjw85ogEMppnJtPJPOKENMXfpIe%2FyTmfrIZgtfSzvYaZllb3K6zbqvIEs4%2B38q4G29a1XwpXTdhLThIIffUpf9lzZCFAb5eZgsJP1%2B5VnXcupWBZnVU46ugyU8YqafTIY4EFd9w0jp8UhR6h0z1H3fDNkn1S7%2FDCk%2Fc7JBjqkASaYvFlSxXFMAwDMp%2BdNjloxznTGlh6e9QW%2BXcwhrLopniUhjdI%2FZSsuJztQV%2FZekwjw3c9C21SliVJfw9g9S0w1jP025csKl4K5P1tufJTS3GZ8LAZXkcux8p7uakqFRyQxxP6K594XN52EHbWRcVjh%2BSV7SWaeULEP0L9YW8XEVzTKr8whw4ru86DVZaShJxBJngTOqdt16sWhdhGOBR4%2Fb2E%2B&X-Amz-Signature=5d549ae830a10153913f7ec796d10e29b27fd3263e77e480af7ada8edead6b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZTIA22J%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEM%2BFCNVh3hIrtFBNMOv4iU2%2BR7aONM0VYFjwvaPOPDsAiEAhJoLCyjh3a%2FnT4M7OxuNln4kCGfyabyZhgt7JzOk1k8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDFQjG8r5tgCF0L9hWircAxPoD1bRLW98o0Sb5sCZ2UxemKhXxRSKJ1HZgf15oEl%2FQ4dPO47vKdGWa610hb%2FbfTnOQWc9QHhTI5qJuiCT4Rz2BAPIyOzCzbW%2FC21cq0sEhGIpkPDHddVOa4XC4cTSab%2FJ9IqzP%2F%2B%2FKuW5abtKLaOq53NC57c%2BO%2BZq8uOc10T5XGUPxtcwn%2By8s1vKnwyh0BJg3ElZpPNRl5KjMVYOoRHs4%2FBiT%2FSTrKiFsFVVKD4%2B3aL70ykSVYWsQrztPy%2Fvvn5ArZrgWqEeL7Gpvhq3rqy7RFSUEIxqnKlQ8sOyw9F36GCRvd71nrOvRFs5UZuHwrgXpJ3v3%2FzDMu%2BCh0ihtg57ty%2FyPsSIQzGBLgB7HBUyWMj8k9AilwIFnAt8ymqaikRUXBRTiR22th3pXwXoV3oJthzqxg%2BukSWHuar1FMe0DGzavttmrR9h319%2BNABR8L5Ju0KNKJL4vajGfLM0hW8ryRzRQfJCD5VlgfAzanMYY3JjGFnSEqe%2BbyqJia1sT%2Bim4Ceug3vKtcErgXUq%2FfJZp%2FeCGDJzJUE%2Bvdz6GWrznN6quzHX8FMeZeoBxXu7FTFzRHxbG0YVjR%2BcG9k8THWyxdD4qZT%2BNPtEWE%2FDm6cfPFdZmr%2Bb3LpaGWF1MOn8zskGOqUBc60t59CLCM6yZ4HY63LxPsjiT9lSYHajaK9%2BSoLcF41P1T2mPifs2McCYQK9CSe%2B%2Ft9wyDcHgKnLeF2IZs31vai14eBz6Ld%2BTRXYHGMwW459WiGgsxLhkOWMwADrJKvKSfRIyZY%2FZ51Kkt8AS2abs5aZQfz%2Fi3Ki0V0bCfvGftpG09A2JQniH%2Brl7bG3KwOEwyrYaEqx8SKlPLbI5ZGm9911mgwi&X-Amz-Signature=0f8827420c3e1b5daf4000586dd1859d4f5b3ed6ce196b308f60755de5c106f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

