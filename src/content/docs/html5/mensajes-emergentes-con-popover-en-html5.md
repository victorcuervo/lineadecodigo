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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ZDRNT7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T213715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9ebhOquXfXQwzviURb8OgwtcLnAzTuwdiGy%2BsmsjjNwIgcWY6AmGwQnybZ3ChgSgwL64cICI60jZugruj0P231NcqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtGhkGAMOCExyMMYyrcA2%2BWYHeNYKqAiSS8Q6niPG7lb6BqsExmpZWK8R07Jc15MNXkN05gTuRmPmH3TOndC3ixk5xIqity669iWRVJPD32qQwm%2Br5JK4zmF3hPNgVAqLTGNQ5aT5DBWmRFB4oyp6M5C1B3JO5xUkur0SHGJGQ9dcUt%2FKojzn99JPTOrNl0A0pJR4HtOwt7Uvmw0xL%2Bp9BhbLUZXDNcZG4UY7T6ofpVpFBqVfGWtB4efsCaVLYkyewGUaS4E1%2Fc2NMo1nmKn6pkMuQH4Q6mbAzxzTE2cu2eocLUy0pWB002V22VafTBOrPb%2F4YbD5Pk6chjE1OkW6PuE9mNrBPEHiSmhFgddF553BqYKW8jzP4KPb42c3EImPfub7VNtpafbeXmAcW4XrvW0DOKY8JA6ErqIkEEQ5K9H%2Btav002SeX3JGW2h0osy63wv%2FJKo1q7lvFw5API2gq9vSHHiQdbRdMWVtAiAkh5S32y4qJ2sgWNvPo4Oc9BUqptBpOsY06XNGfzuZvDsY9XOaPUREUGieHeeWzgdqkx15P5NDnHD%2BtvPvR1HfxPP0jclwv2qF3CodnG%2FsQPOt31pcaBanszw%2FgX7joCn60lCqVml1f%2BK6jTPcoXTPAouaoMwFi8Y4EuQd5OMIbH18kGOqUBCnEwUF6AQo4wOvAjMJ8gK4ks%2F8N0q5kLjUS%2FYF5YNd5%2BS5N2Ee4jXGBEDdcUlmPgnULbFnwOuI47%2BTH1H0%2FpjTKJ2XZSIwtzPirzGJH0tIObVD%2Bm%2FcCaiDDsiCsy2Vk2Bh88RtRHBKArdX2jYJn1f%2FQc6WTk8STDM9NC%2BTC8mTnCY%2BdCkZPsNjgpEDUcfiqh3pgzy2VzVHQ1cjGwYFYLX7SpbViO&X-Amz-Signature=4234f330bd128692758092d1140ba89bfdfcdd6056fd979a482e7213e2b5938a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JMXTPUL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T213713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrkOvrUNwZklnoUjiIJ9zcy%2BeO1FXYpnID%2F%2FuRITg18wIgWkjODtbA%2BFQgeDc5FVoxaVfpeel2LqjK7mEg0amTsd0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOypvHN%2F%2FRK8fPX5CrcA4tyUf7tCWyZuvJKb2X75A1ozNXuybnvG9Hc%2F%2F0vNXt%2BQ%2Bw7NfzAtgLr06OwXSD54cIA19433doD%2FACxF5HjwFtn3WIscY1kWEBOgOPe0u1AaIW6jLgr2Uakw0WIVDqtEnRAKbK%2FfzHytjzg1Z7K8fenqu8fmS%2BDFnqYlNrkhG1I84b3yEvEw3syKGifeAGbtq8bLywYPf2%2FTPsmJuk60MwNhIhiflV%2BS4YCKqKoSCoT5GovNtBe5d3N0Fv48ADqmHKzzWIKpSWsx%2BQF9yk5%2BMOOyQ1bDHY6yaRt6x%2BBEfAApd2cXPGsib%2FCZ2CeW4Q94TlPIyegHeW3wUXrpK%2FwrPbmixmANRaM0sGUVkRX2OgMTth7b2B24Bol6CtCLiJdAWlhd86XgXZ9Ni9GUfJDdLrp%2BSiqRhhI%2FdRKb3o20JKpLT0uDQOL6AKV%2F7TuU%2BSzLei%2FUlwA5y7Imx1hc%2BFXsXYQ2CMzpDiml15RdIICJQly4dXCQEyJvMGh65ijuFdOjOXM1d8dAGxZ9YU504ppIViWEFlvwr8%2FQsapTqfh9aq7gL3V2Fgyqu4SSxh8KTz%2BdXiwm9RZpQvoiYJ0v7%2FBhlmUTXeY4ZXV1biJHMtbR3ZxFMCkQPEZUQtqqSLnMOzH18kGOqUBfX7wi%2BKpVh25%2F8wvdaw2TGeoBgX5JGv99K8G9fSyh8PmQW7D2HFAopp5vAcLQjJR2oK0I1gWEoE32L%2FmZ7Rf2h73%2F5LOgoTY2LSp3CMXu93yEIekLycFBa32lpmJqmNLlFCFPsHm2Y09Ar3yuPIQ1y4Fjms29LFwOanHQ5THA%2F33bKu0o%2F2JL6Mnofmv74nkRHOox1yNFHSyFLM8TyoKLFV2goVY&X-Amz-Signature=fd2bbcf1ee4831658f459cce25438c2894a55e99097049fdca1a59934d984aba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

