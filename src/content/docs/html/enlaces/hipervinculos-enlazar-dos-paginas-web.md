---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
slug: /html/hipervinculos-enlazar-dos-paginas-web/
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX6BMQE6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T010843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDa8rXuEYTm39o%2FmqUl6ey5x%2BT6ufabTNfwAeEn%2BHfawIgNXsWBV3HDaYhoezSgaV%2Bu1P%2BLJtG%2FvZobuPeFlK%2FiwwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJjdJRZ%2Bnn5z0y%2FqyrcA5aJfujwr1fIBWiDBJHGGmTBxrYb4juJjZ6IGrVbb8SvuMMxYhIx1DAAX7tf%2FyG6NCod1EhoXD8fFuZufkLBsXTr4MynVbreCIoO7q0a0%2BKLCniWZv2%2FNTOI9%2FPwg7Fl0dZDfLDXg81ZuM7LcYUMTk%2BKx1T1VjifixIwP4Rx12T%2FO%2BXbCfns9WwzVUc3vvfl6Awg%2FD7iBSIabwVL%2BrpzxrvK6tOmQTmZpIqYZssEERtYI0%2BD9So%2F08uZRe1%2B3UtW360oEqZJoaiQYoPOMVD7wCXMtgJT1k%2BB%2BwhpJNM7hOHiJgD69SPEo9z6di5yAjRtw6kRwhE%2FT5kqmNoqWg%2FdqhIUPO1DlTrc28WMGtaCT31MeMbimnwzcfiFPuwK7Q8knasL5X5mWUP8eOpp1gDXWm4QtSwC%2FK1rMs%2F7MtqSIOTIJIAPOA8W7eU8hlUOpohwsM%2FsJu%2FuHcAj%2FUKIoudc0OBkJz87nRiCRoxHv0qZgo1DwQ8cvqmmO7Pz7U5ryPcXfPuh0gxMvann7viUD6SMVM5THhZ9jmaHw0bjrtrFY1rKVf0oPR4BhnvqgprqWCpubUbXZThq12a%2B2jKsZc7Mq0pNRjq4zsB%2BBBPgejerGdGSPE%2FnNIknyiUkZeG6MNz90skGOqUBlXbK4vBkYl48pn0nJ%2F9fAlzm0k%2Fphnd43a%2B9V%2FAlwWlvARCVQmZ7bbaJX3Is8SOanZXmSD7WthJAXWCcKK9nJlePzHh9gv0ZwPeEd32peLH7O7kpV%2BzwyWF80HdE5EA0L2b1%2F4uwQ%2ByjPlK7vUFNkMld%2BJqKESP0btjg763YariB2RkKz9UM9lcx9A0cHmcVSlcWi1gcAw5hPNEeTpXHiHXq91yr&X-Amz-Signature=e2db7ca1eac8aec93599bacc6c517e915c591b8a4d0699f1a5cb6947e87b8a5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

