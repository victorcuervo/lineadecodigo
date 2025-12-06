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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP6OBUZI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ%2FK%2FkeUm5qemoFPGW%2Fn%2BB8B8dYdPOhwnG%2BFl8bRy6lAiEA%2BaTFjwHHRD%2FcLv58If3xqfgs9pp3Pw3yfTsMPH%2BDN%2Bwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDEmks41tHOQCFuwEFyrcA4Mmc%2BN8Q0U1QqXx%2Bjj1UUHkQz49rQlSDm6Mcc4VyhfSduk1rLkPLK9c1%2BNoHhYIjeqaf%2BdzzI55fGu%2BUt9lat2DLJu2Zglg7Jw%2F4JrpLLaMzwe6Htxgh1Mf934tdCFiY1zBRbm5rlf1oqaBgDNb5u6M4GNk8yvGcunXUHdz2GVxIhP85q7LXtuvipX%2F3mLgOeZdQsbK3%2FEoBOPEWybpuUrx%2F8l%2BaxBYmB3jsA1WKaPM3wcPoqmkDljyIWkATjPEtTtmowLflsY8Iz%2FHVSeE%2FdkNVu0%2F0mV93xTw84HhJecp6CFTyBu54Zfok%2FbSN0yJBruaVz2BbLx%2FZK9GrlortFdJbi4sqCwwCS8fCAZiKEZyJKr1dWqGMF4vldSmEWCpfjOrJzMR1damJrkBnl8MQoIQshM5He5Fri5644OvYZiTvj91KmI205Ttir4DrZdFUvytRcJSJYtL7Ws%2FgB45Udw3P6NR6blawc0aTc5PKgm7%2F3TYmuyzOP%2B8F9XQ9k1LGJuRtbS53UtnHocuu0tgkGR10kjiKvpIRYk9nIisw6hLFKwUApNSGsxz56cwFG95Y2UCKRJlOYQfm6wmZBxh9%2BgpjpVEiomDtw%2F9IQa7u36EqHlzrgFhuxtDQIXDMKynzskGOqUBGa3Iyr386QU3W2%2BEb1K8Twxg4TeiwgTfVei%2B6gWIKuIpMpcbNuEL%2BCieJdH%2FoAT5TzTWxNeiPh8kN6bxLeLp1jqKCxQNyrF4KbhS6yMyN8bytG5kN%2BgZk1h4v1iTJiJI9TEwvtY0h57X0txvAqzLqH8SIrnj2zHBD2HvMLB%2B15Q9PCNALwOBtPUhOVffi1S78gFkgfskQSttF1SgvNm%2BmaRyOoYm&X-Amz-Signature=225ea4add616f52e81f9932d23381316df8a01097d002449c5a5c1ffcdf5cbaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

