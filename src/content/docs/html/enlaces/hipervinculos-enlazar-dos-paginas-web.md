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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6RQW5S4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T092927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmvELA63mQLcH8s%2Fheei5J6rSphPAUTLzh3GsMf5mmBQIhALVUCQJj%2Bero4BURM4Azbbixx2WNge3CzGKWnZmv6EZeKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVFab1EjO0DaGhVf8q3AOSddKjvMekjyVw%2FAApgdwv5twYav7x3DI7R%2FQimEMHk1kU4Aw3qoED9%2B4gNoW5glTGHhGEStFQG%2BCuHn%2BXJryxNgf%2Bqr3stnmDu%2FKIxxJ6C3%2Bz7iW2qSZNDbp6%2BYOwYUp1kUgwv9Pk0gjQubJnmqvfzL7JTlCfLlpQLA4FJpZp1Wp99I%2BSn4J6eEjOSWgEy37iDZRlEw%2FkmPUXNq8iOMaXEjqiNvroXSU%2FT5AqxlRMV6nZdD3sdH8O9lJDQmiumII02hGbAXAXSmafb%2B2xCXoiuAIEsgMXFlqvHUc9KgIfZ70hTSWvSgvVoLjPB%2B6scy%2FsUQtyTJdqItZ7%2FYt0O7fp%2BSnvQ2ST%2FVlKNqeF%2BTxz1J%2FRGo0udQSlckwOvWXHBw3z38s2puCd0jC%2FWdStpWhLe%2FbD3huPBVLTC010xNH9%2Fi%2F39oFAPnB7FtTHDgWBCRUQNgQhAa5Gi6WBKZOE%2FuBrpr5mFIW2FoS7Z4gSb2%2FEit%2BPsv%2B3fEdNnSBHBkBuhFXvbw0Mb9lwKZKFy%2BLl3RV5JoKC%2FT7YNusXPvPJ5TwvDby5dxGgOEg5kGKC8tWO1hCO5fsQ0FMLQ00plEqhVexPCRCDSLVelt8OVDB9gfRqt0dtqNVn43CuOOQ%2B4DDEmdTJBjqkAdN4WC8ncKxXOhW2QtIfLeoSoLNfckEg8UbblBTRnALaj9F%2BM8gV%2Fp%2BBYYJkDjahy5Um%2F27xJ7mNbfpS6wdL2m%2FWJBK0v7pW1jPtRWqfdOrVAciry4BxCSpnfJ2dM5zixNCe44%2FUXGEuaJOqIrhiIOGVNQsPupSAaI2PtFzLlW3fSbW1Fe087Mp1%2BjxWo6J2iHFMg%2FiV9U6mPiSZKm3ux837zSeq&X-Amz-Signature=000a01e384f28de165fcb989f979dbab66da2ed84d5c14d39bfc9e8429dc450d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

