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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUN6JDAX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T143236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGy6%2FhYw2MtgOpbFtW9xMtTQcCwSH5LG1b2pbJZGMHOcAiEA7OAoo7J%2FXTXlhT5N4BGhTfRpINmEa286sENE2ggSL%2FkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBcPYILixeB7dGb0ircAzH1wgcfreUSv3fI8D5hQ%2FlrkWAprOpX83no5WMoo0O6i23hUKD5DM3YIW5kQCewsxZgh2eYA8bJbPjHDc4cYZNNOzb3twns4060w4sItckFBw5TFcPy5irvGVxzzntsUF5b71jC8GlIt5Dig9AIMpwU%2F%2BZcdSOcaM53aNJqKbUP%2FD3kR%2F143%2FZDZ1Yd4QuksCYwL%2Bmo7HTyasVYGXFeHfRTCdvgLu0Mejjrr8jX3bh1AcdyGzg%2B7wkUiADV0%2FMP9Gvn8eu3NCd4BwLA6maSvQuPAqoxZcnyWde8DPpRfNLwjrrNXv2nDJcg%2Bj%2F2K2sfaci3GmvpzMOh%2FSE%2FqZoE9FQ8xHlQik0xsceVlCm3W3vNYbGQckT0wWzwF7nVb5RBoNrUX7odUdQF5kACF81Ab%2F%2FV7YSOZzOtSr2NcDQjbhjUVC7McSlu6OwS7B%2BlkO%2BXy13mlaGRkfw2iosMTDf2wHLVdwOVnhsqyJAj63QSUZbO2Z6LdPRWWc%2FrlTiH6zN1%2BOaF5rRbUPjCGNsg%2Fcehdgdj7Tb16x0nUYsUOP3ElVrURkr2yYyfS4om4RVeMSUqx73A14Dq70NKBlOeB3Fo1qmstThY01G7gAF81etJrbHmRdQMXpQRm9fo9GRGMO%2Ba1ckGOqUB8k5mvuD1w6MPrgEwas2iGGxgepwh1vltIISQ4izBpVgzPxsrgJD6mx8gnSNqh%2F9VUB5pPVEjMUm%2BgDSO%2BjxHXvl6hz38%2Fdo9KpR2vw7Mu1qJCmHWH3Tk%2BIj4bEQBpP0s29IjCxKTE9pMfT9XTY%2BhSg%2B1AQfd990arNP1Wk9XaGaHfC4vSNUKOaQjbi%2BiTTECEAFZNRUSM5sVy9baHNHQseIf4eV2&X-Amz-Signature=c47c23c44c131c9187c2427415f1ff14b71d98e1b9cbada25614048094c3ea08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

