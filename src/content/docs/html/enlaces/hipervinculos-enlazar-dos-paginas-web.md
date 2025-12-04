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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KXRJ4RU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBE9%2FCP9Cgx0tz2pNHCpG9SSmnVnJKHGpcPs3SQXLZQ8AiEA0AO9O68LbJ3OAEeFogxuidKgkjZjUNBSxMGbc2YecnYq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDLPytNe2k636jlOZvSrcAy1pjL%2FoMKE%2FUKzwYbgkJAX12%2FESNt6VgwpR9WCi%2BJz0Qni%2Fhgdr2xy9kaazcCvtt%2FHNNo2KXScz%2BQtz2fucw1g%2F9H9MgP5m%2B%2FecpptXFbjKwUOSmE2BqGMW3169IuJJgmKkMwFRIFry171aExfoE82BAfyTyRN2Okbk29hp%2BrGrMLXBZ50XsXVS2ZHWZ3wcsoUrInu%2FHqhtdiadQSlyhqTGxnhYf43pPJQL3Q1oL6yESYOrmcCXFLUy71nqeWxap8lTmZh3p7zxMYYvivXvs0mwF6Kd4wXeBYRx1PorT4qiPr37zekWZPZv01ZV6F32ZwOix7t4ogFj7UpVyl9hyUIvbGgE%2FGAuB806x6phJdFoYepEqnOb5kTaEMWwZoy6pM3u2AgBEPqnKTwWyGZdXqVU1uxjGCZztmn75gpYCCQf2Kk3guWPZU33IF3xFwGa1c%2Fq%2FOvZlHuIXnjK6hfzk0q%2B3H6qidEWwz2euj9%2FiMEAVO7OPbAYuu35auSGC8y%2FKdgu8klIYfwGjRAa9sARD8F97iVQ4GTQScbDw%2F6MgCXK50QHT6JGigw4zQ7L%2BLHzDxFT4jvdsYesvUpLYX37ox3bym8v8QVlH4ByavLZ59UaO%2Bn214YPOkvteSJfMI7zw8kGOqUBLJc8EyWC7aiRZpGYFywaT5zvrfrsrr7u4Cqs6HQGZQmylHjzagUe05q98jP%2B8%2B8Yb1ZXXsvcnMLHIHNzKuKHXhQKXLeGEZ1slFjKgPzJCkZtXhw2yf01c0Xju5Y4ze3Ww01dMWqGDdSdQqGtuVy1WUfx688z6u4ghIsigvCT3rNX4FnT5tfD5S7QJst0LewCBfAHxdxu1YG%2FF4D9gpinhUG9IeGt&X-Amz-Signature=afb2af41a0a87e8d33654ab02708f219134dd529728a365c620fd336e24d2257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

