---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Uno de los principios sobre los que se sustenta la WWW es el enlazado de documentos. Así que vamos a aprender a enlazar dos páginas web. Esto se basa en el concepto de Hipertexto, que viene a decir algo así como presentar documentos que puedan bifurcarse o ejecutarse cuando sea solicitado. Esta definición se data en 1963 por **el sociólogo Theodore Holm Nelson**, mucho antes de que naciese la WWW.


Una de las formas del hipertexto son los _hipervínculos_ o _hiperenlaces_ o enlaces (forma vulgar más conocida de las tres).


Así que si queremos hacer páginas web utilizando [HTML](https://www.manualweb.net/html), lo primero que tenemos que aprender, o una de las primeras cosas, es [cómo hacer enlaces](https://lineadecodigo.com/tag/html-enlaces/).


Para ello nos tenemos que apoyar en [el elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que viene del ingles _"anchor"_ (ancla) y que es uno de los elementos base del lenguaje [HTML](http://www.manualweb.net/html).


### Atributos del elemento a para enlazar dos páginas web


Los atributos [del elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que tenemos que conocer para generar los enlaces son los siguientes:

- [`href`](https://w3api.com/HTML/a/href/), donde habrá que especificar la página (o recurso) de destino. Este podrá ser con la dirección absoluta o relativa al enlace que queremos poner.
- [`target`](https://w3api.com/HTML/a/target/), donde indicaremos el frame destino de la página. Si queremos que el enlace se abra sobre la misma página, lo dejamos vacío.
- [`title`](https://w3api.com/HTML/title/), título del enlace. Será útil para que se interprete por los clientes qué significa el enlace que se muestra. Suele ser útil en temas de SEO.
- [`type`](https://w3api.com/HTML/a/type/), que especifica el tipo MIME del recurso enlazado, es decir, si es una página, si es una image, un archivo de vídeo,…, ayudando al [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) a determinar cómo manejar el contenido al que se está enlazando. Este atributo es especialmente útil cuando se enlaza a recursos que no son páginas web estándar.

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKJ3LM4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCNOoxs7X2XP6z%2BmvohJeTuJ1hFmeqNXNEdpf%2FR5NtmPAIgVuCc8zUJANsX5U0q9Wk7Q718Oyoz1U9OUXZsy4yllIMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDNTRqa7BlYwV04RMfircA9rYm4Qng1Uy25VyNXN6VPbcSkoA4S1H%2ByOPd626Vv%2BMgKHbW67ieXmqLaIkw2Btalhuil5u1QcAlBbPXmC0rVff1au7I2KHy52mH5YWiHcJm6ZIxbHVyH7MGTMk%2BePbnJIZkTnFDv9QdA4vpQsWU0OpGnMss%2FN0LGjgyU7BytDxzYaAdWH%2BgnelNgMwQGQrMsDP3OeNz%2BqmApKOSaLS52xi2eDF35XChPb6vKKyH0G0gHae%2BuqhuNGdwPIbx2qKWVakCirFuN41Y0SApV8%2FaFXO19adoSvdrsd0iQjR2FSksg%2BPjkDn%2BTRTbxnxn5zTvNI6fCTGOUehDuVWzJ7yP4lwSZZp%2FOL7QscfHXasNXIlIwOAbjHrdaeR8PwESgV1gA5xeY2dzC7fOHVypRnCb4bQycv5Z2y6t7zgsYH4fTWhLvJmLA1vNqwHQbVYpV0N4IgTuksqkHrGw%2F%2BT6Rk2%2FryXuwe7FIw8eAqAkP%2BbOLTKwxeWWjVkbmYx9vZHlKzCex6NlwBoI%2BjAfSK7vGxuFEGaDm2K6FUBD7NZIFoAO50fGCvyWbb0oJo5qxPJ9Po7vQKek3ukLJg9ageQ4FU6C0gyJRnVJGnXKD4yGs5Z3vWsrdo%2B81aJv21VvJ7KMJ6hxskGOqUBLOFveritrICxFJrL832thkW9o1ofwx0QtgDl3xo1U66040kpwqELDU%2FgYkfg6MtdraFs580sxnqkfwoSW10U3sN8jRTKX2OmAoBe5A76VzFanMLW9H9ObkGzy8NzyAt2yRntroWUmEYfekHIuRo7Sr42bufQp7OaVH6BzeqV7M21QZfj%2FqIoB54MFWbquxYdvvhNU59f8vArnTLBtoBI9NdB%2BRS0&X-Amz-Signature=bfdee4224470f568587fdf49ffc1aab0821a06b4fe9fabd13296dd09c4dc6e5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

