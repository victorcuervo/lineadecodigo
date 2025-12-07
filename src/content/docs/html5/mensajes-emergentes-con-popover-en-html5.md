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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZVSXCHK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T190816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrgnhsH1Ny8QDihiijQQXChcqO4a2BK259%2FwaLo%2Bg5IAiEAzzZYcGU2fxX8NpagcqwXetf0V%2FCLl6CyNUuFK%2B8BbSsqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMFSM5A7oKkk%2FudJSrcA%2FTpJqSWwPG4y0ppdcFlMbVjm8OXwonObUh0j6mKHWsy5iyrbbUB6eknrCojNrLY5zXZm5uoaHg%2Bj6IlOtHm599yOqH7QBWhcAPvJd1sEGjffz1UdI6tlX8eNjpuFHT1WZOTrCnfXoUvDA4epCTI1CWFEvdU0u4xroNbkI%2BiEKlYQN6O%2FxYyn8C2DJ0rWd6U8SFU2cIZOhnUklz8M6JURtMf0Gx3ibNtHRXHGevV6ZrB4oKb1p%2FuQsvhfv8FgYJ0eRu2if3i9nPNO6Z%2Fc97uMkhSiv7%2B%2Bwh6bt9rk0DDx4SiOA8K6YNiyFw8GbOuXkOdIfozP4ceXL3EXUZLUjEb1QgCC7tlHJs2aBCU32BbeDArAPD6l9ZQus1xEqqoofnQWr18pUFOaqZZINn48xEFA785X1lx%2FwED%2BUdl5gAOWx8nwTsi%2ByTFppyhaSzV8y27%2Bj8ODKImT81njRkVRiMD9HReJ3T25zNGKGIyeXbx6gzB5Qd65iiLo7IdhtPaY%2F95HliaLmp8QyDLFUwZ%2FBiR5H0OpUBYTCAOiUzARs0b24wHyeFPEQWJw2UjN3yhd9bXyusl9g6IeXBmpH6%2FuUoM0Rhsdsq7%2FlJMiXKdP0S%2BFlXpwm%2Bnt8AwHbH%2FyGRLMO6%2F1skGOqUBT%2F916kDZ%2FjDYVg2zj0QwPOVycIsmMHDKWUoYqv%2F8r5jpZll%2BnwMOMsLC3c1unGWeOtNG%2FcJAwpVpdT1sdQbFDGonuLsMjN8yFrqqTv9fMf48tVmd%2BkxTXQ0tjfbuEBEbQD5E2Lz%2FnNmmcLyGs9rk%2F3WkzvUajWi61cLpYzfO5zh21jsbEOAxYOI7VVl4wVZJMopUmfb3Lz6XrXmZiPhmafzBSEob&X-Amz-Signature=4aef150c73ee0f81a73ae5274bf4558109eba3e24037ca424e99537609b50678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWT3PGYK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T190816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUsJSXn5N76GbM96K8V6vU5SzP%2BP3ni1y7jmj2D34%2B8AIgeLUP%2FBOKafyefydbzMY0ri2CHIjuY5LGPJ4xXGdOil4qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKksnp9BVzu8iPbX4yrcA7L6kZitBDo9KdW8oqBivuABw2cDNtgi2A0O9FoGFvxULgELfIjOrdyk6hV2cKUN6Ydgz7nP6SOv42V7ffQBLBvl3pmFMrFNSnxQBo84eGdX23IyfoKLMfUw0daiox5ITjCQ%2FAc5IELpuAnTOCAqC2b5GNJYPN7uS5jYEHInu3q%2FRZ7HjyA%2BaEVKZjak6z208PYU3q1Ek2INReenf7m0s15YEnHEe63CQxEQtG5PPOJIvZ4TEi9tvr3sbdg4BVrzGqJ5bUoh5Or96vTc%2B6E7Ho4kM1A0eFnYs3HDCudWuEvrQa4zsu3H%2BJW%2B4Izm3OSBzPkKXcH7NPQqaOA6eILjCieEcZgAO%2FoE8xksXWbSaMxDda8CthAJApt4ywix6v6QlEB7CPwQTZOwyhHKmlbHOsu3lMxqPJJmViGjMo%2BtaJrwxTTYC%2F5Vkq98m1CETFQRhryJ41pwyv51vJQ3b%2FhkS99QoIe5x3AIwvGlSJYAESF42BsPCeZJwjou%2FJp7JYwx6MXh8To7NjpECHHeysinUg0grjzMXF%2FJMj7Xn7EsrKA%2Btq4DkblkhwZ2q%2Fx5sc7DiaoREP2dnH2QXkVCJEUAy6QUNcNXzkEVUhhXKU72eSjc%2Bbbt6S2c9ib%2FceaTMNS81skGOqUBlC1u1GsPKpxzKriHwOqJCzCrP%2B0mihWVfV2B3P9b50dv%2Bo7KMkO198NPvcnOoPZD37%2FegDNxz1Q3FWpC9jlCg23BrKVeT0dwzs6%2BApDtxYLmHfN8iqde%2Fh4DuKz%2FifrCabanze1fw7CIQtv5tAcfS10WSf%2FC92ps%2FG5cKP9HucvHPs8NnEdB3bT7htQu6ExwD7ahg2r2Z8rCHHxFOyFk9JiuaWiW&X-Amz-Signature=765d4a42c724ee25e52a26d83f884f8cbef167e98d88353d0a9c9acd3418a18d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

