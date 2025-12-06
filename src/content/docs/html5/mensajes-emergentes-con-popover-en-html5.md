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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFIT4VZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDiDzh%2BSlDei4vxDmwZS3lEFpA8GH5hIG78vbcC7%2B0S6AiBNkbdBO7QLMAd3VAk9%2Fld%2Bq%2FlrlX9nslTu8JGEZO880Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM%2BKykM6rghwBwqQaJKtwDhtXH%2BOEKP8PZnYmrnPdB4VeFOiagrzPSLDf5NrKlZJ5Apw2zpo9jZaqH%2BXRVAmh1bMNyh%2Bjitq7FhHJwkK1SkwwIsph0Vf00nywf2FkxaYunP7%2FLR6VSzjKoUzEck%2FM0xycJl47lCS7um0%2Flg%2F1dSEKyuS%2F0brv03FfVoYN6ubnnQOY7NG3Ix5IFfd0HlejPPlWrCutC1pQCxs9GE7zAOZq32QjH476LkCb%2Brya1mQn0EVTlUWKWnwNqmn%2BQ2swf%2FMRsLoQWn73Jda6zO%2FXJ%2BEvgeMhAtWzQ24hHfASK6o%2FItlagMaJ%2FoRBwd61XPIMnH6WdcHTeo%2FUBHoMKYeTZUikLvC%2Fbr5apsGNw23RNDToophPKopanoeEtdfc7E44QarSrOxuWxBe63hSlRvmRHgVoKuU06JiZBpWTXKv3yb8xq0ixUo2Cn3TYulHxOAchw%2FSYub5%2BBWQT8P1gwR9ddOnI1rSGqKLwZsu0h6LJCVGE4kwN1DY49jL2zvZ01fnQbTb%2FN9T8CsoSico4VezTr1ALxlcoYsHg2qlH%2BV2QVpP%2FQLyt8Q1XVIEqevBcuIAJwrD%2F%2BbGcA5LZnTZXMY3PvT%2FOBXm7umI%2BX5psQ4KKa6TNU9%2F%2FySyemuLJVWYwmZ%2FPyQY6pgFw8rhrUO8MlMtV86s5ZkD9g3UO3RqQDjX25wfuraK3iLdtn1eahw5zFzkAksMcl4dgLWbjC5C%2FVMP0Ce3C0b4naIy7u3t1FG1TeWEgAASGAwVbd4qxSeRVYxQUZG5HFEmCjXZy57dRRI%2FfoEE9clmWVxmRoSn%2Be0NyWe1u8U7pzKGpnhOhJamdwmv7GY74v74YwF3EjKbgWdF9737ovAgdcLD2JnrV&X-Amz-Signature=fbf4ead462374bb32649dccb8f6112d7b75a79b945fa92f0f567da16bffd02b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNDMTDZM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtIKi1q%2Ff9HCeRl23qMhMZJqsGdFO4kR2u%2FeKG0qeO2AiAQ5TLimG4xu8FKDhjtASfi5wUijr5k8c9%2FOsmW9GQ7USr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMaMUhbBnbAunSspN5KtwDeg%2FH22yJZtEww9Ivnc6TIy8ZivBmZ1eNFmBdWdjvsr0yaYK%2FGW4cfYvx0d3BzS2kqU6lBeW3dhAxKdaVtxgwIY23817CKwkgFpaFvCbSAkvsqYwjnuPYEuYXdMrPsirUQMGCVWuB%2B8wFMTu6v4CP51EDDUJb%2F4IEug8kp2Zj6PcoyCJrjbPWM9QHocN97l5FTxSzkJlf2G9YZsJYXmx2QbGTblKpPXDhapPXo7xdfdrgh20YtKI5pu%2BNAOkwC7vHvVaNSrAzInbag9U%2BwaywudqixULF8PhAFkLPSuZ%2BMgFC5gDXXtPBVAClDbjytiu9VIJKLvjr0%2B6FICBIDgzYTYJrLyhgI1bTEMaDOjscEoZbYQP8s99ragj5HboFJhUKnCj9S4T5hlNZfjPq%2BQZbAHMHL4RTyxwvUOFfUNyZrubK6WMQfWTIrZRlJGmbXMDmZVZVYBlkeLCHHwzdIJD497B424rN%2B8WEcszKi%2FpT2yw%2F7wZFcwNG%2F7nebtdzNYt7wrOU%2FNGme5zlpwccDyZpYGVy2CnzxuuX1gGNOq1i8XstI%2FviwalmaOiEuFtJ9n%2BAg2QVDyH%2FU909FFr7RGLsNwvzk5%2FAZhnic3SFFnQHmvB9M4dyaTTArcIInrsw257PyQY6pgF1jOgWEzROveY8qQQzMvjmNisVzbbMpjMfQeiHcquunsQVA2QXO8U%2FKfuFa7bKgqGkUp3chLMmuOCCOV2YOckqcJCoZUm05qheyBMsct00ltrM%2F8rNjand5JULRm%2FzgOIMp5MoEpMU4TRg%2FKrawy4kn5RDxE1cTGGbOWV0%2FotM6wKfBAFLi%2BkTzUIDv4i70PMBNzzfkmf%2FPkc4qgcB4011DW1k158X&X-Amz-Signature=0d9169c087caaaae54aa6e0f896ee705b4e7d552895fad57768309e1a26a6fa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

