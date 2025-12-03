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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CVFZHS5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCJDMgFzWAcnKqhyH1jbmpj0aUywVvtT738qqLID9yk2AIhANPeI%2Bk5TINWzsPx3xloT5mjx%2F8gWbSycpn8xJ6ktFzVKv8DCDQQABoMNjM3NDIzMTgzODA1IgydJo5I%2BtncJkxxAw0q3AOLU3yUJb%2FLFJWDVqEbrCqkYfbqV7andi2XthdRtX5kSCOe22v4w5VXrCzJbA2K07DAVHjjpBmtaVx%2BNwvXGp%2FV3DR0pLpnHscdPH1wfdR0%2Bb7YMdXOHP1HaJYYUtkoVGgz4KTcodarqb9GCXlfzdYDCQBwAtMAXuxHobfCbgYRwDwwfWmZAGvkVo%2FcSWqR3TFc18mSGC%2BfmCTliyOuyVjAtkIsLL3GKGxDf1fZPHPubmA5CoWUrC8K2MpC6ugI%2FR%2FjysbcVtsj8kmxIPjUHynj96vVIpBkXWc6AMqpsquSRCihL6TvqUtwWV3%2B1TWScnDqe%2FceCh%2BcQpffabVFn%2BQHOZ26%2Buubi%2Ful%2BEDr%2FU64xMZojoZFIoDXTD35JwRZnL%2FbqvD1tOZPbLHLEW184hHvota4LXL%2FzT91nQ34b%2BhvLCF%2FnZqgjWtuPGeoMZtG%2Fy9gjzRbD5cY5y5lIXJ3vzIypV9%2Bl%2FE08Cniy1OX%2BJLvOOK2Kr4%2Bn2XY76hNe7qtTQ3seHxDSZyMN982b3KDPmE3mwf3x1%2BCKQllpsbxHsqU1LY62XPk%2Fr%2FNhWpKJyaXOb1MOuoagR5JG60Hu5SVyo1cd9plh%2Fh3RkG6Y4vSDC052BqW%2B%2F%2B4jVsl%2Fu0aPDDMkcLJBjqkAZFjiM9u83XAAArAwipaBNBzxVTw%2BC07Ppw%2B8pdZQAn1IIebGmgK9ml0fmULhSOfG6V%2Fo%2BEusFxCJxdYUhhb%2B1EBa6zvMcM0N0TKT0v6Yy5zn4wwBGDvnhfwNlS5o%2BHQ5EShUUlhSgP%2FToBL5RZexCN3ir%2FGt7QGhgcKD6m4wgO6Vwj4XihqpxXp3wAgc7gdqcSrFBMHXLdUNjLocXkIq979b0ys&X-Amz-Signature=635db00c5da094d31c125933962fe0a4426bcc6d214f5d8e7e40e2d833d08e19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGAC4YV4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDxR10KOxvej%2B0nrIsJvTJbtyTEfdgzENPtjwVt4IQkhQIgewLAC%2B16UbbZCaK4JcQVuVTjhgxKnqciYG03t1Nz9Jcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDDkXue7vc5FCmYcYOCrcA%2FdPin0K%2FQemn%2Fi4uJzECOqR8i4RFkgqZNpKb6yXzuhj17%2BGfuXFKEazcF8AbONCIBOxvF5rom3HUlS97fdUDCzicTjgwoG3naMOFrjgxjqkE8hH24%2Bw6uMzBedkNkCK%2BY%2BUoGA%2FCv2c3jtt%2FGnmG6WF4HgvqhBgpCIFGtAwPiQC%2FOAFIP%2BWClwgImA37T6TkIOSrnzeuwAY0c1qeFxb44CV4HGgZUqtABvqPv7M4ReDKfIqT5atWXiYOg2dQ0GZNvu9bRU8qHCIC7%2Ft%2BBEv8NM%2BodQyNxFjlo9HqXCOLFieF4Ozvc16rCFBcPHYaFEr5KxaEh4AZZr8dHXDAMzdKjpz74CxUraZ1vfHcukVT45%2F1XGHT89xTzthlPTUBLY5ElgArbNZde6rY0skgz8SGMP8N3J82PAB98Skd3FtaT1kZfAQX78ncA%2FfXoZummvmr%2FAAeLrd4jSpuwqkQjX%2BR53Pk5v7lGkvq4IRUjDpr3djo6Qp%2Fe1%2FLeNcre0kUVHsJ%2BDLb8yRRhXB2Rqs5QpSZIWja2vCBK8o9NvGG1vrNlYfs26xwuC0iwKzJ2sX3VL70Muqvk0oyMomoZNYgpZ1nZyJNmz%2BPie%2FTh4oAmXfmcfWfPsZepj4riofVKxOMIqRwskGOqUBWl27xUcUpvn8yq%2F9ffi5qpVw9oRjW0G4duJHYLi%2FWpJmaCntUeIirbAsyMlXjn3XWZNPlkTmak9Ql0%2BD0SEVvkCyeA5TMf9bO8ZqcpcMNIRHcsIoC%2FO9LkfN2FXl1wdKI1Vc7p1evEnB2vVs9D0sc70M3TJ3EkMeIF3GXUe2WNR58%2Fr1bGb48RPBZ2n4i6T99a11DX5g9ReFW6ygRSofD4YyOcGC&X-Amz-Signature=8f07d9a70c0ff5f2bbab0df97b218dc5266e4774fa5eedd3c3aa1d51fb5c7dc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

