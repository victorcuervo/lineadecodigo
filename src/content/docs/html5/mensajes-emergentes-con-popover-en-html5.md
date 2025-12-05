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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK3JVQ4O%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T121037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFftfMpxDo6K63dYYdOCdv3NfxZYL9mPoXo7Z%2FSA9stAiBROhkbY4rc5HFVSNxqIyr%2BanlBpPXpQ8%2BBhmIkTUhlair%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM0PJWtCKEDdgCOFz0KtwDbGevozMubKUoBx%2BlDmfb7BIK22r6YIPhn3YvP4GsRl8QGeNKAUz6AA7r9EsqsxfQK9c2t2303GHzh3r0oLEA8TbqD661e6GLSfRsbDMycqgIKFNDEOqOTuxPTcGwTWy6IZ38%2F6vgrVXwtBP6fDXDLCHRsUwKwGJIMcX9Du2WpRJTSFZ8axDQmckqhB4%2F6mebl%2FXvPaYnUuFnRUUOQBBgZH4ighsRiXTwLL%2BpN2vO2%2FFRHmqJ4Dq8wncAzlFMTWrvW0GVPiKu4bgoLAijgS2sCAWDiVB%2FkuZcioon6q9s7eyaerM6JvtlrCHKl2mgvEjt8hncOXZtB4lqgeB6o82E9Qgf%2BNFSYL7xUk3GRmZ%2FCUYGHwO3VAjGNPJEOyDnqsKIiOiUmMSKIDJetUO7c3L2yaLEfDOKSRseEvIvDT7%2BckJyOfc9HwDEANC9FzLYddMEYwduALdrtJMuka6k6xf%2BvG%2By%2FAzc2zA%2FeFnc1xNC4VKo4y3lRjPymgP3r9RUQ%2FA1Syae%2BiWzcSf9TZx57LzRgWarf6BSvOK7PlUHpLNe8SjjOzS2DS7UiNS%2BmwnFBDM7JRM4nzJl0oAPZw%2F3Wc28k90XkEugyGagijb1t7Yd6%2FpeJfgBPqnl53BMbyow3NTKyQY6pgEXgaj%2F%2FN%2Bef74gYwFBb0QqS4xC5mQ6RFqWx4Xj%2Fnc4%2FAXtensIC6qDOIerzkDJ4rNL3x65Npk1D53l0aXgP%2BgB%2BqFpKptjq8UtqaT0c%2Bz%2Fg6SDx4ZghSTwdc3OHuqtX4d9R474OMVVxLjuI36C6BtBANdBUK1o0wGTpFumJ6peOIl1tkeVKfhzdYTHFeMdMV6a0gtrR2JeHm80LQclak1infRpEKHC&X-Amz-Signature=0d067e7aa392d5f5ec953fa6024bba823e295876460336e87f0b7076fd816787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z44EN5FV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T121037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU5HaFFiOtJlgIyN8lrvqn3blEH0UXpAK%2BKJ9Qb1hShgIgOvDQtlGLCt80u%2FJNh%2FHkB7JPGF%2B3pmhQWcsAOcopfBAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNd074uHYLVwpb8DUircA493%2FNXR3Qnv%2Fn%2BqL1YzZFGTjjM%2Bh%2BTnYsZUFDn7OmclwGfel%2BLmuFkjoNS6opZJGN1Uas%2Bceb35Mlhd4iEIBn1khn3Jmp6ciALv8ykgzmRZvILEQ4J5ysoOrIQm45scGEW%2B3LJhBrX8ppHoRLMmTH2YeHhl90aRLm6v5NL6SrUI1QFQQkOHnf%2B3rKsm85rJmsdYEs3xIyWYnC6bCeW4YX%2FgLDPOW3Mr2wKsDH6BVHqVGrptoFQumve%2F%2FZej%2Fndh2Ma%2FXf%2B2PhzSiKkhIXad8XeNGtMqkj4XvyzXOspInxCFwM62leMuIuVDQuC1v3tTgK5IBx2X9CJJsSS96xTCBCUapkP6VUWY3RU9fjqp%2FR6DzPkX1huf2gIp2xJniDhVUcI7%2BKj6HEuEK2kaP6gnyHPAogkFCKrD5puHheSCtcXnPEPGfAYoMQQ1wtPE8tuFODSzQQo%2Bt0Vf8sfZ47jUd5GIG5U2IY0HmGwoNpK0U6JNtxR7qkUirjgiSO2CaB%2BvKLEwGfnD6Xhsb47zZodjbqLt6lJjpmqXC4sFNn%2FhvhzQ7Hmv%2BB7d%2FB2FoouJE1ewTaoQYRbRBsPBi0ivLChST4jec80oikCHwfk2c0dTXb2f8X7FgHCPAzDXbFEgMI7YyskGOqUBGoVGjepgtgLMn6bZNnoHodLrodUUdwixOEbNf1Y4eWutm2JpD4gKb6%2Bg%2BGimP5GtdnGDhD1pVMFJPStF4VjI2wzJ%2FpEAkZyERp8562%2BaiWmhL8sENEjJY3eU%2BgncCG%2Fr%2FA1kVO%2F%2BWLJTW8tK3pV4IhzU4S5gjYV8sOFeXCv%2FRlhpgVR6klSuHC7qctSa%2FMjxFOec8S0qouKqevfoe9T5Iv4aAGy1&X-Amz-Signature=a940417f1021a49a6ce7dd5f6721f6667f7d32929956637c4f2ca32998842a1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

