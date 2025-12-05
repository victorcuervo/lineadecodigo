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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664J3SQCV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T123741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC1qXWUlpJb8K0Biwdrq9rXwD7bhugl15wv09WNOh%2BuLAiEA1gqfcIzaGx1jeczmaXdQh9FPjo%2FTzKZZy4OkEGXY3zwq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNVUKnFC6U8%2BSfKVCircA%2BFky5iGf6ih9umFBX1PKAzcFYtFYI94eFwvqfl9O1Q2BnSShjV85WvHNUl%2BVz0faFex4aVZm5bJhY%2BTnyRiHsqqF4Ceds4hwvVtIPeCtu7ASEa8TVPyAfIv7h%2Fbc%2FC6BjNhO%2Fi%2B5ylnzwYoty%2F1OreVT8uPYXZNAmjPYfCKIwA6u6k6rfGscRmsrWJFHhtTILZh78xdzcnt8P%2Bx5CDom0%2FBkyVgmvTLDihw5jog0F0zH89g72ITGrMdWqIQN7bv46VxdkggeRX9SFiMzZb7wH5KvKI6t0QxY8zBWjhcyVDwJaCs6k9DlSAy5gjDk34JvMJ77QQ4j8WTMiEth4R4VNrECKVR3cNfEaZQj2BeqfuGgGHE48A2OiUigF8SzCkmmTklzqnh4yPuH%2FLvY7ArrGXHXs6ZjffkiQuroEmmFdJvHK8PMEKmHA8gnX54omVsilRp%2BKTZJGKpBNQS3YLSnuF0VRpw0o3hhcxpWcZCwslc%2FyYbg9xpTHI9daE584Uhd0xMbUoAPou6VyZk7IUDes7V2mlmxT3RyjM%2Bys7fln%2Fff2ilPB9VvXcnGGjokaASrOfcDX9aHd7zuL7QzcZpl8d%2FrfjdhzGVPRIuboqjP5otWopeFWMkEWjwWmn8MJPPyskGOqUB8KTFtREg7i4HusxcSF2ClDQHw1aXLL4x9tMZlty9sFiufueW5VXuGMU4YBd7lw4vOV5WawvP%2Bh6Ui314elD18k7mmQNCOS5%2BILgXytG6IaNsly9PQ%2FuM2BFrP65IETIGFMzvjHuGLJTZ4cUI%2FQt5tYyc2JtyJWOQtfmA3Uz0SM6CvBMPeWKnVrhh93iCV9KWVoNsJRggwIWXcsEIOhT3SyI8%2FjX3&X-Amz-Signature=ef5a49666b87eb15107fd98b4290793306855c1b76d0ff75ef5d626b68c9563c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

