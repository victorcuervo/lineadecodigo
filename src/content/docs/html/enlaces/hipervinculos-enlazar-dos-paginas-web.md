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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S3ACVGH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T092933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcZOOwd2UJ5wHqdvWe3RY%2ByN3JIWmVY3YmuPWd4BhEugIhAJZwPXpDPOzac4PzXj1sSob8MONKBBORRYTxNtyb2Jj6KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igysn%2BqFdwO2Vbokj9oq3APoYITJ0FzaJ%2F11892rW1wpNUGpAPIXV2DM7XZsJEHw9FCNYAIuY4%2B4u0yoLDf016RnJfZFm2uviEc15Nv8iad3D%2BjhMoMAJ2foR%2Bj8ianHXyV5M7qdgwaFa%2FEiY1CvLaAYFHT1r1lpr49RslwrLB6%2F0xIVw3RD7WGds%2Bqcsthcp%2BSZEp%2BxzxsOEKhJ24%2FVEJqRR4SU50c3m3%2BQaBPAyPqIT7NVyYXBbQcqpnQEcr%2BNtBR3AvB2KVQxIW6QvFHfmCLjYdnu0lK7AA8H2KcZR1k6WEGsFUmPEufeur0SiNkcno4U8yFlv5%2BmyUMwgY9W2%2Bf%2FnHP0cz%2BVqJPPnoqdOCETBD4cNP19s8T6D6QFHjqsmXzaW5tzlU3NprO6zSYNw6T4MHHjlMsmzt41bdsd4ds74UyrzzbBO4QEsX%2FpdIOgaiCB2%2BR9wZ5N%2FNizEGYYL7YzafndTcFldXG8Prgs3U1jbEyReQ77iwITLOPVkZXQ8okhReOLBaZyJvy4iWSJFD6OeDZ5sk17nKMWZDR9pokAr8B1mq4mus%2F4OB%2Bc%2FCSZi2ecovXmXhcAqWrHZOUqdT0BzYdrwSSMG%2BQtEIBhTgN4Jogd00WS5oWU%2FpTVM5SxJRIZiNsXkgXQEZ7R%2BjCdxN%2FJBjqkAaIR9Jkqg4j36MT8l%2BJJMC0I60xp%2FL0h48eQAdaS%2B6G3ySYY2Uk%2FAsKNHvLqHkQ%2FMd%2BMyge2LqmMERxtFurP7gSSVeLwimbjM2TPxyUu8pz6mEeoPOwR9%2FgQn0%2BQCbk7ouIs7xl%2FFTLMc%2FQmQB9VOqoNx2WkgATa%2BY%2FJ8Bh%2B4I5XITT38KLY9NuyoKUb9rFiQgEB0YsHEKEPp%2BMWuLPspKRffxcK&X-Amz-Signature=c07be68f3b7e5a890e2c8846de6d813b562738cd018a6e5c42359d4710b6065f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

