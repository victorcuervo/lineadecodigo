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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKPXBIB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T145331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7OTspPrCLtfhL0f6JITYTXkG%2BNDQ8w4GXU4F1ErNEXAiEAr0Exzzs%2Fq7L9%2FGQkrpj6CIdeZupk%2FPtam7HwfkGVy%2B0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOPlfDUiqqVmzIhcBircAy1uucR5lcdzD1Dn3v9ipHMsjMqNvOHZ%2BitIuATdW1yrirHtkFG93%2FvZAZ3yXIxAuvc5rLvPOcBe66FwE%2FBYBWKd1%2Bqs%2BUkdaS55tvFS%2B3px%2B2MI7NJM2pNRDDtASOibDlD54c8KOb1uVvfEkQGmQjtjov88yMK3sfeMavl6iXEry4SU315WYPUpM4%2Bc6wLR2DtQ1sqSkoeQSK7bXhNUDfGGq43eY7ym8Luxro%2FoB6uCcHgQuiSnboif%2BZYNJHL%2Fdb08KuFpgOjrln2huV4kmpPyxq9F7U9SVWYyMx7i%2BSvEQrVKgRKpTpg%2FVm8gfYnifiriGqTheSGK1Mkfp0gALT1PpzT0nBSzeB0AnGPILz0IYKyv6vAnHec14fO9jAKtwpFiwZsbB5lxrBBRvLHRO8%2BylYcbVclEwXtMHRh6N8Wo95RJG7OuKSolAMdgfGoLRCV2SANcjTK2V02ZPwyapoOHTwV0sgA%2Bsmh0OKyGxELJOUsj%2B8U4ih4sucMFxj2TdC0v9QJG1CjT8ZqtW5fia0IoRGQmIsOfiiQHB3W52mm8P3OhuFjGl4o%2BhLJnbTeGfqNooqzK8R8p9Jimu0QFiTHjv1v4phppBki4xuJJKNUeON4oha9ssY0okg93MJ%2FGyskGOqUBWw9dHLcmy%2BQ0PlX8U8Ab2vhcf9oeH9Ae5JU4rEybuksuxlaqPmtK%2B%2FtpadqJ6WVVsC69%2BVNZLH9xtqxiNEWHIiwjDQkz9%2F16T%2BjCBe9FI4Cd0UbJ3a4U6QkiO0n9inezQYWFfRZAnK6mKR7b2wS7%2F3Y5JxoZciDcSU1ui%2B%2Fx7jdp0O0OCDbcR%2BiHsZ%2F7saSzvHAo00VBIr%2BxhYrFHkrbsuyr2eza&X-Amz-Signature=04993a963034262f794991dde00d9f0b0df9a96277f589bc28fb181e0d975009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TYZPO22%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T145331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKducb6TXXtaGyNESxLZ59rGwDI%2B7hIJePeXGiVS9atgIhAN5aBwHdWD1KeSygt6VCp2dBR8GWLt2iP7F23ZqAzL67Kv8DCFsQABoMNjM3NDIzMTgzODA1Igxu%2BfEEMgv7nX3Ica4q3APpTLLaz3xncyDqxFp%2FycynKEGiJdDAtkXBwosc6WVSaJq4eWHO9GldVC7if4TbLp774IiC8LtGt4jw%2Bbbq9CTehdMC8s378rtIwQnsuMGJW2jhT5aTiEqIsENqcbmZcmW%2FDhhgJx%2BduhSIzTmJwxkZVsfWp2qxp%2Bb%2FmI%2Fw6VH56dHCjbwwz%2BlH9grAqhq2QhpN8fDG84NuygXgN8NXnEmFkNte%2BwFCaIl8%2B5QhKibUtosSqaGq2TAaXwXo3QinzdSRNoImFQ5LacJSlBiUuEBIT%2By1h6A0Ygu5GB8P7XRZnGVwjD91osbMcsPuMJRzt8BN4b6hroDSdxsYTmEGyruux7Yp4DaCe9%2F311AmUi%2Bq8QS24nGvkoUyIdUzU4jdP8%2Be0T8dzzMIWrTNv%2FCOh43TgMKR9XSp7209uExYJ0uDpJj1uzdCzktnM%2B6PRYpZTMG%2F94myZeq3%2Fchx83F5o53OE%2Fmrro4Dbk7XcHfKl%2BhtrFTwBdXXyfjdMNw1XJ%2FeXPHTrqXSjTvbRvR87jaA8G7DEEFI2u9cRSAmFlmSoFb6gGtPSeJ9ozTkZinrLhKqysFA0IQ%2F37kNFY08B96A4FusUOjlPfdk57ceS15sQ%2FUdQr4Tnf4ZR%2BKxLehX%2BDCJysrJBjqkARhkx1ECg%2BAzJ1YJO5Zg1TW5Poc5T8IM6Fk4FiN18v4VYhmfyqN9on7WdjX5utzQHEnqh2a3Wl%2F4DJSIzfMt51OTmxSstl0FsJbPS5E3zYl4cc1Tdwzym28AI49FdqexYzRmEE3%2FPlkhFDPRcShFw9fIEK8RjKGnFauWu52cNvaFfVJkDSyyR9Cuz80J7MhRynoUCvTyBWvUps1Ld%2BdrOs2E2c0r&X-Amz-Signature=7026b2b6ad08d12b6e7b960817607f0698ea638abf876b522b788b6bd5879ef3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

