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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CGL32AB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEK%2BDipa9P40gFmJmS2%2FcN7JVDulj1YWkeL9EZgqV340AiBOfn%2F%2BNKZWtUxB8GWmtFGzb%2FebQZeLpZOrrUPlrFrhiCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsNHk%2FqWJuVwXZtl0KtwDKQE8YhYgCeTVKo%2FlInCKWTu%2Fag6Sze2aP7NDswGYp9LO%2BDagSG4NTroLUCX3GTNaUu8rYMp9jx8tgonvkW2%2FAgqiFbggkK%2FAv3c%2FXTyHDP0o4Fyb6BajOVMzhlY2OH0Zx0FCQJM0dTBPgy%2F3m7rCz9CxMkt%2BSJ7BcA3XXNow8K8vVhHLTbYOuDZcGcWQy08PC5lONETIFaD4O8nfeDJsxCWQI53rq2P5o43SC3mzoogY76iz4wk%2B99zyLuL8imOdtnsKcIVDdCa5shPfw9KBEBDrqnIJDfJDH5NSpnLBrr0YY7eMoYSAMV5rfDsMjDr1%2BWTsWJnR%2B3HLCfYLvz2Wa%2BhxMzelcI1xBbc9vK8XiJHi3yfHGr5zy8pzRujN2cfNT%2B4SF%2FQ1M01V2QWLdH%2FpmBz%2BUsQhlQ%2FsQrYFkvS%2FD%2B5jZJL49maU6q13TIWv8YV%2FZgG8P9VPBLMWrycwA0CCyEZRg9YTJzQjHl%2BYQgFJxYs5wg%2FYri9%2F6lbC7k%2BQ9ZnHU123HOBq75YYkwXre8hy2DDDWvFElWuozCcoU3s89vxMad4YW6WRVFCyyxu5T7QV1Jpq7f5zqGvEspNG97foJoXed%2BA7HeJccgC%2F%2FM804AVQ9jCKznZfXacmfGQwqp%2BLygY6pgEuQc4isjpimNZkm90CdDGZ0rdzA3wB%2FIuuNHpVXs4E%2BpMmDne8Q0G1uRfB4g6XsuXnRATu131ct4aVuVHABLame0OYvOQTcoabVSeOvifi5WM1NVtv0V1ppOPViEUsMmlMKhlQttXHpCdqdO8DxF2LhS%2BOCn5v7y94%2FzXCJ6wueUW9WTVkDvZ1Izw6M1tVlllUd%2BY2praTWkhYgahIfFFk98Z0sLBe&X-Amz-Signature=de5f0776ab7af8b81519f7a51d32b93e042caf4af9a3e5e22ec6d9ed832ed0d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CGL32AB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEK%2BDipa9P40gFmJmS2%2FcN7JVDulj1YWkeL9EZgqV340AiBOfn%2F%2BNKZWtUxB8GWmtFGzb%2FebQZeLpZOrrUPlrFrhiCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsNHk%2FqWJuVwXZtl0KtwDKQE8YhYgCeTVKo%2FlInCKWTu%2Fag6Sze2aP7NDswGYp9LO%2BDagSG4NTroLUCX3GTNaUu8rYMp9jx8tgonvkW2%2FAgqiFbggkK%2FAv3c%2FXTyHDP0o4Fyb6BajOVMzhlY2OH0Zx0FCQJM0dTBPgy%2F3m7rCz9CxMkt%2BSJ7BcA3XXNow8K8vVhHLTbYOuDZcGcWQy08PC5lONETIFaD4O8nfeDJsxCWQI53rq2P5o43SC3mzoogY76iz4wk%2B99zyLuL8imOdtnsKcIVDdCa5shPfw9KBEBDrqnIJDfJDH5NSpnLBrr0YY7eMoYSAMV5rfDsMjDr1%2BWTsWJnR%2B3HLCfYLvz2Wa%2BhxMzelcI1xBbc9vK8XiJHi3yfHGr5zy8pzRujN2cfNT%2B4SF%2FQ1M01V2QWLdH%2FpmBz%2BUsQhlQ%2FsQrYFkvS%2FD%2B5jZJL49maU6q13TIWv8YV%2FZgG8P9VPBLMWrycwA0CCyEZRg9YTJzQjHl%2BYQgFJxYs5wg%2FYri9%2F6lbC7k%2BQ9ZnHU123HOBq75YYkwXre8hy2DDDWvFElWuozCcoU3s89vxMad4YW6WRVFCyyxu5T7QV1Jpq7f5zqGvEspNG97foJoXed%2BA7HeJccgC%2F%2FM804AVQ9jCKznZfXacmfGQwqp%2BLygY6pgEuQc4isjpimNZkm90CdDGZ0rdzA3wB%2FIuuNHpVXs4E%2BpMmDne8Q0G1uRfB4g6XsuXnRATu131ct4aVuVHABLame0OYvOQTcoabVSeOvifi5WM1NVtv0V1ppOPViEUsMmlMKhlQttXHpCdqdO8DxF2LhS%2BOCn5v7y94%2FzXCJ6wueUW9WTVkDvZ1Izw6M1tVlllUd%2BY2praTWkhYgahIfFFk98Z0sLBe&X-Amz-Signature=100e173c75cb691d2fc70a7e5bc22eb4d52869f465f4b11f8dc3d827ea57ca64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

