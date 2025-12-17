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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SHA2ITT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBEvoCwlC2fomn1FPn0htWiI72UAttfjmnypJv%2FPdFjAIhAPClj4UYpvEoWiOZdoH8ordr6lNGb1T%2Fh090IJ%2B04FuRKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMIv3AIQoECHi6q6Aq3AM8oWPcMyiTxgxEkZG87llvMPm6%2FZSNdGBqkzkkEgOR2e0lln%2Bdl0EiPRK2pT3ovk7qQgoRNE%2FgwWiNO5ysqhV3YkG8u5h6VSvLiq3p3Ckp%2Fs1PexGxrwPZUow5qR%2Bn2TUGyYmNAcn402BVY5y0B1hOoMW56clhNA%2FtsbHFsBprs8tJEH73AmpB0sXfch%2B39%2BRI9YbqcxvIZ%2FlXUChGt%2BnZGPXzgli15Z1Ho9bjJcsppKvAJGPyp6gy1q%2BJb10maSTQXlDzVYxzh8o%2BYlAFpYWwCeOU703qmh0SlY0xACvqWTUowZO%2FHXQfibhsexg14Wu8w%2F0cvjf%2BfNepuN1y%2BmRRow4vD5k9EShdVx710A1jPz68cTolRQ4WpGqrWvKARljAVAnjk7cqeijv%2Fk9ywpGx9NkkdLPRUr689Uu%2BcwjMy6jxFCUqO12oZSeP3iU7apZP%2BAenTla4sw%2FYqxj4EAH7sHh0v6tlDD7fzZRm9Ka%2BNGzOxDFr72bV4wZWjBURrWzi4u47SuoYp9khr81gZ6v5nu3tPm1e1XoccEJL1lz3AbP%2Fy8MasKkj4OB44he%2F7lGoSI3nJ4Q4JdyA5PQCvwOVLdxlVEapxTH8rnmgBAqg302aQarptTsH%2BHg81zCyrozKBjqkAaa9%2F7gPkfvcYmTLnd%2FwPDcyQbLXGlMjjQa8FR34WxpI60G%2BUNH9LaXGYxdt1hIF26GXle71ATr1emvHzRSjrUa9YTSK79nLmjJGuoHhdZ5Xptouc859uiQwc71ASBVt8T3UVN%2FmrgR%2FTbPrQ%2Bp7RRc3uyE2OCKY4aoAhgCmR2YkoJ%2FNH2lsDPzssCvMYD4%2FTOD8LZJfA0w2L%2FTrvO3bpuZxYfou&X-Amz-Signature=2dd51f10162709f2db81d384c9b36eb806dba8aa69829912b10db93561294501&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SHA2ITT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBEvoCwlC2fomn1FPn0htWiI72UAttfjmnypJv%2FPdFjAIhAPClj4UYpvEoWiOZdoH8ordr6lNGb1T%2Fh090IJ%2B04FuRKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMIv3AIQoECHi6q6Aq3AM8oWPcMyiTxgxEkZG87llvMPm6%2FZSNdGBqkzkkEgOR2e0lln%2Bdl0EiPRK2pT3ovk7qQgoRNE%2FgwWiNO5ysqhV3YkG8u5h6VSvLiq3p3Ckp%2Fs1PexGxrwPZUow5qR%2Bn2TUGyYmNAcn402BVY5y0B1hOoMW56clhNA%2FtsbHFsBprs8tJEH73AmpB0sXfch%2B39%2BRI9YbqcxvIZ%2FlXUChGt%2BnZGPXzgli15Z1Ho9bjJcsppKvAJGPyp6gy1q%2BJb10maSTQXlDzVYxzh8o%2BYlAFpYWwCeOU703qmh0SlY0xACvqWTUowZO%2FHXQfibhsexg14Wu8w%2F0cvjf%2BfNepuN1y%2BmRRow4vD5k9EShdVx710A1jPz68cTolRQ4WpGqrWvKARljAVAnjk7cqeijv%2Fk9ywpGx9NkkdLPRUr689Uu%2BcwjMy6jxFCUqO12oZSeP3iU7apZP%2BAenTla4sw%2FYqxj4EAH7sHh0v6tlDD7fzZRm9Ka%2BNGzOxDFr72bV4wZWjBURrWzi4u47SuoYp9khr81gZ6v5nu3tPm1e1XoccEJL1lz3AbP%2Fy8MasKkj4OB44he%2F7lGoSI3nJ4Q4JdyA5PQCvwOVLdxlVEapxTH8rnmgBAqg302aQarptTsH%2BHg81zCyrozKBjqkAaa9%2F7gPkfvcYmTLnd%2FwPDcyQbLXGlMjjQa8FR34WxpI60G%2BUNH9LaXGYxdt1hIF26GXle71ATr1emvHzRSjrUa9YTSK79nLmjJGuoHhdZ5Xptouc859uiQwc71ASBVt8T3UVN%2FmrgR%2FTbPrQ%2Bp7RRc3uyE2OCKY4aoAhgCmR2YkoJ%2FNH2lsDPzssCvMYD4%2FTOD8LZJfA0w2L%2FTrvO3bpuZxYfou&X-Amz-Signature=b64b5d55e9a08ba93adecd57ad750d5ff3e4d907e4c3f8e06cc3fde04442b154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

