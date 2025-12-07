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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BPZOZF2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T160021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiT4YgXDkMf4E6Mi24Wo1%2Fp51O7xlugLO2pL4sOWBPlAIhAPJ%2F%2BLjrZpspiPc5uLpzxML6jt%2FmuaCBM2j2ZKwrVUD%2FKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPohb0tT6A0Q7alV4q3ANwVvrGrTem3hXjDpHBtSk09%2BL8U6oSlRSK%2FaeblaWmCo2Bl%2BlcVwkDJ0CZ78nLLXtNrANxIwckq0CUDX7gQCzXn%2BfHdxLhMFdB4YGauIsxzxyjVMimampRgGcYccJP%2FgMlmYvwawfDddQWlfSzfR785vuVOaxDFjpmoRbpFe2%2FJBN3OG%2F4bzJkiqDwwpfoBL2dR%2Btk9MDNAnA2HK2S3g4Ahvw0MPjHp5ySQLmB7d%2FdQY76iTpxrehBvegau9g2EADn%2B58SDs78CtTzUAM3XbjVKCV3so%2FlVNmcQax9sk7pht5lFEUU0PX2oSIQXo66rm2vHdJK%2F2py3PzEjADrW7n9DI5tbjulboAeS%2BDupXJkTdV4QuD4%2Bs%2Baq6LxvjIMUxwuWXQKdfNSTFn7y1y29gDsjNQfdc4CP5JMUXDmmwX55WJCcNRaG%2Bx5ihK2LcKbqVrIK7hvyygLvaY%2F%2B%2BLTv4NfVTLXfSsggi8B9GHNi%2Bt3a2uQNFkFr2WkyeJkfTyXuPcJMSKOgGK4rCgZl%2FomQpTXWukpIbTA2MATG1CxtsSOB2lXu46j%2Bw%2Fe9KFwXQ9SgxCgDBlocO7IatA%2Fmo3tbeUPFpY5M5ys5G7GKsoAJn%2Fp0slusPKZgz3FSZ0w3TDkvtbJBjqkATviA6g1%2B69mmPluH1GTXyEGGGXAiHAL8fw8JJuTsLatqQ%2BLblBTizq4hgzVKLIBDe3IkbqfH3Tas8r4Mzp5z9syk4g5k1aUzPXQHtp2dHocHW0ikhOPJnmZ%2BN670JKbgW8DbiSDHs4D7Y152Z%2BaaJL%2FlYB9guee2FBMiNLwpD7qni%2F0WNHO3FMe1%2FfCiUBK56%2Fk6SxW%2FRx4DnquRdXNHigZAUhJ&X-Amz-Signature=884e27acea8031e8f905bba00704729c58b74422461ed5afe17be117422eb5fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

