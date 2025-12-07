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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMCLD5KO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCe%2Bn5kk%2BVXyhlyffgp1GoO8enVZh9c241AP7a6dXT4AiBC%2F4h7Fm9N5GNX9AhptZtGzHPR5O63I%2F5lPgFAxRqi7SqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiPvX6VTiv9t85SlSKtwD0gg3irep485U9g2e83kdRGWmof0A5h1dIAC%2BKg8gmDfZp9unDrP7LPOug4xvThLUocEjXEKKHiuQNirVXU9RpFWqfcuQLoMl%2BOp49QkCnBxf%2BX6Y81qmouzG%2Fp8iti%2BPz1vzrVPNfn1wKQe7Jpx80C5lOy3Yz%2BWH5lkcPYVIAIfnjVgN7UaQwzXUZOvPQIbesAT2L8Jt6raV0at3q7sQtEhxaO3F51LnzEBfDR7k28l%2FGPUTxbaUw4JTW9U7tmPpn%2FD%2B4AKcBg2IOadc%2FouXzF4VXN5FRngH7n5Ak1FECcbIaofPeTovzTk26xTVG9jovT4CcPoOiMZhu06ynnnp9p4v2pWgr9dQKM0We%2B2X8OJdSHbvr4cATVb11MV%2FG29l1Wk6BQsMJaRW%2BsaGvhirQ67HwkxJiV8qZC53q2gGHhFp5oGE3UrUlq0JX6KwJkmOsfqJlGtHJcTXNy7TgiGB9W1ztjDSIF1miu%2B0DAzmWjk4PgP4AG%2BZstLMCsOoTW3HzGeoVhKpgs7WOw6dU3NtlRLuXvhsJCpzD%2FWZGh%2BivIG6TL42VJzunRr4CS7E2RL0NuIvexby48zeo3oP71k3GX8NXPcL5pA346SIWSl%2F%2BsOY16F6VLDXOsijj0AwyajXyQY6pgEQieu4W%2BoI9ghN7bEbpffVyUGot5RcYDLbRRBOTyDpwCWDJRkcJmULYu%2F0UozBDJylUF%2BzremPqWCe3Qh0TOQE1DP6hpta50TDCsu9%2Bl5hDQn9lAXGE0D%2FWo16arT66cuIz3N0kiu0xL8EeBwecrqo3L9cc0e6clXqRzZbxH9nkBpBhn0wosSlmVqOVofaSSrJAIKo%2F5Zs0bXe4jJPrNw91qhx7p3n&X-Amz-Signature=a3edb07ca59feccb2593c2b21f6efe790973d1fa0ba745c41af34d903cea81ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NGZW6L7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQRWjixHrpcdt3DgeJMvwgqdDGxSS7MK4TgS8TTdx%2BoAiACJ10v7AYINPBbRpgkEMvjuKtq2tVT8Vt8xtvZEKoGmSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjobUuLstYALrT5njKtwDZ1qYahSKLhJ9EJP9iyR7ab1SfbhWEXqrlQ%2FgyfEkyRnfQzA7FFIZQNEbvlcjCQVWDMKGDiorGqvZX53qY1JOxhscpVwxXthH8yB1FnJnsNSoB2uXaq2zfpGaeXdRkFxxwzba6xbrvRR%2F6KhuHdk2JjMrfLzlW%2FG0q96oEdcmufe8udTYxniPPwsVbh7xxLvVHnvPsrcWrG7r3RkJlxMnx099usW5oP0EWRxZZ0euU6e0rBOErIGkeuCfOvLGvsmkqEWoOzRH5u4VRE6SQl9PMxE%2FUmBiNGXoHHi%2FqZy20vYU816fVoLYgoHXlLZBT9Z9lvUSOq7aWTk9TbYMkgNVHTygw2kkLyB0d09j8gCMKC2E%2FQX%2FWFXOgpNIdUx0Q5OieIMorkkqd%2BiORHySYmoqahrSXrb4bUPXmsBGJvT79RmKvbZgCzFhvTwI3JxuVjDGhoLqgwO%2FTcGIykmLxmULdRhPuOkOd12fIEZujs7%2B0LE5Y%2Fz%2Bg5E05NQYajo16P5Ta1EigmOom01Fgu0cit9bIozMGm4KviicFWnbbLYrpSSdnKzRaChvDDnqhDyQtPXPHj2d9%2Bsw%2FiyUpA4o%2FwGQg9AkMcmDBPxQxQzm96aN0Sonmq1XeQGFi%2BuPnnAw%2BKjXyQY6pgEL2g3WZ39%2FkpR0kLPLBdX9oyDDMF8X0Qnh8tMRQTd40WbPHLMMnWm%2BJdFtEQ5RnNRXm6O%2Fk9C0xIsinXwYMhh6b4%2BVBjpBQFIy6epEn2CzUbbL%2FowYVM1MARxxDrVrmOeuBsFzLEJOm0xJVFQd9VOjm7zOQJubc5q9Lbz79Dlgr%2FW%2F%2Fea3tj66tNHBLOL%2FYYUk%2F78IlQb481NbqcZMso7mj4wz8L9k&X-Amz-Signature=65e4a5bae8437c7fbb70528cb61d33ac72ddfca400cd146ae8f9cd1087ff4fae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

