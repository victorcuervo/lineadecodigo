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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUOFVSAY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T174614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZwaUxwX%2B7CxgAosuXI%2FuE8xi1y%2BxmLdjp15GfTgfDegIhAIAHmRTe2TvEW5oPDyB5xyDysjXbnRa7fXLARQ1vYzn%2BKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7Mvsc8ZVrQSM9yLMq3AMql7G6MBB1JxjVPjU3hUi4HVYytzxVD8DU1STMXGMTBpuWaxUbfs8JMWOpozVt8Yy46teDVJhlgKG8P4uLfC1NSfWck2Y6gudy%2FROiMrojpNOLy37sMauXqRAx9%2FoHC3H9saX5qWyGldYVNvPRjmbR5m5reavKFLVjcFvaBwcWZ1QlmtYaT9GZiOYOGWZbWjcDddeGqkPb7KvmxWg9Kwy%2BSr08yfu0NErpjyQtCkK1DLQh%2BwXuZrliyVvDpWouJtvEgE%2BtbsI0JqQOS%2FNAXy8lv%2FBVDnnLgbu%2BMIUwIrWL4VZg6e3T9zmWyaYCaAqXsha1KxctKwZyOLsUza%2FvwF%2F1yRL1zEIqDHS0aNGkzUrlMIHiS%2FRsL5ydsESdFs2%2BM9JWOORWU9cnq7YrG9GUIxjaVzC5muDKSl%2FA4bfL0oFQwMDmnxdOiaFqBql%2FDN9ZKhFesRKEA%2F5GNN86jVzdjCCoZqvr6BQDZfKjXxlszenOtZppy4Lwl7yoxtJzAbVN6frPeUcErQAV8476u5990k0lmBtdfb2nGKUDkNAW5ircc%2BpHui1qoo2osmbVt4yEXquy42Plr5qtcTEhr%2BvxDe2dx2kTBwv6ySFP75k4xr6DYMsW3jIVBzotln3CnjDDuNbJBjqkAa5D73fSZOiR7etZsJx7O0Hz5cOH8SjNF%2FJms66RsFuUMa8e6HjnYyxZRF8Tfiho9YiZFLfsBvcwQnYBTO2%2B5a6JuGJxTbClVAC4MfuPSU37CnrqIDjEz%2FQudw6JD4xSmsERFFnuZUl%2BZUNR4nbZIJwSK3c8eVEPjoc8HNJWJ6xFSs457crIrHD89UqMPU%2Ffq7xaekDQwxevtpV65vnLOuuLTD1D&X-Amz-Signature=def32e3d99e7b3ba9d677b7a08afbca0afa4f77c006b4adce3414cc09f64f700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVUNTH7L%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T174614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSYlIT1z%2FGHY7qL8d6Y9sbJYtRdShq2yka0WcS0bKGbwIhAJYpcjImPFqbvtFSdee1FA73JnkyXMyMsnN8M0uyzoOqKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoPG%2BuSbi%2FQiPYhRIq3AM7NzXsmtGzGq%2BXweyR47L%2FrSNuPOftdNaRpVi2jCIqqFJGb0YoKgC8Ayb3iVP6hGthhRNQCHnEP5Uhqs8Od1kaIyKIhPyKOAkC7gegNpr34T3AYOr2%2BgxOnLMgOuxVanmSdXa5T8YMdwv7u8XttB9%2BOxQ0mVawvejdA5vwFuE92pG8fAfWzLnn8AgXvBEcwd2X8lyWaHgIL8KyGQ6wNqi4CfrhyWGApTrBedKRwH19FFMtMLnUNpqr%2FnvJNMsjvHLavBQSqxqnaapf3v%2BOjmK5TUVwBlHYEsLQ6Nu%2FGvey3G3SPfvskYudRXRKRluD%2F%2BnMIA8UGI6XpvgUMwVtM%2BXVh99QMh5HzrzcPzArENUKLC6SYc37gkhQzo1C0Jr3v%2BKe2FS8CnfxHUAT5dAEF48gSSoDNmtwNGRLAFv6fqoP08f6hxAXRf%2BIrbvuqJrZUUv%2BX6ugXWb7R6c4fqtgh3dw8Q9C8ahCHBC1jq4L4nulXm0AN0cq7SFkEL86uAPETIqlVLMM3qoYo702SFxs%2FVDBlqXjJtAn2gJQG1hYZImeJ%2B%2BViljamv37r5c0ZSdg%2BH2T0au3YLzIzNlUm5yg2O114%2B%2BhgMLji0hdNv%2FUcT4zJr3o6vh4EPTsJDLxQDDkvtbJBjqkARoc%2B0n%2FI1K%2BtfOl%2Bita28pD2J%2FhL8Mb7VtPuHkeaYlk4Zft3erEyrqqG1zFdS%2FjD6QHOww3lbKDqQjNVwq%2BReGeuw7DZUmdb6EOMw4PMlHmUIlwK4XAL9m13rEzVbGEY1C7UVxsGKGAzXKiIGQCAbZhN%2FEUkf%2FOXyGQWhKKGGx5alpE9hpPEo1IXHpNDHVNoqbipE4Wg3SZLbRNQNOYQuGFAf7Z&X-Amz-Signature=fcae15f43b341f9ee8152685f8bf2f59f23e8651bd1631cdf51f05c32e6291fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

