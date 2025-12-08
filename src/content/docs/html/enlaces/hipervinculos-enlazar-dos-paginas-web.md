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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645QN5VWC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfetg8qxPFgKWB71k%2Fi31xLE7H4ue3Hd6w5E6butYy6AiA3Tf8ZXnDPG8t9zniMJIisllGW0ZkuLOvexeeTtR8KASqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FWMKNlnjr7e%2FZ9hnKtwDT5tlw6JNBhRXzMGUxMHt7u9F%2FwBvWU1sImQXxj2vv4VekYoKIOfz8dY9wFeXFL10s8CCcbUCf%2BmYMXYY1zzj9c6aJnlTIJkRAAnZhrhpqvCQaDJ9rvXrvUYvlmK43X71DaEGr6nzZv3vSg2FSNw767ahvxvI%2FOUO22ybwlnSc5Pn2sIAIFvheblGmygM9ioNZREXKoMxKsWl2cby6F7%2FCG%2FaelQEYQumuPKhQhTwGvqd16A%2Br5wUOavRu2FC5ZpqPGDULko1HEwlt7LQcUDrK4oM4LqduVZuFbRnmjn%2Fq%2FBXE1KTRw4q2uv0kV5m%2BdTVEA4253ts%2FFgQPRe4v7R7sKn0mIo8O2fSLvh7u5rjHrOUZPL9lN6i9oh9ieetmPzT8H6mFFku8yVkK8twHp7zuYUPUgp7lZ%2FxFHRKri%2BxfWEEmKCqILy2shDzVbeetmDnJgcDakhXFv%2BRSwj2rARK7XwUPOEl%2BK48G8sqToz4FPoXDEk2beikpqXSHNYq464xv2GsmO%2F6Zz0Zpy97iN8%2BX0t5TNVmzQwLqFG2eagx2MQbzSHvWVVxLSI4Hkks8%2FZkqF%2Fq5breg7MtFGko%2FxmyCd36Rf8CIIU9ow17z6klf2SO9lsvQDlJNLk6E90w6NHYyQY6pgGhUpax0VvLU%2Fm3x%2Fm%2BA0cRlhZOSs9bUTy%2FJ1f2gROfNEFh%2BwzIwf6haahJkgKb1WfF1kL%2B2w7EaHTrMWO0BPYP%2B2ia6O2gtr6Sg5zuYjrKZKjPcwfd2L9dA%2Fb2MuFLK9PHxAREYpGrAwECDN2UY0ny1hQRMHHBOWBilJaKusDVUM4NF1Ktm3%2FGddD9q6gIMaYaZbptP0h3N2%2BfnFC86jf72TZG%2FbBq&X-Amz-Signature=6b1e7e319efb391460ae509028955201ab216c56794b44ef7de0d1c21606a210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

