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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624WCACYF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T034917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyf8k2fTyx%2FD1EPR3tog1pP8I7clAxq7qBQ9OandRNUgIhALe1LOIF8zjBuWn2Cv4K077hnKC5qtUo%2Fgessv%2Bt1A%2FfKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQcqTfTUzaHtD1Qawq3AP8x3LdIWluk%2BkOsYGgVVUq76YMpvHchGENsJR4lWCN%2FISaGi1pPkOfhJ3rFnjV1Q18UIW9NtWFBgCCEB3Ci0UgnyHXChC7vibgdfCT1%2BD%2FNQRlpV91JHXgDn4IHzXyzeXjqTXgHUpiRo9RcgRmViXt%2B77KsK4ErexN9EPBo24tYxgCKSIYzJaq1xIuOzDPe307L%2FxIKJht5cdEIyBxoN970%2FheTaG%2BWFs4i7pOugpGkCJyixlhuRqipw91cRrl0Vg3C%2FZUpgBRTdPr05friyHJJoX%2F9DvENlP4L0SehcnY68I2Wh5Icr88vuyxF%2FZk9mxgyMrQtMT2eW2C%2F%2BlzgpQfTs6P1sV002xMuoB%2FyIDzu5k%2FSD4xGsENPSWXtItSD%2BJwm7rz2OKGtdGvkBM3KDVg6%2B3ktFpF3YMxwu%2B%2FyKMJI%2FkdMUvtSoWAPvTr0G4KC%2BT7uUcfN9WYSiGZ%2BUMlNScvOGQKJobx1aBoVfM3UfScvECsykYSpo2BbcL4mw89d3SDamVe4tzy5SKnJ0zn5GhghRXVQnNRC0ftz%2Bztj4GFk3OVamJcbFl8BetvlofZ8%2BH2y2wd9WHa4Sh7SbVVqOm%2BwYMS9jHFTOIPc88wSFNtSR%2BsoiqS5EuEN%2BFoXzCglNnJBjqkATv4uQuEaEzVZr5Y71yj7KOsmx8iUvTv8aQ%2FPhK55pdHTbufvWWScydmr8ExDZdb9mCwY1iLciW6ACkZfs0b6SLOiK9Xb%2BcrRgl%2F2cLAimZpNcI5u43wPV6uqBtA4p2vsayVR5R07Ys2kfRX4BF%2FRFVC4mG6h9ALKpYA38IrTyBJWVwNn03B1kMUz9Vnv0ryFN3dvw5jUJikaVMpSpcJ2aYNQ1P5&X-Amz-Signature=096283ad518fd59590487bb52f2c6e2cc5d48ed3c01a66aec0ed80820fd0056e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK3RPTCT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T034917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC37EoY7UheAbZBLhtYwGX%2BUQFcGkD34prQ1hAEQ4cw%2FgIhAOW%2B94VEy%2Fsw7FGeThev4e%2FjcaXcBDWo6bpgRasMjyQNKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhGVpLeyeURV5SNIwq3AODsiYJLzPbXy5X%2FKdf16ooLQ8BE08N9KyOMdJGup277l%2Bf9G6nKeODiPX2ByWqef1ygTqBfmt4mBKWTLzJXg71V5G8YpaaQV1VQnL0fKatiBfOMFGWFENKS8GOaJy44kV8wvoBQRGrEsntcSIW7p6ObG3%2BxTat4Dnkhh52c4KiMsBdc0hSkLxL6YsZ7p5T%2ByiTK%2Bez2JHwJPIoPgeyw4mhG9K1B%2FZj60aAaz5QNK1K%2FctrYMleVMoZl1RlMJLNH7A6OFzGJUMg%2F62kMA6R8sLM6bALBf5Vc%2FGub2HMMFcWKbsjhhVRZKrZaxlM9J1dhuVMjPYPcRr4HjdPIRiUn16AHdt3MQsz5%2Bvr808Kaf%2Bz1NdpeySoFU5CFQelAWE12R7MMsrBgzi6xPTgxY82H1RwZI7jJWm8YU3h%2FcX3dK6sUr%2FCSZ4wD1XnZfOg8ZlTagCo9MNN9OUPTyJz2cif49q7y4UfQWaGHQ%2Biy8apTQeRtGH%2FWh8j7bN3Jn3IrXkdcmyriG1YtIbU87t4js5NEgC%2FtTAcwKwcBqAcTo3kjsX4x3JCH54mfCtTo6Nbvqipq5LFomB%2Fx0If3T9SUphmSlXwDyveafeuVO2AnQjSOL%2BhwOIKIdrW%2BoI4TfvFxDCq7tjJBjqkAXbqhzYITf3NPzOYedQKFz7NHRYGBv0xV2B%2BjrMO14E5wz7GkKQjcLJ4oii7x2fkNOTd5CcP1st%2FpI3Pda64pSkq9VbeGkcFO3hcUTS1bJ%2F5lzthakkUtkY9HF%2FneNQLbykKB89Pjo06GYycy62aXsIFk%2FA3bks9DOEF9hz8ThuxQgUbYYWTXoJ8k78W0CBkTdzShviURH%2ByAJoCprT0NT50fe9g&X-Amz-Signature=e4d31bbb339e93467db329dedb07b3adefd03f8e57c55649a90fca3d61cb064e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

