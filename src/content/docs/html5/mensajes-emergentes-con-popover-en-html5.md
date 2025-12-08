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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBWAVSPA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T080311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNaaiRcNzrEzn8HqU0GjhDo6PJPTSHSEBZr9%2Bg2EvC2AIgJwsXBIErwbeHLuXHZdcWreUelrOeXX7H%2FUqMrinEIpsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFe2zrkCTp5zGFFwqSrcAzJilmPj%2B3KNKAlgh%2FUw4RjWcrrP33ZzFnOAfTmCN%2Fp5KOnLIUAMWWORgO1tDPw5KGlFREPce5wv9DpGl3yB7NDc49JXvHn8DU%2BfREMmnZL7bM2%2FoGpoxpkdLv2PATawBMctTkIMDIiGJ5QJFAzjsxyHCIO4KEDBKL5l63kXQ%2FzYuQEJD6FQWI%2Bg%2Fm1dsI7GqCTInjwYRJcIxyAsx4%2BeI%2Bn4atFLvezB1sH%2FjEFyKX02E2L50%2FDl4qqoAu7NLi3m%2BnJ5GzgUE086bBMjIxnN4jq5yeOTltL04%2F6PsE4F7nY8MWLKrvdex79rCFPS%2FQafLCZLGrlSmz%2Fx5Dc14ZANab4qkCpL8%2BFiKzRdLuUa86Ql31kap%2BWmvmvOQv1V8ZLN80%2B2WetBDFffo5MmX8dnCP1ZimpLKEjo21Ao663fiKNXHrCVLTcom8jzsVoBAd1owKOE%2BHF7t%2BFZ7OGNiJ3goNIF8xSS%2F%2FGsd0EIDy135KMPmsQqJJ0xvSlxzp5%2BwpB5D9JTHgRmtlAz5CCte%2FnXY4FT3SEXQ23hvbM3BdNHdBgnKvdXJXdSlOS6i7vN57lP8T0qpnxuVkNkBoRwhF5LC6%2FTRaFu1G1ZM9FsywDiSD3ItPIksNn8f6o3ozcsMKXt2ckGOqUB%2FT2TI0bjoFtwngqtXKgpBBwZFk9Tu1pLUolykZphelHxS5oXmEf1Lj8lITCUEtmnoYT4OKWa%2BLk5%2FYvz%2BC8ffoqvaNxzdGz%2BwuUnKbcpenbVHk0X3lBmaS3ZtS29opfi5wW2XMZ8p%2FTthClRWxbD7Rfpk1rpXiVNetrDzBT37WxzeCxlvRVQ7R3daRRrMnZdq5pokh42UODJ%2Ffn8lBpjhezexBTs&X-Amz-Signature=9e589010c3cef565e98e8eb5a55a9eb292c1ec63df8f10385cc65a8595965d37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DLR3RUU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T080310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCRNE9ePZU9vqp7uT9GvYkvBuGwj7gyFZYiurlbN%2BIEQIhAMOBbWbLq2cMg%2BHaEMeAzV71HLfardFXPwi7iMcnvG9hKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8Uu7OsykKGCROU8Aq3ANU1suKUSvZ8h1tsvjofIQEPOvUhgFiHEcF5twKEEzvWVdKChiaYE3NENTOIci7%2FTjyin5tjxLs64VqIPlmJm4maU7dDHf%2FS7wUbzFntihKNDZ%2FRbnra4NXWQnj9mwffhs9o%2Bfc%2FbSsmCJb5fOMHdCbJU%2FEr3UcYczqysAGNnHwOK2W17dhpH%2Fe90tKKrWj8PgE2ExMx8W3Y4NcHSFR1B59UjGi%2FGMkXuqaJp6moyFvX0fOVV2qBJiv2ulwWb1fhd6D0jdb1FKDWA1VrVbg%2FXOJfsoNQ3glE4KqyWN5QSMLNoxc0ZD4NaKYslueM2bJosPm%2BMfQzL1kQEnraxyNLYo8QNuGSydYB8uUlZjKd9XkGSi7J5OvyXdixQUSetV17L35ratF9gJRH7DH7uXWSiYiRXu78brQXfTvJmWizM5TGRgFyO5IJVE9qKhIS2dd4seIHBAJ6B%2FRkt4x6mOdVPjm9MQ%2F2cJ76IbKTkQGJATBNXxeIe9YZ0YcJLoo6%2BWQvy2E%2FisEBqwBDPJe7j%2BAex%2BkTC2fTuZ%2BcJ8ae4PsOLf%2BXxb1xE1kHpPHhkxweUA1zKv2%2FlrPH4XVa8HL7hBqzq%2B8vlBgkxRTWikMKs70CL7cQQg5JitqR2HEVot8JjCQ7tnJBjqkAV49DUACGd8YclMHPwiQT441%2BFP1juNvqH58kRSymvstH1lJRbJ%2FYihae9aKQ3a4IvwjLPCQiAo8NtC9IjodDikzkIVymROe0bvlXPfglqxLKg7RAO%2BoymPjSFzJEWeJp%2FJ%2FP2SaSyRTEZuUzoXx%2FAvKFoWZ7KzR4L9%2B9tyB1tOGumVOQmO7k6DtvvA7taCqc0HaJNnTx55fIq8vIYlwIqanlLSG&X-Amz-Signature=b3dd77b0810bbe7453b23d7b64ba536ba3b8695cb0a28911d72a6b88b6d7e0c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

