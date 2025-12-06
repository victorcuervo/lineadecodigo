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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTK6AU2P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T152659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpL1JNlibrUBwRvNv%2BSe9GPumo5y18ls7z4wylgKu6FQIhAPTsLcQl1WnfhTO8RbA09tjG%2Bauex1XPNk%2FhyEqsoE1gKv8DCHUQABoMNjM3NDIzMTgzODA1Igz5MctLvfY8%2FbT9Bpwq3ANaq4WPlCzSGbyo46tmJcY9GRDc5EMAV0TCuythBMIOKQJBSdWlXwhNvynwZOyinTtgonuXdwNoQn7goUme9S%2FA4dMstwyBMnCNf7JSyTzPpZx2WcYELdwFVs96YsVI2bN60PWaBmPXDUwsE7GBS%2FsaCwDuLflDkMAAD3cJfDveSGgOMXRnP2oDbmqkoroQbnWirgHEuKIXMt%2FVU3WwNvkG4xuqDYQmtMgnVqNIzH8EjVzXawI5okXp5lCO%2FEIsknB9O4aapG72cJc99bQdcGLiU9%2FeFq%2FV8%2FJtL9pU2AHoTc3kZS1DFytTXfUhZ%2Fb8zRaBDMdYLgRsgnwBbuHa7pGEa0RCPM3sICubS4zlCYULbvo%2Faibu36NJ7Cb8FHQhvfmq9CXzuZxuW7Zp9kalI%2F5Hz9kk1Tu6AXNaxNk9mcf2taEK4RfLJ9Px2ZBfvE5G8DWvmEISmY%2Ffy3lStXyc%2F6tSrxCBY87w6Ww%2FF7jnKoo41AyPYAEV0WATMus3Ax0R3yAuIMowv%2BfNfTnIIn7dTzrdeTa1XyoSEPm7cQhVO%2FCtP9k8idbbWB2lAKD%2BtayH5ae4SCEnuy4oKcXWb9cJ%2BgpSKyS1OQlU1ZDmyO6Se5G%2BUEqkhNOIS2%2B4ebgo1jCmptDJBjqkAXINIv7GNDxtgtZURdxhTjadcQf310mdqyXLoBDY3g%2BTcFWJV3mlLLbbdJWwoO%2F%2F7aXQBtWCfvy0EyuCXfIvQt8JPZ%2B4vdAkt6M3QMUWz4OSAEbLPKgpWDfVYcZNti7CZJauRmvzziFgf2mZhKFidV9qElysQY6ELCn7N%2FOJVun0V1X0OauYurm1weE%2F%2FL4t8Y71CoLG15DPJObh55CafBO7k1h2&X-Amz-Signature=d0a84e6968a2e5f882ba0ee953fda133a08e82c3b2bb5b63f42642d59053ffcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

