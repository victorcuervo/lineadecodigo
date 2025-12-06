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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466667ISGZQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T185603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFCZucwdeMx%2FllE3ZqT%2BmJRvUbcr5JV%2Foz6frTFNhBs6AiEAhvZs5MwDRRbOkFgmEIkpLx4Cn%2FNPqC3INls04Um6A28q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDUSW9Cqa3SM7kGefSrcA5N8VGvNzkot%2FpcyZsff5xq%2BIs5X00942fsRoe8Yy8w%2BRmGNeB%2BL1f7Mt8L3FtxAo6guK%2B9Dlx05GMapqeKTy4qQ23ggOm8motjzUK11fRLn3ZhZr4jdWYiFeFwelrEQM2c8CNsmIq4P6Ca3cIgn9hwmb8wE2NCGuhLqKY%2BU7MrfjDhf%2Fp4r1EQsOD%2FrLvu0QxPNQuzFAyaS1OgVVDF%2Bof1c3dOsKkVMSucRQ8NCzCvuFzxArvicfD5kKasPXoBW%2BQjXrdpuMvVv0zd8ZQ4oOcV85jkyyRLa0zh5mSENYk8E1NsEGX2PHLqj31fykxYGxc%2FhgLUsXShhs8bBR%2B%2F9Cb5uqaXgJEwPx87r80J4gbkEY0fitK4SE2F3I4HEccQaOulTf3SPHGptF8pxeunK5gDlFy6XpsrPATZdxzZfwZr8%2BGyEuWbPBkHIfvpU60jzJoBbkMJoSMG7fO124ZTrK1dYHdRlb1yDCnYUOWr8P3G9FOhjhNEzmNDVQ9m6afkYRuixP2yBQZdqqkn9j0Uf%2Bc9fZW9l1oWBrHap99r0CSl%2Fa0q0LtLolp8ZYkn7y%2BUXJzHNxbHeM6bC5TFS9reRUrA%2F5zG07Xbr3FRXvCQq76xLqzmHUiFPCdYzZtcqMILG0ckGOqUBpow8zNov0KIcLyWW7Ale4yYsW8aAjTdHt8A3LVG4LVvBCLiG2ybFGDW2NxSfLIrtOb43MbYb2CUeANcJtAbJwoRs7sKgAaZMod6QaUsYwE52eFHyQysCWcc9UZSnlNYkddjOwlgyRehBtaig4Wz6Gh1i9KiJ5uaH28IfsH%2Bsg4AK2iKVfcq7TG3eyb0DN0qzJMQrW2cRyYO%2FmM1My4zXgYQ48LbL&X-Amz-Signature=073accc6fd773442d539ac47a2b3cdbfd487e8fada6388e0109d60715898992b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

