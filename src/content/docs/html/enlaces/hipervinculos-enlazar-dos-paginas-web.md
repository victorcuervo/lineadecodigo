---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQWZKNM5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCbINdyLS05wVHdsw1nVakycv1Cse%2Bkt7nM75TXz8U05wIgI4kBX9aGnIXdqGG3E8NN37qqbOT%2BNIsKY2AWbroc%2BNAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDG80tGGMoqYL8uPkKircAwoveD5cjabU2FVX2ylKzXeVE0EPifd2Qd%2FSiOW0TEU3Y%2BlTu7I043pQaKe8Qw4M9yrgZQWoRUlX9a6CadE7k8zetU0Z7yGOuWGeE1o5ALi8vNdUYTvLod7nmDZuDV8pNzf6QCxXaHM%2B02z8N2VUvveVjmiyqmneEZTWlbSpIMM0HAljyZe2yH5vzUMGofmvsk%2FDORvvSrUUkb%2FhF154dDNks9%2B8Idm%2FOrn6o5lOOVuRziSXNH%2B8JEnmXEJA3unQWUcB3a9xfwvKKhLpQs598eZ%2BuWxfgwq7Z8UNs7l2RY4Ho5fqQDJ58vKO3lql14dDX%2Fe9wXhHc%2BecHthrAQ7Hfdr3Pq%2FrXUGvx7BAnCdhBmbT8eduCiIoBS9qWT7bcWMlxlloqcTC4rHZz8tBJ3uV0z8UFo82nSmS4C58lJ0UfZXfZseREly%2FM5xiF6FaCd%2B7yeRu%2FP4Phd6GECOkgfYH2DgyErG85CAcFdfTeaAfAhA422Zrm%2FKr6x8jAaZ%2B1nkLpmsky8dR49X5Nb3aey1iMsdZz9gQik6DUDYBK83Tk9fl1ZQmqgRafLc5DmGBzG7mWUSRxJr5gnct3FD%2B72Q%2FL3aHhitzQfyJcbbbManMSwwRFrnVOl6Fk1QeaBt6MMKVw8kGOqUBrgrcf0ab7jNKVE36ADqHSQrm2QywTgGD6OlCgMpvmpSGcJfh%2FaE00Oehm12fQHipvMqAJyQybFBHvRVriv0MBwgJ%2FlM6sKC1hmt3OpAzzgGDfkkiBArJDJS2SE08vflsHrij9eUfY3uRTvSPZawPDmV8CDzlN%2FItfF5KGvqC8JUb5wumg1Zb6tMJvYTa66JlItaPD%2FZeg35HJvyA%2B22vXKjvORLS&X-Amz-Signature=787901ad531135c834510000a36e074bf71eb7436aed36da2b366646ba6326ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

