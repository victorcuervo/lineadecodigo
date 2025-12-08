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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTEXSLA5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T011219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1WhVBDzW47KZtUFiA1uXq%2BTmwMYMorqvJh41sX4F3sQIhAM3LooejWr8erzAmE8AwV3jbJ7wd0Q8rk8N1IS%2B5OuDBKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeVhTdBTE8B7uGwfAq3AMb1I1tF4I03LnSHzgujT5FEChOeQVgpvWgf10wpeeEPP7sfSgwOwHcvSpHshhvznv33875VYsw5duA%2BH5tNgdRdHQVW1hwWtav%2Bug90LUGytRWQu%2F1sJLDm6sCeyydzP8%2BQhIsArxKIx3y%2B8cXfdGMpS8POGhsfgTY67aOrf2RbQllqXBwXs3KpbLT%2FpGuzgbEVO3Jls02I3FEcKiiKwvAV55PbR8AeOOgCnhMTaq1qpG%2BRGQLnvoMFq%2F1zBNez2RFN%2FmrQVQl0Wquo2dWlkJh%2FJHnomfnRsfHoVIvGaFoRpZZFsEC9GprYEyyjHkgdOKZTfJKwHWzM6sDaR1l7JABuOdHqLmSkebErEUwqa6pZ5%2BRMf%2BjGA1krzKYgsOVrPMt9Z3Ialfkr0tZPhyMtpmanFgtOw5GJnYD9lDv%2FXG%2Fa9Ljnr9dc1PkjaWWFGcGFjTx7NrqpN1qGWr1%2BhlFho9pTvJ1bgH70EK%2FvchGulp7JyaKsrUrYe06tPw1ra%2Bj%2B4jj8bZYnCPgTKTWk%2Fr4FCUacN%2BGCDq3%2FVrMB79KEYlJousKoxAI8ZF9TWNQZf%2FEDwzerfkdYfn3ckFoN5LSrnCjl%2BcuD5mx0XsTvKKZ4N%2BXYk1B%2BfH0G9PQgkTGHjDEodjJBjqkAbXmtLqK%2BDlNYipgixJzy3hsfP%2Bjf8e%2FGKsJ9vVijj13oHZXOQiZ7l2zfbbRwPMxIPtUaBtMBUQ4fS2a0m83Ro5QENvFA80vmWfnMe2vZEJcOvvrBDgX%2FmkSyjp8Ljq%2BM5kgFYaAzsyHNzIQ%2BlSvCNhxNlRV6doZuoKaVzpy%2Fb6s7LD2%2FPeT0i7HwEeUEzLnj003%2BeRrfqG1DesEV6lw2RnIUvTJ&X-Amz-Signature=df513c81b85f657909888e6df1ebf6a6c90632140da5cf6c1d2fd51bd0f6f9ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

