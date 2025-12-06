---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLAL7AXT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T004456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEVP8XbEbniJydpq7%2FpH96PzU7czXL6RerkHGsUslfWAiBW58Pa6HsU4sC9X7v34yvfDfx8r7G%2BkkfK0U3ku3E8WSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM83VulhMviu5mCYrsKtwDcjm4GPnrhRrutdJJgzTfVbbPib7kHzeyPJEc5xbuJbHaDaCUuiC1Cqg5vTurOXqVKqAK2c4dRXtpAUf2BXsAD%2Bz9zh66DdkpYVyP7z9OOGjKHagjwqpXhYoF9FbixkzuwkHbGjxFaRckDVuivU%2BM5pg%2F1t%2Fjb2bq90pKuP8Lde7ZB4lj0gfLBJjV%2FU9Rtl5QR6%2FWfMWSHyXBWpj40jHXztqKccw65arnGVMZKOHxzfyRP9TYWE8VR1CkxWaNqCheCgSsV3pxNtvwsXWdmzI%2B9b9UeQvj8WC7PX8N5sgUgVRLCevNoO6qJ2cVKwj52Wy5eVxeShdqZW%2F3dcm6c7aW3U9JcsISot63LQLhC1kTwoVMp%2BuSHRg0OXkeEWVwfRGNs7Xxt76CWx6zyPs7zgOn2E2nORfogBhuRDDHx3bjRjOug6MpmfFY%2BeBNHShNnN2QMAlPrfcRU8R6YUbSAx5yixnA0cfRhe96IuQlrFNy96AkhNcqHYDi412ksp4zmwJeL%2B9j9XHJFPdBab8VAaa8BzHXcDD3IwCTq53jv502dFe23dxkzI%2BTYmGnC6Xxu%2BNYdklge4QUky9FjrbSqwY945sorcb41CB6iEt5uv4XUMKF5RAiOdnkKSGuzFAw8OjNyQY6pgGkiBCd9%2FE365N1WRjVAnMQpBOgYMhzeguDBqsbx5BzJCfuW0Rhh%2FrpC83gt9GoM%2BGvTLrfDxA4y%2BomB%2BUv9Qcclxp36GkxELSWQ39jy6CL1Ti7NNCyIYqrWrAjrVwY%2FKTSnFw%2BNMxW%2F5XHppgivxqckb%2BIPZzGmAgQ4shaQSRV22JcXxuk6paptjOgnSy33L6C3fKTi3B398qRKJBR7LPQ0735osGL&X-Amz-Signature=4ba6ea9626ac843ad880be39751b92319104bd0accc6bcaaf19c99149704bae9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLAL7AXT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T004456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEVP8XbEbniJydpq7%2FpH96PzU7czXL6RerkHGsUslfWAiBW58Pa6HsU4sC9X7v34yvfDfx8r7G%2BkkfK0U3ku3E8WSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM83VulhMviu5mCYrsKtwDcjm4GPnrhRrutdJJgzTfVbbPib7kHzeyPJEc5xbuJbHaDaCUuiC1Cqg5vTurOXqVKqAK2c4dRXtpAUf2BXsAD%2Bz9zh66DdkpYVyP7z9OOGjKHagjwqpXhYoF9FbixkzuwkHbGjxFaRckDVuivU%2BM5pg%2F1t%2Fjb2bq90pKuP8Lde7ZB4lj0gfLBJjV%2FU9Rtl5QR6%2FWfMWSHyXBWpj40jHXztqKccw65arnGVMZKOHxzfyRP9TYWE8VR1CkxWaNqCheCgSsV3pxNtvwsXWdmzI%2B9b9UeQvj8WC7PX8N5sgUgVRLCevNoO6qJ2cVKwj52Wy5eVxeShdqZW%2F3dcm6c7aW3U9JcsISot63LQLhC1kTwoVMp%2BuSHRg0OXkeEWVwfRGNs7Xxt76CWx6zyPs7zgOn2E2nORfogBhuRDDHx3bjRjOug6MpmfFY%2BeBNHShNnN2QMAlPrfcRU8R6YUbSAx5yixnA0cfRhe96IuQlrFNy96AkhNcqHYDi412ksp4zmwJeL%2B9j9XHJFPdBab8VAaa8BzHXcDD3IwCTq53jv502dFe23dxkzI%2BTYmGnC6Xxu%2BNYdklge4QUky9FjrbSqwY945sorcb41CB6iEt5uv4XUMKF5RAiOdnkKSGuzFAw8OjNyQY6pgGkiBCd9%2FE365N1WRjVAnMQpBOgYMhzeguDBqsbx5BzJCfuW0Rhh%2FrpC83gt9GoM%2BGvTLrfDxA4y%2BomB%2BUv9Qcclxp36GkxELSWQ39jy6CL1Ti7NNCyIYqrWrAjrVwY%2FKTSnFw%2BNMxW%2F5XHppgivxqckb%2BIPZzGmAgQ4shaQSRV22JcXxuk6paptjOgnSy33L6C3fKTi3B398qRKJBR7LPQ0735osGL&X-Amz-Signature=e5200abb78777c0a7f290675ad55eb2ac4b386e681dc5669ebc0a8dfe44f9e6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

