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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BIFE4YD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T170639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA2KcI1mDZJsTeJ6oM9ucN8M4CMcuvDUMkuOgDotJARQIgKky%2FIYrIBYK2%2BoSmrD6s%2FbhgHygKbzye8F0OzeqQU7oq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAyawU3Gf2YFA%2B%2FasSrcA89fRqFmxLJQFmVHfUfqX8IxzpgAihiCPsIBx6r5uaB3Pz8NNNGGX8hcEwHIXpmmdol6uXAySl9NeEUgmc6LqIyESLlZ10mgbNjn7agtH4BR39adxpCA1Yf5C7ihsHSKbFkZkl5KVl7DtXlEWo%2B4mfbF%2Fi55yq9Q7WTcQUphVmK2kkGpRwwXLYGc%2Bvj4gYisywrteirJLYNpaxDbrtZ7vZ1lVaSCaU3F61eX8TR6vV0jsrxVAkngsm%2BWVMhLHFfSqy7s0wDpI9dEyvU8Z1GlK9s%2FgaAKQ%2FQP%2Bq5KGPswVpCBfkV4Jpk6cMnIAWEW0VpSu%2BSF0vBOaNGEP4doO%2FYB1cwSDCMAH30NEk1SHsEAQKfnqRIF6DsDyKD%2BIBrJhgFWmkF%2FzxR%2Fju1%2B6pNwE6%2B82TVoyv6vdsTbLqwyx35pkeIU4qEfUG5oa8rCoPH9UQ1XymccuNIabWZhBsrk6zCKFoSoajuuq3pa5nvYr%2Fi3jqgMjQOy2DPwoHd20mlmhBWNsI%2FmeHYeEoPQUsu0g%2BjS2aj6pHLvI1egEjtfBhJe68GV7QiqqUyeyFfq7HZjVgATKeHZFkDEpRd4nLL5gPetKH0pXh9ADPOqkvf33HAQl2DPwlQ1%2BleODFV%2BPdF4MKem0MkGOqUB4Z%2BN0dl5EzeJYHAkex1vR%2BkFenQ2Qqs%2F2HyRRKAsu4obMq31wyxNSFLxNMEtAOit5HybE1KucsrcsiZp2CuW93OJZQmfzhAsvC97d%2FVPr%2BlIOYBIf2Rgvit5kvxJF4sO8H03A4uT%2BUIHZIjbANAYOv1TzVZcoq7fmR8ifbqBjKWSNnmarEFPjdyl5CqB%2Fsfzvtl2pxHFy2x9PZlUn52DFfES1KDg&X-Amz-Signature=1368df51046997aa0cc4b1a1b8bb7c2a2f31fb8a1f2d02dffd1d64929dd53d7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

