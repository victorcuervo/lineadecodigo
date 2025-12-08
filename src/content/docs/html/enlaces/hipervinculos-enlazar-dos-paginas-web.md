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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGUDSFG6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T092526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqGUp2TYuiNH1ghMlq3ZaihS9hI7JrXz0psw%2BvgaNCEAiAB5mKCEEhTyC1mxBhtes8pwLEZSQ0%2BwL0Lgx9MiQnd8iqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe9yXNVPguJw3dZyPKtwDBJRkq30uD22PTGLu%2FM1q6T1fLKyKNGOmbYV2ab%2BKPOL6Jyi4mMxXrWv84WU03vKgAaBZBc3GGH9fsgLvWyqOxrya8%2FCYFGQxPrgTo%2FbpNKxJLL%2BQDePiGWY7HNKfhgWQThsPkfdyD7H6nj1lMALpX3%2FRtxXgy5xAcQ%2Ff6vGr%2Bpkxz9UbTiHImZGZ7QueHpJAZ3hOEPCnhEFrec4mrlMXEo1K7woGtLt6ELLd36HLUet68uFN1tRtLjod7bmoGwmMOeJq7ferMA6Y%2B%2FogQ%2FfSVwP8AufwfOHQWAXNK4ddArTlSadCcPDy6445VeS2s9Du0Uoc4rH2zqVy%2BrBHDJ5tAfiLxCBi3vHc675AC80ttz1FOjoLXUJuNJ3sQszoleWhW79OTt4RtdR1AlhBCKyAMtIG8QVoMrGhdK7VONzAZjX9rVhB5IQvCNvLG1by1it%2F8FX4HvAR4kSQpOVo61SS5o35786C6v%2FMY0hWyjhsdUA0qhSouUoWm56JckdKxLHH6wUiixIAxEoNSQHkZc84uHdsHj2UDGVmgxLwDaoOHf34lkQhUIaxg23pcg3fx5nsA36UgUxO0DVAfS8SiA1DV4sFwxV65CCGVmJhjqt2o43OAlwrewuunlJiUaIwk%2B7ZyQY6pgHFoBhsPjWLELJdxQPFq3J%2F3bUv%2BvaREK0%2BCPB25tpqXFBz3hAc4FaWzw7WZ3481JJK8Wsm%2FSwvGP4Gtdc98nk6%2F7sZY3OUresNxz6WXMxtnuwoOt7s1s9fowQv95jC0mbNe5HEaG5BpgLPd1Km1A96NoDdxCKh%2FGhfPrdETdTB2zsVBArSRmoP%2BG5g%2FMOBw1holXa2cv2lJF%2BD7sU096zelqsWJ12H&X-Amz-Signature=c850b16e66bae7fb319f36492d9404b06e5b40f881727ad3ce76d753e8218fd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

