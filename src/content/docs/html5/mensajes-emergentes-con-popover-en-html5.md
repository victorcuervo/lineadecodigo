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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466333I72NN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T160109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIJXsbkfHPT0nIUjvEWMf%2FXizwz58ZKJfSZwultJPPyAiAOpXRKD8gsBgQA7%2FFX27izEygiHwULEh24F21%2BI6qn3CqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOPaufIGcGsWzNJv4KtwD8e9Ef2viMbBlnWr5pHl%2B9DJzdP0YKBsGmbE5o6tvlNl5a%2FgDbf4ZJ8H62IpQUeLHlMFmos7%2Bc5a1M45sDtOVi9NKD6ypnmFPu6IJOL1MUgTnqU9sZiXJm33qTLovAvDIvo0cvx8wgSDmiIFez6GJvNiZ5dyQdRMb8KBGu99WLPR8jXlkYt4lhj3Fqa0TYIv6hZaLOQVgO0K%2FFxZocDuk7na%2FHVT43wDEkG94%2BRMxg854ZqjIg9Y5%2B6Br6NoghlOfG54sPy63MWFWM7lP1Mnlw6wZWnhjaE6RWJQhe0HsFmqf2cDeWVYqWzTmwYdpcYj%2Bo1%2BNp60EJEBhl2QTTVxkyqKrz1AzAapfBzdWKzD1xQrmMnUx5JOfwoyuN3ednhgMdOIbDk6Ju8w%2FOcwcTNoFNirJ8637V6skuqv5vndETvxc315qdQgL1sI%2BJiF%2BaHylH9WNZbqvNT5wMfAHE%2BUp7bW3Ma6iujj3RkhWljNvuY63wwqZ8mxnifQD%2BCGx5%2Fwxi3%2FtXcUlBwbhF0s7rpSlo5G1JPlYgOtI%2FWw2jbJs1iXVCVjETftyZWm%2FphRAdt1HzYVMbqslEEXYdfXTsOZ2EmUodgQQFERnXtZ1WkVqtOwYX1RmkkfsiNAXYLAwyOTbyQY6pgFuPeZ8gER50pBzVffSa9aOPrJ5Qt2FPEJV0ep6CNpjFzAHbp0ZfDWXQanQAAcXlUbwSoeShRJoOC4%2B9dzZLCGRpi6w6QopKZFkrvS4bpSCFVNi2EtMxF3X86iHGgej5Z%2F2pTN4LPI5RphBFCJ5%2F04jluqwm7SYgo8fBo0JBrdJ%2FK7STaXnaBpRrR3ZvI8c3yhgJwHgMQZq%2BIxwSiZxEnWq0ammJROr&X-Amz-Signature=cfce0ad51e1abfd19d8ab6e494f07345ae9997bb730e1f6751c3c0b9c75d6c3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWGKFTW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T160108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxS9Rh2PxMw1YJIOFeIMsmRIo%2FAr9W0RCwE65VjsyGSQIhAPDJX2yCZfpwl83QrKqr5speoSdjSa3po6v6RUvFAz%2FaKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2dQiqnOnqpueHVpgq3AOmqVB3yDYsdw7zbh445UHd9EDsSxwIQbubcqOtjZWC1xxCqHRK3zKUklyT9KBMQmIyKnYPHmP%2FQlT6UR%2F5%2BPCL37lZe%2Bj1RI1xO%2BmNc4i6qVMZx5bsTRgKa4Av4O7hjcBldrnZdrn7%2FPkVny%2FG%2FdvIOG1mZi6Lf99%2Bgry6DWZaSV7eiNpy%2FJKBFS9jQ7RTg0Ie2fb1G5qkPgbpQWk%2Bz7Ese7%2FjuAF9BGO4qJ1V8qciT7afndP2Upi7AcgxWUBqw8LH4DacacstVy3VmGmkuWUc4xbf8Q6YzirzIR1B8KmyLz%2FiQEPYvOoKunRKqcxESlBLOSbttfSGR5fEHXPDC8UcWAo0F1%2BFb7jsRfdBYwaPPSg0j2ycdMJFBAerB4Ov7Azm%2FF%2FxBGkx2M2C%2B8Y99PUUT06%2B84%2BAxapakBSLRWEOmxVTHUbrK8SJPsaKBpKQt2g6Od3SCJzi%2FnqnnLhW%2BNmQVRPJznDAulbMz77DjvY8WASfUIOlTE64HeGklV3fmTbvK2%2FR2%2BJ964sFfZ1JV2MB%2FgkRzU%2FqYJdQoZ05m7%2B8k%2FWulbBqXlC5PvxHXxS5X4nNBiDmqINfovHY%2BPDauyMAJtpoQLllqif4mlWXFVHHeJUDsu8Q2%2BgobAEmzjDW5NvJBjqkAQHyZYm%2BZEHmm2%2BKhTKuPrc1Kj9DxtH3nHMpvrnavLSk3iChm25tCqM56pCleULYKzbODTdeV1ExuEUznN1Ak0USSOVfadRbsX3dcqjb3m2vyt%2B2UTjILJ6ruGxgjEXZS1FaJKvLzHj%2FprsA478eOEIHS7L%2B32MzH9wd9Fkc1uBAXWnQ3o3r0axqLq2RKPAWSMgZ1aV01oVKq9f4PoP%2FYuWJsmuV&X-Amz-Signature=2ba10cdd980d853ef9e638355f134bc8a2310f8c2c15b2098daa194d9edc1c4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

