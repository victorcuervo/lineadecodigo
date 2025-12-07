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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJP5JZW4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy0ZscAVGwhexC8tP4HpHObITHBYj8EZwMTdexlvn1FwIhAI8G%2BN0u7tix8QZq%2Fwt6WBh%2Fm9%2Fv1A1jyCtMEvTXNv0jKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqLBojJivsrkVcMpcq3AOH5ezv29daHP0kc3rXLF%2Bw8qNCrYvUkgRfPGTTzmNmHkvshslDyuiNM2WJAXT3PQ70gFg%2FoK1XmxFr66QBnJ%2Bh3R7Iuni%2F%2FrT3csSIVoRAwBReTNptfy10Kc5oe%2FlK2TReQTcc%2FeHhW9gFE03jWG%2BC3%2Bokp84qXxME5aYjAwgPiEc2Mshzcndzr7PTjQMDuZnf6wMOgAF3OSb3pmM80d7OiPLSamn3dFF8xGHIF6wh%2B9tdPwvLCsgu3FoPZA%2BJx7Xbk%2FXrKgz9uopj03RuJ5nlGlrCfA3E6cOvXFOCyjuRCM39eczxgih9G43qIM0CdW68wLbmmT60RW9dFD807Oa%2FF5fpoHQEYa7DfaArfaEULlod36ZR%2BCBI49bMSipnqFJv9jphGZnlzd%2Fs2eugjTTmjRBojuOQzbXg2ofFGXMztnsR%2FRP4Z1ynqTX0g0R3tpD0gfufoGbC2lK30AXPlGWX9mEZtDGGIRMHtXwgDTCgOSfc9Q9Z7Y3CSxOvb8IVylUcH8gBtaJqc8gVCj305cMqiVzR48RzjC2uxZB6j3TvHx%2FpysiLHosgzWZFCS3xAKY9mmbfjJvcH%2Bnp9WD5yAl%2BEm5BrWFpgLXYYAc24Lhak2Uqtwon6Ae%2Fx%2FAfZTCrotTJBjqkAd9ukPm20GLKDeiLwhNRn%2Bbv03aNXWzmn64YTA3QFNVHcm0g0N1gnNcoAZnaSbbCyO1IhnO1q1wqWl4IcP4XzSM%2FAKpG5bCS%2FdJQPwPiP5jZNOPBLPcp7%2FAkq6Ab3LMb1FUpjswDFPxypAmxaniwe8X%2BOrpCiGUuDA%2F8oKsRWRWHxy74x8gJr6WIlxkho3c8QD923a5LFJsHELrwZEwmcieDi2cc&X-Amz-Signature=7d8e401e23d90960e1b7ae7ac22d4b7396b27eea8c793d23d03a66310627a72c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZFCML5G%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsKl8E9f%2F88Wz%2BUB8WH0m18sOE%2FFl65iZBfp7bw7FczAiB7JgPg7SUskXk3GEeTfvO9T9ESpgi5MbLC951Uns07vSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqaKVZ2RI3b47cWyRKtwD4kOFLx5arKTxzkeKqqnWZ7wvx%2BQZlCpiM92zRVXCQB9l39EP7sxfydCEyeg4LgOQS5k9TMU6ideWNVLZ%2FhihaSF33xR2IPw72EX94majiLKWJqX%2BahYltze1fQMC6pgXlf%2BrqduHGX36LOjY4ZGlbLgFyE6noMQDns8S1WkCZnWrjcJMxIkhKh%2BKh%2FJK8yrkt94opoZmDRrLHT4KeIogL%2F0W90PP4PEANLLKhK0UxVuVOcT66cyJvxnEZR2Pvo4UEPSVVUpaZfX6h7boISWr3%2BEqrMIw4z1bt1p9i%2Frxuefgai7N94FdA052iy7sBn%2FiF97g2LbiTZXrQ5x0KngpUKfxKSm2rCE%2Fz3N%2BKrJSbzeT1I80zZc3aVh5kM8NgfzV%2F0H9lc7hBa8DPY3x%2FYAzNN8vgMFe9IroPLPmFc9PwLvHLYOYXC2Wk72GhvJmri2F7PBcx9KYR2kklFu1f1XqJU2rMWi5TaRM5p3ezQP6yOiznBsWg2Q5MZWJc7XdM6HNn%2Fqg2bn7CODc6qDwhcuoeezUodf941g3MxfR5YTeb4uDCy%2FXQxXvtwVtV0UMiNN2IHYYT0r6ae%2BV9rq5tfVmh5%2BznoxjnwvUn8M3D3xv04Yy4KbRs1aWTpwpE2owz5rUyQY6pgF8UpSu%2FsHepCdsE2nQis41nc0Cv4VUtMyOXvi%2FKDtqx53CEi7Po4RkREF2MznmquxB3MHS55OruC2QwQbVuFFDLZrLbRiW%2Bc93%2Fpwg1lZlAZSeDDLIs6M0W8Lq5XwRClBN%2Bk0%2FUVn2ygX5aF8pnPxKApCC6I5biZXFPcXBEaevCTp9k7ENjFmqtz7e%2Fuy0w2Ez8C6EHpdQmd5YKWwpV0shgAOHUMxi&X-Amz-Signature=667c2bf1e518a7f0088faabbddbc58a68967d89f8bc3282b63bc6a33b2f26f60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

