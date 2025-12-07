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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUW5XZ4E%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T123053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOAbS3FhbfDMBjdxHxQeteK3cdyt63mSRk%2Bzid9xZEOAiBG6tMun8xd8lhUoQtzT3OEvb17gepovNO39VUdntPaqCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLLofEj3J0P8JjBxnKtwDZTS%2B8Hbx6uXHDkP1OnFCApIpcvMQq9PLueoS6RVngnw1hTN1zIsQsvy7OW%2FRd84nSDC7iRpDfmEYTznsu8M0FFJIkXqaIA50iHk4RKbf1YSiU0%2B%2B6R2dvWVZ%2BUVGUPA6ZaFoEqSYI8mjn0fJAHZj%2FHLBnkV5z7AF70kA1lmmsTvb8Bqi%2FWFO4mUN8y3GCUoHXjDNN0XYyjxAFC6AN5qiLDodBhxym1xNmcDGU7x5krZ6Ua7sBVZz9kwCwMyiL%2FW2bOatfPbmZrjW%2FDRSD%2BY6vHdQ8fjHZXtPdO%2FNsYTBmOkHM5XdOlqAfSZI2fhFgy0xiWulPaOULj8ml0E5pj3QCLc0f5eZGiyew1Xk6ZilgxGCyVmIUAlpIspYy2KkaUwRt9o%2BlPhYtnWjU7q%2BVn%2BYYBGew3%2BkNgScYVneclOt%2B5OEhXfT6NkNQxyQ7A3LQtBCUcsFzA0lYUy7CX7J2OgUD%2FVvt3csyMDviCrSihb17tDRKC%2FZPRuodnh7b6NHS5CJtalE2ZC0N%2FdOwLFpJ%2FtwGAhjSxtLdSgcCYLKUUOA%2FUDic7AWd4ETsDrozdQkgAXXKgZS4R8fb3hgRn5mYOSh%2BWuXG5XWZ3cOgLITXpPgboB4LIEAW3gtuhWy3kow0ZnVyQY6pgF%2F1CzSMqFbB%2F4UB%2BH63UPIIzvqUldRALyJGG4FFWIzdAbvY61xEbC1B9TwAqa2YXpFQ1kGascE4ZsqwwJcXPA6Hz23sELBxU1d3thyYE1i040rKHs1eg9628yRYYebPbYevPNR%2FtWh2lRwwijFAb7FjMXVhoMaTAgBy890lP6yZof%2Bwyxe0O0PUUuw%2BxcatI4vB1FUNet1BqO%2Bfy1DgGwKeSS50vL%2B&X-Amz-Signature=6736f4f17c3757a2d1ec3195b924982cd05be15f8dc2dd6c5eb06031d647fe55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYXJSPMS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T123052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIjDdYGXmr%2FXw9nzxTqJa9pofwOfVO4O6z9gD9L2EOhAiEA%2FWJNPm9g1LEj%2BkAw5oJOyY1wXD3dKLvLXf24RBx1bVQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXzv41BMEqG5xq6HircAwuL9kLE39IGlruT2uZpcpJNUeLP%2FDw%2FdWH8uOg2jlpQDVgrpXfEm4izzea7Ed8imwv00VtS4AxHftA2Aek4mpJUzrg5bRapOOUAcd9DpuZhtGl%2F1ylvDucipFpjq6xT3M%2FbISxAW0W7Wm24qAdJMxe%2BWNKnuJb%2BDlaDyTWOrERI2W2Zkhb%2Blxm7wvHIuo5PEP1rtWeh09wVtsjUJ0euIa44aiKumNavUVLIYTPkCqYx7UBZ577VIkKmzGR0KOi9KtyuFNtUaxILcyjEvjD5QdBapg3jUh%2BGHXivR9WBuvg7Mo1a3iFCC6RxUqcxU%2FiEoUwNY0nwOmZyA9UyNREFc02xXb0ivOx3Dj1jM%2FIKGKYqKrmsrqoT75pdG228%2FuXjTgNGFp58AtGPinnZ0X9hRDXyB0d7W6dXhMHNamLmINbC7B4BMj6Uw%2FUMW0atCWTAch4YXgkpHwR%2BKC7J%2FIJ7%2B8jSZJtHx5acoRbz8kosEdCvlYBliNicfPRryeHPyk7NITI70jz5e1%2FBqn5SGZtw84X1EefEK5IE%2BuDvMjIT5nsvzfeQnqyBCYZZFzffO4d52a%2B2Lz%2F5DukRorjRckVebe6ZrZl1Hf8eCKxyEknT63DfBmEYvbOgz2SgC9lsMJ2Z1ckGOqUBMl4up%2FQLK3PnUhMe1eym925s4KH1WEIcyG%2BuBCLi4sBCix0ACBOrh26oSMeyL%2F50DOzKSIjmSQwcETiwAnuVion6oH202Keafklv9KFvYab1cz9KXWrW7hkjj78UQH%2FtygTWIACb7kNqAWbK9kAJ8EDSqdy4SQeANrPfeKT3DEU5OPX0jZ0kWSt158J3q1BPzmnMMs5ub56JYbwgJUIBDkciYiWd&X-Amz-Signature=696dbdb5c78dbba3346a950f648fdc8ac0b966996455600435ec5712a758b42f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

