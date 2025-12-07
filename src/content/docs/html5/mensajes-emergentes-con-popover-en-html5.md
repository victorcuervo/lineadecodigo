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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HDUXGRR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T030655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjP0%2BE1UEb5Gr5WgwG%2BSLtX3gw6EoO4nkHFXxyqKwfOwIhAITq6pg8FNS7AmmifvpkeuOQlkOFMcNVY%2Byt1EoGGqULKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxe8OiuLO%2FRM3MMxNkq3ANREArNrI7Qd55n4SZlxkwpn87rNrdBAUKmzR7xh2jiqv5TjdSJAXSEEavpHUk3gwriVfXFpqVxmp9Qv2B4ItGR2Ohksf%2B6ie6NFHElvFVK9e6Y87o70U7stbAhU01TN5egZlkw567lgSEWraihuKR%2FITPzQEvn90ItI5ZT%2FKWIC3512lAWheilk%2FJ4cJ%2BI339iPq6Bigs7dozFPvWCfvgBopvIVoZRr32J2Xu%2FqVa42C0%2FeAmCtQvMkfEL3E5Rda2E%2FbGwUtP1mofznw7plp%2FIOLwX6uV3q1ZLxNYcQbgQSh6S%2FXgPMdGHgplVCyo2iu765LHhj0nl9OPCkDBUgr%2FOOJTIspSvBTFL6jARea%2BcqkQxzbOU%2FhbWdjI87%2FRivBekG4%2Fo%2FUyVmCtF6CyuIZODl3uX2XrObTEfySIq2GX8Z8AMSVEKcKg5T3hQWz3LHAg9Gxrce7i9f4NDRSTGF58SjJHkzMb1axZi6AODNLzm6ZAWwWtmrbZrETEnh%2FucC%2FNN0dTUr7jQN3stuIiRT4T0rCoi7OhYAm6aFSL8aSW6Dxsfh8tLC8yANBbHLPHpN06%2FTvfWa07lxCmPaQd7NrHVgjmSrpFZy5POVENq05EVaNJqfQFJmDtg3TYEZTDS%2FdLJBjqkAeuk4uwz%2FtbZSVaM8N8eT4kxW3KPnh3gmeR9eB9wnx3iC6qWusaRwH790FlAf8UvSweiw80IuEmE4%2F14mLjEnOESYH%2FXiWQ689IJDNxP%2F%2B27y00rbekHLe3GXXox8yZFxN1jg%2BP%2BpbRoSZOXkvJt6U8h%2F8qjJnu0djFbEofd4Nm8oTLx2bY72gMeSP%2FHgjPnpzQ76tVtu%2Bu8Pt4662AExmhHvirg&X-Amz-Signature=a57f27d74a790217ee80bdfd3dc7404ceb3b0d7ca85d9e3963a0f8fd14b610d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS27QX65%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T030655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkEfP7XoGfGs4IqW0EesSN%2F9lSGgYHep%2FHF2rMzytrnAiEApNmma6K16doXs61KSBW%2FWIpPgjiLIRqdByrI4TFqknsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAlx19ocaCQsU9rLircA4QquZ%2F88autG%2BkGd8rx0qZjNBPoWTkJrHIneWwsfikwZqz7vVMFB3qybavJh6wM7uhLVa3hf3SuKq%2Fow7TEyE3AFE9Jf81IgZrUsVuDJhLllDUSG1%2FSVoQ1dJZp2%2Fbi5JulRjpRo3w8pKMF1udfW08RDsi4SaUMXauT9NQnqzxoeVj38OaH3rLctm44Qp%2Ff5BI8l3%2Beer0iig%2BgE9zONDeQ7zoZ43MgJZxTsJBeHmhR832LChRZZFxHZ3UrWZwjQaS1G0%2Fv%2FEhMkZOwltXAJw5277HtQfV8HFbU9CkoqyWkoGlDXgJtnVCEtANNYnk6KJVm9v8qRXDNnrt8zfxPeH4oJbWlc22%2FnnwGuXzIoWLBegzzMohkZHLrr0ly2%2BuwjUecGO%2BTp5ka37lUvJ83CkijdQliT%2FAf3HoAyx09AydOP3zTZaGfWUshhMvi5LlOKWNDV2ubLBj6SDDCS6XFhl3U0ZzqHsjUmyFL0gUO6CyR8HZJeX%2F623lQzknldcQL2%2FuKDFx8ZOhpgZcPSTyq%2BvmbsfCWo0hDTwH2NHCbvQpx0IL0pp8Tr7p6rxMK944G7zUG6caFIZsxA7OKks34cbRKaEvPaezpP82k%2FtsZUSUlGhMxduTVr0igfzaSMJ%2F%2B0skGOqUBawRDHDzrelbA6tltDBOcTS5lmkhRJiMPAgsX4XuRZM5yx%2Byo6Ke%2FBzW6ar6%2B%2BjalwoVJV2oxCTm%2FN3AAghdfw1s1IXUhDfN9GVCSRr%2FvBPvoDG%2BkPtjoXsjZ2W9SMaY3ysBAI6L5XmXKDi1LBlRo9aEuygGyo2mfCvnha6Lzhafuzp3HGbCqo9wXhrDYEmcC%2FEZvwauZQfUE0hcy0rHHmE3vCsof&X-Amz-Signature=e0cdea5381e15bfb3bca13ccb2e9f5a479d369962510f6aa31b560f888378e11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

