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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EZW6QUU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBBtf1Fo289PhJ53DCWim4Je8%2BVz%2F3qaiSesBWQHaAojAiEA%2BjprciOBB29X7D3y1CAmF%2B1noG1qvNeNw%2FtbLvTSxZ4q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJVOnpsfh6mZSEIt9CrcA%2FGGvG4oRelujvAjtrDCsGMB2WmOUIRvMQl%2BNQ7POyuvKLBDg3frF5SM2Xdi1HMCGQSnXGvWR%2B3EV7ArGpqFdUjdvMhodfLvsmfx3wGAtCkn5tu0itNBUt38AjiYsfBYiuLr2C3T4poUyMGwal5LKSHp2nHH8HLak48LZs499XLjHXtyMM2UXa2uc5f%2Bt%2BsyzakVMmDAZZYzPD6cdZlK10wh%2F514%2BMI9kJ%2BqOlaZZqHMwni7GIqY0vJZS2MSqtTM0QjFn9oGlLomK2Qf43qUbvQUlKQF8YFrGEjOARDMfB1Lfb1SxzS3HfeKYg4rZcPaYj9mKxBakz87Qo68P55%2BBfMmhGA1qE4HrmZH1d0O09qFcUe05KC%2BkQe6BIv1YfgGYgyfubVZtqVpz2GCuSu%2FTa5OAFxSA3IeVLVLVHNx6AcbR6tMYl15dnnQzr4BcIiVbIIRizktjSJgZ5cXCuVFLFT4LBqd314GOCWTAaEdsEdBQEqOsyOXZs9VXZ0CtT38DFcBQkqXpIfQPM9LI67xzzr4uEHOTyEYuJhVjeKseP%2B9zNxhNKECY8Eg8aIOLtf3%2BMKxqYRZNCUozdVYGV9d1NZY8gkBFmIhJGAws51XkS%2F2QFKLI%2FZnBMxJw3f7MLTUw8kGOqUB2QwNrzuoEIxlVeTYpeMV2BOEFDB6No0%2FVwJJPPqp8nOrr%2Fk94nTb0Y7oEOjJVycXRE9ntQbh2TvUkf3ajtRD2C5Rzud1iD45H69EnP%2BXUN9Vu9bve%2FXhDrmDB8H3grFDZS8oUoCivz5zJ7NEHJNwzICg%2Fiz4NgssYNg6%2FJVXb7I%2BpzGKq9G1Lns%2BZ4RgFlHQMfDKObs5Nqc%2BpYMJQ5%2FaVZH%2F19kF&X-Amz-Signature=d57dcac2b2639c25ffc367d5f52ad7da386833f55b6de246ae93517db5be6597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7WZAUDJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC0JyDTo9CPwjIRuVMDij9%2BR9g%2BXF6N4Fx3MUs2wOpjywIgNa9UoaMlwLAdRYxkDLxmLhVdqtXMUTHz73WOWtsDvegq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDOdRTnZn6DLa1EHJKSrcA3iSAAWoRje9GGbIQ4Dgy3uGgzrZe%2F4dHSN5bwoZXrjczIZE8khoEe9feZ6QnaAiOuhAMLDnsMVHicv7pp6KcS%2FN%2BpT7BTSxjorGUtcgWVu3fbZvVonYCRwSUEj1uJPX%2B1R5EHLJpd2G96oKgxcXMz3WRvW62uga15DEt0ZNSgnqLNHh%2B12X0M1MdrF2%2FfKVkjcskBeQu4huuWXSjwx4amHi%2Ft73b9Cgg%2BSvNrOuuNx5Q9LPO3bxMfPLji5S9cX0ogeiOu%2FfWSFq59QLxVSW91utgZXJYP5KrfWroA5Fo4yI5XpuU3NfxWyJbjOyiq7GYSn%2FviJ0vEv42Zh6cY7a0s%2F8XF8%2B5FqRyUBUVFGv2u%2B2GeszjGOG93vDI%2BABVVsNRU6WwU0wPVhvS3%2BBcQ7yN6WufC8ik4IiVe0NvLzczEloJHvWKH4rcGb9rSDCQTnvqZK6OpG7gZLKXswATFZgkf8X2Ku1zlS8bOpnK%2FlcInlEqniCSlhBk0prdhQe5uIzf2wydkYZS82noaCqVs6MClktzOYVOI%2FVjErhduqx%2Fnh%2Bqz09xuBK0Q6lYOo81Uq0ODxIlbfr7xVRgMt5AZjQ%2BnHtt8Qo7cKvjlYIk7spcWGm8B0hkW1YfnBdDHi9MLDUw8kGOqUBep6e1%2Bd7O6jYPQ7cKFiO0wA9n01QavWk4UaFvsG5Mp7qxtkByR%2Fed6pueGAiWvCP4QOi3tCwinpKM3pZZNLMKBv9Jj%2FSPeIJMsR%2BeTpkMpYYI48ybMqShi974ib6tKMdnoEmiO7zJyxsltIPSs8St5TbFRJodA%2B4ZbAAQ2yusEP1SFjcBDOsB%2FXS2GZYqHbHOddWx6y%2BnIBsZ2QZGgEbLOruMmGx&X-Amz-Signature=02abe1be14f734061f31d58629fc945cf6f37357a087e758a2c837980d845c72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

