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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGK2QTD3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRmUWuR6QVYS6Tlprs%2FJmyu0VxFJpwSfj%2Bqrr7xiro7QIgXigAbumq4qL9BobRR%2B68LNxOWBdoNA%2FA0FtczmwLHTMq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDLCJAA04p4WqhmJXCyrcA2c68F4Nu6w%2B0pd7VMmZc0u98QkV44HNjReV6kHc%2Biw2ea4iaXUDzd%2FGqPpeEKaYxzMX%2FeXn1GAS2Ka9Ee%2BicbBGV55eeJCwkdT980RC8ZUcQisVoDlU6zMvQnJhqJq%2B%2FVbjl93wADNCneSI3eZ22gPUArGdHz7wxJUKeWJG90r2V42tk2GvDtKHSr5UbeyY48Bk8EobIqNLYPqSKLlqD558rIKdD737f%2FsVQ6d8HNL%2Fj72TPy9GrjarnAWJexWUviGFVufp5c6Lel6lxY%2FsGEz1%2BsGGMEoAYWKnxZWovwLIg%2FPVXPjYaTsfzx5Tk4Vco0jb%2FVJl3WefJI9PG1KKeHS%2BkJEDimXKcywRNYArticjlz6yCEveYXn4fTVvX2ApiS%2Fxr7uNOnfDNEAHqqSYkKpYL7xtL0Mv9%2FVRbar4gC%2F9sVOd2TBCFtvr1Oh%2BL%2BLwkklY5irCE%2BijMSrsaaSDTcYktHAO0EF8Q%2BhXtjTZmQimzzj3iAiWBe5w10R80p2%2BSGt6HI%2FHsjrnrl42QHI855lne9hPeUW6qLkV4F2uk24yCwjiX7ceOeTuPV%2FjaMM9QMLqro6y46c7%2FLNDgVMWlEvvKQ2x6QVW0q%2FSWU%2FkonxjGkdB8uiYpyZI%2F5T4MNb9zskGOqUBZYReRwuopvuBYuyga%2B%2FfRpOxA2LRLUMq7hQ967TsTcnvClgcKyTbP7Jl2lvnT2Io0vpsMHsvaBg1C3TnWcGwZAmOdMu9p4QOpo3FEvLGbQ0d8FM1gIDVzd2LZJ%2FDs%2FOH8jaJ8CL6AbGpuU671zNWiVg0ScQOMAU93GBghHbaAdJBZe7r5tA7J%2BdQCHyQdWqjczi8VLsJzFMB%2FVrzCGCN3KmQtuic&X-Amz-Signature=3a3add1122bfd80b8386b3f57ae615cc61ef6451e84216f4bfdc965228e6acd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIMND547%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd0OKebBqPGmCq0dbed91kxpl%2Bm%2F5xC7cJahMyJgNvSwIgDhJUlP6OWhYHMid6HG7WQ%2BKEVrUZU1QQu9OPydR0fSAq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDPZ7H8qDTAJ1iheR1CrcA%2Ftvqv9BqG5GjwpkO3tq3%2BTYAimGV4O%2BLwFw8B1qM%2FhqFO61o8mjTd2cdUH4u58D0wSZ4dwohEkMgnbJBv1nKC6cRIYraD%2FHLSsoxfMeX8RT%2BXLwgQ95hFvm9jTSoBYK0gE0ttYAq%2FRjZSUa0kESJ9lxSW6q2TA0rw4EWLuoGPBRNGzCaC%2FoOYHPjF%2FHNeYdcP9HJp109W1uIv2nqkdh%2FSR2g7RCYEpsZLmQQtfx0exftiB7XysdtId2oRwBcszEhhHKvjdzA1ZaxG0UyCc0X05LWQJKrw4jPaqj%2FFh631XWOckO3qq9Q5zkbs9%2FImpJPJ14dL9Cyn7KRPw%2FDeb%2F6PaJjOS4djwPwEqivyRt0AvpN1ql1ZziNaqV%2BZcl7ZfTm4QJWlJmaIoHLmY3G%2Fz9a4im%2FMwalxOnipw5j%2FT2JW0PofDhMECINiprYBTG6cBlOEx3Cg8TCMegTWzaMcRUnYLXnfWlT93UY4RN6lAHrOBc4C6%2F%2FDWPjWWLSE40Dd7WzCZbjSpF3nK0nYWhiBWFhl3KvmZ%2Bo412aWoTHEc2qMYhmftdrgbV35l0ytS%2FQMz0qu%2FdfNATiBOexlGnj%2BcNj8Pv3xFO0Y97hpUkfrtluMMv5rVmmKGUy9YumEAkMMz9zskGOqUBqOh9SRbQb8hqn3GG1Yyv319weYH5tNb2%2FTgbHMYL973AxEdLGZ0zyppnp04EoD0RHYSKKYX2s7CmPsdStkIBTyQJna0TyvlrzRvtzI62cLHIZsp6afR41nP04KvI0y2q27K%2BctnMgSDXaaLQExzNSF6BL5NIfKsUpiqugSkiluGp%2FVQ9%2FNEIzrLKV4P2fmIYWjMrafIT3XMeZQkhZyRJZL2eHajA&X-Amz-Signature=9c7a5557dfe7773bd87050f453090a9cb3662cecdb8823d230f5512df12880b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

