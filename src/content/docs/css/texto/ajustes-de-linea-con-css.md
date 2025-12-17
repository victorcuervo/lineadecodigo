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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TCWQUFF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEE7NAp8GmaW7eYbNgGReRhkn3845jquQngBT4r%2BNJqAiATk%2BFEJ%2BA3Dpjg0c0Ttd80RRy9i0TBrkfrwPwcvM0hZCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMXVnIFFRVt%2BedR5d7KtwDB5BZ0hz2nzi6CTQ9kYkX2vzlVw6iTkdRqexZW%2BQTVLOXoabIkVGGOyjzuSZQGl%2F5aYmUHSls3TkzAENIX1nXHNGNRGNjqXje8IkeTd0xGt3Ldf3Wm6nJAXcul0rDZCIvsmJ8K%2BjaLeSyLkI1V9gH6FGcA0QRKgatq15aXRpCyuLQvDN%2BHOmkDHqN3ftrv3ZUk4n6LKiQ1tmG350aSDKGVyjCSiOy4EAA5MtYIKcLOG1qaihifMuY4nIrgZBDZnPlywIe2L0RqEG5f2O%2BGoXswMMBU%2BcwnMokq7J3idf4VZ6bqPgPildOOX6nTrYBouG8IcPQD5W1aWeNMDJ%2FLhc23%2F5zKn8HHK%2FSvt8qq7W2aD2kH5HLlfq3l1Mrlx9qTumoRIpi%2BSJ0iTiKYMk2091rM2hy8QfRb8WhnwaYEMM%2FaIC48oLFiBzaoxbRDiiwoVNzPeqwQ2c4FgInQMgSL%2BCfjaaMgjay1NQsxZLaGHlveTE1mgI%2BoSAknCOilUGXb7Wmdxu3OthRHGPvgP%2BUdlnBfdxyzXEiix%2BpfCE4iJSBTonX9ZXGXi0fSEy%2BJIGWyMybKvsPnVGuub7oPA9y45mzwP%2FOBUjMJj6L59eEgmCd4m0yfZDnKMRlt7Hma%2F4whIOJygY6pgFY6XAsAaxcFSHC1OHcCDvrt9d0%2BRW%2FuO46SfEhZNnGjqyEv1MLffLgcLvfzSS6k%2FXkLVwQn0UAP7u5c8trVHm%2BLft7y0C3Vkbs3fVCdAYK0PUnlBW7dtSwriZICY8LAJv69ZmIQzJWJt%2BYnxYSdTGaxE%2BWmmCrOT3U3EZi7G70hTdYEVXLIdDqQE3hCOU15Nr8W0Imeqlpb0Ze%2FNECFis7sOPIDXHV&X-Amz-Signature=8f7927dbfc3d6e9e150969248e1cdd7e6b0adac13edf45e3065fae11257785a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TCWQUFF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEE7NAp8GmaW7eYbNgGReRhkn3845jquQngBT4r%2BNJqAiATk%2BFEJ%2BA3Dpjg0c0Ttd80RRy9i0TBrkfrwPwcvM0hZCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMXVnIFFRVt%2BedR5d7KtwDB5BZ0hz2nzi6CTQ9kYkX2vzlVw6iTkdRqexZW%2BQTVLOXoabIkVGGOyjzuSZQGl%2F5aYmUHSls3TkzAENIX1nXHNGNRGNjqXje8IkeTd0xGt3Ldf3Wm6nJAXcul0rDZCIvsmJ8K%2BjaLeSyLkI1V9gH6FGcA0QRKgatq15aXRpCyuLQvDN%2BHOmkDHqN3ftrv3ZUk4n6LKiQ1tmG350aSDKGVyjCSiOy4EAA5MtYIKcLOG1qaihifMuY4nIrgZBDZnPlywIe2L0RqEG5f2O%2BGoXswMMBU%2BcwnMokq7J3idf4VZ6bqPgPildOOX6nTrYBouG8IcPQD5W1aWeNMDJ%2FLhc23%2F5zKn8HHK%2FSvt8qq7W2aD2kH5HLlfq3l1Mrlx9qTumoRIpi%2BSJ0iTiKYMk2091rM2hy8QfRb8WhnwaYEMM%2FaIC48oLFiBzaoxbRDiiwoVNzPeqwQ2c4FgInQMgSL%2BCfjaaMgjay1NQsxZLaGHlveTE1mgI%2BoSAknCOilUGXb7Wmdxu3OthRHGPvgP%2BUdlnBfdxyzXEiix%2BpfCE4iJSBTonX9ZXGXi0fSEy%2BJIGWyMybKvsPnVGuub7oPA9y45mzwP%2FOBUjMJj6L59eEgmCd4m0yfZDnKMRlt7Hma%2F4whIOJygY6pgFY6XAsAaxcFSHC1OHcCDvrt9d0%2BRW%2FuO46SfEhZNnGjqyEv1MLffLgcLvfzSS6k%2FXkLVwQn0UAP7u5c8trVHm%2BLft7y0C3Vkbs3fVCdAYK0PUnlBW7dtSwriZICY8LAJv69ZmIQzJWJt%2BYnxYSdTGaxE%2BWmmCrOT3U3EZi7G70hTdYEVXLIdDqQE3hCOU15Nr8W0Imeqlpb0Ze%2FNECFis7sOPIDXHV&X-Amz-Signature=90ed75a24c3ab28ff6b63e3ad0a63b01ec66f2b90ca306872c563a3a10e1fbb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

