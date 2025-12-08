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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPCUGASD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T025521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe6MR1Q%2BksfC9qklI%2BY6LhcdsHNLU2xn7848PmdOdPqwIgZqRr4MW8Er%2BvA4C7nol3lCiMFJbaIqNSo3aLn8yYzckqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD07KLPN51ehC14AayrcA%2BNf4D4TPn%2BssA2zI9zRANgnTF4d%2F3qrq%2FNmmEvXXziAJWOg1yHeihFozxPTziqDn8pwHI%2B5Ju3xIn1tSaZ0Zib9Li%2FAH3yTQ8ZuRYo9IuXYjtHWlj72x1G2%2BvqBwUy6TfxuedKMJS3OamZtQ3qnXjBpoCLbr9SaUXy7I3%2FRFVc9Vj44wuTP6g800ojRVxeAislsvVuHgNsJNIMsXzx43LsUfXNukS1j9UDOaq4bqrGRKKORNc7mPTAnKI3PfMdhqDM4GYYaAex3hdCknkQ3Ou1s3rKWNuKWlXhI1KZx3drttPsD1T80NCT86v9u6zQ14glhadc9TB3Xe37MSSQ6AxLWAJKF9QXvwaTCI3c%2FMYmVvc6BauBVytkQVM1zSkeWuiotlqZIZqC2i7VUBLOGZjl9zG6BqXn31mmPNtslCSxXsZRUVoA%2FxJXXPgkcsU1uelXewAiCHzHImhpCGaz0%2F6M5R9IWuT7mYqv%2BHjI04JAK5G5biY%2FnxidmbuvbJfX8FiBamrSTl48%2FBrOtgmOXeJpe7nauXELsILI0Dzz%2F7dsFt%2BUjB2TokUC6HfoO2UadHQLSVyn0a0DimxF3Qx64PPZ3EypXebq7Pt22tr%2F6Tbte96gbHBDQj2MfKQPtMKru2MkGOqUBtPr6z%2BIM74REmnX6utsoe1wa1Gzt0UBPQvGJZjKp4XmzhtFL2jOSnDZ33egzzEpKZBzv1YHTm8XwSaSt2GB2ALkuwP9ntvpoNP0VunO%2FuNLgv0iDLQOJY%2BEIxnBwXmy8yHtGlYF1I%2F0VCiyriAO9L9Q9N8xXRxzau403DoDm5FRatAjOFCcCdPslW7C4ai0U5Of1eud6WmYrx%2BfR2M8tcv0E7TDY&X-Amz-Signature=37478829de830e1f73b4310e788a03ce311510f0a246458b42a3c0e242370898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

