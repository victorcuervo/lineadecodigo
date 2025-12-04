---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQMFSWOY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCxCM%2FFDjGn%2FVDxPHGAtJRtogw4xIYH8yw2Co5xJYNW7QIgAJ5FngIuF0CYkYoYPxf0zj%2BSGTehOw6iRC13FmoSVEoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDL82vAP8Hq6aJv7f8CrcA9jAQArh%2BzcRx16yzyLwJ3FEapPC2EKFOMpNI7szsARg%2BAdJDnpobH6H9T5JcFjSgt4g88jFeInn%2FUkqB9M0QGg3QCkOvIRQcDI%2FDQ5F%2FXecOsLAZwEoGHfDGZYRuhJVuZRGlLdzmyCECkBtSKJWb4IFyMAp%2Fu%2Fd2McByLV0x6dpiyjZJf2Yk30R65Ci113KyPeLm0qj2nC%2B%2B2MYtJDgVBA%2FblyHA5QbyvBzT5eFHOrTBAkJnnGCQD76ntjsuQJY9lvbsRmtAtSBYuTU5qe%2FZkALoB8yhPy30jHLL73aCC2ZNOC8NAww%2Boh%2Bp2QbaxRF0K0EfcxZbj5S%2BHcNhpWkU211UIYxM%2FPFic742gXIaWnp5lL9%2BPGPNqKAVAFdZtUPX1NjUMJ%2BFnqY3lX8MDEVKnnao4Gj0oCX67KDb%2FqiIIyzc0LUaifsOob3mbbMptpHJieHJtKIDHCer7PqbSVZ91d8N842n1r63HCkxCusLWr4oM9F%2BQQZGnXQBQtjKcIbxGqOqaJtwsSIrpmbnhubd96p2Cx%2Bq2Ynubi7kQMMrHMQ0zZ4PzTDOeFGOfaGCqFHDvmijCkUUGfCWgJba%2BtyE0jC2jlwQFhswcvzFmdZorx4ZcFy3KAzoHxMHp6EMK7mxckGOqUBl1ZKFW9gP8yy7EMZXSTRpTQc%2FaR%2FEM5kScD1qp%2FRm6hu4JbYshvgwWMKCEksRX6jBZKDpCnC9W8Nt4kyFxqAMHOlsaqxWEysf4bnRru5sRBiyW70nHuiXzokQU14fHBokH9ICrRMCm5qVT8DFoY5hvQWiG9t7OEEbiHWCXdvMaYkHGlHGOTOF2S85U1W4u8yuw9MaXhl6DzrmGqqz1PLS7TM6esv&X-Amz-Signature=7b9ffa398bf573938233240b4a0e0f27d89b3760cf633439d8c7bb3f211a9921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

