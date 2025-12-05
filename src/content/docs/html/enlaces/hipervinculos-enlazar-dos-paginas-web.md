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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBKEELTN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4e6T10f6iP%2Fxg0AtAASTDTpHiS2KBiSEh1jLo2DONZAiAxI30zzgdWPs9EWOuQfrxI5%2B0wCfNZWo3kphalsBa30Cr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMSNkESh%2FK1AFJH2CfKtwD4EpIOk2J5HeCVRL5qBBtTcnEJ3qzL%2FJWzLD4Twevbpa8%2FGZnZIbrTNC3K0fGRv8l8jyAVEaOzsu%2Fw58Io6AVN752%2FkJwjlPhvWuzCEL1ZDsEgqQGISVWj2vHa6Yzpkg8Vzc2xdOQRt8Y%2FstGZgeq%2FgjW4GIcdhDFIeJ%2FAu1Z536wSC1KvBqCZdDsB2ognxd4ck8PwfjRL5C7mbxfCLMIvIn020fTfMXl4mDmzkryRKh3Ybl8uUbiY%2FXQpH%2BPibNBwxLQxruwVGOLv0FK5IsxUNfukn1hbws415elEDuQ3vYBc3ctGs9iDXW4Or5TRyHbo1gAcR9UVLMQ%2BvJs0BIAiWXq64GGR6C%2FaV0NXGohmYR0BZOaqSUOTYJHHAx2SFcuUo%2BoylC5%2B5EAYhlC%2BUbqyr%2Fl%2FZK7edZE6rmZMprP4uwNrXQf7o%2BEtXw2Y4o1vESA7L1Ux35cwbK4Rn6D70NpFMrGXIBMzCbrmEYUSYl%2B0PwOqjhLgrn1pYlnKsdWmhqh6GB3Os9IcPD%2BKYi6arJHPn5K81cNmO5eFWuYQTNBTFtEkRj9PtmNEJBkZ13D7K%2BOvG5dUsYMuANWyhtZtyzEPsoW5r5tr%2BXrP1RQmpgmGGAvgTUBksmNEiY1rlAw9dfKyQY6pgGDJAnW2TMj%2FLBWFZU1XVg%2BkXjIuYL3%2BoDHlMLqwJ6gP6r7CQFIHLCwiOJOMNQur5kxtJkClLpJEqic0H%2B4aSHkuK2Z84Vl%2B9HLFZ1z55ur1GdSyNeuy%2BwAZpe7XQPSr%2Basn%2BMTWY%2FBJZIl7UsV%2FVpSbxD2I1hcCqzFA2i1FUOwEUhWeSf0%2FMdTK2tmS4oRO4L6Eeh2xHh4RYpBHl9lUQkc2r5RqCRH&X-Amz-Signature=1fd4f9099233ee60ac20c64b2b127ddcdb88d2c43f72b5fbb5a18397f2e84921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

