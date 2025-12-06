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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJIQTPJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7x7BIZk%2BIqgyxRnrNzqPRkpt5t%2FsUyEXTUge1bXM1ZQIgPH68%2BbtSTXEDpGHhzGfxG8pai4ovVdfnVgWDuBz%2FbDIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHWc3JbzoJk8j4NLYircA2LSwdWHgJ45JiO64iMJltft4%2BPEcfANwNP1DpI4vrwMoxeDIItBH3yhCBnw08Fxb6wCn8CTVG0hutfiLD5%2Bg0G8a67HOjieLamZyN45ig1NDwyUj%2BeTjTJrIoDMIowqQi%2BKki1REL8W5vwxzy4EyI1JyiaLcN6O3RV0JQnZURaK%2F1gzYBLwohWGhw0ZX35o4I5ZohUlQD%2BT90AKXn5%2BMMY2iGmKhvh%2B2L%2FKREwrvbT8djle3eLhOFbMSn0HM7umJfT7uuJqR5ltlJJwUiYM7RCzA2Cy05U%2FObyBzXfh69qDh%2Fex5%2F%2F8UNQ0J6sbpWmaQ%2FOUAUY9I2%2BNAirN8MOgb%2BO3nJexzPQIWm0XbbL0t286ir2UQApJez4Ou753hwx114LhG1o0f30AbpowbPYK8Mp3nUZJacejSyODo8EyVWN67ymc%2Fbf9wrRDsW3RtOE3M%2B1Lo81o2OgRKhcxgzfRkTA8QsR2aSmF5Ghcx94dWV0EOEyzGs3FQgrSQmsDmnwrk%2FQm5rc%2Fm7fdafu%2FCcLr4gqo3fjwkA4W4JKwjPcsDwBQ6G7nwQVr45VGm2%2FvoTA403UeHB67FDpNZK3C8skxSjOHQ1%2Fdrc6yfI0byoZc%2Bkk2kk6jB%2FhIlyPYNuWcMI%2FI0ckGOqUBTWRPOeLnHiBFE7ql9Sw96QFt8nS5FNzlG1C%2F8P1ofjmt6URB%2BKQSU3U12dWKdw40jjpkfCdY6%2BC68Xk5Zlj2NiftiVuKqNJTpthsBxohJUdODDbolnKXICAs2IJn%2FGPuymeYyavxsgDj6fAHUn7Oc9NZKzlg29n%2BjsIhzCuFYULJwdWcY7Ah40YpKryHEWBM6ES%2FxhVQAkuJ3crX3r8Mb9M2HDiD&X-Amz-Signature=7d23cf9e5df41977ffc392e79dafbfc2174414fcb026424cacee26c772b22176&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUL4QYMB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKvxVn8AXYIXuvbl%2FvZnfLYcYAt6xzD7HIu4evm7dCAwIhALzgjS2tuvc529Qm9hkJieNqxOaufxWmpcqmsyozPoT5Kv8DCHsQABoMNjM3NDIzMTgzODA1IgzV8m4gl5kGZFcIhuMq3APrfccD1rA%2BwYU0hOTvEgmAQjwRsKg1aE6D8xk52F%2BuDWrQ6PteN%2FktbH6xgKyQjvl1CJB1zrlM%2FDysgKWAS7rWjh546mcfCMPTckGSsIYhSCUYH3pkwXsNfZC1WdbJt36y5i0tvqKgBQ83aJPB5Qf6fYiNmWQttUWoJBjaLEa11Gc7axHHAbqnrYx38SjrUx7Z4VK9dS87zhMt5W49ttfzD38HjZsQP9kYpm7%2BZ1TYwwLyeeiEL7XxHTrdKP%2F9wDzpp5%2FgIr1zo2NAaG%2BdOMePwvT8km8KN2L9xIdwZAxbN0e%2FxVyQKrfpQSYv4mw84i5WIDwJcYASjGZzI19Xi%2FQ%2FsR%2BZUaAqwZAtUl3rhXWBRr2UpcHSGoTpy9qPhlqNxaCXBXF3KpDR2gV2tNk0z0KsCSdgJCO%2FtrECLy1uRYQSNU87aIWvOOxhwGqYWkUjOEqc%2B%2B9L6DYlkzvfZ6MR4YwLHR67O91Xbh7nSnKk%2BQ8tuAk9AVVl78XDlTDELGmF%2BNYLKfMIE1ER%2BPBtwy8FLMC%2F60aRtaKLrAeXx6CPS3HJ89eXZ7aLLc0AJVaUjDz7WI9YW8aMyilJ0dzaFOY4W0tbUOpfsLbsYaF1sHUwF4r8OXWGqaKzx7j2P3eoPzC3zdHJBjqkARLECHJeHfo%2FemdvCK2IaSuvjIC3yX2zDwo0WNNMbUA4ifzc3x9QmvvU2AffRkjCUSkrIOkdfuSJp5KVhzJX04kgJS6WcyzZZF9D1yzL2rPzIOSPfQt1a6vcgmv0bdojaw%2B6X45gt5D8F2YWv0ulx%2B6nZ63kLJzKx2D3g%2F2n5kc0%2FlEfdZQAZHLE4OIHMZka1hVFU635Xc0Tt7q8yNj3Rf3Yogni&X-Amz-Signature=6420be871ad853f8fad4ed0a868be3c84a886f0fe955523315636ea94f546a2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

