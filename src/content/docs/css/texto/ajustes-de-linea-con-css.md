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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AZ4E7ZI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCffrUOpVuAnS8XmfljGKVVq%2B1SIsJo0hUUIQG8RS7lLwIhAIcoGmTTcgwqX%2FFodnQ380eCtshWD%2BYrn0C8%2FD4Y3GNLKv8DCHgQABoMNjM3NDIzMTgzODA1Igyoy3WENGbe8vDqLF4q3APyYaq5ehbwO2RmK%2FpsfFHyt50X7j23xMNvPOZm3LjG6nqmZoiCE2ZZsQWYhB3BkLWznTdfBdy5PToH7taKk46eYPQP217BOCg91mcW3TG5v3iCAO9uyt7ZmN%2FvrKCb%2BNWgm0jjm9qLWPdNx5CHqOMwYWL68EtGJqESc9UPGuw5bUUHuFXsB1egYAdgSXzy87cV0wE9TiloqCEdpM6W%2FYXB%2BwGo5i8w7%2FGJphuzBxIxgmpP9mbF%2BeI2y7F%2B8FcBFZKiOZagEplpK5TSqnvEOpdGLEpIzxiy7%2Fw%2B4pCVRSMV2P4SU2baDNuCcLYDWMSbS48fF4F2nk0BT%2FZsZIQmUXu2qxLMShkQkcQ6EiltKUf%2BhKHIoCSiK50h3LRPZ8nw6LsL%2FujMM%2BYJ0ClilBwVN4JWkqC7lbQfAhWb65e2c%2FOmE03OHfA2lfZeyjHaEsD8o%2BLwSXxkDBxycOYS1GLISyetXaM1sa5%2BGWpy%2B%2FOcxf7CvkgL%2BCL63nrkIh61AVEembq10S%2FC6EltfI261mF469fxXAWR4aQO1%2BuirGifMYN%2FkP7tOb5IYnTs9c%2FNNSk0a%2FrN1a1O2KkryniC2bv7u6VFToT%2BU14pL8sOa%2FK%2BhsGxlSOWZtk%2FGtz43o6ELjCOnonKBjqkARq%2FbxEnuFe6yg5CSgYrPgsCgnjPWLnky20mRb6QS5eZPFwW4zTg9I1h1wrUSH6ao9h8LwSy7xFmfAzX780r6t%2Baqo9Ymu9NIuXoco7HGWpAL9RRKF3Uavo7t1HIpIQdOviAg5NRTTdWnIANhiBg4b6tjGIs23OeW03SKz%2BuWuC5xfQeg6PN7Srjb3xe2G57k%2FSJgVV3hbd4lz2HqZ24uLrF%2FXoF&X-Amz-Signature=f0f5d8e16cc4abfd40b52455fe10141040695caa56bcd756df5388bb86cf9fa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AZ4E7ZI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCffrUOpVuAnS8XmfljGKVVq%2B1SIsJo0hUUIQG8RS7lLwIhAIcoGmTTcgwqX%2FFodnQ380eCtshWD%2BYrn0C8%2FD4Y3GNLKv8DCHgQABoMNjM3NDIzMTgzODA1Igyoy3WENGbe8vDqLF4q3APyYaq5ehbwO2RmK%2FpsfFHyt50X7j23xMNvPOZm3LjG6nqmZoiCE2ZZsQWYhB3BkLWznTdfBdy5PToH7taKk46eYPQP217BOCg91mcW3TG5v3iCAO9uyt7ZmN%2FvrKCb%2BNWgm0jjm9qLWPdNx5CHqOMwYWL68EtGJqESc9UPGuw5bUUHuFXsB1egYAdgSXzy87cV0wE9TiloqCEdpM6W%2FYXB%2BwGo5i8w7%2FGJphuzBxIxgmpP9mbF%2BeI2y7F%2B8FcBFZKiOZagEplpK5TSqnvEOpdGLEpIzxiy7%2Fw%2B4pCVRSMV2P4SU2baDNuCcLYDWMSbS48fF4F2nk0BT%2FZsZIQmUXu2qxLMShkQkcQ6EiltKUf%2BhKHIoCSiK50h3LRPZ8nw6LsL%2FujMM%2BYJ0ClilBwVN4JWkqC7lbQfAhWb65e2c%2FOmE03OHfA2lfZeyjHaEsD8o%2BLwSXxkDBxycOYS1GLISyetXaM1sa5%2BGWpy%2B%2FOcxf7CvkgL%2BCL63nrkIh61AVEembq10S%2FC6EltfI261mF469fxXAWR4aQO1%2BuirGifMYN%2FkP7tOb5IYnTs9c%2FNNSk0a%2FrN1a1O2KkryniC2bv7u6VFToT%2BU14pL8sOa%2FK%2BhsGxlSOWZtk%2FGtz43o6ELjCOnonKBjqkARq%2FbxEnuFe6yg5CSgYrPgsCgnjPWLnky20mRb6QS5eZPFwW4zTg9I1h1wrUSH6ao9h8LwSy7xFmfAzX780r6t%2Baqo9Ymu9NIuXoco7HGWpAL9RRKF3Uavo7t1HIpIQdOviAg5NRTTdWnIANhiBg4b6tjGIs23OeW03SKz%2BuWuC5xfQeg6PN7Srjb3xe2G57k%2FSJgVV3hbd4lz2HqZ24uLrF%2FXoF&X-Amz-Signature=e51f5eb3d71d5fb2acb0b8b1157a48fb09ffd9f8daa812e01fecf2c5d27721c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

