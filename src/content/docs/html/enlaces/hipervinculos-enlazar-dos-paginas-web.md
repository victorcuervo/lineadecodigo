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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG3FQSDI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDSIPCRWFOnT7B32uih8kiEteH4%2BLG6ZKeSRndLFNCedwIgPme0HlptyZRwkc4txvPj%2B3EJ0lMTg5pU1qp%2F3jKELbgq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDPMNFQnOKcHFo7tcTCrcAzC7kiLk0jxWCCsf%2BIPgczwhRGmgNwMw6HPiBR9WWJRqlD8ezxD4ZAQqWRXUbkdiupo%2BL%2Boe3cCQe8nTLs0vbBHXYSdc%2F7hj1Zo4dDiNaiPHd8B%2FH0htDYzXSCDHDNBRt3zoKnSp8i5%2F8GvyGGmRk2hWCMKCeju0kFNfvqSq7%2BmoTj1jpUWtAR3Oo2zVihfCgEOg%2B0WokZcURD0mqqvkv5gzlrgoNFfZrXMLPj91lnDbbsU3kgQKjbEy5acn3bZulHpaOvlKy0tIzxJn95v%2FkSIpbPWxRebDgIcCLlYiufLvd%2FhJZ55dFEDmWU3hCtF2xxnnddvdnYUshwd5l1z%2BYPn8rqWodC1YOgSpN%2BmEsIReZ1nmoFxF3trxZXrYm9uSE7iVjz%2FFDHlSxpZyX8G8sHDOExSTN06AN4WbkKkVNTIB%2FNWVPbb9WxQbmtLMGjRuS9yyLtse97UVLMwJVoidAyFalyx2BXSaRgRuvCh4796WiS8Fhq%2FJJo3GXo9HkYvgDewcI0NIAtgKFawSkezz1VSvZ9L3T%2BTNHmgu0FC5nFbuZmB4%2FUqV9KOMpbaFp%2BlIGLUw74nErVUhceuvApk8UVyWnXGM%2B1rYU4TTn9eeiNlKRlWgsBH%2Bftp64T8yMIe1w8kGOqUB2ZHY35EjY%2BzPS4MakGioMGUfJrY7emejzeKq27xCCGHZhMgMBtutnZMVrTQf8A9uTSzA4P6YdrI9G19FpznSTgvFEJwDddR8bQwioMCopSRrofyDDFOHGpqbRkt%2BHPzN69xs6rSsW8yOMERV7L620RN5Bjo3YMJMiNAd5Bk1sx6%2F0ZiCJsW0T%2FSSdaLJsJYRo3UXIkQ8n3GTq7Bf1DLZYhqiumae&X-Amz-Signature=8dbdc13a3c8e1d5f17d2d899bebad76775ea83d119fe2a7f66ececbef8e62db1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

