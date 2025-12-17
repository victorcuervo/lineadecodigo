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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646PER6W3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpm8EQJWtDb74i2PFF6k%2BfNff2Hh8EPQMptUUiIdlouwIhAMVY4kbNHJAZMccT1tqUZXR4W%2FfrEiUaLsgCyBhfWb1mKv8DCHkQABoMNjM3NDIzMTgzODA1IgwJBvk4vb4X4xtoiSYq3AO%2FKMpWluVLH9TyTrIaNzsDsKuFSkb1V0PbqCTq4lWHhkWatl%2B0eEvfmdL0wboOH627PgoM1i2cK3K8r59tE5ypBCPjn6jRD2FC7dv%2BWH2i6Zryxl1dw0kmOsBMau63Ept2o9193VY6qmaP464BV0WKaOdc%2BGFpPI%2BNzmn6rin%2FRPg3DiCAy8BOi%2Fhhl8%2BuNH8qw6aaC0FgAA08anKOfa3B768qtOoBTltGwXm6nQWzm7QTTSkzMW8VZaAiqx5r5OOxBpMbgB8NRAaCSnA3SUfvdcdL689tfypmUOwuSwoJBRCywfV9LkCWso36YqRKVN%2FDH93eHnk94QBq7vSIvqCb8lXvST1P%2Bn%2FZF6qPIekkdEjlfbww0iHKiSjYKyI3FT0hWD92NOKiP9FxW%2F3nVNkq3sEN4oCv2eCJBRMeWX0iHRbVrdpGyYnG5G6WM%2FRJafOR3jAD8xYjgF0G3daOBVbUZUraRjtRGTNZCOAZw%2FdYXeZ%2FRG%2FqSDBMNv4yQ3GFWlRPezhpOi3vswLS6gynYmQenAJPwdaChBi6nxyeZPl9iLyYZRwYCR98m7GMYJvbRueNIOVFkzZMSuwwdO5mKVw7%2BfK22zYrMzbxV6z4dx2SYDbi8D9JYVqazhPt%2FTCjt4nKBjqkAdqzWyemIYNt3mrA6lr8HkG6LJHUkQ50mdVFxONRval7MmNx63xbXSO0WWOeukqq6rzRx8qP8exWHNun4iE01H7uOEO46KgY%2BfnNvbgi1AUMpE3dRNe5EqWHVr6z3x5f4RYd2bGpMX8Pq10ceAsLhJ8%2B1f5QFXe2eajJeJUV5OLPCwKPxO3waKlxtpKr%2Fyo1zpgFoPucg2BK3hg75gpfnDF%2Fi%2BiO&X-Amz-Signature=f648cebf7348a451798da33a138e3cdfdd94e0b81d6fe7aa68411f0fb9665829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646PER6W3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpm8EQJWtDb74i2PFF6k%2BfNff2Hh8EPQMptUUiIdlouwIhAMVY4kbNHJAZMccT1tqUZXR4W%2FfrEiUaLsgCyBhfWb1mKv8DCHkQABoMNjM3NDIzMTgzODA1IgwJBvk4vb4X4xtoiSYq3AO%2FKMpWluVLH9TyTrIaNzsDsKuFSkb1V0PbqCTq4lWHhkWatl%2B0eEvfmdL0wboOH627PgoM1i2cK3K8r59tE5ypBCPjn6jRD2FC7dv%2BWH2i6Zryxl1dw0kmOsBMau63Ept2o9193VY6qmaP464BV0WKaOdc%2BGFpPI%2BNzmn6rin%2FRPg3DiCAy8BOi%2Fhhl8%2BuNH8qw6aaC0FgAA08anKOfa3B768qtOoBTltGwXm6nQWzm7QTTSkzMW8VZaAiqx5r5OOxBpMbgB8NRAaCSnA3SUfvdcdL689tfypmUOwuSwoJBRCywfV9LkCWso36YqRKVN%2FDH93eHnk94QBq7vSIvqCb8lXvST1P%2Bn%2FZF6qPIekkdEjlfbww0iHKiSjYKyI3FT0hWD92NOKiP9FxW%2F3nVNkq3sEN4oCv2eCJBRMeWX0iHRbVrdpGyYnG5G6WM%2FRJafOR3jAD8xYjgF0G3daOBVbUZUraRjtRGTNZCOAZw%2FdYXeZ%2FRG%2FqSDBMNv4yQ3GFWlRPezhpOi3vswLS6gynYmQenAJPwdaChBi6nxyeZPl9iLyYZRwYCR98m7GMYJvbRueNIOVFkzZMSuwwdO5mKVw7%2BfK22zYrMzbxV6z4dx2SYDbi8D9JYVqazhPt%2FTCjt4nKBjqkAdqzWyemIYNt3mrA6lr8HkG6LJHUkQ50mdVFxONRval7MmNx63xbXSO0WWOeukqq6rzRx8qP8exWHNun4iE01H7uOEO46KgY%2BfnNvbgi1AUMpE3dRNe5EqWHVr6z3x5f4RYd2bGpMX8Pq10ceAsLhJ8%2B1f5QFXe2eajJeJUV5OLPCwKPxO3waKlxtpKr%2Fyo1zpgFoPucg2BK3hg75gpfnDF%2Fi%2BiO&X-Amz-Signature=090a6c7ae2f80746a3fda6acbdea1238feb68b785bfa85b5f45baef335ff3256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

