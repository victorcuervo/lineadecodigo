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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5O5JXEK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPPb28x%2BvTqsj825wAsY8ZKDORXb4tPj9yUh8tTy91nAiEAsbXyiL88Xzj7Ey5YG%2BXW9E8zjiZ2eTxZJP%2FvrIHRiIIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNl%2BwO3xe0dsbkzdSircA5s5KKhiTpswIU5OJbWIGsdzhkfbAPVmWOIvx4ZNuVkgkL05%2Fh98EH0633Wv6todjRdfiBDdxXy%2FlDaTvf7L5siAoDH9AyoJqIHxdl%2FzB2xmhjP8EVxmXSk2DF7ZAUsycKoR88YFt12oR4LxfgcSIY0jx5HxBZeTPUYmGYw9w4xHNUdujg3YyPhdg%2Fsvngr%2FIHWuCzwjciPt1hLs1UMfK4mH2LCJ8AxDo0%2Bkj%2BNdovc8UMCFI1oze7UG5UaNHX1YXwoN0Z3ddJQ62CDnkeS1P%2FNg8bRLIE8EDW%2FV%2FUkhQs7UXPtbcKXiSjssSLAvDqj9rLK2cLxVlm48mweEe6RwSTsoxekxVNJ%2FGHcxYGeg%2FsR8v2xPEafsjU0R92K03PZGdjTmeiLarPY6IlfCqafk90fpzKRHDNSc8o8RCUhblh9t3EVhDlHYTkdepatdrmxfNNZN6ezdWFvGG8kpqMdlkvd9sQosFo0KVT%2BcPb506pmXa%2BXjj691ddh33t0MyjKR1vsjorXoPJtSLrOuzFvqx5jrFDQ0wMmWlF%2FnjEkflH%2FMA%2BPZTWwD1NrGsIy9MauDmj6fj0C9itFPe6HsuzGNq%2FMGgA43LFvtA%2BjolHAKI8FbCkyqZlu6ZSTmi0D7MMuz3MkGOqUBRyZ3jB2UyZEzxuXHsljNnclWz9dTXlAMekStHgk5ITIFpkeaUNl6LJuQA%2B7vAYO4TGrWymOAeCUy8SS20xQW9OsXfxWxVxxd3g04wkuaLygaZEqNdY%2F%2BQGUQBcOZUJwgy%2FLMG%2Bz9ZFf3wgrUOtY8cVO6xerVUC4%2B7KapCBJyn9BGOj9%2BTYWm5U2T%2BjtSkdkcQ%2FpzB4iEXn3OH9Bb5BF0tE7ES9jJ&X-Amz-Signature=976df094dc6a75c1766cd51fb41b64cf39f5b554740b5113b72d35a1ff0570fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

