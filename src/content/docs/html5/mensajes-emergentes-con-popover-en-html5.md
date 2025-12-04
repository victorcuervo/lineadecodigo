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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U6CQIPZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDRRSJBsejsQcy6gWnx6BYviH85EqYGIjdU05ExokCaOAIgFAGZEkA9ePg%2BLQctB%2Fy2%2BGyBZIRVnNVwgZY7JsjP1wgq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAQIqcowChj5LxPYuSrcA2HDBKa5BtUgcU7ixIDNftcM8QpxXbriwkDaipRT%2FGijiX9NPxqTT5aFucvSx%2Blp0lxfEelP2OX23fTEcOZT%2Blw622OL56EvzgaLwEnnhjlCRH%2FsCbonNaNFe5iVG%2BruzbVDCHlRnzw0SoVuMmlEvVit6HzuZxe2VPPQCTNpiFjuWInDU6%2FfpK%2BMX36p6PsxNEFqbpZtecWAIU11LczLcHYmdeGjJYuIcWV1wF24rPsFMtLGXUcuJzdnVY1r47YK490BeFoN3jGODXVPfAPch7pIvexX0JhkCcQPfukdq1YobaU9WDZLlZEkj0gS19HdMl9%2Bs1NL2sVMFgBoP193%2FD7XY9MxGh9x1CzSOJOC6fOgWp18ZkvmVAsRk%2FrhAaCzmagS3aecMF2KSbQHzyiCrKjyjp4uU6GURzQODDzQg8T2NFR5GsTRV4US1og7Czp6PcO4wPdQJWn4%2Fv3%2BZASXFZ1klX6m6SqYKgYwIlnsZ8%2BBN4N0Z60oy%2BwCRTCc%2BWd%2FKTWs%2BQQEJuxxa0Q0WL2ox%2BhwdqowuI9vGzGcAgb3zQb%2BjALd2knnbWXNrmO9MDQsGcOZfwe2Fzr9sH0MGLOqjAfw4eIbshAHMMhboNBfhHo2Vk08tsmAOFNFg2l7MMuUw8kGOqUBvvpfA3s1zScfCnJD6R7fR%2BqPK%2BzQcFtSsKRcluAbPBB2d1oJ9WSWzI71g0EA%2F0ICojuUiCmYj3A0oRhSfQxO7QaCMkG0%2BNH0WFSUJUgLD3a56U2A1BO2vjPaZGyHg62esfmEUOmkQWuDTC92KdoUkRBVbPRpme5mWTy4EHXKm29btXGnX7WPHR18pZyqvRSNvRFYs%2FSfBrYAfRxlBgiqc%2B4%2ByOo4&X-Amz-Signature=47a40919c57fc5cead30e9d0a9cd44def24f1f3593cf1dd071df63e6a8a92e12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVCCS27G%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD9f1IwH53HzJtz2EnuM%2FsFNv%2FJV203HuwHzUzDFsuRaAIgShu6Rd5L8ipyuLsKRTCF1MJuoyd3GWGHM0RMnG%2FRpxEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDPcuDK6NmBJNJJ%2FloCrcA1ofKh6iKyYkJQAJfakwBsSjPjFOT30W4mAmEzDDYywa9aNx8q1hHAmkyHNq%2F95MrYod1%2FozkzX%2BlU2tBL6YYpFwiFeyy26CO30evxj6BdrhxsQljxUJ5497%2BaBeUZihrgGZny8IKd3eVG8f2a4beyjTcSXoSAR6ukrp3BzvKEmx5kM6qlvx5ThCB5XUfSVI1tDIRjA3s7Nfm9Hg3xvf3cbLp7IjmZLSlew5kb1G4N%2BgfwnQYd%2BeGwQgFBtY3XA3sY75DitkSfp0OiSiUMoUZnw%2FRSuTMNS9Q0IA%2FI1%2Fo5I25LWZfTADDZJGrf1iTAxOpJTSx7zBWUgPy%2FMkRmk3w9fhxMRy%2BBP93p0dNI2QCLoxO6cCdWGDo8pulFAGJHAkpYfPIlTa8ihJ2M3AVdfDqpg0%2FZb8HYsMPNGSBwYhTk%2FsegYioWIlK6eMH5BMCF8LUkx3P%2FiuL%2FrdQlCLV1V8pokScrV6AItDfm0mcxDo9LJlsGBOKVsTa9yofD%2BtAFsUui6k8%2F3hassTiZm%2B9WAL1LQiymWylsYays%2B5Wea0e5dNjXUVbtdnRCK195WpXlwVx9ZVVhOnPdrmRIBp%2Bo%2FUxBGwgW45hQj0CslL1mRyST8IRC6tEA%2BlnjRyt7EIMJmVw8kGOqUB%2FDBOlSxWkoK9OZZQch3tzz4PqVlMI%2Bf082WfjSIx0QrZMgeKhWPIVIZjT%2Byl8wyvIrpxup%2ByIn8EOVuUx9LlHuaijjBG4LyP4gVLrOmaxjJBMLp8p%2BTg68HNMXZJUO8jjTDpKq7TDUjG5XRA2PX6lcgldDXeub0619k%2FsLJqozp%2BzxowvE8L9hw%2FjzHyvyfLfyWK8f8SXVA81PDTLaI8OpL4L7Rs&X-Amz-Signature=d6b31810a23ca6476a1a08f53ddc6a6b0e946920b7ca34162d6b6944e51fba89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

