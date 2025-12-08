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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RX5CDID%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCudSMmgrAi%2Fp5sZAU3Dnf5QcQLu%2BFWIux7hbB1Gtd5EgIgK9vsbW2ELLk7sRrVduXT0iJnfIpk0vN%2FSOH7avfjO34qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHq%2B0WvKgABmVcN2dSrcAz9%2FAv4c7aQ3vvyV3cupsH6JtJkt4eSqO7fperC7Xy1ZNOokz2GQBiMtmYJi8dSOPZVMqvtv3mBV%2FB8BRcdNAjqTclX0QbgyjyWFIp9LY0Qj3QHBQNNAaPsoN5y0GeVF9aYx1yVqiAkRb8PwdjoOKtnn8XR4F0AzxhcIowaq6P0E3VuFqWZA3pIa5fXddrDaRL4gkNpaPzoKYHgQ9Yl%2FLv90PNpc7bHmzB2lr5uHqgHLI%2FBfQEKtW4O20o6DmjKST3AHOb4h4rsSi3wwQaUxAVcRsaZQCuPRce0UTkifT49T%2FinznaW8uaoslipY8p35Tk4%2BXWWUrJ1f4Sl38t9VYeAFkW3NnsnkXqY%2FLS2TPBUTvFovT%2FgfWz0%2B5q4y1MeWXqgtUaGFgsXkERI6n8Nd188X5xvDQrr6eSqSYFFVKu%2FUk7T%2BwDir8vDCsNJklGh9%2FLVscOPJB8btIW59%2FuqwnZQohpR2fRUfVW3WhDiODxVAbp5mTrEU7Zkujz2vpympqCk%2BW0YD95hiX%2FkOc5CfXpi%2FJeEshlXVwrwzKFUnhBOoER7i69MM40hU%2BHCpBDMjwP8L1wK3s1pFCTOg9nBd32zUH2UgCflSNDsZgRLoE5l3lGMgI7qhzSRpJlxxMJ6Q28kGOqUBgfINzgy%2BZOAYKrxcb%2BBIrj4cI3JhU1zo70G3srRaXPwzB5S7U1%2FCjg5xklegalNvhjeSNJG52Bhv4WhnSp21Ec2Wg80q2SUZhEvHh1uYxhcateBG%2BdZ%2BaFhaXiXwHHvjXDm3gMUuYyshWQOGLD%2F9RCsM8BGGQcO4BKx%2FarFRu6Tz3gJR3QNG5XWFYDVCIOlgRWwiQu8kgGtQf1p21no1TC3bVTUt&X-Amz-Signature=d79ed6e853f51de2146ad1214affd90aa378c79bc66982bdee42fc2b9cc24d6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M5RGEEV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQXS6XE7Fi30FKnYqZRiNFPAGvE6aPg5XlXZqC5WXwcAiEAwNPlkl0L%2BGSfYMzg%2F7MFqWujWxHX%2Fy8Xo0z7U%2FVs50YqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUeQX40pDKqD347jSrcA3wX9EemeD3DtnUMQhZh688mmgIQB1OBG6RYarVI3skdMUH%2Fg0oAWSwZD%2FcbovFQhVkKBDIzF9MAX6b8k2GthAmStn3NmKu8qQ4OXxXkVAJ%2FCSFP1ABggtZncVHF154QZgZeUFzUcxkhkDofm5LRK4uRPZOxbYl%2FEP%2FIJdXRU%2BmKQJiUoHnuuLDXEmJk1WgPe7FgRna4y8osvnNwbVpXQGww7JNhKjl6n995EJNjWnB1jHtfD6yz%2B3xkZQ9tDDM6Yy%2B7YDHicO5521W5lbpFjdfgswXITARVy74xM2CB%2FbpZ12eOziMmft7tWlaHCM4wOasZmbBfzrpx8CkUo853ynRzHKeI3jQF8F7CIgwBUz5nCuN8NLA0YzGKMrH6zivmRNhGuHclI%2FkVynzejktAvEwer%2BdUzGv9WgIlXLcBmMCfy7DrT8%2BVz0SfJWUgxYqRT80icVOB4TMouYfkFKwDh68OxFymCzZOftHW6Qzqqwd0jq%2FIB8pcYgfSQTXik7z5z2qHJVt04r9ebd35ngunbNdTK%2F%2FAgV%2BwnZKE%2FcIwarrYi%2FrVGVGbzFRSf8JhYHFzF%2F0RG2wuoEVAmku3mqwhN5tdxlx%2F0NPASut591r844j%2FH4uinP4tkMHC64ctMJ2Q28kGOqUBdg60%2F5a99xtfZg7Ur%2B5ZGrJ7T1CnNOF7KRdhuAFapvxVUnOgZMPQdZIVUSRbZWYViGQSiliqwufzWzcDpR8l%2FucdC1d9LE4JF4J9bnXi7mvpUHmUhF0ZcJTxRbzVhk9c%2BS7XtUzs47rCmUEIq4Mdm1F1wIV0nNRvwiv3uflUxiglANG5iOxvq4ixoZAh%2FqIs7QTQ0dRk4SdTIJMO7V3kM8WXjEvU&X-Amz-Signature=0bb319dfbe9ceefe9dcf538a59201c46518baf7e68d49491f2a0f51ff88ead8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

