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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OB2WT33%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T210356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjBF%2FzlBZQgoQJccLagKACCNKmDWKx7y7tIMffHjhPFQIhAKOtqO%2B4CIv%2FtJJZxr%2F3TfP%2F2ESvF%2BmlpiNcIIWRXic6KogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQFOQiRZ59fuITmhoq3APJAO0jC5Ua%2B35FWQX2sjzHJLI7LuoRvHdJN7EYFGRVRhnc0svXlw%2FYUtT0Pl8l7bakhJUY4ysQiVtg01rUTSMYtzaDoF8Q%2BeYTPzOf7TEo%2FKew4zhYzG3pmTW6d3UtnSBE0UI%2FZJbZxT3dMSTubQjbIhTU1ctPEQHMTZ8P2rEKvL4OHPp6k1FPO6eY0wq4Mp7KSYTl54qPsCErY1vRyphDCXCVrFHw7KgErh%2FwOTNlXAiUxKLZuFYo8BqcalHwG0%2FjhYRyhCCtL%2BLLFCwdUDWtZYPFluKEvLkD1NRaKXgBvmJpsmXfObfftpRkwPU7CDNx%2BjxJR2%2F7DA95UdR7SohoUpqBEPGLr1q61zbxjWoKXtE32OEfIMYjKaTG6sVs637Xykm3mfkV%2BvCPqJfgRB1dmeK2M5iltnkjEWUW0DMQRO1VFvsmysumvom5N8LiDgIDcOwRI%2BVl88nlNkpzWs48tZxKlWIXnuY%2BYuT9tKd3UKdD6%2BClWfjX%2F5NzgqnWAN5xaTzdeCe%2BvjjoEhtE1YOD0NiZfrRK73l9j4yS9ZLgMcNdfkUCOLqX6qZiOV5egUwuaPyoEM%2FMn%2FP6MOQzzzIGeokCpjX8nVckFbK7K5HPeLKkoDSnMPYw7uXnkzDU3NzJBjqkAV1u2cnB2XkP8Y8oNhPcOjyz5ADMAlfHnKeG%2FJvFQg%2BGwndcQtow4cepy5I0%2BxGRDcFneR7Rll52AmXJCDbqmp%2BoBO7e9r8YFcRselphspxYwv5s50a5gAnQZq5vcKMwKh9VHcjUmlzFVbB4kvr%2F7UgUesFtSe9v7eCLv1NPiMNtjmK%2BTfqk%2FlW4ogTPGdW3sdXqHqsYAbnRS65htDNRgOu6TPyI&X-Amz-Signature=bc2acdd5203d6d266b8700a6c71e41437b375150cad37fb1c4bd35fec1b3b4f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676RJZ6KM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T210355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCctKl1Ev2GPJhTPoHnHO2jh4lk5yhyCm%2FFC3omy3sBgAIhANqRwUPgSlFrU7nIFFr5mzkfO2Mg6ZX2%2FSbXsbqQ0%2BhWKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycKF8aeh6ONNQO1YIq3AO5Y7q1ja2TcPdafJfEucSaYQ0wMoW7nzsEzQz%2BDQNqGT7noWdva%2FoSff862jVbKPp4l6jhykMTUcpBiZkmHoNWVT%2BSNhAs1L7xphlNh0SaMTvjBcB7AQyLcIwtyfn8hMkPqbFuPOv1Sx8V%2BpKVkDeHQPblXlHfIqxCrq1k9zxYIK4nWkH3gKe5fAOSgNz4MCZ6lWF5KshqoLwPhzyKOt3jPwdQx%2Bt8mffIfcWxTB6TUDptdRc7MQ3Ee2iPL6afAIFmRmMPW1NtV4iE%2FlzDuUf3kM6THB4h1lVF5dIOUATU8ZRZGRGrvrH7t%2BDdHSqH1HWcIdcoNuZmZ64QdCXl0tJL9lJGg2CXdNYPdEgKviI35jvhqrbDZfOLa3LZtnaWMuBI9ROE2krLFsTL4LgnJ75WflmwASYx8mCk51Sf3XBh2seslhppbPugn7fXd1pnjDMgdzh%2BjsMfZB%2BEmwpa7rbeHqB%2F3pJ4ter8lelIzjNBgK%2FRATPspAwANToYAdV6jJ4Yn%2BaXpnAteLOq21nlhyo4to7T5dE4jfGOcsUX%2FRCXLDgMpKxgNpAxBzT0LiECDmDfcp2brqehbBpDAFI2K9OuN4e4%2Bi%2BxihWlwyBkyZzhek6Wrj0dYXHJNmfSdDDJ3NzJBjqkAcx1QpUDwemyfn09de67%2FQFslOE19ulxZF3Rysk7NsvyrSUXkOy7ItP%2B%2BnvUUQwf7w3s9%2BwvHg2nhblaRZzE%2FGnleXKkzGuc5lbmQEv%2FTpUPibqjHh%2F4ea%2FSqq2JwDwmxWg6VmTSu%2BVqC23lQFtS1O6lmnm8LpDMY2lu3%2FZWTVX2fimGu7rgIlRIZAjLk%2By3iapHR1BHhulpEmkKc%2F1XzTAJaRry&X-Amz-Signature=b7214c565354a6793e4c45b92460a974129d730b7c66be2c2454713dc663f216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

