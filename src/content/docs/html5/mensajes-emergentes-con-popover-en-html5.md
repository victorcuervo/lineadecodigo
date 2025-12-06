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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664SKFFJR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCn0E4t4IgJVy8g4DbNUEEvLtwnt4BWMtDrjbrws%2BlhAiBJ2Y%2FwI%2FUTQ3VdMi%2BCejToo%2Bm28%2BuqXG3iOMk2SFoUmir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMfi8k4oLTU2%2Fy6BXMKtwD5sOUv0ob2lYeyKVBvlpVsCvIYUt4X43l9pLrtqMb2qgVOMK5srU1d6kR%2BfIayiy7%2BxsTvi210szFvjkye%2FGWeSjyNoABXKYVMeO51nMlUOASdtVJiN1oa1vPOlhSh9hQqBvDLtuZ3FF27sXzpp9Z4R9DQ4dfn%2FR3t7FDXqfQV6OO5qqUsfoOTTqg6Un4d074%2BuVd17iGLL24BGYfSr0MHGrnWXVrerpgOYYrx395iJP2PnHvGAA2pAXNQuIsS2gtJN0tnFWj3irdDIAMtuoA3D%2FHevktmKM7TgRmyOfME9MKcFjvrPxoQImvO7nW1d4X%2BOPyFfhDTiV0bZ%2BIfqLDylm4ryw%2BhWJVsrT6hahIQoOsMY2pMheBbJTIrLSua1bPmfjhNtA6%2B598O8ShinWq4anh5YdCiAz8fdLAFkj3fHORz7ejMLmYtvGJDZZbnLIifhWED7HIpANi3a%2FYHglr96nV%2BFgOeAZe13NLvMO5KtbnHeZf2x64gbAlTSRJDMRJjyen7SchfvaXEfgfNwACvQyXfjb0JuFr%2Fud7tbsp9nb7pTsV55Um1RDcyeSq7UOlh5Nyv41nR37J2witJaQCc7z2NoYwhx9tuoiu0OTOau3Ck%2B7rgkT%2BurMk%2FdQwzevPyQY6pgGJ4Vg9%2FldMFy9iANvyRQcGlCOWl7puhQixx%2Be7mDc%2FT625nYKU6Rsqg8kyZLlVOTpcToq7NxYkfADM%2FLsCZeQtjv7ar0biZ9Vn7kqNP%2Bhdf2or6N%2By00OQvnLfGxRjNF%2B0T4GPQhE%2BzT3%2BmWSJ%2F4chEBLrx5cg7WX%2BTMcHGEZlpcO96bA2Arlm%2B0jOnxTHJrUNomouU86BBDuWC%2FlJ385vsCj0JEKY&X-Amz-Signature=185b4b7eeb2a9a0c8a9171d4a53ea34beb279094083c20915723e63c411cc823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV425N6G%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICON5JsMd3vQlJSnerfguMwvN17LFCIkhB2yfSYiskK%2FAiEAmdmYi%2F1vfQVpSqbqSjxijw5YwZ%2BT2gxjDNvkBXTy9moq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDF%2FPRDJ7By3kJyKxySrcA%2BZ%2F6HpRGRZDy2MxK%2BSNpunF9%2BxFsqJtOF8VrWsVjVzZjLsggn1DpZBRsZLU58WiyhiH37PbrDTQ6%2FzxZApgZ%2FFu%2B70Yww5ftyHDeCgC8dgnCqd1J08hsbqLErJoSwm%2FG13wyaderCliASGXqus06oVg0AmzGGFHiESZcgPVzfwCZfip9CKuXNSoxWPm5NMzgH2tE9lFLI4%2FRV8XL2K45qhIVtte73f83H0vmOhr02MArFRM70EAzTfU7EgXxINIZgnkXp4VCAyrXib7yFsaVqr%2BdbQ5QD%2FGrY8T2FVaCx9nbyt4W2ku5uiw5zvLM4%2FJ%2BpzV6bAuALlHH5L6SWy%2B3ZMpLD1IOWD3dO00Io10lpfRWzHmYd9H9%2Fjs0EloVlEdEuAjGpi5DK4W6psNIVTIEtxHlIrxcEMqYkUCWcBH0%2BxZXyRqH4%2BGkxct%2FkNWZGMuRn3EZb5%2F4IlBlbuZIiv6LxOkGYl6Eil7ZpGwnklurwqslE52H95WCUxrHmi3HyZcHX5zfL0UWjPN%2BJ3unDfrBEAp%2FUlviZNx2TeXPdlRAHpQVKltbEbTSoU6vEVQW1D7cLUiba0QTUhZN04l1St6Ebix%2B%2FKrPyHDhm7OxOKuRdK%2F94Mg5nDQzcsYPxT2MLPrz8kGOqUB6RifNyJaBDiUClDklz0W3Rq5eA5HtIexIuT2O6wIpXQRBDxe9RjvEW4rBobykQ6UwSXfQ7av9jDKv4liZbfapIOLBobzz6KK0qSxlyOamtqVeQnNem7sWlTEMxQmHNIFiRurl2U0lQMf7VvYOUjvnG79FbQLH%2FQl3GS70EmXYKw%2BA8UWI6juR4icknPQhfnKpHIQfns0nn5eEPz5MmxFvI9t3aRG&X-Amz-Signature=314abd013be341fda84e83987753dd6eee4c21bdc6e8bb47660664e6d5554c76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

