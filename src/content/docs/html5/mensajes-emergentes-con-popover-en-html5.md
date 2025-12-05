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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642K7ZUS5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMvctdyxGtB3AubNPn4qw8uEiIPKwhtWGeu%2BjAttcfmAiEAmwfTbcRPkJXiGORMzOqY4lPn65mkaqkNF0iWlB%2FYJscq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDPPVOlaUjeUJ1V8HuSrcAyAJvHERhmEuwGGAQQ5JZUX7gSrKddu3UevTS9HMLXMCPUYvJPKRr7M9d25C0%2Fz0ESazbtFRrWb7NRKvOOhPlawvtx3pD3i9%2BMxg3tZgNM4NBAZU%2FiCxwQxcEIHnrDkiZnode13R%2B91SWNdqnWiubdm%2BWvS7yXhIESCB6T1fQ6H8fcpXQDh94Rt13Gz662j5iXE0n8yDTy09YXjkR20vRFO0UjYFqj%2B4g7hxL5lg5f1fZ%2FjAchXiAhLGFA%2FLoQN8FmUgvudI3CGZJZWo56wIhMR4Iv8Tc4PvRpJn09ikOZlN0ejvPMOZ2Q%2Fi6rLB3csDk%2FBzl5Z7WGxpVZkuItx6xlWX9R6otjIMdijHz8mE5oACx0BFG9f%2BtnrCIzu2AleNAtDDQezIIOZS2mYqNOCyjQUjQNN3%2BvgZHXnO8aJk81bCEI2e8sGbDRTUhRbSBQG1Nvt%2Fo0rKs%2FCFtNqPzsuw2SiWYxn0S5WrecgEHbutB7fDavWEJmn5N6yQqcDUwnRi%2F3VTf2INN6xUFC7QOKlHz%2BoroOQrlYOceGegdQzKqxcBgywroMc3R2I3%2BZ%2FoKeAgjXBoDG02hiP7SC53fMwdT5qC7NRVc4GVe8Jf9wbKBcp5hMho6cCNgmrcS%2BkWMMCpyckGOqUBc69BfrGDMCD%2FwWmWJ87Sawgf2rNLYiNguUTeN1uzSgkPTOKdClcr3BfkHOQxZHcfmCLssSfvhARaT9ZQ9ajbhlXnDDEdIgJyx2d6l4DzuGnX146cgc0iFAfS3gLTKmWHwt7Z3atEXlmIr8OSPJtxlwhsyk6%2FJwqA525%2FIFbokCT6p3G0AkWFnj1al0tmjMEphrK8T03IgDVBsY8Jm8FqWjOAMKDh&X-Amz-Signature=bdfb00352e5aa8ddd8c118dc234157fec694ec250405636752e01e9707626812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDVP57R4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3EQ4YjrAB74ZlmXmzcaZ3UIW%2BTQX9ACRAIT%2FaRel%2FnAIgB%2B9Y%2FJHA91wepWBRoX%2BOMeu2fFRNdeQ0GY13I3Hqt3kq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBIQ7oUX1wdNpwcdAircA1C88N6OjJKbPl2r1rkffrzASodnMrZshDDnsY59GfDz8SqOqIfipXgdzyJBQ0uCQAbYofDaFAszfACMw5fg9A4uekTYUbPtd0HbRcj0IJLTjurzC1F4vpyExvkdE%2B8TUxZRVoG%2FO8w%2BzsNtafAZvnpBRiFW%2BB9e8p2L0CuJBV8kDX0ckAEY5QEc2iA3HLiykc2XzXBuyUda85VokINDa8wyYMkP7SY69i3c4G3zt2YKhsdF5mNY%2Bcn6%2BNVVdSr5Mkx6kNgva%2BNTTdXUnrpX4sQc33Ivf81ubTf44Ek872k%2BVhzXV5evieosO1VBOBYdezQ%2Fa8rEnt%2FdFy1GVkquVPpJWawgyzdLyRL1M5GQ6sW1%2BOF8Hr4fEuuPUagTcDuFROqzswMlj3RRwndd0DDwe%2Ficc6pHBCrYU%2BkEvxbRHLGmOyhigy%2FXL5Mio12n36%2BbcfMDdYE7EcehQGh%2BmtLTKDiaSMUXGLy%2Bz4nh7OEag0BN%2By6G88UxGysVSO3EaIBU5LYUCsCVZ43wyhViEhXZoDeA4NRQq7CuFWeN7MXb6Gkj2Z6YavQDTSeaxB%2FZSN1thmbwd0xGAa2i7Q9WkWk6UH5M5o5F3yCsjM%2BCxG3a5pkavCL%2FnktNrJ2eLCPkMLWuyckGOqUBVm2UiVCHuoNo%2Bgpemof1ADbv30lJWpAMBGHEIEgc9GS9ieOlrz5gvx1tn6gOduX7H5zx89YAbphNV4DOqAmLJFgWznG2bdZf%2FTVGP3lZrlEViEhGa2NP6bQF1W4amcoEAvokIZeZdlNOwoQ1qOQqhnbzF1B8D43n%2F6GMRnFi2MypcNgE47I6gZWK3uYJgr%2BQyJYWA7HufhnzsRytswndNuFLI2Y%2B&X-Amz-Signature=03433e1a2c05799f7b96176998d2930944b1dbd0750c4c1f3fb4d6d9fc68ab9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

