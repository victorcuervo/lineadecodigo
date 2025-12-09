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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7TTISH7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T053423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDN0K%2FVvL7G%2BHdS3NVK7WsmpH6r5Qou4AW26fhwSu55uAiAEs6jPMuhu5scF7O5XAnFCfeUDbsW9YmjtFPFPNdqonyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMykN4d%2FN1HE3vsoGbKtwD5yC%2BAYVfxalrNSNbjdHo8PiJGogC1N%2Fx8gI3A2WSgktyMFypyg77VHle2aTHjgNktOfdy1eyFsbZK3Y%2BO8dmFmajt4X%2Fj4rnZ1kx%2FefscJXO6y%2FA6QOgPILJB49D6MhdJ5591lBCuOccYAPe6MCVuTJF20RUojM4q%2B%2FqOoygSjCd%2FU1IPI7gXFq8YKO4jPRN1VLv6h8GU%2FkQGS9uHprs%2BwAfuvYMF93B5brzO9M%2Be7q7IFHz37CnAn4kQxWvskJH23zeKYwQO6D5siRCtG%2BI4mQdxbAL%2BrocD4X3eOqGLqJSxPaVVX0FykhARLx89FoqMK%2Bu1RqC8apYDGDlJS7amYmrPHPMrc7oSat1qBF9SlAyb9eB8g0xGT6nR6ObLT0z%2F23Fc2DmLqfd5%2FVCbjz4GsuXW0ASjuWtwUZoVJImjuMP%2FrwIlEAepoveFrzYUjKfdphqptLB23y7TGYJGDx%2FtxmaB8W2rwHVow%2BKNrxyZiqsjP%2FDFjaoeHLy0X6faODzDgO4LYjShq9A9RGA2VCjwK%2F%2BbjyBFlzq7ziklGOjXq%2B3e869fvrIy1dLi8KrbiTrTbnvnhOqNIaAwmvIVTdcW8M%2BX1MC8Tr7DdPEnA3cen5fgGTKyDfc5kEkwD4w9uXeyQY6pgHHHcrqnD8cKQfnHckaBvEhZMkd7%2Bh7BkdY%2BrADWY0%2Fhw4pM%2FKk7%2FRzX5yTmvtKRcMDaKhi8MJSHmONc%2FddrzM9VRFtmETTJ7WB0zOTL5bzg4vmUspeq9X4%2BdTlVAV9HvkR7hwM1wt60WmjjApPXqC4pQhpd1bpCiINHWC0Iv3t8EPkufYmeZwwgHDJEnLwruJmqPyOlK%2BTdUYxd5Q7SkQFyiEz%2BlZT&X-Amz-Signature=6abfeb42e568df4fc6d0e706624aba798e5eff9175c641d0e1fa8fc44c1e8d90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQDX4RDQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T053423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIbXA8a333rnJQ3rbXarAJSG8G1MQPWpoSTWusV8Fm7AiBV92lMBzVUCtD1MkJU6EoBv3vdsAQPCKkvUEtMVm7gHSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTL5jJax%2BLQf6YUlsKtwDIPFvhCV%2F5VxpDa%2Bg89NhY4vlIpwxt6UAiaFJ01MyH87DBnL%2FJO5%2B8ZcmGJ7bATfSqZIczYkaRlsVLIfAun7%2FMLBIrAitGIRaoxczZlHhEObbQxbsG%2FyzoF5XKKplVmjBbb9S988%2FFstU2ob3rZ0cYbER6Gp%2Fbr9JHQz8tQ%2FnKNxgrOmQqyAj1pR8mKzTs94zvyUVjNznuEyE7%2ByGUqzgpW2sq5KuI5mDztC7VwQar7Z1Hgb4Bm7Rl%2Bj3WSTdT6wpvhzAPuCGfCOagmKWddqwm4JuoJ7bKzoFyI18TTO8ZlcCuuyV9ox9FDKdWB2wX44DSLzNjhd6sVhZMSOowDbTu%2BCY04nKH%2B9yDjqLrSzYCGDSQZJ%2BRrME%2BBh2Vi1R6wFtPGKIfURH77Q6o037A8n6Stwc%2F1M10WUd6Dyk6UCLos0t1gL92AKgqQvXFCadVQDbI%2FKWjKoy6y%2BRKDthA1HeCeE3arhT7KSC6AFdBIm%2Fjy%2B6hsQ27y%2FHNh3Fwj0tulTRL0c%2BUnl7VvK0jSOzK5H7DPwVPya7av1c3l9JE7wyhporTalI8ta9wCZRj0dsikMBLBnWsxa%2FkvVf6mYeoyg2LGXxNpc96%2FJ7%2FaXCbBJXXL8Z%2BP%2FrH%2Bc8Bb2%2FXSAwtuXeyQY6pgFavwY%2Bv5HzXIClJqmZ%2BQzpT5cTmqvpcNXPlvzrfdNlve0ujyY6bUfAXJjk3vzEhUoxvqIS5R%2B09tHhCDlF28Kwwx%2BvfnfOfI7rMaiEGDT1veELvig8Yi0w8hzQZGWOvgZw%2FyBW8pCFWpFIK3KnqIUVQ8Gwuo2uQc3Pg2q14X3fhBRYXbxL3JWqeacfO7PmjYjWxMG2NiQ5fj%2BxYDpoIUva8vniGCJl&X-Amz-Signature=f0882218e40777942f600163909ab850c27d90b12dd7972f4aa1a8fe6e85cf52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

