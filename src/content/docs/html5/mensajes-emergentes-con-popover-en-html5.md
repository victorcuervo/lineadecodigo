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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2IELQ4A%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD77R36evF4TNdqiuaXT75lJ19Dn3HqBW2j3MfMFhOF6gIgfIfrS4VkQpRdiejZiWmKVB6yRL6LB7tRufUKAmJtKTYq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDD8WueOxOELGdmxRSSrcA%2FLo7IndHGmdpysROZ6KKQMZWii6IgWFB%2Fwah04oedBdDFYMpuNEaDuFJOxdQI5sNF%2FBBkmktiRlGlOrOb6qfsr940QQrYxbcKjm1zlxObZlpM9N9rvMY1fAkzyWIuAJ0zkRIh92nzbJaablIkjCMmpWKBZoLruuZLGvlNImPfM5pUtBw1GMQzKvB9FnaMsJWCspyIeq8o8IU5DDR8Ej46dxghnjaacBzcC0ZB2QqnCnrIExgjY2UCmJrKt2islRDVb1DNMdMyG3rRcBKfjaIGlUOvE0qTFppSxe9hJaU5m2IYBuSoGzLEgHEsxXr%2F46Sv4xcf7zwWG2r%2Fjqr8gvkTUCaVznWaVipJDdiq2uijh0jPZ3s6DzK2N08RjNjgpDmGZAOqnkmPOOEf%2F0l0Dj%2FTeLZNobp3TZMvWHGbjjgGEWeBcuawJgKCXGtD6TapvOsS16%2BWnZ2FGld5iuPNPp56ENApLNx6KiyexqN3exRnKQfOxBJRNa59olvE5I28CelZ%2By8%2FjVP0gARfgfcz1ML5cM%2Bx4i1pZkkhYBf1bg0BgoIGkNAljrsExG44%2FpUtqxdFXePIwyee91AmSI4BcLy%2B0Ea1YEpbwfa6kl09G%2Btm3nHQaEJ5NJvTqRyVcRMLusyckGOqUBYMT0Ou%2FE5kzjynzntMmTqC2FyE1rzR1gwvZ8SQHfRcTl020E%2FoOJ1t2A7E3nlO1o5lJXz0PktMGp1XMS%2Fio0jgm8UAe4blqkuNAFy9UQ9L5Z1iRcjz2i8vNOoaERahtlP2oqap2%2B2SSTdlKo%2FtDx2XCzmNo%2B7EylGwNdIgrap90AX93wGJHaUaIH%2BzE0xAWFLfQBhmqped1j%2BK0YECnDdF%2FtmR7r&X-Amz-Signature=b64910aaa1e50ac03d2516d98891123082405b76c674f5431b596ec897d27836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OSUWNC3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7AKHrQU4En%2Byn5kcLK0uofiQVIh2JD9IGRM58agg8gwIhAPcGSV77%2F0ZyXuUWAN5cu4x5kC8%2FX72dvx79OTvJadixKv8DCFUQABoMNjM3NDIzMTgzODA1Igzdv3KRAHYjfaIKRO0q3AOiEYliWT%2BZ%2Fbd7qZRQpASbl87vmCqbO%2FgC%2F8mplI8uif1HjXBG5yaJbmTkl1IJXxNpP1Jse6smg%2FmFlNIfGnRNYEGk6Z0x9Wz%2BpK6xsAw6s%2B%2Bq15oY9xedqvqsZFT6oP0RvEW6N5m0%2B4pIWGMeMhUt92FELV6o2yK9K0rP5eHa87DMZhurU8q4MdY6B6heu9EKeA9uKL8l%2BLGIA7Gs0gLogtFAD%2FlIjw0%2BRKZ3s6Bbds6LQshnuPjlU7OBv8VLqaYDn7jZpX4j6Zj3q5IUnV%2Bf2AbQdL5%2Fb319u%2BACnBx2tXRpWdmXEO0nZ9AXCxmDt643dNljfMcQEGGwB08KZRdyrj7yBa0C7oPny%2FpgVkdtiZKjplG5%2B1RfUpx7Vp9vmMMKydVy%2F6H%2BK5xz7Pi7kuR3Maok0iV9kKV%2FVSYk4XkoVgLGN8RM1jV1bA5IvMxO%2B9qjm70ghaGdHHb9bvCbSqB8hpCwsb5Xcwa5UWVw9gQ5pziv7yU1vM426yolWuWuT2YVo3TRFMF7NFtnoNDdfank2zsn8E1%2Ft8uLy82T5ALTGrFi9k8Noi3eiuDeXypSgPHCLib4AGPrqkQXoo2zFvKNOi07RAQkdRBu7vw4QE9uf01lhxysFFDvbb4WdzCCr8nJBjqkAaKU0qszwAFwxsv3fwykdxo%2Bys%2B7XlXBie6ePvhRNAKBPWN0cwGx9Hg3%2FjsEJ4E2LImBTVlCnLZtT9jgzaINfyORnliZGEk1N%2BtAJoo5yO6irYCZSP%2BU7DogFcjj%2B7CiTIbAPOtUyLaKBSbOIbE3dz6o%2Be7gmvDNSI3VhkSjwucVcOYyBeXHwOes17uGK9Jb8B8ZCZto%2BKDzBuBSjUzUa4Tyuslp&X-Amz-Signature=d22efb24a33680946eac8a4a7a0ed322325751e785a503c9214b8c73658370e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

