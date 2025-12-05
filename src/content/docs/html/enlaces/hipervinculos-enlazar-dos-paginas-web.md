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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7B3IGRS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLrKJxoz8yZqhInGUgr0XsvIisPLMzBrVRfETteO2huAiEA3rBtCQQpxqwvWel53bsGAKslel3DLux%2Biski9XPC1Iwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAlf5A0SFnUsUjlT5yrcAxVQ%2BipZXcacsKnRC%2Fr5UpsRpV2CVBctoZgZ63cWD4XZYg3yqFYWRtzxALw3h3fpr6NnWu3ggyL61iPL2V0KviibVIvzm3f7TiwxhRywMJm1%2BQ8y0%2FLKgveThOFtVPIeiiOfrn6UJfSZIPqMs29FL%2FTvFxo4Zzv5ZDrSgJvDWn4kLF39cFpDyAEPM3tmcx0lLAxlaC9bebA96zXR8jJFGNC7kxkYbCW%2Fo4IoHOKtNscfmSXthwO%2F7Rr9v6dO2EuorsHPOOs1pDsH7QSFOizX8MXLnE7lCFBYGm8070cPfaqfsAQg1lJxS5ZtFGKsFSURhiqXMZNIVix%2Fc8dHJ9el%2BT5zUqXC3CldtDj4iHwJcrKjyAWdkwknJJW6lWw4dirguii%2FtqJwYJ11zuTwNT8xBfTxm95Lf%2BZ4s3FWVE%2B%2B1NkRg%2Bw29BeqQKKUwwJXoX7Et70yOZnLOpFS4MJ8uI5NJig66vZr0ltIk6nNvGGyssbxLe0Si0N4Ypz6sU56QFF%2B0wiTcMuFLSvTweoJwqF4DvcDE2mfHEVRtg1XC3Nw1jPi1Jr5GS2Y78tIsDLzQXVqloerG78T0%2FwNauNv3wnWwQD5HCofHXhIbCSk1fAlRcBuQl0CHHV9NtZALoY5MOmpyckGOqUBg82UPexFIhZ%2FNIpVCcv3X16srxpF3IHVWYbHHst6HBpX2svIYqXUQKd2Dt96VROQGCkDimRJYme1gPNgFDVWZgzfbAxL%2F%2BQEdvwwyqaOFoVtwc1GEio5GMMPEIPJ%2BAeCDTU8%2BsC%2FoPK%2FlmbPB1ios6W%2FxuH8iL8lg%2Fa4a80nfl3h0cnJ6lFUynfZt5HEaaARZ0H5ZLBS5xyuk90rBxlZ7IxWF0Rc&X-Amz-Signature=68d39fa26b71670693b2cf8c762457f4856a22e12fef433ab5c08c740be6d655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

