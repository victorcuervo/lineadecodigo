---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF4XARJG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDMCGZ8fDa%2F4VDpge8zZ1%2F90bR9aBRo9LS%2FP5IuKuxjTAIhAOlwOCxCE%2BlZg7mzxPP0HHtd84ExucILlwJ1vKNVlHc5Kv8DCDwQABoMNjM3NDIzMTgzODA1Igx2pKxyQkUrlIuFEE0q3AOATypPoZvuHwf%2Bn0ajEoqEYRKhH2Yz%2Bh5xAWYTzZK44be5BDEFIQdXaQL8kUTd1cH6dBl2fWZk0Gj%2FhcoZ4ksgRFpF4xwO1BFeVgppDEAvJbfx0AxGGQ%2F8U%2BoAUj60AvA8xUFyFUfujD93OYhKhcUv19rHT0UdNwAorLIEcIpJu0LncTMH9dlK8fVfGYswjRyRrwc04v%2BwFLWjMeWFHouIf2Qkqxygkl74rDZ%2BvMF41ZVZ5vK6NOYb6dPrG5YkXK%2BrBpddm2qfcGDaSV0kKIaGMbfdrUW2%2FePByg8ufnoH%2BxhQ27Z%2F%2BOCspmx2VDU8VuP7mMFNYTLwwil8ES8UPB4xsQXIqY%2BCwsiQatmtLiC%2FttNDON54dv6PE45OQP%2FwFXjYM0z1R780ad%2B3B2QzpBZQzLg3QJNJKMRNeDkPSDJeZq6pHffLK2PTvFKvD2iIPIRNjD%2B%2FyxzMECVdW0xLqt81uVnGWjMSrNSkP5ON%2F8h1oBw%2BfGluvn7NRKfifKMSptruwBVgKPqNKu4jUUz4bKkmdvDVBa54UrKCzgYk5FFQb%2BSKL%2Bc5o4sm4fyPg2ooeXFdJbrUZw0wHs7bTN%2FuUUW%2BmtXXCtyGH7C78FjYBEWPbXqxZa1EdUd13bJMbDCj88PJBjqkAeMJW95DUG3V1IUlsoiTd2suy8izrcGdu%2FIu5lZiUJ9fyexVpUlkvmKDCmvSF%2BbOGY%2FasaI5QxtqYHgJvLN%2Bg5fWORHv3OSnMbxz4oKG1tH1ozxy6Kz1OBFOAJQ2NoELy9i5rPn%2FXzEiUMbRlpPgSQxMyXnztPqIHssIOr70Gz79feKBfWwAtu2ZVc570LAURFGfPbweGaBHpRyoKl1CK0g1aclr&X-Amz-Signature=ef60582a8ca62c3451f8a597e8efc3edb6cc8397fdc7a5a82a3abd5ebacaebb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF4XARJG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDMCGZ8fDa%2F4VDpge8zZ1%2F90bR9aBRo9LS%2FP5IuKuxjTAIhAOlwOCxCE%2BlZg7mzxPP0HHtd84ExucILlwJ1vKNVlHc5Kv8DCDwQABoMNjM3NDIzMTgzODA1Igx2pKxyQkUrlIuFEE0q3AOATypPoZvuHwf%2Bn0ajEoqEYRKhH2Yz%2Bh5xAWYTzZK44be5BDEFIQdXaQL8kUTd1cH6dBl2fWZk0Gj%2FhcoZ4ksgRFpF4xwO1BFeVgppDEAvJbfx0AxGGQ%2F8U%2BoAUj60AvA8xUFyFUfujD93OYhKhcUv19rHT0UdNwAorLIEcIpJu0LncTMH9dlK8fVfGYswjRyRrwc04v%2BwFLWjMeWFHouIf2Qkqxygkl74rDZ%2BvMF41ZVZ5vK6NOYb6dPrG5YkXK%2BrBpddm2qfcGDaSV0kKIaGMbfdrUW2%2FePByg8ufnoH%2BxhQ27Z%2F%2BOCspmx2VDU8VuP7mMFNYTLwwil8ES8UPB4xsQXIqY%2BCwsiQatmtLiC%2FttNDON54dv6PE45OQP%2FwFXjYM0z1R780ad%2B3B2QzpBZQzLg3QJNJKMRNeDkPSDJeZq6pHffLK2PTvFKvD2iIPIRNjD%2B%2FyxzMECVdW0xLqt81uVnGWjMSrNSkP5ON%2F8h1oBw%2BfGluvn7NRKfifKMSptruwBVgKPqNKu4jUUz4bKkmdvDVBa54UrKCzgYk5FFQb%2BSKL%2Bc5o4sm4fyPg2ooeXFdJbrUZw0wHs7bTN%2FuUUW%2BmtXXCtyGH7C78FjYBEWPbXqxZa1EdUd13bJMbDCj88PJBjqkAeMJW95DUG3V1IUlsoiTd2suy8izrcGdu%2FIu5lZiUJ9fyexVpUlkvmKDCmvSF%2BbOGY%2FasaI5QxtqYHgJvLN%2Bg5fWORHv3OSnMbxz4oKG1tH1ozxy6Kz1OBFOAJQ2NoELy9i5rPn%2FXzEiUMbRlpPgSQxMyXnztPqIHssIOr70Gz79feKBfWwAtu2ZVc570LAURFGfPbweGaBHpRyoKl1CK0g1aclr&X-Amz-Signature=292698811492894c982ab33ead23e3a3df71c34a070e322685e755811f599b3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

