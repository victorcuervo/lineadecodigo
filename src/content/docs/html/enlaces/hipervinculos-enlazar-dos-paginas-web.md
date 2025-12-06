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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD5GRWOB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCb4DrgJkXVpJ7W8%2BtqOrA0tzUheu1h83eNa6O%2Fu%2FjUAiBT%2B1oIXAR7X%2BRj%2FDfvoWtnezeSED6ofXemmWFyRzn2PSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMC0nkVWrzz%2FQEWQQzKtwDW77%2F1AMFTFQDMIJgd5Xvg0sxduJBa0IZ%2FWLLaHMPQ3HgIYyUNd9ZaI4da3bFRt45MkG2jMFETKLIIKumITKqlxyUKhiDpXf%2BLYEHTSiN85UAuZQ4NwHz%2Bgg5bTn72ZpXmkxJdUZerJyNNTNdsnYF0v8BOUzi%2B1RjCADdS%2F%2FQoG0Hb2Rf3bvgTi283T%2FvE3ADtXBavKS0FBtGxfEn%2FdRMVfaloRPw0tZlv4eHKHQFpp7aYed3Q4I%2BnWPdqygmXObZQ3eMzZ5OZuW2cm5u3JA5MmxQk%2FRNLqhYPjwwK2%2BYHsHl%2FQDh9XJuyrSLoqu90QbZYkBKTtUMdYdP6zghJWZ1wNNow4h3vmtdUy6%2BGmiQanUYZaO%2FHlnLUli1T3GZM8uuxc%2FGLAOLKA8fA%2F9N8TTdcxOEb6TOdYY%2Fzq0WRDlKZJB6cRMMqCGO%2B0eTj81LnK6rB7Hxf%2Btm4F8GnDQwlmBCny28W4Svw%2F6uVkHQmuAtrdqFh5MnNY2yx0CjKk7BxPT%2FAx7sXuWmDhd1Vv1CI4ib3GXi8I1fdLlV%2FGfDvvgPjhYBYyYWZ20zNOnD6DuKCIWyrLZSVQp5C%2FzWtk7UqCJSxe0pgyDlbw26oBlucURUwB6RedkM3IcKdwaXnY4wvN7OyQY6pgEW8WAqQHa5VWCQlfz2HD5OoTElB61zU7jqmToBybjBx5OlgVsdFPo6i7lavqe%2BYAnYcA2BUmZTUYW4T%2B%2BdeOZG7khgKHIzO%2BGgc6vwhMuggFSCbhdsdw5IiOilyyJJDqu%2BfeehthnJUOuVxRr7yerIwkSnBcBmlnj9H9r8dDIUXn4urUw3AssJxsaJHSY5%2BHFYrtD2So4QOEN%2BGTjLQf%2Frna7EVmA%2F&X-Amz-Signature=6026a2a878ef5d0c2b7909a02ff332d456822d8c2068c16456a3cb5bfea9081e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

