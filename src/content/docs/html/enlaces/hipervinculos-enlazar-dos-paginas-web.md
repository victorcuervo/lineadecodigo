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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2AJF6ZZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyxGZfOdhGCuFJVOOJOr9%2FSBzYfbpTpAOLjiXnkPO1yAIhAI0%2FOoZcpZfyFg5B4rhJPwJaNc1zxDrzCo7MIdxi0beaKv8DCHoQABoMNjM3NDIzMTgzODA1IgyR%2F%2Bm7To4VYMW7VGYq3AN4jbvVeVrWQ0vvF0%2FXw9PFZ1IzyTh1Je4SHnAwCpn3T8bgtnx7R76fT93HkgaYnTHU%2Fj7zdtX48xHWbahp2kHyxIwKo99tpTVQVcgITLH%2F4jucLTX5VqG4X%2BGnc49rNXb5pA4oDTdGMmrI2YZKwJ3Uj42u7s%2BfpivT1fPeziL5EAsCnPZdFE7rVzXA7GrFPD5GT1kCBE5lkx7udhtrdRqR09YDsxdN9Nt%2FoWX5%2BQEM5oTTVNzX0US0OKFgh4v98BeNWY4goLo%2B%2FmRVNqB1zK3BUdaplACZe2uvb%2B%2FJQn0AgkMGF7lGAaXVnGO6E6QwRyAMDVZmYrDF6AowWtvBzOng%2BR%2BGF1k0BJpRNq%2B9PPOfVE6e4Fu0OmWx4Y%2FKa4%2Bnge59JmhsBvBhaYg%2F2M3ckByk07KVFmqkAcj8BYeFtC%2FpyJfyn0H2bgrzV0cYtmvQBCEroZRuPeq7mVjBOCCbVY8uH7foIEysvR437qa6nEHAqeUHZ0jD3hUBbRdvBczHGU%2BnS9pyEPki1qvA386mEsLQM%2FfUf6RZh1LnCiig4uyoRSHvgrtFoIykt50FMgcRSgWmWyFTWFD6uP5%2FgcbfcjZo7aKB77ea2h4oyOvTF3t7xhBI7w4faTEEF9%2F1oDCKytHJBjqkAdtjtOenv8BURZ1FmwSPyYeA4twru5Iy%2FlchgpyDhpRfxvh1gY0ExbiV3Xiw4quTr4bGwZ8WXBSilD7qH8qRUlz%2FmyDKHZkn%2FO%2FsHwZA94ahCgL%2FAhYNMY7NnD2rO%2FQloAuLyARgv0erDRe8L8gZ8vo7rNRmD7t6DmiVUD%2B0BfOuTi3HY6KK1vetnJ%2Bo55ePNpf6qAFoxFX4ko7nVHd1sg2LwaxS&X-Amz-Signature=d30d9cf60cef16c563c9020c83a90ee63bd073ea24a74c43c7c39ce8fd032ba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

