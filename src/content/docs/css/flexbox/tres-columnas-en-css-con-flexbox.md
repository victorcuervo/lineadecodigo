---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYBDZWNM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjH%2BNnSauVLEhU%2FJcrkA393GODbOuSFGcmAcZxkfkV0QIgM326auNFxBEQHZKG3ESAg7%2FHhw9hbv2aC432%2FZt1oYgqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUQceUhqSvc2uQtmyrcA%2FN9GtTviYSut18tAucA2QmcYNq0ers%2BhKn9YX3WHsLxk6seJ7cT%2B61iX3FsBwBqtGkKBawMHdJ7YCqRcVXaTD%2F1z4r4h2%2Fbj8eWFmG1eC70EBwD1MNSuTpCCzXK7YXHTdWyPWMgvvGMhrm8ZUdVSmxBWzqtVIdPDdRz%2FVZVjcpWXOTlkI6x216tWyyd4YgI4t5X4aFM5rVMEGPF9cW0mc37HrXRZuQZbu%2FmlBTFlGmT84WWX7Nuf62D1I%2FZjaZ705pwEbDKHk1pTsh0mWv7daFFsWEwdicY0OH6IrQDg5VVclhwGBZKExon9Qj1cX%2BftRDwOLzwxEkHGZZbc0zuYdX14nevisfFeXe%2F2a3JPzWvmYM%2B9oyJiBrpyupEG8xdDj3W59%2BGc75z94PKgF%2Bxz3fvdVe8gRoeDTng8AfYU0Ld4asR78HYR59GtBJVpP36eLMU2WwcqyYrxT4tD%2Fxez8uxgpBe1YcJ76IVP0Su%2BeMXMSMOHYHOy6OaRbsrHKA1tHrF6GMwwdIl%2Buv5fq5Ps3vaJqCzN2ZRkG2DnEfbI9pppqGJkk3NmIiXpsmsDBup7WLP%2Bq3OLH9xxdLsEyD1OpKZbvJduc6hAn4rZ2G%2FgUyxkITpqvt5l9L7nEPtMKC51skGOqUBVRDcd7VKRDPZp4jhz3rjFdW52249zoJCHMtXSYEqs4GQuwxcD9%2BJaa3FZDh9Yftqzg8CTqUkFonl%2FkE8E6MH%2BviyJfmfvWiVwfiz8dr6k2WVfW1fcfSwsRwk5MF3%2Fp6pvCCMJtE%2FyZa13MTgghuQ2JvIcqUZM9%2BTIIu9KfSliv%2By4sn8vcZc1JD305UJ9u9WiBP%2F7%2BDNUp68UlELkYp2blRPgrsz&X-Amz-Signature=1c5e6adc60eef3109e2894f970b632430a252a0b9a70c381afd398155eb2786a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYBDZWNM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjH%2BNnSauVLEhU%2FJcrkA393GODbOuSFGcmAcZxkfkV0QIgM326auNFxBEQHZKG3ESAg7%2FHhw9hbv2aC432%2FZt1oYgqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUQceUhqSvc2uQtmyrcA%2FN9GtTviYSut18tAucA2QmcYNq0ers%2BhKn9YX3WHsLxk6seJ7cT%2B61iX3FsBwBqtGkKBawMHdJ7YCqRcVXaTD%2F1z4r4h2%2Fbj8eWFmG1eC70EBwD1MNSuTpCCzXK7YXHTdWyPWMgvvGMhrm8ZUdVSmxBWzqtVIdPDdRz%2FVZVjcpWXOTlkI6x216tWyyd4YgI4t5X4aFM5rVMEGPF9cW0mc37HrXRZuQZbu%2FmlBTFlGmT84WWX7Nuf62D1I%2FZjaZ705pwEbDKHk1pTsh0mWv7daFFsWEwdicY0OH6IrQDg5VVclhwGBZKExon9Qj1cX%2BftRDwOLzwxEkHGZZbc0zuYdX14nevisfFeXe%2F2a3JPzWvmYM%2B9oyJiBrpyupEG8xdDj3W59%2BGc75z94PKgF%2Bxz3fvdVe8gRoeDTng8AfYU0Ld4asR78HYR59GtBJVpP36eLMU2WwcqyYrxT4tD%2Fxez8uxgpBe1YcJ76IVP0Su%2BeMXMSMOHYHOy6OaRbsrHKA1tHrF6GMwwdIl%2Buv5fq5Ps3vaJqCzN2ZRkG2DnEfbI9pppqGJkk3NmIiXpsmsDBup7WLP%2Bq3OLH9xxdLsEyD1OpKZbvJduc6hAn4rZ2G%2FgUyxkITpqvt5l9L7nEPtMKC51skGOqUBVRDcd7VKRDPZp4jhz3rjFdW52249zoJCHMtXSYEqs4GQuwxcD9%2BJaa3FZDh9Yftqzg8CTqUkFonl%2FkE8E6MH%2BviyJfmfvWiVwfiz8dr6k2WVfW1fcfSwsRwk5MF3%2Fp6pvCCMJtE%2FyZa13MTgghuQ2JvIcqUZM9%2BTIIu9KfSliv%2By4sn8vcZc1JD305UJ9u9WiBP%2F7%2BDNUp68UlELkYp2blRPgrsz&X-Amz-Signature=233c459cdf8e18c30b3b2b3c30bd02a016f61d427f6d575197eac6026ab3d787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

