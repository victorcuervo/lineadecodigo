---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IDAP63G%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEw%2FlYkkww3%2F1I1QQSbOj5diOCwH%2BKvEF5yao02Mr9fYAiEA9RO7z4reUAPw77QJxg6bCY706eAsC%2FJ8Sy6wt9ydqCkq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGA7PBBfSJWPkbBd%2BSrcAzO%2FBeWUzDHDEn7%2FwRaZTexKDqSSLLHWLHWFHC468Gh0yibPLjoExAmK0jK6rmPIXeTcnsjvFgT8RW7gtShilKJ4fQrpMHtIZIAf6ZvWS5uAjlb4I8TGD1nnmNVpIwbkxwq2E5hbQdHvVRIpPDktOv5m4pwaVfJg4GiZTEddgsmx7NWV4R7Lfpy2PWDTVSZzdLQ%2BhA78JTFcTNnkZm1LhXRfuyjgpbgKgDIYL64JV4Ar8r%2F3Byr0s0m1Q%2B0BUhvHYGrLWSN%2BrVzulE7%2BdJG599hbwEPVfBOYc3rFiCD6wk1HLf5JRDV1r1V2mLK5YQiRMZCl96cW26hTr%2FXic0TPXUH7r6DMDBCUVyPA5Q7mjqYrTirHuKeSfUMgHzYXcwRr63VamBXSVsxVTKhrV8vhS2CblWRziBnwvpBcwbOAO0ZqiKG9LBBfqOhxsvEj6uSF5nGOa%2BFCwNe5onSGlWPPuuWuHdS4yV3Xk1M1No8u5%2FNJOBQnqmQ752mJzd3QxBgW12p9ypJ1o%2F8GYY3R3eLpfh%2FCscg0BCMYHXTTK1qw7oae%2Blg2fpAyAgW2PP1%2F7drIZZffpakv%2Ftz3LjZgUUk4U4T9Ey2gYtUIlc3tNHEnGItfbKP%2FQ%2F1QFDG4bmCeMKmRwskGOqUBn0YDlgMPOmVGvFlWJioP0lsT2k4jLPTq4KTaMuWqjCRjNsB5gwb5xHcM9ndGq5%2FWVzYIokQj4uoIcm8QhpzMrWrxM6o3lJXMlxsehsiAMFya5u7n2MIgjRMpL2YnD%2F%2B4%2Fn3bVE0w0kckQrqH1%2BesmE55ZaLbQrXQ96r%2FAxemNIIzjYjpGxSnNhjLvlo31e6qJLo1e27m0s13u1CM5IuJLRKP3qHM&X-Amz-Signature=ec38a69061c462208be21afb812ba5ef4927fb8754382ebe82977a1d4583e782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

