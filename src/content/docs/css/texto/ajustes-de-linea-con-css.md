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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP5KN2GO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtm5qzYlpCc4z1VnnTaK8aZ%2FPFSmm7agxmYkMcDc3iTAIgGGR8xoaVfFlmU5UXbGt%2F5LpNwWpySoy0kFEBZWHVIzYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLfCICLbDxdZgzYWkyrcA%2Fw2AjOYdbYNqXlDD0NAPQYGvnH1nYUBC%2F5BCVCZ%2F5uiDhy75yQp%2FPfr%2BnEg18nwcK5hOMT687%2BIbqGTiROkVeizAVz8CkwtGOPlCEu3fn7NIx8ZOHDvYaVp6TPuprJFykjrfdH98i67EEJmw39YVgpPSX%2B5xhG0BJ87dZesI9zN%2FSqrtHNHzC81BKupM%2FkdYKvu2PV3hSuf3iUv1AVyO8w5%2F0EwDhfHEROUaongVfkH5tvRtbImuSBRPg05Q772O1Ok3aACuJpAziBNwIJOgZ3nWFiJ%2F%2Fo1VHeKalnop79%2BLNwuS3YRWj0QbaYKlyw4RvOPOJwgOsZ%2FDv1CQu91n1MmnClvO32R4Ikn8zNvzYbDR8hf%2Fj76utuGIRa6HOwLeH8wsVvj4t26GYYomXl5NMg0xC%2FKdPMFMd0m%2F6nizVzalIeum388o7%2BHFqT53xbMy5xRneU1xxyh5Ex1NRhaR1G%2BtwxvXOLwE%2BmFN76JpkGzNJWqqwrH056xu7opstD3yMN4KHEIyjKs9ClG7CprztpMeFB6izXiLS88jxftGij55HOOGCDgol2oytlpHSQ3auCpEa1jk1ZGCnhhEoCVUlNuIgoKciQmHwqCc2dEvSPjAO%2FMozBkLiWFv%2F%2FMMNLeh8oGOqUBylFTLfdCA06xIPpzIvg53X7z8kexPH%2FUcjkyPGelcKU7QK4SVUq9tcEiJ88QOF83mhYoW457wQvypd4bgCMr1cSrNXJCdi5IQLKPmr%2FhHWdtJXRKEnz8UtCtRd4P5V1yR5KIFnmlHf7o3SwWrOrTFxD6qv1iE5UGZ9wRZ4iYYj3oTAK%2FQkdHyX2PuJ2iy2ufxYY6YqlZhF4fXMESTZQiWdlLnTLT&X-Amz-Signature=b9ae8eb976e5176e29311f87f89756758e682835efd0ad5445c0bc79001fa460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP5KN2GO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtm5qzYlpCc4z1VnnTaK8aZ%2FPFSmm7agxmYkMcDc3iTAIgGGR8xoaVfFlmU5UXbGt%2F5LpNwWpySoy0kFEBZWHVIzYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLfCICLbDxdZgzYWkyrcA%2Fw2AjOYdbYNqXlDD0NAPQYGvnH1nYUBC%2F5BCVCZ%2F5uiDhy75yQp%2FPfr%2BnEg18nwcK5hOMT687%2BIbqGTiROkVeizAVz8CkwtGOPlCEu3fn7NIx8ZOHDvYaVp6TPuprJFykjrfdH98i67EEJmw39YVgpPSX%2B5xhG0BJ87dZesI9zN%2FSqrtHNHzC81BKupM%2FkdYKvu2PV3hSuf3iUv1AVyO8w5%2F0EwDhfHEROUaongVfkH5tvRtbImuSBRPg05Q772O1Ok3aACuJpAziBNwIJOgZ3nWFiJ%2F%2Fo1VHeKalnop79%2BLNwuS3YRWj0QbaYKlyw4RvOPOJwgOsZ%2FDv1CQu91n1MmnClvO32R4Ikn8zNvzYbDR8hf%2Fj76utuGIRa6HOwLeH8wsVvj4t26GYYomXl5NMg0xC%2FKdPMFMd0m%2F6nizVzalIeum388o7%2BHFqT53xbMy5xRneU1xxyh5Ex1NRhaR1G%2BtwxvXOLwE%2BmFN76JpkGzNJWqqwrH056xu7opstD3yMN4KHEIyjKs9ClG7CprztpMeFB6izXiLS88jxftGij55HOOGCDgol2oytlpHSQ3auCpEa1jk1ZGCnhhEoCVUlNuIgoKciQmHwqCc2dEvSPjAO%2FMozBkLiWFv%2F%2FMMNLeh8oGOqUBylFTLfdCA06xIPpzIvg53X7z8kexPH%2FUcjkyPGelcKU7QK4SVUq9tcEiJ88QOF83mhYoW457wQvypd4bgCMr1cSrNXJCdi5IQLKPmr%2FhHWdtJXRKEnz8UtCtRd4P5V1yR5KIFnmlHf7o3SwWrOrTFxD6qv1iE5UGZ9wRZ4iYYj3oTAK%2FQkdHyX2PuJ2iy2ufxYY6YqlZhF4fXMESTZQiWdlLnTLT&X-Amz-Signature=39a85fd6f3d5d89ff8e24abc590de3bce0aea0f803f4873d380559f376d8f52e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

