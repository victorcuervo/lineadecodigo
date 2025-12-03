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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPEMMRJS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T102442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDlpMSn9QZg4zZWCAt%2BpLdJ3xgeDg98bCVjMnSuM9O5ZgIhANYucSkqgWiuDGI1KJFtVh1IXHiWHWC15PfgFpdZnEV2Kv8DCCsQABoMNjM3NDIzMTgzODA1IgwwgWtKfpbYhm68rTQq3AMRsjhK4u0Uo594OO5QruXDzIka26qYXtDCcs3WszRd0dTkVgWRrfV8LXdwvRlVc4rVKBf5VmpVmiNo2X0eYDqnlep3VHE6xA1egoBvWcRMXoV4dN2ZqqAEecJLcqjKtf47c4O8r5Ft0nxli55RaGy3JeyQnSmWuFIdfh%2BEQncf%2F45wk5BgKGOQJjUUapMNnShYvAfxseNI2UkZbq%2BkKDL5yofPgcIn%2F3twW2Vs8D7JUCroMsvHv6uCODbOY7iaaWwrhZsowaa%2F%2FAivT2zw35zhXI6WsdMcMWVQrSEvkxeOMhZiA%2B%2BKHQ7PMMv2839xc8Lbyon4Zfzmsqc5owMRqnKcJJi1tvOa2ZHu4DfBPuLsFEhN9pDE5Lnt2bibF1dSNK5OJzZshsOHFjP%2FMLjByEbzSkONgjidieTZhPZbyL8txbED4vo45nT5SDZHpq2P8V89p6WKtExFwG1o%2FQ5G8bdfu%2BdmwMshFOnr5drBZ3Qyl%2FEi5bMMRLGX1nb0gj5xY%2BjazH77RD36jRP3VPhZFdssTD9aI8EcdBFfeK3qJkPc7Hs2BAxCxA7W%2BlHaCzHF9S8YdSW49PRH5VBrn9ZHBxXle3x4MtCLhxNRR%2FhpWcO3WxVV2JRRE2FJ4nv6aDDmk8DJBjqkAaDpLFVj4iCY5%2FIH0Iiv4DUMCjw6bpKB8E%2B2jpHy5Ri%2BN44hG%2FO2%2FtFIliXGy6HS8nnOVtJmmi5nVMBPvsD5NMAPmZESCWrAN4kLflVoC9XFYBxBzewnTit6o05%2BdbfLWmFdvnnr1TAZCZfY3MSa2F3zgy%2Fa8%2FYWeJ54Dxv04h%2FEa%2BQ%2BPv7mHcNa%2FatP%2FTseClkT7PPgnBPuYVxpSNeCGCuLKyVy&X-Amz-Signature=9124f4ec32f43aa172b9d7e40bce1634466ab4a9ed4f10d32e909204abe7dac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZETS3QQX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T102442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDjH7yTcjOtB%2F2U0Y6rxUoXykojFkVSCdTHG3pIvnvQPQIgDL%2FgpJl2LK%2FG%2BZBZn8Zt6aZM63QgUQC74DHWU3Hn8oMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDC%2FgWoaiodBS3n0ETCrcA87ZhDRDNlmHxqAwy5aqY9ddkNwOBYsBUIiXkrfgqkCoUtE4UT181rggLY4ryjeN7%2BruRZ1Ru1uXup9RNvn3aDubCsm%2Br6Ngl52VKGUokR5n5fBsI5nYTYOsUvc%2FPaY4vmFvOUw1ju7cSLnDglsUK8MkzOih3wdN%2FnWelVtU3YTbfLM%2FsMVOgODrtG2yWiZJwYQLaDKqG4v6PGD3SGLYGOKCyEmSYx3OqUvgM4kpGopQ07jm%2FW%2BTZUDtIbOYdf%2Bnlts2hkbdlUEhvsmXjlqclogSUwutIDya297gLeolObB6Y%2FUSJpFFb8lpKE%2F4TsaTF9mGcqUc1fp%2BuO3FuCe02r4%2BeAq5p8Oc7z3ntfion20X7FkQEca8ItuHaRjwcvipGp6nIMknCWgeZSiaqC%2FDRDnSa9BkMmW0ZHOSPCijqdQ663HkjVyEXRnzu%2FsVqnlBdxSkSpCuzH8d%2FL40BaQnObJqcSBUtfH6aCCUKmBtldYUVGBWS0siEEmKq8uphlXJFRVm%2FKeoQclbH%2BEPHWVhzV0fc8oFGW3talVR9vcPkZymMyDTkFaOtvMyQjkNehst4gtozul85T4M%2BpDW%2BL5PaNKT7RSpYqKprg5Qx%2BXiZyaGSf6Y%2Bf%2BW5iPeFnwiMK2TwMkGOqUBuyEi9eAVlKcmLSQsnDdlIR2awHbH9CvV%2FTcw1Hg2uMOVI0uCrrtwS9NLBMedyxXACMAAyE96LolV%2FkfMI9C7jGnwc4m11qgslUnlvQ69q4rkqC4Gv6smbUVY%2F3ivZeRdxU1GgX6e8fMuU2%2Fi49%2FBIrTExNWsIXYg98%2Bz1klrSWq08RiBK9RzhSOzWn8plmBsRYpBJs5SuWB%2Fv9pXkzOdmqmbsnOa&X-Amz-Signature=c3ba7941415b8349ab7999ab64fcacb65c6e484de4c71aec61798abae2b45987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

