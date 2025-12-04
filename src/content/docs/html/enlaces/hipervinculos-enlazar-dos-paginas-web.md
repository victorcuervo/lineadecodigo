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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466272KZGB5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCHo15uCIzKMXEVMpQnv6%2FxN5yyXvivQDepJx65dkZyLQIgFqBmfS2RFQMkla1LAesRYN6OzkE%2BMOjiAQJIzD01Hawq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDCHD4sGWCm3bj73N2SrcA%2FGV%2BnrM3AjEpSjBvMhJjrdy7%2BubVfn%2FWOQMSfKj9tEDZQ%2F5rP0SpKR%2B9dSb9Qg3ElsrOTFO%2FAddaclCztVXjNchY%2FUYh6aQWlKaPKSoRlahNAg%2B0i%2BZ3Gs0xatl0rijkFu6VLJd6X4udzEAEhQXrjuxshmEGSqbY%2FQP86fqvzKnO7ijlztEcGweq2kcGOz2Hz7nqazMwUAvyX1hvJ%2B9kjMRhjO1hAKJQYqdAYkNcgI0%2B%2B8Bh6Lwny5qiwa2hcnzVK%2BvmCULG3S7nQ0vvcnFTQdluwM2182MxPbLCeG560S2cdbuwi8mcLFu3JAYO0aUlDiMO66dbvrzkM7085v7epgmVeJ%2FTcDOIknngkxl3r9KVPRyQMt7aDzIBK7KLl6sM3t3MoYwy1O9BlUTDq6rWBEd545QqckYBSDhKB1GAbzqr6tWn5xmiwHfydeifYoTD7d%2FM9C%2FTLsu0nUQ6lV1A3Kk06YqwdOBD3d%2FjOlriu7PvhP6PPTMzs%2BvT2QGKq0VPoHKIJ4q4IT0UwtC6jiWNQqB2MuRX%2FN7SHyxyYbfDtnSFBBMINuhHXaGWdoh9yKpxA4R2im2CdCQwauKipuY1jqurqfIUqy3UoeLRFuTLUoM05mcJDjM1lLMq6aNMKGuxMkGOqUB7BBTqv2o8K%2FQbZElOQHDV%2FNVVE0kMMd9wUF7SicH1rSgD%2BWojZfgGBeXPlRnCc8SLvGupx6cBNxrBOBotDaqUzMDs%2FMG0At%2FH2bCNcTfTHTPbEY1qi9xgdS4lHq3gcVUra7I5layuMhwCREYdPTw%2FGjCUykAiiw2qGnmX8VoD10b3%2Fg9l4PjwkzpDzSDRf6zg304TuLLvkcn3YM3M3NRH59Jvt28&X-Amz-Signature=b357a59ec43c00feeb01b02fbdd591ca3bbf44a8e58e7b2d701558ef404dd860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

