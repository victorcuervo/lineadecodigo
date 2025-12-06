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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMYIUKVX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGgG6b68uZqkKEBA8%2FCYTmtFo2V19qtS5LqE1acthm%2BAIhAMS5ruJaZrj7eiTfZnJewV5qSTozbYZQqdlc8U7SwJlHKv8DCHIQABoMNjM3NDIzMTgzODA1IgwgWliAsWm495Tiksgq3AO%2F6o%2FhUrWrWPGzmCU271wE2%2B81aeAIYHa3UMOy6KoaqlZBuOrIfDFfomz8vzRm7oXIssSNcq7acRsN%2FfnmAm0MC2gMJUD4ILt2DBCBqhX52CZANgJhexm5OSeSG8DRLKPpU2PlqlGF8sSvif2duqAaApgI%2BYKKw0jxyMMjbGOEOfViO%2FhVRKLtrz0KyPVkVTj%2FPIlSkeBZ7KCvtUweiAM9BdEPwKV%2BxMI6cSGsuAbFFIJUPaK1Z03ujA9tj9%2Bpx7ptGLNTu%2B2r3OmOISgHvIChGXwx41I%2F7jB1UftQ4%2FKZjcYLNtthnielHwIo%2F76Bh7PSZFlg3dgaazVUl5DzKcuJwdZEFR3UJijlmYjC5H4z7xGhdnk%2B95baeQ6tSsyO4kxAnR601z68VKyeYpo%2FOip6Nv0xgTJ9M5bJr3FTWaKLXMyExzi5yMiUW6TZkT%2FK3rfxkIdA1ALPt3gPz8cu8nPITwErNEqPBu3RjNFl9%2BuOghxxJwNxQN93lik4x938mSkSf%2FtyOajJ2dQqEoGHhzau2TGefV9pyTOTG2ZprstQR1qp4QpaKfzAkCkzfVwzA2P5cAnh2ZVtC%2B03wLT9gM1Lb98%2FNlkru0G6tc02GvYpQlTu4qc6Rt6ghmVNozDH68%2FJBjqkAXpHJ7l3mnP1toda70EpYgMZSvBFpAH8gDJ%2ByRuufKrzGg3tJJL7xeKCIc1YVC7YlAwg%2BVC2TrztvIAeC4KBl6NDWvbBh1sz7%2BGVkmAXoQypv8b8MoG1FVItNgO%2BjOznnh8ipfSN4wWkGloi%2BNDa5hLH8eQFYVL7X4S8OIbuFdvjbyoF%2FHsL6l%2FYdu4GnBqQ90KCUFvOR3IGV%2FBCQ3MouwRs%2FLfG&X-Amz-Signature=77ff46ed9bc52e0df32f75d1f2017d80e664e5629c53a161824e51bd7d86697b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEPSUGYB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICU7gor4A%2Fq8OHiRiNjZ1%2FOV2xTm8hZQPcSRXBqusmTFAiBJ1OAeQZNfoxBmaBD4uVrD2n8PZKIdXugDFUV98XA7fir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM376b5xVuWh8Wxwr6KtwDW0fZ%2FK7tcKCupBCD1kaHBqvy%2BQqFQENo498jfE8sWfjeXdsY0WOaFK92EIzh4LCQO8gzcT%2F4wS3XEPa06Qw71gXjd4STNR9OsR9ftzdP3Qym8bd2PE%2BFciXzAdcdFlSelgpmjBwKI%2Fk1dfIM5JBrKU%2Bfp7D4XNZLdbqoa%2BnPueYPynqhaD3cSN8SWjaO8Vn5VXeev%2Busw1ckG1KWvoQuTd947POLWOTsjtzqb2PGrTDGJ71dkqnzzsxcl%2Fjkmvzti0yELRmwkmDcfrXFyZvlFJ6f644WMHybtlkYenS%2B2mFQrc79E0CKooPwwCcsyli6%2FGjsrYnXOTf6GKhCi7AshbPAVMysfsj8fzY1%2FGK%2B0T0ltV2IJBKlmB%2BndOdpvR3DWdVE4tWa%2FcI%2BsZiWHoRqYRSRJSTeBzdxn1kiIzUleQNW0vKP2u6x9NRJLaw%2FSU5zVKJiVA1FNjp4N2xBYxico%2BJs3jL69UKC%2F1GR1RUOa%2BBY1X4YmvC0HG4DlZjdZttqPmXzd4HvJVjsQsrSnAwFvq42uAm79RZUmnaSt27O0rMGCNGh7rGen0Y5hYg4caThZWKHu5syz6e7%2Fx4neEvoPOrwFnhdVewE%2FO%2FYpomzyGFrXWugkerVfmjtyEUw9urPyQY6pgFnScq6RHAKki7FgU%2FvibHT47e0PBZegEtluY10rLnX5CN1k%2FDV4Tl4hMQ9OIKSIGr81vWmV1%2BHgepmazawFtrB4HA7cacIa%2Br%2FBNq1Gpla%2BWFstCaZs%2BDBR5qn3eAScuvExBLzTpBJ0q3nPs8rJk%2F%2FC40oo5a55zmlaXZRqzywcNIIbz8Wtss7HbuVHf9IsZdgg%2FScqcOUdJF%2BkSkLq16BDmpIacnv&X-Amz-Signature=b15e0cd80cb46ed37836fdffcfbacd1ba90b4ecaef960edb806f02dc56212954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

