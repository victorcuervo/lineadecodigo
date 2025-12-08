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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPWWPK5G%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T064913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfRT3QFClQEEUvugVOKkR2nrK3gbFYjWuTHR1SG0ibEAIhAKYYqXZtNmGWp87ZYHe6QVVljQyiNRMMfN1dtO%2FpBXKlKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV30Jz5RXJuWXPvEMq3ANWlLU%2F4pnq1JWwox5Q1v6T6%2FuX238boXZGAVNiOSf0zB49kK3hU2GdNt%2FkAhEgaGelnbEBItM7l59y0ucOlfJ6j7rEM1Ce8IFEvo%2Biu074FtZgM1Lc%2FTutCIniqE0AVVBEyzpftgdB%2BkWRKWdxK5iuMqu%2BATpNRSfDVeyBbg4UMC90iobJ5LBqMKl0GcNhwHDagTxoXnKMzRmxii0355R2u7VZ8S4qdDyhRqjl33vesZP0svR3b68QxCBYe%2FvlAhr7LWmYTEtga0XOxuIC%2Fj5lp892YHVXTQ7LJt%2BELyLnTC09nEEtev3y7UTKY2GWEmWzM5sKEkuiUaKs9euO290wHMHOiA45SVk54Z7E2gn3rDM9BxX%2Fw28rl6AUC6pSw5zfEKdvCrwbL9S0bY8Ca2V0XHKyB3hp%2BOtLXiwfHfPyRhLD%2FQNA3mcUIbUkJnUM3x7C5DWIxW0ix7LLPLkbYRj10M8Nqb5tOASpwYFSKx5%2FziQH32UJyrqoqIu3FqL60uj7oRQbTNX6VLyeH7Oj6jbIvaRaDC4tpn9FPmceJNVnllJIUfHvHpZBMzpwGAa0Upj6T5kYO%2FqHvHJS4%2B76C0chkuNnBvNAu6GMfPb%2FJlMkYUepJOE67LiN%2F8W1SzCG0dnJBjqkAZqUMOAEeh2AKfl2vra3IUB4I77T2znIcoosmA7fhD%2BQQg96GjcWOG4jOZjA1mel4reCxfnNTk6qyLDjr1fmnWoZ68OUMssXvFU%2FfHipPx5ISGBt4gJrPCcE1HCHMXhiLwG%2F4c235n364O4cYm1aCTbc6bdWxxQbOgiJO54okBTEQZukVObjS12su8oSaURL%2FR31VjL9w7ZaIhM5oZsEGcj0pA3i&X-Amz-Signature=395d58a3a0f5bc292847945887759665a289516ed4e8d4b8de6ead4a81164cce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

