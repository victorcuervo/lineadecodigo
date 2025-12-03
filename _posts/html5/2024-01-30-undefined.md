---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMNKUZRM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T125609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCP5RO2WdBKYcG6bTlaSe90PoRhVm54aIPOUdGvl%2BIowgIgDEhag9e7EV%2Fa8ZsEWRHsPaJ7YjE%2FRk%2F11cEopriBCJEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDFhyPuD0PT71g2xmByrcAyvCS1Nz5HdIZ93A9xcOcAIWfnf0WzNhdm5%2Fxa%2FlgSs0yfD4TLYXYxJe9ZYhAFL7TlgW7kQEslfQt8ErhxSiqaj14pD7h70ltR9eYkR9%2FINAJ1XRwvjyBzlSbvIGYOT3Jj2H91EmnXO%2FRazT7%2BmyGr%2F1DylNN08Gt7aUrz4o4iFR07dzjJnf8zqFuK9T152mkO7NbU9uoj8vRxNi50WYlzE9TCp3KXwM44IbGAOaTYG5v6GeEDq2J7lxD5J8tY9OUB5ZuIX1RdBe7SDiK0vdMbE%2FpoPDbq6nMjIwIim6%2FP72dNsQw9%2B76QlrUnkbSKrHtcp0TZJq%2Bf%2Fu0xvAr4CTIxA9JMd7QNwG2pzSVMUdK4MB4P9lp7KllAWFbshCI%2FYzTKEZXUwPBAfxVWHvDtTfLbmqXo34ivgrBKV%2FsPH1MOYJDF%2FjaH4HPVslcGUnfun9NLl6jMSjBhbGDFT%2BbLwfNqz0v5W8PkNCSKjVaSCNfYF%2BvTyIvUA7vC1T13hq1BZRqqtYw8KsunEpKk%2BVQA9ISqB7HX38AGdTe01RtXmJV9NaoWR%2Bltfh62DGnBDynFDkpyvuMG622bGDkpTAWtxh0PtC9zkVMEJyB%2F7vlbfXvVP2XGLIxk%2B3OO%2BZmHO2MN%2FMwMkGOqUBXd0xaQM8tR%2BLebTiYKXIf4oP7EXbrbfpQb5wsYf5uJicphDXSJcNJEV0OexoLAF3PaNXYCDhXzepkrgu01jVH9jQkL8%2Fpgo4xFfBADSbS98h%2BxovV1u1Kzdy1O2YNMUtisH5Bzz9mdwbkFBjfKutjfbuq3tSj7PW9ehd%2BejcCWDM5aj3jYAsqxMQPGgJ8OXzW9B5LnYMyNFhfsB6XBMxuwpBP4EC&X-Amz-Signature=d47150d84d65563976630349f23a13b2ed4accdb8055ffae86611d81019dceb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ZGHRJR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T125609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQC53yn4ntlQcNVzKcn59YIaZrK8r39I%2BbYeb%2Fmnt43lJwIhAJIrkHfEcq6eg5TiCmuI8MBPpspjpOPejD30fY23MzXSKv8DCC0QABoMNjM3NDIzMTgzODA1Igw2%2BzUhVm%2B1F7n%2FQuEq3ANMiG2FGFYB%2FIqrqRUHDkHJqpvesKz8WnDSShsJQMQTLs1vsbQcsyHLxqyMTiF8JroH2m5pyKCG6jjui80iFj6EVl8iFwl4%2Bg9aE3DdvYmgOaHs%2B4mZ7tnrnzxgfJ8H6Ovepl30MGKmq67cZcwtYtNfAxCrEb7EJCnGdR%2BvA1CjePQN0pgG8zOPuxNmQpMEeoOx%2BoUTDMhwZJnERS9oZceTZKpdbYzvzrCP8meyAJztDBdtMFxDPAEBTIJHodUNxEs9NNoMvVQ6NOiVbSuJARHueh3o4LkKnCCP5z5unZvZjSciaczGKvG07QZUSQatFcyxMGhreCLQVjZEEfCCweExNxvZHGSlaC6VFek3rYcGZkaBJ%2BwahiWoFGLPW3oWnfJE7kOTkppwvV15pudgLChJlRsDdZENvvzpjQTfnQ4kfUn%2BzNCPf0mRN2efwop0LPneqfDQQjXH5%2F7wR1EPY3ojAOjZ6ZQCyAkjNN2kcvQeix32ebG2J8ugQJ1DiH8bI4PH%2Fk%2BuxSPmAkoYqQx%2Bs0w8sKDQpGLX3Vu5KjGZ6GHJHAMluk9TKG%2FUY%2FvqCiHQjDhcPe%2FWIPTgQvkkekam5qtv1ReBeaokaBfTjZjInLwv58uIEjbucbvFRTxOSzCQzcDJBjqkAfvaxWpQuR%2BeWcHpIhQWjKscq9dK6BPG4%2BJKzonWr1ouO%2B49LI2lGB%2F3pYadrJF7J9%2FhdtT%2F%2FykMe0hnJs63NT1KqkIcWIqJaTebD%2FwhyhaLMefzMIsYVb0ioEx667CWY3jtuJhhA4qXIPvDZNV8AGu9if2dxCV%2BYlNQVtneMuD07tAK4fNyfDO5tCr6Ox7h5TPFc7yaKLT8cnPDgjrC9%2FrseC6U&X-Amz-Signature=859bcb02b5d1a163861430ffc7fbe39b57a4c6145a2232baf164539fd5792951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

