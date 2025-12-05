---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667724PONV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T205447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxsb4hoV%2FvmLav2AAWUp92%2BWwCsCasP2gkgukKCZV8lgIhAN6XizZBo4VZW%2BMQHKbP995lm0RHW6hlgXjB4EGC66ncKv8DCGYQABoMNjM3NDIzMTgzODA1IgyorvUyXLrQDxXFBJ8q3AMDkKvaby%2BmmXkBx6k9vnd0K6zx4cAojn6xgzEeukerTjCpJHLcfJbrox36aTeX1BIUeG9Z%2BlZEHceUZrChQW2kWeaFQeNw5if%2ByVYWJq4jHZyDcpPKUUu59FW%2BFb%2FH5ZMI9NN0RfHuqIOcpE1TK4naRYtA%2FK0tSNBXUxdRmJ%2BnxiBjRtsbdjvcI18ihbj1WO2IAmpO7glcU0H95XUQV9%2BkZveEwCfyEHlI%2FlBfgjceZCFFVsWNopDcCVV9qu3FAUZF8nZVhFu%2F3sQZcD3JKsV8Pf34ZllosYHFd4AZM4fSaTxPKli3D%2Fc%2B%2Ft01N4X5WoX3EQ9Qmm%2Bx0MjuT7bn%2F33TOqZ12Bt2NyqU165jz0qXArjb69VH9rwg7aK726E0aSDAZ2IMUm4SjONXNDuPAqPR24oSNwv8uNm4scJ5gQgs%2BY88jVeFOPO%2BFgAICouo5OTidOFBYziy8nT4Gw3mxVLKWsO6TzeUNyxo4DBoNbc0UjU0TDhIFOwREMACFRtvVrId5O5%2FGQcVk4vHgXm8WGsDZxPPARZ15pvqp4BYQVlIjsGrpnFz29u42Ycl5AbolBgu8gP3DQ5QCtjN3mYuWId6EgtLWAko5kuI5aYhSgcbtqR15tKH3gFzhsV9YzDvhs3JBjqkAW2Sg67Tx5goT2im5J4BT%2B9g0RQ2nPBPXXvHnTvA19HPhynv%2F%2BHeQqY3l8vzgx5JtVs9XO%2FaXyySyeMgSZF45iuSc%2Bm6R%2FtMJKGDMC%2Bvg8Rxj%2FASgnp5%2FlDZeOiYmCR0Y7%2FTrv1tfxBth5lRzDs6rQ79%2FbQ9ffSFcW7dMFVxdm6tuzmfGJSqCvvXwXvlX96E54a05R5dyK5%2F5OwqqRGQDnHgulq7&X-Amz-Signature=9fb0c095e3cf03db759e89cd6bfbce69e0221e36c5dabbcc662ff091bde8bc97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667724PONV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T205447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxsb4hoV%2FvmLav2AAWUp92%2BWwCsCasP2gkgukKCZV8lgIhAN6XizZBo4VZW%2BMQHKbP995lm0RHW6hlgXjB4EGC66ncKv8DCGYQABoMNjM3NDIzMTgzODA1IgyorvUyXLrQDxXFBJ8q3AMDkKvaby%2BmmXkBx6k9vnd0K6zx4cAojn6xgzEeukerTjCpJHLcfJbrox36aTeX1BIUeG9Z%2BlZEHceUZrChQW2kWeaFQeNw5if%2ByVYWJq4jHZyDcpPKUUu59FW%2BFb%2FH5ZMI9NN0RfHuqIOcpE1TK4naRYtA%2FK0tSNBXUxdRmJ%2BnxiBjRtsbdjvcI18ihbj1WO2IAmpO7glcU0H95XUQV9%2BkZveEwCfyEHlI%2FlBfgjceZCFFVsWNopDcCVV9qu3FAUZF8nZVhFu%2F3sQZcD3JKsV8Pf34ZllosYHFd4AZM4fSaTxPKli3D%2Fc%2B%2Ft01N4X5WoX3EQ9Qmm%2Bx0MjuT7bn%2F33TOqZ12Bt2NyqU165jz0qXArjb69VH9rwg7aK726E0aSDAZ2IMUm4SjONXNDuPAqPR24oSNwv8uNm4scJ5gQgs%2BY88jVeFOPO%2BFgAICouo5OTidOFBYziy8nT4Gw3mxVLKWsO6TzeUNyxo4DBoNbc0UjU0TDhIFOwREMACFRtvVrId5O5%2FGQcVk4vHgXm8WGsDZxPPARZ15pvqp4BYQVlIjsGrpnFz29u42Ycl5AbolBgu8gP3DQ5QCtjN3mYuWId6EgtLWAko5kuI5aYhSgcbtqR15tKH3gFzhsV9YzDvhs3JBjqkAW2Sg67Tx5goT2im5J4BT%2B9g0RQ2nPBPXXvHnTvA19HPhynv%2F%2BHeQqY3l8vzgx5JtVs9XO%2FaXyySyeMgSZF45iuSc%2Bm6R%2FtMJKGDMC%2Bvg8Rxj%2FASgnp5%2FlDZeOiYmCR0Y7%2FTrv1tfxBth5lRzDs6rQ79%2FbQ9ffSFcW7dMFVxdm6tuzmfGJSqCvvXwXvlX96E54a05R5dyK5%2F5OwqqRGQDnHgulq7&X-Amz-Signature=986457236e7212589edc48e6030cb084ca58071a176e2654da7972184de5965e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

