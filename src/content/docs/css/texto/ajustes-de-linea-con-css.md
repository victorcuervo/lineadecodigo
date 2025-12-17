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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ5KRHHA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBryWtdcrzmMj7BJSjw1sSK2bmt7kEDCyv0XCRsjfV0JAiAcajPOKMJt%2B7P93wLIeXz%2FeExo1d7xMjRVjVuFeJPzUSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM6Lfge4QY8IGeTNylKtwDC9klzZilrA4%2BmV9FOA7a3nNnhX3zQ8E2vA1fv4nh%2BmAT%2BfI2JrvMHw3nZ0xYIRzlaLHmMoIXliab%2BVFZHOZnhvcZvE0rbqQARrysOi8xdndTyXS32Owg34mxIVHOjbvTtaiRHUTFZb9f8t0uxFHYK7hLMjanGmQi3ZtAn9yELwUk4S3s8%2BITHUIfkHnUAyoOCuvPZl8koX6JtsgtNwY45KmFe17VVnq%2FaGjcjbi9uuo9ygHTMl24wFz60nMyH4wIBLCI2jIy6UdTx21yAkrcUUlLBkbHA3hw%2BC3HeGZEBbFCXGGoJ0xNgjneD0Ot9AKCb2Qor9eeOITptUGU1RkBQcuCkgdIuejxKU7VVPjRjLMy2JPlsAJ%2F0p7puVgttmC5zN45B1JPkQSbD0U9P2tbGo0qqnoNzrY3cd8mhzaNUrGt4HgAnOwhXIKDNWsnhc3DGpogl5OrKDu4GAMDqjWnNV50RjVXnu58Ryxt84O1Z1%2BWgsm9y0Y8yOaBehPhid0q9pLWrar%2BpHu24RTyL7x6V2ox0yv2JtCR%2BVfwJsT132Z0l158tqQYn15r6hcAXohoxYzTkH7INZeDi%2BUx3xfUiIY18lrtZxUdhqk%2Fjy6UmOoGMMhfW1JPmHyuuzwwobOIygY6pgFZb5vHvGhbsU3Ecl5pafRiuNXUgJ%2FzIQwtwKfamjIWpZEtM0Z5qaaiLtYU8%2FU8J1E7Dji8XayxdFewbqXYIoLlkES%2BNjXcGosByufi2t69wQ4TwIJCG85sdZN5I%2BnSYnRoXue8YbBVpGitNQXkF5%2BBzXnRc09YjZMNch0jwPXHUHk0cVjQ3UoXtDM%2FGOKYHD1vsLL7j31U5qQwuhHeGAQpp%2BM1rsTy&X-Amz-Signature=551a27435304700251acbf0fabc1e7b11c2f14fbd91d1c27cbeffceb74b50079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ5KRHHA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBryWtdcrzmMj7BJSjw1sSK2bmt7kEDCyv0XCRsjfV0JAiAcajPOKMJt%2B7P93wLIeXz%2FeExo1d7xMjRVjVuFeJPzUSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM6Lfge4QY8IGeTNylKtwDC9klzZilrA4%2BmV9FOA7a3nNnhX3zQ8E2vA1fv4nh%2BmAT%2BfI2JrvMHw3nZ0xYIRzlaLHmMoIXliab%2BVFZHOZnhvcZvE0rbqQARrysOi8xdndTyXS32Owg34mxIVHOjbvTtaiRHUTFZb9f8t0uxFHYK7hLMjanGmQi3ZtAn9yELwUk4S3s8%2BITHUIfkHnUAyoOCuvPZl8koX6JtsgtNwY45KmFe17VVnq%2FaGjcjbi9uuo9ygHTMl24wFz60nMyH4wIBLCI2jIy6UdTx21yAkrcUUlLBkbHA3hw%2BC3HeGZEBbFCXGGoJ0xNgjneD0Ot9AKCb2Qor9eeOITptUGU1RkBQcuCkgdIuejxKU7VVPjRjLMy2JPlsAJ%2F0p7puVgttmC5zN45B1JPkQSbD0U9P2tbGo0qqnoNzrY3cd8mhzaNUrGt4HgAnOwhXIKDNWsnhc3DGpogl5OrKDu4GAMDqjWnNV50RjVXnu58Ryxt84O1Z1%2BWgsm9y0Y8yOaBehPhid0q9pLWrar%2BpHu24RTyL7x6V2ox0yv2JtCR%2BVfwJsT132Z0l158tqQYn15r6hcAXohoxYzTkH7INZeDi%2BUx3xfUiIY18lrtZxUdhqk%2Fjy6UmOoGMMhfW1JPmHyuuzwwobOIygY6pgFZb5vHvGhbsU3Ecl5pafRiuNXUgJ%2FzIQwtwKfamjIWpZEtM0Z5qaaiLtYU8%2FU8J1E7Dji8XayxdFewbqXYIoLlkES%2BNjXcGosByufi2t69wQ4TwIJCG85sdZN5I%2BnSYnRoXue8YbBVpGitNQXkF5%2BBzXnRc09YjZMNch0jwPXHUHk0cVjQ3UoXtDM%2FGOKYHD1vsLL7j31U5qQwuhHeGAQpp%2BM1rsTy&X-Amz-Signature=b440fe32e2fc741bf5f3a3d21de1000d6a65e6de7dad7e79c845597cbc8072cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

