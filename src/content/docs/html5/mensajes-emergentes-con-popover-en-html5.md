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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLF4CPIL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIZNB1GiukDWtHdunQyIEgngdU8D3xS4Lc30mSYlHxAAIgNrFW3W1e%2B2pvfe%2Bj8WcJfdf%2Fpo4SJQIi0XhPgYZJurMq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLxWH7XngC1gdBrdwyrcA6SYozsMYd6EBujKJP2k8nvZmuHOCdFzmpkWzjoXkPtP5ra5g%2FU2n7rBRZ1exND7%2FvtWbsECU4WIthE%2FYxaBB4gy3VXwCm1eAWcM4YjG90Xyqft1AWs0VnnfEHbnc23Ul2QCNRCFZeH5%2BdRo9TSYz6pe6quEqhPqCmNBHD%2FJF%2FHHTFEj5BRADZXQ%2FakuKs8nA7T6Jz3K5GSdut3RxgbD1XLVJjIs1aDpA2UozX4FaSzWvxOU8FaYYXl7s%2BrkFcBauRMkXxLyN2%2BO4eoAoEuj1X346TkGuE07J1MbzczECCoF8tr6pXjhotcrsVSYs%2Ffn1mGUvINtoyN0KrGvoSdk%2BoshidBRhThtCGmHAfrhF4sSoQx6JDXXwIah6UIoBuPbV%2Ffv33y7vIfLpFXl0yYuKkCXwYC4t7MeBiRGRPAgHAAFITjZlL%2Fhu8WbwL29nr2guKRI%2BIIDDg0eS4TFB0%2BH%2FCrOHCWPHt86%2BBrEE3C3Ud9Z7LWdV8NU9%2BUq0FttfiBoNINIz1CNV%2FDF2t1p9zwMhxdFhS5%2BxQNWVm46cbAlt%2F59f620gJLJ7HEwOpvwn87MRntNQAdLpiawZQzL1qJ6NbmG6qHEpwtZu%2FVi%2Bkh0UnZ%2B6j1mimpJdg1OnwGWMJvGzckGOqUBA9NbRQAFnHbws%2FFg0DIfMxfIaWIKQrTRFmJko%2BZNuJlT8zunD5paBhCR8LP42O5f2ZVRxJNA8eq541he29uCPh4dnCJ50U%2FB5BQCbLF%2FqUPsZG2ifY7sRC8MuTwn2qt7Dw3HScARXn6dnD1nOqbBzLT0B8otgNEXM3aucWHgDIUZAka3o%2B9V5qXFpv1j7Mzf9YRbCMdh%2FQdQaGM7I43edzadoG0x&X-Amz-Signature=16a5b6875f55885192c533d7381a9eb2807a5167955e0d2acd7790e2be7e5770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5SB6L6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBki8NPLDY3g7C5Vif6Ef6UIas7MBd3GudyFjVGaCihNAiBAG8T3%2Fclixo55Evgc285hIDR9pWyWk0pZKYC%2F5KMQEyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMeKYgYSOWTm2aeDfZKtwD6hhuLZ0f6Wg9JTkjoH342eMNeLDFME20So86inYG2d5eVt%2BDz13wL694a%2FVRefPoVeDzj%2FC%2BxYU6beJaYXc1gwGYvCg7OcGxWjiCjVWi2hlBEmAEZq3TXE5%2BsL8n8YB7DwfrxgZzgvhaEqaA6JrsK0mm6uX9vIuvT2uSbd5Fni15nOua4sStQOVBELhLlZH6I1wdF2Qnb5ubg3RV2%2FztiWgMN2NMt4wpY9p3MzMy3ApUYupHhff%2BIjjIXHVkdw91t5%2BqCQJhpPHIc9%2Fd%2BTKp%2Bbf41DHmiyekzp29hHxujTOO5DRXP34AOkKKZC71UGzd37X7ga9n9mTPblQI18tHbiQPGp%2F1o2FHlKk8jNBxvxk9DxEYr1q9542r%2Fu7Ry8%2FTjDAkl8D8UPykpHcLGQososnT83sUWHxXuk%2BC9URndz2vixYpBTuDPqzXUVb5tVhQQQ%2BOuT5xNQ4yeA33wwtZI54P43DYSNbkk9XG9UywXlg0ZsRGYm11oMw0u7MKszT88zSZ6hgmMbWfwKTrRf9eRsFAtn1n8Tw04j3Oma5u9GJtjbl90axXB%2FFO75rD3Vgm8R%2F0EwrDmA5Z7B3tjOBXimKWQhG%2FJNslngwuF6Kr7MoikjnUqS0zMRVp1ggwwcbNyQY6pgFy52Itfdx1EQwX2ULqOTC1SKRzCc4VJJ3Of1H6pqozUO9tGFOakSnxjUS%2BzC0%2FDUHLdnXSYpDXa0T4ZrUMeuHa3jQVaw1yg0gsOTecHix979Ucng5qubxtL%2F704mXJaejYjaQOuDrI%2BtZm1%2BPVN2MH73GnDpEGz7twffzj4qaHUoyE4s6PKlLX%2Bc8NrdyL9tNu7GN6IcBtfNuoKdmGA%2FTFRk9H7h6a&X-Amz-Signature=9af7ccd2e8a31aa90131bb16e5d0a856aca9b65221dad038e9bb337d3e130b2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

