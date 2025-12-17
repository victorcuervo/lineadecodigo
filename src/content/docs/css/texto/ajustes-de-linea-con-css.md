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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JCSQDI2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzKGRdZwDls9qLwaUZuklC4HD3sfWk2GQUEP8hmJ2LFAiEAr1sCuPJkNjbjzShB8%2FvLuwk%2FGaBk7UxtM1PqAGLHmOAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDA%2BC%2B365ZjCxs9yAPircA5al%2Fx5uFIMiW7ljjUOdfXc4K59ZK5VziiHPPjjlZR0S%2FT8jcbCf5RzmGlYh0ooo7t7QhDhUWu04M3%2BuJGelZzuvNYBo%2F2e%2BhUV%2FkIk7GcJeTiLh%2FykKgmDyTgopBF6mqMHiPZtUxu2QFg5TxLlcDLKg81BNZTu8TXzFggMh51S48hU6ajigj6BHKVL4%2Fuqr9flqBjlbwqZnty36ANv27Y0o2kzeNgz0fHDnhYfaaSJ1hLH2pwnpfl4z4QiGB6K8ErbD4Tm5kW35XuDhAuJfVsUMmCoThEsv3UkAarMxenMcv9moUy6oWkI6Lu88OKwOZ4C2nOv2OyI9G4IlJnn%2FsnZV9ofuloJkMtZ6WxxmqK%2BHn6AhsrzWSrncPj6iqaEaKoKVvmDB6z5GMZWZa9OytiMIdUvnTLzVu5KCgoel1B8wJiQxxZRYCybzh%2Fl4Os9WALsXyGrPL2yysu%2B1E9qDw%2F5HsCw%2F3xg2o0lI%2F5DpgmXSgXFq0DEMrOqwgjNeRXpBvj5ktKXSa66eseOK3Xms2X2euA8GRQIzn7t6n9%2FQfHuY%2BekQ02w2gFVTyQE8gf%2ByKKTXsSVa%2BlJRb5ptJBPjgedlmK9pF3agkeswV12T051NCSR5bXjnO2w%2B%2BK4nMJzOiMoGOqUBl7LtXz8z%2FHxbQg3sQU9G4eKo8cPBXeJ9g9c2YCJwViDGvzQpscwJO%2F5f0ApkykiTYijEDfJRc9pK1CgxWS7oKTD3kxeAqDf4jDwSz5EUH5raCLbURlIEhSAwOmwk1dd02z0%2BHSQxmcgiN11Cbif7qz9NF%2BtBRYYziUhONLR4MEcnGB5V8Up12sASoVrAqaZV9F56nNRO%2BFZrjxEpsuBZ8vGwS755&X-Amz-Signature=008d84bf09383585e3850485d862897cce2fc1ce69a7c82fa6aa4bb9062c2f23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JCSQDI2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzKGRdZwDls9qLwaUZuklC4HD3sfWk2GQUEP8hmJ2LFAiEAr1sCuPJkNjbjzShB8%2FvLuwk%2FGaBk7UxtM1PqAGLHmOAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDA%2BC%2B365ZjCxs9yAPircA5al%2Fx5uFIMiW7ljjUOdfXc4K59ZK5VziiHPPjjlZR0S%2FT8jcbCf5RzmGlYh0ooo7t7QhDhUWu04M3%2BuJGelZzuvNYBo%2F2e%2BhUV%2FkIk7GcJeTiLh%2FykKgmDyTgopBF6mqMHiPZtUxu2QFg5TxLlcDLKg81BNZTu8TXzFggMh51S48hU6ajigj6BHKVL4%2Fuqr9flqBjlbwqZnty36ANv27Y0o2kzeNgz0fHDnhYfaaSJ1hLH2pwnpfl4z4QiGB6K8ErbD4Tm5kW35XuDhAuJfVsUMmCoThEsv3UkAarMxenMcv9moUy6oWkI6Lu88OKwOZ4C2nOv2OyI9G4IlJnn%2FsnZV9ofuloJkMtZ6WxxmqK%2BHn6AhsrzWSrncPj6iqaEaKoKVvmDB6z5GMZWZa9OytiMIdUvnTLzVu5KCgoel1B8wJiQxxZRYCybzh%2Fl4Os9WALsXyGrPL2yysu%2B1E9qDw%2F5HsCw%2F3xg2o0lI%2F5DpgmXSgXFq0DEMrOqwgjNeRXpBvj5ktKXSa66eseOK3Xms2X2euA8GRQIzn7t6n9%2FQfHuY%2BekQ02w2gFVTyQE8gf%2ByKKTXsSVa%2BlJRb5ptJBPjgedlmK9pF3agkeswV12T051NCSR5bXjnO2w%2B%2BK4nMJzOiMoGOqUBl7LtXz8z%2FHxbQg3sQU9G4eKo8cPBXeJ9g9c2YCJwViDGvzQpscwJO%2F5f0ApkykiTYijEDfJRc9pK1CgxWS7oKTD3kxeAqDf4jDwSz5EUH5raCLbURlIEhSAwOmwk1dd02z0%2BHSQxmcgiN11Cbif7qz9NF%2BtBRYYziUhONLR4MEcnGB5V8Up12sASoVrAqaZV9F56nNRO%2BFZrjxEpsuBZ8vGwS755&X-Amz-Signature=b516bfdf1438bf952a9118b166f82c860cdae0e1ab7311b2cb31c18b8b2de709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

