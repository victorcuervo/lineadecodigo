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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSXTA2XS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC31jvlK%2BzndiwrwDWUldf8HSJwb4yexh%2Ba5MKLDPMt0wIhAJfAmzgMaXB4Wn6HDVOPIc4OtpIAiF11dkkhBuBK090oKv8DCHIQABoMNjM3NDIzMTgzODA1Igwmly00SoTKPqhfC2kq3ANi9LYAlMDQ%2BN38h5npBHte8u2ZiScYiH0fzfAB8l5%2Fzw%2B73z%2FLECOcQzXRrFrYLSSifCTb2hUwLLD6ljFHq5crtL%2FJLHvR0HMq6K68fOmlvDj%2B0GQtC1%2FGDs5lznJNDmNv552ap%2B1NyR2jimfB4AFzJds5iO57MNzVEe8kyD3JUafZeszHndEaHeNY7B8yYv0OriZCQ0IzxV75iIsJiNiCtK1Lko0y2zj8qbZX%2F3LtPQ4h5QRReG%2FSW5TE8ssDMF6bK6nvFFHD2tXI9eOC7077Ic83k4GaVR%2Bofc%2BPin5igU10vbhG8Nsg3Wu7onZT6Dmrc1Bd5F5bijOSQWMw4vecF76Igihl2S1y2iQ1bvHzWg5lAlkWk5tK23e2QYZ7xJaPEKu79v%2Fv8pp6YwU0Bs3YKYIeaA5jZ2hB7tN5i%2BBurzX5DokmjCxDeVTu4u3J9aIiYf%2FBKJYyIFN1E3lh7g5EDBvmkSSohv8wLnQvIogbdWVgOs%2BjgHX%2FDv7GOlGt5WeREzXGIJW557iSQT1m79kQhABWL%2B2P1I%2Bx5yD8WxWnVjQAG3UbX25zi0uOI5j2TsA1U6wJddpp1ZGcCGhK0OkiqLkxAikLrdRUO6GhSx4jRDjRuJTMs1WSfDmCtTCN%2B4fKBjqkAe%2BZzKGvnR3jV4ibR2eOeebrcydqwgd9mANE7dTXy%2FKA4nCA29lhEw%2BX%2FmNvvkTOD67IWGW%2B9eVTCFaI4WVc9EmpBBf5TyQatk6hYyMd9Rakw%2FKjtmY37iQ9MY9T9FMPsWNbOV2q9NZnXekMOgxVws3Au%2BANG59BPEj7XQ0%2BPSwhV4uCO8ivXeVfSLMT8yNe0vLVBi1x1K%2BlAS7AO%2Ft1P0F5XApo&X-Amz-Signature=1bd48a520125eb0c6425998e3620383e10c3dea3c972187c08d282c5622863ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSXTA2XS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC31jvlK%2BzndiwrwDWUldf8HSJwb4yexh%2Ba5MKLDPMt0wIhAJfAmzgMaXB4Wn6HDVOPIc4OtpIAiF11dkkhBuBK090oKv8DCHIQABoMNjM3NDIzMTgzODA1Igwmly00SoTKPqhfC2kq3ANi9LYAlMDQ%2BN38h5npBHte8u2ZiScYiH0fzfAB8l5%2Fzw%2B73z%2FLECOcQzXRrFrYLSSifCTb2hUwLLD6ljFHq5crtL%2FJLHvR0HMq6K68fOmlvDj%2B0GQtC1%2FGDs5lznJNDmNv552ap%2B1NyR2jimfB4AFzJds5iO57MNzVEe8kyD3JUafZeszHndEaHeNY7B8yYv0OriZCQ0IzxV75iIsJiNiCtK1Lko0y2zj8qbZX%2F3LtPQ4h5QRReG%2FSW5TE8ssDMF6bK6nvFFHD2tXI9eOC7077Ic83k4GaVR%2Bofc%2BPin5igU10vbhG8Nsg3Wu7onZT6Dmrc1Bd5F5bijOSQWMw4vecF76Igihl2S1y2iQ1bvHzWg5lAlkWk5tK23e2QYZ7xJaPEKu79v%2Fv8pp6YwU0Bs3YKYIeaA5jZ2hB7tN5i%2BBurzX5DokmjCxDeVTu4u3J9aIiYf%2FBKJYyIFN1E3lh7g5EDBvmkSSohv8wLnQvIogbdWVgOs%2BjgHX%2FDv7GOlGt5WeREzXGIJW557iSQT1m79kQhABWL%2B2P1I%2Bx5yD8WxWnVjQAG3UbX25zi0uOI5j2TsA1U6wJddpp1ZGcCGhK0OkiqLkxAikLrdRUO6GhSx4jRDjRuJTMs1WSfDmCtTCN%2B4fKBjqkAe%2BZzKGvnR3jV4ibR2eOeebrcydqwgd9mANE7dTXy%2FKA4nCA29lhEw%2BX%2FmNvvkTOD67IWGW%2B9eVTCFaI4WVc9EmpBBf5TyQatk6hYyMd9Rakw%2FKjtmY37iQ9MY9T9FMPsWNbOV2q9NZnXekMOgxVws3Au%2BANG59BPEj7XQ0%2BPSwhV4uCO8ivXeVfSLMT8yNe0vLVBi1x1K%2BlAS7AO%2Ft1P0F5XApo&X-Amz-Signature=167869c2cc5e588fed6b4088dd5b859d6260d3a6334cfd059c807c37c59d6211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

