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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OK5PIM7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T080344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQW37%2FaMDx9HCPmiXpkkm%2FYW8yeS0qVsi2abYQY613yAiEA%2B2MnNwNfPW7veYaWhM%2B%2FfDw3vpH5%2FKQnuKNsahpy6DsqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmck2De9OP7aJoDfCrcA8kOpMfZcffYw9nBGHd2NI6rdICzA0iwjWDYRkp7KZFMsSuwL9oMhm9oHKy7c9P7phke8j1jLsRPA%2Foz7KD4zvHrmtxs9GDYrlogkCP9IiRR8oNi%2BFG6UrL%2FmO4POz3AUkpxyFdHsImwVzIqwq5Yw%2FE2xAeY7gx3mdiraO440A1ydX7gKOou0JaqtodB6rJ%2BlUkdGMjXPFvBPFAR7zjGc9S34%2BE9uIhWlN%2FbILcVpohfCUzUXFgibFbv0O3bnit6ry3sOUBnl9GxJFFCuMmpHtAF5icQWj7p6PUQ18MMr9yPX69Wfr7CWR2ztWHNMJSyI7KzBlE4BOTVc3ZxxEmOu0LD4Jza0r4Vpleu1tP8fBpaokEmhIYT0lVEf7Azms30E0ssJ8ajIwFPjqanLIwwXa93OcZhVFKOVJe%2BYPBxb%2B%2BtVfNRk6uEl0uWsM0EJ%2BP%2BIlwkmszCWQk3sLH97EFVI6h4znSjymjYBW1McHjRDNHdySJt5v11ng5MM76L64kIM%2B8yVrMFJoYctZQbQorweLMEAIT33QBKmDNipBcbx7CkEinAlbweuRdz2VvMz5ZXEDpFDaPSawhRnmv%2Bu1o3oaX4d4V%2BwxoJPa8Ksx51Ef4g6NbNY8wTF61Y2XGEMJeg1MkGOqUBqBrm8r3TmCI0i4B1O4CQ5dNU4oCyx0yxlIVow5yeNDHy9eGdCKq%2FnhDyyD88ZBQHxbh9D1atGyU3tWNRrd0h5WMvkNP49E6RqTy4SM%2F6MnL%2Buwn4aAIONItx%2BPGN3d1%2FDbJrGQlIZQ7e9P858dV%2FeCBuyp4iOL4cmYv9Oe%2BxU5LPAIIVlaXyYao%2Bqiek7N3hsQahL433fDfl5kKO%2Fur5wO4brNPk&X-Amz-Signature=adfa45fd8605f2c7323eba4f095b095b3cfd60a9941b7dc04fa3426d40e2b610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

