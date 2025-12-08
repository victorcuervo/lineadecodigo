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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622XMP7YF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB03Z8Zku%2FObVNHaCVKMeTnMU1DxyySKgIEiZ4HWCunDAiEAzdxVp%2BeGfwxl2QH5alZNDSA0%2BXMcbdxCPHQaugeA%2BAcqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlaa8U3WBCNaYgSACrcA5cNBOBTeZ4es4lrxhDrAxepnTTuhS0ZwxgIVSY%2FXRYRg5madwpTpXjym2nrrW9M%2BI21TtT94Bhkliy6agI0qoIN22okk4klS%2BytjJvZtPAFL%2FDJAEnkUG8eLHbGpH7%2FnJEqykAmF13GJu76TRufdm4pnk3ZGfAJfqnwZkLHVZ6WlciQFIdi%2FoBznjehsZjtuGHWrAIgY68I9P9v74kUAzMQRNODtNrBXl6uEJBwxqp9HLJOJOuQILHLd8h2Cq32WMHckzJBRddp8MRPGSPsbVu%2BGilvcvRi6%2BcqMvoEpUnvNLRZAhxOr5e6U8AgGx6KQEwioNcZtieYKz7r%2BlsCzry7LrDgdz%2FVCsd66RhN9TCQtAn2zJruKb6LzDPZVfDwBnj%2FFdU3eKNxBZx73JRWdSWztfnEuLUB3dkOzRGoYg3dJDpn8RCuG4vmLnhureh10Kiv9UdI2CM8DI5Q4YBsPby0qA9XXCOUWxXvvzmQDZC0h0WrEjubzprBoRlGJ4qqrIaFBJDBJboKvvaGRh%2BjdTfVtoefpwID%2FSr%2BJg9OGJYe9jsrWafsGjEVH%2FLLBYu3U6YXZfWSER8XP2%2FxkYt72RT4p8MorCgVWpoCTIMCYaM06DyuW2NzMuhnsYm0MISU2ckGOqUBAxIo%2BIj0%2BpKiX%2BuOavBJse69ArAs0jKf2FiEbiiE6Te870fILfdSyj%2Fz8aKwnjJWIQY28rvm8E6%2BI6%2F3t4JmowpabWuzUEWiHD42UL0oJZZY8mK%2F5U8LnpmwUcxkIanA%2BB8oq0K783onMGvTlgqMhDNOo3IOHjSPNSEpUWh0VNx923Br3pSOaVX2TJKw%2FePDuXuF0jeSIJLtedcTlZufOfYPg1Mc&X-Amz-Signature=a3512d341f7f099b2d1a43c0db6535347373ad8187cff2294bb36bc66e1fd6d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMWTJ7IG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8SDCMhZVKizY1uLGNjqfaL0h39ZLWz2GmwJU6QfOQJAiEA1lK%2Fhb3EtejR3flyjaDKL737JHNFYb4YCt61qC3LWr0qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN70I5J2wRXsgjoOfircA58WApWAi7Rc7lH4p6CNkZ921MuWQFWoZAfHIShp6wFFUxUELR15IgCCM0SHSDAM08HUalPUkdHFH6vIHzcZTHcSJiSfsUcW%2F%2FcXo6bHVMp59XZy%2BRK20BFIhG1LzSIK1HfC3YsowpATEtbFTM%2BNLAwtVNLbVfBLEH%2FBuvaOszrIj5LO3%2F%2Ftj%2Bt0ytPeoW5Cn%2BpYXWgPjnZk9Ms9EUYApIR1gA9DLzwXjHBL4%2F%2Bn9NHv2sIJU5hyq9ZvPZYDT8MdF%2F7fnBcVajG99n7TRkAk3H18vR5BibOuTWR1mELwqR3sEH2W2wNXUBIZyJ1H3HmI0gI9FUMrg%2BePI9kwYKpd7Xwl2rM13AAfo3IOLJSveUj1kIZ%2BnQehOLPVnbGg1iCn5DxYrYtNFGF6i1bDhny1sam4u9sS8f%2Fa%2Bxuh6gpHxaB3%2B4lwOAPD7cZpXj9%2F1FHve6DulnpB9BcsrlyyefXFEeH6Srk%2B4SbqoC4n2rWfNuvkX9X6qsjYOStxqIaLOiOsm54HsdYtkL9xFMz7kd5MVTzu4v0O2B8bF3oMK%2Byh%2BFGRMFZgYzYpjYjxD3I4ATNnsIMW9JgIGYe%2FUipBu9BDzcQEMpGRX0BzGxqB8uHMaY%2FSpBmnMGDIP8eVPGZmMP2U2ckGOqUBN1dUatkP9Fu6ZSNDrLmXewkLuC2pALp4WvTOyHnYE5QIJ6V7nmo76Jqd16WtOG1ZV68dP3YZx%2FLs4kpWOzqij%2FqnRaqYyZz10%2FVslclSC657X3j3M0wVOLpkjoiiJDqR6dMSgr5onqsfZ8TcjgVd3aJXsCSkRnJdVHvApz15s0vVRyo3FM80ZcRg7sukWHFIpg3OtZthwX7V6TewujK77zNtA73e&X-Amz-Signature=f8dd6297c5c67bcfdaf1c979545966861f6ef2222be36572f111a5910a7329b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

