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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7CVUMCM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIDVdV27qGCeOLbQppvOV4bCHvUfs4sQUkKCJi23927EKAiAamqXmGQVywaAq%2Fca%2Be%2FlU0R%2FJzXIu%2FGWeREFmoQzYSir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMxhSNtWgw2wGq04%2B5KtwDX7OaRdzvgPteirb%2FDvO3Hn9A%2BskexJvPeSeQATmbxTcuo0DNOXMxuoXEJjPFFtAECKwdFEkCtYiByfCsMJCF6KONDjpGRW4L%2BJNT8Y6D655JCwU1byBc8Ke9eSiOEJFZzvER0AN3mPR0OPyIFAXxuACWi2uC37QI69Czt6uxr6tRUwau%2BfStAtcJ4LwO8wsyTdb7HmRqjUI7gSL8BDwXeiIVYMdJa6IYtMkljAdb5kvqD9OpPf8KGNqnGb9f%2F709MFt1G104Ob6OQhmsMcE%2B43ysgUgD2h7N9fmDZ2gvBCN%2FKg8cV8Lxa3fGmoIYLnFGj9c2sNl6JXdE%2BzUfy0ZNEwmPmbZWIzfoe5EqVuxbwhYPfn7cO2cEbRZjBq6itmWjYvdwx9d1NSgB5Hm3nWKw16rxlsMdcobGx8%2FLxfslUPupX711RDrLbUd98h%2BIa8al%2FVyK1vsM%2FoUKpCkoz0MOeR%2BqM582viWPyVqQ%2B10%2B%2BH%2F%2Fsr0V3p3cjV3Qd%2B4kcES%2BdZ4XjhRpmKNgEyRh%2FIfJYH%2FXZJ2sMVHINDHxIIaTUbBwdYJyyzk4qdFN20eInf2%2FE1lMtES9wzCdAs%2FimKO2aIcuoHeqMc1eJWirDkrZSYoFoA%2BD9A925NjEjSkwkqLGyQY6pgHUsnWBHL%2B%2BsYEeKc5HPE%2BziEG4z%2B0qNIiakPUP2Akyxo8NYsboTGmvhK1PIqnuT4QbhJgQQu%2F20pmE47hwAcC%2Bkht%2B7VuedzwF7yiCnxCN9pk7bs9IS8q%2B3EB4hG%2Fgz2r%2BTqtvuM%2FxxgEN2bMjj4BRakJRVrssodw2N5csDG8twd4eNehULF8IQHuANvZJF5GCU6Rgz1Ei1LGwkdJrfvLoAzGbKJKc&X-Amz-Signature=ebda944c366a296d03b11d9220bdf867ec7d651a473b9a87868ddd4c4509b522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VC5DOUX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD90xVHVVoaa3VZUg1M8Dj04OyR%2B8OU7Hb6goIY9BgzYAIgYNOYZRLC%2FyI%2BjdUQl%2BO%2B02gyRbXCwLoTAfq6lpC27Kcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDBmlsRZwCjll4ovhaircA9ioB%2FpjgtcQoO6Ph5%2FxpRZSqyhIXSx9GThAiQ6npk1X724Oc2LrBwHf%2BBfh1zF7ovKlzXXjjG8Xp5z%2BBwDioCwaq4DWtAwyQ%2FGSIjtRV5wmvDnc%2BCE1Wpe5BzYI1qQbuOF0oieaamDJDYjf4eW1h8KC8boVOPtdsTLpbRWxUfg5A623VSZzP14fHRzBn62S0y3Bf3eNAGuWNZWuDYiqa4%2BvDJdeoWJJmiOUpELq8YUhNoN5StiFEQp7tH2VFhUd5cXoDQF1KpGtGRPG0BgacrgMZbwYLqtaBwXL9K546qmRy5Ouup7xImHhMeV%2BAL6yUErcAupnTQ1WYQLxzm%2F%2FBknqhEsIFFkeUfjf1NiCmkhse65w5GY9fcCeYUblDYmOnEoWsUmQPnBvRakcDq5UMB3LNX6JaVOSQt5K20fl1WQVAiSOEPIvjLCl8u4HZCFJvOwG2ymzWyKEPSHxfyCci03kh6qLj002lXIyCWTE%2BenSA5ypTTadWZjHiQheeutLCI8WARP9ZiZ%2Fpr9JXq1ueTTeXJQYYxw138dlG8KAPb6cn7HZc3aCEkxSUNv0IN1CbG%2B2ms%2Fa4q4NNTmOvm1clHst8Ho4zIHcL3vT5ymQCGdcZyCOP7dEtMmT%2Fd9%2BMNigxskGOqUB5PJAVf0JNkpnATYJAZj4SLaBV4%2BIHtkyZ4HyEj5jD8576yTMeECeDSYfF5ciFLityU%2Bi1z0%2BsByKTIupf70szb6inAjVR5aQut%2B7MaHsCGRW8hfBgvfU9AHh6h%2B6Artxgio%2BwYxx16WBJVKr3wO8T6BNGr%2BBH7BszP15LrRAwVUskl4PsGnSxveJLoV%2FG%2Fg3%2BFh84iUWd4iq%2FT6dEr2bHkqUMK%2B8&X-Amz-Signature=603a74218fa46ab908ecb1dab8fdb9551d8528803ca1a6b2ad6e28fc65c8a70a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

