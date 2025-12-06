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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JIBUVNM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T165609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHCiXBv8R8YVs6kDUsj7LCqagEFl6kqveOwGeWeE811AiEAt34LTlzaq%2FZolj7Hjbkptx%2B4FQDwcI2x22SS6D%2BhelMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDA1OOSpqsQEXwwwwgSrcAzM1UhZvV35gaibTH%2BNbjA1m1%2B2rFWUxr%2B9wbh8bOtMfst248DGf24qi52mmy2To%2BCUVy6433DD%2BRTy8s9XxoKYFTdpCptPe6ehFKjH9sh9dPYLtH7UhcOW0IJVqZqKUZ8lDo%2Fuuch%2BXMAkuraQQGLeFrgvDEzpXscBancZ8Q%2FcC47EvqExhtiVXlyqRPEaCIdm0KyLTyPzyrujen6AgSa4xEfqLQDrACsMXWsr0EvZa%2B%2Balz32yIhWtYsCTopjNYGWBkooogKSGHoR5Nbv0IeOFKcMRcNgEGefS0t%2BCbVvr%2Fioy1pSCs4wMJ%2BpkLnenftxP9VldpkMvxBIZGUZm%2BCpm9Q5gl90%2FStCcU2XEuAewFh92jT0%2BuI9rNOq4AyxJCpY%2B%2FOKP%2BdpEoRwAhDVbGaaOjsN9BDBuCnloSY7Z9a8RhJqxhNet4bkSx%2FkSzckL7GjmEI%2BzNgQkMJnpRxNmBgPGclWpO5xxEN56K%2FqZbabHvyFKjQiX8vFRsHLFoBXr0g28XCh9Xtw9vhhH%2Boo1QOoc6d28yHDJIML0sNLxsbMXtPrDnx7Ck%2FtqxOH96rKwZjpe8Q%2BM4%2B5MLUan%2F5HjK7zaHPIO9YWXwQlgFb9VumDsGMGskqEx1gzn5zIuMOT90MkGOqUBWTAAFk42arNZ7JstGYtu5Soyo%2BdRdpKfH3D1FtyXQnH5CAeWRnHFEAICsRAquduYVHBbwCSOdq2sKJHJSIsnnEEqU03d95ixkuppNL5kgFwF9%2BfJ%2B1wPNEzTHmzzYgE9tRJ9DkpUH5ok5rXRRjQvEh770AiSGs5DLdiP8Ymm9oD3HNivV9ssRKnaKWOG4QQqwrj4HrevqIBbgIcZtYjPCS%2FGz8Gx&X-Amz-Signature=1a132023bf05ebcd2fa2b6d5dbe8ce85b68decee87f970234b1c8beed9e2ab23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UHDWNKZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T165609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAngAAoxQieDigEfzULlSXa%2B0qIGFTgv4Hmc2LDRdrdpAiEAiSuguxRpFCX1wmZEvmNxa8SRsy1QCTxVsSqsk5D7bwIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFAKlJm%2FRpqEQ3za%2BSrcA6H2tvaAbt2bxCSElcH6BQx%2BMpZJJlButvcQhVjVxj%2Ba35foA4bxEmiGuO0ti%2B%2B0qLTOTMqhBu8Q%2Fw8U08chsCwQ1aXXa3odYJX43tGqGdJ9DLtx%2FwYf%2Fg2v%2Bw%2BKrSGE0WjXYkVF1srX28VDMt9ax2Ogtouk%2FM%2FOThqS2BYlkEUvFFaRP%2BgbxTFsGSU7VSDF0DagHTTUCzt8V4d1W6ztDEkkk2ExuSgOHvlILu1rE3npttl%2B%2BWXniN9IuO9b58zSaJYAtZ5eAw4m1%2BEhd7OjXKSphhe1bw9Y1ZrdGkfxFPg2NpxJhSiYDJFahkSsPxzS6H2mMydk0EC7o64etO89d38gXipKZ%2FsCYs6sKhoD6TEMgVtSfzqlhMW5TEB9UQZmsfkIYP5tFNYnMLElmADAlFBNM0jPh1xMCUsE0J4YCIPYu5PoEaeTVby47ExBfs7XFFP6136OjsFg5wXFATcCShPg2ZlEEZsogm%2F3zwj0FTkEuKU6Usp6K9HGV846MtJiNg8MZP29vA4b9epDG6abuV6dqzDZLwBUT9Q1cXXWesFSeuzcAeXu3MGXrvwGzwYQJMCoOqG%2BOrfNiUlIUJqAUMcR%2FTwbpjPFKHGW1wpTJkIsgT3LMtMVW5eYYxg1MJym0MkGOqUBUNPaAqVi1CV2C%2FHoMNlhwdKQBaQyhssW1eCIRt8c6WI3W1uQslbGGoA%2BFc9B2efsmzypiJ7SG6IEVZqLDnuMLQPAXHD%2F82urq3q7nKB2jgoxaXwdytnfaiesuoIGuniajlMMueS9bpuXSPdfJfhXuMrfmKZ001dIhtTAp8Et5LtsF9wwe5n5hefLR0GX1jP7se5PSpw2CJpzA6l32QNf1LlnoqUI&X-Amz-Signature=ce9a71805a41d1957d7e5a23980379e543b2ec9dc4d1c38913c6e55aaed028a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

