---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKDJ5FAJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T222516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDrpcyX7Z2ciiaR1sF%2FuEWgqx5ezxy4H3kJecaLUUHt8AIgNoKl0kueIyOsE%2B4VNAD7%2FT6%2FFHAoaxQkQqkznprBeN0q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDIFA34wwL33XUcKUoCrcA29JpfEUSoPMFq28w2P%2FuIXUKdAANzlbKLgpcIZheVWEM%2Fivn1Sw58wXvlpsfLf1%2Bdl5fAlS%2BzV52eOiMmzS2LfIK7q3sgiGLId8x7g8h9piBTjoaFXi46W6p8mp4jAb%2FQqsvT3a5fmWmF8sA4nCgKmQIziscMmVOcpLmn6v%2Bg8gXIqgNZRZ%2B79Bd0z113vQNpakliLXmb09Lyp7V06y0%2BjjACWFdVMxgdFF8TfjBynh%2BL7jrR%2BNZTjZJuwre5JX16i5yDs%2B7oH495Ii4QU0NuUbiaK9vW8cYkym7SpU6EVA%2Bzw4bawClPuOfUoOLWy75M0Lhfpjq%2FFZSLfWPYckyB0Y4P9lg1MJD5j1cTDLuw0VVzQ00UeQrywO%2FA9k6tAFfGN38WVURmW1%2BZs6txV3LN%2F7ck%2F69WbOCH%2Fd7%2F9F6PHbHlb0cNvIxXMMhVTM18OHOXeFqNQeQTyT2AnWLzEPhrlho25LnmEUncwAYiTRiSQimn1FOkt8MukOd5FvtwN0Gpxy%2FjjFdb8shf%2Bwh0joXoVI7NpvVg9SKC4AhSWgt%2BfuElPL%2FBFHF50JttySWgDT579m4hwwsKD1jTOnt9q4LijOh4sr6ilcI%2BDAF%2BPYd0FKX7G%2BUQPt%2B%2BrISbX3MJDcwskGOqUBBb6ao6Nc1OAOgCtO%2FE08wwxQTMhhoNtc80SW%2BoFeP%2F%2BVeIXxvlZfnvzoEZqoDsaKrryu3CumK7HS8szeX1IMKMoZYjFtUU5YSwv74LkaHRp%2Fq0JhJB2HDRKlCurJbfSFjCMZ3PVFhXXz1s2tor9hPTWyTeh1cnxWJILRFPn8zCEuVy%2BZbYdI1LHzelN0cIFLgB0OaGKuIeEm8wF8KKKV4zK0r53m&X-Amz-Signature=39a8d9cb7e4815920255b51ace8d265cdea493c6e9986da1c410327c428164ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVSZKXVU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T222516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIAU9uMCH5BDa4VYoYqt4t49zSEYD7VstrXglO2d3pYORAiBswaNMV9Q70NJjJIYXnY%2BfMwn9Pk0NSRmt9%2Faw4Cw80Sr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMLPufWNckuK%2BTkBbHKtwDzqOEHOZhj%2BVN9CyCBujtcQ1v%2FTczwNUBiEEUSDrISQE2vV7usCu8E0a%2BQ%2FYmEz8s6%2B5xutdRmXvIWEifETrrXAJwfLQA44zDXh4YaRWss2jmPkYJ7N1pFd631%2BgKTxYdBNpgq0HWdRJRZpynlDDN8gR8O46bLltuLWNxnIRvDedq5B1Z%2BiCRKhZRdXSdzWahmsAhyGMhOBl1VAZERf2GrhFSHqlgswbtpsPWrBRAEaLFBgf%2BunQQjSX4UVEP24WR1w98PR7h5Tq6GzVwjXg%2BUS2nV7UzuzUtuHxqQlp%2BhVcu%2FkIzpjQSe0fkYzM1Icn1qx8HQJcYbH75z2S9W%2BASuJCFFLRTJGB%2FsrabtsVjBZDipZxDtnk57Zf0i662DPm0KEp9W3hdEhB7yMyaHR1j6BXGBKLPnkgejGcbe60dwvYHdxYT4%2FY6qkxPRKlcGd2AvzS9r9hunCkPuK0vEc3lrhcH8LHA2GdeEK1pwGS%2FAScgeFp8rg5mI8lgqCRvLKezdB9Fh5jdpHNQKsxBfI9%2B31mjex5TOFjfvXcNilXthpSjTWst50xAO%2B7btpfPZBeeyzX0Yhvek6hUn8hf%2Bz12hVkS2u01dapA99LD68gP%2BzgnYm3dZtGDU47reBcwh93CyQY6pgHwhZxfb%2Bg5iDbEBdIbZ9YYuKf6Tv5APiEbU21EV8fayOU0YNWkQ5dMf%2BzXfuUfgIMIab5T%2BqJdmNBhBEpfzNIL1IPQlUOOE9smLGbDvFfRwI47dZO0jpqmupKQ4uzE2Mjj11MaQedc0SeO%2BJYpPoiQEKiHww4KbjIqxk33cafMxE9%2FE7in2jRv0583iXmSxYa1T5dXArs%2BSc5KMorbe4DMRlUBlq6j&X-Amz-Signature=f2e364b62ec7af93d487725b02544b89e4e3ad955fb06d4b73e01e7590e5cc35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

