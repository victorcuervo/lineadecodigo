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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY6R2NJI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEL4f4p89v1DLVwYk3q35xPpU8wQmH0wwxy6AlBQKmECAiEAhDKlqBqHRUF9OwJiI78hwR7mvzpEPsh%2Br2oZa3IDi1sqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5IQxXmkE48AvCTMyrcA%2BJx02yDLEUx1Q7pwDb1dtcl5aCbOantWpCsrnatWTKuOGUhFCvJ5zejfOnqROWEjWHCdoci870jVIxrmt1TV5ZDIE2oytemlR0zLxS1KkvIkPnV6cHbo8XL5ik91E9V%2FypJp0uyC8X8LmFFwhCNgz5WmM%2FsfHNpiUxtVbdS34sm5yp2n6zIW6kWth9yxqbIiBzRlUDrurKtLsgXnGzMnDEj5ypEQg51pU7q5DQyNorSilIQJxRVdF9HC7JxyVgJrQRByNvGsTPAEo66Be2wVTqGAuPSizHZ5WLV1QcD2ISvRt3dP%2BvmNTBLuihsfe5NQV9Vl0OqBjNghpwgVLpEsDIucc3YfHNUZDSjFqwv%2FZ%2FSG0PAALiqJ2I0RZdGB1m5M14Lxb7b05nFihMjXmYynBhzKKJJ5gBxJmVoQ3XE4q4Nk%2FBiVlphEduJGG3kscSik%2BQKi8Lh5zpcctDbmz%2BR%2FWPWtDL8eJwBjKHFvgxtcBUvt35auXURzLeyPH5F8Pe1CsvBhvzDXAPV%2BgSEej%2Fxpt26EW3ins%2FuHSMdNPM5h7Hiqlz8ZRs6t98aZNYEXlYATHzL524A7rzUx12L0AuaBbfysFdraovIm0m2WLU809RUAwM5GZyOdaWcWtI%2FMNSE2MkGOqUB7x5jD97oyv110XIYTCAG%2FHoHfG7UMaQCkBfMoHJeeT4OL%2F07PHrvcxum8zz07Bqet2Sm2xLArCVLURFiA0kkMuCmPayzRLxC1xtzJOxBg4wbePXOwrqCQmKYc3mOAb8tE5vBpexFWPwKl9eJrb69FmpN4jEWOf4EW4KtRLs71oG321UDJJ5r5lu6EqaDY%2FYup6od2wypp7Hp9e2imtGR7Q6vEdNo&X-Amz-Signature=d129bfc49e85fc5ce0e88073a4e550a859938ef6434bceedf57d1cd872c6ba3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

