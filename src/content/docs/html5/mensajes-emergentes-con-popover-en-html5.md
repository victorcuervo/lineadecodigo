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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623IJT4AP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD0ODjUlIgTOOhojOtz8ujJ1w%2FV2GVnMH06DwHf7FXvIwIgMmr1zoqf8XjrrLtloia3RjUly8T4JCr4w9pmy51tPCoq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGNPumG66hTfjUy0vCrcA07LOVKOKqXCvkLrh6YG5rPq9zyu%2BseU5WfyKNs3lho4aNd1n%2FYHDF5z2yHKVRs9SkJA9Qp2J7y3ywojPJTkSGbqalJF2zb7lLD1J2ih7QTR5N6ZnzQbOjNFviXcrh0p1IygohbaSn7DcWVpkuxHMhyri0tmLBqXrVCo9W%2FTAx9Vtadiu1Ydh78EM7Cj7sQq1euRudaKVJzfdp9hJbuWVN1TprweK9EtCk1Oo0LzvJH%2FNsALDBJyR0MAXLNMKXDZSL2V1j%2BbQ4Jn2kXuFOI3TIhxRBsUgjeH6hG01bzo%2FXzRpau2H8G6IvicKZ2xpLUWR5N67GH%2BOQjLQEJEH6NO8dX%2FhGOAiTeM7%2B%2FXsERxu%2FQroRMB8O6w04jn2bakBEs%2BnCyz5ILkdE8mdNCjPKnc33tff66WkfxF5SRh4JLKBU0W%2FANzMlUTRCChRll0YA4VodpzPqJUYzOJswXbvpb5aGkWrmO5k9VI64QgRgoiqzmtX2aouGApkZoFpE3%2FX9qY0UQw2NkD%2FbkaMJaS3mJ%2BOBZ99z80XRjaQ5zAUBJUtKsCuQOvanJTXsKDi2OqYorwxtt5dSiAM9XFHswmnUk3Ln5bmBBET4LZUSf8EUjLhXhLTc05hkS%2FejToWL3CMNSUw8kGOqUB0NUyIApCMHsslApyvkqbAQFze0ltdnltL57abUZLA9Y%2BfphuSCACZapYAHXlJUXBl5nvG6f4ps4%2FHFdbJCwjoaNSoegIv6kuOZ5XH0TVaaIMPADtHkktEKvs5cM%2FVrpTJJ4q2dONs200O0wxNBkqw9v91EFRDdDvpEx6sA%2Bq6wN7LCys5kLEMmeH2JB8%2BSIdCcp8MS3c40bgqi61B37dU8KI%2B8TG&X-Amz-Signature=c1e05f472e9cba580aed2c3d99d4f304a9246c42579ae409eedbd0d582e23442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CQATPCM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIAhMz%2BBeUS%2BY3xxcOJfCfUUednG4TmaDcg%2B5SfU8TCqDAiBBREw3rw3qsXsg9n47ZiSelCvuN%2BdEnNcQeUT7MEza3yr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM6LAnVn%2FsMP3CcYjHKtwDxY30Lk3qX%2F9yYtWUc%2BkICA7WnuW9ovIhdYi5IBO%2BYpXXiXZwkk1GKPxlkiDAkzyPZGBQphNROE3MLMz2v4h%2BolcXMMeqeWGs1BQ0LFx4dGv7rxLiezxIGt6Tcm%2BZxVehChyVPd5F04IrGvRfsof7Ra0sZEH5dx2mF5Me%2BDcx7ib6I8pzbk8XCKNpgKgU6eTvUaaDhH%2BOvdrc5jecN%2B0N78dJQwZDTIqSyqtX82jATKevbbcJ46s2Iw6pvndxn51oQeyHIWvDM%2FF0uXIUe3TxuQgrN6cc38EFZLBgq8QC4ATqIFfyxX%2FAspfrxk3DLaSu3Jwx7tDcg7FjGGXoMF5idxRubsdHoE%2F%2Bh56Pcebj0%2BG7i2Xrp4ma2dwYGhhEHLas8H2KXXUH0v6CW6%2BJ%2F9uQKp%2FjvoY3SmZ48pPE8n3%2BuVOPHBy6cR71GKjlicvRPM7gsTehJhr3%2B9Wsog9BlEbjcvkP5aGUkT4DdDwvggC7FNPcJYemijj1udDwHngXePM743ObKu%2BBcI9Tew%2BEJQ9moqz3KDX9Qy%2FtiCN4sp5YuyQfQyyr9%2Bh4cErgvjxaa7IMgFUtPSauNoUHEnOdeSeDseqe2H%2F309fBs%2BEDCMKVdgJGAZF7ZaRaGRTSkT8w%2F5TDyQY6pgFrt%2FazwPkMkK1tDbwJ2jC%2BdE7JXz%2FoVDv4Q%2FeDL3Ab9GNxDqgH6mbEL6c%2Fld6Zygtw0UPcbow9C6C9ryYIEM13yj50bmVrx%2B6JhZneS88G41PGrSvKYH07wLRujHIuuAMzGufQ2jcqXsMrSdrPYwUpqfMTqLi9sQNpRYVlV6qAbqcoddotu2p%2B%2FRQiqr31V%2FIZue8McoT%2BQD09yKu50Em7MOgIUsQE&X-Amz-Signature=727756ebe8cc6f6a31efd3441ad8cbbc3273eb475eb530c3c86743f6c7407f91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

