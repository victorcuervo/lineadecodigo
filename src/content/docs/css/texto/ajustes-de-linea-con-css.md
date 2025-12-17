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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSMXCPJY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T215028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXppSIpJld0cMUJbYPm5xNx72%2BTFVd54oig9UI4%2FBjTAiA6%2B0gFTE5p84h5%2BtEDZoY4ApHAVne2YdLUlo%2BiUDffESqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDVQSZh0qs%2BgJqrQyKtwDmJcHfa0gHhnfzpAoiBiRl5T09PMMZfyu7RQCYdbUvlOERr0SlGFsJYTUFLzPOIHl%2F%2FL0UMMvnUHiOCBs22sWZZ8kDbZ4dAQe8hdHe12rsfmR7vX6qcN205hhoNaHkGJ67hZMMW%2Fg7o7qy9Qx%2FK7SLCVU%2Bm5HQVv6GfUA9tU1YUtTHz%2BObiKu2k1CgLs5%2BA7TdCv95WOZQkSO2d%2BM%2Ba2TFIspiyXDrAd7IZ%2BL54CRbe%2FFB8yO8AX%2BOw7ZuxOr2a00uqSVZrAs8MGealTvu8xlJ9g2H9jE8ulYdLldilDQ60uz0mMPJuWF0xX9uALjBsbfVMxupb%2BIY%2FRIRcY%2B%2BRbtUmmghLwHwq%2Fy9bp2TwwMwMmDX9FqScryATID8AeHfMSRz1bLDTiug1AKbPar5n9UN1elsbUmc7lJOtM%2BoMYEjdak6yiqmxFLHjQCaIbk3pUplSmZGfnALD11FiP4xpUptZDrwohF3aoVX2dqLCiM54fKt0sMmqoF6Ba2scRSVQ8MT9XyW%2FaeU1eYHhrkxLeFcI%2FWCCr%2Fi2o%2BQYDMnKNdVHVUQ0lkSuDlJZJ%2B8yardmGbbk6nE9zTETo5sNJ9YNpCZbczfsOSBHVt%2BhZHo2RgjK8g5g76lu2qszLnYtIwnq6MygY6pgHQnPd%2FvZ5ginD4x80RULaqm%2FpJtnU1IV%2BPpCX5UuNyzn8sb6jhFOuUPp5rXk72dWqNHfBsFFh5OD6Ci5A3GllHczLEVf6UurE%2FQyrCxrkFu8CSQgTpKV2Pr4L%2BCh90zFahkWPEzhmhfpayvTIcHJFlxy1mYVCgGzXpvrC749fkc4R4G7SLnN1tp%2FR%2Biat3rMcbAMJdwU2jtrN0UflEbZDUkI4Zqgyw&X-Amz-Signature=472db9695f591be682e2f5411c90eb7467044b7606977bd4e4f2cedb50c94705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSMXCPJY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T215028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXppSIpJld0cMUJbYPm5xNx72%2BTFVd54oig9UI4%2FBjTAiA6%2B0gFTE5p84h5%2BtEDZoY4ApHAVne2YdLUlo%2BiUDffESqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDVQSZh0qs%2BgJqrQyKtwDmJcHfa0gHhnfzpAoiBiRl5T09PMMZfyu7RQCYdbUvlOERr0SlGFsJYTUFLzPOIHl%2F%2FL0UMMvnUHiOCBs22sWZZ8kDbZ4dAQe8hdHe12rsfmR7vX6qcN205hhoNaHkGJ67hZMMW%2Fg7o7qy9Qx%2FK7SLCVU%2Bm5HQVv6GfUA9tU1YUtTHz%2BObiKu2k1CgLs5%2BA7TdCv95WOZQkSO2d%2BM%2Ba2TFIspiyXDrAd7IZ%2BL54CRbe%2FFB8yO8AX%2BOw7ZuxOr2a00uqSVZrAs8MGealTvu8xlJ9g2H9jE8ulYdLldilDQ60uz0mMPJuWF0xX9uALjBsbfVMxupb%2BIY%2FRIRcY%2B%2BRbtUmmghLwHwq%2Fy9bp2TwwMwMmDX9FqScryATID8AeHfMSRz1bLDTiug1AKbPar5n9UN1elsbUmc7lJOtM%2BoMYEjdak6yiqmxFLHjQCaIbk3pUplSmZGfnALD11FiP4xpUptZDrwohF3aoVX2dqLCiM54fKt0sMmqoF6Ba2scRSVQ8MT9XyW%2FaeU1eYHhrkxLeFcI%2FWCCr%2Fi2o%2BQYDMnKNdVHVUQ0lkSuDlJZJ%2B8yardmGbbk6nE9zTETo5sNJ9YNpCZbczfsOSBHVt%2BhZHo2RgjK8g5g76lu2qszLnYtIwnq6MygY6pgHQnPd%2FvZ5ginD4x80RULaqm%2FpJtnU1IV%2BPpCX5UuNyzn8sb6jhFOuUPp5rXk72dWqNHfBsFFh5OD6Ci5A3GllHczLEVf6UurE%2FQyrCxrkFu8CSQgTpKV2Pr4L%2BCh90zFahkWPEzhmhfpayvTIcHJFlxy1mYVCgGzXpvrC749fkc4R4G7SLnN1tp%2FR%2Biat3rMcbAMJdwU2jtrN0UflEbZDUkI4Zqgyw&X-Amz-Signature=23c1205f537ad7750ba760bf6c74ffa9f5875a503ec1217e6b1da10434e9075b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

