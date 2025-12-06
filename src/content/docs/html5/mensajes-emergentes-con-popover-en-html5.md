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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIS7GRTQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaFgSEu4gjlgP2EPAEVLWvpUG9IQx0wR3A88XaFFFNNgIgFruXUaUoJ0oozIwfcPeItZLybZQ8J4N1H00gXi4NbCsq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDMPUHPESnnZtUFMqAyrcA6lBI88oRaYvqrqYq6e%2FW7OeFQLDyS%2F2SRsaHTtTS8vhBF7iz%2FEY6TbtwX8zlYcBln3gkP%2FRS30WGOM1%2Fh%2FX2hYkWRhyxcyRuAUI6xtkVIEoUHVNikwnhkp6G%2F1DdMjC4y39dcNOgs4I67Dk%2B0%2BIbyOHzQMOoaKGlg%2FyabAnO4rEUCRKE1qxF49blE3rfKmoVRITBYRdfQCDGhXFmQRbdSW84fSwNcVf5HnrJwzINollMb%2BVzWh9slM2kuFu5a9Ane8zwOZKCPdXLYgel7%2FA91SEocR%2B6mACZunWkDrp35wlZJNvz16Tv0rMH1uLcgd07zU7D3hZuKZcEw89y18en5dPYvwFoqwFDQ%2Fug5o%2FMz9Xb3RaJyZBbx3cSpPysUsbtImPM1TW6yIBTGjxYR%2BvKRGYSB0Hg3s7qsyreEgCQ97PNq2%2FzYw9mg8iF7x3AKgE30W4lPYy6uaqxqCNoMfLujuKdUZ3ngmry%2BolYRWy%2FE2tRJj3pvW1CV3RSOFy%2Ft%2FfZnXCWpEnRorczRP6c2eTMHcei5LmnnDqQ5GY7MASk67du8gldutEaSXiBFrzurC1QnQ2eVnQyR7qDgTJ0Mv%2F%2Fx7Mcxfmih0G51vwQgTCwsbMnTQDnfY%2BLPY0cJd6MISJ0MkGOqUBUCHFuz4umFY8Kg1DmP8PxDuDtD5BAYXkvaL00xv%2Fvs6zi6EPzd4500QHq5p7YNDz8J3kviUHF9x3j%2FsGOf3ms%2FQiuoyc%2FMENTgYQnlEyQnnM7OUIkDFZ%2BzC6msSu1lXGTipJBZVUBlW7lYpN4eRHJOJIec69V4rR95t085SDuA5j3E9gE2OFuWa%2BRWkcogeJF%2BdgZMySnI9Dw9iiQA140njo38QK&X-Amz-Signature=5d940324ad359add6a7918f991e451d0735d91a96983e81536c737839c20e2d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T7XYDF3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSdJxZZfk8KX5sL0UJ%2FeT4SE20Pns1Vf5ZUSMVL5uW9AiAIiUmPMJuE5UT35HVu7jK8kKrw6kThBSLpE%2B%2FwaSlkSir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMk%2FCsAujiw%2F%2FKNEREKtwDcITxieO%2B%2B3twvRVuTrXbyHIrZS%2FdITCxy17DsTJnfQXlciH%2B2Mg1wj0FJS445v%2BfHfBaQnJMX7Vq%2FxE%2BGwG1%2B1wvWgnMNwXj4EK1vNohKecESUzH%2FQ6BPeb%2BbkbYusQQvAcNLBJZ1kQ1DYUmiCoHwXKAhRC5RCGlx0YtJn%2FwfZoVeB8fgxzq3qaFazdcVdVP8htnzgHiUZ8vlt5xfQqC1Lk%2F3p6ghoToCCzsTLjNH0H3HcUJ%2Bog9vW27PtR2Ts1DPqrv8iq1u5PHWKQxDkvgijKXm4ZEcOcvH8q1uY7zSczCy%2BbPf9Cana2GRnRGPRzHUM7%2FZ4KsRex4sX%2BtvhYuGsxrX63C0wWLQMoBd%2BIWIp1YS8RywvtdeDZJnMV%2BFNr9bChQI2kxaVgn%2F6F2sxuEaAOgLbqZtofC1aP0fKaFAvNZUKwv1V9b8Xi%2Fd6f%2FS6br7CbuMJqpGy2x7FnBcSl%2Ffe6UvYREc3Jt%2FR9DqM6mBaYSTXcR%2BzWounNC7xIqcCNAnV4c%2FlrSISec2%2BD5aJyrRtW%2FgX0NItcZCcejqtGRlBDkZwBCIw386pi2mXoTA827UELbd5843ehOj%2FVq%2BNifWXrjCPY%2B6oF0itOo0O%2BhqVvBuLIZkOnQ06EJ6SIwjInQyQY6pgFyu8gHn93WJThIGdUXOTXi2LOwuUYd8GYE2XezGMNtIv7fxsQ6UE1%2BSiawOsCvhLpXoCQkI4h8tr8cE1RRmAZjBsPSsF%2Bge3wUpFb7VlLxUCt9N%2BTH1BfNo4JweMNKFWDsG6upfKPxmtNn1vadLvboRAAseru127%2BkRdfUr664MFE8QVnm5tysN4z60hGS2ghbdM%2FCSXrnc5xF5WK7%2FXWi0R5sPP1Z&X-Amz-Signature=14333e29e7ae13aa6ce511de2f59e22793b3c1e1e9d6241073d7d57204db02da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

