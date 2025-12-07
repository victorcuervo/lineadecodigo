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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6DELK5P%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T080935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTMJ2co1IwLy5Sfl5JLY9dAM7NhxI6QF%2BMNowZLnvWlAiB6hRaWNZqY%2Bj8XJuCfHm3QXIqYc1R7Iy9RkYpBr%2BIZ7yqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeY601qanTESFXCvEKtwDlScesuHnylyTd9%2BT3YIUzf8VzzAvzv9NRJ9gVPCVCw97rK8QuQMeNbGU1GTWGwAOluXtDjYCpN7k5TXmIvPJtj9GP%2FLtnbcOWEDycVOo4EqFbD8vpE0fN6gy%2BT9jnIneGHiytX7mABHluXhVq%2BBXuMpHhillmNUIjGkyewweQnWbcK1UlWrzRD%2BVN%2FFXTUW0MmLtXzjLiqRYeCTEEvIRSIC9laaK29E%2BnOGgDaKkdV4Lz%2BGGj36u3X2Kjii%2BsaFCwDr45rUCTcPnKI8gChh7CLeBQlg10M%2BcyRgpLVVjCfGj6ZP0yA9vHddPXZWz4nNf%2FsMyeFiMN%2FC%2FKs8PZopdsEuqGWsRhgcjZ4GimI9Ljqy0zxKbqzM5YxPDKAcTJbBrDzBjW1acTy6tXUMOKyHY%2F7Ktm9ZxxSVcc6fyKIry8b%2BssO3IVEYeNIVk9kk2UtQ%2FoO9mkvKN2LLGkudWRKJlLCGd3oiOGPmPLfdqpCqv3UX7JqGFH%2BRJ2fgD%2FZewo4ILntRS7mGeTnRqcGAypkZqPbkD5o4R9THKRzkjefz6Gn1UtDwTNzkvcoOhZD0dZTLce66P8MN26qMUgNpsmPU%2F018nLlhDGbT0YYuvP9cetfrFGr1K3TvqG%2FRQx5wwqqPUyQY6pgF46dQUJk0b54II0K9u2XuMYze3hAsfPMsja56oHkz2S63XbGrtBhd6rQeG5kjJ0fROgcccWXZN3r1p%2BbX06FsnRjTO3lLUWLMZoiaaSzM0K%2Fds0vm8Rt7LK%2BNZwEgdKyShI1XU%2FRSMuLhipu478MxmJCc7AKnUxxx8DzKxpZMzHhj0Nt757AQTU1RV496H9vgxiJ5GzGcjhzE0kuKqHuZd7FajGfpX&X-Amz-Signature=6df9b521212090701bbd3388db9802d57479790cd754b0dc4e233893fed8ec3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

