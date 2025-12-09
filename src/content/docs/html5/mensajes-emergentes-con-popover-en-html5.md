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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA3DOXEA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T052429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAeekJGbZ%2F9U0cBXxbzRwAarFY4nsaZgqKfzI9qi0g1AiEAq6iVG3pFysoSJ1z58IIfDs2vkUMYSIGkRKQBtssb14sqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7vpCOlrcUaWBymzircAyhd0YUaooot%2B5DTNKAIcDbmJs0ChI3LTwfWBo4Eb5TIcBi%2FwUMqPtMrLZADOA6m0DsdGCM5b3XLKDxarlefCCfQZlKYqBch2OTyK2JB%2Fc8USwOSeHC5zaQ2AY6u89VRNIFx8WvAnlw%2F5XjDET0igqyaL23dIR%2BAQpjSs3KDOXPqZyrQGSSuRJ%2B4e4miOIiyHq2tkxICyTdJIr0BqLn5ChP0NVhfUW23HpiwogcbT4SiTRaKmsYrL3hNJtarpO8%2F8PmdlvzkpHukUJHVTfVCWWiUbrFBW4XnpyPoNkD%2BV1R1qn%2B07ZAnzgqY7sjxcvjwBHEY8CJqDUBL52aryXpuEEjAimNSuavz12cTU5XRb6FNuNfQdsM7Y598L7zYshqptv8DOuAwrf9uqQ0%2FZ1iA7LWLgct8Q16bdjdH9YeI5SRrnq4UOorpxMJcpTs32x6J2eza%2B4PXGa4xPM3mufyFFZMKz0pswYlB3y0JJOcpKABZ3dxtaZy8Xp3O5TqxGr%2FlXbX4PuwQOQbV1pnu6Gr%2BJageOng18snp0ujP3DIJ2w3LGH5y8QT1V8ZDitPBRz2ZnrK7%2BE4E9ookZ9ONpvaiCHPxpEADYR3lXeodqFkuP%2FWTYxWZqH34DC7BuI7yMKbJ3skGOqUBsipXv2iIYMT3RI90lsNgBE77L2ja9J5cl%2BXyjZ9vdTzwvRv2iKAK5SFQekNxE4g9E444Zw1vA8qmKdrGoYwcLakzJw%2Fu%2FUa6LvilR2jqx%2BgQwgGMHpfa9G783Ysf7jbsrT67JKh9A%2Fh7PYdQ1AgRFH2lwLsPMw1MLbz6s84VbxnW%2BokPTOFHH%2Fnb6Z9aag0gEaEHF0Sy4cuq946NK6CL7w8UADtc&X-Amz-Signature=208d0cb8f1d80dc033063803a7deda89a58b77b343c8ab6b6674a84d196af110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PLVV6N7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T052427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmmozMlaocN1gxD44egkZ2Q0VPSifVzo8JUHCmfhAB3AiEAh8uXtnwREjnND7kVeffXH9RBeGQ81whCXDOA4gTdkRkqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BARqIZKHq9a%2Bh8ACrcA8pg5iiDAuljgqaLgXHxcb%2BzI1LT1zFVgKfC%2FC6cjdJ2JUVwuuvJRFRupQOgdM4mBIDDPA2uLVCQH1bWBVwV2gCYsqnkKhzgL2nErktwavcgB7yiLpC8iZBDxzmU9gf8c3AQTsC4Hv2CbWDKBwYOB8CgfqF9dUJh8rG2c%2Bw89AwoopEBxmzSyrrfU%2FalWtuwMeygG9juNvmWJpc5m4dqLy1BvpMkL102KOtoAtR3Gc1TlrITYZaTCZkWa87W7rHi001dQi9eSluBXaNpI%2BWRA1NEnXB%2B6hAAF6XU4pNx3Be0imD9aqc2YZlhSUtUr1IzPmVrvrQ6jx%2F9EwTseNRxkvrl9BbYfIwZ8dmu%2B2nySJbAZoLXGvBmXNKC9v92fvt93L23Is74gaadsvb8yxyARwPRE9ltc3Nl4M6QeW7fyE4ghVgLuJTmPuMSdKz7Aj8LVE6RgIxZ%2BXXmIqT9Uat1TWjJZcVQkG5HmkwTMDeCE6uz8AsNyh%2Bjy2WAN9HG6wObNet6Vo1nJYYb0t%2BT9BNFxkyyjWkDa8k2v6Hkse9YWyrLLN57WxZO7InXqOCRlgpI1r1uG5zl4JL5G32A0bp7xiazbNDhTifwp%2F6HDvCj7XewhCQGNW82MhYDqczBMNnJ3skGOqUBWu80rxYjYODzw6%2Bq%2BPjW9htTlnF%2BQPVu3bvUIwKZNHQjCIKEbiuIfM6laUPMFSi8j2gDtAyJ3nx%2FDkoBxz2lKrZFUNUpX%2Frg3LfDdOfR8TRU33xE%2F80HfxVVRDayYxKVdqo9f64pKgUhms6of8w6r0gE64AgNgUx9ppfs1l5XIGmtJbIhag522LQn9IgvyKkB%2B5oAu2le2AoXudnAw1SPvp8CGpP&X-Amz-Signature=7b3e3b61c90e080cdf23a981074aac79dc32675af490619d9b566893124a9a92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

