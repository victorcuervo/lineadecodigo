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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTJWB5WQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T224743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQZhes0dBCaQEKHKGDBXkaZtzwsh%2Bpusddl2JU6lEJ6AiBLIKeS%2B3NzDQcZQEHkHSa6wr%2F9KqC79ZhOophuoJs3kCqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGxDS0Mmw1xhN0k60KtwDOHVxZdzeSpjMes3JvNUL0UUtrTvEltqohjgNz%2BDxDmQCdKBRn89rDmM0x6T9N0CIQlDQ8whichn9N5rDpJ6DSXUclfjJhAQRfO14b9Rl%2BYPEIbTWaswtEDbTyUM3rTD%2F%2FL8pNsvCDsN7iUtxG%2FAlXzOPjOkTx6Mdv9aayzvxBEebauO%2FevmIl2p4lcLJQY2UrpF341ZXHr7oOQnSDCNLZvUdUkURecTq0czFpyNtJsWA4RIhzFOBWd0DSgYmn6VmNYvLLU77K8MZ2LsDcJ8QldemiQcF8suguxk7f9xr6acC0Ikqs4lLr9MoGcvnj%2B5BKOp33Nl31%2FmzNAyGXUE1%2Bp3SwFxwZiozhxYE3O2AYRtB0ee0nKsnKFJmyeXyUzmj%2FAjMP45l2qYYtC%2Fvof4r2NOqRe3cICiE%2BfNUUFdy9Sd9%2BpLAyWHfEK8FtGJp0yz%2FtymYBQEAk0QsK%2Bp4RZj54xZ6HuxiHWJ6GUtayaTG0P8SkmCZv5ibYi7yG1cyjq20Lfz4bnYlzKV99q0Do74vr%2FdxPPBIVoub6hj2ncEBZRYUFA%2FvdKg7jXQouCX%2Fn3xefBpJ4xdAR0wSD5VFsgnFUL2X7jSUDnLOQrs4FKQSHGj8jNWufCUAU4cQcigwy8PiyQY6pgGe6dIbkDbXK0v4m2vwe6rb32BjdtUKTBx3WXAgQ6n74%2F5perRxhRtEBLWp4c3rdubMQSbSUNfDEweX33Oah%2BzIy0HBRjXoBkys9wVzQEcDizyOSHn3PEbbDegaH7FFhVvQwPGSgOb622ZnaPtd1O0Lai6y1bX0l2hCZpSnpEIsc6l0dc1EP2STSAWUOFcHi75Sb1okW21oKKpW%2BEuxaQ3Bj1dL60In&X-Amz-Signature=42416d832189be0bd6229ea5757dedca5c5fcdf049df36eb51d66152cad78e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

