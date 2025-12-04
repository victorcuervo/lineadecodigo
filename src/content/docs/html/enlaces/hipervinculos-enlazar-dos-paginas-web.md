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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XOI5TMO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCrm6jAoEVkWlcRkL4k6uaPh0WZdt4MOacRvt3ZyOIZVgIhAJkYduPzM5O7GTWbUjLwY2tsThjGFl7vBH5s3ahjy7oOKv8DCEUQABoMNjM3NDIzMTgzODA1Igzwfjwdc3KWAPIt9sAq3AMiepE%2BvHzIORtDxCDymQbPh9iiDO73j7uvQ8Wgg%2Fmsh3UOrEwg35%2FbLYejyfjCme50VdQrXHQJ7wlbjZSjvD02FINKSzBl37PpJJ4%2F3lUU1Joh5LNvdKII4oD8trn6l%2F%2BA7H%2FzH85wtX5HSh6sHohLkGcDquROlDaHht2Az7f8BuwMoAtOkc745OcoaS29auU95Vj9RBxvjjp7y5RtLOjspO58fgNdcKlVFq2pqlnWnaL0ejTEWcLHD0qi3A8574dDNdNM3T4oAPLMzhtCjq9cD7JNf4RkuFBmfI3AGv5fAGLYNCmATrVjgeZFlHAblrIWlkCDOxIU7EnqNHmoq3%2B0rX9QwzxXCuALBXuu0cqICTr1FoYH0ie9igqhHgIfSScyInTg0oCU4N6i%2F8aaMHoFW%2BZZVkf8G5FPlZHZsvRubH77UXFThk304GFhj%2FkEzoumGjIVOlSGKFTCMdMzGFQznn59dUfOvTcz%2FRYkGrsGQOF%2BaZ0bruNJl%2BpeYwSXjMIuvAuBz03hBBG0iQ3k08DJiC4z%2By2QV0XBvaP0YiAvhEFHbcjGOn3pDEhNlvLzWic0%2B5U1HQWD3uopUSSrl%2BI1kJ5KIWVOWV2cb0z62USln%2BsGbmyim92%2BbSY8LzDU58XJBjqkAV%2Fc4eejbZ43mTOuuMvx%2BDF%2BQakg5XnsiNZ463tliiXAXBMiNHXYOyLvJxGfOLEU3LPBVld89t%2Fb9tMR6oj%2FRKoLKRhI6AWus50J41nI0PjSTzYJdXzCI5WW%2FaTdEiSkdBwKfGaWBLP4hc4ymLVdW3Mby8x01hAkGDazjGxG5gXn1COCqrlj0w7yr%2B0S%2B%2BsTv1%2BMeKM%2F2I9IxHgJxF6DYwxJATs2&X-Amz-Signature=ce752a44814aa4b962f1627ec00eae080ec2c8d9da3418ab2eefa28d08bc4ab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

