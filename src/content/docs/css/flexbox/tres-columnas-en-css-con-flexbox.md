---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQREURY4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T060646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMsFjEMHcZrr%2FiQv79UX%2FAq%2B1grQLIDfXQsrQygYjbZQIhAKSKXb4iQEDsejaK2puFaul0sUdeiBMimn2zfWicHQQ0KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJIDzVrN5NYlVK3tQq3AM%2FOvNtRdeD9VGNef%2Bi2zABjLzXSmRaliTrHd2QoxjgIxUK8e%2Fzj0IFlZEkyuujl18513PmO7N52rADbi%2BImBtIVJGsuxx%2BQ2EKuLRKzirWsPcKY9YwvnL%2FpojT6vnm0TjbCSvqxtgMKi3J%2FF0LTEu5drBt8JAByQac1215ySP0SEAm8PBsM34HVQDRbGPJsYZaaTQ5eG2LgoJ8zgKU%2BeuYNZwh2JD1NbpN%2FMNlxZjws0H7cNiF%2BlVtvcyz7eJbdxounaFmXb97SffSY222aSvqzVi2Aw3LGA1hlaFNjjqPOSGIuHslgwQnm8RszIpeOiIXKMkv2V4CKQLsbDCE3gHmirFbRS6tY98x8hXxIFM7%2Biofd5UyhPy0vTrRleNMXKh%2FJcteSB94QujFt7zjOhZqBI8aMww87XURyOh%2FMBpbRUVVqKhrfZHnmWLEJcz8eUSH93aPhRazy4PhjF%2FRX76Paasdj1pGzYEbT4iVHK9SO0rXEfncwjCBsi8X68dsdI2HCEIG6BPogzM3WXByePThPfj1AcZIIJr%2FHdSlXwz9zJQFF5Zr9P95fG977v7kTt5YQZXgY05xh07%2Fv4OfFAvf6JEndWlgeUIE535virMhY58x3jnZb2isQUrl4TCjmtTJBjqkAQe7WwXOvdHHg24MY5sjH4grFOwT58ek6fqJ1QFuPFEmY96obkXFjanWFurQis87%2B3o2Bnsxmorln6OzUHwpDYh0KvJrbcNI9xtj3OX0FbYCiFpRpN1%2BfoBPA8GqW%2B0LsxRaqipYir9s1tugvSyiPlwN1%2BhLeSSltHI3iC2Gcgzc%2FBA4yymlIjAqaISHkY3rLiTvQHCc3tJekh2C4dYGM%2F2Nip6T&X-Amz-Signature=59b0b87f50f5cf8d5cf87e3101e7178bae79f7cf8fc7f1386efa56177c1d93c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQREURY4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T060646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMsFjEMHcZrr%2FiQv79UX%2FAq%2B1grQLIDfXQsrQygYjbZQIhAKSKXb4iQEDsejaK2puFaul0sUdeiBMimn2zfWicHQQ0KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJIDzVrN5NYlVK3tQq3AM%2FOvNtRdeD9VGNef%2Bi2zABjLzXSmRaliTrHd2QoxjgIxUK8e%2Fzj0IFlZEkyuujl18513PmO7N52rADbi%2BImBtIVJGsuxx%2BQ2EKuLRKzirWsPcKY9YwvnL%2FpojT6vnm0TjbCSvqxtgMKi3J%2FF0LTEu5drBt8JAByQac1215ySP0SEAm8PBsM34HVQDRbGPJsYZaaTQ5eG2LgoJ8zgKU%2BeuYNZwh2JD1NbpN%2FMNlxZjws0H7cNiF%2BlVtvcyz7eJbdxounaFmXb97SffSY222aSvqzVi2Aw3LGA1hlaFNjjqPOSGIuHslgwQnm8RszIpeOiIXKMkv2V4CKQLsbDCE3gHmirFbRS6tY98x8hXxIFM7%2Biofd5UyhPy0vTrRleNMXKh%2FJcteSB94QujFt7zjOhZqBI8aMww87XURyOh%2FMBpbRUVVqKhrfZHnmWLEJcz8eUSH93aPhRazy4PhjF%2FRX76Paasdj1pGzYEbT4iVHK9SO0rXEfncwjCBsi8X68dsdI2HCEIG6BPogzM3WXByePThPfj1AcZIIJr%2FHdSlXwz9zJQFF5Zr9P95fG977v7kTt5YQZXgY05xh07%2Fv4OfFAvf6JEndWlgeUIE535virMhY58x3jnZb2isQUrl4TCjmtTJBjqkAQe7WwXOvdHHg24MY5sjH4grFOwT58ek6fqJ1QFuPFEmY96obkXFjanWFurQis87%2B3o2Bnsxmorln6OzUHwpDYh0KvJrbcNI9xtj3OX0FbYCiFpRpN1%2BfoBPA8GqW%2B0LsxRaqipYir9s1tugvSyiPlwN1%2BhLeSSltHI3iC2Gcgzc%2FBA4yymlIjAqaISHkY3rLiTvQHCc3tJekh2C4dYGM%2F2Nip6T&X-Amz-Signature=692e273d7b2696d828fb6c96dd572718c8cc2cc5c0fcaddf988f77eb3d3456b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

