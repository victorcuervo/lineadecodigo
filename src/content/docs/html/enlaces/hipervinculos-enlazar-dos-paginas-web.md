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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXXZFC2E%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoZctvVh2oFi6uxHEYCtPcR07evdHa3JzGMLvX7ueuxQIhALJO4uDJROw1BdwjhuajoQFjO7VHkKRiYqiPGWadLuwPKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhCk0TsK99LvMKRFsq3AOLUKZWjMNxe4gWbTjzQ4x2gWUeuL9EyqGYUf4D0GPPetVYgb4HJ1rRR60%2BJz4aMwwZL65dTggKJA%2FxurJVb7EmuxXnHjyIeGPZHZ%2BtP1JBQJbRh8sJ3cuvbhY%2F%2BizNUyvMq0AYFIfWCgDWqJlemQzDllahNjkYOPYveskBLtHbd5%2B5imfhMknU5CTD52YLHIYsIak9JBQz9Oh9OsY%2BKatZVQrSiuCd0nJTFGWt%2BKlz1FgmkfUw38jNdsqirZZ24sSdCwSStrLvoxe2s0ySIXgL0GGwgTivdPI%2Fzu4J%2F6zQ4rQO8JCh%2Fq6Fl9mBk5TG%2BbYEP1C4CuGteSKeShG0Lzy15d%2B4J1trywoZrGGdwTzhO1e9VkwpiRM7aPAYRfhCzDERQPduJ6x2Xu43Hqzxhb7LaRXope1WtAKb%2FLpI5Ex3F1iTzA6DeeMjj2vc8UjNhaj%2B2N7scV0VibSsIGOMG5Fbpbm%2Bj6UHhYWlverN6ckmtmWUYe8rf2jhXAFhgrtLL8W%2FvObuNfHJsLc3eoybX1CgTAISGWGhKBxg%2BsqldvPavUJzE2vC0TW694Up%2FumFLoEg5WpNd3JeexKTK4ycSjds308gOzu0%2BxHEEp7s096QFRUm0YFK8xD93kO6EjCZodjJBjqkAU2VYrRAbXjeUClSuC6nA%2BaSpOo4hxFMqu8vYKPuPru9oOyM3mJ%2FVVUn6eb3qvF3CvYHDtCIARuQycp8LHjhMA0FdSytgeWVGpTb2m2TT%2BSoRBoybesOGc9qYp2NnZgeJn%2F2f17AYVsV7SMD7CsD%2FKYoFU13mVVYabIe80rnvXmBLcOw4rKoj%2BkdXBBSQCqkvFQu5b8kcr%2BM8IRE2p1MviEI47gf&X-Amz-Signature=77870177fd5be41ce1b99cab5cad6e0a0154b1d5a2619ec0fd5c074673a302a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

