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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFHG7N76%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIBvMDkI2vGelAnUAEM7l0eimhgT6eNugHZS889cH5TIJAiEAjryYk6Sd631cX1tByU%2FPQ%2Fq9d%2F1T77KeHoOI2%2FXQqfUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMOPNbyCUDkllhOcqyrcAw8LqpWS0WRcQkRJZXeH6LopuZi9pLjCR0MzPzOyro6FuxeMSPOUILAkDOwxfuTy8cY8PNRSfGuZR9ymm25iecBwt5EPiIWnDsTL9yHVcHTUnQ6c%2Ff03aJzmiP87GkrSCq3R20ZM5Xd0yO%2B1D0evu%2F3Gsvr2eVbLy2afjVhHCEH7H5ebYbrKeG8txwxt4LXnWSFpkl10C8HHaIZHZXet0ts4QT7K1neXC7Ge0%2BAKkwgR3JdHSsHDh7zNxxgNoXs4aI34wFy3ok%2F5I0XaI70jGUXJFEoZxtWxA2sQoS3FVqxGVIvfsK%2FfnPqvfwm8hy5%2B5i4IPHCt%2BNwxLhOuJd%2F8Kl2AbhNcPkrFQBTpMzVIVzlQxMRToRpqmLSShhrTF1g0wY6y%2FIe0L3Kj3ULmCQyxY6H1ysecYpxHUPxANIQeIYqbjtTjGDoUqXuHHmwgBNxq4ZhkqJBJB7p8cjjFLxyAbOeQYhSVQbOwxlVDtmMAbToPaH8oj%2Fg5egcMsgvstcuuvVRJTiEa88%2BON15KYJNv%2B3SDHRGgwSODMx5D1jr5WoqjaNhFFQgUWbD%2BPv6hr5fKxrH1U4MJ4zfc5vvxJure4SWH3UH7ZLIwF%2FUtSGxYME1jOYC3OXO38A7QtpAhMMnnxMkGOqUBFcE5VnQRksI2WUHRaLVBP5DSA6bWj2ZuiNw1FGkmLapRkeOwov5ugOYlZKV32W2UFaatsFCtvn3gR%2FENGWrSGv%2BwgSvPWj05jeQF%2BU%2FP7w%2BOOVpdUbCfmBd%2BDBaST%2FtxyonQ3ZVI4kM2lt6gTKbq4qr9117W%2FUfuN3u8lVzOeh8vz52zwtc0wZTTKjdtJeaFUkROvU6bOAsGtmOJyRTj2Gky37%2Bf&X-Amz-Signature=ea6f5a4691694d3f6e104c738943c589b3f61be6c60f5416fc153b278e4aba98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PIRLS4K%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIGTjlZYk%2B1NLvZ2LNs11YeIVnhBtmoCEijVO65Aq%2B0CCAiBF%2BMpAdh%2F5w%2B97YMdGM5taFKZICvFxgvKILoxxWzuMRSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMnsXSHqY2r%2BhnTls6KtwDBjtL1bLBMmLkkXpGp%2BHQ2HTh8EL0H7oiv6vQY6rnKB%2BYsSFAQHe8i0dy%2BLk4VcuXppHD5FsbK8Zd4Ad3R77x2293Zey0cwnfYqFJ6EGktK8nj9QUM1ySBRJvXHxePhHcWteyaE49Dzp0%2FBksDRQ22gSTSeSK1DCe8Pr4jTnANS0h7rc6OD5RRpU37V1Uk45KKJsTbQWwTGIKqGCmf67YStr3%2FADMd3DxueY6%2BD793tIxUkl3SY8v2BoovCUeHyO4NMCQmsu4kVnBYb700EfoHRGxmMOQG0OzHGS04XbfkMe70e1IAGXBR9L0ae%2BW5OgQGFJnu3qtoB%2FAy2ynmbWcEHncQoy%2FDf6gWPjZFWBZGAfoVtz%2BldjA%2BO6VTUoPMGvr07ihU62wxwy6cI4kbh4zUWuPKfNIVaei7sCGmdCSxw7tmGRI8HdIWPihTNKtry32U7k04gjO5LlWLqH4kUGeMdwOPTePTeFAuDblieCvvnXeY2MuyrDAMOgLO2GG21Ndes2ZmXm%2BjZuPLzg9HJl%2BVEGqTJa4FDs99Nwq9XCXaayDyB4f1VXm%2BFntTRJa0WnaWw53%2Fkx%2Ff15Uf3zqKPOhljbyovR8jsqHCFiC43%2BHT%2Be8lx3UEtCo2h8qN5Mw8%2BjEyQY6pgH6u9mJu0CSzy0eZtOOEvbnibDiH%2BVATDfThCtn44dLvtclNfXPBCV0F8wl3NragjQMON%2BbuPwA%2BSXEaoZMOFxFi%2FBQ7yYXpHh5S1BjC%2F4bFWjGU6RVIsz77QTXm%2BdrNkUH7KzZ3nvOQlOyHx2pZ7qu40P%2FB4fU%2B3C2DZ3EbQLQRp5RNMMAmnN3CuaSQ53nLIdAJgHD%2F5%2Bag5klrI0fGq3YwYtUMLYt&X-Amz-Signature=9a6ed615afc4538cd8fefdf999653347d1046fb61879f83520f6d468c8c062f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

