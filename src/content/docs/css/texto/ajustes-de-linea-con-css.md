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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZRTAOTI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3iblqpzpH%2FL34n%2FSqW1tHwNxuq0BKE6v5BVQlCAnKzAiEAr%2BDCON1TpO6ejdkNFDYNz%2FPX78erUo9Z4yg0CwXMHVEq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHvhUomBRnInn4Ik1yrcAySK8OYWeoNlQ0KWvKCipmrsWVlLKU77gdm7MmfezjqrRKQuhzq8v7WVOgeshMMdP2jfHbD3Dy%2BkLK5ntAzLc0ORSvtfz8Zw9aMTfFUwt7%2Fo1UAcM9PsW8MjljRfd8WbZIJYeghI9%2BQyWukgY5WNA3FRtXFr6mOlDx4YYVTs5fZU1lsED3tHsxRsVEWfaGCN4zVwcE9DdbdAykrqAmkOO72VrmQ3voB7gaH5jr7%2B1rxnHWIXKbKUhOQ6XJ%2FIUtBYuPIRpviK9cqn59XFQvQpoQVgOMTupMW4FNCNjjlR%2FGmVrDOOOUXewhIIeb6yInEuJQnYENndMBX84hwmQpJ9jAUx73%2BdGl6qUAoNb1XJAtzNsnOqpeRAS2uTlpJweKmJ%2BmpW%2F8Xcq8qFxn9hFXxl1E7DaF4CeAkMfQ54IL%2FXm%2FD2grDhmsKZTljniKWAdinW7Q1yFhRCyWRikkoIyUUC7yVONlOtHJLa4FYfqPrGwrB3uZjiQ6dwHn763OFW0d79amyw8Bl%2Bt76nKZhICD7UO%2BpBhr6qgO2N664A5FRqGDeDO14TDpGb1tDXN2q8U76t6QbueyGBBOmxuxskRHrsOiW3MoC2VoSLIXY6HfR1E3Y7o%2B6XIQQPj%2FVpeA6aMPOOisoGOqUBdN%2Fouw8u5bqM2HF%2BRdWmee0O7BMH2EVMSs0l51AoXgYYGDp6cv%2Fvk8NEHyEcI4u6TuRrfQONNCDdDc%2BnKrr328CGyEN%2FEinhW3ucTrmNFCPYEoiR%2B3CYuCTU79Cf7kcqw9SW6GUVKuTvxZ%2BaAq22BDozvz0p0NK5RT727E8YjGY3Bgfm3MfCMHr8lCMYxxidM%2BwD3di%2FVcYXS7uJx4aJZ4tNDKGi&X-Amz-Signature=46d1e175994ca96b84a61e17fbe7b53fbaaa55e3c87e803e72a04d6156925299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZRTAOTI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3iblqpzpH%2FL34n%2FSqW1tHwNxuq0BKE6v5BVQlCAnKzAiEAr%2BDCON1TpO6ejdkNFDYNz%2FPX78erUo9Z4yg0CwXMHVEq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHvhUomBRnInn4Ik1yrcAySK8OYWeoNlQ0KWvKCipmrsWVlLKU77gdm7MmfezjqrRKQuhzq8v7WVOgeshMMdP2jfHbD3Dy%2BkLK5ntAzLc0ORSvtfz8Zw9aMTfFUwt7%2Fo1UAcM9PsW8MjljRfd8WbZIJYeghI9%2BQyWukgY5WNA3FRtXFr6mOlDx4YYVTs5fZU1lsED3tHsxRsVEWfaGCN4zVwcE9DdbdAykrqAmkOO72VrmQ3voB7gaH5jr7%2B1rxnHWIXKbKUhOQ6XJ%2FIUtBYuPIRpviK9cqn59XFQvQpoQVgOMTupMW4FNCNjjlR%2FGmVrDOOOUXewhIIeb6yInEuJQnYENndMBX84hwmQpJ9jAUx73%2BdGl6qUAoNb1XJAtzNsnOqpeRAS2uTlpJweKmJ%2BmpW%2F8Xcq8qFxn9hFXxl1E7DaF4CeAkMfQ54IL%2FXm%2FD2grDhmsKZTljniKWAdinW7Q1yFhRCyWRikkoIyUUC7yVONlOtHJLa4FYfqPrGwrB3uZjiQ6dwHn763OFW0d79amyw8Bl%2Bt76nKZhICD7UO%2BpBhr6qgO2N664A5FRqGDeDO14TDpGb1tDXN2q8U76t6QbueyGBBOmxuxskRHrsOiW3MoC2VoSLIXY6HfR1E3Y7o%2B6XIQQPj%2FVpeA6aMPOOisoGOqUBdN%2Fouw8u5bqM2HF%2BRdWmee0O7BMH2EVMSs0l51AoXgYYGDp6cv%2Fvk8NEHyEcI4u6TuRrfQONNCDdDc%2BnKrr328CGyEN%2FEinhW3ucTrmNFCPYEoiR%2B3CYuCTU79Cf7kcqw9SW6GUVKuTvxZ%2BaAq22BDozvz0p0NK5RT727E8YjGY3Bgfm3MfCMHr8lCMYxxidM%2BwD3di%2FVcYXS7uJx4aJZ4tNDKGi&X-Amz-Signature=6fe86c8fd3a9a7ff5a30abf18b49b99888f33b7948f479a830a56fef1fb33a8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

