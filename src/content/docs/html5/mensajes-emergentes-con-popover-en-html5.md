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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUUXSZOI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQC7R8lNRwgH7Px3et4vgmOiPzqwdfOVPq1whBDrQH1OVwIhAP6m39OUC6yx27O1RtJo1WOKhE2BFobfNEJzURx5hCmXKv8DCEEQABoMNjM3NDIzMTgzODA1IgzzDa81zanAegHr2kAq3AOHbYyR%2Fb4pnIokDwp7%2F4VFHrcAoRQsQItPVdnobPoUg0b4XL6GaR6XrtMbSRPW0SKKIu726bjb5NwCe2xOYMfBg6kaVVIgU0Li5GWhMsJtGJ0fW55ezJ8obYmbE7kgfiI7MhUxNFlyi8BN7EesL5ZMLyZtOX3wQaa9OXNlc%2Fsa8wcFjF06v7vevB4FVxDMQvGp4poufTPgyjLqrAJ1kmZkKaVGbmtTrEGuzUa%2BF%2FvtickmS8adohVQ18BnHDaDbWAdnxaXsVOTHICScxllVbsytAEGoG0XPy2iLW%2Bo2gpadYBB%2BePESZGOWQ0rW1bYgtOdWTW8ES10xlH8ExpdYYeR3nVQq%2FWqRMTO3ZVT9QUxA8fekfv0Q%2F87Abd9wl8c2UP1ODfohrHKB3%2FZHEze71x67IhBplWYQsNIgQVLw87u2HvXQzv4VhiAIVJp0WgJmvwugiJw6JjXjqwOhYzpzeeoSJddaG9p8L4Z2deYZOEaa6qnC2FyXHD0HcwgCZ8oDTk0AMphmtrQ7L87sM2GnHML2NdUEx3okQ7Jd8R7tkzuooXdjoSs3xN5U1CqF1P3AtUv%2F%2FSkm%2FL1tW5wlUm%2BIwulQSThqmXQnRh%2B60AL4F4AmJs0W5F1jUpqzvcKbzDzhcXJBjqkAU947IXlLKgNiwvl%2F8yMnNV0QKVExJlY8Ngl83HwbfdF8rtotkfAUPUYoMGPvqwkqQuH0UUxIaud2B%2BlCHU%2F1k704896dD15NsJXWLj6ihH7k53E9j%2BnfIDlFPMvSFucQD2ZmxJGsUl4P43%2BLqSb6GxcVb6%2B2Yx33tokvZNOp0s3WcQ5qiqkMLo5rUBdzgucCIxnYHxx6RCbrGs4InAp6coy03H2&X-Amz-Signature=2532936da1d765cae710083bd5fbe714a4e2ec2906562f64600a9ef731b111a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KKJNQ3C%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIH%2FYZxwhpfGFMtgOQ5O5UniyeuqoOBzualthA1iozos0AiA7hUVikNjESH5ohb5f3O0nhBsEE8Hz8LNIV6M0LquHwSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMkTqGrtp1Ha5g0bCCKtwDO9RH3p4UR1a8nG%2F4FwNXHLEnSMX9mIcpCWTT2RfXT1%2BQgBSlVz83u6hJnMmMxGBZNvHf%2Fhw7fcgTAS1oSu1MtvlRRCCBhOaW9ImefqdiD%2Bo0xf3KGQA12k6%2ByihplqYVSu6dXy7niFiLW5y%2F%2Bg4qeRk%2Bw792PsBapdSNPpyXr17BsSf%2Fzef%2B7VPbHudcANTHjYvXuQU7NRaT8mBTrgHAdV5%2FgJIGv3JaK%2BbtZKCKeeMmYE%2Fl%2FyaRMg34l9VVWNmLAs3AVw3xAactDYB%2FXBoHYb825h6dZyFlnuZTUDsfAjKrLzy2PHTCBh0mhf4R%2FTqK6ZsZvYKNjyxm1maHZSGy42s6RocZoiNd4%2Fko%2F%2Fj3SaAx%2FmYMi5KQHVBRrVrpYch0kn4F4wHNmVUHX8L2SyQ0akJH%2FFcivMi65vgKNCLCuWFLB4OztVvOHlgWZJzQ3NPafboLUnz%2FqLUqTg5sBL5XE1XkG%2FUWKRMjYApXmxmcjnwklszjsxKjz2eA3gyfDeCrp%2FxOu3MVuphiCiiT0urSn0ZCySVa53wshWp6DtpSlwQ06r%2FzFZF3WwznA12o5Yu%2FBCRJQo%2F%2Fv9bmqoOBJm0Wtq%2FjqY2kRcwZMdeu3Cps9iREVGd%2BNYMMV3QZ5T0wrIbFyQY6pgEb0X4Z%2F1Roh4u8dLskvtJPBcSzO35Y%2BJl35A57LYSNxjOS0CWnr0N%2BiJW%2FfXJWnaMnfHGdcXGJEi4E1BCXmXR4w2PIPgjPrT9a9nSCb4XLpQ1HdZJqquVyoeSQMC9KlGVkyWefXBH%2FbSnNMFPfJ0%2BPNBrRCP0qdZJyp5kgICNyzWYe%2B8ws%2FUx%2BMfz%2FZt0E6SMXn3s6F653mL6SdMhEfBU3lEhzAd7l&X-Amz-Signature=a265bdc93a607d02836f53d3c4deeeea6b3f52ea9edfa453e4aef9e1675f4eca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

