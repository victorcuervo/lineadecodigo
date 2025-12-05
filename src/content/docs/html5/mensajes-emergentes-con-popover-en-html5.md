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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466552GZWWK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNhOln1suKbuV2pAvx7HhHzVy0OBeYv%2BuFIpEgAD9IjgIgdq8%2FC5092BpybGSzmTS3%2BHwVcpKiWZKBESNcnkCJpHYq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIBspoeuSTRIfFi%2BOircA6GqqfnGL%2BQ%2BQh8xMnD%2B0b2tGVe7z4rDIEee9tI%2F83%2Bt0LYxOk%2Fz8BjBKuLdAFt2AHnY6jgbyWtjzoEX7YQYf1j8k%2BA4DChXpPkOWfOaoLDAdh7fZKUQJ%2FYTvMvHCORHRWOEKGoaQDST0Is0%2FqXNGo0nPo8%2FeWvvIvffELcNaWc1HWhKDQg1WK64uRfEGdCyF9f7t2BAp4KcPcbX4eAByuUma3%2Fg4HTl%2FC%2BHztvL3F6jWn0S3PuVhNZnHCKkheGQCiuKKLrNZdWmqZG6kXI%2BbhY7PHeI%2BdZtUeFAaeAhZ1i5qiEevFlZpTCpNax1j5SIk9gGP%2B3P2CtnVeFVSiFDOWs1z6APCThU8CQbEbA9qN7rEHuQ2laMWwDb9%2BuwB4jBo2ogjTxFKOFS8enUOzQVJagakTVJYvFHTBPZ9ThXMdcyZXYM5MjKQqFd%2BSlHr1Nr6rIlatfvvxuO2hAraUCsSHhIAKInJ4G6OlfzOGudT%2Bo2NPfc0kMiTvmHi5tE0MBa3HaoUi8qe9dWrNpwrAoJa%2F%2BdVK94mc2hDBQyZ1IR8SPos7rXP%2FI6pDcoiQsBT1ZQFEWFtbPyjj2PiAiNLZL%2BYMRToImPQ0r3zRKMDLjBcpxxtrI50OELFi0j%2BLBDMIvKy8kGOqUBKTxFzkYdahB%2BvX22yPcCYOHrPaMrTuS79ol%2BwIdIZxTHj7DKkF%2Fqcup0oCzU95k7KdWi6ov1ZSIV9cnxvch3fcSllL2%2FMhmKZ1mMnPxzNwYVaF%2FNFW%2FpP%2Bnm2GkocvWXblFJA8cQlqBbytWxQpMQvcnoMXSWGS5u7V9mCMzdKvMWkjRgnG0BInU%2BYVOa0QGMk09AYHEvAe1UcJmVe%2FnHUIYKh4Bh&X-Amz-Signature=c2abe29a691df52760e6a611250833d9c672892ce87cb97118ec3b51fed48bce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KJN2DPT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFnejn1lqgwuevNlzLKJfcjxLDVp8XrErnSHXX9MP6u0AiByDCluUVXSnd8LoNgt%2FYi5KookV%2BSutsk2oDInFHITZCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM1q0SwCGt4WUKie3UKtwDMzh9R6oXXbNTcg1k6NzyPey%2FEJ%2Fp%2BiL0dvbGi1GToGQOsgSxyuuHahlyqK%2FPASnklwCM7S178AGRulcegLCmU928vaMh%2F7maWkkRlxslFxStgMDBCdBZmtTRlXWFdL3PIJQ%2BSLv06WBw9RKpHPMBg6uks4HqSfDf%2BdryjCaH2RwapsRF8HKtolMuan95gmxMHSxbPwj9jO1TCxTrplkG4fi8URiaGFdvnwfhQYVfyvKtTu48xSwjKICg65z9lqyCwM3gRCKJGYdmcr26m3RJXJs4zjewUMz5ZYsP61T1v6Jrd%2BlMMwS%2B1Br%2FfuvNbWnfffXG1GDkYOtcHQmGw80hnz%2Bj%2FcAP7mBpkzSqVaJ4vchClvNOGUKsoR5auujvyX3RWIkUra1qNE9hSeuhIrtPHNvv2nxvie3OijXD0fkRPl4IWz40AoDUMTrnQ1FGPtGVEV%2Ff3GrXQJXz0h0O%2FyseR7DR1TM10XaD7pVMn%2FOJrP%2FNgN3Bz8%2F0v61qkhsOSkc9ldT9sZMrzFeYEsL8Wt53%2BUjgeH0E6sPUpnWvRhaEgK2YPAB0FTuVz9zz7U%2Fq914OPLXzqMlrUsc5R2bDOmsFs59mz9uSiPOaFofuO%2BcfkUKVRxE4dBnMpoFRYkwwh8jKyQY6pgG0V0jLqZesat8pgwAbkYrMVeTmMxCxugIAJsyFUjQJLwckOZ7jqzei7UVH14JdGTveEjghSB2xqK7531jvXOL0NKNJSP7fPu07KalQID4WUPSRaKDJd3Mc1lmiSaVAEeoR8Dsh71kV6XncgYjGjK%2BIDRkX2MVGUhcL4Vh5wE1rFavvlP3sRKQTzT5fPI3s0u4XxEvEmWvsm%2BL4itsleDQ1P%2B%2BmMsA6&X-Amz-Signature=3cc5c51a678ffd0e0bba08330312d2b9ed73d8cb82c9483c2de60f2408755149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

