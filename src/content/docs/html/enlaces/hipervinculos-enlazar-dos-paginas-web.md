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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI5TUYMS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbCNpGE1kkVmMKAfRZ1yysnNQTh9ikyPobkYSPqOuQ4gIhAMhBGga6s3Dq4dr%2FpY%2FeJEaiO38gWKnpwO81FIcEECxPKv8DCHoQABoMNjM3NDIzMTgzODA1IgwZtyLXPZcfrKjm7WAq3AO%2B4KASwZg%2BPUTjtblMgEvRQzut7%2BAe2IyAZUNa2kheKGPX4w1xfGZJFPlaNN8XxFf5jUFItcbtNXu8rnu%2BOAaxaouw9QX9dF3wvWe30pzXRVyDeyWxIQmur4PtMYVdSIjkJT%2B6klH7EalszQsCWpQgkPZ1PU1yoD0J59BaeSSTB3PRBRzv51LgyIxuNnLv6oti%2BgpGuRf5T3lrKhKyGViSQmPDKMeIjDd7RAmN1fDANlSPTFGHI61kxBQ4Hv9Vtsmn8Akg0in5zpuIztKzeEIDb6j8uM%2BQdDh2XIsghmNvdlpu54IaxWOg0wIltGisypce8WM%2BJab0rNcDpE6efsNCqo9W%2BjUcDqeEezWxzyFNq9y%2F2Yoj3vbuuFPKCV6cwMrzC%2FIYVolKpBjKj9shbJ%2BoC3eJHTVXN%2FMQoWcCgM4jI1ZXJePMXhJ3syefKoDW7kYk%2FEev9h%2BIDX7q%2BrJt7E3I99xiZndLQ5TjMBnw0kolAM7HzFDP3%2FSnezkkA7cGUGQu1mExzn%2BE4%2FM9unGK4jZ1x07rjrmh8F7YqhDJE7PUlLDuXOceNAAv9iAfyzQCnWBBKaGkX7chWK5LuxDQ3lxB0Ri0SciiEEBPNxHpCP02Zz9LB8lEtuykYPcbtjCWyNHJBjqkAWJLAiGTI5dMTvxw5aFHxF7PN0ozlHvjpEM4Om9RSoncgRWz1%2FMUUIbrcbNB3tBHVSNimTcFkIZSERnuU8VvMKaVQyJ48kkeSdfn%2BMDkhvbUMceRZMPylRyEBNMCMKTnPudnHiaBNYBjCZ6%2Bndf5V30utBiBnJ2EGdJhwDm497U96XWHd6Qdv731rA0W6O%2B5olCWgx0rieCiTCx6y%2FnjYaFVTkjc&X-Amz-Signature=a49462ae793f7a80c8a80afda28dfd46db323e9051437b033f13ae91820bb119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

