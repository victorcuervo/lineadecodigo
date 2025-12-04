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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWAQXJ2V%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIE6Wmsx80vcGCrDbf0x7HdRraho7iuh8l%2BN1I4tCUSTkAiEA4UYlqFExwRysmPyAgMAvZnPMDkn9OzZyIeO40TPaxbIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDH1LRUjxbUr0MY9O0CrcA9yxnM5khI3YyDRODPTd45t2OCEewMZy2TmEu%2BdH9N20rboABg6sKeEoTE2GYCvc6l6Lqcy7t4PGyiwcct6M6IuB%2B5s7haZvWh9RwDzaBi8a9AlI1f%2BYlA1txug8WbsmPh1FwLkFFObOwf3M6rZFUsOJ58iMcDDym1P9hdnRSS5a6gLsAIG51i%2FhFU4p%2BnAQBnmq6CqC1NfAVdKW6hrZdDew5zINRSq7UrHr5US7pb7vlxP0mhywXoLN71RCymS9qMknaTdx%2BevM7J6dVhLEeWxCnNPWFfCWSeoEWhwIrKRxXhvKWMM3Ytf4MaVElNbDi9SOBiKljHLZSB9plypQxhss3tbndEq3QtN4r4uAieuEEBBF22smI%2BRHDtQGD69rybtIn4IHLX2ANtWVPwGPu8sz7i7uJF9E%2FpjCZ0LNDe0xuVisIlf9ZrZkqBVIQdPtRveAyUqDAL7DNY7b%2FVwbtf5Em1NNxS2FNvedYS29%2B%2BEfwn13jxSrpu6oINnzeItily4ayctBFaIPYWhcqyFG8%2B11SpvJRvrDAz1GFXeMcatF9f51QkEhTZU4lYJ7dfhtzAWo7FO0qTqJYVu3LbQkw7XvlaA82tC8hOBCvepHTlipPl204lF9iysP%2BNEAMJuRxMkGOqUBcTw%2B%2FVitPffEtIk57g0cjD942CckN1HHvczWh7ne2w0hCYWrUIFaSwragroKg5k7cPRol7VnhhFruE4doJQoH%2FnZoDGzcRYfXqu1gbfC5wGBbLfNK4k441nJD7KDhnGH%2F8R%2BVZ4sbk2hiKFS0EXkyl19TFAXRqmt6spWtsxS6J23KTYQ87%2Fs5350wwrFbKb1kYGheVtmWI1fhQIHV9j%2B3P4R9AtH&X-Amz-Signature=817acf429f95aede6d839733beb967ac3e686d1b3c688c81669332389af2f06f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634VK3WY7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIHcyd%2BC%2BYvvGU%2FaUTOtp%2FPRcQCT0b6gWvq5yS3iPdW1TAiALzPxEwPtIKbZ3yMubCix1BQeW%2B%2BC7MQEsjXJMuqqeUyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMUDGx7P8yLZw2y1NlKtwDJRLaUYfXbZzaJ1EEzfPSxW9w2i%2BquEQ1ypf1s%2FPePeLrCycol4rD6Ai1CPzLrCjXojOAnJoIhgJptJyYHimLvKPwvavuHL70Lc8sy32WjAEimxFjfweOq%2Bo6kOHSDTh9vO%2BPA50i2YgSC5K95vtXs9XN5a2bNw23PhyeowvkFDa%2B%2Bmqj5l2o43%2BiRoc8geziXgmYMJcKXyNrt%2F0EEYaV%2FXdTXQ%2BliP6rCID74BW2pknGoUy3jkZrd82%2Fp4SYNaH%2BuY17xg9JmBPe9XGY28mgYIPvLJiiGguHXYQfP8MSb%2BCkPRDCf%2BHi3GzjlEzc6bH6OsR56GCnzpmz2Qo2K%2Fo3%2BXCNqKi2%2BSKRLEjr7qhBb%2BciYKB4Pyr0EGWNUts7uEe6U9Nbn3cbWJ6HRbQikeSTqacNCl4s2TJS52DgFXdtRv2iCS2DbaiphCZv4FuzQgfNS%2FRG9RPwSpFAQun88pFqJ24vlNQiSl1jCl8TNcEz9C%2FHSdsohOLyfiqPWN6%2BOgmJLQkTm4lNnX9i4xSuXcPD4MgjH7Bdlp9asdH3B41JkKu2qRNuG3fejBQUOBduODPC6rfzjCCkEIFIDbpn9L6CF2vfKVJwmpI8QScm3ArfnVCSWMsyykWqS%2FNbRe4wnJHEyQY6pgE8zL6ff3o7gJdQ76J%2FC3cOy4Iwm0lgKLIRP0RdF0ROYlIUZYTssqhBvji4i%2FOgUo3Zp4FvybUM7S%2F6sXUoCeq99TlLO3%2B6oOskcEjkxljsZz91bfwATB4q0R%2FjeRM3%2ByyR6MyBR%2Fy4bWoeT8zBWdy3FSMmObBfjp41vUfAmYK0Sb02YeY6qeclJwYpYEVBKOITUvRPYxj6lJCWAphk%2B8pEkdSpseIK&X-Amz-Signature=664fd247066691a96d0e4f7fa5d96e0dca0a7c675114df5e974d49940b4a72c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

