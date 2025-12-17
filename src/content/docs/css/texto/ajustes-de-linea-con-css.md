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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632VZOPKT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0W6tm3sr62c6Zhcad2%2BX63BXZMsiB%2FUlgA%2BEtljad4QIhAM%2FcXAE5jScnKyHegsu9YG5B2BK3rZaAfVmeoiawPKKbKv8DCHkQABoMNjM3NDIzMTgzODA1IgwQMtvxhgrqu86eGn0q3AN%2F8g%2FuThmrkvx6rWp668MCfHPLY6HnFSlfYztE3rNW37hx83dwBUGyHbJ%2BAx0tCujB%2FXFj2Rz5RcYZdA55rkie6Jooz7qkaFSeRWMVmsBTgz7AZMb%2B5FjqTDB5qnNfkf62bte1HPxY3F8o4E6Qaw4w4ykmGCX7jmKUUF5nJvhr5EwDbbv21tpz8PtTtJd3FsESqhC8V%2FJX6BChxHBniCY5ra66RyHDtHkOuBqctrEyu7ehpCHUAJt8K721vDnNKbmNqc4rnP%2Fyab%2F67PmqwfpjeqG7M%2FF4IaZdUfBWK2%2BT65PgZJbad%2BOwbV%2FTh7TQ0VqOgwnsr6p%2BfGA7p%2FZgKsvvaeln5MSMruMqu8e6%2FIvu0VLEBRcXcN87nZD1NAtymirCS2bI2EA29JUWKCm%2FSZAVq%2B6Z2J4F0Xi7CptKsriWkixbwiA%2BjKeL6cm%2F0v16nyoovcHSqUsFDWAlonGHMMLrDvYdnZy70ZJAndbMyg4jYpIyruG5InBXWxQK2aumW7UofUUnWj%2BITbioHjsa3up1AMZiah8WevZ00puN%2BbFlGAbdwXtPyPl8WymqLgC9fmZ0eEfTB6GntVZNzNR5RH2K9yLUrIfjuWZbeCffCoUuVDbASnmsFOOq8bAhgTD7t4nKBjqkAS9cyP1JuJyzYbzFjyurea7naVHd1lHPOExonPpsYFsLeD%2F05iIcDeB5vNLwnLtbH2Gpr6K9mkG3eH7SrUh9nuzl7E1iI9ICcwkWx2WcAPtePZ2MHCGVA%2B%2BVbv2mMnqA4lnrVOSyEiLec6KA3r1a94MBhKJB1fShO32eOxUXuKinwUy1S3t8U5ly2wKmHmStn5pEyXAjtbuc93mzpLWqFtERJBV3&X-Amz-Signature=02919af5b9fcb314e1a9d75925f74abc4e131b5158008b3afdb1c8cd7e4939cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632VZOPKT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0W6tm3sr62c6Zhcad2%2BX63BXZMsiB%2FUlgA%2BEtljad4QIhAM%2FcXAE5jScnKyHegsu9YG5B2BK3rZaAfVmeoiawPKKbKv8DCHkQABoMNjM3NDIzMTgzODA1IgwQMtvxhgrqu86eGn0q3AN%2F8g%2FuThmrkvx6rWp668MCfHPLY6HnFSlfYztE3rNW37hx83dwBUGyHbJ%2BAx0tCujB%2FXFj2Rz5RcYZdA55rkie6Jooz7qkaFSeRWMVmsBTgz7AZMb%2B5FjqTDB5qnNfkf62bte1HPxY3F8o4E6Qaw4w4ykmGCX7jmKUUF5nJvhr5EwDbbv21tpz8PtTtJd3FsESqhC8V%2FJX6BChxHBniCY5ra66RyHDtHkOuBqctrEyu7ehpCHUAJt8K721vDnNKbmNqc4rnP%2Fyab%2F67PmqwfpjeqG7M%2FF4IaZdUfBWK2%2BT65PgZJbad%2BOwbV%2FTh7TQ0VqOgwnsr6p%2BfGA7p%2FZgKsvvaeln5MSMruMqu8e6%2FIvu0VLEBRcXcN87nZD1NAtymirCS2bI2EA29JUWKCm%2FSZAVq%2B6Z2J4F0Xi7CptKsriWkixbwiA%2BjKeL6cm%2F0v16nyoovcHSqUsFDWAlonGHMMLrDvYdnZy70ZJAndbMyg4jYpIyruG5InBXWxQK2aumW7UofUUnWj%2BITbioHjsa3up1AMZiah8WevZ00puN%2BbFlGAbdwXtPyPl8WymqLgC9fmZ0eEfTB6GntVZNzNR5RH2K9yLUrIfjuWZbeCffCoUuVDbASnmsFOOq8bAhgTD7t4nKBjqkAS9cyP1JuJyzYbzFjyurea7naVHd1lHPOExonPpsYFsLeD%2F05iIcDeB5vNLwnLtbH2Gpr6K9mkG3eH7SrUh9nuzl7E1iI9ICcwkWx2WcAPtePZ2MHCGVA%2B%2BVbv2mMnqA4lnrVOSyEiLec6KA3r1a94MBhKJB1fShO32eOxUXuKinwUy1S3t8U5ly2wKmHmStn5pEyXAjtbuc93mzpLWqFtERJBV3&X-Amz-Signature=2782df1ddd1f130115d344d1f6c41de3d57398eb9e9c3df2d6e02551af94c4a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

