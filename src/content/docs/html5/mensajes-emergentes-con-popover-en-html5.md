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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R67NLPL2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH5avMSzUluZCvS2TH4hGmQDFLpyHI6kaXZNw2rTl%2BcgIhAJ57%2BiPppCOAGakPYne50EosIdfgkwJ%2BSGdFYckN8IXTKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2jCNis%2FU%2B%2BAyuGL0q3AP5nN8Awm5rRZpmFvdFmq7Q0XpqNACipIUs4tI%2BNq4BLGcreWtboCN8vgkMV%2B5qIOMQNa20l5jXfGOE4JYA9%2B%2B20LGTHxaQSUPLbDNnTkEbxsSsg5lP%2Ff3D%2BrulID3%2Bpare%2BsNKbEclrQn9cGXTnvZabtey%2BtOb8BCn69OjhWW%2FbReWe1nkSuAMJp4%2FeQr%2FrvKHYVj61nZuAvA%2BJSsXiTvHyl%2FFb%2FDasjGKwSkscso6a5DLX6TKAa%2FHZmc8uHKAKp0qV8U2Tg0QmozlUredqMCqIucCtVJfIX%2BdqP0PJoCtg4NQoMgmDR20VyIA%2FQIJrO4TfbcTnvAwiKM6TIcZvvnBR2mSVQcOo%2F98G6doknwERK86UmBwr5Mmb15ypM7Y8fKk3S8qnbB6%2BRuCdEImyHbW3qwwjTCTlIczcLoLthPLseDAlzVu%2FXNUd%2Br%2Bifl2x3uc0gYImGvTCHp%2F7ksl2FvrR%2F7g0j5J9KQcKzteNKqiajgBRkAWked6mZx3ntpHCt8o4Q7azzH09%2BFwa%2B22Klx%2FQ3tXxTY4VUxfRRnYXwuZSU5SvwM3UuhJzLH7kLdDYGGUhPN5VndMmvRUc6fouh%2BgZ14kFpDtChzX0cnjPMDAUcBDuc3mmdtFRvPSQTDmod3JBjqkAY6WvVKQMpodqJ%2BE2hVDN9MguvDG9%2BgmGEMRS9XtMnmSUnnQfWAEJBaP4TFp8nEA%2BDSgyXBqqM%2B1p49134huSRYOodKT5BHlpGCLTuceSIJWB4GXwVb9a6%2Fa%2B2wFJ5uiu%2B2CReu0ZDUuCjQmzfr78Fi2pq%2B75TMAWL6s14qJmEzdgrUD7svHCWyNc45GQ6nu%2BTCgGFl6LFTr9iwFiXmeRtS6gdk2&X-Amz-Signature=3ebcf3a984b1c009b9947faacbd80591b83ce50d3b9536163782b77774433386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY6KAMI2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAmINU0Yy6UXEtG8L8ANUvl4j140AyzpDdcrAwO5%2FdKAIgdTcY3k3zJnoHYdZFwJ%2BWI%2BfPw6gt6Mi5bQhBagvUxtkqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcINgTuM1N5fZwFfCrcA%2FmUOZNO7HDGFvOoaI6X0beJENL1IocIhI%2B9CiWmjil21K17R5AwhsX9vHwBbEJsTls68vnfKJJSOhiO%2Bs2io7%2B%2FRcyiGxPyW8yPdGDR%2BkM4NJQzlz%2FSUKZU0g7FSa4LFFTiXJ8vX1z9LmmrEDjffgQk2CEPOxTIIhsWsx3GK7TdVk4V5FoVFi2T4zS8OtQXaQW%2F%2B9kZzgAnjR8R6ns6dqHO736hPB%2BR0mC6%2FVtlQ%2Bays%2FExteE46Nzr%2FIN%2BWt8CCvjKSouO%2FO3FS0Y7kBaShDu0lLtQ5TpCDHwGHnYNYwCZbMsB%2FhqYmmMsm6kBa%2FJVETEktUpSWPxn60DvI%2FTYkuZtBrBm%2BLYUZ7HB3GBsoN%2FIuG7A9DN5NZ9ct%2B7pcaEtJXjbLBOKUIzx7emjPdZXzybt4CaOWRW3C%2BABvwbp%2F9aiebS0fbPjsswEw%2B1gsw3bTAEStP%2F91W8rNeSXuMu15ksdK%2BMj%2F0j4SkJxjvAdpqb9MF3JMimmyNYjbEHbTGT2KYwnWTrKqMB6YBjT%2Fzdib8VjwFMMzvza%2Bom%2BqWAAIAX46sjGPen3sBn6HuxZUB%2B%2Bvg2r91ufJ%2BiT26u9CnofW3Mi2x0BaRNwDiFLvRocex%2BQWw3hOcE%2Fz1yqXbTNML%2Bh3ckGOqUBaRzRiv1NORSaB77DF2aDpvzh2JYG5ctZioqFV%2FGNMzBUf2O7TYqnSCP8SR4wsLZJcPeHyGc0j69JGF12RNHgDg%2BUR3r3fHlG5k7qnUJWRxlM7j%2FxAj61%2F6L3Q%2BaJx4aFrSyt%2FqsRtRPl%2B1GZpO7a%2F0NF1JW2foy%2Fz0ynHlAb%2FvtiyOu5KRLlDqDFj5Q06xzYMwgTNG2MnkM4mBIAJdsX6nRy5zxx&X-Amz-Signature=9ee32d8b91a78c244e890ddf3d82347d0f331bcd3c57888e19c0dd886864fb47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

