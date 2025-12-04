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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDPLQFHQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIDpI%2Fk6c5D4xbIMTWruXZ6cWYkNzp6rCIBPxX53JaFtgAiEAmbzsm3k%2FVHRIiEireQF6%2FRtgBbndT04TCK9eYAe6vlkq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDP70F4k%2FOruFw6oFIircA3aGWo6ALmhxcxyT1u9e%2FubA3QYE%2BPStSvgrah8fYtpRJyGdIB6HNWyz%2Fk7KbnUaoMM%2BVarJ4vZfBTTjitNVO9Om8q9ZVPFgkZwQy7%2FQ0loHzgKeQRE9UHJPqu4hGSNvc%2FGHxzk9fW68dx5%2F0JeMBDtRPuVSWJrfUV1dadvTUH3NIBhuneqRGycqsGP9uylgj1YkTqk3j6uS8%2FeT0IANFK5L1UnTG2nZfsdROujNYQy0FWkdAHGR55UZEu8O4ytgX%2Fit4yx9TFkKSN%2FXMQ8dKphsxu0zP8XU%2FojHoYJVsGS%2B8Mzt0pdHRPtqlFHIO7GdHrJPCYBkNVqqlSlpsLGTgDD%2BlYLiDznUiwFEOGmNl4vJsJuk4QDc0kUmo7I%2FJfdFdDtb3oslNgHI2G%2FbrR8%2BPsK8MiwPXsfEWHjYgjwJVRWhG44Ud2gYKlTgJ4z2EgfRFzTXp6Hrm7iwprRz8z3OzDl3CWKAw5K2WZ2AOxPKBcXv5x0rtZ2fJajaTRdByIdn3hXfDYK2EyIo8a9Q7TpKaok2kGh3762Kzq9b0N4q7cS4iCgbAKJNprog%2B0XTc37cm4IiyXZcUy1JQ4lFK%2FQL2DhTmk0OegExVDY4DpkGwLWC7lrqQcCNe%2BbyKssiMJ%2Fzw8kGOqUBkTEtahq0acd16fb4KNYjDSSAumsPDGSaUs0tYcl3uTC3U%2BU2NOYl6%2BrRwXh4Pa6Qh%2BI50vPOCFvDrrds%2ByoAUic7LZlZ3cN8ao0s%2Fp38gxmtwqg4GZnuc1Adn%2BQFlGv7yHd16VypDuR%2BvLdcuTB2k5009giLfm85xQC7DPwv%2BxLsc1I7NxTgG4o6zOE8B2J7H38L%2FTna3Um0Yz1RldjpG3UJX%2FKZ&X-Amz-Signature=d8dcae9a83cf785b91bb6e12e136aa0cb8c5f1c8425099e878c34f232f495f22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637MXM4B7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCjO3uQF8R6RH7sUh%2B5OP5Z1ph800ekBJIpPRtXxft1TwIhALeXPCv5NW%2FJexSVzgHEI2dRmv0wykF%2Fi1ek9ASGR0t1Kv8DCDwQABoMNjM3NDIzMTgzODA1IgwNXKsMp6Ksz7Mjx4gq3AMEhmVevbDWvwYLyJuAgHUjIgKEUKO5dmxB2hhf5Bbz9gBBMdZxp6Q7iLhW%2FLs327RqJm1FtCkcNC7m%2BvzGXgPBImsEKvc1KQpG0A6efRqeE6xoC%2FsTR%2FaUmKkXciQwOroonhCkkowQo6xWdZkjKYGNI7SBC9iOVoutSvaR2%2FYiO2eWSvxpN9GdNcExiNbey312iKA84HEU%2BCqNd71Xz1Mo89uduK4f4RSs0ekOG%2Bwm7%2BX6viIDtCIBiy72iC8yGZPwT%2BZb7Fd%2Fp%2BDDP7WwC5FWl19aWwduIg%2FUhzd312t5ZNkJLxZESoeHVVkoEyZer%2F%2Bg%2B6rBDMkIxnld7ExOrczSDhMuxhg1i%2Bhr%2Bhef%2Bkl4qwqEKZdHMu9fNZFyBiKEtepTAgcnboc5s5BWXDXhzHht%2BU9Owek5BdmzOPF378fIa5hDQAmgPj1e9QuzZ4jj9InBXoKLJUR7enrMZfPY%2FSDF7DI4rwutTa0YcstYudvjSYX4o4TSoOxVODruYC6kbxfq9MUY14F1475mNPz1UPwNcC6JPEtohJRcmv0HdDd%2FtnM8xxrVC2etpP4YDpXVWlf4B9jcJeq94G8lJUQnPxZkh8%2BwfTaBSyRyozqhIBhjncnR6RWFoMoprNiiNDDF8sPJBjqkAa17co57NlC4DD7XgaVihg3x%2BkeUkH%2Bg5yJmc3EksfkVLrnY5akRQhHDHOBoq%2BUiQDwyNheUo18LA7oTDmBKgXJWu4EP%2FyHYEw3%2BIoToJhRFcxvHXmw%2FyqrTzkK0ZDlbsHmbNilhmfazdU7pM9WC59UcNZF5nl5uLLAJWmBP%2B7XEGVTZkeKr4zSIt0nCd9Vga0CIusaIWjITa0q12PtLwGPlwRo8&X-Amz-Signature=a089fef6b4ec5dcea1f25f981d8dbac0ca47a18c232cc0eb38ce3bacb94e1ab7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

