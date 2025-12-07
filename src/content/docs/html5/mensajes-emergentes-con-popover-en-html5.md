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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RLHDRV2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T174320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ7oQ%2B%2FtmXpPfVBND6X7sxe5KIQItG3ta1AE1xN9wgRQIhAO0bZjrELiV6y7NogZMDGz%2Fo3Dy7NdlG0sIGPIXXXA1LKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnrZaAEI7KupCxG%2BIq3AO452Ywcq%2BbifJpZ9ZgRPw4fK4NTCn4EF7xqnlV519POBKh6pNDcl6qYGYrtqSV6xmMz9tyDysm353%2Ft4GvhJpRhSiB9WHpqOdbno7%2FM0%2FX6%2FTfGlD5Dke7Kmpy5s%2FE1Dq7%2B23hfqYHJSP2SFVcuhjtvu63W11BbktKUx1WjC145qCXW%2FNTCWjGkROMWyOFiozZrLgo7AxxajrZUh7HL3ndyNxcEkYqoT6ZfBMtZvid8%2Fpjdt%2FzrVoBDc7wSrMLCq9pdRQuL4K%2FRK2Mu2wGTzms6d4uRmze1JUP%2F7CpkadZNkcTkukKizHF23F3hNyLFGlaG6CORCKCfXR05YYqYQ9qJknAkUxdR0LwPs%2BXkW5Awb6YOX0CbbKG34BQGNt0%2FO7OlMpUws0Bdjktta2BrpswXonIYL1OjLyNooGiS6N4XTdJ43x%2B6kjpF6H7MidM8QzHmyZ2CXCW9ipbs6%2B%2B86j4mVYBLaevsHcIN1oUKmlnEhIiyomCiWAfzr24SsqWM13D%2FCENI%2BhMcIVC72RZubG%2FwNsUOhrUuOgUl%2F77Vsu7C%2BGqDRIirby1Kg%2FMaRyJVKY21yXn2r29qj292ddgzJysgN2TeyN0eLQbyCvfrorJI7biJfaJ7LrvuGPthDDLs9bJBjqkAXxhYul54dP6POH%2BqGVz48WjLJe8q%2Fn5%2BRSKtt%2BDnsxILWjbUpXgDFJJ31nOLf9LegLn%2Bwhjn55vtHMiPS4ILu4bPGRPIgyJ1c80jk6QIlWLL5vW%2FCXyP%2F%2BnM%2FMe5zCvPCbU8gtwHWpHFHQTEcBNo%2FSKLqM%2FtODO6U0dBhNS1InPwSymjp4kncuZ3ldwymsF%2Fu0NZZqMyurPVC192fygdyFNM8%2BB&X-Amz-Signature=df3722c20199ad5143dfbfbc1b70a5f6d8a2a39c73ce0f00747c96792e626b13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7RRXWSN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T174320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUqHn5fESeB8jeacDtaFOx1dwEna0LqNLHvUIw30sJ8gIgFFn0u8qdOi16Hf7QothUxrU8d0fRezX9gUfOAEZVUOoqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRag8x%2BsM6sw8SeCSrcA7AcoRCBMiV9s%2B%2BfwV1qaLJaW8yNvYu2iPxm7bFPevmCXLKJKPjeW52zfjVMVx3rkD0Y1N5NCe7b15B4KP6qMAvfRwZepN%2F2BruBV9EyO5knCgRBGdb1jlAjrPN2caqb3Z19KdKBwgJ9XKkEn6kzL0%2BJLQ0qRr19BtEw49WnX1Wm1rufu2fiyDk7U7EQvYs%2Be5u%2F3fCEoJdYNgr42gPds7q1YUjsC6ogugXMM3FHsEzd5uMacnCJhFCnhmlbpvCrojqRkGSsxcLcnDU0B0vaS9S4H8dzaP%2FUV6u3xJVeBMRud9e4jC45SHUtIDpoQ1sMVG5TWRIA0vIi7%2B5ry4%2FnyWBFsVZH60D1%2BrQxnIxx5lg1yv6vtHc6i4FlOhbVKMtoxnXZbSFuwgl17b6JYFNf3k5b44vieAz41Yyzg0pgQrEMdLoLQ2HeC%2B%2FhO6YGUxRfSCyY60xkcSUzghFrswxJfC5dBmW1J0b9aUNP4QI1LQRbjJQHX9R2YU8bIdTFhl%2FC9tOFDbG0uDzA6Oa5s8G8mE2ayipqA0FJWgg78XByKpGpRUXmoQF7LbY%2BQ%2FhwhgREQ8D%2Bn9yFDCh0rV%2FR0j3XoPlPGb2Qc1dsDs9qduP7MXsUcqNB4%2FCl0FwNAgZVMJC01skGOqUBVc8WADK7IN3CxxlYX5ao65TmdtM87juc%2FnC17rf%2F6Y6YpPxRh%2Ff6S0b7LJKGeOOwCLhWOHksGm%2B8LQrTS7jz6B1ZwMjWcC9qi8SY0U%2BA4j0%2FmdHiOXSTRZ7%2FsOneEArVHVGE%2BIm4xQE%2BA%2BbHpkpiyPfGDK%2F%2FCho2TGg7qkDWrwWmxdywcuQgyZVdafVgVdi7K7gCxNaNF78QsUojf2chAiYZxp%2Fi&X-Amz-Signature=2567202b8fe37e1b669e435e21b4a4826f65799864927a2f5dddef287aa02ad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

