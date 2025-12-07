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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVGXJ65H%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T092029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGi6K161g76hd%2FOn1B6aE5OlrPPNOcO1Mp4wPtpXM3zPAiEA3VUm0Odnc%2FPbYbBtWsuQdTA7%2FoGDwm6iRaI4xEVOB70qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdrFbxrBNpNdhCBwircAwSb5IVlwvYroGplatKwI2xZRvrx3JmP2uTp7H1WQ%2BDWKjGL6bTlxcDS6XnHgIo2sx6wM3AzRHuDhAC1GG5GZRpB8wfYJqka0LQSTASTjK4kaKzoULKK8uIlMSrJifL3YZUDfmYwL2%2BZVB3iw7WdfD%2F1s3UcbrLsjysEKMp4l1wuEdnHo7pPUAI7IVlKdhESZ1hHfThw%2FU3rce683gxcVMr%2B31kr79Ttghc6JutLuPMchFws8swWIQHGEuSKj9aaKQ6n%2FMxF1ROfbYLVCk5qsRowXs5y8s709g1kO6Kq8zciOf7paTEi2Y%2Fz8jop0m0z%2FJ76s6HqmexVTQdcAeqEYbqpZCVUk9fx8OwVMtHkWu3YJyalGzyH5b3nGrvkaBDN1Bix8MqTncGRCW7qtfUkz%2B6wJDDGY6EyuQ70C39MxuD8KW8eMjIyBNoPTmlIT3j%2FxkwRPQuzD0pYAroT9CJ8z0W83CybBRwU7cc%2FNYShsQPxqZXFe3vjG%2F1LIcazM4I%2FD%2FrkWoqYzB%2BwtnszvmpoqBfzLd2RR6E7Nd324YbAVFsfO8mN9XoiIKFlVwSxxi0T8kTHO%2BvU0DQmthaKuS7OvYAiGygHLuWKfBDZRn1bl7jOXnxUUSqSeDV%2B1BhlMOOa1MkGOqUBbb5Vt9SOYEGZBuDcQ66vHAT2r10Q1vgbWIv4y9GhGA5v23h7Pk0lkCxdUyx6Sy3vxOx9PcHkpxB8jZ94%2B5W1zcsM8SqNep8wL6uiWqxJfXWr8Gpk2eM6pnasj6VPoVIZfpzriRM5%2B0CxU6E5hklJcbCc94lgEHwtehMgMm%2FttDHAIgh8wGZ7xuniqwCATjcrf6KS3wIriLKFkBVfpAmX1mcuul0m&X-Amz-Signature=fad68775b4d9d9b32e20ce3cd6e0af06ceadbeed4f2fa09012fe3974910e8184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

