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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SQCJBQW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T092533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD8m%2FUwWHIpnctGXMilPhOEB%2F4bC4zkAAe0H0qJKmGyQIhAMQW77t%2Fv2mpi3cFMD%2Fqhb5ZJG9gM4MHydNIo0GKaI%2FCKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGsJ0030gR%2Ff8zfWMq3AN2HlZDcxVnOV46uf9rZCOF%2Fz7%2BKj1R0jUGXpFnEO7oMzotpWLmJbmbV8%2FznsBlaGNowmTqPXVKjQsQOOWVYAkR0ZT9wp8g4K4%2FCUTBA8S6UF1mqU4RZdTa%2FGEhXPP92V%2BW7x%2FoSR4Sm5oj4ikOYI9CBu0vtjp6l8OUqih9Q%2BxP2aAzTuXZS9GyVbnY2OVcMAehFoiqQSi2%2BkJrae5jQ7LFlAIQeSqFy1LagF7O9zfG2OpxJ%2FGoA7friH507FqcEOmRjCmh2urHcS3TOg%2FUsze0Gt64buZHjHGvtWdv%2BSy3064hhflzZfTrn9JrNbDRU01hzZ%2BQk57GsDKGolhadGlxGFtEPkk6w9I8gxHBJAo8SbVEmo%2BCHjyKHJQkswUxmp2o3j5gQysCZUUkCVg5j2OCxSM%2FQxP%2F%2BF8vDf%2B%2FMPp2XTU38Vv2OYJQEEXForlCYejy2gYvrvp0KBE15vqztQXpQs%2B5b6nhZGSYBCTrLvUZkagG%2F2xjVmYBfkUKfqAWp7t%2BUw%2FixF%2F5DacDqN0TWb5jfcToyDGuB%2BNB%2FOMxbDqNoiokRX1Zq0yALiQFuy7gJP550RrFVIb5udrMlj%2FSyd%2BsooZkrWzy3VCaPBiuXa1r6xcvZgOe5oqcXXcrODCSxd%2FJBjqkAR9Gjsqi5hRxo5ukHnQw7P7Kf6pleGNTRyoNOtj7H91l2WyRjSdfgxZv8msduvr3poSHXONt0KTosH%2Fl3aQYWuQTSteb9dJgoqA77pZGjd5NsfEkSml%2BASlocjaDzZkvLgzaFUMRdAcktQUVLFI%2BAFumk5BNFBxVAjmLCjBT%2Bo8o4%2FkaJPPXg4Dcm0q7%2BG3%2FTiPhArtRElVZM%2BG637k9%2Fec8fKqn&X-Amz-Signature=c324fe36bc86b4141ab3ae5375226bc3941420d05e872b81bc3691d919af1ec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

