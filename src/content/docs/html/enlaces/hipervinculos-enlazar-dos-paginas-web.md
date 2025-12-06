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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ALT4WPF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOU2Ideg6Xz%2BiOHDJQPwWSnDXuyd1CbxtGK4crY1sbwQIhAKbBrQU%2BWRIoVoe%2BEWwySKJR4E%2FxxPzYDWUUSj%2FOsB%2FCKv8DCHEQABoMNjM3NDIzMTgzODA1Igy%2BlFc8DoxdcDaMS8Mq3AMCXbt%2F7V%2BO5%2BuX%2BrQPm1aRivRntooblHgSfongooDu%2BCauNCB93aWfHKHK5AFXRDDVh4Nxt8u6qCWo5aFIYCyFp0OLtbX%2BkC3KPe9y%2B3kMm27a0jTcxrMmCDbPrWksSWVrDiESfyd4X8VNJbl8PzSuWdFYZqD%2BLqfn3Jnqje873VNFxht4j5Ik1DDoLrUMHsX2kfuxOyZopHeMvEIZXxEl8AMfNmtISHUbrb3xjYyyl%2BKpCNUAwr4J6gCrFqVu7GsxuoymaZMzRoKXlVRsWdkB9UimrhZm71BT6MAnUd8cu8cFLnNUM3ryyvzTbHGpbOvy%2BeMUwZcpKWaKvsSpfDfUDpz3I0rnwYW54%2B8JcNSVh41NGWeTl8hpKe7APH%2Fj%2FHJUkHLPaihQ94cTrWevoIW7V26Dbf7%2FYKOLozEtGLC%2B3E1fUZala72zQ0XUCbPGUZXx896ZX8x4NXtzEbcFQir2%2F%2BNVP4RErStN44dBJ%2Bm7ff7O1X%2BXdMYIh4aQupB%2B9BY24NmBo9UtSqPP%2Bqd3xr412zASw%2Bs5suyKo%2Fa7LtFLgzTcozB0IqUJRnKAETtJpKGIsU3F607B%2FEzinkSQsnekhAXHHquwFjZ5lwGtAMvPgwNeg56XiicuClpySDCevM%2FJBjqkAYDjg%2BLtKWmalIxyEDazkW%2BT4r97BA3gZtR8nMKH%2BasXWwI6Zp1DFWyY40tvmF4T0MikE6hkMS7%2FrQu8Nih%2BHDoOYcqYjmVJrqX0kKbyjkdnSCEOp8eZmwVEFb5Kx9ax%2B%2BTxllWYSn5NRK0neeDqdaf6Fyr6X9HfH4hkOEIemmLZP8yUPVa9ssr5b0oPqSFkfjW2YFnj5zdFLC8AmzQDA8YnvPDk&X-Amz-Signature=551549fe9335af3506ea10c2b9f798e1c81bd7c075a63eb77931952ad56e7712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

