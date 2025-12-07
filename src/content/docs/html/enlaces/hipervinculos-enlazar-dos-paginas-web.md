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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL5DXXVM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T033531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq9WRY3SokjPA9%2B3qXmR3Lvlsh2lCpIufKmTbSv7491QIhALtNFPNkI5Y0Eq9VDMQwPfNW1GEkRVDYhd8dyCu2rs8tKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt5W1Xv2xScKN3h%2FIq3AM8VeIiV%2F6V%2BxtOmtwE5uPz3me%2FIXd7N5lMliJblrac0mPnvVYgv9z6DkIKuTwuExCJxJOLe3LgNmGsIecjDXexj2NFFPkow5e9sFUk6J9Wzk9zfUZrPcEYEJeUYLxj4YbJTxYTMSawHbFGlWTof0mZKqZYBwCjTA3oqN6Z%2FiXt34EoyV4foanMb%2BUYs8XSMzYAbjSjwsawlfL2mhH%2ByG8NiKhgGWb1aVD9rknOtw2Ze7F%2FhC6q5o9rsFF56ve0Tp6prNwWQJbaxjEP%2BhgpyfJfWQAkRuXkKuWOFoUQd73CHD6Smc3PZI%2BHNV8ItgUSmfRBvSg6YFP3x0feAueP7JdScxXzz50XRoARskfubdyopK4XrX5b0Lz21bath3HcLrzSgBtbU2x%2F%2Bl4Khtjd2i38pXqQgD0ubahz2kpl406gssyQGREiovYZADKMEAnpyu4U1oDPDBBmyt71L1CRJUBSij5pQ1KMUPXfsM7vBjJnREdQVVlVD5b5wmXWvPW2KppXN0N2JMXHIpwQo7OVcSSAXf0o411knB7ldUtLVTPRHqjxwAqUcw3rpu3qV2jhRuLU9s%2F3UHp%2BiMAXGfXlzqdjFRzZLO%2BD8Qm1%2BF3fc2j8j5jhNc%2BbyNBzmHjg8jDz%2FdLJBjqkAcQcK56MqfB1SE1gjlxTSt8Qt2rXoxr8ADzLgzE2f4h8luR3Ijmc3kknfQ0Rgu%2FFj0PoHvHEKonuTjhGoTqxvO3ySMXxvfvV7F37o7LTx5VZaKDXPlnxm34dQphbe0BdrnyBdXhqSrpAQNG0ixLOAP%2BwC3MmolVQGWWY70E9SRD%2BRW6XKBURpSz7CoKmyVT5IsTIrwmm9bhRKC3YGeryngSHB%2Bfu&X-Amz-Signature=e52dfb37269273bec2b5bdb3f0c784102e8d3a54bc0effd542edbfc5ba277d1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

