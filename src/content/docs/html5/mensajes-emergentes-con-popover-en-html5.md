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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZY2KBID%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T233616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM%2BM%2FXf45tHcpljElmczpyjYL8AZ%2FJyC4nrJFLCjsC5gIhAMLFMAy78bjNHVq8N%2BVCsyv9Lyw3FrnF5x%2F92l9S%2FXw5KogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzcf6CN0nx8AzuyNJUq3ANAlVXXk2pEZvTiH8Bvi0q%2FDKVJijEHyHy994JZ%2FtxSsoYS4qzJMYEdsYBNcl8FcHu2JtTu4xsJ2T9NwYMdxtOC%2B1uH9sO1X1WsfXqMrbzhmDWNqxAtVz8SxrNhfPuMMaUPglMnd1GzVnNjVKcEIyfqY1FtfAHvEwl4cbY5SILIy%2FGlQy48VTu4iNETh4TBcdPn4aRql4N6zKD0Ha8914dPeIjkvkgz4DUAieS9sViEemo%2F%2FYqGXHsoJrLYFj0%2BBrjF%2F2kabLkGBAzUuJQD%2FmxmAnmFE8CVstoLIdWcRRI%2Fe4eO8yln3TY%2FudiXoFJ8qhQRu2CzHwqwITTlkDeld7jCFlpFiJ1wZuJ7YXjrEN5JxIAWBrzwLofq7gJZyevCD5KvpSqrQjOIdw5vGwyaBXhFUJRFSAY0mBjmfkLX%2FjqcR21Qm6n5X2bdXNsCGWl1tXVxK84M435NjmtYchWlAhb4TRLNRVX3VPwpqUIXLHu5T74Y7vpurYOZdtUVR7WIhjZElv0xQnNegrWHcbH5XQCazwcCi80q2ap73LXJlt3%2FKrff6aIoMLV46m8Kc%2Fcztlh3d1jgU7Zb9wGqMixoHE54sHmbmx%2FjAxetab5xbZi8Een75EDPZIV6%2FLRvCTCCot3JBjqkAerC2%2FuV854WJZ5Jp25HJRfQJXZCFwwgSX%2BAJTE%2FN8Xqy%2BIdpI0t9zos9EkXJpWkMamb53WH2QlpjbEk7IRRRm6EySNLR2wFkBYj97RY4XOSasTPhaC4hXze5NJql91UUJopkaJgdm8%2BF1KpG8NBSWU%2F7pepHWU2Bnk2HBXBy6kTMSmpo4laBoy6gR4qF%2B71zrUnGWvb1Bb8ArBrRYymN1z16Cgl&X-Amz-Signature=753fc53dd4845d8fa5f30ae864de608092298044460472a83a2f05a43a52e575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUPBJFN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T233616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOT%2BTepMPi0q9z%2Fy1Cuwnt56Q6AjLDVtJN%2BH7i3jSshwIhALjqBzjIwZlnvTbn%2BibJigdStNJI7f2i23HQKcRyhLbuKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy07iMRfuerWFw8aRwq3APDqLpPeK5ap2asN7%2FP2J7EC9BKbltU%2FXjH29dEjphomwAoNa%2FsVr12iSnootI2%2BOaJXRc5j4SosEYEI6a17HcpBrvZB6M83s9aSTAo%2FlxhMjkp2Zi8da%2FUoLfiEt6bWVAtnonl%2BaCGztviQGUhjyRFabupruuitOMVW4szEQ27FBb4j%2FodDnAEjhNxRmdY5a1H%2FpNHJyGz8B%2FXp3dOFVSCd32R8awEPQBlIPNnNBRfMa8vyIdVqourwB02EUZ8WtI1ggxCmQWmzyVH4jZ4EuZltXXSVoh3Lv3JbVd9jODQxkHH3fA1Y64tvXoVK5uKNWur8Ue%2FL3DSbgoEqupiqR331h9SPhgmi3ftje0h9iRuOxlaRtbhTWQRlPHb65Q%2F%2FaeOjInjIYRGntF8%2FS9NAttHeNGBPddLxlX3p0ZpCF47mN1JhMbM06xN7l2TXLhXqZMhzg4VVcrQZcW8FIAIGv2VR9%2Bnb%2Byk2YYuYg1Bw9Xra2Hq29JVi8NIfWHGss4PPwEaZHhST9fFH5r8R8q6ennZMLgHI9jk5zW8Ru4CygCfZNlfiukdh8t5Q%2F39WGfTv3TQpOG%2BN9oSe6tPyVnRl16freF4vgiVD7hpzE7w44FZEnocu9k0Sry%2BqUG1oDDXod3JBjqkAdJMYIpWNbPpOQYScFgf3XNp7X2agR8pOavIgd2XoYLLTwgQ3Yh%2B1UJxmsoiumQ7bzsycDhD1mJELIozD%2BmIU8nt8hc4XEzgeU2zifEiWLJkosm2jOwqr8ghg2bZks5TLZbarfxsegqArDEi%2Fkp3LJo%2BkwiwjmPvxbB0vxoDtp0Wg56t7iOTMB3W8JfqwEGDPIR4IB%2B70dn0gqtANzmXUVuXAjtD&X-Amz-Signature=ca9fad471a4624b2ed7f8aa3f036e8b375ee6f5781b5eb6e5e9b322a868d172c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

