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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ3HB2YU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCs%2FZfis2%2BvUqAfBjQ%2FFvO3LL9lKewQ8wz5sngGMAD4QgIgOORze7BNlDgnHLnbpMLnL4Z1%2FFwwkYtzr4GMV4woOskq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDGLtA1987eJu3iHXhyrcAxXsY51y4slYGUymi%2F0r5%2Fxq%2FWv7yNNQSJDcb4jDwtmgDp5%2BvkH%2BiyVK3uT4uxmfBtgpFh7fqf3ECLL6f1UVYn8xi5g%2FN9jJfFdqIYy9EhzgK250dh9fgjKYkcLaDzCwt39bKU21Ann3GGxnWEP2s8LGzTh0JihC0ZeRHJ2h9eZOuprxDT8%2FsmdrymfrADOEAHcM%2FYc1mnYNN711uJ6h66MjEtigHZfdjhWOtEaay6PRuqHHPpdAkFyQUh86PbLvjHW%2FKc%2FtdT%2Bu1OtBdndsCSeDfsjabypMuMH2en9UuWizvgvNOXm833WPUmizhgyMhnGGGYTKfauHxTJDGr%2BYOM57b5G2VDh6kgzf2jExWcmunOGazaO0wTE4p3FfpFRpI94Rqeqq9S1Gh%2BkPxqpXTpns%2FInWHbYK8iIjRs5x0M2ZXe6tH1tEkj8%2FQUhuONwoiD%2FW6%2FL3S06P06RJ7dSndJIfTPvMUOn0ae7r8iuP57JjaW2apEmoiCereq71eNexULvyuWjdHvhSuvAXWb4xX9pwiZ3WdBh%2BOi2QnlFp5vMHqv7f%2FpXjyYz3S0PfUSOE6YwIm%2FHyUxEh54YwmjAw7B%2B%2B1zWaNdVXetI%2FwEU6KhocPgiTRpL5YqdsHk6aML74wskGOqUB%2BqPw5ixaFD%2B6Y9WezuoNzzt%2BRfRs%2BBHXSUGNkIRT%2BiQLY5uORvb%2Bzvq%2FqaNoLpUJKFMZLlF%2F6wemkDleLhysSsWo9rITrNVQwPFGMq1EZBkDohIvJ3D1xoO%2BwgQAhICmhU2j%2FCbwblnr0tZ5%2FZlb4cbuVMBVFYyGsiZnSJp4ODv1mlEFkf%2FgrOR4NzyoMaGX47Xw0vq%2FEvvqAYbKH6%2ByzVon3TbS&X-Amz-Signature=50d937cc86e2690d9a62ab125d13db202e578ba7eea6d934642743ffcbdeb6be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH7SWN7R%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIDfpQ6OOl6Yrl%2FcrVJsQNaOhrTneLfqo2i%2FTuajEo%2BJBAiAywf%2BoNeVEgnn%2BG6AW6xVJdUrh56DiYYYxYbRZOteHAir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIM4QQQFo3NjXef0q2fKtwDw%2BqRS6yoP5U%2FKpbMlBDk%2B13ubn5pHPjxebjef4F0X%2FLMGz%2BmjOVWxJk%2B%2BVZLWFSDS2wN1uaFRBjarUTKqB7pVAOjzfUzLcW719ZL0YyI60xJa5thRtyISYRgTdNRg%2F8aJ1dRPf20P982BL9yLns2ka%2Bkjkni5LzEFkfCf0%2F3FaFmorlFUKLL1ZFUEXs7NNECp0re4gnHVlL%2Fi5OJPXraHJ9sMX7K52aOPBUqcxPGJIWWH%2BL8ZBFjM2VcCDwCyOlEEubfF4ZtyzKda06sjfbsAkTWbAGOgiEoQyU%2F8ny%2BT9N6Htq7PJmjVtVQgHVKEP%2FMF%2BuhApaoEi8Is0cwR5%2B12e8CyA5KRCkZzPMLvXGuvsxzuw0au34DPm%2BEdrYWriCUQK9DtKSfDddkr7CDC7q2QwGcO8OwGplcl9oZLSthd0oKFusMvQ%2Fn6HBSQcTB55L6Ump%2BL8y%2FgRL4ewIOdVF6UmUrZRcKEcfxl4CWQT7tH2Q9q5eDO6g3kExtgYYxzO7Jd9rfTedR0ccHfVjVIYoEsaFMjbpQG00NRTkY6b8gLQhCe0gWw9wCf70oCy09tlL5aA%2B%2FoucUwGtykDLaAhkWDL5wxCUyoKIDKzRBVBfUkvk9QLGJMB0WQrWjdmow1fjCyQY6pgHc%2BHkRb8kVYtSvOu%2FuzDIw9GfNymJhkrK%2FP3F52Z3MwXWBBP3OZ3zc8b%2FSzyuEhc7DWKAdx%2BoBnKQntWvtw4Gm8XrMAqfWa9VPedPtZnoeyEJ%2FONI1LDJTDfsrN51EAaDQ5ICtsZAnblykT2vJlffg7isiqlLR3VUXU%2Fo%2BROBIVRAjlHqCij%2Ftduz%2Bsd%2BPydLDBXsBq6rvlEHIEQb%2BZfdqikPtUb%2Bv&X-Amz-Signature=e9efcb4bd543ff1aab4cbc04321ce307e91c90e155afbb1534336e76879a480c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

