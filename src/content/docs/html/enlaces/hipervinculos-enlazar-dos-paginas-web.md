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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4TKRS5U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T052551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTV%2B6LFU%2FpgiVznTXEoaEib72ZpCc8qpcMIrDxTjkGyQIhAP1tYm7Jz5zFQ7QbnDFilh5am68ajBFE4zv27SEhoyeEKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPGy0OnCenDMtQzGIq3ANvejHRHt8Fbc7ml%2BTTTGJzsqazLfxVPihD1e9UmZqNO9b2FWA1jyHu1mcV%2FtoLgNKN13n7GPF2TpZnuukb8VPdbOgW%2BBek%2B1sskNVa93paPDEK3bbMvLzgUHniXkCvpMsIh70OVFnQqwx8VjljK8qFQHMBB6E4gRXxrZXGwdO8O8rRvAKKY1T8to0dw7psebvdzGlP2JJst8Aj%2FagBzpfxiSVIO8Dpn6eTIeAv9nQITgduYkp%2Fornr7KWDZjHT0uqGSltqu6O3hLb1tBm%2BVvrfH9uIgbx7krK5hOvruyZWrBAuO75PkdAu7iyJduasW%2B3K%2FKpdTLgOrXO7zncIPN1Yg5YNeYIyYVxwdQmqu4kBUFnadX8UEI0Ia%2BPsL9094CAfNg9UihN2jdO4RfF6Nn4xXYigu0DNGgNsVEi12jkzed2GITAq6sxvCYCP9Y47mCmwSSC4S3h1BAmGsNz9xVUTlM98yG1vOkv2DrHd82fAL4Le3JMc3JChio4qO%2FCYMQi0RTG6tzJ7xRTab04u7BPJFm05cAEz849jTNTmmYurh7boSFb4v1okwBE4azbrcZsbH7DvL6OaR3e2KkFnQqo4yg016ZyK%2BzGyRNvPc2UNeDvnM84hzMIZeVeBXjDr%2FtLJBjqkASG54z%2B04gmEwosKWNWDqpl84MPgXHjOcy%2BoyQwDd%2FTay4mQAFRhITRgke4Us%2FvcppeDcTA6m5xiggVLWM18CJCfZi3G3PtLoYh51OGEvHW%2BVkyXlNubgCunTTpKehpA9UTmo60QSRyn03oI%2FeNi4EYbcYowKL9NPox6yM5TsmCRH8Ft%2FGpGVChXDWKKo2GehffMoFonH8TrqCdbExjg3yjcNQDA&X-Amz-Signature=ab40c479967afba5bb9e167e5822f8b250c580e24fed93227b2b46a7a87c4187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

