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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBH4C7ST%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9A90lfkU48hkiIcxO0hY8%2Byyvnt6GnfFFVYl7CJ70jQIgcDHLCe4E5FZ0gbtaiVv85FWuGcxVcARhTfvgdOM7dswq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDIxupjfH4FPVqjtbfSrcA%2FagTFHvCV%2BX9EMPqsycyHx%2BUbniMJ1P5vrEbf346pM2rgkr95KnoNL4qnePPJZMl%2BLqayMcrjjmiZuBkv9%2FeEmeNXDnJSgiAIqHURDD4bms6tTs7er4O2Cwi8jU9UTHy3KYIk6dDs1BE0uE9020MuOc8bQpmSIKvl%2B%2ByBhTMgnudG%2B6IkWXsYezvrJMEBWv4Kg646Rpoc2r3A%2BeF7g0LioPn2VC%2Bsw0E%2Fa5P3ZGIk2omIGmATHEze5BcUnA9j1x6HX4DjGvPSINnXSi1medSjSHSJ2Rh9KnjzFEVPOz2VQAfitWhCpUy21Uv8U0oF0DdgO0GemBFELGJsNeRDoKpWraEL2bI3mMISgnkmzh0KoQyniC5a84qsUmkGIWbtQJl5GNl3gQywxMIUb%2BybTSTVg12H715eHNsODQdgZ1HCz14Tgx7J43xbFDf7zS%2F9GZuJiU368XXVNyYJjOr0jO98E24r%2BjQ3j9xOgCWW36%2FYbN6dgOFDH2nFjUTucSNDoj%2B54eIq7mbGFcO2A9YdzuSjRPhIVRHIMdN4AFvg369%2BZmmyPvK4egD7FCqajeNJ8VA%2B88b6Q48k55j3Tmc0R6SfOzq4f9NQTquM5olyi2sel3R25LtORLuYGG%2F5ypMPjFzckGOqUBEak2XCWduE%2F0n384E9D5oYisCg6h093hlf5lIin5aJ4h6a%2BSWwMhEbWpd9igWTKzUxbe8LJQrnaUO2nZ8a0R%2BZNdJ96NhQF4e93HSxWZU0i0YNKHaMNULByqMPCdURg9iyvkyCHe2eDclMUGAgWga9S96zYNB%2BV2eQih662czz5S4kCorRlXYVSxKbESU7W1eL%2BYjGwgOw6dviykeYGPvuftPxTm&X-Amz-Signature=b21c06af03fb2587683e82f12cc86a18867afe6718a95750c87a938ddb304739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SGGJQCB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMy7fRcgQsK013chD112ZNVkNZ%2BgGfeD2DRu695EVvVwIgFV8kPZsP8%2FU1CtIxbbh1JemBwzpbU7I%2FBdY7W3LEaJMq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDBLYQdoIAyyhpghXOyrcA%2B1%2Bf4sYBDtnV36PSrv%2BZz7aI%2FnI8nFIwS1sogeXyAkOek9QKEA%2FqlvrHSLI4ZHkq3VytVozfn7cjmtSmCRgpw5Qs1Jh8JqL1h62ZAgKH5RXIaB5C%2BiRBLmsZJz2zbPIEwwmEBVb%2BQVMtM%2F7rgx1%2FmFPXNJzJqm5FsYj%2BG1Cpd9L0cNohOy6CqcjkHT1x%2FW7Tor14m%2BB2ZlBQ5gluu0eSJaOv%2Bvv1SXvoXJFDv9hMw6GYDTTUFUSVkjvnsV0nrxceQlAR3H3HO%2BtvNjaS%2Bo97%2BFPfTwkMBCw5ALuXQuodvJDa%2FmDthftG8Uc9u5nVVOG7IODLQxqy%2F%2FMb6Y78lNHaDCqBzyl3%2FszEBVowgefM7BkletO6UbVIUleUL1wmB3UZ50h1Xp7KDsPbtY7sPFXOS0gN117hAAAvcGSwDogF0CVjWkEKPMXiDjVNLwW7wKtW75CD3O246Q8kmD7fO9T7Cb8W%2FzuCBAdRRkwkWgkJlOsRXVCntazsYazah5voDVfYeFO3e%2FIinJ%2FKogM0BeZymhlHfsu0UPg1aHaCcPkzgjHuAqvdvrZiTwyzUj%2FGTXpkmk7RnkvYLTQ4CSkv7yI15evuJp0x2mKTv5n4p3jJ%2BVaUMjgfabMeECWDL3UMJzGzckGOqUBYBptiyQj0yNCE883WofpESZovOb33hL%2B%2F9gOfj40tIoib97jwLOK6CAN%2Fa87KIkMevyc29e3x1FcxY2fwk0JBUMA0GEipNlP4qM78laKzT6RSnacY5NPAA8wvun1rrNCJEajFw%2B37wcI1rsN4SLKtfQHF%2BWz3kpwQF2HDz%2FhZrWO4yNjOS3JYYogva7Nx0RSFpGw1xRsArEtReUI8irQNjtM3ENo&X-Amz-Signature=cb6791029da44af04c0cbf08254fe8ac61680c49a8807c419ed2231d7e6cb7c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

