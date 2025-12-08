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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXJGTGL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T170231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyMgz3n7fu%2BAXgM4dqsT9Zf%2FEcnxzE4OrUoGZZe1lLugIge7MW7xRb4a14KojuMjAwiDEEu1IqJO6Gb3yu2cARb80qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNq9ZCykwDOPeKb05CrcAyE3ePx1T1K2cH6MSWNNaULa5F5fagyfJkTtB1cCJbbfxhzJ%2BdMODd40fK%2F8i66%2B4LxLJzwy91ObeqKseQLO3aw2e5dMRhcbRVNocTKcicf4SZQ%2FbMGdsrn%2BNNIBDEB%2BBCEFB071TTSimiF33crWZYuM1CwqdgKzVVcGB%2F9kikygylWNXRCLkyAwTFTjHycPY72L0uYxBtKlhhViWuwg42ltg40QJuGEJrxwFQKP85mU6pjaDo8xE5781kSUGe7P1ysaqebb19Otj58291HaBkpz8UNLljVJ42A0elkI1aVzuHHXws5EM%2BOGSO8BW4awKInfKNp%2FnmWXasnRHFAu7cnmiFqHfXgIBSXrEp29DxeUo%2Fao3VaGqIGXWCmDwZafTHcwAi5QcTFtn%2BtSacqCyaelD71r4lRCT8j726dev47OLYEGi%2F%2BVd5nK5gB8mqu91as2T4ZynsfwcAjlBEt5MMpwRsp%2F9CRaBysxNyxA%2FfW9TxrRyJ8sw5W8INaCV%2FeM7OkXjAJ34xzF4FtDLdqHGgNreKS761MMVbZXN7cbuPX%2F0Zuol%2BNpxuD2xq1mLCUnR8rctX0%2F2yXHnpAsGxN68yz4kmvwyWMXejBS%2B7buJo6XDFiFZkoa1%2BpAwDLlMN6H3MkGOqUBznVcw3e1TAFsHpl5aYTtDj6aV3Q2Vpvf7hxT0AvVXq%2FN471KlK%2F06ovnwo6QjnwwlC%2BJnoqihz1HyzOmXXExol%2Fv%2BUevdPfebx9lxDO3eQAW5Bqrw15%2BhqlukLkvaTpjF359ChOOcRSH24AWQ%2FdW1eXc9zXI4EE1vX3%2Fkq%2Ftdnfrh4Vl1hPEvWQTR7M3PEJO7A0Qrq%2BSzyI7yGq43h5xRyS1%2FbaW&X-Amz-Signature=af17ab0850b54a636619770c133d1caca390ba9f13f0a838cd47848e6bed9029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

