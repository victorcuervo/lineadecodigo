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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3XHKDW6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEBP%2FCX3I6s92pwFuVU9WkVtEWjxm1XgXIsBN1tQXynwIhAIPauDXZFRLNbP6zD%2FtBbXJN%2F9f8e8N7wZaUlr6eM0ptKv8DCHAQABoMNjM3NDIzMTgzODA1IgyFtp5I%2F2BGQE0MevUq3ANWSnJkjvjsja6ebpE5C9AJAJ%2BT0AxPihCvYChPd1mvD5Pt5ragcI64kIoyy37BDQJW8bPDhfYPmQ%2FpltmriF48kGxG85dGoatjhnQb9O2xrexqFa2yFJ%2B3oIN6lzkbgav2yuxzS%2BpzAJbq2BFE%2BOvrheU9hgxEnikbnFnPJdqGE7sEn7Dz3RVoB7z0ug%2BK%2BMMjTasi89GfzRCmR5RWE0EFbbxiNw53dIy8IqzDx5gLWeFoFVgzP9mocSKvvh2hCnz4TD507AHzwh47TVkIkxjxBJ%2Bbzf5G%2BFTPeIB6HCtqasBilEalQXnVq2%2B8QB%2BBNBUNFwZFyCbt%2FsVRcThnwtytn5kXflfJ4RPHErilRgJsoEjVOy3opqU2erztpuyIt0BoD4DphsJ5Kn37WkEjU4U05M1L95pM09TkbmkfKpqkWHrLPc52irtnoW2vPrIateTvr7IxqQu1%2BcmH91jlT33NVq7U2aOxVdbVWjcnY9Z3P6iiFBhLmRcmJymHtmLI%2FXv7LdU5%2F8LwzxDMtV1sTJjxm0NPacizsCWP3TAS6X4P5xF0yd1ttrN88LrMjFvNNXdAP8KhxNFkQ7zyofnbATH3mRmcrzNOr2AzPyxx08nGqv9wXLBvDdPe8laXkjCyns%2FJBjqkAWmDnHpm3ov3WNeNOT4zmJjCtERPrVQ8H5iJ%2B%2FA62Pi%2FfGWhwA5ViS7WOTBwp1GzcBGU65CuP2wPDXKleDD59za0BNt44lBzPBuLVBxGzSuukPmtwF2cIzJ8X4yrQqKe8uYodF3KVxjg7e%2F7trWDpUZGb61riIFe6To1UDPOGQX8fbR%2FFRFfWRnffGjrRaGhQB56oFYNrROIwyOPnXlXx%2Frta6qc&X-Amz-Signature=b88bee1df2f0562b774c8fc104d1ef716aa219772d4ebee3466f522f6c47106e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

