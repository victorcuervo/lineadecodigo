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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HRJLCL4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8kCw92WmVq0f1Tpkv0eucFB0%2FafsJKOL6XlleiuysCAIhAPQ%2FfVQH8XOEp4r4NDOoIXcrslYv16xoZ5oTTUPSk3drKv8DCHMQABoMNjM3NDIzMTgzODA1Igy65%2FRaioMG9fbH0MIq3ANecGcGIO1R6Pbqs8kSsj%2FZrplxzSMAaU5xU13ePVukHlgv2vwVpsEjZzIewJIgT4Gq6j2%2FhPWwF2rREt5fBMfhCyGocFbn6O5f%2Fd1qTGFWJz1nTLbbSraABiHVXS6U1B16n%2F11rAumVernnGyZH1LrUAAyW0srmdbRcbJt8Vjbne4qhBaiSJ7TBIkujFOc4JrWLjBIpzcK2CZuVw5P1ku82Xsh6ump4ClDZO8Hrl4PE9PmsEuc%2BUPdFWHUwpCOZi5f2%2FVCPYZq2%2FkNfgL6lRKwnCJ3MSctCBd%2B2rBPNzjZQ9h57HCpmtjt%2BID0qSChJL6gv1fxfTNNRiYE5RE3326nByxanQx7Or4rIu%2BNaA0PDDDenfAvH3aGbsYfdvEyCnVW2PPLbVCAPZrMtQNazNuQ5tw9%2F4BEMk5s0Y8BHJOxuZVuUKU5sA4qwfIKCw3%2FXWbZ4meA3aqBqgBCNfpMtZItktcuf8F7NetmCct4UDtOSgS61Pgv69GYkgmakLjoaZQv823GbX1rMBC8%2Fq7DQ5joo2EfrwSLpYzuTawAotKopeyM0sBae1dXi3KUHVHTglmg0Lz%2FhvHyGuUGxZkc97EmL3VsVr0omH73nKJVOVD%2BBql2BNz6mYHnAvD0LDDKlYjKBjqkAdG0ofqOcyQQpyBUSUScf4ppfwNNREqpCNwqwmhdHNWD3xd6lFNqJuzxuimZB9hXcUlJivCKf%2F%2FSE0T9lOk7kOo6RwiYL6gTdSua8XijN9PuYjWaXjRMNfrEWTO8C%2FiJuq6Q7s9DbdpPrxBC%2BiiYPc2icNVNti4mhVGtY%2FmxDxL7ozXyDhba6EJtFHisUhUm%2BD%2BIBii4dAQOJhwN8YfrS7z5u%2BEz&X-Amz-Signature=ebb81c96b7d091771aecf15101510229287578dfc04f3f91437c562e80f26cb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HRJLCL4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8kCw92WmVq0f1Tpkv0eucFB0%2FafsJKOL6XlleiuysCAIhAPQ%2FfVQH8XOEp4r4NDOoIXcrslYv16xoZ5oTTUPSk3drKv8DCHMQABoMNjM3NDIzMTgzODA1Igy65%2FRaioMG9fbH0MIq3ANecGcGIO1R6Pbqs8kSsj%2FZrplxzSMAaU5xU13ePVukHlgv2vwVpsEjZzIewJIgT4Gq6j2%2FhPWwF2rREt5fBMfhCyGocFbn6O5f%2Fd1qTGFWJz1nTLbbSraABiHVXS6U1B16n%2F11rAumVernnGyZH1LrUAAyW0srmdbRcbJt8Vjbne4qhBaiSJ7TBIkujFOc4JrWLjBIpzcK2CZuVw5P1ku82Xsh6ump4ClDZO8Hrl4PE9PmsEuc%2BUPdFWHUwpCOZi5f2%2FVCPYZq2%2FkNfgL6lRKwnCJ3MSctCBd%2B2rBPNzjZQ9h57HCpmtjt%2BID0qSChJL6gv1fxfTNNRiYE5RE3326nByxanQx7Or4rIu%2BNaA0PDDDenfAvH3aGbsYfdvEyCnVW2PPLbVCAPZrMtQNazNuQ5tw9%2F4BEMk5s0Y8BHJOxuZVuUKU5sA4qwfIKCw3%2FXWbZ4meA3aqBqgBCNfpMtZItktcuf8F7NetmCct4UDtOSgS61Pgv69GYkgmakLjoaZQv823GbX1rMBC8%2Fq7DQ5joo2EfrwSLpYzuTawAotKopeyM0sBae1dXi3KUHVHTglmg0Lz%2FhvHyGuUGxZkc97EmL3VsVr0omH73nKJVOVD%2BBql2BNz6mYHnAvD0LDDKlYjKBjqkAdG0ofqOcyQQpyBUSUScf4ppfwNNREqpCNwqwmhdHNWD3xd6lFNqJuzxuimZB9hXcUlJivCKf%2F%2FSE0T9lOk7kOo6RwiYL6gTdSua8XijN9PuYjWaXjRMNfrEWTO8C%2FiJuq6Q7s9DbdpPrxBC%2BiiYPc2icNVNti4mhVGtY%2FmxDxL7ozXyDhba6EJtFHisUhUm%2BD%2BIBii4dAQOJhwN8YfrS7z5u%2BEz&X-Amz-Signature=b2f84cc886ffbe27f4ebca2ed302945a5d75e9d30a05f22d343ebed057804636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

