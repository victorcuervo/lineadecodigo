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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666APIQVBH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T004249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTicuYwPrenunsvFptpKUD33vFtT4fE8TjGS%2FdFmQ7NgIgBnG5G9dxcCar7ToAtxLZXmIroZ91o92FqsK1fhcFsV4q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDNna4PYh5sXWwuciJircA7hjESpgoHpE7vYfvvirN1DEv5a5QmB37RejCieZOUKWVfL%2BwXiEpGn0WMR4Nu5CgefjWbPehtKpO%2BQ%2BPioQKkwYJOZkGRC3baqDVZ2hzMldCxVcRXe5PTIco0U%2B6Y97vwI9U6xfcJZ%2BOC2MlvtZJ2LJz6ATYQI0MK1LguYAQVKs%2FQ%2FGeujcxhRxx6gu6o6%2FnKueRZT%2BcwsuDtW3oejJAVWFNz8u7JEUXpIMwkUA6p1DaI%2FOHCxeWBHYV%2FN%2FrpVreOJu3tDs4eZhhXFYUvYvGYddsRoIjfuRzvc7Of2woAh4hYburaSW4a%2BbQdaG0ArOVsGkiu1jkLiUepVAlJVUsJTa6SE730040iy%2BuCkSNx%2Bo2gnPJC1BZuHXZ3Qd26pEtz5uhoqpQ66UH2ZxzmkJW%2FHHHbyyMyyj7DUJBB7rLbzcWU1uL%2FY5SbBIkkIAtyy1lk%2BVJnCGKXfxNysmHNKX77yj2U1CSwP6KtZScByVMs%2BEm4fFGQAWS3WkJDhQ16P3D4KVnZOHM2%2FNDSau9ZcGa4PaeuznW%2BcRIWKU%2BMJDTmSKBn959efolaiNJFFIgWhwuiZ5ENebzU7G55ScmWbgNoX1mvVCwCejhXu%2Fej9zCEtLPNm8LSxJqS2KzUI7MOfozckGOqUB4kQMfBXSJ9lSvsrlfMju1DFO2vKlY9C1s5%2FxvhcZV%2BVaoEIY4Sf11iqjt48omBfd3L4GvJhMs11ZTyJG52gdKuV6F3IOt6GDwOlZyl%2FRtebxux5m8RxP8RPrwW0OmikXjL2CQzGVXP74X6KK2lAm0thAaJZnyPijC7NfmgRg95v06pK12rXCFvP89PppVwKBfbRzYfEeTELAzN8hPG4Eq%2FL6kDKx&X-Amz-Signature=0308aba35e912929ac2f6fad150414ddb8fecb3ec14a6e9f2f403376e9b8c8d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAJ3Y5U2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T004248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEPAV%2FUdM698UEZaK9Kcfvf1KC9qu5NSd7LbjjzOZ9DwIhAOEiXMmMz%2BpOicBhxSLxNg%2Bj0BBMEcD5BGXfpJpE8q9wKv8DCGkQABoMNjM3NDIzMTgzODA1IgwJF7S7tTUp3CSiG1cq3AN%2BgrWomEFH0z2XahCRRfy8pLbbH0ZB2tjtL2ydoOyXfrlJtj8XdJQZnd6FuITDXo6rBtiINub6mqW2zuKTPFr6c5%2BpA1GAHesKR2Jrt0i5TUk5uwT9LgALQNWL8M%2FWGsnn%2BbaPnUHB8DlaHrHlF38g5wRUyUdj04i33n9uLpqCHVNC8Ad7ZcfEUh4YnBfmW77p0Znb36FIe6EEt2eIvls2qtVvfdxxTFFJQPcaLL1CjPd4zMt6lioxptcTU%2BjsNczdQ7C4Tta50rFzM4Pqjingh%2BFNZXE%2Bq3cA80%2FJnW1oQyUPLgtZSJsY%2FO48Vdbx8qCJUmhwBf1Rt6naNZ1OhNfwzrEwN76ax6yxGUROKdHUoAYzLtPz7AZfXXgDOCEpAa%2FRkOYKKRx%2Bkz3nYxHxj2gtdjRYC8SpcUNIvU6P17LDcviw0j9fzBmKEQOhc4MMN7lcsJ%2FO4QkAxRs3IxF6zPvj553XRrdq64E5LPvcjcwHPxhDWOQFUDx64nAZUiST2InL7m90JVia8I3fAYCnybM25p9%2F9BtOqdTm9m0YNVhqbxA3%2Frawe8Q3109qTak5HVLhPZr%2FiFAT7kA61GgjRnkFQc5PPVtv2tMe%2Ba6Ijrywhe8RV68p%2Ff0V0Lkj2jCS6M3JBjqkAWklHCPo5rDKaaPTPDTTK%2FGn%2FvMTG0LvAoAOavZa5jgX6yB%2FABpN5GOsV9v2fQsS6weQbBs9eHe87OxwlmKAFL9%2Fm%2FC6SYgsG4IWCn3%2Bm3NRIls47%2BbDBRvkfrLeqc%2BFa5ZsSWLDxIRI%2FOA2JeCCl8G4YgVyiMtHT4%2Bq%2BEPLFwKN2poHlQGVRDlClHFmIBH2hfuuBEHlADsop3ao64FicaKaIOla&X-Amz-Signature=2fb551a775ea9b62fabcaf1980a109ed7134753917f10a32f2ca6b3042865348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

