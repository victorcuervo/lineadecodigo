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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UEN7HWG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCICzuYqHrgIrlSCyDjfT6UEkLR%2FZsUFRCtQn8bS4g%2FZW1AiAG4M9yotz%2BK%2FmlLzTHi9ymyeD9c43eEJS%2FXtZeRXvlVSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMWD92ETWK3b26fMLVKtwDyKgx7euj3829wNOy09%2Fb7ZvCLjjhGdXhxLVNxUGI93NCEklVC5R80WKnuG9FsZPYH7vw%2FwZiyGFwhXTZeqORibmETdHv3fBYPuYLoMzuPjp%2FsJl8zc8yfCQQXMMDLhuyAqholZe%2BgyPR7tXik0UqkSzPewGa6Ghna2Cw65bxNTBVPkXBRlkJv8Uh0H0yjkkuxhrNyEa7qPnvcg67GG8B47p1gAKfBO8Ew0eMvdSy6731xJMNMd3Wyt14EtfKG%2FfdwbU6oAXJuPfXU4fN69x4rMlGBZrXGjkMuf%2BBNLVMBpCPQqPh1Slebyzlxgotn6verjZH7%2FOTCCsF3WfljQ7D%2BEni4ude8MYC%2BmV5uK8WuyRaiTgFEHth2t0eJ%2BqkyK%2BjyPISHLiDgCBGk6%2BxxbooQaTWSJCmf48HiuUwMJiL5GXx3zl2BQG7eemgHCT49YZdEBbg%2Fpi3rPDo4FxtON49d0nevtfD3ECfA1VRy0B5h%2FqAEgdbWzDH7lvAzsldQgvlyZdJoEsUQK4WUkNNB3xYqIvz2%2FpTPcHypwFjOZU0j9jCtc2QKekuy%2FfcCfI%2B5TmFDHJDy1DyoEJBpIZJE%2BJeZ2bA4JgukYn4um0ipNGPr%2FEzpBgv2WkKRDTcVKYwiOjEyQY6pgFoYE1XhNAcVTvFBR2%2FvKM47nCsN%2B0RI%2F1bJX8rvecdlDidjKsKADDhQU35H6j3ecXBIbu2ce5E5Tt8nhfqOPfw8aCFzqWNqGAR3QGAP6E3LzRytQWsn4zEExwT1a2iE9WbDALBosr6ThFtpWFHdteh1nDtvpwxvBwqatPsB9lNm%2FGEbK3d1QVYCy8mVd5VrH3I039uLKZ%2BUjO6dfWlksl3VprSEA15&X-Amz-Signature=19adc2f1fd5f2ee7abbca64004272da5d0f64c918315d4f94b5942ea4d1a0aab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

