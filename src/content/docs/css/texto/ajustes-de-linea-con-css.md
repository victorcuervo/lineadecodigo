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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKDO5U5L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCX%2B27yMr3ruL3KwRThCRWnCsmA6Y01rYlvQChB8x%2BmAiAX37F5d5hmGr293xnwuwLDEnxF7veaFaDzUl4VbYN17Sr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMcv8ViMjsPFvB94gKKtwDAxYIe8bEUwp1vsIBRHtCTbdSiNyqdf5C0ipMasMNQX0RKsCxGLXTUjDqhHH6yRlYuLbjcWCwFuDHdmXKky5WFf0FlbqjPHM5sVeAPwu3fvzX3ATM1zZOLG2XlnI4g3PJUVpSu03B5DCpXuWRqWgF4bF2TCJ5D2dx1gRmPB2pa3RXkSgJmM%2BNFWYuUX71vlV7T%2BStJQiPoxdj8DlGTFALgLvaGaj3OXwYe2QmEUlYUQaV29IC1oEYS6d3xRM%2BHBcMchNKNjIZL2HHdG2TfSszxRWxSJIsvZB2Sqq%2FlJP5e3HjrYiHw6hYfHGwMjt4uE27Mf%2FV8SL3EtNHE0DSLpIxz1SELFzXQqtZLIS7nlSEcaFwPWcIrOs3%2FqWaZNa59aBpnEBioJar9LCawshetDTyNGOgurBJZvW%2Bxl8%2FRBA9CUeVCuX0kQrE4W70BjGNyzEihRHlDDCOU%2FLJbujozXc7IRHprK3HExm%2FpSKCTWEgQbupGGot99ytVFwoRR19n6IHpmqBzpnZ74rW8QO4E1h004BKkyRHJncsdXF4vR3eWN85iENqQi5rdHunCTbK%2Bg5p91tlTZoJZbgvIl8V%2FJSiBsMWhovJe6eGqb8TG4J2RQZQfYo3G2GehrPmuRww4PuHygY6pgGNbLcydzzLZNNBjaTvmaEdpOkhwjc8R%2FH1KEIVqOhrHBg8LNKOYBN4NDtuYcHthfLXxNpEo9nVZMESf%2FJ8IwBTMVKA3H%2B%2BvVb44A3d%2Fuq7C2iveoX6ZHkp1cGDi7aGzillubJiPZ5ldl6naHvcfNLBuHuf9kjo7zSGFzhGmpPyaHKzWaxmJpbY0oo5EcDadTt%2BjJvmTCmeVi1x2lwzqeaD5FeCK4mm&X-Amz-Signature=1348e44a81466ee381acfe6e9379809f6f8f8a80e2e4ef2ad2ef043416991e8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKDO5U5L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCX%2B27yMr3ruL3KwRThCRWnCsmA6Y01rYlvQChB8x%2BmAiAX37F5d5hmGr293xnwuwLDEnxF7veaFaDzUl4VbYN17Sr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMcv8ViMjsPFvB94gKKtwDAxYIe8bEUwp1vsIBRHtCTbdSiNyqdf5C0ipMasMNQX0RKsCxGLXTUjDqhHH6yRlYuLbjcWCwFuDHdmXKky5WFf0FlbqjPHM5sVeAPwu3fvzX3ATM1zZOLG2XlnI4g3PJUVpSu03B5DCpXuWRqWgF4bF2TCJ5D2dx1gRmPB2pa3RXkSgJmM%2BNFWYuUX71vlV7T%2BStJQiPoxdj8DlGTFALgLvaGaj3OXwYe2QmEUlYUQaV29IC1oEYS6d3xRM%2BHBcMchNKNjIZL2HHdG2TfSszxRWxSJIsvZB2Sqq%2FlJP5e3HjrYiHw6hYfHGwMjt4uE27Mf%2FV8SL3EtNHE0DSLpIxz1SELFzXQqtZLIS7nlSEcaFwPWcIrOs3%2FqWaZNa59aBpnEBioJar9LCawshetDTyNGOgurBJZvW%2Bxl8%2FRBA9CUeVCuX0kQrE4W70BjGNyzEihRHlDDCOU%2FLJbujozXc7IRHprK3HExm%2FpSKCTWEgQbupGGot99ytVFwoRR19n6IHpmqBzpnZ74rW8QO4E1h004BKkyRHJncsdXF4vR3eWN85iENqQi5rdHunCTbK%2Bg5p91tlTZoJZbgvIl8V%2FJSiBsMWhovJe6eGqb8TG4J2RQZQfYo3G2GehrPmuRww4PuHygY6pgGNbLcydzzLZNNBjaTvmaEdpOkhwjc8R%2FH1KEIVqOhrHBg8LNKOYBN4NDtuYcHthfLXxNpEo9nVZMESf%2FJ8IwBTMVKA3H%2B%2BvVb44A3d%2Fuq7C2iveoX6ZHkp1cGDi7aGzillubJiPZ5ldl6naHvcfNLBuHuf9kjo7zSGFzhGmpPyaHKzWaxmJpbY0oo5EcDadTt%2BjJvmTCmeVi1x2lwzqeaD5FeCK4mm&X-Amz-Signature=3a9bdf7886d2df40bb0204871cd544947a48b9b34c9abcbdd5f1a40a426ac265&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

