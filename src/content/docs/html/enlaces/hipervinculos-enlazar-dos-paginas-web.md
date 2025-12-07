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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SGL3HJS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T121558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFM3vOyl%2BBxDYl%2B4utCgcmPeMUGvO66LM4awICI%2Brbu7AiEA7jQrPf9FWp1lIspY1XU37qwwNoNJqXDm1HkgNavbF%2FoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI91pJF2PiZbne05WSrcA2uKNsa1L6vdypekCxexOviMiX2I9yJEE8wGTaYGH7kTxPQXUTH08LJ%2Fmxm5qCXtuuX4OHDte65P3aQeco2qsx%2BSQ1p6YrBoZs1KpIxSIQDghgpMJ3UGFnqauw%2FnkMclIim3AmfjN%2FrAVOD3ZUMuLbaCr%2BWgJQfHDOGkvWbmxivBMCCuuv1NipjscMYDNo8VG2BEsI4qFxaKRvFhINEWxwOEFHu6SjwZVKPGHzD17uGyTCHJOhtOePS21y%2B0eHgPx3L%2Fv%2FFbTt8UxPyl%2F0mbUzYLnT3KF4U6aVC9fv4jvOvcYBxcpovj5uH19qpiL1a%2FwdsoajldXgDKvFaFogQJeTdutobAArq43TsQulalELCKs%2FUi0g8UdXHuiyTND%2BnFBqV7xPsb5SMNG8LjvMEESW3Hh2dVDirwKDWAnVWjbVlkguKZSSBAeKP0uWzHdmlUubPe3rzwSNLBoU%2FqGjNrO3r7zi2qck2Gvk6ANK1gbRCpVU%2FdxB6ja%2FgypA%2F4ByMCVi64Pc2VdzSGYXH9ZmwOhTb85AHxQWdtcAhYStUp3g2%2B3EtW18kPB4iFqXldt0596%2FI5%2F8oR5ndgrAufauzGa3m4swjU4pTgr4O546grGxaQ0BX1KlnqcXKvc%2FLgMMqZ1ckGOqUBLVv8NBoV%2FcLX7Q1vgreJkizj2MIwx0bKu9F1VR3bqRSQJ%2BHZwz2cF1h%2FA5eZGHtUan7gLAHy2WYqmddGRMrDTzBLZvm6pU9wqYwgdFwtvl9Hddr6aJ5FU%2B%2BDj3LC9xVtNaXIpec%2B8PIeFZgEzXSrDE0%2F%2FIGgdLZKVXLEa8zI65itUbNk%2BP2zMkKbIVqDFHBoXvkR0JzLjltuh6OkMjMw1ChUnl3z&X-Amz-Signature=d2c58d1235916dcfbce1d9bbf3545ca55abf408a8d00d375e1768cd47b320f2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

