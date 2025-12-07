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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ4LVZ23%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T094156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC637qkiuBYw8lcHPsalrCEI3QGzix0voVhgaSImi5u5wIhAJmkB3BeNueCxgNQbG24tvusP9mdbaNkSU8gGd0WAErCKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlnJM3hCFedAJIpOoq3AOUMbfNxY9yxviYQZWtkqBnsMdWk57uV4Ln%2FzVEkDKM0znj3B%2BjoX0cqvfcpZQ4pCpC%2B%2FVyTSE1Lk18uO%2BNnxt4OTWA%2F471B0FmdcKNOSoTs3MaJNrkvwlwAWNEJX0fjBB6Q4NwGUhcSpcoTqftSP75m5UmrSkvaC82IMwH8B5hV8U9NCnFSqzxgz4YsEZc%2BhME%2BLjJrsoubFRRuoIRyE1iQe639Hu7hRT8XPxp3Aq4J37S4hrybQIeL8Z02WgEt3%2Fh%2FZIt8nmVCng3rSCXBj85Sx65g%2BDFbeHXWHV3qjtgtf9zQ7ec9PG7RyDzCmksyl1k%2FDeItawStguuJYvS%2BNU%2B7lgdKzQ802WUkK1czep2LMULWtTJuLw%2F5vMjzpf0nhmR9Bs8KEyVzB%2FqjHnw0%2FtQ8U%2FU5OZJJ3nM09IVMuNMvZT%2F2istQgME3LblbkVvN1YeLm%2F5DjfNK7clp4apJETp6KNYtWpMlx3S%2BBcEU9oGVVe4ns74kusA7i%2BllbTGbTGFuLIgfc7fRmB3NMQMIX6Tm%2FNha7S%2B3bqokm5VgWI%2BJTc8GulrMq8vqdE9YOXSlODRVlqFsMIem1%2FC24W5CG2G%2Bf0uYSoykG%2FSrNBnksDzLk3vQpLsWyshSHIR9zDXoNTJBjqkAS3XAZ8%2FUVozDGy2Q6XCSJF%2BFnHUZvXDasnJoya5C1%2FiCcwG06ii48RFh%2FCajXYPWEd29eYBYhd9G5LdClSvsenfoLsvTeyx4aA0FC3MzuWFftHjAwpFmPDFp2xIjDJ3qU0egmRIZ7zgTNRfXQ%2FIPDzU4WIn%2Fatm8RIuHatot7F0TY3oAXWyN93sQ4dfSk%2Bv7jp7pUcaRySrAdPYUDjgdh%2BwVZqi&X-Amz-Signature=c148d778e6027fd5f393a71504e5f6c92395356da9285d5a242ea83dacb39d14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

