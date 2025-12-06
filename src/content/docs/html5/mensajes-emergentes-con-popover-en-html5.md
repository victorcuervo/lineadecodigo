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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGCKTN7E%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdQJHeuTgxeFmPLr3fmLq2xpfwCmWkrJcwwYJ5HXa9wAiEA1vubBgrR%2B9mxbJQq0L1N64LOY7wL36WjlQmDwCp0fGoq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDKOnTdWp8YvLxkaGCircA3POhDBK4szsiX38J%2BoOMfUQ27h4nda5lbBcIAXe6Gn56rLH%2Fmo6YPNG3dwvu7gPa2nzEOVv6JbU7XLrOn8bjNMG1lvb%2BWAyU5GsA2r06Vfae4e%2FeVbTCN8sGXKJwzLehnxiRpWhfcvFtRMZLWJt1LRnP%2FOLgz%2B9nQKurrd5mpTuztNpV9rA8qt7q7TWRDmIzTyN1py4qkGLOAM8k1%2B3YLn7s%2BUF9RHKMYu%2FmLf%2B5Lrbqrz5zvGaHR785cZmIjaVNBc1KHWpLyt9azEIRsemHN71r3F659PsAzJn5xArvJEPHZ%2BoJxu05%2BjanMDHDT9lrHY%2FiHiPX4J702wFBlVYtxmV7ZA0MfRkbY07m0%2BTlAFfhlsRdw4H%2FD5uxI3lO%2BiD0nQYQUV3AaNfyXOgboRmpdHBD%2B32Ii3VtTs0n5HXMM7Z9hzKYLEdg7bnXuxBYmLGN06XE60kcWBXWTqNxPTjWJmm6QRgVW1DX7EqTm%2FjnSFwvvXNvli5M8hlRoJYXhwLb4LUnIpuXBFSCoLtR7cHoOk67LPhkeVHH7rfYojxCJ%2BkvpIeTgPDuWvCtd6V1uRYyyAnECn9Hg4zEybFqv%2FWc3VlVaGWQF8Wv%2FRB59eXauUq9WTXgjfThdxzfqObMN7ozckGOqUB6r6r2KQLZzNI5wfeRsB443YsIQOKlZ7H5UoosgjuCkfJlZMycwC5wkaV1%2BVjrRvOrvvjxIuVOJ4Ye%2FkZNMLZrs%2FnJ%2BNWx6VQe7g54JWijPl1oLWLPin4TL2%2BWMByozR9ck7oOEB3QbYtFSV30vkM4uIpBhmGggbri6BHTrjXRztuQC160x0driTeo65h5jg93p5U%2FBst8ZCUwSG4hzjc7xSa3yjl&X-Amz-Signature=c19c824cc471b0bcb96d4d471681e77fea3b5d6ea173c01191cc65b2218dc1cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFJP53BI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBoxXD5ZAy6FgglQIKcPx5HflHDJjnH57jRHRVQxntveAiByeMVVecPRGwQSj2rd8zvUGv%2Fq%2BC95taNAYnMnJuwyMCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMas3dFKyyLH8gZDf3KtwD5irAIJtkplnCFYZJY5ZgAQFWVouUTGgjBlZJi68IOyd2uW0l80xS9zzC2hwB7AIkFnAQs61zS8%2B5YAv8gqDQSMEQi7I7itfGATn1It1OVz%2B%2F8ZfY1DZFG8yItDyerCIgweOovLPKXNCKcxzOzHiBRJy2ns9oaaRkOdeUtAm5GajllZsbHo3ZTgB%2FwlK8po58zckegNaj3hnSkB5OE9McyAOtEhrzBvjLAsUSYprRbL6qxjdHnaDIjgNZWImtq4JzZKxWZcT%2F5MbPrsXySYlJMkurW5FWUV8Z%2BzNYEHTQ8l09fc%2BKB6oA7L32VULbbUIo1bdwL9JOCnpERT6%2B9%2Fsxx5QYnwmnbz4dyAxYSRf%2B66nImb3wHOKGKAWRQn20WiZZESFSUqqQIJZ7r3kCRdh7jN7rAjJDBBePZ3qyJqP4Jfe4M2NR7coS92DrXGKaEqry%2F3oxcT2OjHBIBZfyeKLZbb0utBgHcI%2FvtecZ1EhLeVTm8Aww4Rr1ImLcC3It474Q5PRel9Ar062cwLPkdeksZsS1U6aNYNZeQpZWWnhtijR4rbRcVKuKfxg2%2BROk5bbOt7noZY%2FXHFQilbmM5X65ejO%2FlMQlmVwIUNHv3g5kuNMs7rqh7NmbOfnMNGsw%2F%2BjNyQY6pgG68ljcS0bd8t1iDZIEmW4fyVIU1BqYYfCVpACIluCzmBUDsBbB5SbiEJw8OV6wVaHtWiTFYZVqYkn2X5ex90vybV7k7lYd7I9HXDVKmib4ILiPhoDeV3zPAVZAY9K8VktsYT7AAYv4DNobG1gSkghNWpa7kkBLU%2BN5zI4DWXphzkgAxIv7rFP39CEWJVz2RCAyO8ygu5%2FdljlXui1iYSr7WkyoEvAz&X-Amz-Signature=2154e255f6ebe8a9b4f152385afffe2272896b411160fc3b00f5418a0a8cc8e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

