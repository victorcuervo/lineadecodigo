---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YFWPRRI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmmtr3fEtPFpRUNO4KI%2FqKgnShQhec7PLYvGdQV6hhYAiA3hcoOaDkewswz%2F%2BLpa%2BdaLSu9kEreNWKR%2FAgJqkpH8Sr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMDMKh%2FkL%2BFKIndLpfKtwDEWpwt%2FjJLHr%2BItQV5G28F4RDTcKeZs1ceGhijvn20dJALW3s2mFqCNfL4b2Wd4T%2BL1pwbsPkod9F0Bv3y%2BRdu%2Fu0MY6LEN4L3wZxnXjX69j9HvzD8vTEtFBlRkSbYci26QclLxai0YKpHWARYzzzytRZqNBa9frl40PVcjsIf8KjevxlDkdKKi93P8elPICEGJsJXWW8cDtnQuQ6BrGAbGoAGrAcsbzKywX2KTeuss7rBYHQ4oIHuPI4lB3BGKl%2BDuCcmldDTkIH8R9Oo5vCWnbuHjG0NCFtFqRiVcCRDPsYTp1dvUo508eHotff7T2EGP2OgfHIPMXk3Ck5EL%2Fkg1pmcgTjhD4l4xPUR5%2BIKSTBh1md%2B4ySI4V%2FG8zpFuivZidGqGM%2FqVE7xM%2B7rVhL7pFo6Iaugd6g8GlcfEqOWdViIXI0di7Qa54P45z3eB6YC%2FRb7bXzGl4sL0DLn2NFrnM73eVowe0r5OJ97RGGiINbSNLOLgNqJpBSH5H%2BlPbIFmsyLNfekcknTL3%2Bsq3LPvhh%2BNBECnX0PhpPnCCQSa3NnrS6m0sTZ%2BebltypQx3uF900BiCtl3Y2AIMWG0IMnY6eahylnRlBtoAaAq4C1MK6yh01RI7vp0QQ9lkwj6uKygY6pgHB24Y7EnnN4ytvhldlgAMz8z%2BhcyETcC70TQ%2F%2FuYBrkByTFNmSSg64KxnkFycNVFTIJW6temfFFqWt70l9HYpC9pDfJnOqZId9ISB%2BJ3Qxa48UNFmYHjgbseQNdTsW4%2F1i27kpzxGHH14C6%2BCUrQD1DskRgx%2Ft1FkIcomMTGAFJj8obgn%2FNUGWBmGUmapT7Yk%2B1OaH%2F%2Fp63qVA1N%2BD0zsL1ecKUkPu&X-Amz-Signature=0335606bb388c4aab489ea34b18b3c7a49d181238a2cf8404c93f8c1d2bc1d7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YFWPRRI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmmtr3fEtPFpRUNO4KI%2FqKgnShQhec7PLYvGdQV6hhYAiA3hcoOaDkewswz%2F%2BLpa%2BdaLSu9kEreNWKR%2FAgJqkpH8Sr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMDMKh%2FkL%2BFKIndLpfKtwDEWpwt%2FjJLHr%2BItQV5G28F4RDTcKeZs1ceGhijvn20dJALW3s2mFqCNfL4b2Wd4T%2BL1pwbsPkod9F0Bv3y%2BRdu%2Fu0MY6LEN4L3wZxnXjX69j9HvzD8vTEtFBlRkSbYci26QclLxai0YKpHWARYzzzytRZqNBa9frl40PVcjsIf8KjevxlDkdKKi93P8elPICEGJsJXWW8cDtnQuQ6BrGAbGoAGrAcsbzKywX2KTeuss7rBYHQ4oIHuPI4lB3BGKl%2BDuCcmldDTkIH8R9Oo5vCWnbuHjG0NCFtFqRiVcCRDPsYTp1dvUo508eHotff7T2EGP2OgfHIPMXk3Ck5EL%2Fkg1pmcgTjhD4l4xPUR5%2BIKSTBh1md%2B4ySI4V%2FG8zpFuivZidGqGM%2FqVE7xM%2B7rVhL7pFo6Iaugd6g8GlcfEqOWdViIXI0di7Qa54P45z3eB6YC%2FRb7bXzGl4sL0DLn2NFrnM73eVowe0r5OJ97RGGiINbSNLOLgNqJpBSH5H%2BlPbIFmsyLNfekcknTL3%2Bsq3LPvhh%2BNBECnX0PhpPnCCQSa3NnrS6m0sTZ%2BebltypQx3uF900BiCtl3Y2AIMWG0IMnY6eahylnRlBtoAaAq4C1MK6yh01RI7vp0QQ9lkwj6uKygY6pgHB24Y7EnnN4ytvhldlgAMz8z%2BhcyETcC70TQ%2F%2FuYBrkByTFNmSSg64KxnkFycNVFTIJW6temfFFqWt70l9HYpC9pDfJnOqZId9ISB%2BJ3Qxa48UNFmYHjgbseQNdTsW4%2F1i27kpzxGHH14C6%2BCUrQD1DskRgx%2Ft1FkIcomMTGAFJj8obgn%2FNUGWBmGUmapT7Yk%2B1OaH%2F%2Fp63qVA1N%2BD0zsL1ecKUkPu&X-Amz-Signature=bb9fa3c37f7ad45facf099507ed9c9e75ebf24a00e0ac331ae48c0d3803d957f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

