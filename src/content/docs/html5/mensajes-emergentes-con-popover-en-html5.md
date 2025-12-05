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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL45ADLB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T080946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCzIrLVI0l2y4CE5jaVyfM735p1%2FjGMUvSeokAaoCwg%2BAIfNvmkJCVslMtcYHjQe8otLLyle9uJNatI2lTEPNGTNCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMBrXvON6A2uTDL6RDKtwDHd%2F0uCHraIn6KEMKt981ozN1bHqmzZAnfJj5%2FPiIJ%2FehAGC%2BTgIJP%2BD3yuYoGNAPXMzfF8N9mDzVpjs5ebDnTEtImXc%2FrlqdDroBstYCdm31p%2BFdM91yIuHn%2BzjNb3ye7WTJJQCnp4F6YLNnqRroCsAa4n%2FYWvuEYRYlRnD20IXoZQhlJIe4%2FDx7rWQoCRcmPyOELgDJZQO%2BvGvGTvVqjnWn%2By1nZUE8VzXkMjAXReKMxxn1cm3LjRPUatzTBjTcEDROt7X01kYaIWgs%2BLX6TjxCTrKINF7rs%2F3APxomDpWS5MOxOmyHirQu%2FjbBwOGzp3MIOYEQvvOKKhF5hVJ%2BDQ%2B9%2FIRjd%2BPrPOsbUuZ7JKag1lWwaRvsHB0Rg2k5gpFOleMfMlVZmkiHF86%2BfrnED441inQIGndIE8Nx42EpRV4bcPFQO6S0W2IlQ8p%2BSv0IcEQi0CDRwvldhc9GhHZl%2FWUZA3XbNlZsezE7aXamAYCJLzncM6Zo8wRRdC%2B03uBoK12927hheWPydGf%2Fd59SaUWGdI%2FrwYHSx7NQPYrD9k5u9fCMcpV2%2FAUcTfZhY9eK2vbMBcVH5FWsbE9QGHfNU0PvErAoMTTL6PpDm%2FUp%2BXmH5r32l5LYHflgyaAwtqzJyQY6pgHbHF5RHXBOw2anqXUA9%2Bsd9b5phmoeHIQcWqhMRbxuMfs9L5ZIpZst%2FIGPo0uNQLkFw5IAKTov0Dm%2F2CjSqG8Ii2xQ4x6YH9Nid%2Bakw%2B8cgW1QFoJxScgOBc3ueV%2BE%2BSdFWLsmYo8aGLwGupruXBLcM%2FdyoYlN2JqzlHoV4g5lNQ77yfayi0VXHMEbo5sHM%2F78JWS%2FZX5cdC4Aep0idhHKOoDCAS3K&X-Amz-Signature=e284fa4e9141376d6fc50521f7faeb20f3def16144d1f1642e323874f7621293&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HTZW4CW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T080946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICe4dsF8hthIeWZl1hJwns8jGfYXWeTF59JOUCBgXwj%2FAiEAvnSi0ic4QTV4jGq2Uiq4y%2BJIajDF9axn0AZYHcsuIqkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKwLkwGcFNkbkEzBsircA0doNpUy2SYs58y9ZNxAablALX0gQNwddAO65qM9oUYkRAjW8XeRtBiuCQVrmq%2FeqCSl9fvbBO%2Bjrih4u1APvHRiscJ3Yq2EYSXT1LHb6lYgVLbUvQo%2F0BfOeiGgwvzeDZMuGAqxkSksjjMOQXZfeOhstx3a2NVsUn9XVoS2N0%2FHdFsu0Zd5%2FC%2FlwEk61mGS3xzzDX2E9QF%2FjioL6ngwmt6THeNuVw2BE%2BR%2BvvJu6YBjZ3C4tORnSjRWPH0A1euPc16RnH58IMD2O8CE%2FfvlcdtSy1VkJlEunykc%2Byoj903PMlTdpKq0e3TBRWxCIZEznUr%2BK2h3YrsHXWsuYNsMw0ZChr9JRs8mJNBVW0UsRyYFeRk%2BWlazTn8P32eisfG%2ByFQSYdPYgbrEUlzDE5PDEJW4hs%2F5PXce0tmJiGDUaNZcmz8xKXhcEmxKU1ySVrVOC33tB5xvIQJOZrV%2FxXQcHUFQryiMRWscjLT8C9IWYGWfuqbBlOh7WpSgNRR9tdxs5QoQs%2By1fMzJzXm9fi0u1f0oKU88E9Y9LpjbxTssdykr4NEupDpEamSsqPsmsxg9M6nIqL1YTrLznI0dQ%2Fv93KdCOc3KfF5b51BR9BeA1SeU4e5JbqiEEX3na4tQMM%2BryckGOqUBaA%2B7qCcA8NGAswEgj6ZmbMuMd1UaoeyJ%2Bo4HPY3RgNFU2x5s24EOsrtlpG4zaCir%2BM4eV5ebVNnjLDgW%2F8w8mB4LPDIluY0G9JowDDlQLR0WsqjCyp%2ByuzK%2BG1GSbwQ73tYJnEljNxeNxvF51qFBl9k3t%2FykwZtlza40Tp8xlK5HG8QuTmJPxP%2F0CXYu3C8TOGeUMtNL4WXILQf%2FBiKlKhtEbZuH&X-Amz-Signature=c4e78e9e210c691cb574aadcdd7332f830b9adfceab958cd6ca34671fadb15f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

