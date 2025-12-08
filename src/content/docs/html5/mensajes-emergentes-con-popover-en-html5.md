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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ52ZWPY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T045757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmwMuY8zW1bisjLJB7baEvfDz3ZZAJdrhVvf%2FArEXE0gIgcYYVA8mZFkKLr8Qn1x%2BktNjppNER4TkKabpXBDocilYqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2F%2BPh64786kBnzyOyrcAy0wgsVL1IGFMIKqdTXWKqkQ%2Bh4IQ9jY9FhNDUExQ6UbnaT57hGfW4McjHxJYGQ8LqPEyq1Mg2xsEjO%2BZ9GdfDnWYsLC23BBjcdSkcUwYDukIyDwzSeQ9inUf2OHCZ%2BiGXPVJtR09Bfn9pcgEr754gsUewc2XkbWM%2FfS7QFU4S3%2BDeRj2NZzyyipsHQzQLFm6Cf6k%2F0PF1Bu2q4senb%2F0u02jlJ8ASbid339Xw3cFueVXWsQafm9d9hJRDOvzkfaGgTTVRpz1ejUGbCPjWZqH6AYfsQ%2BPDGp3gCFBFKrgCu28zOSvXTm7FgJze8GdT0Jo%2FvDhqSk%2BmC4Fvli6%2FiA91iAbUE0GkgNxXp7Ro4BVGOSMVm4SS1lIxuNeX6pGJvC3tblPy1nDBEkAm2GZikcn4eGjv44HOMmCRe%2ByPYt3C2CfJOQak%2FYZzcnuDey2IB8ZsoXZKhObKXkS7ryWEqev8sZ%2F6zMR1sd0KwntCTUj9b0V7TjwMCEPjdS%2BhoUznpIUgf2DAzQsTUPN9BF%2BCn2im3%2Fus81EITQQ41%2F2GrdFZRj%2FrG4GIdUfoXXL6pOyKXDGr%2FFrOEgt7cJ49SFcHc%2BZll9kfycnoRzmaS9azyWbSotu0qqsg3yoziDWqZOMLy02ckGOqUBwM7CCeYG4yGwOllAXd4EbsTQPifkZ1Lg4QMmYqncKC3qSsw7BgSIarQsN1cZlJXonCE%2FVY%2FAZxGNwyISdbL5MHsyZMbkxxDFLbqDliusAEIvSHwQNt8yrv7vtMTG3uj4rNw1s39n2SKQWI83ikbT%2FZab%2FvD9GAdp0lBln4dGjtZ2IkQne0mA%2B2aIkSJL9XcFCDoKYi98F56IArPGXTC0IsG3q4Lh&X-Amz-Signature=9d461624fed6791501f904dc5aade5136b7f361eb038c1b3edba25d595df8768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIWQXX7D%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T045757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaNKnBJs%2BMwwXVFrgfeTqBGaMLVVGfIFVyktFXy2U3eAiEAi0Eflc464fjcDmhiyeXgKDjWdFhM4k5w10wS%2BXa4UZwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOP3Fq2vi31OST6gpSrcA7ddGKpFpdISpn4VZZVPpkNO1Z7A22Faix3vDiyjWt%2B78tebr3S50lQus3DlDWVrMQYpxuakqkR2lpK7rizdyMmxtwawOPhy1hP24XB2oWmD9o%2BO%2BD3r98bA4nzvP25PWKIzz2UNsXM7bKxNwEdiKlM2Ke3EDl43Sg2Oq1dNr0sNFXpWioUWd2zR1CrzZp%2BoAczJpx9Wm%2FCS2w8XDw5bgs5zN08%2FMsJ9RRyUlUR6WyU0kSWKId6Dww9%2FDLFxOmy7TgB3b4XeQNJo%2BwGTl6Uoi6BkNJ3FTFub08F169b8%2BBwITlvF02F2UuvyunCy4tBV1l1imlK0xZvJNP3ttsMo%2BNAhQGR%2F0rbCOjlBXCMI0YMm%2BOii2mhyigrJ9TSSb89MFtNuXuTCVPz9hk%2Fzx2iEITtwDqgIiXruJKbh5ZZED5HBLwkyV3UFy9Iuo3mmCm3FIXXj%2Bpd5T3KSU2LOVlS3rHMl9zV1u6IRb8Bojnz8pmrnYQnpK9A5c74zM%2BzPoOtPIhUfJ1f8JOZwPirBz9QQiiC18cuNuurPJQww5bLzZUXHd0Bq5%2Brks7JtRbgLpD8X9XQ7d5bsyjMcjl%2FymhjjDzKp2GGxMcjObacCwWr0DfAC24eq2OP1QjiQbIzVMLy02ckGOqUBKwNaTuq%2B378BceW8GsdYYyPZuoPUYU2el%2BadIlWTwic6uX2CTzr0XBqqy0w6RwMwwZQ2lOA7Y32jzTJABCj%2B10HWr1B33dvBrV1qrgfoXbDq9NQtZPQSpgT%2FCP2H%2FM4hMT6Exsn8DPW6WvExgD4Lt4gC3PadIY67YCZfLn0UgetyJVWXUNd8sj3RaUUKZ7ILJbZRkit8POuVc53dalcOxkz2qyiV&X-Amz-Signature=8a0ab1a66e62d59c0f6705e287a285e86c63592717ac8ac1b342606a57a9f31a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

