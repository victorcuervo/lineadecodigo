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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZQF7QM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQC%2Fse5%2FPWohlGPtCO%2B36gYURe26TSNkGi1gsVsY4wCb2wIhAPeXrVJ0bgGlTDHLdI18BCBSpwiguLUz40ch867V%2F%2F40Kv8DCDoQABoMNjM3NDIzMTgzODA1IgxdDEjv6VJHXs2F4mUq3AM4XALfhM9S%2B3KZURwjNuBGhyq%2Fkli3QXBWhIXaOGFBJB1IjcXd7kTxAINbF3FMhYYIuWeMWU8Hh7wZGVwBgVp48JVaTwX5TpX%2FjrMbeH%2BIoapB%2Bf29yjBHf7PdMlGob1ePcDWxwMcjkD03txwNEPYfbq%2Fpc%2B0l%2B6UhQZgc1WBWGHiXCLCBRlM4QsJp4E6OX85l4y8MGCvvDKv7yCClgmwQhWmT3oGCfLMhPyTFKqJ4%2Fv1nEJ3fJUY7bbKaYi7243y5Luzj0D6%2BQYm%2BbmVOzqhCE5VpC5f8D076p3NrjlTfLq%2FzjVaH9Uo6m7GyXaY446aR52I379XMB23VUUhe0lr7VIUBYORDcbpS8W2n5Q4vKAomcOWj8swkWBAcEp1Ukozj%2FGkdyHVnfTYjQ1W6q1hv2AkzMsF8%2BQjBugbWMW%2FRr%2FMyzLxt1jl1jgOl2DHXHfC1TCju51F5G6vS9RzKCwZ%2B9bfjSTNjw3IjDCmwV5O0U7GieNTawXMcGakL9YrHnRWJ%2F%2B6azOpjbsriFqlePd1vF5GAwiadXzVfxxNJZwnnoJxjzYcUrV88bvmf%2BnQCQ%2BM5SBzTFb%2FpzzNkpAbBha1l3jcwDHx2DvdiZSXZgj2aE%2F%2B5CqTt6iDq3UJ12DCRtcPJBjqkAWhiSqNCaY0Izp1oUntOuK6IkCoacXIlgMzRDmSJehB%2BoCecOz5XWogMBj6mfcXhuYbShTkUz5cP7SktC4WDo%2BOD41qtl6S4eaGjs4gsCMWjPvHEPRtVRsZum5JFeBGR2q4kzUZI5KcpGqjZy3%2FkC3gaQClkJHSNk4ymfgvLUFVHDvOKEuSXjPpRo%2Bn1EA4VHruPLMepHq1tI2TyC1X2rdJAkGJ4&X-Amz-Signature=2a728cdbb86595543be8753dcc2bc14d634fabb9ccd9624347d8dcaee40a9a6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJODLZTO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIFZujS0bUIwlmUk%2FuFmUbij3fLVjIFjQr1pPw4XbrIhSAiEAv0r%2Fqd8exUYRyINTr4B4PwWiOtltGsPjPaZockQh5okq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDIizbNCvnQBzJER47CrcA6ASlc9vqE3J975B%2BLnjtcxE0AL%2Bb639N58SviXIrg5YakeeEPlZnZ5RD3Z03MEpaeoj%2Fd%2BHU15CNMHmSEeCGE1sOK%2FmYF2Jx%2Besioe8swfqwZDgfPa5vQCjhAnJBjVGcBP70alm9cMpdEOPDKqPXwT1cjx8EwHFFOPmDynEv6QLP63k0dj%2FbAX0BHcxaYhiGHJfbBoL0R6E0uIJASOy4OyvT%2F3imIh%2FzVbhw9VtNlZzuu5%2BmKueGiNwmC7zOVpNFm944b15%2FK9BStnlZvrvEJxZYnIECcksDm5xAIn2mBLdo0ODKUAC%2BSLo6LNtcZ9RAd7Me4iF8smynswEohDrD3jZ2%2BjF4Q5V9dq5vsFIZGqTPx6AXxDLXfX%2BxOQh1XRQ48Fxu3Uu73s1kK5IxqAGsqHd68qQqEU3%2Bt6OzpYW3IMIfyE44zRajJA1b3A1EBO8esQF3DJQ8xRfq13WmKJBr1klov8iUPpRfNWm6igZn%2B9NYt7klm4DU5FEDYRkmN7txF9jMdXoA1notRrrnGmjtb32UfJK14Ve6crhwi1a1DB83aZhX7V5JlAMNN3jm%2FdGbC4NqRqCGjk7sN2UHeDYZaJ%2Bw0uEUjbpCrWwuJhftNqUKFNXMP%2FLlX3l0mwYMLG1w8kGOqUB8RyvAY7UrvSVejS9WwmR4SgyGbyfhiITdknU2dj4oKpfyijCRn%2FR8L8faUjnzUpzBBi%2F%2ByYGHW%2FQYqWWBsvbE1uDsuUFwlr%2B7ZL6aYuozuRBd3o1quzhHdrBQ92kcmnwZpCd3aqhHWOvdH60Q957a2bLqehbQ1NIqE9h8P5E1U5gmOMG72Sw3kBe4E57zgo%2By09Qot8DJ0iSVm4CcsRU544%2B8laz&X-Amz-Signature=6b643d9ff8ea3fc93dae1f2f963f54ec3689f5988ccebb5195b62026a6ad87bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

