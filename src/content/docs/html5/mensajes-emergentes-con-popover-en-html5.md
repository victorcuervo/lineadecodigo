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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY5F7CI4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAi%2FaXV8oJ6bDnO8Ql0L6l%2BEEUKBAo9iGiG2CPnUfATsAiAo%2Fh2rJc3DhuSuHA5OgeEvRhuhht%2B048Q1N8ikI6GQ0ir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM4dH8PR6DY9AOyePuKtwDwbCWzYZk3gPYL%2F%2FnEmOyQyUeH3fzYD0c5g4yVmFleG3CP41XJHBwPbc%2Fghm%2FvYc7j9D28fJLI0cEQu9J23E6YewITUJ8KEyIsUhf3m4EytJZgerxqTJM8dfsWqES%2Fr5N9KYWYviV9QWZBwwUShe%2FEyryPjgHEVIfPu3jq%2Bbt4Nx%2F6n4%2FC4TID7nNyjWixJ6UkU1bQpHGup1qsum3ai%2B6lG8oa9XUBoH23CWzzPXrPkxSyEonYYiw03UlM6DHU%2Bc3Cul2YXwSqP61DBzJQhkTSQUu9xkMiSh0ih%2BCU2DOHHIH9OwZGSRYY2wjaZRtjk1FqYOnHLhW8qlWh11baYKt6s6Fz4nRErA3FouQ1bnVVL50rKEQrIMQ7hbiEfVSYdH1DtFq1WS3o%2F1NcKeqDhTZAWDcuxwqocgG3AcHTwFGFXytwWNY%2Bxy2USrzTC0eMazLRk9RVxbCv4zUc8K8L8Ck2sCmMP5JO7Y%2BYYOiQj2%2BdB5uhdRrLRpIaOzLlsSMFOyY3hWFjImzgwAqJ0%2FUNh8O4VBuDadh6E3ChqWTZpiE1cw8fd2wVw8n2dUuO3U%2FxXOxUEvTIW337b3dk%2Bvz2bkUcaAbHEv0e78jqrDhNQ2LtnLMzdV4OnOk0epHNqIwxuvPyQY6pgEdPKNbVFt4zY6J5nnmn04%2B4QGvDlocz8BqbZFx2uZyFWBnpoJLSB6g7XtcarfmIYWUw8l16SXyiTbxqGyRLEbi2%2BW97CFsuxhx5CyXB2UbpnAwGUagFDtnn%2BMJ00wjhHR0m%2BDNS7ac7eP8bopCrfBRi4i%2FOrrm0ICWSH%2BnUEwu%2FaaCFSI75MWoaBzg0Od92lZgOxx7iK5Z5hcp%2F1jp9o9GV%2FYnMNKS&X-Amz-Signature=449c622623fd3c866f674d1098a1751c352a1d460089b09674cb528b736e8c1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IAPUZVX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBW%2FOaKEMmeGWGurTGKa0Jclql48ZXyaSXyqMiaWeE3hAiEAx57C%2BkYDl7g7T5dnIykoq6tTspoXGaSS1%2BdmxWom8Aoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCX6S1MPuHe3RdYV3CrcA9MxON3KyjS9YK7QAEAcaGWRQBPh%2BMRhgTIp%2FgPH4PYmgOabNT0A%2B3ghrgySoTC7QVF4OWiB0MKKinnGM8Q8CKva54fMLXoiw3UrXCHeqVquNKDBHDN7NWIUSnbr0DVn7FBtGWOqTs0VqRm9BVJY9kme3jo6Fatk6ZQ0n0v6mCLI53cb%2F%2FKZid1YcN7JZUfYeyPtBfDdNMXyzL0PIGrC3poV4eH4jW6EtLjdAHu2SsofASMQ3axY%2F1GeSVPjL9d9juPhvkHxu1eeVxmOcCB2Cb9qrBh2xM%2FM6pdR%2FEkixb9DCQSfb4LS8FmsqJmza2P8aijxLWk4btIGbDduUvZ%2Fdo5A6lHUd%2Bp8FfEoWCna6lKM%2F%2BShvdVstD7yLYO%2FamgpQjk2zwWcyFpC5U7W%2Fh3Xvk5YCFQqABnn%2F%2BBsfZrmF9jlLdJAniIBx66qGGUak3gJhlmwlcb%2F4yfsHP3WjVThQiLCCBs%2FVJVwPnedPGGvaDRouQO7eK4m0Ox%2BYwHN72kcsCgZluXtzPsiTBkF%2BuhCVnYPPbrnt46omXsorMsoO5KK83NlJzSLhfG%2ByamWwjvyfVrH9CqG67qDIEeXc1SaR6K%2BoJPzeLGFaeItjD08tCwR38lxQwCiZfiAqHZeMIzrz8kGOqUBxbZ1GSCY2g2eourZPTtzJnKMkyruraMNjQbZ6WtzqLnDij5WjmDlipChM6ZWPy8Mz36mi3ZIOM%2FDtkg6BCv4%2FObZu0Q4wQ61JFk0MZs0xo8TfhR86Rjf0W0OhOQHZ6jLZpW%2F56Vjval2o7MesMsnSZ0IXyRfxVDrWTN5ymHMthBO%2Bf2fLFM%2Bv1MDK2eTm86EaMdm%2BLF4PryouLJ0%2FHJZ9Fj%2BhDRo&X-Amz-Signature=a0c038ac43205aa9a086aef3a25fbbc9f40a3c752fd692e55ad82c03c1b97474&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

