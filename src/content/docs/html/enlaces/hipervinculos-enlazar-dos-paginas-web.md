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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MCAGCDO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfbFMlBXxa%2B7Jn0eclp0aoTGPwSxiFS3%2F%2BoN%2FgQmoMuAiEA9CSAOpp0kNsdP%2BVtOlDmw1ixGLagBdk%2BemRV1tHbf7Uq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDEbjN1o4wE2OWDgqyCrcA%2ByHK1hxm%2BUMhPg%2B0zfgOt4y8R1bhvVyrHuVnz8CjZgcyzQCKqZ3fKfJL4pe5H35SJhv4zlijewjM1M%2Fpq11Ah0fKbD1QPSD1Zpv4yIH7LYOVeLszEso8qHRRCEOaVnhL2%2BqwRXsHijyRAxzNh1NG6AGLmFeg5XwNutVUppHH%2BcuAxysKxWaFvqL5oaOQsvVygD9yK0FAcjyzO2kuik1pUtZkRgG%2BVDJW8Xu0NoD822pYxLCvdBFdIb5%2FgcodmWNy2ljPvZwgeE7DprpniXCdImvqoajo81BL6Qfqf5n%2F5PEx5%2BCFAa9eQRnMIhYBsfHioxn3issE%2BAUOSo3lk5cIOj95Mj4teQlxNvsKx%2Bg4mCBxIjC%2BQzrP%2BHSMrEEKOVyn4c0%2Bxue70HOKogBwnD%2BmeOq0LLIx5cteGPVtDmxKU%2FSWV67964Ta0pTWhZMFOBfcmLYea887AXzD9OCDR2mPu8Z%2BCehVmvAKZdGND%2BAgVtopWbSQJ%2Fcgmpd%2FjqaRSp6WBWmopTg7KjRMU4suvrNK%2FR4cM%2BzLx3J5WkUol5WZNWxkMlfDmYw4dS3soiT8NwhpODwFOiqDBxVIaiM4AQdCD3xYgtKBlN2W5Bnyfkl91GoX7fUmjrCt5815QdPMLLGzckGOqUBDndLvMSdtdzSzvTrK52HdCDye8d46RYlQ5%2FTT7VNq23sS0V%2B12U%2F1FJVVj6f%2B%2BWvnx36n3K0iqRMSHri4lHttn4SWxkOjMcYdD0zVQyFC2lwpU1mQo5VIyifALvajrma4HR76LqWfbr6SDFNc2iYaficKC0YYER%2BqqDWtXOqVqG3FK%2F10Wv4xzB4dsm3W1%2FqRuvcfwqPQx%2Bp3WnRPNm%2B%2FAuXr9eX&X-Amz-Signature=96975d1540478c2f55d782aeadcd988a083b1e1c6211bf1e5ce721b26fb9a793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

