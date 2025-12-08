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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIEL3644%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T030136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoOixZewFlxhR92XKTk5Sp4X7F%2BmsW6%2BOqEyVRc0vrUwIhAPLtKPLntYEMr4hndPe5fRrm%2FdV%2BkF%2BniJSOsRaRh%2BfmKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpFXXIEmz7zEoO%2F1kq3ANQ7mag0oZcBwGRX7q9w4T2Q7u7jHymC6oihMRK83Hf4O5myEHopQvHyzLRQvJQkKe%2BPgLKk%2BfYJb2QvL9FL0VQSzf6XPx1oGRXGaAoh2velAqY9ZloAF2DkMuFBvwmsx6E0pZYW4E6La%2FJTIYiNdZc0Kc1XF68pJplZwyxqPgT4sawq5nXyJojPPOtVEgzsRLGgj8xrhWJstLMMzOx4QElse%2FUrPS4Pdbu7TEJzO%2BBET%2BxWrm1LjVtn2RT3rz4b%2FtI%2BaHjG%2BP877JTxib2MWO0Ip2MY7qqk9zSk1Y%2B7x%2FN7ebttlBP1%2BjyWUSA2yIgKPgBu%2BBofO89M2ESE0AYETyPE8jaVskhyjT6Hd3dBxKDtjw3GNTR9WyKuDivr4n14HXAXHmV%2BXrJ7tqlMtDqlB0Tj6MI%2FpNTRFCQwds%2BDkDcQc%2Bvh4gJfA4AEa3HFljHfvOQc2wpFzS904AT7VbbZLZ1CgvvLkAdKP8hG3qCZ%2FBXTHEYoor%2BREsITlhrxc1U5rMvewmdl%2Fc4a9sJ%2FzW382lH2oOlSCnMrMHDenJ28tzJoLlDhq9rzfDhq7ZACgythxzPZh4HQNuoh0qmPpOKyCyrxVZcZ4znp5AN1qM51m9S%2FT8xEy7NotTfXDt6YzCd7tjJBjqkAW22KS7IXW3ZcdY5t9AE3HZxnHVz64hk6aoRlLPIKCaB3nklOimTT5pP307j53I6eHGgft3m0A0WvZFewSrilLGp%2BVObhnM56ime2RADogPQDM90VC7K1Vp4RfA9eBf8a8gIvFUWhTBz2%2FKgnYN%2BCeyT6eQT9Re%2BrVetrfGaaDpZjPlKvKiK8uBFkWCVzm6GTnn8U%2Ft%2Bu1AewfBBqjHilVnu8%2BEH&X-Amz-Signature=81389f2f31315875c83d99f172293eabcc768970b527bd7e0844dc657d668cb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

