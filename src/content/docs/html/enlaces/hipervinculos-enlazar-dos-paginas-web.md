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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E6SGYRH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T223844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjZQTNX%2FhTJMR%2FWgxBBoxQ1vGcjhP3cO%2FMHQNXI%2F2s%2BAIgRGoyPO6lZAdbHELqbJG1rLfJHHaN1xMjZ%2B%2BM2DQwFSAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDc5wMz0Q2HlzFh8hSrcA%2FvSPAIHaJxY59NGQm3twQWkKIqUe0NfOwD8%2FnBY2OkAZV8QkkYyNlLbOGAyoZZfrV0qJ6YMtmxcvf5SXxE5NvtNy2HbWEXp0p%2BC7NXdfcwavEBUrcIRyuwnLU%2Fq%2BQxH8968j9v2mePeh%2F%2B5JjIaGOf9td2nfSWX%2Fgovmt9LCT96dQ5y8FAEwMXo%2Bd75Ajj0JvwzS0aWaBtX8zDfn78fyaSLXPu4UYExpoFx5ywaVLPmiHjYf50wjRPKTEfBFRNbOFRGUKUnBZ7nhlo1NRuE0%2B1r78hq4o6ImCXKW4vTJUy3Yq7lZyahYYKe43Y5LslQENQzvfAvD3aQ1hElJxCkhyVwGq9JK6EP70vVxj6rrzuj4IEdh%2FCLb0HxZW3vcY2kq57j8Erm89raenWB8vJ%2FQngRhVKkm5Kc%2BzU%2BKVmSJXQ7kv9%2B6wmA8MsJdGfOkg7hO6NDcWF2faF2wHjgwCQnG2jBfGK7ij%2FFuVLzoFwgWedqFzrhkWD0Jgnx2EOd095SRHwe6LKb80lhyh7Gx3Zj6BlpfOAsinuae3QfIPH%2BskKShfFKEnYfgWXXRlLQ74hFmj5D6%2BJZGMynlMS02IeB7NFCi1uRBCs%2FjcjUULVMQXBJVhyvkO%2FZP2zGUFqxMNuh3ckGOqUBEseISjC4my%2Fh%2BTEq2xLMGYfVcLwXNj1UXUlRSdilbENx%2FW5jVvQNtxTOb76zG3j%2F6lGlX9g9OludE66631UOJrOqKpyWSt1OTMPXNX71FlWWe1%2FmSeYWxExIsKC1NEkXX3ZB16yBje%2F2JCHA9Aqx0Ng0Pl0C4PhN%2B%2BKH1v7pUkMzw7rFTI1M4Hp%2F3%2BCp%2BF316MweJDcbxqIG2dEkVTirkINzHNUK&X-Amz-Signature=75777bf32b8b85886bd9670f70f0cef5aa671b9fb00d074d0eda3ff348491563&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

