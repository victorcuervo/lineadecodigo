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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JOAAPOF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T204735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1C467BqP40FXEijSYEc4YfsqNV5SYXIC1vEd8kDZEQQIgBT31Y%2BnxSHWOJDrNh2aMia6W45mfPjDSuDBFtfreCiIqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2BeC5hE7ScSn4SlLyrcA3Xp7MjNyhFsbt9Qdmx5MK7Cya%2BkMawEfQZ3bkGYP8l0gjfP2o5uaiXMFr2lghdoMU%2Fyjs84FaTzoz5fnd%2B8MEnGuEdLa9uq3BGtjZErUF0ja2ftsd4mb1MYARDDRUh5efdy%2FMpicX4j8CR95sBCM%2BH0PIZc%2BqAntgbqrz7qDif%2Fz9WjRS%2F028uZAF%2FqabPYA2BDab6%2BauxxYadetVuSvy21bAR690BKxeHJ9Gw79PexsP7cHMRKgL0lq28hMFAHox5WtP7%2FxKRTelkLVzaJFyA80qxdKNODBNCy9UEdkY5M%2Bc4pLK0YijWgbDELf4M0Zt3FJ3%2F4QJlisbTBWqUHzK59Z78Gne4jrVDO67Bwz73kQQQllPv3EuaIUViGFcicw8NVSyLvLGEC52L%2FL0oCoq6yMblXoPPu8c58bLjPRD1x2dRNT%2F0PxIzrXSP7RWiMiPM5BWKJ5r3ChZ9T73WjJn23iZ9mmTdtO2v%2FYi%2BAYsRVbW6jws9c1vbJLqnKbJhHzhbp7PPGz9iEBD1PIf1ytpakSzi0ia8jqujUvftWx3sqDmaxWU9uGuOWOC4cx9XnKMP3TlLWPtfIkIr9J9QfK6dQfuT0m19yzu2r2E82QsZWUe986p7nQT0oV7NYMP7H18kGOqUBFRvzSk0DWFQoUlWSZU8whvrcHQI2357f4wGripY%2BG%2B60K9jz9Ucmv%2FzcGQUJmr4MKi%2B12gxYzshsKR1cXpyVV0cY5rpN0K1%2BSSeokfslnXPRzQd6itv2MlaSCVQs2rJD%2FP4ovrWirRADOS58tBoyw%2BjqtJycEu0zAI24zDkKoaT8GGHS0d%2F4jDz9GIu6DcQCsbqca69TjkCOWV9e7rIi0ODNtanK&X-Amz-Signature=12734038d8cd7020ea87f52d041fa409bcd99166ed37a5113676f3d36c38e6a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

