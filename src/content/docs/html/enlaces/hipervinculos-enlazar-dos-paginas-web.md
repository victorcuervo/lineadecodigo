---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4L5FHAB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDocj1hffVqJU%2Bq06AXUxh%2Fne%2BWyUtJjf4c6yO8slhNtAiAnmR9ywqAP%2FHGj%2B%2F0Dh5Gbq%2B8xYDsbplhmQ1Aw9vHhRyr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM%2FD4SY5tW5H1GpGqgKtwDqY9bp1dJk9EHqD5Pq8Hc3SeDkG1OwD0f57SUGgfuf3cWK%2FGHeYlCvga7Oh8ryCawDIhIpBBOvV3kathDqAe3QSCvPRrwyz5D%2FvG9sPstNn%2FQnyUTxc1ERgh065J8upsEpideDInchAzGnEEF9yQ4E7yIYQGg0H4fuv8%2Bso60WMHRNEfmRxKdtFiMIRxwLmN978cq8GA1Dd6J9t6uviur%2BSxh3Kq8cyevHAISIVqieB87%2B2sTr3lZGZcMwwZPEb1oetF79UMyvMLcRlc1vFrh4OeYZh979twZJjNf55frN5HZlCoq4P817zfAZs1fxO4HyPvDSC8ahD48qXeoBao%2FlzQ3ek6FSTSbBJv%2FCiENd5fXZSxhZEZmeW%2FBK0D12%2BmAZNqonPk6W7zbDTMA1CaKxKLIN%2FbfMa1iaMd0Wkw22I1CgOyhTezTpP7HB6pAHEgFHjwVR1BsfdTBiPPE18xgzOaAWqGXb0ufhet9b5035TT2F3nIEeOn74AnGIXuy0tnNcpvSQesUyNRPLsVdOur3oN%2BwX3NayGR6Wf5ifP%2BD0f8DE1xvxjkIFk6BB6%2FKlg%2FB%2FciinwDYxWoRebiAKKa7mccdIb9G33VVdKxcNO4mqlwQ5Jj3EiXRWylkjQwuqrFyQY6pgEfLLzusKgnshE8zR1Cm67FbZrqHRLEL4HV2r%2FEmtyZxxgj%2BPKtbLh8Iyp9Lh5l7jWlm9eRm8Y0f8RmQCPJGrqrmQB3OXXCuC9%2FAXVKxM6OLpGFXsCeuXoJI3RNWsBVTrStsoE4HaJHsqfOg82CmSE86VxDGjR0KeSsC22z8Jwx1nxGWqOT08o0B%2Bq7Oz2m5UP8jISZvDWup7FTcfqGat%2FM4X3Se9vS&X-Amz-Signature=c87d769e4e91a5418bbd23fc1671824ac5a63fca88bd0a07ed9a66d6d7900131&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

