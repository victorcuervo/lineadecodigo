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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXB7KXX7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T163510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr91DbSDerdRGDyDoQv5KAbgb3ZFiJni75x8KGRLRIYwIgImqnP5B3I6AaL%2BLG2MeoPjoCrq%2BNIarUkS4j9loWy9kqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJDFlKBoxSrRCXBCCrcA9y8Y4JrQ8CLwv20rRTp8vgPNYfvVzKHVmDrOJulT9%2B62L50RJeWhwmd27z%2BiOaWYZbedSGA4RsxTb2%2BhJtRJdjSg1FGf%2FvTcYKDpjEQqdWFOIWa70u5gBY1%2BKh7AKWqGkg6hZlaBgT1%2BevUiWA6c22F1e0Hi7Jji7y5C20ZVa1DzE3FYbQSbVHHWhi635CnXdWGT5EM6phvpTQpEXdQUB1TUWBEFPB584OzbRvG6GwlnB%2BczcpgkW1J44avSeCUD4YKccRCduWkfy9%2FTfdybLz3U2kTJUzvgSpFmnDpBQ8MKp2T6tjtTQoZqnOebAJFg10vpW6CYYaXJmMem4n5G5ns1rhhCGd84QxgFf9HuzneXBueRbBJyWPM%2B1ZjLbgc60LhmycBQBOYvGT7191yKSptbGRkeL4k3W14jKfR6qGd3KyiWX647tH%2Fml%2FB79T7XmxFXgVkYzXvjpxWtePhD8pRpxYusIfyWwDqC4DOOgsi2W0b7mlgjUP6%2BfH4aUuIUb%2BIR0DQRm9jWF%2FY9xe2VPNipsn3n2%2FWb0lBJG40RzBL71XTsvDTF1GiNGI%2FwQbTinIhWpe6XcEuTNm9IDMTUpH9aaay9qudly2yY2a%2FvH9zFNpidxr8tRH%2BBDBLMKKY4ckGOqUBwzxSgK7Jb9wXL0FncbGn193vGb%2FX9koCZGmdgpC2JlFijXZOykpClu4NJU0AB9bQUP%2Fq9sIFFQ8fAyq5j7H%2FCIWXFXaKHzXvSkQ%2FFo%2B2woKzPr%2FLLZmS3rB0ExWzTYpCgTbcaCxetIx5aGeuTz31w0Zylhm2GD5NkDaHPlBpzbMW4fVKjboiqpvncxPaWUtX8dpjYtUzzrrlGBoW9YTlI6ih7dmE&X-Amz-Signature=39d3a3d1256a26db592740c7f8e287d97ff1ffa6251a19a75937b063b075203f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

