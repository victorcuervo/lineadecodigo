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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655DXCDN6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T201922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzFJvUqb8t845%2BMC6qx2xIj42qknzPNZ%2FYeG6zRPMc3AiEAuA3H8GGrGBg1RHh31MhEi8Q%2FSgPylZKNY8UcxDXBJFwq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDNZbu2NBBs%2FyMJxyQCrcA9LJCiDVw17HleT30Ym11rLYo8iWQuieG1uuL3cieYQVJzW6w%2FYNP9YA8UEtYXNLiONclczQg5ye0ZVxX1uyF65%2FUYPZukqr5bvl0xDnaY2EA2ZeLPghKe99Dewpr5HKhgp6U6J%2Bz%2FB11bhgTAeD7l4Ds7SlkPVsisRILMKhbktXhGET7glcnd715uKy%2Bo0qmtP7CIRe2u8gPc9cQHl79pIBOPd%2BO6KiCqyyJ8wfprcYOObcye2IGYQ%2Fl6xi%2FOhEiCUzUFqUUUmw0oCIt72fnMhoGmKfZnuQm6hmEhi5xlEMcx4HKfhgZtMNTRAzYSHo7Az1kEMfq0k089QvhpgS7K%2BBWiZPQFCkoPxkx2kFqxx4iqy3BE7yC%2BGJk4k7P0HWtPQqqtIGXuIbvO%2Bj69S6aqyagKsWTZjcm3AfqwHwKZDVm69tVkqFu1%2Fc7NL3uapjkuSxLCahjOQFXXhCcEqYNroPb1VoMGtwOcrLz6UWa5rhcveKhwq5pnrrdLVgH%2FFIw1KjYfum2qxs2doS9FdEL%2Fbw6UrdrYq8Vu4ezTyCYwkT2b2u5aFWcMHrujc6e4AVGFdkPpFhCnYllGxo3mUbFFle1aAMS%2BbAYyJH855RLVnBo3MR7sNjwZv5XKVwMNbhy8kGOqUBh%2FJbtiNncv0ku9lNk3KmFXlKyk1fqXUD%2B%2BJGataJwrqXzUbkdLiPvKRaLW0sYcw%2FStPGWoi813P0CcGv%2F8thd4yyC2XyWXHkGavhDsPzXXBa%2BV123RtPBaZVBK5FRdTQoT74J5jqDaQwIZr2mHPo7d613rOrqT%2BoRragsBzRqCOEJcuBNB5rVbJB8B4LBPOJE5Dm2cgn33RN6iTJwYq%2FBUzaPjVE&X-Amz-Signature=408e59106b6683b989f6ffba3feda274f862a76d2b177c12666c935ec6e59496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ES66AJ5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T201921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8l3vZr4m7mEbafYGDV78u58fGKrmafDP3SBGDfHue3AIhANYWmmT%2BHxCvB%2BOhCudYqXUrdIiHw5q434UY6ZcWEl%2BwKv8DCGUQABoMNjM3NDIzMTgzODA1IgxYhYxULSKPAq8jaf4q3AOmvoKYbQkHG51odiNc2AV4vu3iUO3DVERaIs6qSoOwRoCR3TAA7tehusYwraejRrTWX1DX6AxI8M8lic7nLpd7yEbcv2uKGfV25S4FWUUFlaFWfd%2Fldj4c31Kyf1%2BXUkEQgnX80ZSy1%2Bde24XDLaG5I7VR%2BF5EHTrHZPBkCuFvwmipTSBTmB6RJtnRBKt%2Bz7vs%2BQljnK0Xh8z5xD2Pzwoe07TOZUFqFqD%2FWMhPF1oWoF%2BD7PrGCAK%2BW%2BfHwMM75FVwzj%2FQh7JmmOZYklsGiiSTB9C9oI4dEDXx7mUEthCh4ECATUxIyLlDK1TIQw5gxvdWxLN5274XTn6Yx3VcofSzT%2FAAkSNZ50xCVKg0fKrRlqSW%2BIxnW4QmW74SpTc5SwXb3E4jh0%2Bfw4nyrCSvOq%2B55PXWZp4MhXzLwXhNX6o9LIukcjep5lYDCGexWNxyWHMmuh8zpl5cyJVugWKqymOJLeuFxrfWHqFvuchXYymQmJ%2FND1jNcS5OHBpggxTMRXsqPa0rz1SfS5q%2FS%2BgPhQ%2B%2F%2Fm%2FDLC1Dj4ykyRBLo4oL%2FnO5%2BzL020GbeK6My79llSKciUfDiKZSJ5Sy7htwbdUT1Kc84TEXWkzStDmq9ImBOfmR4YffIteRkPN9BjC07czJBjqkAXkH%2FLGjdprnezksFcbwnPJa29JX9ILD0Fk6LT5RV7otCWELA9Q9AmtFEMhXGmtJR51s21J3RW9Y2px64BVRT5CvTr3jrMYulhjNFqC4XrksqgnfhbESoJPG5Ams0GiNWbyAOFLaQjf00tYGgESa70RiYfpObL9tvITMS%2F0Ne0wE7wmrm6LIKbVowvrIlhbjx6AKjt%2Bo1E5uLzfdaQBwcF53wPTG&X-Amz-Signature=5fe4f5ac8d8019feaa65143b2b06475e23354bc3b68ae023db429520db635919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

