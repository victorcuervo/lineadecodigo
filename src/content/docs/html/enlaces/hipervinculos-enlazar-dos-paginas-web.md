---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y66L6FHD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T185418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYY%2BDbQO%2F9HIY%2BQwmfowF0I%2BdTaF%2FflAVtXiK3fPL0vAiBctXDvn896CJ7Z7armrC3oIEN6obKcA9n4Spbe4QqTAiqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWVxLNpO6dY4olahNKtwDCeVYJIMyHbZg39nn6KZ%2B65O3ar9rxATMikChB3zIGysGZFTe3tWAzf%2B227sM8%2Fr0b35aX5dX33qughvmSjTbOkjDZBSGk2jGA2W8T4RNg3bzt8XjDcZhpZ%2FXNJ0n7xfpd6A7y5F00lZ5I3Cp%2BVcO%2Fpj06l%2BgWGJp2Bo6migZ%2FBrPcM6Zj5NeipeszBMTBRggGOSC0i10v23B4%2FQGxxpkbOlCCt5aL%2Bnfn2NuUqJCp763jwcx9TNIETlceNIQPuJn1fRTyD%2FXuIusyDsPGDEKG7phkS51A6CMi%2BtLprdIISvu9BSvJJpFHolZ7fWCZfpgXXq8G7K7r2B3J51oi09eaTAJ9X%2FFqKjxI%2FKtXMEFjZHwbxr2JbDLJkzU7Ni0sEfspI7o8e7TMlHsBA%2FaTz901Iiq5crT6BWfMjtCIp44lpGzd82l8fKGwLYnncUIx0LxaLlviWbIVg%2FejR9o59B8pfp7UE63bJ4gOiKppuinRTb6I%2BBMSgYQ7nRH04EODf0E63MZgrsx%2BZT7DAagfbHLaORsbmHglmqyJS1cxSYCbpeJ9%2Fo3eINwcq3Ju%2F0Dd%2BIDvj6oUBPd2J8ZgrAxy2RJiwJ8%2BG3iz4U6Tkj7EkSj2Z70X%2BhUBCLoySo5zVEw2d7hyQY6pgE6nMpu8oFCSrxH%2BVsAnHRBKApTCdzsEZntnwEAwi%2FgApalhwUzqEP2mMD%2BSgS4WkN7ctNXTC%2Fqji2cHLzetJmMe8u%2FSlqwlVRbwRn6w6kgUBvJ4DN1jn7GPeoTWbjzWaV9RZ4sbaCnlDlQXuRnEF1eeVZzv9VQkypSwt%2BZmnehxgYNG4Qa7RXgus93MjZ%2BQa5ISVAVaOhl7nXdy5tboYjKc5TAzrHG&X-Amz-Signature=9b5ae1f6784a182fc7af1aeb6e1ff390bc593fc9ef06b955a92668261c0b374c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

