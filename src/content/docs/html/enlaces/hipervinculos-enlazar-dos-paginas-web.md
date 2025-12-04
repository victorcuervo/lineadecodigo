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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RONTVTJK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBfcicqo75PuLzXoR%2BRXXuIZ2kxFUMm1nr2tDQlXh%2FyRAiEAoMEpOnYsRJg0njOGNjgdUBAb2M8a87ERnZ9b3j1fYUEq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDNLAdzp6aJrGQG%2FOmSrcA1qKuoSz9D1Wp0QzauNSSHF5XpbQ3eAODKmVoexpiKM6atD1zGN1PPUnrxvLGXz6FDWBZ5ri0e%2FC6zCRB6jH%2BrwXUlf7sWEcc0koBwdbK0gcqHiy5aH2f9yrfmUdOIG7dHhsFndzYYM91%2B1LVdlb29jO6CoOndTwinhKS7bqGwpg8BrtWjUUtE2FvyU9Aii1sZwYnLmCwpoCeuISZ7iAr9saOkNijGDT8v%2FPsqf7MOUFeeyJXMdxW%2BHXLKG8NgIZRkXcziDKO4Q6dwM33F1ONsGo7UHUOP5BfTtTHLQM3KyTYgzUrfXa1EbXlxODRq2UV8fHUOphxXWvWagoHuW3CcT8CDq8E%2F0MEPRO2fUIBjPAHaTjdvL3ioKysNCfb8xU5RZRUOjHl1kmDJQJBhiO1B5XuMvU5bJWL%2FQBLZ7M7yQQZX0HBUEYGyPuWeIrKCg1G%2B5oaKt1hFEquYsbI19WYKnONGRrSRECZzeIS9LKk1dZsd7q5%2BbPV3lQgrXqkm9tPLHbWkblLnYAQSc%2FlG8Aw%2FMSZNaZT0JKaAfm5FkumtBErT9U4V%2BrW2X3Jqc3lE4g6xlD%2BP0BGkQYtlmZHEIlKZmJjkVplCAwxMZ7nIyZDr7kIbX%2Bik0ocbhYkO65MKrzw8kGOqUBGuz3%2BwY4e%2Fn56ARpe%2B32ZQfCIXITlCFffbufSB3IxXISzgMokE5licrde2vFTKa2SuSkiCo3f8G6Qen21LvOwJf2BlK%2B%2BwN6izz0pCY5vXPbZnpdu4sc8HnxY%2BwhuYC2SVDZsjJ9gXqsE%2FueYwyRgKFBq4nwpgmWRXB21oUKzZu5bw1084rs%2FoqJIqv355dJAATpbdk6LSFGEkL9%2FKGneZQBG6iK&X-Amz-Signature=ace6c2c9910d113f091e57607b83a698177141899b4de0b17de882cb73fc0940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

