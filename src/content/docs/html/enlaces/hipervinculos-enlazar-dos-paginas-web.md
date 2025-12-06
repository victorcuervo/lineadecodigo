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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVGVDL5Y%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T165651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQjiGaa858BmWj9jWE7owzEVIiLJuGsMfXqE%2F2jixeMAIhAJwzpeLYyjzBSgG%2F1HUCKV0pxMRSmK6G%2FCwguEFsjtu7Kv8DCHUQABoMNjM3NDIzMTgzODA1Igx8%2FmothntV%2F6%2FfVpMq3AO8KU3WEi6jxaUT3PZjk%2BCDqpYcv8z34IatvVakAk%2BcrwWaSyhT6phGKwwACeiqhTwtE7BOPcV9D647vfUz1hiW6ecGLoV2qL6p%2B61ETgbB7LkMytFRqR2ujHxrS90THyvR68IYaFgtin4Gx160Fxxhbqt9JBU0%2B%2BV230ED%2BQiDXh%2F87%2FNfCjPPK5grH433CuLrqFLkQXV%2B%2Fc2J4gT90FuwKr652W%2BsCGZ4CFLpkEUDlgcdl6IoiIcv6BaS2LJG8KAZg6z3Wu19rjYeKkr4OP74X3iyNQx0ReF8AgdLwMTamguMXadsbEYcsBK1df15L%2BVo96GQKlfNcpkPi6J%2FOfX462f6sr%2FQfBkaJOtN89073S8XLtc7zvLo4Y6XPrFi85MPl9PtR9zrHmHXeHWESOaOz55kedvTMpjOXe%2F3CXMeUwb7bzSVNRPOxER9EAlknQUPBqKKKMDNcrXyATSPkmYR8Gzg38f2Cl5gJmz1v9dRN%2FCHvvJfrZxA9uAwseKqRVUjt1nmN7jXE8Fz4Q9WdlePnZKOB%2Fpyojydj4pko7%2FSGNtdhwfH1JvAVZbGs6HUzPj7K5vouW92HCGFuze8fNv2wB1E1If8dShNMsFuc6jD0HKiCi6b0AK4wDFr%2BjDGptDJBjqkATi6GGoRS7AquLCdakb3zHnjfcB21vv2auLZDJZaAJJZafuKsNJ9bj%2BuMH33XQZ6jlNj4ANp5Mn1Kp3fyjJmvQ6p423YJyDbqSV4czZCAoFZq2JaX8fW0xcq48PjiIEYuIRJeD6FOzhcRjQyrbjlQIqRlaOuGX3snUAGNY8TjrLy5KTpX95MiNS5YxCDrrUHAbMoAxKlIQ%2FEjufamFfYIvCimeTh&X-Amz-Signature=4f903687caff9d396f225206662b862b27573253d35a0759f0c4cc9bee3b3354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

