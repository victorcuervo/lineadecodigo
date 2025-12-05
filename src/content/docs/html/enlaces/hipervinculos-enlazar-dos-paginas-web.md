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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5PUGVN7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T162826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4%2FC9vx6etVP6%2BvT8s8lye2dWbHDT%2FPFtISosEOqByRwIgJFMlLacHzT%2BhwIuLgWF9o1yaCfSizzEO3weRRPapYZ8q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDCmqK2beAQqPKc%2FfVSrcAzsMbk4Rv4SKu%2BgPVYAnMlWtEfu8s%2Fi6%2FR%2BF%2BpoUf1oBn2NvDPKU2rD0%2Fs1IoY1XjgJ7Jpp%2BinA3bG0%2FB3ZWiLcONGA0argio2j%2B250L52LfJ8xuptEQuWR3s9Y6ye1YL7pZJfjZ007R3S1CfGlpVk1LUvD8tO0spWtGtR7KVfq6htwbHs6aMovyVx7o5tfd78ZXPyIoZI8BFd52GRm1rz59WAm6ocGXmGRJnARSo%2B8uCM8eeU2l4I2mEOwBolHfQ8n0oqbXSs16IqdGoILbDzdSZSM53z6JMD%2FpPG1Ifv4gWQYV%2BPRYavgu9Ogaa3N3Pox9IH4REYK1jQ%2B8sK6v9x%2FB3uRfOfVfGBoMSnlpaSYK3eyaKkJyGVUXG%2BQcCuKwDe8oZebOzqL%2Bs%2FBkSixPr96Pq5AVzEpGM26WZefxeExrCWFRk0vYPpugD%2Bq5vBVMCtz3ojsj%2FqpFFz4eePMst9zNrDM7J6yF5vlWkQjpLLFDOByPiiR4Z1sa%2FbvDmZ8KbVhATeM25RnIVsmDxMnPDmQqOYE6a2PnIJRFTDrQhhwneYTFZ4%2B7huwvU3zpATXfB3t6STsk0xQIE11AaC%2Fr80vr6261RY%2FkJBDaauGyzYMMH3j7PNN7jKVTDOT6MP7py8kGOqUB7xhrrev%2Fkza87KWU1fckrOoylMhHoJIeaSp2KhwUF5OvhGRCY%2FNC%2BoFPEl56fSKd3LejMsAsruLmH5E351Jrny4FQGyiJXAnoLGN2ORi45VJf2avyCygker2e6zpZjMP9cGw6Bo2maa0Sr1yJFppMKk8AJZ6FOUTtPARwZVsT7w3EiRFlBeqtqnPA%2BBFB37HBGzTa6BYXHv3RyKsVcmg%2B8Y9XnL9&X-Amz-Signature=18b4a9858d1b8298d15f4d37947c71c302f5eab97fda3d48d2c190e6f4b238cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

