---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFTYR3QH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFnwCnIF77YNxF0%2F5FJxoZm%2Fc1KSBnY%2FOCdk1vej9GY9AiEA%2FWJimptVPgPRugl%2Fb%2FE4JL4QyZ2IXyNqABU2yrB7Ltkq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDEq2jKmxL7xEwbe%2BZSrcAzOf8nfuW%2BpsbSe3iaaca0efQC3NT1ZZ5Sv%2FbhWvuuW3btm4BQ27BUrAFz0NRQhtC5swwwVjpMES2IsYDccQtbW4yRfHvyGzk20Dxdg7KibwTo8oO9hNcOpNQ1BgAxRehGyafqvhwjCmRd0lbMPISBqkDjnA%2BCTHMZ2%2FlrWVGCL2UFUu6cIAAmo9ftewbFEvYRyr7Iy%2F0IdFByEG4eRjnjBs0jLLVHEREWlFGJEqCg0qRNB3LP9d3ihDC7uFPc8bADni1%2Blh7oWn1eX%2Bl3t2t91g3IlXh3T1k9wpkF5%2B3AvgcBdDSRnnAJjNxUSEti1rCdUbqdnf59qGxVmGYwMPUYykisrz%2BQtOFhpkdurLaWN9K9lbkkduJuN3s%2BXKAdtS5uFl0R1YZHZCUbFJ2CtyTK3%2BXyOd8n5rqhAKrxdjeQMNYchCOy%2FCTLeZ5cKzOrO4fal6fVsn7AW4YLrH2dYDK7nX2lmBlKOpyaAsEifP8oGsWxGD26DXUq%2B02MOzh7vAJ7t%2BKUSiSeiX0TsXmefdBhgHGk3fssiEYJSEGoRi6s9WmGdXZtca%2BncW76X8ROFI1KEjnUgt2nE%2BKjF0ydKWKsRhecKy9Wn7nH5bUMniqmEhTsKJWMC9c71WllrhMKa9wskGOqUBbxs9QhlEmbvPJ6u1PKDJUSB1h02XyafdTh68t0wT9YwIpFGJywaOa%2Fm8ETdUnaZGYVrhMEQlVmARtS5sAJO6qTAo7cW%2BhEs3MvZupbBGNYzG5mmLh6TNgw7VHzCob6hIPc0g5fqs0QJ1Zw%2FGdonMg9WoaZZefA6ADWQ7W%2BALN%2FiKKiZR8QaIk1xrVKH7VoI3dDVal7m7s%2BRy6fLnpeoBM6vvzO35&X-Amz-Signature=ce43b8ce6d4959baca4159ca4a087a394d7c249021803fc9b6997fa921364096&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MVO34BW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCgqeslKrJT6mTInpsnx8kmnspYZ5n4B76nPua7znK11wIhAKCj9VTrxEUsxO%2BQHkRny6HUnPcjbbXgQ1yznb6KI68MKv8DCDYQABoMNjM3NDIzMTgzODA1IgzxXXmplqQIZYlQyiQq3AM5HNzjrH%2FmWGAqqw9KKtmB7qAUGHl9r7xljcJgcU48UkonW2AH6T2noRWgbvCv30i4nr3tPrR8BNVRm7cpzVFqJCVc8kXyjU2sLFF7kmAEjaWc2sMm9Mqqtyo8HKjokB2QPY4086K7f1k%2FttBKi%2FWpy0AszPDZKiYnXfWTf3AUKc5El6gSZS%2FFK5tDAYWs%2BkGchNZHM81jYAY6mhqIbX%2FrMmQIe2bKZOwGIPVHv9DFDfh93xBku1TrnpDpZ%2F5bQJO5f94VqCL0DMpe3xHhT%2BWW8GLkc8JSPmsPQmg8ZFxrV3%2F%2BO1dKSPk%2B4Jokcsp7FQWl58DXlxh44X1AH1wiMf9UT1wf%2FHK6uut9%2BzxMObOsu7UxIagG2%2FbLonFU8tt8lBmUs3xVKo42Ybvdo97Z1GUPPYPhEQUT8qO4IUimnVwo%2FeVnm1GyM%2BxYvCrUTl8tlF3h27QdF7AqdHEQQZ3%2F4nCJMBX2KbYDl0FuPRB36Z9kuNsWxaNhqKujoQazdqrp5hY1731CEHLPsvkSo0W8zQOaoXnc68vKKj%2FZaP88J99vNW2VFNuNLgB8uIzPy8Cg5tHR0fM4hFQxGC4htlUUaWn3fbOewY1LRuYApioWOYFJAIeFjDfZsIXW8TWwkTDYvcLJBjqkASaKOGIpCPv%2FiJ3wP%2F3lrfPsoLjS9Vjy7ZuQBZIhPSLgO5YGY%2F49GzyBnGKeXwbir4PyUuYWMYsZGafalQeo4ONNBHbjBgIRIFwybkn9%2Feb4g8eLqhwNtKGKpcCNwG3c1gX6N%2FrVL6vuZzdC268Pf7Ia2a5EOGFk2xHep9l9LgHZ2RPDlHkwC38uY1DQQvijssL0nh6HOAgOb8771nUxBIXb%2BVOV&X-Amz-Signature=3866092b5bf114d2692925139f6971a52a27fad7f3c1fc17ca1e0578648af0fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

