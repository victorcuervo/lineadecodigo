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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB7EFSNA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGOSOTxykOUzHYH7NgeaUXdPd8%2F%2F7Uq3AG%2Bn6kfhiIbgIhAPW6CJ7XbbVOdzgLpMCN1jadYOzY%2BsbpJdVcIi9mXFrxKv8DCHYQABoMNjM3NDIzMTgzODA1Igw0IErntwEe1PkLRyMq3AObe3waSuNfzmmKRNZDUMLcrm8IHU6rhXj%2F28h4iBtpFh3Piqxm39iuJBL4CluJloJFe5%2BBkCbVD%2BxzfSWSy%2FQSm%2FGvKJQLInrgKdbbeb9q5BxatQBg0U%2B2cK5S4fUsNqfVPCoXbAEmhNKPgQp%2B5snib9sZtlzsY%2Fhcsv490TkFNALtrGe%2FCKbg9Eg2QrtblM6n7%2BaO2TSZNX9P9rCePH6l6xbYnS1T748N36MMrMIsX8VXocON2ogsKvkBRQNXuDF6SAelX%2FN6eUyTRmwvAcjvidOz2RtZZ6UYtpgwdnOJNRu%2FSfYr1HkWg%2FM2zgn4%2F3%2Faz%2BvXavVds0aS9d6wj7E6r%2BwfRoBjwMy1bG994%2FIT8lr7bbOrr9lwywMcu%2FpWa93aWM3bUZr9tGDy9ak2DMaEkmiQ4aQbnM5D3y6s7flZI9HUbs9c6vqSTITF4BSZZ%2F9yf3xLdMXLGrAHsDcGt9YNfun4U%2FlJe6YspfCrG9ZzvHLdkAFnbqVa%2F%2BC0anRsRrKHxu9kS5Rf3cfKnU8QMe2xZA8DajyYC9TtuG852nmksuq%2BwNHCRcB%2BA1zSbWHkqLWh7ecJWx%2FVsOH82etlClwYEU8f6joeBea1hDB%2FNOZW9YiczUrw1YSn3NOnDjCG6ojKBjqkAcMjOZIBgZ%2B6AU72o0Vnru7IvF3URR5btW5SbglS1R2D1fRQOMOg0KVLXKg%2FrigwSoyCiN6j9swv%2F0oNespSS%2FyngIZ%2Bu9e2bcSc39t%2BVhREeiIIYyI7VBARXiXd3X38inrjY6e%2BRxLDPjD5%2FaTdfxtrf1MXO%2F1G1KcN6VqEwTbLywuo5tKa2DDFx%2B6iVXZLSJf2i1PmQS60qX5OmqvW0PMfDpWu&X-Amz-Signature=27ba772c229565b16dd3c8aba9bf95daa75d237f77794b146e18f18d0bd8c4e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB7EFSNA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGOSOTxykOUzHYH7NgeaUXdPd8%2F%2F7Uq3AG%2Bn6kfhiIbgIhAPW6CJ7XbbVOdzgLpMCN1jadYOzY%2BsbpJdVcIi9mXFrxKv8DCHYQABoMNjM3NDIzMTgzODA1Igw0IErntwEe1PkLRyMq3AObe3waSuNfzmmKRNZDUMLcrm8IHU6rhXj%2F28h4iBtpFh3Piqxm39iuJBL4CluJloJFe5%2BBkCbVD%2BxzfSWSy%2FQSm%2FGvKJQLInrgKdbbeb9q5BxatQBg0U%2B2cK5S4fUsNqfVPCoXbAEmhNKPgQp%2B5snib9sZtlzsY%2Fhcsv490TkFNALtrGe%2FCKbg9Eg2QrtblM6n7%2BaO2TSZNX9P9rCePH6l6xbYnS1T748N36MMrMIsX8VXocON2ogsKvkBRQNXuDF6SAelX%2FN6eUyTRmwvAcjvidOz2RtZZ6UYtpgwdnOJNRu%2FSfYr1HkWg%2FM2zgn4%2F3%2Faz%2BvXavVds0aS9d6wj7E6r%2BwfRoBjwMy1bG994%2FIT8lr7bbOrr9lwywMcu%2FpWa93aWM3bUZr9tGDy9ak2DMaEkmiQ4aQbnM5D3y6s7flZI9HUbs9c6vqSTITF4BSZZ%2F9yf3xLdMXLGrAHsDcGt9YNfun4U%2FlJe6YspfCrG9ZzvHLdkAFnbqVa%2F%2BC0anRsRrKHxu9kS5Rf3cfKnU8QMe2xZA8DajyYC9TtuG852nmksuq%2BwNHCRcB%2BA1zSbWHkqLWh7ecJWx%2FVsOH82etlClwYEU8f6joeBea1hDB%2FNOZW9YiczUrw1YSn3NOnDjCG6ojKBjqkAcMjOZIBgZ%2B6AU72o0Vnru7IvF3URR5btW5SbglS1R2D1fRQOMOg0KVLXKg%2FrigwSoyCiN6j9swv%2F0oNespSS%2FyngIZ%2Bu9e2bcSc39t%2BVhREeiIIYyI7VBARXiXd3X38inrjY6e%2BRxLDPjD5%2FaTdfxtrf1MXO%2F1G1KcN6VqEwTbLywuo5tKa2DDFx%2B6iVXZLSJf2i1PmQS60qX5OmqvW0PMfDpWu&X-Amz-Signature=fd0b060325f68822af49a219567d1139f74889d9620f441fdc66b2be2193e4ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

