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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDGFJWNV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T014811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICb%2BKJBfTXhfY0NgouncUOzPIMTBgq8VV5qcL33ryEoJAiEA2%2FgPX72esLopEYgrb%2BcvcZ3%2F%2BZa7AC05SbROGZgLN5Qq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOc00mwQW8b46Ek62CrcA5E3P7%2BPFJJEIPk4K5Ukd62erjAL6cPZr1xtuFxhHKW%2Bruf18zORUHDSRd49nhAClrcd6%2BNv3%2BgF8VdLPjYqMAqIdvqHwg7TFMjpQahx4PGA6XE0fkj3osVhCfpBzRgt7SrqzfmSNtPg1qWPZz3GX6jX3xKQMmxsWDA37pZkSbXxgbXEY%2BwjRtzGmgJ4eAlL7L%2B8KzYww1UL52zgxpofmWVqJGEAcun3lVqPq42xP0QEWbD%2BJXNSyRvT1kE0gbut%2FdDVunryRPj54Na99u400OMK5HYwvGRBUIlSj9y%2Bu3eSc%2BeBx6K34HlppNEBT%2B%2BVM%2Fu0aysqUWE3kY%2FXmtnDCemiWEoniYjXfXDmv7jXfT6pbWax8seIkb8ETzGsBho%2FXYOK6QA%2FR1D4tguxoF0R%2FLekP%2By9%2FBiaw%2BSQLfqB4XpSooVMW2ZA1AHNnxnTIvI7m1foNBEp7aNeqiY%2FH4mniMFDC9seADnKcOUAxEba0jlbRyWLoIxS4r6pEHTvMYzJGFdqmBPsdkPv89koc4TNVdZppIerXTrn153m1JTfaVj0Go651zux4Nk13uM9tezcnnwJXEf2IzwGIBxi%2BlyUUukLnn%2Brr1BiSuVllVge%2BI4TUTYsMxvZAKPYAFYLMMOMyMkGOqUBJKFdvG4as0GQQgViizXTRiaRYqCb632ckA1Bu1jTkJgc%2FFLATDsAdJ5P5qH4nmTy1Hqg61qoTCcgo8yTvTi5nYzy0k4luoTSvxiblyDmpmtjOizZ1bObTZMiX0VL6wyRLPiidcaw%2FKB2SyfUJhoDw%2BzM7nkV7nxdrE3FuFlY2oMa5twH8n7GtfgHkjI%2By8nq4%2BGIuZY79OdEL%2BdmybDa7LVCmOrS&X-Amz-Signature=dc8a8464022a163180051c2b4368036af8253ef3e2b572414b1a6dc786b1cbdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665KGG6I7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T014811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi%2BzimY8O4Qxo%2BnuLyTs6BXyoFBNThdBaw%2B5GsOz6y1gIgI90alVsOPGI3U6dUS89%2FdvNsi3M4I2RuTUym3NGxLkkq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDL4opQAfUmWx7tCewCrcAywDq0DzM1jSgT50DojebfaGrwzPvPNiZ1qwz2ptM4q5c3D%2FeC2QjVCPUJ8YAkq8rDFHfXgyVfrZIDpKpMSiui68ZxV3ZmH%2BFiziPfgYSbuXiYmTUWBpLPx2NlHOHyY5Drmk0pQt1GTZn9OBR2G7%2FBARAvY2WG9h2TPzowe%2BdBUByhd%2BmJ8GkVmqBrkXeku7Vtt3%2BjfKeALFJ%2BjIiKsrD70rf5lF%2BAK3Pq6iZ8T2Z9iKiVkMorOnlImdl%2F6DhIieCAifgQFpU63fT%2FrMnUAxvHpnNpwy2Itqk%2F0dgf3xpBGsSlSbKTEFelHmngpGkJx%2FQ1aAn8r%2BDt71gYCJHFHTor3tpRSj8Uwzjm7w8lQ472BSULRjcC%2FetI84ouo8h%2FGDcmV2MdwYbO8TL52fFjV91HswBH3sIodcoAdCLq3b7%2BFpPG%2BJg4159SKC%2FTdlzKfDbCUu0jZQxs4pk5SQfc597VaN0Tlqfm3oMzqffUU%2BSjXfhA6%2Bv8oIdMrN5gt5I08Kq0AhxumKpIDQ43bG08K%2FwyENUyb9%2BqTCfEhXNw7aBeOICwQWzA1BK57YD05F2Djgi3uDmF3nPWbmgvKE0rGzXWAihp7Hu6v9LTQco5Nu3M151MgIHHkivdMOfQgmMKqMyMkGOqUBj%2F%2FnMtOrham%2FbfeSM%2BDeNQPJAFYBOtM%2B66uzBy8747u5CRLixYiwIjW0KDgpDtUS5gTlhSdTajk6oFZgdEJH1Crn9JMxNnq4IO%2BbDPr85z8I7t5HdQkPgXUyJ9eTTjTMCVWDbTUFhYAfQUdIZcjGSwqzX3RfBP88LG3qStfFA4HltAKVehYajh4zrjbCiK6cfE1iDqzrmzL6IYrktZ%2FlwXVMg5AH&X-Amz-Signature=1bad8acae04209bd208168ca7cd587109d5901705e80b8c777dbf7aa2baba9c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

