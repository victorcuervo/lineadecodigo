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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW2EKH5L%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T071151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrsppRPgGR4U599PYisjbrAKUnlkjhvCTR0LlI2YWV2AIhAMYPgcvYIU4WDvntnLqSJD7ftzKIh2%2BXUly7Ue6p6EFDKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhD2gilw8%2BC%2Bt5zg8q3ANFtBnCmxd5hTJ8P63xauSpO4%2FFHdApsXc74O13VKPvNXyCUgFrvWzl7zg%2Fi53rlVgLBp3Re1yNQwL%2BMi22XLBUR7Yh4DK2UvrrywyGhYtPDbtf20jjMr9WAwqDdoZhyGbjBnf2Q4wgsKdWpH%2BiN42E5oMQGaP0pLsV4NlVX4esvZy9yifyUNCTQAgjEpSa0vkttGObXBAjjnMxPl3qiA8%2BAVRUX5ohRZ9FgpR5YkqS5J5EAy6f%2FD%2Blq8ISjNC0kzhYSd2%2BFuoAPm8vfQl0ln0QlqfbsDY%2Br77jEg1gS2JmwIj66V2ZtFXXxDIns%2FRu1aU4NBtCftZ%2FdYw6lzeM5CoPxzrFsSofaqB1TGFnMvHBnD1k54yqbQhrmDM6xDOuBW%2FM2q0%2BokHB3vjJfS5DD7mDG4DYiIaAqdsEH%2BFE6pN8ahok2gh4r9Xii9KYqNTD2jM4Z1Gs8SyJ3u0Hic0eX2TtqUmMARx84ItGgME%2BJQ6SfMz%2BUvBfM2aww5jcUZMpQd0IhkgygHqKws6hbTv8BTgc8lTaex4DJh9yoWS%2FNde1TqRXA6QTwY%2BkGeXAgy8LzxAa4%2Bs4MZ4n3CGSSV0rYnlnsSDD2WKr1Y6zDtq3U01EPuXf2%2B9zF54QVuCkejCbk9%2FJBjqkAWBunwwyXIs75nRXMb6uWiICJVz%2F0ja57ec0cI08U0FGeypSzdZM6xvbo6ILQ%2FBjIJ9NTCUV65N4tPp9XbLU1pbPoxni5CCwbwyQK%2FuN%2FF5JpTBlD%2F16ej5J5%2BRIJ7cjCxbpAN77qm2PVIR3XHcTE5UTX8h8mw%2B7goZEGoKLFR8%2BBel%2BZ1kxVGG2R3aTAzgyiZTguMMoI2SOr2VU2UvDtkYqnyOt&X-Amz-Signature=cfba74c565f1294a6feca34d03322ef47fd264f95896e841afa4c8f8ee6ff460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

