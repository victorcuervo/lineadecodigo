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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HXEP3CS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQC9jA2ickaMLCbqw18FnOo7xF6HHzk5PeoQv%2BB8a8hcsAIgCchfTztB1asHCmfWImVio6clpz6RPwNHebKXm3mgAw0q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDMzChsnwdWZeLhFhZSrcAy8mz0ZKGFayP1fSUKiB5X%2BF21%2B9aYMfgI1bMqV8JsaQxPr9PNSyVaIkWo%2B0kcPkmxQXUOGNjqWRR0dxF0RSf2Yhlc4h9eR8EghOilwWSCdLJeyIaE1uzIZEnhr8zX0k4e8j3W85xuK2oIoGdmeXvDypheXb1JKbDOm8cs4bRqf0sWFxNwD%2B1QRtOPrqTLfj1vG0ULHjYnHh00xWgVzou1FqcX7sxhu7PeG%2B4uFENNe7TYV584V0pOTyruTYN6K6mGMnKN2z1ibrTJbLE5w7uD4PvHAqinjrLLTr9Zw8dSLiiSs07elGJCR85TCNTe37biQRItFr0cyT6GNTXrCaJVTesbyYmzVHL1iYgJL0c5eiASV4qEIcY8daFZcd14VtnOt67XyxYi9zS9MtU0IEcK6L6EWLildHw837FBU3pgA18wB3ZJ0od22%2FkIuvZw9P9GQBa9x0wm1SzQZzE4N2SBLmOoRuk2j5518XYC6LLUHQuZzItc3VekX%2FZZhbkOmeyNOhCemHUYVTZhML0VsmNSLakqcvLnPrwxh3nIe1dcwoxAXhvGKXqrf8EuyUGVgmw8uXnUv3VfViIIhvQ8N8BtJAea3WAhXW9VL%2F2t3Cl%2Bj1aGcBCr7HwVU6HIB5MKLcwskGOqUB5NqxJqAmtzGfI8DIvimbJelJmrXydKFt%2BvlP%2BZdr%2BMWO52qp6%2FE3khw9hqESNjnK1Cx%2BUeW%2BwV9WFmGQII1Ot3zHvCtUVINcyv56fvrPe90wt%2FiEwnG04rIz%2BTaYvbhMmoEblHcu6YlkoonFXG778v64zFT4s04HkgWu7kRqlwKywUBVb%2F%2BmIZ%2FLH5unlYxvDS4984LwyP2Wm5Zgqmx8CXQOom3R&X-Amz-Signature=f432a5d275e33258e0c36fadea10a1dd33994fb8e830270c7efc491d935c2091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

