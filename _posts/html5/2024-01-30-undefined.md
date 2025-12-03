---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6S6AC7H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T083426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIAWXWLNnFJDTp942tFuY9JCFIIqfVOzE6q6Km79YpM%2BpAiEAotScK6YrMPo0ZIGaik%2BkZxLUwcGJSD5FzYtt1mMH5Hoq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDM2%2F1c3nX3Mzg4K1vircAw1fuYjrLbZnSbRQ7W38qocDaebjl%2FRWsSK8qj8uvNm6yJGXMczDawj70Saz4W5Otbo%2BKksQqO9nBlBI03W1ZLtD9EGNxZGX4ORXX%2FqCQ4h5egO4avT0pN3CP%2Btj84NBxNISKtHGvFxagj84pkA46c5wQ90jSzIiiBvbKh8VaZR%2BgiGxstaT8jGy2HKfLEFt8OLb1%2BFUZL%2FWaAHwYNJZcSPp4a%2B6xDQy5iIniVA4oet2jQ0arhMNsYZk79oPxxRlwgc%2BiG4PJUysZCCE4BZr%2FV1Q8TcoNICUZKjaysqAK9FU8NFF%2B%2F%2B7vRv5akr8FQ94V8hJETrF7lCeueDJavUCV4VUs%2FElSVCjSFWfpgmdkqL8PxFUJgN2WeYezpRBcKPsKfNij78WkyH8bachRyTE08qYOwG%2F5fVLK2Q39cZcwW3KNtOJxqQFHCIQRm4NuAVWqmf%2BTs3RXYl7%2F3q3hMVffqVLYtefPE%2FakvT3Brzt099ZNJuXi%2FyOLMw6dZaVy%2FTKJVf%2FgERWrPuhYy9kObPg7xRpoltsJK11XTtU%2FDtUVg%2BuaWzWXeCiazE44X21LlTZxe6pKZ1TaUIwYoKAEfVfaCI2PGGg7VLI1LhiinrQuZkxXdKthDwpqck2dJLIMP7Uv8kGOqUBoY%2B6lf%2FWU3uWVrGC3cahFsb3Vj1ErXBeL9RCUelqKYGkzz2HnnTzg0SrBM3o0gMY29nUIwBjoq3GuPR7NhaNepE5Hqm3cYLFXAN6tuYvecDemxy%2FYusOwgM0W%2Bxx%2F7kz8Evm0kXUrGvMtns%2FG8h%2B0k7c1jemNPDtIMd8P%2BH%2BJtyZiWFwQ%2BhZKoYDXnsshtFKzYOr8w1ZRe6Fx0Vzg8tdj5yabGbe&X-Amz-Signature=53ea1afe63f173fcdc2d6db7f6064851b4814411900d5017f7a6490c4af6ddfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEO5PRJR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T083426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIFUnJgHiqh%2BGABbjJLFEODx9fliQLkpmPkJS2LVbuc8pAiEA19PN0cBwVnWK7V%2BKZ%2FASuD%2BEsEj4jSLNtfAgbypyYOQq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDJPJ8LS6XUWdFLBahCrcA%2B7ufxTdu5twtfCyTVdCx7NQudozUf7QoY%2F93iLifjTukG1qpovVinIBkmGOGqLXHEdYSJLBdkp2vY7lCtzHtSx%2Fa7sggkKmmfUrzDFs1m4VljWBxcSw97%2F7Dc8NFH%2F6KD%2FtukILkpmch%2Fo763sJMIHqx0vqJJTcTz8W8xv1N2wyKKCe1J%2Fl1luByUFcfBd2S8ss9j8q3tg0RAy%2BdCMD3VjH%2B2XzTOnX7vqJwBQe4NgmZSattsVWZfm76hu%2FbRbpXdVuDCfN1rdeDTY1u9WAbrLmbEt5YJBH1BSY%2B4mhMH9Q%2FWH%2Bpe%2BL8SfmWH2NYhTPpB8cPz0Hi%2F1yHcEYS28Mu2CJHLKUiOOg%2F2rNF%2BQ%2B6WejKiGT5gds9BZhJ8Aq0OU3E3GwOJz3unTKDigyEBYC5Vh10CARwClz7M6t61BkcJ%2BY%2FUGn2406oeOQ3uRhT56qbtQHz%2Bx902EnfohEOfPAtm5LyN12NzlJSm%2BCBg5CQYYwGxWNhgcHr3xYoNoK5coRbcsfHVMZWmooyq%2FEBNYw%2FMT6xtY41TrvRdJ5H9Z0G%2F3X2LDjJxviGogPSO%2BRFKP8JBbi9CuN7EtO%2F%2BPukLTcqnRbT2%2FWCpY8688RSGCS437P42z3s3OMENAJTBRFMP7Uv8kGOqUBZW%2Bd%2F6ie9oldbeHPY%2FHjrYmxqxwxSojH9Yq7YpeiytqiOBwMzjNulv7T9LR4vk0zjUdicWgjwP4Ui2vWFgMvB7cjZJvvQs443RT%2FiCq3TThW74dZHeRuQvRoUneajiebaeLXYal%2Br1O60scGPcDJOd%2By3%2FZ8ld77wMlgn22gOVLWphLTLAvz2LdY5Nb6EXx7nlt2CQqNpDdhY2CHoBbrqSxfsqlw&X-Amz-Signature=df3e63125651811b39793af7e3590faea10533530f6d0e7c335c0f974b489a09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

