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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AUONOMF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPBzgqo9TqG50woF3Wyx7NAn%2BtgjDoZCXWbo3wF7iksAiEAgPPSWwYdlOSMFVYNHa%2BLFM5SBp4KZZpbNo5aOs1yxy4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDIRsR3TE82UtNE5vUSrcA%2Bsu3icgOQJmvh1luIzKDf%2BGCXJ4tQkcJwhh9OoFIbFM8XxXKtKyxN0DPHb9UGc9xNpto6QyFfOyN42LyxvC8aLYSu%2F8Yf4pNcgAJri7s86uYUaYXJ6ZeOhm5by6OPEt9jQvX9gIzLLw23Mo6EFeAxoGqiXZv6UGkHDyz162rRjEST1lbaKS5YZ4xmAO1I1dY%2BAiCu9L6s4v4JaLrwPWvNsYXphixlKVvRXaJSltN6pljlZj2zhgZ%2F8BNnx0VZnAXMrvqqZiVB444Hg0UOoiDO9wEACrj2vHB3xmf5lqmxU9FaE1jF0GVM8B1%2BOb%2B%2F6GeyBjSqJQX9PcRfhZGSrM1fLBpm9ej%2BrWTcKZ8E33mg9kLocyYni%2FCmQGDYYCro4N1sUph565SqoOHFhifjvPDTKTHaLeQYh44a0FCBeLMI8B1%2FmiJPxmFEm%2FcJMxCqyJ0G4Cyp4VREOjBPIgTAOUyz7P209682YvFV4J6%2Bg0AuRvDgdPRMiZ8wQ%2BCaE1oFTlaPHXYE2KjjrX7OCEcrqOZSxBkVv1KnnDsx0%2FydfTYCR3BtsiYR%2FkJ4e%2FdGROlgfmN%2FRMlWkFc9SSyz9Hdo1GHdAMHLNrAmkKbuRTaGO8IqTKn9Yh9siTP0wLIngmMIbwicoGOqUBokVKB3B24MZ2vqDy8p6KvYock56afv5c3Ih6Qtj%2FsLQWUuHtBqmx6qIAYLZZhTs5cpSdL2TzSyy5zkIijzY%2FRHr14PQ9QYkbp9n4NwtlEnM21Tt0BwlcOH56beWMjAoodaNEJtyR%2FwmtBEV2uKY8AnQYDAGGwt3Tl5k06Pc5DB8rscRmoFNcNTDx6EA5I4ehX7O4LUwkI6jl3Aphc0KC2pcBJNtt&X-Amz-Signature=2b6557da4dc472f6679d3ac554b5814c80279d55d625fea1621c3d7fa8ea3115&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AUONOMF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPBzgqo9TqG50woF3Wyx7NAn%2BtgjDoZCXWbo3wF7iksAiEAgPPSWwYdlOSMFVYNHa%2BLFM5SBp4KZZpbNo5aOs1yxy4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDIRsR3TE82UtNE5vUSrcA%2Bsu3icgOQJmvh1luIzKDf%2BGCXJ4tQkcJwhh9OoFIbFM8XxXKtKyxN0DPHb9UGc9xNpto6QyFfOyN42LyxvC8aLYSu%2F8Yf4pNcgAJri7s86uYUaYXJ6ZeOhm5by6OPEt9jQvX9gIzLLw23Mo6EFeAxoGqiXZv6UGkHDyz162rRjEST1lbaKS5YZ4xmAO1I1dY%2BAiCu9L6s4v4JaLrwPWvNsYXphixlKVvRXaJSltN6pljlZj2zhgZ%2F8BNnx0VZnAXMrvqqZiVB444Hg0UOoiDO9wEACrj2vHB3xmf5lqmxU9FaE1jF0GVM8B1%2BOb%2B%2F6GeyBjSqJQX9PcRfhZGSrM1fLBpm9ej%2BrWTcKZ8E33mg9kLocyYni%2FCmQGDYYCro4N1sUph565SqoOHFhifjvPDTKTHaLeQYh44a0FCBeLMI8B1%2FmiJPxmFEm%2FcJMxCqyJ0G4Cyp4VREOjBPIgTAOUyz7P209682YvFV4J6%2Bg0AuRvDgdPRMiZ8wQ%2BCaE1oFTlaPHXYE2KjjrX7OCEcrqOZSxBkVv1KnnDsx0%2FydfTYCR3BtsiYR%2FkJ4e%2FdGROlgfmN%2FRMlWkFc9SSyz9Hdo1GHdAMHLNrAmkKbuRTaGO8IqTKn9Yh9siTP0wLIngmMIbwicoGOqUBokVKB3B24MZ2vqDy8p6KvYock56afv5c3Ih6Qtj%2FsLQWUuHtBqmx6qIAYLZZhTs5cpSdL2TzSyy5zkIijzY%2FRHr14PQ9QYkbp9n4NwtlEnM21Tt0BwlcOH56beWMjAoodaNEJtyR%2FwmtBEV2uKY8AnQYDAGGwt3Tl5k06Pc5DB8rscRmoFNcNTDx6EA5I4ehX7O4LUwkI6jl3Aphc0KC2pcBJNtt&X-Amz-Signature=050ee8d7fae6d89d6484eb5d09448cd5a36152e4c5f2f45d342b9bb9ebd6cf48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

