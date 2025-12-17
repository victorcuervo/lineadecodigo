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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CXFQTZY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzQq1vc2ILdHiyZ2sDpVkYCw0xdkecGT9Lc2KVuK7vngIhAKf%2FR%2BKhcfavFslj%2BtEMDjqy0RNt5InpOeTUVmhv4wxoKv8DCHUQABoMNjM3NDIzMTgzODA1IgxQhAgjP5mBD6DjMtMq3AOQX%2B27rLvgh8X8qLKxmXW1J3tqyYKUzpYi2v1CinuROgGjYdpnnl322moXkegEMEX0a1fdJR9bX5oCAvUHOzolxiPayB61COhfhwiV67QUD8r1RcZQUpxOgbRBvvrCnUmQIyQ1vkxx5IKrDc1JDTkCjuvreJ1h9iU38kIo7Hne9JYSDvBCglVHNyWeg%2FDXi9gAkW3RchvLgmXz%2FP1jXx%2B6IPCKADHrXW9Rcrf4jKvpU6BK7rbgc0BIpoh2HqUtJmQOE4Bzc6yCGUco7g9lO4t%2FurYhs55iDWehEDwP%2B2hief08PzSMnCNH%2FmfALfMQa0F%2BOdUa8rNPXnCdPsdIDZX72npbuGpOtgKltgvjBhfqMER7eTpLFfQcF4ZkzJ6A%2FEBB%2BrfMLUIiEqg1uBT9t4I2SlozpV0ngnkyoNmA%2FtC%2BiFwdObzsGqp7rsNg1WkE%2FeRGXYkOFhit4sm2GQdMlkptf%2BjOpeAnCMySBLIaok6ssehfAeSlZ2he9Rw3tcjuP4kJXnZJZHM5ro2AmZfc33H%2FhF9oWB2nV1Ky7i2HB1qGfWSsuLfGoFWmnD2sHqy6Z2eFqch28o924qwEgZzBk%2FAnikR3DiMNJ6aYPFEwNETpYsNpelL5CdLxfdsd9zCXz4jKBjqkAe17xIOd%2B21aM5Fn7ubGiHjCQadb6JC%2BHJsIUumiDxBzAQ%2B27AyFQH8rUiVj2CEnpqkgwUIJv%2BXDPlu7gWKGruw4FrJPeRsFO4AMHbrU2VFkrfqdRc4pUxexlZQkj4BvniAkop7A4mkKNG9qYzN0cn%2FYLQQHHIlzwWSTR6uDDpnxXRqbNaTtLYC2rXyV0ZQ4G%2BppwQvfGdR3mQeIeN8S%2Bb%2BPjg9J&X-Amz-Signature=231c4c6dbb8f4041bc111f122e22abb5a87d2e4720c1ca74a18bab0ce54403ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CXFQTZY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzQq1vc2ILdHiyZ2sDpVkYCw0xdkecGT9Lc2KVuK7vngIhAKf%2FR%2BKhcfavFslj%2BtEMDjqy0RNt5InpOeTUVmhv4wxoKv8DCHUQABoMNjM3NDIzMTgzODA1IgxQhAgjP5mBD6DjMtMq3AOQX%2B27rLvgh8X8qLKxmXW1J3tqyYKUzpYi2v1CinuROgGjYdpnnl322moXkegEMEX0a1fdJR9bX5oCAvUHOzolxiPayB61COhfhwiV67QUD8r1RcZQUpxOgbRBvvrCnUmQIyQ1vkxx5IKrDc1JDTkCjuvreJ1h9iU38kIo7Hne9JYSDvBCglVHNyWeg%2FDXi9gAkW3RchvLgmXz%2FP1jXx%2B6IPCKADHrXW9Rcrf4jKvpU6BK7rbgc0BIpoh2HqUtJmQOE4Bzc6yCGUco7g9lO4t%2FurYhs55iDWehEDwP%2B2hief08PzSMnCNH%2FmfALfMQa0F%2BOdUa8rNPXnCdPsdIDZX72npbuGpOtgKltgvjBhfqMER7eTpLFfQcF4ZkzJ6A%2FEBB%2BrfMLUIiEqg1uBT9t4I2SlozpV0ngnkyoNmA%2FtC%2BiFwdObzsGqp7rsNg1WkE%2FeRGXYkOFhit4sm2GQdMlkptf%2BjOpeAnCMySBLIaok6ssehfAeSlZ2he9Rw3tcjuP4kJXnZJZHM5ro2AmZfc33H%2FhF9oWB2nV1Ky7i2HB1qGfWSsuLfGoFWmnD2sHqy6Z2eFqch28o924qwEgZzBk%2FAnikR3DiMNJ6aYPFEwNETpYsNpelL5CdLxfdsd9zCXz4jKBjqkAe17xIOd%2B21aM5Fn7ubGiHjCQadb6JC%2BHJsIUumiDxBzAQ%2B27AyFQH8rUiVj2CEnpqkgwUIJv%2BXDPlu7gWKGruw4FrJPeRsFO4AMHbrU2VFkrfqdRc4pUxexlZQkj4BvniAkop7A4mkKNG9qYzN0cn%2FYLQQHHIlzwWSTR6uDDpnxXRqbNaTtLYC2rXyV0ZQ4G%2BppwQvfGdR3mQeIeN8S%2Bb%2BPjg9J&X-Amz-Signature=bc72f15ac6a9415dc0e910544c2b68c1f9127ad8d8c599f6aa8dffe6f9328d6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

