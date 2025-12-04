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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XATHPAI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIHVXSZZ1cmUIygcI%2FSrEZ26IogIIyR0cYkmnBercsrhoAiEAvEIe%2BbEMkPe8Xphq%2FHPkxX827%2Byo5yVhQm4fkmu2hLwq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDE%2F%2B0tdqivljviSiOyrcA9n3xxsqAvozj0yba%2BBW41VzK3Bs04acAiBFDe9asQ%2FPojgB2Qd41hpZuMwH2jJI02YqqrZP5FH0WCbHRnx%2F8TYRf0n7UKEP6%2BOqaRAa91stwnG6X2IgupMdNwMDStrDdFl87Na8PMfDEI6SVNV%2FBTLx1XC3%2BLUwGfcjoLsVoTdivUgbDhOGcg7QqLOB%2BCV80vgdl1cegET%2FMD%2FNBiC3objI12QzVD6im%2Ftf%2FGsrEhlU%2BjZlzaBoh0EnJ15AxLYNGoK51NXqI1sfP%2FCcZ6YB4dNpk0EAnfWFPncpiE5MdzeX0dcwGVO%2BMftalAm1HyTNRomsp%2BkXifKkWzSF5I4XiWkStHI1kU7WAzq1X%2Fp8aBy8JUSUwcpoXSfrOUQaFeV3spHFBTyKb8FtGfpPu03m0Utl45ghqjehM%2BrBlaE7a7IOapX8Bdtf0zUwDw2svn5ov31%2FIDbochp56slnPvLreTkGwjUAgQGA%2Btr9IsJmtLqiBKron7%2BqjcGV5oSwy%2FhCL2J4GABnkzUn9vDwYzz5UiYe8lWuoBgI7pMKL1OoEcIaxK%2FxM77Z4dttsSAGerp%2F6bkRFzseFs4WLOQYzO%2FtmYqWiWSxF3%2F%2F9W%2Bsa%2Fy3sQtUweHl%2F3TZ3%2BrDovzhMPaDxskGOqUBlMyuVI0l%2F9ruZI7Cb0w0etpZR4BVUJ7LS0E4b3sssyXgxuwVE038F9F%2FE0OI9H3DnbRtBogaqnRTE7ZbWf9HI%2BBzDAKd9FgohenBh3FiJzYgBD40ldEZUv4YaJ4OKUFbEG7Bpx1KXXOip8RYKsOAp2yG1EKorrEV%2F4wo4Py8hWisWI8lVFZqyQAUPi92cRNeyHEBKrNahINrdjAgL%2F586mlXKq6M&X-Amz-Signature=8a1f8fdbbd25447178d66b57b1dc2ddc605c68aaf4324639329908971106e629&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC4BM3GH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIACzpodlWemLbosrJfBfD398h5kQLGASGz7I1dEaGV6SAiAQjUfb45krF8C2ka2v7vYPxYfYbp9lSo3zFGAl94M1CCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM1ckQIqjnxDGpNnueKtwDFj%2FKEmR0npqtBVP6%2Fq%2FVH%2FZLYdbzdXZJgdKmzuF%2FbYvE2FeyJJ72ntjbS8K3ktCUfSNU2tJutlCvovzftqwAdB9SjgKy7xJOLC2I0vRrQ7a49VI4Ntm7n13OuFseb3ldi5qZ9f2S8UjJmW8HKzEF3fYglqxxM92nVF8ZyJOFx30dS3dXYv5bUBmSzsErn7SuQgtMKHGypMRlN49k6rAIH1Tkwo7b94IkXMT%2F5TxyPrKkOPmYR5jU7e%2F5nOwOUQh9KP2ceZrEqnb3pQsd75PXca7MIK56MhVg6GFKxUPn3hRwC%2FVxBob%2B3Pt%2BwVZu8MFoed2vrwvGxXma01aBAipq43PqWQsRGLJDa3ynDZLPqntiYbCExEuNGpiLItKtKPG4wSGebublfgk1SuDAs2nPmRScOyZxyRkzmyClObvgv9lSB5hcXUrt249AOZ1WmZ5qmIo%2B83sQQo1OzW7lMCz0utdrCUp6oHgNs6i%2Bb0NjPGbDdvZp%2FbkqgU8%2B2UF0fogCLPVLKoTpaXa%2FKqX5Fk1zq5jlVWKPLOJkfRPn0yJZ0VP%2BS2PM%2BwiXBmjT34CPT0E3zijC4uNy8X%2Bsk33df35UNotw%2Fvw77hRz16bbtiICI96FohhlXbuWzRlfLfMw2oTGyQY6pgEZm5MgDJLufIdX1w%2BWXH0TNyEh76T02tkYIscNKS%2FaG%2BHbbzccZBDMKmttOs0b0X7g9RolXE%2BKnpevEtQQW3pfQkTQhgLIvxchm%2BITBA8AFtW7S2xc93IJLz60IK%2FgDaoGck%2FQ5UIuhgoq6G0g3Ld1a8EQCq75NPfWPZfTmW4X0hCx1wclF7OqFY4cU%2BnxCXXzGoLQEghBrYb0MsLGYL0ZXUMUcuzM&X-Amz-Signature=c763d4aeeed60a0c7bef80dc4214523a65198967523a0ca15b7d3ec1b0319389&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

