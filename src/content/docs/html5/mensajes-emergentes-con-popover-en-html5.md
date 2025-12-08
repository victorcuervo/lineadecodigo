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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OXPEUKL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T164426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCmfvSK5pNl8jN4kFaq%2B7j6gK7tRlKp9%2BDq55UP1NX3wIhAL3QbZ%2Bi8%2BQgfApT0ybPm2BuryqOvrfKOlzvpeABBSVKKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLsbvyk%2FTTrboJyykq3APxgG1RZwCM8Se5nwcdM3S8pUTOKvsFe0phIWBM0O%2FDpAMcOQ7xpsb81NgmkixCGCV0JjpZb69hDI2HcAYVCniCluj2cHi4yYbhMqYotrC9KnxAcNR5r8xhdFN12Fio%2B6Byv0hVqYmArZLXVeKSKylclR%2BrJY0mQfpGTkmq7N6EqgWqodLPq33VR0QdII3gwPgjaWRrNpQTTRS%2BqAN81wwenDcFHwpnGnHfSZzw6wUL%2FScZtmcHIVmlIwUpxa8G9tRb2r5ibk7mi9DN4TUGuyuqpywu77WK5qSZx7sLd4lvbrmp2MDRizaZosshf04L03A7d%2BhqQHHV4WSWm0rUJN8RPZTdf78%2F07RqLvQHPICEgKeefEO9LfHk44vrszLnAS2oAxftEpbZScoQl%2FSl8TDQ8p9yNcCUWFcaj96n4iWwx266g9V1LD7zzq0%2FNBBiNPjEc3W4ZipJrfgSm7z8k5Jyyayq4DL0ycTtiAqLtLXKLMq9fEdCYe6NbreHmHNqQRlztUczhYOORRZPOVeC%2FD1eJczSw72qib5RXhZGLRSFy3m2m9uwO%2F5LxzG0HSNm6GJBel1keJWDw7LjnRnpu4mQr42Ry1%2BZ%2F8Mfk85T%2FAGvl%2BH9c1AI0BWbLM%2FM%2FzDE5NvJBjqkAWGcK%2FJzV2SjlQHthmPmlB6E6yp4Fmtsoso9iRItIPbMlz%2BACn9iI%2B6hdT1Pddby2vcWEasS7wY22qB2IBPu9%2F0ni5wMa5fKujZYJ%2BsMT8Js1SA4u3TkFwbI9n2XXVBjgJe5bQNVlULkasvsb%2BDSVW13xRFxSyY3kRGho5y5LbbZG5WOsF%2BqVF706W3UPjcnk8pW%2Ffa3X3zbIMu01iEgL6rAR4lf&X-Amz-Signature=bdd32bbf64269a80f62feb8130ea8604b71f15b8f8b5350255753f3004bf6fe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHY6OJVY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T164426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6iz4Zm8t2VKieA34v7v4oSzka9%2FxLiBIA5%2BW9JO1f%2BwIhALS2OpRiU0f5FT%2Bk%2BfzoCBXSO3OK%2BDcxxpTAjhhGaCV1KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZL21Kli5Wq0dxuYkq3ANnOIK%2BasDmlJ6EZY8tYQeJGsT2EjziU%2BewjKD1ct5JTy%2BuZhA9xZJ7D%2B89IrDTysRSphaFoH38q5D1G%2FOEfYijWIH4f4WpAy9wblrNwMQKHpipxCsUzeKBgUFFGjlxkyggWnk7NftGW%2BsficjueS%2BsKWDtFfTirU%2BEZa3i6PS%2B9xe4SSTHJIXW5m8C%2Bixs870%2Bhqt20Wvp%2Ba8j3HHadp%2BaY6JlteZBJv5n5wVMvrz0BMglSTTFuE69myCPuosNUV0Cg6U3Bvgw2VdMqA%2FMFBxlO%2FJV1LTtfwiIyiKjYVjP7Xs6reYSXsRcfCF9NQfMbccSQ7AhLkP%2F0Ay5JnjBdKLDqHzk82qJsy%2B80TxbR0GKhXILnLuzb2r2vctfKrCgGmhtkSdZnrxw9aloi1dH1pH1W9HulT7bqqGZVu7i8SGpdCflVbLyEN0DaAaHBW2Y%2FlVFhHT0NIDgUC3b4%2Be7VQAubSn7KO71bpjw%2BXgkvwH8iCtSCD7%2FieLYBXXIzrQbLbI0cPYBtANANj%2B49siDklzYq9tgwHk0U%2BqnZFvmh6wZSd7iD1NxNyrP42K8JNBBcNqjgOvAmuAd7D1cAXh94L%2BxMdC0tUhQijoYYniucWoyLqPO0MVw3RXGaD2TMzDH5NvJBjqkAfGeA7XldDUWlh%2FrWnBm4tKH0r%2F1StgD9MF7iLywrbJV%2BuTWylsGay7Iv2Wov0N35XLZHEOfp%2Bv%2BTLkCRYqIjleQ%2F7Ii3O7E83f1FEbKAGd8BKpM63modx8JqyKnF9%2FKhvT6BKTHfYCx6JyGiIUd%2F%2BbERtcy4%2FicoUojTJddbqcBdmnwObBWaJllJjbozOHuMwqIaL6U3oFDZaB6jTmJ52mN4DrC&X-Amz-Signature=48d5a2793be383066f532dcc8062eb56770d064e7e00c83f28d7835b0501e7eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

