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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWVO5BWY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDsGtWHEC3QAEDNXgEAdc93mubC83RyraeejwYMGvE1GwIhAO5ow4TJw5wGHbDwqx8s%2BHwT%2F4yA4SpB%2ByaR1iXPo%2BKuKv8DCD8QABoMNjM3NDIzMTgzODA1IgyRk0Bh%2Bm0I3aw25Pkq3ANz4BcjM26SwRarAdzx58jJCppEeKge1BkagqZvRW9RWPwvUK7XEN%2FG%2BQUGGa5KNXvJGfWLycn69g4S7K1t7Ekf1IKuVbouPfdkQ5TxNkvxxD7afihqRFZGAORso0WsKJcD0uwEGcjINgjzKGxNeglZEIxiEK9VVy2UhV6ZXtzjgBoBBi%2BOn4sXjbSqj1yBqFMEggNsxK8y1AFObbvGITRhM4v3y8MupnVeawfseqqpWz0FB5jHLDGYlmfq2BT4dHpkSlMOWfXYxjJ1%2BeuGRfKpN%2FjMfVTuScBVIh45%2BQgCY%2Bn9892TiS5OnhOtMpBKcBOAyE4RJzFKYj8xDDczEyyY608SSRBRmV%2BYz1jduOHba3u6lGnfmxv077cxa2adWQ%2FaZsMUf%2B5lmVKFaY1eSsPuZYLlxATg3e6O99VlArKMil0sPn1VBiY6cKRdpi1VNiJvZ0TrEHN%2B08Cbh9dclYZTa8zLJ63uS1VHpL%2F87eq%2B%2BdlE0Elde0X3HhjiVq95mBNhQgRsrIjqhi7Vx2AQLrCd%2BihrQRlStSOPNmIjrirOCTW4Nhx7T5UpG5MoIHVNekMzecEKjId6EKDYGjVohDEA1v61vaS5A6EGigYU5BAAW0%2BtMlWovCBHkAUl2jC2ysTJBjqkAT5PybvIDIv011bD%2B6oeGG3KY0c0V%2FKClyYOn8SUHTSUxyimHFN3DutgwH2yclmo7%2F8kvOiWEYRP8pXtYKwyP%2F7B%2FywYaQ9DMy5KlEYgzCB026kV2G8VgdU45e6d18rwCGzWRWClQlLUfm%2B5ms6DSJPMkZvmq%2FdSPOyXdM6%2F%2B%2FidNcBLVhLlrMBe%2BICOH2cVUTreE3uzoqnT%2Fq47ZSbJsxGBqmyY&X-Amz-Signature=c2d595bf4f1f2e356acc62faa3cf1318616c8355f74da359baa7f28e81eecc42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

