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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWUBZ4II%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIHXkUnCbW7C6Ng07DzNjpFZdtHGCG6gTkMQ3tO23ANoCAiA1CM9SqOXVTt%2Fy%2FscY1LFenOB87awBAKSOYlmV6ZFfyir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMOuySQyStuUWi4cP8KtwD3f7TDFKMLlneA14IL1dJ%2FkQdp5HW0tqdUKOjMsv7ZkXekKWKBwYFWkrihaqsEypcCh8PMM0YJcsTYZLhb%2F6ye12nRL0psCVNUo4FfTiTWlZdaFbIs%2BMA00AD%2BzUFYomzxRTFgphxX3WECfpf5%2FczpKojkCSWXdn43xbVMdb9eY2R5KvX8u2wIzC%2BfGxyaLZBEDQGaI%2Bajl7SYxWIBq47e43kGbFaOU1tfLeMwmbeleKaZ9ak%2FnxEPamz7ijBDv21AcOhZw8F1yEREAcK3XO1wtIVa6QimJgCYKCVM7zRxYenXgoyKQ8fktWtbiU7vR2uEkI762AJ3sMJJOAX996AhI962idUlb5xZlAJjQKVlzxrm9CuZAhpvm39FEkPHU5vmzURSkzAF%2BddM9p0nBVPLijMrSC1XP%2FLLodPLBcJ13qmaLtbB5HyjDat1JzZH06dQRKI%2F8fXuOcLQwuv3K9G0BCWYiEvMwXyZeKQsNlnrxg71FW%2BO%2F9G6%2B1cmFw%2Fa3UF%2FOuxB5FCAI9exURTUv%2F6Le9ycfLQ58lX5Nsnf6ZozmSgF3MraVv%2BUfYRVfQh4zha3XA17s2JURvPoDGRZRzkWQ41bN%2Bt5ej7QZlGywY3MY1viz34d0zyCZD9ixYwwIbFyQY6pgFrqUIdJkLxMZjJAYYTi6YR5oNqTMys0LUD7vihEqlKskJuLojtHL0GM4URuteI20LwQvfw55rYcXofT%2FbJZSbLgPOCut72dTc9P6HZUoKxllC6iQ9JsJVhwBauP1dolebnEmmoFRdK%2BeP%2FSS97LNkXedHsExj6igRRwoV422G306a0QNldgmn98a3G6JtHyznoM70cnxMkK3ZhfaUVritKp5dpdcFi&X-Amz-Signature=bdccb6d7f2bbade1850bdfa34be791fe3a045eaeb0081ba48ba21b151bc9c26c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

