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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIU5JZXX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T203657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTH2QKVL5GScXcEMbU38lWADtF5czi%2BqFpEoeBQfMBZwIhAPZ1Yl3SUUo8FvT38pDxf4%2F%2FsgCtdpYtybIpBEHjgjxaKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCML1q0iRMSDwaqzYq3ANEEmveMUZgjYqJ47g6mf1FDEXbhAaKxTDv3ChX3agvtaaGwK8pYctinQeIguHD0EwimziGWqGWMlSD5ksikNhnGRj3bWsziEWUE3qKLCmwFPjN8F8iEAK%2BgCYNjBaSOjQHcohU9%2BrgWjOH%2F1dNxmlQYFLGNlcpDaQZWYg4NLtdNbiKBajPzWa3R%2FK4kwoyZUeGBbsXLRxSYmz31YI7UUXDN9pcMEV9zi2%2BdFhNwd%2BEXRbtCWrYAJx%2Bq2WQGTUmo0yiJiZBeBMhtn3nGf6gi6yGkXdHaflnBRAAlD6EcIkrrcTKFaa92fWFCo4JfMTlXScBUa7YWxadLQ%2FN3D4EJESqFRt%2F%2FbwEJzRbiBUiThMM5ZdjbNe0cIX5C46%2BZdVdpBOkA7dLOTJLj5GxO5u8JJ5A5aPsFwLGNgEAInACB3alv9YuTSO148ri0dnBwE8lnsoUzp0I%2Fcv4TDYv0AF6Wj5pZSg%2B5x4mPkEkZX4su4A8CI17L8fqWvLau1AB5vkW1b0ItvxCtDlK8lVw1z%2B9LMZi6t0%2FfU45PrkVT91iXCKV7fFZpNkrfEsjKmqKFoVp%2BpjKfOxy%2B8x2FmeTxulc%2BonqJj3HCun1tAluZqC5lk0f3AvAZNB9YMjVxilPRzCn%2F%2BHJBjqkAelbxUS9YjDhCY%2Fu9fGRXXWz0hEYMzJou7iZ0pUWujcDsdLD9L8dbixicPMtq1ImDwrKzcEjxhH3mkHRIS3VsXGReUd8QHRmjm7z%2BzPviuEkrdEpjcxurTLNpKyX8qCYs1ji4KtvP6z5SSKU%2FiXWDRBbFpoXkUxM1DN4AG%2FjE2TgkFj3brlwdf0Kg6Bsa%2Fq%2BiqRjRC2VSHN2qQPX1p2dOMzfzjYQ&X-Amz-Signature=36ab02e8db1d8de4495f77caae4dbe02d539100340d7e3d2cd951be0178ef675&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

