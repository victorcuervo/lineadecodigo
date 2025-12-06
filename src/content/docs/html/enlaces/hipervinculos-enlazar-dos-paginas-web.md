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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY3AHI36%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNURDkiywZD1EbQFFYLfCDvUGuF354s2aJ93S9G%2F%2F1CAIhAKm0hZ9daq5%2B6t6Nbj6uIq0hryNvOaCnNhOcUMke5AqAKv8DCHoQABoMNjM3NDIzMTgzODA1IgyLWgVWHUjka26pTQ8q3AO%2BpdyORd5sF4DHrlFviRJxk1WX3h4nLd7iRpnFrHHbLQw01lqJvRqx1%2FzNA36g%2Bq6tt2E0WOjrbKA6l%2FbGI9PsasvNRzGvVS%2FPdwxU2dMr%2ByjXAASM5%2BIyMH0ESXvcfeg2NZA33TYhRjRnJ2E9X47YNUARMHlyUgCBf%2FG48KCO1yMZXe4Qm3iXSlVofgeAljaQmhSzhBudCpRYpQNp%2FDQ66fyIEHf%2Be8wzQDauKNYFi%2FkzmFtIWKH674ckfA7TaQm7BoPLRhrmaeRtkHvQV%2Fq%2BC0TLXLmgdZ3bneo05G4jbeBqSe9kc5420viuMgHkmBrioFSIjoJtffvwRsFrpXQ39k8YeZlbFwzLAvYO%2FvnnhQxsQhZ3QhHjIropQfLClDdFDWNQga6xJpXdaTVgP5Ms05xgRJbsCDZ%2BQ2DSMmgcTbKtI%2BgSIBfhvTA0t3yTj8Th7cHE%2Fx5o2JH41SD6JR6KVz4HRzZCN3BpkMoaCh39n76grv%2FZZcC%2FDdt8kKhjy2fWnHhNloUH%2BOPGTIWyDx%2BkLVhxfdYiVsb46TnBRwH6tPgd8%2F9%2FYPKE1gAtzFyXtTZCYbKozyzTg3q27QhAWOnjKYe2H4N4OTP9TzYH6cambEUYCZ9E6b5yqh5DgDDiw9HJBjqkAZacupLaKxCXN3XovkgWJ%2BDcoomjtb1s8PmFPF6374FsLABrb67hm3HcykVH%2BbuCnDURtVjpPgimup7eQ%2Br2CjDPfNAAGGjZunEJycIOQHrXbs%2F%2BlCnbV3b7ipIT8%2BMfNqL03s1CWzioag60Nj%2FIY%2B81PjKip5YuwBaVXCnt5q2mvaRcqga0x61GpjRtXGPTPxC5nfAPVKCbRlzCukWJEjL8xK9Z&X-Amz-Signature=30ffcdecb5b2b8bf04166786e3920216d02b983e0fc9b46d191299487fb5d197&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

