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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG4IWETB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHVphmFmU3bvrQSnchjT8nB3MBstnYg9KgoZ0gqPz%2FfAiBAEn42iUDYiIjeOBTQxh5npxWbxWN6ptZzF5kYI0XXCSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtJnZYvh0e4sbWbJwKtwDBj5ZeJkz5HcZ8290pglc4Lehfng%2Br%2FQw5OrDkV35VV%2B3BKsdoxlx9hdsF0Lq76bAd3gkX1clj40k%2FWEmlm5v%2F8pis02IUNBjGl8n2qTk7%2Fm9NpTaJv1ID9TLYOpHBgGsy5zReUzlXjJ7wuGNWhMcYzVbezitkkcPYg0lbOKfVimBUGTguEPdz%2B%2FO6qqBnMcbhxoZarCCxaWbOiKppWjqM2dJnAJcvIAXAkL3%2Bedq%2BVOvQbThc1%2BMX43XvMH%2FfNSR9mD2osBCCpsLP6PdUZjEUwG%2Fe0se7JSks%2Fcsm4E8a7270c4l50qioLO2ASiRq9tGHz4LwdanzHC55FaB%2BZ%2BYQISHqJkOoARce9Abro38bbq8CCMeZwlkNKfh5uy%2Bkf9Jy80yI8Z%2Bx3y58lGuLhPniwn5715gRNMwzGHMirdLKZP0Ms1x4%2BzV%2F7JcpIMBOfOgtJ5OsYDBHJ7nBQzv1p1H7HYkCdYvJOiNCD36KprB2xXRM%2BI3lJNHG%2FP%2FAlMWaeXT1D6ouxfpnEL2HnT7MjsPe%2FU%2FzX52zOBOms0tMfxREa1cIiBrGc0z15NnwV%2BoEV7fREdqI9hkrQva0ZogmlT6k5kCDKWAY7qdrWRUmEnfSYN%2Bxc43QL6dG9W7Z4swodDZyQY6pgHqrWkhUKBcb1wR0y5MpaVymTf915evTktdcA3hCrG7N7%2BQsPOsEnZlgvBOayoMZ2ERCjRjilQWAwWI%2BdAFf8kYh6DFy4e8UEf5E9fQQH1%2B0fym1HLncPAnRpHyvYV0lye3bXkXRiZqVHR5gDNA%2FSHpfFUrpxI1lAZgINQj3BTYiuH4O1pAVOMKnyvBSZajct6hslqktP9UcT0kaXMLxvSZbJR5li3j&X-Amz-Signature=6e4666c548209b6b71113b6c6c11d08892c5c9092a52682b831df165c24af8b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

