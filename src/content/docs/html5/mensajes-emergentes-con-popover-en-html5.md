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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NZQMWL6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T011939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVuVs3j83WsgXQ69nrJLxL0EsCNutM%2FVD1bJtjtI40pgIhAN8%2F%2BXEEu9EMWo%2BlThmnO2tvqzHQ%2FiKl4rd%2FZkhM6mlNKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLEhyNhoUnTUm83e8q3AMY%2BC71M3sRdgoVz%2FXk6PSETO1POgsd7mU3m64e20yZE69pqpPd%2Fgh2s885YwPGsQV5joN6kKB24aHX4HTjjTjloqjmkx0gT6Rp0X4xaFo2SgQfwhuXIZ4y6r%2F1XPCmqrznA%2BXQ5SLAqqnf4DwpOiJtT47b48Jseovw2Xo5%2BCg8g3Aqb%2Bwszr6RTrWrYG21N5tZOLiKXvkc5y1E87LFVCdSPoF%2FwPMAU0PaDRvif6O2uitcPipbVmKNtJePAEh9bg3eArbhICrfY2MULrFnLC0xhOvcupK8oV6roYszgV2KWm1D3YznvDvasklgGtJ8VWOzMU%2FBp%2BNj9MLdfmNSaNxmpffTrjWqhVckDROQeqZrIuFGb%2B1SzFuNAfRJiGkqQ%2F3jNhSiEoVf04Fx5fF0hMDmXoeOAVCTcU5IX39OKkToL2sC5WdX5%2FFCuwyjsCuniVeR3SUYH22uoqkb57Tjtcb9dOmyZuJJCXdV3Dg%2BvxLz4ZbQUpMHebXjFIHPV%2BEerOFk4eeKhNJQQWi9EL7eFbu%2Fy9Mb%2FJT0DebkTQtrEdlKCsvyT1zuM6VeSGEub6Ukuu049kkMvBjYMAPlk8zx%2FLSnGbhkH9x0bACTwDL4kDelTkQv25Q0131ck6tAizDnodjJBjqkAUcI4ufMbFGEFE1wV0x5c5WT3nfDykl6WIJcLWhKfA6GcXBpnbHAXaiFpKBH16H%2BRRUXYuccp%2BBCWsQewXwYC%2Fjo9qMYsu39jUHD%2BH36w5tmSDque4qcHXjan1TmssK4GEM2Yr0KjM4nkPSA7pn0%2FWZs1JPvRsTFOrOVGtVLbagk8q3orSliG0uzjoegz2j68bKZwuNi%2B0bykvQi5VRzH1fE7yUG&X-Amz-Signature=e8020e42bca0896ddb5a8c3145f6d411af4527108264f5116b598b60ee34d221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAUUXHDC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T011939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMbc5xDCPLvnNwJuJGZ2%2FmmPLckTrLXB1rnfleyFkC%2FQIgdy0rxvuOQKZvcLYhZVXxpwtLXAKRrbK67aCEWPk9oDEqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyOZjGqXHGgdcM44ircAwbORlV6RQQgKZQwvGCwpQ8FOWqQulcaRa%2FY6OrZLhTYt2yrHVel516dMpYxqUiTJWCB6T38JoM0gg2T0mM0FuDr84UqxUYYEXzGwMzTaU0i%2Bg2RSO2RrxrPCv%2FTgcy%2BHpOXvhxAxaoSNGsoBwW6DIyPcgyGTLkEr3VRumWvswaLRlKbVv%2Fd5QEChlrxnjtDgt%2FW24Fl%2BCvP1Xh%2FXW9O3hpgKzJCaNFHlRhYPqUMfH2PoI1fSMLaWRxTIeUVzfOHOMoF7iC4sXitdnzEOZNMGshRtggAWjyki9wNn3XuhQSmzslWhE%2BRlrQ1eeYNpvI2hdNY829IfCoBdCTyfSxjuLDRzNCPSJfl7uwhpwiK%2B8oVjPN6viabTbJC%2Fe0iigUyIm5edSUq25f0T3so5PkCDLAdlZv%2FI%2B039dUMQ8tVYm%2BhLJVntbiGlUmLzEbF34qpd4dlDjnMwG0C%2BWd4gKsrdJIRd%2B7beRy0HkNJcqiqtQAlAR21zn4br46G%2Fm2qxyPiMyEqlIAqVdw9z1NpbpOEOCJOyFk%2FNc3gNNRjSlnOwdbD9%2FsJTaw5St9CmIa6ug2cjnItnSWHo2cNjPps%2FCPTntNXBtyYLp3uZsIdzq2ZuWIeegfyi2J6ksTZWbGnMPGh2MkGOqUBmdsewMIatVq7SSu0XiYl3MiZaFjcD3ijdDHThqoZimhTxdehEXN%2FjyFYKom1iQbP%2BeNYiuF%2BZqkF1nXt%2BlIHQUDbG7sH5Oc0HuA%2F8Bizn%2BVOs2Uj1%2Bc7XldPCOhMPisrjabK5yXp%2BJzNnzyepR9D%2BjDLC3VPSsuUb81NKEKDl7jHohyhsriThqZHwrYwGN7pdh87aZ2Ft6V1ftviEGQ5NA5egm82&X-Amz-Signature=589db1444d438c7bff649bfa3a5b826521b9a8bd5d3a6ab75e8320f2c432d0cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

