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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GYXTSQU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T075710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRJhklYMYVf1SdZnhjcOMci5IbOl3obwCoKWUauz8lcAiEAyS5GceEzEs0eUVkKl5RO%2FHY%2B5bBcZf82FMmBEM29IXUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAtzojy%2FZ69TXYzC2SrcA4GE9SS91zY%2BuepTLOVzqhi%2F05x8as8PhiH9mUB14esBqrxKOaVLVq5CEyZ0el%2B%2Br6FYsLhgOqjTE0%2BDYmDHnolSvvV9TI6jVzmYRtESv1eP7vf5Ih%2Fw%2FehPHrfx%2Fh610YgnLd600ThnKc0ZewqGfvj3MP1Fvj111BwuB44D7Xioa9aP4aEcd3iBWdJYOXRrpR%2BIAGMd8a%2FAJJUyugCH0OX8MAOlMdZCTAGENxEqvP345GqvBaeQv%2FJ9mjGJ3lVgtqkbzW5LVHApai9jur8IufKqhVLd1t1VNXCvlMsJs8Abjc%2Fqfq3mGuoCf1LIxj35NDpu4%2B%2FXhyxWIePpnTFWHaQNHG%2BRNwTXX7dmm0x2P8F%2BiZcy3LyFzaH2R1w9ILvgCXuZjlrOofZCeizzIAOdn65hE%2FYmKqLXNt75m09pAOUm%2BeR60%2BPnicKuEE3b1Q52GZcFOLjKkL%2BIQ36TNJbDdfTH%2ByypafO6ma96l42hTmRStvqyZ7Jg7FErM6wcNLR4VF%2Ft%2BUNTJkO%2B6njzVUONxT2RXh2KCeBrm8KKPvkZIUT8a9WDGEdL0woYRns9vamVxh%2BWGDC1dDMGmA1uRj%2BHJo6R%2BRy3BGktw6BMpq29WreToB7FHWyAQWxjX%2FvnMPm8z8kGOqUB5l%2F%2Fd4PLT9anE8771aNnzErxARTZt5rj5IfzQgcTCaaL1LaOf7Xg%2F6CEBbFQBRFLdXQ2w4Dcd%2Bj7ZJiKJkk6phupSMT787p9aPN0a6VIazRVcaiYGGhrStTar3zpd%2BWC3KUO%2FTqrHgO6e%2BPCdrgh7%2BSKLU2pUUVEricOWENzdNE0PItrqscIGCGvoaPgO4bKuP1jFGorjsnkgQr4q9XPI1xZ0GAj&X-Amz-Signature=d9d56ac7fc0b2838c9e4e5b47c121563b406507765e63f254e996761e7b14ffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

