---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYLABTST%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCPQ%2BSnlo0cNcBTbSdOUnZKEZ5X3iikUTEHnR9OVyV31gIhAJM3zhyfHdkcGZJm7VrI2X1ly0WKkWX9ZCUYWfqL4C3sKv8DCEcQABoMNjM3NDIzMTgzODA1Igzfswn4pi81X7MQX%2Bcq3ANuLH4qH4IsL6PxeBEQ6iNBai39hQcLgfmb%2FuzCwxQOMIT9dzxmUHnMLQmSZA77J2h48oVteM57CZnKZndvDiXSbagBur3ze2tUV1%2B4trTQyuEIghrWuGACpz7fKS%2B3bKWVRuYuRNLr2Onv96c8EwIWWSs4E4MwhAfHXguTiLyfxRL0yxb17poY5j9ZrdiRqkqnP7dt4YCJP5vgDd6sABMpm%2FOtT5Bz%2BLCoEL3gOfB81Mp54w9QMc8WCocgAyHS226n0A6KFEITT0%2FIQNlRyupMaysFaSCyElLpWW981%2F8gBMZh6kg2QIWokh4V1Gy1LSZLw7MVegVrfr%2F%2FTh5nsArFDfKqMe2fBhcv%2BFXV1udoFMZ%2F%2BTab7%2B%2F3UajAaS%2Fwk%2B74fkGNKKynIg%2BORAYVWuNb24zh3GF6trn2P7sv18f4kWSv0nu%2BPhwkbg9NSdPxpA1avscqlNgeW5D0mIj05mwAXMtnR%2BQrnltI017D8oC38aF6urf%2FyKIlk7FWjMKQO8QePlPpaZUgKxgbMBZcItksxZR02SMyaMHmw1YIzXw4TMcIdQhdxtYtPw0ZAsswPN0ljyx4AP8XAavGztIQKjESXAL1JYzVfion9Qb74xvwpJqieoZvMeNsjbSkWDDMocbJBjqkAdW8WKUcAAzKKgftWO29vee4Rj7pOyRZLZsmeJWLXmbpW3ngJDZkP2ZxiKVNj4iuKc7vd20GiJ0zgtH7hmgkB62S%2FyjuEGDaJ8SGGcOfSW9fG9N5H1BJzqRgXqOSsG9nx6txG9Qxcm7EWC10JghxSvCoX8rFXTphjIYAf2kaEHWe4Pxd1bKHxw3vs5B%2FHmV1zoMCtDlhwEUybrGlR3B1Hm0dnPh4&X-Amz-Signature=d5d31a6b02e69baa8c2efd851b8444213913ba348e0bac276eed3db99ba6de17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYLABTST%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCPQ%2BSnlo0cNcBTbSdOUnZKEZ5X3iikUTEHnR9OVyV31gIhAJM3zhyfHdkcGZJm7VrI2X1ly0WKkWX9ZCUYWfqL4C3sKv8DCEcQABoMNjM3NDIzMTgzODA1Igzfswn4pi81X7MQX%2Bcq3ANuLH4qH4IsL6PxeBEQ6iNBai39hQcLgfmb%2FuzCwxQOMIT9dzxmUHnMLQmSZA77J2h48oVteM57CZnKZndvDiXSbagBur3ze2tUV1%2B4trTQyuEIghrWuGACpz7fKS%2B3bKWVRuYuRNLr2Onv96c8EwIWWSs4E4MwhAfHXguTiLyfxRL0yxb17poY5j9ZrdiRqkqnP7dt4YCJP5vgDd6sABMpm%2FOtT5Bz%2BLCoEL3gOfB81Mp54w9QMc8WCocgAyHS226n0A6KFEITT0%2FIQNlRyupMaysFaSCyElLpWW981%2F8gBMZh6kg2QIWokh4V1Gy1LSZLw7MVegVrfr%2F%2FTh5nsArFDfKqMe2fBhcv%2BFXV1udoFMZ%2F%2BTab7%2B%2F3UajAaS%2Fwk%2B74fkGNKKynIg%2BORAYVWuNb24zh3GF6trn2P7sv18f4kWSv0nu%2BPhwkbg9NSdPxpA1avscqlNgeW5D0mIj05mwAXMtnR%2BQrnltI017D8oC38aF6urf%2FyKIlk7FWjMKQO8QePlPpaZUgKxgbMBZcItksxZR02SMyaMHmw1YIzXw4TMcIdQhdxtYtPw0ZAsswPN0ljyx4AP8XAavGztIQKjESXAL1JYzVfion9Qb74xvwpJqieoZvMeNsjbSkWDDMocbJBjqkAdW8WKUcAAzKKgftWO29vee4Rj7pOyRZLZsmeJWLXmbpW3ngJDZkP2ZxiKVNj4iuKc7vd20GiJ0zgtH7hmgkB62S%2FyjuEGDaJ8SGGcOfSW9fG9N5H1BJzqRgXqOSsG9nx6txG9Qxcm7EWC10JghxSvCoX8rFXTphjIYAf2kaEHWe4Pxd1bKHxw3vs5B%2FHmV1zoMCtDlhwEUybrGlR3B1Hm0dnPh4&X-Amz-Signature=3fa2ca47752997482c2d24f748f0ac703932da2e46a14210a0265ed7f74ea8d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

