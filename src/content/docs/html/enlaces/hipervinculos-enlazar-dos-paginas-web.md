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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4GKGHN4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCCc5IzbgZppybF6%2BAOcC2m4ZZ7HrysrP4z0%2Ff5gsUfyAIhAPNcDUtJAuAYhHY%2B56sJlm5bP%2FAmDX%2FdEmR3z10M6yhzKv8DCEUQABoMNjM3NDIzMTgzODA1IgyXzb%2Bpx%2Fq42VA2PDgq3APj5aIpOg8XrDw%2FRpFXdkAhqNFFigNCig4UGTRxBqFOpIVjuDwuYwoggWRfmxou5T%2BcDW%2Fs%2F%2BnprYaiwu5bH%2B6n7AFtLGSTnNi3APW18ZUNKvAxmqD7Mw5rawJOPkx%2B7UR8urVGlaAyBFwkmiaP1hnXQ8aqwvRUGKjnNwkequNAENTknWLkBTnVxxWin%2BUlSRotKBfsTAyGmvonnMW7vX%2BQmNU3bOY0kut31qpK9d7Smy3VXGpZYaGJPa%2BVSuHtsEi7YskOvCmV4rsyhBoOE41csFZYp9K55buZrTWxS7fJIoZ2caAgWM1JAo1wjdNwX7i%2FWGpdu0AdWQ60Qdfjp%2Flt%2BtvrBOcfO97LJAbkNvzLc6YxnRBY1rGg9Fj878knhR6NtRSlPINsOTHxBYrRlPC%2FwlUTQUMKuPTdzZXeWfsqF5mWy%2BW0kmedkL%2BZiJEMAS7H2Hk0SzZ5dUH8R4tvqqrE7TAYlfvYHrjwZUyhru0i9e8Q1ziLazhyiMiJ5khUQ8mPvN0NJYL86xFpkfYQXt6oE5wtlb8aZgsugohbN0u2X2Wi1UjyHyQo0k4v5B8w0E47i4UH2MJfgNNgEk7hVEeSamRwoZn5DbszEyK5r7lSXfy%2B9h7a20jrfFmTnTDq5sXJBjqkAcbDbw06vbPK9OJTswOEvmTxvDVS%2FS9rRiOicuDcnMsTcL1yZhiEh1PgVu%2BlvEclgzkBLaU5evIFasATiEy75aEkNRIsoBKI3p9eMYvj%2Fk21YEmhBaLfmS7Fo%2FFW2dg%2FLn4e5eEgxL5TONo1C77UPY%2B%2BC5YuKncxSbNtxdi29g7EdiSnUAHWLx7jLIMrWEKBJ%2Fb24hlsd6payY7v%2FY16R1yATapo&X-Amz-Signature=7f8512fe770495040760a7171062cf1304377881c25f2433fd12a9870e38a01e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

