---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O4OL5WG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T021203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrJHcr%2F7kBQTD9vv%2BrJPK94m62WS4Nl6mdxgN49y%2FBAgIhAMmB7wRDAQTJ4%2F%2BxreEb5CdreKqrHvmn8lFgritiNaDRKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvGWEddYWwIHsmJSAq3AMomEr6LbE9h7wFAEn07zmtDs%2BfE2ZpDb%2BUF7PoK1EUGYqoEruPTZ1%2Fm%2BZDH6nTBhT7dalkwDSpgTasxqkmf6Y%2Bljw9dzUlVyrklSzTep8lmj5TPpV%2FblvSrbMtw%2Bcnm0z7ysw1qajC%2FT8DsJ1O87ZSAYI1O%2BGhocgRzV3rQrF9nOpC%2BGkQ%2FRgRYGouaWGL21wZLJHP%2FUalYdD5Llh2Me9P9s3cL95YbOxIkCFedLfzDWBkcA7RU0RklhX%2Bj1ogl2eG5%2BsseYQLjY9o37jYZQrbwhYL%2FMy9hY63f0YDeJAyuy3Kmiv2TJn0YbjyWndOiEc2HwdtcxYtfDdPwoAKWAx0X%2ByhkxCH3zGp1xDwNWtPue4uSmC4HJFSuU6gJ%2Bx4mU%2B2prNNiLdXp%2FUSAYxMLeN6%2BWNfu6%2B94Hd84whjJ1HOZ298xxiPa0%2BsnH8xQrFSB8qBLICmHkxinj6lNuUFycKvV1wXIKmOuY1Bq9dQi7XWqJH0%2Fc%2FE4JOFqaGV6Y95VvowjlcaL3UdqO9VdeR3suJez1%2FRzfhBgJaT%2BN5jSnmEMAHQ94lcWVkCpdH09%2BTIt0EgWRJ8XBIkGEe1eQRxjbkGzSkjdjlLoCilhqPdkRrZCPfBOBE8OrEt0lfKUzCL%2FtLJBjqkAXEolQebMuMjyvWt%2FRSGZLfg%2BNHcIGSQ5RT1M7NNkjM6%2B9PxK6eoZ90XaNEoGNNm6BTHNNKNoK9MnRmVKYBYtvycDb%2Fl6MMMCVw0fH7y%2B0AjSfMdoWaajhpQVOJ2aTxCQWX2TnqiHjMdPwbW6MGHQjRpdJMlWInt5AvBI18gv3fK3DzgZY%2BQdEuHSUVd01ky4ydop7W1GcYPwrwnva2G%2BezU40QQ&X-Amz-Signature=9514dd9093abcb1795f2b99388b93eb176c083ec2bed97f59d494658fa44c9e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O4OL5WG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T021203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrJHcr%2F7kBQTD9vv%2BrJPK94m62WS4Nl6mdxgN49y%2FBAgIhAMmB7wRDAQTJ4%2F%2BxreEb5CdreKqrHvmn8lFgritiNaDRKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvGWEddYWwIHsmJSAq3AMomEr6LbE9h7wFAEn07zmtDs%2BfE2ZpDb%2BUF7PoK1EUGYqoEruPTZ1%2Fm%2BZDH6nTBhT7dalkwDSpgTasxqkmf6Y%2Bljw9dzUlVyrklSzTep8lmj5TPpV%2FblvSrbMtw%2Bcnm0z7ysw1qajC%2FT8DsJ1O87ZSAYI1O%2BGhocgRzV3rQrF9nOpC%2BGkQ%2FRgRYGouaWGL21wZLJHP%2FUalYdD5Llh2Me9P9s3cL95YbOxIkCFedLfzDWBkcA7RU0RklhX%2Bj1ogl2eG5%2BsseYQLjY9o37jYZQrbwhYL%2FMy9hY63f0YDeJAyuy3Kmiv2TJn0YbjyWndOiEc2HwdtcxYtfDdPwoAKWAx0X%2ByhkxCH3zGp1xDwNWtPue4uSmC4HJFSuU6gJ%2Bx4mU%2B2prNNiLdXp%2FUSAYxMLeN6%2BWNfu6%2B94Hd84whjJ1HOZ298xxiPa0%2BsnH8xQrFSB8qBLICmHkxinj6lNuUFycKvV1wXIKmOuY1Bq9dQi7XWqJH0%2Fc%2FE4JOFqaGV6Y95VvowjlcaL3UdqO9VdeR3suJez1%2FRzfhBgJaT%2BN5jSnmEMAHQ94lcWVkCpdH09%2BTIt0EgWRJ8XBIkGEe1eQRxjbkGzSkjdjlLoCilhqPdkRrZCPfBOBE8OrEt0lfKUzCL%2FtLJBjqkAXEolQebMuMjyvWt%2FRSGZLfg%2BNHcIGSQ5RT1M7NNkjM6%2B9PxK6eoZ90XaNEoGNNm6BTHNNKNoK9MnRmVKYBYtvycDb%2Fl6MMMCVw0fH7y%2B0AjSfMdoWaajhpQVOJ2aTxCQWX2TnqiHjMdPwbW6MGHQjRpdJMlWInt5AvBI18gv3fK3DzgZY%2BQdEuHSUVd01ky4ydop7W1GcYPwrwnva2G%2BezU40QQ&X-Amz-Signature=b2bdd13b1a7da86a533b282aa231455e799670b602616c519315752604268ac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

