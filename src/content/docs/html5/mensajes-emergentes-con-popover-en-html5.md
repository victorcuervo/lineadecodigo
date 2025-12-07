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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MBEM4DE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMjPq5RNMWKe0CbV%2FwUQrveQZuF6mdW9rn%2FtSu3by3SQIgH8f1sOikADBRrNwqwTSa8diWhYaGU97VgJS3q73haCQqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAcPOjbQS57FY9k3SrcA04g4KiOzD32aEl94MZksbvJZrcTiJtWGlNbB%2BzQGBKpr42rlp006Ziq%2FeQjrP3DCCxN9AT%2FUc5LDFPB4IXBXKPdG57W1ZXO9oE4wIyGeR9wyY2LFFNSgKPND6Us9yagZvSGdx7W%2FjhsGfOAU7ErS7Jx%2FPMh2cpPrrpcd%2FxASF7Un2QxUghN%2FTUyLOIi8cXXTmdpCUqRSxfU5%2FuAsAfdmgAz6bNcH7Vj%2FOkc0yvwV34aeAdve4OiwaUwCKtVFJDRhKHfIj%2B8XaTSo34QyeW8joQW%2Bbqc07ZdYOsbqiXE%2B1oBkDn1slte54NtuBNUudDmn93byyCmauwd1cewDsL%2Bb6tWxWvq04JoewEeAM20IIQPtG4DhbhEkwt3M8xjs69oGYPEqCUUrkGzpdbY1x5hKNQVX9TV0QU4dcrAHNhsJd2t0%2F7aboIeR%2BOQhfQnfT%2BvlgdyP1AQceRAxTEpBJIN%2FJiujdGP6EuAfido71uMX5UuVb%2Fx5WAUsN6Pa2Mn64IArvRs4BhixtWW3SXj2ynuAMTLp%2BRyF9x3krIo6U%2F1MPhR7q2SxWS2Q6ariLGYIk%2FWW2gnIj%2Fm%2F716np92HSA0wq5TBF6%2FXeg8RLjvI7ABZfDdss5HA24YkvBrv6qgMPTH18kGOqUBH4dDI4Aor%2BILtXt1woVcuK%2FrY04KnklF9kzVl8pLdkSs15s6IxAknnzulVjo2q5MiV5G4QVshPJbbV7mopF67RmmGGX9hG4PD03dXjrsCDszwIUTwIs%2BifUCql0KEeupOVffk2%2B5uigQORF%2F4wEqGn6dEByu1M0NpdMPFgNX78raWQFxmJ5fpsCnwEqEl%2F0rB0HD14VlQwcgCvlrugw%2FQiAMAZ1Y&X-Amz-Signature=c244f6aa30744aed551a09b606f4aca7d6b5c305b81aa41f1eb78ddf6cb5cfc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJNOPH47%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKXasMY0Ki%2FWzKXmCKzmCB24wcaPsghDICaLJ%2F5v0xJQIhANAPc%2FdWU7VY56Vj8wCh%2Fi3uTMGheEx9Q8PLH%2BcqeeB%2BKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykSe%2Bv%2BC9i33yo6Y0q3APDce5hbKgs8uWLP7gNgwoGLDEUxAEug9Fy3rxL3J27q4k4mmWTXN2Spo3RoyPLsUH6qT63eZjZl16zhfSnI79aBvcFDDtZtNQOJoXhDdx%2BgyNSaP0liApoETvDkky11h3lIPw%2BO7T1jRjsDQSEft0k29MFzFv56gCXqC42DFVRMzrbYrnMKBfuZxhM6F%2BkmyfSstBkWw4y%2FrM5KnW9P5KcyCBHCs8wiQqZbb%2FKpHheiofbxD9EUlNwzaNbGxFzIQ7MX1q1cJcFUeMt8qiiHGlJvJblYJYVU6CDkSykbTOq8gJr28dn2AC99zfEEz19z8BzTsn37YyjsQIWkOQmPUNEmzmIDJa7Lce%2Bm5pZu18%2FbHwEAfc0MdkN5qMScHqJ4OHk2p22Hdz%2BIGX2Cvs4Vp2SQC%2FNlPfZCbYL7%2FvJ0CAUyqsa1YgsAMPt2AG422mMU9cP0Q0TfTq%2B2fW0nVqonr4DOh93jqY%2F7l3NbhGxCy%2F3eZcLcNAhGbI%2FZfGRKpl2CZgKRxC04nO6pgBk035fPzrgbgb9m0um0vyfnF0i1%2FtIY9BoBiYFVv91CE4eSjno1bD6naTj0sMsmzq7sa2icUWaddV1qoOTFij9BOLzDtsLEJAUhVwNg4dNZTOBpjDyxtfJBjqkAaHsDoDAT4itpMWM3sDL9YkfCek1BNOW4gD3w%2FHInaDYQBXUWzFSay%2FAFtZNd5qJ6TaV3J8BTNdaJEnHEoDiUkJ4UyqhLuKJbhmX%2F6rWg5Ywtn%2Fv7ZvkPYMxZbhYEfc62t335QaXE8XrN463NV58uDKRcHVLcL9ZLOLllS0LMj2o%2F68eDzhwZozXkBADwxiEGVvn5wLDgiTsgkXvUCfFiASMVkZP&X-Amz-Signature=9579241688e9e7e622365c666df996fa8aa149440fa460946fb0e255be42bb04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

