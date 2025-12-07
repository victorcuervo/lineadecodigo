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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKLYPXHW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T004449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvWOQdkNXb0tnVWzbjAiKPSqT4BUJt040ovVHBY03eagIgfFrAKr8x5GOuiLJl4sMMYWSQn6ZX2FZrOUR0mq1ZpmIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdEWOuMJg6%2BB9H5TircA5E0oXAdgPDwaLvLMBYpCMu8QhX9vOykDE9tKR50rM3z1kr0qpaG4crC07tNs83f8Tpg8e4v20rdLye06z56Z4QroNcOve3zP7fDjw4QfpOOCSQVdos5sYQ3ckSL9Jes55dhQ3yagTatoyVagE6dc19%2FyL7by26MIJPx3Te84c62Ls2UIghgAuPIS1vjJQlsTmYM89jwqzOXDZQkhckJ0unozfn45Xa54CZeKQt7N%2BTpAnz3bmv7uZivGJOGYGm3ayQW9yqRhOkUffNrAXKagPPJg%2Bye8NjUD%2BHU8ddHOMuC7aBDZVkzZtmHIp61APhQSalURauPoqrc1M3ZySUmbcx4nkdAne%2FtO%2BUOepq1bfWX16%2F5EbUy%2B66EywTs%2B5eqA2N3dl478kAbMXOAFpt0OQcx61PzlrvvJVuzp28iMW5X1LJu8HzfdnZclwqVoRPMOb0dwzogJwwU6V0lMO6yNPZpD7YeqzggIb36FjAIbkWkxAG24lUvtJcAyNT%2BngLfrE87c%2B9iRUWz%2Bmq7981WmCzrg%2BPyO0nN7fX0sbfeXBTUW1er9gdSPdn09tDYHR2Y38oVXJGKrU1bA6FtvlNAe%2BcGe0m4XfuF7cqx8Hd1QxwCMFmskPI3AeSkLxQ6MNT90skGOqUBywG6nfLDPuM%2FFFBX5INR97Ahkhzpg4TelIRo7ycPVzDB6WhKjGwI4sL9jmRHqBIALybGYjvVAD3%2Fxfs9dZ08NbDX7tIXGv98YoABwZ1OV6dzMQ5IqghZJ%2B0gpfn%2FSy%2BuVC7fxsBzkv5dyoYxB8HofUcC%2FsKsx6J2Fyqh1HuGVu%2Bm4P9X4cfPdJc3oQvxBDoxwNIgxlyeoBpdgsJPz%2B1aKcVNwB95&X-Amz-Signature=f4028450d51a32e8d400f41b97b480ee07fefb07cfea1911ee0570715f42c78b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

