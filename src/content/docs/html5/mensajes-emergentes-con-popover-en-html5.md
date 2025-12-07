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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6ZP2JSP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T230621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMyH9%2BzpeLREuU0dIci6%2B3Vs1X6P8Q9gSF6d8Jd9ZPhAIhAJL83xxdMAUWq60arTlYzM%2FBxqBt2FVvcfR%2FXOlmPcYXKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzA70NcPJHT%2FiM4ZnYq3AOhjgdMfqTro%2F8onICDx9pPb%2FRQSYpfmGriPpNro0eUxitjFe2rCzy2wACZ2xDco0SIZ3eEIJW2qkuyvzyys%2Btzoka3d3v%2FQGZO9aJjPutpuFrFnTrGl9aeMo3JLD8HvVKR3r0v%2BG7l7LW4EKY%2F4vOMJuodvGDN5ZFVDVSpXCRT9ETE1swO42HPdFkwu2ioKmBEcDNB5M1Fq52Edyx48lIF5BeubOlCpYtT5q57AchUuct%2FBq%2BsM25bi1PZrC60oQkUAz%2FIVN27xBjeAFnrAkSNB8jDNF2snpUOXdkVL5tD8H30gfMg2quVvIeOEA4teuyMD1K4NY2Y6Hn4%2BXdIVKqYzs1j8RrVW%2BWpmprXRd42qPDlI0X5%2BO8rjdXZr3qQL76yuO3cWUbz8mUYppf2liA0zWuuGwSfV%2FIIvuskHWC%2Fkgn4cVj7zeM6xIFYv%2F53ecmd4aaLLaEN3o%2FnXEFJ6RGmDzztnfSUEV%2F3DZQ203Ztw78z%2FJoQkpuF%2BwIza30kUMpSx0YHblD%2FTtbCQ0POfr8WdjVwqM3WWoYV8ZYRS%2F9enaWXaJtuoUHUzu%2BWLra4d5UDHEDlkc4g%2BR5UT2retWGg5pp8WGnoXvIVWxhvu16RbimLGh6642lOVGtDKzCqhdjJBjqkAc1uW%2FjKhVUkLmwLL3Ty5KvjAnfITzNJ%2Fq1vrO1JU8iH6YSyFnqzIAPz6%2BwCQ%2B%2FaD4bY%2Fj%2F3mcfjIDs87ZW8SECiRUpn4Cp5tazN4X7LrTJxCKDKd%2FmdCE5p9IXdtS%2FpenPyzWDJ0Pq2oAOvFftsZ6Lf2XVS3yOQNEZ21FANdHCDfAHlLYKVD1zQd%2By%2F2l%2BeU5jENjUi3biIM9SPxhUnEOAxImpR&X-Amz-Signature=5ab73473a6896f51a182c1bebb88d15158447875a655f327b62eb0eeb10359ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2INWL5P%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T230620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7cKvFCv7Br9ntx2LBNNb7WnKVs9S0nZ1Eo2a%2F3XeNAwIhAMksGQJdDSDiU4PE0SO40HaVgZHN5JFCkfmdweCvsEz2KogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjavARncIvuJi5Uh0q3APJArFluCtmVrDajkwjVsfP%2FSaJ9iDsb7J052n24vUzdNyTw4%2FB8N9De8exyJdyR%2BkNTXXZPI3%2F2EBLR%2F1gHZB96hSxqBeDmmxq3MYrKAtPlreUJsKxuPr6TjSOUcZd%2FxnTbtHdjeNqQsUvUinsWdCterSRAlEDPmaL%2FoAaI7CsyrM%2FFiYiPrBRvjfNYohQclGbUmKuUAv6KRPXt1ajLgfx6CjFYhthGTZC%2FeXPGsxMZ7w0t%2BCT6y0GXeMHd%2FLW9ooRzhOwgrui0biT17qadZHQKf4bMud4BgC988jgID8%2BbrXh7JqRuJHD6pMFDvZunfGM%2Fnag0jqZATZswZNZuAdldLb9D0UMkjLA5Q1omPYRL9QPU%2Fdft2OyVEeBfFrE49lw%2BHa00GpxaKGzBU5ZXUQ51eYusOZYAbLdDtDYR3eIbNLtGvIc4QeChSBqZRO5UJ0V3crCuEpVNq%2FO7ZJfYRdDBd9%2Fn6UghWVCxt3upm6YWABwELD3JUg5o8zpfaIFLAmlKGuQYxAdr9z7Tex%2FHbDjpQSegguMrHFx1FxCQrGcWKOLojZ5IrIPX10c1L%2Ff%2F96zYUrNWm%2FWXPsP%2F8hU8%2FLzMTTv8FpxgKxvUsSr618d6dQpN0XGKIhh9%2Fa8PDCMhdjJBjqkARzRcVW5eNYkpxKQadrzaZx0YvUUcpNgdMxs6xXwuITCXdvD3KzxYahm7ezy1u0FgDPvRZI3lwSyDwSQUiFq7i%2FulSt7aVRfN1yt3yI30K3BKnvJ%2Fwwp151CDCTYr0B7rvRj3Y9VyAe%2FqBWIZinyY9rhHugBjBjSqtfptUL3gxDiiNb%2BkHaqTPY%2FSZm9pvARrq1Y639PZok4RZ2Z%2BoNrY2zQU8Cn&X-Amz-Signature=abb9d9f6ed696e5827869cd5deae2b7c1cdfb89e10997300209e7c79252315e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

