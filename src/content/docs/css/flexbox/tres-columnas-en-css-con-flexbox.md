---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LZISEEX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFsGEERvaNgrQ90q9XFeys8NCGcltOXvnwQYElC7luerAiEAwOfvutJjjHCVukLMvVB9FD%2F0CwQ5aFiZIJ0746SGSLMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMpsQRX4ECknjzBnCrcAycgkCquuP6d0TuHoRqLnX6IdiA3gX%2Fk3hs0eUSmKMGBzTy1eyqsZPGH002y%2FujxvTUBAl87WMB2Nj41HQx6R%2Fq2I9ImF9wTFuKnCm6xTxjr39R7OkEArIA30Awx%2BYCRGLv3WK0i6BLTgtVBUZNxfCJxzeoNMbIZmi1i9KntaVqhzLrIjVDD91Hz2byS9N19CO%2F7Cn7Dmuzt8VVSg1NBT6WuPcGYGb293v71fHqoBmcmUTxVOgMQIUoAekbX0KpUZXJ9DSvXLfjw8QVG3u%2Bz55uTCsyjgoU8rd%2FsgsckRwOf%2BnBY%2FvwKcUJEUaLJSPwJR7tIWUoekfaaVP9nWt%2FOkMh6%2BWCnuLIDhmnCPJnLBX9Ja3d1qMab1C%2F864qzifSP5DS8sH05b7BE2K39hmIIJxVWKBn1ScFU%2F1dgjFh%2FVi25wh%2FNnC55mcfYeWZpQkgSbtIYgFY7tMh%2BaoCrqrYDxA%2Fz%2FJ4jovJUg4ijuvIxedz%2FjCPZq8ttMsLO10oY2PQUqfM9XXVj2YItHw6K3D67xLGR%2FFJuk5rRe1iSYPSLMwIGtZZ6d8YBMedrGC8FvrkQ4KhsX84c%2BokNDTRzIeie8plHuTpnZdlWe%2FN0AZQZjNBawYcpNBrxj5tAYWkyMI%2BN3skGOqUBnZrF9l6hjy%2FsjzKAbhvR98aLvIJRPt8tBRu15r8CSvRv4xrnldMHK5E%2Fi3r8eKr%2BZWGjmlU%2FOvR%2Btce17ao8KlP%2FMhTAzalnCFwM0Sqa7Fr%2FpRtTYMZC%2B8KLxjZ%2BSN%2Fw4kYYP6IuVuyuI4ihoj2IMD26283E%2BvcsHfoHL5Z1C5%2BKGrwDdE8Jr0Z4zFu9w%2BeH%2BsiDXpUWve66F00gR%2Blp6HjvZ8No&X-Amz-Signature=d5bc7de48c8edac4bff7ee5983a67b10f904d5f452b977d0d6c1756e44c313af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LZISEEX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFsGEERvaNgrQ90q9XFeys8NCGcltOXvnwQYElC7luerAiEAwOfvutJjjHCVukLMvVB9FD%2F0CwQ5aFiZIJ0746SGSLMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMpsQRX4ECknjzBnCrcAycgkCquuP6d0TuHoRqLnX6IdiA3gX%2Fk3hs0eUSmKMGBzTy1eyqsZPGH002y%2FujxvTUBAl87WMB2Nj41HQx6R%2Fq2I9ImF9wTFuKnCm6xTxjr39R7OkEArIA30Awx%2BYCRGLv3WK0i6BLTgtVBUZNxfCJxzeoNMbIZmi1i9KntaVqhzLrIjVDD91Hz2byS9N19CO%2F7Cn7Dmuzt8VVSg1NBT6WuPcGYGb293v71fHqoBmcmUTxVOgMQIUoAekbX0KpUZXJ9DSvXLfjw8QVG3u%2Bz55uTCsyjgoU8rd%2FsgsckRwOf%2BnBY%2FvwKcUJEUaLJSPwJR7tIWUoekfaaVP9nWt%2FOkMh6%2BWCnuLIDhmnCPJnLBX9Ja3d1qMab1C%2F864qzifSP5DS8sH05b7BE2K39hmIIJxVWKBn1ScFU%2F1dgjFh%2FVi25wh%2FNnC55mcfYeWZpQkgSbtIYgFY7tMh%2BaoCrqrYDxA%2Fz%2FJ4jovJUg4ijuvIxedz%2FjCPZq8ttMsLO10oY2PQUqfM9XXVj2YItHw6K3D67xLGR%2FFJuk5rRe1iSYPSLMwIGtZZ6d8YBMedrGC8FvrkQ4KhsX84c%2BokNDTRzIeie8plHuTpnZdlWe%2FN0AZQZjNBawYcpNBrxj5tAYWkyMI%2BN3skGOqUBnZrF9l6hjy%2FsjzKAbhvR98aLvIJRPt8tBRu15r8CSvRv4xrnldMHK5E%2Fi3r8eKr%2BZWGjmlU%2FOvR%2Btce17ao8KlP%2FMhTAzalnCFwM0Sqa7Fr%2FpRtTYMZC%2B8KLxjZ%2BSN%2Fw4kYYP6IuVuyuI4ihoj2IMD26283E%2BvcsHfoHL5Z1C5%2BKGrwDdE8Jr0Z4zFu9w%2BeH%2BsiDXpUWve66F00gR%2Blp6HjvZ8No&X-Amz-Signature=fdec9739c8605d18379a73da1162f94546148699bec00dd2f51bc1eb99ae8660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

