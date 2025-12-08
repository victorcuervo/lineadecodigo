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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOUMNKD3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T155212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4cJpd%2BgoyTuooyH39Wr14Q8J8j8zs%2F2P2Du0Ww1CiJAiEA5kzuwSgZo83eVhctd6wkCQvbc9%2BxPjTSPWyxyWPWgecqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtTfs6nFlVefaLNsircA4IAKdsIbjnLh4Ai78y0YSfHwcuYlX8Z8YC23rE5eK6bo6rWIIBVMgwQLCVdvlp4R5uP5GlrWkjHDR8jd4PsGVHP%2Bzw7tqSoYwIpXlTrAFsW0M%2B7br1HUGw3AtkIAAgzIDsYcMXHpXhVoMGYj6CmEgdx0zkJ0pvfTQMZHp9g%2FzPC5TeMnF7YdTW1iG%2BEBDHor8N6gx4IxQMTP9VQ%2BZD0s%2Fx%2FJbhODjUaRyxPhWaifpeI%2FMpsW2mbNOo%2FIoAe5qejmk5BQlXltNLOzEwlP%2FtKGxm11D5kJmJhjb93Lzkr0UIqfKLaTiNLGT7aL6d%2BrU5Pblguf5XJEJ%2BRBQWfHCop1CW3x0za9zE4auqMAH40Vm3MzviemUGDGXXVttXMU8XxCaTPIXA6t2%2FyeLz6laISLpDMveJ%2BzuNrYvmceIwsbctP0n0bY2YtIXvS08JB9OkTDTM4nSm47l1fxBwvurYrbzVxxXAQIAlSlkKerPe5%2Bqvjy1%2Ftr0J1m44vL9ww0Ag3TGVzeOz1kGdtpizciMS65fKTODFemWYHm%2BSb%2FRe%2Fj9ZpXefOWDxU9nmOilwuDuhXwdtKpDj52Q9R1EM8TpCYL%2BQmch%2Bfa8A6LiTF7ioffHQrIv46jJvRW6eYOYVqMJzk28kGOqUBrWYHx4RZwctPVXgzhj%2BJktltIwPHshdyA%2FIMYER1Xnb2dQX5e36hgZcus4%2FkzW%2FTJL4lkt5vYf4K5cYQFb7iLirXdmZJ3nyFmoTZM52Jm8A4pAV07uHnUkPVMlcVzNTax49wZXPR12ihTp%2FSd31qHnNX%2FfTrn6fISrYyF1yrjD433AFwb2PXs6Ei1TxBlMODS3NgVfU5F81AjANCINiP46R3rCBn&X-Amz-Signature=ab160bee0c4a32b4944693d4af141de94838ff3a142d43a11a6162e8566060c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKSAGTIT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T155212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2yx%2BIsc84acXb2kLzzcF2u5pqsYdg8zrbj8yxaaeJHAiAVesGWtzO%2F9TKII3rPC7%2FCNhOWQp5Z2x4p7BlSDQFJqCqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrPRZHYqCYaq6qkmkKtwDKZBOlIXGrzUHcBBZoiVhoalabf9OB7jumhuZ4xDxQ0VN5%2BPM9AU8jxRsJn9cnELlnxgNOrtngF9snsWUTR5P9zAhAzhtnfSjUXy9EUSGfXyORPwe8aLpu4BDoaEgbLtBiBJVeSAmgX7xGybWAANQZrzI7q52OkwU0LlJ9Apx42kb5rT7yGhJdcCf3wFmk17rcwBlM5bpdkxvFhQryP5vxTW9LlGb8Z8Bb4cRjzHzqtsq2m725s6lm4k5y74sCEW7Y0my0s4T5MLR1%2BhDvlpGB5lVdWW7iWj%2Bt9FdRt8%2Fim5wzil5%2F8m0WZjg%2B0zpceWhAx1NuOUwznp%2B1DGWWpBy39SWuVXjp30fdLRJhlLdjC2kzdmsjMfv%2BKcn9zB0rj93Ej9Uchw7fpU%2FPzt21mQpthb0Lr6iy86taK8W7E7XvlaUL%2BjzuJYAq9Ouo%2FFBz2t74ZCAkwjfksV5By22%2Fm%2B4HwpQtu277poDmaU5A7mm6gcumE6kF8DacyWyrt9iaAb9c0zltUxS5cRBxWcRYmlwF1eg%2B%2BzYeCnU%2FYjoWp6l%2FE4EpcdlgmpzH4O2CneAObvOKotgoJ5BLf2%2BYYeZoSdt%2FTHMqofVb2QT0bObYodh9D2jp6apsUwe3N2DO5owi%2BXbyQY6pgEq68AoCZe%2Fz8LQu26mXe0A0tvsHHwLeJVr2Uc4km3LB6oyjdJMvh%2Bzux5dUisZivsrRP0CNSkc81A97MqL8mXjwJwV1O8Jlx8Gmbn0V9RW6cmnZT4L5q5B4lmv9PWOVojatx1fb0uRnXtezyNAhHnxeQSrnwEfvn9MQBUFiYiy5AVHniprS9SmYLuowuBPbeNJE6I9SOTqSVQC%2BebVaAf2t9xki6o6&X-Amz-Signature=d91bef7d84ae4e82f95f12cc76cf344bbea51ea0f62c90419fc956377b5c519c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

