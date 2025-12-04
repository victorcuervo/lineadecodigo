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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BF6YFF2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxFCXZi0wTEZcr%2FfVgELbYeuRbxGv3YcgQ0b0JiV0xyAiAyeJqEzpd8W%2BWXn7lj7Fcrylt%2B2%2BRr5VNMr0TV7uGi2Cr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMAMhvPnXOFXi5yjCwKtwDIRF23FWAxQsrUl25gVmhaPGfKGfcsCmdU6LcaEjhCU9oc2sXlIdUbMZka9F2CTxpQpvk0Gz2JTa4la%2FUMD%2FRC8FGdmbxWjfLZh3nWVS9kXWMPmLec9O1Miq14jzR02eSnWfHcihN%2FbWWjlkdn8LOYDu%2BkBicJkFAsrdW8WvQSv%2FyQInsIQ9P%2FqzPIsQyVQlQ4vO2HHDo86b7MPkwpHLAyMm1i%2B%2FcM4c53RYmxVtvvGEu94%2BJ2GEspckd4pyPar4qi55kDriQZ2J10e1tYlM1OJFhdnHYlqTxkhxGFs0eDCjA4X50ExMl8zq%2BUrW1R46j94WS%2FUiaFKTndIV1gVpifrSbcuNXOQ0m7T%2FsdywdBT4kj5%2FmUxGkeZmtbGhakJ042ZjM1TE3N2rTo96HgEyLdvFKTgh8IxI8SE6RY3nBnU%2FIPs34DYFUpJ0NbTSUkVWc050mGbv11ACQx4KOntlJRWKw8fftpSLPGDkoCZOBRqD%2BuzgA96g%2BgwEgIEl4NFuEuVEh637q0%2B4X8e53nNHSjbQ%2BpY9u%2BCoQa4%2FL9u18Jb645gIKes02BRS%2BdTLauMjsz3mXFnJBulRsIO5Mo16j%2F%2BnKDTYQ4MBkEKxj%2Fc6oTfrkkP5m0uMfs%2B3Tk5cwm%2FrGyQY6pgGJAg4iPICOlS%2BwpP9W2HPhxmM1sxwdz%2BTHS78B2wX6rEVdTUFgLbTy9TkbqLVsFgTdePrMIim3sooQLEX2lkVECcVTdLEchGVXZLFspEqdxz1sGyeKWLTLP6rn5sCsGxG0Td6lNyN0RLTBZ18%2FZhIHxad7sXbbLnJjp3WtAyzpRuM3dyoEkH5L%2Fe3qFWUXYM2%2B%2FWz%2B8kH7BAj0xnp8xQPa6OJxPHXL&X-Amz-Signature=6c052f4b4936dfd42cfb436df3f25ea912f4fed5c9f0605ff2efaec2d0ee6201&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

