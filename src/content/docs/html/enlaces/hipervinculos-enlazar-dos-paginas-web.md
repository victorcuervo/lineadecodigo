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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGWXC3Z4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4idyH2tPvGOQ1C90wqLG2p8vMqWxVZAXwU5K0Wz%2BaPAiEAmYYnVow059V9gxt%2BLsxIqkrNXNsh37iV8BAxA10qUWMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPJgiZ2IK3iRUuSJ%2BircA6s1YmwoWNn5W7Ou6i%2FQH%2B9LFz4pgZ9DDWC2z9uwLvCdv2JwvVjaZbMOnUBie9%2BmWZVSwONo5H1vS%2BLwjjnBT6Vb2EfuxRwnSAwlMH8prcV6M0JQ5W2GzbOne7yksFuiUKzKCe0FhZ9s9Krl3vOcQohdCqZcuryF1qxjyU%2FjLI7ZeR%2FIaX6LD8KCn5VnjlI0hlLRDZLBqNYF3E5zMjIQBU4eLNBbcm5fsDf9uuJ86vIpxkD2ci6Ue9K%2FlUc807x%2BBJN%2B4R79IAQtVcW4oO37VYBUEDTHsvaetvVakar1b4mX06oOsAvQqhtldjLQpovuDv9ho3sYr79BTTRISQfvHi90%2F6YoqnNaRoX%2F6KowyV7IyKbR5CCcoP%2BUZ7RGJPKc8DaobqUj%2B1jaYzHwnqqI%2BayppcbT%2FB6rncfv0Rnz3LKHEixYjg1379Xqdd0SOdrpT1xqedUwtfD1dI1%2BG2vhC9JClAvgP%2BTHnu2hNd2psFy6XvB8criSnUmks6u8bz9BsenwzLz%2BZiPvYMn85BkBI7ifvAWeM5IynCzzh1LaIAes%2B3rkZN2LSYpgZMf9fGvBU7xPlrMP5GK5mDDlq91exzX8dN8af8xLiXMnWup%2B32e1ouV6krvLETRl61JSMKCMyMkGOqUB%2Bd3j8tZD6%2BewtZcGrvnBNKG0Tq9W3AwVUIBbFUpDJy5W3GIYxLUjYPr2WJnuCVUeE1XSu7JwJdOBfM15IKa5JBr3WD74toZuvDNrwutussoVlJvoU7Ovuz4h410uyWiUYRUXjzgwTGW7pXQKfgyU5JLWGanudSpj2%2BIPquPTRDiMzarjJpttb%2BBKuFrHkvWz7EAVaTgzPBnotGfN15iSv88rVT4A&X-Amz-Signature=102aa5ce0c817356a531923cffa0824ae42c1842439c6967f9e37a30f80676c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

