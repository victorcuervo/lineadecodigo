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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5FX6PLH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T013133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCHaoPN6bfCCd9EVigJFnc2QM9evhf0o66XpyQgMIRrgIhAIHcFsG0WxY3KoFWuanZEyE0azA2ee2gZvnWsaMxkvUSKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAWyJrveW74WJXw7Yq3ANdYcbyxb9Et10k8254nDxYl6M7QQ6AjYAA6U5fmtLBhB%2Fy72unARG7kHvxWVYB2kNGqVILI%2Bq9RkuWbdpYZoyg7PfF2vVjSdDvmLmTjNN7eJryDe80RVu%2BdD6%2Bo6hKYrmlR2v%2BTUX68WB3AZijYxJijfKrQV80V7JV4uxXZth94jTv%2F6G3ve%2FWeYBUpi4xSuG17qzOo%2B4Cizxql3xyyy0sgkW0p1sLZIKmpOha3WjVZo3dTH322W4wo9MOy7bVF49JKOzNAuRL%2Ffe%2BmZnNGH4mFEcbDXlxo3MsFVtIAMqznx2bwZH91qM0FX7loEtg8Kh2aBjuYf5mZKnAbWpWc9hpNjiIDHBm6Fuy7W%2Fiz8uGitELdp0aWe%2BhI7hu4PLGXhIbQIMUTL3WeAv5l749P%2BipwSOOpXn6mGYQPOC5uU0MNsHBcn52FQj0FUFvF8X%2FIVVkjNw62x8tnfGEa%2FhTc%2FnxIKCuUN3lTAiGnR15TUGcKg02P7W%2BppWTKDrE5igf7fxjnHGxCxHqjqv9vXbreJohBPUiVaiqThf2AIjXOp%2FImqpmF%2BC9Aq9G2iUltx38%2FavpsMlVCT6x%2FQvZTBthuw%2FsSwYkhYytd1cmOBGDzEW8JN6WRZ7lZpQkkCSJ4DDX0djJBjqkAR7soVgWT%2Bm%2FEW58dEykjAVmJdyDxqiCxlT2kTAWYfa%2B2HT%2BmcC0gq27OoNN3WHn5h1G%2FrfPxCkndmgwy23o5PXqaxMjW53RSNkwWwvYegqs5manQR3A1s4UTWwwaVvcsQbzbQqH34t4O8M3jANYFIOksAvzMH6ZVmuX5jmDqI5QB3znP7jvLeC3PfILTW07Phq0kMXiaKn8zGM4KzDllIGNR30h&X-Amz-Signature=a564831694ecfd24a2f3004830faf0c978d2c31fb40a0f71e85df10cf195f7d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

