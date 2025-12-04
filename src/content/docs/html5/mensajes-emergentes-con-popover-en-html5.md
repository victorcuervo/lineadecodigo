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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCEFR3BZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIBOCXPQcV25PkKRaYiHqFKD3rXIGDT8ogfIP5LRyZzJJAiEApVuq%2FWdqigLpgC6waNVolafJ3%2FRbxDl42bMi%2FEV90WUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDB03zNNPxtLcjIEs%2FSrcA%2FZrLUuuF1Q3mRr171sS4tRaFp9RWCYmbNu5CdTJ6gl77Tdq4YcBr6yskjVRbd%2FJ1ncth1YeYg5Jgob%2FuMCasLxt0sl%2BkfJzNc97C24Kf5OneFdF17pVvIU51rS7R2ulIKf2x3hTnq8Zodckc2S3%2FkK%2B2iNLb%2Fy7Y4bO9VpK6h9fOiVVTrBJImG%2BxVwieAU0Xu55yD7P%2FvAnFa5HBAe2lBq4l99ixJJhglj3lWWGmxq%2ByScB8iPCvGUhIAYFQnIsSQd%2FrqcfZ6erXIHOQ2yOYg%2Beo90PKOxjtcm4mlZPKz3vNr3ByLz%2Fl%2BP0Fa2XoBpfqme9ekmge3Yx12uaEAxxBzmXCblKkNpbbibYb%2BTTJrVDo35EpZpE2I83RHZDqZ%2F8wAK%2BHCEV2NcO%2BoTF2YBtHcCmHf3oCGcZsxy4mlJp%2FSWLJGXjL7guJ6tvJRyLZhWnFe3p%2BNRlUGMKK5Jwwag1Mf4nM3%2FIyvM6CvBWwxxRLf0mDujLyJ5v%2BYoimutfy%2BUHwM1QTphuqDe4xp38VYCa54G2vsOGHPvJXgfFfJu6%2B1PDBpRhg%2B1B3OICM48VF0NU5UnzWQKUGKMP9QZTfAY%2F6J2POufY889C%2Bq6365q%2B2yZlJP9OiGr0Vk7EbPmRMOfoxMkGOqUB8WI4yuRpVaBzwPU99ZVoz4MMW3locNICW28HWgPuRmpF8NZkh7KY9xRUc2urHCTV0qqVDHnxxXtY5p3gGS%2FckVzl5uhwQ6%2FhHJhf8zOUF5doKbDS4Z3VH2SjrT1qsMdX4%2F1wUUK9%2F2UYahLLVC0NNrS2EMp4cB3I9qnMLyJ9jD%2F0lvEVsp7qdSbUGynMLjBU4hqnp6CAEd%2B8a2BuBXnygc1e4%2FCk&X-Amz-Signature=3f601c54d928ac3f5948a4f20bd3aafe31cdb1d2a195d3c9d6a949cb5c53a7e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2WYEDZ7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCOU6nGTj%2BAlfy6JCnb7EtMlizsjMr8uF8tpS%2FkYXrnqgIhANqgODvZ6yu6A77egDUGI%2FBwIriqUYSk6Lrvkwu2GazcKv8DCEAQABoMNjM3NDIzMTgzODA1IgzWFXm%2BbsqX25wfC%2FMq3APMhi3Rf3hkBlQMGsTWR%2BH6jhyt6UIJnyebGeo9MhfQHy%2BypgsjFBTeEKlJTyHI3lQhPH8WZ3ewEmd5RitwrQzvONul30q7gRbcmoF37MTKhIOFOW33xL8YMPtKTgKZ%2FLZxvLgZNYwcNL6PNujgZUJ6z6GeUQCvFFgYEygK0elo826hTueEJ7LOJnUSuKAUbRvg91T%2Ff77neL2i4srIjNzEjlGNtd40Z5WlnK9EZQt4ansCYPYLv90IbmZyPdFTm4Xiy1O2f%2FMFRE2tuxI39%2F2bcWRhznQRvlk80AX%2BMY%2BvU0%2FsAMCMSpby%2F2J%2FPoPqBQX%2BF6cGqcN5vmB%2BAxMhkk8bJUbV8wlHITVV%2FQs0me0cBZuc30swNUJPRA03f7LfbBHFQ6epjlWUnVJLvsDd4qnMDTjnrJTdxwTfQbFUrvXTkbxVXKDAnkM%2FHX40sKat6EuV7rQYLUU8Yyz626qt%2FuQ8hWKrHBpkA06snb46v159dSpPxwEAjJdl%2FfkgVWgBGxzHwgNVz5H8cAOQdUhmIt2A4k0q9pUtrXuGCn2XYz%2F0W45faDce91m308A5iSJQMPvwAL%2FaGLsbouHcGsqFVawSct3CLYz0tnBexd2DSGSqzLl418SRg%2Bk4PrxnlDDA6MTJBjqkAaLcHEDv9LwP8J5wVA94FMmS5%2B5h4ORsG65KLcrtUF7cXZqnL03ui%2Bc7TRdba3ml1V6icCQ5YTJRhKxvACYFwdx%2F8hj3o%2F2HxwXYPjqcwre6RStVYJbYyqPzhwgGRlCYh1jv8UUneIsXPr9HXH%2Fx8TURAdfkcSR%2Fs19r06Exi1aFWNCGocYjQhLj3U4Fi3GCtzcAhfmYoVHwa3tZR%2FL46sRZRY1e&X-Amz-Signature=8a9fd1200ef653a3f4337a2759904fe69ebe48778e79e51c041d48a8e70e55b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

