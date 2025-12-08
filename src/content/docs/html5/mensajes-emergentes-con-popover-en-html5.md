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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UB35OS5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T233949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZVCgshd%2Blpp0DK5XWwWQlDFSO6MMzGOAdGOJ2XzNEfAiBI1RqmUdrgcd1otlFV2V9OLWWKA189Y49Fb01jBC7vbSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwMxUwDWGNVQscYXvKtwDvemD%2FUzIU2OSaQM4xbz4p3K4NUatbIC76BH4Onnvo12raqW3jzaRDTYwTmW0PLnmLiJvehAsv9ZXMG3eTf5V73sWiGpYF5evIP62YU1XGWpn%2BzsPltpFrQhj0dvs7XD6AA6DJkIy8c8fVWqCmYTE02a5YNyy0jOMdUWW48R%2BZr%2Bx8HKhy4nlraBGpTfbSs4ElYBM1jweF0OqXAj7%2BTZg%2B1jLSiyhTkJJFsl4I2i%2BpAHAUSc9FCOFYE2pCk5l2%2BqqBJjKgYFtELDxYOko%2FQ2e2iOPjLE7bliHykQ5v6%2B1CcgTtoYqO6ocm%2B%2BN5RVRKsxpBJIn1QrURBHJNA%2FdDUO%2F50e1c3ILqKxUugoxltK9GQG6gxG2K5MRrLSsbt%2FJ7ya75EIbMTnM7xfJzA%2BBDw4ndcwHYRE0RWj1FGvOxJP%2BnTgQRx6PIbXurcKinW%2B%2BIJbFGTQff4OOJrAeJ%2B49fwwji%2BCOG1AgHHvVJt68WCcplbrS4pnbWEBMOSZRsrDW3iLCSJkKKOy%2F7yCD%2FwwqQQdASxf5wBAQiQg4ajgocAn7%2FCPrf0kqJY00mpLrtfF2bL4Y7lXQIvADSdpT%2FAMXWhl%2B8nMIIWa3jbVmX%2F%2FqU1s49BhK3S8aKECd%2FBU%2BAjswtcLdyQY6pgEB92AdiwxdpyYFQZsESAlRc%2Bv2on2JyIoU%2FN6vyX4dREotfZGZRDrxK9G13GGX4UE4AwH%2B2OkZvNlwDilFYoSLtE%2FW9CEXjASMSgh0DACrlJwf6ExUK7Djds1EtUZd1NqtzumVhltwoSX6HsRtabnEvQufG2cqMi4m70dS%2BxAazbSutmKCHLmxLggtxt1Wfn6XX7J39g8jXE1fItoD%2Ff8wn25EHFJ0&X-Amz-Signature=66dd8872a339940700a9302e2af5ede16fd3e2ad927b528f6e4141c65aa7ef6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XGUJ22U%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T233949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTkkJqpY%2FAOjrHnGwwDPjthJxR69qOZDtRaCmJQt7VDwIhAMnSV02Uw%2FhwDKVV%2B4H6kRR%2F7lrg1F2VDRBASrCq86MQKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjrzCZTcePccmvcd0q3APqPkUKNyPyj9bC5rM4ljI17eugKLUa7ORtuXLwStYEtwTQs6sN4v139PpY1yTolXLkxCuV0iyySmgLW6ptTs5fTOQQrVSe%2BD3lVdsglwIpSdDoAH73f7sWErzTjO72ihs2QmLeRZQemTOV%2BgYU631B3e5Vww%2FqnjpAPtm3JqThDDvaC%2FevQKzr2MEX5F8DfcoCmoVf83kllx6qIVYO2DkUo5FLmyoXJf1WZzlPKEaeildYnx2qRpQ5fkfyINtTizd5tyH8tPcDgS%2BxMElwpFTdjy2aaS2R8%2FFAuOD4aStNNrsguQyAvVii0DmD542c8L837Yylr4vexwLXm%2FDxwPmDH7WOEBFe1nwOVgIjFTT39v%2Fxn6n8w33DBjGjjjJiK52Q6XONi5JfNVSpK2xexBlcvky%2FD79Wk8DJjUTR0KwZe2LrtM8kpzqmyvXRfo%2BQDeDJRnxlh%2BsM6DZNEFm8ZsKq%2F2d%2BysUymEJTcLbEdcJ3I5d4KZtPWePnCQfuW0xu9XA3gS8d9J8pZJbsK8%2FVJROwuukl4ODg2EsKQKxEmzociLfV%2FDKQw%2FPsbJwApkJsXD%2B%2Bdq57QR%2FzUjOxujKoNMriWPzBKlzhM3WlZ5RzK%2FJ5Ai23V%2BScygkLk2MR6TD7od3JBjqkAZoD0O5vWATlbZL%2BhcQuQGXihCcyhHIBlfbJGoM7X6byfk12uhMrwwAqCfn%2BhVBkrBwHiU2%2BLAani3ejGJGBgUnHB%2BJiMvsji%2FQ3nvqEppvqf7voA1bJdFB4g%2FbHNEXvkc2DA0xrqVzDHH1ULaXE2ceCgsBlVgP0tO5%2F32F0k%2BkEwH4B8Bi1ter92lUU78WAzC%2FlyKHUTeaIh1QlmL7ztCazBIpd&X-Amz-Signature=ffbf0b7e65cfe2d7a11d05c7eb087f393fda4056c21ffcf8df8b7bddfb7ffd94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

