---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBEGVSRL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDy3tk00t8tR80QJxyQAno%2FVxyyd2faY9GLBs2OARAMEAIgPZZMpNpvqZ%2FLVm1Ib0bum3qr2KzvS7NduwQmnV9KcQwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFzjjKd8YqU2vEViFyrcA33qlEpT3fdAggrrwmZ5wXHF48mz21b02JTeNxaIwB0CEB%2FMhhOqRNAMUk1Tm0v%2F84gPeSzfR3Coo8yp%2ByketCbwcfxLro%2B4YlmCOmWoLZ2VcQwHsmca%2FzOjwpai%2Bl%2BwkVlz8kpNglaC53IcWu2gpCbmD7K%2BUV9Qs44whuGy3fIwY4C76U0gVN83tjMe6K4siMwdt4LmK97FOM%2BBAb8Zm55EvCJ6rkNwn1MR3WeqCMnSdVMqxKIw1muuvF2ZFc72X5i9SIZeLksr7SoSCKneyazAf09Xk8CcNsE4P3%2BM2uFRTZXXrEwKSUBOAen2HVjUhC7fmaEEFwHiPO%2BN8gk9u2YKRjqL6JkVS%2BBjk6yTxnG0XzNrXnDAUfOyRRIik9G3qjW7lc67eWI7Ayx5eEd9XpieyEP1vV5yee7TJd2i09BD2%2FWbVcLGmmcsSgVQPGRQKZNI8urhY67fhU39pyEEKRl8R9AE1yB9EcIzKDetwSm0Ud9LElL7%2Fp7HveMcQ0%2Fc6wZ1M0I%2B1Izax2yg10IZmpfUNU61xEVGoEXiTI8uR5QGG7OazToOJYj6D2dT03lOdUSM0iZX%2BG4FwGCuz1Ypkbira%2BWtSBi3ZutqTeMcwuQeYLrl6wWHzkBlkUG6MPOFxckGOqUBtDBcfJzvJ%2BiRys6KqrAgtyIV8QEZzN%2FPKj11unQssQWTpp12A%2Bb5gceX1vND0g6aYFeBiAjP9mdaJf13VGmjZR5yGj592Ki%2BIoYZTum2ccdDRyAaxJjGnWbrvSfr9GTBf8ol7FKocJVM0rdTFWmJOcs%2BW7Jchp9u6k0zz9%2BRSKDp88PZ0tFN1Y5nv9oAaQXxyNfpvy7kbbTh0BCQoYOAsJtZy8cV&X-Amz-Signature=390e61382c2c97ae4f17b2656ea1529a3cf0720c3c3365b786f3d587097a0060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBEGVSRL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDy3tk00t8tR80QJxyQAno%2FVxyyd2faY9GLBs2OARAMEAIgPZZMpNpvqZ%2FLVm1Ib0bum3qr2KzvS7NduwQmnV9KcQwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFzjjKd8YqU2vEViFyrcA33qlEpT3fdAggrrwmZ5wXHF48mz21b02JTeNxaIwB0CEB%2FMhhOqRNAMUk1Tm0v%2F84gPeSzfR3Coo8yp%2ByketCbwcfxLro%2B4YlmCOmWoLZ2VcQwHsmca%2FzOjwpai%2Bl%2BwkVlz8kpNglaC53IcWu2gpCbmD7K%2BUV9Qs44whuGy3fIwY4C76U0gVN83tjMe6K4siMwdt4LmK97FOM%2BBAb8Zm55EvCJ6rkNwn1MR3WeqCMnSdVMqxKIw1muuvF2ZFc72X5i9SIZeLksr7SoSCKneyazAf09Xk8CcNsE4P3%2BM2uFRTZXXrEwKSUBOAen2HVjUhC7fmaEEFwHiPO%2BN8gk9u2YKRjqL6JkVS%2BBjk6yTxnG0XzNrXnDAUfOyRRIik9G3qjW7lc67eWI7Ayx5eEd9XpieyEP1vV5yee7TJd2i09BD2%2FWbVcLGmmcsSgVQPGRQKZNI8urhY67fhU39pyEEKRl8R9AE1yB9EcIzKDetwSm0Ud9LElL7%2Fp7HveMcQ0%2Fc6wZ1M0I%2B1Izax2yg10IZmpfUNU61xEVGoEXiTI8uR5QGG7OazToOJYj6D2dT03lOdUSM0iZX%2BG4FwGCuz1Ypkbira%2BWtSBi3ZutqTeMcwuQeYLrl6wWHzkBlkUG6MPOFxckGOqUBtDBcfJzvJ%2BiRys6KqrAgtyIV8QEZzN%2FPKj11unQssQWTpp12A%2Bb5gceX1vND0g6aYFeBiAjP9mdaJf13VGmjZR5yGj592Ki%2BIoYZTum2ccdDRyAaxJjGnWbrvSfr9GTBf8ol7FKocJVM0rdTFWmJOcs%2BW7Jchp9u6k0zz9%2BRSKDp88PZ0tFN1Y5nv9oAaQXxyNfpvy7kbbTh0BCQoYOAsJtZy8cV&X-Amz-Signature=8be89a8f3dd549563360d626b608e0b4a8e8e33f1ecc7c8b3f403113d0a17a74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

