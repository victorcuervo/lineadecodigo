---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLNYK7PA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDjJtyzFu%2FylZQ9VI0lcnZZVp8mwvCKkZTpbGaVKUAPqAIgTKhUvaauyUSv179FAB8fJia4wHf1RjD2SJhjhTkMuh4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJLWCPpGR5H7SCm86yrcAxeu2B2Z56xS7ZbNExNChgsbha%2BKYclRPKxYDcacrPFVdI0wKECmgrkPDcAYWxnk7pOC9qPPc1P4B0WNAg5TsP1BzISgr05ZOvNP1gSAMCVyAXtXBRrGhNpxiY0XAD2L0I74QnoFYI2gaYhX2yWT%2BrzmO8Og1x3kThWaHPt%2B%2Fg4HnbNwjmzsqajcTJrusdUWdTVoDnxATgyYPXIK72Bfa3qvnRKLiisp7RzVQTkTpcozSWqPMnGErcaId4wU05vIfFzxLyONswmNv4fy5s2W%2BxqEuOLd2svQY0R6l6yzNKB11Ad9vP20yBaA43Zl44VjZU%2BZLGrTFUTQKNidVuH17Bf798EwbpgExu1MkP%2BUr2xrGjZnOwhHApsBxIeddNp97WRLF8052fJIaRrVf0erD1zCFkxTk8kjqQbft0xwmWQpluZmb2UomA4TxDzJGYxELaOfTssEkK0R3Dd%2FWbTN23Jp0X080wSaamBuDBBKHUCm8bQaoyPhGwbZRW%2FuPFF1GPzdUsqCNrJmfGHLbOpQUrcqDoHc%2B1KRoVIQM4Zoj93RQjz1bdxqiFMzUdTGrnuuNaq1wgU6E3saTL6SxdpuMUnhLjsblaJjHzvxS6kGh%2FqvlxpfwF%2FxcJmG8148MLirxckGOqUByDwy6Sb6qHDeVm2phQI%2F4t4Zk4yolRwHbMcXlHMEK4SSocpDAl5e0hSnijok7M2OH5PtDfitd7DWTSdTnA3sYudZ6kQA5LYo%2Ff9eN3XN1JitVhQviw1P2%2FxzRUWHCH5xxZOs95dBkoAV%2FH89oxpAZuW6nxxfRFlSC4ee2N%2BBY1TkMtSKQZyA46WZE6esZ7knzDozHCzVVSSzcONEUFqDz%2BHa0x%2FR&X-Amz-Signature=08d0ffd6e81302bb2f8326d5639ea2862bfa8741e8999b68c4c83786ef436b00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466644OFCBH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDZyAHZCp7AOa5426ZTaOVVk8sSUXWwyc9LPqi7dA%2B9hgIgHs3PwORkrMJMNcWrlBkZiN6KJ24S5dg6WzgeC0%2Bi61Yq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDBGoY%2BM6SCjX%2BY%2BdECrcA7JHocCPme0G6A8m9LbwJMlRvnUjgcHov5yhbpkobSsUjmh52ok1B%2BwD3VRKP%2FC3bLcpANtLUMZXBjx08hOAbDjxIxvoUSiQBX3OI4PyzuVQYyEVnrKoE7qMdhdgE1LTJin%2FqiFULdcX1F65sjqj28FwRTmcs1f4kQULxZay5BoqM3V155DFfuSUM3DoXzzC0ueF9ELnovTzp%2FbOhktUqynA0kQ85y2b8o3Fto4Rt0Z1FnIp1ylm5LKvTfAOtMJ9TgZrS%2B%2BIWp41HS7%2FB2%2FDlzZ5RrOtmAbUssDSSgpi0oRP2UlkyUBdWWgjta8IX5cwOgQ%2FUd7Yv0CbxTEBik3OMNTUon2XkHIpuVZd9HoxLNVq7iuMs5lEI9sMvjh3IXni4s6WFRGDq3HDKdDxpH4gNPgyLSKeE%2BY68lflnVahQwY%2BM22syTxrLysfI8fGGHCvMO6%2BzIijI3bDMb99eILyQOLmigtFJJRinQh%2FrZrjYpR%2B6IwTYRcwl%2Bp7gvdnz5GngUQWYXxopotXh28lgyYzv7evW%2BsRFeVwL1DD4CfgPrZFiRA%2FL1N8d%2Bz1UdRsi33Rnmd71laiYrekzutS752OqW7G3qmXqVfXnsVnPH2aPa%2BRFNI4kr0GlE%2BzroK%2FMIarxckGOqUBPQNraNkrnDQUgHYB5vDAAmINHdUSegku4XimSuievED6QwkVjHUDz25h9PrShNsPBUJqD1XiKqQkyr55Waz81cCAdYbjpvL%2Ftw8AEOYO7HEKxXrcU7%2Flou44Wih1b4NqtQ3oxQydFbdRYube97wnf1LStu6WFeaxABESkCP1Lsn63xBlYUl0UWRtCeOThzHy8dPVpKLsFnLolsj3m8F%2BxlHgJQJ2&X-Amz-Signature=20c25ed9f1e654c3e7af68966858a838bb27eb0eb60392e056daa8caaa001201&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

