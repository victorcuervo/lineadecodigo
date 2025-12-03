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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GJKRWAC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T073657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIED9DAKtq7dkQ9%2BVxyCtDK2m3lh%2F9SKEeDofiodzcdbDAiEA6UWRPfTB9TnoqekASaggZcqNMLDR%2BdK77bPjCOGnMWYq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDCRG1uzIdTAuV4LOQCrcAzcVBgO2tZu832cQPeIi3GMBUgkWEKA50k%2FN3xZiJSWdSrSDTiJgOzBg%2F%2FFBKlRNCrS86ct2xt20KnBi4UXw%2FP0hJDQF61Ee7s%2FVanuh69hNLKj%2Fc3Ett2al7gsxkeri7gq0nvetI8HBcsi7q1IsYU38pbKEkFjEwdNTnOz6i2qfPEK1gzFS83RUwlUAVCcMeQhvvFGg8RNCoYYYZzVr0MsfDe%2F2wshGdMowJwUC4RCIMcsE8cjKavQBahnASM36a7XHsOLe2ypBlGYdaTHQh0Mfbm47rfLlTThq8k2WII3Wk8NhPR%2B0bgKSZ2K03ZUNDxJHbzLqU6DgONCb5EEAEvVnZ8Mf0BPYGpwApT8LG1j3Xh8ZQ4PCb3cXDEHJ26IM6S2dgr4CQifZ6I%2FrRU1jmBwUi5TzfCovdMSo%2Fq%2BaVs2rNzVo7Vg2QdP%2FDCNFCZ%2B8uaalCtCGc9zbKLYVfYsBeqt1PzmhXps6%2BzfVDz%2BrKZHb5VwH6Y8vEztj9HhesQ0D4AwaBDM3K0y%2FuVUyJ2f5CtXJ50QlfpwnsOeORm8casJ8hz0yIrawMUo%2BLYNkX%2BfqsArC1l5IoFNBHrcPmDoMWQjxrcQzqVgNO7yl555K4pFqAa8hv2oWx31q3DjOMNe4v8kGOqUBmIWnC1VW%2FMOrneXGxsGvLtIcVcWRm9ceC7IYTP%2BwEaX1EKyPuiLjDqsPNi%2BzpgIN06TYBY3MqaCr1115gzccQL8RG5B2Q%2BAd84WWmxs6YVBInwnkLYeT2EKnXQGtf7cZD6egIT9eRGnDoikSulioKW5fho%2BLSK%2BAmms%2BvIiQbOkmjcybskzCKHvLLhTT3qBKoUJbmdg35lnW1Y0UT35G%2FZke0sX0&X-Amz-Signature=db3dbe0f9b89cd1d3825d8fb470093e49b1d1b9cc638eaa6a08997319a32a01b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDMVHSEV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T073657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIEq1vs662M11jICB0NV72hCdeeTHe1nuFwu1zT%2Bo9COuAiAXez2c3dw877ANzWhSuXUFXFnduH4ryoPMS0fTaxXc5Cr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMxvefDjbcaf287wk5KtwDQkgoPzI%2F7FzccRi8Ylxr9S%2F%2FsCj84lljVIYOIZ%2BJnisarUb5KhAYRsU3AGMzcq97MoEecFvUZaHZ2Rd72zdbqkVBbHhdvhXuO%2FLKkKw9Q681dcAW2Eh0XEh5kQ787uYf6NP5HkxjUYOLScX3UTd8biM67Agfsj9tDUyWXkAUIkFPAGbJdbisbmYD9TCcAFMIgWT9WwOYPDDWQoVZh%2F3hZiRNdamMOUdVbOZSajRkIgQqFovVwL5enth6de1adEMujY7V5QGuLaD%2B5%2BWpPKB8ib1YU9dL8ly9PnfL4C1NSpUS8HYHrwEKAP6Z51cM%2BM3iYZBwxAyQyc1juUd3ZGUGE%2FjoFsq00ifP3D0yOZcKJZ0q3m%2B511jRzSRk7xXJdaADNR4hRFMDjl4OAkSHwi50PcVeP4y0BB03ZvRsfvWRf1dNBS0Fmig70CDDzYMRBL62v%2FSgzgh5Q%2BVm3gDUH6nYAvur00hYiIzvd4SocdX2byhi%2FOM6ZcB%2F1YWoFzUZ0sfVzKLZMtoOdDFrA3wk%2B0Ac1ffI3OaHyO640zXOAsJiOs4eOGRsSKAYGIBilI9%2B7dQ9SVGvf3dS52QfYwpBENCRfQXoqBgNWFt8hzL8uCIZ4Bo8Cjdvlp6JHCekaF4wh7m%2FyQY6pgEpVDHfO3r9sU3Hbl0uxzOO%2FGMJVF4CqMa3632f3%2BwyiZ2pw1itmR1q8Qyp8nav97SHM77LyLVLs%2FDVTv8lbIJ88y1ymzOWmtUJ%2BUcVzK9r91X7FWJSBbZPJCW1920LgBlgou%2BRb%2FYXGauf9EiTlD2cIRahsKnr8%2BOGL8qU1VfbxdbBMQRrFlWWdzSOFvNsaZIPk8TOfilIky9ygOrKCYDw0h23Ncmv&X-Amz-Signature=846a6dc669789f3449ec83b443c299f8a15a8614cb3db43ff40cfa157f0761dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

