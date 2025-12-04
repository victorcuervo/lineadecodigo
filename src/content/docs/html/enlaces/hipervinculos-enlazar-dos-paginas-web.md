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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZYL7O76%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbshL%2B1ELwIbOM5HzX3JqoYAOtSkrrVTvtwLgbYz9dPwIgEsKwcYNeab575ZJ9STmlW5rRN1%2BhqsiMlrUIaHpayVEq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDDWgRR4n%2F46Qc827dircA%2BZrjMANaTvZ1aQUaWA6hYrWe%2F0rNSVM2uP7kBWfEw2o4eRWGFw2kXcq81MYx7O1ucZSaoqwAP5frW4k7cLUl9xDpLj041gL33J9kv39wns%2B4z1ZfDdF6nF45sgs5X4waol5Xd2J5R9sa%2Fg06Y5W8G4%2B82UD%2FWOooStW74HtfA6pdzLwLH6viW3StzQay4RD0DcP4oyI5Gvx03C0Gq5u764Ng1Cg86SDXyEXwjz1yAvCC9%2BXNhK7%2FqhQNAIJYR71JxEpCLssAC4szJ7z4MeHDHuyoz0lYPPZ5wUMcprjK8xRFaBaHxEqkygvbUAzIUeHi%2BYBVZwgO9WBbafm1Ly1yyB%2BHaq4rx3WDns28zSk6e3yghRQ9OnUlUgv9PfMVOXwFE%2BxBez9ateN26sJ%2B3aJC%2Bqkq6yU2xSvQClO8gJDIrnht%2FWiIMkQh2sGu2tVK%2F4FA1mv6%2BjF50x7Q54pUg1m91E9oZqBId48cWoxFol%2BYY1V3ePLXLepS8uIZDu6jXDmP7cPxpWc85i1H5JOMopc7FNlOON87ywJlIbpjqoXekg%2FKGhQcRoHIt7F4TFIHp91Mg9Wl5KVcQteFL5ZzVV3kXJd53q6M3yeRagTXniVLz6zgAuL3bOwZoyNQwXAMM7cxskGOqUB1PZS%2BgNfT3ZLawLGiBN2Hh5ytlsdoBJ7Z8h9Fj6GbBP6zipZEOEww%2BGS%2FFsZQomUYchvgFdlTggDeaEuQ5AvGkqGRmKO9zpc%2B%2BVQ0zwSLCO4tJPpI%2B1t3ZS5WadQzoo00joErkQ4RodDBfn4%2BedE8hXvk5%2BA2ZlYe6Q4muex7Pssop0Sx5KVZJb7ggDPmD7VwT5s%2FYew98O18TqRxQZj3U0lS%2FiM&X-Amz-Signature=67cc3a05e92290c4af10fed0d5070bccd6190f14e05104c328055b6128944d48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

