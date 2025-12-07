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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HO5WEY5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T193833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZik12Oe8YNuTWVQTjYKkf68Zn1nxj%2BksZXLKnFeaFrAiEAkhYss%2BMYp5myo5B9%2Bsb8eaBykSB7fQYLZNTaohSD32QqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLqGQoq19NUIZBpvSrcAxvY9%2BosLR6BPfcQlIulU8zPdywDu6%2Fye%2FYZCnbIU%2BlsiKSql87rYHF42HxIkQlB%2FQy8OP0itT72Fx4Od7ml4LNialn2OhfzMczH%2BYeaneyd%2BGE0bt%2FR%2Bq5ZI06mrPEmRhFEkHkZFGb8CAZ8G2OKggjG55I0k%2FuMWnPDAKxWOtT5FYAZkT4LGLgwD4A5l4LUczSBusbpOFeNAcotWLT89hEEcQoeXNr%2BSZX40aM1iho5tFKsDYA7xprh%2BlnfipwfMLvXG3QMqfyMPeR7sTGFcr20yN122wpElRvofmZoSaTbvyUmV%2BxhkgLjIr6v98V7l1gf4WGPhY4uhMG1RVaZ1f3w84usWA073GEq33DRKVU6GCM1ve5%2BTLfw4xD4%2BalQIKK4vtPdavIFtPlLfVXVzju1IbCawLaUlrXN8pQobXxdY8iTKJ9I6m9ETbXyQD85Iz17eMXKdOJ7%2BDV32ZG62mvRHAunK87ccVzNu1IoCI25g%2FJKw3qemHMeaKT6OfbjxMCpHV3HqYubONDu%2BdjVr0SIu93jDGQEf%2B%2BXM1vh3%2FhOMrp3cMpPbtJpOZdM1da2IVpbzQ75jHW2%2BiJIA%2BmzKtVg2jIQLyCOwJASYkeEaL2TTqPoYtvNdpfuOmcBMIGp18kGOqUBPNRFMjQ08OscRKmDZU2SJQMqYjHW%2Bg2LVAZkIpDrm9m7bNZkIScn%2BNY5OGCjZsdA1mkBivNTn1WYCU9w%2BoZDwBOtGhzjr75Rs9OtLMzRri%2Bso%2FIUqalzT%2BZ4ZrsQxJGFYgPSfZblOYpZVsvn7%2Fhdo%2BN1E7YfP7moaxAwIAZd2HANnRuwx1slGwmFwSY7EEcihbMiizmPDzWeieRd45lT4tozmf7u&X-Amz-Signature=40d359e952da7ad896095fb5e3c02005a0d10f796e4b60ec2c4a54e02da38bf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHLICQ36%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T193830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUCD8OBC82PtcwRofdh88cz1JLowL4JPYhu7K%2BsCo5LwIgLM7LDSQtGqyr5bOIoZ%2Bvm6XT2wdQCw4RieoCpr4U%2FLAqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiSm8x0F3UvtczvhyrcA5O86Vmi6T5qTWWPWtXzRywDpVsjL51AGBDOSLPyG%2F%2FtR%2Bie2fpTL3MNHVe2DfkDFU6KAlkQdbmA8EkXfHGnLhqB4zfoEVckc24sXgOksXOpGnTzhRnoGOhl8pZIDkTB0gA05Bz0YWt7Xw9HjUpHZufdCrjC7Hf2St%2FU0RIJv5nHYl%2B7NGgBJ7df%2BQKaLGJXj60r0BIXYNn3pcqwD8dUZbOeMu6rcBXMH4L%2F%2FSDJaq8oftdoUdNE4iibntfWI8ne%2Bl0rIN6SjlAe8EmqVMOk5O69fcJTvjvZc869NPdCQJhx%2BPcP7Ou6XBtFayoE4311vEr0hTIf1dlIqnaNpoBpbM%2Bq2WwaA3gOZyNs763SB6noe0iBqzF%2Fv7exCW9VDrt4z7UgOphbdFCa%2BJly54I%2FSdrwhKrSK%2FYeksuWCfo6cVIZIn87MgSi9d6dW53fp93ram2DivtP2%2BTROVeZhK9C%2BZWvSbx1NVy5jsU0uwAJ6v%2Bbu2G%2FWk%2BhVJ5FAXFX8sNTFbErTCp3Y%2FYKA61mLGw6IBgnicZFlxMvkvjtjKpQ67FvSfgMIYlWvW%2BNyYl7Z2jDdiFH50r2IWBKf1JtiuRAMveX7%2Frk8o1N1vskz5%2BARyBtM4N0cy0mjfJcuqZzMOSo18kGOqUBPByhWkYMIGUkDIwCMed50%2FfI26ZojLlcz1S3geN4yvUxlVAAvi1FjZXlGz1ZoZQgOjANv76YbPT0mY%2B%2BJ6tcSsb4iSYyqlZDaJhhBqCZvzmOcdaBBhHZ8%2Fn3PtjELxIaGmZ0y4wQ9jAvtTXkd4I5J3BZ3DC9ZjsC7oDlWa2903sfJxjG3XtxJzI%2F5sTkvZy%2FxW34it6ZtzJ97Q0f0XmV0v3ysTUa&X-Amz-Signature=04b6147ea680d3b61ba037435ec09be14dffdf4ea07d13713531af0f67697550&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

