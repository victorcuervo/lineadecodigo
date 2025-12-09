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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWFP5ZRP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T004750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGUwVbuJ21gyLlkmh8O8n0%2FzCj8yYdE9o3DCWsmdGfBAIhAK1sCxouUtbGFLSpwq%2FoqmkMbuVB%2F0G6wRB%2BSBlL2P2uKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrVB1OTPG5pmb2a2Eq3AP6oWhgRl7sicqxLimE7ZgHS9ncjMD2CSPUFmK3rQqracNPa87OADyji89LdC2mLLEt0JWoQJqEKjQRxp5nTfY9%2BP1UxkUA6N1PTkolQWpXMHEDvxWe%2FYDVcAEoA9gYpQW2uhtLDF9YJNKtZasmoKrUjDFvI%2BbFr4stZfwGEIOqGJliLxM0Ie0jDtIbHorO51pzaa8TqKwCaXwYSoNDvONs9701y5bGpWHBXBUmhLUqJVNhVA1PnOG4jzZLY5rQkq8Um2eLlBX2HE8Y0mIjmuW4HUt7ohqn%2BWg4Km15BReNxssMOSezKgLH9mW3DB7EHSIh8e%2BToWLXIgEDLWv1uBJbcHIccjNkonLU50hBj8sywICUAFuy4VF0EvkF7guS%2FK7sOf%2F0gcULq%2F6yBvFHBFo%2FEExnmApzQODu8yphnkAEtbwoMHW%2BQJD%2FwqB8pHrDaGmWSEv6XbGp7VFuEESQh3pFA9kprSLY0C%2B4W04IBT6BlQky9c2l9BJOlGjXK8EkhCPSg81eLil%2BG9I6QAEMl7LmuepPFCycBqI8KB7%2B78EcajaWqel2o%2BwhBncHFAgcb8hkGz8JrUNM1EHiTTeMRdguWWertP4K629H%2FboF%2B4%2FWtc5O3xG5mvkNeyd%2BejD%2Fwt3JBjqkAQa%2Be25YcAwETmvTFBBaK328VS9O3sTofJhXk1fMcfJ%2F3zFlwu7e5lMViV5%2FbyY1j%2BCMX5xZWAx%2Bpw7Axf8p6Qrv83cQFVFLWGTGGXELA9cWr6t4o8OFg8WyipPaXCeqMCvhMz%2BgGF%2BpaQsanib2sQL5TNqyk8cDCVz1%2FCOYthIAo301jru9NVv3nFulOjpfrmDenj2cj9hoVYA5JD9u75p2wnJx&X-Amz-Signature=ac3afa4e10ba92e7f6ce4a8b36534f48ac0e65bb451efc6288640dab792b1ae9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

