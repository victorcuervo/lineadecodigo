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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4NHBKJC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDolx2H5cXxReiDzvFDBWD3IH5t9oFJ368MygZdOFOxOwIhANOcmoQUyjh%2BctNm9yb7QlPiw5CkmV3MgVbci3GKF%2BXVKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxazLTFOMJRCyZcXJQq3APvk2HWNH1XoMVjqVQemP7%2BxmpYNw%2FQ%2BB%2FJiNJBDVxiviKAr%2Bh7B87%2Bcq0WlTvtLBwVRjV2Dho5XLhJOc2SM4WFjeDmONB8z%2FW%2FMtdCsqV%2FhJ7EWl%2BevKwoSTj1VAXZ4JhFpuWCvyjK5pKqgRiJJlXThl7qcJhblNIrSwtyjbFQT9qE2yThtVuDWXJgr1DqopBwZg9FHNh8mTg09xuO4leJ5rRUfvGBvdEZnakKPmzyautHmGHFfkEZ3CsDrqRQwrn9Bd05sC18LyXFVLog%2BcIT72%2BH%2Fnu1WI%2F862qtlk5qzoMtMLXNBZGGtoO0t03txYCDiF5MLv7pGCwkPZTooLzv6AzgDqPb1DluJOkpKw4pGlP8BwY0Pv%2Fy45Kdu404gGAi7evY076odZQSX6x0r6FiHTxRtFHaftecANpc0RYwW4jF%2FTDFb4U1MQmGY6R8NGDRKhWv3GAPZ%2B1%2B0Zszh1vNtamoqdiT%2BFFKu6DTbhnj4V4Of9J01fBtN7VwU1dPRHZf4P2xA3TixNs2hDSm0lTF0SpOc7IbbmOwZ1q0oVdOL%2FFfGoxujM%2BLSFhFgBIV1FAtZbI%2FAa9QNiduY2R%2FYq3Q9RHHUNsUPBzEtAprsJWZUhGQkQ4ZsrGy2FvcqzCP%2FtLJBjqkAX6hty4hONJXmy%2BTsjRjL30TDONU1pRqtL4H5Q2Gr9FKpd4nZmT0RB99kC%2BselvrEz5T0JUoURo%2Bxmc5HAogmVpr2fj6wwpL77RrP9f3tTrI3vRrYv%2BUb4JFeYyPCig3BzJl%2BBhgirxAm2I18RaIW%2FR8FvXbLwM3C2qzS7mLJ8D%2FTpXbc15zknOcq0tjm%2F9p8Rf3%2FueCHp2Amhg98EJRVy6ujhZH&X-Amz-Signature=b0713a51e842af43bfa4982a58057a2f65b51d95c4aec2eb2b2c99ad5c86acfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CSF3YQU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLz2SkXrbLl5mYfVrSiy6FYxmmtMka5sKZ3T9BOVRMZwIgSlTw9aiKRI44CyuvZbeEWMisbQqKbfbSlvisbp5L1NQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2YGr4XuaX4LgSflyrcA6qmBZa70KtV1%2BSAvYSh5jWVAbaG1tszrutWwMMldfu5kk%2BS0F2jxpo%2BxBRlKyOO5lcuFQGbXSHyQaPHoI5keh11pil%2F9sEHWv1wHKMkdNFhx1fCRY7ooHh8vMa5eLCViDMB6lKfQ1iZdIOLYkzrtBfGRDolq%2Bqpa%2F3H%2B6IoTsYvCokSeJT8e8jgO0vMBwXBzb%2FsLdy%2BWTIEK%2B8t7MmyqOkOp7lLlep2C7BoMZlM8Pld4cOVKZBpW4%2BJUTsGfIjp90jaC%2Byd4CE7YGFjzjp7CiA4Ya7wZ2JPDYXVkv1FWG%2FfhUsJq5JXXS900JwvRs0wb7kvjOn9ECYXuu0SRKAQPEpOCx%2BVFmEJv8kdz5Ab69%2FpGUdjIMBiqNIqsL85vwLpgVqt7URwZFGwBooiYlSv3n6P1UdYjYJfgxDeFUqnHU8Bw4RjUeYK5qMgW2PjYrZSOchDAB4T4Bg6KW6%2BUP3Bi99mwrXFMsTbIKCDpd8w5sn1a5uusKhzIOc49FTM5BxFBPfSpls5uYDg9GWPaezEQoE6lcjbhnyE4G3tGGDVZN9Vnvo55VVCZbua3ADl2xcaWARzpp1vM1FOW76P1bF1QFcpXoll2gCB9eb6pY%2FU3e6wgu0xVjy2ooFuXF7mMPL90skGOqUBkL1Va48Y%2FfEp29JE2FtPZPW1ebAYRB8tLb9P1mVoMWApO8E%2BiR8C24YFS5RvUFzfD6RyyWF8%2BzzxGXbysWDfPzsL9tarO6eISeVsfFV87F7TE3XlKPk0%2FPwqu4605gI%2FgXu35lkTvf6NOR21%2FB0%2BejsO3K9Khn7NooanwyZOzKF7g55RvRgzwTmQAfZ69nWEzul05Xn6a2vu%2BFVzWSGdgxq2KlRk&X-Amz-Signature=5e1102dc74cc2d0d51ba2a948346192758dd0c7d14ae26e66dee66489db4ec01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

