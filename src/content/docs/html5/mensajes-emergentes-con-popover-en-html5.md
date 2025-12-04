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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STR2RYTM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDBUlpsPh49mthFZhNY1l9o%2BLLLauaO3C20nEOSGyAZ4wIhALUrl1f20iP%2FqPCkK08iv1JfoARkV7eQFTKuAQH%2FdobPKv8DCD0QABoMNjM3NDIzMTgzODA1Igw393xoVJmoA3t%2B9C4q3AOutepbqNBaYx972w553ot%2FyFbFYTEjI%2BWFhPByFIjlCrCNtL%2FjGYYrS2Gnxm%2BFQVuPz6KMrz4SjQ6e6Rq%2FHYWD0KZstT4n9u8h4gbBIFURwgoszLw224c27stPzY78xbFH1Ah0VN2tJ4E7R0YYVCkKNOoue4PkeKd79hqzGgOzlAcgDdxvBpCHc3oKtOk6vcXK65RynUpxuPrhSu%2Bnh%2BLon4TATtsJS1lXr0koVw610jkHNiYS7fHb6QJPMkmXIq6VTeM3DAQ3uor66QRnvnEWVQpx7dcfNVvQ%2BEWHQZEWXzutnHO8RlufcBUwrnL7UEpp7LCTulha6ZWqKdYsyLGusQfGm2r8xZ3eTxYKTVMkc2dAVRzoU24b0yjMb2%2F4Coe9h40EdQgigLt2TXNMpE0oH60bungM7G8D%2BixUvXew1ga86A%2FiFqFFtk2HuuIIpvQ3KzXU099a7EilLX0Hb%2BSGa3UgLiCUCrlHC99DGOhfQ1jpka3zwgfURlAzt7DgOn27GG9r0fwWU44I8EY02sIsgBZlCffQHKtDvTbPNKqBI8FY1LDxBSLusHuhJXS6uaFrVCoSX%2FO9mZHKXDFu9vCBHM91fbV4OK51EBL8Cx5W1cASzvDYZiJWDUkcOzCbkMTJBjqkAYEiLsg8%2Br9eMwKq6a%2BdE9DDjOZmtXVINc%2BYHcRiHOyzz91fQOGfLqTM3XqhnGPgMYNJinsxSMOpNvg6vPN0DT7%2FTde1EPjJMdsevS3k%2FJcdCju3y%2F%2BnfkU6oSmOj%2B9jH%2BUuPLKDUPSK%2FBDg0y17h9btKHdt4ZzZoZxmr1aL5VrM7qpP3NPJsv%2Fy83hFX6cO1gO67E2NpRChIaG%2BIETV8xfioibz&X-Amz-Signature=36b0f8f4b6a8aa05248690255f00ffc50839e02a69b9b30e497761fa889811f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXZHZ3Q7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIHic%2BHYWcoVIaIixdpSOnbDSK2EW5OdQ2P3qlKH%2BWUWLAiEA39NGwU05wNKUQ6FrGsvaTHsTsHRdh2ng6KK1GFWxjRsq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNdnShaG4Y0RBE%2FLnircA6ERUcDgySN4somOf6t%2BChIktHhd6vrQsqP80MfElyc%2Bb7DrNXoN0LWP2Nuwm9ZNMJZmRG1t4DsyscJp2Tc9poczcUk1GOE0R1tUqqjGiPI1wMWmQON3kkMIEMQ7oFGKVWf3IuWdrCu1Qxn8Ea3fe34hHq39LX4ZdB4oikaE0INQfyFD68oCXxVANawnIoF66xOllCVsmivz7MvVMQx%2BW%2FHWqjrPp%2FyIYdG9tt2sJcfOMRbBB0VP29%2BDMPyCNqAGfpi0acTWvJjdGNIZEzJVZkr%2BHX9EMA10EA5shFwjJNw8pu3M6AOpD7XWne6jbLWce0xfWxFKVJcbp898kvM%2FosO5x5dDR3RnnGr16yoocK4DNtjLQoNkU%2FR0X119jbUIwsUQP4Lna2nh19a%2FNTA9yWz4HOPi7RZ5MfJ1Uw8i0gOrQM10WLlo2UM3m41zTDeKLhftTENTpASwtY84Wbd57ySsi88Dv97yRg88lxkYF%2BmN9dR4l3lSLZd%2BmLIMrf2Aun5asGvMPYiYcmFzHqnOeVLWDuGx7%2BfNWImG6OIa8IHufyqogTGKwPle2lZGCuBz1wh6pkccvJkO49zV11OkElMTbvE4GCGMUBY1JGuOXl4YRdSSTTBwWpyrB4zfMNCQxMkGOqUB0SulqQdm%2FPVyuAWOwnBkIThUdHmU%2BnaR9iJAkmnolNf8so7SipDkkhIuG5tCSSWBD0mbVSLZWauKNReUevxmk2JyNGo6%2B%2BUiztf%2Budx9FS5Z8BBjvSD0wpFaDL4AHyKBfuqyfLqs6ba5ZJ1w%2FXEpZcJ5vy9Mh18X97ZB3oSVt%2FgUnvQhe9c7d3FlPc5S5ZhP%2BH5sPkfirc0E06QdF3cyhiQnpPxc&X-Amz-Signature=22b0b68a90267d41483ce1e3acce54bb049efe888307bb289d60c1ba95865829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

