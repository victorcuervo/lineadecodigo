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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QROE45HI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2FuNUU7vVtxiABlH4MNKNFPTVXzIrUX1mpE4k9fIWCPAiBMJMRhSM90xB8jiON1rTu1F5QJk1bgEuAW%2FyQ0ENIhUSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMLc8f96Z7qeLIbnkoKtwDxbhXKp1DqU6nTiJtJtESLmkuAfJF6cS29b%2BNhIfmXheR04NxXDdNalM3NPwiNWmbw3tkvdU%2F%2B3xcp0mzhawXcH%2BlPr5caEJPoD7rQmXOTsRtu5a4h9CuoQS5E68ULXGJnKnnX2ydloL5vCG5%2BLngRQYjZEgvrOZrytjgVsuK%2BZ%2FnF5RV7e9Z0ro7%2Fdlpw7kiGUagsbzDCLxRwDdIcKWV2Bo2HDjJX9OueyzXEEeWzud66nCMHS7m80yf6Wv2Cr0Jc25miuqFEciOdbFEn4V8Cs7rm6h%2B0RWZkghhruHwANXm3rsds%2FrNMHuVPiSFsLjUavGpG8OSdv8dvyIiQEOzIprdPLWK1GDNbxU%2FQsCKth5RBVb7xMfwpo5t%2FTZUm2cD%2B%2FZ5%2FVtt%2Bt2ZE%2BiYa9J%2BsFSVHulug4fiEDAHq51NPhvpzcBMvEMH5nG1DqZc61nuUak7t7v74fE%2BtjYcIYghsVYYFybjyORNkuvk5GJqnTm4yPKASJBUXPqPwMkzLp7WJ3REKZ8RGiXbrxgZlyC7aAzaFDq5IvWniY5t%2FJLjHDQCPcGRyltRbstYz8fNC7qvY8RP9FElF%2Fv3L4Ta1pEw233KEgGF6CfJOctDRjZ8SzzACJLABQlnYKpbVEAw2paIygY6pgHVjxkjsTScz2xvJxKqGB7XvwZkILA58zkk%2FnGru0YRynBP71OxM3IR0zperoYpcnEL%2FI1YCsxcbz5T%2Fyool9%2FO39p7RIFdI5gLHAQYrrHBGvr02eBL6SIRz%2BodEbNqCRzd2FC3fVY9il0Iwmbu5p7HXAc31Xaw0cSmOk%2BKZtym0uTJI1Ee%2BS6wALM3INUuRzawtF4dKeBOPHVLjHNH5FRgQhmQaEQA&X-Amz-Signature=c2fc4d9d8f3630e484d39089f6d1971bbd7391c472504161e68e28a71f4df4fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QROE45HI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2FuNUU7vVtxiABlH4MNKNFPTVXzIrUX1mpE4k9fIWCPAiBMJMRhSM90xB8jiON1rTu1F5QJk1bgEuAW%2FyQ0ENIhUSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMLc8f96Z7qeLIbnkoKtwDxbhXKp1DqU6nTiJtJtESLmkuAfJF6cS29b%2BNhIfmXheR04NxXDdNalM3NPwiNWmbw3tkvdU%2F%2B3xcp0mzhawXcH%2BlPr5caEJPoD7rQmXOTsRtu5a4h9CuoQS5E68ULXGJnKnnX2ydloL5vCG5%2BLngRQYjZEgvrOZrytjgVsuK%2BZ%2FnF5RV7e9Z0ro7%2Fdlpw7kiGUagsbzDCLxRwDdIcKWV2Bo2HDjJX9OueyzXEEeWzud66nCMHS7m80yf6Wv2Cr0Jc25miuqFEciOdbFEn4V8Cs7rm6h%2B0RWZkghhruHwANXm3rsds%2FrNMHuVPiSFsLjUavGpG8OSdv8dvyIiQEOzIprdPLWK1GDNbxU%2FQsCKth5RBVb7xMfwpo5t%2FTZUm2cD%2B%2FZ5%2FVtt%2Bt2ZE%2BiYa9J%2BsFSVHulug4fiEDAHq51NPhvpzcBMvEMH5nG1DqZc61nuUak7t7v74fE%2BtjYcIYghsVYYFybjyORNkuvk5GJqnTm4yPKASJBUXPqPwMkzLp7WJ3REKZ8RGiXbrxgZlyC7aAzaFDq5IvWniY5t%2FJLjHDQCPcGRyltRbstYz8fNC7qvY8RP9FElF%2Fv3L4Ta1pEw233KEgGF6CfJOctDRjZ8SzzACJLABQlnYKpbVEAw2paIygY6pgHVjxkjsTScz2xvJxKqGB7XvwZkILA58zkk%2FnGru0YRynBP71OxM3IR0zperoYpcnEL%2FI1YCsxcbz5T%2Fyool9%2FO39p7RIFdI5gLHAQYrrHBGvr02eBL6SIRz%2BodEbNqCRzd2FC3fVY9il0Iwmbu5p7HXAc31Xaw0cSmOk%2BKZtym0uTJI1Ee%2BS6wALM3INUuRzawtF4dKeBOPHVLjHNH5FRgQhmQaEQA&X-Amz-Signature=54d3771d266ba4b59af06b0af235e3fa7a0427a745a1a3102e0384505004b161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

