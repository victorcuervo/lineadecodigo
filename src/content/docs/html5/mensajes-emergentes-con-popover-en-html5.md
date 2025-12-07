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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HCWPLI3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTHNCWKV%2FmW8QXHp%2FS9lGj5ioBaxQYtbFZSqNkPOUvxQIhANsDuoht%2BvtiVPeU96oBVwL9YK%2B7TXwTGKwgLZ7uD7eOKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo9weuXftLfjw2hcsq3AO9LUsOOFA4kNRc9CUK68FoYTsVBoVUYnQ94Eorat0imC2lnpXJJCB2D%2Fc1QusXMoliDZ%2BXOQGO8zaQXM7sgIH0ZrgWYcg%2Fl%2BCQD4%2FUcXKzfL7fv0keibxAfHQ2uNWB5UMfP5aWRrQZdmArlDGz6blEh99tshaP4BR5eGcviVdeDeW70wfHwN6jaE%2FWNkChyj7bBWb%2Fex%2BPaa4gIUrA5IG8mijKfmukMmDgJ8zZGgdilDsxDq%2BvNKyTnwZ9MDxUv1cZs4CaZdkFJ3UQqOEtQIs%2FcYUFMZEJvJVJeCBMldBqemSF1bP%2BLes%2BTklGkQyEc28bfOte4Bltn%2BPHuHJsw2tY3to9HlrQLoMyn888t8GyGcCGRy%2B%2F3%2FvEkUfhDqdHF37qeKu3vrRCEZqVgYhCEovWqJmRtbd%2BZwk3rJuWRZpVxPXQvFVbIatg%2BSd%2Bv%2BnUjH0c7ggrOt%2FFUXIjFDqtyl2ni%2FGWTyPO6ImYxQTXuM3LKiEt%2BGwKAxk7hWlrFBs%2FXsV%2B8d42YvxFtDqjieu4HlSGCyn3XJjbo5MgQ4z7%2B%2FZKPVPUfpcN0h%2BcKo0guFY5CZ3rJM3VgIuDV%2F070oN%2F0kGhJIO85OtzqsY9%2FiVVWjEYIX8VCQm6byXsFQgSwzCuodjJBjqkAYxY%2BP%2FjA%2BWYgKPDn2yu1gzVs%2FlJNmU1IEi7pwFvOVjCrMuOMYoM8CkKrKfQpdQjkRFmuXZfT8sy7yQqWUao60J%2FbrSfMPOJWJbrFsc4wuFHrCVXB7suVCHdrPSwIlQutR9RlmiUfUldNucVK2xd6rdpZK8jvCHjx9vADRAm%2BkDayXel%2FctdXmZQhMK1tj6j%2F51%2BB3gENHDiquxICJVFrFvbRUX4&X-Amz-Signature=0fcae72eca602bc904e0f0706ac0e780e538f7d8d8df44e7ce624bbf2137fc21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZNRXMDH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnFaZEGDAmNAnuvtIww24UO57HQqigfYPkE2%2FvX9bokAIgGqDp4eWqAN%2B6l7tgA1%2F0RQzkjjwJHzxAkcVGEJf8g2gqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHrms%2FxgO25htNzOyrcAy3RGLlKRP%2FOHMDLilr%2B6IYyV1vjo7gjazF1tP4Ju6%2FkNy7tzchBLAPOUAc2DBJC87d783byEQ0xB%2B%2FZvZbxLk5%2FdnpHNEsbGHYVOFLCCOwmURKS69hcwgX57S5LOnRRUbtbXOs4EMM9eCA%2BrFgoskfGICRxr74e%2Ftt2sYwrZ5pHeiTwgGT0AFTk2svfvlhncuC%2FyVnuKCQSnVZ9R9L7rEyS%2FujZWPU3VXS%2BrxAdfhDJQ1Uovb1cFk53o7whpZzTAAA35e8qbsgTok01ACadlfMyKwPbpZqMHLalVs8CNR2lzbiXMtzUrFTkxtqgZdySF%2FOaYPVwB0GEHG9oZHrGY58VAeoi4vmMKA4USZBXwEgS6r%2FM5znz5tHEx%2FZhX3rO9S%2Fq7eIEtyhED3GjR3pl%2FMNyg2Tk0GWrk6fszGsEDO43%2FWwoWymr37OOXgN%2B1tXD58XO27ZytBqAIG%2FONHW0vUYNiHG3%2B1xKXWTSIbCyv%2FrVSuyaNk7FUxy6AKM0jAPQT%2FE0ymI2Hvb77z5F3HrsjOlY9nRVU9hvp7vUXVRWamBKRtHn6Ch1bU%2FQaUN7QeZsZdf8%2BhUAMdyybrFCgK9pPX8WE1WtxvHdkOXvatLLIKEmk2kdTuHiik%2BB5GKJMKSh2MkGOqUBPSTwURxH512RhwxlB%2B2q84ez%2F7Edh%2FIh7AjtAosrNcC93RLGJ7FhLij9JHSt7Kb%2BsdbKqgyhcn86a%2BgVtRCp70rrRrOC3JuOkZnH4x1ScIfjZKpEA14ao8jc7NjiRZMV0h5Mc4%2B9X1szlcIfNlrMJi2pPqdxuYk1nipp75CfT%2FlwrgKu7yNvOy8v4lcYYOeV2hGZU4SYtHUXz9vZKgrDhPzC1ob4&X-Amz-Signature=8be6f25c02fb4a730ccd79ee7d06f4c83714f9a78f0cb04fbe224b2f0e800613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

