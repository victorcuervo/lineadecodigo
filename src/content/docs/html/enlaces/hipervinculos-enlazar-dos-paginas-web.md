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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X645XYIW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T160419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1nTCLCErgvCir88NRDlNfw7xxtPZI6CWzWSRHVVoEXAIgT3N574tSPJD%2Bq32ujC2YInLg5soSYG99Pw9xXhb0nj0qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJOWa60%2BUaImDXmayrcA3c%2F%2BtijpfSmwJUFZpa3NZETOtE2ly8TdcayWyYShnRHXyqk40yIf8gUS%2FygAdRxehiNcBLRI%2FhjiqVv9yTo3MPugYeSsMfRfWDFKQ1GOUSjbOkm3n1jip7xopEkHTrFA6wUmZxWmocnHWklhJm4keKW3dEpkb%2F0RXhwmHtHdNA7z0CqhsuMDWwWZaK9%2BTIS2cqsyJmfuJGfdfs1aS60pO%2FXk%2FqigVOgppstc5qhDR38Z1thFuTUY8egLfeA3BxMgsNhVBuTe1b9zPGMqUK%2FKjyWrYgwMSqhsieOg4%2BlCpe1dwQwukDeYV7FwXq77K8wIsNtte3kTAlk1kGsIoYzdGqQD6kRBsvmlc5mlrc3CLfpNk9Yd152rNEI%2FAYXtVB0vTSsZRHqarx%2BEwiJeJ8pHz4NmaGbY08jQjrN2sTLg9%2F8Fnc%2FUPWhyshLhCkXGumdF4atbUfkRVZA%2FmY%2B5Zw1IfgHYjaEsVp2Ms3WwhPXdNW0Rhs%2Fq%2FWDK%2FA7Bm0JAxVdfzkJjIkc7syJEMFB9eie6pcyIwWUOAP2iVxW2ApPBljLPWMic8t9NQEAyHdRQtJspochLZOV8boEQKbMInSSNoyt4MTvhvF6eiAKbupwTz%2BOmfDRwPjvgeJ9kx3kMOPc4MkGOqUBJzfAQ8ZQVQfi103AwanKlwECDwK1G2usPTR%2B2mJUpqA%2BHu%2FLSwkgMPQEDkd0mv%2F%2BQ017RghgEncU9XDn8JN5FHtt4nSmD0j6VPkFzk%2FKAv8NaubO91y%2BC4LJcGVnFCvl5TlS%2FXbnmxs%2BoKvTr5k2E4AbtDKzjzpD9ix8rO7nFj7o9myIhZzRZ%2B9nXheish8vUrdcYynw2cnwX2WfGrc7vFoC7bqt&X-Amz-Signature=0f1e5321e275afb69b9308d4a2094d046cd44ad9712745c0ea5cec3ca03610d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

