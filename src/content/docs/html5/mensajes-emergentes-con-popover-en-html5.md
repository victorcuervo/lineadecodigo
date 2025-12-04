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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4WO54WM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCNpzhYByAceK0lotJI9cUkjwHQtTYqy6dSYfsKwMNySgIgFAAblV3LEBzgzal8XIoJ6C2bptNmIKZDT2FQsYAMOSMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDEsrFnzR1%2F3rPB29%2FyrcA7UFmFpxCvnv%2FdYxNrsCVfiUq6tjgejItrCwLszLLOovdXpE9u42iNxj3ySjlZb8tFWnnMWMvVwYKkNGOwSFv5pr4O%2BEoj4N2N2rnK6W69aIraiqBZa87sKWg8g3Pwgb1%2BIzw5Nk0cA8t%2B95cCAbws75YlBks5vXdrsBXfCA3nQoHFOnnl%2BTzEIuvi%2BSoOAKLY9U8Oq796jmlwSOOwaYDhjmqFm482keJbk%2F%2FV5ZZe5%2B42LZZPFERadUsfICMMZzmuFsRZ0ofSQbihghsYaCEpkyTk9SfjKbroPpaXYCgyVpMbh7WHkH1gtF7GpV80hXe6%2Bxpa7bIU0s3k9r7UzYPpO%2FPt69XypEi05cWptaF3URhiUoyJ23h3XpgkLpRM3dV3PFspOA37hyhkrRbGbSgNAZybg2vUoMd9fFpmmOLRpIShOGpF6nRIH9rJqoXYqDv1RrV8uldM8zhwHv%2BLIE3Nl%2BvcP82p8w4ZLEhPyWgxByG0x%2FYjRouiYcndf45fu6XOXq8iIJ7TtocA1f8kQ35YvPsGeVo4i7S4rwiUGU3IEiLYE7yhYTgZZpo2j8F%2FF%2FUx0Iz3JpWovBEZtlILRMD694LASS66VlI%2FB36J93%2BU9disYwhGu19cRiU4nQMO%2BExckGOqUBn111TPUwewcnCL2mwSxIgAz1APGlkvaU7iFqn%2Bh%2BFa8Lg6RFBwAz4XerbBRCiUvxPDeHw6W5aPzMRUT8PZ5Ibh2XAriXgl6eL06wH8xxcOImHGFQ46yeXNRqgvtpLHKjlkhyZtkbvNmOBcHKzCHuEVm%2FJoAnYA4bZDfDN51J8AsMW2ArKR%2FNMbxyWl7zF6UN70BNCizHm43l1L6Vy%2FYa%2F%2F6Rzb%2BC&X-Amz-Signature=14c8de5442875dcf28a551a25c3f9adca93775e9f71d40bd5b207c457f8ec973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662GITQ34%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIEKOUbyIADiRHRsQV1y1IIOoLiQD%2B6NVLbFryHTAncKFAiEA4GYOb%2F2gsVI4773RxtRSyOUpO7XIg8k0rHP6MgJVHB0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHnNP5MakEiFdWDWXSrcAxKnKhueQLTwgR%2Bg4Vp8pfYofWgNVMT8Nfn2N%2Ft6yn892MBjvMv%2FnnA1oXMAdrZ%2B9FoXCCT5HEr8Z3hCh4DeDlThuLjfdJTizugOL1uvlomvDP3vSGkCFVurY9YvrxS8a52cO2ryu74WM6vYtPeM%2B5EbwVFfCZl4oA%2Fd0EeRKVkv2K8YWQtOo6a%2BA9ptQOp8zvW8853yNbw46ilmsUjr2mGlS4UleCBdEcsOJUb0DLmzcgf%2B6O73MVQUGLGLFQnbh5ZNh3tJutTQmbkYEqANDLgROB1p61pq0mDhUgWylkaji1Y%2FMd4mLxVPGNnjckQzzqkhzdC3o3Ck3wFOB5GPaV0xZ0hwJ0wQtenuXHbU%2FSm%2B5LjPr1mFaVt4yscVun6cunJkWb5ftPsZnJVITRmBFy89dPCcSfWedVTnRw%2BFS3ikwQgIq84N4I6X3BMfY4gvrlhitufVkknkaqR8nHP0m2ABczM%2FislosZ4PzRKSv72Bd6vi5ovb1JlSb5AijnwJv0kN7rh9l5HP389aiSDggF7T7YKx44lQI5HvQKcqwheW%2Bt%2FTiu14sA1YJ6IduN%2Ba4pD2qQ27NOkjmlus6GtTxpVkrQjuml0vvJKeVxYn%2BbKC4KIPHu3AYk9XXClaMJmFxckGOqUBN7g90OSjJQ%2F5Klu88mFfvy8jxN0UWUlyEo%2F4ud%2BIYZYT1kbs5RhyIXZaD4rkMJfDU6GIhypzbmQKfP7T0fYGunJBAgOr5eM513pzUbTPmOpsaBlh6atEhzOAOaZrkt6tflkGq9RNuyf2n5lXySCX%2Brm6P%2BrSGbeOcDPBQv7fYWutu5l3xpzeYRXJxmJSXpFECJAuBDXWtXzPjMDdA9qpGmfPRa0d&X-Amz-Signature=0927864366c1b382fed23e1a68e2fcb5bfa55b0a74b713155ae3efc0a5500db3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

