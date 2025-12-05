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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PE6G5M3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T123136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnN%2FGGMHWIm10MTop0zfs5n70tmkMUriDpd%2FHTI3ZAcAiAdPbQcrXZtuEM7lf06twk9tyTtDvzOMLO8itfMvCCUvir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMuKS7Xe14eOTMvzgqKtwDFmwR%2FXMWphkKUj%2B8sRnPYrSIm94qSOwkyHnKlz%2FwsbQgbAlPWJEGDcCcCPwq%2BIpXDouv2EArjoTD%2BqirlM1jpJNT0GyuAU6bjZqutAaqLTRq4%2F9homF1LUl05tVrzZZQdGcilrxujiHFNP0FjRz7J3VCIMtEnb%2By%2FSqfCqtqCbhDcbSAYYsME4LhVDydw9eD1MzzUv%2F9DJ8oOnSJkZU%2ByNwLKlPKpVwda6FVojTNh1B34BTq7TH%2BCngeYpPY%2BRY%2BW%2FYAKadpDYAMlivCgF0RwWS6AuITx56HrP%2FRES3DBBfIkU%2BPM3oGGAC%2FQnA6nprSDZnGRd%2F823pv16rVuPRCUGla1760jysNTtIIEOH9%2BtfrY1r7EHpIXZgVaugqWy9Z%2BsazweEwlnYHJCR%2BCIgmxOHsIOfweFegIBXFKml9QFO9GinjZFssjUsZXGNfZBa%2FqM3VQnzklTaGfzmUEwXOj%2F0T2NIHmAFUQMlMBeBEsvuo4bY%2BMsuClWHX21FjZIDNybu%2Bo7Q9M9xJYwK4hNqqQH2obcEW6Q%2BFHaCbjl3QABaEMQ3JFVCn%2BwzWkHVhhMAHOvdogEKFLSDXj8F%2BPHIjLE1uA%2Fe8IWrgKEE%2FmioVbCFZ0rsjf4UEtRQQ1x8w6N7KyQY6pgG7gEiyazEMgLqdU0uXu5wjtxfxnIke4y99rANFdI%2FU7EOi4ihaouw%2BxD%2F50jyO9Hpgvg25Jhpw2THgEGTBGvvJ0oB6elgXBrc3l1TwPPbqBiQcSxkjhnAbhi6b6UaJKdASs8l69BaPGx0WmCshNZQWDTGSs6jXAc6O%2BmiMKfReuMReFZNmbqAY1YSPANwY3HkZgCWSdFJSHkpKeV7n%2FILhF6D4u3Xh&X-Amz-Signature=9171f65ec2662701a155c02626fc8256a71d294de57453e5f627b9d5b0bc7198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH3EVQB3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T123134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9D1oD7z1%2BZZgv8F50TmwgXxJvU21%2Fcq5uO2ecup3HnAiBbLOCsesb22V57BRkyFimKipleBV0yxizKirCZqCETPir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM2oGmYSB%2F3upzv9PdKtwDKUZ%2BfnibJP4i4jJ1sHD3DOiQ6yOB4sppKBmcNX0mHRtEiwC2PDzE%2B6z7qpj2l5nrPsWwAu5GS%2F3pgW1XWpOSpixOd9FGCm8Mvbd%2FLNxrJEKq8NZ0yaru2ECb67xpPWreNtLIxy4whYWW2Dbcm8xLXk0RVFamtni92WbD119FiW%2FePNaeAVRuGNOEkaEn8YWsDPdBuwkWIqEcn0XxMEPOwANbEYwFkB5EtCGfr2Fdq6OkelgYqBX%2B0Wvy6cCxrm7niYAap6E16wUFt8HNXQAwWty1pyOYF%2FS0l7FXjl2vR8czYp89i4Yw6R3QxE0zZYms%2BZAiM%2F5y6Ahr4iFyqZ0m8EDNkQU6Auu%2Bg1r%2Fa1AackklA109%2Fz6dz4u29xz3jQ3MgVWzDA%2F1KHmzOx0T5Fi2UfqcVksGj5QOPVAoVVePVep%2FGDW6RfQbVufp6Z%2BcAIpzp2TCk%2B6Dwk5xDVPl%2FcffcZNQZuVjSUYDSWP9xElDMX%2FApK6BtctZb2xMbYKrVUJlHXxutM9vPGzPXJukJrvaCbxXID7kDv6PsxUsNbDqwbHGjmbb3XjkYF%2FwvezXGc7tgjye5r880CRIZbR1jsSm6cxWMGF0g8EO8pK%2B1xf%2BIWlFUljGc%2BaeBnYaeVAwgM7KyQY6pgE8zKDFKVUXUObMeRG2ETHCl2S8IA0fkeSetRgxiuyhk4r5njbEnyor9x4IxQ%2BMxFqZo8CVsEVSdDQWuln5wz%2FQj99McdFW91J1iP4pn6HmQQQ7XJE9fejBfc%2BbEz5nle3SI0rYIPnEwCz2PnGyRFFj%2BHDfqXJpHFrK7XT9yzzmlB5deBawNv1Wnp6P%2FQhPh0M0OcpSP6Ii4SEj57u377q5E7qjBAlQ&X-Amz-Signature=2ddfeaadfd26b4b5fb9094bc70993f6a9c0e7c5d25b764b2590098b675e8d400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

