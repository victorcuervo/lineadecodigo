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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH7WQKGC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T000843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYr%2BAPltddlnWKkJ1b7zjR4n7t533PLEBjUxKYRPEVBAiBAm2ZEgkDP5SWFwIVKl8BWPjgZTUU1WCGDVQzUVH5cVyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb2eFGsASIfIb1saaKtwDN%2FfMkNLIRRIk3zjLGupIU2TBS6DJmWEI6TrT1SIyDlGJfr%2BHc2b8y4FccO5llvYQcceqGSDw3HOzz%2B74ZbkrgUXX4S4h7%2Fsav8pYBCQWC2UoZxAGJGFspvWlngd8kWc27B0IPd1VB6bZII8%2FiKjNSSw4ug%2BVCvoLuWl9m46pGzoudOj7GSh4bxWSIqCdJz0VnrfOjW4ZfEW%2FYsj1Qikkgqz%2FeTej3qtL%2FhRhPLzhNrf4a6Z0lz8IHV4ybRe1uDr%2BtffLa0A6Of95YaE388NomOATumnuJ%2BxzlWzoIRS9sWKORszU2uhybZNohahkvC7T3OAFzaYRu1F1JmeWOIdDAhB34HWN1Vt0sia%2FjpBP6IDYnMcq%2BPihyBNnmf62FP56d0yTaIOh89H6FdXp2LYAV5TmBP%2FI6rSpUig%2F8n45TY7skeJDhsd8ydJpDVTMSc4PU0u%2FpgNRq7HVy4MyXsBLdS6BE0IvgMGBENmNS4gsIKdXakN88PB7Ha%2B%2BdyDdmVRaqBMwP1QsgHLHT0L4LJB2ekYqd1PNX89d9urFmgAaf9vHtGtfIJAHUoZNHdp7N1DnbDGk8ErW2%2BbTzltY%2FoRIdTjKD2Yk4iiqdS2EnG23bGCj2y%2FgM35c5A50d1kwqcLdyQY6pgEjgCPcd5pt%2FEVGT9nbM3BRzIp3C6lYDv%2F2NwJg6p80Majdd5o%2FcK4%2FFkRYsKi8sav5hzlD9gJ%2F3mFM%2BmqGWB7tWcEJ3Rgy%2F8u%2BE2o%2F7qsVV5bBmvesVW3spqTxT7jtHti0gUx8SDlwIpQ34mstANwSqz4HOPz1e4Jr%2FqygMaWYuINWuN9vLDdPxF9hLPqzZmCio6DzYz4gx0MFzYSQ39%2Bh5p2DBTcO&X-Amz-Signature=e31d25cdaf554cfd6f8e14eaaeeb1e74dbe1a5542c287eee6f5f006800915cea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSWHDZTX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T000842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7y3%2FOhE8EjueQuzW2I6G6KRNbOKOUKPslg1qOat3ATgIgB%2B4ZAeU0Md1P1COdQijjcyWwu9DWVwhwDjoa96ppnJEqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMhaWQfr%2FxyAa%2FTWCrcA2BnLllEwsOjsZJI2aJU1tHTg5NzB%2FnhwrW%2FfnECZY%2BLH%2Bq8B65xH5nQIUlZ6ietn6o24HFSDWVmDT7aXJg7WjLVmlbRMiy0d7Fv0D49KXv%2Fluvxr50bWWYXu2g9CRnGpZKX0dvEYJ8Wux%2BrIbi%2BItcd15Fy6T2lSNwu%2FAmUdir4v%2F20WcZTD1QhU4NgWgJr0uApHnSy7GK%2BC3yxQCIuEznSMl1AZu39Iy9s1go6uUIcrNQyZ1iHmbPD6KRCQ%2FVIIO7axaL3zSncUbXpxeHjb%2BbJJFsh6kTv6q%2BPBUVrTjmDFdbw9vxw%2F%2FtTykCfVTyhqFaoI32MeZyuWdLaDI5HcFZhOe8ha3DAKGH8AxXQjaKnp6bnPuS30Mw0YuZU5xmRfPDFKPmnLKRu0hl8S8kdw%2FuHm2PhB3fZvR5TWxHOsEmH%2BW7ar%2FDDm7OfD30ipaHK1TUYEdWQHLhZz9Gx0n%2FRtlvQvpA%2FAM9H3vf42qiH0DYLO0dtnFG2n9nVc9SLnhWByhHZlw0Pv2sN8X35rCObxjocaVOZkKDbACwe%2Fm2L0WI3tja6Zuo6Cj%2BW5iUk5a3kvTYRrqqNHzYQekvGKZfnjRtkp0kk8YXjAfJcVIpUMc1SNTL5xoPonZcjo42xMIfD3ckGOqUB1K7F2Bqbh3NKO8NP6LC9m2xy9LfuwOiIrtoH0CfSQ9UeH7%2BDoB4tbvVJbfwNTcduUbm2EhSppl5GBGcSldBs%2BA3ssmBgnPCHsBkv8grMvOe34nPEKolSq5pLh%2Fderz3E13lxFDOQNokRRjUniBbYOvX1scU3gW7054cU3KS%2FgZ9s2BD68%2BH5Wjv8tN7fGTJhTa0oGvAKqmzXJPPYlvbHrEf5QMKm&X-Amz-Signature=ae6924b222044bd1b9121eef6a8a5e6273cdaf958c9a11cd73bacd3447dc595b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

