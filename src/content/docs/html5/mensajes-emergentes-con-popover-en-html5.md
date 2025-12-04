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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6ND4B47%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIDeozvIk4OmqJkS0PfJv%2B8K1%2B%2Fw%2Bn%2BgUTZB%2BTa8e7c9%2BAiBvrzvSXlD%2BdCEfbjPqUZ2Uo4i2TI2n%2Bp6MP9PG0z0TDir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM4jHaLmKyRpmbywYBKtwDoEbabsVP5VcDwLBpie1CJYog463ZLY9MgCkLb2olwiVprIplJa8s4bGW518KqxtJFMaYbrRFIBmfnHQhS4qBMSPrU79vWt9yetJqJB8AccXhRuTJ%2FuL0q4A2kdhZsbi2pUlzZd1Ek9d7t655GnyQTX0qp2IxKKrwXBNgtYGYud5iDro3hnVIXGHqvKZRHPPYLLHyV5lP3xa9VDKhhEBLJ139e5y01C3w%2FiN2zL5ej3%2BRn195xPMFyMUsJT18o7Ix4QxCrSoagvTThquOb09HTb26a3ks2%2BvS%2BXbh1BBlgfrrBeWKZe0TqaZcLg6KPPxQjF%2B6Z8huTnPMVPkLLezSGiHnOyWS9ummgEmsR2Y48kc2S%2BUNApiWmfidUAKSw%2BLHHLjBfdTTFDKYTXerh82di8PWmTEMykjlfhTEjIehUBsSRmSIkpbV2YFmZJv0WiBQrbvielXvtl5C1vnSFNYhHHgSMYZJFHz%2BWBWPQqLD44ZlXnmCLwio84as0V4W3H8veeI8Lkq2vCQGeqlOTghKZIr0InuWoktuKoO61j00yZAyF2VxTVgo%2B63xTHA3oyQY1oPDgKA%2BwPjYzsJL3%2FDGUPOsn1532Hh6yQRH%2FffimhcYY4mMeQtVIvFjzB0w9NPDyQY6pgGg9KKqK6907wATNknGPsz8zcZOfTI4aFVBTbeKWDq1mZrPmb0FjramvM4HJSVhgC1vpelWc%2FpqypXfDIuergZUXPg7Nh3AFaEh2xU2IEsEEc48L1hBoydMhKw01jvjOZU61O%2FImzdGQNR%2BZ0tp2Nw%2FMoPFVUa6vW8GCMNcK%2FElVKNzq3Jv6ihnkX8yq1EKabTuoTGOjhXeS3CKMtvgPsSJ8SGWkwl2&X-Amz-Signature=b9d45669b7b3948d809c46ba3716213d35dc6d0b0ed6f72c39b25e230727cce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEOGDHVY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBFHSso29EJBffR7S2Nj5eeHbrhYuSmZ1YJ5udnr676PAiEAquYPBFf6H1QPthzMjC6qVajCp2Rr%2BA2jS0XQN0DBXSQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDNcfc%2FvZc4KX5pTwqircA1w4D079ZgeVgx%2FLUoxQlIab1VEq6Zq365%2FQ29Foquhu9m8wqJdvmb%2FaxKytuFodZEYJyM6xxd%2FXj%2FEPuhFzhonk1yXIrMobdL3sjYQFbhyXiyr9hDipDipFWjEQ1ZvDP1rVrP5jXILCMK0690xy46IwTmsodPUSG5MBTJCcZ%2B4GIQkyxQUcE4yepQ28JtXy3zZxzAEiS7yJsgSKGRFdtybSkcD4iTxznVT6OaqAsGcB4EOMX1pIMbR3CRRuK%2FDZrvXuqrpNZtWpOryQBApYON8Q6%2B6GLUTUnsZa6RAtvy3axs1p8EDs2rFs4rXt42TgZihvsBIp4teWn0hgv%2B6vs%2BElf0MmS0g2YGrsBnGT3rgQC2e1izZGdQjViXHZ%2BKRATjVEHAhScncz0WFOGVZbcBIwpLMEc739ygQ7JdrOPtmYCsQP51u0LjbUcQCBWLDJbIdDJWXyjLRX5G3bYLmBCfCxCFsHaL8viLwoAvhk7vrqz8NRYpXyGpuwHmC0sHNLMufCXvTBvkJxosCkS2DCXswgIUEXl781CDjw5ANd3MN3aXJZpwHp%2F94k47ddh49Q%2FGMc48ph09VIViAHiw%2Bi4W6s4Txp05flApvfp5ZZcsqHyThHwFZg8ZLmZfDMMKjUw8kGOqUBLCbTKvyy8EpSLXhyPE2NhcP9s%2FdKCCxJoVXCc6dDxWL87p5a1f04y8dskFoEr1kJSexRAIB1NxKmGuP5QkRdqFArzQgzf3vE0fAsQlC081caHGlavsbvEtUTuqJPUHgGzFrJ2s9if5ZhVDoMKIsMEGuoY4sN4ytHRzVyghs4wR3N9pEIhIo4%2BolfkTpszWcd0qKUJ3T%2FrQExxg55pOL%2FxrQF13u5&X-Amz-Signature=7119246d1690971ee2d0212ad31eafa55681dae094ddc1688641dc4c90670203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

