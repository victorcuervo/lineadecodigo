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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z7J7XPI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T082031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRISOH1RIZkQiGvmTIhMoivAAhPuvZHJwVTF98%2B5cxqAiEA%2F9x%2B63r55S3ws6c5QEMr7AdjKvX9PYWp05UVtERixxUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEl2vJHaO%2B2hUJw%2BWSrcA4QiPENgbz04x%2B%2FZ5co1YL7RMVAW8t%2F7FYrbHFNaKFHyWRxfiNG%2FCIWjWB2Rz5CBUcc7FxjXLG%2FvyXglxxqFW8YGyQr7mqyu3qRy3mShmf53BAWkawF9gQaMpLxIZrJPGjhmSveGDP0dtWcBDD9ulmqOGq94vLz2Oq9JmYUiF1nwVE1bnfODv9SkiW0ESDDaNkADGiG63E3B3Ooa3VvNTqE25%2FrbXR0E2bZuxOUhHow0q7arjMobFRValnQ%2FhP3W4jJcrGBIvzz1Oaa7kv%2FzPh3rrtR6sXNqfQ1BIJBKXZWt6MxfhCUen2ZGe8f5Lrdi4wCQD7xZ3Ozfj%2FvOegzfmra37EHWfGPM%2BSsNOCbvoKFb%2B9rIkX3fI0PCSwSo8PFdiDXb2qJ667aW9Fr80UFjCuckH2LhGfhY4Lr0rserl77UdYiWxdTD7GGwV%2FaCUU%2BCugj1ERVdFWQC37Ye%2FKwA67OfsFt722D0owD0gtl12zFEluGwXK0VMQvpxv1JyS1zoe3pHCNxhoenl3HuebOugaBkifpBR4pCtUqPj5BpM6kd9NuycMDgGOXvknAkg61Q%2FoJ3qQCIEFI94NxMUDpHxXxg%2BV9%2FT5IvuQ2qr0WTanlASxaWCCVWMrDO%2BzOlML6W1MkGOqUBNBl8NSuikQ3j2aM9zTz0H%2F32p1BzZ0rvLqwZ6w%2BmmmN80vJyqv64VZvkLe%2F%2BNIg4erutwbykQy0TOGcdHCOyNKXRRG3b8baY%2F%2BBObGIbo%2Bb%2BtYn7CkkToh98MEAnEqljOYNdAgGmkPyZj9MnK6H4BQRuu5aCud5X2TYpXtnhkvhTNIvkr8s6PNSnPMlSV%2B0gbQgISddwYLoEFmv1zI1k5o7o1bm2&X-Amz-Signature=5474fec0b9df084cd2b0ba7481c2bf2fa49b8ac6ea241b224e17e4befb714787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IM4DIKO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T082030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAk21bQ4zhbtmhiqh%2FHSQJxBa8fMYzaLmcb%2B8XPGqcJyAiBQ8bwPAb3OAOm58lyxq9c0jRk7NJJbRigoLxBLDl5pCyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgXl8FwPS2PKAzt93KtwDAjhzlZh3xQ3LbWTS0Do5TcpIlpzP7Jn0T4ahGgQbcrMg2PVMz9M1x2X5mp4Ie%2FOCqEl%2FSU9vyZoXJsp8DwmGPhaPCKbP5IlgXgOllgrm9ICPNiOopEbSyNEFqdSOA9fXYEklr%2BzK5Gobe9vb5%2FfHLLSTvNh7bi%2FDWxwjeOFmtCotCZXY4FBs4%2FXHMJTEeM%2FC0p%2B%2B9u8YHvroqUaNXL0y5MB5j1lkkJaknO%2B3JgCpvM3sZ0tlW%2FngE7QUK7Azieq4QuWqGhO9lRRrcJlBRUlQ6FVCoPpEXOPXE9Nj4lHB%2F%2FbF2LAZfoxrTswukBAsdvrLNppwzI45Ek50YaRbvCU5pyBiescK29alHYR%2BJRmTtCgWxuAp47MWRAAj2hz%2Fam0N%2Fv9YPxGtBifAsVp3BDdjkbg%2F0uQ2zGPZ6pfiagKZnHAYAm4RUiIzLY%2BNmC4MQowatopCzM3N9mZ5oaLEVF%2BVYauubJr2G9DtSvPrXfUWDFUEZ2Da4SGFPvtkymsuj8%2B8ITs2gpPl6erpBZknJ9AR7eVD3NUJc8fUwO9ITC2miEZzUnKo%2BRMTlx5v88SRyuObkVQWFdJjebsaRXkGGipg%2FokGAfpXud2b43gV09%2FSV5%2B5O8Pyydb3blXzhxMwq5%2FUyQY6pgGVHKn0vlbIANgoOP6Kv5EUvl16bISThXSXeqW1XSJMt77ivDJmhU36EBABxakTd6wzRo0f8SJZT%2BPg%2Be9yormww%2BuXGVEeuKBRld3gmk92kIS%2B3PfD2ojjF0lxz49G3SCfBsURJXYE4yXaAc8RlVOnI6I1rWJfxqE2pJXAGN8mScuy5R8KGKaKgROEg6PVzeI1qfoAHYxu%2BUNTDd7W1mfMQmB%2B%2BgKl&X-Amz-Signature=734bd87aa29ea0a7b0121a900765d0786d86e905dfe2537262fd441e51ea11c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

