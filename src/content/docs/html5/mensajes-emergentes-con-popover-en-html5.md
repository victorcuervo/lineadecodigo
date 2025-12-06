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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNHL5Z2H%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAj%2BjgbiMP0g2wuEwAEciV%2FlAOzF2gc9mhkLbjfGAnw9AiBQ21FaxJOJ2g6htpRdNCJLJatJ%2FWZWmIwMYZrAEpYToyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMud4emYLL7m5zNMXUKtwDQ8IaCduno3ynmI2y4Dh4p%2BRF6cpg%2FDn%2BMeZwyqvNtOhDXCxVmA4X1bc%2BBJCUWt7BUwrjrBf1uBx0ST3uiuNShxVHO7F%2BXHHydwgX6VGqe1w6kY%2BlQMrtlKYWqX1Wk6cMPmRX5oHPIhyqBKaew0252hys50rbhfe8ReKwcvntH2kx6YfnrMGZ5MGRith4NnSBnqngikdrc2MbSaDadeil84BXKqvKk81jew2wN3wNdEtsaCHNY1N3egpmKe1pBVrjl5qocO6zqorqQryDMCOhX3xFWKMbDnOCpQlp7uY4Rp8gtbdVPDHwb9ERmOGfeWAFbmGxpaPy38%2BDEe3bMqf6byRQSmqDC%2BVSE5Bf1Ma%2Fqp5iyh%2Bb%2Fqs1QkCvHMSiQjOlH%2BHoYt3v3uG7Rs%2B5Nm0YfosYXRWWlZaCkTGyMG4WrEirtefi43JbUVN1Meby3YdtJdfkbF5k198%2F7alakPTIeq%2BygzOtGo9dXYUt9ciuKYv2%2BDoksx9TjeNUIW2DY05zZahTmUfANyFDNOiLAA5E7oBDsbZAGE2HhBzlJHOuyhPZqyH3dGH3KdeizwgH71GQPvGJtHclA6bv7PbtUvhUe8spGG%2Btjz7k9n5Z1mskNxoA2ZeTGIhwZPJMiNYw2%2BjNyQY6pgEDSqaOWpbApEmWHPEOD4IonSt8z2kSr1n3GnyYiJ7w%2F1uHakz2MwGDj%2BtIqqAjF7ldfR8MLXmKukTsuQNgPszOjLOs5t8vb1G3syIagWN0ha2AhQIzaKBW6ppEjWUebKZ178BEBsMHnQ%2BPs6w7mIywz4KmksMPecatQpYys1aBbpcpYutI8ton%2FGHJlHYEijxyqsiUSDrR9VuIFbivN9M9KP%2BEaVg9&X-Amz-Signature=e58053ff81196220bccd131d0b08037fccecc7c6ef01dd6e45d8471cc7c465ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q35CMAAI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0i%2B9VGOLOtQMEH%2FW4csZyAlQOlfI9sUyZZ2yHDQg%2F5AiEAlF32DJ1DXFn8u7XVQpmH4wWbW6W5dbcf%2BWcT2sfkSPgq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDHAQVG56YyrAQalEMSrcA9H46Zfpoi4hor6cIGVRUVFAl0lmybS7h9FW42PmbtvA%2FMVyJlolcyo38sFmWhqq%2BocrXxuMLoSdZuAfqM%2FviKeHzK%2Fk0Nx3udzhwyTAOpLBa98d41GC2wUdmAP6DVFoW%2BRiiUUNsbNrr%2BivI%2B67feJrzERCnU8Qu3Dt4tB55J8GGNNEWqyE2HGH%2BJEPoro5wvQzuiqRhFOOocEVR0j5Wph1z12dC7ss7qZjte%2B5rBc6nY9vWJKQCRuu0zc4J7ZNaMkEh%2F%2B5zSGUm%2FK4lD2OSNkhearG1havMLip1imyQw0GdnAeyDXpr1msxwAa6GANqmNeKdmJKhSGe7oTgqtq8UIK8%2Fff%2Fh%2BaW0qaYMZTa8cfp%2BASIIWDF%2B%2Fo4Y3Mc%2BWjubaIxCtmUs1hi3JgS%2BC4%2FQp83W35v%2FSk4Qu947U%2B4m9386HA2TF23oXJn%2Bsbxa14vrYsh4aGJelwl4yrsfAeKhQcN%2BeHXBi1uf39AS8djaOJpOZWUV9Y5SlLaW5AOGF0XHL%2B1uHpI0rMBAMWhHtMFQ7YVPzW17XOLIlUD67JnnavNunoNk%2F%2B%2BltOv8m45yBuzXDv6KsSYXEhh4kc0Q%2FA948oNgOX251LsW%2BltQx%2BlT231p9lsl%2BX1FnZSsIAMMrozckGOqUBisvQxarBF6%2Fcw%2FeRiWh%2Bs3LYvSCrio3pIXalyrIDS%2Fd%2FgrcJk3JXa3tHkfUnxttLHXqdCriVE6UlP98abH1kNEzaFpzhGo0JAgFnC3DgOCRCi1%2B236RtFlmOy9bEmYu9S9x6McokaBHxAIJpVy5B3gbGGnDF86rhAqGF8KTyTP994R6y2nizmlxFaUkWsXhS1uSZiuQUtxiTI%2FTsMQ31c7Je4tuA&X-Amz-Signature=b5faf1ca1ffddb602b86c99ff64ef00d2b3485527194b819bd2c8ca25d1360ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

