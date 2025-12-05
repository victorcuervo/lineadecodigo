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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZMJXG5P%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T213512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0Mtp9x08IRNqQz22IJsn36A4CN45s0GQ5D48hzbLcUwIhAMtes8xRxKZzg83MSaAV115uO8c7b2060Ruy73Tj6onbKv8DCGYQABoMNjM3NDIzMTgzODA1Igx0v94Kt0lzwEansNAq3ANcUEKr8EOits5fcZMyoA7j%2BLZS1l6sg0y5dscCIF%2FhgOBth6PGSsEoHTMtj%2BW5adsLOBLEeB4KbrVtWpYi24LRSWcp8gmnXNUWF8XmDqT7eyv8koEOl7fiieMgNi2GeJ%2BYZKuLPHqN%2FXip04KG4rLE%2F79yx01JNKKWzY38tyBn709ECnOe81rDGB4evApbnhjNDkjXR51H1fyS5axzqMUZXbMGyGxCwChcvxL0IX7eX3KaovpShwflROjap3drG%2BZeXExooMGCUu%2FBe4nNfAKK04Pl6AOelxi8aw8lwGngeYaaIp8s%2F5fdMRjIEL%2BiFka4H8%2F7xkea7FO8AWGyoSfaqH%2Bq1ehRp9mTzGkRDtl6GJrc%2FdgV8%2FIecuw7i3o%2F%2FHLUePOdVrdDxZxU7%2FeIqyDzlfWH%2FKke2VDrHLOlbRB%2B9PvA4gr2varmvynLf3AJ1ubJsZer%2ByPwhR8RFXFVdCMi7%2Bq7GvbB7B7uR%2Fm5UNtCSezrd%2FoQ93oigaIVH9Vgwm2X68x3%2BmtqA3Y0wrSmK2VP7JWVIaBfjH4FkmVlyakOB0Gbbms1TBiEwxqeCkOAWF67xog6tK8cA0yDBOZLbPBffgxm11T7Wy%2FeRMHKjR7w%2FhqsswbjeBCF8IjMfDD%2Bjs3JBjqkAY0Bp2I8Avv6m3PXWNRUASvVlUQ%2BDVCojjN%2FavlOuxQ9NxnzaekN5piNB5rjW3Tx8v4SsG%2Bv0NcOtyYiqQ3eRl1Kh1P8SSFcl%2F7eMYqNiAWT1uXLZOV3DvSNPF%2Fl3jARWVGoR6jlS%2Bcse8i%2FTOhkP0vX9F61jC1AZ%2Fs28JMTigJFzu%2Fz7taqXow8Rkt1WAo%2FaA2mGO2GylQjlW0r%2F%2FMhTznm2SuF&X-Amz-Signature=8bab8c5c3deaf07dbd26f3d7277124029bd4582ea0b7d354856aaa706bc2e66b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666326BVQA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T213512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCotcxKefLJz3aFr9zcAeYJ9BOCfKx8XdHGj261AgkxbgIgB9YY7o%2FQb%2FekVF6PAIYcTwy2ZGzi%2FClBB7T4sTj52qEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAV0JHjEiVEqfHx%2FbSrcA4pvIr8FIuD3zOkDY3nhulI82IcygjKxa7z2qPVvMs500KLO336Qrnk4SgEIJZhPoABRUCSrmlsjjqOEnnrFQaAe846Nw80fo%2BhDX7gZNghYXcrxqcW%2BWN5j4ZWJhq9Q8a3G%2FVkepgolPzGDKQj3NReL76hH4Hjy9yCffGce1f8PIHU%2FTFo4eb6kwDZ%2Bp%2BA625rxHBfcv%2BCV5qw4LdXxLXbZU16crRCqQFhRmpqX0njyVSRkDFIxKLiHMPKOHT6UGirYZoc4xrSBKkHA0%2FjlNGISMxhJcBU27IxxcPqW88oshHKhaTiiHiJ%2BL7BYY7mZKuLBG3klmmhcFXqGey%2B6ahxD0TTOBF8azassEbtVAjji6z2rNvhzBidfTrP87tBTcsrWXoWYQDKnYKUKhJe%2B%2FywDsdR31hb0eknRQz9UZKqYecd%2FKD%2FRx8QN501sEWYruA1WKV3SP9%2B19c7l991nLB99dkGjnFI1ebypg2U7tnCU%2F6p8zEuKFcxvr7Tft51cdZrjnNwDTC8o8VqfUTVdckRDMNMdmcQ49MSuvkRASAUYRYOKWLF%2FvdLeHB3Mav8CyNKcpAuvsaS%2Bpuia2P2X3kzOnTFK%2FGpusejnPdscjRdQpX92%2ByAGq3tSjCoeMOuGzckGOqUBcTX8D6kehgpSDtzZGtiAIYrO2dufoKF9%2B3pfRXn3SvZPy6sAa24GEWNPS3vOxlubbG7N3wKhvcWT0wDRxsL8rjTVXRStEp9G6WCNvF%2B%2F8xiFTC9tab6k4AFLjYvszr8rtERy8AbFAYJksXgapMa27%2FL1FVrKMzlnlY01q31lmSxfdKewTBOsjPYI1BFrR9wLvkQDIsTSVWto6mM9ijkvAN7fyp2A&X-Amz-Signature=1616d8db90240dcd5a065f99993ed755e5467bdb30e89ad26713d842c7ffedc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

