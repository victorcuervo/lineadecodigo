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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZLFPQBB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T083629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtPEyTP4pkmN1eX33%2FcTYlRkO%2Fj9SW1BuxL9YadPMNrAiEAu9kxYRHPGu2riBz7fVwVzXRYr88vyniMvbPdmHn%2BHrgqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOC%2Bm8Lyy%2BLPc5HQ8SrcA1YAxEin%2B6rypuiy47LaZUAvvB0Pz9iYsnbbG1%2BLhIrnFnhXJggzbqfmxI2LduHnEPEyOYzpAv2rCjwi3s8Z7a1egT2FxzZNMoRsGUXtKL89%2BQgRfC41DHmw7qQ3F0AFFpiHovR8f8Z1%2Bvf4kA1tNYaxzL%2FU7nHHNC8lF0VN%2Fue9SAofpm8qlGPAE3jSmXShS9oW094wXVmwkEkngCeRnNtIX8iSoW2lOmIAEnpIFatJK2GHaqibDeeYdq0Z4ggiymE6zaCg3FMAmRsoQs8nxqaZUoKDn2Nb63n51JsHr6QnZaBDxYZmQPsjbLsJMV2YnkDd%2Bboxo1RnAzIG3GVbkcEoAafqpsnhHZzZh%2Fn%2FSsVF5li2aBnGR92D7N1rUrop%2FNpWQDKlLDpzOO6wg0bCHU8wvO%2B2lvQqjgixQJfRBSqcYnwSWb%2FWB2GZVgA%2By7zBZbXhjvkO8zKDO%2BH56f7rNEdf4%2Fy53YGtP0tLT06ZR64BWNcPawZKXFuC9FXiwfeZm3OqxgoqCiIi3Lo4rsZzzSQqeMaixD9RwypCxAhD7ZlsPJFhjP9NWjwcHjTXdave675rTaBvHVkXDvrmrYkdGhrqKyivf8hwVNARiijK%2FFNy776zbIZkVpmDGOL9MIek38kGOqUBCu%2BxjyA2DBZEFzR5oW0EUrMbs1tRulv5oe8%2F0UpQJLl36jKt1404hMF%2BcF9rab47G3vsWXlgoKs%2FEkTD6dFNakw3Rt2lGgwhc6Kf%2F3gwI41jPoGtQlgriLoVxPOf%2B3QTKhnPuspgqEk7mVJgyjXY%2FReI4QTVzkxKz6MQuqKyRNyxq6%2BFHynJhgixplxnz3giPHXXd7SPfLcBvPAixTkDfvKxVj65&X-Amz-Signature=b18955e916e3f74ea5fa8ae7d0aaebc6ecc72f60b2d663be4c1053ce9bb030e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSK6PIP3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T083629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkF8pijKUs%2BoJdBdmZWoRiZfH2mo2b8GtxqLBOXq2H8QIhAMNiTJQ7clHFwYY7%2BLSiQIr%2FtXZK0hJzn2em00M6jld4KogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiuyqKBGeWorr3lqIq3AOt8%2FgRepaVnHAEMmB19764cnT0rYeD1Iix%2BmSfED3gjtZLFuiy%2BkE7d%2FQ%2Berqfl9S3JMjyjO%2FHL0YMIXRDcMpiEyWu13IS%2F6t%2BaQ%2FgPqYyS7joWgoY7S%2FaR5Rucco5kDPwjNSxCM%2BIKiuwNyMJJ8Co7GTTmiTZHAoQ%2BIP0aHdMR%2BQQUWfzRSKTrOtpY6DQNDZo6jQvSfuDNy%2FAHdx3zdzD2JKGHHa4Pkjy3%2BtOmhrEpRrrrMgmEFKs394UbCBG9Ofzzn3T%2BFqQAUph1ZZaMIiPMOA8yGagPROpqB3ZAHyTUbzUzDL3j3wZVAdHVlY5pYjYHd5mFOF95liLwz3M2AMhmgtYtsZH9WMpzVscbm0AjdtthusBibjGXtpiBNCEEgkhwBpZ2G2aApGvPZyW1dyA%2B3%2FeB6WmJuaDzxHw8oIA4G2gJ9lYrzC6yfOzo4njBm7A2aN8MVVg8aclcSG%2BpCYlvs3fTB%2FoyFI6dI3AiCFqq%2B807SRYOgROOgUHyDzDINMAJxGT9jVsdv0r6OE%2FCdtXr66zmEAQUej%2BPrIMdD4VE%2Bfuv1UOTx1rXJp2XoyjFkeaTHx4M2Y3BJfr7qNYz6htq7lOKNubGYsrOIRJjkPJFo%2B6V7aYsv%2BFWk%2FpFzDzpN%2FJBjqkASg1enECL3vdD7nXauzjCK6TMzoo91VRtAJGJCIoYBq8SscQAZc2UVowIkEJnU4GHgxtoSvbQbrLuO3e2pYBSsDfWml7DK2SGWHoL8HaZXxROrB%2F9%2BI8YA%2BERrGdZET9stA2jUPqWqDP1FTHeL07EoMF0D7BERFMiMlvmapJODjFTnSFZnOAtZl5ZllHqSpkchCAOEHqryHtZlYkQXBNAgLxvjdD&X-Amz-Signature=8ad47c9292c3f89167d1118cb33db60c36dcf5255b3c84504e5f882379cae67a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

