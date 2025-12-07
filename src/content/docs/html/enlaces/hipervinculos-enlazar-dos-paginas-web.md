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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB557MRC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T222729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa%2FBYiq5EJKQJU9CcLi3hmhUeM4kti7aO2hLqB1Gx76gIhAK3C9M8%2BZU86wieL%2F%2BeB5h03YnGfhYjAbsDqrVR50jxMKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu8ATdHAnllTrB5Icq3AOcxgByt%2BPFBQ3oll%2Fwea%2F6wdbddEoeRgwXpQ4jbhKOMSIUZOabVktuxpvjOAfE%2BhqUNre%2FdAEJNpUZfRfWYjsQoVk%2Fso5Pu%2Fbi%2BUpVrrQcW9z5sYB0vPGPTuHi9rqx6H%2FoODPACjg6d3%2BvXjyQazAyGVv7wWsGWJvlf0ycvo3eAG62wDKAjehDJJw37%2FLjKw2fkmSBvmNzDxzZlgnRvxJ%2F5k%2BU9ym3HX%2B%2BxkkIptxYRxVtE80XQwzeoY4O4cbv0E9v1AG3K%2BsYrjkCR%2B1YpjwoPz17eCIOwKG%2BM2i0loB3PRhY6Bq4ZHDgupqANiHUZdI%2BcUhYzOPlH0YQXiSkugP19ZnTzNEIQvXA4Gva4jo%2BJb7Yj0heKoYR9Q9JcSgAC5Bzy6cY5R5zIljtHZfMv1RDjw40Q%2B3dAKaZpHXyoNV9OpjbcpF9iOySMwI1X%2FfZDnGCzQRzXZnfdFgwdYOkw7%2BQ5G6IIV%2BXuj6jg1VYa%2FGhHc0bFpv%2FDZun1Wu5YoAx0MjfC%2FfZXOOWCsX8%2F5m48s1pYL%2B12XTGwPVyK0lX39dNEndeY%2FKa8ghLRB6xZKKBWq%2FNo%2BEZ8dsg88ZV2V2uVN1V9PDkCFpuuiQHZMODQ7yq4uXsY4vsJi5I2fXhRzCAyNfJBjqkAcacDzb9h9VzTqEK2Zwejhob6HcEVCouYC13%2Frw067USgfJ9khCRw3Q6SQfDHy5oIwOZUtAJWUoQvF8bKSqxdSiaQVLBI8yoKRvqdFBudQYruBFtnuL9BzkyKd49J30cJpg1fQ%2BOuZd9h0XQIus8faG0VcqwcT0LtfmrOEh3NHTdoPkCzlRctms%2FIUxBGTDoo7AkC9LAK%2B6w4LxsfyDsYyrLXFMI&X-Amz-Signature=9b58ce7db3ae0850cd2fd8364c2f411e2011137423ae1a4b38e42fc610e01f34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

