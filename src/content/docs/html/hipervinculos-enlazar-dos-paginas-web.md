---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTPLVO36%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIBgh%2BfuEGUHOt4M3p7uN4i1dgyI5kaJ8OUF2FHpWW1F3AiEAsLtm7XWEtjCYFNGhmnmHH1Fv%2BJaCiwKDyE3uCGNh8Dwq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDE1oNDG9b9aIEbKu4yrcA1nTdHf8HIkdTLUhINJOngJyZ2pCPkhRSzemhS6MzvIhSfpuoM1ZL96GAR%2FC75izR%2FPSd8MIi5gAvsaouvfLKdL2Y%2BFExjCDo2FccILY70MxZUm7UUqQ8mnOKrNktvLtEyMxfXsMjzr2M5DnMPCJAAedHc0bMgq649WN5VE4a2sE5kan4Akq%2B2cyToCNI2%2BN2IshTzpMVEZsxif7oJ4bBl4B6iDcWlb0PevNSs0BhLTnQQhleTC7gr%2FqiiwThCbIiT1D7jrBCSIo69OGuTM%2FiCNzsoevfUxa5AWN%2BkiTkXI0qWEiX0LZXW%2FqO9QrgPpJrHVdcKg%2FOIeQIfhBdNVnXqhcFs8GkaMtMKOs%2FwXGd%2FyxPFtRTp2n5TknHoBvcyGFf3cS3o%2B0ojDqdNzXsW4O63GRK0tH48mnP0grUOdEEyZM3eqaOg3fP0DKxiHTtsrENWoyKlI67KhbwgKwW3dZkBaPeV5U8HJoe4pf7RDzJsoJNa%2BHFmFPyY3VdYWfKO%2FVuC5w%2BfG4YefM3Qjdyys2yvCBrMisQdKvM176oo2QlN6LTAoqtkU8PalqeKyuffy8RtHx5F%2BrMeX5K9mP0atizLgSZdN%2Bd8Vc3Xv99m5sH7Uj5YTPx43QPmCW5tJUMLHcwskGOqUBFh2xxqpOY3Cs1jT60NAeAjYyx8oGW%2FkHkdt7GtfiBVSPtj2XiTaXbtcXz5PONYG9Ii%2Fp7z9n%2BgCgnFB4HdhXX%2F8KZU%2FpJ4OF9AjYSrJyJx%2Bg5sfdNLnfEB9CrkMUzt3elzbA23gbpnPzXikdqNkJdCU4yqde02s2Wt8quO8G%2BZNS1hVWl3U5Yl4xCIesVCr0AbXELexlYF4ZZQmCsAtVx%2BNBLNYy&X-Amz-Signature=bba4827f49974e1714d979b4038f8e7703d7abe02917acf93dfaed3218f216dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

