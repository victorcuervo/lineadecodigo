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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ALPZ4S%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEp9W67yCL0EQWF%2BugCIqM4ROywD%2BnBg%2BqjX1btjsOTGAiAETV59Da46eOR94DDvcP9JWbQ0CQsZvWCRLR31UBrPNSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMLqb9YEpwt9jCr2%2BjKtwDMjAEw%2FKbBc4zRLiYqyBMA%2Fo8tpG8Hd4R7K3gEPeWdXfiF2wbWdQSisr%2FNMgp%2BIuf%2FvCb5txwdd8zKZcB87y1YJ4L%2FNj5cyhdG%2BDcrgpU36TMuHeZzBOAy59WakcZAzHw2frGeqvqXwA%2Bg9Mau7Dlh2rB1aTitxTWq9pA50UG6KuwxSPq96br3ECShWrppPTCezhHhRXMD7CraA%2Fopr90UuY%2BmwLaGo6eNTXx2iWFslRp%2FNmX0OeiG5G%2BhIDCJ5MTS6C6bB8buARAltAVfa2hWTJ5HV9lRp8lhFvRY%2BMOuEQHzdONbx9MLJ%2FcVflXyq2xdN9Rk2UjNcDa5oHWI%2FawmEkSapTO5QzVq2SYV%2F1GMc5AsYyBBcHYBy8VYcU8d%2BGeoW5xdBgL3TLdz8MP40LLVkQHVyTWrsRGB9aPCSrh1shLP3Xa5P8QPvrq%2BDh5sAaZDtes9lHjKat8Rr8vwhiSP2FGErAeteBz2WWA9U5Nc28dVCfgXY0CEQ5Hz46RnJMWvThyKlSUMI%2BEZr3slvkJl%2F5Axd3SP%2B9C7n99ZUL4t5zmIsrTdLVV%2BxpeOoHmKlUE%2BdIp7Szc%2FgnW0IO%2Fjt9D5qBm1dHbv5n8fW0dDzvs%2FD5ZKun9St5K4j8c8Q8wy4PGyQY6pgFy%2Bl8VUXbw8YsanVGdpJXgu99cczTqr6DxtnQPg7TxSuZrPn8x0gLkZ58SDKXfytcbPmt1lLWYqwtnU%2BHpCE5NbDI%2B1mLeKuWU3c2weAUN4dgj0atPBx9%2BSzWmYDrezyDuRPMOmV7qBfXe%2FulULcJzXdemdBT6yzBMWOGn0V65T7bNncFzgj%2Bn0kRAzda6%2BpaD3xJ3%2Bdcw3acTtBmdyHQ%2B72kY7k9X&X-Amz-Signature=94db4cf73a94255621fdc683190f9b8f7bccc17e99c3194be75f822825946378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

