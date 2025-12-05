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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TY3EACA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T070622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA99PUZb9NZxSwyeuFgUXWd9gqfIb6Q36HpFA8SyjaJLAiA%2FewImXvrw8%2FaFvu8TwvAXej8UXOjFKUf2q0%2BtGBO%2BuCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMyoYybl%2Fd%2FcHTSVC8KtwD3B7w0iF4d9OZu0zwDd4LpJrSrRxqt3sbj2TajuZfAZ1B001bSLN1lcvKvCxkl9g%2FJPG%2BKOF%2BNDTD0Hh16o%2BGgcUYlIISAvk3kAyeqSZcKjXVU8TxSa0VA%2Fj6xdyDspxin10NnaITnTEeuNHrCTga6AF9%2FwUDrGm6gtSQO5waO9GjfkBSfvDZoL71m%2BOnjyoQjQ0%2FgVpySI20hY%2FA%2BNoiff8BQO0%2BwdH2bIN%2BoTpAb295rLaBbVRUFQGWpy98mTVU9Hp8oSjEBQ4DPSJkoHQSSy9WjgwP2pmJZ%2BZQssEONvX0HizVx9S9CxL%2BmgGbdYLyO4%2BJVuazmqV8D9r3pPn14Tns%2Ff2X0O%2FhT2U7TQ%2BGLRRmm6nFfZhi4irjstXSzwIWbGnYcc2bj3bIK%2BMiZ6J2iFWn9gmcFIOWyXnPnpbgmlQSW5HV6Tz%2Bitq%2FpOsIswU2cNc53B3GbPD1l0nG4qHg2JbxQoDrELxnZ0Z1g9mgO2jP9SO9%2F6wCD6%2Fl8sYlFJNm%2FsVo9OuaVyiK%2B9lIa7by5%2FOruGpAj8GuTlDIkZ0lPkz0nC9M7SW6H1ST0RWTiKh%2BBjx1qG4TjfcB85mNeTK%2BXUvxmPUwVQQqROUVs6TFrhBV%2FxG4xpNuGg1iRi0wh6XJyQY6pgHOqgz5%2BGKMo8G20zz8H2x%2FqigjZRn5sgWk0zwKx7an7NgNRSS1c3fZQAIsq3WWmifyxXse2jddH%2Ben2jPVr%2F1uJ%2FGqzooocAe6E3pDGnDqTMmVnAiFNOEpkmF%2BUXz5MvpKo%2BRB8AAyNU%2BDv%2BSblIoKF8D154ARDSWZuUr67KIADfZqdTmRChj52KF0azyZuXUSuu6anwbYsBIXhF%2BVhqbu%2BnHD2FuD&X-Amz-Signature=0ba505cf24d5fc26b392297462f738864797d7508ddf05c68d8802db7c0be240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOXSLRDS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T070621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvHqyFLdOkOloQ6AvJn91y7llYys5W0PhiC64ICLb82AiAvWT1hOZkj46gBxvZDJw1KkGFdB0A3Ozk1R3y2IdUDByr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM5%2BI%2BEOWFx%2FT9xvtrKtwDKemKX5wyuwPLQLgB6wdLpOCVOpHRz8o7DRRxIF70UzUUJTsqL%2FzpV3o2pbrxe%2B6sk%2BKabi7FkXV1Xebu5sjUuyFqut1qx1U6gRvvUsUkfk4FA5D4oDAc%2BseoAtNTpGBnu7XQnKA9h%2FtmWGKbclJ3jo7ha4mJXi5GGGY4hRLIVpduUxouFYLfDN4bNLgXIUcpoIoqiNS8S20NVxbgDcqqwDN1gB9MnDMzU6QWoT64Pu7TILCH5stlqY5umtBNey9gMLAWN6V3Gcfw0DRol%2Fhns9H9Jf1FsWUkfi%2F%2BKqjdhWv4i5Yvs31R3vMTvDcjGMptSdQqqrDiorUe0DWVarjH3UpguafWZrRu%2FXusmj3nkr%2FDdL1fiGQ43XhjMVDT65Z9NYkwZ33OuPmAAZb%2FPgpyVOylHjSTqj%2B64ko%2Bhjk53IREnhFHyCNihAwL%2BTVMynivZ4zSQX%2BNOt5k0vl10Xt%2Bdp%2BRDr8%2B62H628NdXAR08G28%2B1I3cMkaYT0Sz7wwDWCDhHCPgzQGlAW6KSVNI%2BnhL5AKdpHx9cZ6VgduDMdmKVEE46Uz2S3VPo%2BBee2iwMlIk9l3Yy%2BXuDc8IOqZTPq6U6S8NP1%2BNQCW%2Br3xDMsgrmGitdEMjOYFvF1ic2Yw5LLJyQY6pgGcjRptNwLDeh%2BF91ns4cmpgTxYKR%2BoVuGkB9XsyVhsJBmYYqKnzLlQPe%2FoZKuQr4goFl0sn7ZhtUeRAYIcCSA%2BA3p4eyLtUfgln1bp7b65EgXosWqL9mDMbWK2IdeS1J2%2BXiyIaMxnne6%2FIGV5bISYxdGZJp7cCzGRG%2FdU6dRwZe8KiS7ia2QMiZK1Y0%2FcFnb%2FAcQMeF1BDZFPULQ%2FK1U0DZNTO0h4&X-Amz-Signature=d00b28f781e71a36d83d74c2facbafeb0fcbdfb46a26af2af39161475900c819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

