---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625VPIED5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T080549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBc7IIASBUgqYFo4%2Fc6ME5N9lw2H6Icb9vNPg0QCO7nzAiBD4iMMDOCes66ubmNk02%2BQocmNw89BT2SSnwwd%2BjQ62iqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDajaL03zrlIRPXHhKtwDfyNKlXBTJZlGyoJW6UFWwUEzJ0XPRDy4XdFH5K4PX0ClrApbdGSb3V6JevK7k2Hq4MTd0xcWc0MJXHK2LLEBn3eTBFs5x1BCSOs7U3PTzDRnfGBVYtLlFSnA3Wle9nGAbD0B23zsA%2B6ppovDw7fOZ%2FjGbLlcFf1i8NqiJNWZBrz4N9tOIFdXnKM%2BOwvD5RUJvpG%2BuNBUlqUE7BvFygn420rHJ0qUBaAjso69o4dto4xmPp1al7h1e3tW8VnKCNNtRco5HTN4dXCpqS99X4RZjH2iRLU7igbiGdaY8iMedZ0vnAQRAHhktTT6lUsiCBkvG3d7il44RfPmuIB9VQFD%2FaTtA46uF9vH94hviFsO5a%2BoaFCM6V436Gq4rc6EmzLQxPiz1N4i7rGcm1VC5wqK%2B5BECthrO6D5Hba9bP6EeJmIPCF7QMobDZs5S8jRw9u5OwKXzXzz35CXVs0hFFoY4MlG9eg2qvnaq6w1YFQtgBFcXZyuj%2BBqXIRYnqBH33zABTqZFWtOT7Ct19zDBJz5gsAPdqdb3XaSa8bxBceyB7rlEnAH9CgHfmLopewiGU007CV1%2Bswjl6TbUaGkZqe1dBnh42Ugj6YbpxVV%2BF%2FCbcBliIsawhQ6e7BYDMQw%2FqXfyQY6pgFRfx91epyWEa%2BgTmsROL4ZNKg6I35tvTOv1sR7ux9qumQb5u3VtNd1aMZIMykMvVyMv6l%2BsjdKL3fEQFLSHFS9qgYpbXGspQr8uTvSbJElffZW2oY1xedA90XR5CsuArC7spEk1yStIR%2B1ZuBXdfN%2FJFP5jpaXrHcI%2FnfMprf3sKV8vlpSzSjgKEyPUYoQD2pFU6TSVjsD2Tm5AyDJkNkkYwgVBq2o&X-Amz-Signature=7ab32c9589fb82ff65c5b622814323b7f2ba46ee33385c873b16ae0496c63964&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625VPIED5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T080549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBc7IIASBUgqYFo4%2Fc6ME5N9lw2H6Icb9vNPg0QCO7nzAiBD4iMMDOCes66ubmNk02%2BQocmNw89BT2SSnwwd%2BjQ62iqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDajaL03zrlIRPXHhKtwDfyNKlXBTJZlGyoJW6UFWwUEzJ0XPRDy4XdFH5K4PX0ClrApbdGSb3V6JevK7k2Hq4MTd0xcWc0MJXHK2LLEBn3eTBFs5x1BCSOs7U3PTzDRnfGBVYtLlFSnA3Wle9nGAbD0B23zsA%2B6ppovDw7fOZ%2FjGbLlcFf1i8NqiJNWZBrz4N9tOIFdXnKM%2BOwvD5RUJvpG%2BuNBUlqUE7BvFygn420rHJ0qUBaAjso69o4dto4xmPp1al7h1e3tW8VnKCNNtRco5HTN4dXCpqS99X4RZjH2iRLU7igbiGdaY8iMedZ0vnAQRAHhktTT6lUsiCBkvG3d7il44RfPmuIB9VQFD%2FaTtA46uF9vH94hviFsO5a%2BoaFCM6V436Gq4rc6EmzLQxPiz1N4i7rGcm1VC5wqK%2B5BECthrO6D5Hba9bP6EeJmIPCF7QMobDZs5S8jRw9u5OwKXzXzz35CXVs0hFFoY4MlG9eg2qvnaq6w1YFQtgBFcXZyuj%2BBqXIRYnqBH33zABTqZFWtOT7Ct19zDBJz5gsAPdqdb3XaSa8bxBceyB7rlEnAH9CgHfmLopewiGU007CV1%2Bswjl6TbUaGkZqe1dBnh42Ugj6YbpxVV%2BF%2FCbcBliIsawhQ6e7BYDMQw%2FqXfyQY6pgFRfx91epyWEa%2BgTmsROL4ZNKg6I35tvTOv1sR7ux9qumQb5u3VtNd1aMZIMykMvVyMv6l%2BsjdKL3fEQFLSHFS9qgYpbXGspQr8uTvSbJElffZW2oY1xedA90XR5CsuArC7spEk1yStIR%2B1ZuBXdfN%2FJFP5jpaXrHcI%2FnfMprf3sKV8vlpSzSjgKEyPUYoQD2pFU6TSVjsD2Tm5AyDJkNkkYwgVBq2o&X-Amz-Signature=94981f525250e9b54037608e30a9d1265998f1425306c74c067190e3c32d371b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

