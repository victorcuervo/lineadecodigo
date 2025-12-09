---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URTHAC7F%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T093512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBqyAymsjQDOOnB%2BeRKkLg1fQEB%2Bpxcx4JCKFnnsjKuAIhAJzUt31GV0ekCBeKZRzeNebnmPQBN6xmVan30kHD0deLKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydTLQ5SE67BfvFMh8q3AMjeWbtqN7X0Z1ZHmw51P%2BfHnXznfAlv4WwRHwqeBJDlHA6rxzm0nOTbPwKYjCHiXeMKRf5Q0Ky4JDmkmZjySuk%2FrfkpbMpaD2TIKUvbLVVa5z3oQ7gwKX3kJfJtMsEG%2FDSAl9JPvGrgBvgDv3jKFzolUdEu5AUlRfDvUAOry4qPoEsq3yb%2B6UTVApAtK2VlHOkQN81Teng9ar2vVLs3cT6uC30DZYGVHqY69Af1WDp%2FGjkJzy75s2bZDKdotpuhMvS0sSkGI3TzB%2BerCIYJnWix%2FSLjGlBO%2BWZYUNO9%2FDXGlnn7fesJodDNw2mPljrf74%2Fq9PQcAI2G6tVjwLQmvpLgxo98eRSs7GQERM%2Fe3a7Oy5Fp2WVkFs8a7Sa%2BLCMJLMbzJ9DKSAAENjGIoqjRDZI0XVp3jxToco1gj2p8NXuFCDUd0bZxEtN1E101T%2BtCGis%2FqZzx3GcDO3GVqIXZMII7lVhUFG82XpaqCPyEUQF9x36s1%2FhbpHJ5VocFUa7R18ZVa5vuGMHYX2xntVElpf4R9lBOV8pYnANMWjbVlCkEDQ5mcVJDa0Yh9hvRfllWV7Hwg18qNKUa9Hko1kUOPxo5uh8QnuOFhEd6R27iTDG9c42h%2Bgiz3Iof0UodjCsw9%2FJBjqkAczJ9CwwsbXfRPAl6iXW%2BECoahzPGjbT07YPztEBfES3p6gkrYu8ul%2Bm8q6oZGkoAr4hhJ%2BlSTZMsU4KNJxsZ4IANi5mxPbPFbwg4VgDOfn3faDu5ZEyQuNEXnZVPvkrXocG2vzavswj9BgQI8LkZ8CDDYal076iIXHwkqkcfnLgfYuAvI28OsEgP2kNOTKZ0TrGU0bah42J1PEvcLFa1AHgKBWG&X-Amz-Signature=6d9a4ab3dc21e8d7e7e8648f4ecfde84f3ffabfbcaed8930a9c7c96bb4df626f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URTHAC7F%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T093512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBqyAymsjQDOOnB%2BeRKkLg1fQEB%2Bpxcx4JCKFnnsjKuAIhAJzUt31GV0ekCBeKZRzeNebnmPQBN6xmVan30kHD0deLKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydTLQ5SE67BfvFMh8q3AMjeWbtqN7X0Z1ZHmw51P%2BfHnXznfAlv4WwRHwqeBJDlHA6rxzm0nOTbPwKYjCHiXeMKRf5Q0Ky4JDmkmZjySuk%2FrfkpbMpaD2TIKUvbLVVa5z3oQ7gwKX3kJfJtMsEG%2FDSAl9JPvGrgBvgDv3jKFzolUdEu5AUlRfDvUAOry4qPoEsq3yb%2B6UTVApAtK2VlHOkQN81Teng9ar2vVLs3cT6uC30DZYGVHqY69Af1WDp%2FGjkJzy75s2bZDKdotpuhMvS0sSkGI3TzB%2BerCIYJnWix%2FSLjGlBO%2BWZYUNO9%2FDXGlnn7fesJodDNw2mPljrf74%2Fq9PQcAI2G6tVjwLQmvpLgxo98eRSs7GQERM%2Fe3a7Oy5Fp2WVkFs8a7Sa%2BLCMJLMbzJ9DKSAAENjGIoqjRDZI0XVp3jxToco1gj2p8NXuFCDUd0bZxEtN1E101T%2BtCGis%2FqZzx3GcDO3GVqIXZMII7lVhUFG82XpaqCPyEUQF9x36s1%2FhbpHJ5VocFUa7R18ZVa5vuGMHYX2xntVElpf4R9lBOV8pYnANMWjbVlCkEDQ5mcVJDa0Yh9hvRfllWV7Hwg18qNKUa9Hko1kUOPxo5uh8QnuOFhEd6R27iTDG9c42h%2Bgiz3Iof0UodjCsw9%2FJBjqkAczJ9CwwsbXfRPAl6iXW%2BECoahzPGjbT07YPztEBfES3p6gkrYu8ul%2Bm8q6oZGkoAr4hhJ%2BlSTZMsU4KNJxsZ4IANi5mxPbPFbwg4VgDOfn3faDu5ZEyQuNEXnZVPvkrXocG2vzavswj9BgQI8LkZ8CDDYal076iIXHwkqkcfnLgfYuAvI28OsEgP2kNOTKZ0TrGU0bah42J1PEvcLFa1AHgKBWG&X-Amz-Signature=31f79880a8c21f0add600d72f7a2509130eb92fc5096050ec7aae51e7b508389&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

