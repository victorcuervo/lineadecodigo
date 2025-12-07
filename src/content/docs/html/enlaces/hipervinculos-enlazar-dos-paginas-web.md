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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ASTJPQV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T132739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQfkmB85hSbUlSeUOja4Tcc%2B5cqxJMp%2F9BnoPXELraNgIgXVJGU5Cz8j9c48TQgrufDbidjhDtt%2ByounCqZybN54YqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsdRKA9AL2WJtNc2CrcAyqRFfM4sQUsFXS4itMnfoAUorrgDlzwxk569c4V6Z7iLR0NWsfzoczo6f0WxD%2BqeDaLWvI3Qp1xCQlwlMTEuwMvs8xMFxtbGTNl%2BBp5PWUS%2BalqhkIj7R1AdzNFtEKlLotnpbPFWawCA3EB%2FmnMBeIkgpd9jFgILwkT58DIW%2FFe8Uzq4fVrc%2BU4Fc%2Bw5JD3JOCuwj64tqLcuPldVr5G5iXFhmrYg1Bt5Qmk4Xm32GO8WBvRd84oispvUzGDunDMBflyBLhzpDQdMTN8b1dsRwZ9FFihifA1L6L8ve1fh5i9YU3aCsU6bPGdwyDdp08oJXrog%2F3ih8w%2F9qZgX3pWS5N8Zx%2BE8Y187G3bYW4kW%2F5OOdr0m2fXXVMzpMJ2B75ZPZpL0G%2FIApMqO59Vj%2FLVUubyJqjJzgxc7JX9%2BzHrzJllQExR0UUhSiva81BtNzrkplM8hq%2BwayuooOoHASnGD2UZssQEviVtzwcPGWqDHZrLs6o88aP3DhcXyU5XrirXXd1qAt0KaZdFm5trTcpznLc5B4nnuqW0m8cqvfN4PIX7HlWJqOfGcsMt%2FsKqurVs5TZTgGgr6df%2FRovWIWrfcRLnH3L1z6%2Fdy5JBRJFPQ%2BKqVlJqX0ooTu0IRretMJuZ1ckGOqUB0xY0BRwAxlVp1WYr%2FrNUL7fN8Tfi%2B3T4DQpghuGiY4tbinTIkgtKl7NJvmLe0%2FBc7vplTFVnN5hRre%2F4FbIunmNa74vx4mSdkQv%2FGpeWWchsZJ7dxe9b9Ij6hBWxTn%2BDwmDF2BP9cgJymAXUNU3bnKfSC8ul%2FPnFP%2FRK79GEA3iyYHWMMg%2F0n8OLFDuvEvs89ZSIp3bhsKYwNHbeUMSySli6hSrt&X-Amz-Signature=ac83c0bbdcdb040f1ec651eba2f35ae41353553082c1750839563e1836c9dedc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

