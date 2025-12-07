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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW5FCKA6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyerVxyP%2F2zoter9qnzxZ8skfv1XUjyuXd6Q%2FmrUGTZAiBrpa%2FGJBTZsm4xaDhN2bVFH1xbQapcvBS%2F%2FtNMaph4aCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIldCVNwfJNZ2%2BfOJKtwDkInv3ZQ4ZqepVcPnIo1bYqgARipiM083V91zGWlylWrYAibcZ%2BUoS%2FwCXDYuFGXBO5l6JGOIjMTZDp%2BAOdQIjogAK8prxkSAhSs8dwdjvs7O2G18l1iIk3N8FYGAd7UH79Xf6bCpgw0YScPFmWItgSH2IeE3mdrLh4DOm2EEHAct3zxOqRxYr312d9dHQu5dYQf4kQOSsN9eDHI7lzvlQOvud19gFncF5v1mbunXsbBZVYMBCoLkyOT0CSw2Xn%2Fzmx4yKqTE82R8KPu87WMUbCdZPfL9IpGm7SuRMyMhzqsvWJpGO3iOJyTTvSo0PPAp3Mj%2F95UadeJnt9ig3ka1aijlF2Q19NCZN0VjStCEqZVsiB68ssUs29u8dxL7UMmSdMfB25fc%2BanqmCdHRaJItrPY42fDUxLOuBkFfiD8BXWytV%2BPInFKV7iJKf2pYsdNSX7qK1e%2BYsCU1L%2Fxe5RDjOk18UubK9u%2Bk5HSr2vtDY7cguIMyu0zAFVe3Dd2fcjITlbyHQpOQAAzdSejxwZQik6naxI4odaB7pzAJEJx5pw6n%2FHnOddipqA6Y7dn1NZoRJYDYs82aGnxmL3JchE%2Fa%2FSp2j4fLqlfaobU5REQoiEsxmLLeYgB2jXJymUw3P3SyQY6pgErvwe3JV%2FL42DsmbRH5bLJ5d6nEapvSTc%2BR%2FrFW8GdW81vEtuNne0IPnBnYGeJeAV%2FHLBCCIjS1YBG4ks36jg4sC63Vx4ecuiCBCunt6nly%2Fj5CLjLqlkuXhD9QAdID%2BL91hHBuRjaACnnK9LppkDsMMwBeEWzh1Don6PbARhn3Jk%2FntHrKfTe9eBoZGrb8DRnlx5kIvHr83ElzrG1aVAnV2q3JMtF&X-Amz-Signature=308c71531017edce911bb00842d6da443b2e0bb4178ae32c21a027c60d129afa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KQVMOU4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9mEJg2xAODInWeOmQRuYxkUxLo2S7KDcrWoc0TJ4eOAiA5WA98bYpBj3Uv2skMM7xnSPkIdJeBalMix55EqhLn1CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCBygw7DYKK%2BDRKmrKtwDLe5%2F7RVyC3GUYN9oUNfmfMM66rLj0CNCWHuffGpuIbxbXbHBSG%2Fpq0gnItX9tLkWBo6nmN6MFHKpy%2FFV%2FTxXDrkGmhSj6Kn2WhojLFNucY85n4wBwyirVgCTGZyxCvLk5%2BQX49iO%2BeJz2t7pFICkJMHMrpjVslFYUpQPN1rpIz7uT0G%2FVI7YiiMaRm2ktkC%2FgyQ330O47cbOezXa1En6x6%2BxVbpzFu3duOKu8goObqoHRNf%2FyJOq7%2F4bVJY%2B1LNfotO9voTqazhqBNS9Ps6UCK7NBg05BtrMWYrGhABs%2FElUwles3Ody2FBBV9jKFRKyWkaSHwA8Fr3Hcye01uHP8WXooShU2pq7DDhXw646VAGMgLxDfRx1E%2BSRRugv0j8AfbUit%2FJT5ZfzYBh6oJs4lFrIWVLiHcpwZlHPiSt1oF6aF3Va35i7ZFJelpUCmU1bveH3j4up1MsMCgGEf3olI8ozheiKKHxMQBMZq%2FGrYcJxci77BnwARn796gLYoaer9NA5Npci%2Bljx9Hm%2FPu4sPZpshC%2Bj8%2F6FozFI%2F4HqfqKZKmuS7aguU%2BSqb0Iuz%2BEHlBY%2FSRIs4YgkuWgFD%2F7Ckm0fsyPZNF7%2F0jlLqKi8G8FhXWmnHm4NqvS0eU8wsP7SyQY6pgG6XUXbgPYY00yu6ydEdrz2sAjBz%2FKbo2sRTfMP9VjU6sXJ18XkdM5RiRB7K7NOqUXOV50E0qi3WoUlJGywNv%2BJ%2F7gqt1Af0F6JLrdNo8w4TzcaCurNq44sju2UE59D21zJm4reFso2NAH2A8l5m%2FNkC7b6C5W4h8KWIoi9DPVHw%2FP9MUY%2FjZ9afHiSaBE%2FI0lDrMUcKOyaP5SW9nVK8y%2BsPfnmZvbt&X-Amz-Signature=f56d281f988b9bea7b2b8d7789cf9f7134033ce4d774a593f18111752ff91575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

