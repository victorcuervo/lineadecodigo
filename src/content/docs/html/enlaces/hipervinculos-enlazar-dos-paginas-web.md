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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J4WNMC6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQD%2FHbddkMRQeKBE9cHzy0eUrKpJepDFPpibwKcZJNDcTAIhAM1LOEFY6MyYelfl9gEVUzaIRYkI35%2BWde1GKTMOoXODKv8DCD8QABoMNjM3NDIzMTgzODA1IgxR8qNmWVcRPWVbJlsq3ANXGfSv98s%2BH4ijm58Y%2Bw6G9npr%2FeEGcU2cTyybPBbs9zq5iWBUbkoGjlRadZtzeHaz%2F2cMdMYu%2Bsd8vJgyJtVynAHEQXdxtgWVfEGb1uvmM%2Fq0j5HgrXOAuMFbYBfot3tp5%2BzxT94TMDN3Y9qB2nvcUd2B0XlUGryyxP%2BePlL0N6GmseixKIqIFZlR%2BDw5A3r%2BUlKIKz17syp2JQkzDanxBLIXO%2FiovvjiedtV8sb8WmLMHCTq9FW4k8yQBn9yzouF1inuplwQiH9PdvZjDu%2FpvpkcIwWnrk%2B4GrA1dKAzTC%2FF4zHc36bm7ugi0TAeAcWbKbpD64hEUsu0DbYpl%2FpZvpO6GlcKFDTS22M02kMLuiar%2Fei15A8Qm%2B1SG9EcWpsna0kMC%2B7xe9l%2BKE%2BG2TBEA79XTN9LzDB5%2Bsk%2FMzFUBM3jkUj5YDO8giWBJM2CURzABkvwPHj4w0vn74YFt1VvgegO%2B3aF4n1BLBNoKbDzLLxhcasP6JYUduLG9nXBM7TBt4f%2FCdmx7eObaUC0mSfQ2ejDtHAEgSH6ywVA5Ti0MdCSfpn1kw4t8HfUoxQuZo5Fk4rAIISK%2Bh%2Br%2B2KMNmwVuK7dK1tcO1%2BN2PEwlLhwWnVuqPflQO%2BhsjsaMzCUy8TJBjqkAcepN%2B6xVciHPhqzVahhDCALdBRh4izaud%2F%2B403MC1sReVAbKtWBqqQ%2FIdL1HSGX%2BVyaGr6n9gBxm6I31H7UPjuX2IbNrFpya9y8nQ7E7s0X3dk07gMOpZTr0ZU3MS9DAXcxiHMcN1FRbWz68SxsLvan%2FZB88fapM2sKg%2B%2BLaxRffgalgNbYr%2BiOXrl9qD5vomCMZ%2BYmoD41G6phbSRaJ8qHOCLF&X-Amz-Signature=e376f42b42a0e37c1b6afc869be285a7236e48a559e31afce1a9e3f7cb9b8905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

