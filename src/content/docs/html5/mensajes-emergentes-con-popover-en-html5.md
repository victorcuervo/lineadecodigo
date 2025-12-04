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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVCKYMSO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFCLNI6MCtddZH5vo5ytw%2FmVc%2FuG3%2BStcXWBoSUJpkGhAiEAzBPKckQGow1apDFjR9ysC7YTCTMwIEoYcTKmuKLJ2tYq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLTanh8nzqjX%2Fd2mEircAyChpSVam5oUJUY1794J%2FMJLDQSfwtpIbVEfmoTFtGYFLwTNt64c7Gzcdjzus3UHKp7lwetQL2FidR2H8pbMFbR3vMqVRNBwJjq5cqpDAoZYNKF0SVcpihRutfhdmqbehMFTI4MsDIqwPC0gzQzyCgX7x3zs4kGTF8b77vDvgk63Et6fd%2FBDoMsHgInFPCHfD4YlJ3iFJ5nrS9HR7xarmepL00N2pDzwKfk9tMhuwD2cD2uROPgIHi%2BZK3notbr7Y%2Bh2IdF22dAQMCIWraj%2BnGARNVEF1KNNtN%2BmFr3CbLo4nntOb16dcJrhzJ7Htp2xkhMLmVGp9xMGweRcr8zYbBvPm26%2FQE%2FazCAFHtgq0spaEhKqO7AxmGuSoZf2ckTQ2vaFjzVhVAQcgnkA7i980uWbfNw87hLdFFDa%2FC0WsgCY6Qs0adI9osuw%2Bqz6vaZDV99cmQW%2FUNv3IDSvFJPs96x0wbI%2BAGQi2OowpCcm5oBMZJFlak6rl%2Fybvln18HCMaz5QqqdEahro4zo2%2BT%2BZNqnUujHgHUQ4zkKTJkwUtrG7d%2BGPeirvOrvwAb1zFFiGMe0APAgATF0egcg1nWrE12SNF1DuNTD9LfM0BtlQJHm%2BhVgL2QXRoXJaY%2ByiMLHnxckGOqUB0OPLDqc%2FRTs78Me7PjfVUxKhVDUpqOEr3LEbRasEC2mCwSFMpQmQdpk3DTxGQcCQpbHM3uMJ5MMvxemfAP0enc8iWqw%2BSyRd5coD%2BlJO%2FaR6Zy3svLsBsjuZq%2FHSDJUM9KmNGcw3xADhrZTcPR1Peq7LG5vv6QzXqfaLW77nslop2OEWl5JqVd1pvC2VD4LqzpIf9OP8XV6XKMqXiOKd5LYrClsW&X-Amz-Signature=76a2ebe3b2cf48efa93abf8c872f344a2f523d803b5b430bf6e4ddb2a3b1917a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSUUW4O2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQD9Wpf9fsrbeRJ%2F9W0him%2Ft0Q7YSCnW0rTwh%2FFhOJ%2FtygIgN3iXYJysHwq%2BXr4rGrkFkjQpFP%2Fas7Rg9WV4MeI%2B8rUq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDHnNP2Dt%2FxeI0iEPEircA31yXInZfBswStxoWw4XazC8DunpNQZ5rF%2B4pZjingavEu6i4YdbIyq7%2BmlH2Ibc6fBbFz%2BM5OaQ7K2hG4Ejtia%2FWF64otci9RrbzLOC0rKMwet%2FMR8aLXLKfrtIn1JAVGOT9J2YIiSN8jt6o967qBUb1%2F2%2FY%2BFhfprYLy%2Fpg2whFuG8ZG9nlff7uxgzo7Mb3%2FSxeebLdfPsOWS93csuFxbCX0bnqfbu6GQRWi67FjC2ndVxZ29sH5bG0BRSq%2B9gymxL7NcPNJR53pKcJoyhL0ScbPd%2F47GuMOae4WBoMjGzGkWXqVK2bPfgFA2LEzn3huaJDVqOnj%2BAEprs5fIuouneokrDaRt6ENnqEUtRsq7EuWK9lA1bYNVt84qTbyaGoIdBDzt2BwngzJ5tEDqy%2BEvhowr8LRaRQJx5xk73sIjRMAvP3%2BJmbO5TZYNa%2FeokppdV2%2BYUc9ueVFphi4To92uYoHZfcx1qyHjaoYkeL6P9CPC4adGyMHvqXSg3X3Ngc0wuJW4tFid%2BVuSPbHouEoMzYV7cy9ckDSCnh3TxpRrbJcd6JlX%2FkbcbG76Jwby0sQms1BQEuaWxHqXYDwPvBGEjY7Dgwms59WlouGutE1g%2FapiheNQQglrgkAFgMM%2FnxckGOqUBhCkyUMXvOm5OLJ%2BN33KZ%2BkhYPejN0u6iYp1pwDmXYPJ%2B0uRCkvksS%2FPfAI%2FSs4skzpkDu3r%2BMfcqaZUSUNfEKL4TQ%2BPL%2Bxtc4YzZ%2FKmgYT9ykiIcQhobKMUVI0jZRLTNc2fg%2Bk%2ByshYqXZUdvCEwPq4rJuxYDkIVAsTCTcWe1DQrh1kjbqpGPpL2%2FBPJJYqmmpu4oMgECorgzr%2BxoRPJvgX30iq0&X-Amz-Signature=76074113197596adea89f0e16d79716410b82905731e73eccf3e3b70a78e0cd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

