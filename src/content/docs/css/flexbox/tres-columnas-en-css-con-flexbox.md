---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674MW4LHS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCtVv%2FijLuNtyPJwMpZPHPW5U0t32qEnscUibViDEH5%2BwIhAKbqvRcuuj23ZodVAJILSDPA%2BYNhgqaB35kRCkX%2FthZ7Kv8DCDgQABoMNjM3NDIzMTgzODA1IgwoD5pzF4Czc16MRK0q3ANjwHukd%2BkDJoHQzTD0%2BdU7nRTJOukS46j8VNoheFYkQrvmjNPVDidy9IWMxWWtNjL7A5W6UsvPOoTR4UNKoyz8y%2FDR2ykttMC0Nw4cx2MF9lZ%2FnA%2BDtYjuR9bl%2BSxOyZQyzwVGitzvge2%2F2yaYnJcJCzLwHlS0gl11at3uFQsupiiQdkQ1cll2MUEvtf%2FEua72q12bW7JjUDAcPtIXCBtufIMjhW23zMyef2nKerXNOK2%2FK5JLyKZMXJfC7rJ%2FFW1op8uEXTLg1DviBM6Quf1oj%2Ff1nbpvppadF%2Bt6Q2qvpaG9m%2Fk1b54FqkAjvO1PprxIBI1l53iIvpe11ktAPB3%2FxdMOk%2BdUS0XYe9Bi3n%2FK71C24UWq%2FlE%2FiuNrJsbZL3D56XCNskXJbKcnJgO%2BHnGKZOeSg054bxbzjebsYDha3eowqkMvsf%2FjgNljj1mZCjQp0t%2BncTxOQJA0AJgXHWoiHjwUvIn1c8nFp8wbNy4lvdNUKxUo2EsmhX7qpoL6ToJaYeEr1h5WKIJzN3MmEvY1%2FDg8HVuB55svcrRCusSFrSZp5uhlj57SfqOagbmvC7LElTNJKtDTxkRkw%2FCTK12AjAyCV%2FyiKFC5H5J4Av90%2FIOPA5K%2FOnFGP%2FPK%2BTDh98LJBjqkAcuTMty2NKt581TNeYDIzeaA4HXQBb10P4NGjvNPoDTyZqtD0Kac%2FLOVC7Zx5LE9kBFVzbFgvffye0w23CXC906qJe1%2BXTDjOoU9tsDh8yfJlvycAcxh8BkX0CioeJdGfAAARchZXN2NFzTXtnKhe9KylkgR2ieFvoU9KN854LcZW7NIzs1fatKHlriKFiy9nglEmeDuIU9rGrpY1D8VWVBOprV9&X-Amz-Signature=84aebf815d8e739f460a770214943cf9922886d55e755e31e3eb75a901f64aec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674MW4LHS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCtVv%2FijLuNtyPJwMpZPHPW5U0t32qEnscUibViDEH5%2BwIhAKbqvRcuuj23ZodVAJILSDPA%2BYNhgqaB35kRCkX%2FthZ7Kv8DCDgQABoMNjM3NDIzMTgzODA1IgwoD5pzF4Czc16MRK0q3ANjwHukd%2BkDJoHQzTD0%2BdU7nRTJOukS46j8VNoheFYkQrvmjNPVDidy9IWMxWWtNjL7A5W6UsvPOoTR4UNKoyz8y%2FDR2ykttMC0Nw4cx2MF9lZ%2FnA%2BDtYjuR9bl%2BSxOyZQyzwVGitzvge2%2F2yaYnJcJCzLwHlS0gl11at3uFQsupiiQdkQ1cll2MUEvtf%2FEua72q12bW7JjUDAcPtIXCBtufIMjhW23zMyef2nKerXNOK2%2FK5JLyKZMXJfC7rJ%2FFW1op8uEXTLg1DviBM6Quf1oj%2Ff1nbpvppadF%2Bt6Q2qvpaG9m%2Fk1b54FqkAjvO1PprxIBI1l53iIvpe11ktAPB3%2FxdMOk%2BdUS0XYe9Bi3n%2FK71C24UWq%2FlE%2FiuNrJsbZL3D56XCNskXJbKcnJgO%2BHnGKZOeSg054bxbzjebsYDha3eowqkMvsf%2FjgNljj1mZCjQp0t%2BncTxOQJA0AJgXHWoiHjwUvIn1c8nFp8wbNy4lvdNUKxUo2EsmhX7qpoL6ToJaYeEr1h5WKIJzN3MmEvY1%2FDg8HVuB55svcrRCusSFrSZp5uhlj57SfqOagbmvC7LElTNJKtDTxkRkw%2FCTK12AjAyCV%2FyiKFC5H5J4Av90%2FIOPA5K%2FOnFGP%2FPK%2BTDh98LJBjqkAcuTMty2NKt581TNeYDIzeaA4HXQBb10P4NGjvNPoDTyZqtD0Kac%2FLOVC7Zx5LE9kBFVzbFgvffye0w23CXC906qJe1%2BXTDjOoU9tsDh8yfJlvycAcxh8BkX0CioeJdGfAAARchZXN2NFzTXtnKhe9KylkgR2ieFvoU9KN854LcZW7NIzs1fatKHlriKFiy9nglEmeDuIU9rGrpY1D8VWVBOprV9&X-Amz-Signature=f0905137e8f343b7779c873aa44b3a18f49434434aa7b17f1a8f3f3e878d915d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

