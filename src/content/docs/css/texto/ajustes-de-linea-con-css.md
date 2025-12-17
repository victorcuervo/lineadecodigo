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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S5ZTJF4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeC2r9aKyjphYxkgSw1MRLB0o9gxDZUUeiaSi5x6yznAiBVjRgmFB%2FRaOugwAVCaOZT1S0fw%2BkdLiRn3DqTKkd%2BNyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMAXyKOwTOK71p213YKtwDE1oDy91Smir%2Frx6j%2B86eq1eF09YaJh5nhlwIh3oxuNqHatScrsv23jKwDF6y%2Fpx4EB5J8McEcVWGSFGCvbqLtnDkjSXt0XuRHXctlsucjB%2BFEHkWzCDMf%2BsZNPDXbTCwIygqgFXGWv3dPo%2F4qd9I57RcKVgFDm6XY5nKXQRJ0WPkLyT384h4hb6PeImYsvvvB2w1%2Fp1ziYE%2FLYJEhFhVahDJl6xM%2B%2Bt2qDIP28msbLLQfc087%2BI3yfXH6ZKoFHuR7WdMChePw1hMZlDcLe%2FohNlNWa7NHIX7vYCht4kzx9d9%2Bveh5iyueEgzPA8rTQYgMzCN5flfPjFEuxI%2FOKG600xXsnkfqAC5xUeSl7UNe4j1WMtMSoXpmbs2dDfW9rjngz%2FmQKx6O9Tttmq8BldPyq79lR033LM3AZ%2FktUkiELB9W65YIp4DV1kqqGlGcCi9AsxyYkQlXqr2U1iq0%2F15aYJi4BTG%2BVhHV0TuT3S5WhBgrlC2YypSLsgsnOFh1kMx6H3bZt5FuCPdJ8UIOX9el7pMD1HyethjnOjTIVmdH4giAPKCV%2B47f7TrcgOSiPrYOhwEPCIsdmrQh0gBLO%2FmaKoO%2FGaHUryfF%2B%2Bd9IAyKQXxqO7eQku%2BFe6B6tsw%2F%2FCJygY6pgGIWLJ%2FUX6r7VFkKyhB9C%2B1doFXJDfznUZx99K0dfhvg8o4XLIwyMNgp%2F6BJ45QPLHcHTF3Q7C0WIHBopc3%2B%2Fqn1git5CVPGdrWkgESBXYiKJGWCH1JsuLUCF7SVRG3aaPxoI%2BJiTqiNmk%2FE0bx9Ul%2F%2B9pCFxx0kYo3nHxvllng0RHnJ0yqAcSqSlyoRiVWNKZ6oegp2QhU3D4kfd%2FOVaPTtGVIA%2FeZ&X-Amz-Signature=16db7c2213a0e05266a69e458efb89b34442f18a8a83725f2e275dd2e9e287aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S5ZTJF4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeC2r9aKyjphYxkgSw1MRLB0o9gxDZUUeiaSi5x6yznAiBVjRgmFB%2FRaOugwAVCaOZT1S0fw%2BkdLiRn3DqTKkd%2BNyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMAXyKOwTOK71p213YKtwDE1oDy91Smir%2Frx6j%2B86eq1eF09YaJh5nhlwIh3oxuNqHatScrsv23jKwDF6y%2Fpx4EB5J8McEcVWGSFGCvbqLtnDkjSXt0XuRHXctlsucjB%2BFEHkWzCDMf%2BsZNPDXbTCwIygqgFXGWv3dPo%2F4qd9I57RcKVgFDm6XY5nKXQRJ0WPkLyT384h4hb6PeImYsvvvB2w1%2Fp1ziYE%2FLYJEhFhVahDJl6xM%2B%2Bt2qDIP28msbLLQfc087%2BI3yfXH6ZKoFHuR7WdMChePw1hMZlDcLe%2FohNlNWa7NHIX7vYCht4kzx9d9%2Bveh5iyueEgzPA8rTQYgMzCN5flfPjFEuxI%2FOKG600xXsnkfqAC5xUeSl7UNe4j1WMtMSoXpmbs2dDfW9rjngz%2FmQKx6O9Tttmq8BldPyq79lR033LM3AZ%2FktUkiELB9W65YIp4DV1kqqGlGcCi9AsxyYkQlXqr2U1iq0%2F15aYJi4BTG%2BVhHV0TuT3S5WhBgrlC2YypSLsgsnOFh1kMx6H3bZt5FuCPdJ8UIOX9el7pMD1HyethjnOjTIVmdH4giAPKCV%2B47f7TrcgOSiPrYOhwEPCIsdmrQh0gBLO%2FmaKoO%2FGaHUryfF%2B%2Bd9IAyKQXxqO7eQku%2BFe6B6tsw%2F%2FCJygY6pgGIWLJ%2FUX6r7VFkKyhB9C%2B1doFXJDfznUZx99K0dfhvg8o4XLIwyMNgp%2F6BJ45QPLHcHTF3Q7C0WIHBopc3%2B%2Fqn1git5CVPGdrWkgESBXYiKJGWCH1JsuLUCF7SVRG3aaPxoI%2BJiTqiNmk%2FE0bx9Ul%2F%2B9pCFxx0kYo3nHxvllng0RHnJ0yqAcSqSlyoRiVWNKZ6oegp2QhU3D4kfd%2FOVaPTtGVIA%2FeZ&X-Amz-Signature=c44f3473f07cdee1995343d083a50100be0e977b1bc6599f853bb618be220a98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

