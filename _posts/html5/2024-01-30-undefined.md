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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677IEWVLB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T004202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCBpuKMWMhqDWdx9Ge2HJile8yacsLjb8dbEvUFDmRhtwIgT1Bi5lqtvMAgUCQVE1fOeYDIwtDNLI6UWfNdRWmdPKUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDM%2B0NN9Zd%2BhzSMA2HSrcAxkBcCSdk8spPx9P07ehjl9f3tqX4%2FI0NJaJ5Z9ZBrjoz4xY0ZFtwNOP8z2cZ7LhfSIsqv3%2BT6ga1gyebMSOFPL47%2FFziFk203PZaveF2gKT4eCWZ1FqPpv6dIjioD2fkcZjYWmpks3DurhaRzrnmRlk8KeHY02vSlXpTKNZX4u%2B8UZoM1GPgRfb49kF1ICB4385W7qGPBR9tc0djq8uF0VsoXwrW0tDXjIIDuJYaPH0xZ09dFHKROByH85Ghp8zo0663ZqNYa9ayrftuvT9j7Ihoj2g7nV1%2B1OaImjBhQe%2FyRmduvRUIaWyelBERaFb%2FjLszV2Ecj0jvEJsA718aWW6KNxU75ptlew8fS1B7gkSYOg0yAl69SaKz7rf19vnbcCnBUfBJWag6EMzAglrkPOvmT%2FuV2XjBjouEntMlH5QYydnEtk46%2F%2FKpuCHk3m1wJUWSAx7rDagrXOdESkRB1lDJFOZ908oLws60M6N58oDnqkHY35cyjLTmFKVp3zETyHqf5ES%2FezLXhJKmq2pPv2gU9RxzLh37Pwx9%2FpuOncObGVMWuzKwgP1MWIahAoUWR3J8j%2FZBYglw%2BdNG72zzixBqWdM%2Ff8QatdpYuvO4ynW8wCJZeOJUeedgSKnMLb%2FvckGOqUBjBRT8MngpeMxqrvUinkKqXWexnZVjruoKRFs4avif7uip6o8qK5X7uR48vsf4k6XZTbXfBxaorLkFib0kveffZIlesRyi8XmXLZhpWMt4hxkoVpjym5s6oYwBMKodTaiXCRZPxjlNN5%2B4J%2BCE4JAkVDE6JI4fOF64u9xeWDE1eZ58oVShKIaftaaQHsu0WBsR0LtKWHsmfMevyGPDJvMvj%2FzH%2FUD&X-Amz-Signature=afc63cdebd6971cfb869ed2ad6ffc326b69101078e8ebca0ae646d6621d84dc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YPZ7FHS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T004202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIG2LcfpJs5HoftbFsiE1h7lMebw5V%2Bs8awweMq5x1kVrAiB1UxqeuEhTye9ajgsTyV6vFbKf1kr7ljopLjmjV%2Fb1vir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMxXKujMrii7wZU%2FlLKtwDCFadEs68suF8Ccg8m%2Fbh4B2WIRtRlWd2q0LPv4gK3vcHjS2Jty18urlJJdm2Um06gi8R19CaToBdowtV2RMpdAFnRJF12mFGwzOBrLDqUN2A0rz0nB7aCrJUKPikkiWZdXtqW2aPKrtg5rjW%2BY6pKNxPuGxH%2BoIRrwuOGGjYH0ZboA5lpWfVH%2F2qPuodf9tK1WU7xy%2BAYfvAR8Lo6Mn4otbUucdbwsOMlSeIN4UAXpV8Ju%2Fki4BTYimEmrrGQRvwajsDd%2FPxKmB8Tz1bZGszP%2FYcUpvvbBK87mBpixz%2BFzb27jv4vRi%2BQYt5M%2FdBr%2B7t64BfcXFbihl3tRko%2BVV0Dy%2Bc%2F48Kcyb%2FjI0prIs79Alr2M4PrDWVZsWOrKFtyuEm73ipvm3qkEwqysUtRTzYlHE8BhJSMhKlwrzPSnlRa6%2BFqPmSDJPJ9qN3dDCgp3C912bxCIgtS2bQyR5L0yIDnMlg%2FNLPiNQ3GQVh1w4Eq4TRlrHjjNbWBjnMUMdu51btSkrGflFoMcwy9RVPAt0Ej48PiHDjEDpaneeZO3W%2B%2FU6gcSWEHG49%2Bb7PsymxACBgaW%2BavV%2FNVIMTUe7Wkqd9k7RnqRhemXjvYhhvsrdwymWVMcPHU6sqBZn51fcwlv%2B9yQY6pgFZWQbExXTUjqMmdgIWdZZC82syX7LRT12eOdISyq6nIDy6x2HCN8tN7rPVwCqmUdl2UU4oD%2BXtXIUBHhOd1V0fLerk8l1THQFH7%2F3gBM1piaGZ9WQVm8WDT30DwGilsGiE2EL%2F%2FlpHnb%2BupscqAqvKXptrGFV2syeRsFGr%2FV1ker38rjr%2B9VseZwyhO5bkuu1tGuGscK0tKiaqyznyFnPL4VDZNWqk&X-Amz-Signature=e792cca9244a254a06ee744c030fe4a9f91d3bbbb042844a476e34b274711f1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

