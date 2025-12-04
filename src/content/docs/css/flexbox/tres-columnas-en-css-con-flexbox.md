---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X4EFISK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCg7kU9B75niUpETgwGplc%2FAJ2SrLz3XJAFE78Yhn%2B3iwIhAI6EzxvNY8Ff1Fk1qi5xcVpAiaId%2F96CuLejuETypBc%2BKv8DCDwQABoMNjM3NDIzMTgzODA1IgyDGkYSnbcckjPufWAq3AOZgRpVuabF0MD6au4r8IBa4DvQ3C1eMVxBOYgrBSKunwHeNiRQ2SDYtGoVMtcwsvhmnCvbwHmCcLX6Fudlqo2Z2UREWP%2Ffrg5HSFK%2Bon3GPES9x7A1n9P6LDNSPmZ8tgO53gafKkfqfgLaC8BxrOOxqvQw6WAuMWwLrZERbz%2ByEfODJ4HME5NNHraFsO9hQucs8cNVvKnyHhBSunq2zi1nb6mdhF2qW%2B6BWfbtg7uUre6YJ3d671hwviDNybjNRC7UQyMtI%2BF7S7D6K3Y1r7P54wccWk3mn6gTScH8054m5OkQ7kfIDP2oNWNNNhKZzpliCBZc6YnL8uHCUEyUM0Hl8pciHEqy1Oxmv2IHFjBhwvwBrjZRbwLX1VmJONcDg7CeYJUUsP0t7oJqcdfMLJxjhiAz4LQwahDRqEWFddZcNFEleSDXkvbGpkBnEwEeqLdRzkMMjys5Ojr0JpnFbw3hve0nefJJQNk5F%2BrqvMMA8tp3dAVhFfx2dC8bDxxMHnhjwEJgsP%2BH4B0Gx%2Fe3MzyDK3naxi%2FsWUZZQbZlY9DiGI4IgfHHsZ9LNjoR7DeVsZHwalNO3hONYCjHK%2FGejKJe4ROU83b4NjnEuBmdG8mAWwYEXd9aNgP%2FEThBnTDD88PJBjqkAVr184bgx5cOlfzUJ767PC6r6IaLdLE6vfYrK7jysiEWQedzGKdg8JNH%2FQnnmmzJpvu9yNUQWTVxqbxqdv8AMcgsS6Dkf36l%2BX4tGwsprDEt9fRKRzI4bBYYbDlAZIcbIMj3dEPeEBmn70mPXHSGr%2B1nk4NSFV9HNqwCoMtCl4dUa%2ByBIZMypNX1DLeybGJHp%2F52YR4R2%2FwqywqQbdgrNpDwurWu&X-Amz-Signature=8db0c494a5f9e8a97a6dd840044c3ea32e8a2095c8f26db74a6041628b63de8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X4EFISK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCg7kU9B75niUpETgwGplc%2FAJ2SrLz3XJAFE78Yhn%2B3iwIhAI6EzxvNY8Ff1Fk1qi5xcVpAiaId%2F96CuLejuETypBc%2BKv8DCDwQABoMNjM3NDIzMTgzODA1IgyDGkYSnbcckjPufWAq3AOZgRpVuabF0MD6au4r8IBa4DvQ3C1eMVxBOYgrBSKunwHeNiRQ2SDYtGoVMtcwsvhmnCvbwHmCcLX6Fudlqo2Z2UREWP%2Ffrg5HSFK%2Bon3GPES9x7A1n9P6LDNSPmZ8tgO53gafKkfqfgLaC8BxrOOxqvQw6WAuMWwLrZERbz%2ByEfODJ4HME5NNHraFsO9hQucs8cNVvKnyHhBSunq2zi1nb6mdhF2qW%2B6BWfbtg7uUre6YJ3d671hwviDNybjNRC7UQyMtI%2BF7S7D6K3Y1r7P54wccWk3mn6gTScH8054m5OkQ7kfIDP2oNWNNNhKZzpliCBZc6YnL8uHCUEyUM0Hl8pciHEqy1Oxmv2IHFjBhwvwBrjZRbwLX1VmJONcDg7CeYJUUsP0t7oJqcdfMLJxjhiAz4LQwahDRqEWFddZcNFEleSDXkvbGpkBnEwEeqLdRzkMMjys5Ojr0JpnFbw3hve0nefJJQNk5F%2BrqvMMA8tp3dAVhFfx2dC8bDxxMHnhjwEJgsP%2BH4B0Gx%2Fe3MzyDK3naxi%2FsWUZZQbZlY9DiGI4IgfHHsZ9LNjoR7DeVsZHwalNO3hONYCjHK%2FGejKJe4ROU83b4NjnEuBmdG8mAWwYEXd9aNgP%2FEThBnTDD88PJBjqkAVr184bgx5cOlfzUJ767PC6r6IaLdLE6vfYrK7jysiEWQedzGKdg8JNH%2FQnnmmzJpvu9yNUQWTVxqbxqdv8AMcgsS6Dkf36l%2BX4tGwsprDEt9fRKRzI4bBYYbDlAZIcbIMj3dEPeEBmn70mPXHSGr%2B1nk4NSFV9HNqwCoMtCl4dUa%2ByBIZMypNX1DLeybGJHp%2F52YR4R2%2FwqywqQbdgrNpDwurWu&X-Amz-Signature=25bea6eb97cc5996b38c4fec6fc102519f1eb712cfc5cdcb258465e751b0b519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

