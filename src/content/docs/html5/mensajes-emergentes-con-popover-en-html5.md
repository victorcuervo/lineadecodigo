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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYRGJ62E%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXJLyEt44J8Yq9V%2ByTHP7JrhlJz5lFAyiUTXiMubEvtQIhAPwMLJHk6ZCQWSEhSYzzJ0xe7xHU%2F7nGqG%2F9HEPFFYhNKv8DCE8QABoMNjM3NDIzMTgzODA1Igyv4PsOFAZQRpxqItMq3AMvdECm3vGqDztn14ch9vQYXYvKtQpHsBDkXa2rhN7smlf%2FVfB4%2FPzRnTtsdg7Lguwc59oeoNFvs%2BUx2ug0LarKbATa9ZYXTjY06Tc95QXYSfQPhypc3m7HyGUk8WZgGR0QmZeKZDIXRHFyTOuxWGZ27pC7To8uIIO9%2FWysr6APMCBh6llJpwvpf886lDkHbMRTfx0O1D9rsvtoSxlfTTSI4srVIfKWR0TGBaPgc%2FIIZhBQY1Y0oDq4MuyM36CfBMI0qEKr3eQYicZjkh4otMjX0z62xI8cr5oKwPq5U3ismsK%2FmEBAUt8sY8IZtUXMM5zVXkAcsuRjsGk%2Fsk%2F5iSUqR2U4VWo7mBVifqWexXlW1xfqhrFOrXOwQHmHBu7ShMPOXnqMlyT8qytE1U3wZ7pGzacgjOOdrmJxvwMKHgx0P%2FBhdvJZ0%2B0twn0USCb4UxwSRfrCItuupwXxrV5UNApKeXHAkzK43rWYKg%2B%2BCQ44ifRfCC7RpxUYnc1pXDlnWCHaJ2N7jZ0v2UkhOaJiehNEefdtW4snFlsdmi6m%2FuvWWqW5frn9LRUGzgKEjvnAcs9T1VgjtngSYKYTaqzRYKegLV1M7%2FSysCjBgG5IUgqHkYsFruzzEt3e68K8ojChjMjJBjqkASc0CfFEdOrXXbUcwSSUs1P9cqMgvV%2FlwXR3uvWoDFfBXKlmvdjc09wqxMI9zV3b0VRsK21VNXdca0yAy83SB0%2BohaUPARWCAJ1JW5zPfDgUS9HX6nXPNfilDef%2BzMyjwoQdzXlOa3HEFYSnF7aze%2FMX6WOrd2M%2FvTWGa%2Ff3R%2FLffM%2BfxdrTVTgECEDELqvhQMnfjY3fLCXhZKFTIh55HlLaQ%2B2K&X-Amz-Signature=09053b18833fd0e6cee831d5435521e9828b1c0c351f3fc2939089aab9dffd3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWZFXPHT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvr8Kfl2%2FCqD%2Bu2tbP%2BePbLIGLsU9ZEvV0%2Bsq4Y2tLUAiEA4OHKr7N9DsOtXescuhogNXHDjLB31zHofk6OftjupUMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDP1I%2BZ6MKaqw4QawzircA2XzPcrtpm0okCnzpv31e38Y1tJ%2BBUsmiadrhrqveTkJ6mLKKtGb27OP9dUviM8GaiHMWt5gAzY7aXEr0xTOUvxHIcITlDG8W0evN5sMtBOFU%2Bl1D%2FMXhZgYeNb94q9ypsBv9%2FPLQnFJo9yeMY69%2FdLDR5lRxo%2FSc8eR6De5tYMo76b%2Fa8GAXllkv0y92Pxa0kxTLge%2Buac3OtcuvwtEK0vSyfLksjO85%2FzYRgDsYQz70XAKZPpXrtAY3GONUmLYDPQP1ouXqLGU56aaEbRloIh5KCpYfOIfASoz2TLbGdQm2m3P4JvcJgVnYj6ihHPyQGLYj8nnXjp%2B%2FYgMwqdlJlireFd3TJLwjOEWvb7hrjESY13uobuAch7pBvM62nogLm1r6%2Fjp4c2d9AEneFjc5tt9wibWvyfasnDrQrARLL0sHYo3Xqbrm1axqVuUWC1PjhYJhmIQA%2Fi637jciMDYC%2BNKxvKm3tO79WJ8qZGZGPEv57lT8Yggg55N%2FDgqNl67Dopb4OaZc%2B4b%2Bq%2FIf2G1e5XJ9oIA1XryvelxcHHX0ljkjzSLBGpGW%2B1jjlvx8tZW0KEZfUxUBFnnim0buxj0SNTX02Ms8RhYzNGzyaRw2EF6%2Fe9jFXiaHJqEV%2FmtMI6MyMkGOqUBh%2BwDBBwkNG3BU3EmbrvDsM4w09yeHbAFk0Vxy5LxgKCPlTEUWUBHNuGfp7g0jXmUlybsNzyGJYRy8mv4uBLDmNyUUJZu%2Bc4%2FeGuiKJKXkRHg%2FgToZL%2FZKCo4Pm%2B7%2BSSIWD6ntIMU1D2AKcb9uAXUw0l2CP62LdaR%2BD7meqfSGK5L8X9MOYpOiylFPlGXqZKJDIy5af%2BLUaAyDUDBkpah3sccLHzo&X-Amz-Signature=5d1d5bff79833c4b0ccada0f22f7e08aca2149ad5d4a07541bdf7a9210671b22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

