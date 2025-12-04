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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652KGCZEO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCGkPlzgnvXUq%2BvJKjajy7euEQpKok9TWCLdkoM0jRjqAIgE7i8cRvpLBHWi0QwKlXeK1IoMGawDDSLcGtIrXfTZYoq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDKqiFo8IJoZxzT506ircA0W58tGk7Efm9Y2r%2FyzDoh%2FBqOEI5COSBhl%2BMB878OLs%2FN51mTK3pHi4iqZrzzRu%2FiHqhQdGodlA8yzDUBSJfYL7FuscbOeav3X1rY%2FdeeNpRkwKXuXcDzfgQIKeiPchYKJBl9UbM%2BA10BHPjkPK8nyBcULD2P4fwWEe6VB6F4YJfCkyGoymSKF6fcasVuybpC%2FjC7rkJ2d%2FsC8EY%2BTEKoa%2FFJQoU%2FMF2EKzgXiNRLaurWc4udKuIFP6BNdtwQlRbFLJgQ5SHQEY8y6PeprXG7p9bgcIQ8t6t4e3302%2BF%2FXht1Uc5Y24FY7zKXHPhLVgfBmznZVfWHOKKzHgHTnBpvvlDtZf6i1IuQcQIhcvFMVXb22l%2F0rRhwgMMVgRrF5mDXB7UCYiwUO%2FvwPHbJjXjOTC8Jd2WVhfeP5VN7FeRedJe%2FYf0O8jFNTOqIGv6P4bhwTpULMc1cLjfoJdoEpRB3gD%2FVyVA2GCGJ3%2BfQpTKFwCleEA%2FGJvUV9aYpqjW4%2FztYA3P595pw3kWZtrDMYN%2F%2BhsP5HTQqdT2li1mkEW6p4qS29hvJqPL8t6mHidV1rk%2Bo9j%2BtESnLsTMh0h5Gnd7X%2BWW7zgoyYMUqCiVXizRV%2Bmcv9uXzXW%2FUYO%2Fk6OMIv1w8kGOqUBTrAoZBhoLGlRm1Wpw4XCRGsQsJOoQKOiMojQMfLRm5x1NVVnfac%2B755hZyAvgkQ9xvuVtER1IMHngJf%2Bhd0XSBOrOH5JXXX7DPfLZqn%2BgZiXYZith2SGzmH7xl1WJmMKZBRSEFr6vm11LmHw5Jfe1Em5EwkPcbon3yFhVfxeifvMytW2dIDM5KZOVRljyOgLjYyVKXkDou9H3EXdwUb%2BkbgcBbNZ&X-Amz-Signature=37f712f6cc5f9897a8826c18e98d86e59d978fb83bea5da6aef7efab3bc3f033&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

