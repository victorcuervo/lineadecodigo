---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ES66AJ5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T195949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8l3vZr4m7mEbafYGDV78u58fGKrmafDP3SBGDfHue3AIhANYWmmT%2BHxCvB%2BOhCudYqXUrdIiHw5q434UY6ZcWEl%2BwKv8DCGUQABoMNjM3NDIzMTgzODA1IgxYhYxULSKPAq8jaf4q3AOmvoKYbQkHG51odiNc2AV4vu3iUO3DVERaIs6qSoOwRoCR3TAA7tehusYwraejRrTWX1DX6AxI8M8lic7nLpd7yEbcv2uKGfV25S4FWUUFlaFWfd%2Fldj4c31Kyf1%2BXUkEQgnX80ZSy1%2Bde24XDLaG5I7VR%2BF5EHTrHZPBkCuFvwmipTSBTmB6RJtnRBKt%2Bz7vs%2BQljnK0Xh8z5xD2Pzwoe07TOZUFqFqD%2FWMhPF1oWoF%2BD7PrGCAK%2BW%2BfHwMM75FVwzj%2FQh7JmmOZYklsGiiSTB9C9oI4dEDXx7mUEthCh4ECATUxIyLlDK1TIQw5gxvdWxLN5274XTn6Yx3VcofSzT%2FAAkSNZ50xCVKg0fKrRlqSW%2BIxnW4QmW74SpTc5SwXb3E4jh0%2Bfw4nyrCSvOq%2B55PXWZp4MhXzLwXhNX6o9LIukcjep5lYDCGexWNxyWHMmuh8zpl5cyJVugWKqymOJLeuFxrfWHqFvuchXYymQmJ%2FND1jNcS5OHBpggxTMRXsqPa0rz1SfS5q%2FS%2BgPhQ%2B%2F%2Fm%2FDLC1Dj4ykyRBLo4oL%2FnO5%2BzL020GbeK6My79llSKciUfDiKZSJ5Sy7htwbdUT1Kc84TEXWkzStDmq9ImBOfmR4YffIteRkPN9BjC07czJBjqkAXkH%2FLGjdprnezksFcbwnPJa29JX9ILD0Fk6LT5RV7otCWELA9Q9AmtFEMhXGmtJR51s21J3RW9Y2px64BVRT5CvTr3jrMYulhjNFqC4XrksqgnfhbESoJPG5Ams0GiNWbyAOFLaQjf00tYGgESa70RiYfpObL9tvITMS%2F0Ne0wE7wmrm6LIKbVowvrIlhbjx6AKjt%2Bo1E5uLzfdaQBwcF53wPTG&X-Amz-Signature=f8e8e0d5306561a7920dd38206fcf09c62a4d784aab5654d91163af9ddb27cc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ES66AJ5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T195949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8l3vZr4m7mEbafYGDV78u58fGKrmafDP3SBGDfHue3AIhANYWmmT%2BHxCvB%2BOhCudYqXUrdIiHw5q434UY6ZcWEl%2BwKv8DCGUQABoMNjM3NDIzMTgzODA1IgxYhYxULSKPAq8jaf4q3AOmvoKYbQkHG51odiNc2AV4vu3iUO3DVERaIs6qSoOwRoCR3TAA7tehusYwraejRrTWX1DX6AxI8M8lic7nLpd7yEbcv2uKGfV25S4FWUUFlaFWfd%2Fldj4c31Kyf1%2BXUkEQgnX80ZSy1%2Bde24XDLaG5I7VR%2BF5EHTrHZPBkCuFvwmipTSBTmB6RJtnRBKt%2Bz7vs%2BQljnK0Xh8z5xD2Pzwoe07TOZUFqFqD%2FWMhPF1oWoF%2BD7PrGCAK%2BW%2BfHwMM75FVwzj%2FQh7JmmOZYklsGiiSTB9C9oI4dEDXx7mUEthCh4ECATUxIyLlDK1TIQw5gxvdWxLN5274XTn6Yx3VcofSzT%2FAAkSNZ50xCVKg0fKrRlqSW%2BIxnW4QmW74SpTc5SwXb3E4jh0%2Bfw4nyrCSvOq%2B55PXWZp4MhXzLwXhNX6o9LIukcjep5lYDCGexWNxyWHMmuh8zpl5cyJVugWKqymOJLeuFxrfWHqFvuchXYymQmJ%2FND1jNcS5OHBpggxTMRXsqPa0rz1SfS5q%2FS%2BgPhQ%2B%2F%2Fm%2FDLC1Dj4ykyRBLo4oL%2FnO5%2BzL020GbeK6My79llSKciUfDiKZSJ5Sy7htwbdUT1Kc84TEXWkzStDmq9ImBOfmR4YffIteRkPN9BjC07czJBjqkAXkH%2FLGjdprnezksFcbwnPJa29JX9ILD0Fk6LT5RV7otCWELA9Q9AmtFEMhXGmtJR51s21J3RW9Y2px64BVRT5CvTr3jrMYulhjNFqC4XrksqgnfhbESoJPG5Ams0GiNWbyAOFLaQjf00tYGgESa70RiYfpObL9tvITMS%2F0Ne0wE7wmrm6LIKbVowvrIlhbjx6AKjt%2Bo1E5uLzfdaQBwcF53wPTG&X-Amz-Signature=748594a7c309196cae63fcb61da6c6637a8122930eeca1148f22a02551b657db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

