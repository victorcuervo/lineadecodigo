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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUYB2XQH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T103339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR483vfhl3XUMD2OiY%2Fleu1TG03%2BbrVnVuUETJcfAoIAIgVJD%2FBfrBCwV3zUc8s5ZJPA79M2Z%2BR2LeRtvPda0SFwoq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDPjeezeIBuqpO4noFircA6MiilV47H09UaIYtNC5rOqdNiAFhOX0wbMkvyiVlRlBJf2q7NDMAe%2FiKKPpjebwxG%2BN5H0Nph43en2YmppY6vtIqM7luofgFMvWWgQn5prcKQnEdpGzK%2F1KJDYUeMgeuctd65lyU917iKX6vXlY%2F4TPw0sZKrarOSqYzNEzbPKqcBuSogu1PhlgxjVZgUCpEpxLTHGljzTu%2B0xWCKgiyS%2FLd6wf%2FeW6ivf7ZD6oe5xl3kM1iST6lkSvMSHYzbfBicD8zRpfRJ%2FGEXUYzoOdO8hGJp%2BOmPFi7pAze6Hxv%2FQlMpx9yvfltmM1luaNSL7HLLSNsxrGSYn5teBVGZkC0m0rVIrUKqjkALtLJW2WPY9en8Q8tRq%2BOCvh51xlmtPzno0khwEUaCWb2FK4ERw2C5dRPlnP%2BE3vOw8wbnw8eX%2Fmx0LN7d3iEpFUJ3LJFmL49DxYLwqT4SstLkX5pnQPjF7x5I1Bpkdc3vKchbCUlmjfDBIYbyFwu57lavJCOX6OaMgt01xYbN%2Fx3Q9KN1kF249NmoWoWpda%2F%2F%2FocbFg%2Bn5ni5YbtoLSWo%2B7dtUOq%2FeJ0XL%2F%2BMB8TZ9T3XF1c%2F14v1JQ2vyBl5AIQBMoD7ktDEjBB%2BnTQu3v4WOHU3OWMJiK0MkGOqUB8XqTzGE9WuC%2Bi2kGw%2BwCy2ENoDUHroZ6BGlzcsv8puzCHkoj4teOs%2FP8anGLwr127suBmJNHAa1q%2B7C%2FLYBXwOm1SaA7FoJM8aImCjt3C67rzujtbDhh08MaZdnv4NQLUeQKvfvPH4jJYm30fOEzq%2BkumhXgCq17YrIABiY%2FaraQyh%2FNujwkseh9PioYskR4ImrjNUym4uiqmS9G%2FhsQiD%2BY2JLN&X-Amz-Signature=d51de3fa7b58a020f6f4db33507ea508a9ecd1b9a756abbf2270b566d1e98089&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

