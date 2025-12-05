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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OUC5SNO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID41RLcS3ytqEmpJ5C3u%2FaggUEYIN3HQEiSFJr%2Fr4uzFAiBiFHZQ%2Fpm2c7uDfcJaifQPBpKAhcF9VinNKu7qzWzpkSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMSiP8z0hqyMJ8EeIyKtwDxtDwHBj6nUpKl5Md3x0GAEGUJdedpRfZ5rK%2Fe2O6Bt5fxxp2h6NwxNB3bSOfK1tYBWD3TcxQ69PouLwt7%2FyvKJqDePB0PW23LmaRCySFC2YZKtQ1TeY%2Ffr7%2Bm1HS4fpgCF9T25pdqV9jQ002nZhVheyI3NqepKd7euensuGsCXntANO4CIpP3c0CUv03SA%2BW0JgcDW1DBCMFOzMnLexQibW%2BY5xp5PptAvatNaeODVZAIEwMFPwLNKckt25RqbueCMJBmlIAdNo7cyz91CL5V6o4SiRIKMeCoPIWwy6zwZeiOmPJgiDBqvF5%2BDFjAOLbAR0UrbJOevWJXmYnqlG%2FIPD11dkbEWKQXkg8QMnTWzpplrVYozav3D4FKNF%2FYs1oQQjoSDYRONM6o15Ya3zORakXzNXz%2F3opjIFfNjM7COREa4R2qzjHeQVlZLdSmNpsTxCl9AinBz%2F3ZwMQTgkQX6SPO3EzqDTEgPU%2FAJtSb3R1BjyzvkMcsklOsDW%2FMqKI9XUR0Rbx3s4LL6ogXRAYcfI3OTkyLVtpltZ%2Bd2UP4RcpYO5ihv0ZHjGWrQy4q9P%2BFhqe039Sq2830JSJHcsuUrMZMO1PDisYJtPSH7RTlIzCBg%2FRhWziy3XKQ4Ewz6vJyQY6pgEjsoornuzi9VAVoZahcl6dqROM8Arb8Yap%2BiXDsQI5TF7CcgewMSv5Q%2B0ngmr3YVS4z%2Be2n%2FQjfXPecYi3vm9mA8EmGfk3TDHH%2BlOutyU3LiXf%2BnIz%2FZQQNltr6SBiRLO1FT%2Bo4JxkjUlBkHgMk%2BcuT%2BLQDDQ0rE3OY%2BaUVX%2FqiySsFB%2BMg8GdMmXTY1RO%2Bkqc%2Fy28V%2BonRj6uJzlFnr%2FhfHwRPddl&X-Amz-Signature=46748ac944144bd28134f92f5bfcc9331a4a429aac1075753dc39412a1282ef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466656YKNW7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeuu5xO6h1oSU6DNQ0TfNFkl31yoEJ1xqk7PpX85aXfAIgAWTED5EdZdJVRxOZqzWELDMjnQikcBFL%2BsWO4%2FE3CBYq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMiETyl92EI%2FS4mi3ircA36rFExL2iBModfCAPUyeq6jB0%2BOhJc3qVJxX30pm1GzKEnDbvZhyH8o1pVwT%2BT9ct0kTUr7x%2B%2BPkEUIiniP%2BKGw3q%2F16HTeHntJ1EiQ2R3sw8wOn3tCfpj6NNW4EIzNBcU%2FOoliNglMaCt0sgKHfr8ANIYvD%2FXLcGsfVHtyiJKsbR6nKROilg5IPqT%2BSRwcwus4omDC5h24FeBYqDl6SUJQ%2Fre0Sgy2Inf4c52Ocj8DdHflMqVLNAhUoRtPG6k%2FIOWKKU95ST2OhsOyp8t8tcd4PPYPlCdBFzmH2AHq2tVB2EFWuJRXGh48J2wWa1Shk123CjUtFfkUyb5NbxosLj4130q5VSMU6MQAmuPFpDquEdxwpeuNS%2Bul3oxLbKIsWVpplrATrInOVVEvoAbVeG0li2YyHuU47%2FKcRyala39yfImsok9LDzTUByMX%2BgYpeZiEZdBmIFBe7IuZ1EQhFhxLplPuLxs0PW6LK8b%2Bq2ZIeraKcY1S87E9XGS331xNjuZN120E2ZBsuXjiEW2kAlf5YYgehpYDi6cJtUDxfjS%2FrEQ%2BcEfJuGWzj4aNGH98Y3OHRRYwidrJ6uCGg1xh431NJLEwNqaKqJZ63EEaJA0A9fJFm378qe32q110MNesyckGOqUB6ijOEy8qde47uukY0bmaT%2BPqwaJJ%2BqQ9P1xh4lL0Suvs04Y3WYnLk8SNYBwu87zwKEZKQkHpprd8gZb4L6EINQF1iZBBAXDObrEWD88fB6b1%2BGrZr6JDeQOqhrMdO9w%2Bd0fBSgewjva8UihYq30paOmph%2FNvJycc6f1cN7VpguMft6OBr6HNnrrgno2Dy9lVvKE5cnQSVMKJL2hlpOoA%2BZLzuUyr&X-Amz-Signature=a1aaaf00091bdcba610df85fc5fb98348c647dfe54f06e5de00f479114895b2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

