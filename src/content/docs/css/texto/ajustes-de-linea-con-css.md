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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KK7NLCR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl3CAyPIlcYPFE0zzfeNSPvxXsefyPpGoPHdgpx0jxvwIgbHsxYEy0MnWozHYVJAZzJpRrHwveAg%2BNiK%2BaQp4W%2BQAqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkVMI5TFga%2B2ektKircA6jxRAMUmGqxhLXcNmOsvXMa%2F2cBXm6MmdnIy3NJFJjm5kequtdJlp4W%2FCMee4IAVVMk2EdgPOGz8tkerZOUH%2FSVh1b5BQ%2F%2FodeSezaEqtKYWGtnFQwokwvCZ6A7O3zWs%2BpfPkqrio35GOn4%2FOPCu9001J4Q3fZ9jPdxM5awBQg1XFSTanD%2BZWNm7kpBwoNMAU3xiyY%2B0q4lrzX07EEEA0VpaylIYPwLuwj9aH%2F0cn9r5i%2F3vA8q8xco%2FypmvQoCJ2cQl9PVUybts30uFQY5L3fB8okXWqqVnTZHyn8cHaUeoh6%2BPOKwmGzCRfCPZvr9FNa2fX4bssAL%2BnHkOhjhcsXh%2FYcAxDyeCZCHbA1cc467DoPzKRjwElWEcdF8St2w%2FpE%2BV%2F7uFtEke8O9ONoMwjpj7cXDTXp9Cp1UHbtsMiXSAuSY5pJpfxfzYyLdJdWGDmOUbujJ0KSL1zJoQZQPoU0%2Bxqy34uag6%2BdNT5HbRegiN5zbETU6%2F5WgBivgd9gBoVXZUKhf7uCsfyADyoKnhUOIPlIBe6sPRV4DbqsfhFqcX0LgJLA3sA%2BM8Lv%2B21zQHahUmpOyGJTWStqVbDXSq%2Bkpk9a9Yj3GV7R4DxKyl9xWKcD4%2B5exIofmkTf%2BMOn%2FisoGOqUBGTRGgSpQ5EKwSunxKgG2iZJg0eC7utn3u7Bzd8BI4DsZ4T7P5byiIL4g1luKNVxPCBAxsZw8evQz8rereqWsZ8Ps8Ww9lW58H6PX58yrmEO6dvUivmxZSvbVAEOX%2FfNjhwaqd3YrNbZ%2BjRYWKvDrtd%2BSD%2BukkVWeZpunciCx%2FMSlcy3ci84PwMV0PEdmaKE8lRhAeh4jkCx%2FhqsdhFMl7Pyl4Qgz&X-Amz-Signature=d1f67122dc25696c311edba8b1c19a3024ac8e7866bce5ef6673a98e8adc7c15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KK7NLCR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl3CAyPIlcYPFE0zzfeNSPvxXsefyPpGoPHdgpx0jxvwIgbHsxYEy0MnWozHYVJAZzJpRrHwveAg%2BNiK%2BaQp4W%2BQAqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkVMI5TFga%2B2ektKircA6jxRAMUmGqxhLXcNmOsvXMa%2F2cBXm6MmdnIy3NJFJjm5kequtdJlp4W%2FCMee4IAVVMk2EdgPOGz8tkerZOUH%2FSVh1b5BQ%2F%2FodeSezaEqtKYWGtnFQwokwvCZ6A7O3zWs%2BpfPkqrio35GOn4%2FOPCu9001J4Q3fZ9jPdxM5awBQg1XFSTanD%2BZWNm7kpBwoNMAU3xiyY%2B0q4lrzX07EEEA0VpaylIYPwLuwj9aH%2F0cn9r5i%2F3vA8q8xco%2FypmvQoCJ2cQl9PVUybts30uFQY5L3fB8okXWqqVnTZHyn8cHaUeoh6%2BPOKwmGzCRfCPZvr9FNa2fX4bssAL%2BnHkOhjhcsXh%2FYcAxDyeCZCHbA1cc467DoPzKRjwElWEcdF8St2w%2FpE%2BV%2F7uFtEke8O9ONoMwjpj7cXDTXp9Cp1UHbtsMiXSAuSY5pJpfxfzYyLdJdWGDmOUbujJ0KSL1zJoQZQPoU0%2Bxqy34uag6%2BdNT5HbRegiN5zbETU6%2F5WgBivgd9gBoVXZUKhf7uCsfyADyoKnhUOIPlIBe6sPRV4DbqsfhFqcX0LgJLA3sA%2BM8Lv%2B21zQHahUmpOyGJTWStqVbDXSq%2Bkpk9a9Yj3GV7R4DxKyl9xWKcD4%2B5exIofmkTf%2BMOn%2FisoGOqUBGTRGgSpQ5EKwSunxKgG2iZJg0eC7utn3u7Bzd8BI4DsZ4T7P5byiIL4g1luKNVxPCBAxsZw8evQz8rereqWsZ8Ps8Ww9lW58H6PX58yrmEO6dvUivmxZSvbVAEOX%2FfNjhwaqd3YrNbZ%2BjRYWKvDrtd%2BSD%2BukkVWeZpunciCx%2FMSlcy3ci84PwMV0PEdmaKE8lRhAeh4jkCx%2FhqsdhFMl7Pyl4Qgz&X-Amz-Signature=c4067b35f5eda4e121b7b29cd53017bc840043c2a909acbb1cf9c54c4c9ed4e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

