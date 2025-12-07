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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAT53XKG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T232830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn%2FgMW%2FwETmCHKvunmAqZXlWQytAhoNPJ4QykkdME4EwIgCTvxwb1GYA2%2BlfSrBY7L50SjVPKM9gM0eposQY7Nub0qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPS%2FJ0sXGPSfwZSA%2FCrcA3bpUAL3Fp79dCA%2FuUIaZJLg9ZVV4SOZE3H18LRG5VPrHY0EkYdaOVZpvJvZGYAcRXDQPMhcax1Lf2HpNohdiWzsRiqDBY0P0i9eL2h%2FDZ%2FSJt8%2B7zsotfSI9V4AX%2FPYBBfWB2DRQaaUML9imLyfsmXox88iSF0usLUqoKP8tH3RjvbUSmTXOKbIGQQE0JBmiCKQ5e1OHBIXlfkvNTF7F%2FmaXO1bIiEAf%2FPFF02r9aR%2FZWJg%2BQeDFIo8FliByqXs3Dk%2FW08D9b8fSBZt6F3BQ%2FCV1qAtnWEzQTQtsb9GtqV2oqOZAWpHlFnSuEaPMPs0%2BgocwOKBTQGsul%2Bym418DRoRnng7%2FL3Uk%2BG4iTuA8RfeiAHByVjbYlNDTKmuAoyOP38FDaVlHF5epANjpEKvvFp3%2FHfVCTP%2FKOeKDmXu6FqQLNyYSoF7VBESG6Fs%2Bz53tjZFNjWqpGZEQ9x%2F8HVmvd1%2BjIsI%2FrxXXnMzkPc6G1%2BwX2Mih%2F78VyPjy%2BKVtoR%2BlxXZLPh%2F7P%2BuIWwl45%2B78cS6QMVkYhReXNGCXJYABbhrLReTcxYoWKv6W2VqzDXp4Cab79wtJ4r4Mz2pI2dmKD57z7DXZx27GqiZ6DaqiNjtu5AMtsQrCejoEwbfMICF2MkGOqUB6DdsngnnJ5%2FP%2FPmVfa1d6a1mdkj2o%2F3RoKK96Hmi8Ko5VJ%2Fr2a5QXTpwXxChmNZTYR5rpjaXtjrSL%2BGNSoUxbYDkv%2FB4zftFbmBmzhDrukCzOP9JN2ijrEhX0nzbT4AQ1Lnokq94TZxj1ff1mv2kbkj6NdPlX9AkdmNtb%2B9i%2BSzbudl6A6zSX8N5mJEswifJDMfqKx35dhgDYU%2Bm2ygHdsY4Mtwe&X-Amz-Signature=8a258c3ea912edd34d31819686900a10b90df395aa4b0300563886db7df90b94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

