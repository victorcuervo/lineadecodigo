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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X63Y7ZZ3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRakYe4%2FGLQ1PLiigyK%2F3Cj9%2BN2%2BP5DNmDDbG1IR8xXAiAzYKvNcHqCSfF1pM6DYYjr%2FKHVnOAsRh8QAqw%2B03VdCir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMOsW5iyzTPEjavWLJKtwDqTGJkeDDaHcThAOrUlG82O1IJLu9REKTBPH3J7uFUSvxqOkHgSOVpDTSwYRE%2B6sxOT2qUWxxP%2FWDeUtr92HJE5D2yjfWUzL4R5MvhciP0iiU%2BlZm1ij4MEUcXI3I6NfWaH%2BHBjRJPO9MHL4Ui4SYFM9HILEUbvQYfi76EGs1GBGBxiRaeeCf%2FCrEz02Qx33JZ4jRPKPJCc1Nc1oNQSZ8FIOC3K5ejun3zhxj3eE2VmxoBwAtzkjyZVURtdlCLyZKxoCuPl1xCKiqL%2BcQ8YDlHO80rLtl%2BCcdD9UDH4Y4jvi7qw6zAllTmMx8mrHBtOAr1IPL7K%2FbCtg8%2FW1oD74slIBSpjYv2ZFFFx6qErV66%2Fmpi9O8yKHjDk8Ih4Ig73eEM5Q0%2BSf3fQdQ8hul%2FJJk6aD%2BN9dNdRGPyv3rbCZaLT8Ig7kFRs%2B5Oac3vCcZm0ggYGB7fGy2%2B3OfYiLZ4BJPyj4FixUu8RbvJPH%2Fwt%2FB3vNIsqM4eRlwdT3E3Ua%2BP852xjT%2FF0lX4pkZCRyG8MRrFY3Ftb8EixecCC44J5BfxMYN78Zz9u7%2FcBRBUmQoU5FDiaa29OVhbjfUI0eSrE39O2ijA6Y304iERl%2FAmNQqLsp2OcjjlGCBiN%2B1s4kwgN7OyQY6pgGPUQ5d6O%2BT8fnYhS%2BJ4AAgLqvG41SLfbBhqv1njiI4rMcc%2Bd1EApQxd7lUQLoKhY1SLX2RGst8Ae2D0uaQmp7NpOzQBCeODvtjg06uK8SsaKDsvkMyYMpbYYyLLT7kNeQHXN9k%2FaEljaacE63%2FT2XOdzW2kidseCq98qbCT4jusNNhcEMSGWtHVnAbbBRu%2F4bL1U38GbX1MoIhAiS%2FC8cVy%2Bzu%2B7tS&X-Amz-Signature=5c0ad6292c6974d607a6462e16020f5d8b3d6055429935c399c5628eef5a2723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

