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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWIA6ZVP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfJUYcBxjOVnFZuGSuFkN6VHfM1ZcVu6jcPGX3PK5BbQIgAzco%2BwZcOUCPFRZM7xF4Ca9nP2a1Rp8Uinij5tMIPKYq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDnMr7jeZrtRxchZDCrcAwSrpgzhQS0x1EpgeWAV0oQWgL4S4GAjYWLuUITIqOJx09MgVm8wBcGAhpA4AB%2BoLUVRCcmTL%2B2iGUilnt9faIMNyDnguG4ofCPdeD7W0II7F3g7jR9EKchxhrUL%2FGqNajUG5%2Fg0TFGMTd0AOoKQX6P2bKhbGm%2BLK%2BtouDIFYtbTZQJ6ryf%2FZmjXw04wIKJYxqc8ue9m0zEMulQmxzrDUOvR%2FCnl6Svtl7e4utFUQ0eQ8eUeRugrzlIi43Fr6UZwk3MR1alzUdnC1tdPskeNoNGKdDBhr8ydzI9dnFPDRXCYd%2BbCijYWvx7HrWbxZIdBpRFcvE8GZggD%2F43TXevd%2FZwL%2FXHybxKzwGK1FxTunR%2BKT7%2FWTHVD18AGz7K%2FcHlwwwuBV60Cxf28%2Bu%2Fbmfwx%2FDgV4JTdblD4ErIUy7%2BUoLqamxnTcgTS%2F3kdTYtVLEFfyo0cs3ICjC3c6ub96YA7s34gYKoPBAl5s1jUMLowYZFT0v0hpvKbJY0p4XiWeZ8Xp4b6iBZEIDecYyZc%2BxLVGJQVvDx7ekPt0xy%2Fh%2FFHPhXNb64fIaatxGca5M1pIo%2BSG4Z%2FwhTtNzLxqjBHfVGmHA0qQ97WAr9sxGpalcVgrou8y0X0k%2BvVo50k9PMZMN%2FD0ckGOqUBkztc2kItzDKPV6HqxVLsncAQuzCWAkKt1w5OGx8RPy0tzxS%2FS2Qxcyjjiudzj2JswP2vckqp1pHdiGWJ9Oqi03rq28ruOVVyFPQR5gHEmbdoszgGFuDApFe1vhAgRMna4EG0eEj5YOpNQNxvT0KOAJ3rFEMq8mmURyTbowudzl8Iiko7p3cXTvFC5iFDh4CmWuObh2ZkLql5GS%2FXKcuRWovbPHZE&X-Amz-Signature=255fb5438771411ab52431c79fe953893c5624a7ad6cf9f0edb8d5d54b2f5be4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JGEABG3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDH6nrIvuxuQXQ0z8kTXR8L%2FmCorpoQs0SJWC05XtdT2AiBP0f6%2FzneGO%2B0o4vAyGAKU51RATE15hg5c4VlrfBo8bCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMTk8pJQUoXvLmkE5KKtwDKKS0vSHt0pbL%2F1A4vRH8gTAW%2FzUYES8bGLRebjVN%2FkjQNAvjM6MQw9iiZ%2B8iEJq%2BgvVF1MrjKCdkLmX8%2FqHutM%2FQQ4hArvo8drzc%2FxjJ916fQ8DeLen7aD0qZHK4YyKF54FsU4HVX53dTulkC%2FtU5DYsPke1w0v0IaLIvIJXAbakNGCEr%2Bj6n4Dgt7LkLuOCe3pXcbcLrKoNEOY6jroBauQhVSz%2FoVkpNdfxnpnktJI3BtA5Vnpy739ybzccEj4TgdiD%2FbK9oiuntrxLL7MI6SeAz%2Bs2aHcOfwmyCKrzUryyPy0%2FjbcVVwacwEYfH6Qi3R4K8MSo3mWHa9aQJOKnfuvUO%2BrS651o0yMLQ0DLuQU5lmtZ0DDfhVmnXUyIscRaSwmyqspD65xUqDM6Bb3JCxlV74VMb52Nqj%2FX8%2BpqKCTH5RMkd9neVmeQGFh2uM8lx8oQK4hC3IO%2FuAAR0mWCR0VHgv4TLpQw%2BQ5scgVuALKLVikm4rih12A5Wujv%2F8IhT%2FupwJM%2BOHgK42WStbgUGwrCgTY%2BZlgXND4831ltBapQNRPmfGFuhqoHElic57qSDpdzkZUsOPx0EtMlCt6ox353ecbhhIyuLpL8fKOw%2Bd%2FyG6gwYNasq3wsJg0wyMrRyQY6pgG7lGx%2BeZTEN1vwPva56Lag%2FQgOxPwQ11IT3vCZ%2FdGDQv2lhJWsG0v2OwCZKBJ8GdEVbkw7SDjUYgUjbJ%2BXt0%2B0EqoQvUEWWYLITM14JoiaQSsawLeJDYEQVbnye6ljuKbRel%2BLUbP%2F22FmMqBSTIQHtvfJBiCyDLKJTXPwCRLuChz2mdgIYykwZj06DI2ErdpIvOlCcHPS0BUvlosDXULA373Mbusz&X-Amz-Signature=3d20f11f9b9dff37d34e4ee5fc94927ddedb1e75fa2ce0f4718b0b4fe879a6f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

