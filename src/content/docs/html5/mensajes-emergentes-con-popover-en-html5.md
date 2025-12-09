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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QHC3TDB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T092854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChzKuKUGN3nfkdfse1WrLiJe2OmHtqsTjEY%2F0AsQBc%2FgIgeYE5EMgmEfE9aLdj%2FlLr1TPvfDZfCqtIB%2FvrnrBzD2gqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8bQ8L9D3f9pWlpeyrcAw7LlrBCQIzawDJQLIex%2BwdCqXC9ZLfjj8dkOCubkP%2BhM2Ey4zQfSYoHDQhO85jRcJH94irw2ejP2n%2BMXtxZlD6fHUJG6WtdU1t1n5rQa5ULu9DNz7MO46uyuaZ3sJ6itkKBqxq8MQQqN4oUmXseYNJH8JL0r%2FnpNQG%2FAVTqADkTMk2w09Ctoz64h3hjKnKpcs6INCB2ReyZBjM8TDfkQ%2BrbjgFLmxNEO776gok1nHW%2Bw3kPGWBG1gLToocw0eOsEFQOKWItYEc2O%2FqHS6%2B4ScePQtKrmnXT78MwcDgicqcBBGH9WifQFYkrIApffwSl8QMRFTLOrJ1OXzu3orcITtnJvncXNEkhHCwAC17wqnJC7R5jv57fvOgwIlAl3yn0NIxLSrEkFrS9s4LtFkjOmLZWv8XYmBJFEeGZLF4YGSyweTJEsL8KOJaVqAhs%2ByUw3Hp7X8UtHHp6tMkU3KNC6nGas%2B7zY79ITftlYpZDE7ags92WeTN%2FT5zbpLc3xbWkazhVmt8%2BwW%2F0Uyza%2BnRwp2w7DP1Q7yYPqJZ5BuV2Y0gJN4HjGtbkYFyAlaNjHMzE%2FoFYt9NpX8ObwMB2uWgweHyj8sqn2jaAQXxb9i3%2BX75%2BHwGNS1XRpg1BurUwMJ%2FE38kGOqUBmmxKXZa1%2FT2e3ptEI1DZSfyo9Z%2BR70eMnVB9%2BnSBkMhZFSX9c5X7NOZSFvL7%2FS9iUd6E4WGwHbF7EYt9qPiJglG6Xq9fHPsMnEr96dzk4bMg1vJHbluSYez3W97FqYtWm0AUr8QJINyBDbFnOKZ2nbcNK7t38eOemvjUs7vwuLSySDTKBbfwDTXgmH0FViVqGHOIGSe6xPn160Fg2%2BeJo02xWs9c&X-Amz-Signature=97546e135b59fc91cfc4be536a72b129ee339f98da9a72f6d27eb09d91810176&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLI3ANFV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T092854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrj4RySHrJwFJikzrUxX5iZzPcZwNgllBz35ICqm4GxQIhAO0hPYlDnsxFQ390XulDolnVIyY6Coo7xwQtHHCf5LGaKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxaFZ4iU2CXYKdRBoq3AOKzPWE32pgL9%2Fw5QzDBh6S1%2BR9hNsRbt%2FJrUiyvLMCoOGIbE1ehchGq1SL5P9SV0XmDyF3KaUriV4GwoGk%2Bbm%2FNMYs%2BIwiU%2F5M6gVO6DHRsWnAUFy6QJ0S50ef%2FOLeMJD%2F5QK4m%2FKgD3Pgb1mz2lSXV%2FPbx24PfVAntB68B0RL6aOu3uRU9eNjr21p0A%2BncL4QFpfE6ZY%2FJDk9z1Fffo2DAw1ZACtTkzOgh1l9EQ9w2qR79fkhkqE6KWHty5gkvKTlD17RmteBwPyUICWVMlMmsvNS%2BUED2lU46MH3%2F2efByPaP%2FNUMijYwuD3kaxR6DdkFkVnmGsC%2BeOlZatWr3TOIPnbj%2BL8OycqJepEM65CJJ28NE8SP2Qx72Yyobyx5%2BnKEzoot5LrLJafqTVvj1KwvMbYCTHOargZgMUvzz6Y7cSDzIh%2F2xZO2X5qX8q6pALu6ZTwZd7CjvqYwzqtx1Po9ECwEfwWiQw4vlInWGgjnHuNkaNX3MsfE8JzQowp8RcvKALG%2FR5dz0jdDtBTzShlp3cg%2FdJOnVNZEGxJHKt5Oo6gGuhn%2BxPef1YWyUKSYUulf1ejRkoQVgR5hCVn8G3ijxquJJvL%2BhJdBua89%2F2xTV3Rk1cE%2BEDOHR05tTCIxN%2FJBjqkAcF%2FoQpLC4CmmpDR4BeitPHR9tKpDLriEF%2FGW5j3LXeaBCy63KOFail61rX4kr9BAF7A80PLnFiKAoWHT0oj%2FVgMeYY1ropEmfWTgeKF%2FMcgS1fuUWtOP8MAKufVmS1qpg7oQCkUqcq0zo%2F3mLLZzbaCy1ELevCwJBXQ6VuppdN6Yb66oBcNMTyGRppUoMgaCY6DiFD53vggItjeIFgaKKbvvx7M&X-Amz-Signature=21ebfe0976813292df1077f0d49c88a79ae52ef2b0ae46f82f7751a1367a5a9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

