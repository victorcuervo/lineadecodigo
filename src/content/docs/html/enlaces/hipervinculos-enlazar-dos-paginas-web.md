---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWWTDKW6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T151655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwp9f3%2FV2stNPbc2cEgCFJuK2XxZheWcl6bEiXSiWJzAIhAJ8vwc524jJZsgCUvU1ynRdEvdUI6eHv%2BKBwDhMK6DjRKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCypRTcksPWOuOV5cq3AOKuZirI2dtpqYR3VZunk0NILBWoKSDmjQAV7JuUYy3Ajhaom7tMOcLlhy3f6AMTiDYIhjyIjyniXlrQ2gIu%2Bpm84MXb7ImBhCE%2BgLqzHQecQjC6Ta3aklAdRzVMM7PVUGwCJjOCi%2FKYttRGkL%2F5hebyD2WUX5bOIvewms8oYiBtJR9yOVg6RDsT6KT861OhzW7fjs1Au8w1xNlHA%2FNbfGzf%2FDuq5DUVgPv2a7xLaSiFcE7Hq9amK6re1Q5wdZ%2B7lLuFnRwcIqBGp8YHrUSz6whSiNVVLpwizFgiAEWFAcnSlvhBseyhLPvS3l%2B%2BPa%2FpJ53iDqu5N7xtVrPhCo6lq4ek1ZhoUMbgQd5r6BapV68Ng2RRUFN2Jpq7lBYLDiTszW%2FokVd5PesR4gk%2F7PpyRUj6dgFeFZ6LZGgQeYmjf0Z1%2Fe7ziD%2BNFzcpqhUx9la%2BC0nFfEpogVrKKILVCFytol9drEw8OOybNYjHai9bOMDnc9f1BkfifGHPAf%2F9vRxIXgNn8EppafeeDYaNXMOm6nj2Kn9TxAvdtdjxWsZkQmLodeE4fIdv9vrJ2mQaKaPVg1xu6hGp3LpVQmwfHdegeGu5wUXlNytpqLYCTfXFHFvnQ3wMm%2BBKyHlDMm0%2BTDE3ODJBjqkAbLNJfrfyBKU33aLl4jdYclcmKKEDWZ1Kh4TiUV%2Bz98c1SsioCuzECVvkY8QNk1xE%2FDPyZyNh7%2F3aJeKDtGju7xIsZ%2BnIaWp7fc%2BmrqjddnpSJX3GKFWMiPXNleE1J%2FLNIPaJAufDx2lZU%2BNvYJibGz8gGaqA2PrqMJzprkg3LYmX2bi9wWgcEDyk8ZQmFqXjtb0leuyM6p0BYxaXqBqok2zYmvM&X-Amz-Signature=c734bba1722be74171213a5fd4a290f7d478afeb01e607788f5de21257f850ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

