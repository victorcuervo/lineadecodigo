---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KJZBA4J%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T062111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIDKwuVrDaZ5qYaZvfuA340mAS1y7Zcn3kPCTvI6pDPRgAiBIL12X7QwIkcLfPu2N4gWxD9tuuqX%2BPTJdW0qig%2FHqfCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM6sLoR6WRVewRJ%2BFFKtwDMD%2BCnIsYgW%2FLGsDl3Gl3GKpSnBQtkwzeHooWFjn3RrG%2FNilQJB59JR0SZGuFia4en6rYca2YFZp7MPRIi%2FIsMuJR8tmKsdmzYwLGNdXsK2TXH9X1dxpMOMWn%2BZAPgVKYa49Ljgi2l%2F5xPgOHcuzpwgkgEGwLhxlrgdwkU%2Fvy2FfgnzQDm58D1ceYySRwd93%2FY4u7dPdWFD58Ks7qTT6GMXFRcINdZuGcr8XUREq7u45EIqZTmLnUo%2F4YWNged1ZhbFeCYfLiI6%2BTAET94q20FIorEfj2AqWJ6vU%2FgBpmUDj537cnlNzzZdafC3qkScNdQSZptdyMLsI8Uzdl2MehLEXzZJvB4mAywKAz8V%2BA9c245j%2FmhhzKm8UwxfsDE%2BQU9RiIeU62vQ4TXV4WRxpfn32rhFzhVA8gb66JAXVMXV66dNGIyD%2F8S9EluHsy6EIpRb20BTGpjoQTg1o2mjV%2FXDttahJ%2B2dZ4JdZ5%2FNYQ17XXDuzpjCFCZEWogdBitjHBYYagxXAiU8XWgistyDFe593YwTqd6pi4mpqt7eIevyoFBr3xycP9Aw75Caug%2BKV9p9YiYKJ4svbYPaytXTZ3HYHnRK3LqQJiQnbLDeNmu6YYu43cLnae51QJFjkwx5q%2FyQY6pgF9mvNhcwnTD1QU%2FtXnOzKp%2BAq4yKVsHJfzrtjNTJsvfv2%2BQKkKj0%2F48XMVdPpDOvyYFNZxeRH5HHCKEP3P572BgiVzEpxPfTBoozd%2BvIERfvQUTB1I3X1xMtZnxMaANTri6g0C3cibiC39nqIrXibT2AUtcttUWu0F8r4UwRp%2FdQDsDZPWVbG1%2BnQqIu3KoR1UmdEID0WeoljDx5BSnR0qibEE9rCa&X-Amz-Signature=09339c3df24410f8cc78b7acf5cfd0e2736fc2e79a935d56397132afaa7bcb8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ6DCIRB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T062111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCjC8OrKrPeR8P8FrZLKFFTifhkzD9qLHdkNn4OMUS9RQIgVO3rlKH%2FPQkhSr1oUfFgDe8ViZnSCRQ501chsJH3WQwq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDKqdUH%2BO7Mibo4l4RCrcA%2BxGjkWGLVCLghyvkLR6qH9tQ3vx5f59g17yeLZ97YD30iQkILhUj4y6qnk9UEjr03pRQy5KTi064ZIPJtFnEJT6gxY%2FNO3JbgCUxBO4zgUd3diuFPDgA6qZhYsQwcNnXeHjxflAm74zyo5ZgSfiqvvFCoDSiXxz8edO%2FnaIF0GWG1lkAP0zA2bS6rfeYjDfCU5Zn3K4ZZS9nKBQz7cOb%2FOGPUTVG4NTD8Libn2k8iygLYrubAsjY8M2x1qyKsPP27n3jXtZJFKIUoGTLFjEbnUGPSW%2FnEzJG8OUbt0zK9P6Ka6qLEmlQgwzmzueXxcCSY3QSrvitUQ7SpCCYk8u1ZaV2pzDVzcWMXzifkZRMtXFJ0CYKL9vU9pVCbHP5RBwKGqCaFMsTThq%2BQ0PkcuQDWXC0oRPjqdrtGddetZq6lsWaUYgsoF6Swx%2B%2B0sncTMYwGIyYVtLCcHPw0xV4l3T4AdZ%2FYYo5ggR4XPUgmKcvB%2BAu4Q0stsCmzUn1wI6J4rz8GozVMi4CtvSqkQOwE2mQE%2FvC0OKyFhPDg2sDl2lJa%2BSFM1NZWgHyeKCmI7zwwgqlCizmL%2Fd0%2FNigTfypwlK5DxuMPNY66PKU8cTB2ilgiJP%2FW9yyqUOT8cHHuGoMI%2Bav8kGOqUB1D7py12ge72IojaboU7BZw5D3kshCwAXaZwhTphvq0NGXyoRNvqHzlZSRtX1QnF8uHHxr1qFrmfz%2FOJB2FWaGqCT1w91fGNpDXtzK1tleCAsPabemSYhYOts9bOs7DWlc0zBNaZ5sV9mfgsXnElPDvO0%2FRk7Ysxlm9KDoDVek9pYn9bY2FB963Hmc00EGd1JkxxCezpYTSnvU52s5v%2B8%2F%2Fya6VZZ&X-Amz-Signature=7fd9ce093362d7a5af22d1bff21988f7b4a5227b754603dc915d91be6e41ac3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

