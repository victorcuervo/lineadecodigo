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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZCCEGVZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIE5iRdyvvKunNPXlT2CwTwe%2F8PgCWX7lKEPYgH8akOTcAiBWR%2B3ghxHG6dFX%2FQjdq6pN%2F4ijMalG278RR6QtoBnlSyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMoqASivD2mvJ6NCKWKtwD6BIF1%2Bot4VfykKmycVFYwpRQLN%2B2bC5M4FCJqNGSrUMj0MFJEqt6he3WaEjRiklFPYsTMVVTDYz7q8rPVvYP4tTr%2Fx9dCw53ql%2BflvU%2F%2BL8Qc2cJ7Vi%2BgDwmaaVda%2BO6u5IzNdZiH5keBZBd6le4D8Q6kGJfjSMnhsR2Bryq%2BvpEmy8iQTY8eMxhFWbUgbC7cRxQbxeDWStqTa1lJBH%2B2W04FQ%2B8vp%2Fq55O%2B6tmX4ao2HOIjkJ5AtJbGxp5Kt3vt8XyqoFejwzDNFA0xFe00l5AH5JuQgv3tL2h%2BjKgWquBQv31aHx5tKEOew%2BUhmKT5mKxNx5xjvQgvHnJNDoMAD6nclf2nBz10CcX0O9qC7%2BCKoioHqVjSY6H%2F166qo9B1gMgG9TVV1YqdkC9QLMXuIdXL3zst0ZNeMAghjYXGf5QkACV8kciKYe0f2oYptYEO7od%2BPu1w1Xv4hXTEHX9ASYU11FKc9lSWLhz68CVR4iV1PkN2OiYSTL4%2F7wkm4fOjJ8Y0zFR%2BVqrqKuhGKyuuTdCS%2BRpNqamZPNea3mZdd8fXcP1oLSywTc%2FbmpLRwpaEqZQbRoq8vum1K0Y54cSJqIqM5WEUMGJpggDhRNoRiJblj2ss59Zk1lrqhRUw2ffCyQY6pgEIVqSHyTvLFN3FC2fe67Yw2oikKl1RoV0614xE1fFkNiYjLD85lOdojlk%2BdpsJJFnT6JOuU4YXx5rtdty8mKPcU%2BvKqSP%2B43EHUjGbmNZ7i0zleWTIcuNu3fEj0f8ONWQ4Jf%2BIirP%2BoGcA4bWFxtm4VKZ4AGdzo5Su3bsw5NMv16CnDK7TsieTPTenNgQjTBju9qBZzwChNaZIaRb5vfRcNaJMAlR8&X-Amz-Signature=e5a110899e852fcce1e9a574638456a8309c2c6f1a3526e9f91f17f96fddb360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAUQNYHY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIA2h7ojKA8upV29JItysr5sdVsFI7Y1mKSPU9hrn6dsgAiEAnCzKXYa%2B3DkAfuyadso0Zbpp3Wrokh4l1N3LWdSVpNsq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDNAQYf7EJ3l9ymMGjyrcA%2FLX1lMsVDPfPLRdhynaKZlYSMqfGqhmaYrTE9QWrj1gl%2FJx5Wy9NNgvR3t6jbRpjvi3p9iqGjEm%2BPs02gPjh6D1DUVjHtiy1UcjQwNXhBOMevwGfIIlIO%2FXxpXwwfL%2BjhF56xY27wTNQ5PFk%2FqmNqdcigLnLtsdVnPylhQiGimZhlznM3X8chQ%2Fk%2BIBETeOH0LspotuxTanHAS4pxJst9VDpd5yMn1BpDOMVPHwTlnkYzSsczN1OpD5z2g3fcxD%2FN%2BitCMcoNnWZg77wBsyUg2heONifuHCjDGlKM2g%2F%2Fs8bKdogZW%2F99HD2b33ab7NmTpKEScfH2pBzCTX1TipxLuUbvTeVKBCkGD682UAhjdijxZKdiBhzxU8VqmeIs6j4OzZUWiCFToQhQPZoVT5C4WFZyU5lGqJrwD6lbI1%2FR9kdpaRTzAvvrD6WovDuL0SR7Z0CYu43n3ayaqm2B8arVJdgFP4bIAoYbZPpjAt11XCEwZ2fURYygM%2BgV4b1JtHVJpgzmLrlOxklJten3zVsnnq5A%2BOr%2FFP127xixoYCCeiQzzUF11Tbyj0eaZ52BvCi4jjKwXSCkR9r8z6is4k7b4GgT2MxMv%2Bguq81YxBejFz9OoA7XLeUgpE0Y1rMJn4wskGOqUBpt5I0ECCgGJPLhyDKdQ6f5%2FW4qNsiSAGcptiJFNOCUYKOGZnLtxu5enI%2F1T97gsoR1GfcixgOWDf3qZYJKjh%2BjKycTMsrRMcrBTpJmzhRnSogXzLthlz%2BSeBOl81bcLP2as17ef1ibceMdlcOLdHCwesqPvOH%2BtG4kh6l9XSyyPTMHTJZF8SY0ixtV%2BTf%2FtQ05QiXI4xpJcFKH6oZ2K99HB3G5rW&X-Amz-Signature=1b8800980a1057edac552b1d6d6e83f07fffe6d1c5067b148e0c933feacb7e8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

