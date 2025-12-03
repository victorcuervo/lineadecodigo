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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QJGOUXJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCxrp9AuRWeoFDWWWg2l%2FA31OmE91F9LI0UMYanEokn3wIhAPvy61g27GbwV91YRBi61%2Bx%2FuUiTTYS05exlBzC0zTt8Kv8DCCIQABoMNjM3NDIzMTgzODA1IgyMdsPcHCxeuK9PK4cq3AOqOAJa9Ag3K2uJZ5f7tMGkhS8xI3Nh39rhy9tZB16gIcvjjkNUdyn8fTsFMPDKFXLwrpF39vUa5xjfs6820FrKzEJX6WiZU%2BT0qDLi0Gepmi%2B8MX9sH%2BjVOP87LC5y5LnWT7ezC5ynYHVqrANknYZ8R7zFT%2Bd0fwq4K57dUUE3l1FB%2B7bVS3AkKP9x9bvR8%2FPW%2BYkC2pXD%2Fx48EqwA8FnW758c8MSorUIlctWUXoZssqCRZd4qo3w%2F4xYVRUPEMbiwimOrwfU%2BzOvdmmzURa5hJfRVyPtb%2BHr%2FQ1QeQoZbyRD7wrTY6iopXr3RI%2BQ6y%2FPxpG6%2FGvLfwDut7YWE69e6GtrEVniO%2B%2BGC3dfWafC3LaCf5yHCp4onzZe3ddE1%2FO0HiM2kDhz1FDXpQaRtlO1qNK5ZkS3NOMXekrtUeeBs6Crbd0gzu1UZP6WrZsYMSynhsP1rC5sBIr6EwustkrggHJQDXUtIrhcfo1vFNuEX%2Boparnm4Nk7HYHvS6vhAWJxib4UhA6Gs1HmzCqooUBS5YoP7IxH3Mn4mXfDYaudlPIQZBgXQ1beitamp%2FtIj0oyq9ZWqXYIO1En5Mbi3AJFi58%2FWKtCi%2FvWNxVuNmQQpRjd5YcmOVfpskipKHjDGlL7JBjqkAZ%2FrRf9MctUkbv1yYFYggl5PSIl%2Br5aZxTWd0WQzMrOpQWyR8lXIlNGA3lLecHTOPDjFYC8tOlH9nTqrXbtVEvQmmqYophyomXgfIW7zOS9%2BrPJzOeJgBq1Z75EEXtGFk4%2BQugRYQWY9CpL4tlBI1GwaqvjYPxcDkaiZSxhVjTBQTBzDSEn8J8XfwY%2BDKs%2B%2BoCTKnVRAINceeaxY%2FEwgVv1RBTNz&X-Amz-Signature=ffd2c74c50a34fedb4fabd261f44b61636c6423038c812fd69fbe1be0d27267d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663637LUR5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDALb216XxnmaPW0HFvd4MunyKyUpKKcsAp7WLc6AvFRwIhANTX6rwcWPwvHNchIJblhphKvzBa757TzyK%2B%2FsLidyXOKv8DCCIQABoMNjM3NDIzMTgzODA1IgwIglXZYA%2FKN5up1s0q3AOHeS7xvgBnV4s0I8sTL37G%2FtUtpZZ9esZeMScE%2BjUacdyG8sFTKlMHS7IR1QUtIZCzht2MLjaGuMQQXH2BCP%2ByWTFaTAFliALzp%2Fbd5x8oLwTfCZqwk1rVkHWeMF8JmtfRCE7GIyfHTnUFQ38XQr%2BwbtgAOb5sLUjROswIFlz7j6Znt9vFtYHgz7B%2F0YW0jTnmvTUX5F%2FDSni2AjXfzKiFoOnBPlkIeHRaMq2gSewxeapwRP9FjGwZK7Skv8CZCu6SosjOl%2FVJyid1%2F%2FLIYd%2FFY9oHsp4HlqOLvgZ%2Be7l3rUZA59NaNUVuiesTZ1zX4xul5mgvhCMQTdbJXI2PmQ3gcUHoYtL8aOF1W9jfxCPuh94gqXLymHVEt6VozrI2GjP1k8nHNROAhJBOcYywjPLDKQqTOCBU7xBtYJGzpB3m7%2BUHRYGP5TZmtIFIXx4LQjKu9b93AMHV1BZrpqAz4SO0HYXX0icfwArhxGlBX9MSJR1THV2vLQukyrWrZWSd%2BMQ8D%2B2wFmZNag%2B35pMi%2FAKIY3mOdspDvs9M3VaRdR2PP%2BczhQUOjdhgvq7dBxzvFse8q%2BjdYwsZ4ezHC2Qd6yMG74rVwFKM58tvv%2F9SEalFPs%2BxGVEArzHbQWdxaDDIlL7JBjqkAab8XmGWOjW8SVTZJuZIQziIxDTcN0hGqLUWQ3Ga3cbPBgm3u4oyB8zqVErK2%2B6dmHjLdCbk3DuJ5oFIXjXi0a06zA8LGnpoHGZ28%2BFfn9AWZLl1pueyH702ATyF%2BpdCxRXjsqew2rOoZuTKFok39wnzZaWvrTDr8zA%2B6cYKTsVUcz1U5KSpIz09akK7ZI5isLb0X8pFPEhQNVP5wvBGBt2jP1jR&X-Amz-Signature=8789f7ebf751b29d078c4b37abf26a15eb50955b7e7fc0719770e16cc7e25b61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

