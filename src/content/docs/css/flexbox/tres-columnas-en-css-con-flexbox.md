---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMNXVA3T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCeDC0hxQ%2FeHnGQIDN0oGHH7qBbX0%2F19JtDIWL58E%2BJ3wIhAM9AbPk5RMPw1d9hop4FBe%2BlVyGu3FmR0guPGzUz4d7vKv8DCDkQABoMNjM3NDIzMTgzODA1Igw6uReTNs4n21Smgh8q3ANRujxjwfdFm%2BrGABIwNyIg9C6hsrKQ%2B82AAJM6R9nh1d9tatkWyMChkz8p8Jh4SF5k%2FCnNkDGThcLsO0FM%2BqwEIa2fnNoR%2FhQ%2BUwsnqblqBLbu5bJvHJAE9x4O%2FRGeKOi14M9yRMRs5EvKXR8XazM6fK9M9de%2B%2FKsd%2FpFab6KwoiX84rlhEQQBtZ8q4vdTU00Rz0R%2BKy7cpZkJhhO7cg6rLoCBVbhghj9YThHMwh7CGLxFWASN9QQDoTAnQmMRfz3%2FOSKNEiqnLL9UvhvA3EDSihQPBH%2Fa7LKEAirnFOn1V5kvbkDcIT0S%2FEI0uM6a5mImycy6n68XMCBm856mt1t1PmGhiI%2FUhguvEO0wQCGapsWrQmUm0uPFJ3HzM3VENC%2BV6eH0Ray3r43znj%2FAuLZ7HE7K%2FurU5U4QmiBoOGvXNXfiU8at0QQq2GkKyqi4qtIlkR%2FDpN8S5NdJJ6tj7%2F%2F8zcVNvU8%2BncUV%2FsOrHpoSlQq8rQBBG255xeDSghqaZYCDN%2FVosj06MZoUaChiRPVpDHgXk4OPNrh3i6KkfbTkHHxO4%2Bm6XjMpzFQKyjugYRfEk35yGRcWKo9QIJM0nxU%2BxPOFh95vyqdGRWYncbm%2BejVquQNVlBWO%2Fd2MVzD%2FlMPJBjqkAYizIFAvgeLoCzoqX8qFRKeoxe2eJZiMqGon%2BR7b2Zw2c7SVPqlzanq4hyKNB4FZ5liMQXDUNG%2BeyX0dxJGBLnjXbe8Es7fajhCCR6OCmuHDkhWAbPLvZbUZwfbP6x0G%2F8lF4WM1PAnuyxw73gas3ZErv7Bm3WTlNzupEbFqFDJBaoBAd6%2BsNoc%2FPqkc8L8ODh9xyHmFmLG%2FOkTBs99Cm3ba05zc&X-Amz-Signature=2d296a13d19320309bfec83b714c23022453eb86245a0fd037f940496fa739f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMNXVA3T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCeDC0hxQ%2FeHnGQIDN0oGHH7qBbX0%2F19JtDIWL58E%2BJ3wIhAM9AbPk5RMPw1d9hop4FBe%2BlVyGu3FmR0guPGzUz4d7vKv8DCDkQABoMNjM3NDIzMTgzODA1Igw6uReTNs4n21Smgh8q3ANRujxjwfdFm%2BrGABIwNyIg9C6hsrKQ%2B82AAJM6R9nh1d9tatkWyMChkz8p8Jh4SF5k%2FCnNkDGThcLsO0FM%2BqwEIa2fnNoR%2FhQ%2BUwsnqblqBLbu5bJvHJAE9x4O%2FRGeKOi14M9yRMRs5EvKXR8XazM6fK9M9de%2B%2FKsd%2FpFab6KwoiX84rlhEQQBtZ8q4vdTU00Rz0R%2BKy7cpZkJhhO7cg6rLoCBVbhghj9YThHMwh7CGLxFWASN9QQDoTAnQmMRfz3%2FOSKNEiqnLL9UvhvA3EDSihQPBH%2Fa7LKEAirnFOn1V5kvbkDcIT0S%2FEI0uM6a5mImycy6n68XMCBm856mt1t1PmGhiI%2FUhguvEO0wQCGapsWrQmUm0uPFJ3HzM3VENC%2BV6eH0Ray3r43znj%2FAuLZ7HE7K%2FurU5U4QmiBoOGvXNXfiU8at0QQq2GkKyqi4qtIlkR%2FDpN8S5NdJJ6tj7%2F%2F8zcVNvU8%2BncUV%2FsOrHpoSlQq8rQBBG255xeDSghqaZYCDN%2FVosj06MZoUaChiRPVpDHgXk4OPNrh3i6KkfbTkHHxO4%2Bm6XjMpzFQKyjugYRfEk35yGRcWKo9QIJM0nxU%2BxPOFh95vyqdGRWYncbm%2BejVquQNVlBWO%2Fd2MVzD%2FlMPJBjqkAYizIFAvgeLoCzoqX8qFRKeoxe2eJZiMqGon%2BR7b2Zw2c7SVPqlzanq4hyKNB4FZ5liMQXDUNG%2BeyX0dxJGBLnjXbe8Es7fajhCCR6OCmuHDkhWAbPLvZbUZwfbP6x0G%2F8lF4WM1PAnuyxw73gas3ZErv7Bm3WTlNzupEbFqFDJBaoBAd6%2BsNoc%2FPqkc8L8ODh9xyHmFmLG%2FOkTBs99Cm3ba05zc&X-Amz-Signature=f2f5bfb75a17531f84b93fef8d097daa8b36b83b3f9fc5445491e314f1d4b8d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

