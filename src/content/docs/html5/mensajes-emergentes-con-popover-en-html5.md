---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LBN3GNX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCICDjXbi2lLJtMdid6XLV8ubQ3zvcYlCUDoEp6HVZRgOGAiEAg03SVXanfiGobzwcbXGTBFsvf8VKRrhPvm5mvYtZsZkq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDMGJfPm16K%2BsAWeZlyrcA9ZazRx6Jp1sinG2rAVDEKuTb1JHGXyEqUDtoD9DifvOscomAoivntukgxqouK4pjHvRiWplbEdF9AR0STU5FwSaJ5EYkD8oYnLW076iRr9mPp6w4Th3P1OKx5yMHEEN8ddUeFG1eUM3Ss%2BaSpLVNV9ZqEJZeHKu2nJIqTZQqQI7zHAdi61vFJ7fQ58zsi7Hpr8bc2VNXkUxa8%2BArGBns99D3%2BExuK3%2FT4arotyaHr739oxhjDY7jabuiDQL7CvOfNHDNJqXSIvrn9EW7CS6sEZT161qAqjWqCJMMZZDDm55ZU4QBtTGYbbY%2Bj6uirwAUwdqXqp3jrY01t8MdTCWh4UM8gtFMA1qH8nRR%2B%2FoVgqoxhxKi6VcFIYBfd%2FBydwoHyLONU%2Ffcd6UQvdd7z1TEhjvYfLPxFL6WR5qVjyvMt265S2Tjxhnt6%2B6bwutKeNSgAUM10AmNPdRaCjNbUadpgx0V9QL51%2BIKkT1Gyo4ZzhupKhYFK5oBVddgbzW3ME%2BQtuKKb7dnvFUCg%2BzBN6DiVTPoN5UiMaDZHf3WlZjdWBKshHr7%2F%2BfbAAF56K3OPrqpVqq4WTUbengUUkUXda7T%2FSQBNNN4%2ByaVz3EAZww2LcpDSSYYdWyeZEsNt%2F1MJjnxckGOqUBI%2F5Z3YP6onPnZSrO37CpZYvXuC8ZrrrKjbAxUwv5fLTDi8gWLGM501lDJv0d%2FSCUTGj%2B7f3hdlZrfd4SDrVRHyhtJN1j%2B5Z%2B7B1vtyNqZ6KaG2M26RbLhmgiqeoSSPvzO%2B8rL1DYlSAa0d%2FE1ywqAVhbfMlkVAPuswKtKfPrwVyyaG9bY99qTJk6EyPwpg8etxOYyBlexTZrAg8wYOcq%2BNCiz51Y&X-Amz-Signature=10046856f1b2eb4c571fcee70893928c2ad92ade5eec249712736399ab5602b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BSSIUMV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCGSyJSzSvciscVD2pUhX%2Fo7pH5MucmEZ7owlsyhqQ4lQIgY%2BSnlaU%2Fd5gDfIIa2%2BFk3YcBKhU4CBrQHG11ww6VlXwq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDM9%2BYL6SfivofxibzircA6WMZcdskMGajZJydHoverI%2BYXjmu304yU4r3EBWCEvnQCSxNa%2BMivz8PaEjUIsf%2FMSNvcWzweuRtgUIRvKsTND0qtvOULpakxxBkZ8HuA3cZ20alnCQvvS%2BeyR%2Ft%2BCq1qL70%2B%2Bgay22oq6wVMEiZm1bko6w4W%2BL5ooLVo9nXLXNEcWv6mBYXDC%2FRgV40qXk7gyh7aGZ2NI4qJQ6XswfVafGNyyxgggVGTBiKQCgNMm3XNpRrhk1lNlpeyqlN6wiYvotJsGqpo3nmDfcP9sg41TvO7bOhg2G8VeSK3XTGl7RStU976iUqNIxV5WMac3aHzm1OJhPMkNftkD2wmo398Aqto2HwMZlF%2FWsq2RlYXYtYG%2Fd3RkZwC%2FN5bOoXtMozJv6jQX5q3uy8fLtVQi3M5UDrW3zc4DxqHjOmgmO0vORtI2O8cJHq2lCrgdWAg12d4mAY313C0PZYa9c8qgn5hvzciFvwwH2liLJSq%2FXxiv5aedZMbAv%2FhrRo8l1RfTznhSaftF94jTtiXXiyq5eWxZycRD6Ktqh8qQkjDXLpqb4TX%2BhYSNrG1sF47ePaMZLLdnUtz8zHUOzpCeoMwrg0N%2FwuIIlOGe6OAPyjmsBbJyAf6Gr%2F4AAGdeC0b6hMJSExskGOqUBsVd4Bgumb%2BO3Xuj4lRewk6SGYopNUxRN3yZE5XCUqtsHFkgerSjYI987P19jxdn9tB2VagXBTn%2FI5xXU8BnXhC29KJ83yFt62s3MpSdOqa4BxvuPatA2h9FFZFfiIrG1lpF1GhrDZSfCdTAGsdb26wGrC1sQE%2FhF%2FZK7MspZE0kSTvbwLW75rw4vRvCRTdfHXKfdJLYpjkqdIrmI%2FISrEc20rdEM&X-Amz-Signature=40368e3586809c04b07ac8b01d728a40f61f94861f98a50c2903f0cced9bc046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

