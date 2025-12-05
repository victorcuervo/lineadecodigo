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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWCHWD64%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6ySkY3R%2BIfJtQIPIwuL4D5sK%2BfQVtY04v7Sk5zz3qEAiEA0MgkCSI5NkE8ftTFjiyaF%2BLH3Z%2Fny8Shp%2Bd1FW7CBs0q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDGQRRe0BLAQY06igkircA5HvsJt%2FY9v3LLXTI3JqWwx%2F4MJZwRNNRRD3oNNrtaAVAifnnllnkQIAhg7aeGvRkFTE%2BiOIHARwcjPLq78crrroCTS1IM7vR3GI2wb8CfsrYwatOTT0C37Wm3lOFmXaHM0s6k8%2BE%2BbhdGeun1OodO1bkVdY75pvH8RSmy1G2j2aJmtHLcSzNgvddKp%2FmM7a%2Bou%2FBXgGSjshinD%2BNrL3do2CXyOeoKl4l7P%2Bn%2B9gnTn5jIBjcFhvykYQfg%2FEDzuttdqmC7LkjsgrKjf%2F3prXLffujIiOu0UDqg63K%2FGDBYYOzE0%2BtYbCHp4i28aFr12xUHeTrQF5yaW%2Fc68qpCcP3b1aIddYOZYfktig%2FiqoBme%2BZmuiKwPoyVo1%2BpSJGV4brsLFE7fcsbHMfRGuuxIHvx7JfMV3p9lG4Y5uBHRQpywVu213nuMy0Ykfr9mapBiRhTCgK77Qj%2FCI9UtlEAVIiic%2F2LVVxZQs7JNn%2BUe%2Br0JSDX6RkEXGnzUiaqZ6rdQy1yfwKhgJoHg80BBHY9O3nK%2BT6OLa1Mq9stNjfuO2BWCnymrm7FrbEvJe61tqQeUpS6Gs0RzAyeh6Arg4VlipZdvut%2FcBvI%2FmY1Atm0l85DtFCWDi3KAHtf0XlwYvMO%2BGzckGOqUBfFyqyfgOfRE4Dt7A6w6J9blFkXv8cfnraFjUiya3b69qtHiHopFf8IU5saBAHAzndfrChc4L1b%2BR9aaB8ZK8gB4ROwXHlP1%2FnRVmVeHQfQtYWjlABS2ETRo29h5AXHwxW%2BCCb1XVyqfrUxHR8I%2BvsHmXz02cW8XjILIJ2mwL6Ubb%2FsF9F%2FSpKiobpw%2BGAs3t9b3zGq%2B6%2FUXPAX%2Bvhkk05UE1%2F85j&X-Amz-Signature=31798eda0b0c1d9003d4b8ca2cf60dd2711f6e0c74005fbdbfede5487646ccb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

