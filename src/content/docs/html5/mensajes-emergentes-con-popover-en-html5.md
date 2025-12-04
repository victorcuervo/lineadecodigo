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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMMWW5AS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIBuEtGmjcxsN6BhGAO7xy5WvSmReYX%2Bpi0evo4N%2F2ILLAiEAlunX5Y4gra2%2BTvyWAkYHAbSfKgvHRCB6uXNo0XrzAKcq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAaFok6Wm7M1Of%2FuoircA3IlL3RDE0H%2BVjb%2FScctjCVUE2kIcPXkNA0JTCxKoPF29V9P4TQ8MozJSnDCCg2N3TfOy3hRuQpH76GQykB9FNHMYfgI%2B4p32bzXXwp3SucO0oytyWJC4xW96Ru94XN3nEzuI3EgOcYE4IvkVBDx9fGUFv6%2FKTX8Jz2h5u1a02IZhELCddeojAwCSchu%2F36v1Ug7P5PzuQQyk89nqCl3YDWNJ4%2FVamP4MkL7bu48aR%2FALG7evkv3V4vAS9DG7sTQQvK8%2Bu1nSFnHHfNUIt6e%2FbnBRCQObqKmQocK4TYazAtcQjjgvFgonZCLYcpttBiW0x515gAOXxGIn%2FdnR2hFxusNjPYKdYXTLBDYGyw5S1DI1GKLu3cC2GozA36NNsz2u2o%2BVhrxu9LVoP%2BmZgqrpZ29nKwmItj%2FiOLP1TFtyR3k8AQajdHTfAoxxL8BAh2QW39uN4JvZ7gUrualVrbvnjRdfCeR3%2BCpJg%2BZ%2Bq5s12kAKKVksonEw3NZ3PCTSRZn%2BnBmN%2BSGOed17O%2FvMs5K%2BXXgHZIuZGGuU24ytQIeI%2FWUEDqMvEyHpeRWLVtenSVC6oPe%2FqVw9GdUIhU9vHSlsK6m8W4rat7WOC%2BVihBDG1%2BXU0L%2B%2BMd8H4nD2jB9MLuuxMkGOqUB20c68hoDDJeIL9VfHiA7Mb6ilxvvsQpLlV9WYNH02yP7Hp8mdx55tmL0jx35KVDcOzC4RiUYo8G5yb8TFBDizLF7kQ906o5ssKNOUQQFK3MiU%2FG%2FpWdBUSigfzCJu5HiiMUm8tcIuXC4USf0sZdz4Z2BOgEN%2BTYmCMCwx2NG13lh%2Bo%2BZJik%2FN9FD5DzQXYrIfTkTc3mK%2FtKAEyTZxksEDnETMe%2FM&X-Amz-Signature=aaa54f70492cc36b65eac0efb79c313bf6d733a8db93fbe6a5b0dcc3e991cb63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S4PJDCU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQC%2FPE2GM27BXVb2%2BHY65pd4%2BdckzkVr6rQg%2FPpD%2FdZjJgIgB1C9i9xXd9hAVFnHF4DFR3SrSOmdtZoT5wXuvOh6T1kq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDLwb9ORcHj3HDstm1ircA922x2bKLKmty1h4kpuC65wMZ7CBNERRxuH7glj3mZHFJB8b9Y3VJfWy4ObhmsYfRviM25UKGn9rsPdiifjwvLVOO2jcu2l%2BRUGgEpPP1PJMC6zjRBTq1CdF4z%2FnyDfic2qjh29UTvWrBdcg7%2Brw%2Bq3IBmpvwrAQaVnmMaJ%2FdxodOnWolDPYv%2BJ8Sm1tvwaRnIxDPAg75YRIZZ70fu812VGUCbWhWcyUI0rE6a%2FTJlY2oxtLfVwY7oyb9wFFmGSL%2FKZa2RkvLPYNyY05Tv4CTbR9nQPnunZh6hQFNzhK8kJCWYYTEiYLprlmT8mRRBrly%2B1mOuAALEAmFHdf7nI35ugRsL0cGBe2c7%2Fr89vuEjCxD4x7XH3vfLtPnI%2BiKM5FXtNy%2FDchZKLM8nP5GplAEHBCWrN9IqHbAF5AF%2BVBfKyyFLLv5LstejxsHs5iLLxJMQwz7nTc9onzwilPTfNsd%2FrO%2BzvdfJXEOLNY%2BaaArRuTgunjB1lbG0JEtIRTBvMsU9EFlmhni5rii%2BnvUzI8JypcVVGxpshPMpYv%2FflLxSYcGxoB0zlAOsh2UXyK5UdH3Q7L0t6eoCNSrgDD1Im7le6BU0a4xswvKcgVN05lKsTWTCfwxd6JRR6Pi68aMOSuxMkGOqUBQyFflUOZSLwvqCAxtElIuCtuFw69a6Wg9MpR9k7%2BXnfbtETNJmCBbV5rkVkP1GChimaIA7b%2FDuepnQ4Xspoej843VrHKrCWdD4YgmflyUaPQvM1QqvutfWdblErmRJXkgrIC67vfpDR9nhSwD03Ye5GNR3YYqu5RNIjCAUVkogqr68kPPFbDOFunALhym5hnFJ4lrgGzUhBhoX3bMsOXb8b8zdnf&X-Amz-Signature=2fabfde678a7d346c33304fce22dcd9a0120a48a9eba7850b278cfeac9c04681&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

