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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q3TW3PG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDZwwvhrGESBtkkXN88mWwrvL3KE1hzTZKpMzog61S09QIhAKgC1mXMYEQwjuVkw7i5hZtOtwxsTPP8zqBl1UGec0wtKv8DCD8QABoMNjM3NDIzMTgzODA1Igyd3vbMMqhB6tCPOt8q3APounrVfR%2B4lNjIdrhzFiS8bYkOBrMMwd9bMlkRIKjynA1%2FXwHdUdkOBShxcd58rXmV9dYuvX6GeamRdAqFRgHZbUSXHQPlW9SIZGJi%2B13kRq35B27OO7BueeJT4Vssw8fTPNFcg%2BWWcQRk5pIc9Cng%2Bqub5pCsn%2FNPNvkz%2BNGrm3afwGjLGhRWrc%2BC7ruc3WVzViYrXpGPAJkRP8yTeHe26E1ib4RZxyZX%2B%2BBPb3rzh%2BCbGBaXfWcEhF5nj%2FHPehhIgV09RiKAsjIzpnShR4j2RU8My5%2FKAKD5kiLieH7ph33BKQ0AhI35l%2FMWxyl3a41Sw5irZ2Jv82%2ByZ61YtUqQEWOFWC%2Bsj5BmWlnrmhx2q%2FimEChM3fLou2X6GhKCrCIEZ%2FYJ3EtWuI2CHB4Buo2GAhUZW9f3MfEG1%2BOMxUyQs05eRuf4GVdt0AlXOVa0W48aSZlUonaelwCp%2F9SRBtb5JAtGG3JZfdMtOTaecSF0NseKbzkFTopUPiQSCT%2BPiX5mkljsKRMCOLCeUS9uowckNa2Ym%2F99iuZl%2FnE6wUjoiuixDgQ4LfcCkq03%2BVu2DK9CtHjLiCh3OLaDdXqJg3xPOGt16usWg4sGgBu%2F5cHiDZUehmBtb95gxzig7zD3ysTJBjqkARjAHRrGVANd2M2MD2ED0VUQ3%2B81anTvgNO%2BJrSvB8PEA4f6gMCoAow9VB41gBwaMsWUvhD78gjUdhDxLyoGKRbbTqJLBc1wqSvuxGcA1%2FHlf%2FGidrSb07gpTGq5y0Sx%2FbXCcebv5pH6Nglawg0iVdA1CGvBePxqKPw6MpXOBxMHC8QjqTGhf3aZJY016Q8QzHblNktIEMAUulNwe8SWON97vCqx&X-Amz-Signature=7a9c2380c88f5f8b7e1f65c1fa25a18a65d97a8a786c247fd79b95a6e222aad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

