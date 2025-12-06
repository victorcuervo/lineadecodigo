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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFTMR6N4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzRkKi5chdOi0pFtH1gFwhCU%2F5dShwPTwiqacsOb3HnAiBhsbkKmA%2B4XzON89b0pu35sFTfQbISufQoH%2Bu5pFhmjSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMaAGl7mvATImZfekLKtwDHAIixtMwWKs8UPetXeE4DNd7QeidEuI23gWcf2FDasCqfPkQxxWK%2FgXRhxMZAq%2F0fkr1KRYWHike5YFmBS3nRqiLvvGqMkf22BUYqjI6c0PO6Sn0G1cnOwvXVPPfus8ytZ9nHvH0YncGvgOMg5smqaVovcFTJ7CqKeuw3fn4pZvksr3nwrj1GHb7PEA%2FS%2FlCMIfa400w0VL4C0TZg1BxCMBMdPPGH7LfOfZW4p8ZIFpWmALDMaiPkFAmiPTLM3k5UH73Fa1vjm98eoVlSHmYDfUwOrX6gfSn7odu7%2BJ6XN70bhc5tHDZnhDBAmnqVwyUZsYx4QVFz5tSqivhHARE7WnUj5JKZ3li0eTm4UOMzwf4G6Crf262bT5gtIjRuhfLqC%2Fc2BCYAXVAFhZD%2BM3sBvQJhhuYWWANYbORrXxJEhOwsdT6KYoLFroAiodsD4%2B7P5WWy9aU%2FY%2B7itvBqaz6g%2Bj6pgKUiIvtwmt%2FWhO1iuvVhUT05cbnjeMYZZ8XwDSeXpajXc2zaVtngUAhoImNezl%2FhANB%2B4Q7FaS0uJkXYg4XHFn3IZYeOJ9Nu9GiWc8zKpU5VjfemK1X6Zr2SRVXDkMyqhwCbdspJpw91b1Q4Y%2Fd%2Btd3lEdybSBg%2Bdow%2FLzPyQY6pgFTehZZhkkF8i2NEV%2FIeF3DuNE28BxSWj4LwkwpSvrQzlnognqPf9YmJOoYP994U8uanJpAcHInyx1IYgeGCRp26OAxMOKabVp3Vue7d1lq2tTp4qtNT%2Bs7KXDTvjHKWQqZhb5qVnzgQQBMmxO%2BNbanbK%2B6f3W0B%2F%2BpHnfQEfFZWEphy00Oob8LH%2FfFKQHKBRu1ekKDFzPkCasaHvGysQo3Wewyw%2BU5&X-Amz-Signature=9999a72ecb67771140492b29242051de2b701ae240969110e2457ba4111c918a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YY2VV2K%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTc5BUHi1RyQUA4To8XpUKiO5oX6FPdZpeHKl8yqUmlQIhAOa9oAihZCmHvby7JcVfD29XA8HXl5MxoA7HqGN1S7ETKv8DCHEQABoMNjM3NDIzMTgzODA1IgwfsiI%2BB9B8qGjUiO0q3AOD0Uc8sYqj0SoNKlf9yZGIAL7GsSNz9ZrvOFlI49zqKWZpJwd9Hp4xr5e%2BQJY0U%2FtvE3mZT%2FW%2F9%2FoxcdO4KWuR3E8%2B3yB%2Fd6Qla%2FGGEFRhGCjv%2FSTKwtsPAhk8LHGReSrRPw3AclNZqXJp8Gsb60jXDkYkU7A4GQnftFW%2Fab4TfRWdiV%2FTJfbV4iJ2QTAgfHC8MnmyD6ff%2Ftk%2BXBIoyTlchFBV55tE9z5cDkZ56UX7etVuXvXnhb7Xba%2B%2Bbraao5GE8aFgpO3dCqewwLZTN1f0ZBMYoz%2BpN6QTEmPv2ohe%2BumsausLU1H08XLk7l8%2BY4F2fxYMYX12zzKCCaDkBVdxkK42xB9fiD%2FdYnlLmlW%2F3Dze4TDlr2GvTjlaKDEfO8hgmAFK5caTIMBi8tvSbM5RxUtF6Xgt%2B8UbwGh3usPOEcth680Ed1D37rWN%2Fz7xCkjQEYWOYAd%2BjUuQoOZnO8t7Jl1jSyvL5SPHFZXL%2FH7reuO%2Bi%2B%2BufNufjWSggem%2FTRPsRp3L9Lk%2FoTVfq9nKven6H%2BvnEC81xZZxT09csGxw1EG6sfxQyeg3naKPAqE6QCpZEzWkETBS8JJBYp95Cq7mMzGzdWKgiY5dr8zIHjdqZ2G2MMBwP0UjnpBw9DDlvM%2FJBjqkARQVNMLI5WXp3cATBe3A4h%2FRJ%2FS4gYcbX%2FO9%2BdHQk8HNU0odlZUxcFvyF0eXgW2saXCta64MZV%2B2Y5gBHef%2FTciMU9WYVck1E%2Bxyo1vccinTmjvkmzh5UTkEhb%2FjbIWW05l2n5yf0RHk16ZYfTmj1TMM13DaqP2%2Fo3ihV577SEO4nc9SNZgjU3ztnEJ2gIoi98ZBfxxG6EMCWiE%2Bp7VaHpoji3IY&X-Amz-Signature=2b61411448047d28bd13287522c44ccab81ad5454b7ecd1adf9b84aecf78585b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

