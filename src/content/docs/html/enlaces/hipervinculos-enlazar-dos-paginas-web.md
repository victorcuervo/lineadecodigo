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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6KXF7TA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T083220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaaxpLCCT0iOSxi6OqErPQn59HmN7h%2Bfnf8V2%2F%2BiCS3AIhAJRz0LwrSdE5wkTRLg%2BzIDp7vP29QXGhdVSoUKOgb2GlKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxb2yoTGylB2C%2Frjnwq3AOHEL9eOXl%2FTVJ2CtsR%2BLL3pJdkd3rMg6Bk2%2FliPgWf04tV18h2k21hSZWSxZRmDO8sg7Zaf9L6Zt9lmq7c2bfcF%2FuzFTO%2BMEr4laTuiciNgWZoP%2FWe%2BhV7KRgByJolXP1kvmBKsbeker%2F9OgcXOCIrTu1%2FrNQUE4Jwc8AMrQFxL8AsD9NDQP9sxIoQJwR9s%2FcSWgNcwWD8L49bXiletH7COwInL%2BAPRnqId5Vn1yAXmIJLaHhmotDiSyGnoM8skXLNjJ3u1O5Dy7fCAvfa5bT69%2B0uDkU2OwaW5vkJBYQzmfGlHYEclsOzOKsYnS0Fp1XY0nFwJYbkNgyc451yfODvpglfnLCAsC%2BNpWTSPw6SVvqQlbzLwTF%2BA2ETDOL1iJdK73Iv4Cp%2B2PQOmU5s1HeMsFrv%2BGUG9mNzlbP4F01XiGggbDg6vEojD1zyWCZluJAwye6JdBRLkvyNOMJUZ6eXCXDQqF3%2FhzJPK5IF%2Fv7QlhhU02lxEgbZ9iZHsRJm4Pu15Iu8nUTFbnRznGJvb1ZWC1MYIYkd%2BiJQ6FWqo1H59zMIK2HCRcYXXvZStIalWMnHztVP4GonrGw3fl0ymOIQE0pSJ04%2Baka56xvrACYzBFtyTjtYDexs9863LTDzpN%2FJBjqkAYqTHviYN9k3GuUiif8Ytw1%2B%2Bqf2M5wY%2BwElQrjj83m0yD%2B84D1XYRqUm8GO60sQIU7mpNn%2F1yFE7UWK2zr0rDI2tYKsJVjpreKpWHZ9MbYDU81rdUoAv%2B6u4kGBTlkwaJovWYgq2yaVFEaIx2CJDmv6sh73sAn%2BXweRBI9yzfkyq6FCNmP4R9N%2F6GW3U290ahKhwrXfrfkxqLrGl9WnK4kbZX8n&X-Amz-Signature=cdc936fca8c9d19980265d289fa73b4a7b24c10332c67fd70d18779d45ce6a6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

