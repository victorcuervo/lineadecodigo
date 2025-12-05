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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TQN3ZEA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T101248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpzEkFipHWm996rc1SdAC3c%2FLmccoopcx8MnacsNkp3gIgSCin4xyNcafLORfnkKaheph18QMUXsgcK7C6m0NzdDIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCxJhr2uYTWRvV3SkSrcAwuspj2kBNJBIinKvBhYfcQJvGTqRxutKxm5p0%2BXL%2F1VykI20S5Ejr3SwwXsXbIGdmrTeXur%2BqCZda0VxuzGsX3t1mN0ut%2BJf8UCOdGWDd%2BERNQ84uZyzJrxTEG8iSPSvwLO2Q1fqLiscl%2FqA26mtdbF6Pvkj1tnncQYAP10fcdvz5nAXPoIwRzg%2B9A%2BD4KfTKzD8IVlZW18i2qqweHEDQKbBaUyfR32LPm1TGKjPPlCpMTp3wx4bxpUN0dpsI0JqoN54qeEuXj6HLWtwHU11ON97WqmrzMlwrZj517yNLEwd8vKDZxFlaAeOEbOB%2FV0QljSniF2Oh0PDR7yGmSezkWNUJ6HSKeh%2Fkf7xKoPfI9Ebd4Itj%2FouEZt%2B%2F4mUIIUP7pgQcJbeFo%2BN5quBTe4fR6hbnt%2FavDlJ5%2BVJzxrIdyaJ%2BLupQwOE1C%2BtIjvyFV80NeQXYcq%2FNSJHy8HTw6wauNIatEybO3lXg9Eu2y1AJ5%2B3NpSXCmDTpcAkTehzEMtBmBPb6YowA2Vb7LtP%2Fl%2B%2Bzs0gtWHgwf6wFzScBvPDGj0CIrlSijQhPmlxjMBb2LwWepjj8pKFNE27jTgz%2BDPlketHjL2nruMCd4GzM0tb4E0X7jlJI6%2F47ohxCxHMKfOyskGOqUB0R2wl9KmElD%2FZLmuJnmDzdn0tT7G4Pzuoyl0me7do3iBzGEG%2FBZPaMegWngG2DMM%2F2eZkpJmnXCfXUz5d%2BCUNSx5GrZOoseBZa0HsKqGH%2F6peHFxHAalEAJq8WS4cTIeBBwboV7Y%2Bj2xjDldGPVjlK57xsx%2FRAW9bjrYGv4xKk8MYeVD5%2FdWGdm1RTVRsEFrWmI4NgUvZR5rZSx1G2PVSeXcEARe&X-Amz-Signature=4423ae3c29dd68c9eef6bbb424644d33823c3923cc1678c7a8bd007e98c3f669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

