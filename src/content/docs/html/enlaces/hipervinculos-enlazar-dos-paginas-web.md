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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJSGNPXI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICoeBgItYhGuwMVjzuNAjWtUygclo9l8OpNd6QaRpmx9AiBQHfPdW4waElbnJIC833aGrMfs0JLoN%2BxljCNhdIhouSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMxkdOLFqrk2rAyfogKtwDGY15J39pkwlrtxUFenU3NdugC1VtC8gOTcRZuAw%2F78L0kkyRa4x6AEDPBXuyzDoucUxYZSTe%2FC82Xn8XiIui460EgqVPCVCOhUk6Avn5LSGmPGc6szjQGyJl2E3W9qZNYH8VZILLW%2F8qLveWGj89STUV6j%2BCzyciWnpmUwwR7Eb4nVCyemy9mwRppeCM2jcRB9DNouTUR2WErDf%2BowqYtByT3VTvd%2FZz3f96AONdYQ6G8fwO4CjKf76vcQrIdW3mT2DO%2BwQvRRwLz%2BYL6gRtSHdCs3OhPTIY5enuvi4hwa%2Bmpmw3uKpj1yIcjzNAhRfol%2Ff5GBStNRh9PFppp5HvHqZVvcThidmn65uR7ritOutP9f%2B%2BEtWdZzU4zhRwpRVEGitSPCD8QBHpbaIB1G549tV1i5imOAHEUKibe59gb5h8UqxU45043NFE97Eepcpg8NIkGNfp6ANsxyGDCDtPyoJeHt6Rs9P50bli1FznUpyLUc2lBNkL59nQYiNHi1S1hwDT%2BhQeAyt0ciiPqaYbkBXhX7JDN7m6D5ofj0ceu5SIUe2uBeZkTww0HSxalvLNDkzVgKovvMlK7dlqo%2BKc5SYwOgrNsWiyt7w64tZTZx1xE8jUKVpRi56FhvwwzabQyQY6pgGinQfebYKyMNrDU6%2BdXlpA1PgMqGvKC3Tsvb29Dm3wghRUHje4FZsykkHtkzxsmQ7LdcgfRU6zxhYK6XneDY47ocJRFYyegtjH0lILuMnE0EleRZ5ZjMrCjYscTWsynr1Q4Twhu7f01uhVcSsaNeDvBx7eNzHyQAyyjPHw6wOmoGT%2F2fVXZDxTtCnImTfEnS0OVToBwJ%2FuDDOCnqitsXbPakcejWfV&X-Amz-Signature=bf949194677960db86ccdb75080126c4bce345240f3f0a0fc1b18ef68c9e9c4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

