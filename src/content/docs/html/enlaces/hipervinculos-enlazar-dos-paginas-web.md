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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHX3OQXG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvKjQfVoCjb8x9pIlxzVKNfbctXcaRpSewmhbyJxzJLwIhAIN276JyH1BM7Jz190xN4dGEBHgQAJFwFg4xGuAwKPHkKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2Yx20XT4WKPihzNoq3AOUDDC8Iv3%2FpjeE4l1hLmV8NN9QeZy7pabRNnDgb0ORyaOn4iHcbj8sJdEBMowASjlK4fAl%2Fxz2n8EK2wKbazxHimQ7pcSjYGnl%2BLdawaVym0ci4sqc34RFWJydg25lENf2J871Z2hSTBrbeqnFTODCz81SLzG7WxcMUM5Tn4YhSszlFWKsAqMW7hHC1EUVqmIhcGb5mf25VkNDasVzwpsUNwvVW3IoJ9TJgXmn2nI6UsLpQr%2F%2FGbASxAvOrXHp%2FpF0qizyU5oq0IrmUuQ%2FaerQ0CF%2B9kqhOve2e5INQgIzTzDxv%2BO5Sm7ZsvfSEBub%2BHexTXFBI3%2FnbcbIdhshYVhLMUfVwLFaChSog1gozrZOLOw8JfdG39atMeWzX8DX%2FrMdLqnkXbAuqAam0jq9C4Osb4gmJ%2BkQQiJu5XboyhVdMvnBMvw7kFuc5JhA0AMkpYJT13Sjd8tPYoK08hIHWc4vEa96wHn8FLmxvD9WdwIUOCa%2BCuSJBlauXoW8Fe3dJ2ylbWTHT4uo7GtF0%2Bi3LHOW55q2l2OnBpDsMiUgWUlu31tEPzliCLtTkgOARdXemW3Z2POd6JmkZPUe5K%2FfBCd7B8fZLJUj7C23%2FY9aCCYuPkcrI8ePwqyC2lO6VzDuv9bJBjqkAeeTddwx4Yz27soOrDtWHtgQVNOUaJ3wjmFy4UcSZYjqoz%2F16uAiRDqgtWagv2CRq0GmqzbnYMpiyyboCHYJBk0Y0GBGPAIR8U2MdKdL7P7O%2FBCArYMAYCVlKwVJVbRcXL5OtzLjYdRAS%2FeAYy%2BVQJ6KifGG3RdimFQLJ0WW996ZJvQtm6yMQiaur5wvCguhmEdYMjaF3bS%2FOfZ%2FqAISsJBYrlms&X-Amz-Signature=41a04305a28109f3e967e19df5815fc74338e2bd099d3a931cee896a89baba6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

