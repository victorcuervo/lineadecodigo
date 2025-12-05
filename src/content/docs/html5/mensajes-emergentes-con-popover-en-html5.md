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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U25X7KQB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T021716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2%2Bh1bGFAFv2cZ%2FqkZLq%2B6LR0nZ78MnvWwULpeTgXrOAiEAqbB9jpHvlXRACKSnMGny8APuD%2FWjvC62d6eRZMpnMIYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLizWUF4R0KJRH6zACrcA4F7Wznj1MYFlRmcAAaEMewsndx3zDilLDL4jAP8x0PtT8%2BUWxu6jHMbXYI7FVh75asdEAs9T1PNRH1%2Fp950S%2BIcmoKZKRXf2ezDXa%2BIEGiGcr0f1nJ78LOM9%2Bv2AAJ%2BihTkjLZc2HUPzjCGIXjkB%2Byp7aVoOu4Da8yKgLdUPxrgHKhGTgRaHDjbaP2cgTfiLUON0sLM3%2B4WXelMseVCS2AuZhnujun%2BnAy584BdZzf9mR7CcBPwXLgQ6AL%2BXdbpc9d9HZRvkE7YdFK5AILS5525%2BGpx2JquK32d7uE8TmIT8qb0Nhj0eez6weEKNfS6DPl5d71VrC2WO4YhOMSmFFzorEvfANdI%2FRENiIW4B8%2FM%2F7renXr4IxVmgd6KDTfSpjJYg2Rzt6OX4A91rvPpS5MfEFso6KgdGbn7EbjljTodsWMQoVGkmVYxkiAxk6MBvT4AzgTZ%2FjWKBl2Rw22hcBwbVy1Hkh%2F6YRZW29qmVK5P5GyY399iob6K%2FEpsJsmoR3%2FrVNs8pUVuhBALQhYyO4VSF0rLMx6NmPNmLeSQIYPTi%2Fq9USp%2FovJtXz3%2FkXYHul7FOk9nNwLlaVSGyzMLNVLFEiXYSkgIMKquT2d6P2Beu9Lo5XVZHcqIm8pDMNWMyMkGOqUBMF7enAKFD0uLAfpIim10X2sG5%2Fv62quy%2B9CpKBtXtkr%2Br7mWOm528khcROww3IpLjvR8fPgCo2GQT2WP8aCLAeH%2BBLDfIUBfKJ3CFFmdyLiY%2By0WXZHJoxp9eBtTUORpeiRuKilpx2zRpeSc83sTnT%2BYPo%2B7H1zTnRrz%2BBMnVqpZM9Qj1mYaZ8mSzhTWRy6O6FChwSUvdXT%2FGEAtXTFIKvqQrgHO&X-Amz-Signature=6b39804271052655a93f7ba7fb2f58b5bacb457ebe54783b9985003ac39b1751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GTE4OXY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T021716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcvIAxTvciXsYY3Os8IuWN76hCEPWHSx0YAu7Quwkv9wIgLXeFOHw1sAGW3rubBDdfhzW9X8Kb5ZFRmQkTwcZ3ZsEq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOHLCk3pb4dSrnwlfSrcA%2FhkbANR%2B6Wi4IgT4ukvdeZLVnAMB9lJbvdiCCkXx5QFHo7pS7t1kDlUvLkf5HEKaxVaCfqp6gtDJbGvAymBzmJmGkx75G8wE%2BFxoMskZ03tt0uwc3ExjdJYfVrnkUqSobEdAFW7zdc9qRZnhOB%2FOr6v5jqU8YlNbXjkdOvPEWZ%2BWK5A8ZkzJhR7AEVZpm2897ToJ6SCEOSZA3We5GbYUGeF2GFu09TeI3JQzlM4M1BHJ0Jjy8aE2M%2FxbejKCLfoJUrvsj0MwZTgJBhm2JAyDtDvm%2B%2FULkPRY1fxX07hE2%2FHIni1tvIWzv%2Bf4g2jB3wNqDCTwj4i6Ruh7XQaAP04c2%2BnM9suDlYRoMrhMYX1WhZsGXJ%2F7ZAfGj84drRaC8pjdZACI48PGiNv%2Fx8zjsDgEmko6rMvwV1Sv196zMKg%2FpXUHgi17EZUySBHzJ0EoJudfoYQxki8Is88zIRbHYsWybmyBFwDVSaInLPP3O9YA1Xs%2F3wsbzBjTwLendfQKCwRpwbpyEKO3KdXzexM9IZp1Up2qVTjndqaS53sXBPm7aRihRbSEDqEXN6DVkr6mdNW0uo1f939ju%2BYX9mdsDHg%2FhMVmEtLz7dADcr4%2BcYDd0bcEUCz2l1RpTLKNAZeMImMyMkGOqUBRuv%2FnzD8s7mngRjGxz53hHmZeWmy3ARsn2GmlCro5ncE%2FF6qFWpUr88pXyh68SrOSlQsBFFuo%2Fb%2FhBKgXiz6jRMAQiXvHDz7KGO8ud0rCfRnTJ%2BcwsOI9GjIvLHt4b8mMiWkArmsp2klMHzbOLn6Gn0JT%2BJxMUIANnDNHpxg55dJz%2F8zOFKcBksHOOen4MxgTbcpnebqUOU5euEcpoYmt%2F0LCBq0&X-Amz-Signature=9960ffb3f8d7c0eb83c4e9bf63647533efac20b693db6342edac4b5246df34c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

