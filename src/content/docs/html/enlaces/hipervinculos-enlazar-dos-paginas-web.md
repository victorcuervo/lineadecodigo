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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHTLCBJO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T020913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgtyNaoRLtUFhsv9X5YiKtVWrO31UXa5UpCayrAAlZuAiEA9EbPBGB5z1LKy2Fj2Hy0YPyoid2iNHmXl%2BRRN83JR1EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAy5zg3VL%2FbUeQGg7SrcA554IU84C3leu4HZxhqVCB%2B%2BSPnaaAia%2BakNtTEZxf3FutF64vFapy88GM%2F0kgqZyABTI9VhMVJoJVQ0YZNNs%2BOZEqup9eyKbfdE6h8PLr1liO7gi%2FwFtG%2B7IbXmoXfnMqtcRrorQtZbfIAHsOZIJKsEY5oUGoWWdP5nh30BxQBEa7q7n1fZ0zlWy3GFPFhIFt%2BESR5MW9EksFSI1kNBN8tVIF65iVk1ZoEKfXjlviLRfxYw6nPcmU%2FL5b6BD%2BCBLdtU6TPOtIe96vn%2FFcTPJnVVjBhOJIAUiihUof%2B2fS3nCNECf%2FlpMUWvmfYiWQPeENHQJM%2FBu9Wh6aiABMwt7qFbcuOmk0cuOBNJu7vO6hgVli199oiqdnWAIW%2FiGFnL6CTPn1QYFNDT%2FI1T%2F8Av8s3w%2FK7%2FTKi8MWjPADVqRqBLk6A1jl0HnNNj0cKjN%2BV64frj7CxdNHw%2BaVv%2BnXyk6G3Bxb0pCiHzZdXKoR3YNghWfxNog1iv061DLVLuoJ9gEdiRXRGFPRqx3BlRyZuMlOvAC4M84WBvVOaH8WeuCLAPdJiSTe2KMJA7d%2BhMxLgGoXGc2cvQQAFtLq8uvc3A%2Fj3MBrka%2FQXhxJqzG8CFRrvpJZ06ixvRDge6kNEgMLTR2MkGOqUBr53m49kXujmexkJKKkkGQt7a72uj9kQitvZq9oe0CqT9BRRqyBrWGWLFDahLToSnWfXz96nczW7jvlsH4tHtakqa9mlhxTXyi5JQ3qGEXzmbFM%2FFGU%2BhZuIEMtC1JLiEqpXklU%2BO0X8X7A9KBNihbPQCRrfrgnHXTR9O1P%2BNZR%2FD0cwHY4uOkElQHr0Wkd1TPwNxE91vsLDp1dwg5Txa4q%2FEuFdJ&X-Amz-Signature=bf409facfe009ee90a65049e4a55b793045614cc7a773c11cff0bc8d330feea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

