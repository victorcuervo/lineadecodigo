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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6KSENR2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGv705U0azQ6HZL2OpWOPo7%2B1JCK38FeiVS5zlUfND91AiEAzvRNCr5vyQeNguzMvpsngQLW2%2BE%2FektEIrVJvaWyv3oq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDEOg3B%2B7Ky2TVfDlEircA2N2%2B6rg%2Fth5lYRKKy3%2Bpja9xKaTTEmDortmS%2BKOisa6Q1ukLPP%2F7wsaJOe54%2BPm8L1XPLYML0Amog3vlxbPSdmbxSq2hfXXMnkR0zn3zZ%2FtFUIKeSEJTMBepUy7UL2ypbZiIFgoueOv5T7mXhCG15M4jIjffjem5qa5XnteuJA2ISpIALC6HNUjSLlBm0PSA%2B0T9qVlTmMuisPXglcaFimScu5xL1xPD%2FElsLRuAK1A1oh4NkV8P%2FLoLWHZxJU%2B587pB%2FeLL05cpyTyEa%2BPA%2BI6im6UeVmc9wY6lrl8tw5fkRqSpVVLjVWcoEJ0rF768zqdqAA5ZJA4r0JDS6h9O8SuA7a6wJ1rzIYaGVyyyE69lyjEOnfpzY52NK4qhlowm%2F%2B%2FQVHOqnFqZ104BtVg4kyqzi05sPexnHH0Ej7r8gGuvB5lS6wiX%2FaOiaFt5j9pCgDrDGoI3k2qzBjWQAlgzyzxNV0y%2BAcsp82ik02c3TuY8jbEjwmCJthxTKQT%2B244Z1WxfZy8L0PFLlF79mIACBR1snqVZQ88TB9wDxeje%2BtDqtQNn0SVaTIkAfJ5Omirf1IpRkecIYA7om81yODxU5Km9Whp8VkvjDhX56G2%2FlWkBadqLw6B9k%2FNwchhMMHcxskGOqUBZrV78BS9gROlBOH8y%2BVC%2F7t2Qg1ydIP2IFhYBA4OrzD4YWTl4fFV4SGySJYnR1K%2BbmISvZk5gQ%2BRq36JOx2U52VeuwPrUsTIEaIX%2BY3%2BdD0w27%2BdqrSNpxp8VdBAEMztP7EJy%2FzPToiSXItUYWy8ckylXqvgxi61kGcKwJws9paJnGIAFNrq%2FhItWAy0p%2BUDb7Rj6oUOcCPAA4qoBX4eBxiN4F%2FF&X-Amz-Signature=c3a16773aacfd4c5c914960d81b18986cc1cf85b36b61ff9e252f3d4640aa778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HYYFYNO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiBQY74cblHq6TQ1HZVCGY%2FcmReeErOYKbAoX0PLVJ4QIhAJwVuv5YDgCms8VZYn73LazkZEmI1yGgJC4Nk77h8QXaKv8DCEkQABoMNjM3NDIzMTgzODA1IgxjKwfenHtWo2OAxB0q3AODptfX1El8w2y2%2BihWj7tm3R6tJq9vdOqWSoppd576MrmybqtnV0Oc2OPuSa2m7KCbbeDBU%2Fvuj5YltwqGhnw8O2ZlHSoDFc06vSbwpzV7aVGyDtwJrp0X3g%2BoYh96%2B8bmKCyX67pgdCphhech4MEoANRSJsDu%2Fn%2FR46TBry%2Bx9Aym79AN3WeRoRK4Mr8dJ49Zj6P3%2FYKs1ABqhPH0MdwH5fGeg2i6pUKrbPGDI0fHiUlGWMz%2FfNLVuntmAtfCnGN4gMJeJiPiz7TGRkd8uXbIRf4lGJb1xXLLOogsP9vmR3nDpZ%2FF%2ByW6cXDyVnk5RY2UwkloR99lqUAKuGjHu1RHN7SUaTNJHg4LGCa%2Bv02ka4KCRClzf57grZiVAXnzKpIirVxhqN3K%2FU7kf7n9fpnQMdumBkrTk%2Fa28X8fVoIiSR6PCogvJzoeRcXLcXn%2Fh%2BhZi0aD2EjOjLWcldtaBmQdUK4%2FgcpvI9miVzyKaVgY8sAKOwzY2efp3MLUHk1QB5uuprnRTVn33wbMWWxOGb0YGzoC7Cdmiu7rM0qGdmmfJ8jS%2FRlNEzPpYCRuTAMyGMy3xtnEq5AORMK%2BxFS6A100lzuDl%2F%2BnPh8GWhcdc3OoflKtgxwk68iK4hrN8DCe3MbJBjqkAZ19CQ65%2Bc1Iok2W4mOsOTBIlNGfe6E3o04xsKYlRXAEjgcFGVLaIV7KnpS%2FYWUbQht6e3A1vJ8c%2FLPpVhaJQB3JZRnE07y2dCtCHu3hG%2Fp9g95CQT4TtxKyPxqIk8yp8DUoJPlGCSzIop9lI%2F3C5%2BepMUPLHG7BR4RVpHAjVF%2FaRkxUWMEZAqh%2B9THVnmxZ4vtJM79OZsy00StomyiBk2YlLe%2BS&X-Amz-Signature=ea7338e45963d3b5a4b251631dc8448e19f46ccc0e4c46241333b828edb2cfc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

