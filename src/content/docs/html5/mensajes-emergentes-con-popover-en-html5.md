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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KEYVCG5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNdMphBwFdoweDSnlS4gTNSA772YPFPEXoRim0CczotAiAPMI%2BRVkl2fR3jTXm%2BccwkiOmASSCSho%2F00kOpbybHdCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPo5794xWoHYUkksvKtwDkZ3j7BJvgjA2fEZdjm%2Bt1sE29VSe0g7uS7k%2B%2BpWp3FdFp%2BFvMoimqxN0CzfSyxqnPBWIsPALD7IIOzLvKwY0kAzZ%2FTvKFDHjCE81qSsYMghvIUeedUEue%2FfLVuaDbB1mImpVwSX3ZJH6pWqBiFJbR6i6VbDRkZyRc3qnVmZIxEMKyI0gKx0cjNlqAy3P2f5QYYFe3HmC70hgVoN1HEVgPlevVN7j2MWxcStTxe5B0FlgJBYErPhJfXV%2BXe6cQRLhNC3kk0JayZA3Cg3Clc5Sotxjp2dFvErRjTNIRr28z%2BA0Kj%2BE7cpuInIm3Rrvm%2F%2B%2BihhXuZ8%2F%2BqjTqSbKUsWakibRRuvq26Mx1Jx4Bdf1KJGn1cz7VEgMeIthZlCX9NdpXokQaHwD7aBR88YcHA2kd7A13xYCdsZ3uNuWy184LUjiFw1HyaGkviLQjn6DREETFyRHGjHtEQVBp9GHz4NzFP3zzJbIxA2MAkaHlq6C5PQ7%2BcPABjZTbxC75vetP%2FlKmh9eswNd4C7elLu45K0uQ%2F2tKb7HSILnJdHaC0jsNnNI7SKVWu1ZSNkYMGt%2FGaq3TWge1YIyxwYY9zMHCfJqV3ugtH9Ic9eU53hnDHoW8d2FnBNnVSXb2w5H3Pww%2B%2BndyQY6pgGSidFc%2FaxJcqEgAs%2F7cs0rzsqbLoHcHe%2FuWxE9E5XLEfBjZz1Scm57dCq2SdyR2FHcSokYZm5V5dhxVP5t92L5jF%2BDELB8PvAe2v2VVzVv0ipHaWFouzAZ2JuYXmHUpLeKatV7HiXofI9B0vIj9ha8%2BErs%2B32DneKYebcHeY8lL4sbU9Y2Pgk6kbYyLrXJoQTgYO3UtwJ1ooDBg2W1qD56MoNiXLg8&X-Amz-Signature=31142e8976bc885f91cb14fa6aaa29da7b354476fc1545fbc6506279de13bfe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C4DOUGL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUrCKQ8fbTAhG9Rq0oWyKT36ehbvGppY1PBMpgmfiBCQIhAJVpItfQHMFP0OWknXGjkkId9fVRkHOlBFHVLhMczoqgKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3Jia16oLNc2l3LIkq3AN8xySnJWG3F%2B97h1OTApjHIjoJ35ge5JCApSIBfI1aDx%2FMrz%2FYqqGl6KkpgZeFlr5ENTXMcNgujwIAd1usz%2FJBkhVjJMsmBUylEetx6FKNQw8iXK8RuVtf5GwMl6%2FdTUNfG5SKoi7oUIGCekqaAcBcAyZ8wkfCSY4u6iOGO%2FHipgp%2BX4BEEMghSZDzk7c0OZdafQWAuUbn6CZXr16S5jRWz%2FcOoE4qUwGO3xyUyt%2FRaFZvbwqJPPOhV3YzdggfEZ6Svq8u1FxkEpvc3iRS8%2Bwy%2Bd9P%2BlkIz6aSTAXi9fyuc6bmFpr%2BmrALA%2BcqkMDDMcgXaRKl%2FlU%2FpWCGI3%2B%2F6osCWYM%2Bi%2FwUhHN73Iyx75%2F1Zzut8nqoWpFFdTrEn8V30khLjxrsUGTIpfyJDaFybFjA%2FxrouDjGTdVuMF8KBGaXsf2Gzos8W8AecYjD%2BibYRMdpfi8RnK1LwzWYmzVCuqZ0TwViFK07MPpf%2FS6eTlJ9iQqL4uLg9BPT%2F%2FNl1t8V4dyzd714DMgQnSJdRuGCKD40KLuFbfSrwHAcJ%2Fj0IT3IOjsbKS%2FmcnKUVkSdp5IlTgghuilx5yuwmqxjDiWD9BAqrVFH7hlDIxZs7m9z5nt6LguZvQDeMFB74ptjvDDe6d3JBjqkAdTUuR3Kw0kZvPqJgZDqSc9J4HbyEpGTDVixhnNJt6n0boZTpE6deEXlmMRb%2FLwv7sxqGN9otCiaeyXtLZSsL8e1Yb7DoYcosJOKYnXo%2FJhmAvRTDH1MXSkQXQeL8k9Ic137kBSHIlUOk8xFZuTA3F1t79TzH5GxhYZro40%2B%2BJnzSUpCNzOPvL6%2F1%2Fcnx8QZt%2FNkNKDT%2F%2BqT6RIiUJDH5s6Nnq69&X-Amz-Signature=f4c960c9ef3e4291f68c8d9dff50db54c44f577e5376ab57327ff9e99269ac0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

