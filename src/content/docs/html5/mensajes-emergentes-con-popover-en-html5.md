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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HRUEXML%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T153319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwuSro6qWHlhLRMJVB9B2I8aPPl%2Bq34qwYvJI8HewSoQIhAPwJxVjCAmIGOj6sG2UvYJhDpajiLXVReZdL2IqcyDI4KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4YmhLVwtafn%2Fpepoq3ANKwPoDYgxwq4Fyd7Cwgv2ZZxVEcRc9QCfl9aGyfZn71zTOP%2BDazDli5B27Yz4bb7YvwdmUXC9%2BimxKqerWMG1opX928exrVCkGxKw2ZqVAGFmGFPkyON7bi3BWW7qw6dYqSAJEieJmg%2Bo9MXsOGDylkHJyFRT5UGcTrqCsNjymh740J%2B3YuCY7gN5AgztiR0IeDKucJpoLXQbE1ytiT9Jr2B5LiZSFKPHIG%2B9MAIoq3l3HQVrvh1S9KILhJUUowDxpSHfb2zaTjaLhODTewZ%2BKQ49wZHo5VxrY%2F%2BcxmXcJeDpgjGN61Z4dPo67x%2Bbby%2FSY570O3nVkRF6wXaqGvp0iZ40RzwESWKL7ND1%2FDxv%2Fglm%2BVVNVLZ1ltqPFAd1UN8mGKMhaMwLx8yPBDRG4XUr8UXX1hWipMLIpNM0swWNZ0ZIGKjJYp33k8lVhrepERmeJJ9eSurje761CE7rPa5RDqaTbUp2Dr2hPUNhBjhEL2NLBckhMqNXis2ED6RaCtyJIzzGcRYoaUvc%2B5FFkn%2FJPRvCmb7vaN8dK0WjCboaJpoKHCwlDhwYv1mESGnCGtnqjzZTUqF%2FmEgOy1yGtP%2FIAhzv%2FWQ7VdEm3cDMIdkEQDzM6B5VIbwcwONUrGDC4wtvJBjqkAY54dpYzs1n9NaPRyZ4qnPmiYwxu8axdA%2FYrNegReyg0PGlYGFpH4bjxzwBuvbxr8vHUvrpClaDKLQIqRQj4QuaKgFZjAE1ahLdNdT%2FHT%2BQfCeVuX4VoU1xPNzGfBQh7sAXxhIpHH7glnGXmf1tJfryFbjMwGTach%2BH8YR%2BiXpBKrXBiHHUtkT%2FLpo2RQL6fP6%2BZaRDJ%2F84Zi5g6nM0PocaU6Dbl&X-Amz-Signature=d825ca32035c3e049f9c6f10a2bae066fbc1d4073eff054ba0f23a9f93fd5b8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJD2YELE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T153317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPgRPAlbXHHORQhKce4UevRoeAL9z%2FMCOn4h2fBQYbLAiEAipCVEnPMTskqF5lW19HcKB14F68g%2Fx%2BV0%2FQaUk1pHOoqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKIYL69CDibOooj9yrcAyhdj%2FpjRU4y7W7QpTu10%2FOXCxNGBrifP6TRu5h%2BjgYGtxKn7wklTcKLum782oe3lNZO1DEB3N4ozqYerNWzySSKz0HT9ukrRPSYeI3wbsgb3qHHqpycPbvT0VomCUmQFbS6hGfpE2K6az8uCLGkmmLIzyUov5Woh7ljicqZVDTF54VsK9SqMXZIkOHp7VWv3alM1ZZtLy8cFeT8T7P96tRTiaohHXLTrmlib7h%2B0hpd5fqCG2VPGgppoO%2BldsocKxhlfiTIts%2BmguEfLZZ4VT2uoUL813QBJ6av7RK5SxCcgcqQdhpz9QM0gdc27T%2BhMUm5s6uXp9LNQNXaQWKtQcDwzwiVs0mM7GENFx1NU1%2BoI5wDKCWu%2FA1iQpq56nsk2aA12xbECii3fCi41P%2BHJKs61Z%2Bd7XlUWC0ygdcNRULB91nVH%2F3JbtJQcj9N5EXB0bjFoX6cU1pmrNAvqlEw9I5TdzRHLTmpYZKsrQCFrMGcGmdW%2FV3QcB7A286nSuDIdBYADd6xQ3TagdWMZO38M5DJ1Cu4g2C%2BQpPrv078a5n0HAa5PM1caGgAO%2FX1MUFA04aKsOr6Q3FQjzrAHHCa4n1hqvvy7yU%2B7v%2BCJe%2ByjlZINtovJ5YT6s2GESerMOjB28kGOqUBeNSHxbAeO0qpfXAtV%2BgG3e5P%2BMtmdPVjq958gb4jqm2I8PU1XYA%2BRpSMMt%2BNbwl1YOf%2BAiUPytj105DknAQlCbLZ6peA2lJSCda3NPYUb0nWIQ05wH8fU7LLV%2FqxsBx%2B0h1lkL9XJNPiI%2Bqf4E69%2FhjCs9FaVCoT878RLaADzgT9c6THeEn%2Fiw0ygoTvCm9sUQQqHg3q9BiWmR3%2B%2FKkOAG3dv44N&X-Amz-Signature=8a329bc02608811e51a0d16091875179a6d91b93c7868f2f1bd698e321b5d7b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

