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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JNYUIWN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T074636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkQiulFWs85qqLJf9KhwEY3%2BtFNLDKQfZektd2JyeWswIhAMM%2F2n%2BC2Mqc%2FcrYbHSu9wrLBC4lAQNiz8rc6K%2BmAmKCKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkoYZujEZI3PbNn5Qq3APbIAxn6smiR40muMZDn%2BUEtlN%2B3wu1iLTlGkBGT0v9dMmYOouxCXrf5HJt4LDJtpTvxxjayKLfkxhZ1MOIZD%2B6%2BVFWdo3IFgPTrBoHrCc9DuA0Nec7DSneexlP2oSLnKKwEHPXYKT75a9Aq0%2FlWDV7QIuAlCdsZdlOQ1%2BN3ZgNXIKYyMnMuTkukxfDEPgCjbPS8IjRSp6%2F7565mHyVM%2FtrbZunBi5%2FgHHdnkBcmH%2BDYyz5pHsc9L3R6tER02PyFIB%2Ft5pE5i4Iel6q5StQ%2FZFvnBQqw3PWWXdKdtg%2F0HINAjksJV8gPg2LmFLv91HPNgirNnlKFbf6ME%2FXFUU7%2F9AcymTybKvJNpFm3OcG7FM72VpSDkRvbPrGtkjOkJLXdlOpFTRAUF%2FOS4cyaT31Ygre%2B1VeGe5D%2F2dT6s3xLoCn%2BcWj73srq7UyvPar2IOmV78pI5yhXYDRzmov%2FF0Ktuis%2BhTyby6VmlqDOW7s8JVLsTq%2BtqElrqFC6JiaCmGw3ZMr28xRomQd0hdoOQD6QU9Wmns3OJL9Ck33jp%2BKTO1KTMof9z9ngl7dopsYYiz7JUNbCbxupSmkQyd4nyf0f3H7wvzM05UyywZRdhUqhuRTSSS%2BTYlUNjnABeZyyTC9pN%2FJBjqkAcoslnLApWQ4HTWbGfBMkX7H6Tb2JXjERHG0kOHM1%2FW4rhcoh56uh0WZfifFkUK3Pu%2BJZd7rPgeZpUe0aKw2%2FtuJLfT4659rVGuvE8P8hbpe3CqLIOOJxg52YSDpc5bs%2FtiEv%2BoUPMjysJK7NH8MvbOxzi83HBXSdkHnOSEEi7SRF6V4MoF72aNpwF3Hsw0Gk4y55VG550LZmU5iUQt5%2BEKWa9Kn&X-Amz-Signature=e2fb4aa977095d93a7d20f6fa3cf24c0c14e01489f56c6f86efb35c2460e5424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

