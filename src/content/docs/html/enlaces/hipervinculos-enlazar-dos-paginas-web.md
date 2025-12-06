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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O5LVTOR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T202903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWj13Tfe8pSfeFoU4NJH0Ts%2FakaWcEa6ZBJ1dIyxJKIAiEAtztyXJVAMAtqQNvgG8V7C94AgyGNf08lZSRYRzk4d8Eq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGzBH%2BRAVsR8oYOqUCrcAxxlKknX2ZXDCOI63TXcFEesiuggfjeMOXwflDgrLrhkZh1CSf8l%2FL1QrXBpw%2Bx%2Fyh2qgqL3OjD2V4%2FTJgfHDn5efmbhFZS%2BKdkdsmbFnIDYr%2BRckAe1pI%2F0ScK0cpC43gNI8oC%2BD8JFlAcj2%2BK4nYfiuRrolJ1qzJP5e0ID8rB2y4jf%2BLFXQfVa1Ri1OHMOGbsNNhYVnqV9gU8eMgBLNO4JupXiJX6kkr3tx0QWyefk6w8GAkSBCCA28gHH4oUrkMQnHjTJvfaq%2FA7d567Eu2FgarsS3j2pOwInPk7B%2F8Vwjeb0J3VFbjsqk31XIT4Q0LkOxTXee6All%2F482FjF%2BoZI8bKEVTZ%2FKX7Fp7ZdNY8h%2BjAjL5hv1JhgNEkF%2BlxHdOUJXHvdnScFq4vrpAynCnI9KWlvLURwCo5AkQVI0MltuTv%2FpIZl%2F84tFeh3Tdz7Yup6Lq8%2F8%2BWX3C%2Blfht%2F%2BcTHr9wnE1szDeu%2F61NpA09NZIvZbdUs3zqzVUa1%2F1LD5%2FDKCqAzEumekv3TRF6Nwvhji69ONVedUn%2FVs7kM4DRScBvDBHFdQxfalEMsXgCmS3iE4UDdl7%2FSOBGWMmQb01kEXWHI4t0fmRhK0gy6EMPkJafv9N5ltCDY0HxTMKrH0ckGOqUBhpfEDWi0wNSyh7U4qsz09ciV4KJOa4AR33Aaj6z%2BeJuAdPMkvvNix4iCoAFY%2BH5SHsprDeoQmBFvJO80tkq2mC8s2nHHQ3IKhA4gEmmgFQ7PrXyXc0J%2FnzFZ2tAAguR4C01cP3c8O4Qd%2BcMq4ZHFiv32n%2BAkDEt37oL9xPqF1GR3DWoopgLJwEmnz7nqsigTftFghK26R3gytmflFtDO2TrVdvxF&X-Amz-Signature=334445b4b00c32254ec4aa58f0cca70c0c5f9b6c347895c99557eb4d5cae05db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

